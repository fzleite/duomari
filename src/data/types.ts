import type { DisciplinaId } from '../content/types'

/**
 * Log append-only de cada resposta (herdado do DuoMath): e a fonte de TODAS as metricas —
 * acertos por disciplina, topicos fracos, pontos, sequencia de dias. Nunca reescrever nem
 * agregar destrutivamente; as agregacoes ficam em metrics.ts, derivadas em leitura.
 */
export interface Tentativa {
  id: string
  questaoId: string
  topicoId: string
  disciplina: DisciplinaId
  correta: boolean
  /** Indice da alternativa escolhida no array ORIGINAL (0 = certa), nao na ordem embaralhada. */
  escolhida: number
  /** 1 na primeira vez que esta questao e respondida, 2 na segunda... */
  tentativaN: number
  elapsedMs: number
  respondidaEm: string
  modo: 'pratica' | 'simulado'
  simuladoId?: string
}

export type TipoNota = 'anotacao' | 'pendencia'

/**
 * Anotacao (o que aprendeu, memoria, referencia) ou pendencia de aprofundamento (algo para
 * revisitar, com campo para a referencia encontrada depois e marca de resolvida).
 */
export interface Nota {
  id: string
  topicoId: string
  tipo: TipoNota
  texto: string
  /** Referencia adicional registrada depois (livro, link, artigo de lei...). */
  referencia?: string
  resolvida?: boolean
  resolvidaEm?: string | null
  criadaEm: string
  atualizadaEm: string
}

/** Marca de "estudei a explicacao deste topico". Uma por topico (chave = topicoId). */
export interface Leitura {
  topicoId: string
  lidaEm: string
}

/** Resumo de um simulado entregue; as respostas em si sao Tentativas com simuladoId. */
export interface Simulado {
  id: string
  iniciadoEm: string
  entregueEm: string
  questaoIds: string[]
  pontos: number
  duracaoMs: number
}

export interface Settings {
  /** Data da prova (AAAA-MM-DD). Editavel: o Edital de Convocacao pode alterar. */
  dataProva: string
  nome: string
}

export interface BackupFile {
  format: 'duomari-backup'
  version: number
  exportedAt: string
  tentativas: Tentativa[]
  notas: Nota[]
  leituras: Leitura[]
  simulados: Simulado[]
  settings?: Partial<Settings>
}
