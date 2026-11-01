import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'

import { pct } from '../components/formato'
import { Markdown } from '../components/Markdown'
import { NotaCard, NovaNota } from '../components/NotasTopico'
import { topico as buscarTopico, topicosDa } from '../content'
import { disciplina } from '../content/concurso'
import { precisaRevisar, statsTopico } from '../data/metrics'
import { useApp } from '../state/store'

/** Estudo de um topico: explicacao, fontes, notas e acesso as questoes. */
export function Topico() {
  const { id } = useParams()
  const { tentativas, leituras, notas, alternarLeitura } = useApp()
  const [criando, setCriando] = useState(false)
  const t = id ? buscarTopico(id) : undefined
  if (!t) return <Navigate to="/" replace />

  const d = disciplina(t.disciplina)
  const s = statsTopico(t, tentativas, leituras)
  const revisar = precisaRevisar(t.id, tentativas)
  const notasDoTopico = notas.filter((n) => n.topicoId === t.id).sort((a, b) => b.criadaEm.localeCompare(a.criadaEm))
  const temPendAberta = notasDoTopico.some((n) => n.tipo === 'pendencia' && !n.resolvida)
  const irmaos = topicosDa(t.disciplina)
  const i = irmaos.findIndex((x) => x.id === t.id)
  const anterior = irmaos[i - 1]
  const proximo = irmaos[i + 1]

  return (
    <main className="screen screen-texto">
      <nav className="breadcrumb small">
        <Link to={`/disciplina/${d.id}`}>{d.nomeCurto}</Link> › {t.id}
      </nav>
      <header>
        <h1>{t.titulo}</h1>
        <p className="muted small">
          Semana {t.semana} do plano · {s.respondidas}/{t.questoes.length} questões respondidas
          {s.respostas > 0 && ` · ${pct(s.taxa)} de acerto`}
        </p>
      </header>

      <details className="ementa">
        <summary>Trecho do edital</summary>
        <p>{t.ementa}</p>
      </details>

      {revisar && (
        <div className="aviso" role="status">
          <p>
            Você errou <strong>{revisar.erros}</strong> das últimas {revisar.janela} questões deste tópico. Que tal reler a explicação
            {temPendAberta ? ' e conferir sua pendência aberta' : ' ou registrar uma pendência de aprofundamento'}?
          </p>
          {!temPendAberta && !criando && (
            <button type="button" className="btn btn-primary btn-sm" onClick={() => setCriando(true)}>
              Criar pendência
            </button>
          )}
        </div>
      )}

      <article>
        <Markdown texto={t.texto} />
      </article>

      {t.verificar && t.verificar.length > 0 && (
        <aside className="verificar">
          <strong>Conferir na fonte original</strong>
          <ul>
            {t.verificar.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </aside>
      )}

      <section className="fontes">
        <h2>Para aprofundar (fontes oficiais e originais)</h2>
        <ul>
          {t.fontes.map((f) => (
            <li key={f.url + f.titulo}>
              <a href={f.url} target="_blank" rel="noreferrer">
                {f.titulo}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="acoes-topico">
        <button type="button" className={`btn ${s.lido ? 'btn-ghost' : 'btn-primary'}`} onClick={() => alternarLeitura(t.id, !s.lido)}>
          {s.lido ? '✓ Explicação estudada' : 'Marcar explicação como estudada'}
        </button>
        <Link to={`/topico/${t.id}/praticar`} className="btn btn-primary">
          Praticar {t.questoes.length} questões
        </Link>
        {s.respostas > s.acertos && (
          <Link to={`/topico/${t.id}/praticar?erradas=1`} className="btn btn-ghost">
            Refazer as que errei
          </Link>
        )}
      </div>

      <section className="notas-topico">
        <div className="section-head">
          <h2>Minhas notas neste tópico</h2>
          {!criando && (
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => setCriando(true)}>
              + Nova nota
            </button>
          )}
        </div>
        {criando && (
          <NovaNota
            topicoId={t.id}
            tipoInicial={revisar && !temPendAberta ? 'pendencia' : 'anotacao'}
            textoInicial={revisar && !temPendAberta ? `Revisar: ${t.titulo}` : ''}
            aoSalvar={() => setCriando(false)}
          />
        )}
        {notasDoTopico.length === 0 && !criando && <p className="muted small">Nenhuma nota ainda.</p>}
        {notasDoTopico.map((n) => (
          <NotaCard key={n.id} nota={n} />
        ))}
      </section>

      <nav className="prev-next">
        {anterior ? <Link to={`/topico/${anterior.id}`}>← {anterior.id}</Link> : <span />}
        {proximo ? <Link to={`/topico/${proximo.id}`}>{proximo.id} →</Link> : <span />}
      </nav>
    </main>
  )
}
