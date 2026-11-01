import { Fragment, type ReactNode } from 'react'

/**
 * Renderizador do "markdown leve" do conteudo (ver Topico.texto em content/types.ts): `### `
 * subtitulo, `- ` lista (com `  - ` aninhado), `1. ` lista numerada, `> ` destaque, `**negrito**`
 * e `*italico*`. Monta nos React a partir do texto — nunca HTML cru (sem dangerouslySetInnerHTML).
 */

function inline(texto: string, chave: string): ReactNode[] {
  const partes = texto.split(/(\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/g)
  return partes.map((p, i) => {
    const k = `${chave}-${i}`
    if (p.startsWith('**') && p.endsWith('**') && p.length > 4) return <strong key={k}>{p.slice(2, -2)}</strong>
    if (p.startsWith('*') && p.endsWith('*') && p.length > 2) return <em key={k}>{p.slice(1, -1)}</em>
    return <Fragment key={k}>{p}</Fragment>
  })
}

interface Item {
  texto: string
  filhos: string[]
}

type Bloco =
  | { tipo: 'h'; texto: string }
  | { tipo: 'p'; texto: string }
  | { tipo: 'ul' | 'ol'; itens: Item[] }
  | { tipo: 'quote'; texto: string }

function parse(texto: string): Bloco[] {
  const blocos: Bloco[] = []
  let paragrafo: string[] = []
  const fechaParagrafo = () => {
    if (paragrafo.length) blocos.push({ tipo: 'p', texto: paragrafo.join(' ') })
    paragrafo = []
  }

  for (const linhaBruta of texto.split('\n')) {
    const linha = linhaBruta.trimEnd()
    const ultimo = blocos[blocos.length - 1]

    if (!linha.trim()) {
      fechaParagrafo()
      continue
    }
    if (linha.startsWith('### ')) {
      fechaParagrafo()
      blocos.push({ tipo: 'h', texto: linha.slice(4) })
      continue
    }
    if (linha.startsWith('> ')) {
      fechaParagrafo()
      blocos.push({ tipo: 'quote', texto: linha.slice(2) })
      continue
    }
    const aninhado = /^\s{2,}- (.*)$/.exec(linha)
    if (aninhado && ultimo && (ultimo.tipo === 'ul' || ultimo.tipo === 'ol') && !paragrafo.length) {
      ultimo.itens[ultimo.itens.length - 1].filhos.push(aninhado[1])
      continue
    }
    const ul = /^- (.*)$/.exec(linha)
    const ol = /^\d+\. (.*)$/.exec(linha)
    if (ul || ol) {
      fechaParagrafo()
      const tipo = ul ? 'ul' : 'ol'
      const item = { texto: (ul ?? ol)![1], filhos: [] }
      if (ultimo && ultimo.tipo === tipo) ultimo.itens.push(item)
      else blocos.push({ tipo, itens: [item] })
      continue
    }
    paragrafo.push(linha.trim())
  }
  fechaParagrafo()
  return blocos
}

export function Markdown({ texto }: { texto: string }) {
  return (
    <div className="md">
      {parse(texto).map((b, i) => {
        const k = `b${i}`
        switch (b.tipo) {
          case 'h':
            return <h3 key={k}>{inline(b.texto, k)}</h3>
          case 'quote':
            return <blockquote key={k}>{inline(b.texto, k)}</blockquote>
          case 'p':
            return <p key={k}>{inline(b.texto, k)}</p>
          default: {
            const Lista = b.tipo
            return (
              <Lista key={k}>
                {b.itens.map((item, j) => (
                  <li key={`${k}-${j}`}>
                    {inline(item.texto, `${k}-${j}`)}
                    {item.filhos.length > 0 && (
                      <ul>
                        {item.filhos.map((f, n) => (
                          <li key={`${k}-${j}-${n}`}>{inline(f, `${k}-${j}-${n}`)}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </Lista>
            )
          }
        }
      })}
    </div>
  )
}
