import { CONCURSO } from '../content/concurso'
import type { DisciplinaId } from '../content/types'
import { getDB } from './db'
import type { Leitura, Nota, Settings, Simulado, Tentativa, TipoNota } from './types'

export const DEFAULT_SETTINGS: Settings = { dataProva: CONCURSO.dataProva, nome: '' }

function novoId(): string {
  return crypto.randomUUID()
}

export interface Workspace {
  tentativas: Tentativa[]
  notas: Nota[]
  leituras: Leitura[]
  simulados: Simulado[]
  settings: Settings
}

/** App de uma pessoa so: o volume e pequeno, entao carrega tudo na memoria ao abrir. */
export async function carregarTudo(): Promise<Workspace> {
  const db = await getDB()
  const [tentativas, notas, leituras, simulados, stored] = await Promise.all([
    db.getAll('tentativas'),
    db.getAll('notas'),
    db.getAll('leituras'),
    db.getAll('simulados'),
    db.get('settings', 'app') as Promise<Partial<Settings> | undefined>,
  ])
  return { tentativas, notas, leituras, simulados, settings: { ...DEFAULT_SETTINGS, ...stored } }
}

export async function salvarSettings(settings: Settings): Promise<void> {
  await (await getDB()).put('settings', settings, 'app')
}

export interface RespostaInput {
  questaoId: string
  topicoId: string
  disciplina: DisciplinaId
  escolhida: number
  elapsedMs: number
  modo: Tentativa['modo']
  simuladoId?: string
}

/**
 * Grava as respostas numa unica transacao. As leituras assincronas (contagem de tentativas
 * anteriores) acontecem ANTES de abrir a transacao: dar await em algo que nao seja request IDB
 * com transacao aberta faz ela commitar sozinha ("The transaction has finished." — falha de
 * forma confiavel em CPU mobile). Gotcha herdado do DuoMath.
 */
export async function registrarRespostas(respostas: RespostaInput[]): Promise<Tentativa[]> {
  const db = await getDB()
  const anteriores = await Promise.all(respostas.map((r) => db.countFromIndex('tentativas', 'questaoId', r.questaoId)))

  // a mesma questao pode aparecer duas vezes no lote? nao no fluxo atual, mas conta certo mesmo assim
  const vistas = new Map<string, number>()
  const agora = new Date().toISOString()
  const tentativas: Tentativa[] = respostas.map((r, i) => {
    const extra = vistas.get(r.questaoId) ?? 0
    vistas.set(r.questaoId, extra + 1)
    return {
      id: novoId(),
      questaoId: r.questaoId,
      topicoId: r.topicoId,
      disciplina: r.disciplina,
      correta: r.escolhida === 0,
      escolhida: r.escolhida,
      tentativaN: anteriores[i] + extra + 1,
      elapsedMs: r.elapsedMs,
      respondidaEm: agora,
      modo: r.modo,
      simuladoId: r.simuladoId,
    }
  })

  const tx = db.transaction('tentativas', 'readwrite')
  for (const t of tentativas) tx.store.put(t)
  await tx.done
  return tentativas
}

export async function salvarSimulado(simulado: Simulado): Promise<void> {
  await (await getDB()).put('simulados', simulado)
}

export async function marcarLeitura(topicoId: string, lida: boolean): Promise<Leitura | null> {
  const db = await getDB()
  if (!lida) {
    await db.delete('leituras', topicoId)
    return null
  }
  const leitura: Leitura = { topicoId, lidaEm: new Date().toISOString() }
  await db.put('leituras', leitura)
  return leitura
}

export async function criarNota(input: { topicoId: string; tipo: TipoNota; texto: string; referencia?: string }): Promise<Nota> {
  const agora = new Date().toISOString()
  const nota: Nota = {
    id: novoId(),
    topicoId: input.topicoId,
    tipo: input.tipo,
    texto: input.texto.trim(),
    referencia: input.referencia?.trim() || undefined,
    resolvida: input.tipo === 'pendencia' ? false : undefined,
    resolvidaEm: null,
    criadaEm: agora,
    atualizadaEm: agora,
  }
  await (await getDB()).put('notas', nota)
  return nota
}

export async function atualizarNota(nota: Nota, patch: Partial<Pick<Nota, 'texto' | 'referencia' | 'resolvida'>>): Promise<Nota> {
  const agora = new Date().toISOString()
  const proxima: Nota = { ...nota, ...patch, atualizadaEm: agora }
  if (patch.resolvida !== undefined) proxima.resolvidaEm = patch.resolvida ? agora : null
  await (await getDB()).put('notas', proxima)
  return proxima
}

export async function removerNota(id: string): Promise<void> {
  await (await getDB()).delete('notas', id)
}

/** Apaga TUDO (progresso, notas, simulados). Usado so na tela de dados, com confirmacao. */
export async function apagarTudo(): Promise<void> {
  const db = await getDB()
  const tx = db.transaction(['tentativas', 'notas', 'leituras', 'simulados', 'settings'], 'readwrite')
  await Promise.all([
    tx.objectStore('tentativas').clear(),
    tx.objectStore('notas').clear(),
    tx.objectStore('leituras').clear(),
    tx.objectStore('simulados').clear(),
    tx.objectStore('settings').clear(),
    tx.done,
  ])
}
