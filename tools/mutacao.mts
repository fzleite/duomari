/**
 * Teste de mutacao do validador: cada mutacao quebra de proposito um dado certo e o validador
 * TEM de acusar. Regra que nao dispara da falsa confianca. Rode com `npm run test:mutacao`.
 */
import { TOPICOS } from '../src/content/index.ts'
import type { Topico } from '../src/content/types.ts'
import { validar } from './validar.mts'

const base = (): Topico[] => structuredClone(TOPICOS)

const mutacoes: [string, (t: Topico[]) => void][] = [
  ['alternativa repetida', (t) => { t[0].questoes[0].alternativas[1] = t[0].questoes[0].alternativas[0] }],
  ['so 4 alternativas', (t) => { (t[0].questoes[0].alternativas as string[]).pop() }],
  ['justificativa faltando', (t) => { (t[0].questoes[0].porqueErradas as string[]).pop() }],
  ['link fora da curadoria', (t) => { t[0].fontes[0].url = 'https://blog-qualquer.example.com/x' }],
  ['topico sem fontes', (t) => { t[1].fontes = [] }],
  ['topico da ementa removido', (t) => { t.splice(t.findIndex((x) => x.id === 'GE17'), 1) }],
  ['id de questao duplicado', (t) => { t[0].questoes[1].id = t[0].questoes[0].id }],
  ['nivel fora da progressao', (t) => { t[0].questoes[0].nivel = 3 }],
  ['semana fora do plano', (t) => { t[0].semana = 9 }],
  ['texto com HTML', (t) => { t[0].texto += '<b>x</b>' }],
  ['explicacao vazia', (t) => { t[0].questoes[0].explicacao = '' }],
]

let falhas = 0
for (const [nome, mutar] of mutacoes) {
  const t = base()
  mutar(t)
  const pegou = validar(t).length > 0
  console.log(`${pegou ? 'pegou ' : 'FUROU '} ${nome}`)
  if (!pegou) falhas++
}
if (validar(base()).length) { console.log('FUROU  base deveria passar'); falhas++ }
process.exit(falhas ? 1 : 0)
