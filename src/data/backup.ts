import { getDB } from './db'
import { carregarTudo } from './repo'
import type { BackupFile, Leitura, Nota, Recompensa, Simulado, Tentativa } from './types'

export const BACKUP_VERSION = 1

/**
 * O backup e um JSON unico com tudo: e o jeito de nao perder notas e progresso ao trocar de
 * celular (nao ha servidor). Convencao ao evoluir o formato: todo campo novo entra opcional e e
 * lido com fallback vazio, para que um backup antigo continue restaurando.
 */
export async function exportarTudo(): Promise<BackupFile> {
  const w = await carregarTudo()
  return {
    format: 'duomari-backup',
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    tentativas: w.tentativas,
    notas: w.notas,
    leituras: w.leituras,
    simulados: w.simulados,
    recompensas: w.recompensas,
    settings: w.settings,
  }
}

export function nomeArquivoBackup(now = new Date()): string {
  const stamp = now.toISOString().slice(0, 16).replace(/[:T]/g, '-')
  return `duomari-backup-${stamp}.json`
}

/**
 * Tenta o compartilhamento do sistema (manda direto para Drive/e-mail/WhatsApp) e cai para o
 * download simples. navigator.share() pode falhar com NotAllowedError mesmo sem o usuario negar:
 * a API so vale na janela curta de ativacao do clique. Qualquer erro que nao seja AbortError vira
 * fallback (gotcha herdado do DuoMath).
 */
export async function compartilharOuBaixar(backup: BackupFile): Promise<'compartilhado' | 'baixado' | 'cancelado'> {
  const nome = nomeArquivoBackup()
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' })
  const file = new File([blob], nome, { type: 'application/json' })

  if (navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: 'Backup do DuoMari' })
      return 'compartilhado'
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return 'cancelado'
    }
  }

  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = nome
  a.click()
  URL.revokeObjectURL(url)
  return 'baixado'
}

function validarBackup(data: unknown): BackupFile {
  const c = data as Partial<BackupFile>
  if (!c || c.format !== 'duomari-backup') throw new Error('Este arquivo não parece um backup do DuoMari.')
  if (typeof c.version !== 'number' || c.version > BACKUP_VERSION) {
    throw new Error('Este backup foi gerado por uma versão mais nova do DuoMari. Atualize o app.')
  }
  return {
    format: 'duomari-backup',
    version: c.version,
    exportedAt: c.exportedAt ?? new Date().toISOString(),
    tentativas: (c.tentativas ?? []) as Tentativa[],
    notas: (c.notas ?? []) as Nota[],
    leituras: (c.leituras ?? []) as Leitura[],
    simulados: (c.simulados ?? []) as Simulado[],
    recompensas: (c.recompensas ?? []) as Recompensa[],
    settings: c.settings ?? {},
  }
}

export interface ResultadoImportacao {
  tentativas: number
  notas: number
  leituras: number
  simulados: number
  recompensas: number
}

/**
 * `substituir` limpa tudo antes (restaurar backup inteiro, ex.: celular novo);
 * `mesclar` sobrescreve por id e mantem o resto (juntar dois aparelhos).
 *
 * O arquivo e lido e parseado ANTES de abrir a transacao — file.text() nao e request IDB e
 * fecharia a transacao no meio.
 */
export async function importarBackup(file: File, modo: 'substituir' | 'mesclar'): Promise<ResultadoImportacao> {
  const backup = validarBackup(JSON.parse(await file.text()))
  const atual = (await carregarTudo()).settings
  const db = await getDB()

  const recompensas = backup.recompensas ?? []
  const tx = db.transaction(['tentativas', 'notas', 'leituras', 'simulados', 'recompensas', 'settings'], 'readwrite')
  if (modo === 'substituir') {
    tx.objectStore('tentativas').clear()
    tx.objectStore('notas').clear()
    tx.objectStore('leituras').clear()
    tx.objectStore('simulados').clear()
    tx.objectStore('recompensas').clear()
  }
  for (const t of backup.tentativas) tx.objectStore('tentativas').put(t)
  for (const n of backup.notas) tx.objectStore('notas').put(n)
  for (const l of backup.leituras) tx.objectStore('leituras').put(l)
  for (const s of backup.simulados) tx.objectStore('simulados').put(s)
  for (const r of recompensas) tx.objectStore('recompensas').put(r)
  tx.objectStore('settings').put({ ...atual, ...backup.settings }, 'app')
  await tx.done

  return {
    tentativas: backup.tentativas.length,
    notas: backup.notas.length,
    leituras: backup.leituras.length,
    simulados: backup.simulados.length,
    recompensas: recompensas.length,
  }
}
