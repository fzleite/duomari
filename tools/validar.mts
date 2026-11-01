/**
 * Porta do build: valida o conteudo antes do Vite. Erro de conteudo (questao com duas
 * alternativas iguais, explicacao faltando, link fora da curadoria) passa por tsc e lint sem
 * reclamar — e ensina errado. Usado por check-content.mts e pelo teste de mutacao (tools/mutacao.mts).
 *
 * Importa so arquivos de DADOS (src/content/*): o executor de .ts do Node nao processa JSX.
 *
 * Valide o validador por mutacao ao acrescentar regra nova: quebre de proposito um valor certo e
 * confirme que a regra dispara (licao herdada do DuoMath).
 */

import { DISCIPLINAS, SEMANAS } from '../src/content/concurso.ts'
import { urlConfiavel } from '../src/content/fontes.ts'
import type { Topico } from '../src/content/types.ts'

export function validar(TOPICOS: Topico[]): string[] {
  const erros: string[] = []
  const erro = (onde: string, msg: string) => erros.push(`${onde}: ${msg}`)

  /** Ementa estruturada validada (ementa-e-plano.md): quantos topicos por disciplina. */
  const ESPERADO: Record<string, number> = { LP: 13, LE: 8, CP: 15, GE: 18 }
  const MIN_QUESTOES = 6
  const ALTERNATIVAS = 5

  const idsTopico = new Set<string>()
  const idsQuestao = new Set<string>()

  for (const d of DISCIPLINAS) {
    const lista = TOPICOS.filter((t) => t.disciplina === d.id)
    if (lista.length !== ESPERADO[d.id]) erro(d.id, `esperados ${ESPERADO[d.id]} topicos, encontrados ${lista.length}`)
    for (let n = 1; n <= ESPERADO[d.id]; n++) {
      if (!lista.some((t) => t.id === `${d.id}${n}`)) erro(d.id, `falta o topico ${d.id}${n} da ementa`)
    }
  }

  for (const t of TOPICOS) {
    if (idsTopico.has(t.id)) erro(t.id, 'id de topico duplicado')
    idsTopico.add(t.id)
    if (!t.id.startsWith(t.disciplina)) erro(t.id, `id nao corresponde a disciplina ${t.disciplina}`)
    if (!SEMANAS.some((s) => s.numero === t.semana)) erro(t.id, `semana ${t.semana} fora do plano`)
    if (t.texto.trim().length < 800) erro(t.id, 'explicacao curta demais (< 800 caracteres)')
    if (!t.ementa.trim()) erro(t.id, 'trecho da ementa vazio')
    if (t.fontes.length === 0) erro(t.id, 'sem nenhuma fonte para aprofundar')
    for (const f of t.fontes) {
      if (!urlConfiavel(f.url)) erro(t.id, `fonte fora da lista de dominios confiaveis: ${f.url}`)
      if (!f.titulo.trim()) erro(t.id, `fonte sem titulo: ${f.url}`)
    }
    // texto em markdown leve: HTML cru nao e renderizado e indica erro de autoria
    if (/<\/?[a-z][^>]*>/i.test(t.texto)) erro(t.id, 'texto contem tag HTML')

    if (t.questoes.length < MIN_QUESTOES) erro(t.id, `menos de ${MIN_QUESTOES} questoes`)
    const niveis = new Set(t.questoes.map((q) => q.nivel))
    for (const n of [1, 2, 3] as const) if (!niveis.has(n)) erro(t.id, `nenhuma questao de nivel ${n}`)
    // progressao: niveis em ordem nao decrescente dentro do topico
    for (let i = 1; i < t.questoes.length; i++) {
      if (t.questoes[i].nivel < t.questoes[i - 1].nivel) erro(t.questoes[i].id, 'nivel fora da progressao (deve crescer)')
    }

    for (const q of t.questoes) {
      if (idsQuestao.has(q.id)) erro(q.id, 'id de questao duplicado')
      idsQuestao.add(q.id)
      if (!q.id.startsWith(`${t.id}-`)) erro(q.id, `id deve comecar com ${t.id}-`)
      if (q.alternativas.length !== ALTERNATIVAS) erro(q.id, `deve ter ${ALTERNATIVAS} alternativas`)
      const normal = q.alternativas.map((a) => a.trim().toLowerCase().replace(/[.;]$/, ''))
      if (new Set(normal).size !== normal.length) erro(q.id, 'alternativas repetidas')
      if (normal.some((a) => a.length === 0)) erro(q.id, 'alternativa vazia')
      if (q.porqueErradas.length !== ALTERNATIVAS - 1) erro(q.id, `porqueErradas deve ter ${ALTERNATIVAS - 1} itens`)
      if (q.porqueErradas.some((p) => !p.trim())) erro(q.id, 'justificativa de alternativa errada vazia')
      if (q.explicacao.trim().length < 20) erro(q.id, 'explicacao da correta curta demais')
      if (q.enunciado.trim().length < 15) erro(q.id, 'enunciado curto demais')
    }
  }
  return erros
}
