import { TOPICOS_CP } from './cp.ts'
import { TOPICOS_GE_1 } from './ge1.ts'
import { TOPICOS_GE_2 } from './ge2.ts'
import { TOPICOS_LE } from './le.ts'
import { TOPICOS_LP } from './lp.ts'
import type { DisciplinaId, Questao, Topico } from './types.ts'

/** Numero do codigo do topico (GE17 -> 17), para ordenar na ordem da ementa. */
function numero(id: string): number {
  return Number(id.replace(/^\D+/, ''))
}

export const TOPICOS: Topico[] = [...TOPICOS_LP, ...TOPICOS_LE, ...TOPICOS_CP, ...TOPICOS_GE_1, ...TOPICOS_GE_2].sort(
  (a, b) => a.disciplina.localeCompare(b.disciplina) || numero(a.id) - numero(b.id),
)

const porId = new Map(TOPICOS.map((t) => [t.id, t]))
const questaoPorId = new Map<string, { questao: Questao; topico: Topico }>()
for (const topico of TOPICOS) {
  for (const questao of topico.questoes) questaoPorId.set(questao.id, { questao, topico })
}

export function topico(id: string): Topico | undefined {
  return porId.get(id)
}

export function questao(id: string): { questao: Questao; topico: Topico } | undefined {
  return questaoPorId.get(id)
}

export function topicosDa(disciplina: DisciplinaId): Topico[] {
  return TOPICOS.filter((t) => t.disciplina === disciplina)
}

export function topicosDaSemana(semana: number): Topico[] {
  return TOPICOS.filter((t) => t.semana === semana)
}
