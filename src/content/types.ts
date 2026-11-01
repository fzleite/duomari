/**
 * Modelo do conteudo do concurso. Arquivos de DADOS puros (sem React): o `tools/check-content.mts`
 * importa estes modulos direto pelo Node, e o executor de .ts do Node nao processa JSX.
 */

export type DisciplinaId = 'LP' | 'LE' | 'CP' | 'GE'

export interface Disciplina {
  id: DisciplinaId
  /** Nome exatamente como no item 8.1 do edital. */
  nome: string
  nomeCurto: string
  questoesNaProva: number
  peso: number
  cor: string
}

export interface Fonte {
  titulo: string
  url: string
}

/**
 * Uma questao no estilo da banca (Publiconsult): 5 alternativas.
 *
 * CONVENCAO: a alternativa CERTA esta sempre no indice 0 e e embaralhada na renderizacao (mesma
 * convencao do DuoMath). `porqueErradas[i]` explica `alternativas[i + 1]`.
 */
export interface Questao {
  /** `${topicoId}-${n}`, estavel: o historico de tentativas aponta para ele. */
  id: string
  /** 1 = fixacao, 2 = aplicacao, 3 = analise/pegadinha de banca. */
  nivel: 1 | 2 | 3
  enunciado: string
  alternativas: [string, string, string, string, string]
  /** Por que a alternativa certa esta certa. */
  explicacao: string
  porqueErradas: [string, string, string, string]
}

export interface Topico {
  /** Codigo criado para o app (o edital nao numera a ementa): LP1, LE3, CP12, GE17... */
  id: string
  disciplina: DisciplinaId
  titulo: string
  /** Trecho da ementa do edital que este topico cobre (literal, para conferencia). */
  ementa: string
  /** Semana do plano de estudo (1 a 6) em que o topico aparece. */
  semana: number
  /**
   * Explicacao didatica em markdown leve: paragrafos separados por linha em branco,
   * `### ` para subtitulo, `- ` para lista, `**negrito**`. Sem HTML.
   */
  texto: string
  /** Pontos que precisam ser conferidos na fonte original (dados que mudam, redacao legal). */
  verificar?: string[]
  fontes: Fonte[]
  questoes: Questao[]
}
