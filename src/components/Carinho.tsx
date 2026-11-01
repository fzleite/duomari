import { Link } from 'react-router-dom'

import { ICONE_RECOMPENSA, ROTULO_RECOMPENSA } from '../content/carinho'
import { saldo } from '../data/metrics'
import type { Recompensa } from '../data/types'
import { useApp } from '../state/store'

/** Cartao mostrado ao fim de cada fase: mensagem do Fernando + recompensa ganha. */
export function RecompensaCard({ recompensa }: { recompensa: Recompensa }) {
  return (
    <section className="recompensa" aria-live="polite">
      <div className="recompensa-icone" aria-hidden>
        {ICONE_RECOMPENSA[recompensa.tipo]}
      </div>
      <p className="recompensa-rotulo">Você ganhou: {ROTULO_RECOMPENSA[recompensa.tipo]}</p>
      <p className="recompensa-msg">“{recompensa.mensagem}”</p>
      <p className="recompensa-assina">— Fernando</p>
    </section>
  )
}

/** Painel de saldo carinhoso: os tres acumuladores, ao lado da pontuacao normal. */
export function SaldoCarinhoso() {
  const recompensas = useApp((s) => s.recompensas)
  const s = saldo(recompensas)
  return (
    <section className="saldo" aria-label="Saldo carinhoso">
      <h2>Saldo carinhoso</h2>
      <div className="saldo-itens">
        <div>
          <span aria-hidden>💋</span>
          <strong>{s.beijos}</strong>
          <small>{s.beijos === 1 ? 'beijo' : 'beijos'}</small>
        </div>
        <div>
          <span aria-hidden>🤗</span>
          <strong>{s.abracos}</strong>
          <small>{s.abracos === 1 ? 'abraço apertado' : 'abraços apertados'}</small>
        </div>
        <div>
          <span aria-hidden>☕</span>
          <strong>{s.tempos}</strong>
          <small>{s.tempos === 1 ? 'tempo de qualidade' : 'tempos de qualidade'}</small>
        </div>
      </div>
      {s.fases === 0 ? (
        <p className="muted small">Cada fase concluída (prática de um tópico ou simulado) vale uma recompensa do Fernando.</p>
      ) : (
        <Link to="/recompensas" className="link-quiet small">
          Ver as mensagens que você já ganhou →
        </Link>
      )}
    </section>
  )
}
