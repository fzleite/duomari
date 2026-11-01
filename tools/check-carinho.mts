/**
 * Trava do "presente do Fernando": a dedicatoria e o texto APROVADO (nao pode mudar sem querer),
 * os bancos de mensagens tem variedade e a regra de recompensa segue o que foi decidido com o
 * usuario. Roda no build, junto com check:content.
 */
import { DEDICATORIA, MENSAGENS, decidirRecompensa, faixaDe, sortearMensagem } from '../src/content/carinho.ts'

const APROVADA =
  'Mari, este app foi feito com carinho, especialmente para você. A gente se conhece há pouco tempo, mas já tem sido um privilégio te conhecer, descobrir sua força e ver a dedicação que você coloca nos seus sonhos. Achei que um jeito bonito de mostrar isso seria caminhar um pouquinho ao seu lado nessa jornada. Espero que cada fase aqui te deixe mais perto da aprovação, e que você sinta que tem alguém torcendo muito por você. Com carinho, Fernando.'

const erros: string[] = []
const ok = (cond: boolean, msg: string) => {
  if (!cond) erros.push(msg)
}

ok(DEDICATORIA === APROVADA, 'a dedicatoria difere do texto aprovado')

for (const [tipo, banco] of Object.entries(MENSAGENS)) {
  ok(banco.length >= 5, `banco "${tipo}" com menos de 5 mensagens`)
  ok(new Set(banco).size === banco.length, `banco "${tipo}" tem mensagem repetida`)
  // nota baixa nunca vira bronca
  for (const m of banco) ok(!/\b(fracass|vergonh|pregui|decepcion|devia ter|precisa se esforçar)/i.test(m), `mensagem com tom de bronca em "${tipo}": ${m}`)
}

// faixas confirmadas: 80%+ alta, 50–79% media, <50% baixa
ok(faixaDe(0.8) === 'alta' && faixaDe(0.79) === 'media' && faixaDe(0.5) === 'media' && faixaDe(0.49) === 'baixa', 'faixas fora do combinado')

// 1a vez: recompensa da faixa
ok(decidirRecompensa(5 / 6, null).tipo === 'beijo', '1a vez com 83% deveria dar beijo')
ok(decidirRecompensa(4 / 6, null).tipo === 'abraco', '1a vez com 67% deveria dar abraco')
ok(decidirRecompensa(2 / 6, null).tipo === 'tempo', '1a vez com 33% deveria dar tempo de qualidade')
// refazer: subiu de faixa ou chegou a 80%+ -> beijo dobrado (2 beijos)
const dobrado = decidirRecompensa(4 / 6, 2 / 6)
ok(dobrado.tipo === 'beijo-dobrado' && dobrado.beijos === 2, 'refazer subindo de faixa deveria dar beijo dobrado')
ok(decidirRecompensa(5 / 6, 5 / 6).tipo === 'beijo-dobrado', 'refazer com 80%+ deveria dar beijo dobrado')
// refazer sem melhorar: recompensa normal da faixa
ok(decidirRecompensa(3 / 6, 4 / 6).tipo === 'abraco', 'refazer sem subir de faixa deveria dar a recompensa normal')
ok(decidirRecompensa(1 / 6, 2 / 6).tipo === 'tempo', 'refazer na faixa baixa deveria dar tempo de qualidade')

// sorteio nao repete a ultima mensagem do mesmo tipo
const primeira = sortearMensagem('abraco', 0.6)
for (let i = 0; i < 50; i++) ok(sortearMensagem('abraco', 0.6, primeira) !== primeira, 'sorteio repetiu a ultima mensagem')
ok(!sortearMensagem('beijo', 0.83).includes('{pct}'), 'placeholder {pct} nao substituido')

if (erros.length) {
  console.error(`check:carinho reprovou:\n${[...new Set(erros)].map((e) => `  - ${e}`).join('\n')}`)
  process.exit(1)
}
console.log('check:carinho ok — dedicatoria aprovada, bancos variados, regra de recompensa conferida')
