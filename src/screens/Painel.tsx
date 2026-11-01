import { Link } from 'react-router-dom'

import { Barra } from '../components/Barra'
import { pct } from '../components/formato'
import { TOPICOS, topicosDaSemana } from '../content'
import { CONCURSO, DISCIPLINAS, SEMANAS, disciplina } from '../content/concurso'
import {
  coberturaEmenta,
  diasAte,
  diasComAtividade,
  pontos,
  semanaAtual,
  sequenciaDias,
  statsPorDisciplina,
  statsTopico,
  topicosFracos,
} from '../data/metrics'
import { useApp } from '../state/store'

export function Painel() {
  const { tentativas, leituras, notas, simulados, settings } = useApp()
  const cobertura = coberturaEmenta(tentativas, leituras)
  const porDisc = statsPorDisciplina(tentativas, leituras)
  const fracos = topicosFracos(tentativas, leituras)
  const seq = sequenciaDias(diasComAtividade(tentativas, leituras, notas))
  const total = pontos(tentativas, leituras, notas, simulados)
  const faltamProva = diasAte(settings.dataProva)
  const faltamPlano = diasAte(CONCURSO.dataLimitePlano)
  const semana = semanaAtual()
  const daSemana = semana ? topicosDaSemana(semana) : []
  const pendAbertas = notas.filter((n) => n.tipo === 'pendencia' && !n.resolvida)
  const ultimoSimulado = [...simulados].sort((a, b) => b.entregueEm.localeCompare(a.entregueEm))[0]
  // proximo passo: primeiro topico da semana ainda nao coberto; senao, qualquer nao coberto
  const proximo =
    daSemana.find((t) => statsTopico(t, tentativas, leituras).status !== 'coberto') ??
    TOPICOS.find((t) => statsTopico(t, tentativas, leituras).status !== 'coberto')

  return (
    <main className="screen">
      <section className="hero">
        <div>
          <h1>{settings.nome ? `Olá, ${settings.nome}!` : 'Olá!'}</h1>
          <p className="muted">PEB III Geografia — FEG Mogi Guaçu</p>
        </div>
        <div className="contagem" aria-label="Contagem regressiva">
          {faltamProva > 0 ? (
            <>
              <strong>{faltamProva}</strong>
              <span>{faltamProva === 1 ? 'dia para a prova' : 'dias para a prova'}</span>
            </>
          ) : faltamProva === 0 ? (
            <strong className="contagem-hoje">A prova é hoje. Boa prova!</strong>
          ) : (
            <span>Prova realizada em {new Date(`${settings.dataProva}T12:00`).toLocaleDateString('pt-BR')}</span>
          )}
        </div>
      </section>

      <section className="kpis">
        <div className="kpi">
          <strong>{pct(cobertura.pct)}</strong>
          <span>da ementa coberta</span>
          <small className="muted">
            {cobertura.cobertos}/{cobertura.total} tópicos
          </small>
        </div>
        <div className="kpi">
          <strong>{seq.atual}</strong>
          <span>{seq.atual === 1 ? 'dia seguido' : 'dias seguidos'}</span>
          <small className="muted">{seq.estudouHoje ? 'hoje já conta ✓' : 'estude hoje para manter'}</small>
        </div>
        <div className="kpi">
          <strong>{total}</strong>
          <span>pontos</span>
          <small className="muted">{tentativas.length} respostas</small>
        </div>
      </section>

      {proximo && (
        <Link to={`/topico/${proximo.id}`} className="cta">
          <span className="muted small">Próximo passo{semana ? ` — semana ${semana}` : ''}</span>
          <strong>
            {proximo.id} · {proximo.titulo}
          </strong>
        </Link>
      )}

      <section className="card">
        <h2>Acertos e cobertura por disciplina</h2>
        <div className="disc-list">
          {porDisc.map((s) => {
            const d = disciplina(s.id)
            return (
              <Link key={s.id} to={`/disciplina/${s.id}`} className="disc-row">
                <div className="disc-row-head">
                  <span className="nav-dot" style={{ background: d.cor }} />
                  <strong>{d.nomeCurto}</strong>
                  <span className="muted small">
                    {d.questoesNaProva} questões × peso {d.peso} = {d.questoesNaProva * d.peso} pts
                  </span>
                </div>
                <Barra valor={s.cobertos / s.topicos} cor={d.cor} rotulo={`Cobertura de ${d.nomeCurto}`} />
                <div className="disc-row-foot muted small">
                  <span>
                    {s.cobertos}/{s.topicos} tópicos cobertos
                  </span>
                  <span>
                    acertos: <strong>{pct(s.taxa)}</strong> ({s.acertos}/{s.respostas})
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="card">
        <h2>Tópicos fracos</h2>
        {fracos.length === 0 ? (
          <p className="muted">
            Nenhum por enquanto. Aparece aqui o tópico com pelo menos 4 respostas e menos de 60% de acerto.
          </p>
        ) : (
          <ul className="lista-simples">
            {fracos.map((f) => (
              <li key={f.topico.id}>
                <Link to={`/topico/${f.topico.id}`}>
                  {f.topico.id} · {f.topico.titulo}
                </Link>
                <span className="muted small">
                  {' '}
                  — {pct(f.taxa)} de acerto em {f.respostas} respostas
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="grid-2">
        <Link to="/notas" className="card card-link">
          <h2>Pendências abertas</h2>
          <p className="big">{pendAbertas.length}</p>
          <p className="muted small">Toque para ver e filtrar por disciplina.</p>
        </Link>
        <Link to="/simulado" className="card card-link">
          <h2>Simulado</h2>
          {ultimoSimulado ? (
            <>
              <p className="big">{ultimoSimulado.pontos} pts</p>
              <p className="muted small">
                Último em {new Date(ultimoSimulado.entregueEm).toLocaleDateString('pt-BR')} (mínimo para classificar: {CONCURSO.pontuacaoMinima})
              </p>
            </>
          ) : (
            <p className="muted small">35 questões no formato da prova, com pesos. Ainda não feito.</p>
          )}
        </Link>
      </section>

      {semana && (
        <section className="card">
          <h2>Semana {semana} do plano</h2>
          <p className="muted small">
            {SEMANAS[semana - 1].domingo ? `Domingo: ${SEMANAS[semana - 1].domingo}. ` : ''}
            {faltamPlano >= 0 ? `Faltam ${faltamPlano} dias para o fim do plano (10/12).` : 'Plano encerrado — foco em revisão.'}
          </p>
          <ul className="lista-simples">
            {DISCIPLINAS.flatMap((d) => daSemana.filter((t) => t.disciplina === d.id)).map((t) => {
              const s = statsTopico(t, tentativas, leituras)
              return (
                <li key={t.id} className={`status-${s.status}`}>
                  <Link to={`/topico/${t.id}`}>
                    {t.id} · {t.titulo}
                  </Link>
                  <span className="muted small"> — {s.status === 'coberto' ? 'coberto' : s.status === 'em-andamento' ? 'em andamento' : 'não iniciado'}</span>
                </li>
              )
            })}
          </ul>
          <Link to="/plano" className="link-quiet">
            Ver o plano completo →
          </Link>
        </section>
      )}
    </main>
  )
}
