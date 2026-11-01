import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom'

import { RecompensaCard } from '../components/Carinho'
import { QuestaoView } from '../components/QuestaoView'
import { topico as buscarTopico } from '../content'
import { precisaRevisar } from '../data/metrics'
import type { Recompensa } from '../data/types'
import { useApp } from '../state/store'

/**
 * Pratica de um topico: uma questao por vez, com correcao comentada logo apos responder.
 * `?erradas=1` refaz so as questoes cuja ultima resposta foi errada.
 */
export function Pratica() {
  const { id } = useParams()
  const [params] = useSearchParams()
  const soErradas = params.get('erradas') === '1'
  const { tentativas, responder, concluirFase } = useApp()
  const t = id ? buscarTopico(id) : undefined

  // a lista e fixada ao abrir a sessao: responder nao pode tirar a questao de baixo dela
  const [questoes] = useState(() => {
    if (!t) return []
    if (!soErradas) return t.questoes
    return t.questoes.filter((q) => {
      const ultima = tentativas.filter((x) => x.questaoId === q.id).sort((a, b) => a.respondidaEm.localeCompare(b.respondidaEm)).at(-1)
      return ultima && !ultima.correta
    })
  })
  const [indice, setIndice] = useState(0)
  const [escolhida, setEscolhida] = useState<number | null>(null)
  const [acertos, setAcertos] = useState(0)
  const [recompensa, setRecompensa] = useState<Recompensa | null>(null)
  const inicio = useRef(0)
  useEffect(() => {
    inicio.current = Date.now()
  }, [])
  const revisar = useMemo(() => (t ? precisaRevisar(t.id, tentativas) : null), [t, tentativas])

  if (!t) return <Navigate to="/" replace />

  if (questoes.length === 0) {
    return (
      <main className="screen screen-center">
        <p>Nenhuma questão para refazer: a última resposta de cada uma está certa.</p>
        <Link to={`/topico/${t.id}`} className="btn btn-primary">
          Voltar ao tópico
        </Link>
      </main>
    )
  }

  if (indice >= questoes.length) {
    return (
      <main className="screen screen-center">
        <h1>{soErradas ? 'Revisão concluída' : 'Fase concluída!'}</h1>
        <p className="big">
          {acertos}/{questoes.length}
        </p>
        <p className="muted">acertos neste tópico</p>
        {recompensa && <RecompensaCard recompensa={recompensa} />}
        {revisar && (
          <div className="aviso">
            Esse tópico ainda está pedindo um pouquinho mais de atenção: vale reler a explicação e, se quiser, registrar uma pendência de aprofundamento.
          </div>
        )}
        <div className="acoes-topico">
          <Link to={`/topico/${t.id}`} className="btn btn-primary">
            Voltar ao tópico
          </Link>
          <Link to={`/disciplina/${t.disciplina}`} className="btn btn-ghost">
            Ver a trilha
          </Link>
        </div>
      </main>
    )
  }

  const q = questoes[indice]

  const escolher = async (orig: number) => {
    if (escolhida !== null) return
    setEscolhida(orig)
    if (orig === 0) setAcertos((a) => a + 1)
    await responder([
      {
        questaoId: q.id,
        topicoId: t.id,
        disciplina: t.disciplina,
        escolhida: orig,
        elapsedMs: Date.now() - inicio.current,
        modo: 'pratica',
      },
    ])
  }

  const proxima = async () => {
    // fase = pratica COMPLETA do topico; "refazer as erradas" nao conta (decisao do usuario)
    if (indice + 1 >= questoes.length && !soErradas) {
      setRecompensa(await concluirFase(`topico:${t.id}`, acertos / questoes.length))
    }
    setEscolhida(null)
    setIndice((i) => i + 1)
    inicio.current = Date.now()
    window.scrollTo({ top: 0 })
  }

  return (
    <main className="screen screen-texto">
      <nav className="breadcrumb small">
        <Link to={`/topico/${t.id}`}>
          {t.id} · {t.titulo}
        </Link>
      </nav>
      <div className="pratica-head">
        <span className="muted small">
          Questão {indice + 1} de {questoes.length}
          {soErradas && ' (refazendo as erradas)'}
        </span>
        <span className="badge">nível {q.nivel}</span>
      </div>
      <QuestaoView key={q.id} questao={q} escolhida={escolhida} onEscolher={escolher} corrigida={escolhida !== null} />
      {escolhida !== null && (
        <button type="button" className="btn btn-primary btn-block" onClick={proxima}>
          {indice + 1 < questoes.length ? 'Próxima questão' : 'Ver resultado'}
        </button>
      )}
    </main>
  )
}
