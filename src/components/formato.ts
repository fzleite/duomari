/** Percentual inteiro para exibicao; null vira travessao. */
export function pct(v: number | null): string {
  return v === null ? '—' : `${Math.round(v * 100)}%`
}
