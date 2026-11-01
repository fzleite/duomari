import { useState } from 'react'

import type { Nota, TipoNota } from '../data/types'
import { useApp } from '../state/store'

/** Formulario curto para criar anotacao ou pendencia num topico. */
export function NovaNota({ topicoId, tipoInicial = 'anotacao', textoInicial = '', aoSalvar }: {
  topicoId: string
  tipoInicial?: TipoNota
  textoInicial?: string
  aoSalvar?: () => void
}) {
  const adicionarNota = useApp((s) => s.adicionarNota)
  const [tipo, setTipo] = useState<TipoNota>(tipoInicial)
  const [texto, setTexto] = useState(textoInicial)
  const [referencia, setReferencia] = useState('')

  const salvar = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!texto.trim()) return
    await adicionarNota({ topicoId, tipo, texto, referencia })
    setTexto('')
    setReferencia('')
    aoSalvar?.()
  }

  return (
    <form className="nota-form" onSubmit={salvar}>
      <div className="seg" role="radiogroup" aria-label="Tipo de nota">
        <button type="button" role="radio" aria-checked={tipo === 'anotacao'} className={`seg-btn ${tipo === 'anotacao' ? 'seg-on' : ''}`} onClick={() => setTipo('anotacao')}>
          Anotação
        </button>
        <button type="button" role="radio" aria-checked={tipo === 'pendencia'} className={`seg-btn ${tipo === 'pendencia' ? 'seg-on' : ''}`} onClick={() => setTipo('pendencia')}>
          Pendência de aprofundamento
        </button>
      </div>
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        rows={3}
        placeholder={tipo === 'anotacao' ? 'O que aprendi, uma memória, uma referência…' : 'O que quero revisitar ou aprofundar…'}
        aria-label="Texto da nota"
      />
      <input value={referencia} onChange={(e) => setReferencia(e.target.value)} placeholder="Referência (opcional): livro, link, artigo de lei" aria-label="Referência" />
      <button type="submit" className="btn btn-primary" disabled={!texto.trim()}>
        Salvar {tipo === 'anotacao' ? 'anotação' : 'pendência'}
      </button>
    </form>
  )
}

/** Cartao de uma nota, com edicao de referencia e resolucao (pendencias). */
export function NotaCard({ nota, mostrarTopico }: { nota: Nota; mostrarTopico?: React.ReactNode }) {
  const editarNota = useApp((s) => s.editarNota)
  const apagarNota = useApp((s) => s.apagarNota)
  const [editandoRef, setEditandoRef] = useState(false)
  const [ref, setRef] = useState(nota.referencia ?? '')

  const salvarRef = async () => {
    await editarNota(nota, { referencia: ref.trim() || undefined })
    setEditandoRef(false)
  }

  return (
    <article className={`nota ${nota.tipo === 'pendencia' ? 'nota-pend' : ''} ${nota.resolvida ? 'nota-resolvida' : ''}`}>
      <header className="nota-head">
        <span className="badge">{nota.tipo === 'pendencia' ? (nota.resolvida ? 'Pendência resolvida' : 'Pendência') : 'Anotação'}</span>
        {mostrarTopico}
        <time className="muted small">{new Date(nota.criadaEm).toLocaleDateString('pt-BR')}</time>
      </header>
      <p className="nota-texto">{nota.texto}</p>

      {editandoRef ? (
        <div className="nota-ref-edit">
          <input value={ref} onChange={(e) => setRef(e.target.value)} placeholder="Referência encontrada" aria-label="Referência" autoFocus />
          <button type="button" className="btn btn-primary btn-sm" onClick={salvarRef}>
            Salvar
          </button>
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => setEditandoRef(false)}>
            Cancelar
          </button>
        </div>
      ) : (
        nota.referencia && <p className="nota-ref">Referência: {nota.referencia}</p>
      )}

      <div className="nota-acoes">
        {!editandoRef && (
          <button type="button" className="link-button" onClick={() => setEditandoRef(true)}>
            {nota.referencia ? 'Editar referência' : 'Registrar referência'}
          </button>
        )}
        {nota.tipo === 'pendencia' && (
          <button type="button" className="link-button" onClick={() => editarNota(nota, { resolvida: !nota.resolvida })}>
            {nota.resolvida ? 'Reabrir' : 'Marcar como resolvida'}
          </button>
        )}
        <button
          type="button"
          className="link-button link-danger"
          onClick={() => {
            if (confirm('Apagar esta nota?')) void apagarNota(nota.id)
          }}
        >
          Apagar
        </button>
      </div>
    </article>
  )
}
