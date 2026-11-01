import { CONCURSO, DISCIPLINAS } from '../content/concurso'
import { DOMINIOS_CONFIAVEIS } from '../content/fontes'

export function Sobre() {
  return (
    <main className="screen screen-texto">
      <h1>Sobre o concurso</h1>
      <dl className="ficha">
        <dt>Órgão</dt>
        <dd>{CONCURSO.orgao}</dd>
        <dt>Concurso</dt>
        <dd>{CONCURSO.concurso}</dd>
        <dt>Cargo</dt>
        <dd>{CONCURSO.cargo}</dd>
        <dt>Banca</dt>
        <dd>{CONCURSO.banca}</dd>
        <dt>Prova objetiva</dt>
        <dd>13/12/2026 (domingo), {CONCURSO.horario}, em Mogi Guaçu — data prevista; confirmar no Edital de Convocação.</dd>
        <dt>Fonte primária</dt>
        <dd>{CONCURSO.fontePrimaria}</dd>
      </dl>

      <h2>Estrutura da prova</h2>
      <table className="tabela">
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>Questões</th>
            <th>Peso</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          {DISCIPLINAS.map((d) => (
            <tr key={d.id}>
              <td>{d.nome}</td>
              <td>{d.questoesNaProva}</td>
              <td>{d.peso}</td>
              <td>{d.questoesNaProva * d.peso}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Mínimo para classificar: <strong>{CONCURSO.pontuacaoMinima} pontos</strong>. Desempate (após idade): Específicos, Pedagógicos, Legislação. Prova
        de títulos só classifica (até 20 pontos).
      </p>

      <h2>Links oficiais</h2>
      <ul>
        <li>
          <a href={CONCURSO.linkEdital} target="_blank" rel="noreferrer">
            Edital na página da FEG
          </a>
        </li>
        <li>
          <a href={CONCURSO.linkDiarioOficial} target="_blank" rel="noreferrer">
            Diário Oficial de Mogi Guaçu
          </a>
        </li>
        <li>
          <a href={CONCURSO.linkBanca} target="_blank" rel="noreferrer">
            Publiconsult (inscrições, convocação, gabaritos)
          </a>
        </li>
      </ul>

      <h2>Sobre o conteúdo</h2>
      <p>
        As explicações e questões foram escritas para este app, com base na ementa e na bibliografia do edital, sem copiar obras protegidas. Cada tópico
        aponta fontes oficiais e originais para aprofundar, e marca em "Conferir na fonte original" o que precisa ser verificado (legislação recém-alterada,
        dados que mudam).
      </p>
      <p>
        <strong>Estilo da banca:</strong> as questões têm 5 alternativas, formato visto em prova anterior da Publiconsult. Confira o caderno de provas
        recentes da banca para calibrar.
      </p>
      <details>
        <summary>Domínios de fontes aceitos ({DOMINIOS_CONFIAVEIS.length})</summary>
        <ul className="small">
          {DOMINIOS_CONFIAVEIS.map((d) => (
            <li key={d.dominio}>
              {d.dominio} — {d.motivo}
            </li>
          ))}
        </ul>
      </details>
      <p className="muted small">
        DuoMari funciona offline e guarda tudo só neste aparelho. Use "Backup e configurações" para levar seus dados a outro celular.
      </p>
    </main>
  )
}
