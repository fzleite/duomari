/**
 * Proveniencia e regra, nao recomendacao (herdado do DuoMath): todo link de conteudo tem de
 * apontar para um destes dominios, e o `check:content` reprova o que estiver fora. Aprovar
 * fonte nova e editar esta lista — curadoria manual.
 *
 * Criterio: fonte oficial/original (legislacao, orgao publico, organismo internacional, editora
 * da bibliografia) ou site citado pelo PROPRIO edital no Anexo II.
 */
export const DOMINIOS_CONFIAVEIS: { dominio: string; motivo: string }[] = [
  { dominio: 'planalto.gov.br', motivo: 'legislação federal oficial (citado no edital)' },
  { dominio: 'portal.mec.gov.br', motivo: 'resoluções do CNE (citado no edital)' },
  { dominio: 'basenacionalcomum.mec.gov.br', motivo: 'BNCC oficial (citado no edital)' },
  { dominio: 'gov.br', motivo: 'órgãos federais (MEC, INEP, ANA, MMA)' },
  { dominio: 'ibge.gov.br', motivo: 'dados oficiais de território e população' },
  { dominio: 'epe.gov.br', motivo: 'Balanço Energético Nacional' },
  { dominio: 'senado.leg.br', motivo: 'Acordo Ortográfico (citado no edital)' },
  { dominio: 'academia.org.br', motivo: 'ABL — Vocabulário Ortográfico (VOLP)' },
  { dominio: 'unesdoc.unesco.org', motivo: 'obras UNESCO da bibliografia (Delors, Morin, Glossário IBE)' },
  { dominio: 'unesco.org', motivo: 'UNESCO / IBE' },
  { dominio: 'brasil.un.org', motivo: 'ONU Brasil — ODS' },
  { dominio: 'mogiguacu.sp.gov.br', motivo: 'Diário Oficial do Município' },
  { dominio: 'publiconsult.com.br', motivo: 'banca organizadora' },
  { dominio: 'feg.br', motivo: 'órgão do concurso' },
  // sites indicados no proprio Anexo II do edital
  { dominio: 'brasilescola.uol.com.br', motivo: 'indicado no edital' },
  { dominio: 'todamateria.com.br', motivo: 'indicado no edital' },
  { dominio: 'infoescola.com', motivo: 'indicado no edital' },
  { dominio: 'sogeografia.com.br', motivo: 'indicado no edital' },
  { dominio: 'soportugues.com.br', motivo: 'indicado no edital' },
  { dominio: 'michaelis.uol.com.br', motivo: 'indicado no edital' },
  // editoras da bibliografia
  { dominio: 'cortezeditora.com.br', motivo: 'editora (Libâneo, Luckesi, Morin)' },
  { dominio: 'loja.grupoa.com.br', motivo: 'editora (Artmed/Penso: Zabala, Perrenoud, Lerner)' },
  { dominio: 'summus.com.br', motivo: 'editora (Aquino, Mantoan)' },
  { dominio: 'edusp.com.br', motivo: 'editora (Ross, Geografia do Brasil)' },
  { dominio: 'martinsfontespaulista.com.br', motivo: 'editora (Vygotsky)' },
  { dominio: 'papirus.com.br', motivo: 'editora (Celso Antunes)' },
  { dominio: 'record.com.br', motivo: 'editora (Paz e Terra: Paulo Freire)' },
]

export function urlConfiavel(url: string): boolean {
  let host: string
  try {
    const parsed = new URL(url)
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') return false
    host = parsed.hostname.replace(/^www\d?\./, '')
  } catch {
    return false
  }
  return DOMINIOS_CONFIAVEIS.some(({ dominio }) => host === dominio || host.endsWith(`.${dominio}`))
}
