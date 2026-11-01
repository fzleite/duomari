import { Link } from 'react-router-dom'

import { RecompensaCard, SaldoCarinhoso } from '../components/Carinho'
import { topico } from '../content'
import { CONCURSO } from '../content/concurso'
import { textoResumo } from '../content/carinho'
import { diasAte, motivoResumo, saldo, topicosConcluidos } from '../data/metrics'
import { useApp } from '../state/store'

function nomeFase(faseId: string): string {
  if (faseId.startsWith('topico:')) {
    const t = topico(faseId.slice(7))
    return t ? `${t.id} · ${t.titulo}` : faseId
  }
  return 'Simulado da prova'
}

/** Saldo, resumo especial (quando liberado) e historico das mensagens ganhas. */
export function Recompensas() {
  const { recompensas, settings } = useApp()
  const s = saldo(recompensas)
  const motivo = motivoResumo(recompensas, settings.dataProva)
  const historico = [...recompensas].sort((a, b) => b.criadaEm.localeCompare(a.criadaEm))
  const faltam = diasAte(settings.dataProva)

  return (
    <main className="screen screen-texto">
      <h1>Recompensas do Fernando</h1>
      <SaldoCarinhoso />

      {motivo ? (
        <section className="resumo-especial">
          <h2>{motivo === 'trilha' ? 'Trilha completa!' : motivo === 'vespera' ? 'Véspera da prova' : 'Dia da prova'}</h2>
          <p>{textoResumo(motivo, s.beijos, s.abracos, s.tempos)}</p>
        </section>
      ) : (
        <p className="muted small">
          Um resumo especial aparece aqui ao completar a trilha ({topicosConcluidos(recompensas)}/54 tópicos praticados) ou na véspera da prova
          {faltam > 1 ? ` (faltam ${faltam} dias)` : ''}. Prova prevista para 13/12, às {CONCURSO.horario}.
        </p>
      )}

      <h2>Mensagens que você ganhou</h2>
      {historico.length === 0 && <p className="muted">Ainda nenhuma. Conclua a prática de um tópico para ganhar a primeira.</p>}
      {historico.map((r) => (
        <div key={r.id} className="historico-item">
          <p className="muted small">
            {new Date(r.criadaEm).toLocaleDateString('pt-BR')} · {nomeFase(r.faseId)} · {Math.round(r.pct * 100)}%
          </p>
          <RecompensaCard recompensa={r} />
        </div>
      ))}
      <Link to="/" className="btn btn-ghost">
        Voltar ao painel
      </Link>
    </main>
  )
}
