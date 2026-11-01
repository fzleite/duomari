import { useState } from 'react'

import type { Questao } from '../content/types'

const LETRAS = ['A', 'B', 'C', 'D', 'E']

function embaralhada(n: number): number[] {
  const ordem = Array.from({ length: n }, (_, i) => i)
  for (let i = ordem.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[ordem[i], ordem[j]] = [ordem[j], ordem[i]]
  }
  return ordem
}

interface Props {
  questao: Questao
  /** Indice ORIGINAL escolhido (0 = certa), ou null se ainda nao respondeu. */
  escolhida: number | null
  onEscolher?: (indiceOriginal: number) => void
  /** Mostrar gabarito e comentarios (pratica: depois de responder; simulado: so na correcao). */
  corrigida: boolean
  ordem?: number[]
}

/**
 * Embaralha as alternativas UMA vez por montagem (estado inicializado sob demanda). A convencao
 * dos dados e "certa no indice 0"; sem embaralhar, a resposta seria sempre a letra A. O pai deve
 * passar `key={questao.id}`, senao a ordem vaza de uma questao para a outra (gotcha do DuoMath).
 */
export function QuestaoView({ questao, escolhida, onEscolher, corrigida, ordem: ordemExterna }: Props) {
  const [ordemInterna] = useState(() => embaralhada(questao.alternativas.length))
  const ordem = ordemExterna ?? ordemInterna
  const [verTodas, setVerTodas] = useState(false)
  const letraDe = (orig: number) => LETRAS[ordem.indexOf(orig)]

  return (
    <div className="questao">
      <p className="questao-enunciado">{questao.enunciado}</p>
      <div className="alternativas" role="radiogroup" aria-label="Alternativas">
        {ordem.map((orig, pos) => {
          const marcada = escolhida === orig
          let estado = ''
          if (corrigida && orig === 0) estado = 'alt-certa'
          else if (corrigida && marcada) estado = 'alt-errada'
          else if (marcada) estado = 'alt-marcada'
          return (
            <button
              key={orig}
              type="button"
              role="radio"
              aria-checked={marcada}
              className={`alternativa ${estado}`}
              disabled={corrigida || !onEscolher}
              onClick={() => onEscolher?.(orig)}
            >
              <span className="alt-letra">{LETRAS[pos]}</span>
              <span>{questao.alternativas[orig]}</span>
            </button>
          )
        })}
      </div>

      {corrigida && (
        <div className={`comentario ${escolhida === 0 ? 'comentario-ok' : 'comentario-erro'}`}>
          <p>
            <strong>{escolhida === 0 ? 'Correta!' : escolhida === null ? 'Sem resposta.' : 'Incorreta.'}</strong> Gabarito: <strong>{letraDe(0)}</strong>.
          </p>
          <p>{questao.explicacao}</p>
          {escolhida !== null && escolhida !== 0 && (
            <p>
              <strong>Por que a {letraDe(escolhida)} está errada:</strong> {questao.porqueErradas[escolhida - 1]}
            </p>
          )}
          <button type="button" className="link-button" onClick={() => setVerTodas((v) => !v)}>
            {verTodas ? 'Ocultar comentário das alternativas' : 'Ver comentário de todas as alternativas'}
          </button>
          {verTodas && (
            <ul className="comentario-lista">
              {ordem.map((orig) => (
                <li key={orig}>
                  <strong>{letraDe(orig)}</strong> — {orig === 0 ? `Correta. ${questao.explicacao}` : questao.porqueErradas[orig - 1]}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
