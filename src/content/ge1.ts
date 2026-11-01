import type { Topico } from './types.ts'

export const BNCC = { titulo: 'Base Nacional Comum Curricular — MEC (versão citada no edital)', url: 'http://basenacionalcomum.mec.gov.br/wp-content/uploads/2018/06/BNCC_EI_EF_110518_versaofinal_site.pdf' }
export const BNCC_SITE = { titulo: 'Portal da BNCC — MEC', url: 'http://basenacionalcomum.mec.gov.br/' }
export const IBGE_EDUCA = { titulo: 'IBGE Educa — conteúdos de Geografia do IBGE', url: 'https://educa.ibge.gov.br/' }
export const IBGE = { titulo: 'IBGE — Instituto Brasileiro de Geografia e Estatística', url: 'https://www.ibge.gov.br/' }
export const BE_GEO = { titulo: 'Brasil Escola — Geografia (indicado no edital)', url: 'https://brasilescola.uol.com.br/geografia' }
export const TM_GEO = { titulo: 'Toda Matéria — Geografia (indicado no edital)', url: 'https://www.todamateria.com.br/geografia/' }
export const IE_GEO = { titulo: 'Info Escola — Geografia (indicado no edital)', url: 'https://www.infoescola.com/geografia/' }
export const SO_GEO = { titulo: 'Só Geografia (indicado no edital)', url: 'https://www.sogeografia.com.br/' }
export const EDUSP = { titulo: 'Edusp — Ross (org.), Geografia do Brasil', url: 'https://www.edusp.com.br/' }

export const TOPICOS_GE_1: Topico[] = [
  {
    id: 'GE1',
    disciplina: 'GE',
    titulo: 'DCN Gerais e DCN do Ensino Fundamental aplicadas ao ensino de Geografia',
    ementa: 'Diretrizes Curriculares Nacionais Gerais para a Educação Básica. Diretrizes Curriculares Nacionais para o Ensino Fundamental de 9 anos.',
    semana: 1,
    texto: `As mesmas resoluções de Legislação (LE6 e LE7) abrem a ementa de Geografia. Aqui, o foco é **como elas orientam o trabalho do professor de Geografia** nos anos finais. Revise LE6/LE7 para os números; este tópico conecta com a prática.

### O que as DCN pedem do componente Geografia
- Geografia integra a área de **Ciências Humanas**, com História (Res. 7/2010).
- **Currículo** como experiências escolares em torno do conhecimento, **articulando vivências e saberes dos alunos** com os conhecimentos sistematizados — em Geografia, partir do **lugar** de vivência do aluno (o bairro, Mogi Guaçu, o rio Mogi Guaçu, a região de Campinas) para chegar a escalas maiores.
- **Temas transversais** (meio ambiente, trabalho, diversidade, cidadania, educação para o trânsito, direitos humanos) — a Geografia é um dos componentes que mais naturalmente os acolhe.
- **Interdisciplinaridade** e **contextualização**: projetos com Ciências (água, clima), História (formação territorial), Matemática (escala, gráficos, coordenadas), Língua Portuguesa (leitura de textos e mapas).
- **Avaliação formativa**, com prevalência do **qualitativo**: em Geografia, avaliar também procedimentos (ler e produzir mapas, interpretar gráficos) e atitudes (respeito à diversidade, cuidado ambiental).
- **Transição dos anos iniciais para os finais**: o aluno do 6º ano passa a ter um professor por componente — o professor de Geografia deve **retomar** conceitos de espaço, paisagem e lugar trabalhados nos anos iniciais e acolher essa mudança.
- **Diversidade**: educação escolar indígena, quilombola, do campo e **educação das relações étnico-raciais** (LDB art. 26-A) — a Geografia trata da formação do território e da população brasileira, espaço privilegiado para isso.

### Princípios das DCN (Res. 7/2010) aplicados
- **Éticos**: justiça, solidariedade, respeito ao bem comum e ao **meio ambiente**.
- **Políticos**: direitos e deveres de cidadania, democracia — ex.: estudar o **plano diretor** e a participação nas decisões sobre a cidade.
- **Estéticos**: sensibilidade e valorização das **manifestações culturais** dos diferentes povos e lugares.

### Dica de prova
Questões de "Específicos" sobre DCN tendem a cobrar **conceitos gerais** (base comum + parte diversificada como todo integrado; etapas e modalidades; avaliação formativa; ensino fundamental de 9 anos com matrícula aos 6 anos) — **a mesma coisa** de Legislação, mas valendo **4 pontos** por questão.`,
    fontes: [
      { titulo: 'Resolução CNE/CEB nº 4/2010 — MEC', url: 'http://portal.mec.gov.br/dmdocuments/rceb004_10.pdf' },
      { titulo: 'Resolução CNE/CEB nº 7/2010 — MEC', url: 'http://portal.mec.gov.br/dmdocuments/rceb007_10.pdf' },
    ],
    questoes: [
      {
        id: 'GE1-1',
        nivel: 1,
        enunciado: 'De acordo com as Diretrizes Curriculares Nacionais para o Ensino Fundamental de 9 anos, o componente Geografia integra a área de:',
        alternativas: ['Ciências Humanas.', 'Ciências da Natureza.', 'Linguagens.', 'Matemática.', 'Ensino Religioso.'],
        explicacao: 'Ciências Humanas: História e Geografia.',
        porqueErradas: ['Ciências.', 'Português, LE, Arte, Educação Física.', 'Componente próprio.', 'Área própria.'],
      },
      {
        id: 'GE1-2',
        nivel: 1,
        enunciado: 'Segundo as DCN Gerais, a base nacional comum e a parte diversificada do currículo:',
        alternativas: ['constituem um todo integrado.', 'são blocos independentes, trabalhados em anos diferentes.', 'são opcionais na rede municipal.', 'só se aplicam ao ensino médio.', 'devem ser idênticas em todo o país.'],
        explicacao: 'Res. CNE/CEB 4/2010: um todo integrado.',
        porqueErradas: ['Não são estanques.', 'São obrigatórias.', 'Valem para a educação básica.', 'A parte diversificada atende às características regionais e locais.'],
      },
      {
        id: 'GE1-3',
        nivel: 2,
        enunciado: 'Uma professora de Geografia do 6º ano inicia o estudo da paisagem pelo bairro dos alunos, para depois ampliar a análise para o município e o país. Essa escolha está de acordo com as DCN porque:',
        alternativas: [
          'articula as vivências e os saberes dos alunos aos conhecimentos sistematizados.',
          'evita o uso de conceitos científicos.',
          'substitui o currículo oficial pelo currículo local.',
          'dispensa a avaliação formativa.',
          'restringe o estudo à escala local.',
        ],
        explicacao: 'As DCN concebem o currículo articulando vivências dos alunos e conhecimentos historicamente acumulados.',
        porqueErradas: ['Os conceitos são trabalhados.', 'A base comum continua obrigatória.', 'Não há relação.', 'A proposta amplia as escalas.'],
      },
      {
        id: 'GE1-4',
        nivel: 2,
        enunciado: 'O professor de Geografia dos anos finais deve dar atenção especial à transição dos anos iniciais porque, segundo as DCN do Ensino Fundamental:',
        alternativas: [
          'os alunos passam a ter vários professores especialistas, o que pede retomada de conceitos e acolhimento.',
          'nos anos finais a avaliação passa a ser apenas quantitativa.',
          'a Geografia só começa no 6º ano.',
          'os anos finais pertencem ao ensino médio.',
          'a matrícula nos anos finais é facultativa.',
        ],
        explicacao: 'A mudança na organização (professor único → especialistas) é ponto crítico.',
        porqueErradas: ['Prevalece o qualitativo.', 'Há Geografia nos anos iniciais (BNCC).', 'Anos finais são do fundamental.', 'É obrigatória.'],
      },
      {
        id: 'GE1-5',
        nivel: 3,
        enunciado: 'Considerando as DCN, a avaliação em Geografia nos anos finais deve:',
        alternativas: [
          'contemplar conceitos, procedimentos (como ler e produzir mapas) e atitudes, com prevalência dos aspectos qualitativos.',
          'basear-se exclusivamente na memorização de capitais e rios.',
          'ocorrer apenas por provas finais.',
          'desconsiderar o percurso do aluno.',
          'servir prioritariamente para classificar a turma.',
        ],
        explicacao: 'Avaliação formativa, processual, com prevalência do qualitativo.',
        porqueErradas: ['Reduz a conteúdos factuais.', 'Contraria a avaliação contínua.', 'O processo importa.', 'Não é a finalidade principal.'],
      },
      {
        id: 'GE1-6',
        nivel: 3,
        enunciado: 'Ao propor um projeto sobre a qualidade da água do rio que corta o município, envolvendo Ciências, Matemática (gráficos) e Língua Portuguesa (relatório), a escola aplica principalmente o princípio da:',
        alternativas: ['interdisciplinaridade, com contextualização.', 'seriação rígida.', 'educação bancária.', 'avaliação classificatória.', 'multisseriação.'],
        explicacao: 'Articulação entre componentes e com a realidade local.',
        porqueErradas: ['Não se relaciona.', 'É o oposto.', 'Não se relaciona.', 'Não se relaciona.'],
      },
    ],
  },
  {
    id: 'GE2',
    disciplina: 'GE',
    titulo: 'BNCC: competências gerais, marcos legais, fundamentos, pacto interfederativo e estrutura',
    ementa: 'Base Nacional Comum Curricular – Competências gerais da Educação Básica; os marcos legais que embasam a BNCC; os fundamentos pedagógicos da BNCC; o pacto Inter federativo e a implementação da BNCC; Estrutura da BNCC.',
    semana: 1,
    texto: `A **BNCC** é o documento **normativo** que define o conjunto **orgânico e progressivo** de **aprendizagens essenciais** que todos os alunos devem desenvolver ao longo da educação básica. **Não é currículo**: é **referência obrigatória** para a elaboração dos currículos das redes e das propostas pedagógicas das escolas. Homologada para **Educação Infantil e Ensino Fundamental em dezembro de 2017** (Resolução CNE/CP nº 2/2017) e para o **Ensino Médio em dezembro de 2018** (Resolução CNE/CP nº 4/2018).

### As 10 competências gerais — decore pelo nome-chave
1. **Conhecimento** — valorizar e usar conhecimentos historicamente construídos.
2. **Pensamento científico, crítico e criativo** — investigar, refletir, analisar, criar soluções.
3. **Repertório cultural** — valorizar manifestações artísticas e culturais, locais e mundiais.
4. **Comunicação** — usar diferentes linguagens (verbal, corporal, visual, sonora, digital, **cartográfica**...).
5. **Cultura digital** — usar tecnologias digitais de forma crítica, significativa, reflexiva e **ética**.
6. **Trabalho e projeto de vida** — valorizar a diversidade de saberes e fazer escolhas.
7. **Argumentação** — argumentar com base em fatos, dados e informações confiáveis, defendendo ideias que respeitem os **direitos humanos** e a **consciência socioambiental**.
8. **Autoconhecimento e autocuidado** — saúde física e emocional.
9. **Empatia e cooperação** — diálogo, resolução de conflitos, respeito ao outro.
10. **Responsabilidade e cidadania** — agir com autonomia, princípios éticos, democráticos, inclusivos, sustentáveis e solidários.

**Competência** (definição da BNCC): "**mobilização de conhecimentos** (conceitos e procedimentos), **habilidades** (práticas, cognitivas e socioemocionais), **atitudes e valores** para resolver demandas complexas da vida cotidiana, do pleno exercício da cidadania e do mundo do trabalho".

### Marcos legais
- **CF/1988, art. 210**: fixação de **conteúdos mínimos** para o ensino fundamental.
- **LDB, art. 9º, IV**: União, em colaboração, estabelece **competências e diretrizes** que nortearão currículos e conteúdos mínimos; **art. 26**: base nacional comum + parte diversificada.
- **DCN** (1990s–2010s).
- **PNE (Lei 13.005/2014)**: **metas 2, 3 e 7** (universalização do fundamental e médio; qualidade/Ideb) e estratégias que preveem a BNCC.

### Fundamentos pedagógicos
- **Foco no desenvolvimento de competências**: indicar claramente o que os alunos devem **"saber"** (conhecimentos, habilidades, atitudes, valores) e **"saber fazer"** (mobilizá-los).
- **Compromisso com a educação integral**: desenvolvimento humano global — dimensões **intelectual, física, afetiva, social, ética, moral e simbólica**; **não** confundir com "tempo integral".

### Pacto interfederativo e implementação
- A BNCC e os **currículos** têm **papéis complementares**: a Base diz **o quê** (aprendizagens essenciais); os currículos e as escolas decidem **como** (contextualização, metodologias, organização interdisciplinar, materiais, avaliação, formação).
- **Igualdade** (todos têm direito às mesmas aprendizagens essenciais) e **equidade** (reconhecer que as necessidades são diferentes e agir para reduzir desigualdades).
- **Regime de colaboração** entre União, Estados e Municípios; o MEC apoia a implementação (ex.: **ProBNCC**); formação de professores e materiais didáticos (PNLD) alinhados.

### Estrutura
- **Educação Infantil**: **direitos de aprendizagem e desenvolvimento** (conviver, brincar, participar, explorar, expressar, conhecer-se) → **campos de experiências** (5) → **objetivos de aprendizagem e desenvolvimento**, por **grupos etários** (bebês, crianças bem pequenas, crianças pequenas).
- **Ensino Fundamental**: **áreas do conhecimento** (5: Linguagens, Matemática, Ciências da Natureza, **Ciências Humanas**, Ensino Religioso) → **competências específicas de área** → **componentes curriculares** → **competências específicas de componente** → **unidades temáticas** → **objetos de conhecimento** → **habilidades**.
- **Código alfanumérico** das habilidades: **EF06GE01** = **EF** (Ensino Fundamental) + **06** (ano; "15" ou "69" indicam blocos) + **GE** (componente Geografia) + **01** (número da habilidade, que **não** indica ordem de ensino).
- **Ensino Médio**: áreas com competências específicas e habilidades (ex.: EM13CHS101 — "13" indica 1º ao 3º ano).`,
    fontes: [BNCC, BNCC_SITE],
    questoes: [
      {
        id: 'GE2-1',
        nivel: 1,
        enunciado: 'A BNCC define competência como:',
        alternativas: [
          'a mobilização de conhecimentos, habilidades, atitudes e valores para resolver demandas complexas da vida cotidiana, do pleno exercício da cidadania e do mundo do trabalho.',
          'o conjunto de conteúdos mínimos a serem memorizados.',
          'a nota mínima para aprovação.',
          'a capacidade inata de aprender.',
          'um sinônimo de habilidade motora.',
        ],
        explicacao: 'Definição literal da introdução da BNCC.',
        porqueErradas: ['Reduz a conteúdo.', 'Não se relaciona.', 'Competências se desenvolvem.', 'Reducionismo.'],
      },
      {
        id: 'GE2-2',
        nivel: 1,
        enunciado: 'No código EF07GE05, os elementos "07" e "GE" indicam, respectivamente:',
        alternativas: ['o ano (7º ano) e o componente curricular (Geografia).', 'a habilidade nº 7 e o grupo etário.', 'a competência geral 7 e a área.', 'o 7º bimestre e a Geografia Econômica.', 'a etapa e a unidade temática.'],
        explicacao: 'EF (etapa) + 07 (ano) + GE (componente) + 05 (número da habilidade).',
        porqueErradas: ['O número da habilidade é o último par.', 'Não indica competência geral.', 'Não há bimestre.', 'A etapa é "EF".'],
      },
      {
        id: 'GE2-3',
        nivel: 2,
        enunciado: 'São competências gerais da Educação Básica previstas na BNCC, EXCETO:',
        alternativas: ['Competitividade e meritocracia.', 'Cultura digital.', 'Argumentação.', 'Empatia e cooperação.', 'Responsabilidade e cidadania.'],
        explicacao: 'As 10 competências: conhecimento; pensamento científico, crítico e criativo; repertório cultural; comunicação; cultura digital; trabalho e projeto de vida; argumentação; autoconhecimento e autocuidado; empatia e cooperação; responsabilidade e cidadania.',
        porqueErradas: ['Competência 5.', 'Competência 7.', 'Competência 9.', 'Competência 10.'],
      },
      {
        id: 'GE2-4',
        nivel: 2,
        enunciado: 'Segundo a BNCC, a relação entre a Base e os currículos é de:',
        alternativas: [
          'complementaridade: a BNCC define as aprendizagens essenciais e os currículos as contextualizam, definindo metodologias e organização.',
          'identidade: a BNCC é o próprio currículo de todas as escolas.',
          'oposição: os currículos locais substituem a BNCC.',
          'independência: os currículos não precisam considerar a BNCC.',
          'hierarquia inversa: as escolas definem a BNCC.',
        ],
        explicacao: '"BNCC e currículos têm papéis complementares."',
        porqueErradas: ['A BNCC não é currículo.', 'A BNCC é obrigatória.', 'É referência obrigatória.', 'A BNCC é nacional.'],
      },
      {
        id: 'GE2-5',
        nivel: 3,
        enunciado: 'Sobre os fundamentos pedagógicos da BNCC, é correto afirmar:',
        alternativas: [
          'a educação integral refere-se ao desenvolvimento humano global, não se confundindo com jornada em tempo integral.',
          'educação integral significa obrigatoriamente escola em tempo integral.',
          'o foco da BNCC está na transmissão de conteúdos, sem relação com competências.',
          'a BNCC dispensa a dimensão socioemocional.',
          'o desenvolvimento de competências substitui os conhecimentos.',
        ],
        explicacao: 'A BNCC afirma a educação integral como formação global, independentemente da duração da jornada.',
        porqueErradas: ['Confusão expressamente afastada pela BNCC.', 'O foco é o desenvolvimento de competências.', 'Inclui habilidades socioemocionais.', 'Competências mobilizam conhecimentos.'],
      },
      {
        id: 'GE2-6',
        nivel: 3,
        enunciado: 'Entre os marcos legais que embasam a BNCC, encontram-se, EXCETO:',
        alternativas: [
          'a Lei nº 13.185/2015, que institui o Programa de Combate à Intimidação Sistemática.',
          'o art. 210 da Constituição Federal.',
          'o art. 9º, IV, e o art. 26 da LDB.',
          'o Plano Nacional de Educação (Lei nº 13.005/2014).',
          'as Diretrizes Curriculares Nacionais.',
        ],
        explicacao: 'A lei do bullying não é marco legal da BNCC.',
        porqueErradas: ['É marco legal.', 'É marco legal.', 'É marco legal (metas 2, 3 e 7).', 'É marco legal.'],
      },
    ],
  },
  {
    id: 'GE3',
    disciplina: 'GE',
    titulo: 'BNCC: Ciências Humanas e Geografia nos Anos Finais',
    ementa: 'A etapa do Ensino Fundamental: Competências específicas da área de Ciências Humanas; Geografia no Ensino Fundamental – Anos Finais: unidades temáticas, objetos de conhecimento e habilidades.',
    semana: 1,
    texto: `Este é o tópico **mais "seu"**: o que você vai ensinar. Leia a parte de Geografia da BNCC com um marca-texto.

### Ciências Humanas na BNCC
- Objetivo: desenvolver a **cognição in situ** — pensar o **tempo** e o **espaço**; formar alunos capazes de **interpretar o mundo, compreender processos e fenômenos sociais, políticos e culturais** e **agir** de forma ética, responsável e autônoma.
- **7 competências específicas de Ciências Humanas** (ex.: compreender a si e ao outro como identidades diferentes; analisar o mundo social, cultural e digital e o meio técnico-científico-informacional; identificar, comparar e explicar a intervenção do ser humano na natureza; **interpretar e expressar sentimentos, crenças e dúvidas** com relação a si e aos outros; comparar eventos em diferentes tempos e espaços; construir argumentos com base nos conhecimentos das Ciências Humanas; **utilizar as linguagens cartográfica, gráfica e iconográfica**).

### Geografia na BNCC
- **Pensamento espacial** e **raciocínio geográfico**: a Geografia permite ler o mundo pela **espacialidade** dos fenômenos.
- **Princípios do raciocínio geográfico** (7): **analogia** (comparar fenômenos semelhantes), **conexão** (fenômenos interagem), **diferenciação** (variação entre áreas), **distribuição** (como se repartem no espaço), **extensão** (espaço finito e contínuo delimitado pela ocorrência do fenômeno), **localização** (posição: absoluta — coordenadas; relativa — relações) e **ordem** (arranjo/estruturação do espaço segundo regras da sociedade).
- **Conceitos fundamentais**: **espaço** (o mais amplo), **território**, **lugar**, **região**, **natureza** e **paisagem**.
- **7 competências específicas de Geografia** para o EF (ex.: utilizar os conhecimentos geográficos para entender a interação sociedade/natureza; estabelecer conexões entre diferentes temas; desenvolver autonomia e senso crítico para compreender e aplicar o raciocínio geográfico; **desenvolver o pensamento espacial, fazendo uso das linguagens cartográficas e iconográficas**; desenvolver e utilizar processos de investigação; construir argumentos com base em informações geográficas; agir pessoal e coletivamente com respeito, responsabilidade, inclusão, sustentabilidade).

### As 5 unidades temáticas (comuns do 1º ao 9º ano)
1. **O sujeito e seu lugar no mundo** — identidade, lugar, diversidade, relações sociais.
2. **Conexões e escalas** — articulação de diferentes espaços e escalas (local–global), interações.
3. **Mundo do trabalho** — processos produtivos, técnicas, transformações do trabalho, indústria, agropecuária.
4. **Formas de representação e pensamento espacial** — cartografia, leitura e produção de mapas, gráficos, imagens.
5. **Natureza, ambientes e qualidade de vida** — relações sociedade-natureza, geografia física, questões ambientais.

### Progressão nos anos finais (o que cada ano privilegia)
- **6º ano**: identidade sociocultural; **paisagem**; relações entre componentes físico-naturais (**ciclo hidrológico, relevo, solo, clima, vegetação**); transformação das paisagens pelo trabalho (agricultura, urbanização); **cartografia** (escala, coordenadas, mapas temáticos); biodiversidade e atividades humanas.
- **7º ano**: **Brasil** — formação territorial, características da população e distribuição, **regionalização**, desigualdades, produção, circulação e consumo, **biomas brasileiros** (domínios morfoclimáticos), unidades de conservação.
- **8º ano**: **América e África** — distribuição da população mundial, **migrações**, corporações e organismos internacionais (**ONU**), integração regional (Mercosul), diversidade, transformações do espaço, **América Latina** e **África** em relação ao mundo; cartografia: anamorfoses, mapas temáticos.
- **9º ano**: **Europa, Ásia e Oceania** — **globalização**, hegemonia europeia na economia, política e cultura, **integração mundial**, cadeias industriais e inovação, transformações do espaço na sociedade urbano-industrial, diversidade ambiental e transformações das paisagens.

### Exemplo de habilidade
**EF06GE01**: "Comparar modificações das paisagens nos lugares de vivência e os usos desses lugares em diferentes tempos." — verbo (**comparar**) + objeto do conhecimento + modificadores (contexto).`,
    verificar: ['Redação literal das 7 competências específicas de Geografia e de Ciências Humanas e das habilidades por ano — conferir no PDF da BNCC.'],
    fontes: [BNCC, BNCC_SITE],
    questoes: [
      {
        id: 'GE3-1',
        nivel: 1,
        enunciado: 'São unidades temáticas de Geografia no Ensino Fundamental, segundo a BNCC, EXCETO:',
        alternativas: [
          'Geopolítica das potências mundiais.',
          'O sujeito e seu lugar no mundo.',
          'Conexões e escalas.',
          'Mundo do trabalho.',
          'Natureza, ambientes e qualidade de vida.',
        ],
        explicacao: 'As 5 unidades: O sujeito e seu lugar no mundo; Conexões e escalas; Mundo do trabalho; Formas de representação e pensamento espacial; Natureza, ambientes e qualidade de vida.',
        porqueErradas: ['É unidade temática.', 'É unidade temática.', 'É unidade temática.', 'É unidade temática.'],
      },
      {
        id: 'GE3-2',
        nivel: 1,
        enunciado: 'São princípios do raciocínio geográfico, segundo a BNCC:',
        alternativas: [
          'analogia, conexão, diferenciação, distribuição, extensão, localização e ordem.',
          'tempo, memória, documento e fonte.',
          'assimilação, acomodação e equilibração.',
          'ética, política e estética.',
          'latitude, longitude e altitude.',
        ],
        explicacao: 'São os 7 princípios do raciocínio geográfico.',
        porqueErradas: ['Termos da História.', 'Piaget.', 'Princípios das DCN.', 'Coordenadas, não princípios.'],
      },
      {
        id: 'GE3-3',
        nivel: 2,
        enunciado: 'O princípio do raciocínio geográfico que se refere à posição particular de um objeto na superfície terrestre, que pode ser absoluta (coordenadas) ou relativa (relações), é a:',
        alternativas: ['localização.', 'extensão.', 'ordem.', 'analogia.', 'diferenciação.'],
        explicacao: 'Localização: posição absoluta (coordenadas geográficas) ou relativa.',
        porqueErradas: ['Espaço finito delimitado pela ocorrência do fenômeno.', 'Arranjo/estrutura do espaço.', 'Comparação de fenômenos semelhantes.', 'Variação entre áreas.'],
      },
      {
        id: 'GE3-4',
        nivel: 2,
        enunciado: 'Na progressão da BNCC para os anos finais, o estudo da formação territorial do Brasil, regionalização e biomas brasileiros concentra-se no:',
        alternativas: ['7º ano.', '6º ano.', '8º ano.', '9º ano.', '1º ano do ensino médio.'],
        explicacao: 'O 7º ano tem foco no Brasil.',
        porqueErradas: ['6º: paisagem, componentes físico-naturais, cartografia.', '8º: América e África.', '9º: Europa, Ásia, Oceania e globalização.', 'Não é ensino fundamental.'],
      },
      {
        id: 'GE3-5',
        nivel: 3,
        enunciado: 'A habilidade "Comparar modificações das paisagens nos lugares de vivência e os usos desses lugares em diferentes tempos" (EF06GE01) está mais diretamente ligada aos conceitos de:',
        alternativas: ['paisagem e lugar.', 'território e fronteira.', 'região e regionalização.', 'rede e fluxo.', 'escala e projeção.'],
        explicacao: 'Fala em paisagens e lugares de vivência ao longo do tempo.',
        porqueErradas: ['Não são o foco.', 'Não são o foco.', 'Não são o foco.', 'Conceitos cartográficos.'],
      },
      {
        id: 'GE3-6',
        nivel: 3,
        enunciado: 'Uma sequência didática em que alunos do 9º ano analisam cadeias produtivas globais de um smartphone, identificando onde ocorrem a extração de minérios, a montagem e o consumo, mobiliza principalmente a unidade temática:',
        alternativas: ['Conexões e escalas e Mundo do trabalho.', 'O sujeito e seu lugar no mundo, apenas.', 'Natureza, ambientes e qualidade de vida, apenas.', 'Formas de representação e pensamento espacial, apenas.', 'nenhuma unidade temática da BNCC.'],
        explicacao: 'Articula escalas globais (conexões) e processos produtivos (trabalho).',
        porqueErradas: ['Não é o foco principal.', 'Pode tangenciar, mas não é o centro.', 'Pode ser usada como recurso, mas não é o centro.', 'Está plenamente coberta.'],
      },
    ],
  },
  {
    id: 'GE4',
    disciplina: 'GE',
    titulo: 'Os grandes conjuntos climato-botânicos',
    ementa: 'Os grandes conjuntos climato-botânicos.',
    semana: 2,
    texto: `Os **conjuntos climato-botânicos** são as grandes associações entre **clima** e **vegetação** no planeta (às vezes chamados de **biomas mundiais**). O clima — sobretudo **temperatura** e **umidade** — é o principal fator que define a vegetação; solo, relevo e altitude modulam.

### Zonas e conjuntos — do Equador aos polos
- **Clima equatorial** (quente e úmido o ano todo, chuvas abundantes, pequena amplitude térmica anual) → **florestas equatoriais/pluviais**: Amazônia, Bacia do Congo, Sudeste Asiático. Vegetação **latifoliada** (folhas largas), **perene**, **higrófila**, estratificada, altíssima biodiversidade, solos pobres (a fertilidade está na **ciclagem de nutrientes** da matéria orgânica).
- **Clima tropical** (quente, com **estação seca** e chuvosa bem definidas) → **savanas** (gramíneas com árvores e arbustos esparsos, troncos tortuosos e cascas grossas): savanas africanas, **Cerrado** brasileiro, llanos; e **florestas tropicais** onde chove mais (Mata Atlântica).
- **Climas áridos e semiáridos** (chuvas escassas e irregulares, grande amplitude térmica diária) → **desertos** (Saara, Atacama, Kalahari, Gobi) com vegetação **xerófila** (adaptada à seca: cactáceas, folhas reduzidas, espinhos, raízes profundas) e **estepes** semiáridas; no Brasil, a **Caatinga** (semiárido, vegetação **caducifólia** — perde as folhas na seca).
- **Clima mediterrâneo** (verão **quente e seco**, inverno ameno e chuvoso) → **vegetação mediterrânea** (maquis, garrigue, chaparral): arbustos e árvores de folhas duras (**esclerófilas**) — sul da Europa, Califórnia, Chile central, sul da Austrália e da África do Sul.
- **Clima temperado** (quatro estações bem definidas) → **florestas temperadas** **caducifólias/decíduas** (perdem as folhas no outono: carvalhos, faias) e **pradarias** (gramíneas em áreas mais secas: pradarias dos EUA, **Pampa**, estepes russas — solos férteis, grandes celeiros agrícolas).
- **Clima subtropical** → **mata de araucárias** (Sul do Brasil) e campos.
- **Clima frio (continental/subártico)** → **taiga** ou **floresta boreal**: **coníferas** (pinheiros, abetos), **aciculifoliadas** (folhas em agulha), **homogêneas** — Canadá, Escandinávia, Sibéria; grande exploração madeireira (celulose).
- **Clima polar** → **tundra**: musgos, liquens, gramíneas que florescem no curto verão; solo congelado em profundidade (**permafrost**); norte do Canadá, Alasca, Sibéria.
- **Clima de montanha (frio de altitude)** → **vegetação de altitude**, escalonada conforme a altitude (temperatura cai cerca de **0,6 °C a cada 100 m**).

### Vocabulário de adaptação da vegetação
**Higrófila** (muita água), **hidrófila** (dentro da água), **xerófila** (seca), **tropófila** (alterna estações seca e chuvosa — ex.: Cerrado), **latifoliada** (folhas largas), **aciculifoliada** (folhas em agulha), **caducifólia/decídua** (perde folhas), **perenifólia** (mantém folhas), **homogênea** (poucas espécies: taiga) x **heterogênea** (muitas espécies: floresta equatorial).

### Classificação climática
A mais usada mundialmente é a de **Köppen** (baseada em temperatura e precipitação, com letras: A tropical, B seco, C temperado, D continental/frio, E polar). Nos livros didáticos brasileiros também aparece a de **Arthur Strahler** (baseada nas **massas de ar**).`,
    fontes: [IBGE_EDUCA, BE_GEO, TM_GEO],
    questoes: [
      {
        id: 'GE4-1',
        nivel: 1,
        enunciado: 'A formação vegetal composta predominantemente de coníferas aciculifoliadas, típica das altas latitudes do Hemisfério Norte, é a:',
        alternativas: ['taiga.', 'tundra.', 'savana.', 'pradaria.', 'floresta equatorial.'],
        explicacao: 'Taiga (floresta boreal): coníferas com folhas em agulha, homogênea.',
        porqueErradas: ['Musgos e liquens em clima polar.', 'Clima tropical com gramíneas e árvores esparsas.', 'Gramíneas de clima temperado.', 'Latifoliada, clima quente e úmido.'],
      },
      {
        id: 'GE4-2',
        nivel: 1,
        enunciado: 'A vegetação adaptada a ambientes com escassez de água, com folhas reduzidas, espinhos e capacidade de armazenar água, é classificada como:',
        alternativas: ['xerófila.', 'higrófila.', 'hidrófila.', 'latifoliada.', 'perenifólia.'],
        explicacao: 'Xerófila: adaptada à seca.',
        porqueErradas: ['Ambientes muito úmidos.', 'Vive na água.', 'Folhas largas.', 'Mantém as folhas o ano todo.'],
      },
      {
        id: 'GE4-3',
        nivel: 2,
        enunciado: 'O clima mediterrâneo caracteriza-se por:',
        alternativas: [
          'verões quentes e secos e invernos amenos e chuvosos.',
          'chuvas abundantes e bem distribuídas o ano inteiro.',
          'temperaturas negativas na maior parte do ano.',
          'verões chuvosos e invernos secos.',
          'ausência de estações definidas e chuvas escassas o ano todo.',
        ],
        explicacao: 'Particularidade: a estação seca coincide com o verão.',
        porqueErradas: ['Equatorial.', 'Polar/frio.', 'Tropical.', 'Desértico.'],
      },
      {
        id: 'GE4-4',
        nivel: 2,
        enunciado: 'Sobre as florestas equatoriais, é correto afirmar:',
        alternativas: [
          'apresentam elevada biodiversidade, vegetação latifoliada e perene, e solos em geral pobres, dependentes da ciclagem de nutrientes.',
          'são homogêneas, com predomínio de coníferas.',
          'perdem as folhas na estação seca.',
          'ocorrem em clima com longa estação seca.',
          'possuem solos muito férteis, o que garante produtividade agrícola permanente após o desmatamento.',
        ],
        explicacao: 'A exuberância vem da ciclagem rápida de nutrientes, não da fertilidade do solo.',
        porqueErradas: ['Taiga.', 'Caducifólias (Caatinga, temperadas).', 'Savana.', 'Erro comum: os solos se empobrecem rapidamente sem a floresta.'],
      },
      {
        id: 'GE4-5',
        nivel: 3,
        enunciado: 'As pradarias norte-americanas, o Pampa e as estepes russas têm em comum:',
        alternativas: [
          'vegetação predominantemente herbácea (gramíneas) e solos férteis, intensamente utilizados pela agropecuária.',
          'vegetação de coníferas e solos congelados.',
          'clima equatorial e florestas densas.',
          'vegetação xerófila de deserto.',
          'clima mediterrâneo e vegetação esclerófila.',
        ],
        explicacao: 'Formações campestres de clima temperado/subtropical, grandes celeiros agrícolas.',
        porqueErradas: ['Taiga/tundra.', 'Não se aplica.', 'Desertos.', 'Maquis/chaparral.'],
      },
      {
        id: 'GE4-6',
        nivel: 3,
        enunciado: 'Uma área de montanha em região tropical apresenta, da base ao topo, floresta, campos de altitude e vegetação rasteira. O principal fator que explica esse escalonamento é:',
        alternativas: [
          'a diminuição da temperatura com o aumento da altitude.',
          'o aumento da latitude.',
          'a maior continentalidade no topo.',
          'a ação das correntes marítimas frias.',
          'o aumento da pressão atmosférica com a altitude.',
        ],
        explicacao: 'A temperatura cai cerca de 0,6 °C a cada 100 m, reproduzindo em altitude a sucessão latitudinal.',
        porqueErradas: ['A latitude é a mesma.', 'Não explica a variação vertical.', 'Não se aplica à variação vertical local.', 'A pressão diminui com a altitude.'],
      },
    ],
  },
  {
    id: 'GE5',
    disciplina: 'GE',
    titulo: 'O quadro geomorfológico da Terra',
    ementa: 'O quadro geomorfológico da Terra.',
    semana: 2,
    texto: `**Geomorfologia** estuda as **formas do relevo** e os processos que as produzem. O relevo resulta da disputa entre **agentes internos (endógenos)**, que constroem e deformam, e **agentes externos (exógenos)**, que desgastam e modelam.

### Estrutura geológica (o "esqueleto" do relevo)
- **Escudos cristalinos (maciços antigos)**: rochas **magmáticas e metamórficas** muito antigas (Pré-Cambriano), rígidas, **ricas em minerais metálicos** (ferro, manganês, ouro). Relevo desgastado, de altitudes modestas.
- **Bacias sedimentares**: depressões preenchidas por sedimentos, formando **rochas sedimentares**; associadas a **combustíveis fósseis** (petróleo, gás, carvão).
- **Dobramentos modernos**: cadeias montanhosas jovens (Cenozoico, era Terciária) formadas pelo choque de placas — **Andes, Alpes, Himalaia, Rochosas** — altitudes elevadas, áreas instáveis (terremotos e vulcões).

### Tectônica de placas
A litosfera é fragmentada em **placas** que se movem sobre a **astenosfera** (correntes de convecção do manto).
- **Limites divergentes**: placas se afastam; surge nova crosta — **dorsais meso-oceânicas** (Dorsal Mesoatlântica), rifts (Vale do Rift africano).
- **Limites convergentes**: placas se chocam — **subducção** (oceânica mergulha sob continental: **Andes**, fossas oceânicas, vulcões) ou **colisão** continental (**Himalaia**).
- **Limites transformantes (conservativos)**: placas deslizam lateralmente — **Falha de San Andreas** (Califórnia).
- **Círculo de Fogo do Pacífico**: concentração de vulcões e terremotos nas bordas do Pacífico.

### Agentes internos
**Tectonismo** (movimentos lentos: **epirogênese** — verticais, soerguimento/rebaixamento de grandes áreas; **orogênese** — formação de montanhas por dobras e falhas), **vulcanismo** e **abalos sísmicos**.

### Agentes externos
**Intemperismo** — decomposição das rochas **no lugar**: **físico** (variação de temperatura, congelamento, típico de desertos e áreas frias) e **químico** (água e reações químicas, típico de climas **quentes e úmidos**; gera solos profundos). **Erosão** — desgaste e **transporte** de material por **água** (pluvial, fluvial, marinha), **vento** (eólica), **gelo** (glacial) e **seres vivos** (incluindo o ser humano); depois vem a **sedimentação** (deposição).

### Formas de relevo
- **Planaltos**: superfícies elevadas onde **predomina a erosão** (desgaste) sobre a sedimentação.
- **Planícies**: superfícies planas onde **predomina a sedimentação** (acúmulo).
- **Depressões**: áreas mais baixas que o entorno — **absolutas** (abaixo do nível do mar: Mar Morto) ou **relativas** (abaixo das áreas vizinhas, acima do nível do mar).
- **Montanhas**: grandes elevações com forte declividade.

### Relevo brasileiro (bibliografia: Ross)
- O Brasil está **no interior da Placa Sul-Americana**, **sem dobramentos modernos** e sem vulcanismo ativo; altitudes **modestas** (ponto mais alto: **Pico da Neblina**, cerca de **2.995 m**, AM). Estrutura: escudos cristalinos e **bacias sedimentares** (que ocupam a maior parte do território).
- Classificações: **Aroldo de Azevedo** (1949: planaltos e planícies, critério altimétrico), **Aziz Ab'Sáber** (1958/1962: introduz o critério **morfogenético** — erosão x sedimentação) e **Jurandyr Ross** (1989/1995, com dados do **Projeto RADAMBRASIL**): **28 unidades** — **11 planaltos**, **11 depressões** e **6 planícies**. Ross destaca as **depressões** (ex.: Depressão Periférica Paulista, Depressão Sertaneja e do São Francisco) e os planaltos em bacias sedimentares e em cinturões orogênicos antigos.
- **Mogi Guaçu** está na **Depressão Periférica Paulista**, entre o Planalto Atlântico e o Planalto Ocidental (bom exemplo para trabalhar com os alunos).`,
    verificar: ['Localização de Mogi Guaçu na Depressão Periférica Paulista e altitude oficial do Pico da Neblina (IBGE, 2016: 2.995,30 m).'],
    fontes: [EDUSP, IBGE_EDUCA, BE_GEO],
    questoes: [
      {
        id: 'GE5-1',
        nivel: 1,
        enunciado: 'A classificação do relevo brasileiro proposta por Jurandyr Ross divide o território em:',
        alternativas: ['planaltos, planícies e depressões.', 'apenas planaltos e planícies.', 'montanhas, planícies e chapadas.', 'escudos e dobramentos modernos.', 'serras, vales e litoral.'],
        explicacao: 'Ross: 28 unidades (11 planaltos, 11 depressões, 6 planícies).',
        porqueErradas: ['Azevedo e Ab\'Sáber.', 'Não é a classificação.', 'Estruturas geológicas, não formas.', 'Não é a classificação.'],
      },
      {
        id: 'GE5-2',
        nivel: 1,
        enunciado: 'As cadeias montanhosas dos Andes, Alpes e Himalaia são exemplos de:',
        alternativas: ['dobramentos modernos.', 'escudos cristalinos.', 'bacias sedimentares.', 'planícies aluviais.', 'depressões absolutas.'],
        explicacao: 'Formadas no Cenozoico pelo choque de placas.',
        porqueErradas: ['Antigos e desgastados.', 'Áreas de deposição.', 'Áreas planas de sedimentação.', 'Abaixo do nível do mar.'],
      },
      {
        id: 'GE5-3',
        nivel: 2,
        enunciado: 'O intemperismo químico é mais intenso em regiões de clima:',
        alternativas: ['quente e úmido.', 'frio e seco.', 'desértico.', 'polar.', 'temperado seco.'],
        explicacao: 'Calor e água aceleram reações químicas, gerando solos profundos.',
        porqueErradas: ['Predomina o físico.', 'Predomina o físico (variação térmica).', 'Predomina o físico (gelo).', 'Menor disponibilidade de água.'],
      },
      {
        id: 'GE5-4',
        nivel: 2,
        enunciado: 'O limite entre placas tectônicas em que uma placa oceânica mergulha sob uma continental, originando fossas oceânicas, vulcões e cordilheiras como os Andes, é denominado:',
        alternativas: ['convergente, com subducção.', 'divergente.', 'transformante.', 'passivo.', 'intraplaca.'],
        explicacao: 'Subducção é um tipo de limite convergente.',
        porqueErradas: ['Placas se afastam (dorsais).', 'Placas deslizam lateralmente.', 'Não é tipo de limite.', 'Interior da placa.'],
      },
      {
        id: 'GE5-5',
        nivel: 3,
        enunciado: 'Sobre o relevo brasileiro, é correto afirmar:',
        alternativas: [
          'apresenta altitudes modestas porque está no interior da Placa Sul-Americana, sem dobramentos modernos e com estruturas antigas muito desgastadas.',
          'possui vulcões ativos no litoral do Nordeste.',
          'é dominado por dobramentos modernos na Região Sul.',
          'tem seu ponto culminante na Serra da Mantiqueira, acima de 4.000 m.',
          'é constituído exclusivamente por escudos cristalinos.',
        ],
        explicacao: 'Posição intraplaca e estruturas antigas explicam as altitudes modestas.',
        porqueErradas: ['Não há vulcanismo ativo.', 'Não há dobramentos modernos.', 'O ponto culminante é o Pico da Neblina (~2.995 m).', 'Há extensas bacias sedimentares.'],
      },
      {
        id: 'GE5-6',
        nivel: 3,
        enunciado: 'Na classificação de Ross, as depressões relativas, como a Depressão Periférica Paulista, caracterizam-se por:',
        alternativas: [
          'estar abaixo do nível das áreas vizinhas, mas acima do nível do mar, formadas por processos erosivos.',
          'estar abaixo do nível do mar.',
          'ser áreas de intensa sedimentação recente, como as planícies.',
          'corresponder a dobramentos modernos.',
          'ser crateras vulcânicas extintas.',
        ],
        explicacao: 'Depressões relativas estão abaixo do entorno e foram esculpidas por erosão.',
        porqueErradas: ['Isso seria depressão absoluta.', 'Planícies.', 'Não há no Brasil.', 'Não se aplica.'],
      },
    ],
  },
  {
    id: 'GE6',
    disciplina: 'GE',
    titulo: 'Características dos povos e países da Terra',
    ementa: 'Características dos povos e países da Terra.',
    semana: 3,
    texto: `Tópico amplo: como **classificar e comparar** países e povos — por nível de desenvolvimento, posição na economia mundial, cultura, população.

### Desenvolvimento e suas medidas
- **PIB** e **PIB per capita**: medem a riqueza produzida, mas **não** a distribuição.
- **IDH** (Índice de Desenvolvimento Humano), do **PNUD** (ONU), criado em **1990** (Mahbub ul Haq e Amartya Sen): combina **saúde** (expectativa de vida ao nascer), **educação** (anos médios e esperados de estudo) e **renda** (RNB per capita em PPC). Varia de 0 a 1. O Brasil está no grupo de **IDH alto**.
- **Índice de Gini**: mede a **desigualdade de renda** (0 = igualdade total; 1 = desigualdade máxima). O Brasil está entre os países **mais desiguais** do mundo.
- Outros indicadores: mortalidade infantil, analfabetismo, acesso a saneamento, IDH ajustado à desigualdade.

### Regionalizações do mundo
- **Guerra Fria**: **Primeiro Mundo** (capitalistas desenvolvidos), **Segundo Mundo** (socialistas), **Terceiro Mundo** (subdesenvolvidos) — termo surgido nos anos 1950.
- **Norte x Sul** (pós-Guerra Fria): **Norte desenvolvido** e **Sul subdesenvolvido** — linha **socioeconômica**, não cartográfica (Austrália e Nova Zelândia estão no "Norte").
- **Centro, semiperiferia e periferia** (Immanuel Wallerstein, teoria do **sistema-mundo**).
- **Países emergentes**: industrialização recente, economias dinâmicas — **BRICS** (Brasil, Rússia, Índia, China, África do Sul, mais novos membros desde 2024).
- Classificações de organismos: **países menos desenvolvidos (PMDs)** da ONU; renda baixa/média/alta do **Banco Mundial**.

### Características do subdesenvolvimento (associadas, não "naturais")
Herança **colonial** e de **dependência** econômica; economia baseada em **produtos primários** (commodities); **concentração de renda**; carências em saúde, educação e saneamento; **dívida externa**; **industrialização tardia** e dependente de capital externo. Subdesenvolvimento é **processo histórico**, não "atraso" natural.

### Povos e cultura
- **Etnia** (grupo com língua, religião, costumes e história compartilhados) ≠ **raça** (conceito biológico sem validade para humanos; no Brasil o IBGE usa "**cor ou raça**" por **autodeclaração**: branca, preta, parda, amarela, indígena).
- **Nação** (povo com identidade comum) ≠ **Estado** (organização político-administrativa soberana sobre um território) — há **nações sem Estado** (curdos, palestinos, bascos) e **Estados plurinacionais** (Bolívia, Espanha, Reino Unido).
- **Grandes religiões**: cristianismo (mais seguidores), islamismo (o que mais cresce; sunitas e xiitas), hinduísmo (Índia), budismo (Ásia), judaísmo; religiões tradicionais africanas e indígenas.
- **Línguas** mais faladas: inglês e mandarim (incluindo segunda língua), hindi, espanhol, árabe, português (cerca de 260 milhões de falantes).
- **Diversidade cultural** e **globalização**: tendência de **homogeneização** cultural x **reafirmação** de identidades locais.`,
    verificar: ['Composição atual do BRICS e posição do Brasil no IDH (último Relatório do PNUD).'],
    fontes: [{ titulo: 'ONU Brasil — Objetivos de Desenvolvimento Sustentável', url: 'https://brasil.un.org/pt-br/sdgs' }, IBGE_EDUCA, BE_GEO],
    questoes: [
      {
        id: 'GE6-1',
        nivel: 1,
        enunciado: 'O Índice de Desenvolvimento Humano (IDH), calculado pelo PNUD, combina indicadores de:',
        alternativas: ['saúde, educação e renda.', 'renda, indústria e comércio exterior.', 'população, território e PIB.', 'emprego, inflação e juros.', 'saneamento, energia e transporte.'],
        explicacao: 'Expectativa de vida, escolaridade e renda per capita.',
        porqueErradas: ['Indicadores econômicos.', 'Não compõem o IDH.', 'Indicadores macroeconômicos.', 'Não compõem o IDH básico.'],
      },
      {
        id: 'GE6-2',
        nivel: 1,
        enunciado: 'O índice que mede a desigualdade na distribuição de renda de um país, variando de 0 a 1, é o:',
        alternativas: ['Índice de Gini.', 'IDH.', 'PIB per capita.', 'Ideb.', 'IPCA.'],
        explicacao: 'Gini: 0 = igualdade total; 1 = desigualdade máxima.',
        porqueErradas: ['Desenvolvimento humano.', 'Média, não distribuição.', 'Índice da educação básica.', 'Índice de inflação.'],
      },
      {
        id: 'GE6-3',
        nivel: 2,
        enunciado: 'Na regionalização Norte-Sul, Austrália e Nova Zelândia fazem parte do "Norte" porque:',
        alternativas: [
          'a divisão é socioeconômica (desenvolvidos x subdesenvolvidos), não cartográfica.',
          'estão no Hemisfério Norte.',
          'foram colônias portuguesas.',
          'pertenciam ao bloco socialista.',
          'são países emergentes do BRICS.',
        ],
        explicacao: 'Norte = desenvolvidos; Sul = subdesenvolvidos/emergentes, independentemente do hemisfério.',
        porqueErradas: ['Estão no Hemisfério Sul.', 'Foram colônias britânicas.', 'Nunca foram socialistas.', 'Não integram o BRICS.'],
      },
      {
        id: 'GE6-4',
        nivel: 2,
        enunciado: 'Curdos, palestinos e bascos são frequentemente citados como exemplos de:',
        alternativas: ['nações sem Estado próprio reconhecido.', 'Estados plurinacionais.', 'países desenvolvidos.', 'blocos econômicos.', 'povos nômades sem território.'],
        explicacao: 'São povos com identidade nacional que reivindicam autonomia ou Estado.',
        porqueErradas: ['Não constituem Estados.', 'Não se aplica.', 'Não se aplica.', 'Têm territórios de ocupação histórica.'],
      },
      {
        id: 'GE6-5',
        nivel: 3,
        enunciado: 'Sobre o subdesenvolvimento, a interpretação mais adequada à Geografia crítica é:',
        alternativas: [
          'um processo histórico ligado à colonização, à dependência econômica e à inserção subordinada na divisão internacional do trabalho.',
          'uma etapa natural pela qual todos os países passam antes de se desenvolverem.',
          'consequência direta do clima tropical.',
          'resultado exclusivo do tamanho da população.',
          'característica cultural imutável de certos povos.',
        ],
        explicacao: 'O subdesenvolvimento é histórico e relacional, não natural.',
        porqueErradas: ['Visão etapista (Rostow), criticada.', 'Determinismo geográfico.', 'Visão neomalthusiana simplificadora.', 'Visão preconceituosa.'],
      },
      {
        id: 'GE6-6',
        nivel: 3,
        enunciado: 'Um país apresenta PIB per capita elevado e Índice de Gini alto. A conclusão correta é:',
        alternativas: [
          'a riqueza média é alta, mas mal distribuída entre a população.',
          'toda a população tem renda elevada.',
          'o país tem baixa desigualdade social.',
          'o IDH é necessariamente baixo.',
          'o país é subdesenvolvido por definição.',
        ],
        explicacao: 'Média alta com concentração elevada.',
        porqueErradas: ['A média esconde a distribuição.', 'Gini alto = desigualdade alta.', 'Não necessariamente.', 'Não há essa relação automática.'],
      },
    ],
  },
  {
    id: 'GE7',
    disciplina: 'GE',
    titulo: 'O globo em mapas: aspectos políticos, físicos e sociais',
    ementa: 'O globo em mapas: aspectos políticos, físicos e sociais.',
    semana: 3,
    texto: `### Tipos de mapa
- **Mapas políticos**: fronteiras, países, capitais.
- **Mapas físicos**: relevo (cores hipsométricas: verde nas baixas altitudes, amarelo/marrom nas altas; azuis batimétricos nos oceanos), hidrografia.
- **Mapas temáticos**: representam um tema específico (clima, população, IDH, uso do solo). Formas de representação: **qualitativa** (cores/símbolos diferentes para categorias: tipos de clima), **quantitativa** (círculos proporcionais, **coropletas** — gradação de uma mesma cor para valores; **isolinhas** — isotermas, isoietas, curvas de nível), **ordenada** (hierarquias) e **dinâmica** (fluxos com setas: migrações, comércio).
- **Anamorfose**: mapa em que a **área** de cada país é **distorcida proporcionalmente** a um dado (população, PIB) — muito usada para mostrar desigualdades. Está na BNCC do 8º ano.

### O globo — dados gerais
- **Continentes**: América, Europa, Ásia, África, Oceania e Antártida. **Oceanos**: Pacífico (maior), Atlântico, Índico, Glacial Ártico e Glacial Antártico (Austral).
- Cerca de **71%** da superfície é coberta por água.
- **Mapa político**: cerca de **195 países** (193 membros da ONU + observadores Vaticano e Palestina). Maiores em área: Rússia, Canadá, China, EUA, **Brasil (5º)**. Mais populosos: **Índia** (ultrapassou a China em 2023), China, EUA, Indonésia, Paquistão... o Brasil está entre os **7 mais populosos**.
- **Hemisférios**: Norte/Sul (Equador) e Leste/Oeste (Greenwich).

### Aspectos físicos do globo em grandes traços
- **Grandes cadeias**: Andes, Rochosas, Alpes, Himalaia (Everest, 8.849 m). **Grandes planícies**: Amazônica, Siberiana, Platina, Indo-Gangética.
- **Grandes rios**: **Amazonas** (maior em volume de água e bacia), Nilo (disputa com o Amazonas o posto de mais extenso), Yangtzé, Mississippi.
- **Desertos**: quentes (Saara, maior deserto quente; Arábia; Kalahari; Atacama, o mais **árido**) e frios (Gobi; a Antártida é o maior deserto em sentido climático).

### Aspectos sociais nos mapas
Mapas de **densidade demográfica** (concentração na Ásia Meridional e Oriental, Europa, Nordeste dos EUA; vazios nos desertos, florestas e áreas polares), de **IDH**, de **urbanização**, de **fluxos migratórios**, de **religiões e línguas**, de **conflitos**.

### Leitura crítica de mapas
Todo mapa é uma **representação**, com **escolhas** (projeção, centro, escala, cores, o que mostrar e o que omitir). O **mapa eurocêntrico** coloca a Europa no centro e no alto; mapas "invertidos" (como o de **Joaquín Torres García**, "América Invertida") questionam essa convenção.`,
    verificar: ['Rankings de população (ONU World Population Prospects) e número de países reconhecidos.'],
    fontes: [IBGE_EDUCA, { titulo: 'IBGE — Atlas Geográfico Escolar', url: 'https://atlasescolar.ibge.gov.br/' }, BE_GEO],
    questoes: [
      {
        id: 'GE7-1',
        nivel: 1,
        enunciado: 'O mapa em que as áreas dos países são deformadas proporcionalmente a um dado estatístico, como população ou PIB, é chamado de:',
        alternativas: ['anamorfose.', 'mapa hipsométrico.', 'carta topográfica.', 'mapa de isolinhas.', 'croqui.'],
        explicacao: 'Anamorfose geográfica.',
        porqueErradas: ['Representa altitudes por cores.', 'Representa detalhes do terreno com curvas de nível.', 'Linhas de igual valor.', 'Esboço sem rigor cartográfico.'],
      },
      {
        id: 'GE7-2',
        nivel: 1,
        enunciado: 'O maior oceano do planeta é o:',
        alternativas: ['Pacífico.', 'Atlântico.', 'Índico.', 'Glacial Ártico.', 'Glacial Antártico.'],
        explicacao: 'O Pacífico é o maior e mais profundo.',
        porqueErradas: ['Segundo maior.', 'Terceiro.', 'Menor.', 'Menor que os três primeiros.'],
      },
      {
        id: 'GE7-3',
        nivel: 2,
        enunciado: 'Em um mapa temático, a representação da densidade demográfica por municípios usando tons mais escuros de uma mesma cor para valores maiores é chamada de:',
        alternativas: ['mapa coroplético (representação quantitativa).', 'representação qualitativa.', 'representação dinâmica.', 'mapa de fluxos.', 'mapa político.'],
        explicacao: 'Gradação de uma cor para valores: coropletas.',
        porqueErradas: ['Usaria cores distintas para categorias.', 'Usa setas e movimentos.', 'Usa setas.', 'Mostra limites e capitais.'],
      },
      {
        id: 'GE7-4',
        nivel: 2,
        enunciado: 'Desde 2023, segundo estimativas da ONU, o país mais populoso do mundo é:',
        alternativas: ['a Índia.', 'a China.', 'os Estados Unidos.', 'a Indonésia.', 'o Brasil.'],
        explicacao: 'A Índia ultrapassou a China em 2023.',
        porqueErradas: ['Agora é a segunda.', 'Terceiro.', 'Quarta.', 'Está entre os mais populosos, mas não é o primeiro.'],
      },
      {
        id: 'GE7-5',
        nivel: 3,
        enunciado: 'A obra "América Invertida", de Joaquín Torres García, é usada em aulas de Geografia para discutir:',
        alternativas: [
          'o caráter convencional e ideológico das representações cartográficas, como o eurocentrismo.',
          'erros de impressão em mapas.',
          'a projeção de Mercator como única correta.',
          'a impossibilidade de representar a América.',
          'o uso de escalas grandes.',
        ],
        explicacao: 'O "norte em cima" é convenção; mapas carregam escolhas e visões de mundo.',
        porqueErradas: ['Não é a questão.', 'Ao contrário: questiona convenções.', 'Não se relaciona.', 'Não se relaciona.'],
      },
      {
        id: 'GE7-6',
        nivel: 3,
        enunciado: 'Ao analisar um mapa-múndi de densidade demográfica, um aluno observa grandes vazios demográficos. Esses vazios correspondem, principalmente, a:',
        alternativas: [
          'desertos, florestas equatoriais densas, regiões polares e altas montanhas.',
          'planícies férteis de clima temperado.',
          'litorais de clima ameno.',
          'vales de grandes rios asiáticos.',
          'regiões metropolitanas europeias.',
        ],
        explicacao: 'Condições naturais restritivas explicam boa parte dos vazios.',
        porqueErradas: ['Áreas densamente povoadas.', 'Áreas densamente povoadas.', 'Áreas densamente povoadas (Ganges, Yangtzé).', 'Áreas densamente povoadas.'],
      },
    ],
  },
  {
    id: 'GE8',
    disciplina: 'GE',
    titulo: 'O Brasil em mapas: divisão política, aspectos físicos, sociais e econômicos',
    ementa: 'O Brasil em mapas: divisão política, aspectos físicos, sociais e econômicos.',
    semana: 3,
    texto: `### Posição e dimensões
- Área de cerca de **8,5 milhões de km²** — **5º maior país** do mundo; maior da América do Sul (cerca de 47% do continente).
- Atravessado pela **Linha do Equador** (norte: AP, RR, AM, PA) e pelo **Trópico de Capricórnio** (SP, PR, MS) — maior parte na **zona intertropical**. Totalmente no **Hemisfério Ocidental**; maior parte no **Hemisfério Sul**.
- **Fronteiras** com **10 países** — todos da América do Sul **exceto Chile e Equador**. Litoral de cerca de **7.400 km**.
- **Pontos extremos**: Norte — **Monte Caburaí** (RR); Sul — **Arroio Chuí** (RS); Leste — **Ponta do Seixas** (PB) no continente (com ilhas: Ilha do Martim Vaz); Oeste — **Serra da Contamana / nascente do rio Moa** (AC).
- **4 fusos horários** (ver GE17).

### Divisão política e regional
- **26 estados e o Distrito Federal**; mais de **5.500 municípios**. Último grande rearranjo: **Constituição de 1988** (criação do **Tocantins**, transformação de Roraima e Amapá em estados, incorporação de Fernando de Noronha a Pernambuco).
- **Divisão regional do IBGE** (base de 1969, com ajuste de 1988): **5 regiões** — Norte, Nordeste, Centro-Oeste, Sudeste, Sul. Critério: **limites estaduais** (facilita estatística).
- **Regiões geoeconômicas** (Pedro Pinchas **Geiger**, 1967): **Amazônia, Nordeste e Centro-Sul** — critério de processo histórico-econômico; **não** respeita limites estaduais (ex.: norte de MG no Nordeste; sul do TO e MT no Centro-Sul).
- **Os "quatro Brasis"** (Milton **Santos** e María Laura **Silveira**): **Região Concentrada** (SE + S, maior densidade do meio técnico-científico-informacional), **Nordeste**, **Centro-Oeste** e **Amazônia**.
- **IBGE 2017**: **Regiões Geográficas Imediatas** e **Intermediárias** substituíram as micro e mesorregiões; consulte no IBGE a região imediata e a intermediária de Mogi Guaçu (a intermediária é polarizada por **Campinas**).

### Aspectos físicos (síntese — ver GE4, GE5, GE15, GE18)
Relevo de altitudes modestas (planaltos, depressões e planícies); clima predominantemente **tropical**; **6 biomas** (IBGE): Amazônia (o maior, cerca de **49%** do território), **Cerrado** (segundo), Mata Atlântica, Caatinga, Pampa, Pantanal (o menor); grandes bacias hidrográficas (Amazônica, Tocantins-Araguaia, São Francisco, Paraná).

### Aspectos sociais e econômicos
- **População** (Censo 2022): cerca de **203 milhões** de habitantes; distribuição **concentrada no litoral e no Sudeste** (herança da colonização e da industrialização); **baixa densidade** no Norte e Centro-Oeste.
- **Desigualdades regionais**: maiores IDH no Sul, Sudeste e DF; menores no Norte e Nordeste.
- **Economia**: concentração industrial e financeira no Sudeste (sobretudo **São Paulo**); agronegócio dinâmico no **Centro-Oeste** e no **MATOPIBA**; extrativismo mineral (Pará, Minas Gerais); petróleo (pré-sal, RJ e SP).
- **Mogi Guaçu (SP)**: na região de **Campinas**, eixo industrial do interior paulista (cerâmica, papel e celulose, agroindústria) — bom exemplo local de desconcentração industrial.`,
    verificar: [
      'Número atual de municípios (IBGE) e área territorial oficial (IBGE).',
      'Participação dos biomas no território (IBGE, Mapa de Biomas).',
      'Região Geográfica Imediata e Intermediária a que pertence Mogi Guaçu (IBGE, 2017).',
    ],
    fontes: [IBGE, IBGE_EDUCA, { titulo: 'IBGE — Censo 2022', url: 'https://censo2022.ibge.gov.br/' }],
    questoes: [
      {
        id: 'GE8-1',
        nivel: 1,
        enunciado: 'O Brasil faz fronteira com todos os países da América do Sul, EXCETO:',
        alternativas: ['Chile e Equador.', 'Chile e Bolívia.', 'Equador e Peru.', 'Uruguai e Paraguai.', 'Colômbia e Venezuela.'],
        explicacao: 'São 10 países vizinhos; só Chile e Equador não fazem fronteira.',
        porqueErradas: ['A Bolívia faz fronteira.', 'O Peru faz fronteira.', 'Ambos fazem fronteira.', 'Ambos fazem fronteira.'],
      },
      {
        id: 'GE8-2',
        nivel: 1,
        enunciado: 'A divisão regional oficial do IBGE, em cinco regiões, tem como característica:',
        alternativas: [
          'respeitar os limites estaduais.',
          'basear-se apenas em critérios naturais.',
          'dividir estados como Minas Gerais entre regiões.',
          'ter sido criada em 2017.',
          'ser idêntica à divisão geoeconômica.',
        ],
        explicacao: 'As cinco regiões agrupam estados inteiros.',
        porqueErradas: ['Usa critérios variados, organizados por estados.', 'Isso ocorre na geoeconômica.', 'Base de 1969, ajustada em 1988; em 2017 vieram as regiões imediatas e intermediárias.', 'São regionalizações distintas.'],
      },
      {
        id: 'GE8-3',
        nivel: 2,
        enunciado: 'A regionalização geoeconômica proposta por Pedro Geiger divide o Brasil em:',
        alternativas: ['Amazônia, Nordeste e Centro-Sul.', 'Norte, Nordeste, Centro-Oeste, Sudeste e Sul.', 'Região Concentrada, Nordeste, Centro-Oeste e Amazônia.', 'Litoral, Agreste e Sertão.', 'Brasil urbano e Brasil rural.'],
        explicacao: 'Três complexos regionais, sem respeitar limites estaduais.',
        porqueErradas: ['IBGE.', 'Milton Santos e Silveira.', 'Sub-regiões do Nordeste (incompleto).', 'Não é regionalização de Geiger.'],
      },
      {
        id: 'GE8-4',
        nivel: 2,
        enunciado: 'O ponto extremo norte do território brasileiro localiza-se:',
        alternativas: ['no Monte Caburaí, em Roraima.', 'no Oiapoque, no Amapá.', 'no Pico da Neblina, no Amazonas.', 'na Ponta do Seixas, na Paraíba.', 'no Arroio Chuí, no Rio Grande do Sul.'],
        explicacao: 'Desde levantamentos dos anos 1990, o Caburaí (RR) é o extremo norte.',
        porqueErradas: ['Ideia antiga ("do Oiapoque ao Chuí").', 'Ponto culminante, não extremo norte.', 'Extremo leste.', 'Extremo sul.'],
      },
      {
        id: 'GE8-5',
        nivel: 3,
        enunciado: 'Na proposta de Milton Santos e María Laura Silveira, a "Região Concentrada" corresponde:',
        alternativas: [
          'ao Sudeste e ao Sul, onde o meio técnico-científico-informacional é mais denso.',
          'à Amazônia, por sua concentração de recursos naturais.',
          'ao Nordeste, pela concentração populacional no litoral.',
          'ao Centro-Oeste, pela concentração fundiária.',
          'apenas à cidade de São Paulo.',
        ],
        explicacao: 'Região Concentrada: maior densidade de técnica, ciência e informação.',
        porqueErradas: ['É outra região na proposta.', 'É outra região.', 'É outra região.', 'Abrange SE e S.'],
      },
      {
        id: 'GE8-6',
        nivel: 3,
        enunciado: 'A Constituição de 1988 alterou a divisão política do Brasil ao:',
        alternativas: [
          'criar o estado do Tocantins e transformar Roraima e Amapá em estados.',
          'criar o Distrito Federal.',
          'criar o estado de Mato Grosso do Sul.',
          'transferir a capital para Brasília.',
          'extinguir o estado da Guanabara.',
        ],
        explicacao: 'Em 1988: Tocantins criado; territórios de RR e AP viraram estados; Fernando de Noronha incorporado a PE.',
        porqueErradas: ['DF existe desde 1960 (e antes, como Distrito Federal no RJ).', 'MS foi criado em 1977.', 'A capital mudou em 1960.', 'A fusão Guanabara-RJ foi em 1975.'],
      },
    ],
  },
  {
    id: 'GE9',
    disciplina: 'GE',
    titulo: 'A formação do mundo atual: geopolítica e economia',
    ementa: 'A formação do mundo atual – Geopolítica e Economia: a Geografia e as guerras mundiais, a geopolítica na Guerra Fria, a economia mundial e a globalização, o Brasil no mundo globalizado, a geopolítica no mundo atual.',
    semana: 4,
    texto: `### A Geografia e as guerras mundiais
- **1ª Guerra (1914–1918)**: disputas **imperialistas** por mercados e colônias (Partilha da África, Conferência de Berlim 1884–85), nacionalismos, corrida armamentista. Resultado: fim dos impérios Austro-Húngaro, Otomano e Russo; novos Estados na Europa; **Tratado de Versalhes** (1919) duro com a Alemanha; criação da **Liga das Nações**.
- **Geopolítica clássica**: **Ratzel** (espaço vital — *Lebensraum*), **Mackinder** (teoria do **Heartland**: quem domina o centro da Eurásia domina o mundo), **Haushofer** (geopolítica alemã apropriada pelo nazismo). A Geografia foi usada como **instrumento de poder** e de guerra (Yves Lacoste: "A Geografia — isso serve, em primeiro lugar, para fazer a guerra").
- **2ª Guerra (1939–1945)**: expansionismo nazifascista e japonês; Holocausto; bombas atômicas em Hiroshima e Nagasaki. Resultado: **ONU** (1945), **bipolaridade** EUA x URSS, descolonização afro-asiática.

### A Guerra Fria (1947–1991)
- **Ordem bipolar**: capitalismo (EUA) x socialismo (URSS), sem confronto direto entre as superpotências, mas com **corrida armamentista e espacial** e **guerras indiretas** (Coreia, Vietnã, Afeganistão).
- **Doutrina Truman** e **Plano Marshall** (reconstrução da Europa ocidental) x **COMECON** (bloco socialista).
- **OTAN** (1949) x **Pacto de Varsóvia** (1955).
- **Muro de Berlim** (1961–1989): símbolo da "**Cortina de Ferro**".
- **Movimento dos Países Não Alinhados** (Conferência de **Bandung**, 1955).
- Fim: crise soviética, **Perestroika e Glasnost** (Gorbachev), queda do Muro (1989), **fim da URSS (1991)** e formação da CEI.

### Economia mundial e globalização
- **Globalização**: intensificação dos **fluxos** (mercadorias, capitais, informações, pessoas) em escala mundial, possibilitada pela **revolução técnico-científico-informacional** (Milton Santos: **meio técnico-científico-informacional**) — telecomunicações, internet, transportes.
- **Neoliberalismo** (anos 1980: Thatcher, Reagan; **Consenso de Washington**, 1989): privatizações, abertura comercial, Estado mínimo.
- **Empresas transnacionais**; **nova divisão internacional do trabalho**; deslocalização industrial para países com custos menores (China, Sudeste Asiático).
- **Blocos econômicos**: zona de livre comércio (**USMCA**, ex-NAFTA), união aduaneira (**Mercosul** — Tratado de Assunção, 1991; tarifa externa comum), mercado comum e **união econômica e monetária** (**União Europeia**, euro). Também **APEC**, **ASEAN**.
- **Organismos**: **OMC** (1995, sucedeu o GATT), **FMI** e **Banco Mundial** (Bretton Woods, 1944), **G7/G20**.
- **Contradições**: desigualdades, exclusão digital, crises financeiras globais (2008), **fragmentação** e resistência (movimentos antiglobalização).

### O Brasil no mundo globalizado
Abertura comercial dos anos 1990, **Plano Real** (1994), privatizações; **exportador de commodities** (soja, minério de ferro, petróleo, carnes) — risco de **reprimarização** da pauta; principal parceiro comercial: **China**; atuação no **Mercosul**, **BRICS**, **G20** (presidência brasileira em 2024) e em negociações climáticas (**COP30 em Belém**, 2025).

### Geopolítica no mundo atual
- Do mundo **unipolar** (hegemonia dos EUA nos anos 1990) a uma ordem **multipolar** ou **unimultipolar**: ascensão da **China** (2ª economia do mundo, Nova Rota da Seda), retorno da **Rússia** como potência militar.
- **Conflitos recentes**: Guerra **Rússia–Ucrânia** (anexação da Crimeia em 2014; invasão em 2022); conflito **Israel–Palestina** (guerra em Gaza a partir de outubro de 2023); tensões EUA–China (comércio, tecnologia, Taiwan); terrorismo internacional; disputas por recursos (água, minerais críticos, energia).
- **Expansão do BRICS** a partir de 2024 e debates sobre a reforma do Conselho de Segurança da ONU (o Brasil pleiteia assento permanente).`,
    verificar: ['Situação atual dos conflitos citados e composição do BRICS — temas que mudam rapidamente; checar notícias recentes antes da prova.'],
    fontes: [{ titulo: 'ONU Brasil', url: 'https://brasil.un.org/pt-br' }, { titulo: 'Ministério das Relações Exteriores — gov.br', url: 'https://www.gov.br/mre/pt-br' }, BE_GEO, TM_GEO],
    questoes: [
      {
        id: 'GE9-1',
        nivel: 1,
        enunciado: 'A organização militar criada em 1949, sob liderança dos Estados Unidos, no contexto da Guerra Fria, é a:',
        alternativas: ['OTAN.', 'Pacto de Varsóvia.', 'COMECON.', 'ONU.', 'OMC.'],
        explicacao: 'Organização do Tratado do Atlântico Norte, 1949.',
        porqueErradas: ['Aliança militar soviética (1955).', 'Bloco econômico socialista.', 'Organização internacional criada em 1945.', 'Comércio, 1995.'],
      },
      {
        id: 'GE9-2',
        nivel: 1,
        enunciado: 'O Mercosul foi criado em 1991 pelo Tratado de:',
        alternativas: ['Assunção.', 'Versalhes.', 'Maastricht.', 'Roma.', 'Tordesilhas.'],
        explicacao: 'Tratado de Assunção (Brasil, Argentina, Paraguai e Uruguai).',
        porqueErradas: ['Fim da 1ª Guerra.', 'Criou a União Europeia (1992).', 'Criou a CEE (1957).', 'Partilha colonial (1494).'],
      },
      {
        id: 'GE9-3',
        nivel: 2,
        enunciado: 'A teoria geopolítica do "Heartland", segundo a qual o domínio do centro da Eurásia garantiria o poder mundial, foi formulada por:',
        alternativas: ['Halford Mackinder.', 'Friedrich Ratzel.', 'Milton Santos.', 'Yves Lacoste.', 'Immanuel Wallerstein.'],
        explicacao: 'Halford Mackinder formulou a teoria do Heartland (Pivô Geográfico da História, 1904).',
        porqueErradas: ['Espaço vital.', 'Meio técnico-científico-informacional.', 'Crítico da geopolítica: "A Geografia serve para fazer a guerra".', 'Sistema-mundo.'],
      },
      {
        id: 'GE9-4',
        nivel: 2,
        enunciado: 'Em relação à integração econômica, o Mercosul é classificado como:',
        alternativas: ['união aduaneira (imperfeita), com tarifa externa comum.', 'zona de livre comércio sem tarifa externa comum.', 'união econômica e monetária com moeda única.', 'mercado comum plenamente consolidado.', 'aliança militar.'],
        explicacao: 'Possui TEC, com listas de exceções — união aduaneira imperfeita.',
        porqueErradas: ['É o caso do USMCA.', 'É o caso da zona do euro (UE).', 'O mercado comum é objetivo, não realidade plena.', 'É bloco econômico.'],
      },
      {
        id: 'GE9-5',
        nivel: 3,
        enunciado: 'Para Milton Santos, a globalização se apoia na constituição de um meio geográfico denominado:',
        alternativas: ['meio técnico-científico-informacional.', 'meio natural.', 'meio técnico pré-industrial.', 'espaço vital.', 'heartland.'],
        explicacao: 'É o meio característico do período atual, com ciência, técnica e informação incorporadas ao território.',
        porqueErradas: ['Período anterior às técnicas modernas.', 'Período anterior.', 'Conceito de Ratzel.', 'Conceito de Mackinder.'],
      },
      {
        id: 'GE9-6',
        nivel: 3,
        enunciado: 'A expressão "reprimarização da pauta exportadora", aplicada ao Brasil no século XXI, refere-se:',
        alternativas: [
          'ao aumento da participação de commodities (soja, minério, petróleo) nas exportações, em detrimento de manufaturados.',
          'à volta da economia ao modelo agrário colonial, sem indústria.',
          'ao crescimento das exportações de tecnologia de ponta.',
          'à substituição das importações por produção nacional.',
          'à redução do comércio com a China.',
        ],
        explicacao: 'Produtos primários ganham peso relativo nas exportações.',
        porqueErradas: ['A indústria continua existindo.', 'É o oposto.', 'Política dos anos 1930–1970.', 'A China é o principal parceiro.'],
      },
    ],
  },
  {
    id: 'GE17',
    disciplina: 'GE',
    titulo: 'Sistemas de localização, fuso horário e representação cartográfica',
    ementa: 'Sistemas de localização e representação cartográfica: sistemas de localização cartográfica e fuso horário, a representação do espaço geográfico.',
    semana: 1,
    texto: `Cartografia é a parte **mais calculável** da prova — vale treinar até ficar automático.

### Coordenadas geográficas
- **Paralelos**: círculos paralelos ao **Equador** (0°). **Latitude** = distância angular até o Equador, de **0° a 90° Norte ou Sul**. Paralelos notáveis: **Trópico de Câncer** (~23°27' N), **Trópico de Capricórnio** (~23°27' S), **Círculo Polar Ártico** e **Antártico** (~66°33').
- **Meridianos**: semicírculos de polo a polo. **Longitude** = distância angular até o **Meridiano de Greenwich** (0°, Londres), de **0° a 180° Leste ou Oeste**.
- Toda posição = **latitude + longitude** (ex.: Mogi Guaçu ≈ 22°S, 47°O). O **GPS** (sistema de satélites) fornece coordenadas.
- A latitude influencia o **clima** (zonas térmicas); a longitude define a **hora**.

### Fusos horários
- A Terra gira **360° em 24 h** → **15° por hora** (1° a cada 4 minutos). São **24 fusos** teóricos, a partir de Greenwich (**GMT/UTC**).
- A Terra gira de **oeste para leste** → o Sol "nasce" a leste → lugares a **leste estão adiantados**; a **oeste, atrasados**.
- **Linha Internacional de Data** (próxima a 180°): cruzá-la de oeste para leste "volta" um dia; de leste para oeste, "avança" um dia.
- Os fusos **práticos** seguem limites políticos (a China, com ~60° de extensão, usa **um só** fuso).
- **Brasil**: **4 fusos** — **UTC−2** (Fernando de Noronha e ilhas oceânicas), **UTC−3** (**hora de Brasília**: S, SE, NE, GO, DF, TO, AP, PA), **UTC−4** (MS, MT, RO, RR, maior parte do AM) e **UTC−5** (Acre e sudoeste do Amazonas — restabelecido em 2013). O **horário de verão** foi extinto em 2019.
- **Cálculo**: diferença de longitude ÷ 15 = diferença em horas. Ex.: Brasília (~48°O, fuso −3) às 10h → Londres (0°) = **13h**; Tóquio (UTC+9) = 10 + 12 = **22h** do mesmo dia.

### Escala
- **Escala** = relação entre a medida no mapa e a medida real. **Numérica** (1:100.000 → 1 cm no mapa = 100.000 cm = **1 km** no terreno) ou **gráfica** (barra; vantagem: continua válida se o mapa for ampliado ou reduzido).
- **Escala grande** (denominador **pequeno**, ex.: 1:5.000) → **mais detalhes**, **área menor** (planta de bairro). **Escala pequena** (denominador **grande**, ex.: 1:50.000.000) → **menos detalhes**, **área maior** (mapa-múndi).
- **Cálculo**: D (real) = d (mapa) × E. Ex.: 4 cm em 1:250.000 → 4 × 250.000 = 1.000.000 cm = **10 km**.

### Projeções cartográficas (a representação do espaço)
Toda projeção **distorce** algo (é impossível planificar uma esfera sem deformações). Pela superfície: **cilíndrica**, **cônica** (latitudes médias) e **plana/azimutal** (polos; usada no emblema da ONU). Pelas propriedades:
- **Conforme**: preserva **formas/ângulos**, distorce áreas — **Mercator** (1569): ótima para **navegação**, mas **exagera as áreas** em altas latitudes (a Groenlândia parece do tamanho da África, que é ~14 vezes maior) — associada ao **eurocentrismo**.
- **Equivalente**: preserva **áreas**, distorce formas — **Peters** (1973), usada para destacar o tamanho real dos países do Sul.
- **Equidistante**: preserva distâncias a partir de um ponto.
- **Afilática**: não preserva nenhuma propriedade, mas minimiza distorções gerais — **Robinson**.

### Representação do relevo e geotecnologias
- **Curvas de nível**: linhas que unem pontos de mesma altitude; **curvas próximas = terreno íngreme**; afastadas = suave. **Perfil topográfico**: corte vertical do relevo.
- **Orientação**: **rosa dos ventos** (pontos cardeais N, S, L, O; colaterais NE, SE, SO, NO); o Sol nasce a leste.
- **Sensoriamento remoto** (imagens de satélite e aéreas), **SIG** (Sistemas de Informação Geográfica — cruzam camadas de dados), **GPS** — o conjunto é chamado de **geoprocessamento**.`,
    fontes: [IBGE_EDUCA, BE_GEO, SO_GEO],
    questoes: [
      {
        id: 'GE17-1',
        nivel: 1,
        enunciado: 'Num mapa na escala 1:100.000, uma distância de 5 cm corresponde, no terreno, a:',
        alternativas: ['5 km.', '50 km.', '500 m.', '0,5 km.', '50 m.'],
        explicacao: '5 × 100.000 = 500.000 cm = 5.000 m = 5 km.',
        porqueErradas: ['Erro de uma casa decimal.', 'Erro de uma casa decimal.', 'Erro de uma casa decimal.', 'Erro de duas casas.'],
      },
      {
        id: 'GE17-2',
        nivel: 1,
        enunciado: 'A longitude de um ponto é medida a partir:',
        alternativas: ['do Meridiano de Greenwich, de 0° a 180° leste ou oeste.', 'da Linha do Equador, de 0° a 90° norte ou sul.', 'do Trópico de Capricórnio.', 'do Polo Norte.', 'da Linha Internacional de Data, de 0° a 360°.'],
        explicacao: 'Longitude: distância angular a Greenwich.',
        porqueErradas: ['Isso é latitude.', 'Não é referência de longitude.', 'Não é referência de longitude.', 'Varia de 0 a 180 a partir de Greenwich.'],
      },
      {
        id: 'GE17-3',
        nivel: 2,
        enunciado: 'Quando são 10 horas em Brasília (UTC−3), que horas são em Tóquio (UTC+9)?',
        alternativas: ['22 horas do mesmo dia.', '19 horas do mesmo dia.', '22 horas do dia anterior.', '1 hora do dia seguinte.', '7 horas do mesmo dia.'],
        explicacao: 'Diferença de 12 horas (de −3 a +9); Tóquio está a leste, adiantado: 10 + 12 = 22h.',
        porqueErradas: ['Diferença calculada errada.', 'Leste é adiantado, não atrasado.', 'Diferença calculada errada.', 'Subtraiu em vez de somar.'],
      },
      {
        id: 'GE17-4',
        nivel: 2,
        enunciado: 'Comparando um mapa na escala 1:10.000 com outro na escala 1:1.000.000, é correto afirmar que o primeiro:',
        alternativas: [
          'tem escala maior, representando área menor com mais detalhes.',
          'tem escala menor, representando área maior com menos detalhes.',
          'tem escala maior e representa área maior.',
          'apresenta menos detalhes.',
          'é adequado para um mapa-múndi.',
        ],
        explicacao: 'Denominador menor = escala maior = mais detalhe, área menor.',
        porqueErradas: ['Inverte.', 'Escala maior representa área menor.', 'Apresenta mais detalhes.', 'Mapa-múndi usa escala pequena.'],
      },
      {
        id: 'GE17-5',
        nivel: 3,
        enunciado: 'A projeção de Mercator é criticada por favorecer uma visão eurocêntrica porque:',
        alternativas: [
          'é conforme e exagera as áreas das altas latitudes, ampliando a Europa e a América do Norte em relação às áreas tropicais.',
          'é equivalente e preserva as áreas reais de todos os continentes.',
          'coloca a América do Sul no centro do mapa.',
          'é uma projeção azimutal centrada no Polo Sul.',
          'não preserva ângulos, sendo inútil para a navegação.',
        ],
        explicacao: 'Mercator preserva formas, mas amplia áreas em latitudes altas.',
        porqueErradas: ['Peters é equivalente.', 'Não é a característica.', 'É cilíndrica.', 'Preserva ângulos e é útil para navegação.'],
      },
      {
        id: 'GE17-6',
        nivel: 3,
        enunciado: 'Em uma carta topográfica, as curvas de nível aparecem muito próximas umas das outras em determinada área. Isso indica:',
        alternativas: ['terreno de forte declividade (íngreme).', 'terreno plano.', 'área alagada.', 'presença de rio perene.', 'erro de impressão.'],
        explicacao: 'Curvas próximas = grande variação de altitude em pouca distância.',
        porqueErradas: ['Curvas afastadas indicam terreno suave.', 'Não se infere disso.', 'Não se infere disso.', 'Não é erro.'],
      },
    ],
  },
]
