import type { Topico } from './types.ts'
import { BE_GEO, IBGE, IBGE_EDUCA, TM_GEO } from './ge1.ts'

const EPE = { titulo: 'EPE — Balanço Energético Nacional', url: 'https://www.epe.gov.br/pt/publicacoes-dados-abertos/publicacoes/balanco-energetico-nacional-ben' }
const ANA = { titulo: 'ANA — Agência Nacional de Águas e Saneamento Básico', url: 'https://www.gov.br/ana/pt-br' }
const LEI_AGUAS = { titulo: 'Lei nº 9.433/1997 — Política Nacional de Recursos Hídricos', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9433.htm' }
const ESTATUTO_CIDADE = { titulo: 'Lei nº 10.257/2001 — Estatuto da Cidade', url: 'https://www.planalto.gov.br/ccivil_03/leis/leis_2001/l10257.htm' }
const CODIGO_FLORESTAL = { titulo: 'Lei nº 12.651/2012 — Código Florestal', url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651.htm' }
const SNUC = { titulo: 'Lei nº 9.985/2000 — SNUC', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9985.htm' }
const ODS = { titulo: 'ONU Brasil — Objetivos de Desenvolvimento Sustentável', url: 'https://brasil.un.org/pt-br/sdgs' }
const MMA = { titulo: 'Ministério do Meio Ambiente e Mudança do Clima', url: 'https://www.gov.br/mma/pt-br' }

export const TOPICOS_GE_2: Topico[] = [
  {
    id: 'GE10',
    disciplina: 'GE',
    titulo: 'Espaço, produção e tecnologia: indústria',
    ementa: 'Espaço, produção e tecnologia: indústria e transformações no espaço geográfico, indústria e globalização, a indústria no Brasil.',
    semana: 4,
    texto: `### Revoluções industriais
- **1ª (meados do séc. XVIII, Inglaterra)**: **máquina a vapor**, **carvão**, ferro, indústria **têxtil**; fábricas, êxodo rural, crescimento urbano, proletariado.
- **2ª (fim do séc. XIX)**: **eletricidade**, **petróleo** (motor a combustão), **aço**, química, automóvel; **EUA, Alemanha, Japão**; grandes corporações e monopólios; **taylorismo** (racionalização do trabalho, cronometragem) e **fordismo** (linha de montagem, produção e consumo **em massa**, estoques grandes, produtos padronizados).
- **3ª — Revolução técnico-científica-informacional (pós-1970)**: **eletrônica, informática, robótica, biotecnologia, telecomunicações**; **toyotismo/acumulação flexível**: **just in time** (produção sob demanda, estoque mínimo), **kanban**, **terceirização**, trabalhador **multifuncional**, qualidade total.
- Fala-se em **Indústria 4.0** (inteligência artificial, internet das coisas, automação avançada).

### Classificação das indústrias
- **Bens de produção (de base)**: transformam matérias-primas brutas em insumos — **siderúrgicas, metalúrgicas, petroquímicas**.
- **Bens intermediários (de capital)**: máquinas, equipamentos, peças para outras indústrias.
- **Bens de consumo**: **duráveis** (automóveis, eletrodomésticos) e **não duráveis** (alimentos, roupas, remédios).

### Fatores de localização industrial
**Matérias-primas, energia, mão de obra** (quantidade, qualificação, custo), **mercado consumidor**, **infraestrutura** (transportes, comunicações), **incentivos fiscais**, legislação ambiental e trabalhista. Com a globalização e a melhoria dos transportes, ocorre a **dispersão/desconcentração** industrial — empresas buscam custos menores (**deslocalização**).

### Indústria e globalização
**Empresas transnacionais** com sede nos países centrais e filiais em países periféricos; **nova Divisão Internacional do Trabalho** (países emergentes também exportam manufaturados); **cadeias globais de valor** (projeto num país, peças em vários, montagem em outro); **tecnopolos** (Vale do Silício; no Brasil, Campinas e São José dos Campos); **China** como "fábrica do mundo".

### A indústria no Brasil
- **Industrialização tardia** e **dependente**, baseada na **substituição de importações**.
- **Café** (séc. XIX–1930): capital acumulado e infraestrutura em São Paulo → primeiras indústrias (têxteis, alimentos).
- **Era Vargas (1930–1945; 1951–1954)**: Estado indutor — **CSN** (Volta Redonda, 1941), **Vale do Rio Doce** (1942), **Petrobras** (1953); indústria de base.
- **JK (1956–1961) — Plano de Metas** ("50 anos em 5"): **indústria automobilística** e bens de consumo duráveis; **tripé**: capital **estatal** + **privado nacional** + **estrangeiro**; Brasília.
- **Ditadura militar**: **"milagre econômico"** (1968–1973), **II PND** (1974), endividamento externo → **crise dos anos 1980 ("década perdida")**.
- **Anos 1990**: abertura econômica, privatizações, Plano Real.
- **Concentração** no **Sudeste**, sobretudo em **São Paulo**; desde os anos 1970–1980, **desconcentração** para o interior paulista (eixos das rodovias Anhanguera, Bandeirantes, Dutra), para outros estados (Sul, MG, Nordeste — "**guerra fiscal**"), mas a **gestão, o capital e a pesquisa** continuam concentrados na metrópole paulista.
- **Desindustrialização**: queda da participação da indústria de transformação no PIB desde os anos 1980, com reprimarização das exportações.`,
    fontes: [IBGE, BE_GEO, TM_GEO],
    questoes: [
      {
        id: 'GE10-1',
        nivel: 1,
        enunciado: 'O sistema produtivo caracterizado por produção sob demanda, estoques mínimos e trabalhador multifuncional é o:',
        alternativas: ['toyotismo.', 'fordismo.', 'taylorismo.', 'mercantilismo.', 'artesanato.'],
        explicacao: 'Toyotismo: just in time, flexibilidade.',
        porqueErradas: ['Produção em massa, grandes estoques.', 'Racionalização e cronometragem do trabalho.', 'Política econômica dos séculos XVI–XVIII.', 'Produção pré-industrial.'],
      },
      {
        id: 'GE10-2',
        nivel: 1,
        enunciado: 'Siderúrgicas e petroquímicas são exemplos de indústrias de:',
        alternativas: ['bens de produção (de base).', 'bens de consumo não duráveis.', 'bens de consumo duráveis.', 'serviços.', 'alta tecnologia de software.'],
        explicacao: 'Transformam matérias-primas em insumos para outras indústrias.',
        porqueErradas: ['Alimentos, roupas.', 'Automóveis, eletrodomésticos.', 'Não são indústria.', 'Não é o caso.'],
      },
      {
        id: 'GE10-3',
        nivel: 2,
        enunciado: 'O modelo de industrialização brasileira no governo Juscelino Kubitschek apoiou-se no chamado "tripé", formado por:',
        alternativas: [
          'capital estatal, capital privado nacional e capital estrangeiro.',
          'café, açúcar e algodão.',
          'agricultura, pecuária e mineração.',
          'Estado, sindicatos e Igreja.',
          'ferrovias, hidrovias e rodovias.',
        ],
        explicacao: 'Estado na infraestrutura e base; privado nacional em bens intermediários; estrangeiro em bens duráveis (automóveis).',
        porqueErradas: ['Ciclos agrícolas.', 'Setores primários.', 'Não se aplica.', 'Modais de transporte.'],
      },
      {
        id: 'GE10-4',
        nivel: 2,
        enunciado: 'A Companhia Siderúrgica Nacional (CSN), a Vale do Rio Doce e a Petrobras foram criadas no contexto:',
        alternativas: ['da Era Vargas, com o Estado atuando na indústria de base.', 'do Plano de Metas de JK.', 'do milagre econômico.', 'das privatizações dos anos 1990.', 'da economia cafeeira do século XIX.'],
        explicacao: 'CSN (1941), Vale (1942) e Petrobras (1953) — governos Vargas.',
        porqueErradas: ['JK priorizou bens duráveis.', 'Período posterior (1968–1973).', 'Foram privatizadas (CSN, Vale) nesse período.', 'Período anterior.'],
      },
      {
        id: 'GE10-5',
        nivel: 3,
        enunciado: 'Sobre a desconcentração industrial no Brasil a partir dos anos 1970–1980, é correto afirmar:',
        alternativas: [
          'houve dispersão de unidades produtivas para o interior paulista e outros estados, mas a gestão, o capital e a pesquisa permaneceram concentrados na metrópole de São Paulo.',
          'São Paulo deixou de ser o principal centro industrial e financeiro do país.',
          'a indústria transferiu-se integralmente para o Nordeste.',
          'a desconcentração foi causada pela proibição de indústrias em capitais.',
          'não houve qualquer papel dos incentivos fiscais.',
        ],
        explicacao: 'A dispersão da produção convive com a concentração do comando.',
        porqueErradas: ['SP continua sendo o principal centro.', 'Houve dispersão parcial.', 'Não houve tal proibição.', 'A "guerra fiscal" teve papel relevante.'],
      },
      {
        id: 'GE10-6',
        nivel: 3,
        enunciado: 'O fenômeno pelo qual um smartphone é projetado nos EUA, tem componentes fabricados em vários países asiáticos e é montado na China caracteriza:',
        alternativas: ['as cadeias globais de valor, típicas da globalização produtiva.', 'o fordismo clássico.', 'a substituição de importações.', 'a autarquia econômica.', 'a 1ª Revolução Industrial.'],
        explicacao: 'Fragmentação das etapas produtivas entre países.',
        porqueErradas: ['Produção concentrada numa planta.', 'Política de industrialização nacional.', 'Autossuficiência, o oposto.', 'Não se aplica.'],
      },
    ],
  },
  {
    id: 'GE11',
    disciplina: 'GE',
    titulo: 'Espaço, produção e tecnologia: agropecuária',
    ementa: 'Tendências da agricultura mundial e políticas agrícolas no mundo desenvolvido, o espaço agrário no mundo subdesenvolvido e no Brasil.',
    semana: 4,
    texto: `### Sistemas agrícolas
- **Agricultura de subsistência / tradicional**: pequena escala, técnicas rudimentares, mão de obra familiar, baixa produtividade (ex.: **roça de toco/coivara** — derrubada e queimada).
- **Plantation**: herança colonial — **monocultura** em **latifúndio**, voltada à **exportação**, historicamente com mão de obra escravizada (cana, café, algodão).
- **Agricultura moderna/comercial**: mecanização, insumos químicos, biotecnologia, alta produtividade, integração com a indústria (**agronegócio**, **complexos agroindustriais**).
- **Agricultura familiar** e **agroecologia/orgânica**.

### Tendências da agricultura mundial
- **Revolução Verde** (1960–70): sementes selecionadas (híbridas), **fertilizantes**, **agrotóxicos**, irrigação e mecanização → aumento da produção, mas **não resolveu a fome** (que é sobretudo **problema de acesso/distribuição**), concentrou terras e gerou impactos ambientais (contaminação, perda de biodiversidade, dependência de insumos).
- **Biotecnologia**: transgênicos (OGM), melhoramento genético (no Brasil, papel da **Embrapa**, 1973, na adaptação da soja ao Cerrado).
- **Agricultura de precisão** (GPS, drones, sensores).
- **Commodities** agrícolas negociadas em bolsas; **financeirização**; concentração em grandes **tradings** e corporações.
- **Segurança alimentar** e **soberania alimentar**; a FAO estima que a produção mundial de alimentos é suficiente — a fome decorre da **pobreza e da desigualdade**.

### Políticas agrícolas no mundo desenvolvido
- **Subsídios e protecionismo**: a **PAC (Política Agrícola Comum)** da União Europeia e a **Farm Bill** dos EUA garantem renda aos agricultores, preços mínimos e estoques — distorcem o comércio mundial e prejudicam exportadores do Sul, como o Brasil.
- Disputas na **OMC** (Rodada Doha) e barreiras não tarifárias (sanitárias, ambientais).
- Agricultura **altamente mecanizada**, pequena parcela da população no campo, alta produtividade.

### O espaço agrário no mundo subdesenvolvido
Convivência de **plantation exportadora** e **subsistência**; **concentração fundiária**; conflitos pela terra; dependência de exportação de produtos primários; **êxodo rural**; pobreza rural.

### O espaço agrário no Brasil
- **Estrutura fundiária concentrada**: herança das **sesmarias** e da **Lei de Terras (1850)**, que só permitia acesso à terra por compra. Poucos estabelecimentos muito grandes ocupam grande parte da área; muitos pequenos ocupam pouca área.
- **Modernização conservadora** (1960–80): modernizou técnicas **sem reforma agrária**, com crédito subsidiado aos grandes; gerou **êxodo rural** massivo e **boias-frias** (trabalhadores temporários).
- **Expansão da fronteira agrícola**: do Sul e Sudeste para o **Centro-Oeste** (soja no Cerrado) e para o Norte (**arco do desmatamento**) e o **MATOPIBA** (Maranhão, Tocantins, Piauí, Bahia).
- **Agronegócio** exportador (**soja**, milho, carnes, café, açúcar, laranja, celulose) x **agricultura familiar** — responsável por grande parte dos alimentos do mercado interno e pela maior parte do **pessoal ocupado** no campo, embora ocupe uma fração menor da área (Censo Agro 2017). Políticas: **PRONAF** (crédito), **PNAE** (30% da merenda escolar comprada da agricultura familiar).
- **Conflitos no campo**: **MST**, CPT, reforma agrária (**Estatuto da Terra, 1964**; **INCRA**), violência fundiária, grilagem, terras indígenas e quilombolas.
- **Relações de trabalho**: assalariados permanentes e temporários, parceria, arrendamento; casos de **trabalho análogo à escravidão**.`,
    verificar: ['Números do Censo Agropecuário 2017 sobre agricultura familiar (IBGE) e o percentual de compras do PNAE (Lei 11.947/2009 e alterações).'],
    fontes: [IBGE, { titulo: 'Embrapa', url: 'https://www.gov.br/embrapa/pt-br' }, BE_GEO],
    questoes: [
      {
        id: 'GE11-1',
        nivel: 1,
        enunciado: 'O sistema agrícola de origem colonial, baseado em latifúndio, monocultura e produção para exportação, é a:',
        alternativas: ['plantation.', 'agricultura de subsistência.', 'agricultura orgânica.', 'agricultura familiar.', 'roça de coivara.'],
        explicacao: 'Plantation: latifúndio + monocultura + exportação.',
        porqueErradas: ['Pequena escala para consumo próprio.', 'Sem insumos químicos.', 'Mão de obra familiar, diversificada.', 'Técnica tradicional de derrubada e queima.'],
      },
      {
        id: 'GE11-2',
        nivel: 1,
        enunciado: 'A sigla MATOPIBA refere-se a:',
        alternativas: [
          'uma área de expansão da fronteira agrícola nos estados do Maranhão, Tocantins, Piauí e Bahia.',
          'um bloco econômico sul-americano.',
          'um bioma do Centro-Oeste.',
          'uma região metropolitana do Nordeste.',
          'um programa de reforma agrária.',
        ],
        explicacao: 'Área de expansão da soja sobre o Cerrado.',
        porqueErradas: ['Não é bloco.', 'Não é bioma (é sobretudo Cerrado).', 'Não é região metropolitana.', 'Não é programa.'],
      },
      {
        id: 'GE11-3',
        nivel: 2,
        enunciado: 'Sobre a Revolução Verde, é correto afirmar:',
        alternativas: [
          'aumentou a produtividade com sementes melhoradas, fertilizantes, agrotóxicos e mecanização, mas não eliminou a fome e gerou impactos ambientais e sociais.',
          'acabou com a fome mundial nas décadas de 1960 e 1970.',
          'baseou-se na agricultura orgânica e agroecológica.',
          'reduziu a concentração de terras nos países subdesenvolvidos.',
          'eliminou o uso de insumos químicos.',
        ],
        explicacao: 'A fome é sobretudo questão de acesso e distribuição.',
        porqueErradas: ['A fome persistiu.', 'É o oposto.', 'Tendeu a concentrar.', 'Ampliou o uso.'],
      },
      {
        id: 'GE11-4',
        nivel: 2,
        enunciado: 'A Política Agrícola Comum (PAC) da União Europeia é frequentemente criticada pelos países exportadores agrícolas do Sul porque:',
        alternativas: [
          'concede subsídios aos produtores europeus, distorcendo preços e dificultando a concorrência no mercado mundial.',
          'proíbe a produção agrícola na Europa.',
          'obriga a Europa a importar todos os alimentos.',
          'elimina as barreiras sanitárias.',
          'favorece exclusivamente a agricultura africana.',
        ],
        explicacao: 'Subsídios e protecionismo prejudicam exportadores como o Brasil.',
        porqueErradas: ['Não proíbe.', 'Não obriga.', 'Não elimina.', 'Não é o caso.'],
      },
      {
        id: 'GE11-5',
        nivel: 3,
        enunciado: 'A expressão "modernização conservadora" da agricultura brasileira refere-se:',
        alternativas: [
          'à modernização técnica do campo sem alteração da estrutura fundiária concentrada, favorecendo grandes proprietários e provocando êxodo rural.',
          'à preservação de técnicas tradicionais de cultivo.',
          'à reforma agrária ampla realizada nos anos 1970.',
          'à proibição de máquinas agrícolas.',
          'à conservação ambiental do Cerrado.',
        ],
        explicacao: 'Moderniza a técnica, conserva a estrutura agrária.',
        porqueErradas: ['É o oposto.', 'Não houve reforma ampla.', 'Houve mecanização.', 'O Cerrado foi amplamente convertido.'],
      },
      {
        id: 'GE11-6',
        nivel: 3,
        enunciado: 'A concentração fundiária no Brasil tem raízes históricas, entre as quais a Lei de Terras de 1850, que:',
        alternativas: [
          'estabeleceu a compra como forma de acesso à terra, dificultando o acesso de ex-escravizados, imigrantes pobres e posseiros.',
          'distribuiu terras gratuitamente aos libertos.',
          'criou o MST.',
          'instituiu a reforma agrária.',
          'proibiu os latifúndios.',
        ],
        explicacao: 'Ao exigir a compra, a lei bloqueou o acesso dos mais pobres.',
        porqueErradas: ['Não houve distribuição.', 'O MST surgiu em 1984.', 'O Estatuto da Terra é de 1964.', 'Não proibiu.'],
      },
    ],
  },
  {
    id: 'GE12',
    disciplina: 'GE',
    titulo: 'Energia: geopolítica e economia',
    ementa: 'Energia – Geopolítica e Economia: a infraestrutura energética no mundo, as fontes alternativas e a energia no Brasil.',
    semana: 5,
    texto: `### Fontes de energia
- **Não renováveis**: **petróleo** (principal fonte mundial; transportes e petroquímica), **carvão mineral** (base da 1ª Revolução Industrial; ainda grande na geração elétrica da China e da Índia; o mais poluente), **gás natural** (mais "limpo" entre os fósseis) e **nuclear** (urânio; sem emissão de CO2 na geração, mas com riscos — Chernobyl 1986, Fukushima 2011 — e rejeitos radioativos).
- **Renováveis**: **hidrelétrica** (impactos: alagamento, deslocamento de populações, perda de biodiversidade), **eólica**, **solar** (fotovoltaica e térmica), **biomassa** (lenha, bagaço de cana, etanol, biodiesel), **geotérmica** (Islândia), **maremotriz**, **hidrogênio verde** (em desenvolvimento).

### Geopolítica do petróleo
- Reservas concentradas no **Oriente Médio** (Arábia Saudita, Irã, Iraque, Kuwait, EAU), na **Venezuela** (maiores reservas provadas), Rússia, EUA, Canadá.
- **OPEP** (1960): cartel que controla parte da produção e influencia preços. **Choques do petróleo**: **1973** (Guerra do Yom Kippur — embargo árabe) e **1979** (Revolução Iraniana) — elevaram fortemente os preços e afetaram economias importadoras como a brasileira.
- Conflitos ligados ao petróleo: Guerra do Golfo (1991), Iraque (2003); hoje, **gás russo** e a guerra na Ucrânia mostram a dependência energética da Europa.
- **EUA** tornaram-se grandes produtores com o **gás e óleo de xisto** (*fracking*).
- **Transição energética** e **descarbonização**: Acordo de Paris; crescimento acelerado de solar e eólica (a China lidera); disputa por **minerais críticos** (lítio, cobalto, terras raras) para baterias.

### Matriz energética x matriz elétrica (distinção que a banca adora)
- **Matriz energética**: **todas** as fontes usadas para **qualquer fim** (transporte, indústria, residências, eletricidade).
- **Matriz elétrica**: só as fontes usadas para **gerar eletricidade**.
- **Brasil**: matriz **energética** com **cerca de metade renovável** (cana, hidráulica, lenha, eólica, solar) — muito acima da média mundial (cerca de 15%); matriz **elétrica** **predominantemente renovável** (cerca de 85–90%), com **hidrelétricas** em primeiro lugar e forte crescimento de **eólica** e **solar**.

### A energia no Brasil
- **Hidrelétricas**: grande potencial hídrico; **Itaipu** (binacional **Brasil–Paraguai**, rio Paraná), Belo Monte (rio Xingu, PA), Tucuruí (rio Tocantins), usinas do Madeira (Jirau, Santo Antônio). Expansão para a **Amazônia** gera conflitos com povos indígenas e ribeirinhos. **Crise hídrica** (2001 — "apagão"; 2014–15; 2021) mostra a vulnerabilidade à seca.
- **Petróleo**: **Petrobras** (1953, "O petróleo é nosso"); bacias de **Campos** e **Santos**; **pré-sal** (descoberto em **2006–2007**) em águas ultraprofundas → o Brasil tornou-se exportador de petróleo cru.
- **Etanol**: **Proálcool** (**1975**), resposta ao choque do petróleo; carros **flex** (2003); cana-de-açúcar concentrada em **São Paulo** (inclusive na região de Mogi Guaçu).
- **Eólica**: concentrada no **Nordeste** (Bahia, Rio Grande do Norte, Piauí, Ceará) — ventos constantes; também no RS.
- **Solar**: crescimento explosivo, sobretudo em **geração distribuída** (telhados).
- **Nuclear**: **Angra 1 e 2** (RJ); Angra 3 em construção.
- **Carvão**: pequeno, de baixa qualidade, no **Sul** (SC, RS).
- **Biodiesel** (soja, sebo) misturado ao diesel.`,
    verificar: ['Percentuais atualizados das matrizes energética e elétrica brasileiras — conferir o último Balanço Energético Nacional (EPE).'],
    fontes: [EPE, { titulo: 'Ministério de Minas e Energia', url: 'https://www.gov.br/mme/pt-br' }, BE_GEO],
    questoes: [
      {
        id: 'GE12-1',
        nivel: 1,
        enunciado: 'A usina hidrelétrica de Itaipu, no rio Paraná, é um empreendimento binacional entre o Brasil e:',
        alternativas: ['o Paraguai.', 'a Argentina.', 'o Uruguai.', 'a Bolívia.', 'a Venezuela.'],
        explicacao: 'Itaipu Binacional: Brasil–Paraguai.',
        porqueErradas: ['Yacyretá é Argentina–Paraguai.', 'Salto Grande é Argentina–Uruguai.', 'Não.', 'Não.'],
      },
      {
        id: 'GE12-2',
        nivel: 1,
        enunciado: 'O Programa Nacional do Álcool (Proálcool), criado em 1975, foi uma resposta:',
        alternativas: ['ao primeiro choque do petróleo.', 'à descoberta do pré-sal.', 'ao Acordo de Paris.', 'à crise hídrica de 2001.', 'à criação da Petrobras.'],
        explicacao: 'O choque de 1973 encareceu o petróleo importado.',
        porqueErradas: ['Pré-sal: 2006–2007.', 'Acordo de Paris: 2015.', 'Posterior.', 'Petrobras: 1953.'],
      },
      {
        id: 'GE12-3',
        nivel: 2,
        enunciado: 'Diferença entre matriz energética e matriz elétrica:',
        alternativas: [
          'a energética inclui todas as fontes de energia usadas para qualquer fim; a elétrica, apenas as fontes usadas para gerar eletricidade.',
          'são sinônimos.',
          'a elétrica inclui os combustíveis dos transportes.',
          'a energética considera apenas fontes renováveis.',
          'a elétrica é sempre menos renovável que a energética.',
        ],
        explicacao: 'No Brasil, a elétrica é bem mais renovável que a energética.',
        porqueErradas: ['São distintas.', 'Transportes entram na energética.', 'Inclui todas.', 'No Brasil é o contrário.'],
      },
      {
        id: 'GE12-4',
        nivel: 2,
        enunciado: 'A geração de energia eólica no Brasil concentra-se principalmente na região:',
        alternativas: ['Nordeste.', 'Norte.', 'Centro-Oeste.', 'Sudeste.', 'Amazônia Ocidental.'],
        explicacao: 'Ventos constantes e intensos no Nordeste (BA, RN, PI, CE).',
        porqueErradas: ['Predomina hidrelétrica.', 'Pouco expressiva.', 'Pouco expressiva.', 'Pouco expressiva.'],
      },
      {
        id: 'GE12-5',
        nivel: 3,
        enunciado: 'Sobre a matriz energética brasileira, comparada à média mundial, é correto afirmar:',
        alternativas: [
          'possui participação de fontes renováveis muito superior à média mundial, graças sobretudo à hidroeletricidade e aos derivados da cana.',
          'depende majoritariamente do carvão mineral.',
          'é totalmente renovável.',
          'tem participação de renováveis inferior à média mundial.',
          'baseia-se principalmente na energia nuclear.',
        ],
        explicacao: 'Cerca de metade renovável, contra cerca de 15% no mundo.',
        porqueErradas: ['O carvão é pouco expressivo.', 'Petróleo e gás ainda são relevantes.', 'É superior.', 'A nuclear é pequena.'],
      },
      {
        id: 'GE12-6',
        nivel: 3,
        enunciado: 'A expansão de grandes hidrelétricas na Amazônia, como Belo Monte, gera controvérsias principalmente porque:',
        alternativas: [
          'provoca alagamento de áreas florestais, impactos sobre povos indígenas e ribeirinhos e alterações na biodiversidade e no regime dos rios.',
          'emite mais CO2 que usinas a carvão em qualquer situação.',
          'não gera eletricidade no período de cheia.',
          'é proibida pela Constituição.',
          'utiliza combustíveis fósseis importados.',
        ],
        explicacao: 'Os impactos socioambientais são o centro do debate.',
        porqueErradas: ['Generalização incorreta.', 'Afirmação falsa.', 'Não é proibida.', 'Não usa combustível fóssil.'],
      },
    ],
  },
  {
    id: 'GE13',
    disciplina: 'GE',
    titulo: 'Espaço e sociedade: população, migrações, etnias e conflitos',
    ementa: 'Espaço e sociedade: crescimento populacional no mundo e no Brasil, economia e sociedade, povos em movimento, etnia e modernidade no mundo e no Brasil, conflitos étnico-nacionalistas e separatismo.',
    semana: 3,
    texto: `### Conceitos demográficos
- **População absoluta** (total) x **densidade demográfica** (hab/km²). País **populoso** (muitos habitantes) ≠ **povoado** (alta densidade).
- **Crescimento vegetativo (natural)** = natalidade − mortalidade. **Crescimento total** = vegetativo + saldo migratório.
- **Taxa de fecundidade** (filhos por mulher): reposição ≈ **2,1**. O Brasil está **abaixo** da reposição desde os anos 2000.
- **Transição demográfica** (fases): (1) natalidade e mortalidade **altas** → (2) mortalidade **cai** (saneamento, vacinas), natalidade segue alta → **explosão demográfica** → (3) natalidade cai (urbanização, inserção da mulher no mercado, métodos contraceptivos) → (4) ambas baixas → crescimento lento ou negativo e **envelhecimento**.
- **Pirâmides etárias**: base larga = população jovem (países pobres); base estreita e topo largo = **envelhecimento** (Europa, Japão). O Brasil está em **transição**: base estreitando, topo alargando — **bônus demográfico** (muita gente em idade ativa) que está se encerrando.

### Teorias demográficas
- **Malthusiana** (Thomas Malthus, 1798): população cresce em progressão **geométrica**, alimentos em progressão **aritmética** → fome; propôs **sujeição moral** (adiar casamento). Não previu os avanços técnicos.
- **Neomalthusiana** (pós-1945): o crescimento populacional dos países pobres **causaria** a pobreza → defesa do **controle de natalidade**.
- **Reformista (marxista)**: a pobreza **causa** o crescimento populacional, não o contrário → defende **reformas sociais** (distribuição de renda, educação, saúde); a natalidade cai naturalmente com a melhoria de vida.

### População brasileira (Censo 2022)
- Cerca de **203 milhões** de habitantes; crescimento desacelerou fortemente; **envelhecimento** acelerado.
- **Cor ou raça (autodeclaração)**: pela primeira vez **pardos** são o maior grupo (cerca de **45%**), seguidos de brancos (cerca de 43%), pretos (cerca de 10%), indígenas (cerca de 0,8% — 1,7 milhão de pessoas) e amarelos; o Censo 2022 também contou pela primeira vez a população **quilombola** (cerca de 1,3 milhão).
- **Formação**: povos **indígenas**, **africanos** escravizados (cerca de 4 a 5 milhões trazidos), **europeus** (portugueses, depois italianos, alemães, espanhóis), **asiáticos** (japoneses a partir de 1908, sírio-libaneses). **Mito da democracia racial** x racismo estrutural.

### Povos em movimento — migrações
- **Fatores de repulsão** (pobreza, guerras, perseguições, desastres) e **atração** (emprego, segurança, renda).
- **Tipos**: internacionais/internas; **êxodo rural**; **transumância** (sazonal); **migração pendular** (casa–trabalho diária, entre municípios de uma região metropolitana); **refugiados** (fogem de perseguição/guerra — protegidos pelo **ACNUR** e pela Convenção de 1951) x migrantes econômicos; **deslocados internos**; **refugiados ambientais/climáticos**.
- **Brasil**: grande migração **nordestina** para o Sudeste (1950–1980), para a Amazônia e o Centro-Oeste (frentes pioneiras); hoje, migrações de **retorno** e para cidades médias; o Brasil recebe **venezuelanos** (Operação Acolhida, Roraima), **haitianos**, sírios, afegãos; **Lei de Migração (Lei 13.445/2017)** substituiu o Estatuto do Estrangeiro.
- No mundo: fluxos Sul→Norte (México→EUA; África e Oriente Médio→Europa pelo Mediterrâneo); crescimento da **xenofobia**.

### Etnia e modernidade; conflitos étnico-nacionalistas e separatismo
A globalização não apagou as identidades: ao contrário, muitas se **reafirmaram**. Fronteiras **artificiais** traçadas pelos colonizadores (África, Oriente Médio) e o fim de impérios/federações geraram conflitos:
- **Ex-Iugoslávia** (1990s): guerras na Croácia, **Bósnia** (genocídio de Srebrenica, 1995) e **Kosovo**.
- **Ruanda** (1994): genocídio de **tutsis** por extremistas **hutus**.
- **Curdos**: maior nação sem Estado, dividida entre Turquia, Iraque, Irã e Síria.
- **Palestinos** x Israel; **Caxemira** (Índia x Paquistão); **Chechênia** (Rússia); **Tibete** e **uigures** (China); **Sudão do Sul** (independente em 2011 — país mais novo do mundo).
- **Separatismos na Europa**: **País Basco** (ETA, desarmado em 2017–2018), **Catalunha** (referendo de 2017), **Escócia** (plebiscito de 2014), **Irlanda do Norte**; no Canadá, **Quebec**.
- **Povos indígenas no Brasil**: luta por **demarcação de terras** (CF, art. 231), garimpo ilegal (crise yanomami), debate do **marco temporal**.`,
    verificar: ['Percentuais do Censo 2022 (cor ou raça, população indígena e quilombola) e taxa de fecundidade atual — conferir no IBGE.'],
    fontes: [{ titulo: 'IBGE — Censo 2022', url: 'https://censo2022.ibge.gov.br/' }, IBGE_EDUCA, { titulo: 'Lei nº 13.445/2017 — Lei de Migração', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13445.htm' }, BE_GEO],
    questoes: [
      {
        id: 'GE13-1',
        nivel: 1,
        enunciado: 'O crescimento vegetativo de uma população corresponde:',
        alternativas: ['à diferença entre a taxa de natalidade e a de mortalidade.', 'à soma de nascimentos e imigrantes.', 'à diferença entre imigrantes e emigrantes.', 'ao total da população dividido pela área.', 'ao número médio de filhos por mulher.'],
        explicacao: 'Natalidade − mortalidade.',
        porqueErradas: ['Mistura conceitos.', 'Saldo migratório.', 'Densidade demográfica.', 'Taxa de fecundidade.'],
      },
      {
        id: 'GE13-2',
        nivel: 1,
        enunciado: 'O deslocamento diário de pessoas entre o município onde moram e outro onde trabalham ou estudam denomina-se migração:',
        alternativas: ['pendular.', 'sazonal (transumância).', 'internacional.', 'de retorno.', 'forçada.'],
        explicacao: 'Ida e volta diária: pendular.',
        porqueErradas: ['Sazonal acompanha estações/safras.', 'Entre países.', 'Volta ao lugar de origem.', 'Provocada por guerra ou perseguição.'],
      },
      {
        id: 'GE13-3',
        nivel: 2,
        enunciado: 'A teoria demográfica que considera a pobreza a causa do elevado crescimento populacional, defendendo reformas sociais em vez do controle de natalidade, é a:',
        alternativas: ['reformista.', 'malthusiana.', 'neomalthusiana.', 'da transição demográfica.', 'determinista.'],
        explicacao: 'Reformistas invertem a relação causal dos neomalthusianos.',
        porqueErradas: ['Progressões geométrica e aritmética.', 'População causa pobreza; propõe controle.', 'Modelo descritivo de fases.', 'Não é teoria demográfica.'],
      },
      {
        id: 'GE13-4',
        nivel: 2,
        enunciado: 'Segundo o Censo 2022 do IBGE, o maior grupo da população brasileira por cor ou raça (autodeclaração) é o de pessoas:',
        alternativas: ['pardas.', 'brancas.', 'pretas.', 'amarelas.', 'indígenas.'],
        explicacao: 'Pela primeira vez os pardos superaram os brancos.',
        porqueErradas: ['Segundo grupo.', 'Cerca de 10%.', 'Menos de 1%.', 'Cerca de 0,8%.'],
      },
      {
        id: 'GE13-5',
        nivel: 3,
        enunciado: 'A pirâmide etária brasileira atual, com base se estreitando e topo se alargando, indica:',
        alternativas: [
          'queda da natalidade e aumento da expectativa de vida, com envelhecimento populacional.',
          'explosão demográfica.',
          'aumento da mortalidade infantil.',
          'predomínio absoluto de crianças.',
          'estabilidade total da estrutura etária.',
        ],
        explicacao: 'O Brasil está em fase avançada da transição demográfica.',
        porqueErradas: ['Base larga seria explosão.', 'Ao contrário: caiu.', 'Base estreitando = menos crianças.', 'Há mudança rápida.'],
      },
      {
        id: 'GE13-6',
        nivel: 3,
        enunciado: 'Sobre conflitos étnico-nacionalistas, é correto afirmar:',
        alternativas: [
          'os curdos constituem uma das maiores nações sem Estado, distribuídos principalmente entre Turquia, Iraque, Irã e Síria.',
          'o genocídio em Ruanda (1994) opôs sérvios e croatas.',
          'a Catalunha tornou-se independente da Espanha em 2017.',
          'o Sudão do Sul é parte do Sudão até hoje.',
          'o conflito na Caxemira envolve Rússia e Ucrânia.',
        ],
        explicacao: 'Os curdos reivindicam o Curdistão.',
        porqueErradas: ['Ruanda: hutus x tutsis.', 'O referendo não levou à independência reconhecida.', 'Independente desde 2011.', 'Índia x Paquistão.'],
      },
    ],
  },
  {
    id: 'GE14',
    disciplina: 'GE',
    titulo: 'Espaço geográfico e urbanização',
    ementa: 'Espaço geográfico e urbanização: a urbanização mundial, urbanização no Brasil.',
    semana: 5,
    texto: `### Conceitos
- **Urbanização**: aumento da **população urbana** em **proporção maior** que a rural (não é só crescimento das cidades). **Taxa de urbanização** = população urbana ÷ total.
- **Metrópole**: grande cidade que **polariza** uma região; **metropolização**.
- **Região metropolitana**: municípios integrados, criada por lei estadual (ex.: **RM de Campinas**, à qual Mogi Guaçu **não** pertence — integra a região de influência).
- **Conurbação**: encontro de manchas urbanas de municípios vizinhos.
- **Megalópole**: união de metrópoles conurbadas (Boswash, nos EUA; no Brasil, o eixo **São Paulo–Rio**, em formação; a **Macrometrópole Paulista**).
- **Megacidade**: aglomeração com mais de **10 milhões** de habitantes (Tóquio, Délhi, Xangai, São Paulo, Cidade do México).
- **Cidade global**: comando da economia mundial (Nova York, Londres, Tóquio; São Paulo é cidade global de nível inferior).
- **Rede urbana** e **hierarquia urbana**: relações entre cidades; o IBGE classifica no estudo **REGIC** (Regiões de Influência das Cidades): **São Paulo** é a **Grande Metrópole Nacional**; Rio de Janeiro e Brasília são **Metrópoles Nacionais**.
- **Macrocefalia urbana**: concentração excessiva em uma ou poucas cidades.

### Urbanização mundial
- **Países desenvolvidos**: urbanização **antiga e gradual**, associada à **Revolução Industrial**; hoje com taxas altas e estáveis.
- **Países subdesenvolvidos**: urbanização **recente e acelerada** (pós-1950), muitas vezes sem industrialização suficiente para absorver os migrantes → **crescimento desordenado**, **favelização**, **informalidade**, déficit de infraestrutura.
- Desde **2007–2008**, mais da metade da população mundial vive em cidades (ONU).

### Urbanização no Brasil
- **Acelerada** a partir de **1950**, impulsionada pela **industrialização** e pelo **êxodo rural** (modernização conservadora do campo — GE11). A população **urbana superou a rural na década de 1960** (Censo 1970: cerca de 56% urbana). Hoje, mais de **85%** vive em áreas urbanas.
- **Metrópoles** concentram população e problemas; mais recentemente, crescem mais as **cidades médias** (como as do interior paulista) — **desmetropolização relativa**.
- **Problemas urbanos**: **segregação socioespacial** (condomínios fechados x favelas e periferias), **especulação imobiliária**, déficit habitacional, **mobilidade** (transporte público precário, congestionamentos), **violência**, **enchentes** (impermeabilização do solo, ocupação de várzeas e encostas), **deslizamentos**, **ilhas de calor**, **poluição do ar** e **inversão térmica**, **lixo** e saneamento insuficiente.
- **Gentrificação**: valorização de áreas centrais que expulsa moradores de baixa renda.

### Planejamento e direito à cidade
- **CF, arts. 182 e 183** (política urbana; **função social da propriedade**; **usucapião urbana**).
- **Estatuto da Cidade (Lei 10.257/2001)**: **plano diretor obrigatório** para cidades com **mais de 20 mil habitantes** (e outras situações), **IPTU progressivo** sobre imóveis ociosos, **gestão democrática** da cidade (audiências públicas), **estudo de impacto de vizinhança**, **ZEIS** (zonas especiais de interesse social).
- **Direito à cidade** (Henri Lefebvre).`,
    verificar: ['Taxa de urbanização do Censo 2022 (IBGE) e classificação mais recente da REGIC.'],
    fontes: [ESTATUTO_CIDADE, { titulo: 'IBGE — REGIC (Regiões de Influência das Cidades)', url: 'https://www.ibge.gov.br/geociencias/cartas-e-mapas/redes-geograficas/15798-regioes-de-influencia-das-cidades.html' }, IBGE_EDUCA, BE_GEO],
    questoes: [
      {
        id: 'GE14-1',
        nivel: 1,
        enunciado: 'A junção das manchas urbanas de dois ou mais municípios vizinhos, formando uma área urbana contínua, é chamada de:',
        alternativas: ['conurbação.', 'gentrificação.', 'macrocefalia urbana.', 'êxodo rural.', 'metropolização inversa.'],
        explicacao: 'Conurbação: continuidade física entre cidades.',
        porqueErradas: ['Valorização que expulsa moradores pobres.', 'Concentração excessiva em poucas cidades.', 'Migração campo-cidade.', 'Termo inexistente.'],
      },
      {
        id: 'GE14-2',
        nivel: 1,
        enunciado: 'Segundo o Estatuto da Cidade, o plano diretor é obrigatório para cidades com mais de:',
        alternativas: ['20 mil habitantes.', '50 mil habitantes.', '100 mil habitantes.', '500 mil habitantes.', '1 milhão de habitantes.'],
        explicacao: 'Lei 10.257/2001, art. 41, I (além de outros casos, como integrantes de regiões metropolitanas).',
        porqueErradas: ['Limite incorreto.', 'Limite incorreto.', 'Limite incorreto.', 'Limite incorreto.'],
      },
      {
        id: 'GE14-3',
        nivel: 2,
        enunciado: 'A urbanização nos países subdesenvolvidos, comparada à dos desenvolvidos, foi:',
        alternativas: [
          'mais recente e acelerada, frequentemente sem infraestrutura e empregos suficientes, gerando favelização e informalidade.',
          'mais antiga e gradual, ligada à 1ª Revolução Industrial.',
          'inexistente até o século XXI.',
          'planejada e sem problemas sociais.',
          'causada exclusivamente pelo crescimento vegetativo urbano, sem êxodo rural.',
        ],
        explicacao: 'Acelerada após 1950, com fortes problemas socioespaciais.',
        porqueErradas: ['Caso dos desenvolvidos.', 'Ocorreu no século XX.', 'Desordenada.', 'O êxodo rural foi decisivo.'],
      },
      {
        id: 'GE14-4',
        nivel: 2,
        enunciado: 'No Brasil, a população urbana superou a rural:',
        alternativas: ['na década de 1960.', 'no início do século XX.', 'na década de 1930.', 'na década de 1990.', 'apenas no século XXI.'],
        explicacao: 'O Censo de 1970 já registrou maioria urbana (cerca de 56%).',
        porqueErradas: ['Muito cedo.', 'Ainda predominava a população rural.', 'Já era majoritariamente urbana.', 'Muito tarde.'],
      },
      {
        id: 'GE14-5',
        nivel: 3,
        enunciado: 'Enchentes frequentes em grandes cidades brasileiras estão relacionadas, entre outros fatores, a:',
        alternativas: [
          'impermeabilização do solo, canalização e ocupação das várzeas dos rios e deficiência de drenagem.',
          'excesso de áreas verdes.',
          'baixa densidade de construções.',
          'ausência de chuvas concentradas.',
          'aumento da infiltração da água no solo urbano.',
        ],
        explicacao: 'Menos infiltração e ocupação das várzeas aumentam o escoamento superficial.',
        porqueErradas: ['Áreas verdes reduzem enchentes.', 'É o contrário.', 'Chuvas concentradas agravam.', 'A infiltração diminui.'],
      },
      {
        id: 'GE14-6',
        nivel: 3,
        enunciado: 'Segundo o estudo REGIC do IBGE, São Paulo ocupa o topo da hierarquia urbana brasileira, classificada como:',
        alternativas: ['Grande Metrópole Nacional.', 'Capital Regional A.', 'Centro Sub-regional.', 'Metrópole Regional.', 'Centro de Zona.'],
        explicacao: 'SP é a Grande Metrópole Nacional; RJ e Brasília são Metrópoles Nacionais.',
        porqueErradas: ['Nível inferior.', 'Nível inferior.', 'Não é o nível de SP.', 'Nível inferior.'],
      },
    ],
  },
  {
    id: 'GE15',
    disciplina: 'GE',
    titulo: 'Natureza, sociedade e questão ambiental; a Terra; dinâmica climática e paisagens vegetais',
    ementa: 'Natureza, sociedade e questão ambiental: questão ambiental e desenvolvimento sustentável, a Terra - dinâmica, estrutura, forma e atividades humanas, dinâmica climática e paisagens vegetais no mundo e no Brasil.',
    semana: 2,
    texto: `### A Terra: forma, estrutura e dinâmica
- **Forma**: **geoide** (levemente achatada nos polos — elipsoide de revolução).
- **Estrutura interna**: **crosta** (continental, mais espessa e de granito; oceânica, mais fina e de basalto), **manto** (com a **astenosfera**, parcialmente fundida) e **núcleo** (externo líquido, interno sólido; ferro e níquel). **Litosfera** = crosta + parte superior rígida do manto.
- **Movimentos**: **rotação** (cerca de 24 h, de **oeste para leste** → dias e noites) e **translação** (cerca de 365 dias e 6 h → anos bissextos; com a **inclinação do eixo (~23,5°)** → **estações do ano**). **Solstícios** (dia ou noite mais longos: ~21 de junho e ~21 de dezembro) e **equinócios** (dia e noite iguais: ~20 de março e ~22 de setembro). No Hemisfério Sul, o **solstício de dezembro** marca o início do **verão**.
- **Tempo geológico**: eras Pré-Cambriana, Paleozoica, Mesozoica, Cenozoica. **Atividades humanas** como agente geológico → **Antropoceno**.

### Tempo x clima; elementos x fatores
- **Tempo**: estado momentâneo da atmosfera. **Clima**: sucessão habitual dos tipos de tempo (**cerca de 30 anos** de observação).
- **Elementos**: temperatura, umidade, pressão, precipitação, ventos.
- **Fatores**: **latitude** (quanto maior, mais frio), **altitude** (cai ~0,6 °C a cada 100 m), **maritimidade x continentalidade** (o mar suaviza amplitudes térmicas), **correntes marítimas** (frias → desertos costeiros como o Atacama; quentes), **massas de ar**, **relevo** (barreiras; chuvas orográficas), **vegetação**, **urbanização**.
- **Chuvas**: **convectivas** (de verão, calor), **orográficas** (de relevo — Serra do Mar) e **frontais** (encontro de massas de ar).

### Massas de ar no Brasil
- **mEc** (equatorial continental — quente e úmida; chuvas de verão no interior), **mEa** (equatorial atlântica), **mTa** (tropical atlântica — quente e úmida; litoral), **mTc** (tropical continental — quente e seca; Chaco), **mPa** (polar atlântica — fria e úmida; **frentes frias**, geadas no Sul e Sudeste e **friagem** na Amazônia Ocidental).
- **El Niño** (aquecimento anormal do Pacífico equatorial): **secas no Norte/Nordeste**, **chuvas acima da média no Sul**. **La Niña** (resfriamento): efeitos em geral **opostos**.

### Climas do Brasil (classificação de Strahler, usual nos livros)
**Equatorial úmido** (Amazônia), **litorâneo úmido** (costa leste), **tropical** (Brasil central, com verão chuvoso e inverno seco — **onde fica Mogi Guaçu**, com influência do tropical de altitude), **tropical semiárido** (Sertão nordestino, chuvas escassas e irregulares) e **subtropical úmido** (Sul, com chuvas bem distribuídas e invernos frios).

### Paisagens vegetais (ligação com GE4 e GE18)
No mundo, os conjuntos climato-botânicos; no Brasil, **Floresta Amazônica**, **Mata Atlântica**, **Cerrado**, **Caatinga**, **Mata de Araucárias**, **Pampa (campos)**, **Pantanal** (complexo) e **vegetação litorânea** (mangues, restingas).

### Questão ambiental e desenvolvimento sustentável — marcos
- **Estocolmo (1972)**: 1ª grande conferência da ONU sobre meio ambiente → **PNUMA**.
- **Relatório Brundtland — "Nosso Futuro Comum" (1987)**: definiu **desenvolvimento sustentável** — "aquele que **atende às necessidades do presente sem comprometer a possibilidade de as gerações futuras atenderem às suas próprias necessidades**".
- **Rio-92 (Eco-92)**: **Agenda 21**, **Convenção-Quadro sobre Mudança do Clima**, **Convenção sobre Diversidade Biológica**.
- **Protocolo de Montreal (1987)**: eliminação dos **CFCs** → recuperação da **camada de ozônio** (caso de sucesso).
- **Protocolo de Kyoto (1997)**: metas de redução de gases de efeito estufa para países desenvolvidos; **créditos de carbono**.
- **Rio+20 (2012)**; **Agenda 2030 e os 17 ODS (2015)**; **Acordo de Paris (2015)**: limitar o aquecimento a **bem abaixo de 2 °C**, buscando **1,5 °C**, com metas nacionais (**NDCs**).
- **COP30** em **Belém (PA)**, em **2025**.
- **Problemas**: **efeito estufa** (natural e necessário) x **aquecimento global** (intensificação pela emissão de CO2, metano), desmatamento e **queimadas**, **desertificação**, perda de biodiversidade, **chuva ácida**, **ilhas de calor**, **inversão térmica**, poluição.
- **Brasil**: **Código Florestal (Lei 12.651/2012)** — **APPs** (Áreas de Preservação Permanente: margens de rios, topos de morro, encostas) e **Reserva Legal** (percentual da propriedade com vegetação nativa: **80%** em floresta na Amazônia Legal, **35%** em cerrado na Amazônia Legal, **20%** nas demais regiões); **SNUC (Lei 9.985/2000)** — **Unidades de Proteção Integral** (ex.: parques nacionais, estações ecológicas) e **de Uso Sustentável** (ex.: APAs, reservas extrativistas).`,
    verificar: ['Percentuais de Reserva Legal no Código Florestal (art. 12) e desdobramentos da COP30.'],
    fontes: [ODS, CODIGO_FLORESTAL, SNUC, MMA, IBGE_EDUCA],
    questoes: [
      {
        id: 'GE15-1',
        nivel: 1,
        enunciado: 'O conceito de desenvolvimento sustentável — atender às necessidades do presente sem comprometer as gerações futuras — foi difundido pelo:',
        alternativas: ['Relatório Brundtland (Nosso Futuro Comum), de 1987.', 'Protocolo de Kyoto.', 'Tratado de Versalhes.', 'Protocolo de Montreal.', 'Plano Marshall.'],
        explicacao: 'Relatório da Comissão Mundial sobre Meio Ambiente e Desenvolvimento (1987).',
        porqueErradas: ['Metas de emissões (1997).', 'Fim da 1ª Guerra.', 'Camada de ozônio (1987), não o conceito.', 'Reconstrução da Europa.'],
      },
      {
        id: 'GE15-2',
        nivel: 1,
        enunciado: 'As estações do ano resultam principalmente:',
        alternativas: [
          'da inclinação do eixo terrestre combinada ao movimento de translação.',
          'da variação da distância entre a Terra e o Sol.',
          'do movimento de rotação.',
          'das correntes marítimas.',
          'das fases da Lua.',
        ],
        explicacao: 'A inclinação (~23,5°) faz a insolação variar ao longo da translação.',
        porqueErradas: ['Erro comum: a distância varia pouco e não explica estações opostas nos hemisférios.', 'Produz dias e noites.', 'Influenciam o clima, não as estações.', 'Não se relaciona.'],
      },
      {
        id: 'GE15-3',
        nivel: 2,
        enunciado: 'A massa de ar responsável pelas frentes frias, geadas no Sul e pela friagem na Amazônia Ocidental é a:',
        alternativas: ['polar atlântica (mPa).', 'equatorial continental (mEc).', 'tropical atlântica (mTa).', 'tropical continental (mTc).', 'equatorial atlântica (mEa).'],
        explicacao: 'A mPa avança no inverno e pode chegar à Amazônia (friagem).',
        porqueErradas: ['Quente e úmida.', 'Quente e úmida.', 'Quente e seca.', 'Quente e úmida.'],
      },
      {
        id: 'GE15-4',
        nivel: 2,
        enunciado: 'Durante episódios de El Niño, é comum observar no Brasil:',
        alternativas: ['secas no Norte e Nordeste e chuvas acima da média no Sul.', 'chuvas intensas no Sertão nordestino.', 'invernos mais rigorosos em todo o país.', 'ausência de efeitos climáticos.', 'secas no Sul e chuvas no Nordeste.'],
        explicacao: 'El Niño: aquecimento do Pacífico equatorial, com esse padrão típico.',
        porqueErradas: ['Ao contrário.', 'Não é o padrão.', 'Há efeitos.', 'Padrão mais associado à La Niña.'],
      },
      {
        id: 'GE15-5',
        nivel: 3,
        enunciado: 'Segundo o Código Florestal (Lei 12.651/2012), as Áreas de Preservação Permanente (APP):',
        alternativas: [
          'incluem margens de rios, topos de morros e encostas, com a função de preservar recursos hídricos, a estabilidade geológica e a biodiversidade.',
          'correspondem ao percentual de vegetação nativa que toda propriedade deve manter, independentemente da localização.',
          'são áreas destinadas exclusivamente à agricultura.',
          'existem apenas na Amazônia Legal.',
          'podem ser desmatadas livremente com autorização verbal.',
        ],
        explicacao: 'APPs são definidas por sua localização e função ambiental.',
        porqueErradas: ['Isso é a Reserva Legal.', 'Contraria a definição.', 'Existem em todo o país.', 'A proteção é legal.'],
      },
      {
        id: 'GE15-6',
        nivel: 3,
        enunciado: 'Sobre efeito estufa e aquecimento global, é correto afirmar:',
        alternativas: [
          'o efeito estufa é um fenômeno natural essencial à vida, intensificado pelas emissões humanas de gases como CO2 e metano, o que provoca o aquecimento global.',
          'efeito estufa e destruição da camada de ozônio são o mesmo fenômeno.',
          'o efeito estufa é causado exclusivamente pelos CFCs.',
          'o aquecimento global não tem relação com atividades humanas.',
          'o efeito estufa resfria a Terra.',
        ],
        explicacao: 'Sem o efeito estufa natural, a Terra seria gelada; o problema é sua intensificação.',
        porqueErradas: ['São fenômenos distintos.', 'Os CFCs afetam principalmente o ozônio.', 'Há consenso científico (IPCC) sobre a influência humana.', 'Retém calor.'],
      },
    ],
  },
  {
    id: 'GE16',
    disciplina: 'GE',
    titulo: 'Água: aproveitamento, geopolítica e conservação',
    ementa: 'Água – aproveitamento, geopolítica e conservação.',
    semana: 5,
    texto: `### Distribuição da água no planeta
- Cerca de **97,5%** da água é **salgada**; só **2,5%** é **doce** — e, desta, a maior parte está em **geleiras e calotas polares** e em **aquíferos subterrâneos**; uma fração mínima está em rios e lagos.
- **Ciclo hidrológico**: evaporação, transpiração (evapotranspiração), condensação, precipitação, escoamento superficial, **infiltração** (recarga dos aquíferos). A vegetação favorece a infiltração; a impermeabilização favorece enchentes. Na Amazônia, os "**rios voadores**" levam umidade para o Centro-Sul.
- **Distribuição desigual**: abundância em algumas regiões e **estresse hídrico** em outras (Oriente Médio, Norte da África, partes da Ásia). Milhões de pessoas ainda não têm acesso a água potável e saneamento.

### O Brasil
- Detém cerca de **12%** da água doce superficial do planeta, mas com distribuição desigual: a maior parte na **Região Norte** (Bacia Amazônica), onde vive pequena parcela da população; escassez no **Semiárido**.
- **Regiões hidrográficas** (CNRH): **Amazônica** (maior bacia do mundo), **Tocantins-Araguaia**, **São Francisco** ("**rio da integração nacional**"; **transposição** para o Semiárido setentrional), **Paraná** (maior aproveitamento hidrelétrico; inclui o **Tietê** e o **Mogi Guaçu**, afluente do rio Pardo), **Paraguai** (**Pantanal**), **Uruguai**, Atlântico Nordeste Ocidental/Oriental, Parnaíba, Atlântico Leste, Sudeste e Sul.
- **Aquíferos**: **Guarani** (Brasil, Argentina, Paraguai e Uruguai — transfronteiriço; área de recarga também no interior paulista) e o **SAGA** (Sistema Aquífero Grande Amazônia), considerado de volume ainda maior.
- Rios de **planalto** (encachoeirados, com **potencial hidrelétrico**) predominam sobre os de **planície** (navegáveis — Amazonas, Paraguai). **Hidrovia Tietê-Paraná**.

### Aproveitamento (usos múltiplos)
**Irrigação** (maior consumo de água no Brasil e no mundo), abastecimento humano, indústria, **geração de energia**, navegação, dessedentação animal, pesca, lazer. Conflitos pelo uso (energia x irrigação x abastecimento) se agravam em secas — **crise hídrica de São Paulo (2014–2015)** com o **Sistema Cantareira**.

### Geopolítica da água
- **Rios transfronteiriços** geram tensões: **Nilo** (Egito x Etiópia — Grande Represa do Renascimento), **Tigre e Eufrates** (Turquia, Síria, Iraque), **Jordão** (Israel, Palestina, Jordânia), **Indo** (Índia x Paquistão), **Mekong**.
- "**Água virtual**": água embutida em produtos exportados (soja, carne) — o Brasil "exporta" muita água.
- Privatização x direito humano à água (**ONU reconheceu o acesso à água e ao saneamento como direito humano em 2010**); a **"Guerra da Água"** de Cochabamba (Bolívia, 2000).

### Conservação e gestão no Brasil
- **Lei das Águas — Lei 9.433/1997 (Política Nacional de Recursos Hídricos)**: a água é **bem de domínio público** e **recurso natural limitado, dotado de valor econômico**; em escassez, o uso **prioritário** é o **consumo humano e a dessedentação de animais**; a gestão deve proporcionar os **usos múltiplos**; a **bacia hidrográfica** é a **unidade territorial** de planejamento; gestão **descentralizada e participativa** (Poder Público, usuários e comunidades). Instrumentos: **planos de recursos hídricos**, **enquadramento** dos corpos d'água, **outorga** de direito de uso, **cobrança** pelo uso. Organismos: **Comitês de Bacia Hidrográfica** e **Agências de Água**.
- **ANA** (Lei 9.984/2000): Agência Nacional de Águas e Saneamento Básico.
- **Novo Marco Legal do Saneamento (Lei 14.026/2020)**: meta de universalização até **2033** — **99%** com água potável e **90%** com coleta e tratamento de esgoto.
- Ameaças: **desmatamento** de nascentes e matas ciliares, assoreamento, esgoto não tratado, agrotóxicos, mineração (Mariana 2015, Brumadinho 2019), **mudanças climáticas**.`,
    verificar: ['Percentual brasileiro da água doce mundial e dados de saneamento (SNIS/ANA) — conferir nas fontes oficiais.'],
    fontes: [LEI_AGUAS, ANA, { titulo: 'Lei nº 14.026/2020 — Marco Legal do Saneamento', url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14026.htm' }, IBGE_EDUCA],
    questoes: [
      {
        id: 'GE16-1',
        nivel: 1,
        enunciado: 'Segundo a Lei das Águas (Lei 9.433/1997), a unidade territorial para a implementação da Política Nacional de Recursos Hídricos é:',
        alternativas: ['a bacia hidrográfica.', 'o município.', 'o estado.', 'a região geográfica do IBGE.', 'o bioma.'],
        explicacao: 'A bacia hidrográfica é a unidade de planejamento e gestão.',
        porqueErradas: ['Não é a unidade definida.', 'Não é a unidade definida.', 'Não é a unidade definida.', 'Não é a unidade definida.'],
      },
      {
        id: 'GE16-2',
        nivel: 1,
        enunciado: 'O Aquífero Guarani estende-se pelo subsolo de:',
        alternativas: ['Brasil, Argentina, Paraguai e Uruguai.', 'Brasil, Bolívia e Peru.', 'apenas o Brasil.', 'Brasil, Venezuela e Colômbia.', 'Brasil e Chile.'],
        explicacao: 'É um aquífero transfronteiriço do Cone Sul.',
        porqueErradas: ['Não.', 'É transfronteiriço.', 'Não.', 'Não.'],
      },
      {
        id: 'GE16-3',
        nivel: 2,
        enunciado: 'De acordo com a Lei 9.433/1997, em situações de escassez, o uso prioritário dos recursos hídricos é:',
        alternativas: ['o consumo humano e a dessedentação de animais.', 'a geração de energia hidrelétrica.', 'a irrigação de lavouras de exportação.', 'a navegação.', 'o uso industrial.'],
        explicacao: 'Art. 1º, III, da Lei das Águas.',
        porqueErradas: ['Não é prioritário na escassez.', 'Não é prioritário na escassez.', 'Não é prioritário na escassez.', 'Não é prioritário na escassez.'],
      },
      {
        id: 'GE16-4',
        nivel: 2,
        enunciado: 'A atividade que mais consome água no Brasil e no mundo é:',
        alternativas: ['a irrigação agrícola.', 'o abastecimento doméstico urbano.', 'a geração hidrelétrica.', 'a navegação.', 'a pesca.'],
        explicacao: 'A irrigação responde pela maior parte da retirada/consumo.',
        porqueErradas: ['Menor que a irrigação.', 'Uso não consuntivo, em geral.', 'Não consuntivo.', 'Não consuntivo.'],
      },
      {
        id: 'GE16-5',
        nivel: 3,
        enunciado: 'A construção da Grande Represa do Renascimento, pela Etiópia, gerou tensões geopolíticas principalmente com:',
        alternativas: ['o Egito, que depende das águas do Nilo.', 'a Turquia, pelo controle do Eufrates.', 'Israel, pelo rio Jordão.', 'a Índia, pelo rio Indo.', 'a China, pelo rio Mekong.'],
        explicacao: 'O Egito depende quase totalmente do Nilo.',
        porqueErradas: ['Outro conflito hídrico.', 'Outro conflito hídrico.', 'Outro conflito hídrico.', 'Outro conflito hídrico.'],
      },
      {
        id: 'GE16-6',
        nivel: 3,
        enunciado: 'São instrumentos da Política Nacional de Recursos Hídricos, EXCETO:',
        alternativas: [
          'a privatização obrigatória dos rios federais.',
          'a outorga dos direitos de uso de recursos hídricos.',
          'a cobrança pelo uso de recursos hídricos.',
          'os planos de recursos hídricos.',
          'o enquadramento dos corpos de água em classes, segundo os usos preponderantes.',
        ],
        explicacao: 'A água é bem de domínio público; não há privatização de rios.',
        porqueErradas: ['É instrumento.', 'É instrumento.', 'É instrumento.', 'É instrumento.'],
      },
    ],
  },
  {
    id: 'GE18',
    disciplina: 'GE',
    titulo: 'Os domínios naturais (domínios morfoclimáticos e biomas do Brasil)',
    ementa: 'Os domínios naturais.',
    semana: 2,
    texto: `**Domínio natural/morfoclimático** = área de grande extensão com combinação característica de **relevo, clima, vegetação, solos e hidrografia**. A classificação clássica do Brasil é de **Aziz Ab'Sáber** (1960s–1970s): **6 domínios** + **faixas de transição**.

### Os seis domínios de Ab'Sáber
1. **Amazônico** — terras baixas florestadas equatoriais; clima **equatorial** quente e úmido; **floresta latifoliada** densa (mata de terra firme, de várzea e de igapó); maior bacia hidrográfica do mundo; solos pobres; ameaças: desmatamento, garimpo, grilagem, pecuária e soja (**arco do desmatamento**).
2. **Cerrado** — **chapadões** tropicais interiores com cerrados e **matas-galeria**; clima **tropical** com **estação seca** marcada; vegetação **tropófila** (árvores de troncos tortuosos, cascas grossas, raízes profundas) e gramíneas; solos **ácidos** (corrigidos com calcário); "**berço das águas**" (nascentes de grandes bacias); intensamente convertido pela **soja** e pela pecuária — o bioma que mais perdeu vegetação nas últimas décadas.
3. **Mares de Morros** — áreas mamelonares tropicais-atlânticas florestadas (**Mata Atlântica**); relevo de morros **arredondados** ("meias-laranjas"), resultado do **intemperismo químico** intenso; clima tropical úmido; o domínio **mais devastado** (restam pequena parte da cobertura original), por concentrar a ocupação desde a colonização (cana, café, cidades, indústria). **Mogi Guaçu** está na transição Cerrado/Mata Atlântica.
4. **Caatinga** — depressões **interplanálticas semiáridas**; clima **semiárido** (chuvas escassas e irregulares); vegetação **xerófila** e **caducifólia** (cactáceas, como mandacaru e xique-xique); rios **intermitentes** (exceto o São Francisco e o Parnaíba); risco de **desertificação**; bioma **exclusivamente brasileiro**.
5. **Araucárias** — planaltos subtropicais com **mata de araucárias** (pinheiro-do-paraná); clima **subtropical**; muito devastado pela exploração madeireira.
6. **Pradarias (Campanha Gaúcha / Pampa)** — coxilhas subtropicais com **campos** (vegetação herbácea); clima subtropical; pecuária extensiva tradicional; **arenização** no sudoeste gaúcho.

### Faixas de transição
Áreas de contato entre domínios, com características mistas: **Pantanal** (maior planície alagável do mundo; ciclo de cheias e vazantes; complexo do Pantanal), **Mata dos Cocais** (babaçu, carnaúba — transição Amazônia/Caatinga/Cerrado, no Maranhão e Piauí), **Agreste** (transição Mata Atlântica/Caatinga) e outras.

### Biomas (IBGE)
O IBGE adota **6 biomas continentais**: **Amazônia** (o maior, cerca de 49% do território), **Cerrado** (cerca de 24%), **Mata Atlântica**, **Caatinga**, **Pampa** e **Pantanal** (o menor). Além do **Sistema Costeiro-Marinho**. **Bioma** e **domínio morfoclimático** são conceitos **próximos, mas não idênticos**: o domínio inclui o relevo e o funcionamento da paisagem; o bioma enfatiza a vida (fauna e flora).

### Vegetação litorânea
**Manguezais** (transição terra–mar, **berçário** de espécies marinhas, protegidos como APP), **restingas** (sobre cordões arenosos) e **dunas**.

### Conservação
**Hotspots** de biodiversidade (Mata Atlântica e Cerrado estão entre eles); **unidades de conservação** (SNUC); **terras indígenas** e **quilombolas** como áreas de grande preservação.`,
    verificar: ['Percentuais de área e de vegetação remanescente por bioma (IBGE, MapBiomas, SOS Mata Atlântica).'],
    fontes: [IBGE_EDUCA, { titulo: 'IBGE — Biomas e Sistema Costeiro-Marinho do Brasil', url: 'https://www.ibge.gov.br/geociencias/informacoes-ambientais/estudos-ambientais/15842-biomas.html' }, MMA, BE_GEO],
    questoes: [
      {
        id: 'GE18-1',
        nivel: 1,
        enunciado: 'A classificação dos domínios morfoclimáticos brasileiros em seis domínios e faixas de transição foi proposta por:',
        alternativas: ['Aziz Ab\'Sáber.', 'Jurandyr Ross.', 'Milton Santos.', 'Aroldo de Azevedo.', 'Pedro Geiger.'],
        explicacao: 'Ab\'Sáber, um dos maiores geógrafos brasileiros.',
        porqueErradas: ['Relevo (planaltos, planícies, depressões).', 'Meio técnico-científico-informacional; quatro Brasis.', 'Relevo (1949).', 'Regiões geoeconômicas.'],
      },
      {
        id: 'GE18-2',
        nivel: 1,
        enunciado: 'O domínio caracterizado por clima semiárido, rios intermitentes e vegetação xerófila e caducifólia, exclusivamente brasileiro, é a:',
        alternativas: ['Caatinga.', 'Cerrado.', 'Mata Atlântica.', 'Pampa.', 'Floresta Amazônica.'],
        explicacao: 'A Caatinga é o único bioma exclusivamente brasileiro.',
        porqueErradas: ['Tropical com estação seca, tropófilo.', 'Úmido, florestado.', 'Subtropical com campos.', 'Equatorial úmido.'],
      },
      {
        id: 'GE18-3',
        nivel: 2,
        enunciado: 'O domínio dos Mares de Morros é o mais devastado do Brasil porque:',
        alternativas: [
          'concentrou a ocupação humana desde a colonização, com ciclos econômicos, urbanização e industrialização.',
          'tem clima desértico.',
          'foi atingido por erupções vulcânicas.',
          'possui solos congelados.',
          'é o domínio mais distante do litoral.',
        ],
        explicacao: 'Cana, café, cidades e indústrias ocuparam a Mata Atlântica.',
        porqueErradas: ['É tropical úmido.', 'Não há vulcanismo ativo.', 'Não se aplica.', 'Acompanha o litoral.'],
      },
      {
        id: 'GE18-4',
        nivel: 2,
        enunciado: 'O Cerrado é chamado de "berço das águas" porque:',
        alternativas: [
          'abriga nascentes de importantes bacias hidrográficas brasileiras.',
          'é o bioma mais chuvoso do país.',
          'é coberto por lagos permanentes.',
          'não possui estação seca.',
          'tem o maior volume de água superficial do país.',
        ],
        explicacao: 'No Brasil central nascem rios das bacias do São Francisco, Tocantins-Araguaia, Paraná e outras.',
        porqueErradas: ['A Amazônia é mais chuvosa.', 'Não.', 'Tem estação seca marcada.', 'É a Bacia Amazônica.'],
      },
      {
        id: 'GE18-5',
        nivel: 3,
        enunciado: 'Sobre o Pantanal, é correto afirmar:',
        alternativas: [
          'é uma das maiores planícies alagáveis do mundo, com ciclo de cheias e vazantes, considerado faixa de transição/complexo por Ab\'Sáber.',
          'é um domínio de planaltos com araucárias.',
          'tem clima semiárido e rios intermitentes.',
          'localiza-se no litoral nordestino.',
          'é o maior bioma brasileiro em área.',
        ],
        explicacao: 'O Pantanal é o menor bioma do IBGE e uma área complexa de transição.',
        porqueErradas: ['Araucárias.', 'Caatinga.', 'Fica no Centro-Oeste (MT e MS).', 'É o menor; o maior é a Amazônia.'],
      },
      {
        id: 'GE18-6',
        nivel: 3,
        enunciado: 'A diferença entre domínio morfoclimático e bioma pode ser expressa assim:',
        alternativas: [
          'o domínio integra relevo, clima, solos, hidrografia e vegetação; o bioma enfatiza as comunidades biológicas (fauna e flora) num ambiente.',
          'são termos exatamente sinônimos.',
          'o bioma considera apenas o relevo.',
          'domínio é termo político-administrativo.',
          'bioma é classificação exclusiva de áreas urbanas.',
        ],
        explicacao: 'Os conceitos são próximos, mas com ênfases diferentes.',
        porqueErradas: ['Não são idênticos.', 'É o contrário.', 'Não.', 'Não.'],
      },
    ],
  },
]
