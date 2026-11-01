/**
 * O DuoMari e um presente do Fernando para a Mariana. Tom de TODAS as mensagens: leve, de quem
 * esta comecando a se conhecer, com admiracao e carinho — sem soar como relacao ja consolidada.
 * Nota baixa nunca vira bronca: a mensagem sempre acolhe e encoraja.
 */

/** Texto APROVADO pelo Fernando — usar exatamente assim, sem editar. */
export const DEDICATORIA =
  'Mari, este app foi feito com carinho, especialmente para você. A gente se conhece há pouco tempo, mas já tem sido um privilégio te conhecer, descobrir sua força e ver a dedicação que você coloca nos seus sonhos. Achei que um jeito bonito de mostrar isso seria caminhar um pouquinho ao seu lado nessa jornada. Espero que cada fase aqui te deixe mais perto da aprovação, e que você sinta que tem alguém torcendo muito por você. Com carinho, Fernando.'

export type Faixa = 'alta' | 'media' | 'baixa'
export type TipoRecompensa = 'beijo' | 'beijo-dobrado' | 'abraco' | 'tempo'

/** Faixas confirmadas pelo usuario: 80%+ alta, 50–79% media, abaixo de 50% baixa. */
export function faixaDe(pct: number): Faixa {
  if (pct >= 0.8) return 'alta'
  if (pct >= 0.5) return 'media'
  return 'baixa'
}

const ORDEM_FAIXA: Record<Faixa, number> = { baixa: 0, media: 1, alta: 2 }

export const RECOMPENSA_DA_FAIXA: Record<Faixa, TipoRecompensa> = { alta: 'beijo', media: 'abraco', baixa: 'tempo' }

export const ROTULO_RECOMPENSA: Record<TipoRecompensa, string> = {
  beijo: '1 beijo do Fernando',
  'beijo-dobrado': 'Beijo dobrado (2 beijos)',
  abraco: '1 abraço bem apertado',
  tempo: '1 tempo de qualidade com o Fernando',
}

export const ICONE_RECOMPENSA: Record<TipoRecompensa, string> = {
  beijo: '💋',
  'beijo-dobrado': '💋💋',
  abraco: '🤗',
  tempo: '☕',
}

export interface Ganho {
  tipo: TipoRecompensa
  beijos: number
  abracos: number
  tempos: number
}

/**
 * Regra de recompensa (decidida com o usuario em 2026-11-01):
 * - 1a vez que conclui a fase: a recompensa da faixa (beijo / abraco / tempo de qualidade).
 * - Refazer: se SUBIU de faixa em relacao a melhor nota anterior OU chegou a 80%+, ganha
 *   "beijo dobrado" (+2 beijos). Senao, ganha a recompensa normal da faixa.
 */
export function decidirRecompensa(pct: number, melhorAnterior: number | null): Ganho {
  const faixa = faixaDe(pct)
  const refazendo = melhorAnterior !== null
  if (refazendo && (ORDEM_FAIXA[faixa] > ORDEM_FAIXA[faixaDe(melhorAnterior)] || faixa === 'alta')) {
    return { tipo: 'beijo-dobrado', beijos: 2, abracos: 0, tempos: 0 }
  }
  const tipo = RECOMPENSA_DA_FAIXA[faixa]
  return { tipo, beijos: tipo === 'beijo' ? 1 : 0, abracos: tipo === 'abraco' ? 1 : 0, tempos: tipo === 'tempo' ? 1 : 0 }
}

/**
 * Banco de mensagens por recompensa — varia para nao repetir. `{pct}` vira o percentual da fase.
 * O sorteio evita repetir a ultima mensagem usada para o mesmo tipo.
 */
export const MENSAGENS: Record<TipoRecompensa, string[]> = {
  beijo: [
    'Que fase linda, Mari! {pct} de acerto. Isso merece um beijo meu — e ele já está guardadinho no seu saldo.',
    'Olha você brilhando! Fiquei aqui todo orgulhoso com esse {pct}. Você ganhou um beijo do Fernando.',
    'Mandou muito bem nessa! Admiro demais esse seu foco. Um beijo pra você, conquistado com mérito.',
    'Acertou quase tudo… desse jeito a aprovação vem. Pode cobrar depois: você ganhou um beijo.',
    'Que bonito ver você mandando bem assim. Esse beijo é seu, viu?',
    'Fase concluída com nota alta! Só posso dizer: parabéns, e um beijo bem carinhoso.',
    '{pct}! Quem disse que estudar não tem recompensa? Ganhou um beijo meu.',
  ],
  'beijo-dobrado': [
    'Você voltou e foi além! Melhorou a nota nessa fase — isso vale um beijo dobrado.',
    'Refez e subiu de nível. Que dedicação bonita de ver. Beijo dobrado pra você!',
    'Olha só essa evolução! Quem insiste assim merece um beijo dobrado.',
    'Melhorou nessa fase e me deixou todo orgulhoso. Dois beijos, como combinado.',
    'Revisão que dá resultado é a melhor coisa do mundo. Beijo dobrado garantido!',
    'Você não se contentou e foi buscar mais. Admiro isso em você. Beijo dobrado!',
  ],
  abraco: [
    'Boa, Mari! Fase concluída com {pct}, e você está no caminho certo. Ganhou um abraço bem apertado.',
    'Mais da metade já é sua nessa fase — o resto vem com uma revisão. Um abraço bem apertado pra você.',
    'Gostei de ver você encarando essa fase. Fica aqui um abraço bem apertado de incentivo.',
    'Dá pra ver você evoluindo. Isso vale um abraço apertado — daqueles que dão energia pra próxima.',
    'Nada mal mesmo! Uma revisãozinha e essa fase fica toda sua. Por enquanto, um abraço bem apertado.',
    'Fase completa e muita coisa aprendida. Recebe aqui um abraço bem apertado meu.',
    'Você está chegando lá, Mari. Um abraço bem apertado pra comemorar esse passo.',
  ],
  tempo: [
    'Essa fase foi difícil, e tudo bem — ela existe justamente pra isso. Você ganhou um tempo de qualidade comigo: a gente revisa esse assunto juntos.',
    'Errar aqui é o melhor lugar pra errar, bem longe da prova. Ganhou um tempo de qualidade comigo pra estudar isso com calma.',
    'Não desanima, Mari. Admiro quem encara o que ainda não domina. Seu prêmio: um tempo de qualidade comigo, te ajudando nessa parte.',
    'Toda fase difícil ensina alguma coisa. Que tal a gente olhar esse tópico juntos? Você ganhou um tempo de qualidade comigo.',
    'Essa ainda não encaixou — por enquanto. Fica aqui um tempo de qualidade comigo pra gente destravar esse conteúdo.',
    'Fase concluída, e isso já conta muito. Você ganhou um tempo de qualidade comigo: café, caderno e paciência.',
    'Respira: um tópico difícil não define nada. Ganhou um tempo de qualidade comigo pra gente estudar lado a lado.',
  ],
}

export function sortearMensagem(tipo: TipoRecompensa, pct: number, ultima?: string): string {
  const banco = MENSAGENS[tipo]
  const formatar = (m: string) => m.replace('{pct}', `${Math.round(pct * 100)}%`)
  const opcoes = banco.filter((m) => formatar(m) !== ultima)
  const escolhida = opcoes[Math.floor(Math.random() * opcoes.length)] ?? banco[0]
  return formatar(escolhida)
}

/** Frases leves para o topo do painel — uma por dia, sem repetir em dias seguidos. */
export const SAUDACOES = [
  'Que bom te ver por aqui hoje.',
  'Um passo de cada vez — e eu torcendo daqui.',
  'Hoje é dia de mais uma fase. Vamos juntos?',
  'Cada tópico estudado é um pedacinho da aprovação.',
  'Fico feliz de acompanhar um pouquinho dessa jornada.',
  'Seu esforço não passa despercebido, viu?',
  'Café pronto, caderno aberto: bora?',
]

export function saudacaoDoDia(hoje = new Date()): string {
  const dia = Math.floor(new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()).getTime() / 86_400_000)
  return SAUDACOES[dia % SAUDACOES.length]
}

/** Resumo especial (fim da trilha ou vespera da prova). */
export function textoResumo(motivo: 'trilha' | 'vespera' | 'prova', beijos: number, abracos: number, tempos: number): string {
  const saldo = `${beijos} ${beijos === 1 ? 'beijo' : 'beijos'}, ${abracos} ${abracos === 1 ? 'abraço apertado' : 'abraços apertados'} e ${tempos} ${tempos === 1 ? 'tempo de qualidade' : 'tempos de qualidade'}`
  const abertura =
    motivo === 'vespera'
      ? 'Mari, amanhã é o grande dia.'
      : motivo === 'prova'
        ? 'Mari, chegou o dia.'
        : 'Mari, você percorreu a trilha inteira!'
  return `${abertura} Olha só tudo o que você conquistou por aqui: ${saldo}. Mais do que os números, fiquei feliz de acompanhar um pouquinho dessa jornada e de ver de perto a sua dedicação. Seja qual for o resultado, eu já admiro muito o caminho que você fez. Vai com calma e confiança — tem alguém torcendo muito por você. Com carinho, Fernando.`
}
