import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { RecompensaCard } from '../components/Carinho'
import { QuestaoView } from '../components/QuestaoView'
import { TOPICOS, questao as buscarQuestao } from '../content'
import { CONCURSO, DISCIPLINAS, disciplina } from '../content/concurso'
import { pontuarSimulado } from '../data/metrics'
import type { Simulado as SimuladoT, Tentativa } from '../data/types'
import { useApp } from '../state/store'

/**
 * Simulado no formato do edital (item 8.1): 8 LP + 5 LE + 7 CP + 15 GE = 35 questoes, pontuadas
 * por peso, com corte de 50 pontos. Sem correcao durante — como na prova. O rascunho fica no
 * localStorage para sobreviver a troca de app no celular (o SO costuma matar a aba).
 */

const CHAVE_RASCUNHO = 'duomari-simulado-rascunho'

interface Rascunho {
  id: string
  iniciadoEm: string
  questaoIds: string[]
  respostas: Record<string, number>
  ordens: Record<string, number[]>
}

function embaralhar<T>(lista: T[]): T[] {
  const a = [...lista]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Sorteia por disciplina, priorizando questoes que ela ainda nao acertou. */
function sortear(tentativas: Tentativa[]): string[] {
  const acertadas = new Set(tentativas.filter((t) => t.correta).map((t) => t.questaoId))
  return DISCIPLINAS.flatMap((d) => {
    const todas = TOPICOS.filter((t) => t.disciplina === d.id).flatMap((t) => t.questoes.map((q) => q.id))
    const novas = embaralhar(todas.filter((q) => !acertadas.has(q)))
    const resto = embaralhar(todas.filter((q) => acertadas.has(q)))
    return [...novas, ...resto].slice(0, d.questoesNaProva)
  })
}

function lerRascunho(): Rascunho | null {
  try {
    const raw = localStorage.getItem(CHAVE_RASCUNHO)
    return raw ? (JSON.parse(raw) as Rascunho) : null
  } catch {
    return null
  }
}

export function Simulado() {
  const { id } = useParams()
  if (id) return <ResultadoSimulado simuladoId={id} />
  return <FazerSimulado />
}

function FazerSimulado() {
  const { tentativas, simulados, registrarSimulado, concluirFase } = useApp()
  const navigate = useNavigate()
  const [rascunho, setRascunho] = useState<Rascunho | null>(lerRascunho)
  const [atual, setAtual] = useState(0)
  const [entregando, setEntregando] = useState(false)

  useEffect(() => {
    if (rascunho) localStorage.setItem(CHAVE_RASCUNHO, JSON.stringify(rascunho))
    else localStorage.removeItem(CHAVE_RASCUNHO)
  }, [rascunho])

  const iniciar = () => {
    const questaoIds = sortear(tentativas)
    const ordens: Record<string, number[]> = {}
    for (const qid of questaoIds) ordens[qid] = embaralhar([0, 1, 2, 3, 4])
    setRascunho({ id: crypto.randomUUID(), iniciadoEm: new Date().toISOString(), questaoIds, respostas: {}, ordens })
    setAtual(0)
  }

  if (!rascunho) {
    const historico = [...simulados].sort((a, b) => b.entregueEm.localeCompare(a.entregueEm))
    return (
      <main className="screen">
        <h1>Simulado da prova</h1>
        <p>
          35 questões na mesma distribuição da prova: {DISCIPLINAS.map((d) => `${d.questoesNaProva} de ${d.nomeCurto}`).join(', ')}. A pontuação segue o
          edital (acertos × peso) e o mínimo para classificar é <strong>{CONCURSO.pontuacaoMinima} pontos</strong>. A correção aparece só no fim, como
          na prova.
        </p>
        <p className="muted small">
          As questões são sorteadas do banco, dando preferência às que você ainda não acertou. Se sair do app no meio, o simulado continua de onde
          parou.
        </p>
        <button type="button" className="btn btn-primary btn-block" onClick={iniciar}>
          Começar simulado
        </button>

        {historico.length > 0 && (
          <section className="card">
            <h2>Simulados anteriores</h2>
            <ul className="lista-simples">
              {historico.map((s) => (
                <li key={s.id}>
                  <Link to={`/simulado/${s.id}`}>
                    {new Date(s.entregueEm).toLocaleDateString('pt-BR')} — <strong>{s.pontos} pts</strong>
                  </Link>
                  <span className={`small ${s.pontos >= CONCURSO.pontuacaoMinima ? 'ok' : 'erro'}`}>
                    {' '}
                    {s.pontos >= CONCURSO.pontuacaoMinima ? 'acima do corte' : 'abaixo do corte'}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    )
  }

  const qid = rascunho.questaoIds[atual]
  const achado = buscarQuestao(qid)
  const respondidas = Object.keys(rascunho.respostas).length

  const entregar = async () => {
    const faltam = rascunho.questaoIds.length - respondidas
    if (faltam > 0 && !confirm(`Ainda há ${faltam} questão(ões) sem resposta, que contarão como erradas. Entregar mesmo assim?`)) return
    setEntregando(true)
    const respostas = rascunho.questaoIds
      .filter((q) => rascunho.respostas[q] !== undefined)
      .map((q) => {
        const { topico } = buscarQuestao(q)!
        return { questaoId: q, topicoId: topico.id, disciplina: topico.disciplina, escolhida: rascunho.respostas[q], elapsedMs: 0, modo: 'simulado' as const, simuladoId: rascunho.id }
      })
    // nao respondida conta como errada, como na prova
    const paraPontuar = rascunho.questaoIds.map((q) => ({ disciplina: buscarQuestao(q)!.topico.disciplina, correta: rascunho.respostas[q] === 0 }))
    const agora = new Date().toISOString()
    const simulado: SimuladoT = {
      id: rascunho.id,
      iniciadoEm: rascunho.iniciadoEm,
      entregueEm: agora,
      questaoIds: rascunho.questaoIds,
      pontos: pontuarSimulado(paraPontuar).pontos,
      duracaoMs: Date.parse(agora) - Date.parse(rascunho.iniciadoEm),
    }
    await registrarSimulado(simulado, respostas)
    // cada simulado e uma fase nova; a nota da fase e a fracao dos 100 pontos
    await concluirFase(`simulado:${simulado.id}`, simulado.pontos / 100)
    setRascunho(null)
    navigate(`/simulado/${simulado.id}`)
  }

  const abandonar = () => {
    if (confirm('Descartar este simulado? As respostas marcadas serão perdidas.')) setRascunho(null)
  }

  return (
    <main className="screen screen-texto">
      <div className="pratica-head">
        <span className="muted small">
          Questão {atual + 1} de {rascunho.questaoIds.length} · {achado ? disciplina(achado.topico.disciplina).nomeCurto : ''}
        </span>
        <span className="muted small">{respondidas} respondidas</span>
      </div>

      {achado && (
        <QuestaoView
          key={qid}
          questao={achado.questao}
          escolhida={rascunho.respostas[qid] ?? null}
          ordem={rascunho.ordens[qid]}
          corrigida={false}
          onEscolher={(orig) => setRascunho({ ...rascunho, respostas: { ...rascunho.respostas, [qid]: orig } })}
        />
      )}

      <div className="sim-nav">
        <button type="button" className="btn btn-ghost" disabled={atual === 0} onClick={() => setAtual(atual - 1)}>
          ← Anterior
        </button>
        {atual + 1 < rascunho.questaoIds.length ? (
          <button type="button" className="btn btn-primary" onClick={() => setAtual(atual + 1)}>
            Próxima →
          </button>
        ) : (
          <button type="button" className="btn btn-primary" disabled={entregando} onClick={entregar}>
            Entregar
          </button>
        )}
      </div>

      <div className="sim-grade" aria-label="Mapa de questões">
        {rascunho.questaoIds.map((q, i) => (
          <button
            key={q}
            type="button"
            className={`sim-cel ${rascunho.respostas[q] !== undefined ? 'sim-cel-ok' : ''} ${i === atual ? 'sim-cel-atual' : ''}`}
            onClick={() => setAtual(i)}
            aria-label={`Questão ${i + 1}${rascunho.respostas[q] !== undefined ? ', respondida' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="acoes-topico">
        <button type="button" className="btn btn-primary" disabled={entregando} onClick={entregar}>
          Entregar simulado
        </button>
        <button type="button" className="btn btn-ghost" onClick={abandonar}>
          Descartar
        </button>
      </div>
    </main>
  )
}

function ResultadoSimulado({ simuladoId }: { simuladoId: string }) {
  const { simulados, tentativas, recompensas } = useApp()
  const s = simulados.find((x) => x.id === simuladoId)
  if (!s) {
    return (
      <main className="screen screen-center">
        <p>Simulado não encontrado.</p>
        <Link to="/simulado" className="btn btn-primary">
          Voltar
        </Link>
      </main>
    )
  }

  const respostas = tentativas.filter((t) => t.simuladoId === s.id)
  const escolhaDe = (qid: string) => respostas.find((r) => r.questaoId === qid)?.escolhida ?? null
  const r = pontuarSimulado(s.questaoIds.map((q) => ({ disciplina: buscarQuestao(q)!.topico.disciplina, correta: escolhaDe(q) === 0 })))
  const passou = r.pontos >= CONCURSO.pontuacaoMinima

  return (
    <main className="screen screen-texto">
      <h1>Resultado do simulado</h1>
      <p className="muted small">
        {new Date(s.entregueEm).toLocaleString('pt-BR')} · duração {Math.round(s.duracaoMs / 60000)} min
      </p>
      <div className={`resultado ${passou ? 'resultado-ok' : 'resultado-erro'}`}>
        <strong>{r.pontos}</strong> de 100 pontos — {passou ? 'acima' : 'abaixo'} do mínimo de {CONCURSO.pontuacaoMinima}
      </div>

      {(() => {
        const r = recompensas.find((x) => x.faseId === `simulado:${s.id}`)
        return r ? <RecompensaCard recompensa={r} /> : null
      })()}

      <table className="tabela">
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>Acertos</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          {r.porDisciplina.map((p) => (
            <tr key={p.id}>
              <td>{disciplina(p.id).nomeCurto}</td>
              <td>
                {p.acertos}/{p.total}
              </td>
              <td>
                {p.pontos}/{p.maximo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Correção comentada</h2>
      {s.questaoIds.map((q, i) => {
        const achado = buscarQuestao(q)
        if (!achado) return null
        return (
          <section key={q} className="card">
            <p className="muted small">
              {i + 1}. {disciplina(achado.topico.disciplina).nomeCurto} ·{' '}
              <Link to={`/topico/${achado.topico.id}`}>
                {achado.topico.id} {achado.topico.titulo}
              </Link>
            </p>
            <QuestaoView questao={achado.questao} escolhida={escolhaDe(q)} corrigida />
          </section>
        )
      })}

      <Link to="/simulado" className="btn btn-primary btn-block">
        Voltar aos simulados
      </Link>
    </main>
  )
}
