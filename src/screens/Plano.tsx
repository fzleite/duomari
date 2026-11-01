import { Link } from 'react-router-dom'

import { topicosDaSemana } from '../content'
import { CONCURSO, DISCIPLINAS, SEMANAS, disciplina } from '../content/concurso'
import { semanaAtual, statsTopico } from '../data/metrics'
import { useApp } from '../state/store'

function br(iso: string): string {
  const [, m, d] = iso.split('-')
  return `${d}/${m}`
}

/**
 * Plano validado: 2h/dia, 02/11 a 10/12. E um guia, nao uma trava: todos os topicos ficam
 * liberados (ela e experiente e acelera conforme precisar).
 */
export function Plano() {
  const { tentativas, leituras } = useApp()
  const atual = semanaAtual()

  return (
    <main className="screen">
      <h1>Plano de estudo</h1>
      <p>
        <strong>2 horas por dia</strong>, de {br(CONCURSO.inicioPlano)} a {br(CONCURSO.dataLimitePlano)} (78 h). De segunda a sábado:{' '}
        <strong>1 h de Geografia + 1 h de uma disciplina de apoio</strong>. Domingo: simulado ou revisão das pendências. Os dias 11 e 12/12 ficam
        para descanso e revisão leve. Todos os tópicos estão liberados: o plano é guia, não trava.
      </p>
      <p className="muted small">Horas por bloco: Geografia 34 h · Português 14 h · Pedagógicos 12 h · Legislação 8 h · simulados e revisão 10 h.</p>

      {SEMANAS.map((s) => {
        const topicos = topicosDaSemana(s.numero)
        const cobertos = topicos.filter((t) => statsTopico(t, tentativas, leituras).status === 'coberto').length
        return (
          <section key={s.numero} className={`card ${atual === s.numero ? 'card-atual' : ''}`}>
            <h2>
              Semana {s.numero} · {br(s.inicio)} a {br(s.fim)}
              {atual === s.numero && <span className="badge">semana atual</span>}
            </h2>
            <p className="muted small">
              {cobertos}/{topicos.length} tópicos cobertos{s.domingo ? ` · Domingo ${s.domingo}` : ''}
            </p>
            {DISCIPLINAS.map((d) => {
              const daDisc = topicos.filter((t) => t.disciplina === d.id)
              if (!daDisc.length) return null
              return (
                <div key={d.id} className="plano-disc">
                  <span className="plano-disc-nome">
                    <span className="nav-dot" style={{ background: disciplina(d.id).cor }} />
                    {d.nomeCurto}
                  </span>
                  <ul className="lista-simples">
                    {daDisc.map((t) => {
                      const st = statsTopico(t, tentativas, leituras).status
                      return (
                        <li key={t.id} className={`status-${st}`}>
                          <Link to={`/topico/${t.id}`}>
                            {st === 'coberto' ? '✓ ' : ''}
                            {t.id} · {t.titulo}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </section>
        )
      })}
    </main>
  )
}
