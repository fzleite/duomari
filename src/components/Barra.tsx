/** Barra de progresso simples (0 a 1), com rotulo acessivel. */
export function Barra({ valor, cor, rotulo }: { valor: number; cor?: string; rotulo: string }) {
  const pct = Math.max(0, Math.min(1, valor)) * 100
  return (
    <div className="bar-track" role="progressbar" aria-label={rotulo} aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100}>
      <div className="bar-fill" style={{ width: `${pct}%`, background: cor }} />
    </div>
  )
}
