import type { Disciplina, DisciplinaId } from './types'

/** Dados do edital (DO de Mogi Guaçu nº 1196, 24/10/2026; consolidado FEG de 26/10/2026). */
export const CONCURSO = {
  orgao: 'Fundação Educacional Guaçuana (FEG) — Mogi Guaçu/SP',
  concurso: 'Concurso Público nº 1/2026',
  cargo: 'Professor de Educação Básica III (Prof. Cid Chiarelli) — 6º ano ao Ensino Médio — Geografia',
  banca: 'Publiconsult',
  /** Data prevista (item 7.1). A confirmação sai no Edital de Convocação. */
  dataProva: '2026-12-13',
  horario: '14h',
  /** Limite escolhido para encerrar o plano (11 e 12/12 ficam para descanso). */
  dataLimitePlano: '2026-12-10',
  inicioPlano: '2026-11-02',
  pontuacaoMinima: 50,
  fontePrimaria:
    'Diário Oficial do Município de Mogi Guaçu, edição nº 1196, de 24/10/2026; Retificação nº 1 de 26/10/2026 (não altera Geografia).',
  linkEdital: 'https://www.feg.br/edital-de-concurso-publico-01-2026/',
  linkBanca: 'https://www.publiconsult.com.br/',
  linkDiarioOficial: 'https://mogiguacu.sp.gov.br/diario-oficial/',
} as const

export const DISCIPLINAS: Disciplina[] = [
  { id: 'LP', nome: 'Língua Portuguesa e Interpretação de Textos', nomeCurto: 'Português', questoesNaProva: 8, peso: 2, cor: '#3a86ff' },
  { id: 'LE', nome: 'Legislação do Ensino', nomeCurto: 'Legislação', questoesNaProva: 5, peso: 2, cor: '#8338ec' },
  { id: 'CP', nome: 'Conhecimentos Pedagógicos', nomeCurto: 'Pedagógicos', questoesNaProva: 7, peso: 2, cor: '#e76f51' },
  { id: 'GE', nome: 'Conhecimentos Específicos — Geografia', nomeCurto: 'Geografia', questoesNaProva: 15, peso: 4, cor: '#2d6a4f' },
]

export function disciplina(id: DisciplinaId): Disciplina {
  return DISCIPLINAS.find((d) => d.id === id)!
}

export interface SemanaPlano {
  numero: number
  inicio: string
  fim: string
  /** Atividade de domingo (simulado/revisao); vazio na semana 6. */
  domingo: string
}

/** Plano validado: 2h/dia de 02/11 a 10/12/2026 (ver ementa-e-plano.md). */
export const SEMANAS: SemanaPlano[] = [
  { numero: 1, inicio: '2026-11-02', fim: '2026-11-08', domingo: '08/11 — diagnóstico (simulado curto)' },
  { numero: 2, inicio: '2026-11-09', fim: '2026-11-15', domingo: '15/11 — simulado 1' },
  { numero: 3, inicio: '2026-11-16', fim: '2026-11-22', domingo: '22/11 — revisão das pendências' },
  { numero: 4, inicio: '2026-11-23', fim: '2026-11-29', domingo: '29/11 — simulado 2' },
  { numero: 5, inicio: '2026-11-30', fim: '2026-12-06', domingo: '06/12 — simulado 3' },
  { numero: 6, inicio: '2026-12-07', fim: '2026-12-10', domingo: '' },
]
