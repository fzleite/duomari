import type { Topico } from './types.ts'

const CF = { titulo: 'Constituição Federal — Planalto (arts. 205 a 214)', url: 'https://www.planalto.gov.br/ccivil_03/Constituicao/Constituicao.htm' }
const LDB = { titulo: 'Lei nº 9.394/1996 (LDB) — texto compilado no Planalto', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9394.htm' }
const ECA = { titulo: 'Lei nº 8.069/1990 (ECA) — texto compilado no Planalto', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8069.htm' }
const FUNDEB = { titulo: 'Lei nº 14.113/2020 (FUNDEB) — Planalto', url: 'https://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2020/Lei/L14113.htm' }
const DEC_FUNDEB = { titulo: 'Decreto nº 10.656/2021 — Planalto', url: 'https://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Decreto/D10656.htm' }
const DEC_PACTO = { titulo: 'Decreto nº 12.391/2025 — Planalto', url: 'https://www.planalto.gov.br/ccivil_03/_Ato2023-2026/2025/Decreto/D12391.htm' }
const RES4 = { titulo: 'Resolução CNE/CEB nº 4/2010 — MEC', url: 'http://portal.mec.gov.br/dmdocuments/rceb004_10.pdf' }
const RES7 = { titulo: 'Resolução CNE/CEB nº 7/2010 — MEC', url: 'http://portal.mec.gov.br/dmdocuments/rceb007_10.pdf' }
const RES5 = { titulo: 'Resolução CNE/CEB nº 5/2009 — MEC', url: 'http://portal.mec.gov.br/dmdocuments/rceb005_09.pdf' }

export const TOPICOS_LE: Topico[] = [
  {
    id: 'LE1',
    disciplina: 'LE',
    titulo: 'Constituição Federal — arts. 205 a 214',
    ementa: 'BRASIL. Constituição Federal - Artigos 205 a 214.',
    semana: 1,
    texto: `A Seção "Da Educação" (Título VIII — Da Ordem Social) é curta e cai **literalmente**. Leia o texto da lei pelo menos duas vezes; aqui está o mapa.

### Art. 205 — o direito
A educação é **direito de todos e dever do Estado e da família**, promovida e incentivada com a colaboração da sociedade, visando ao **pleno desenvolvimento da pessoa**, seu **preparo para o exercício da cidadania** e sua **qualificação para o trabalho**.
> Pegadinha: na **CF** a ordem é "do **Estado** e da família"; na **LDB** (art. 2º) é "da **família** e do Estado".

### Art. 206 — princípios do ensino
I igualdade de condições para o **acesso e permanência**; II liberdade de aprender, ensinar, pesquisar e divulgar; III **pluralismo** de ideias e concepções pedagógicas e coexistência de instituições públicas e privadas; IV **gratuidade do ensino público em estabelecimentos oficiais**; V **valorização dos profissionais** da educação escolar, com planos de carreira e **ingresso exclusivamente por concurso público de provas e títulos** nas redes públicas; VI **gestão democrática do ensino público**, na forma da lei; VII garantia de **padrão de qualidade**; VIII **piso salarial profissional nacional** (lei federal); IX garantia do direito à educação e à **aprendizagem ao longo da vida** (EC 108/2020).

### Art. 207 — universidades
Autonomia didático-científica, administrativa e de gestão financeira e patrimonial; **indissociabilidade entre ensino, pesquisa e extensão**.

### Art. 208 — dever do Estado (o mais cobrado)
I **educação básica obrigatória e gratuita dos 4 aos 17 anos**, assegurada a oferta gratuita para os que não tiveram acesso na idade própria (EC 59/2009); II progressiva universalização do **ensino médio** gratuito; III **atendimento educacional especializado** às pessoas com deficiência, **preferencialmente na rede regular**; IV **educação infantil, em creche e pré-escola, às crianças até 5 anos**; V acesso aos níveis mais elevados, segundo a capacidade de cada um; VI ensino **noturno regular**; VII programas suplementares (material didático, transporte, alimentação e assistência à saúde) em **todas as etapas** da educação básica.
- **§1º** O acesso ao ensino obrigatório e gratuito é **direito público subjetivo**.
- **§2º** O não oferecimento ou a oferta irregular **importa responsabilidade da autoridade competente**.
- **§3º** O Poder Público deve **recensear** os educandos, fazer-lhes a **chamada** e zelar, com pais ou responsáveis, pela **frequência**.

### Arts. 209 a 211
- **209**: ensino livre à **iniciativa privada**, com cumprimento das normas gerais, **autorização e avaliação** de qualidade pelo Poder Público.
- **210**: **conteúdos mínimos** para o ensino fundamental (base da BNCC). §1º **ensino religioso** de **matrícula facultativa**, no horário normal das escolas públicas de EF. §2º EF em **língua portuguesa**, assegurado às comunidades indígenas o uso das **línguas maternas**.
- **211** — **regime de colaboração**: União organiza o sistema federal e exerce função **redistributiva e supletiva**; **Municípios** atuam prioritariamente no **ensino fundamental e na educação infantil**; **Estados e DF**, prioritariamente no **fundamental e médio**. O padrão mínimo de qualidade terá como referência o **Custo Aluno Qualidade (CAQ)** (§7º, EC 108).

### Art. 212 — vinculação de receitas
A **União** aplica, anualmente, **nunca menos de 18%**; **Estados, DF e Municípios**, **no mínimo 25%** da receita resultante de impostos (incluídas as transferências) na **manutenção e desenvolvimento do ensino (MDE)**. O **salário-educação** é fonte adicional da educação básica pública (§5º).

### Art. 212-A — FUNDEB permanente (EC 108/2020)
Um fundo **por Estado e DF**, formado por **20%** de impostos e transferências; **complementação da União de no mínimo 23%**, dividida em **10 pontos** (VAAF), **10,5 pontos** (VAAT) e **2,5 pontos** (VAAR); **no mínimo 70%** de cada fundo para pagamento dos **profissionais da educação básica em efetivo exercício**. Detalhes em LE4.

### Arts. 213 e 214
- **213**: recursos públicos vão às escolas públicas, podendo ser dirigidos a escolas **comunitárias, confessionais ou filantrópicas** sem fins lucrativos, nas condições da lei.
- **214**: o **Plano Nacional de Educação (PNE)** tem **duração decenal** e metas para: I **erradicação do analfabetismo**; II **universalização do atendimento escolar**; III melhoria da **qualidade** do ensino; IV formação para o **trabalho**; V promoção **humanística, científica e tecnológica**; VI meta de aplicação de recursos públicos em educação como **proporção do PIB**.`,
    verificar: [
      'Redação vigente dos arts. 206 a 214 e eventuais Emendas Constitucionais posteriores a 2020 (conferir no texto compilado do Planalto).',
      'Situação do PNE: a Lei 13.005/2014 foi prorrogada pela Lei 14.934/2024; verificar se o novo PNE já foi sancionado.',
    ],
    fontes: [CF],
    questoes: [
      {
        id: 'LE1-1',
        nivel: 1,
        enunciado: 'Segundo o art. 208 da Constituição Federal, a educação básica obrigatória e gratuita é assegurada:',
        alternativas: ['dos 4 aos 17 anos de idade.', 'dos 6 aos 14 anos de idade.', 'dos 0 aos 17 anos de idade.', 'dos 4 aos 14 anos de idade.', 'dos 6 aos 17 anos de idade.'],
        explicacao: 'EC 59/2009: educação básica obrigatória e gratuita dos 4 aos 17 anos, inclusive para quem não teve acesso na idade própria.',
        porqueErradas: [
          'Era a faixa do ensino fundamental antes da EC 59/2009.',
          'A creche (0 a 3) não é obrigatória para a família.',
          'Ignora o ensino médio.',
          'Ignora a pré-escola (4 e 5 anos).',
        ],
      },
      {
        id: 'LE1-2',
        nivel: 1,
        enunciado: 'De acordo com o art. 212 da CF, a União e os Municípios devem aplicar na manutenção e desenvolvimento do ensino, respectivamente, no mínimo:',
        alternativas: ['18% e 25% da receita de impostos.', '25% e 18% da receita de impostos.', '18% e 18% da receita de impostos.', '20% e 25% da receita de impostos.', '25% e 25% da receita de impostos.'],
        explicacao: 'União: nunca menos de 18%; Estados, DF e Municípios: no mínimo 25% da receita resultante de impostos, incluídas as transferências.',
        porqueErradas: [
          'Inverte os percentuais.',
          'Os entes subnacionais aplicam 25%.',
          '20% é a parcela de impostos que compõe o FUNDEB, não o mínimo da União.',
          'A União aplica 18%.',
        ],
      },
      {
        id: 'LE1-3',
        nivel: 2,
        enunciado: 'São princípios do ensino previstos no art. 206 da CF, EXCETO:',
        alternativas: [
          'gratuidade do ensino em estabelecimentos oficiais e privados.',
          'gestão democrática do ensino público, na forma da lei.',
          'pluralismo de ideias e de concepções pedagógicas.',
          'piso salarial profissional nacional para os profissionais da educação escolar pública.',
          'garantia do direito à educação e à aprendizagem ao longo da vida.',
        ],
        explicacao: 'A gratuidade é do ensino PÚBLICO em estabelecimentos OFICIAIS (inciso IV). Escolas privadas não são gratuitas por força constitucional.',
        porqueErradas: [
          'Inciso VI.',
          'Inciso III.',
          'Inciso VIII.',
          'Inciso IX (EC 108/2020).',
        ],
      },
      {
        id: 'LE1-4',
        nivel: 2,
        enunciado: 'Quanto à organização dos sistemas de ensino (art. 211 da CF), os Municípios atuarão prioritariamente:',
        alternativas: ['no ensino fundamental e na educação infantil.', 'no ensino fundamental e no ensino médio.', 'no ensino médio e na educação superior.', 'apenas na educação infantil.', 'na educação superior e na educação profissional.'],
        explicacao: '§2º do art. 211: Municípios — ensino fundamental e educação infantil.',
        porqueErradas: [
          'É a prioridade de Estados e DF (§3º).',
          'Não é prioridade municipal.',
          'A atuação inclui também o ensino fundamental.',
          'Não é prioridade municipal.',
        ],
      },
      {
        id: 'LE1-5',
        nivel: 3,
        enunciado: 'Analise: I. O acesso ao ensino obrigatório e gratuito é direito público subjetivo. II. O ensino religioso é de matrícula obrigatória nas escolas públicas de ensino fundamental. III. O não oferecimento do ensino obrigatório importa responsabilidade da autoridade competente. Está correto o que se afirma em:',
        alternativas: ['I e III, apenas.', 'I, II e III.', 'I e II, apenas.', 'II e III, apenas.', 'III, apenas.'],
        explicacao: 'I e III reproduzem o art. 208, §§1º e 2º. II está errada: o ensino religioso é de matrícula FACULTATIVA (art. 210, §1º).',
        porqueErradas: [
          'II está incorreta.',
          'II está incorreta e I está correta.',
          'II está incorreta.',
          'I também está correta.',
        ],
      },
      {
        id: 'LE1-6',
        nivel: 3,
        enunciado: 'Assinale a alternativa que reproduz corretamente o art. 205 da Constituição Federal.',
        alternativas: [
          'A educação, direito de todos e dever do Estado e da família, será promovida e incentivada com a colaboração da sociedade, visando ao pleno desenvolvimento da pessoa, seu preparo para o exercício da cidadania e sua qualificação para o trabalho.',
          'A educação, dever da família e do Estado, inspirada nos princípios de liberdade e nos ideais de solidariedade humana, tem por finalidade o pleno desenvolvimento do educando.',
          'A educação, direito de todos e dever exclusivo do Estado, será promovida visando à qualificação para o trabalho.',
          'A educação, direito dos cidadãos brasileiros e dever da família, será promovida pela sociedade, visando ao pleno desenvolvimento da pessoa.',
          'A educação, dever do Estado, da família e da comunidade, será assegurada com absoluta prioridade.',
        ],
        explicacao: 'É a redação do art. 205 (Estado antes da família; três finalidades: pessoa, cidadania, trabalho).',
        porqueErradas: [
          'É o art. 2º da LDB ("família e Estado").',
          '"Exclusivo" é falso: há também a família, com colaboração da sociedade.',
          'Restringe a titularidade e omite o Estado.',
          'Mistura com a linguagem de "absoluta prioridade" do art. 227 da CF / art. 4º do ECA.',
        ],
      },
    ],
  },
  {
    id: 'LE2',
    disciplina: 'LE',
    titulo: 'LDB — Lei nº 9.394/1996',
    ementa: 'BRASIL. Lei Federal nº 9.394/1996 - Lei de Diretrizes e Bases da Educação Nacional.',
    semana: 1,
    texto: `A LDB é a lei mais cobrada da disciplina e **muda quase todo ano** — o texto abaixo considera alterações até 2026 (Lei 14.945/2024, do novo Ensino Médio, e outras). Leia o compilado do Planalto.

### Princípios e fins (arts. 1º a 3º)
- **Art. 2º**: educação, **dever da família e do Estado**, inspirada nos princípios de **liberdade** e nos ideais de **solidariedade humana**; finalidade: **pleno desenvolvimento do educando**, **preparo para a cidadania** e **qualificação para o trabalho**.
- **Art. 3º** — princípios do ensino (15 incisos): igualdade de acesso e permanência; liberdade de aprender e ensinar; pluralismo; respeito à liberdade e **apreço à tolerância**; coexistência público/privado; gratuidade do ensino público em estabelecimentos oficiais; valorização do profissional; gestão democrática; padrão de qualidade; **valorização da experiência extraescolar**; **vinculação entre educação escolar, trabalho e práticas sociais**; consideração com a **diversidade étnico-racial**; aprendizagem ao longo da vida; respeito à diversidade das pessoas **surdas, surdo-cegas e com deficiência auditiva**; e (Lei 15.001/2024) acesso a **informações públicas sobre a gestão da educação**.

### Direito e dever (arts. 4º a 6º)
- Educação básica obrigatória e gratuita dos **4 aos 17 anos** (pré-escola, fundamental, médio); educação infantil gratuita até **5 anos**; **AEE** gratuito, **transversal** a todos os níveis, **preferencialmente na rede regular**; **vaga na escola pública mais próxima** de casa a partir dos 4 anos; alfabetização plena; **educação digital**.
- **Art. 5º**: o acesso à educação básica obrigatória é **direito público subjetivo** — qualquer cidadão, grupo, associação, entidade de classe, organização sindical ou o **Ministério Público** pode acionar o poder público.
- **Art. 6º**: **pais ou responsáveis** devem matricular a criança na educação básica **a partir dos 4 anos**.

### Organização (arts. 8º a 14)
- **Municípios** (art. 11): educação infantil em creches e pré-escolas e, **com prioridade**, o ensino fundamental; outros níveis só com as necessidades atendidas e recursos **acima** dos mínimos vinculados.
- **Escolas** (art. 12): elaborar e executar a **proposta pedagógica**; prover recuperação; informar pai e mãe sobre frequência e rendimento; **notificar o Conselho Tutelar** sobre alunos com faltas acima de **30% do percentual permitido** e (Lei 15.231/2025) sobre ocorrências de violência, inclusive **automutilação e suicídio**; combater o **bullying**; promover a **cultura de paz**; instituir **Conselhos Escolares**.
- **Docentes** (art. 13): participar da proposta pedagógica; elaborar e cumprir **plano de trabalho**; **zelar pela aprendizagem**; estabelecer **estratégias de recuperação**; cumprir dias letivos e participar **integralmente** dos períodos de planejamento, avaliação e desenvolvimento profissional; colaborar com a articulação escola–família–comunidade.
- **Gestão democrática** (art. 14): participação dos profissionais no projeto pedagógico e da comunidade em **Conselhos Escolares**.

### Organização da educação básica (arts. 21 a 36)
- **Níveis**: educação **básica** (infantil, fundamental, médio) e **superior** (art. 21).
- **Art. 24**: mínimo de **800 horas** anuais no fundamental e **1.000 horas** no médio, em **200 dias letivos**; médio ampliado progressivamente para **1.400 h**; **frequência mínima de 75%** das horas letivas; avaliação **contínua e cumulativa**, com **prevalência dos aspectos qualitativos sobre os quantitativos**; recuperação **de preferência paralela**.
- **Art. 26**: base nacional comum + **parte diversificada**; **Arte** e **Educação Física** obrigatórias; **inglês** a partir do 6º ano; temas transversais (direitos humanos, violência contra criança e mulher, educação alimentar); **educação digital**.
- **Art. 26-A**: **história e cultura afro-brasileira e indígena** obrigatórias no fundamental e médio, públicos e privados (Leis 10.639/2003 e 11.645/2008).
- **Educação infantil** (arts. 29 a 31): até 5 anos; avaliação por **acompanhamento e registro, sem objetivo de promoção**; 800 h / 200 dias; **4 h** (parcial) ou **7 h** (integral); **frequência mínima de 60%**.
- **Ensino fundamental** (art. 32): **9 anos**, obrigatório, inicia aos **6 anos**; pode ser organizado em **ciclos**; jornada de **pelo menos 4 horas** (art. 34). **Ensino religioso** (art. 33): matrícula facultativa, vedado proselitismo.
- **Ensino médio** (arts. 35 a 36, Lei 14.945/2024): mínimo de **3 anos**; **formação geral básica de no mínimo 2.400 h** (2.100 h quando técnico) + **itinerários formativos de no mínimo 600 h**; BNCC do médio em **4 áreas** (art. 35-D).

### Modalidades e profissionais
- **EJA** (arts. 37–38): exames supletivos para **maiores de 15 anos** (fundamental) e **maiores de 18** (médio).
- **Educação especial** (art. 58): modalidade oferecida **preferencialmente na rede regular** para pessoas com **deficiência, transtornos globais do desenvolvimento e altas habilidades/superdotação**; começa na educação infantil e vai ao longo da vida. **Educação bilíngue de surdos** (art. 60-A): Libras como 1ª língua e português escrito como 2ª.
- **Formação docente** (art. 62): **nível superior, licenciatura plena**; admitido o **nível médio, modalidade normal**, como formação mínima para educação infantil e **5 primeiros anos** do fundamental.
- **Valorização** (art. 67): ingresso **exclusivamente por concurso público de provas e títulos**; aperfeiçoamento continuado com licenciamento remunerado; **piso salarial**; progressão por **titulação e avaliação de desempenho**; **período reservado a estudos, planejamento e avaliação** dentro da carga horária. **Experiência docente** é pré-requisito para outras funções de magistério (§1º).
- **Financiamento** (arts. 69 a 71): repete 18%/25%; o art. 71 diz o que **não** é MDE — merenda e programas suplementares de alimentação, obras de infraestrutura que beneficiem a escola apenas indiretamente, pessoal docente em **desvio de função**.`,
    verificar: [
      'A LDB foi alterada várias vezes entre 2024 e 2026 (ex.: Leis 14.945/2024, 15.001/2024, 15.231/2025, 15.326/2026, 15.360/2026, 15.462/2026, 15.468/2026). Conferir o texto compilado antes da prova.',
    ],
    fontes: [LDB],
    questoes: [
      {
        id: 'LE2-1',
        nivel: 1,
        enunciado: 'Segundo a LDB, para aprovação no ensino fundamental e médio, exige-se frequência mínima de:',
        alternativas: ['75% do total de horas letivas.', '60% do total de horas letivas.', '50% do total de horas letivas.', '80% do total de horas letivas.', '70% do total de horas letivas.'],
        explicacao: 'Art. 24, VI: frequência mínima de 75%.',
        porqueErradas: [
          '60% é a frequência mínima na educação infantil (art. 31, IV).',
          'Não há esse percentual na LDB.',
          'Não há esse percentual na LDB.',
          '70% é o mínimo do FUNDEB para profissionais, não frequência.',
        ],
      },
      {
        id: 'LE2-2',
        nivel: 1,
        enunciado: 'A LDB estabelece que o ensino fundamental terá duração de:',
        alternativas: ['9 anos, iniciando-se aos 6 anos de idade.', '8 anos, iniciando-se aos 7 anos de idade.', '9 anos, iniciando-se aos 7 anos de idade.', '8 anos, iniciando-se aos 6 anos de idade.', '10 anos, iniciando-se aos 5 anos de idade.'],
        explicacao: 'Art. 32: ensino fundamental obrigatório, com duração de 9 anos, iniciando-se aos 6 anos (Lei 11.274/2006).',
        porqueErradas: [
          'Regra anterior à Lei 11.274/2006.',
          'Início aos 6 anos.',
          'Duração de 9 anos.',
          'Não há essa previsão.',
        ],
      },
      {
        id: 'LE2-3',
        nivel: 2,
        enunciado: 'Segundo o art. 13 da LDB, são incumbências dos docentes, EXCETO:',
        alternativas: [
          'elaborar e executar a proposta pedagógica do estabelecimento de ensino.',
          'participar da elaboração da proposta pedagógica do estabelecimento de ensino.',
          'zelar pela aprendizagem dos alunos.',
          'estabelecer estratégias de recuperação para os alunos de menor rendimento.',
          'colaborar com as atividades de articulação da escola com as famílias e a comunidade.',
        ],
        explicacao: '"Elaborar e executar" a proposta pedagógica é incumbência do ESTABELECIMENTO (art. 12, I). O docente PARTICIPA da elaboração (art. 13, I).',
        porqueErradas: [
          'Art. 13, I.',
          'Art. 13, III.',
          'Art. 13, IV.',
          'Art. 13, VI.',
        ],
      },
      {
        id: 'LE2-4',
        nivel: 2,
        enunciado: 'Conforme a LDB, a avaliação na educação infantil far-se-á:',
        alternativas: [
          'mediante acompanhamento e registro do desenvolvimento das crianças, sem o objetivo de promoção, mesmo para o acesso ao ensino fundamental.',
          'por meio de provas bimestrais com atribuição de notas.',
          'mediante exame de prontidão para o ensino fundamental.',
          'com retenção da criança que não atingir os objetivos do ano.',
          'por meio de avaliação externa nacional obrigatória.',
        ],
        explicacao: 'Art. 31, I: acompanhamento e registro, sem objetivo de promoção.',
        porqueErradas: [
          'Não há provas com notas na educação infantil.',
          'Não há exame de prontidão.',
          'Não há retenção na educação infantil.',
          'Não há tal previsão na LDB.',
        ],
      },
      {
        id: 'LE2-5',
        nivel: 3,
        enunciado: 'Após a Lei nº 14.945/2024, a formação geral básica do ensino médio (exceto quando articulada à formação técnica) tem carga horária mínima total de:',
        alternativas: ['2.400 horas.', '1.800 horas.', '3.000 horas.', '1.400 horas.', '600 horas.'],
        explicacao: 'Art. 35-C: mínimo de 2.400 h de formação geral básica; 2.100 h quando há formação técnica e profissional. Itinerários: mínimo de 600 h.',
        porqueErradas: [
          'Era o teto da BNCC na Lei 13.415/2017.',
          'É a soma mínima da formação geral com os itinerários, não só a formação geral.',
          'É a meta de carga horária anual do ensino médio (art. 24, §1º).',
          'É o mínimo dos itinerários formativos.',
        ],
      },
      {
        id: 'LE2-6',
        nivel: 3,
        enunciado: 'Conforme o art. 71 da LDB, NÃO constitui despesa de manutenção e desenvolvimento do ensino:',
        alternativas: [
          'programas suplementares de alimentação (merenda escolar).',
          'remuneração e aperfeiçoamento do pessoal docente.',
          'aquisição de material didático-escolar e transporte escolar.',
          'manutenção de instalações e equipamentos necessários ao ensino.',
          'realização de atividades-meio necessárias ao funcionamento dos sistemas de ensino.',
        ],
        explicacao: 'Art. 71, IV: programas suplementares de alimentação, assistência médico-odontológica e social NÃO são MDE (são custeados por outras fontes).',
        porqueErradas: [
          'É MDE (art. 70, I).',
          'É MDE (art. 70, VIII).',
          'É MDE (art. 70, II).',
          'É MDE (art. 70, V).',
        ],
      },
    ],
  },
  {
    id: 'LE3',
    disciplina: 'LE',
    titulo: 'ECA — arts. 1º a 6º, 53 a 59, 83 a 85, 208 e 245',
    ementa: 'BRASIL. Lei Federal nº 8.069/1990 - Estatuto da Criança e do Adolescente, arts. 1º - 6º, 53 - 59, 83 - 85, 208, 245.',
    semana: 2,
    texto: `O edital recortou artigos específicos do ECA. Todos cabem numa leitura de 20 minutos — faça-a no texto compilado, porque **houve alterações em 2025 e 2026**.

### Disposições preliminares (arts. 1º a 6º)
- **Art. 1º**: o ECA dispõe sobre a **proteção integral** à criança e ao adolescente.
- **Art. 2º**: **criança** = até **12 anos incompletos**; **adolescente** = entre **12 e 18 anos**. Excepcionalmente, aplica-se a pessoas entre **18 e 21 anos**, nos casos expressos em lei.
- **Art. 3º**: gozam de **todos os direitos fundamentais** da pessoa humana, sem discriminação.
- **Art. 4º**: é dever da **família, da comunidade, da sociedade em geral e do poder público** assegurar, **com absoluta prioridade**, os direitos à vida, saúde, alimentação, educação, esporte, lazer, profissionalização, cultura, dignidade, respeito, liberdade, **à natureza** (incluído pela Lei 15.512/2026) e convivência familiar e comunitária. A **garantia de prioridade** compreende: (a) **primazia** de receber proteção e socorro; (b) **precedência** de atendimento nos serviços públicos; (c) **preferência** na formulação e execução de políticas sociais; (d) **destinação privilegiada de recursos públicos**. A Lei 15.240/2025 incluiu o dever de **assistência afetiva** aos filhos.
- **Art. 5º**: nenhuma criança ou adolescente será objeto de **negligência, discriminação, exploração, violência, crueldade e opressão**; a Lei 15.240/2025 tornou ilícito indenizável a violação de direitos, **incluído o abandono afetivo**.
- **Art. 6º**: interpretação considerando os **fins sociais**, o bem comum e a **condição peculiar da criança e do adolescente como pessoas em desenvolvimento**.

### Direito à educação (arts. 53 a 59)
- **Art. 53**: educação visando ao pleno desenvolvimento, preparo para a cidadania e qualificação para o trabalho, assegurando: I igualdade de acesso e permanência; II **direito de ser respeitado por seus educadores**; III **direito de contestar critérios avaliativos**, podendo recorrer às instâncias escolares superiores; IV direito de **organização e participação em entidades estudantis**; V acesso à **escola pública e gratuita próxima de sua residência**, com **vagas no mesmo estabelecimento a irmãos** na mesma etapa ou ciclo. Parágrafo único: **pais ou responsáveis** têm direito de **ter ciência do processo pedagógico** e de **participar da definição das propostas educacionais**.
- **Art. 53-A**: dever das instituições de ensino de prevenir e enfrentar o **uso de drogas ilícitas**.
- **Art. 54**: dever do Estado (espelha o art. 208 da CF): ensino fundamental obrigatório e gratuito; extensão progressiva ao médio; AEE preferencialmente na rede regular; **creche e pré-escola de 0 a 5 anos**; ensino noturno adequado ao adolescente trabalhador; programas suplementares. **Direito público subjetivo** (§1º); não oferecimento **importa responsabilidade da autoridade** (§2º); poder público deve **recensear, fazer a chamada e zelar pela frequência** (§3º).
- **Art. 55**: **pais ou responsável** têm a **obrigação de matricular** seus filhos na rede regular.
- **Art. 56**: os **dirigentes** de estabelecimentos de **ensino fundamental** comunicarão ao **Conselho Tutelar**: I **maus-tratos** envolvendo seus alunos; II **reiteração de faltas injustificadas e evasão**, **esgotados os recursos escolares**; III **elevados níveis de repetência**; IV (Lei 15.240/2025) **negligência, abuso ou abandono**.
- **Art. 57**: poder público estimulará **pesquisas e novas propostas** de calendário, seriação, currículo, metodologia, didática e avaliação para incluir os excluídos do fundamental.
- **Art. 58**: no processo educacional, respeitam-se os valores **culturais, morais, éticos, artísticos e históricos** próprios do contexto social da criança (redação da Lei 15.240/2025), garantindo **liberdade de criação** e acesso às fontes de cultura.
- **Art. 59**: **Municípios**, com apoio dos Estados e da União, estimularão recursos e espaços para programações **culturais, esportivas e de lazer** para a infância e juventude.

### Autorização para viajar (arts. 83 a 85)
- **Art. 83**: nenhuma criança ou adolescente **menor de 16 anos** pode viajar para **fora da comarca** onde reside **desacompanhado dos pais ou responsável** sem **autorização judicial** (Lei 13.812/2019). Dispensa-se quando: (a) comarca **contígua**, na mesma UF, ou na mesma região metropolitana; (b) acompanhado de **ascendente ou colateral maior, até o 3º grau**, com parentesco comprovado, ou de **pessoa maior expressamente autorizada** pelo pai, mãe ou responsável. O juiz pode conceder autorização **válida por 2 anos**.
- **Art. 84** (exterior): dispensa-se autorização judicial se acompanhado de **ambos os pais** (ou responsável), ou de **um deles com autorização expressa do outro** com firma reconhecida.
- **Art. 85**: sem autorização judicial, criança ou adolescente nascido no Brasil **não pode sair do País com estrangeiro residente no exterior**.

### Art. 208 e art. 245
- **Art. 208**: rege as **ações de responsabilidade** pelo **não oferecimento ou oferta irregular** de: ensino obrigatório; AEE; creche e pré-escola (0 a 5); ensino noturno; programas suplementares; assistência social; saúde; escolarização de adolescentes **privados de liberdade**; convivência familiar; medidas socioeducativas; atendimento a vítimas ou testemunhas de violência.
- **Art. 245** (infração administrativa): **deixar o médico, professor ou responsável** por estabelecimento de saúde e de **ensino fundamental, pré-escola ou creche** de **comunicar à autoridade competente** os casos de que tenha conhecimento envolvendo **suspeita ou confirmação de maus-tratos**. Pena: **multa de 3 a 20 salários de referência**, **dobro na reincidência**.
> Para a professora, o 245 é o artigo mais "prático": **suspeita** já obriga a comunicar.`,
    verificar: ['Redações novas de 2025/2026 (Leis 15.240/2025 e 15.512/2026) nos arts. 4º, 5º, 56 e 58 — conferir o compilado.'],
    fontes: [ECA],
    questoes: [
      {
        id: 'LE3-1',
        nivel: 1,
        enunciado: 'Para os efeitos do ECA, considera-se adolescente a pessoa:',
        alternativas: ['entre doze e dezoito anos de idade.', 'entre dez e dezoito anos de idade.', 'entre doze e vinte e um anos de idade.', 'entre quatorze e dezoito anos de idade.', 'até dezoito anos de idade.'],
        explicacao: 'Art. 2º: criança até 12 anos incompletos; adolescente entre 12 e 18 anos.',
        porqueErradas: [
          'O limite inferior é 12 anos.',
          'A aplicação até 21 é excepcional, nos casos expressos em lei.',
          'O limite inferior é 12 anos.',
          'Mistura criança e adolescente.',
        ],
      },
      {
        id: 'LE3-2',
        nivel: 1,
        enunciado: 'Segundo o art. 56 do ECA, os dirigentes de estabelecimentos de ensino fundamental comunicarão ao Conselho Tutelar, entre outros, os casos de:',
        alternativas: [
          'reiteração de faltas injustificadas e de evasão escolar, esgotados os recursos escolares.',
          'notas abaixo da média em qualquer disciplina.',
          'indisciplina em sala de aula, independentemente de outras medidas.',
          'transferência de alunos para outra escola.',
          'atraso no pagamento de mensalidades.',
        ],
        explicacao: 'Art. 56, II. Também: maus-tratos (I), elevados níveis de repetência (III) e negligência, abuso ou abandono (IV, Lei 15.240/2025).',
        porqueErradas: [
          'Nota baixa isolada não é hipótese do art. 56.',
          'Indisciplina não está no rol.',
          'Transferência não está no rol.',
          'Não se aplica.',
        ],
      },
      {
        id: 'LE3-3',
        nivel: 2,
        enunciado: 'O art. 53 do ECA assegura à criança e ao adolescente, EXCETO:',
        alternativas: [
          'direito de escolher os professores de sua turma.',
          'direito de ser respeitado por seus educadores.',
          'direito de contestar critérios avaliativos, podendo recorrer às instâncias escolares superiores.',
          'direito de organização e participação em entidades estudantis.',
          'acesso à escola pública e gratuita próxima de sua residência.',
        ],
        explicacao: 'O ECA não prevê escolha de professores. Os demais estão nos incisos II, III, IV e V do art. 53.',
        porqueErradas: [
          'Inciso II.',
          'Inciso III.',
          'Inciso IV.',
          'Inciso V.',
        ],
      },
      {
        id: 'LE3-4',
        nivel: 2,
        enunciado: 'Conforme o art. 245 do ECA, o professor que deixar de comunicar à autoridade competente caso de que tenha conhecimento envolvendo SUSPEITA de maus-tratos contra aluno:',
        alternativas: [
          'comete infração administrativa, sujeita a multa de três a vinte salários de referência, em dobro na reincidência.',
          'não comete infração, pois só a confirmação obriga a comunicação.',
          'comete crime punido com detenção de um a três anos.',
          'sofre apenas advertência verbal da direção.',
          'só responde se for o diretor da escola.',
        ],
        explicacao: 'O art. 245 alcança suspeita OU confirmação e é infração administrativa punida com multa.',
        porqueErradas: [
          'A suspeita já obriga.',
          'É infração administrativa, não crime com detenção.',
          'A sanção é multa prevista em lei.',
          'Alcança médico, professor ou responsável pelo estabelecimento.',
        ],
      },
      {
        id: 'LE3-5',
        nivel: 3,
        enunciado: 'Uma aluna de 15 anos fará viagem nacional, para comarca não contígua, acompanhada apenas de uma tia (colateral de 3º grau, maior de idade), com parentesco comprovado por documento. Segundo o ECA:',
        alternativas: [
          'a autorização judicial é dispensada.',
          'é necessária autorização judicial, pois a tia não é ascendente.',
          'é necessária autorização judicial, pois a aluna tem menos de 18 anos.',
          'a aluna não pode viajar sem os pais em nenhuma hipótese.',
          'basta autorização da escola.',
        ],
        explicacao: 'Art. 83, §1º, b, 1: dispensa-se a autorização se a menor de 16 estiver acompanhada de ascendente ou colateral maior, até o terceiro grau, com parentesco comprovado.',
        porqueErradas: [
          'Colateral até o 3º grau também dispensa.',
          'A regra vale para menores de 16, e há hipóteses de dispensa.',
          'Há hipóteses de dispensa.',
          'A escola não autoriza viagens.',
        ],
      },
      {
        id: 'LE3-6',
        nivel: 3,
        enunciado: 'Assinale a alternativa correta sobre o art. 4º do ECA.',
        alternativas: [
          'A garantia de prioridade compreende a destinação privilegiada de recursos públicos nas áreas relacionadas com a proteção à infância e à juventude.',
          'O dever de assegurar os direitos da criança é exclusivo do poder público.',
          'A prioridade é relativa, cedendo diante de outras políticas públicas.',
          'A garantia de prioridade não abrange a formulação de políticas sociais.',
          'O direito à educação não está entre os direitos com absoluta prioridade.',
        ],
        explicacao: 'Alínea d da garantia de prioridade. O dever é da família, comunidade, sociedade e poder público, com ABSOLUTA prioridade.',
        porqueErradas: [
          'O dever é compartilhado.',
          'A prioridade é absoluta.',
          'Inclui preferência na formulação e execução de políticas sociais.',
          'Educação está expressamente no rol.',
        ],
      },
    ],
  },
  {
    id: 'LE4',
    disciplina: 'LE',
    titulo: 'FUNDEB — Lei nº 14.113/2020 e Decreto nº 10.656/2021',
    ementa: 'BRASIL. Lei Federal nº 14.113/2020 - Regulamenta o FUNDEB. BRASIL. Decreto nº 10.656/2021 - Regulamenta a Lei nº 14.113, de 25 de dezembro de 2020.',
    semana: 3,
    texto: `O **FUNDEB** (Fundo de Manutenção e Desenvolvimento da Educação Básica e de Valorização dos Profissionais da Educação) tornou-se **permanente** com a **EC 108/2020** (art. 212-A da CF) e foi regulamentado pela **Lei 14.113/2020**; o **Decreto 10.656/2021** detalha a operação.

### Como funciona
- **Natureza contábil**: são **27 fundos**, um **no âmbito de cada Estado e do DF**. Não é um "fundo nacional" único.
- **Composição**: **20%** de um conjunto de impostos e transferências (ICMS, ITCMD, IPVA, FPE, FPM, IPI-exportação, cota-parte do ITR etc.).
- **Distribuição**: entre o governo estadual e os municipais **na proporção das matrículas presenciais** da educação básica (Censo Escolar do INEP), ponderadas por etapa, modalidade e jornada.

### Complementação da União — mínimo de 23% (implantada de forma escalonada até 2026)
- **VAAF** (Valor Anual por Aluno Fundeb) — **10 pontos percentuais**: vai aos fundos estaduais que não alcançam o valor mínimo nacional.
- **VAAT** (Valor Anual Total por Aluno) — **no mínimo 10,5 pontos**: vai às **redes** (municipais ou estaduais) cujo valor total por aluno não alcança o mínimo. Metade dessa parcela vai para a **educação infantil**, e no mínimo **15%** para **despesas de capital**.
- **VAAR** (Valor Anual por Aluno por Resultado) — **2,5 pontos**: vai às redes que cumprem **condicionalidades de gestão** e mostram **evolução de indicadores de atendimento e aprendizagem com redução das desigualdades**.

### Condicionalidades do VAAR (Lei 14.113, art. 14 — e Decreto 10.656, art. 43)
1. Provimento do cargo de **gestor escolar** por critérios técnicos de **mérito e desempenho**, ou escolha com participação da comunidade dentre candidatos aprovados nessa avaliação.
2. **Participação de pelo menos 80%** dos estudantes de cada ano avaliado no **Saeb**.
3. **Redução das desigualdades** educacionais socioeconômicas e **raciais**.
4. **Regime de colaboração** Estado–Municípios formalizado em lei estadual (ex.: **ICMS Educacional**).
5. **Referenciais curriculares alinhados à BNCC**.

### Uso dos recursos
- **No mínimo 70%** de cada fundo para **remuneração dos profissionais da educação básica em efetivo exercício** (art. 26). No FUNDEB anterior (2007–2020) eram **60%** e só para **profissionais do magistério** — a lei atual ampliou para todos os profissionais da educação básica (docentes, suporte pedagógico, direção e também apoio técnico, administrativo e operacional).
- O restante: outras despesas de **MDE** (art. 70 da LDB). Vedado usar em despesas que não são MDE (art. 71).

### Controle social
- **CACS** (Conselhos de Acompanhamento e Controle Social), em cada esfera, acompanham e fiscalizam a aplicação; o Município pode **integrar o CACS ao Conselho Municipal de Educação**.
- **Transparência**: dados no **SIOPE**; relatórios bimestrais; fiscalização dos **Tribunais de Contas**, do **Ministério Público** e do controle interno.

### O Decreto 10.656/2021
Organiza a operacionalização (papéis do **MEC, FNDE e INEP**), as **contas únicas e específicas** no Banco do Brasil ou na Caixa, o cômputo das matrículas (inclusive **dupla matrícula** para AEE e ensino técnico articulado), as **instituições conveniadas** (comunitárias, confessionais, filantrópicas), a transparência via SIOPE e as **condicionalidades do VAAR** (art. 43).`,
    verificar: [
      'Percentuais e escalonamento da complementação da União (art. 41 da Lei 14.113) e alterações da Lei 14.276/2021 e de Emendas Constitucionais posteriores.',
      'Composição e mandato dos CACS municipais (art. 34 da Lei 14.113).',
    ],
    fontes: [FUNDEB, DEC_FUNDEB, CF],
    questoes: [
      {
        id: 'LE4-1',
        nivel: 1,
        enunciado: 'Com a EC 108/2020, o FUNDEB passou a ser:',
        alternativas: ['permanente, previsto no art. 212-A da Constituição.', 'temporário, com vigência até 2030.', 'um fundo único nacional administrado pelo MEC.', 'extinto e substituído pelo salário-educação.', 'restrito ao ensino fundamental.'],
        explicacao: 'A EC 108/2020 incluiu o art. 212-A e tornou o FUNDEB permanente.',
        porqueErradas: [
          'O FUNDEB anterior era temporário (2007–2020); o atual é permanente.',
          'São 27 fundos, um por Estado e DF.',
          'O salário-educação é outra fonte, adicional.',
          'Abrange toda a educação básica.',
        ],
      },
      {
        id: 'LE4-2',
        nivel: 1,
        enunciado: 'Pela Lei 14.113/2020, a proporção mínima dos recursos de cada fundo destinada ao pagamento dos profissionais da educação básica em efetivo exercício é de:',
        alternativas: ['70%', '60%', '50%', '80%', '25%'],
        explicacao: 'Art. 26 da Lei 14.113/2020 (e art. 212-A, XI, da CF): no mínimo 70%.',
        porqueErradas: [
          'Era o percentual do FUNDEB anterior, só para o magistério.',
          'Não é o mínimo legal.',
          'Não é o mínimo legal.',
          '25% é a vinculação mínima de impostos dos entes subnacionais.',
        ],
      },
      {
        id: 'LE4-3',
        nivel: 2,
        enunciado: 'A complementação da União ao FUNDEB, quando plenamente implantada, corresponde a no mínimo 23% do total dos fundos, assim distribuídos:',
        alternativas: ['10 pontos VAAF, 10,5 pontos VAAT e 2,5 pontos VAAR.', '10 pontos VAAT, 10,5 pontos VAAF e 2,5 pontos VAAR.', '23 pontos integralmente pelo VAAF.', '11,5 pontos VAAF e 11,5 pontos VAAT.', '20 pontos VAAF e 3 pontos VAAR.'],
        explicacao: 'VAAF 10 pp; VAAT no mínimo 10,5 pp; VAAR 2,5 pp.',
        porqueErradas: [
          'Inverte VAAF e VAAT.',
          'Ignora VAAT e VAAR.',
          'Ignora o VAAR e distorce os valores.',
          'Ignora o VAAT.',
        ],
      },
      {
        id: 'LE4-4',
        nivel: 2,
        enunciado: 'São condicionalidades para o recebimento da complementação VAAR, EXCETO:',
        alternativas: [
          'aplicação de 100% dos recursos do fundo em remuneração docente.',
          'participação de pelo menos 80% dos estudantes nos exames do Saeb.',
          'referenciais curriculares alinhados à BNCC.',
          'redução das desigualdades educacionais socioeconômicas e raciais.',
          'provimento do cargo de gestor escolar por critérios técnicos de mérito e desempenho.',
        ],
        explicacao: 'Não existe exigência de 100% em remuneração. As demais estão no art. 14, §1º, da Lei 14.113 e no art. 43 do Decreto 10.656.',
        porqueErradas: [
          'É condicionalidade.',
          'É condicionalidade.',
          'É condicionalidade.',
          'É condicionalidade.',
        ],
      },
      {
        id: 'LE4-5',
        nivel: 3,
        enunciado: 'Sobre o FUNDEB, analise: I. Há um fundo no âmbito de cada Estado e do Distrito Federal. II. Os recursos são distribuídos na proporção das matrículas presenciais, conforme o Censo Escolar. III. O conselho de acompanhamento municipal (CACS) não pode, em hipótese alguma, ser integrado ao Conselho Municipal de Educação. Está correto o que se afirma em:',
        alternativas: ['I e II, apenas.', 'I, II e III.', 'I e III, apenas.', 'II e III, apenas.', 'I, apenas.'],
        explicacao: 'I e II corretas. III errada: a regulamentação permite ao Município integrar o CACS ao Conselho Municipal de Educação.',
        porqueErradas: [
          'III está incorreta.',
          'III está incorreta e II correta.',
          'III incorreta e I correta.',
          'II também está correta.',
        ],
      },
      {
        id: 'LE4-6',
        nivel: 3,
        enunciado: 'A complementação VAAT da União ao FUNDEB destina-se:',
        alternativas: [
          'às redes de ensino cujo valor anual total por aluno não alcance o mínimo definido nacionalmente, com parte destinada à educação infantil.',
          'exclusivamente aos fundos estaduais com menor arrecadação de ICMS.',
          'às redes que melhorarem indicadores de aprendizagem e cumprirem condicionalidades.',
          'ao pagamento de bolsas a estudantes do ensino médio.',
          'às universidades federais.',
        ],
        explicacao: 'O VAAT considera a capacidade total de cada rede e chega diretamente a redes municipais/estaduais abaixo do mínimo; metade vai para a educação infantil.',
        porqueErradas: [
          'Descreve de forma imprecisa o VAAF, que é por fundo estadual.',
          'Descreve o VAAR.',
          'Não é finalidade do FUNDEB.',
          'O FUNDEB é da educação básica.',
        ],
      },
    ],
  },
  {
    id: 'LE5',
    disciplina: 'LE',
    titulo: 'Decreto nº 12.391/2025 — Pacto Nacional pela Recomposição das Aprendizagens',
    ementa: 'BRASIL. Decreto nº 12.391/2025 - Institui o Pacto Nacional pela Recomposição das Aprendizagens.',
    semana: 4,
    texto: `Decreto de **28 de fevereiro de 2025** (publicado no DOU de 5/3/2025). **Revogou o Decreto 11.079/2022** (antiga Política Nacional para Recuperação das Aprendizagens). Por ser recente e estar no edital, é forte candidato a questão.

### O que é
Uma **cooperação** entre **União, Estados, DF e Municípios** para (art. 1º): **(I)** garantir **padrões adequados de aprendizagem e desenvolvimento** aos estudantes da educação básica; **(II)** **mitigar impactos** de **emergências ou calamidades públicas** reconhecidas pela União sobre a oferta educacional.

### Conceitos (art. 2º)
- **Recomposição das aprendizagens**: ações para que o estudante recupere aprendizagens não consolidadas.
- **Avaliação diagnóstica de caráter formativo**: identifica o que o aluno sabe para orientar o ensino (não para classificar).
- **Mapas de progressão de aprendizagens**: mostram em que nível de cada aprendizagem essencial o aluno está, orientando o planejamento.
- **Resiliência dos sistemas educacionais**: capacidade de manter a oferta em situações adversas.
- Referências: **BNCC** e **Saeb**.

### Princípios (art. 4º)
Igualdade de condições de acesso, permanência e aprendizagem; **equidade**; **desenvolvimento integral** (cognitivo, socioemocional, cultural); reconhecimento dos esforços dos entes; **autonomia dos entes federativos** (o MEC tem papel **indutor e coordenador**); **colaboração voluntária**.

### Diretrizes (art. 5º) — resumo
Coerência pedagógica sistêmica, com o **currículo como eixo**; **avaliação diagnóstica formativa**; **reorganização curricular priorizando aprendizagens essenciais** alinhadas à BNCC; uso de **mapas de progressão** articulados à **formação continuada**; estratégias de **mediação pedagógica**; foco nas necessidades da escola; compartilhamento de boas práticas; enfrentamento das **desigualdades regionais, socioeconômicas, étnico-raciais e de gênero**; melhoria da gestão para resiliência.

### Os 6 eixos estruturantes (art. 7º) — decore
1. **Avaliação** (art. 8º) — diagnóstico contínuo; **Plataforma de Avaliação e Acompanhamento das Aprendizagens**, oferecida pelo MEC.
2. **Currículo** (art. 9º) — reorganização e **priorização curricular**, com referencial do MEC.
3. **Organização e mediação pedagógica** (art. 10).
4. **Materiais** (art. 11) — repositório de materiais complementares.
5. **Desenvolvimento profissional** (art. 12) — formação continuada.
6. **Gestão educacional** (art. 13) — resiliência das redes em emergências.

### Adesão e responsabilidades
- **Adesão voluntária**, por **termo** assinado pelo chefe do Executivo (art. 15).
- O ente que adere deve **identificar e mapear as defasagens** usando a Plataforma ou instrumento equivalente (art. 16) e elaborar **sua própria política de recomposição** (art. 17/18).
- A adesão é **condição para assistência técnica e financeira** da União (art. 17).
- **Prioridade** no apoio financeiro (art. 20): características **socioeconômicas, étnico-raciais e de gênero** da população atendida; **indicadores do Saeb** e dos sistemas locais; situações de **emergência/calamidade**.
- O decreto **não cria comitê** de governança: coordenação e monitoramento ficam com o **MEC**.`,
    verificar: ['Numeração exata dos artigos citados (resumo feito a partir do texto do Planalto; conferir o decreto completo).'],
    fontes: [DEC_PACTO],
    questoes: [
      {
        id: 'LE5-1',
        nivel: 1,
        enunciado: 'O Decreto nº 12.391/2025 institui:',
        alternativas: ['o Pacto Nacional pela Recomposição das Aprendizagens.', 'o novo FUNDEB.', 'a Base Nacional Comum Curricular.', 'o Plano Nacional de Educação 2025–2035.', 'o Programa Nacional do Livro Didático.'],
        explicacao: 'É o objeto do decreto, conforme o próprio edital.',
        porqueErradas: [
          'O FUNDEB é regulado pela Lei 14.113/2020.',
          'A BNCC foi homologada por resoluções do CNE.',
          'O PNE é instituído por lei, não por decreto.',
          'O PNLD tem regulamentação própria.',
        ],
      },
      {
        id: 'LE5-2',
        nivel: 1,
        enunciado: 'A adesão de Estados, DF e Municípios ao Pacto Nacional pela Recomposição das Aprendizagens é:',
        alternativas: ['voluntária, mediante termo de adesão.', 'obrigatória para todos os entes.', 'obrigatória apenas para os Municípios.', 'automática para quem recebe FUNDEB.', 'condicionada à aprovação de lei estadual.'],
        explicacao: 'O decreto respeita a autonomia federativa: adesão voluntária, por termo assinado pelo chefe do Executivo.',
        porqueErradas: [
          'Decreto federal não pode obrigar entes autônomos.',
          'Mesmo motivo.',
          'Não há vínculo automático com o FUNDEB.',
          'Não há essa exigência.',
        ],
      },
      {
        id: 'LE5-3',
        nivel: 2,
        enunciado: 'São eixos estruturantes do Pacto Nacional pela Recomposição das Aprendizagens, EXCETO:',
        alternativas: ['Financiamento privado das escolas públicas.', 'Avaliação.', 'Currículo.', 'Desenvolvimento profissional.', 'Gestão educacional.'],
        explicacao: 'Os seis eixos são: avaliação; currículo; organização e mediação pedagógica; materiais; desenvolvimento profissional; gestão educacional.',
        porqueErradas: [
          'É eixo.',
          'É eixo.',
          'É eixo.',
          'É eixo.',
        ],
      },
      {
        id: 'LE5-4',
        nivel: 2,
        enunciado: 'No âmbito do Pacto, a avaliação diagnóstica tem caráter predominantemente:',
        alternativas: ['formativo, para orientar o planejamento e a mediação pedagógica.', 'classificatório, para reprovar estudantes com defasagem.', 'punitivo, para responsabilizar professores.', 'seletivo, para acesso ao ensino médio.', 'censitário, substituindo o Censo Escolar.'],
        explicacao: 'O decreto fala em avaliação diagnóstica de caráter formativo e em mapas de progressão para orientar o ensino.',
        porqueErradas: [
          'Não há finalidade de reprovação.',
          'Não há finalidade punitiva.',
          'Não é exame de seleção.',
          'Não substitui o Censo Escolar.',
        ],
      },
      {
        id: 'LE5-5',
        nivel: 3,
        enunciado: 'Assinale a alternativa correta sobre o Decreto nº 12.391/2025.',
        alternativas: [
          'Ele revogou o Decreto nº 11.079/2022 e tem entre suas finalidades mitigar impactos de emergências ou calamidades públicas na oferta educacional.',
          'Ele cria um comitê nacional deliberativo com representantes de todos os Municípios.',
          'Ele obriga a aplicação da Prova Brasil em todas as séries.',
          'Ele substitui a BNCC por referenciais curriculares do MEC.',
          'Ele proíbe parcerias com organizações da sociedade civil.',
        ],
        explicacao: 'O decreto revoga o 11.079/2022 e inclui, entre os objetivos do pacto, mitigar impactos de emergências/calamidades.',
        porqueErradas: [
          'O decreto não cria comitê: o MEC coordena e monitora.',
          'Não há essa obrigação.',
          'A reorganização curricular é alinhada à BNCC, não a substitui.',
          'O decreto admite parcerias com organizações sem fins lucrativos.',
        ],
      },
      {
        id: 'LE5-6',
        nivel: 3,
        enunciado: 'Para a priorização do apoio financeiro da União no âmbito do Pacto, consideram-se, EXCETO:',
        alternativas: [
          'o número de professores com doutorado na rede.',
          'características socioeconômicas, étnico-raciais e de gênero da população atendida.',
          'indicadores de desempenho do Saeb e dos sistemas próprios de avaliação.',
          'o reconhecimento de situação de emergência ou calamidade pela União.',
          'as modalidades específicas de ensino atendidas.',
        ],
        explicacao: 'Titulação docente não é critério de priorização. Os demais constam do art. 20.',
        porqueErradas: [
          'É critério.',
          'É critério.',
          'É critério.',
          'É critério (modalidades específicas).',
        ],
      },
    ],
  },
  {
    id: 'LE6',
    disciplina: 'LE',
    titulo: 'Resolução CNE/CEB nº 4/2010 — DCN Gerais da Educação Básica',
    ementa: 'BRASIL. Resolução CNE/CEB nº 4/2010 - Diretrizes Curriculares Nacionais Gerais para a Educação Básica.',
    semana: 3,
    texto: `As **DCN Gerais** organizam toda a educação básica e são a "moldura" das diretrizes específicas de cada etapa (como a Res. 7/2010). O tema reaparece em Geografia (GE1).

### Etapas e modalidades
- **Etapas**: **educação infantil** (creche: até 3 anos; pré-escola: 4 e 5 anos), **ensino fundamental** (9 anos: anos iniciais, 5 anos; anos finais, 4 anos) e **ensino médio** (mínimo 3 anos).
- **Modalidades**: **Educação de Jovens e Adultos**, **Educação Especial**, **Educação Profissional e Tecnológica**, **Educação Básica do Campo**, **Educação Escolar Indígena**, **Educação a Distância** e **Educação Escolar Quilombola**.

### Concepção de educação e de currículo
- Educação básica como **direito universal** e base para o exercício da cidadania; **cuidar e educar** como indissociáveis.
- **Currículo**: experiências escolares que se desdobram em torno do conhecimento, permeadas pelas **relações sociais**, articulando vivências e saberes dos estudantes aos conhecimentos historicamente acumulados.
- **Base nacional comum + parte diversificada** formam um **todo integrado**, não dois blocos separados.
- Formas de organização curricular: por **disciplinas, áreas, eixos temáticos, projetos**, com **transversalidade** e **interdisciplinaridade**. A transversalidade trata de temas da vida cidadã atravessando os componentes.

### Projeto político-pedagógico e regimento
- O **PPP** é construído **coletivamente** pela comunidade escolar, traduz a identidade da escola e orienta suas práticas; o **regimento escolar** define a organização e as normas.
- **Gestão democrática** e participação da comunidade.

### Avaliação — três dimensões
1. **Avaliação da aprendizagem** — formativa, processual, **prevalência dos aspectos qualitativos**.
2. **Avaliação institucional** interna e externa.
3. **Avaliação de redes** de educação básica (sistemas nacionais, como o Saeb).

### Organização do tempo
Admitidos **séries anuais, períodos semestrais, ciclos, alternância regular de períodos de estudo, grupos não seriados** etc., desde que garantam a aprendizagem.

### Professor
Formação inicial e continuada, valorização e condições de trabalho são condições para a qualidade social da educação.`,
    fontes: [RES4],
    questoes: [
      {
        id: 'LE6-1',
        nivel: 1,
        enunciado: 'Segundo as DCN Gerais para a Educação Básica (Res. CNE/CEB 4/2010), são etapas da educação básica:',
        alternativas: ['educação infantil, ensino fundamental e ensino médio.', 'creche, pré-escola e ensino fundamental.', 'ensino fundamental, ensino médio e educação superior.', 'EJA, educação especial e educação profissional.', 'anos iniciais, anos finais e EJA.'],
        explicacao: 'As três etapas: infantil, fundamental e médio. EJA, especial e profissional são modalidades.',
        porqueErradas: [
          'Creche e pré-escola são subdivisões da educação infantil.',
          'Educação superior não é educação básica.',
          'São modalidades, não etapas.',
          'Mistura subdivisões e modalidade.',
        ],
      },
      {
        id: 'LE6-2',
        nivel: 1,
        enunciado: 'A base nacional comum e a parte diversificada do currículo, segundo as DCN Gerais, devem constituir:',
        alternativas: ['um todo integrado.', 'blocos separados, trabalhados em turnos diferentes.', 'currículos independentes por escola.', 'uma hierarquia, com a parte diversificada opcional.', 'conteúdos apenas do ensino médio.'],
        explicacao: 'A Res. 4/2010 determina que ambas formem um todo integrado.',
        porqueErradas: [
          'Não podem ser blocos estanques.',
          'A base é nacional e comum.',
          'A parte diversificada não é opcional.',
          'Aplica-se a toda a educação básica.',
        ],
      },
      {
        id: 'LE6-3',
        nivel: 2,
        enunciado: 'São modalidades da educação básica previstas nas DCN Gerais, EXCETO:',
        alternativas: ['Educação Superior Tecnológica.', 'Educação Escolar Quilombola.', 'Educação Básica do Campo.', 'Educação Escolar Indígena.', 'Educação de Jovens e Adultos.'],
        explicacao: 'Educação superior não é modalidade da educação básica.',
        porqueErradas: [
          'É modalidade.',
          'É modalidade.',
          'É modalidade.',
          'É modalidade.',
        ],
      },
      {
        id: 'LE6-4',
        nivel: 2,
        enunciado: 'As DCN Gerais preveem três dimensões de avaliação na educação básica:',
        alternativas: [
          'avaliação da aprendizagem; avaliação institucional interna e externa; avaliação de redes de educação básica.',
          'prova, trabalho e participação.',
          'diagnóstica, punitiva e classificatória.',
          'avaliação docente, discente e da família.',
          'Enem, Saeb e Pisa.',
        ],
        explicacao: 'Essas são as três dimensões da Res. 4/2010.',
        porqueErradas: [
          'São instrumentos, não dimensões.',
          'Avaliação punitiva contraria a concepção formativa.',
          'Não é a classificação da resolução.',
          'São exames específicos.',
        ],
      },
      {
        id: 'LE6-5',
        nivel: 3,
        enunciado: 'Quanto ao projeto político-pedagógico, segundo as DCN Gerais, é correto afirmar:',
        alternativas: [
          'deve ser construído coletivamente pela comunidade escolar e traduzir a identidade da escola.',
          'é elaborado exclusivamente pela Secretaria de Educação e enviado às escolas.',
          'é documento facultativo nas escolas públicas.',
          'deve ser idêntico em todas as escolas da rede.',
          'substitui o regimento escolar.',
        ],
        explicacao: 'O PPP é coletivo e expressa a identidade da escola; o regimento é documento complementar.',
        porqueErradas: [
          'Contraria a construção coletiva e a gestão democrática.',
          'Não é facultativo.',
          'Deve refletir a identidade de cada escola.',
          'PPP e regimento coexistem.',
        ],
      },
      {
        id: 'LE6-6',
        nivel: 3,
        enunciado: 'Segundo as DCN Gerais, a organização do tempo escolar pode adotar, EXCETO:',
        alternativas: [
          'exclusivamente a seriação anual, vedados os ciclos.',
          'períodos semestrais.',
          'ciclos.',
          'alternância regular de períodos de estudos.',
          'grupos não seriados.',
        ],
        explicacao: 'A resolução admite várias formas (séries, semestres, ciclos, alternância, grupos não seriados); não há exclusividade da seriação.',
        porqueErradas: [
          'Forma admitida.',
          'Forma admitida.',
          'Forma admitida.',
          'Forma admitida.',
        ],
      },
    ],
  },
  {
    id: 'LE7',
    disciplina: 'LE',
    titulo: 'Resolução CNE/CEB nº 7/2010 — DCN do Ensino Fundamental de 9 anos',
    ementa: 'BRASIL. Resolução CNE/CEB nº 7/2010 - Diretrizes Curriculares Nacionais para o Ensino Fundamental de 9 anos.',
    semana: 3,
    texto: `Diretrizes específicas do ensino fundamental — **a etapa em que ela vai dar aula** (6º ao 9º ano), por isso também aparece em GE1.

### Pontos-chave
- **Matrícula obrigatória** no 1º ano para crianças com **6 anos completos ou a completar até 31 de março** do ano da matrícula.
- **Duração de 9 anos**: **anos iniciais** (5 anos, 1º ao 5º) e **anos finais** (4 anos, 6º ao 9º).
- **Carga horária mínima anual de 800 horas**, em pelo menos **200 dias** de efetivo trabalho escolar.
- **Princípios** que orientam as políticas educativas e as ações pedagógicas: **éticos** (justiça, solidariedade, liberdade, autonomia, respeito à dignidade), **políticos** (direitos e deveres de cidadania, respeito ao bem comum e à democracia) e **estéticos** (sensibilidade, criatividade, valorização das manifestações culturais).

### Componentes curriculares obrigatórios (organizados por áreas)
- **Linguagens**: Língua Portuguesa; Língua Materna (para populações indígenas); Língua Estrangeira moderna; Arte; Educação Física.
- **Matemática**.
- **Ciências da Natureza**.
- **Ciências Humanas**: **História** e **Geografia**.
- **Ensino Religioso** (matrícula facultativa).
Temas sociais (saúde, sexualidade, vida familiar, meio ambiente, trabalho, ciência e tecnologia, cultura, diversidade) permeiam o currículo **de forma transversal**.

### Os três primeiros anos
Os **três anos iniciais** devem assegurar a **alfabetização e o letramento** e são tratados como um **bloco pedagógico ou ciclo sequencial não passível de interrupção** — mesmo quando a escola adota seriação.

### Avaliação
Formativa, **processual, diagnóstica, participativa**, com **prevalência dos aspectos qualitativos sobre os quantitativos**; os resultados devem orientar intervenções. **Recuperação**, preferencialmente **paralela** e contínua. Atenção à **transição** entre os anos iniciais e finais (mudança de professor único para vários especialistas — **seu ponto de chegada como PEB III**).

### Integração
Articulação com a educação infantil e com o ensino médio; atenção às **diferenças**, à educação especial, ao campo, indígenas e quilombolas; possibilidade de **educação em tempo integral**.`,
    fontes: [RES7],
    questoes: [
      {
        id: 'LE7-1',
        nivel: 1,
        enunciado: 'Segundo a Res. CNE/CEB 7/2010, é obrigatória a matrícula no ensino fundamental de crianças com:',
        alternativas: ['6 anos completos ou a completar até 31 de março do ano da matrícula.', '7 anos completos até 31 de dezembro.', '6 anos completos até 30 de junho.', '5 anos completos até 31 de março.', '6 anos completos até 31 de dezembro.'],
        explicacao: 'Data de corte de 31 de março.',
        porqueErradas: [
          'Idade e data incorretas.',
          'A data de corte é 31 de março.',
          'Aos 5 anos a criança está na pré-escola.',
          'A data de corte é 31 de março.',
        ],
      },
      {
        id: 'LE7-2',
        nivel: 1,
        enunciado: 'Na Res. CNE/CEB 7/2010, Geografia integra a área de:',
        alternativas: ['Ciências Humanas, juntamente com História.', 'Ciências da Natureza, juntamente com Ciências.', 'Linguagens.', 'Matemática.', 'Ensino Religioso.'],
        explicacao: 'Ciências Humanas: História e Geografia.',
        porqueErradas: [
          'Ciências da Natureza é outra área.',
          'Linguagens reúne Português, línguas, Arte, Educação Física.',
          'Área própria.',
          'Componente/área próprio, de matrícula facultativa.',
        ],
      },
      {
        id: 'LE7-3',
        nivel: 2,
        enunciado: 'Segundo a Res. CNE/CEB 7/2010, os três anos iniciais do ensino fundamental devem ser considerados:',
        alternativas: [
          'um bloco pedagógico ou ciclo sequencial não passível de interrupção, voltado à alfabetização e ao letramento.',
          'anos com retenção obrigatória ao final de cada ano.',
          'etapa da educação infantil.',
          'anos sem avaliação.',
          'anos dedicados exclusivamente à matemática.',
        ],
        explicacao: 'Mesmo com seriação, os três primeiros anos formam um bloco/ciclo voltado à alfabetização e ao letramento.',
        porqueErradas: [
          'Contraria a ideia de ciclo não passível de interrupção.',
          'São do ensino fundamental.',
          'Há avaliação, formativa.',
          'Não há tal restrição.',
        ],
      },
      {
        id: 'LE7-4',
        nivel: 2,
        enunciado: 'Os princípios éticos, políticos e estéticos da Res. 7/2010 incluem, respectivamente:',
        alternativas: [
          'justiça e solidariedade; direitos e deveres de cidadania; sensibilidade e criatividade.',
          'disciplina; obediência; uniformidade.',
          'competição; meritocracia; padronização.',
          'criatividade; justiça; democracia.',
          'avaliação; recuperação; promoção.',
        ],
        explicacao: 'Éticos (justiça, solidariedade, autonomia), políticos (cidadania, democracia) e estéticos (sensibilidade, criatividade).',
        porqueErradas: [
          'Não são os princípios da resolução.',
          'Não são os princípios da resolução.',
          'Ordem trocada: criatividade é estético; justiça é ético.',
          'São procedimentos de avaliação.',
        ],
      },
      {
        id: 'LE7-5',
        nivel: 3,
        enunciado: 'Sobre a avaliação no ensino fundamental, segundo a Res. 7/2010, é INCORRETO afirmar:',
        alternativas: [
          'deve priorizar aspectos quantitativos e servir principalmente para classificar os alunos.',
          'deve ser processual, diagnóstica e participativa.',
          'deve orientar intervenções pedagógicas.',
          'deve prever recuperação, preferencialmente paralela.',
          'deve considerar a prevalência dos aspectos qualitativos sobre os quantitativos.',
        ],
        explicacao: 'A resolução determina prevalência do qualitativo e caráter formativo, não classificatório.',
        porqueErradas: [
          'Correto.',
          'Correto.',
          'Correto.',
          'Correto.',
        ],
      },
      {
        id: 'LE7-6',
        nivel: 3,
        enunciado: 'A Res. 7/2010 recomenda atenção especial à transição entre os anos iniciais e finais do ensino fundamental principalmente porque:',
        alternativas: [
          'o estudante passa de um professor generalista para vários professores especialistas, o que exige articulação pedagógica.',
          'nos anos finais não há mais avaliação.',
          'nos anos finais o ensino religioso torna-se obrigatório.',
          'nos anos finais o aluno muda para o ensino médio.',
          'os anos finais pertencem à educação infantil.',
        ],
        explicacao: 'A mudança na organização docente (professor único → professores por componente) é ponto crítico de transição.',
        porqueErradas: [
          'Há avaliação.',
          'É sempre facultativo para o aluno.',
          'Anos finais ainda são ensino fundamental.',
          'Erro conceitual.',
        ],
      },
    ],
  },
  {
    id: 'LE8',
    disciplina: 'LE',
    titulo: 'Resolução CNE/CEB nº 5/2009 — DCN da Educação Infantil',
    ementa: 'BRASIL. Resolução CNE/CEB nº 5/2009 - Diretrizes Curriculares Nacionais para a Educação Infantil.',
    semana: 4,
    texto: `Embora o cargo seja do 6º ano ao Ensino Médio, a resolução está na **Legislação do Ensino comum a todos os cargos** — é possível cair uma questão. Foque nos números e nos eixos.

### Definições
- **Educação infantil**: primeira etapa da educação básica, oferecida em **creches e pré-escolas** — espaços institucionais **não domésticos**, públicos ou privados, que **educam e cuidam** de crianças de **0 a 5 anos** no período **diurno**, em jornada integral ou parcial, regulados e supervisionados por órgão do sistema de ensino.
- **Criança**: sujeito histórico e de direitos, que constrói sua identidade nas interações, relações e práticas cotidianas, brinca, imagina, fantasia, deseja, aprende, observa, experimenta, narra, questiona e **produz cultura**.
- **Currículo**: conjunto de práticas que articulam **experiências e saberes das crianças** com os conhecimentos do patrimônio cultural, artístico, ambiental, científico e tecnológico.

### Regras numéricas
- **Matrícula obrigatória na pré-escola** para crianças que completam **4 ou 5 anos até 31 de março** do ano da matrícula.
- Jornada **parcial: mínimo de 4 horas** diárias; **integral: igual ou superior a 7 horas**.
- **Não substitui** a família e **não** antecipa conteúdos do ensino fundamental.

### Princípios
**Éticos** (autonomia, responsabilidade, solidariedade, respeito ao bem comum, ao meio ambiente e às diferentes culturas), **políticos** (direitos de cidadania, criticidade, respeito à ordem democrática) e **estéticos** (sensibilidade, criatividade, ludicidade, liberdade de expressão).

### Eixos das práticas pedagógicas
**Interações e brincadeira** — os dois eixos norteadores (art. 9º).

### Avaliação
Acompanhamento do trabalho pedagógico e do desenvolvimento, **sem objetivo de seleção, promoção ou classificação**; observação crítica e criativa das atividades; **registros variados** (relatórios, fotografias, desenhos, álbuns); documentação que permita às famílias conhecer o processo; **não retenção** na educação infantil.

### Transição
Garantir a continuidade no ensino fundamental **sem antecipação de conteúdos**.`,
    fontes: [RES5],
    questoes: [
      {
        id: 'LE8-1',
        nivel: 1,
        enunciado: 'Segundo a Res. CNE/CEB 5/2009, os eixos norteadores das práticas pedagógicas na educação infantil são:',
        alternativas: ['interações e brincadeira.', 'leitura e escrita.', 'disciplina e rotina.', 'cálculo e alfabetização.', 'avaliação e promoção.'],
        explicacao: 'Art. 9º: interações e brincadeira.',
        porqueErradas: [
          'Não são eixos da resolução e sugerem antecipação do fundamental.',
          'Não são eixos da resolução.',
          'Antecipação de conteúdos do fundamental.',
          'Não há promoção na educação infantil.',
        ],
      },
      {
        id: 'LE8-2',
        nivel: 1,
        enunciado: 'Pela Res. 5/2009, a jornada em tempo integral na educação infantil é aquela:',
        alternativas: ['igual ou superior a 7 horas diárias.', 'igual ou superior a 4 horas diárias.', 'igual ou superior a 10 horas diárias.', 'de exatamente 6 horas diárias.', 'igual ou superior a 8 horas diárias.'],
        explicacao: 'Parcial: mínimo de 4 horas; integral: igual ou superior a 7 horas.',
        porqueErradas: [
          '4 horas é o mínimo da jornada parcial.',
          'Não é o critério.',
          'Não é o critério.',
          'Não é o critério.',
        ],
      },
      {
        id: 'LE8-3',
        nivel: 2,
        enunciado: 'Segundo a Res. 5/2009, a avaliação na educação infantil deve:',
        alternativas: [
          'acompanhar o trabalho pedagógico e o desenvolvimento, sem objetivo de seleção, promoção ou classificação.',
          'usar provas escritas para promover as crianças à série seguinte.',
          'reter as crianças que não forem alfabetizadas.',
          'classificar as crianças por desempenho.',
          'ser feita apenas no fim do ano letivo.',
        ],
        explicacao: 'Avaliação por acompanhamento e registros, sem seleção, promoção ou classificação.',
        porqueErradas: [
          'Contraria a resolução.',
          'Não há retenção.',
          'Não há classificação.',
          'É processual e contínua.',
        ],
      },
      {
        id: 'LE8-4',
        nivel: 2,
        enunciado: 'Segundo a Res. 5/2009, a criança é concebida como:',
        alternativas: [
          'sujeito histórico e de direitos, que produz cultura nas interações e práticas cotidianas.',
          'adulto em miniatura, que deve ser preparada para o trabalho.',
          'ser passivo, que recebe conhecimentos prontos do professor.',
          'aluno que deve ser alfabetizado antes dos 5 anos.',
          'objeto de cuidados exclusivamente assistenciais.',
        ],
        explicacao: 'Definição da resolução: sujeito histórico e de direitos que produz cultura.',
        porqueErradas: [
          'Concepção superada.',
          'A criança é ativa e produtora de cultura.',
          'Não há antecipação de alfabetização.',
          'Cuidar e educar são indissociáveis.',
        ],
      },
      {
        id: 'LE8-5',
        nivel: 3,
        enunciado: 'Analise: I. A educação infantil é oferecida em espaços institucionais não domésticos. II. É obrigatória a matrícula na pré-escola de crianças que completam 4 ou 5 anos até 31 de março. III. A educação infantil deve antecipar conteúdos do ensino fundamental para facilitar a transição. Está correto o que se afirma em:',
        alternativas: ['I e II, apenas.', 'I, II e III.', 'II e III, apenas.', 'I e III, apenas.', 'III, apenas.'],
        explicacao: 'III é falsa: a transição deve ocorrer sem antecipação de conteúdos.',
        porqueErradas: [
          'III está incorreta.',
          'III está incorreta.',
          'III está incorreta.',
          'III está incorreta.',
        ],
      },
      {
        id: 'LE8-6',
        nivel: 3,
        enunciado: 'Os princípios estéticos da Res. 5/2009 compreendem:',
        alternativas: [
          'sensibilidade, criatividade, ludicidade e liberdade de expressão.',
          'autonomia, responsabilidade e solidariedade.',
          'direitos de cidadania e respeito à ordem democrática.',
          'disciplina, ordem e higiene.',
          'competição e mérito.',
        ],
        explicacao: 'Estéticos: sensibilidade, criatividade, ludicidade e liberdade de expressão nas manifestações artísticas e culturais.',
        porqueErradas: [
          'São princípios éticos.',
          'São princípios políticos.',
          'Não são princípios da resolução.',
          'Não são princípios da resolução.',
        ],
      },
    ],
  },
]
