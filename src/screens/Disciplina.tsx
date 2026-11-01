import { Link, Navigate, useParams } from 'react-router-dom'

import { Barra } from '../components/Barra'
import { pct } from '../components/formato'
import { topicosDa } from '../content'
import { DISCIPLINAS, disciplina } from '../content/concurso'
import type { DisciplinaId } from '../content/types'
import { statsTopico } from '../data/metrics'
import { useApp } from '../state/store'

const ROTULO = { 'nao-iniciado': 'não iniciado', 'em-andamento': 'em andamento', coberto: 'coberto' } as const

/** Trilha de uma disciplina: todos os topicos, na ordem da ementa, com progresso. Acesso livre. */
export function Disciplina() {
  const { id } = useParams()
  const { tentativas, leituras, notas } = useApp()
  if (!DISCIPLINAS.some((d) => d.id === id)) return <Navigate to="/" replace />

  const d = disciplina(id as DisciplinaId)
  const topicos = topicosDa(d.id)
  const stats = topicos.map((t) => ({ t, s: statsTopico(t, tentativas, leituras) }))
  const cobertos = stats.filter((x) => x.s.status === 'coberto').length

  return (
    <main className="screen">
      <header className="page-head">
        <span className="nav-dot nav-dot-lg" style={{ background: d.cor }} />
        <div>
          <h1>{d.nomeCurto}</h1>
          <p className="muted small">
            {d.nome} — {d.questoesNaProva} questões × peso {d.peso} = {d.questoesNaProva * d.peso} pontos na prova
          </p>
        </div>
      </header>

      <Barra valor={cobertos / topicos.length} cor={d.cor} rotulo={`Cobertura de ${d.nomeCurto}`} />
      <p className="muted small">
        {cobertos} de {topicos.length} tópicos cobertos (explicação estudada + todas as questões respondidas).
      </p>

      <ol className="trilha">
        {stats.map(({ t, s }) => {
          const pend = notas.filter((n) => n.topicoId === t.id && n.tipo === 'pendencia' && !n.resolvida).length
          return (
            <li key={t.id} className={`trilha-item status-${s.status}`}>
              <Link to={`/topico/${t.id}`} className="trilha-link">
                <span className="trilha-id" style={{ borderColor: d.cor }}>
                  {t.id}
                </span>
                <span className="trilha-corpo">
                  <strong>{t.titulo}</strong>
                  <span className="muted small">
                    Semana {t.semana} · {ROTULO[s.status]}
                    {s.respostas > 0 && ` · ${pct(s.taxa)} de acerto`}
                    {pend > 0 && ` · ${pend} pendência${pend > 1 ? 's' : ''}`}
                  </span>
                </span>
              </Link>
            </li>
          )
        })}
      </ol>
    </main>
  )
}
