import { DISCIPLINAS, SEMANAS, disciplina as dadosDisciplina } from '../content/concurso'
import { TOPICOS } from '../content'
import type { DisciplinaId, Topico } from '../content/types'
import type { Leitura, Nota, Recompensa, Simulado, Tentativa } from './types'

/**
 * Tudo aqui e DERIVADO em leitura a partir do log append-only de tentativas (+ leituras, notas,
 * simulados). Nada e gravado: mudar um criterio (ex.: o que conta como "topico fraco") vale
 * retroativamente, sem migracao.
 */

// ---------- parametros calibraveis (escolhidos por mim; ajustar com o uso real) ----------

/** Minimo de respostas num topico para julgar se ele esta "fraco". */
export const MIN_RESPOSTAS_FRACO = 4
/** Abaixo desta taxa de acerto o topico entra na lista de fracos. */
export const TAXA_FRACO = 0.6
/** Janela de respostas recentes avaliada para sugerir pendencia/revisao. */
export const JANELA_SUGESTAO = 6
/** Erros dentro da janela que disparam a sugestao. */
export const ERROS_SUGESTAO = 3

export const PONTOS = {
  acertoPrimeira: 10,
  acertoDepois: 5,
  /** Acertar de novo uma questao ja acertada: pouco, para nao incentivar decorar gabarito. */
  acertoRepetido: 1,
  leitura: 5,
  nota: 2,
  pendenciaResolvida: 5,
  simulado: 20,
} as const

// ---------- por topico ----------

export type StatusTopico = 'nao-iniciado' | 'em-andamento' | 'coberto'

export interface StatsTopico {
  respostas: number
  acertos: number
  taxa: number | null
  /** Questoes distintas ja respondidas pelo menos uma vez. */
  respondidas: number
  /** Questoes distintas ja acertadas pelo menos uma vez. */
  acertadas: number
  lido: boolean
  status: StatusTopico
}

export function statsTopico(topico: Topico, tentativas: Tentativa[], leituras: Leitura[]): StatsTopico {
  const doTopico = tentativas.filter((t) => t.topicoId === topico.id)
  const acertos = doTopico.filter((t) => t.correta).length
  const respondidas = new Set(doTopico.map((t) => t.questaoId)).size
  const acertadas = new Set(doTopico.filter((t) => t.correta).map((t) => t.questaoId)).size
  const lido = leituras.some((l) => l.topicoId === topico.id)
  // "coberto" = estudou a explicacao E passou por todas as questoes do topico ao menos uma vez
  const status: StatusTopico =
    lido && respondidas >= topico.questoes.length ? 'coberto' : lido || doTopico.length > 0 ? 'em-andamento' : 'nao-iniciado'
  return {
    respostas: doTopico.length,
    acertos,
    taxa: doTopico.length ? acertos / doTopico.length : null,
    respondidas,
    acertadas,
    lido,
    status,
  }
}

/** Sugere pendencia/revisao quando ha muitos erros nas respostas mais recentes do topico. */
export function precisaRevisar(topicoId: string, tentativas: Tentativa[]): { erros: number; janela: number } | null {
  const recentes = tentativas
    .filter((t) => t.topicoId === topicoId)
    .sort((a, b) => a.respondidaEm.localeCompare(b.respondidaEm))
    .slice(-JANELA_SUGESTAO)
  const erros = recentes.filter((t) => !t.correta).length
  return erros >= ERROS_SUGESTAO ? { erros, janela: recentes.length } : null
}

// ---------- visao geral ----------

export interface StatsDisciplina {
  id: DisciplinaId
  topicos: number
  cobertos: number
  respostas: number
  acertos: number
  taxa: number | null
}

export function statsPorDisciplina(tentativas: Tentativa[], leituras: Leitura[]): StatsDisciplina[] {
  return DISCIPLINAS.map((d) => {
    const topicos = TOPICOS.filter((t) => t.disciplina === d.id)
    const cobertos = topicos.filter((t) => statsTopico(t, tentativas, leituras).status === 'coberto').length
    const daDisc = tentativas.filter((t) => t.disciplina === d.id)
    const acertos = daDisc.filter((t) => t.correta).length
    return {
      id: d.id,
      topicos: topicos.length,
      cobertos,
      respostas: daDisc.length,
      acertos,
      taxa: daDisc.length ? acertos / daDisc.length : null,
    }
  })
}

/** Percentual da ementa coberta (topicos cobertos / total). */
export function coberturaEmenta(tentativas: Tentativa[], leituras: Leitura[]): { cobertos: number; total: number; pct: number } {
  const cobertos = TOPICOS.filter((t) => statsTopico(t, tentativas, leituras).status === 'coberto').length
  return { cobertos, total: TOPICOS.length, pct: cobertos / TOPICOS.length }
}

export interface TopicoFraco {
  topico: Topico
  taxa: number
  respostas: number
}

export function topicosFracos(tentativas: Tentativa[], leituras: Leitura[], limite = 6): TopicoFraco[] {
  return TOPICOS.map((topico) => ({ topico, s: statsTopico(topico, tentativas, leituras) }))
    .filter(({ s }) => s.respostas >= MIN_RESPOSTAS_FRACO && (s.taxa ?? 1) < TAXA_FRACO)
    .map(({ topico, s }) => ({ topico, taxa: s.taxa ?? 0, respostas: s.respostas }))
    .sort((a, b) => a.taxa - b.taxa)
    .slice(0, limite)
}

// ---------- gamificacao ----------

export function pontos(tentativas: Tentativa[], leituras: Leitura[], notas: Nota[], simulados: Simulado[]): number {
  let total = 0
  const jaAcertou = new Set<string>()
  const ordenadas = [...tentativas].sort((a, b) => a.respondidaEm.localeCompare(b.respondidaEm))
  for (const t of ordenadas) {
    if (!t.correta) continue
    if (jaAcertou.has(t.questaoId)) total += PONTOS.acertoRepetido
    else total += t.tentativaN === 1 ? PONTOS.acertoPrimeira : PONTOS.acertoDepois
    jaAcertou.add(t.questaoId)
  }
  total += leituras.length * PONTOS.leitura
  total += notas.length * PONTOS.nota
  total += notas.filter((n) => n.tipo === 'pendencia' && n.resolvida).length * PONTOS.pendenciaResolvida
  total += simulados.length * PONTOS.simulado
  return total
}

/** Data local AAAA-MM-DD (a sequencia de dias e no fuso do aparelho, nao em UTC). */
export function diaLocal(iso: string | Date): string {
  const d = typeof iso === 'string' ? new Date(iso) : iso
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${mm}-${dd}`
}

function diaAnterior(dia: string): string {
  const [y, m, d] = dia.split('-').map(Number)
  return diaLocal(new Date(y, m - 1, d - 1))
}

export function diasComAtividade(tentativas: Tentativa[], leituras: Leitura[], notas: Nota[]): Set<string> {
  const dias = new Set<string>()
  for (const t of tentativas) dias.add(diaLocal(t.respondidaEm))
  for (const l of leituras) dias.add(diaLocal(l.lidaEm))
  for (const n of notas) dias.add(diaLocal(n.criadaEm))
  return dias
}

/**
 * Sequencia de dias seguidos com estudo, terminando hoje — ou ontem, se hoje ainda nao houve
 * atividade (a sequencia nao "quebra" de manha antes de ela estudar).
 */
export function sequenciaDias(dias: Set<string>, hoje = new Date()): { atual: number; estudouHoje: boolean } {
  const hojeStr = diaLocal(hoje)
  const estudouHoje = dias.has(hojeStr)
  let cursor = estudouHoje ? hojeStr : diaAnterior(hojeStr)
  let atual = 0
  while (dias.has(cursor)) {
    atual++
    cursor = diaAnterior(cursor)
  }
  return { atual, estudouHoje }
}

// ---------- calendario ----------

/** Dias inteiros de hoje ate a data (0 = hoje; negativo = ja passou). */
export function diasAte(dataIso: string, hoje = new Date()): number {
  const [y, m, d] = dataIso.split('-').map(Number)
  const alvo = new Date(y, m - 1, d)
  const base = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate())
  return Math.round((alvo.getTime() - base.getTime()) / 86_400_000)
}

/** Semana do plano que contem hoje; antes do inicio, a 1; depois do fim, null. */
export function semanaAtual(hoje = new Date()): number | null {
  const h = diaLocal(hoje)
  if (h < SEMANAS[0].inicio) return 1
  const s = SEMANAS.find((x) => h >= x.inicio && h <= x.fim)
  return s ? s.numero : null
}

// ---------- simulado ----------

export interface ResultadoSimulado {
  pontos: number
  porDisciplina: { id: DisciplinaId; acertos: number; total: number; pontos: number; maximo: number }[]
}

/** Pontuacao no criterio do edital (item 8.21): acertos x peso da disciplina. */
export function pontuarSimulado(respostas: Pick<Tentativa, 'disciplina' | 'correta'>[]): ResultadoSimulado {
  const porDisciplina = DISCIPLINAS.map((d) => {
    const daDisc = respostas.filter((r) => r.disciplina === d.id)
    const acertos = daDisc.filter((r) => r.correta).length
    const peso = dadosDisciplina(d.id).peso
    return { id: d.id, acertos, total: daDisc.length, pontos: acertos * peso, maximo: d.questoesNaProva * peso }
  })
  return { pontos: porDisciplina.reduce((s, d) => s + d.pontos, 0), porDisciplina }
}

// ---------- presente do Fernando: saldo carinhoso ----------

export interface Saldo {
  beijos: number
  abracos: number
  tempos: number
  fases: number
}

/** Os contadores sao a soma das recompensas gravadas (append-only), nunca um numero mutavel. */
export function saldo(recompensas: Recompensa[]): Saldo {
  return recompensas.reduce(
    (s, r) => ({ beijos: s.beijos + r.beijos, abracos: s.abracos + r.abracos, tempos: s.tempos + r.tempos, fases: s.fases + 1 }),
    { beijos: 0, abracos: 0, tempos: 0, fases: 0 },
  )
}

/** Topicos com pelo menos uma pratica completa (fase concluida). */
export function topicosConcluidos(recompensas: Recompensa[]): number {
  return new Set(recompensas.filter((r) => r.faseId.startsWith('topico:')).map((r) => r.faseId)).size
}

/**
 * Quando mostrar o resumo especial: na vespera (e no dia/depois) da prova, ou ao concluir a
 * trilha inteira (pratica completa de todos os topicos). null = ainda nao.
 */
export function motivoResumo(recompensas: Recompensa[], dataProva: string, hoje = new Date()): 'trilha' | 'vespera' | 'prova' | null {
  const faltam = diasAte(dataProva, hoje)
  if (faltam <= 0) return 'prova'
  if (faltam === 1) return 'vespera'
  if (topicosConcluidos(recompensas) >= TOPICOS.length) return 'trilha'
  return null
}
