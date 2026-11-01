import type { Topico } from './types.ts'

const CORTEZ = { titulo: 'Cortez Editora (Libâneo, Luckesi, Morin)', url: 'https://www.cortezeditora.com.br/' }
const GRUPOA = { titulo: 'Grupo A — Artmed/Penso (Zabala, Perrenoud, Lerner)', url: 'https://loja.grupoa.com.br/' }
const SUMMUS = { titulo: 'Summus Editorial (Aquino, Mantoan)', url: 'https://www.summus.com.br/' }
const UNESDOC = { titulo: 'UNESDOC — biblioteca digital da UNESCO (Delors, Morin, Glossário IBE)', url: 'https://unesdoc.unesco.org/' }
const LEI_BULLYING = { titulo: 'Lei nº 13.185/2015 — Programa de Combate à Intimidação Sistemática', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13185.htm' }
const LBI = { titulo: 'Lei nº 13.146/2015 — Lei Brasileira de Inclusão', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm' }

export const TOPICOS_CP: Topico[] = [
  {
    id: 'CP1',
    disciplina: 'CP',
    titulo: 'A formação social da mente (Vygotsky)',
    ementa: 'A formação social da mente.',
    semana: 3,
    texto: `Lev **Vygotsky** (1896–1934) é a base da abordagem **sociointeracionista** (ou histórico-cultural). Ideia central: as **funções psicológicas superiores** (atenção voluntária, memória lógica, pensamento abstrato, linguagem) têm **origem social** — nascem nas relações entre pessoas e só depois são internalizadas.

### Conceitos que caem
- **Mediação**: a relação do ser humano com o mundo **não é direta**; é mediada por **instrumentos** (ferramentas, que agem sobre o mundo externo) e **signos** (sobretudo a **linguagem**, que agem sobre o psiquismo). O professor é um **mediador** privilegiado.
- **Internalização**: todo processo psicológico aparece **duas vezes** — primeiro no plano **interpsicológico** (entre pessoas, social) e depois no **intrapsicológico** (dentro da criança). "O caminho do objeto até a criança e desta até o objeto passa através de outra pessoa."
- **Zona de Desenvolvimento Proximal (ZDP)**: a distância entre o **nível de desenvolvimento real** (o que a criança faz **sozinha**, funções já amadurecidas) e o **nível de desenvolvimento potencial** (o que faz **com ajuda** de um adulto ou de um **colega mais capaz**). O "bom ensino" é o que **se adianta ao desenvolvimento** e atua na ZDP — o que hoje a criança faz com ajuda, amanhã fará sozinha.
- **Aprendizagem e desenvolvimento**: para Vygotsky, a **aprendizagem impulsiona o desenvolvimento** (diferente de Piaget, para quem o desenvolvimento é condição da aprendizagem).
- **Pensamento e linguagem**: têm raízes diferentes e se encontram por volta dos 2 anos; a **fala egocêntrica** é uma transição para a **fala interior**, que organiza o pensamento.
- **Brinquedo/brincadeira de faz de conta**: cria uma ZDP — a criança se comporta "além da sua idade", seguindo **regras** implícitas no papel que representa.
- **Conceitos espontâneos** (da experiência cotidiana) x **científicos** (sistematizados pela escola): a escola é essencial para a formação dos científicos.

### Implicações para a sala de aula
Trabalho em **grupos heterogêneos**, interação entre alunos, intervenção deliberada do professor, valorização da **linguagem** como ferramenta de pensamento e diagnóstico do que o aluno já faz sozinho e do que faz com ajuda.`,
    fontes: [{ titulo: 'Martins Fontes — A formação social da mente (editora da bibliografia)', url: 'https://www.martinsfontespaulista.com.br/' }],
    questoes: [
      {
        id: 'CP1-1',
        nivel: 1,
        enunciado: 'Para Vygotsky, a Zona de Desenvolvimento Proximal é a distância entre:',
        alternativas: [
          'o nível de desenvolvimento real e o nível de desenvolvimento potencial.',
          'a idade cronológica e a idade mental.',
          'o estágio sensório-motor e o pré-operatório.',
          'o que a criança aprende na escola e o que aprende em casa.',
          'a assimilação e a acomodação.',
        ],
        explicacao: 'Real = o que faz sozinha; potencial = o que faz com ajuda de alguém mais experiente.',
        porqueErradas: [
          'Conceito psicométrico, alheio à ZDP.',
          'Estágios são de Piaget.',
          'Não é a definição.',
          'Assimilação e acomodação são de Piaget.',
        ],
      },
      {
        id: 'CP1-2',
        nivel: 1,
        enunciado: 'Na teoria de Vygotsky, os principais elementos mediadores da relação do homem com o mundo são:',
        alternativas: ['instrumentos e signos.', 'estímulos e respostas.', 'assimilação e acomodação.', 'id, ego e superego.', 'reforço positivo e negativo.'],
        explicacao: 'Instrumentos (agem sobre o mundo) e signos (agem sobre o psiquismo, como a linguagem).',
        porqueErradas: [
          'Vocabulário behaviorista.',
          'Conceitos piagetianos.',
          'Conceitos de Freud.',
          'Vocabulário behaviorista (Skinner).',
        ],
      },
      {
        id: 'CP1-3',
        nivel: 2,
        enunciado: 'Segundo Vygotsky, toda função no desenvolvimento cultural da criança aparece duas vezes:',
        alternativas: [
          'primeiro no nível social (interpsicológico) e depois no individual (intrapsicológico).',
          'primeiro no nível individual e depois no social.',
          'primeiro no plano biológico e depois no motor.',
          'primeiro na família e depois na escola, sempre nessa ordem.',
          'primeiro no pensamento e depois na ação.',
        ],
        explicacao: 'É a lei da dupla formação: do inter para o intrapsicológico (internalização).',
        porqueErradas: [
          'Inverte a ordem.',
          'Não é a formulação de Vygotsky.',
          'Vygotsky fala em planos psicológicos, não instituições.',
          'Não é a formulação.',
        ],
      },
      {
        id: 'CP1-4',
        nivel: 2,
        enunciado: 'Uma professora organiza duplas em que um aluno com mais domínio de mapas auxilia outro com menos domínio. À luz de Vygotsky, essa estratégia:',
        alternativas: [
          'atua na zona de desenvolvimento proximal, aproveitando a interação com um par mais capaz.',
          'é inadequada, pois a aprendizagem deve ser individual.',
          'só funciona após o estágio operatório formal.',
          'substitui o papel do professor.',
          'gera dependência e impede a autonomia.',
        ],
        explicacao: 'O potencial inclui o que a criança faz em colaboração com companheiros mais capazes.',
        porqueErradas: [
          'Contraria o sociointeracionismo.',
          'Estágios são de Piaget.',
          'O professor segue como mediador.',
          'A ajuda de hoje vira autonomia amanhã.',
        ],
      },
      {
        id: 'CP1-5',
        nivel: 3,
        enunciado: 'Sobre a relação entre aprendizagem e desenvolvimento em Vygotsky, é correto afirmar:',
        alternativas: [
          'a aprendizagem adequadamente organizada impulsiona processos de desenvolvimento.',
          'o desenvolvimento precisa estar completo para que haja aprendizagem.',
          'aprendizagem e desenvolvimento são processos idênticos.',
          'o desenvolvimento é puramente biológico, sem influência da cultura.',
          'a escola não interfere no desenvolvimento.',
        ],
        explicacao: 'Para Vygotsky, o bom ensino se adianta ao desenvolvimento e o puxa.',
        porqueErradas: [
          'Aproxima-se da visão piagetiana.',
          'Vygotsky os distingue.',
          'O desenvolvimento é histórico-cultural.',
          'A escola é decisiva (conceitos científicos).',
        ],
      },
      {
        id: 'CP1-6',
        nivel: 3,
        enunciado: 'Para Vygotsky, a brincadeira de faz de conta é importante porque:',
        alternativas: [
          'cria uma zona de desenvolvimento proximal, levando a criança a agir além do seu comportamento habitual, seguindo regras do papel.',
          'é apenas uma forma de descarregar energia acumulada.',
          'deve ser substituída por atividades acadêmicas o quanto antes.',
          'não tem regras, sendo pura liberdade.',
          'só tem valor no estágio sensório-motor.',
        ],
        explicacao: 'No brinquedo a criança se comporta além da idade e se submete a regras implícitas (o papel de mãe, de médico).',
        porqueErradas: [
          'Teoria do excedente de energia, não vygotskiana.',
          'Contraria a teoria.',
          'Para Vygotsky, todo faz de conta tem regras implícitas.',
          'Estágio de Piaget.',
        ],
      },
    ],
  },
  {
    id: 'CP2',
    disciplina: 'CP',
    titulo: 'Teorias psicogenéticas: Piaget, Vygotsky e Wallon',
    ementa: 'Teorias psicogenéticas.',
    semana: 3,
    texto: `O livro da bibliografia (**La Taille, Oliveira e Dantas — "Piaget, Vygotsky, Wallon: teorias psicogenéticas em discussão"**) compara os três autores a partir de dois temas: **afetividade e cognição** e **desenvolvimento do juízo moral**. Todos são **interacionistas**: o desenvolvimento resulta da interação do sujeito com o meio — mas cada um dá ênfase diferente.

### Jean Piaget — epistemologia genética (construtivismo)
- O conhecimento é **construído** pelo sujeito na ação sobre os objetos.
- **Assimilação** (incorporar o novo aos esquemas existentes), **acomodação** (modificar os esquemas) e **equilibração** (busca de equilíbrio diante do conflito cognitivo).
- **Estágios**: **sensório-motor** (0–2 anos: inteligência prática, permanência do objeto); **pré-operatório** (2–7: função simbólica, linguagem, **egocentrismo**, ausência de reversibilidade e de conservação); **operatório concreto** (7–11/12: reversibilidade, conservação, classificação, seriação, sempre sobre o concreto); **operatório formal** (a partir de 11/12: raciocínio **hipotético-dedutivo**, abstração).
- **Juízo moral**: **anomia** (sem regras) → **heteronomia** (regras vêm de fora, respeito unilateral, autoridade adulta) → **autonomia** (regras como acordos, respeito mútuo, cooperação).
- Afetividade: é a "energia" do comportamento, enquanto a cognição dá a "estrutura" — inseparáveis.

### Lev Vygotsky — sociointeracionismo (ver CP1)
Ênfase na **cultura**, na **linguagem** e na **mediação**; ZDP; aprendizagem impulsiona o desenvolvimento.

### Henri Wallon — psicogênese da pessoa completa
- Estuda a pessoa de forma **integral**: **afetividade, motricidade (ato motor) e cognição** inseparáveis.
- **Emoção** é a primeira forma de comunicação do bebê; é **contagiosa** e visível no tônus muscular.
- **Estágios**: **impulsivo-emocional** (0–1 ano), **sensório-motor e projetivo** (1–3), **personalismo** (3–6: formação do eu, oposição, sedução, imitação), **categorial** (6–11: pensamento categorial, atenção, memória voluntária), **puberdade e adolescência** (11+).
- **Alternância funcional**: estágios com **predominância afetiva** (voltados para o eu) alternam-se com estágios de **predominância cognitiva** (voltados para o mundo externo).
- O desenvolvimento **não é linear**: há **conflitos e crises** que impulsionam a mudança.

### Como a banca cobra
Associações: "assimilação/acomodação" → **Piaget**; "mediação/ZDP" → **Vygotsky**; "afetividade, emoção, pessoa completa, tônus" → **Wallon**; "heteronomia/autonomia moral" → **Piaget**.`,
    fontes: [{ titulo: 'Summus — Piaget, Vygotsky, Wallon: teorias psicogenéticas em discussão', url: 'https://www.summus.com.br/' }],
    questoes: [
      {
        id: 'CP2-1',
        nivel: 1,
        enunciado: 'Os conceitos de assimilação, acomodação e equilibração pertencem à teoria de:',
        alternativas: ['Jean Piaget.', 'Lev Vygotsky.', 'Henri Wallon.', 'B. F. Skinner.', 'Howard Gardner.'],
        explicacao: 'São os mecanismos de adaptação da epistemologia genética de Piaget.',
        porqueErradas: [
          'Vygotsky: mediação, ZDP.',
          'Wallon: afetividade, emoção, estágios da pessoa.',
          'Skinner: condicionamento operante.',
          'Gardner: inteligências múltiplas.',
        ],
      },
      {
        id: 'CP2-2',
        nivel: 1,
        enunciado: 'O autor que propôs a psicogênese da pessoa completa, integrando afetividade, ato motor e cognição, foi:',
        alternativas: ['Henri Wallon.', 'Jean Piaget.', 'Lev Vygotsky.', 'Paulo Freire.', 'Edgar Morin.'],
        explicacao: 'Wallon estuda a pessoa de forma integral, com destaque para a emoção e o movimento.',
        porqueErradas: [
          'Ênfase na construção cognitiva.',
          'Ênfase na mediação cultural.',
          'Educador, não teórico psicogenético.',
          'Filósofo da complexidade.',
        ],
      },
      {
        id: 'CP2-3',
        nivel: 2,
        enunciado: 'No estágio pré-operatório de Piaget, a criança caracteriza-se por:',
        alternativas: [
          'função simbólica, egocentrismo e ausência de reversibilidade.',
          'raciocínio hipotético-dedutivo.',
          'domínio da conservação de quantidades.',
          'inteligência exclusivamente prática, sem representação.',
          'pensamento categorial e memória voluntária.',
        ],
        explicacao: 'Pré-operatório (2–7): linguagem e símbolos, egocentrismo, sem reversibilidade nem conservação.',
        porqueErradas: [
          'Operatório formal.',
          'Operatório concreto.',
          'Sensório-motor.',
          'Estágio categorial de Wallon.',
        ],
      },
      {
        id: 'CP2-4',
        nivel: 2,
        enunciado: 'Para Piaget, a moral autônoma caracteriza-se por:',
        alternativas: [
          'respeito mútuo e regras entendidas como acordos que podem ser modificados por consenso.',
          'obediência às regras impostas pelo adulto, por respeito unilateral.',
          'ausência total de regras.',
          'punição expiatória como forma de justiça.',
          'medo do castigo como motivação principal.',
        ],
        explicacao: 'Na autonomia, as regras resultam de cooperação e respeito mútuo.',
        porqueErradas: [
          'Heteronomia.',
          'Anomia.',
          'Própria da heteronomia.',
          'Própria da heteronomia.',
        ],
      },
      {
        id: 'CP2-5',
        nivel: 3,
        enunciado: 'Em Wallon, a alternância funcional refere-se:',
        alternativas: [
          'à sucessão de estágios com predominância afetiva (voltados ao eu) e com predominância cognitiva (voltados ao mundo exterior).',
          'à alternância entre assimilação e acomodação.',
          'à passagem do nível real ao potencial.',
          'à troca de professores entre anos iniciais e finais.',
          'ao revezamento entre fala egocêntrica e fala interior.',
        ],
        explicacao: 'Para Wallon, os estágios alternam predominâncias afetivas e cognitivas; o desenvolvimento é descontínuo e marcado por crises.',
        porqueErradas: [
          'Conceitos de Piaget.',
          'ZDP de Vygotsky.',
          'Não se relaciona à teoria.',
          'Tema de Vygotsky.',
        ],
      },
      {
        id: 'CP2-6',
        nivel: 3,
        enunciado: 'Assinale a associação INCORRETA entre autor e conceito.',
        alternativas: [
          'Wallon — zona de desenvolvimento proximal.',
          'Piaget — equilibração.',
          'Vygotsky — mediação simbólica.',
          'Wallon — emoção como primeira forma de comunicação.',
          'Piaget — heteronomia e autonomia moral.',
        ],
        explicacao: 'ZDP é conceito de Vygotsky.',
        porqueErradas: [
          'Correta.',
          'Correta.',
          'Correta.',
          'Correta.',
        ],
      },
    ],
  },
  {
    id: 'CP3',
    disciplina: 'CP',
    titulo: 'As inteligências múltiplas e seus estímulos (Gardner / Celso Antunes)',
    ementa: 'As inteligências múltiplas e seus estímulos: relação entre inteligência e aprendizagem.',
    semana: 4,
    texto: `Howard **Gardner** (Harvard, *Estruturas da Mente*, 1983) rompeu com a ideia de **inteligência única**, medida por QI. Para ele, inteligência é a **capacidade de resolver problemas ou criar produtos valorizados em um ou mais contextos culturais**. **Celso Antunes** (bibliografia) traduz a teoria para a prática escolar, propondo **estímulos** para cada inteligência.

### As inteligências (8 consolidadas)
1. **Linguística (verbal)** — sensibilidade a palavras, sons, significados: escritores, poetas.
2. **Lógico-matemática** — raciocínio dedutivo, números, padrões: cientistas.
3. **Espacial (visuoespacial)** — perceber e transformar imagens mentais: arquitetos, navegadores, **cartógrafos** (a Geografia estimula muito esta!).
4. **Musical** — ritmo, timbre, melodia.
5. **Corporal-cinestésica** — controle do corpo e manipulação de objetos: atletas, artesãos, cirurgiões.
6. **Interpessoal** — compreender e interagir com os outros: professores, líderes.
7. **Intrapessoal** — autoconhecimento, regular as próprias emoções.
8. **Naturalista** — reconhecer e classificar elementos da natureza (incluída em 1995).
Gardner discutiu também a **existencial** (questões sobre a existência), sem incluí-la definitivamente.

### Ideias de Celso Antunes
- Todas as pessoas têm **todas** as inteligências, em graus diferentes; elas **podem ser estimuladas** e trabalham **de forma integrada**.
- **Janelas de oportunidade**: períodos da vida em que o cérebro está mais receptivo a certos estímulos (ex.: linguagem e música na primeira infância). Elas **não se fecham completamente**, mas o aprendizado depois exige mais esforço.
- A escola tradicional privilegia só a **linguística** e a **lógico-matemática**; um bom planejamento **diversifica** atividades (mapas, músicas, dramatizações, trabalho em grupo, diários reflexivos, saídas de campo) para alcançar todos.
- Inteligência **não é destino**: é potencial que depende de estímulo e contexto.

### Relação inteligência–aprendizagem
Se há várias formas de ser inteligente, há várias formas de aprender e de **demonstrar** o que se aprendeu → **avaliação diversificada**, não só prova escrita.`,
    fontes: [{ titulo: 'Papirus — As inteligências múltiplas e seus estímulos (Celso Antunes)', url: 'https://www.papirus.com.br/' }],
    verificar: ['A bibliografia cita "As inteligências múltiplas e seus estímulos" (Papirus). Conferir as janelas de oportunidade com a obra.'],
    questoes: [
      {
        id: 'CP3-1',
        nivel: 1,
        enunciado: 'A teoria das inteligências múltiplas foi proposta por:',
        alternativas: ['Howard Gardner.', 'Jean Piaget.', 'Philippe Perrenoud.', 'Antoni Zabala.', 'Alfred Binet.'],
        explicacao: 'Gardner propôs a teoria em "Estruturas da Mente" (1983).',
        porqueErradas: [
          'Epistemologia genética.',
          'Competências docentes.',
          'Prática educativa.',
          'Criador dos testes de QI, a visão que Gardner critica.',
        ],
      },
      {
        id: 'CP3-2',
        nivel: 1,
        enunciado: 'A inteligência relacionada à capacidade de perceber o mundo visual e criar representações mentais, como mapas, é a:',
        alternativas: ['espacial.', 'interpessoal.', 'musical.', 'intrapessoal.', 'linguística.'],
        explicacao: 'A espacial envolve perceber e manipular imagens mentais — central na cartografia.',
        porqueErradas: [
          'Relação com os outros.',
          'Ritmo e melodia.',
          'Autoconhecimento.',
          'Palavras e linguagem.',
        ],
      },
      {
        id: 'CP3-3',
        nivel: 2,
        enunciado: 'Para Gardner, inteligência é:',
        alternativas: [
          'a capacidade de resolver problemas ou criar produtos valorizados em um ou mais contextos culturais.',
          'um traço único, inato e medido pelo QI.',
          'a soma das notas escolares.',
          'a capacidade exclusiva de raciocínio lógico.',
          'um atributo fixo que não se modifica com estímulos.',
        ],
        explicacao: 'Definição clássica de Gardner.',
        porqueErradas: [
          'É a visão que Gardner contesta.',
          'Notas não definem inteligência.',
          'Reduz à lógico-matemática.',
          'Para Antunes, as inteligências podem ser estimuladas.',
        ],
      },
      {
        id: 'CP3-4',
        nivel: 2,
        enunciado: 'Segundo Celso Antunes, as "janelas de oportunidade" são:',
        alternativas: [
          'períodos em que o cérebro está mais receptivo a determinados estímulos, favorecendo certas aprendizagens.',
          'momentos do ano letivo reservados a avaliações.',
          'intervalos entre as aulas.',
          'oportunidades de emprego para professores.',
          'fases em que a aprendizagem se torna impossível.',
        ],
        explicacao: 'São períodos de maior plasticidade para certas aprendizagens; depois, a aprendizagem continua possível, mas exige mais esforço.',
        porqueErradas: [
          'Não se relaciona à teoria.',
          'Não se relaciona à teoria.',
          'Não se relaciona à teoria.',
          'As janelas não se fecham por completo.',
        ],
      },
      {
        id: 'CP3-5',
        nivel: 3,
        enunciado: 'Uma professora de Geografia propõe, na mesma sequência didática, construção de maquete do relevo, debate em grupo, diário reflexivo e leitura de mapas. À luz das inteligências múltiplas, essa proposta:',
        alternativas: [
          'diversifica estímulos, mobilizando inteligências como a espacial, a corporal-cinestésica, a interpessoal e a intrapessoal.',
          'é inadequada porque dispersa o foco do conteúdo.',
          'privilegia apenas a inteligência linguística.',
          'contraria a teoria, que recomenda trabalhar uma inteligência por vez.',
          'é útil apenas para alunos com dificuldades de aprendizagem.',
        ],
        explicacao: 'A diversificação atinge diferentes perfis e integra inteligências.',
        porqueErradas: [
          'Contraria a proposta de Antunes.',
          'Há várias inteligências envolvidas.',
          'As inteligências atuam de forma integrada.',
          'Beneficia todos os alunos.',
        ],
      },
      {
        id: 'CP3-6',
        nivel: 3,
        enunciado: 'Uma implicação da teoria das inteligências múltiplas para a avaliação escolar é:',
        alternativas: [
          'diversificar instrumentos para que o aluno demonstre o que aprendeu por diferentes linguagens.',
          'aplicar apenas provas objetivas, por serem mais justas.',
          'classificar os alunos por tipo de inteligência e separá-los em turmas.',
          'eliminar a avaliação.',
          'avaliar apenas a inteligência lógico-matemática.',
        ],
        explicacao: 'Se há várias formas de aprender, deve haver várias formas de demonstrar a aprendizagem.',
        porqueErradas: [
          'Restringe a uma linguagem.',
          'Rotula e segrega, contrariando a teoria.',
          'A teoria não propõe eliminar a avaliação.',
          'Reduz a uma inteligência.',
        ],
      },
    ],
  },
  {
    id: 'CP4',
    disciplina: 'CP',
    titulo: 'A prática educativa — como ensinar (Antoni Zabala)',
    ementa: 'A prática educativa – unidades de análise; a função social do ensino e a concepção sobre os processos de aprendizagem – instrumentos de análise; as sequências didáticas e as sequências de conteúdo; as relações interativas em sala de aula – o papel dos professores e dos alunos; a organização social da classe; a organização dos conteúdos; os materiais curriculares e outros recursos didáticos; a avaliação.',
    semana: 2,
    texto: `Esta é a parte da ementa **copiada do sumário do livro de Zabala** — então cada capítulo pode virar questão.

### Unidades de análise (cap. 1)
A prática educativa é complexa; para analisá-la, Zabala propõe como unidade a **sequência didática**: "um conjunto de **atividades ordenadas, estruturadas e articuladas** para a realização de certos **objetivos educacionais**, com **princípio e fim** conhecidos". As **variáveis** que configuram a prática: as sequências de atividades; o papel de professores e alunos; a **organização social da aula**; a utilização dos **espaços e do tempo**; a **organização dos conteúdos**; os **materiais curriculares**; e o sentido e papel da **avaliação**.

### Função social do ensino e concepção de aprendizagem (cap. 2)
- A escola deve promover a **formação integral** — capacidades **cognitivas, motoras, de equilíbrio pessoal (afetivas), de relação interpessoal e de inserção social** — não só preparar para a etapa seguinte (função **propedêutica**, que ele critica).
- **Tipologia dos conteúdos** (a mais cobrada!): **factuais** (fatos, datas, nomes — "saber"), **conceituais** (conceitos e princípios — "saber"), **procedimentais** ("saber fazer": técnicas, métodos, destrezas — ex.: ler um mapa) e **atitudinais** ("ser": valores, atitudes, normas — ex.: respeito ao meio ambiente). Cada tipo se aprende de um modo e se avalia de um modo.
- Concepção **construtivista**: o aluno constrói significados a partir de **conhecimentos prévios**; a aprendizagem deve ser **significativa** e **funcional**.

### Sequências didáticas e de conteúdo (cap. 3)
Zabala analisa **quatro unidades didáticas-modelo** — da aula expositiva tradicional (ênfase em factuais e conceituais, aluno passivo) até sequências que partem de **situações-problema**, conflitos e participação ativa (contemplam todos os tipos de conteúdo). Critério de análise: a sequência permite conhecer os conhecimentos prévios? É significativa e funcional? Está no nível de desenvolvimento do aluno (zona de desenvolvimento proximal)? Provoca **conflito cognitivo** e **atividade mental**? Promove **autoestima** e **aprender a aprender**?

### Relações interativas (cap. 4)
O professor **planeja com flexibilidade**, conta com as contribuições dos alunos, ajuda-os a encontrar sentido, estabelece **metas alcançáveis**, oferece **ajudas adequadas**, promove **atividade mental autoestruturante**, cria **clima de respeito e confiança**, e **avalia** de acordo com as capacidades e esforços de cada um.

### Organização social da classe (cap. 5)
**Grande grupo** (turma toda), **equipes fixas**, **equipes móveis ou flexíveis** e **trabalho individual** — cada forma serve a objetivos diferentes. Também o uso do **espaço** e do **tempo**.

### Organização dos conteúdos (cap. 6)
- **Disciplinar** (multidisciplinar, interdisciplinar, transdisciplinar) x **métodos globalizados**: **centros de interesse** (Decroly), **método de projetos** (Kilpatrick), **investigação do meio** (MCEC) e **projetos de trabalho globais**.
- Ele defende o **enfoque globalizador**: partir de situações reais e complexas, mesmo quando a organização é por disciplinas.

### Materiais curriculares (cap. 7)
Instrumentos que ajudam o professor a planejar e intervir. Critério: **diversidade** de materiais e adequação aos tipos de conteúdo; o **livro didático** não deve ser a única fonte.

### Avaliação (cap. 8)
- Para quê avaliar? Para **conhecer e ajudar o aluno**, não só para classificar.
- **Avaliação formativa**, em quatro momentos: **inicial** (diagnóstica), **reguladora** (durante o processo, adaptando a ajuda), **final** (resultados) e **integradora** (visão do processo todo).
- Avaliar **todos os tipos de conteúdo**, cada um com instrumentos adequados (atitudes se avaliam por **observação sistemática**, não por prova).`,
    fontes: [GRUPOA],
    questoes: [
      {
        id: 'CP4-1',
        nivel: 1,
        enunciado: 'Segundo Zabala, os conteúdos de aprendizagem classificam-se em:',
        alternativas: ['factuais, conceituais, procedimentais e atitudinais.', 'teóricos e práticos.', 'obrigatórios e optativos.', 'cognitivos, motores e afetivos, apenas.', 'disciplinares e transversais.'],
        explicacao: 'É a tipologia de conteúdos de Zabala: saber (factual e conceitual), saber fazer (procedimental), ser (atitudinal).',
        porqueErradas: [
          'Simplificação que não corresponde à tipologia.',
          'Classificação administrativa.',
          'Refere-se a capacidades, não a tipos de conteúdo.',
          'Classificação de organização curricular.',
        ],
      },
      {
        id: 'CP4-2',
        nivel: 1,
        enunciado: 'Para Zabala, a unidade preferencial para analisar a prática educativa é:',
        alternativas: ['a sequência didática.', 'a prova bimestral.', 'o livro didático.', 'o regimento escolar.', 'a hora-aula isolada.'],
        explicacao: 'A sequência didática — atividades ordenadas e articuladas com início e fim — permite analisar a prática em sua complexidade.',
        porqueErradas: [
          'É um instrumento de avaliação.',
          'É um material curricular.',
          'É documento normativo.',
          'Uma aula isolada não revela o processo.',
        ],
      },
      {
        id: 'CP4-3',
        nivel: 2,
        enunciado: 'Ensinar os alunos a interpretar a legenda e a escala de um mapa corresponde, na tipologia de Zabala, a um conteúdo:',
        alternativas: ['procedimental.', 'factual.', 'atitudinal.', 'conceitual.', 'propedêutico.'],
        explicacao: 'Interpretar mapas é "saber fazer": conjunto de ações ordenadas para um fim.',
        porqueErradas: [
          'Factual seria memorizar o nome de capitais.',
          'Atitudinal envolve valores e normas.',
          'Conceitual seria compreender o que é escala.',
          'Não é tipo de conteúdo.',
        ],
      },
      {
        id: 'CP4-4',
        nivel: 2,
        enunciado: 'Na avaliação formativa proposta por Zabala, a avaliação que ocorre durante o processo, para adaptar as ajudas às necessidades dos alunos, é a:',
        alternativas: ['reguladora.', 'inicial.', 'final.', 'integradora.', 'somativa externa.'],
        explicacao: 'Os momentos são: inicial, reguladora, final e integradora. A reguladora acontece ao longo do processo.',
        porqueErradas: [
          'Acontece no início, como diagnóstico.',
          'Analisa resultados ao final.',
          'Dá visão do processo completo.',
          'Não é um dos momentos propostos.',
        ],
      },
      {
        id: 'CP4-5',
        nivel: 3,
        enunciado: 'Zabala critica a função predominantemente propedêutica da escola porque ela:',
        alternativas: [
          'reduz o ensino à preparação para a etapa seguinte, priorizando capacidades cognitivas em detrimento da formação integral.',
          'valoriza excessivamente os conteúdos atitudinais.',
          'ignora a preparação para o vestibular.',
          'se baseia em projetos de trabalho globalizados.',
          'é contrária à avaliação classificatória.',
        ],
        explicacao: 'Para Zabala, a função social do ensino é a formação integral: cognitiva, motora, afetiva, de relação interpessoal e de inserção social.',
        porqueErradas: [
          'O propedêutico negligencia o atitudinal.',
          'É justamente o que o propedêutico prioriza.',
          'Projetos globalizados são alternativa defendida.',
          'O modelo propedêutico costuma ser classificatório.',
        ],
      },
      {
        id: 'CP4-6',
        nivel: 3,
        enunciado: 'Para Zabala, os conteúdos atitudinais devem ser avaliados preferencialmente por meio de:',
        alternativas: [
          'observação sistemática das atitudes dos alunos em diferentes situações.',
          'provas escritas de múltipla escolha.',
          'testes de memorização de normas.',
          'exames externos padronizados.',
          'uma única redação ao final do ano.',
        ],
        explicacao: 'Atitudes manifestam-se na ação; avaliam-se pela observação em situações diversas.',
        porqueErradas: [
          'Provas medem saber declarativo, não atitude.',
          'Saber a norma não é praticá-la.',
          'Não captam atitudes cotidianas.',
          'Pontual e insuficiente.',
        ],
      },
    ],
  },
  {
    id: 'CP5',
    disciplina: 'CP',
    titulo: 'Didática (José Carlos Libâneo)',
    ementa: 'Didática: prática educativa; pedagogia e didática; didática e democratização do ensino; teoria da instrução e do ensino; o processo de ensino na escola; o processo de ensino e o estudo ativo; os objetivos e conteúdo de ensino; os métodos de ensino; a aula como forma de organização do ensino; o planejamento escolar; relações professor-aluno na sala de aula.',
    semana: 1,
    texto: `Também é o **sumário do livro "Didática"** de Libâneo — um clássico de concurso. Libâneo filia-se à **pedagogia crítico-social dos conteúdos**.

### Prática educativa, pedagogia e didática
- **Educação** é prática social presente em toda a sociedade; pode ser **não intencional** (informal) ou **intencional** (formal — escolar — e não formal).
- **Pedagogia**: ciência que estuda a educação como prática social, investigando seus fins e meios.
- **Didática**: **ramo da Pedagogia** que estuda o **processo de ensino** — a relação entre **objetivos, conteúdos, métodos e formas de organização** —, mediando teoria pedagógica e prática docente. É a **teoria da instrução e do ensino**.

### Didática e democratização do ensino
A escola pública deve garantir a **todos** o acesso aos **conhecimentos sistematizados**, condição para a participação crítica na sociedade. Democratizar é assegurar não só a matrícula, mas a **aprendizagem efetiva**.

### O processo de ensino
- **Unidade ensino–aprendizagem**: o ensino é a mediação que organiza as condições para o aluno assimilar ativamente os conhecimentos.
- **Estudo ativo**: atividades dos alunos para assimilação consciente — exercícios, tarefas, estudo dirigido, discussões — **não** é ativismo espontâneo; é atividade **orientada** pelo professor.
- **Componentes**: **objetivos** (gerais e específicos), **conteúdos** (conhecimentos, habilidades, hábitos, atitudes e convicções), **métodos** e **formas de organização**, sempre articulados.

### Métodos de ensino (classificação de Libâneo)
1. **Exposição verbal pelo professor** (exposição, demonstração, ilustração, exemplificação).
2. **Trabalho independente** dos alunos (tarefa preparatória, de assimilação, de elaboração pessoal).
3. **Elaboração conjunta** (conversação didática, perguntas).
4. **Trabalho em grupo**.
5. **Atividades especiais** (estudo do meio, jornal escolar, museu...).

### A aula e os momentos didáticos
A aula é a forma predominante de organização do ensino. **Momentos (passos) didáticos**: (1) **preparação e introdução** da matéria; (2) **tratamento didático da matéria nova**; (3) **consolidação e aprimoramento** (exercícios, revisão); (4) **aplicação**; (5) **controle e avaliação** dos resultados.

### Avaliação (no livro)
Funções: **pedagógico-didática**, **diagnóstica** e **de controle**. Avaliar é **reflexão sobre o nível de qualidade** do trabalho escolar de professor e alunos, não mero ato de dar nota.

### Planejamento escolar
Níveis: **plano da escola** (político-pedagógico), **plano de ensino** (do ano/semestre, por disciplina) e **plano de aula**. Planejamento é atividade de **reflexão**, **flexível**, que articula a escola à realidade social.

### Relação professor-aluno
Dois aspectos: **cognoscitivo** (comunicação dos conteúdos) e **socioemocional** (vínculos afetivos, clima). **Autoridade** do professor (baseada na competência profissional e moral) **não é autoritarismo**; disciplina como resultado de uma boa organização do trabalho.`,
    fontes: [CORTEZ],
    questoes: [
      {
        id: 'CP5-1',
        nivel: 1,
        enunciado: 'Para Libâneo, a Didática é:',
        alternativas: [
          'um ramo da Pedagogia que investiga os objetivos, conteúdos, meios e condições do processo de ensino.',
          'sinônimo de Pedagogia.',
          'um conjunto de técnicas neutras de transmissão de conteúdos.',
          'a ciência que estuda o desenvolvimento infantil.',
          'a disciplina que trata exclusivamente da avaliação.',
        ],
        explicacao: 'Didática: teoria da instrução e do ensino, ramo da Pedagogia.',
        porqueErradas: [
          'Pedagogia é mais ampla.',
          'Libâneo rejeita a neutralidade técnica.',
          'Isso é Psicologia do Desenvolvimento.',
          'Avaliação é um dos componentes.',
        ],
      },
      {
        id: 'CP5-2',
        nivel: 1,
        enunciado: 'Os níveis de planejamento escolar, segundo Libâneo, são:',
        alternativas: ['plano da escola, plano de ensino e plano de aula.', 'plano federal, estadual e municipal.', 'plano anual, mensal e semanal, apenas.', 'currículo oculto, prescrito e real.', 'diagnóstico, execução e avaliação.'],
        explicacao: 'Plano da escola (político-pedagógico), plano de ensino e plano de aula.',
        porqueErradas: [
          'São esferas de governo.',
          'Períodos, não níveis.',
          'Tipos de currículo.',
          'Fases genéricas.',
        ],
      },
      {
        id: 'CP5-3',
        nivel: 2,
        enunciado: 'Na classificação de Libâneo, a conversação didática baseada em perguntas que levam os alunos a elaborar conhecimentos junto com o professor corresponde ao método de:',
        alternativas: ['elaboração conjunta.', 'exposição verbal.', 'trabalho independente.', 'trabalho em grupo.', 'atividades especiais.'],
        explicacao: 'Elaboração conjunta: interação professor–alunos via conversação.',
        porqueErradas: [
          'O professor expõe.',
          'Alunos trabalham sozinhos.',
          'Alunos interagem entre si.',
          'Estudo do meio, museu, jornal.',
        ],
      },
      {
        id: 'CP5-4',
        nivel: 2,
        enunciado: 'Para Libâneo, o "estudo ativo" significa:',
        alternativas: [
          'atividades dos alunos orientadas pelo professor, visando à assimilação consciente dos conhecimentos.',
          'deixar o aluno aprender sozinho, sem intervenção.',
          'qualquer atividade com movimento físico.',
          'ativismo espontâneo sem objetivos definidos.',
          'apenas pesquisa na internet.',
        ],
        explicacao: 'Estudo ativo é atividade intencional e orientada, não espontaneísmo.',
        porqueErradas: [
          'Libâneo enfatiza a direção do professor.',
          'Não se reduz a movimento.',
          'Libâneo critica o espontaneísmo.',
          'Reduz o conceito.',
        ],
      },
      {
        id: 'CP5-5',
        nivel: 3,
        enunciado: 'Os momentos didáticos da aula, segundo Libâneo, incluem, EXCETO:',
        alternativas: [
          'classificação dos alunos por nível de inteligência.',
          'preparação e introdução da matéria.',
          'tratamento didático da matéria nova.',
          'consolidação e aprimoramento dos conhecimentos.',
          'controle e avaliação dos resultados.',
        ],
        explicacao: 'Os momentos: preparação/introdução, tratamento da matéria nova, consolidação, aplicação, controle e avaliação.',
        porqueErradas: [
          'É momento didático.',
          'É momento didático.',
          'É momento didático.',
          'É momento didático.',
        ],
      },
      {
        id: 'CP5-6',
        nivel: 3,
        enunciado: 'Sobre a relação professor-aluno em Libâneo, é correto afirmar:',
        alternativas: [
          'envolve aspectos cognoscitivos e socioemocionais, e a autoridade docente fundamenta-se na competência, não no autoritarismo.',
          'o professor deve abrir mão da autoridade para não inibir o aluno.',
          'a afetividade é irrelevante para a aprendizagem.',
          'a disciplina resulta exclusivamente de punições.',
          'o aluno é receptor passivo do conhecimento.',
        ],
        explicacao: 'Libâneo distingue autoridade (legítima) de autoritarismo e reconhece as dimensões cognitiva e socioemocional.',
        porqueErradas: [
          'Autoridade é necessária, desde que não autoritária.',
          'O aspecto socioemocional é parte da relação.',
          'A disciplina decorre da organização do trabalho.',
          'O aluno é sujeito ativo.',
        ],
      },
    ],
  },
  {
    id: 'CP6',
    disciplina: 'CP',
    titulo: 'Avaliação da aprendizagem escolar (Luckesi, Hoffmann, Antunes)',
    ementa: 'Avaliação da aprendizagem escolar.',
    semana: 5,
    texto: `Três autores da bibliografia convergem: avaliar é **diagnosticar para intervir**, não **examinar para classificar**.

### Cipriano Luckesi — "Avaliação da aprendizagem escolar"
- **Definição**: avaliação é um **juízo de qualidade sobre dados relevantes**, tendo em vista uma **tomada de decisão**.
- **Pedagogia do exame**: crítica à escola centrada em provas, notas e aprovação/reprovação; o exame é **pontual, classificatório, seletivo, excludente** e serve ao **controle e ao medo**.
- **Verificação x avaliação**: verificar é apenas **constatar** (registrar a nota e parar); avaliar exige **decidir** o que fazer com o resultado — **reorientar** a aprendizagem.
- Avaliação **diagnóstica**, **inclusiva**, **dinâmica**, um "**ato amoroso**" (acolhe a situação para transformá-la).
- O papel **classificatório** congela o aluno numa posição; o **diagnóstico** abre caminho para o avanço.

### Jussara Hoffmann — "Avaliação Mediadora"
- Avaliação como **mediação**: ação, movimento, **provocação**, diálogo entre professor e aluno.
- O professor **acompanha** o processo de construção do conhecimento, **interpreta** as respostas (o **erro** é revelador do pensamento do aluno, não algo a punir) e **intervém** com novas questões e desafios.
- Crítica à avaliação como **"julgamento de resultados"** e às **médias** aritméticas como resumo do aluno.
- Princípios: **oportunizar** aos alunos momentos de expressar ideias, discussões, **tarefas individuais**; **acompanhar** com registros significativos; **reorganizar** o trabalho.

### Celso Antunes — "A avaliação da aprendizagem escolar"
Avaliar **competências e habilidades**, e não apenas conteúdos memorizados; diversificar instrumentos; feedback ao aluno; avaliação a serviço do **aprender**.

### Funções / modalidades (vocabulário geral)
- **Diagnóstica**: no início, identifica conhecimentos prévios.
- **Formativa**: durante, regula o ensino e a aprendizagem (Scriven/Bloom).
- **Somativa**: ao final, faz um balanço; pode ser classificatória.
- LDB (art. 24, V): avaliação **contínua e cumulativa**, **prevalência do qualitativo sobre o quantitativo** e dos resultados **ao longo do período** sobre os de eventuais provas finais.`,
    fontes: [CORTEZ, { titulo: 'LDB art. 24 — verificação do rendimento', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9394.htm' }],
    questoes: [
      {
        id: 'CP6-1',
        nivel: 1,
        enunciado: 'Para Luckesi, a avaliação da aprendizagem é:',
        alternativas: [
          'um juízo de qualidade sobre dados relevantes, tendo em vista uma tomada de decisão.',
          'a atribuição de notas para classificar os alunos.',
          'a aplicação de provas ao final de cada bimestre.',
          'a verificação de presença em sala.',
          'um mecanismo de controle disciplinar.',
        ],
        explicacao: 'Definição clássica de Luckesi.',
        porqueErradas: [
          'É a lógica do exame, que ele critica.',
          'Reduz a avaliação a um instrumento.',
          'Frequência não é avaliação da aprendizagem.',
          'Luckesi critica o uso disciplinar.',
        ],
      },
      {
        id: 'CP6-2',
        nivel: 1,
        enunciado: 'A expressão "avaliação mediadora" está associada a:',
        alternativas: ['Jussara Hoffmann.', 'Cipriano Luckesi.', 'Antoni Zabala.', 'Philippe Perrenoud.', 'Edgar Morin.'],
        explicacao: 'É o título e o conceito central da obra de Hoffmann.',
        porqueErradas: [
          'Luckesi: pedagogia do exame, avaliação diagnóstica.',
          'Zabala: avaliação formativa em quatro momentos.',
          'Perrenoud: competências.',
          'Morin: sete saberes.',
        ],
      },
      {
        id: 'CP6-3',
        nivel: 2,
        enunciado: 'Para Luckesi, a diferença entre verificação e avaliação é que:',
        alternativas: [
          'a verificação encerra-se na constatação do resultado, enquanto a avaliação exige uma decisão sobre o que fazer com ele.',
          'a verificação é qualitativa e a avaliação é quantitativa.',
          'não há diferença entre os termos.',
          'a avaliação é feita pelo aluno e a verificação pelo professor.',
          'a verificação é diagnóstica e a avaliação é classificatória.',
        ],
        explicacao: 'Verificar é "congelar" o dado; avaliar é usá-lo para reorientar a ação.',
        porqueErradas: [
          'Não é esse o critério.',
          'Luckesi diferencia claramente.',
          'Não é essa a distinção.',
          'Inverte: a avaliação deve ser diagnóstica.',
        ],
      },
      {
        id: 'CP6-4',
        nivel: 2,
        enunciado: 'Na perspectiva da avaliação mediadora, o erro do aluno deve ser:',
        alternativas: [
          'interpretado como revelador do seu pensamento, servindo de ponto de partida para novas intervenções.',
          'punido com redução de nota.',
          'ignorado, para não constranger o aluno.',
          'corrigido apenas ao final do ano.',
          'registrado apenas para fins de classificação.',
        ],
        explicacao: 'Para Hoffmann, o erro dá pistas sobre as hipóteses do aluno e orienta a mediação.',
        porqueErradas: [
          'Visão punitiva, criticada pela autora.',
          'O erro deve ser trabalhado.',
          'A mediação é contínua.',
          'Contraria a perspectiva mediadora.',
        ],
      },
      {
        id: 'CP6-5',
        nivel: 3,
        enunciado: 'Uma escola cuja prática se resume a provas finais, notas e aprovação/reprovação, com o exame usado como instrumento de controle, exemplifica o que Luckesi denomina:',
        alternativas: ['pedagogia do exame.', 'avaliação mediadora.', 'avaliação formativa reguladora.', 'pedagogia da autonomia.', 'avaliação diagnóstica inclusiva.'],
        explicacao: 'Luckesi chama de pedagogia do exame a prática centrada em provas e classificação.',
        porqueErradas: [
          'É o oposto (Hoffmann).',
          'É o oposto (Zabala/Scriven).',
          'Paulo Freire.',
          'É o que Luckesi propõe, não o que critica.',
        ],
      },
      {
        id: 'CP6-6',
        nivel: 3,
        enunciado: 'Segundo a LDB, a verificação do rendimento escolar observará:',
        alternativas: [
          'avaliação contínua e cumulativa, com prevalência dos aspectos qualitativos sobre os quantitativos e dos resultados ao longo do período sobre os de eventuais provas finais.',
          'prevalência das provas finais sobre os resultados do período.',
          'prevalência dos aspectos quantitativos sobre os qualitativos.',
          'avaliação apenas ao final do ano letivo.',
          'proibição de recuperação paralela.',
        ],
        explicacao: 'Art. 24, V, "a", da LDB.',
        porqueErradas: [
          'Inverte a regra.',
          'Inverte a regra.',
          'A avaliação é contínua.',
          'A LDB prevê recuperação, de preferência paralela.',
        ],
      },
    ],
  },
  {
    id: 'CP7',
    disciplina: 'CP',
    titulo: 'Competências profissionais para ensinar (Perrenoud / Antunes)',
    ementa: 'Competências profissionais para ensinar: competências que se pretendem nos alunos e professores e como desenvolvê-las.',
    semana: 4,
    texto: `### Competência — o conceito
Para **Philippe Perrenoud**, competência é a **capacidade de mobilizar recursos cognitivos** (saberes, capacidades, informações) para **enfrentar uma família de situações** com pertinência e eficácia. Competência **não é** o conhecimento em si: é saber **usá-lo** em situação. A BNCC adota definição próxima (ver GE2).

### As 10 novas competências para ensinar (Perrenoud, Artmed, 2000) — decore a lista
1. **Organizar e dirigir situações de aprendizagem.**
2. **Administrar a progressão das aprendizagens.**
3. **Conceber e fazer evoluir os dispositivos de diferenciação.**
4. **Envolver os alunos em suas aprendizagens e em seu trabalho.**
5. **Trabalhar em equipe.**
6. **Participar da administração da escola.**
7. **Informar e envolver os pais.**
8. **Utilizar novas tecnologias.**
9. **Enfrentar os deveres e os dilemas éticos da profissão.**
10. **Administrar sua própria formação contínua.**

Destaques de conteúdo: **pedagogia diferenciada** (adaptar o ensino à heterogeneidade da turma — competência 3); trabalhar a partir das **representações** dos alunos e dos **erros e obstáculos**; envolver os alunos em **situações-problema** e **projetos**; **avaliação formativa** (competência 2); **prática reflexiva** (o professor analisa a própria prática).

### Celso Antunes — "Como desenvolver as competências em sala de aula"
- Competências se desenvolvem por meio de **habilidades** (ações mais específicas: comparar, classificar, interpretar, analisar, sintetizar).
- O professor planeja **situações-problema** que exigem mobilizar conhecimentos, em vez de apenas transmitir conteúdos.
- Avaliar competências exige observar o aluno **em ação**.

### Competências nos alunos x nos professores
- Nos **alunos**: mobilizar conhecimentos para resolver problemas reais (é o que a BNCC chama de competências gerais e específicas).
- Nos **professores**: as 10 de Perrenoud; formação **contínua** e reflexiva.`,
    fontes: [GRUPOA],
    questoes: [
      {
        id: 'CP7-1',
        nivel: 1,
        enunciado: 'Para Perrenoud, competência é:',
        alternativas: [
          'a capacidade de mobilizar diversos recursos cognitivos para enfrentar um tipo de situação.',
          'o acúmulo de conteúdos memorizados.',
          'um dom inato do professor.',
          'sinônimo de habilidade motora.',
          'a nota obtida em avaliações externas.',
        ],
        explicacao: 'Competência = mobilização de recursos em situação.',
        porqueErradas: [
          'Conhecimento não mobilizado não é competência.',
          'Competências se desenvolvem.',
          'Conceito mais amplo.',
          'Resultado de prova não define competência.',
        ],
      },
      {
        id: 'CP7-2',
        nivel: 1,
        enunciado: 'É uma das "10 novas competências para ensinar" de Perrenoud:',
        alternativas: ['Informar e envolver os pais.', 'Aplicar provas padronizadas mensais.', 'Seguir rigorosamente o livro didático.', 'Manter a disciplina pela punição.', 'Evitar o uso de tecnologias.'],
        explicacao: 'É a 7ª competência da lista.',
        porqueErradas: [
          'Não consta da lista.',
          'Não consta e contraria a ideia de dispositivos de diferenciação.',
          'Não consta.',
          'Contraria a competência 8 (utilizar novas tecnologias).',
        ],
      },
      {
        id: 'CP7-3',
        nivel: 2,
        enunciado: 'A competência de Perrenoud que trata de adaptar o ensino à heterogeneidade dos alunos é:',
        alternativas: [
          'conceber e fazer evoluir os dispositivos de diferenciação.',
          'trabalhar em equipe.',
          'participar da administração da escola.',
          'utilizar novas tecnologias.',
          'informar e envolver os pais.',
        ],
        explicacao: 'Diferenciação = pedagogia diferenciada para turmas heterogêneas.',
        porqueErradas: [
          'Trata da colaboração entre profissionais.',
          'Trata da gestão escolar.',
          'Trata de recursos tecnológicos.',
          'Trata da relação com as famílias.',
        ],
      },
      {
        id: 'CP7-4',
        nivel: 2,
        enunciado: 'Segundo Celso Antunes, competências são desenvolvidas em sala por meio de:',
        alternativas: [
          'situações-problema que exigem a mobilização de habilidades e conhecimentos.',
          'cópia de resumos do quadro.',
          'memorização de questionários.',
          'aulas exclusivamente expositivas.',
          'provas de múltipla escolha.',
        ],
        explicacao: 'Competência se forma na ação: situações-problema que mobilizam habilidades.',
        porqueErradas: [
          'Não mobiliza recursos.',
          'Não desenvolve competência.',
          'Exposição sozinha não basta.',
          'Instrumento de avaliação limitado.',
        ],
      },
      {
        id: 'CP7-5',
        nivel: 3,
        enunciado: 'A 10ª competência de Perrenoud, "administrar sua própria formação contínua", relaciona-se principalmente à ideia de:',
        alternativas: [
          'prática reflexiva, em que o professor analisa a própria prática e busca formação.',
          'acúmulo de certificados para progressão na carreira.',
          'formação inicial suficiente para toda a carreira.',
          'delegação da formação à Secretaria de Educação.',
          'abandono da teoria em favor da prática.',
        ],
        explicacao: 'Perrenoud defende o professor reflexivo, responsável por seu desenvolvimento profissional.',
        porqueErradas: [
          'Reduz a formação a burocracia.',
          'Contraria a ideia de formação contínua.',
          'A responsabilidade é também do professor.',
          'Teoria e prática se articulam.',
        ],
      },
      {
        id: 'CP7-6',
        nivel: 3,
        enunciado: 'Assinale a alternativa que NÃO corresponde a uma das 10 competências de Perrenoud.',
        alternativas: [
          'Selecionar os melhores alunos para turmas especiais.',
          'Administrar a progressão das aprendizagens.',
          'Enfrentar os deveres e os dilemas éticos da profissão.',
          'Envolver os alunos em suas aprendizagens e em seu trabalho.',
          'Organizar e dirigir situações de aprendizagem.',
        ],
        explicacao: 'Seleção/segregação contraria a pedagogia diferenciada de Perrenoud.',
        porqueErradas: [
          'Competência 2.',
          'Competência 9.',
          'Competência 4.',
          'Competência 1.',
        ],
      },
    ],
  },
  {
    id: 'CP8',
    disciplina: 'CP',
    titulo: 'Disciplina e indisciplina na escola (Julio Groppa Aquino)',
    ementa: 'Disciplina e Indisciplina da Escola.',
    semana: 5,
    texto: `Na coletânea **"Indisciplina na Escola: alternativas teóricas e práticas"** (org. **Julio Groppa Aquino**, Summus), vários autores analisam a indisciplina por diferentes ângulos. Ideias que a banca explora:

- A indisciplina **não é um problema só do aluno** nem um "desvio" individual: é um **sintoma** das relações escolares e da forma como a escola se organiza. Deve ser pensada **na relação professor–aluno** e no **contrato pedagógico**.
- Crítica às explicações **psicologizantes** (o aluno-problema, a família desestruturada) e **sociologizantes** (a culpa é "da sociedade") quando servem para **eximir a escola** de agir.
- O **contrato pedagógico**: regras claras, construídas e compreendidas, ligadas ao **objetivo da escola — o conhecimento**. A disciplina necessária é a que **viabiliza o trabalho de aprender**.
- A **autoridade docente** legítima vem do **conhecimento** e do **compromisso** com o ofício, não do autoritarismo. Aquino propõe que o professor **assuma seu papel de mediador do conhecimento** — a aula significativa é o melhor antídoto contra a indisciplina.
- **Yves de La Taille** (capítulo do livro): relaciona a indisciplina ao **sentimento de vergonha** e à **moralidade**; limites são necessários, mas devem ser compreendidos (heteronomia → autonomia).
- Disciplina **não é silêncio absoluto** nem obediência cega; é **organização** para a aprendizagem, podendo incluir movimento, conversa e trabalho em grupo.

### Na prática
- Prevenir: **planejar** bem, aulas **significativas**, regras combinadas (**combinados**), coerência entre o que se diz e o que se faz.
- Intervir: **diálogo**, responsabilização, sanções **por reciprocidade** (reparar o dano) em vez de expiatórias (castigo sem relação com a falta) — conceito de **Piaget**.
- Envolver a **equipe escolar** e as **famílias**; casos de violência envolvem outras redes (Conselho Tutelar — art. 56 do ECA; LDB art. 12).`,
    fontes: [SUMMUS],
    questoes: [
      {
        id: 'CP8-1',
        nivel: 1,
        enunciado: 'Na perspectiva de Julio Groppa Aquino, a indisciplina escolar deve ser compreendida principalmente como:',
        alternativas: [
          'um sintoma das relações escolares, a ser enfrentado no âmbito da relação professor–aluno e do contrato pedagógico.',
          'um problema exclusivo de alunos com distúrbios psicológicos.',
          'responsabilidade exclusiva das famílias.',
          'um fenômeno que a escola não tem como enfrentar.',
          'falta de punições mais severas.',
        ],
        explicacao: 'Aquino desloca o foco do aluno-problema para as relações e o contrato pedagógico.',
        porqueErradas: [
          'Explicação psicologizante criticada.',
          'Exime a escola.',
          'A escola pode e deve agir.',
          'Punição não é a solução proposta.',
        ],
      },
      {
        id: 'CP8-2',
        nivel: 1,
        enunciado: 'Para Aquino, a autoridade legítima do professor fundamenta-se:',
        alternativas: ['no conhecimento e no compromisso com o ofício.', 'no poder de reprovar.', 'no medo dos alunos.', 'no cargo hierárquico.', 'na idade do professor.'],
        explicacao: 'Autoridade baseada no saber e no compromisso, não em coerção.',
        porqueErradas: [
          'Coerção, não autoridade legítima.',
          'Autoritarismo.',
          'Hierarquia não basta.',
          'Irrelevante.',
        ],
      },
      {
        id: 'CP8-3',
        nivel: 2,
        enunciado: 'Uma aluna risca a carteira. A professora pede que ela limpe e repare o dano, conversando sobre o uso coletivo do espaço. Na terminologia piagetiana, trata-se de sanção:',
        alternativas: ['por reciprocidade.', 'expiatória.', 'arbitrária.', 'heterônoma.', 'física.'],
        explicacao: 'Sanção por reciprocidade tem relação lógica com a falta (reparar o dano).',
        porqueErradas: [
          'Expiatória é castigo sem relação com a falta.',
          'Não é arbitrária: tem relação com o ato.',
          'Não é classificação de sanção.',
          'Não se trata de castigo físico.',
        ],
      },
      {
        id: 'CP8-4',
        nivel: 2,
        enunciado: 'Segundo a abordagem de Aquino, a disciplina necessária em sala de aula é aquela que:',
        alternativas: [
          'viabiliza o trabalho de aprender, com regras ligadas ao objetivo da escola.',
          'impõe silêncio absoluto durante toda a aula.',
          'proíbe qualquer trabalho em grupo.',
          'depende apenas do regimento escolar.',
          'é garantida pela presença do diretor em sala.',
        ],
        explicacao: 'Disciplina como organização para a aprendizagem, não obediência cega.',
        porqueErradas: [
          'Silêncio absoluto não é sinônimo de disciplina.',
          'Interação pode fazer parte.',
          'Regras precisam fazer sentido no contrato pedagógico.',
          'Não é a proposta.',
        ],
      },
      {
        id: 'CP8-5',
        nivel: 3,
        enunciado: 'Assinale a afirmação coerente com a obra "Indisciplina na Escola" (org. Aquino):',
        alternativas: [
          'Explicações que atribuem a indisciplina apenas à família ou à sociedade podem servir para eximir a escola de sua responsabilidade.',
          'A indisciplina é natural e deve ser tolerada sem intervenção.',
          'A solução é transferir alunos indisciplinados para outras escolas.',
          'Regras escolares não precisam ser explicadas aos alunos.',
          'A aula significativa não tem relação com a indisciplina.',
        ],
        explicacao: 'A obra critica explicações que deslocam toda a responsabilidade para fora da escola.',
        porqueErradas: [
          'A escola deve intervir.',
          'Exclusão não é alternativa pedagógica.',
          'Regras devem ser compreendidas (contrato).',
          'A aula significativa é o melhor antídoto.',
        ],
      },
      {
        id: 'CP8-6',
        nivel: 3,
        enunciado: 'Diante de uma situação de violência física grave e reiterada envolvendo um aluno, além das medidas pedagógicas, a escola deve:',
        alternativas: [
          'notificar o Conselho Tutelar, conforme a LDB e o ECA.',
          'resolver internamente, sem informar nenhum órgão.',
          'expulsar o aluno imediatamente, sem procedimento.',
          'aguardar o fim do ano letivo.',
          'apenas registrar em ata, sem outras providências.',
        ],
        explicacao: 'LDB art. 12, VIII (ocorrências de violência) e ECA art. 56 preveem a comunicação ao Conselho Tutelar.',
        porqueErradas: [
          'Contraria a LDB e o ECA.',
          'Sem procedimento e sem base pedagógica.',
          'Omissão.',
          'Insuficiente.',
        ],
      },
    ],
  },
  {
    id: 'CP9',
    disciplina: 'CP',
    titulo: 'Bullying no ambiente escolar',
    ementa: 'Bullying no ambiente escolar.',
    semana: 5,
    texto: `Referência: **Ana Beatriz Barbosa Silva, "Bullying: mentes perigosas nas escolas"** (Principium), mais a legislação.

### O que é
**Bullying** (intimidação sistemática): atos de violência física ou psicológica **intencionais e repetitivos**, praticados por um indivíduo ou grupo contra uma ou mais pessoas, **sem motivação evidente**, numa relação de **desequilíbrio de poder**, causando dor, angústia e sofrimento. Três marcas: **intencionalidade, repetição, desequilíbrio de poder**. Briga eventual entre iguais **não** é bullying.

### Formas
**Verbal** (apelidos, insultos), **física** (empurrões, socos), **material** (furtar, destruir pertences), **psicológica/moral** (humilhar, excluir, difamar, chantagear), **sexual** (assediar) e **virtual — cyberbullying** (redes sociais, mensagens, exposição de imagens; potencializado pelo anonimato e pela difusão).

### Personagens (Ana Beatriz B. Silva)
- **Vítima típica**: pouco sociável, insegura, com alguma diferença usada como alvo.
- **Vítima provocadora**: provoca reações agressivas sem conseguir lidar com elas.
- **Vítima agressora**: reproduz em outros os maus-tratos sofridos (efeito "cascata").
- **Agressor**: busca poder e popularidade; pode ter pouca empatia.
- **Espectadores**: **passivos** (silenciam por medo), **ativos** (apoiam, riem, incentivam) e **neutros** (indiferentes). O papel dos espectadores é decisivo para interromper o ciclo.

### Consequências
Queda de rendimento, evasão, isolamento, ansiedade, depressão, somatizações e, em casos extremos, automutilação e suicídio — por isso a LDB passou a exigir notificação ao Conselho Tutelar de ocorrências desse tipo (art. 12, VIII, Lei 15.231/2025).

### Legislação
- **Lei 13.185/2015** — **Programa de Combate à Intimidação Sistemática**: define bullying; prevê **capacitação** de docentes, **campanhas**, **assistência psicológica, social e jurídica** às vítimas e aos agressores, e prioriza **mecanismos alternativos** de responsabilização que promovam a **mudança de comportamento**, evitando a punição pura.
- **LDB art. 12, IX** — escolas devem promover medidas de **prevenção e combate** à intimidação sistemática; **X** — **cultura de paz**.
- **Lei 14.811/2024** — incluiu o **bullying e o cyberbullying** como crime no Código Penal (art. 146-A).

### Papel da escola e do professor
**Prevenir** (convivência, empatia, regras combinadas), **identificar** (sinais nas vítimas e nos grupos), **intervir imediatamente**, **acolher** a vítima, **responsabilizar** o agressor com medidas educativas, **envolver as famílias** e mobilizar os **espectadores**.`,
    verificar: ['Tipificação penal do bullying pela Lei 14.811/2024 (art. 146-A do Código Penal) — conferir texto.'],
    fontes: [LEI_BULLYING, { titulo: 'LDB art. 12 — prevenção da intimidação sistemática', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9394.htm' }],
    questoes: [
      {
        id: 'CP9-1',
        nivel: 1,
        enunciado: 'São características que definem o bullying:',
        alternativas: [
          'intencionalidade, repetição e desequilíbrio de poder.',
          'agressão única e acidental entre colegas.',
          'conflito eventual entre alunos de mesma força.',
          'brincadeira consentida entre amigos.',
          'divergência de opinião em sala.',
        ],
        explicacao: 'Bullying é intimidação sistemática: intencional, repetida e com desequilíbrio de poder.',
        porqueErradas: [
          'Falta repetição e intenção.',
          'Falta desequilíbrio de poder e sistematicidade.',
          'Não há violência.',
          'Não é violência.',
        ],
      },
      {
        id: 'CP9-2',
        nivel: 1,
        enunciado: 'A lei que instituiu o Programa de Combate à Intimidação Sistemática (bullying) é a:',
        alternativas: ['Lei nº 13.185/2015.', 'Lei nº 9.394/1996.', 'Lei nº 8.069/1990.', 'Lei nº 14.113/2020.', 'Lei nº 13.146/2015.'],
        explicacao: 'A Lei 13.185/2015 instituiu o Programa de Combate à Intimidação Sistemática (bullying).',
        porqueErradas: [
          'LDB.',
          'ECA.',
          'FUNDEB.',
          'Lei Brasileira de Inclusão.',
        ],
      },
      {
        id: 'CP9-3',
        nivel: 2,
        enunciado: 'Segundo Ana Beatriz Barbosa Silva, o aluno que sofre bullying e passa a reproduzir os maus-tratos contra colegas mais frágeis é classificado como:',
        alternativas: ['vítima agressora.', 'vítima típica.', 'vítima provocadora.', 'espectador ativo.', 'espectador neutro.'],
        explicacao: 'A vítima agressora reproduz a violência sofrida — efeito cascata.',
        porqueErradas: [
          'Sofre sem reagir.',
          'Provoca reações que não consegue administrar.',
          'Apoia o agressor, mas não é vítima.',
          'É indiferente.',
        ],
      },
      {
        id: 'CP9-4',
        nivel: 2,
        enunciado: 'A Lei 13.185/2015, quanto à responsabilização dos agressores, orienta que se priorizem:',
        alternativas: [
          'mecanismos e instrumentos alternativos que promovam a efetiva responsabilização e a mudança de comportamento hostil, evitando punições.',
          'expulsão imediata do aluno agressor.',
          'punições exemplares em público.',
          'transferência compulsória sem acompanhamento.',
          'apenas a responsabilização da família.',
        ],
        explicacao: 'A lei privilegia medidas educativas e restaurativas.',
        porqueErradas: [
          'Contraria a lei.',
          'Humilhação pública é outra forma de violência.',
          'Desloca o problema.',
          'A escola também tem papel.',
        ],
      },
      {
        id: 'CP9-5',
        nivel: 3,
        enunciado: 'Na dinâmica do bullying, os espectadores que riem e incentivam as agressões, sem agredir diretamente, são chamados de:',
        alternativas: ['espectadores ativos.', 'espectadores passivos.', 'espectadores neutros.', 'vítimas provocadoras.', 'agressores principais.'],
        explicacao: 'Ativos apoiam e incentivam; passivos silenciam por medo; neutros são indiferentes.',
        porqueErradas: [
          'Silenciam por medo.',
          'São indiferentes.',
          'São alvos.',
          'Praticam diretamente.',
        ],
      },
      {
        id: 'CP9-6',
        nivel: 3,
        enunciado: 'Uma professora descobre que alunos compartilham montagens humilhantes de uma colega em um grupo de mensagens. A conduta mais adequada, à luz da legislação e da literatura, é:',
        alternativas: [
          'intervir imediatamente, acolher a vítima, acionar a equipe gestora e as famílias e trabalhar a responsabilização educativa dos envolvidos.',
          'ignorar, pois ocorreu fora do horário escolar e em meio digital.',
          'expor publicamente os agressores na sala.',
          'orientar a vítima a sair do grupo e encerrar o assunto.',
          'aguardar uma reclamação formal da família.',
        ],
        explicacao: 'Cyberbullying é forma de bullying; a escola deve agir, acolher e responsabilizar educativamente.',
        porqueErradas: [
          'Cyberbullying afeta o ambiente escolar e está na lei.',
          'Gera nova violência.',
          'Insuficiente.',
          'Omissão.',
        ],
      },
    ],
  },
  {
    id: 'CP10',
    disciplina: 'CP',
    titulo: 'Inclusão escolar (Maria Teresa Eglér Mantoan)',
    ementa: 'Inclusão escolar.',
    semana: 5,
    texto: `Referência: **Mantoan, Prieto e Arantes (org.), "Inclusão escolar: pontos e contrapontos"** (Summus) — um **debate** entre **Maria Teresa Eglér Mantoan** e **Rosângela Gavioli Prieto**.

### Integração x inclusão (o par mais cobrado)
- **Integração**: o aluno com deficiência é inserido na escola **se se adaptar** a ela; mantém-se um sistema paralelo (classes e escolas especiais) e **"cascata" de serviços** — a mudança é do **aluno**.
- **Inclusão**: a **escola** muda para receber **todos**, sem exceção; questiona-se o próprio modelo escolar. É **incondicional** e **total**: ninguém fica de fora do ensino regular. A mudança é da **escola**.

### Posição de Mantoan
- Defende a **inclusão total e incondicional** na escola comum; critica **classes especiais**, **escolas especiais substitutivas** e a "**pedagogia da diferenciação**" que adapta currículos e rebaixa expectativas.
- A diferença é **constitutiva** de todos — a escola deve ensinar **a turma toda**, reconhecendo que cada aluno aprende de um jeito, sem separar por "categorias".
- O **Atendimento Educacional Especializado (AEE)** é **complementar ou suplementar**, **não substitutivo** do ensino regular, de preferência na **sala de recursos multifuncionais**, no contraturno.

### Posição de Prieto (o "contraponto")
Concorda com a inclusão como direito, mas destaca que a política precisa de **condições** — **formação** de professores, apoios, recursos, financiamento — e que a transição deve considerar a **realidade** das redes; reconhece um papel para serviços de apoio especializados.

### Base legal (para cruzar com Legislação)
CF art. 208, III (AEE preferencialmente na rede regular); LDB arts. 58–60-A; **Lei 13.146/2015 (Lei Brasileira de Inclusão)**: **sistema educacional inclusivo em todos os níveis**, vedada a cobrança de valores adicionais por escolas privadas, **adaptações razoáveis**, **desenho universal**, profissional de apoio escolar; **Política Nacional de Educação Especial na Perspectiva da Educação Inclusiva (2008)**.

### Conceitos úteis
**Desenho universal para a aprendizagem** (planejar para todos desde o início), **adaptação razoável**, **barreiras** (atitudinais, comunicacionais, arquitetônicas, pedagógicas) — a deficiência resulta da interação do impedimento com as barreiras (modelo **social**, não médico).`,
    fontes: [SUMMUS, LBI],
    questoes: [
      {
        id: 'CP10-1',
        nivel: 1,
        enunciado: 'A diferença central entre integração e inclusão escolar é que:',
        alternativas: [
          'na integração o aluno deve se adaptar à escola; na inclusão a escola se transforma para receber todos.',
          'são sinônimos.',
          'na inclusão os alunos com deficiência estudam em escolas especiais.',
          'na integração não há alunos com deficiência na escola.',
          'a inclusão só vale para deficiências físicas.',
        ],
        explicacao: 'Na integração a mudança é do aluno; na inclusão, da escola.',
        porqueErradas: [
          'São paradigmas diferentes.',
          'É o contrário.',
          'A integração insere alunos condicionalmente.',
          'A inclusão é para todos.',
        ],
      },
      {
        id: 'CP10-2',
        nivel: 1,
        enunciado: 'Segundo a perspectiva defendida por Mantoan, o Atendimento Educacional Especializado (AEE) deve ser:',
        alternativas: ['complementar ou suplementar, não substitutivo do ensino regular.', 'substitutivo da escola comum.', 'oferecido apenas em escolas especiais.', 'realizado no lugar das aulas regulares.', 'facultativo e sem relação com a escola.'],
        explicacao: 'O AEE complementa/suplementa, preferencialmente em sala de recursos, no contraturno.',
        porqueErradas: [
          'Contraria a inclusão.',
          'Contraria a inclusão.',
          'Não substitui as aulas.',
          'Integra o projeto da escola.',
        ],
      },
      {
        id: 'CP10-3',
        nivel: 2,
        enunciado: 'No debate "Inclusão escolar: pontos e contrapontos", a posição de Rosângela Prieto, em relação à de Mantoan, enfatiza:',
        alternativas: [
          'a necessidade de condições (formação, apoios, recursos) para efetivar a inclusão nas redes.',
          'a volta às escolas especiais como modelo principal.',
          'a recusa do direito à educação inclusiva.',
          'a extinção do AEE.',
          'a separação de alunos por tipo de deficiência.',
        ],
        explicacao: 'Prieto reconhece o direito, mas destaca condições de implementação.',
        porqueErradas: [
          'Não é a posição dela.',
          'Ela defende o direito à inclusão.',
          'Não é a posição dela.',
          'Não é a posição dela.',
        ],
      },
      {
        id: 'CP10-4',
        nivel: 2,
        enunciado: 'Segundo a Lei 13.146/2015, a deficiência deve ser compreendida a partir:',
        alternativas: [
          'da interação entre impedimentos de longo prazo e barreiras que obstruem a participação plena.',
          'exclusivamente do diagnóstico médico.',
          'do quociente de inteligência do estudante.',
          'da opinião da família.',
          'do desempenho em provas.',
        ],
        explicacao: 'A LBI adota o modelo social: a deficiência resulta da interação com barreiras.',
        porqueErradas: [
          'Modelo médico, superado.',
          'Critério psicométrico.',
          'Não é critério legal.',
          'Não é critério legal.',
        ],
      },
      {
        id: 'CP10-5',
        nivel: 3,
        enunciado: 'Assinale a alternativa INCOMPATÍVEL com a concepção de inclusão defendida por Mantoan.',
        alternativas: [
          'Criar classes especiais permanentes para alunos com deficiência intelectual dentro da escola comum.',
          'Ensinar a turma toda, reconhecendo diferentes formas de aprender.',
          'Oferecer AEE no contraturno, como complemento.',
          'Remover barreiras atitudinais e pedagógicas.',
          'Considerar a diferença como constitutiva de todos os alunos.',
        ],
        explicacao: 'Classes especiais segregam e são criticadas por Mantoan.',
        porqueErradas: [
          'Compatível.',
          'Compatível.',
          'Compatível.',
          'Compatível.',
        ],
      },
      {
        id: 'CP10-6',
        nivel: 3,
        enunciado: 'De acordo com a Lei Brasileira de Inclusão, escolas privadas que recebem alunos com deficiência:',
        alternativas: [
          'não podem cobrar valores adicionais em mensalidades e matrículas para cumprir as obrigações de inclusão.',
          'podem cobrar taxa extra pelo profissional de apoio.',
          'podem recusar a matrícula se não tiverem estrutura.',
          'estão dispensadas da Lei.',
          'devem encaminhar os alunos às escolas públicas.',
        ],
        explicacao: 'A LBI veda a cobrança de valores adicionais pelas escolas privadas.',
        porqueErradas: [
          'Vedado.',
          'Recusar matrícula por deficiência é crime.',
          'Aplica-se a escolas privadas.',
          'Contraria a lei.',
        ],
      },
    ],
  },
  {
    id: 'CP11',
    disciplina: 'CP',
    titulo: 'Ensino e aprendizagem; ler e escrever na escola (Weisz e Lerner)',
    ementa: 'Ensino e aprendizagem. Ler e escrever na escola.',
    semana: 5,
    texto: `### Telma Weisz — "O diálogo entre o ensino e a aprendizagem"
- O professor precisa conhecer **como o aluno aprende** para ensinar: o ensino deve **dialogar** com os processos de aprendizagem, não ignorá-los.
- **Psicogênese da língua escrita** (Emilia **Ferreiro** e Ana **Teberosky**): a criança constrói **hipóteses** sobre a escrita — **pré-silábica** (não relaciona escrita e som), **silábica** (uma letra por sílaba — sem ou com **valor sonoro**), **silábico-alfabética** (transição) e **alfabética** (compreende o sistema; os erros passam a ser **ortográficos**).
- **O erro é construtivo**: revela as hipóteses do aluno e orienta a intervenção.
- **Boas situações de aprendizagem** (Weisz): os alunos (1) **põem em jogo o que sabem**; (2) têm **problemas a resolver** e decisões a tomar; (3) o conteúdo mantém suas **características de objeto sociocultural real**; (4) a organização da tarefa garante a **máxima circulação de informação** entre os alunos.
- Modelos de ensino: crítica ao **empirista** (aprender por repetição e cópia, o aluno como "tábula rasa") e defesa do **construtivista**.

### Delia Lerner — "Ler e escrever na escola: o real, o possível e o necessário"
- **O necessário**: transformar a escola numa **comunidade de leitores e escritores**; a leitura e a escrita como **práticas sociais** (ler para se informar, para se divertir, para seguir instruções...) devem ser o **objeto de ensino**.
- **O real**: a escola tende a **fragmentar** a língua (sílabas, frases soltas), a controlar e a avaliar tudo, transformando a leitura em exercício escolar sem sentido.
- **O possível**: uma "**versão escolar**" das práticas sociais que preserve seu sentido — tensão entre **o tempo didático** e o **tempo de aprendizagem**.
- **Modalidades organizativas**: **projetos** (produto final com destinatário real), **atividades habituais** (ex.: roda de leitura semanal), **sequências didáticas** (série de situações sobre um conteúdo) e **situações independentes** (ocasionais ou de sistematização).
- O professor como **modelo de leitor** (lê para os alunos e compartilha estratégias).

### Para a professora de Geografia
Ler e escrever são responsabilidade de **todas as áreas**: ler mapas, gráficos, reportagens, textos científicos e produzir relatórios e textos argumentativos são **práticas de letramento** próprias da Geografia.`,
    fontes: [GRUPOA],
    verificar: ['Obra de Telma Weisz (Ática): sem link de editora na lista de fontes; consultar pela bibliografia do edital.'],
    questoes: [
      {
        id: 'CP11-1',
        nivel: 1,
        enunciado: 'Segundo a psicogênese da língua escrita, a criança que escreve uma letra para cada sílaba, com correspondência sonora, está na hipótese:',
        alternativas: ['silábica com valor sonoro.', 'pré-silábica.', 'alfabética.', 'ortográfica.', 'silábico-alfabética.'],
        explicacao: 'Uma letra por sílaba, com letras pertinentes ao som: silábica com valor sonoro.',
        porqueErradas: [
          'Não relaciona escrita e som.',
          'Já compreende o sistema.',
          'Não é hipótese da psicogênese.',
          'Transição: ora sílaba, ora fonema.',
        ],
      },
      {
        id: 'CP11-2',
        nivel: 1,
        enunciado: 'Para Delia Lerner, o "necessário" na escola é:',
        alternativas: [
          'transformá-la em uma comunidade de leitores e escritores.',
          'fragmentar a língua em sílabas para facilitar o ensino.',
          'avaliar toda leitura com notas.',
          'ler apenas textos do livro didático.',
          'abolir a escrita na escola.',
        ],
        explicacao: 'O necessário: práticas sociais de leitura e escrita como objeto de ensino.',
        porqueErradas: [
          'É o "real" criticado.',
          'Controle excessivo criticado.',
          'Restringe as práticas sociais.',
          'Absurdo.',
        ],
      },
      {
        id: 'CP11-3',
        nivel: 2,
        enunciado: 'Para Telma Weisz, em uma boa situação de aprendizagem, EXCETO:',
        alternativas: [
          'o aluno apenas copia o modelo apresentado pelo professor, sem tomar decisões.',
          'os alunos põem em jogo o que sabem.',
          'há problemas a resolver e decisões a tomar.',
          'o conteúdo mantém características de objeto sociocultural real.',
          'a organização da tarefa garante a máxima circulação de informação.',
        ],
        explicacao: 'Cópia sem decisão é característica do modelo empirista, criticado por Weisz.',
        porqueErradas: [
          'É condição de Weisz.',
          'É condição de Weisz.',
          'É condição de Weisz.',
          'É condição de Weisz.',
        ],
      },
      {
        id: 'CP11-4',
        nivel: 2,
        enunciado: 'Uma roda de leitura de notícias realizada toda segunda-feira é, nas modalidades organizativas de Lerner, uma:',
        alternativas: ['atividade habitual.', 'sequência didática.', 'projeto.', 'situação independente ocasional.', 'avaliação somativa.'],
        explicacao: 'Atividades habituais se repetem com regularidade.',
        porqueErradas: [
          'Série encadeada sobre um conteúdo.',
          'Tem produto final e destinatário.',
          'Ocasional, não regular.',
          'Não é modalidade organizativa.',
        ],
      },
      {
        id: 'CP11-5',
        nivel: 3,
        enunciado: 'Sobre o erro na perspectiva de Weisz, é correto afirmar:',
        alternativas: [
          'o erro revela as hipóteses do aluno e serve de informação para a intervenção docente.',
          'o erro deve ser evitado a todo custo por meio de cópias.',
          'o erro indica falta de inteligência.',
          'o erro deve ser sempre corrigido imediatamente com punição.',
          'o erro não tem relação com o processo de aprendizagem.',
        ],
        explicacao: 'O erro construtivo mostra o que o aluno pensa.',
        porqueErradas: [
          'Visão empirista.',
          'Rotulação indevida.',
          'Punição não é intervenção didática.',
          'O erro é parte do processo.',
        ],
      },
      {
        id: 'CP11-6',
        nivel: 3,
        enunciado: 'Para Lerner, a tensão entre "o real" e "o necessário" na escola decorre, entre outros fatores, de:',
        alternativas: [
          'a escola tender a fragmentar e controlar a leitura, afastando-a de seu uso social.',
          'excesso de projetos com destinatário real.',
          'ausência total de avaliação.',
          'professores que leem demais para os alunos.',
          'a leitura ser vista como prática social.',
        ],
        explicacao: 'A lógica escolar (fragmentação, controle) distancia a leitura de seu sentido social.',
        porqueErradas: [
          'Projetos são parte do "possível".',
          'Ao contrário, há controle excessivo.',
          'O professor modelo de leitor é desejável.',
          'É o objetivo, não o problema.',
        ],
      },
    ],
  },
  {
    id: 'CP12',
    disciplina: 'CP',
    titulo: 'Os pilares da educação e a educação ao longo da vida (Relatório Delors)',
    ementa: 'Os pilares da educação. Educação ao longo da vida.',
    semana: 4,
    texto: `**"Educação: um tesouro a descobrir"** é o relatório da **Comissão Internacional sobre Educação para o Século XXI**, presidida por **Jacques Delors**, para a **UNESCO** (1996).

### Os quatro pilares
1. **Aprender a conhecer** — dominar os **instrumentos do conhecimento**; aprender a aprender, exercitando **atenção, memória e pensamento**; cultura geral ampla + aprofundamento em algumas áreas.
2. **Aprender a fazer** — aplicar o conhecimento na prática; desenvolver **competências** para enfrentar situações e trabalhar em equipe (não só qualificação técnica).
3. **Aprender a conviver** (aprender a viver juntos) — **descoberta do outro** e participação em **projetos comuns**; compreensão, tolerância, gestão de conflitos. Para o relatório, é **um dos maiores desafios** da educação.
4. **Aprender a ser** — desenvolvimento **integral** da pessoa: espírito e corpo, inteligência, sensibilidade, sentido estético, **responsabilidade pessoal**, espiritualidade; autonomia e capacidade de julgamento.

### Educação ao longo da vida
A educação não se limita à infância e à escola: é um **continuum** que acompanha toda a existência, adaptando-se às mudanças do trabalho e da sociedade. Superar a distinção entre educação inicial e permanente. Conceitos associados: **sociedade educativa**, educação **formal, não formal e informal**. A CF (art. 206, IX) e a LDB (art. 3º, XIII) incorporaram o princípio da **aprendizagem ao longo da vida**.

### Outras ideias do relatório
- **Tensões** a superar: global x local; universal x singular; tradição x modernidade; longo prazo x curto prazo; competição x igualdade de oportunidades; expansão do conhecimento x capacidade de assimilação; espiritual x material.
- O **professor** é agente decisivo da mudança; valorização e formação docente.`,
    fontes: [UNESDOC],
    questoes: [
      {
        id: 'CP12-1',
        nivel: 1,
        enunciado: 'Os quatro pilares da educação, propostos no Relatório Delors, são:',
        alternativas: [
          'aprender a conhecer, aprender a fazer, aprender a conviver e aprender a ser.',
          'ler, escrever, contar e pesquisar.',
          'conhecer, compreender, aplicar e avaliar.',
          'aprender a ensinar, aprender a avaliar, aprender a planejar e aprender a ser.',
          'ética, política, estética e técnica.',
        ],
        explicacao: 'São os quatro pilares do relatório para a UNESCO.',
        porqueErradas: [
          'Habilidades básicas.',
          'Lembra a taxonomia de Bloom.',
          'Distorce os pilares.',
          'Princípios de outras normas.',
        ],
      },
      {
        id: 'CP12-2',
        nivel: 1,
        enunciado: 'O Relatório "Educação: um tesouro a descobrir" foi elaborado para:',
        alternativas: ['a UNESCO.', 'o Banco Mundial.', 'o MEC.', 'a OCDE.', 'o UNICEF.'],
        explicacao: 'Relatório da Comissão Internacional sobre Educação para o Século XXI, da UNESCO.',
        porqueErradas: [
          'Não.',
          'Não.',
          'A OCDE produz o PISA, não este relatório.',
          'Não.',
        ],
      },
      {
        id: 'CP12-3',
        nivel: 2,
        enunciado: 'O pilar que envolve a descoberta do outro e a participação em projetos comuns, apontado como um dos maiores desafios da educação, é:',
        alternativas: ['aprender a conviver.', 'aprender a conhecer.', 'aprender a fazer.', 'aprender a ser.', 'aprender a empreender.'],
        explicacao: 'Aprender a viver juntos/conviver.',
        porqueErradas: [
          'Instrumentos do conhecimento.',
          'Aplicação prática e competências.',
          'Desenvolvimento integral da pessoa.',
          'Não é pilar do relatório.',
        ],
      },
      {
        id: 'CP12-4',
        nivel: 2,
        enunciado: 'A ideia de educação ao longo da vida, no Relatório Delors, significa que:',
        alternativas: [
          'a educação é um continuum que acompanha toda a existência, para além da escola.',
          'a escolarização obrigatória deve durar a vida toda.',
          'só adultos devem estudar.',
          'a educação formal deve ser substituída pela informal.',
          'a educação termina com o diploma universitário.',
        ],
        explicacao: 'Educação permanente, em diferentes espaços e tempos.',
        porqueErradas: [
          'Não se confunde com escolaridade obrigatória.',
          'Vale para todas as idades.',
          'Formal e não formal se complementam.',
          'É o oposto.',
        ],
      },
      {
        id: 'CP12-5',
        nivel: 3,
        enunciado: 'Uma atividade em que os alunos, em grupo, planejam e executam uma campanha de coleta seletiva na escola, negociando papéis e resolvendo conflitos, mobiliza principalmente os pilares:',
        alternativas: ['aprender a fazer e aprender a conviver.', 'aprender a conhecer, apenas.', 'aprender a ser, apenas.', 'nenhum dos pilares.', 'aprender a conhecer e aprender a memorizar.'],
        explicacao: 'Execução prática (fazer) e trabalho coletivo com negociação (conviver).',
        porqueErradas: [
          'Há mais que conhecer.',
          'Envolve outros pilares.',
          'Mobiliza vários.',
          '"Memorizar" não é pilar.',
        ],
      },
      {
        id: 'CP12-6',
        nivel: 3,
        enunciado: 'Entre as tensões que, segundo o Relatório Delors, a educação deve ajudar a superar, encontra-se a tensão entre:',
        alternativas: ['o global e o local.', 'o público e o privado na gestão escolar.', 'a avaliação e a recuperação.', 'o currículo e o regimento.', 'a creche e a pré-escola.'],
        explicacao: 'O relatório lista tensões como global x local, universal x singular, tradição x modernidade.',
        porqueErradas: [
          'Não está entre as tensões.',
          'Não está entre as tensões.',
          'Não está entre as tensões.',
          'Não está entre as tensões.',
        ],
      },
    ],
  },
  {
    id: 'CP13',
    disciplina: 'CP',
    titulo: 'Os sete saberes necessários à educação do futuro (Edgar Morin)',
    ementa: 'Saberes necessários à educação do futuro.',
    semana: 4,
    texto: `**Edgar Morin**, pensador da **complexidade**, escreveu o texto a pedido da **UNESCO** (1999). Crítica central: o ensino **fragmentado** em disciplinas isoladas impede compreender os problemas, que são **globais e complexos**.

### Os sete saberes — decore a ordem e a ideia de cada um
1. **As cegueiras do conhecimento: o erro e a ilusão** — todo conhecimento comporta risco de erro e ilusão; é preciso ensinar a **conhecer o próprio conhecimento** (suas limitações, influências culturais e afetivas).
2. **Os princípios do conhecimento pertinente** — ensinar a **contextualizar** e **globalizar**: relacionar as partes ao todo e o todo às partes; combater a **fragmentação** disciplinar.
3. **Ensinar a condição humana** — o ser humano é **físico, biológico, psíquico, cultural, social e histórico**; essa unidade complexa está **desintegrada** no ensino.
4. **Ensinar a identidade terrena** — a **Terra-Pátria**: o destino planetário comum da humanidade; a **era planetária** e seus problemas globais (ecologia, guerras, desigualdades). *(Ótimo diálogo com a Geografia.)*
5. **Enfrentar as incertezas** — a ciência e a história são marcadas pela **incerteza**; preparar para o inesperado ("navegar em um oceano de incertezas através de arquipélagos de certeza").
6. **Ensinar a compreensão** — compreensão **intelectual** e **humana** (empatia), condição para a paz; combater o egocentrismo, o etnocentrismo e o sociocentrismo.
7. **A ética do gênero humano (antropoética)** — a tríade **indivíduo–sociedade–espécie**; desenvolver a **democracia** e a **cidadania terrestre**.

### Palavras-chave para reconhecer Morin
complexidade, religar saberes, pensamento complexo, contextualização, Terra-Pátria, antropoética, incerteza.`,
    fontes: [UNESDOC, CORTEZ],
    questoes: [
      {
        id: 'CP13-1',
        nivel: 1,
        enunciado: 'A obra "Os sete saberes necessários à educação do futuro" é de autoria de:',
        alternativas: ['Edgar Morin.', 'Paulo Freire.', 'Jacques Delors.', 'Philippe Perrenoud.', 'José Carlos Libâneo.'],
        explicacao: 'Edgar Morin, a pedido da UNESCO.',
        porqueErradas: [
          'Pedagogia da Autonomia.',
          'Os quatro pilares.',
          '10 competências.',
          'Didática.',
        ],
      },
      {
        id: 'CP13-2',
        nivel: 1,
        enunciado: 'Para Morin, o "conhecimento pertinente" é aquele capaz de:',
        alternativas: ['contextualizar e situar as informações num conjunto.', 'acumular o máximo de informações isoladas.', 'especializar-se em um único campo.', 'eliminar toda incerteza.', 'dispensar o diálogo entre disciplinas.'],
        explicacao: 'Conhecimento pertinente relaciona partes e todo, contexto e complexidade.',
        porqueErradas: [
          'É o que Morin critica.',
          'Especialização fechada fragmenta.',
          'A incerteza é inevitável.',
          'Morin defende religar saberes.',
        ],
      },
      {
        id: 'CP13-3',
        nivel: 2,
        enunciado: 'O saber que propõe compreender o destino planetário comum da humanidade, a "Terra-Pátria", é:',
        alternativas: ['ensinar a identidade terrena.', 'ensinar a condição humana.', 'enfrentar as incertezas.', 'as cegueiras do conhecimento.', 'ensinar a compreensão.'],
        explicacao: 'Identidade terrena: era planetária e comunidade de destino.',
        porqueErradas: [
          'Unidade complexa do ser humano.',
          'Imprevisibilidade.',
          'Erro e ilusão.',
          'Compreensão intelectual e humana.',
        ],
      },
      {
        id: 'CP13-4',
        nivel: 2,
        enunciado: 'A "antropoética", em Morin, refere-se à:',
        alternativas: [
          'ética do gênero humano, baseada na tríade indivíduo–sociedade–espécie.',
          'ética profissional do professor.',
          'proibição de pesquisas com seres humanos.',
          'disciplina de Filosofia no ensino médio.',
          'ética exclusivamente individual.',
        ],
        explicacao: 'É o sétimo saber: a ética do gênero humano.',
        porqueErradas: [
          'Sentido restrito demais.',
          'Não se relaciona.',
          'Não se relaciona.',
          'Morin articula indivíduo, sociedade e espécie.',
        ],
      },
      {
        id: 'CP13-5',
        nivel: 3,
        enunciado: 'Uma professora estuda a crise hídrica relacionando clima, economia, política, saúde e cultura, mostrando que nenhuma disciplina sozinha explica o problema. Essa prática dialoga mais diretamente com qual saber de Morin?',
        alternativas: [
          'Os princípios do conhecimento pertinente.',
          'As cegueiras do conhecimento: o erro e a ilusão.',
          'Ensinar a compreensão.',
          'A ética do gênero humano.',
          'Enfrentar as incertezas.',
        ],
        explicacao: 'Contextualizar e integrar dimensões de um problema complexo é o conhecimento pertinente.',
        porqueErradas: [
          'Trata dos limites do próprio conhecimento.',
          'Trata da empatia e compreensão humana.',
          'Trata da tríade indivíduo-sociedade-espécie.',
          'Trata do inesperado.',
        ],
      },
      {
        id: 'CP13-6',
        nivel: 3,
        enunciado: 'Assinale a alternativa que NÃO corresponde a um dos sete saberes de Morin.',
        alternativas: ['Aprender a fazer.', 'Ensinar a condição humana.', 'Enfrentar as incertezas.', 'Ensinar a compreensão.', 'As cegueiras do conhecimento: o erro e a ilusão.'],
        explicacao: '"Aprender a fazer" é um dos pilares de Delors.',
        porqueErradas: [
          'É saber de Morin.',
          'É saber de Morin.',
          'É saber de Morin.',
          'É saber de Morin.',
        ],
      },
    ],
  },
  {
    id: 'CP14',
    disciplina: 'CP',
    titulo: 'Saberes necessários à prática educativa (Paulo Freire — Pedagogia da Autonomia)',
    ementa: 'Saberes necessários à prática pedagógica.',
    semana: 4,
    texto: `**"Pedagogia da Autonomia: saberes necessários à prática educativa"** (1996), último livro publicado em vida por **Paulo Freire**. Organiza-se em **três capítulos**, cada um com uma lista de exigências do ato de ensinar.

### Cap. 1 — "Não há docência sem discência"
Quem ensina aprende ao ensinar, e quem aprende ensina ao aprender. **Ensinar exige**: rigorosidade metódica; pesquisa; **respeito aos saberes dos educandos**; criticidade; estética e ética; a **corporeificação das palavras pelo exemplo**; risco, aceitação do novo e **rejeição a qualquer forma de discriminação**; **reflexão crítica sobre a prática**; reconhecimento e assunção da **identidade cultural**.

### Cap. 2 — "Ensinar não é transferir conhecimento"
Mas **criar as possibilidades para a sua produção ou construção**. **Ensinar exige**: **consciência do inacabamento**; reconhecimento de ser **condicionado** (não determinado); **respeito à autonomia do ser do educando**; **bom senso**; humildade, tolerância e luta em defesa dos direitos dos educadores; **apreensão da realidade**; **alegria e esperança**; a convicção de que a **mudança é possível**; **curiosidade**.

### Cap. 3 — "Ensinar é uma especificidade humana"
**Ensinar exige**: segurança, **competência profissional** e generosidade; comprometimento; compreender que a **educação é uma forma de intervenção no mundo**; **liberdade e autoridade**; tomada consciente de decisões; **saber escutar**; reconhecer que a **educação é ideológica**; **disponibilidade para o diálogo**; **querer bem aos educandos**.

### Conceitos freirianos gerais (podem aparecer)
- **Educação bancária** (o professor "deposita" conteúdos no aluno passivo) x **educação problematizadora/libertadora** (diálogo, consciência crítica).
- **Dialogicidade**, **conscientização**, **leitura do mundo precede a leitura da palavra**, **temas geradores**.
- "Ensinar exige **respeito aos saberes dos educandos**": discutir com os alunos a **razão de ser** desses saberes em relação ao ensino dos conteúdos — por exemplo, a poluição do córrego do bairro como ponto de partida para estudar a questão ambiental.`,
    fontes: [{ titulo: 'Paz e Terra (Grupo Editorial Record) — Pedagogia da Autonomia', url: 'https://www.record.com.br/' }],
    questoes: [
      {
        id: 'CP14-1',
        nivel: 1,
        enunciado: 'Na "Pedagogia da Autonomia", Paulo Freire afirma que ensinar não é transferir conhecimento, mas:',
        alternativas: [
          'criar as possibilidades para a sua produção ou a sua construção.',
          'depositar informações no aluno.',
          'aplicar técnicas neutras de ensino.',
          'cumprir integralmente o livro didático.',
          'treinar habilidades para o mercado.',
        ],
        explicacao: 'Frase central do capítulo 2.',
        porqueErradas: [
          'É a educação bancária criticada.',
          'Freire afirma que a educação é ideológica.',
          'Não é a ideia de Freire.',
          'Reducionismo criticado.',
        ],
      },
      {
        id: 'CP14-2',
        nivel: 1,
        enunciado: 'O título do primeiro capítulo da "Pedagogia da Autonomia" é:',
        alternativas: ['"Não há docência sem discência".', '"Ensinar não é transferir conhecimento".', '"Ensinar é uma especificidade humana".', '"A educação como prática da liberdade".', '"Pedagogia do oprimido".'],
        explicacao: 'Cap. 1: Não há docência sem discência.',
        porqueErradas: [
          'Capítulo 2.',
          'Capítulo 3.',
          'Outro livro de Freire.',
          'Outro livro de Freire.',
        ],
      },
      {
        id: 'CP14-3',
        nivel: 2,
        enunciado: 'Para Freire, "ensinar exige respeito aos saberes dos educandos". Isso implica:',
        alternativas: [
          'discutir com os alunos a razão de ser de seus saberes, relacionando-os aos conteúdos ensinados.',
          'abandonar os conteúdos escolares.',
          'aceitar sem crítica tudo o que o aluno traz.',
          'ignorar a realidade dos alunos para não perder tempo.',
          'substituir o professor pelos alunos.',
        ],
        explicacao: 'Respeitar não é abrir mão do conteúdo; é partir da realidade e problematizá-la.',
        porqueErradas: [
          'Freire não abre mão dos conteúdos.',
          'Ensinar exige criticidade.',
          'É o oposto.',
          'Não há docência sem discência, mas o professor tem papel próprio.',
        ],
      },
      {
        id: 'CP14-4',
        nivel: 2,
        enunciado: 'A "consciência do inacabamento", em Freire, refere-se ao fato de que:',
        alternativas: [
          'o ser humano sabe-se inacabado e, por isso, está em permanente processo de busca e aprendizagem.',
          'o currículo nunca é concluído.',
          'o aluno não consegue terminar as tarefas.',
          'o professor não precisa de formação.',
          'a escola é sempre incompleta e inútil.',
        ],
        explicacao: 'O inacabamento consciente é o fundamento da educabilidade humana.',
        porqueErradas: [
          'Sentido literal equivocado.',
          'Sentido literal equivocado.',
          'É o contrário: exige formação permanente.',
          'Distorção.',
        ],
      },
      {
        id: 'CP14-5',
        nivel: 3,
        enunciado: 'São exigências do ato de ensinar listadas em "Pedagogia da Autonomia", EXCETO:',
        alternativas: ['neutralidade política.', 'reconhecer que a educação é ideológica.', 'saber escutar.', 'disponibilidade para o diálogo.', 'querer bem aos educandos.'],
        explicacao: 'Freire nega a neutralidade: "ensinar exige reconhecer que a educação é ideológica" e "é uma forma de intervenção no mundo".',
        porqueErradas: [
          'Consta do cap. 3.',
          'Consta do cap. 3.',
          'Consta do cap. 3.',
          'Consta do cap. 3.',
        ],
      },
      {
        id: 'CP14-6',
        nivel: 3,
        enunciado: 'A concepção que Freire chama de "educação bancária" caracteriza-se por:',
        alternativas: [
          'o educador depositar conteúdos em educandos vistos como recipientes passivos.',
          'o diálogo entre educador e educando como princípio.',
          'a problematização da realidade.',
          'a valorização dos saberes dos educandos.',
          'a construção coletiva do conhecimento.',
        ],
        explicacao: 'Na educação bancária, o saber é "depositado"; Freire propõe a educação problematizadora.',
        porqueErradas: [
          'Característica da educação libertadora.',
          'Característica da educação libertadora.',
          'Característica da educação libertadora.',
          'Característica da educação libertadora.',
        ],
      },
    ],
  },
  {
    id: 'CP15',
    disciplina: 'CP',
    titulo: 'Terminologia curricular (Glossário UNESCO-IBE)',
    ementa: 'Terminologia curricular.',
    semana: 5,
    texto: `Referência: **Amadio, M.; Creamer, R. — "Glossário de Terminologia Curricular"**, **UNESCO-IBE** (Escritório Internacional de Educação), 2016. É um dicionário de termos usados na elaboração e análise de currículos. Termos com maior chance de cair:

### Tipos de currículo
- **Currículo prescrito / oficial / formal / pretendido**: o que está definido em documentos oficiais (BNCC, diretrizes, propostas das redes).
- **Currículo implementado / ensinado / real**: o que efetivamente acontece em sala.
- **Currículo alcançado / aprendido**: o que os alunos de fato aprendem.
- **Currículo oculto**: aprendizagens **não explícitas** (valores, atitudes, normas, relações de poder) transmitidas pelo funcionamento da escola — rotinas, regras, linguagem, organização do espaço.
- **Currículo nulo**: o que a escola **deixa de ensinar** — e o silêncio também ensina.
- **Currículo integrado**: articula disciplinas em torno de temas, problemas ou projetos.
- **Currículo baseado em competências**: organiza-se pelo que os alunos devem ser capazes de **fazer**, mobilizando conhecimentos, habilidades, atitudes e valores (caso da BNCC).
- **Currículo em espiral** (Bruner): retoma os mesmos temas em níveis crescentes de complexidade.

### Outros termos
- **Desenho/design curricular**: processo de planejar o currículo (objetivos, conteúdos, métodos, avaliação).
- **Resultados de aprendizagem (learning outcomes)**: enunciados do que o aluno deve saber/fazer ao final de um período.
- **Padrões (standards)**: de conteúdo (o que ensinar) e de desempenho (nível esperado).
- **Avaliação formativa** (durante, para melhorar) x **somativa** (ao final, para certificar/medir).
- **Transversalidade / temas transversais**: questões sociais que perpassam as disciplinas.
- **Interdisciplinaridade** (diálogo e integração entre disciplinas), **multidisciplinaridade** (justaposição, sem integração) e **transdisciplinaridade** (supera as fronteiras disciplinares).
- **Aprendizagem ao longo da vida**; **educação inclusiva**; **currículo flexível**.
- **Itinerário formativo** (no Brasil, parte flexível do ensino médio).`,
    verificar: ['Definições literais do Glossário IBE — consultar o documento na UNESDOC.'],
    fontes: [UNESDOC],
    questoes: [
      {
        id: 'CP15-1',
        nivel: 1,
        enunciado: 'As aprendizagens não explícitas — valores, normas e relações de poder — transmitidas pelo funcionamento cotidiano da escola constituem o currículo:',
        alternativas: ['oculto.', 'prescrito.', 'formal.', 'integrado.', 'em espiral.'],
        explicacao: 'Currículo oculto: o que se aprende sem estar declarado nos documentos.',
        porqueErradas: [
          'Oficial, documentado.',
          'Sinônimo de prescrito.',
          'Articula disciplinas.',
          'Retoma temas em níveis crescentes.',
        ],
      },
      {
        id: 'CP15-2',
        nivel: 1,
        enunciado: 'O currículo definido em documentos oficiais, como a BNCC e as propostas das redes, é chamado de currículo:',
        alternativas: ['prescrito (oficial).', 'oculto.', 'nulo.', 'alcançado.', 'implementado.'],
        explicacao: 'É o currículo pretendido/prescrito.',
        porqueErradas: [
          'Não declarado.',
          'O que deixa de ser ensinado.',
          'O que os alunos aprendem.',
          'O que acontece em sala.',
        ],
      },
      {
        id: 'CP15-3',
        nivel: 2,
        enunciado: 'A justaposição de disciplinas em torno de um tema, sem integração efetiva entre elas, caracteriza a:',
        alternativas: ['multidisciplinaridade.', 'interdisciplinaridade.', 'transdisciplinaridade.', 'transversalidade.', 'contextualização.'],
        explicacao: 'Multi = várias disciplinas lado a lado, sem integração.',
        porqueErradas: [
          'Há integração e diálogo.',
          'Supera as fronteiras disciplinares.',
          'Temas sociais que perpassam as disciplinas.',
          'Relacionar conteúdo a contexto.',
        ],
      },
      {
        id: 'CP15-4',
        nivel: 2,
        enunciado: 'O conceito de currículo em espiral, que retoma os mesmos temas em níveis crescentes de complexidade, é associado a:',
        alternativas: ['Jerome Bruner.', 'Paulo Freire.', 'Celso Antunes.', 'Jussara Hoffmann.', 'Henri Wallon.'],
        explicacao: 'Bruner propôs o currículo em espiral.',
        porqueErradas: [
          'Não é conceito freiriano.',
          'Não.',
          'Não.',
          'Não.',
        ],
      },
      {
        id: 'CP15-5',
        nivel: 3,
        enunciado: 'Uma escola nunca aborda as contribuições indígenas na formação do território, embora a lei o determine. Na terminologia curricular, essa omissão compõe o currículo:',
        alternativas: ['nulo.', 'prescrito.', 'em espiral.', 'integrado.', 'baseado em competências.'],
        explicacao: 'Currículo nulo: o que a escola deixa de ensinar.',
        porqueErradas: [
          'O prescrito inclui o conteúdo (art. 26-A da LDB).',
          'Não se relaciona.',
          'Não se relaciona.',
          'Não se relaciona.',
        ],
      },
      {
        id: 'CP15-6',
        nivel: 3,
        enunciado: 'Sobre avaliação formativa e somativa, é correto afirmar:',
        alternativas: [
          'a formativa ocorre durante o processo para melhorá-lo; a somativa ocorre ao final para verificar e certificar resultados.',
          'ambas ocorrem apenas ao final do ano.',
          'a formativa serve para atribuir nota final e a somativa para orientar o ensino.',
          'a somativa é proibida pela LDB.',
          'a formativa é sinônimo de avaliação externa.',
        ],
        explicacao: 'Distinção clássica do Glossário (e de Scriven).',
        porqueErradas: [
          'A formativa é contínua.',
          'Inverte as funções.',
          'Não é proibida.',
          'Não são sinônimos.',
        ],
      },
    ],
  },
]
