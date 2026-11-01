# DuoMari — arquitetura e decisões

PWA de estudo para o **Concurso Público nº 1/2026 da Fundação Educacional Guaçuana (FEG), Mogi
Guaçu/SP** — cargo PEB III (6º ano ao Ensino Médio) — **Geografia**, banca **Publiconsult**, prova
prevista para **13/12/2026**. Projeto irmão do DuoMath, com a mesma stack e a mesma arquitetura.

## Stack

Igual ao DuoMath, **sem dependências novas**: Vite + React 19 + TypeScript, `vite-plugin-pwa`
(service worker `generateSW`, `autoUpdate`), `idb` (IndexedDB), `zustand`, `react-router-dom`.
Lint com `oxlint`. Deploy em GitHub Pages via GitHub Actions, em `/duomari/`.

## Princípios

- **Local-first, sem servidor.** Todos os dados (respostas, notas, simulados, configurações) ficam
  no IndexedDB do aparelho. Nada é enviado para fora. Para trocar de celular, use o backup JSON
  (exportar/importar), não sincronização.
- **Sem controle parental e sem perfis.** É um app de uma pessoa só. Diferente do DuoMath, não há
  seleção de perfil nem painel do responsável.
- **Plano é guia, não trava.** Todos os tópicos ficam liberados (decisão do usuário: ela é
  experiente e acelera quando precisar). O plano indica a semana de cada tópico.
- **Isolamento de dados.** Projeto pessoal: nada dele (código, conteúdo, documentos) é enviado,
  indexado ou armazenado em bases ou repositórios de terceiros. Qualquer integração precisa de
  confirmação antes.

## Conteúdo (`src/content/`)

- `concurso.ts`: dados do edital (item 8.1: 35 questões, pesos, corte de 50 pontos) e as 6
  semanas do plano.
- `lp.ts`, `le.ts`, `cp.ts`, `ge1.ts`, `ge2.ts`: os **54 tópicos** da ementa (LP 13, LE 8, CP 15,
  GE 18). Cada tópico tem:
  - o trecho literal do edital;
  - uma explicação didática em "markdown leve";
  - os pontos marcados em "Conferir na fonte original";
  - as fontes oficiais;
  - **6 questões** (2 por nível), cada uma com 5 alternativas, gabarito, explicação da certa e
    justificativa de cada errada.
- **Os códigos LP1…GE18 foram criados pelo app**: o Anexo II do edital não numera os tópicos.
  Esses códigos são identificadores de dados (as tentativas apontam para eles) e **não devem ser
  renumerados**.
- **A alternativa certa fica sempre no índice 0** dos dados e é embaralhada na tela. O pai do
  componente passa `key={questao.id}` para a ordem não vazar entre questões.
- **Proveniência é regra**: todo link precisa estar em `DOMINIOS_CONFIAVEIS` (`fontes.ts`), e o
  build reprova o que estiver fora. Os critérios aceitos são:
  - fonte oficial;
  - editora da bibliografia;
  - site citado no próprio Anexo II.

  Livros não são reproduzidos. O texto é próprio e as obras são citadas.
- **Formato da banca:** 5 alternativas (A–E). Esse formato foi inferido de **uma única** prova
  anterior da Publiconsult (Votorantim, 2015). O PCI Concursos exige captcha para baixar provas
  recentes, então vale conferir num caderno atual.

## Dados (`src/data/`)

| Store (IndexedDB `duomari`, v1) | Conteúdo |
|---|---|
| `tentativas` | log **append-only** de cada resposta (prática e simulado) — fonte de todas as métricas |
| `notas` | anotações e pendências de aprofundamento (com referência posterior e marca de resolvida) |
| `leituras` | "estudei a explicação" por tópico |
| `simulados` | resumo de cada simulado entregue (as respostas são tentativas com `simuladoId`) |
| `settings` | data da prova (editável) e nome |

- **Store nova exige subir `DB_VERSION`** no mesmo commit, e os índices nascem no mesmo bloco
  (gotcha do DuoMath).
- **Nunca usar `await` em algo que não seja request IDB com transação aberta.** Leituras e parse
  vêm antes da transação; senão ela fecha sozinha em CPU mobile.
- **Backup:** `format: 'duomari-backup'`. Campo novo entra opcional e é lido com fallback vazio,
  para backup antigo continuar restaurando. A importação tem dois modos:
  - **substituir:** celular novo;
  - **mesclar:** junta os dados de dois aparelhos.

## Métricas e gamificação (`src/data/metrics.ts`)

Tudo é **derivado na leitura**, nada é gravado. Por isso mudar um critério vale retroativamente.

- **Tópico coberto** = explicação marcada como estudada **e** todas as 6 questões respondidas ao
  menos uma vez. **% da ementa** = cobertos / 54.
- **Tópico fraco** = 4 ou mais respostas com menos de 60% de acerto.
- **Sugestão de pendência** = 3 erros ou mais nas últimas 6 respostas do tópico. O app oferece
  criar a pendência já preenchida com "Revisar: …".
- **Pontos:**

  | Ação | Pontos |
  |---|---|
  | Acerto de primeira | 10 |
  | Acerto depois de errar | 5 |
  | Acertar de novo questão já acertada | 1 (para não incentivar decorar gabarito) |
  | Leitura de explicação | 5 |
  | Nota criada | 2 |
  | Pendência resolvida | 5 |
  | Simulado entregue | 20 |

- **Sequência de dias** = dias seguidos com qualquer atividade, no fuso do aparelho. A sequência
  não quebra de manhã antes de ela estudar no dia.
- **Simulado:** 8 LP + 5 LE + 7 CP + 15 GE, pontuado por peso (item 8.21).
  - As questões sorteadas dão preferência às ainda não acertadas.
  - A correção só aparece no fim, como na prova.
  - O rascunho fica no `localStorage`, para sobreviver ao celular matar a aba.

> **Novidade em relação ao DuoMath:** o DuoMath **não** tinha pontos nem sequência de dias.
> Foram criados aqui, derivados do log de tentativas.

Os parâmetros (limites de tópico fraco, janela de sugestão, pontos) estão juntos no topo de
`metrics.ts` e foram escolhidos por mim para calibrar com o uso real.

## Verificação no build

- `npm run build` = `tsc -b` → `check:content` → `vite build` → `spa-fallback`.
- `tools/validar.mts`: contagem de tópicos por disciplina e presença de cada código da ementa; ids
  únicos; 5 alternativas sem repetição; 4 justificativas; níveis 1, 2 e 3 em progressão;
  explicação mínima; links dentro da curadoria; ausência de HTML no texto.
- `npm run test:mutacao`: quebra de propósito 11 regras e confirma que o validador pega todas.

## Gotchas

- **`useEffect(() => window.scrollTo(...))` sem chaves quebra o app no Chrome recente.** O
  `scrollTo()` passou a devolver uma Promise, que o React recebe como "função de limpeza" e tenta
  chamar na desmontagem ("l is not a function"). Efeitos sempre com chaves.
- Rotas são remontadas por `key={pathname+search}`; sem isso, ir da prática de um tópico para a de
  outro reaproveitaria o estado da sessão anterior.
- O bundle único (cerca de 700 kB) é proposital: o conteúdo inteiro fica no precache, para uso
  offline. `chunkSizeWarningLimit` foi ajustado.
- Do DuoMath: `autoUpdate` não recarrega aba aberta (quem faz isso é `src/pwa/swUpdate.ts`);
  PWA em `http://` na LAN não instala; o fallback de SPA no Pages é o `dist/404.html`.

## Insumos e fontes (fora do git)

- `fontes/edital/`: PDFs do edital (FEG), da Retificação nº 1 e do Diário Oficial de Mogi Guaçu.
  A **edição nº 1196, de 24/10/2026**, é a fonte primária. A comparação com o consolidado da FEG
  está em `FONTES.md`.
- `ementa-e-plano.md`: ementa estruturada e plano validados (Etapa 1).
- `duoMari.md` (prompt mestre) e `conteudo_concurso.docx` (prints do edital) são insumos pessoais.
