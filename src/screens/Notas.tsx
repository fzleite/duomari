import { useState } from 'react'
import { Link } from 'react-router-dom'

import { NotaCard } from '../components/NotasTopico'
import { topico as buscarTopico } from '../content'
import { DISCIPLINAS, disciplina } from '../content/concurso'
import type { DisciplinaId } from '../content/types'
import { useApp } from '../state/store'

type Aba = 'abertas' | 'resolvidas' | 'anotacoes'

/** Tela unica de notas: pendencias abertas (padrao), resolvidas e anotacoes, filtraveis por disciplina. */
export function Notas() {
  const notas = useApp((s) => s.notas)
  const [aba, setAba] = useState<Aba>('abertas')
  const [filtro, setFiltro] = useState<DisciplinaId | 'todas'>('todas')

  const daAba = notas.filter((n) =>
    aba === 'anotacoes' ? n.tipo === 'anotacao' : n.tipo === 'pendencia' && Boolean(n.resolvida) === (aba === 'resolvidas'),
  )
  const filtradas = daAba
    .filter((n) => filtro === 'todas' || buscarTopico(n.topicoId)?.disciplina === filtro)
    .sort((a, b) => b.criadaEm.localeCompare(a.criadaEm))

  const contar = (a: Aba) =>
    notas.filter((n) => (a === 'anotacoes' ? n.tipo === 'anotacao' : n.tipo === 'pendencia' && Boolean(n.resolvida) === (a === 'resolvidas'))).length

  return (
    <main className="screen">
      <h1>Notas e pendências</h1>
      <div className="seg" role="tablist">
        {(
          [
            ['abertas', 'Pendências abertas'],
            ['resolvidas', 'Resolvidas'],
            ['anotacoes', 'Anotações'],
          ] as const
        ).map(([valor, rotulo]) => (
          <button key={valor} type="button" role="tab" aria-selected={aba === valor} className={`seg-btn ${aba === valor ? 'seg-on' : ''}`} onClick={() => setAba(valor)}>
            {rotulo} ({contar(valor)})
          </button>
        ))}
      </div>

      <label className="filtro">
        Disciplina:{' '}
        <select value={filtro} onChange={(e) => setFiltro(e.target.value as DisciplinaId | 'todas')}>
          <option value="todas">Todas</option>
          {DISCIPLINAS.map((d) => (
            <option key={d.id} value={d.id}>
              {d.nomeCurto}
            </option>
          ))}
        </select>
      </label>

      {filtradas.length === 0 ? (
        <p className="muted">
          {aba === 'abertas'
            ? 'Nenhuma pendência aberta aqui. Crie pendências dentro de cada tópico, em "Minhas notas neste tópico".'
            : 'Nada por aqui ainda.'}
        </p>
      ) : (
        filtradas.map((n) => {
          const t = buscarTopico(n.topicoId)
          return (
            <NotaCard
              key={n.id}
              nota={n}
              mostrarTopico={
                t && (
                  <Link to={`/topico/${t.id}`} className="small">
                    <span className="nav-dot" style={{ background: disciplina(t.disciplina).cor }} /> {t.id} · {t.titulo}
                  </Link>
                )
              }
            />
          )
        })
      )}
    </main>
  )
}
