import type { Topico } from './types.ts'

const SENADO_ACORDO = { titulo: 'Acordo Ortográfico da Língua Portuguesa — Senado Federal (citado no edital)', url: 'http://www2.senado.leg.br/bdsf/item/id/508145' }
const VOLP = { titulo: 'Vocabulário Ortográfico da Língua Portuguesa (VOLP) — ABL', url: 'https://www.academia.org.br/nossa-lingua/busca-no-vocabulario' }
const BE_PORT = { titulo: 'Brasil Escola — Português (indicado no edital)', url: 'https://brasilescola.uol.com.br/portugues' }
const SO_PORT = { titulo: 'Só Português (indicado no edital)', url: 'https://www.soportugues.com.br/' }
const MICHAELIS = { titulo: 'Michaelis — Dicionário Brasileiro (indicado no edital)', url: 'https://michaelis.uol.com.br/' }
const TODA_MATERIA = { titulo: 'Toda Matéria (indicado no edital)', url: 'https://www.todamateria.com.br/' }

export const TOPICOS_LP: Topico[] = [
  {
    id: 'LP1',
    disciplina: 'LP',
    titulo: 'Leitura e interpretação de textos',
    ementa: 'Leitura e interpretação de textos literários e não literários – descrição, narração, dissertação, injunção etc.',
    semana: 1,
    texto: `Interpretação é a parte da prova que mais rende ponto com menos "decoreba": a banca quer saber se você entende **o que o texto diz** (compreensão) e **o que se pode concluir dele** (inferência) — e, principalmente, se você **não extrapola**.

### Compreender x interpretar
- **Compreender** é localizar a informação que está explícita no texto ("segundo o texto...").
- **Interpretar** é tirar conclusões autorizadas pelo texto ("infere-se que...", "depreende-se que..."). A conclusão precisa estar apoiada no texto, não na sua opinião ou no seu conhecimento de mundo.

### Os três erros que a banca explora
- **Extrapolação**: a alternativa vai além do que o texto permite ("o autor defende a extinção de..." quando ele só criticou).
- **Redução**: a alternativa pega um detalhe e o apresenta como ideia central.
- **Contradição**: a alternativa afirma o oposto do texto — muitas vezes trocando um conectivo ou um advérbio ("sempre", "nunca", "apenas").

### Tipologias textuais (modos de organização)
- **Narração**: fatos encadeados no tempo, com personagens, narrador, enredo. Verbos de ação, pretérito.
- **Descrição**: retrato de um ser, lugar ou objeto num momento; predominam adjetivos, verbos de estado, enumerações.
- **Dissertação**: exposição ou defesa de ideias. A **dissertativo-expositiva** informa; a **dissertativo-argumentativa** defende uma tese com argumentos.
- **Injunção (instrucional)**: orienta o leitor a fazer algo — receitas, manuais, editais. Verbos no **imperativo** ou no infinitivo.
- **Exposição** e **predição** aparecem em algumas classificações; o "etc." do edital abre essa porta.

Não confunda **tipo textual** (a estrutura: narrar, descrever...) com **gênero textual** (a forma social concreta: crônica, notícia, bula, edital, carta). Um mesmo gênero pode misturar tipos — uma crônica narra e descreve.

### Texto literário x não literário
O **literário** tem função estética, linguagem conotativa (figurada), plurissignificação. O **não literário** prioriza a informação, linguagem denotativa, objetividade. Em poemas e crônicas a banca costuma perguntar sobre sentido figurado e efeito de sentido.

### Método para a prova
1. Leia primeiro as perguntas, depois o texto.
2. Para cada alternativa, procure no texto o trecho que a comprova. Se não achar, ela é suspeita.
3. Desconfie de palavras absolutas (todos, nunca, sempre, somente) e de alternativas "bonitas" que repetem palavras do texto com sentido trocado.
4. Atenção aos **conectivos**: "mas", "porém" (oposição), "pois", "porque" (causa/explicação), "portanto" (conclusão), "embora" (concessão). Trocar um conectivo muda a relação lógica.`,
    fontes: [BE_PORT, TODA_MATERIA, SO_PORT],
    questoes: [
      {
        id: 'LP1-1',
        nivel: 1,
        enunciado: 'Um texto que orienta o leitor sobre como montar um equipamento, com verbos no imperativo e passos numerados, pertence predominantemente ao tipo textual:',
        alternativas: ['injuntivo.', 'narrativo.', 'descritivo.', 'dissertativo-argumentativo.', 'expositivo.'],
        explicacao: 'O texto injuntivo (instrucional) orienta uma ação do leitor, com verbos no imperativo ou infinitivo e sequência de passos.',
        porqueErradas: [
          'Narração encadeia fatos no tempo, com personagens; não dá instruções.',
          'Descrição retrata características de algo, sem mandar fazer.',
          'Argumentação defende uma tese com argumentos.',
          'Exposição informa/explica um tema, sem orientar uma ação passo a passo.',
        ],
      },
      {
        id: 'LP1-2',
        nivel: 1,
        enunciado: 'Assinale a alternativa que diferencia corretamente tipo textual de gênero textual.',
        alternativas: [
          'Tipo é o modo de organização (narrar, descrever, argumentar); gênero é a forma social concreta em que o texto circula (notícia, bula, crônica).',
          'Tipo e gênero são sinônimos e podem ser usados indistintamente.',
          'Gênero é o modo de organização; tipo é o suporte em que o texto é publicado.',
          'Tipo textual só existe em textos literários; gênero, só em não literários.',
          'Cada gênero corresponde a um único tipo textual, sem mistura.',
        ],
        explicacao: 'Tipos são poucos e estruturais; gêneros são inúmeros, sociais e históricos, e costumam combinar vários tipos.',
        porqueErradas: [
          'Não são sinônimos: um é estrutura, o outro é prática social.',
          'Inverte os conceitos e confunde gênero com suporte (jornal, livro, site).',
          'Ambos existem em textos literários e não literários.',
          'Um gênero mistura tipos — a crônica narra e descreve, por exemplo.',
        ],
      },
      {
        id: 'LP1-3',
        nivel: 2,
        enunciado: 'Leia: "O Brasil reduziu o desmatamento na Amazônia em 2023, mas o Cerrado registrou alta no mesmo período." Infere-se corretamente do trecho que:',
        alternativas: [
          'a redução em um bioma não significou queda generalizada do desmatamento no país.',
          'o desmatamento no Brasil acabou em 2023.',
          'o Cerrado é mais importante que a Amazônia.',
          'a alta no Cerrado foi causada pela redução na Amazônia.',
          'o governo não adotou nenhuma política ambiental em 2023.',
        ],
        explicacao: 'O conectivo "mas" opõe as duas informações: houve queda num bioma e alta em outro, logo a queda não foi geral. É a única inferência autorizada pelo trecho.',
        porqueErradas: [
          'Extrapolação: o texto fala em redução, não em fim.',
          'Juízo de valor ausente no texto.',
          'O texto não estabelece relação de causa entre os fatos.',
          'Extrapolação sem qualquer apoio no trecho.',
        ],
      },
      {
        id: 'LP1-4',
        nivel: 2,
        enunciado: 'Em "Embora tenha estudado pouco, foi aprovada", a oração destacada pelo conectivo "embora" expressa ideia de:',
        alternativas: ['concessão.', 'causa.', 'conclusão.', 'finalidade.', 'condição.'],
        explicacao: 'Concessão: admite-se um fato contrário (estudar pouco) que não impede o fato principal (ser aprovada).',
        porqueErradas: [
          'Causa seria "porque estudou".',
          'Conclusão seria "portanto", "logo".',
          'Finalidade seria "para que", "a fim de".',
          'Condição seria "se", "caso".',
        ],
      },
      {
        id: 'LP1-5',
        nivel: 3,
        enunciado: 'Um texto afirma: "Parte dos professores relata dificuldade em usar tecnologias digitais em sala." A alternativa que EXTRAPOLA o sentido do texto é:',
        alternativas: [
          'Os professores rejeitam o uso de tecnologia na educação.',
          'Há professores que relatam dificuldade com tecnologias digitais.',
          'O uso de tecnologia em sala é um desafio para alguns docentes.',
          'Nem todos os professores dominam plenamente as tecnologias digitais.',
          'O relato de dificuldade não abrange a totalidade dos docentes.',
        ],
        explicacao: '"Parte dos professores relata dificuldade" não autoriza dizer que "os professores" (todos) "rejeitam" a tecnologia — há generalização e troca de "dificuldade" por "rejeição".',
        porqueErradas: [
          'Paráfrase fiel do texto.',
          'Paráfrase fiel: "desafio para alguns".',
          'Inferência autorizada por "parte dos professores".',
          'Inferência autorizada: "parte" exclui a totalidade.',
        ],
      },
      {
        id: 'LP1-6',
        nivel: 3,
        enunciado: 'Assinale a alternativa em que a troca do conectivo MANTÉM o sentido original de "Choveu muito; portanto, o jogo foi adiado".',
        alternativas: [
          'Choveu muito; por isso, o jogo foi adiado.',
          'Choveu muito; contudo, o jogo foi adiado.',
          'Choveu muito; embora o jogo fosse adiado.',
          'Choveu muito; ou seja, o jogo não foi adiado.',
          'Choveu muito; entretanto, o jogo foi adiado.',
        ],
        explicacao: '"Portanto" e "por isso" expressam conclusão/consequência: a chuva levou ao adiamento.',
        porqueErradas: [
          '"Contudo" é adversativo: sugeriria que o adiamento contraria a expectativa.',
          '"Embora" é concessivo e ainda deixa a frase sintaticamente incompleta.',
          'Altera o fato (não foi adiado) e usa conectivo explicativo.',
          '"Entretanto" é adversativo, como "contudo".',
        ],
      },
    ],
  },
  {
    id: 'LP2',
    disciplina: 'LP',
    titulo: 'Ortografia, acentuação gráfica e crase',
    ementa: 'Gramática e Ortografia: Novo acordo ortográfico da Língua Portuguesa. Ortografia. Acentuação Gráfica. Crase. Notações léxicas. Abreviatura, siglas e símbolos.',
    semana: 2,
    texto: `### O Novo Acordo Ortográfico (vigente no Brasil desde 2009, obrigatório desde 2016)
- **Trema** foi abolido (frequente, linguiça, cinquenta), exceto em nomes próprios estrangeiros (Müller).
- **Ditongos abertos éi e ói** perderam o acento nas **paroxítonas**: ideia, assembleia, heroico, jiboia. Nas **oxítonas e monossílabos** o acento continua: papéis, herói, dói, céu.
- **I e U tônicos depois de ditongo** em paroxítonas perderam o acento: feiura, baiuca. (Mas Piauí mantém: é oxítona.)
- **Hiatos ee e oo** perderam o acento: creem, leem, deem, veem, voo, enjoo.
- **Acentos diferenciais** caíram em para (verbo), pelo, polo, pera. Permanecem: **pôr** (verbo) x por (preposição); **pôde** (passado) x pode (presente); **têm/vêm** (plural) x tem/vem (singular). **Fôrma/forma** é facultativo.
- **Hífen**: prefixo terminado em vogal + palavra iniciada por vogal **diferente** = junta (autoescola, infraestrutura); vogal **igual** = hífen (micro-ondas, anti-inflamatório). Prefixo + **r** ou **s** = dobra a consoante (antirrábico, ultrassom). Diante de **h** = hífen (anti-higiênico, super-homem).

### Regras de acentuação (decore a lógica)
- **Oxítonas** (tônica na última): acentuam-se as terminadas em **a(s), e(s), o(s), em, ens** — sofá, café, avô, também, parabéns.
- **Paroxítonas** (penúltima): acentuam-se as terminadas em **l, n, r, x, ps, ã(s), ão(s), i(s), us, um, uns, on(s)** e em **ditongo** — fácil, hífen, caráter, tórax, bíceps, órfã, órgão, júri, vírus, álbum, próton, história, série. Por isso **não** se acentuam as terminadas em a, e, o, em (casa, jovem, item).
- **Proparoxítonas** (antepenúltima): **todas** são acentuadas — lâmpada, público, árvore.
- **Monossílabos tônicos** terminados em a, e, o: pá, pé, nó.

### Crase
Crase é a **fusão da preposição a com o artigo a(s)** (ou com o "a" inicial de aquele/aquela/aquilo). Teste rápido: troque a palavra feminina por uma masculina; se aparecer **ao**, há crase. "Fui **à** escola" → "fui **ao** colégio".
- **Obrigatória**: locuções adverbiais, prepositivas e conjuntivas femininas (às vezes, à noite, à medida que, à custa de); indicação de hora (às 14h); "à moda de" (bife à milanesa).
- **Proibida**: antes de **palavra masculina**, de **verbo**, de **pronomes** pessoais e de tratamento (exceto senhora, senhorita, dona com artigo), antes de "uma", entre palavras repetidas (cara a cara, gota a gota), e no "a" singular diante de palavra no plural (referiu-se a pessoas).
- **Facultativa**: antes de **nome próprio feminino** de pessoa, de **pronome possessivo** feminino (à/a minha mãe) e depois de "até" (até à/a praia).

### Notações léxicas, abreviaturas e siglas
São sinais gráficos auxiliares: acentos (agudo, circunflexo, grave), **til**, **cedilha**, **trema**, **hífen** e **apóstrofo** (pau-d'água). Abreviaturas terminam com ponto (pág., Sr.); siglas dispensam ponto (ONU, IBGE); símbolos científicos não levam ponto nem plural (km, kg, h, min).`,
    verificar: ['Casos especiais de hífen com prefixos "co-", "re-" e "pre-" — conferir no VOLP da ABL.'],
    fontes: [SENADO_ACORDO, VOLP, SO_PORT],
    questoes: [
      {
        id: 'LP2-1',
        nivel: 1,
        enunciado: 'De acordo com o Novo Acordo Ortográfico, está grafada corretamente a palavra:',
        alternativas: ['ideia', 'idéia', 'assembléia', 'heróico', 'jibóia'],
        explicacao: 'Ditongos abertos éi e ói em paroxítonas perderam o acento: ideia, assembleia, heroico, jiboia.',
        porqueErradas: [
          'Acento abolido em paroxítona com ditongo aberto éi.',
          'Mesmo caso: assembleia sem acento.',
          'Ditongo ói em paroxítona: heroico sem acento.',
          'Ditongo ói em paroxítona: jiboia sem acento.',
        ],
      },
      {
        id: 'LP2-2',
        nivel: 1,
        enunciado: 'Todas as palavras devem ser acentuadas pela MESMA regra em:',
        alternativas: ['lâmpada, público, árvore', 'café, fácil, pé', 'órfã, sofá, vírus', 'herói, ideia, céu', 'caráter, avô, júri'],
        explicacao: 'As três são proparoxítonas — e toda proparoxítona é acentuada.',
        porqueErradas: [
          'Café é oxítona, fácil é paroxítona terminada em l, pé é monossílabo tônico.',
          'Órfã e vírus são paroxítonas; sofá é oxítona.',
          'Ideia não tem acento; herói e céu são oxítona e monossílabo.',
          'Caráter e júri são paroxítonas; avô é oxítona.',
        ],
      },
      {
        id: 'LP2-3',
        nivel: 2,
        enunciado: 'Assinale a alternativa em que o acento grave indicativo de crase está empregado corretamente.',
        alternativas: [
          'A reunião começará às 14h.',
          'Ela começou à estudar cedo.',
          'Refiro-me à você.',
          'Fiquei frente à frente com o diretor.',
          'Entreguei o relatório à uma colega.',
        ],
        explicacao: 'Indicação de hora exige crase: "às 14h" (a + as horas).',
        porqueErradas: [
          'Não há crase antes de verbo.',
          'Não há crase antes de pronome de tratamento "você".',
          'Não há crase entre palavras repetidas.',
          'Não há crase antes de "uma" (numeral/artigo indefinido).',
        ],
      },
      {
        id: 'LP2-4',
        nivel: 2,
        enunciado: 'Quanto ao uso do hífen segundo o Acordo Ortográfico, a alternativa correta é:',
        alternativas: ['micro-ondas, autoescola, antirrábico', 'microondas, auto-escola, anti-rábico', 'micro-ondas, auto-escola, antirábico', 'microondas, autoescola, anti-rrábico', 'micro ondas, auto escola, antirrábico'],
        explicacao: 'Vogal igual → hífen (micro-ondas); vogal diferente → junta (autoescola); prefixo + r → dobra (antirrábico).',
        porqueErradas: [
          'Todas as três estão na grafia anterior ao Acordo.',
          'Auto-escola perdeu o hífen; antirábico precisa dobrar o r.',
          'Microondas precisa de hífen; anti-rrábico não leva hífen.',
          'Palavras compostas por prefixo não se escrevem separadas.',
        ],
      },
      {
        id: 'LP2-5',
        nivel: 3,
        enunciado: 'Em qual alternativa o uso do acento grave é FACULTATIVO?',
        alternativas: [
          'Entreguei o convite à minha professora.',
          'Voltaremos à noite.',
          'Ela se dedica às pesquisas de campo.',
          'Fiz uma visita à Bahia.',
          'Assisti à palestra inteira.',
        ],
        explicacao: 'Antes de pronome possessivo feminino o artigo é opcional, logo a crase também: "à minha" ou "a minha".',
        porqueErradas: [
          'Locução adverbial feminina de tempo: crase obrigatória.',
          '"Dedicar-se a" + "as pesquisas": obrigatória.',
          '"Visita a" + "a Bahia" (a Bahia admite artigo: "volto da Bahia"): obrigatória.',
          '"Assistir" (presenciar) rege "a" + "a palestra": obrigatória.',
        ],
      },
      {
        id: 'LP2-6',
        nivel: 3,
        enunciado: 'Assinale a frase em que TODAS as palavras estão corretamente grafadas e acentuadas.',
        alternativas: [
          'Eles têm ideias e leem muito sobre o voo das aves.',
          'Eles tem idéias e lêem muito sobre o vôo das aves.',
          'Eles têm idéias e leem muito sobre o voo das aves.',
          'Eles tem ideias e lêem muito sobre o voo das aves.',
          'Eles têm ideias e lêem muito sobre o vôo das aves.',
        ],
        explicacao: '"Têm" (plural) mantém o circunflexo diferencial; "ideias", "leem" e "voo" perderam o acento com o Acordo.',
        porqueErradas: [
          'Erra "tem" (plural pede têm) e mantém três acentos abolidos.',
          '"Idéias" perdeu o acento.',
          'Erra "tem" e "lêem".',
          '"Lêem" e "vôo" perderam o acento.',
        ],
      },
    ],
  },
  {
    id: 'LP3',
    disciplina: 'LP',
    titulo: 'Fonética e fonologia: sílabas, encontros, tonicidade, ortoepia e prosódia',
    ementa: 'Fonética: Encontros vocálicos – ditongo, tritongo, hiato. Encontros consonantais. Dígrafos. Classificação das palavras quanto ao número de sílabas – monossílabas, dissílabas, trissílabas, polissílabas. Divisão silábica. Sílaba tônica. Classificação das palavras quanto ao acento tônico – oxítonas, paroxítonas, proparoxítonas. Ortoepia. Prosódia.',
    semana: 2,
    texto: `**Fonema** é o som; **letra** é o sinal gráfico. Nem sempre batem: "táxi" tem 4 letras no "x" que vale dois sons (/ks/); "chave" tem o dígrafo "ch" (duas letras, um som).

### Encontros vocálicos
- **Ditongo**: vogal + semivogal na **mesma sílaba**. Crescente (semivogal antes: qua-dro, sé-rie) ou decrescente (vogal antes: pai, cou-ro). Oral ou nasal (mãe, pão).
- **Tritongo**: semivogal + vogal + semivogal na mesma sílaba: Pa-ra-**guai**, sa-**guão**, en-xá-**guam**.
- **Hiato**: duas vogais em **sílabas diferentes**: sa-**ú**-de, po-**e**-ta, ju-**í**-zo, co-**o**-pe-rar.

### Encontros consonantais x dígrafos
- **Encontro consonantal**: duas ou mais consoantes juntas, **cada uma com seu som**: **br**aço, **pl**ano, a**dv**ogado, **pn**eu.
- **Dígrafo**: duas letras representando **um único fonema**: **ch**, **lh**, **nh**, **rr**, **ss**, **sc** (nascer), **sç** (desça), **xc** (exceto), **gu** e **qu** (quando o u não é pronunciado: guerra, queijo). Também há **dígrafos vocálicos** (vogal + m/n nasalizando): **am**, **an**, **em**, **en**, **im**, **in**, **om**, **on**, **um**, **un** (campo, ponte).
- Atenção: em "linguiça" e "frequente" o **u é pronunciado** → não há dígrafo, há ditongo.

### Divisão silábica (regras que caem)
- **Separam-se**: rr, ss, sc, sç, xc (ter-ra, pás-sa-ro, nas-cer, ex-ce-to); vogais de **hiato** (sa-ú-de); consoantes de encontros **não iniciais** que pertencem a sílabas distintas (ad-vo-ga-do, rit-mo).
- **Não se separam**: ditongos e tritongos (cou-ro, U-ru-guai); dígrafos ch, lh, nh, gu, qu (ca-chor-ro, ma-lha, ni-nho); encontros consonantais com l ou r como segunda letra (a-bra-ço, a-tle-ta).

### Número de sílabas e tonicidade
Monossílaba (1: mar), dissílaba (2: ca-sa), trissílaba (3: pa-ne-la), polissílaba (4+: e-du-ca-ção). Pela posição da **sílaba tônica**: oxítona (última: ca-**fé**), paroxítona (penúltima: **me**-sa), proparoxítona (antepenúltima: **lâm**-pa-da). Monossílabos podem ser **tônicos** (pé, mar) ou **átonos** (o, de, que, se).

### Ortoepia x prosódia
- **Ortoepia** (ou ortoépia): pronúncia correta dos **fonemas** (sons): "a**ste**risco" (não "asterístico"), "**beneficente**" (não "beneficiente"), "**mendigo**" (não "mendingo"), "**prazeroso**" (não "prazeiroso"), "**cabeleireiro**" (não "cabelereiro"), "**advogado**" (sem inserir "i": não "adevogado").
- **Prosódia**: posição correta da **sílaba tônica**. Paroxítonas: ru-**bri**-ca, re-**cor**-de, a-**va**-ro, gra-**tui**-to (o "u" é tônico, como em "fui"). Oxítonas: No-**bel**, ru-**im**, ca-te-**ter**, su-**til**. Proparoxítonas: **ín**-te-rim, pro-**tó**-ti-po, a-e-**ró**-li-to.`,
    fontes: [BE_PORT, SO_PORT, VOLP],
    questoes: [
      {
        id: 'LP3-1',
        nivel: 1,
        enunciado: 'Há hiato em todas as palavras de:',
        alternativas: ['saúde, poeta, juízo', 'pai, mãe, couro', 'Paraguai, saguão, quais', 'série, quadro, água', 'chave, ninho, malha'],
        explicacao: 'Sa-ú-de, po-e-ta, ju-í-zo: vogais em sílabas separadas.',
        porqueErradas: [
          'Ditongos decrescentes.',
          'Tritongos.',
          'Ditongos crescentes.',
          'Dígrafos consonantais (ch, nh, lh), não encontros vocálicos.',
        ],
      },
      {
        id: 'LP3-2',
        nivel: 1,
        enunciado: 'A palavra que apresenta DÍGRAFO é:',
        alternativas: ['nascer', 'braço', 'pneu', 'linguiça', 'advogado'],
        explicacao: 'Em "nascer", sc representa um único fonema /s/: é dígrafo.',
        porqueErradas: [
          'br é encontro consonantal: os dois sons são pronunciados.',
          'pn é encontro consonantal.',
          'O u é pronunciado em "linguiça": gu não é dígrafo.',
          'dv é encontro consonantal (ad-vo-ga-do).',
        ],
      },
      {
        id: 'LP3-3',
        nivel: 2,
        enunciado: 'A divisão silábica está correta em:',
        alternativas: ['ter-ra, nas-cer, sa-ú-de', 'te-rra, na-scer, saú-de', 'ter-ra, na-scer, sa-ú-de', 'te-rra, nas-cer, saú-de', 'terr-a, nasc-er, sa-ú-de'],
        explicacao: 'rr e sc se separam; vogais em hiato também se separam.',
        porqueErradas: [
          'rr e sc devem ser separados; hiato idem.',
          'sc deve ser separado (nas-cer).',
          'rr se separa (ter-ra); aú é hiato.',
          'Divisão sem base silábica.',
        ],
      },
      {
        id: 'LP3-4',
        nivel: 2,
        enunciado: 'Quanto à tonicidade, as palavras "rubrica", "recorde" e "Nobel" são, respectivamente:',
        alternativas: ['paroxítona, paroxítona e oxítona', 'proparoxítona, proparoxítona e paroxítona', 'paroxítona, proparoxítona e paroxítona', 'proparoxítona, paroxítona e oxítona', 'oxítona, paroxítona e paroxítona'],
        explicacao: 'Pronúncia culta: ru-BRI-ca, re-COR-de, No-BEL. Questão típica de prosódia.',
        porqueErradas: [
          '"Rúbrica" e "récorde" são erros de prosódia comuns.',
          '"Récorde" é erro; Nobel é oxítona.',
          '"Rúbrica" é erro.',
          'Rubrica não é oxítona e Nobel não é paroxítona.',
        ],
      },
      {
        id: 'LP3-5',
        nivel: 3,
        enunciado: 'Assinale a alternativa em que todas as palavras apresentam TRITONGO.',
        alternativas: ['Uruguai, saguão, enxáguam', 'Uruguai, saúde, quais', 'saguão, poeira, iguais', 'averiguou, rainha, enxáguem', 'Paraguai, juízo, quão'],
        explicacao: 'U-ru-GUAI, sa-GUÃO, en-xá-GUAM: semivogal + vogal + semivogal na mesma sílaba.',
        porqueErradas: [
          '"Saúde" tem hiato.',
          '"Poeira" tem ditongo (po-ei-ra).',
          '"Rainha" tem hiato (ra-i-nha).',
          '"Juízo" tem hiato.',
        ],
      },
      {
        id: 'LP3-6',
        nivel: 3,
        enunciado: 'Sobre ortoepia e prosódia, é correto afirmar:',
        alternativas: [
          'Ortoepia trata da pronúncia correta dos fonemas; prosódia, da correta acentuação tônica.',
          'Ortoepia e prosódia tratam, ambas, apenas da grafia correta das palavras.',
          'Prosódia trata da pronúncia dos fonemas; ortoepia, da posição da sílaba tônica.',
          'Dizer "rúbrica" é um erro de ortoepia, e dizer "asterístico" é erro de prosódia.',
          'Ortoepia e prosódia só se aplicam a palavras estrangeiras.',
        ],
        explicacao: 'Ortoepia = articulação dos sons (asterisco, beneficente); prosódia = sílaba tônica (rubrica, recorde).',
        porqueErradas: [
          'Ambas tratam de pronúncia, não de grafia (isso é ortografia).',
          'Inverte os conceitos.',
          'Inverte: "rúbrica" é erro de prosódia; "asterístico", de ortoepia.',
          'Aplicam-se a qualquer palavra da língua.',
        ],
      },
    ],
  },
  {
    id: 'LP4',
    disciplina: 'LP',
    titulo: 'Estrutura e formação das palavras',
    ementa: 'Morfologia: Estrutura das palavras – raiz, radical, palavras primitivas e derivadas, palavras simples e compostas. Formação das palavras – derivação, composição, redução, hibridismos. Sufixos. Prefixos. Radicais.',
    semana: 3,
    texto: `### Elementos mórficos (morfemas)
- **Radical**: a base de significado, comum à família de palavras: **pedr**-a, **pedr**-eiro, **pedr**-egulho.
- **Raiz**: o elemento mais primitivo, de origem histórica (às vezes coincide com o radical).
- **Afixos**: **prefixo** (antes do radical: **in**feliz, **re**fazer) e **sufixo** (depois: feliz**mente**, pedr**eiro**).
- **Desinências**: indicam flexão. **Nominais** (gênero e número: menin**a**, menino**s**) e **verbais** (modo-tempo e número-pessoa: canta**va**, canta**mos**).
- **Vogal temática**: liga radical e desinências; nos verbos indica a conjugação (am**a**r, vend**e**r, part**i**r). **Tema** = radical + vogal temática.
- **Vogal e consoante de ligação**: facilitam a pronúncia: gas**ô**metro, cafe**t**eira, paris**i**ense.

### Primitivas x derivadas; simples x compostas
**Primitiva** não vem de outra palavra da língua (pedra); **derivada** vem (pedreiro). **Simples** tem um só radical (flor); **composta**, mais de um (couve-flor, girassol).

### Processos de formação
- **Derivação prefixal**: prefixo + radical (**des**leal, **re**ler).
- **Derivação sufixal**: radical + sufixo (leal**dade**, pedr**eiro**).
- **Prefixal e sufixal**: recebe os dois, mas **existe** sem um deles (**in**feliz**mente**: existe "infeliz" e "felizmente").
- **Parassintética**: prefixo e sufixo **ao mesmo tempo**, e a palavra **não existe** sem um deles: **en**trist**ecer**, **a**manh**ecer**, **em**palid**ecer**, **a**pedr**ejar** (não existem "entriste" nem "tristecer").
- **Regressiva**: reduz a palavra, gerando em geral substantivos de verbos (**deverbais**): combater → combate; pescar → pesca; ajudar → ajuda.
- **Imprópria (conversão)**: muda a classe sem mudar a forma: "o **jantar**", "um **não**", "o **porquê**".
- **Composição por justaposição**: os radicais se juntam **sem alteração**: girassol, passatempo, guarda-chuva.
- **Composição por aglutinação**: há **perda** de fonema: plano + alto = **planalto**; em + boa + hora = **embora**; fidalgo (filho de algo).
- **Redução (abreviação)**: forma reduzida que vira palavra: moto(cicleta), foto(grafia), cine(ma), pneu(mático).
- **Hibridismo**: elementos de **línguas diferentes**: auto**móvel** (grego + latim), **socio**logia (latim + grego), burocracia (francês + grego), alcaloide (árabe + grego).
- Outros: **onomatopeia** (tique-taque, zunzum) e **siglonimização** (PT, ONU, Detran).

### Prefixos e radicais greco-latinos frequentes
**a-/an-** (negação: anarquia), **anti-** (contra), **hiper-** (excesso), **hipo-** (abaixo, escassez), **sub-** (abaixo), **bi-** (dois), **geo-** (terra), **hidro-** (água), **demo-** (povo), **-cracia** (poder), **-logia** (estudo), **-grafia** (escrita/descrição). Ex.: **geografia** = descrição da terra.`,
    fontes: [BE_PORT, SO_PORT],
    questoes: [
      {
        id: 'LP4-1',
        nivel: 1,
        enunciado: 'A palavra formada por derivação parassintética é:',
        alternativas: ['entristecer', 'infelizmente', 'tristeza', 'reler', 'pesca'],
        explicacao: 'En-trist-ecer: prefixo e sufixo entram juntos; não existem "entriste" nem "tristecer".',
        porqueErradas: [
          'Prefixal e sufixal: existem "infeliz" e "felizmente".',
          'Derivação sufixal.',
          'Derivação prefixal.',
          'Derivação regressiva (de pescar).',
        ],
      },
      {
        id: 'LP4-2',
        nivel: 1,
        enunciado: '"Planalto" e "embora" são formadas por:',
        alternativas: ['composição por aglutinação', 'composição por justaposição', 'derivação regressiva', 'hibridismo', 'redução'],
        explicacao: 'Plano + alto → planalto; em + boa + hora → embora: houve perda de fonemas, logo aglutinação.',
        porqueErradas: [
          'Na justaposição os radicais não se alteram (girassol).',
          'Regressiva reduz um verbo a substantivo.',
          'Hibridismo exige línguas diferentes.',
          'Redução é encurtamento de uma palavra (foto).',
        ],
      },
      {
        id: 'LP4-3',
        nivel: 2,
        enunciado: 'Em "O jantar estava ótimo", a palavra "jantar" foi formada por:',
        alternativas: ['derivação imprópria', 'derivação regressiva', 'derivação sufixal', 'composição por justaposição', 'parassíntese'],
        explicacao: 'O verbo "jantar" passou a substantivo (precedido de artigo) sem mudar a forma: derivação imprópria (conversão).',
        porqueErradas: [
          'Regressiva reduziria a forma (como pescar → pesca).',
          'Não há sufixo acrescentado.',
          'Não há dois radicais.',
          'Não há prefixo e sufixo.',
        ],
      },
      {
        id: 'LP4-4',
        nivel: 2,
        enunciado: 'São exemplos de hibridismo:',
        alternativas: ['automóvel e sociologia', 'girassol e passatempo', 'moto e foto', 'tique-taque e zunzum', 'infeliz e desleal'],
        explicacao: 'Automóvel (auto, grego + móvel, latim) e sociologia (socio, latim + logia, grego) unem línguas diferentes.',
        porqueErradas: [
          'Composição por justaposição.',
          'Redução (abreviação).',
          'Onomatopeias.',
          'Derivação prefixal.',
        ],
      },
      {
        id: 'LP4-5',
        nivel: 3,
        enunciado: 'Na forma verbal "cantávamos", os elementos destacados "-va-" e "-mos" são, respectivamente:',
        alternativas: [
          'desinência modo-temporal e desinência número-pessoal',
          'vogal temática e desinência nominal',
          'sufixo e prefixo',
          'desinência número-pessoal e desinência modo-temporal',
          'vogal de ligação e radical',
        ],
        explicacao: 'Cant (radical) + a (vogal temática) + va (modo-tempo: pretérito imperfeito do indicativo) + mos (1ª pessoa do plural).',
        porqueErradas: [
          'A vogal temática é o "a"; não há desinência nominal em verbo conjugado.',
          'Desinências não são afixos derivacionais.',
          'Inverte as funções.',
          'O radical é "cant-".',
        ],
      },
      {
        id: 'LP4-6',
        nivel: 3,
        enunciado: 'Assinale a alternativa em que o processo de formação está INCORRETAMENTE indicado.',
        alternativas: [
          'combate (de combater) — derivação sufixal',
          'desleal — derivação prefixal',
          'amanhecer — derivação parassintética',
          'guarda-chuva — composição por justaposição',
          'cine (de cinema) — redução',
        ],
        explicacao: '"Combate" vem de "combater" por derivação REGRESSIVA (perda da terminação verbal), não sufixal.',
        porqueErradas: [
          'Correto: prefixo des- + leal.',
          'Correto: a- + manh + -ecer simultâneos.',
          'Correto: radicais sem alteração.',
          'Correto: forma reduzida.',
        ],
      },
    ],
  },
  {
    id: 'LP5',
    disciplina: 'LP',
    titulo: 'Classes de palavras e flexão',
    ementa: 'Classificação e flexão das palavras – substantivo, artigo, adjetivo, numeral, pronome, verbo, advérbio, preposição, conjunção, interjeição etc.',
    semana: 3,
    texto: `São **dez** classes. **Variáveis** (flexionam): substantivo, artigo, adjetivo, numeral, pronome e verbo. **Invariáveis**: advérbio, preposição, conjunção e interjeição.

### As classes em uma linha cada
- **Substantivo**: nomeia seres, coisas, sentimentos. Comum/próprio, concreto/abstrato, primitivo/derivado, simples/composto, **coletivo** (cardume, alcateia). Flexiona em gênero, número e grau. Atenção aos **sobrecomuns** (a criança, a vítima — um só gênero para ambos os sexos), **comuns de dois gêneros** (o/a estudante) e **epicenos** (a onça macho/fêmea).
- **Artigo**: definido (o, a) e indefinido (um, uma). **Substantiva** qualquer palavra: "o **sim**".
- **Adjetivo**: qualifica o substantivo. Locução adjetiva: "amor **de mãe**" (= materno). Grau comparativo (mais... que) e superlativo (relativo: o mais; absoluto sintético: belíssimo, paupérrimo, **facílimo**).
- **Numeral**: cardinal (dois), ordinal (segundo), multiplicativo (dobro), fracionário (metade).
- **Pronome**: substitui ou acompanha o substantivo. Pessoais (retos: eu, tu...; oblíquos: me, o, lhe...), de tratamento (Vossa Excelência — o verbo vai para a **3ª pessoa**), possessivos, demonstrativos (**este** = perto de quem fala / o que vai ser dito; **esse** = perto de quem ouve / o que já foi dito; **aquele** = distante), indefinidos, interrogativos e **relativos** (que, o qual, cujo, onde, quem — retomam termo anterior; "cujo" indica posse e não admite artigo depois: "o autor **cujo** livro li").
- **Verbo**: ação, estado, fenômeno. Flexiona em pessoa, número, tempo, modo e voz (ver LP13).
- **Advérbio**: modifica verbo, adjetivo ou outro advérbio; indica circunstância (tempo, lugar, modo, intensidade, negação, dúvida, afirmação). "Muito" é advérbio em "corre **muito**" e pronome indefinido em "**muitos** alunos".
- **Preposição**: liga termos com subordinação (a, de, em, para, por, com, sem, sob, sobre, entre...). Pode contrair-se (do, na, pelo) ou combinar-se (ao).
- **Conjunção**: liga orações (ou termos de mesma função). Coordenativas (e, mas, ou, logo, pois...) e subordinativas (que, se, porque, embora, quando, conforme...) — ver LP8.
- **Interjeição**: exprime emoção (Ah! Ufa! Psiu!).

### O ponto que a banca mais cobra: a MESMA palavra em classes diferentes
- **Que**: pronome relativo ("o livro **que** li"), conjunção integrante ("quero **que** venha"), advérbio de intensidade ("**que** lindo!"), substantivo ("um **quê** de mistério", acentuado), preposição ("tenho **que** ir").
- **Se**: conjunção condicional ("**se** chover"), conjunção integrante ("não sei **se** vem"), pronome apassivador ("vendem-**se** casas"), índice de indeterminação do sujeito ("precisa-**se** de ajuda"), pronome reflexivo ("ele **se** feriu").
- **Como**: conjunção comparativa, causal ("**como** choveu, ficamos"), conformativa, ou advérbio interrogativo de modo.`,
    fontes: [BE_PORT, SO_PORT, MICHAELIS],
    questoes: [
      {
        id: 'LP5-1',
        nivel: 1,
        enunciado: 'São classes de palavras INVARIÁVEIS:',
        alternativas: ['advérbio, preposição, conjunção e interjeição', 'substantivo, artigo, adjetivo e numeral', 'pronome, verbo, advérbio e preposição', 'artigo, preposição, conjunção e verbo', 'adjetivo, advérbio, numeral e interjeição'],
        explicacao: 'As quatro invariáveis são advérbio, preposição, conjunção e interjeição; as outras seis flexionam.',
        porqueErradas: [
          'Todas variáveis.',
          'Pronome e verbo são variáveis.',
          'Artigo e verbo são variáveis.',
          'Adjetivo e numeral são variáveis.',
        ],
      },
      {
        id: 'LP5-2',
        nivel: 1,
        enunciado: '"A criança" e "a vítima" são substantivos:',
        alternativas: ['sobrecomuns', 'epicenos', 'comuns de dois gêneros', 'coletivos', 'abstratos'],
        explicacao: 'Sobrecomuns têm um só gênero gramatical para os dois sexos: a criança (menino ou menina).',
        porqueErradas: [
          'Epicenos são nomes de animais (a onça macho).',
          'Comuns de dois gêneros variam o artigo (o/a estudante).',
          'Coletivo indica conjunto (cardume).',
          'São concretos: nomeiam seres.',
        ],
      },
      {
        id: 'LP5-3',
        nivel: 2,
        enunciado: 'Em "Este é o professor cujo método todos elogiam", a palavra "cujo" é:',
        alternativas: ['pronome relativo que indica posse', 'conjunção integrante', 'pronome demonstrativo', 'advérbio de modo', 'pronome possessivo de 3ª pessoa'],
        explicacao: '"Cujo" retoma "professor" (relativo) e indica posse: o método do professor.',
        porqueErradas: [
          'Conjunção integrante é "que"/"se" introduzindo oração substantiva.',
          'Demonstrativos: este, esse, aquele.',
          'Não modifica verbo.',
          'Possessivo de 3ª pessoa seria "seu"; cujo é relativo.',
        ],
      },
      {
        id: 'LP5-4',
        nivel: 2,
        enunciado: 'A palavra "muito" é ADVÉRBIO em:',
        alternativas: ['Ela estudou muito para a prova.', 'Muitos candidatos faltaram.', 'Havia muita gente na sala.', 'Muitas questões eram difíceis.', 'Tenho muitos livros de Geografia.'],
        explicacao: 'Modificando o verbo "estudou", "muito" é advérbio de intensidade (invariável).',
        porqueErradas: [
          'Acompanha substantivo e flexiona: pronome indefinido.',
          'Pronome indefinido (flexionado no feminino).',
          'Pronome indefinido.',
          'Pronome indefinido.',
        ],
      },
      {
        id: 'LP5-5',
        nivel: 3,
        enunciado: 'Assinale a alternativa em que o "se" é PRONOME APASSIVADOR.',
        alternativas: ['Vendem-se terrenos no bairro.', 'Precisa-se de professores.', 'Se chover, a aula será adiada.', 'Não sei se ela virá.', 'Ele se olhou no espelho.'],
        explicacao: 'Verbo transitivo direto + se: "terrenos são vendidos" (voz passiva sintética). O verbo concorda com o sujeito "terrenos".',
        porqueErradas: [
          'Verbo transitivo indireto ("precisar de"): índice de indeterminação do sujeito.',
          'Conjunção condicional.',
          'Conjunção integrante.',
          'Pronome reflexivo.',
        ],
      },
      {
        id: 'LP5-6',
        nivel: 3,
        enunciado: 'Em um texto, após listar três problemas, o autor escreve: "____ dificuldades exigem ação imediata." Considerando a norma culta e a retomada do que já foi dito, o pronome adequado é:',
        alternativas: ['Essas', 'Estas', 'Aquelas', 'Tais estas', 'Cujas'],
        explicacao: '"Esse/essa" retoma o que já foi mencionado (anafórico); "este/esta" anuncia o que ainda será dito (catafórico).',
        porqueErradas: [
          '"Estas" anunciaria algo a seguir, não retomaria.',
          '"Aquelas" indica distância maior; em retomada de dois termos, retoma o mais distante.',
          'Construção inexistente na norma.',
          '"Cujas" é relativo de posse e exige antecedente.',
        ],
      },
    ],
  },
  {
    id: 'LP6',
    disciplina: 'LP',
    titulo: 'Semântica: significação das palavras',
    ementa: 'Semântica: Significação das palavras – sinônimos e antônimos.',
    semana: 3,
    texto: `Semântica estuda o **sentido**. Na prova aparece em questões de substituição ("a palavra X pode ser substituída, sem alteração de sentido, por...") e de vocabulário em contexto.

### Relações de sentido
- **Sinônimos**: sentido **semelhante** no contexto (não existe sinonímia perfeita): longe/distante, alegre/contente. Na prova, o sinônimo certo é o que funciona **naquela frase**: "o professor **ratificou** a nota" = confirmou.
- **Antônimos**: sentido oposto: bem/mal, ativo/passivo. Muitos se formam por prefixo: feliz/**in**feliz, leal/**des**leal.
- **Homônimos**: mesma pronúncia e/ou grafia, sentidos diferentes.
  - **Homófonos** (som igual, grafia diferente): **cela** (prisão) / **sela** (arreio); **concerto** (musical) / **conserto** (reparo); **cessão** (ceder) / **seção** ou secção (divisão) / **sessão** (reunião); **acender** / **ascender** (subir); **caçar** / **cassar** (anular).
  - **Homógrafos** (grafia igual, som diferente): **colher** (verbo, é fechado) / **colher** (talher, é aberto).
  - **Perfeitos** (grafia e som iguais): **são** (sadio / verbo ser / santo).
- **Parônimos**: parecidos na forma, **diferentes** no sentido — a fonte das pegadinhas:
  - **ratificar** (confirmar) x **retificar** (corrigir)
  - **eminente** (notável) x **iminente** (prestes a ocorrer)
  - **emigrar** (sair do país) x **imigrar** (entrar em outro país)
  - **descriminar** (deixar de ser crime) x **discriminar** (distinguir, separar)
  - **flagrante** (evidente) x **fragrante** (perfumado)
  - **tráfego** (trânsito) x **tráfico** (comércio ilegal)
  - **infligir** (aplicar pena) x **infringir** (violar regra)
  - **deferir** (atender um pedido) x **diferir** (adiar; ser diferente) — vocabulário típico de edital!
- **Polissemia**: uma palavra com vários sentidos relacionados: "**pé** da mesa", "**pé** de alface".
- **Hiperônimo/hipônimo**: geral x específico: **bioma** (hiperônimo) → Cerrado (hipônimo). Usados para coesão (retomar sem repetir).

### Denotação x conotação
**Denotação**: sentido literal, de dicionário ("o rio **secou**"). **Conotação**: sentido figurado ("meu coração **secou**"). Figuras frequentes: **metáfora** (comparação implícita: "a vida é uma viagem"), **metonímia** (substituição por relação de proximidade: "li **Machado**" = a obra; "bebeu um **copo**"), **hipérbole** (exagero), **eufemismo** (suavização: "partiu" = morreu), **ironia**, **antítese** (ideias opostas próximas: "amor e ódio") e **paradoxo** (ideias opostas no mesmo ser: "morrer de viver").`,
    fontes: [MICHAELIS, BE_PORT, SO_PORT],
    questoes: [
      {
        id: 'LP6-1',
        nivel: 1,
        enunciado: 'No edital, "a inscrição foi DEFERIDA" significa que a inscrição foi:',
        alternativas: ['aceita', 'adiada', 'recusada', 'diferente', 'anulada'],
        explicacao: 'Deferir = atender, aprovar um pedido. O antônimo é indeferir.',
        porqueErradas: [
          'Adiar é "diferir" (parônimo).',
          'Recusar é "indeferir".',
          '"Diferente" vem de diferir, não de deferir.',
          'Anular é "cassar", "invalidar".',
        ],
      },
      {
        id: 'LP6-2',
        nivel: 1,
        enunciado: 'A frase em que a palavra destacada está empregada corretamente é:',
        alternativas: [
          'A diretora RETIFICOU o erro na lista de presença.',
          'O perigo era EMINENTE: a ponte ia cair.',
          'Muitos europeus EMIGRARAM para o Brasil no século XIX, ao chegarem aqui.',
          'O motorista INFLIGIU a lei de trânsito.',
          'Houve SESSÃO de direitos do terreno ao município.',
        ],
        explicacao: 'Retificar = corrigir. Correto.',
        porqueErradas: [
          'Prestes a ocorrer é "iminente".',
          'Quem chega a um país "imigra"; "emigrar" é sair.',
          'Violar lei é "infringir"; "infligir" é aplicar pena.',
          'Ceder direitos é "cessão".',
        ],
      },
      {
        id: 'LP6-3',
        nivel: 2,
        enunciado: '"Concerto" e "conserto" são palavras:',
        alternativas: ['homófonas', 'homógrafas', 'parônimas com mesma pronúncia e mesma grafia', 'sinônimas', 'antônimas'],
        explicacao: 'Mesma pronúncia, grafia e sentido diferentes: homófonas.',
        porqueErradas: [
          'Homógrafas têm a mesma grafia.',
          'Grafias diferentes.',
          'Sentidos diferentes (música x reparo).',
          'Não são opostas.',
        ],
      },
      {
        id: 'LP6-4',
        nivel: 2,
        enunciado: 'Em "Li todo o Machado de Assis nas férias", ocorre a figura de linguagem:',
        alternativas: ['metonímia', 'metáfora', 'hipérbole', 'antítese', 'eufemismo'],
        explicacao: 'O autor é usado no lugar da obra — relação de proximidade/contiguidade: metonímia.',
        porqueErradas: [
          'Metáfora é comparação implícita por semelhança.',
          'Não há exagero intencional.',
          'Não há ideias opostas.',
          'Não há suavização.',
        ],
      },
      {
        id: 'LP6-5',
        nivel: 3,
        enunciado: 'No trecho "A sessão do conselho aprovou a cessão do prédio para a seção de ensino", as três palavras destacadas significam, respectivamente:',
        alternativas: ['reunião, ato de ceder, divisão', 'divisão, reunião, ato de ceder', 'ato de ceder, divisão, reunião', 'reunião, divisão, ato de ceder', 'divisão, ato de ceder, reunião'],
        explicacao: 'Sessão = reunião; cessão = ato de ceder; seção = divisão/departamento.',
        porqueErradas: [
          'Troca as três.',
          'Troca as três.',
          'Troca cessão e seção.',
          'Troca sessão e seção.',
        ],
      },
      {
        id: 'LP6-6',
        nivel: 3,
        enunciado: 'Em um texto, a palavra "biomas" é usada para retomar "Cerrado, Caatinga e Pampa", mencionados antes. Essa retomada se faz por meio de:',
        alternativas: ['hiperônimo', 'hipônimo', 'antônimo', 'parônimo', 'homônimo'],
        explicacao: 'Bioma é o termo geral (hiperônimo) que abrange os específicos (hipônimos) Cerrado, Caatinga, Pampa. É um recurso de coesão lexical.',
        porqueErradas: [
          'Hipônimos são os termos específicos (Cerrado etc.).',
          'Não há oposição de sentido.',
          'Parônimos são formas parecidas com sentidos diferentes.',
          'Homônimos têm som ou grafia iguais.',
        ],
      },
    ],
  },
  {
    id: 'LP7',
    disciplina: 'LP',
    titulo: 'Análise sintática: termos da oração',
    ementa: 'Análise sintática – frase, oração e período. Termos Essenciais da Oração – sujeito, predicado. Termos integrantes e acessórios da oração – objeto direto, objeto indireto, complemento nominal, agente da passiva, adjunto adnominal, adjunto adverbial, aposto, vocativo etc.',
    semana: 4,
    texto: `### Frase, oração e período
- **Frase**: enunciado de sentido completo, com ou sem verbo ("Silêncio!").
- **Oração**: enunciado organizado em torno de um **verbo** (ou locução verbal).
- **Período**: frase com uma ou mais orações. **Simples** (uma oração) ou **composto** (duas ou mais). Conte os verbos!

### Termos essenciais
- **Sujeito**: o ser de quem se declara algo; concorda com o verbo. Tipos: **simples** (um núcleo), **composto** (dois ou mais núcleos), **oculto/desinencial** (identificado pela desinência: "**Estudamos**" → nós), **indeterminado** (verbo na 3ª do plural sem referente — "**Roubaram** meu livro" — ou verbo + **se** como índice de indeterminação — "Precisa-**se** de vagas") e **oração sem sujeito** (verbos impessoais: **haver** = existir/tempo, **fazer** = tempo/clima, fenômenos da natureza: "**Há** vagas", "**Faz** dois anos", "**Choveu**").
- **Predicado**: o que se declara do sujeito.
  - **Verbal**: núcleo é verbo de ação ("Ela **leu** o edital").
  - **Nominal**: núcleo é um nome (predicativo), com verbo de ligação (ser, estar, parecer, permanecer, ficar, continuar): "Ela **está cansada**".
  - **Verbo-nominal**: dois núcleos, verbo de ação + predicativo: "Ela saiu **satisfeita**".

### Termos integrantes (completam o sentido)
- **Objeto direto**: complementa verbo transitivo direto **sem preposição** obrigatória: "Li **o livro**".
- **Objeto indireto**: complementa verbo transitivo indireto **com preposição**: "Gosto **de Geografia**".
- **Complemento nominal**: completa um **nome** (substantivo abstrato, adjetivo, advérbio) com preposição; tem sentido **passivo/alvo**: "a defesa **da tese**" (a tese é defendida), "favorável **ao projeto**".
- **Agente da passiva**: quem pratica a ação na voz passiva: "O edital foi publicado **pela Fundação**".

### Termos acessórios
- **Adjunto adnominal**: caracteriza o substantivo (artigos, adjetivos, pronomes adjetivos, numerais, locuções adjetivas): "**os dois** alunos **dedicados**".
- **Adjunto adverbial**: circunstância (tempo, lugar, modo, causa...): "Estudou **à noite**, **em casa**".
- **Aposto**: explica/resume um termo, geralmente entre vírgulas: "Mogi Guaçu, **cidade paulista**, ...".
- **Vocativo**: chamamento, **fora** da estrutura da oração: "**Mariana**, venha cá".

### A pegadinha clássica: adjunto adnominal x complemento nominal
Ambos podem ter preposição ligada a substantivo. Se o termo é **agente** (pratica), é **adjunto adnominal**: "a resposta **do aluno**" (o aluno responde). Se é **paciente/alvo** (sofre), é **complemento nominal**: "a resposta **à carta**" (a carta é respondida). Se o nome é **concreto** ("a casa **de pedra**"), é sempre adjunto adnominal.`,
    fontes: [BE_PORT, SO_PORT],
    questoes: [
      {
        id: 'LP7-1',
        nivel: 1,
        enunciado: 'É oração SEM SUJEITO:',
        alternativas: ['Há muitos candidatos inscritos.', 'Os candidatos chegaram cedo.', 'Estudamos o dia todo.', 'Roubaram a bolsa da professora.', 'Precisa-se de professores.'],
        explicacao: '"Haver" no sentido de existir é impessoal: oração sem sujeito ("muitos candidatos" é objeto direto).',
        porqueErradas: [
          'Sujeito simples: os candidatos.',
          'Sujeito oculto: nós.',
          'Sujeito indeterminado (3ª do plural).',
          'Sujeito indeterminado (VTI + se).',
        ],
      },
      {
        id: 'LP7-2',
        nivel: 1,
        enunciado: 'Em "A professora parecia preocupada", o predicado é:',
        alternativas: ['nominal', 'verbal', 'verbo-nominal', 'inexistente', 'adverbial'],
        explicacao: '"Parecer" é verbo de ligação; o núcleo é o predicativo "preocupada".',
        porqueErradas: [
          'Predicado verbal tem verbo de ação como núcleo.',
          'Verbo-nominal exigiria verbo de ação + predicativo.',
          'Há predicado.',
          'Não é classificação de predicado.',
        ],
      },
      {
        id: 'LP7-3',
        nivel: 2,
        enunciado: 'Em "O edital foi publicado pela Fundação", o termo "pela Fundação" é:',
        alternativas: ['agente da passiva', 'objeto indireto', 'adjunto adverbial de lugar', 'complemento nominal', 'sujeito'],
        explicacao: 'Na voz passiva analítica (ser + particípio), quem pratica a ação é o agente da passiva.',
        porqueErradas: [
          '"Publicar" não é transitivo indireto aqui.',
          'Não indica lugar.',
          'Não completa um nome.',
          'O sujeito é "o edital" (paciente).',
        ],
      },
      {
        id: 'LP7-4',
        nivel: 2,
        enunciado: 'Assinale a alternativa em que o termo destacado é APOSTO.',
        alternativas: [
          'Mogi Guaçu, CIDADE DO INTERIOR PAULISTA, sediará a prova.',
          'MARIANA, venha conferir o gabarito.',
          'A prova será À TARDE.',
          'O resultado DO CONCURSO saiu.',
          'Ela está CONFIANTE.',
        ],
        explicacao: 'O termo explica "Mogi Guaçu" e vem entre vírgulas: aposto explicativo.',
        porqueErradas: [
          'Chamamento: vocativo.',
          'Circunstância de tempo: adjunto adverbial.',
          'Adjunto adnominal (caracteriza "resultado").',
          'Predicativo do sujeito.',
        ],
      },
      {
        id: 'LP7-5',
        nivel: 3,
        enunciado: 'O termo destacado é COMPLEMENTO NOMINAL em:',
        alternativas: ['A defesa DA TESE foi brilhante.', 'A resposta DO ALUNO estava correta.', 'Comprei uma mesa DE MADEIRA.', 'O livro DA PROFESSORA sumiu.', 'A chegada DOS CANDIDATOS atrasou.'],
        explicacao: 'A tese é defendida (sentido passivo/alvo) e "defesa" é substantivo abstrato: complemento nominal.',
        porqueErradas: [
          'O aluno responde (agente): adjunto adnominal.',
          'Nome concreto + locução: adjunto adnominal.',
          'Ideia de posse: adjunto adnominal.',
          'Os candidatos chegam (agente): adjunto adnominal.',
        ],
      },
      {
        id: 'LP7-6',
        nivel: 3,
        enunciado: 'Em "Os alunos voltaram cansados da excursão", o predicado é classificado como:',
        alternativas: ['verbo-nominal', 'nominal', 'verbal', 'nominal com verbo de ligação', 'verbal com objeto direto'],
        explicacao: '"Voltar" é verbo de ação (núcleo verbal) e "cansados" é predicativo do sujeito (núcleo nominal): predicado verbo-nominal.',
        porqueErradas: [
          '"Voltar" não é verbo de ligação.',
          'Há também predicativo, logo não é só verbal.',
          'Mesmo erro: "voltar" não é de ligação.',
          '"Cansados" não é objeto: concorda com o sujeito.',
        ],
      },
    ],
  },
  {
    id: 'LP8',
    disciplina: 'LP',
    titulo: 'Classificação das orações',
    ementa: 'Classificação das orações: principal, coordenadas, subordinadas, reduzidas etc.',
    semana: 4,
    texto: `No período composto, as orações se relacionam por **coordenação** (independentes sintaticamente) ou **subordinação** (uma exerce função sintática na outra, a **principal**).

### Coordenadas
- **Assindéticas**: sem conjunção ("Cheguei, estudei, dormi").
- **Sindéticas** (com conjunção):
  - **Aditivas**: e, nem, não só... mas também.
  - **Adversativas**: mas, porém, contudo, todavia, entretanto, no entanto.
  - **Alternativas**: ou... ou, ora... ora, quer... quer.
  - **Conclusivas**: logo, portanto, por isso, pois (**depois** do verbo: "Estudou; passará, **pois**").
  - **Explicativas**: pois (**antes** do verbo), porque, que ("Venha, **que** está tarde").

### Subordinadas substantivas (função de substantivo; em geral "que" ou "se" integrantes)
Subjetiva ("É importante **que você estude**"), objetiva direta ("Quero **que você passe**"), objetiva indireta ("Lembre-se **de que a prova é domingo**"), completiva nominal ("Tenho certeza **de que vou passar**"), predicativa ("O certo é **que ela passará**") e apositiva ("Só peço isto: **que estude**").

### Subordinadas adjetivas (função de adjunto adnominal; introduzidas por pronome relativo)
- **Restritiva**: sem vírgula, **restringe** o antecedente: "Os alunos **que estudaram** passaram" (só os que estudaram).
- **Explicativa**: entre vírgulas, **generaliza**: "Os alunos, **que estudaram**, passaram" (todos estudaram). A vírgula muda o sentido — pegadinha frequente.

### Subordinadas adverbiais (função de adjunto adverbial) — memorize as conjunções
Causal (porque, como, já que), consecutiva (tão... **que**), condicional (se, caso, desde que), concessiva (embora, ainda que, mesmo que), comparativa (como, mais... do que), conformativa (conforme, segundo, consoante), final (para que, a fim de que), proporcional (à medida que, à proporção que), temporal (quando, enquanto, assim que, logo que).

### Reduzidas
Sem conectivo, com verbo em forma nominal: **infinitivo** ("É importante **estudar**"), **gerúndio** ("**Estudando**, passará" = se estudar), **particípio** ("**Terminada** a prova, saímos" = quando terminou). Para classificar, desenvolva: troque pela forma com conectivo.`,
    fontes: [BE_PORT, SO_PORT],
    questoes: [
      {
        id: 'LP8-1',
        nivel: 1,
        enunciado: 'Em "Estudou bastante, mas não foi aprovada", a segunda oração é coordenada sindética:',
        alternativas: ['adversativa', 'aditiva', 'conclusiva', 'explicativa', 'alternativa'],
        explicacao: '"Mas" expressa oposição: adversativa.',
        porqueErradas: [
          'Aditiva soma (e, nem).',
          'Conclusiva: logo, portanto.',
          'Explicativa: pois (antes do verbo), porque.',
          'Alternativa: ou... ou.',
        ],
      },
      {
        id: 'LP8-2',
        nivel: 1,
        enunciado: 'A oração destacada em "Quero QUE VOCÊ SEJA APROVADA" é subordinada substantiva:',
        alternativas: ['objetiva direta', 'subjetiva', 'objetiva indireta', 'predicativa', 'completiva nominal'],
        explicacao: '"Querer" é transitivo direto; a oração funciona como seu objeto direto ("quero isso").',
        porqueErradas: [
          'Subjetiva funciona como sujeito ("É bom que...").',
          'Exigiria preposição.',
          'Viria após verbo de ligação.',
          'Completaria um nome, não um verbo.',
        ],
      },
      {
        id: 'LP8-3',
        nivel: 2,
        enunciado: 'Compare: (I) "Os candidatos que estudaram passaram." (II) "Os candidatos, que estudaram, passaram." É correto afirmar:',
        alternativas: [
          'Em I, apenas parte dos candidatos estudou; em II, todos estudaram.',
          'Em I e II o sentido é idêntico; a vírgula é opcional.',
          'Em I, todos estudaram; em II, apenas parte.',
          'I é explicativa e II é restritiva.',
          'Ambas são orações substantivas.',
        ],
        explicacao: 'Restritiva (sem vírgula) restringe o grupo; explicativa (com vírgulas) atribui a característica a todos.',
        porqueErradas: [
          'A vírgula muda o sentido.',
          'Inverte os sentidos.',
          'Inverte as classificações.',
          'São adjetivas (pronome relativo "que").',
        ],
      },
      {
        id: 'LP8-4',
        nivel: 2,
        enunciado: 'Em "À medida que estudava, sentia-se mais segura", a oração destacada é subordinada adverbial:',
        alternativas: ['proporcional', 'temporal', 'causal', 'conformativa', 'final'],
        explicacao: '"À medida que" indica proporção: quanto mais estudava, mais segura.',
        porqueErradas: [
          'Temporal: quando, enquanto.',
          'Causal: porque, como, já que.',
          'Conformativa: conforme, segundo.',
          'Final: para que.',
        ],
      },
      {
        id: 'LP8-5',
        nivel: 3,
        enunciado: 'Em "Estudou tanto que passou em primeiro lugar", a oração "que passou em primeiro lugar" é:',
        alternativas: ['subordinada adverbial consecutiva', 'subordinada adverbial causal', 'coordenada explicativa', 'subordinada adjetiva restritiva', 'subordinada substantiva objetiva direta'],
        explicacao: 'A estrutura "tanto... que" expressa consequência: consecutiva.',
        porqueErradas: [
          'A causa é "estudou tanto"; a oração em destaque é o efeito.',
          'Não há conjunção explicativa.',
          '"Que" não é pronome relativo aqui (não retoma substantivo).',
          'Não completa verbo transitivo.',
        ],
      },
      {
        id: 'LP8-6',
        nivel: 3,
        enunciado: 'Desenvolvendo a oração reduzida em "Terminada a prova, os candidatos saíram", obtém-se uma oração subordinada adverbial:',
        alternativas: ['temporal: "Quando a prova terminou"', 'concessiva: "Embora a prova terminasse"', 'final: "Para que a prova terminasse"', 'condicional: "Se a prova terminar"', 'causal: "Porque a prova terminará"'],
        explicacao: 'O particípio indica momento: "quando a prova terminou" — temporal.',
        porqueErradas: [
          'Não há ideia de concessão.',
          'Não há finalidade.',
          'O fato já ocorreu; não é hipótese.',
          'Tempo verbal e relação incompatíveis.',
        ],
      },
    ],
  },
  {
    id: 'LP9',
    disciplina: 'LP',
    titulo: 'Sinais de pontuação',
    ementa: 'Sinais de Pontuação: vírgula, ponto-e-vírgula, dois-pontos, ponto final, ponto de interrogação, ponto de exclamação, reticências, parênteses, travessão, aspas, colchetes, asterisco, parágrafo.',
    semana: 4,
    texto: `### Vírgula — a regra de ouro
**Não se separa por vírgula** sujeito do verbo, verbo do complemento, nome do complemento nominal. "Os candidatos, chegaram" (com vírgula entre sujeito e verbo) está **errado**. A ordem direta (sujeito + verbo + complementos + adjuntos) dispensa vírgula.

**Usa-se vírgula para:**
- Separar **elementos de uma enumeração**: "Estudou Português, Legislação e Geografia".
- Isolar **aposto** e **vocativo**: "Ana, minha irmã, passou"; "Ana, venha cá".
- Isolar **adjunto adverbial deslocado** (antecipado ou intercalado), sobretudo se longo: "**Na semana passada**, estudamos clima". Se curto, é facultativa ("Ontem estudei" / "Ontem, estudei").
- Isolar **expressões explicativas/retificativas**: isto é, ou seja, por exemplo, aliás.
- Indicar **elipse** (omissão) do verbo: "Ela estudou Geografia; eu, História".
- Separar **orações coordenadas** (exceto em geral as aditivas com "e" de mesmo sujeito): "Estudou, mas não passou". Com "e" de sujeitos diferentes ou com valor adversativo, usa-se: "Ele estudou, e ela descansou".
- Isolar **orações adjetivas explicativas** (LP8) e **adverbiais antepostas**: "Quando a prova acabar, sairemos".
- Isolar **conjunções intercaladas**: "Ela, **porém**, não desistiu".
- Separar **local de data**: "Mogi Guaçu, 13 de dezembro de 2026".

### Os outros sinais
- **Ponto e vírgula**: separa itens de enumeração longa ou já com vírgulas internas; separa orações coordenadas extensas; usado em incisos de leis.
- **Dois-pontos**: anuncia enumeração, citação, explicação ou síntese: "Só faltava uma coisa: coragem".
- **Ponto final**: encerra frase declarativa; também em abreviaturas.
- **Interrogação** (pergunta direta) e **exclamação** (emoção, ordem, espanto). Pergunta **indireta** não leva ponto de interrogação ("Perguntou se ela vinha.").
- **Reticências**: interrupção, hesitação, suspense, ou supressão de trecho em citação — nesse caso entre **parênteses ou colchetes**: (...) ou [...].
- **Parênteses**: informações acessórias, explicações, datas, siglas.
- **Travessão**: introduz fala de personagem no discurso direto; isola expressões (como dupla vírgula, com mais ênfase).
- **Aspas**: citações textuais, estrangeirismos, ironia, títulos.
- **Colchetes**: intervenção de quem cita dentro de uma citação; supressões [...].
- **Asterisco**: remete a nota de rodapé; substitui nome que não se quer citar.
- **Parágrafo** (§): em leis, indica subdivisão de artigo; no texto, marca mudança de unidade de ideia.`,
    fontes: [BE_PORT, SO_PORT],
    questoes: [
      {
        id: 'LP9-1',
        nivel: 1,
        enunciado: 'Assinale a frase pontuada corretamente.',
        alternativas: [
          'Os candidatos aprovados serão convocados pelo site.',
          'Os candidatos aprovados, serão convocados pelo site.',
          'Os candidatos, aprovados serão convocados pelo site.',
          'Os candidatos aprovados serão, convocados pelo site.',
          'Os candidatos aprovados serão convocados, pelo site.',
        ],
        explicacao: 'Ordem direta: não se separa sujeito do verbo nem verbo de seus complementos.',
        porqueErradas: [
          'Vírgula separando sujeito do verbo.',
          'Vírgula separa adjunto do núcleo do sujeito sem motivo.',
          'Vírgula separa locução verbal.',
          'Vírgula separa termo curto em ordem direta sem justificativa (desaconselhada).',
        ],
      },
      {
        id: 'LP9-2',
        nivel: 1,
        enunciado: 'Em "Ela estudou Geografia; eu, História", a vírgula indica:',
        alternativas: ['omissão do verbo (elipse)', 'aposto', 'vocativo', 'adjunto adverbial deslocado', 'enumeração'],
        explicacao: 'A vírgula marca a supressão de "estudei".',
        porqueErradas: [
          '"História" não explica "eu".',
          'Não há chamamento.',
          '"História" não é circunstância.',
          'Não há lista de elementos de mesma função.',
        ],
      },
      {
        id: 'LP9-3',
        nivel: 2,
        enunciado: 'Os dois-pontos estão empregados para anunciar uma EXPLICAÇÃO em:',
        alternativas: [
          'O resultado foi claro: ela estava preparada.',
          'Comprei: cadernos, canetas.',
          'Mogi Guaçu: 13 de dezembro.',
          'Ela disse: e saiu.',
          'Estudou: muito.',
        ],
        explicacao: 'O trecho após os dois-pontos explica "o resultado".',
        porqueErradas: [
          'Dois-pontos entre verbo e objeto direto, sem anunciar enumeração formal, quebra a ordem direta.',
          'Data separa-se do local por vírgula.',
          'Uso sem sentido: nada é anunciado.',
          'Separa verbo de advérbio sem motivo.',
        ],
      },
      {
        id: 'LP9-4',
        nivel: 2,
        enunciado: 'Na frase "Ela, porém, não desistiu", as vírgulas isolam:',
        alternativas: ['conjunção intercalada', 'aposto', 'vocativo', 'oração adjetiva explicativa', 'sujeito'],
        explicacao: 'Conjunção adversativa deslocada para o meio da oração deve ficar entre vírgulas.',
        porqueErradas: [
          '"Porém" não explica "ela".',
          'Não há chamamento.',
          'Não há oração (falta verbo).',
          'O sujeito é "ela", e não pode ser isolado do verbo.',
        ],
      },
      {
        id: 'LP9-5',
        nivel: 3,
        enunciado: 'Ao citar um trecho de lei e suprimir uma parte do meio, o autor deve indicar a supressão com:',
        alternativas: ['reticências entre colchetes ou parênteses: [...] ou (...)', 'asterisco', 'travessão duplo', 'aspas simples', 'ponto e vírgula'],
        explicacao: 'Supressão em citação marca-se com (...) ou [...].',
        porqueErradas: [
          'Asterisco remete a nota.',
          'Travessão isola expressões.',
          'Aspas simples marcam citação dentro de citação.',
          'Ponto e vírgula separa orações/itens.',
        ],
      },
      {
        id: 'LP9-6',
        nivel: 3,
        enunciado: 'A alteração de pontuação que MUDA o sentido da frase original "Os professores que chegaram atrasados perderam a reunião" é:',
        alternativas: [
          'Os professores, que chegaram atrasados, perderam a reunião.',
          'Os professores que chegaram atrasados perderam a reunião!',
          'Os professores que chegaram atrasados perderam a reunião...',
          'Os professores que chegaram atrasados — perderam a reunião.',
          'Os professores que chegaram atrasados perderam, a reunião.',
        ],
        explicacao: 'Com vírgulas, a oração adjetiva passa a explicativa: TODOS os professores chegaram atrasados. Muda o sentido.',
        porqueErradas: [
          'Exclamação muda a entonação, não o conteúdo.',
          'Reticências sugerem continuidade, não mudam quem perdeu.',
          'Travessão separando sujeito do verbo é erro, não mudança de sentido.',
          'Erro gramatical (verbo separado do objeto), não outra leitura.',
        ],
      },
    ],
  },
  {
    id: 'LP10',
    disciplina: 'LP',
    titulo: 'Concordância nominal e verbal',
    ementa: 'Sintaxe de concordância – nominal e verbal.',
    semana: 5,
    texto: `### Concordância verbal — regra geral
O verbo concorda com o **sujeito** em número e pessoa, **esteja onde estiver**. A banca adora o sujeito **posposto**: "**Faltam** dez dias para a prova" (dez dias faltam). "**Existem** vagas" (vagas existem).

### Casos especiais que mais caem
- **Haver** (existir, acontecer, tempo decorrido): **impessoal**, fica no **singular**: "**Havia** muitos candidatos", "**Houve** problemas". E contamina o auxiliar: "**Deve haver** vagas" (não "devem haver").
- **Fazer** (tempo/clima): singular: "**Faz** dois anos".
- **Existir**, **ocorrer**, **acontecer**, **faltar**, **bastar**: são **pessoais**, concordam: "**Ocorreram** falhas".
- **Sujeito composto anteposto**: plural ("O professor e a aluna **chegaram**"). **Posposto**: plural ou concorda com o mais próximo ("**Chegou/Chegaram** o professor e a aluna").
- **Pessoas diferentes**: prevalece a 1ª sobre a 2ª e 3ª; a 2ª sobre a 3ª: "Eu e você **iremos**".
- **Um dos que**: plural é o preferível ("Ela é **uma das que** mais **estudam**").
- **Porcentagem**: concorda com o numeral ou com o termo especificador: "**1%** dos alunos **faltou/faltaram**"; "**30%** da turma **faltou/faltaram**".
- **Nomes no plural** com artigo: plural ("**Os Estados Unidos** são..."); sem artigo: singular ("Minas Gerais **é**...").
- **Voz passiva sintética**: verbo concorda com o sujeito paciente: "**Vendem-se** casas", "**Alugam-se** salas". Com VTI + se (índice de indeterminação): singular: "**Precisa-se** de professores", "**Trata-se** de questões difíceis".
- **Verbo ser**: concorda preferencialmente com o predicativo em casos como horas e datas ("**São** duas horas", "**É** uma hora"), e com a pessoa ("O culpado **sou** eu").

### Concordância nominal
Artigo, adjetivo, pronome e numeral concordam com o substantivo. Casos especiais:
- **Adjetivo posposto a dois substantivos**: concorda com o mais próximo ou vai ao plural (masculino prevalece): "Língua e literatura **portuguesa/portuguesas**".
- **Anteposto**: concorda com o mais próximo: "**Bela** casa e jardim".
- **Anexo, incluso, obrigado, mesmo, próprio, quite**: concordam: "Seguem **anexas** as fotos", "Ela disse: **obrigada**", "Elas **mesmas** fizeram".
- **Meio**: advérbio (= um pouco) é **invariável**: "Ela está **meio** cansada"; numeral (= metade) concorda: "**meia** hora".
- **Bastante**: adjetivo/pronome varia ("**bastantes** questões"), advérbio não ("estudaram **bastante**").
- **É proibido / é necessário / é bom**: invariável sem artigo ("**É proibido** entrada"), concorda com artigo ("**É proibida a** entrada").
- **Menos** e **alerta**: invariáveis ("**menos** pessoas").`,
    fontes: [BE_PORT, SO_PORT],
    questoes: [
      {
        id: 'LP10-1',
        nivel: 1,
        enunciado: 'Está de acordo com a norma culta:',
        alternativas: ['Houve muitos problemas na aplicação da prova.', 'Houveram muitos problemas na aplicação da prova.', 'Haviam muitos candidatos na fila.', 'Devem haver vagas remanescentes.', 'Fazem dois anos que estudo para concursos.'],
        explicacao: '"Haver" no sentido de existir/ocorrer é impessoal: singular.',
        porqueErradas: [
          '"Houveram" é erro: haver impessoal.',
          '"Haviam" é erro pelo mesmo motivo.',
          'O auxiliar de "haver" impessoal fica no singular: "deve haver".',
          '"Fazer" indicando tempo é impessoal: "faz dois anos".',
        ],
      },
      {
        id: 'LP10-2',
        nivel: 1,
        enunciado: 'Assinale a alternativa correta quanto à concordância nominal.',
        alternativas: ['Seguem anexas as cópias dos documentos.', 'Segue anexo as cópias dos documentos.', 'Ela ficou meia preocupada.', 'É proibida entrada de celulares.', 'Elas mesmo organizaram a formatura.'],
        explicacao: '"Anexo" concorda com o substantivo: anexas as cópias.',
        porqueErradas: [
          'Verbo e adjetivo deveriam ir ao plural feminino.',
          '"Meio" (= um pouco) é advérbio invariável.',
          'Sem artigo, "é proibido" fica invariável: "É proibido entrada".',
          '"Mesmo" concorda: "elas mesmas".',
        ],
      },
      {
        id: 'LP10-3',
        nivel: 2,
        enunciado: 'A concordância verbal está correta em:',
        alternativas: ['Faltam apenas três semanas para a prova.', 'Falta apenas três semanas para a prova.', 'Existe muitas dúvidas sobre o edital.', 'Ocorreu vários atrasos na entrega.', 'Basta duas questões para a aprovação.'],
        explicacao: 'O sujeito posposto "três semanas" leva o verbo ao plural.',
        porqueErradas: [
          'Sujeito plural exige "faltam".',
          '"Existir" é pessoal: "existem".',
          '"Ocorrer" é pessoal: "ocorreram".',
          '"Bastar" concorda: "bastam duas questões".',
        ],
      },
      {
        id: 'LP10-4',
        nivel: 2,
        enunciado: 'Assinale a frase em que o verbo deve ficar OBRIGATORIAMENTE no singular.',
        alternativas: ['Precisa-se de professores de Geografia.', 'Vende-se casas na região.', 'Aluga-se salas comerciais.', 'Corrigiu-se as provas ontem.', 'Publicou-se os editais.'],
        explicacao: 'Com verbo transitivo indireto ("precisar de"), o "se" indetermina o sujeito e o verbo fica no singular.',
        porqueErradas: [
          'Voz passiva sintética: "vendem-se casas".',
          'Voz passiva sintética: "alugam-se salas".',
          'Voz passiva sintética: "corrigiram-se as provas".',
          'Voz passiva sintética: "publicaram-se os editais".',
        ],
      },
      {
        id: 'LP10-5',
        nivel: 3,
        enunciado: 'Considere: I. "Eu e você iremos à prova." II. "Os Estados Unidos são uma potência." III. "Minas Gerais possui muitas cidades." IV. "Mais de um candidato faltaram." Estão corretas:',
        alternativas: ['I, II e III, apenas', 'I e IV, apenas', 'II e IV, apenas', 'I, II, III e IV', 'III e IV, apenas'],
        explicacao: 'I: 1ª pessoa prevalece. II: nome plural com artigo → plural. III: sem artigo → singular. IV: "mais de um" pede singular ("faltou").',
        porqueErradas: [
          'IV está errada.',
          'IV está errada e III está correta.',
          'IV está errada.',
          'IV está errada e I/II estão corretas.',
        ],
      },
      {
        id: 'LP10-6',
        nivel: 3,
        enunciado: 'Em relação ao verbo "ser", está correta a frase:',
        alternativas: ['Hoje são 13 de dezembro, dia da prova.', 'Já é duas horas da tarde.', 'O culpado é eu.', 'Era meio-dia e meia, e já são tarde.', 'Daqui à escola é dois quilômetros.'],
        explicacao: 'Em datas, "ser" concorda com o numeral: "são 13 de dezembro" (ou "é dia 13"). Horas e datas puxam a concordância.',
        porqueErradas: [
          'Horas: "são duas horas".',
          'Com pronome pessoal, concorda com a pessoa: "o culpado sou eu".',
          '"Já é tarde": "tarde" não é plural.',
          'Distância no plural: "são dois quilômetros".',
        ],
      },
    ],
  },
  {
    id: 'LP11',
    disciplina: 'LP',
    titulo: 'Regência nominal e verbal',
    ementa: 'Regência nominal e verbal.',
    semana: 5,
    texto: `**Regência** é a relação entre um termo regente (verbo ou nome) e seu complemento — com ou sem preposição. Muda o sentido e dita a crase.

### Verbos que mais caem
- **Assistir**: no sentido de **ver, presenciar** → transitivo indireto (**a**): "Assisti **ao** filme / **à** aula". No sentido de **ajudar, dar assistência** → transitivo direto: "O médico assistiu **o** paciente". No sentido de **caber, pertencer** → TI: "Esse direito assiste **ao** aluno". Morar (assistir em) é arcaico.
- **Aspirar**: **desejar** → TI (a): "Aspiro **ao** cargo". **Respirar/inalar** → TD: "Aspirou **o** ar puro".
- **Visar**: **pretender** → TI (a): "Visa **ao** sucesso" (a norma moderna já aceita sem preposição diante de infinitivo); **mirar** ou **dar visto** → TD: "Visou **o** alvo", "visou **o** cheque".
- **Obedecer / desobedecer**: TI: "Obedeça **às** regras do edital".
- **Preferir**: TD e TI, **sem** "mais" e **sem** "do que": "Prefiro Geografia **a** História" (e não "prefiro mais... do que").
- **Implicar** (acarretar): TD: "A falta **implica** eliminação" (não "implica em", embora seja muito usado).
- **Chegar / ir**: preposição **a** (não "em"): "Cheguei **à** escola", "Vou **ao** cinema".
- **Namorar**: TD: "Ela namora **o** colega".
- **Pagar / perdoar**: TD para coisa, TI para pessoa: "Paguei **a conta ao** caixa".
- **Lembrar / esquecer**: TD sem pronome ("Lembrei **o** prazo") ou TI com pronome ("Lembrei-**me do** prazo").
- **Informar, avisar, certificar**: admitem duas construções: "informar **algo a alguém**" ou "informar **alguém de/sobre algo**".
- **Responder**: TI para o que se responde: "Respondi **às** questões".
- **Morar, residir, situar-se**: preposição **em**: "Reside **na** Rua X".

### Regência nominal (nomes com preposição fixa)
acessível **a**; ansioso **por/para**; apto **a/para**; atento **a**; capaz **de**; compatível **com**; contrário **a**; favorável **a**; habituado **a**; imune **a/de**; necessário **a**; preferível **a** (nunca "do que"); próximo **a/de**; residente **em**; respeito **a/por/com**; situado **em**; "em **relação a**".

### Pronome relativo + preposição
A preposição exigida pelo verbo **vai para antes do relativo**: "O cargo **a que** aspiro" (aspirar a); "A lei **de que** precisamos" (precisar de); "O filme **a que** assisti"; "O edital **em que** confio" (confiar **em**).`,
    fontes: [BE_PORT, SO_PORT, MICHAELIS],
    questoes: [
      {
        id: 'LP11-1',
        nivel: 1,
        enunciado: 'A regência verbal está correta em:',
        alternativas: ['Assisti ao vídeo sobre fusos horários.', 'Assisti o vídeo sobre fusos horários.', 'Prefiro mais Geografia do que História.', 'Cheguei na escola às sete horas.', 'Ela obedece o regulamento.'],
        explicacao: '"Assistir" (ver) é transitivo indireto: assistir a algo.',
        porqueErradas: [
          'No sentido de ver, exige preposição "a".',
          '"Preferir" não admite "mais" nem "do que": prefiro Geografia a História.',
          '"Chegar" rege "a": cheguei à escola.',
          '"Obedecer" é TI: obedece ao regulamento.',
        ],
      },
      {
        id: 'LP11-2',
        nivel: 1,
        enunciado: 'Em "Ela aspira ao cargo de professora", o verbo "aspirar" significa:',
        alternativas: ['desejar', 'respirar', 'sugar', 'cheirar', 'limpar'],
        explicacao: 'Com preposição "a" (TI), "aspirar" significa desejar, almejar.',
        porqueErradas: [
          'Respirar é TD (aspirar o ar), sem preposição.',
          'Sugar seria TD.',
          'Cheirar seria TD.',
          'Limpar (aspirar o pó) seria TD.',
        ],
      },
      {
        id: 'LP11-3',
        nivel: 2,
        enunciado: 'Assinale a alternativa correta quanto à regência nominal.',
        alternativas: ['A diretora é favorável ao novo projeto.', 'O candidato estava ansioso de saber o resultado.', 'Estudar cedo é preferível do que estudar tarde.', 'Ele é residente à Rua das Flores.', 'O conteúdo é compatível a o edital.'],
        explicacao: '"Favorável" rege a preposição "a".',
        porqueErradas: [
          '"Ansioso" rege "por" ou "para".',
          '"Preferível" rege "a": preferível a estudar tarde.',
          '"Residente" rege "em".',
          '"Compatível" rege "com".',
        ],
      },
      {
        id: 'LP11-4',
        nivel: 2,
        enunciado: 'Completa corretamente a frase "Este é o cargo ____ sempre aspirei":',
        alternativas: ['a que', 'que', 'de que', 'em que', 'cujo'],
        explicacao: 'Aspirar (desejar) rege "a": aspirei a ele → "a que aspirei".',
        porqueErradas: [
          'Falta a preposição exigida.',
          '"Aspirar" não rege "de".',
          '"Aspirar" não rege "em".',
          '"Cujo" indica posse.',
        ],
      },
      {
        id: 'LP11-5',
        nivel: 3,
        enunciado: 'Em qual frase o verbo "assistir" é TRANSITIVO DIRETO?',
        alternativas: ['O enfermeiro assistiu os feridos durante a noite.', 'Assistimos ao jogo pela televisão.', 'Esse direito assiste ao candidato.', 'Os alunos assistiram à palestra.', 'Todos assistiram ao desfile.'],
        explicacao: 'No sentido de prestar assistência, ajudar, "assistir" é transitivo direto.',
        porqueErradas: [
          'Ver/presenciar: TI.',
          'Caber/pertencer: TI.',
          'Ver/presenciar: TI.',
          'Ver/presenciar: TI.',
        ],
      },
      {
        id: 'LP11-6',
        nivel: 3,
        enunciado: 'Assinale a frase INCORRETA quanto à regência.',
        alternativas: ['Lembrei do prazo de inscrição.', 'Lembrei-me do prazo de inscrição.', 'Lembrei o prazo de inscrição.', 'Esqueci-me da senha.', 'Esqueci a senha.'],
        explicacao: 'Sem pronome, "lembrar" é TD (lembrei o prazo); com preposição exige o pronome (lembrei-me do prazo). "Lembrei do" mistura as duas construções — norma culta rejeita.',
        porqueErradas: [
          'Correta: pronominal + preposição.',
          'Correta: transitivo direto.',
          'Correta: pronominal + preposição.',
          'Correta: transitivo direto.',
        ],
      },
    ],
  },
  {
    id: 'LP12',
    disciplina: 'LP',
    titulo: 'Sintaxe de colocação (colocação pronominal)',
    ementa: 'Sintaxe de colocação.',
    semana: 5,
    texto: `Trata da posição dos **pronomes oblíquos átonos** (me, te, se, o, a, lhe, nos, vos, os, as, lhes) em relação ao verbo.

- **Próclise**: antes do verbo ("Não **me** disseram").
- **Ênclise**: depois do verbo ("Disseram-**me**").
- **Mesóclise**: no meio do verbo, só no **futuro do presente** e do **pretérito** ("Dir-**te**-ei", "Far-**se**-ia").

### Próclise é OBRIGATÓRIA quando há "atrator" antes do verbo
- **Palavras negativas**: não, nunca, jamais, ninguém, nada ("**Não se** esqueça").
- **Pronomes relativos**: "O livro **que me** deram".
- **Pronomes indefinidos**: "**Alguém me** chamou", "**Tudo se** resolveu".
- **Conjunções subordinativas**: "**Quando me** chamaram", "**embora se** esforce".
- **Advérbios** (sem vírgula depois): "**Aqui se** estuda", "**Sempre me** ajudou". Com vírgula, volta a ênclise: "Aqui, estuda-se".
- **Pronomes e advérbios interrogativos**: "**Quem te** contou?".
- **Orações optativas** (desejo): "**Deus te** abençoe".
- Preposição **em + gerúndio**: "**Em se** tratando de prova...".

### Ênclise é a regra quando não há atrator e:
- O verbo **inicia a oração** — a norma culta **não** admite pronome átono no início de período: "**Me** empresta" (coloquial) → "Empresta-**me**".
- Verbo no **imperativo afirmativo**: "Inscreva-**se** já".
- Verbo no **gerúndio** (sem "em"): "Saiu, despedindo-**se** de todos".
- Verbo no **infinitivo impessoal** regido de preposição "a": "Começou a dedicar-**se**" (aceita também próclise com outras preposições).

### Mesóclise
Futuro do presente ou do pretérito **sem atrator**: "Realizar-**se**-á a prova no dia 13". Com atrator, próclise: "**Não se** realizará".

### Locuções verbais
Sem atrator, o pronome pode ficar **depois do auxiliar** (com hífen) ou **depois do principal**: "Vou-**lhe** dizer" / "Vou dizer-**lhe**". Com atrator: "Não **lhe** vou dizer" / "Não vou dizer-**lhe**". Com particípio, nunca depois do particípio: "Tinha-**se** formado" (não "tinha formado-se").

### Atenção com o/a/os/as depois de certas terminações
Verbo terminado em **r, s, z** → o pronome vira **lo, la**: "fazer + o = fazê-**lo**", "fiz + o = fi-**lo**". Terminado em **som nasal** → **no, na**: "dão + o = dão-**no**", "fizeram + a = fizeram-**na**".`,
    fontes: [BE_PORT, SO_PORT],
    questoes: [
      {
        id: 'LP12-1',
        nivel: 1,
        enunciado: 'A colocação pronominal está correta em:',
        alternativas: ['Não me esqueça do prazo.', 'Me empresta o caderno?', 'Não esqueça-me do prazo.', 'Ninguém contou-me a novidade.', 'Quando chamaram-me, eu saí.'],
        explicacao: 'A palavra negativa "não" atrai o pronome: próclise obrigatória.',
        porqueErradas: [
          'Não se inicia período com pronome átono na norma culta.',
          'O "não" exige próclise.',
          '"Ninguém" (indefinido) exige próclise.',
          'Conjunção subordinativa "quando" exige próclise.',
        ],
      },
      {
        id: 'LP12-2',
        nivel: 1,
        enunciado: '"Realizar-se-á a prova no dia 13." O pronome está em:',
        alternativas: ['mesóclise', 'próclise', 'ênclise', 'apossínclise', 'posição incorreta'],
        explicacao: 'Verbo no futuro do presente sem atrator: mesóclise.',
        porqueErradas: [
          'Próclise é antes do verbo.',
          'Ênclise é depois do verbo inteiro.',
          'Apossínclise é intercalação de palavra entre pronome e verbo, rara.',
          'A posição está correta.',
        ],
      },
      {
        id: 'LP12-3',
        nivel: 2,
        enunciado: 'Assinale a alternativa em que a próclise é OBRIGATÓRIA.',
        alternativas: ['O livro que me emprestaram é ótimo.', 'Entreguei-lhe o relatório.', 'Inscreva-se até o dia 19.', 'Despediu-se, saindo apressada.', 'Ela começou a dedicar-se ao estudo.'],
        explicacao: 'O pronome relativo "que" atrai o pronome átono.',
        porqueErradas: [
          'Sem atrator: ênclise adequada.',
          'Imperativo afirmativo: ênclise.',
          'Sem atrator: ênclise.',
          'Infinitivo regido de "a": ênclise aceita.',
        ],
      },
      {
        id: 'LP12-4',
        nivel: 2,
        enunciado: 'Ao unir "fazer" e "o", obtém-se, conforme a norma culta:',
        alternativas: ['fazê-lo', 'fazer-o', 'fazer-lo', 'faze-o', 'fazê-no'],
        explicacao: 'Verbo terminado em r perde o r e o pronome vira "lo": fazê-lo.',
        porqueErradas: [
          'O "o" vira "lo" após r.',
          'O r cai.',
          'Falta o acento e a forma é "lo".',
          '"No" é usado após som nasal.',
        ],
      },
      {
        id: 'LP12-5',
        nivel: 3,
        enunciado: 'Assinale a alternativa que apresenta ERRO de colocação pronominal.',
        alternativas: ['Tinha formado-se em Geografia em 2015.', 'Tinha-se formado em Geografia em 2015.', 'Não se tinha formado ainda.', 'Em se tratando de cartografia, ela é ótima.', 'Aqui se estuda muito.'],
        explicacao: 'O pronome nunca fica depois de particípio.',
        porqueErradas: [
          'Correta: pronome após o auxiliar.',
          'Correta: próclise pelo "não".',
          'Correta: "em + gerúndio" exige próclise.',
          'Correta: advérbio sem vírgula atrai.',
        ],
      },
      {
        id: 'LP12-6',
        nivel: 3,
        enunciado: 'Considerando a norma culta, a frase "Não ____ a prova se houver chuva forte" é completada corretamente por:',
        alternativas: ['se adiará', 'adiar-se-á', 'adiará-se', 'se-adiará', 'adiar-se-ia'],
        explicacao: 'Com atrator ("não"), mesmo no futuro do presente usa-se próclise: "Não se adiará".',
        porqueErradas: [
          'Mesóclise só sem atrator.',
          'Ênclise com futuro é sempre incorreta.',
          'Não há hífen na próclise.',
          'Futuro do pretérito altera o tempo e ignora o atrator.',
        ],
      },
    ],
  },
  {
    id: 'LP13',
    disciplina: 'LP',
    titulo: 'Modos e tempos verbais; formas nominais',
    ementa: 'Modos e tempos verbais, infinitivo, gerúndio e particípio.',
    semana: 5,
    texto: `### Modos
- **Indicativo**: fato certo, real ("Ela **estuda**").
- **Subjuntivo**: dúvida, hipótese, desejo — geralmente em oração subordinada ("Espero que ela **estude**", "Se ela **estudasse**...", "Quando ela **estudar**...").
- **Imperativo**: ordem, pedido, conselho ("**Estude**!"). O afirmativo se forma do presente do indicativo (tu e vós, sem o s) e do presente do subjuntivo (demais pessoas); o negativo, todo do presente do subjuntivo ("Não **estudes**").

### Tempos do indicativo
- **Presente**: estudo. **Pretérito perfeito**: estudei (ação concluída). **Pretérito imperfeito**: estudava (ação habitual/contínua no passado). **Pretérito mais-que-perfeito**: estudara (passado anterior a outro passado — forma composta: tinha estudado). **Futuro do presente**: estudarei. **Futuro do pretérito**: estudaria (condição, polidez, hipótese — muito usado em notícias para fato não confirmado).

### Tempos do subjuntivo
**Presente** (que eu estude), **pretérito imperfeito** (se eu estudasse) e **futuro** (quando/se eu estudar). Correlação clássica: "Se eu **estudasse**, **passaria**" (imperfeito do subjuntivo + futuro do pretérito); "Se eu **estudar**, **passarei**" (futuro do subjuntivo + futuro do presente).

### Formas nominais
- **Infinitivo** (estudar): impessoal ou **pessoal** (flexionado: "É bom **estudarmos**"). Usa-se o flexionado sobretudo quando o sujeito é diferente do da oração principal ou para clareza.
- **Gerúndio** (estudando): ação em curso, simultaneidade. Cuidado com o **gerundismo** ("vou estar enviando"), condenado na norma culta.
- **Particípio** (estudado): ação concluída; forma tempos compostos e voz passiva. **Abundantes** têm dois particípios: o **regular** (-ado/-ido) com **ter/haver** e o **irregular** com **ser/estar**: "tinha **aceitado**" / "foi **aceito**"; "tinha **elegido**" / "foi **eleito**"; "tinha **imprimido**" / "foi **impresso**". Alguns só têm o irregular: **pago**, **ganho**, **gasto** são aceitos com ter também ("tinha pago").

### Verbos irregulares que pegam
- **Ver** x **vir**: futuro do subjuntivo de **ver** = "quando eu **vir**"; de **vir** = "quando eu **vier**". "Se eu **vir** o resultado" (não "ver").
- **Intervir, convir, provir** seguem **vir**: "ele **interveio**", "se ele **intervier**".
- **Manter, deter, conter, obter** seguem **ter**: "se ele **mantiver**", "quando **obtivermos**".
- **Requerer** não segue **querer**: "eu **requeiro**", "ele **requereu**".
- **Reaver**: só se conjuga onde **haver** tem "v": "nós **reavemos**", "eu **reouve**".`,
    fontes: [BE_PORT, SO_PORT, { titulo: 'Michaelis — conjugação no dicionário (indicado no edital)', url: 'https://michaelis.uol.com.br/' }],
    questoes: [
      {
        id: 'LP13-1',
        nivel: 1,
        enunciado: 'Em "Se eu estudasse mais, passaria", os verbos estão, respectivamente, no:',
        alternativas: [
          'pretérito imperfeito do subjuntivo e futuro do pretérito do indicativo',
          'presente do subjuntivo e futuro do presente do indicativo',
          'pretérito perfeito do indicativo e futuro do pretérito',
          'futuro do subjuntivo e futuro do presente do indicativo',
          'pretérito imperfeito do indicativo e presente do indicativo',
        ],
        explicacao: '"Estudasse" (se eu -sse) é imperfeito do subjuntivo; "passaria" (-ria) é futuro do pretérito.',
        porqueErradas: [
          'Presente do subjuntivo seria "estude".',
          '"Estudasse" não é indicativo.',
          'Futuro do subjuntivo seria "estudar".',
          'Imperfeito do indicativo seria "estudava".',
        ],
      },
      {
        id: 'LP13-2',
        nivel: 1,
        enunciado: 'Está correta a forma verbal em:',
        alternativas: ['Quando eu vir o resultado, avisarei.', 'Quando eu ver o resultado, avisarei.', 'Se ele vir amanhã, faremos a revisão.', 'Se ele manter o ritmo, passará.', 'Quando ele intervir, a reunião acabará.'],
        explicacao: 'Futuro do subjuntivo de "ver" é "vir".',
        porqueErradas: [
          '"Ver" no futuro do subjuntivo é "vir".',
          'O verbo "vir" no futuro do subjuntivo é "vier".',
          '"Manter" segue "ter": "mantiver".',
          '"Intervir" segue "vir": "intervier".',
        ],
      },
      {
        id: 'LP13-3',
        nivel: 2,
        enunciado: 'Assinale a alternativa que usa corretamente o particípio.',
        alternativas: ['O candidato foi eleito representante.', 'O candidato foi elegido representante.', 'Eles tinham eleito o representante.', 'A prova foi imprimida ontem.', 'O pedido foi aceitado pela banca.'],
        explicacao: 'Com "ser/estar", usa-se o particípio irregular: foi eleito.',
        porqueErradas: [
          'Regular com "ser" é inadequado.',
          'Com "ter", usa-se o regular: tinham elegido.',
          'Com "ser": foi impressa.',
          'Com "ser": foi aceito.',
        ],
      },
      {
        id: 'LP13-4',
        nivel: 2,
        enunciado: 'Em "O ministro teria renunciado ao cargo", o futuro do pretérito exprime:',
        alternativas: ['incerteza sobre o fato, não confirmado', 'ordem', 'fato certo e concluído', 'ação habitual no passado', 'desejo do falante'],
        explicacao: 'O futuro do pretérito em notícias marca informação não confirmada.',
        porqueErradas: [
          'Ordem é imperativo.',
          'Fato certo seria "renunciou".',
          'Habitual seria imperfeito ("renunciava").',
          'Desejo usa subjuntivo optativo.',
        ],
      },
      {
        id: 'LP13-5',
        nivel: 3,
        enunciado: 'A forma "requeiro" pertence ao verbo:',
        alternativas: ['requerer, que não segue a conjugação de querer', 'requerer, que segue integralmente querer', 'requerer, verbo defectivo sem 1ª pessoa', 'requisitar, no presente do indicativo', 'querer, com prefixo de intensidade'],
        explicacao: 'Requerer: eu requeiro, ele requereu (e não "requis"). Não segue querer.',
        porqueErradas: [
          'Se seguisse, seria "requero" e "requis" — formas inexistentes.',
          'Tem 1ª pessoa: requeiro.',
          'Requisitar: eu requisito.',
          'É verbo próprio, não derivado com sentido de intensidade.',
        ],
      },
      {
        id: 'LP13-6',
        nivel: 3,
        enunciado: 'O imperativo NEGATIVO de "estudar" na 2ª pessoa do singular (tu) é:',
        alternativas: ['não estudes', 'não estuda', 'não estude', 'não estudas', 'não estudai'],
        explicacao: 'O imperativo negativo vem inteiro do presente do subjuntivo: que tu estudes → não estudes.',
        porqueErradas: [
          '"Estuda" é o afirmativo (tu).',
          '"Estude" é a forma de você (3ª pessoa).',
          '"Estudas" é presente do indicativo.',
          '"Estudai" é afirmativo de vós.',
        ],
      },
    ],
  },
]
