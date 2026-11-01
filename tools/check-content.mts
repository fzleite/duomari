/**
 * Porta do build: roda a validacao de conteudo (tools/validar.mts) e reprova o build se falhar.
 */
import { TOPICOS } from '../src/content/index.ts'
import { validar } from './validar.mts'

const erros = validar(TOPICOS)
if (erros.length) {
  console.error(`check:content reprovou ${erros.length} problema(s):`)
  for (const e of erros) console.error(`  - ${e}`)
  process.exit(1)
}

const totalQ = TOPICOS.reduce((s, t) => s + t.questoes.length, 0)
console.log(`check:content ok — ${TOPICOS.length} topicos, ${totalQ} questoes`)
