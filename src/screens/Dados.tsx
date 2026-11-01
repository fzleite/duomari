import { useRef, useState } from 'react'

import { CONCURSO } from '../content/concurso'
import { compartilharOuBaixar, exportarTudo, importarBackup } from '../data/backup'
import { apagarTudo } from '../data/repo'
import { useApp } from '../state/store'

/** Backup (exportar/importar JSON), configuracoes e apagar dados. Nada sai do aparelho sem acao dela. */
export function Dados() {
  const { settings, mudarSettings, init, tentativas, notas, leituras, simulados } = useApp()
  const [status, setStatus] = useState<string | null>(null)
  const [modo, setModo] = useState<'substituir' | 'mesclar'>('substituir')
  const arquivo = useRef<HTMLInputElement>(null)

  const exportar = async () => {
    const r = await compartilharOuBaixar(await exportarTudo())
    setStatus(r === 'cancelado' ? 'Exportação cancelada.' : r === 'compartilhado' ? 'Backup compartilhado.' : 'Backup baixado.')
  }

  const importar = async (file: File) => {
    try {
      if (modo === 'substituir' && !confirm('Substituir TODOS os dados deste aparelho pelos do backup?')) return
      const r = await importarBackup(file, modo)
      await init()
      setStatus(`Importado: ${r.tentativas} respostas, ${r.notas} notas, ${r.leituras} tópicos estudados, ${r.simulados} simulados.`)
    } catch (e) {
      setStatus(e instanceof Error ? e.message : 'Não foi possível importar este arquivo.')
    } finally {
      if (arquivo.current) arquivo.current.value = ''
    }
  }

  return (
    <main className="screen">
      <h1>Backup e configurações</h1>

      <section className="card">
        <h2>Seus dados</h2>
        <p className="muted small">
          Tudo fica salvo só neste aparelho (nada é enviado a servidor). Hoje: {tentativas.length} respostas, {notas.length} notas, {leituras.length}{' '}
          tópicos estudados, {simulados.length} simulados.
        </p>
        <p>
          <strong>Faça backup com frequência</strong> — principalmente antes de trocar de celular ou limpar dados do navegador.
        </p>
        <button type="button" className="btn btn-primary" onClick={exportar}>
          Exportar backup (JSON)
        </button>
      </section>

      <section className="card">
        <h2>Importar backup</h2>
        <div className="seg" role="radiogroup" aria-label="Modo de importação">
          <button type="button" role="radio" aria-checked={modo === 'substituir'} className={`seg-btn ${modo === 'substituir' ? 'seg-on' : ''}`} onClick={() => setModo('substituir')}>
            Substituir tudo
          </button>
          <button type="button" role="radio" aria-checked={modo === 'mesclar'} className={`seg-btn ${modo === 'mesclar' ? 'seg-on' : ''}`} onClick={() => setModo('mesclar')}>
            Mesclar
          </button>
        </div>
        <p className="muted small">
          {modo === 'substituir' ? 'Para celular novo: apaga o que há aqui e restaura o backup.' : 'Junta o backup com os dados deste aparelho.'}
        </p>
        <input ref={arquivo} type="file" accept="application/json,.json" onChange={(e) => e.target.files?.[0] && void importar(e.target.files[0])} />
      </section>

      {status && (
        <p className="aviso" role="status">
          {status}
        </p>
      )}

      <section className="card">
        <h2>Configurações</h2>
        <label className="campo">
          Seu nome (aparece no painel)
          <input value={settings.nome} onChange={(e) => void mudarSettings({ nome: e.target.value })} />
        </label>
        <label className="campo">
          Data da prova
          <input type="date" value={settings.dataProva} onChange={(e) => e.target.value && void mudarSettings({ dataProva: e.target.value })} />
        </label>
        <p className="muted small">
          Data prevista no edital: 13/12/2026 às {CONCURSO.horario}. A confirmação sai no Edital de Convocação (publiconsult.com.br e Diário Oficial de
          Mogi Guaçu) — ajuste aqui se mudar.
        </p>
      </section>

      <section className="card">
        <h2>Apagar tudo</h2>
        <p className="muted small">Remove respostas, notas, simulados e configurações deste aparelho. Exporte um backup antes.</p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={async () => {
            if (!confirm('Apagar TODOS os dados do DuoMari neste aparelho?')) return
            if (!confirm('Tem certeza? Esta ação não pode ser desfeita.')) return
            await apagarTudo()
            await init()
            setStatus('Dados apagados.')
          }}
        >
          Apagar todos os dados
        </button>
      </section>
    </main>
  )
}
