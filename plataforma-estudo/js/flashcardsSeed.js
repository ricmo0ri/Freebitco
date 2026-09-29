// Banco inicial de flashcards (frente/verso) pra revisão espaçada — dá um
// ponto de partida em cada disciplina pra quem abre a aba Flashcards pela
// primeira vez e encontra tudo vazio, em vez de precisar cadastrar cada
// cartão manualmente antes de conseguir revisar algo.
var FlashcardsSeed = (function () {
  var SEED_VERSION_ATUAL = 1;

  var CARDS = [
  {
    "territorio": "Ética",
    "front": "Quais atividades são consideradas privativas da advocacia, exigindo inscrição na OAB?",
    "back": "A postulação a órgãos do Poder Judiciário é, em regra, privativa de advogados. As principais exceções são o habeas corpus, que qualquer pessoa pode impetrar, e certas causas de pequeno valor nos Juizados Especiais Cíveis, em que a parte pode postular pessoalmente.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "Uma pessoa sem formação jurídica pode impetrar habeas corpus sem estar acompanhada de advogado?",
    "back": "Sim. O habeas corpus é uma exceção expressa ao exercício privativo da advocacia: qualquer pessoa pode impetrá-lo em favor próprio ou de terceiro, independentemente de capacidade postulatória.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "O que garante a inviolabilidade do escritório de advocacia como prerrogativa profissional?",
    "back": "Seus instrumentos de trabalho, correspondências, dados e comunicações relacionados ao exercício da profissão não podem ser devassados por autoridade. Havendo indícios de participação do próprio advogado em crime, eventual busca e apreensão deve ser acompanhada de representante da OAB.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "Onde o advogado deve ser recolhido preso antes do trânsito em julgado de sentença condenatória, segundo prerrogativa do Estatuto?",
    "back": "Em sala de Estado Maior e, na sua falta, em prisão domiciliar, e nunca em cela comum, como garantia funcional ligada ao exercício da profissão.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "Qual a diferença entre incompatibilidade e impedimento para o exercício da advocacia?",
    "back": "Incompatibilidade é a proibição total e permanente de exercer a advocacia enquanto durar a atividade que a origina, atingindo qualquer causa. Impedimento é uma vedação parcial: o advogado continua podendo advogar normalmente, só não pode atuar em situações específicas, como contra o órgão a que está vinculado.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "Cite um exemplo de situação que gera incompatibilidade com o exercício da advocacia.",
    "back": "O exercício de cargos ou funções que envolvam poder de polícia ou vinculação direta ao Poder Judiciário, como ocupar cargo de magistratura ou de membro do Ministério Público, entre outras hipóteses previstas em lei.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "Cite um exemplo de situação que gera impedimento (e não incompatibilidade) para advogar.",
    "back": "O servidor público que atua no órgão a que está vinculado fica impedido de advogar contra esse mesmo órgão, mas permanece livre para exercer a advocacia em outras causas, sem qualquer relação com sua função pública.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "Quais são as principais espécies de honorários advocatícios?",
    "back": "Os honorários contratuais, livremente ajustados entre advogado e cliente; os honorários sucumbenciais, fixados pelo juiz e devidos pela parte vencida ao advogado da parte vencedora; e os honorários arbitrados judicialmente quando não houver contrato prévio entre as partes.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "A quem pertencem os honorários de sucumbência fixados em juízo?",
    "back": "Pertencem ao advogado da parte vencedora, e não ao cliente. Têm natureza alimentar e constituem direito autônomo do advogado, distinto dos honorários contratuais que ele tenha ajustado com seu cliente.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "O que caracteriza a contratação de honorários na modalidade quota litis?",
    "back": "É o ajuste em que o pagamento do advogado fica vinculado, total ou parcialmente, ao resultado favorável da causa. É admitida eticamente, desde que formalizada por contrato escrito e sem que a participação recaia sobre a totalidade do direito obtido pelo cliente.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "O sigilo profissional do advogado é absoluto?",
    "back": "Não. É a regra essencial que sustenta a confiança entre advogado e cliente, mas admite exceções, como grave ameaça a direito à vida ou à honra, ou quando o próprio advogado precisa se defender de acusação feita pelo cliente.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "Correspondências trocadas entre advogados sobre entendimentos amigáveis relativos aos clientes podem ser usadas como prova em juízo?",
    "back": "Não, salvo autorização expressa de quem as escreveu. Essas comunicações são protegidas pelo sigilo profissional, justamente para não inibir tentativas de acordo entre as partes.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "Que exigência formal a sociedade de advogados precisa cumprir para funcionar regularmente?",
    "back": "O registro de seu ato constitutivo no Conselho Seccional da OAB em cuja base territorial estiver a sede, sendo vedado registrar sociedade que tenha sócio não inscrito regularmente como advogado.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "Um advogado pode integrar duas sociedades de advogados distintas ao mesmo tempo?",
    "back": "Não. É vedado ao advogado integrar mais de uma sociedade de advogados simultaneamente, ainda que com objetos ou áreas de atuação diferentes.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "Quais são as sanções disciplinares previstas no Estatuto da Advocacia, da mais branda à mais grave?",
    "back": "Censura, suspensão e exclusão dos quadros da OAB; a multa também pode ser aplicada, isoladamente ou cumulada com censura ou suspensão, conforme a gravidade da infração.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "O que caracteriza a censura como sanção disciplinar aplicada ao advogado?",
    "back": "É a sanção mais branda, cabível normalmente diante de infrações de menor gravidade ou cometidas pela primeira vez, podendo em certos casos ser convertida em advertência reservada, conforme as peculiaridades apuradas no processo disciplinar.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "Em que situações a pena de exclusão dos quadros da OAB tende a ser aplicada?",
    "back": "Tipicamente em caso de reincidência em infrações que já geraram suspensão, ou diante de fatos de extrema gravidade expressamente qualificados como causadores de exclusão, exigindo deliberação do Conselho Seccional.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "Perante qual órgão da OAB tramita o processo disciplinar contra um advogado, e quais garantias devem ser observadas?",
    "back": "Tramita perante o Tribunal de Ética e Disciplina do Conselho Seccional em que o advogado está inscrito, assegurando-se sempre contraditório e ampla defesa antes de qualquer decisão punitiva.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "Que tipo de atos o estagiário de advocacia inscrito na OAB pode praticar, em regra?",
    "back": "Pode praticar atos que não exigem assinatura de advogado, como retirar e devolver autos em cartório e obter certidões, além de atuar em conjunto com o advogado responsável ou em causa própria, sem possuir capacidade postulatória autônoma plena.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "front": "Quais características a publicidade da advocacia deve ter, segundo o Código de Ética e Disciplina?",
    "back": "Deve ser discreta, moderada e com finalidade meramente informativa, sendo vedadas a mercantilização da profissão, a captação indevida de clientela e a comparação ou promessa de resultado em relação a outros profissionais.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "front": "Qual a principal diferença entre jusnaturalismo e positivismo jurídico quanto à validade do Direito?",
    "back": "Para o jusnaturalismo, a validade do Direito depende de sua conformidade com princípios de justiça superiores, sejam eles naturais, racionais ou divinos. Para o positivismo jurídico, a validade decorre apenas de a norma ter sido produzida segundo o procedimento estabelecido pelo próprio ordenamento, independentemente de seu conteúdo ser justo.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "front": "O que é a norma fundamental (Grundnorm) na teoria de Hans Kelsen?",
    "back": "É um pressuposto lógico, não posto por nenhuma autoridade concreta, que confere validade à primeira constituição histórica de um ordenamento e, por consequência, a todo o sistema normativo dela derivado, sustentando a hierarquia entre as normas.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "front": "O que busca a Teoria Pura do Direito de Kelsen?",
    "back": "Propõe estudar o Direito isoladamente de considerações morais, políticas, sociológicas ou econômicas, concentrando-se exclusivamente na estrutura normativa e nas relações formais de validade entre as normas do ordenamento.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "front": "Segundo H.L.A. Hart, o que distingue um sistema jurídico de um simples conjunto de ordens apoiadas por ameaças?",
    "back": "A existência de regras secundárias, entre elas a regra de reconhecimento, que se combinam com as regras primárias de conduta e permitem identificar, alterar e aplicar o Direito de forma sistemática, servindo a regra de reconhecimento como critério último de validade do sistema.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "front": "Qual crítica Ronald Dworkin dirige ao positivismo jurídico representado por Hart?",
    "back": "Dworkin sustenta que o Direito não se resume a regras identificáveis por uma regra de reconhecimento; ele também é composto por princípios jurídicos que vinculam o julgador mesmo sem estarem positivados como regras, especialmente nos chamados casos difíceis (hard cases).",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "front": "Qual a diferença entre regras e princípios na teoria de Dworkin?",
    "back": "As regras se aplicam de modo tudo ou nada: ou incidem inteiramente sobre o caso ou não incidem. Os princípios possuem dimensão de peso e podem ser ponderados entre si, sendo aplicados em maior ou menor medida conforme as circunstâncias do caso concreto.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "front": "O que propõem a 'posição original' e o 'véu de ignorância' na teoria da justiça de John Rawls?",
    "back": "É um experimento mental em que indivíduos escolheriam os princípios de justiça de uma sociedade sem saber qual seria sua própria posição social, talentos ou concepção pessoal de bem, o que garantiria a escolha de princípios imparciais e justos para todos.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "front": "Qual a diferença entre pensamento zetético e pensamento dogmático, na distinção de Tercio Sampaio Ferraz Jr.?",
    "back": "O pensamento zetético problematiza e questiona suas próprias premissas, em busca de investigação aberta, característico da filosofia e das ciências. O pensamento dogmático parte de premissas fixadas como pontos inquestionáveis, viabilizando a decisão prática, sendo típico do raciocínio jurídico.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "front": "Para Platão, o que caracteriza a justiça na organização ideal da cidade (pólis)?",
    "back": "A justiça consiste na harmonia da cidade quando cada classe social, governantes, guerreiros e produtores, desempenha exatamente a função que lhe é própria, sem invadir a função das demais, em correspondência com as partes da alma humana.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "front": "Qual a diferença entre justiça distributiva e justiça corretiva em Aristóteles?",
    "back": "A justiça distributiva reparte bens, honras e encargos entre os membros da comunidade proporcionalmente a seu mérito ou contribuição. A justiça corretiva restabelece a igualdade violada nas relações entre particulares, tratando as partes como iguais, independentemente de mérito, como em trocas e reparação de danos.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "front": "Como Thomas Hobbes descreve o estado de natureza e sua relação com o contrato social?",
    "back": "Para Hobbes, o estado de natureza é marcado por guerra generalizada, já que os homens são movidos pelo interesse próprio. Para escapar dessa insegurança, os indivíduos celebram um pacto transferindo seus direitos a um soberano absoluto, garantindo ordem e paz.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "front": "Em que ponto Locke diverge de Hobbes quanto ao estado de natureza e à finalidade do governo?",
    "back": "Para Locke, o estado de natureza já é regido por uma lei natural que garante direitos como vida, liberdade e propriedade; o governo é instituído por contrato apenas para proteger melhor esses direitos preexistentes, podendo ser legitimamente destituído se os violar.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "front": "Qual o papel da 'vontade geral' na filosofia política de Rousseau?",
    "back": "É a expressão da soberania popular voltada ao bem comum, distinta da simples soma das vontades individuais. As leis legítimas devem expressar essa vontade geral, que fundamenta a legitimidade do poder político.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "front": "O que é o imperativo categórico na filosofia moral de Kant?",
    "back": "É um mandamento incondicional da razão prática que ordena agir apenas segundo máximas que se possa querer que se tornem lei universal, servindo como critério racional para avaliar a moralidade das ações, independentemente das consequências ou de desejos pessoais.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Qual a diferença entre ADI (ação direta de inconstitucionalidade) e ADC (ação declaratória de constitucionalidade)?",
    "back": "A ADI busca a declaração de inconstitucionalidade de lei ou ato normativo federal ou estadual; a ADC busca confirmar a constitucionalidade de lei ou ato normativo federal já em vigor. Ambas são julgadas originariamente pelo STF e possuem, em regra, os mesmos legitimados.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Qual a finalidade da ADPF (arguição de descumprimento de preceito fundamental) e quando ela é cabível?",
    "back": "A ADPF serve para evitar ou reparar lesão a preceito fundamental resultante de ato do Poder Público, e tem caráter subsidiário: só é cabível quando não houver outro meio eficaz de sanar a lesividade (por exemplo, quando não cabe ADI, como no caso de lei municipal ou de norma anterior à Constituição).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Qual a principal diferença entre controle difuso e controle concentrado de constitucionalidade?",
    "back": "No controle difuso, qualquer juiz ou tribunal pode declarar a inconstitucionalidade incidentalmente, no curso de um caso concreto, com efeitos em regra inter partes. No controle concentrado, a questão é levada diretamente a um tribunal (no plano federal, o STF), como pedido principal, com efeitos erga omnes.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "O que é a 'cláusula de reserva de plenário' no controle de constitucionalidade?",
    "back": "É a regra segundo a qual apenas pelo voto da maioria absoluta dos membros do tribunal (ou de seu órgão especial) pode ser declarada a inconstitucionalidade de lei ou ato normativo, vedando que órgãos fracionários (turmas ou câmaras) o façam isoladamente.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "O que é modulação de efeitos no controle de constitucionalidade?",
    "back": "É a possibilidade de o STF, por razões de segurança jurídica ou excepcional interesse social, restringir os efeitos da declaração de inconstitucionalidade ou determinar que ela só produza efeitos a partir do trânsito em julgado ou de outro momento futuro, exigindo quórum de dois terços dos seus membros.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Qual o requisito para concessão de habeas corpus?",
    "back": "O habeas corpus é cabível sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. É gratuito e pode ser impetrado por qualquer pessoa, em nome próprio ou em favor de outrem.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Para que serve o habeas data e quais são suas hipóteses de cabimento?",
    "back": "O habeas data serve para assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais ou de caráter público, e para a retificação de dados, quando não se prefira fazê-lo por processo sigiloso, judicial ou administrativo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Em que hipótese cabe mandado de segurança e o que o diferencia do habeas corpus?",
    "back": "O mandado de segurança protege direito líquido e certo, não amparado por habeas corpus ou habeas data, lesado ou ameaçado por ato de autoridade praticado com ilegalidade ou abuso de poder. Diferente do habeas corpus, que protege especificamente a liberdade de locomoção.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Quando é cabível o mandado de injunção?",
    "back": "O mandado de injunção é cabível sempre que a falta de norma regulamentadora torne inviável o exercício de direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania, suprindo a omissão legislativa para o caso concreto.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Quem tem legitimidade para propor ação popular e o que ela protege?",
    "back": "Qualquer cidadão (eleitor, mediante título de eleitor) tem legitimidade para propor ação popular, que visa anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural. O autor, salvo comprovada má-fé, fica isento de custas e do ônus da sucumbência.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Qual a diferença entre direitos individuais, coletivos e difusos?",
    "back": "Direitos individuais pertencem a pessoas determinadas e são divisíveis; direitos coletivos pertencem a um grupo determinável de pessoas ligadas entre si ou com a parte contrária por uma relação jurídica base, sendo indivisíveis; direitos difusos pertencem a titulares indeterminados, ligados por uma situação de fato, sendo também indivisíveis.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Qual a diferença entre competência legislativa privativa e competência legislativa concorrente?",
    "back": "Na competência privativa (ex.: matérias do art. 22, exclusivas da União), apenas o ente indicado pode legislar, admitindo-se delegação por lei complementar a Estados em questões específicas. Na competência concorrente, União, Estados e Distrito Federal legislam simultaneamente, cabendo à União editar normas gerais e aos Estados suplementar, dentro de sua competência.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Qual a diferença entre competência material (administrativa) e competência legislativa?",
    "back": "A competência material (ou administrativa) diz respeito à execução de tarefas e à prestação de serviços pelo ente federativo, podendo ser exclusiva ou comum. A competência legislativa diz respeito ao poder de editar leis sobre determinada matéria, podendo ser privativa, concorrente ou suplementar.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Cite um exemplo de competência material comum entre União, Estados, Distrito Federal e Municípios.",
    "back": "Cuidar da saúde e assistência pública, da proteção e garantia das pessoas portadoras de deficiência é exemplo de competência material comum, exercida simultaneamente por todos os entes federativos, sem hierarquia entre eles.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Quais são os requisitos e limites materiais para emenda à Constituição (cláusulas pétreas)?",
    "back": "Não será objeto de deliberação a proposta de emenda tendente a abolir a forma federativa de Estado, o voto direto, secreto, universal e periódico, a separação dos Poderes, e os direitos e garantias individuais. Além disso, a Constituição não pode ser emendada na vigência de intervenção federal, estado de defesa ou estado de sítio.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Qual a diferença entre lei ordinária e lei complementar quanto ao quórum de aprovação?",
    "back": "A lei ordinária é aprovada por maioria simples (maioria dos votos dos presentes, presente a maioria absoluta dos membros da Casa). A lei complementar exige maioria absoluta dos membros de cada Casa Legislativa, sendo reservada a matérias expressamente indicadas pela Constituição.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Qual a diferença entre emenda constitucional e lei ordinária quanto ao rito e à hierarquia?",
    "back": "A emenda constitucional exige aprovação em dois turnos, em cada Casa do Congresso, por três quintos dos votos dos respectivos membros, e passa a integrar o texto constitucional. A lei ordinária tem rito mais simples, quórum de maioria simples e situa-se hierarquicamente abaixo da Constituição, devendo com ela ser compatível.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "O que caracteriza a imunidade parlamentar material (inviolabilidade)?",
    "back": "É a garantia de que Deputados e Senadores são invioláveis, civil e penalmente, por quaisquer de suas opiniões, palavras e votos, no exercício do mandato, afastando a responsabilização por manifestações ligadas à atividade parlamentar.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Qual a diferença entre imunidade material e imunidade formal (processual) dos parlamentares?",
    "back": "A imunidade material afasta a responsabilização civil e penal por opiniões, palavras e votos proferidos no exercício do mandato. A imunidade formal diz respeito a regras processuais, como a prisão do parlamentar apenas em flagrante de crime inafiançável e a possibilidade de sustação do processo pela respectiva Casa Legislativa.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Quais os requisitos constitucionais para a edição de medida provisória pelo Presidente da República?",
    "back": "A medida provisória exige relevância e urgência cumulativamente, tem força de lei, deve ser submetida de imediato ao Congresso Nacional e perde eficácia desde a edição se não for convertida em lei dentro do prazo constitucional.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "O que ocorre quando o Presidente da República veta um projeto de lei por entendê-lo inconstitucional ou contrário ao interesse público?",
    "back": "O Presidente pode vetar total ou parcialmente o projeto, no prazo de quinze dias úteis contados do recebimento, comunicando os motivos do veto ao Presidente do Senado Federal em até 48 horas. O veto pode ser rejeitado pelo Congresso Nacional, em sessão conjunta, por maioria absoluta dos Deputados e Senadores.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Como está organizado o Poder Judiciário brasileiro em relação aos seus órgãos de cúpula?",
    "back": "São órgãos do Poder Judiciário, entre outros: o Supremo Tribunal Federal, o Conselho Nacional de Justiça, o Superior Tribunal de Justiça, os Tribunais Regionais Federais e Juízes Federais, os Tribunais e Juízes do Trabalho, os Tribunais e Juízes Eleitorais, os Tribunais e Juízes Militares, e os Tribunais e Juízes dos Estados e do Distrito Federal e Territórios.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Qual a diferença entre intervenção federal e intervenção estadual?",
    "back": "A intervenção federal é a medida excepcional pela qual a União afasta temporariamente a autonomia de um Estado, do Distrito Federal ou de Município situado em Território Federal, nas hipóteses taxativas da Constituição. A intervenção estadual é a medida pela qual o Estado afasta temporariamente a autonomia de um Município situado em seu território, também em hipóteses taxativas.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Cite duas hipóteses que autorizam a intervenção federal em um Estado.",
    "back": "Entre outras hipóteses, a intervenção federal é cabível para pôr termo a grave comprometimento da ordem pública, e para prover a execução de lei federal, ordem ou decisão judicial quando o Estado deixar de fazê-lo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Qual a diferença entre brasileiro nato e brasileiro naturalizado?",
    "back": "Brasileiro nato é aquele que adquire a nacionalidade originariamente, pelo nascimento, segundo os critérios previstos na Constituição (como o critério de nascimento em território nacional). Brasileiro naturalizado adquire a nacionalidade por vontade própria, mediante processo de naturalização, atendidos os requisitos legais.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Quais os requisitos para a naturalização ordinária de estrangeiros de qualquer nacionalidade, prevista diretamente no texto constitucional?",
    "back": "Exige-se residência na República Federativa do Brasil há mais de quinze anos ininterruptos, ausência de condenação penal e requerimento da nacionalidade brasileira pelo interessado.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Quais são as condições de elegibilidade previstas na Constituição para candidatura a cargo eletivo?",
    "back": "São condições de elegibilidade, entre outras: a nacionalidade brasileira, o pleno exercício dos direitos políticos, o alistamento eleitoral, o domicílio eleitoral na circunscrição, a filiação partidária e a idade mínima exigida para o respectivo cargo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "O que caracteriza a inelegibilidade e qual sua distinção em relação à perda de direitos políticos?",
    "back": "Inelegibilidade é a impossibilidade de alguém concorrer a determinado cargo eletivo, ainda que mantenha seus direitos políticos (por exemplo, por parentesco com titular de cargo executivo). Já a perda ou suspensão de direitos políticos atinge a própria capacidade eleitoral, retirando o direito de votar e/ou ser votado, como ocorre no cancelamento de naturalização por sentença transitada em julgado.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Como é composta a seguridade social na ordem constitucional brasileira?",
    "back": "A seguridade social compreende um conjunto integrado de ações de iniciativa dos Poderes Públicos e da sociedade, destinadas a assegurar os direitos relativos à saúde, à previdência e à assistência social.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Qual a diferença entre saúde e assistência social dentro da seguridade social, quanto ao acesso?",
    "back": "A saúde é direito de todos e dever do Estado, de acesso universal e igualitário, independentemente de contribuição. A assistência social é prestada a quem dela necessitar, independentemente de contribuição à seguridade social, sendo voltada a grupos vulneráveis (idosos, pessoas com deficiência, entre outros).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "O que estabelece a Constituição sobre o meio ambiente como direito fundamental?",
    "back": "Todos têm direito ao meio ambiente ecologicamente equilibrado, bem de uso comum do povo e essencial à sadia qualidade de vida, impondo-se ao Poder Público e à coletividade o dever de defendê-lo e preservá-lo para as presentes e futuras gerações.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Qual a diferença entre Estado Federal e Estado Unitário quanto à distribuição do poder político?",
    "back": "No Estado Federal, o poder político é descentralizado entre entes autônomos (União, Estados, Distrito Federal e Municípios, no caso brasileiro), cada um com competências próprias definidas pela Constituição. No Estado Unitário, o poder político concentra-se em um único centro, ainda que existam divisões administrativas internas sem autonomia política plena.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "O que significa dizer que os Municípios brasileiros são entes federativos autônomos?",
    "back": "Significa que os Municípios possuem capacidade de autogoverno (eleição de prefeito e vereadores) e autoadministração (organização de seus serviços e competências próprias), além de auto-organização por meio de lei orgânica, sem subordinação hierárquica aos Estados.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Qual a diferença entre os princípios da legalidade, impessoalidade, moralidade, publicidade e eficiência aplicáveis à Administração Pública?",
    "back": "Legalidade exige que o administrador só faça o que a lei permite; impessoalidade veda favorecimentos pessoais e exige tratamento isonômico; moralidade impõe atuação ética e proba; publicidade exige transparência dos atos administrativos; eficiência exige desempenho com qualidade e presteza na prestação do serviço público.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Qual a diferença entre o devido processo legal em sentido formal e em sentido material?",
    "back": "Em sentido formal (processual), o devido processo legal garante o respeito ao rito legalmente estabelecido, com contraditório e ampla defesa. Em sentido material (substantivo), exige que as normas e decisões sejam razoáveis e proporcionais, servindo de parâmetro para controle da razoabilidade dos atos estatais.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Quem pode propor ação direta de inconstitucionalidade perante o STF?",
    "back": "Entre outros legitimados, podem propor ADI o Presidente da República, a Mesa do Senado Federal, a Mesa da Câmara dos Deputados, a Mesa de Assembleia Legislativa, o Governador de Estado, o Procurador-Geral da República, o Conselho Federal da OAB, partido político com representação no Congresso Nacional e confederação sindical ou entidade de classe de âmbito nacional.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "O que é o efeito vinculante das decisões do STF em ADI e ADC?",
    "back": "É o efeito pelo qual as decisões de mérito proferidas pelo STF em ADI e ADC produzem eficácia erga omnes e vinculam os demais órgãos do Poder Judiciário e a Administração Pública direta e indireta, nas esferas federal, estadual e municipal, obrigando-os a observar a decisão.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "front": "Qual a função do recurso extraordinário no controle difuso de constitucionalidade?",
    "back": "O recurso extraordinário permite que o STF julgue, em última análise, causas decididas em única ou última instância quando a decisão recorrida contrariar dispositivo da Constituição, viabilizando o exercício do controle difuso de constitucionalidade pela via recursal.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Quando começa a personalidade civil da pessoa natural, e o que a lei resguarda antes disso?",
    "back": "A personalidade civil começa com o nascimento com vida. Antes disso, desde a concepção, a lei já põe a salvo os direitos do nascituro.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Cite os três graus de capacidade civil reconhecidos pelo Código Civil.",
    "back": "Capacidade de direito (todos têm, por serem pessoas), incapacidade absoluta (hoje restrita aos menores de 16 anos, que devem ser representados) e incapacidade relativa (maiores de 16 e menores de 18, ébrios habituais, viciados em tóxico, pessoas com discernimento reduzido por causa transitória ou permanente e os pródigos, que devem ser assistidos).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "O que é emancipação e quais suas principais formas?",
    "back": "É a antecipação da maioridade civil, cessando a menoridade antes dos 18 anos. Pode ser voluntária (concessão dos pais, por instrumento público, independente de homologação judicial), judicial (por sentença do juiz, ouvido o tutor) ou legal (casamento, exercício de emprego público efetivo, colação de grau em curso superior, ou estabelecimento civil/comercial ou relação de emprego com economia própria).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Qual a diferença entre erro e lesão como defeitos do negócio jurídico?",
    "back": "No erro, a pessoa se engana sozinha sobre elemento essencial do negócio, sem indução de outrem. Na lesão, uma parte, premida por necessidade ou inexperiência, obriga-se a prestação manifestamente desproporcional ao valor da prestação oposta, sendo a desproporção o elemento central, e não o engano sobre fatos.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "O que caracteriza o estado de perigo como vício de consentimento?",
    "back": "Ocorre quando alguém, premido da necessidade de salvar-se, ou a pessoa de sua família, de grave dano conhecido pela outra parte, assume obrigação excessivamente onerosa. Distingue-se da lesão porque exige o conhecimento do perigo pela outra parte e a intenção desta de se aproveitar dele.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Qual a diferença entre dolo e simulação nos defeitos do negócio jurídico?",
    "back": "No dolo, uma das partes induz a outra em erro por artifício malicioso, mas o negócio é real entre elas e vale o que foi efetivamente querido pela vítima enganada. Na simulação, as próprias partes, de comum acordo, fingem um negócio que não é o real (ou que é inexistente), buscando aparência diversa da realidade, e o negócio simulado é nulo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "O que é fraude contra credores e qual a ação cabível para combatê-la?",
    "back": "É a prática de atos de disposição ou oneração patrimonial pelo devedor insolvente, ou reduzido à insolvência por causa desses atos, em prejuízo de seus credores. O credor prejudicado pode ajuizar ação pauliana (ação revocatória) para anular o negócio fraudulento.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Quais são os três requisitos de validade do negócio jurídico?",
    "back": "Agente capaz, objeto lícito, possível, determinado ou determinável, e forma prescrita ou não defesa em lei.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Qual a diferença central entre nulidade e anulabilidade do negócio jurídico?",
    "back": "A nulidade (negócio nulo) decorre de vício grave que afeta interesse público (ex.: agente absolutamente incapaz, objeto ilícito, simulação), pode ser alegada por qualquer interessado ou pelo Ministério Público, é reconhecível de ofício pelo juiz, não convalesce pelo tempo e produz efeitos ex tunc. A anulabilidade (negócio anulável) protege interesse particular (ex.: agente relativamente incapaz, vícios de consentimento), só pode ser alegada pelos interessados, não é decretável de ofício, admite confirmação/convalescimento e sujeita-se a prazos decadenciais.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "O negócio jurídico nulo pode ser confirmado pelas partes?",
    "back": "Não. O negócio nulo não é suscetível de confirmação nem convalesce pelo decurso do tempo, ao contrário do anulável, que admite confirmação expressa ou tácita.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Qual a diferença essencial entre prescrição e decadência?",
    "back": "A prescrição atinge a pretensão (o direito de exigir judicialmente uma prestação, em razão de violação de direito subjetivo), enquanto a decadência atinge o próprio direito potestativo (direito de exercer uma faculdade dentro de um prazo, extinguindo-o pelo não exercício). A prescrição admite suspensão e interrupção; a decadência legal, em regra, não admite, salvo disposição legal em contrário.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "A decadência pode ser reconhecida de ofício pelo juiz? E a prescrição?",
    "back": "Sim, a decadência fixada em lei pode ser reconhecida de ofício. A prescrição também pode ser reconhecida de ofício pelo juiz, conforme a redação atual do Código Civil, ainda que seja renunciável pelo devedor após consumada.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Cite as principais modalidades das obrigações quanto ao objeto.",
    "back": "Obrigações de dar (coisa certa ou incerta), de fazer, de não fazer; e, quanto à divisibilidade/pluralidade de sujeitos, obrigações divisíveis, indivisíveis e solidárias (ativa e passiva).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "O que é obrigação alternativa e como se resolve, salvo disposição em contrário, a escolha entre as prestações?",
    "back": "É a obrigação que tem por objeto duas ou mais prestações, devendo o devedor cumprir apenas uma delas. Salvo estipulação em contrário, a escolha cabe ao devedor.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "O que caracteriza o adimplemento e o inadimplemento das obrigações?",
    "back": "Adimplemento é o cumprimento espontâneo e integral da prestação devida, extinguindo a obrigação. Inadimplemento é o descumprimento, absoluto (quando a prestação se torna inútil ou impossível) ou relativo/mora (quando ainda é possível e útil, mas houve atraso ou cumprimento imperfeito), gerando responsabilidade por perdas e danos.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Qual a função da cláusula penal e quais seus limites?",
    "back": "A cláusula penal é a estipulação de uma pena convencional para o caso de inadimplemento total ou parcial, ou de mora, funcionando como pré-liquidação das perdas e danos e reforço do vínculo obrigacional. Seu valor não pode exceder o da obrigação principal, e o juiz deve reduzi-la equitativamente se manifestamente excessiva ou se a obrigação principal for cumprida em parte.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "O que é o princípio da função social do contrato?",
    "back": "É o princípio que condiciona a liberdade contratual ao interesse social, exigindo que o contrato não sirva apenas aos interesses das partes, mas também respeite interesses de terceiros e da coletividade, podendo relativizar a força obrigatória do pactuado em nome do equilíbrio social.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "O que exige o princípio da boa-fé objetiva nos contratos?",
    "back": "Exige que as partes guardem, na conclusão e na execução do contrato, os deveres de lealdade, cooperação, informação e probidade, independentemente de sua vontade ou intenção subjetiva, servindo como cláusula geral de interpretação e integração contratual.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Como se forma o contrato entre presentes e entre ausentes, em regra?",
    "back": "O contrato se reputa formado quando a aceitação é expedida (teoria da expedição), correspondendo o momento da conclusão ao local em que foi proposto. Entre presentes, se não houver prazo, a aceitação deve ser imediata; entre ausentes, a proposta deixa de ser obrigatória se a resposta não chegar a tempo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Qual a diferença entre vício redibitório e evicção?",
    "back": "O vício redibitório é um defeito oculto na coisa recebida por contrato comutativo que a torna imprópria ao uso a que se destina ou lhe diminui o valor, dando ensejo à ação redibitória (desfazer o contrato) ou estimatória/quanti minoris (abater o preço). A evicção é a perda total ou parcial da coisa para terceiro que comprove ser o verdadeiro titular do direito sobre ela, por sentença judicial ou ato equivalente, garantindo-se ao evicto o direito de ser indenizado por quem lhe transferiu a coisa onerosamente.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "A garantia por vícios redibitórios e a garantia da evicção exigem contrato oneroso ou também se aplicam a contratos gratuitos?",
    "back": "Ambas se aplicam, em regra, aos contratos comutativos onerosos. Excepcionalmente, a doação pura (gratuita) não gera responsabilidade por vício redibitório nem por evicção, salvo se houver dolo do doador.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Cite as principais formas de extinção dos contratos além do cumprimento normal.",
    "back": "Resilição (distrato bilateral ou denúncia unilateral, quando admitida), resolução (por inadimplemento ou por onerosidade excessiva) e rescisão (por vício, como lesão ou estado de perigo, em alguns contratos específicos).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "O que é a teoria da imprevisão (resolução por onerosidade excessiva)?",
    "back": "Permite ao devedor pedir a resolução do contrato de execução continuada ou diferida quando a prestação se tornar excessivamente onerosa para ele, com extrema vantagem para a outra parte, em razão de acontecimentos extraordinários e imprevisíveis supervenientes à contratação.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Qual a diferença entre responsabilidade civil subjetiva e objetiva?",
    "back": "Na responsabilidade subjetiva, o dever de indenizar depende da comprovação de culpa (ou dolo) do agente, além do dano e do nexo causal. Na responsabilidade objetiva, o dever de indenizar independe de culpa, bastando o dano e o nexo causal, aplicando-se nos casos especificados em lei ou quando a atividade normalmente desenvolvida pelo autor implicar risco para os direitos de outrem (teoria do risco).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Qual a diferença entre dano material e dano moral?",
    "back": "O dano material atinge o patrimônio da vítima, dividindo-se em dano emergente (o que efetivamente se perdeu) e lucro cessante (o que razoavelmente se deixou de ganhar). O dano moral atinge direitos da personalidade, como honra, imagem e dignidade, independentemente de repercussão patrimonial, sendo indenizável mesmo sem prova de prejuízo econômico.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Cite excludentes de responsabilidade civil reconhecidas pela doutrina e pela lei.",
    "back": "Legítima defesa e exercício regular de direito (que afastam a ilicitude), estado de necessidade (em regra não afasta o dever de indenizar o terceiro inocente, cabendo ação regressiva contra o culpado), caso fortuito e força maior, fato exclusivo da vítima e fato exclusivo de terceiro, que rompem o nexo causal.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "O ato praticado em legítima defesa ou em exercício regular de um direito reconhecido é considerado ilícito?",
    "back": "Não. O Código Civil afasta a ilicitude nesses casos, salvo excesso, embora, no estado de necessidade, o autor do dano possa ter que indenizar o terceiro inocente lesado, cabendo-lhe ação regressiva contra quem provocou a situação de perigo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "O que é abuso de direito segundo o Código Civil?",
    "back": "Comete ato ilícito o titular de um direito que, ao exercê-lo, excede manifestamente os limites impostos pelo seu fim econômico ou social, pela boa-fé ou pelos bons costumes, ainda que o ato, isoladamente, pareça lícito em sua origem.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Quais são os regimes de bens do casamento previstos no Código Civil e qual é o regime legal supletivo?",
    "back": "Comunhão parcial de bens, comunhão universal de bens, participação final nos aquestos e separação de bens (convencional ou obrigatória/legal). Na ausência de convenção, ou sendo ela nula ou ineficaz, vigora o regime da comunhão parcial de bens.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Em quais hipóteses é obrigatório o regime da separação de bens no casamento?",
    "back": "É obrigatório para pessoas que contraírem casamento com inobservância das causas suspensivas, para a pessoa maior de 70 anos e para quem depender de suprimento judicial para casar.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Qual a diferença entre casamento e união estável quanto à sua constituição?",
    "back": "O casamento é ato formal e solene, constituído por habilitação e celebração perante autoridade competente, gerando efeitos a partir do registro. A união estável é situação de fato, configurada pela convivência pública, contínua e duradoura entre duas pessoas, com o objetivo de constituição de família, independentemente de qualquer formalidade constitutiva, podendo ser reconhecida judicialmente ou por escritura pública declaratória.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "O que é poder familiar e a quem compete seu exercício?",
    "back": "É o conjunto de direitos e deveres atribuídos aos pais em relação à pessoa e aos bens dos filhos menores não emancipados, compreendendo dirigir a criação e educação, exercer a guarda, conceder ou negar consentimento para atos da vida civil e administrar seus bens. Compete a ambos os pais, em igualdade de condições, e seu exercício pode ser suspenso ou extinto por decisão judicial em hipóteses previstas em lei.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Quem pode pedir alimentos e com base em que critério eles são fixados?",
    "back": "Podem pedir alimentos os parentes, os cônjuges ou companheiros, uns aos outros, quando necessitarem para viver de modo compatível com sua condição social. Os alimentos são fixados na proporção das necessidades do reclamante e dos recursos da pessoa obrigada (binômio necessidade-possibilidade, também chamado de trinômio ao se incluir a proporcionalidade).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Quais as modalidades de guarda de filhos menores previstas no ordenamento?",
    "back": "Guarda unilateral, atribuída a um só dos genitores, e guarda compartilhada, em que a responsabilização pelos filhos é exercida conjuntamente por ambos os pais, sendo esta a regra preferencial mesmo quando não há acordo entre eles, salvo se um dos genitores declarar ao magistrado que não deseja a guarda do menor.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Qual a diferença entre posse e propriedade?",
    "back": "Propriedade é o direito real pleno que confere ao titular as faculdades de usar, gozar, dispor da coisa e reavê-la de quem injustamente a possua. Posse é a situação de fato caracterizada pelo exercício de algum dos poderes inerentes à propriedade, independentemente de título, podendo existir posse sem propriedade (ex.: locatário) e propriedade sem posse direta (ex.: proprietário que aluga o imóvel).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "O que é usucapião e qual sua principal diferença em relação a outras formas de aquisição da propriedade?",
    "back": "Usucapião é a aquisição originária da propriedade (ou de outros direitos reais) pela posse mansa, pacífica e ininterrupta de um bem, por prazo determinado em lei, com ânimo de dono, dispensando-se a existência de título anterior válido, ao contrário das aquisições derivadas (como o registro de escritura de compra e venda), que dependem de transmissão de direito por quem já o detinha.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Qual a diferença entre a usucapião extraordinária e a usucapião ordinária de bens imóveis?",
    "back": "Na usucapião extraordinária, exige-se apenas posse mansa, pacífica e ininterrupta por prazo mais longo, com ânimo de dono, independentemente de título e boa-fé. Na usucapião ordinária, exige-se prazo menor, mas somam-se os requisitos de justo título e boa-fé do possuidor.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "O que caracteriza o condomínio em direitos reais e quais suas espécies principais?",
    "back": "Condomínio é a situação em que a propriedade de uma mesma coisa pertence, simultaneamente, a mais de uma pessoa. Pode ser condomínio geral (voluntário, quando resulta de vontade das partes, ou necessário/forçado, como em paredes-meias) e condomínio edilício (em edificações, com partes de propriedade exclusiva e partes de propriedade comum).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Qual a diferença entre herdeiro necessário, herdeiro legítimo e herdeiro testamentário?",
    "back": "Herdeiro legítimo é aquele chamado a suceder pela ordem de vocação hereditária prevista em lei, na ausência ou insuficiência de testamento. Herdeiro testamentário é o instituído por testamento, podendo ou não ser parente do testador. Herdeiro necessário é categoria de herdeiro legítimo (descendentes, ascendentes e cônjuge) que tem direito assegurado à legítima, não podendo ser excluído por testamento senão por deserdação ou indignidade nas hipóteses legais.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Qual é a ordem de vocação hereditária na sucessão legítima?",
    "back": "Descendentes, em concorrência com o cônjuge sobrevivente (salvo se casados sob comunhão universal ou, em certas hipóteses, comunhão parcial sem bens particulares, ou separação obrigatória de bens); ascendentes, em concorrência com o cônjuge; o cônjuge sobrevivente isoladamente; e, por fim, os colaterais até o quarto grau.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Qual a diferença entre meação e herança?",
    "back": "Meação é a parte do patrimônio comum do casal (ou da união estável) que já pertence ao cônjuge ou companheiro sobrevivente em razão do regime de bens, não decorrendo da sucessão e não sendo, portanto, objeto de partilha hereditária. Herança é o patrimônio deixado pelo falecido, que se transmite aos herdeiros por sucessão, incidindo sobre a parte que era exclusivamente do autor da herança.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Quais são as principais formas ordinárias de testamento previstas no Código Civil?",
    "back": "Testamento público (lavrado por tabelião em seu livro de notas), testamento cerrado (escrito pelo testador ou por outrem a seu rogo e aprovado pelo tabelião) e testamento particular (escrito e assinado pelo próprio testador, lido perante testemunhas).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "O testador pode dispor livremente de todo o seu patrimônio por testamento?",
    "back": "Não, se houver herdeiros necessários (descendentes, ascendentes ou cônjuge). Nesse caso, o testador só pode dispor livremente da metade de seus bens (parte disponível), pois a outra metade (legítima) é reservada por lei aos herdeiros necessários.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "front": "Qual a diferença entre deserdação e indignidade sucessória?",
    "back": "A indignidade é declarada por sentença judicial, a pedido de qualquer interessado, aplicável a qualquer herdeiro (legítimo ou testamentário) que tenha praticado atos graves contra o autor da herança, mesmo sem testamento. A deserdação exige testamento expresso do autor da herança excluindo herdeiro necessário, com indicação da causa legal, sendo cabível apenas contra herdeiros necessários.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Qual a diferença entre competência absoluta e competência relativa?",
    "back": "A competência absoluta (em razão da matéria, da pessoa ou funcional) é de ordem pública, improrrogável, pode ser alegada a qualquer tempo e reconhecida de ofício pelo juiz. A competência relativa (em regra, em razão do valor ou do território) é prorrogável, deve ser arguida pelo réu como preliminar de contestação, sob pena de preclusão, e não pode ser conhecida de ofício (salvo exceções, como cláusula abusiva de eleição de foro em contrato de adesão).",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "É possível o juiz reconhecer de ofício a incompetência relativa?",
    "back": "Em regra, não: a incompetência relativa deve ser alegada pelo réu, sob pena de prorrogação da competência. Exceção: o CPC autoriza o juiz a reconhecer de ofício a incompetência relativa decorrente de cláusula de eleição de foro abusiva inserida em contrato de adesão.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "O que é o incidente de desconsideração da personalidade jurídica e quando ele é dispensado?",
    "back": "É o procedimento pelo qual se estende a responsabilidade patrimonial a sócios ou à própria pessoa jurídica, com contraditório prévio, suspendendo o processo até sua resolução. É dispensado quando o pedido de desconsideração for formulado já na petição inicial, hipótese em que o sócio ou a pessoa jurídica é citado para se manifestar e requerer provas antes da decisão.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Cabe recurso contra a decisão que resolve o incidente de desconsideração da personalidade jurídica?",
    "back": "Sim. Se a decisão for interlocutória, cabe agravo de instrumento; se for proferida em sentença, a questão é impugnável em apelação.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Quais são os requisitos essenciais da petição inicial?",
    "back": "Indicação do juízo; qualificação das partes; o fato e os fundamentos jurídicos do pedido (causa de pedir); o pedido com suas especificações; o valor da causa; as provas com que o autor pretende demonstrar a verdade dos fatos; e a opção do autor pela realização ou não de audiência de conciliação/mediação.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Quais as hipóteses que levam ao indeferimento da petição inicial?",
    "back": "Petição inepta; parte manifestamente ilegítima; ausência de interesse processual; e não atendimento, pelo autor, à determinação de emenda da petição inicial no prazo assinado pelo juiz.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Quais são as formas de resposta do réu previstas no CPC/2015?",
    "back": "Contestação e reconvenção, ambas oferecidas no mesmo prazo e na mesma peça (não há mais prazo específico nem peça autônoma obrigatória para reconvenção, nem exceções de incompetência, impedimento e suspeição como peças apartadas).",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "O que caracteriza a revelia e quais seus principais efeitos?",
    "back": "Revelia é a ausência de contestação tempestiva pelo réu. Seu principal efeito é a presunção de veracidade dos fatos alegados pelo autor (efeito material), que não é absoluta, sendo afastada, por exemplo, se houver pluralidade de réus e um deles contestar, se o litígio versar sobre direitos indisponíveis, ou se a petição inicial não vier acompanhada de instrumento público exigido por lei.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Qual a diferença entre tutela antecipada e tutela cautelar?",
    "back": "A tutela antecipada satisfaz, de forma provisória, o próprio direito material pleiteado (antecipa o bem da vida). A tutela cautelar não satisfaz o direito, mas apenas protege e assegura a utilidade e eficácia de um processo futuro ou em curso (ex.: arresto, sequestro, arrolamento de bens).",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Qual a diferença entre tutela de urgência e tutela de evidência?",
    "back": "A tutela de urgência (antecipada ou cautelar) exige probabilidade do direito e perigo de dano ou risco ao resultado útil do processo. A tutela de evidência dispensa a demonstração de perigo de dano ou risco ao resultado útil do processo, bastando hipóteses legais específicas, como abuso de direito de defesa, tese firmada em julgamento de casos repetitivos, ou prova documental suficiente sem contraprova idônea.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "O que distingue a tutela provisória requerida em caráter antecedente da requerida em caráter incidental?",
    "back": "A tutela antecedente é postulada antes da formulação do pedido principal, que será complementado posteriormente (com procedimento próprio de estabilização, no caso da antecipada antecedente não impugnada). A tutela incidental é requerida no curso do processo em que já se formulou o pedido principal, dispensando o pagamento de novas custas.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "O que é a estabilização da tutela antecipada antecedente?",
    "back": "Se a tutela antecipada, requerida em caráter antecedente, for concedida e a decisão não for impugnada por recurso pelo réu, o processo é extinto e a tutela concedida continua produzindo efeitos, podendo, no entanto, ser revista, reformada ou invalidada por ação própria proposta por qualquer das partes, no prazo de até dois anos.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "A tutela cautelar antecedente que não for contestada também se estabiliza como a tutela antecipada?",
    "back": "Não. A estabilização é um instituto próprio da tutela antecipada requerida em caráter antecedente. A tutela cautelar antecedente, ainda que efetivada, exige que a parte formule o pedido principal em até 30 dias, sob pena de cessação de sua eficácia, não havendo estabilização equivalente.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "A quem incumbe o ônus da prova, segundo a regra geral do CPC?",
    "back": "Ao autor, quanto ao fato constitutivo de seu direito, e ao réu, quanto à existência de fato impeditivo, modificativo ou extintivo do direito do autor.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "O que é a distribuição dinâmica (ou inversão) do ônus da prova?",
    "back": "É a possibilidade de o juiz atribuir o ônus da prova de modo diverso da regra geral, quando houver peculiaridades da causa relacionadas à impossibilidade ou à excessiva dificuldade de cumprir o encargo, ou à maior facilidade de obtenção da prova do fato contrário, mediante decisão fundamentada que deve ser proferida antes da fase instrutória, dando à parte oportunidade de se desincumbir do ônus que lhe foi atribuído.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Quais fatos independem de prova no processo civil?",
    "back": "Não dependem de prova os fatos notórios; os afirmados por uma parte e confessados pela parte contrária; os admitidos no processo como incontroversos; e os em cujo favor milita presunção legal de existência ou de veracidade.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Qual a diferença entre sentença que resolve o mérito e sentença que não resolve o mérito?",
    "back": "A sentença com resolução de mérito julga o pedido, acolhendo-o ou rejeitando-o, e faz coisa julgada material (ex.: reconhecimento de prescrição ou decadência, homologação de transação). A sentença sem resolução de mérito extingue o processo por questões processuais (ex.: indeferimento da inicial, falta de pressuposto processual, ausência de legitimidade ou interesse, perempção, litispendência), fazendo apenas coisa julgada formal, permitindo, em regra, a repropositura da ação.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Qual a diferença entre coisa julgada formal e coisa julgada material?",
    "back": "Coisa julgada formal é a imutabilidade da decisão dentro do próprio processo em que foi proferida, por não caber mais recurso, ocorrendo em qualquer sentença. Coisa julgada material é a imutabilidade e indiscutibilidade da decisão de mérito para fora do processo, impedindo nova discussão da mesma questão em outra demanda.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "O reconhecimento de prescrição ou decadência gera sentença com ou sem resolução de mérito?",
    "back": "Gera sentença com resolução de mérito, apta a fazer coisa julgada material, ainda que não tenha havido análise do mérito da pretensão em si.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Qual a diferença entre cumprimento de sentença e execução de título extrajudicial?",
    "back": "O cumprimento de sentença é a fase (ou processo, conforme o caso) destinada a efetivar uma obrigação já reconhecida em título executivo judicial, processando-se, em regra, nos mesmos autos em que a decisão foi proferida. A execução de título extrajudicial é processo autônomo, iniciado por petição inicial própria, para satisfazer obrigação constante de título ao qual a lei atribui força executiva sem prévio processo de conhecimento (ex.: nota promissória, contrato de honorários).",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "No cumprimento de sentença de obrigação de pagar quantia certa, qual o prazo para pagamento voluntário e qual a consequência do não pagamento?",
    "back": "O executado é intimado para pagar o débito no prazo de 15 dias. Não havendo pagamento no prazo, o débito é acrescido de multa de 10% e, também, de honorários de advogado de 10%.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Qual a diferença entre embargos à execução e impugnação ao cumprimento de sentença?",
    "back": "Embargos à execução é a ação de defesa do executado no processo de execução de título extrajudicial, autuada em apartado. Impugnação ao cumprimento de sentença é o meio de defesa do executado na fase de cumprimento de sentença, processada nos próprios autos, com matérias de defesa mais restritas (por se tratar de obrigação já certificada por decisão judicial).",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Qual a ordem preferencial de penhora estabelecida pelo CPC?",
    "back": "A penhora observará, preferencialmente, a seguinte ordem, iniciando por dinheiro (em espécie ou em depósito/aplicação financeira), seguido de títulos da dívida pública, títulos e valores mobiliários com cotação em mercado, veículos, bens imóveis, bens móveis em geral, semoventes, navios e aeronaves, ações e quotas de sociedades, percentual do faturamento de empresa devedora, pedras e metais preciosos, direitos aquisitivos e outros direitos.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Os salários e proventos de aposentadoria são, em regra, penhoráveis?",
    "back": "Não, são impenhoráveis, junto com vencimentos, subsídios, soldos, remunerações, pensões e verbas de natureza alimentar semelhante, ressalvadas exceções previstas em lei, como o pagamento de prestação alimentícia, independentemente de sua origem, e o excedente a 50 salários-mínimos mensais.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Qual a diferença essencial entre apelação e agravo de instrumento quanto ao objeto?",
    "back": "A apelação é o recurso cabível contra sentença (ato que põe fim à fase cognitiva do procedimento comum ou extingue a execução, com ou sem resolução de mérito). O agravo de instrumento é cabível contra decisões interlocutórias proferidas no curso do processo, nas hipóteses taxativamente previstas em lei (ex.: tutelas provisórias, mérito do processo, rejeição de alegação de convenção de arbitragem, exclusão de litisconsorte).",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "As decisões interlocutórias não impugnáveis por agravo de instrumento ficam definitivamente preclusas?",
    "back": "Não. As questões resolvidas por decisão interlocutória não agravável não são cobertas pela preclusão, podendo ser impugnadas em preliminar de apelação ou nas contrarrazões de apelação, sendo reexaminadas pelo tribunal juntamente com o recurso contra a sentença.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Qual a diferença entre agravo interno e agravo de instrumento?",
    "back": "O agravo de instrumento é interposto perante o tribunal contra decisão interlocutória proferida pelo juízo de primeiro grau. O agravo interno é interposto perante o próprio órgão colegiado contra decisão proferida monocraticamente pelo relator, submetendo a decisão singular à revisão do colegiado.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Quais os fundamentos que autorizam a oposição de embargos de declaração?",
    "back": "Cabem embargos de declaração contra qualquer decisão judicial para esclarecer obscuridade, eliminar contradição, suprir omissão sobre ponto ou questão que devia ser apreciada de ofício ou a requerimento, e corrigir erro material.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Qual o prazo para interposição dos embargos de declaração e como ele se diferencia do prazo dos demais recursos?",
    "back": "O prazo é de 5 dias, contado da ciência da decisão, diferentemente do prazo geral de 15 dias aplicável aos demais recursos (excetuados os embargos de declaração, que têm prazo próprio e mais curto).",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Qual o efeito da oposição de embargos de declaração sobre o prazo dos demais recursos?",
    "back": "Os embargos de declaração interrompem o prazo para interposição de outros recursos, por qualquer das partes, voltando a correr por inteiro a partir da intimação da decisão que os julgar.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Embargos de declaração podem ter efeito infringente (modificativo)? Em que condição?",
    "back": "Em regra, embargos de declaração destinam-se a esclarecer, corrigir ou suprir a decisão, não a modificá-la. Excepcionalmente, admitem efeito infringente quando o vício sanado (erro material, contradição ou omissão) implicar, necessariamente, alteração do resultado do julgamento, hipótese em que a parte contrária deve ser intimada para se manifestar antes do julgamento, se ainda não tiver decorrido o prazo.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Qual a diferença entre recurso especial e recurso extraordinário quanto ao órgão julgador e ao fundamento?",
    "back": "O recurso especial é julgado pelo Superior Tribunal de Justiça e cabível quando a decisão recorrida contrariar tratado ou lei federal, ou julgar válido ato de governo local contestado em face de lei federal, entre outras hipóteses, discutindo-se direito infraconstitucional federal. O recurso extraordinário é julgado pelo Supremo Tribunal Federal e cabível quando a decisão contrariar dispositivo da Constituição Federal, discutindo-se matéria constitucional.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "O que é o requisito da repercussão geral, exigido em qual recurso?",
    "back": "É requisito de admissibilidade específico do recurso extraordinário, pelo qual o recorrente deve demonstrar a existência de questões relevantes do ponto de vista econômico, político, social ou jurídico que ultrapassem os interesses subjetivos do processo, cabendo ao Supremo Tribunal Federal reconhecer sua presença para julgar o recurso.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Qual o prazo comum para interposição de recursos no CPC, ressalvada a exceção dos embargos de declaração?",
    "back": "O prazo é de 15 dias, tanto para interpor os recursos quanto para responder a eles (contrarrazões), exceto os embargos de declaração, cujo prazo é de 5 dias.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "O que caracteriza a ação monitória e qual seu principal requisito de admissibilidade?",
    "back": "É procedimento especial cabível a quem afirmar, com base em prova escrita sem eficácia de título executivo, ter direito de exigir do devedor capaz o pagamento de quantia em dinheiro, a entrega de coisa fungível ou de bem móvel determinado, ou o adimplemento de obrigação de fazer ou de não fazer.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "O que ocorre se o réu, citado na ação monitória, não pagar nem oferecer embargos no prazo legal?",
    "back": "Constitui-se de pleno direito o título executivo judicial, convertendo-se o mandado inicial em mandado executivo, e prossegue-se o processo diretamente para o cumprimento da obrigação, nos moldes do cumprimento de sentença.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Nas ações possessórias, o autor precisa indicar corretamente se pretende reintegração ou manutenção de posse, sob pena de indeferimento?",
    "back": "Não. Vigora o princípio da fungibilidade das ações possessórias: a propositura de uma ação possessória em vez de outra não obsta que o juiz conheça do pedido e outorgue a proteção legal correspondente àquela cujos pressupostos estejam demonstrados.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Qual a diferença entre litisconsórcio necessário e litisconsórcio facultativo?",
    "back": "O litisconsórcio necessário é imposto por lei ou pela natureza da relação jurídica, de modo que a eficácia da sentença depende da citação de todos os litisconsortes, sob pena de nulidade. O litisconsórcio facultativo decorre da conveniência das partes ou de afinidade de questões por ponto comum de fato ou de direito, não sendo obrigatória a formação do litisconsórcio.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "O que é a assistência simples e em que ela se diferencia da assistência litisconsorcial?",
    "back": "Na assistência simples, o terceiro tem interesse jurídico em que a sentença seja favorável a uma das partes, mas não é titular da relação jurídica discutida, atuando de forma subordinada ao assistido. Na assistência litisconsorcial, o assistente é também titular da relação jurídica controvertida, de modo que a sentença influirá diretamente em sua própria esfera jurídica, atuando com maior autonomia, como litisconsorte do assistido.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "O que é o negócio jurídico processual (convenção processual) previsto no CPC?",
    "back": "É a possibilidade de as partes plenamente capazes, versando o processo sobre direitos que admitam autocomposição, estipularem mudanças no procedimento para ajustá-lo às especificidades da causa, bem como convencionarem sobre seus ônus, poderes, faculdades e deveres processuais, antes ou durante o processo.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "Qual a diferença entre honorários sucumbenciais e honorários contratuais?",
    "back": "Os honorários sucumbenciais são fixados pelo juiz na sentença, devidos pela parte vencida ao advogado da parte vencedora, tendo natureza alimentar e pertencendo ao advogado. Os honorários contratuais decorrem de ajuste privado entre o advogado e seu cliente, independentemente do resultado do processo.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "front": "O acolhimento da alegação de convenção de arbitragem gera sentença com ou sem resolução de mérito?",
    "back": "Gera sentença sem resolução de mérito, pois o reconhecimento da existência de convenção de arbitragem afasta a jurisdição estatal para aquele litígio, extinguindo o processo por ausência de pressuposto processual, sem análise do mérito da causa.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Qual a regra geral sobre a lei penal aplicável no tempo?",
    "back": "Vigora a teoria da atividade: aplica-se a lei vigente no momento da ação ou omissão, ainda que outro seja o momento do resultado (tempus regit actum).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "A lei penal mais gravosa pode retroagir para alcançar fatos anteriores à sua vigência?",
    "back": "Não. A lei penal só retroage quando beneficia o réu (abolitio criminis ou novatio legis in mellius). A lei mais gravosa (novatio legis in pejus) é irretroativa.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "O que é ultratividade da lei penal?",
    "back": "É a aplicação de uma lei já revogada a fatos ocorridos durante sua vigência, quando essa lei revogada é mais benéfica ao réu do que a lei nova.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Que teoria o Código Penal adota para definir o lugar do crime?",
    "back": "A teoria da ubiquidade (mista): considera-se praticado o crime tanto no lugar da ação ou omissão quanto no lugar em que se produziu ou deveria produzir-se o resultado.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Em que consiste a territorialidade temperada adotada pelo Código Penal quanto à lei no espaço?",
    "back": "Aplica-se, em regra, a lei brasileira aos crimes cometidos no território nacional, mas ressalvam-se convenções, tratados e regras de direito internacional, além das hipóteses de extraterritorialidade previstas em lei.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Quais são os elementos que compõem o conceito analítico de crime?",
    "back": "Fato típico, ilicitude (antijuridicidade) e culpabilidade. Para a maioria da doutrina, esses três elementos são necessários para a existência do crime.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Quais são os elementos do fato típico?",
    "back": "Conduta (dolosa ou culposa), resultado, nexo causal e tipicidade (adequação da conduta ao tipo penal).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Qual a diferença entre dolo direto e dolo eventual?",
    "back": "No dolo direto o agente quer diretamente o resultado. No dolo eventual o agente não quer o resultado diretamente, mas assume o risco de produzi-lo, sendo-lhe indiferente sua ocorrência.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Qual a diferença entre culpa consciente e dolo eventual?",
    "back": "Na culpa consciente o agente prevê o resultado, mas acredita sinceramente que ele não ocorrerá, confiando em sua habilidade para evitá-lo. No dolo eventual o agente prevê o resultado e, mesmo assim, aceita e assume o risco de produzi-lo, sendo-lhe indiferente.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Qual a diferença entre erro de tipo e erro de proibição?",
    "back": "O erro de tipo incide sobre elementos ou circunstâncias do tipo penal (o agente não sabe o que faz) e exclui o dolo, podendo subsistir a culpa se o erro for evitável. O erro de proibição incide sobre a ilicitude da conduta (o agente sabe o que faz, mas acredita ser permitido) e, se inevitável, exclui a culpabilidade; se evitável, apenas reduz a pena.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Quais são as fases do iter criminis?",
    "back": "Cogitação, atos preparatórios, atos de execução e consumação, podendo ainda ocorrer o exaurimento após a consumação em certos crimes.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Como se pune a tentativa em relação ao crime consumado?",
    "back": "Salvo disposição em contrário, pune-se a tentativa com a pena correspondente ao crime consumado, diminuída de um a dois terços, conforme a proximidade da consumação.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Qual a diferença entre desistência voluntária e arrependimento eficaz?",
    "back": "Na desistência voluntária o agente interrompe voluntariamente os atos de execução antes de esgotá-los. No arrependimento eficaz o agente já esgotou os atos de execução, mas atua para impedir a produção do resultado. Em ambos os casos responde apenas pelos atos já praticados.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "O que é arrependimento posterior e quais seus requisitos?",
    "back": "É a reparação do dano ou restituição da coisa, por ato voluntário do agente, até o recebimento da denúncia ou queixa, em crimes cometidos sem violência ou grave ameaça à pessoa. Gera redução de pena de um a dois terços.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "O que caracteriza o crime impossível?",
    "back": "A tentativa inidônea, que ocorre quando, por ineficácia absoluta do meio empregado ou impropriedade absoluta do objeto, é impossível consumar o crime. Nessa hipótese o agente não é punido.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Quais são os requisitos da legítima defesa?",
    "back": "Agressão injusta, atual ou iminente, a direito próprio ou de terceiro, repelida com uso moderado dos meios necessários.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Quais são os requisitos do estado de necessidade?",
    "back": "Perigo atual, não provocado voluntariamente pelo agente, que ameace direito próprio ou alheio, inevitável de outro modo, desde que não se possa razoavelmente exigir o sacrifício do bem ameaçado.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Qual a principal diferença entre legítima defesa e estado de necessidade?",
    "back": "Na legítima defesa há reação a uma agressão humana injusta; no estado de necessidade há reação a uma situação de perigo (que pode ou não decorrer de conduta humana), em que dois interesses juridicamente protegidos estão em conflito.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "O que ocorre quando o agente excede dolosa ou culposamente os limites de uma excludente de ilicitude?",
    "back": "O excesso é punível: se doloso, o agente responde pelo resultado a título de dolo; se culposo, responde a título de culpa, desde que o tipo culposo esteja previsto em lei.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "A partir de que idade o agente é considerado imputável para fins penais?",
    "back": "A partir dos 18 anos. Os menores de 18 anos são penalmente inimputáveis, sujeitando-se às normas da legislação especial (Estatuto da Criança e do Adolescente).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Quando a doença mental exclui a culpabilidade do agente?",
    "back": "Quando, por doença mental ou desenvolvimento mental incompleto ou retardado, o agente era, ao tempo da conduta, inteiramente incapaz de entender o caráter ilícito do fato ou de determinar-se de acordo com esse entendimento.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "O que é semi-imputabilidade e qual sua consequência?",
    "back": "Ocorre quando o agente, por perturbação da saúde mental ou desenvolvimento mental incompleto ou retardado, não era inteiramente capaz de entender o caráter ilícito do fato ou de se determinar conforme esse entendimento. A pena pode ser reduzida de um a dois terços.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "A embriaguez voluntária, ainda que completa, exclui a imputabilidade penal?",
    "back": "Em regra, não. Aplica-se a teoria da actio libera in causa: o agente que se embriaga voluntariamente responde pelo crime cometido em estado de embriaguez, salvo se a embriaguez for proveniente de caso fortuito ou força maior e completa, hipótese em que a imputabilidade é excluída.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "O que é a teoria monista (temperada) adotada no concurso de pessoas?",
    "back": "Todos os que concorrem para o crime respondem pelo mesmo delito (unidade de infração), mas cada participante responde na medida de sua culpabilidade, admitindo-se variações de pena entre autor e partícipe.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Qual a diferença entre concurso material e concurso formal de crimes?",
    "back": "No concurso material o agente pratica dois ou mais crimes mediante mais de uma ação ou omissão, e as penas são somadas (cúmulo material). No concurso formal o agente pratica dois ou mais crimes mediante uma única ação ou omissão, aplicando-se, em regra, a pena mais grave aumentada de um sexto até metade (cúmulo jurídico).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Qual a diferença entre concurso formal próprio e impróprio?",
    "back": "No concurso formal próprio (perfeito) não há desígnios autônomos, aplicando-se o sistema de exasperação da pena. No concurso formal impróprio (imperfeito) as ações são amparadas por desígnios autônomos, aplicando-se o cúmulo material das penas, como se concurso material fosse.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "O que caracteriza o crime continuado e qual sua consequência na pena?",
    "back": "Ocorre quando o agente, mediante mais de uma ação ou omissão, pratica dois ou mais crimes da mesma espécie que, pelas condições de tempo, lugar, maneira de execução e outras semelhantes, devem ser havidos como continuação um do outro. Aplica-se a pena de um só dos crimes, aumentada de um sexto a dois terços.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Cite as principais espécies de pena previstas no Código Penal.",
    "back": "Penas privativas de liberdade (reclusão e detenção), penas restritivas de direitos e pena de multa.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Quais são, em linhas gerais, os requisitos para a substituição da pena privativa de liberdade por restritiva de direitos?",
    "back": "Crime não cometido com violência ou grave ameaça à pessoa (ou culposo), pena aplicada não superior a quatro anos, réu não reincidente em crime doloso, e a substituição deve ser suficiente e recomendável diante da culpabilidade, antecedentes e circunstâncias do agente.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "O que é prescrição penal?",
    "back": "É a perda do direito de punir (prescrição da pretensão punitiva) ou de executar a pena (prescrição da pretensão executória) do Estado em razão do decurso do tempo sem manifestação da persecução penal, sendo causa de extinção da punibilidade.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Cite exemplos de causas que interrompem a prescrição penal.",
    "back": "Entre outras, o recebimento da denúncia ou queixa, a pronúncia, a confirmação da pronúncia pelo tribunal, a publicação da sentença ou acórdão condenatório recorrível, e o início ou continuação do cumprimento da pena.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Qual a diferença entre homicídio simples e homicídio qualificado?",
    "back": "O homicídio simples é matar alguém sem as circunstâncias especiais previstas em lei. O homicídio qualificado ocorre quando presentes motivos ou meios específicos (torpeza, futilidade, meio cruel, traição, emboscada, dissimulação, entre outros), o que agrava consideravelmente a pena.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Qual a diferença essencial entre furto e roubo?",
    "back": "O furto é a subtração de coisa alheia móvel sem uso de violência, grave ameaça à pessoa ou obstáculo vencido com destreza mediante concurso de agentes. O roubo é a subtração mediante violência ou grave ameaça à pessoa, ou depois de reduzida a vítima à impossibilidade de resistência, o que o torna crime mais grave.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "front": "Qual a diferença entre roubo próprio e roubo impróprio?",
    "back": "No roubo próprio a violência ou grave ameaça antecede ou acompanha a subtração da coisa. No roubo impróprio a violência ou ameaça é empregada depois de subtraída a coisa, para assegurar a impunidade do crime ou a detenção da coisa para si ou para terceiro.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Qual a natureza jurídica do inquérito policial?",
    "back": "É um procedimento administrativo, de natureza inquisitorial, presidido pela autoridade policial, destinado a apurar a existência de infração penal e sua autoria, não se submetendo ao contraditório e à ampla defesa.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Cite características do inquérito policial.",
    "back": "É dispensável (peça informativa), sigiloso, escrito, oficial (conduzido por autoridade pública), oficioso (instaurável de ofício nos crimes de ação pública incondicionada) e indisponível (não pode a autoridade policial mandar arquivá-lo).",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Quais as formas de instauração do inquérito policial nos crimes de ação penal pública incondicionada?",
    "back": "De ofício, por portaria da autoridade policial; mediante requisição do Ministério Público ou do juiz; ou mediante requerimento de qualquer pessoa do povo, além da própria comunicação do fato (notitia criminis).",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Nos crimes de ação penal pública condicionada e de ação penal privada, o inquérito pode ser instaurado de ofício pela autoridade policial?",
    "back": "Não. Depende de representação do ofendido ou de requisição do Ministério Público (ação condicionada), ou de requerimento de quem tenha qualidade para oferecer a queixa (ação privada).",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "O que é indiciamento e quem é competente para realizá-lo?",
    "back": "É o ato pelo qual a autoridade policial, com base em elementos de convicção, aponta formalmente alguém como provável autor da infração penal. É ato privativo da autoridade policial, mediante análise técnico-jurídica do fato.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "O que é notitia criminis e quais suas espécies principais?",
    "back": "É o conhecimento, pela autoridade policial, da ocorrência de um fato aparentemente criminoso. Pode ser espontânea (a autoridade toma conhecimento por seus próprios meios), provocada (comunicação de terceiro ou da vítima) ou coercitiva/de cognição imediata (prisão em flagrante).",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Como se dá, atualmente, o arquivamento do inquérito policial?",
    "back": "Após o Pacote Anticrime, o Ministério Público, ao entender pelo arquivamento, comunica sua decisão à vítima, ao investigado e à autoridade policial, submetendo o arquivamento a reexame pela própria instância de revisão do Ministério Público, não mais dependendo de homologação judicial como antes.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "O arquivamento do inquérito policial faz coisa julgada material?",
    "back": "Não, em regra. Faz apenas coisa julgada formal, podendo o inquérito ser desarquivado e a ação penal ser proposta se surgirem novas provas (Súmula 524 do STF), salvo quando o arquivamento se fundar em atipicidade do fato ou excludente de ilicitude reconhecida, hipóteses em que a jurisprudência tende a reconhecer efeitos mais estáveis.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Quais são as espécies de ação penal quanto à titularidade?",
    "back": "Ação penal pública, de titularidade do Ministério Público (incondicionada ou condicionada à representação do ofendido ou requisição do Ministro da Justiça), e ação penal privada, de titularidade do ofendido ou seu representante legal, exercida por meio de queixa.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Qual a diferença entre ação penal pública incondicionada e condicionada?",
    "back": "Na incondicionada o Ministério Público pode oferecer denúncia independentemente de qualquer manifestação de vontade da vítima. Na condicionada, o oferecimento da denúncia depende de representação do ofendido (ou de seu representante legal) ou, em casos excepcionais, de requisição do Ministro da Justiça.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Cite os principais princípios que regem a ação penal pública.",
    "back": "Obrigatoriedade (o MP deve oferecer denúncia presentes indícios de autoria e materialidade), indisponibilidade (não pode desistir da ação já proposta), oficialidade, oficiosidade, intranscendência e indivisibilidade.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Qual princípio caracteriza a ação penal privada, em contraposição à obrigatoriedade da ação pública?",
    "back": "O princípio da oportunidade (ou conveniência), pelo qual o ofendido tem a faculdade, e não o dever, de oferecer a queixa, podendo inclusive dela desistir por meio do perdão ou deixar de exercê-la, gerando decadência.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Qual o prazo decadencial para o exercício do direito de queixa ou de representação, salvo disposição em contrário?",
    "back": "Seis meses, contados, em regra, do dia em que o ofendido veio a saber quem é o autor do crime.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Quais são os prazos para o Ministério Público oferecer denúncia?",
    "back": "Cinco dias, se o réu estiver preso, contados do recebimento dos autos do inquérito; e quinze dias, se o réu estiver solto ou afiançado, contados igualmente do recebimento dos autos.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Quais são as condições da ação penal comumente exigidas pela doutrina?",
    "back": "Possibilidade jurídica do pedido, legitimidade de parte (ativa e passiva), interesse de agir e justa causa, esta última entendida como o mínimo lastro probatório de autoria e materialidade que legitima a acusação.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "O que se entende por justa causa para a ação penal?",
    "back": "É o suporte probatório mínimo, colhido normalmente no inquérito policial, que indique indícios razoáveis de autoria e prova da materialidade delitiva, indispensável para o recebimento válido da denúncia ou queixa.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "O que é o juiz das garantias, instituído pelo Pacote Anticrime (Lei 13.964/2019)?",
    "back": "É o juiz responsável pelo controle da legalidade da investigação criminal e pela salvaguarda dos direitos do investigado durante a fase pré-processual, ficando impedido de atuar na instrução e no julgamento da ação penal, que cabe a outro magistrado.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Quais as espécies de prisão em flagrante previstas no CPP?",
    "back": "Flagrante próprio (o agente está cometendo ou acaba de cometer a infração), flagrante impróprio (o agente é perseguido logo após, em situação que faça presumir ser o autor) e flagrante presumido (o agente é encontrado, logo depois, com instrumentos ou objetos que façam presumir a autoria).",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Quais os requisitos para a decretação da prisão preventiva?",
    "back": "Prova da existência do crime e indício suficiente de autoria (fumus comissi delicti), somados a um dos fundamentos legais: garantia da ordem pública, garantia da ordem econômica, conveniência da instrução criminal ou necessidade de assegurar a aplicação da lei penal (periculum libertatis).",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Qual a diferença entre prisão preventiva e prisão temporária?",
    "back": "A prisão preventiva pode ser decretada em qualquer fase do inquérito ou do processo, sem prazo determinado de duração, para diversas finalidades cautelares. A prisão temporária é cabível apenas durante a investigação, para crimes especificados em lei própria, tem prazo determinado e finalidade restrita a garantir a investigação.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Após o Pacote Anticrime, a prisão preventiva pode ser decretada de ofício pelo juiz?",
    "back": "Não. Desde a reforma, a prisão preventiva somente pode ser decretada mediante representação da autoridade policial ou requerimento do Ministério Público, do querelante ou do assistente, ou ainda como conversão de prisão em flagrante, sem iniciativa de ofício do juiz.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Qual o prazo e a finalidade da audiência de custódia?",
    "back": "Deve ser realizada em até 24 horas após a prisão, apresentando-se o preso à autoridade judiciária, que deve verificar a legalidade e necessidade da prisão, podendo relaxar a prisão ilegal, converter o flagrante em preventiva ou conceder liberdade provisória, com ou sem fiança.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "O que é liberdade provisória?",
    "back": "É a medida que permite ao acusado ou investigado responder ao processo em liberdade, podendo ser concedida com ou sem fiança e, quando necessário, cumulada com medidas cautelares diversas da prisão previstas em lei.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Cite exemplos de medidas cautelares diversas da prisão previstas no CPP.",
    "back": "Comparecimento periódico em juízo, proibição de acesso ou frequência a determinados lugares, proibição de contato com pessoa determinada, monitoração eletrônica, recolhimento domiciliar noturno e suspensão do exercício de função pública, entre outras.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "O que é a pronúncia no procedimento do júri?",
    "back": "É a decisão interlocutória mista de conteúdo declaratório pela qual o juiz, reconhecendo a existência de indícios suficientes de autoria e prova da materialidade de crime doloso contra a vida, remete o acusado a julgamento pelo Tribunal do Júri.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Qual a diferença entre impronúncia e absolvição sumária no procedimento do júri?",
    "back": "Na impronúncia o juiz não se convence da existência do crime ou de indícios de autoria, extinguindo o processo sem julgamento de mérito. Na absolvição sumária o juiz absolve o acusado de plano, quando provada a inexistência do fato, negativa de autoria, atipicidade ou presença de causa excludente de ilicitude ou culpabilidade que isente de pena.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "O que é a desclassificação no procedimento do júri?",
    "back": "Ocorre quando o juiz, na fase de pronúncia, entende que o fato narrado não configura crime doloso contra a vida, remetendo o processo ao juízo competente para julgar a infração penal que efetivamente entende configurada.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Qual o recurso cabível contra sentença definitiva de condenação ou absolvição proferida por juiz singular?",
    "back": "A apelação, cabível no prazo de cinco dias, sendo o recurso próprio para impugnar decisões que encerram o processo com julgamento de mérito.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Para que serve o recurso em sentido estrito (RESE) no processo penal?",
    "back": "É recurso cabível contra decisões interlocutórias taxativamente previstas em lei, como a decisão que pronuncia o réu, que decreta ou nega a prisão preventiva e a que rejeita a denúncia ou queixa, diferindo-se da apelação, cabível contra as decisões que julgam o mérito da causa.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "O juiz pode fundamentar a sentença condenatória exclusivamente em elementos colhidos no inquérito policial?",
    "back": "Não, salvo as provas cautelares, não repetíveis e antecipadas. O juiz deve formar sua convicção pela livre apreciação da prova produzida em contraditório judicial.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "O que são provas ilícitas por derivação (teoria dos frutos da árvore envenenada)?",
    "back": "São provas lícitas em si mesmas, mas obtidas a partir de informações extraídas de uma prova ilícita anterior. Em regra, são igualmente inadmissíveis no processo, contaminando-se pela ilicitude da prova originária, salvo exceções como a fonte independente.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Em que consiste o exame de corpo de delito e quando é indispensável?",
    "back": "É a perícia destinada a comprovar a materialidade do crime que deixa vestígios. É indispensável nesses casos (crimes não transeuntes), não podendo ser suprido pela confissão do acusado.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "front": "Qual o critério geral de fixação da competência territorial no processo penal?",
    "back": "A competência será, de regra, determinada pelo lugar em que se consumar a infração ou, no caso de tentativa, pelo lugar em que for praticado o último ato de execução.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Quais são os atributos (características) do ato administrativo?",
    "back": "Presunção de legitimidade e veracidade, imperatividade, autoexecutoriedade e tipicidade. Nem todo ato possui todos eles (ex.: nem todo ato é autoexecutório).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Qual a diferença entre anulação e revogação de ato administrativo?",
    "back": "Anulação é a retirada do ato por vício de legalidade, com efeitos retroativos (ex tunc). Revogação é a retirada de ato válido por razões de conveniência e oportunidade, com efeitos prospectivos (ex nunc).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "A Administração pode revogar qualquer ato administrativo?",
    "back": "Não. Só pode revogar atos discricionários e válidos, praticados no exercício da função administrativa. Não se revogam atos vinculados, atos que já exauriram seus efeitos, atos que geraram direitos adquiridos, nem atos de controle e opinativos (como pareceres).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "O que é convalidação do ato administrativo?",
    "back": "É a correção de vício sanável do ato, com efeitos retroativos, mantendo-se o ato no mundo jurídico. Só é cabível quando o defeito não acarretar lesão ao interesse público nem prejuízo a terceiros, e recair sobre competência ou forma (não sobre finalidade, motivo ou objeto).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Quem pode anular e quem pode revogar um ato administrativo?",
    "back": "A anulação pode ser feita pela própria Administração (autotutela) ou pelo Poder Judiciário, quando provocado. A revogação só pode ser feita pela própria Administração, nunca pelo Judiciário, pois envolve juízo de mérito administrativo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "O que é o poder hierárquico e quais suas principais manifestações?",
    "back": "É o poder que permite à Administração estruturar e escalonar seus órgãos e agentes, distribuindo e escalonando funções. Manifesta-se por meio da direção, coordenação, controle, delegação e avocação de competências.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Em que se diferencia o poder disciplinar do poder hierárquico?",
    "back": "O poder hierárquico organiza a estrutura interna e distribui competências; o poder disciplinar é a prerrogativa de apurar infrações e aplicar sanções a servidores e demais pessoas sujeitas à disciplina administrativa (inclusive particulares vinculados por contrato).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "O que é o poder regulamentar (normativo) da Administração?",
    "back": "É a competência, típica do Chefe do Executivo, de editar atos normativos gerais e abstratos (como decretos regulamentares) para a fiel execução da lei, sem inovar na ordem jurídica além do que a lei já previu.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "O que caracteriza o poder de polícia administrativa?",
    "back": "É a atividade estatal que restringe ou condiciona o exercício de direitos, liberdades e propriedade em benefício do interesse público, podendo se manifestar preventivamente (fiscalização, licença) ou repressivamente (sanções, apreensão).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Qual a diferença entre Administração Pública direta e indireta?",
    "back": "Administração direta é composta pelos próprios entes federativos (União, Estados, DF, Municípios) atuando por seus órgãos internos. Administração indireta é formada por entidades com personalidade jurídica própria, criadas para desempenhar atividades específicas (autarquias, fundações públicas, empresas públicas e sociedades de economia mista).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Qual a diferença entre desconcentração e descentralização administrativa?",
    "back": "Desconcentração é a distribuição interna de competências entre órgãos de uma mesma pessoa jurídica, sem criar nova personalidade (ex.: divisão em secretarias e departamentos). Descentralização é a transferência de atividade para outra pessoa jurídica, distinta do ente central (ex.: criação de uma autarquia).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Qual a diferença entre órgão público e entidade administrativa?",
    "back": "Órgão é um centro de competência despersonalizado, integrante da estrutura de uma pessoa jurídica, sem personalidade jurídica própria e sem patrimônio próprio. Entidade é pessoa jurídica com personalidade e patrimônio próprios, podendo demandar e ser demandada em nome próprio.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Qual a natureza jurídica da autarquia e como ela se relaciona com o ente instituidor?",
    "back": "A autarquia é pessoa jurídica de direito público, criada por lei específica para exercer atividades típicas de Estado. Possui autonomia administrativa e financeira, mas se sujeita a controle finalístico (supervisão ministerial/tutela), não a hierarquia com o ente que a criou.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Qual a diferença entre empresa pública e sociedade de economia mista quanto ao capital e à forma societária?",
    "back": "A empresa pública tem capital exclusivamente público (podendo haver mais de um ente ou entidade pública) e pode adotar qualquer forma societária. A sociedade de economia mista tem capital misto (público e privado, com maioria de votos do poder público) e deve obrigatoriamente ser constituída sob a forma de sociedade anônima.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Empresas públicas e sociedades de economia mista se sujeitam ao regime de precatórios?",
    "back": "Em regra, não. Sendo pessoas jurídicas de direito privado que exploram atividade econômica ou prestam serviços públicos com regime próprio, seus bens não gozam, via de regra, da mesma proteção de impenhorabilidade e do regime de precatórios aplicável à Fazenda Pública, salvo situações específicas de prestadoras de serviço público em regime não concorrencial reconhecidas pela jurisprudência.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Na Lei 14.133/2021, quais são as modalidades de licitação previstas?",
    "back": "Pregão, concorrência, concurso, leilão e diálogo competitivo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Qual a diferença entre dispensa e inexigibilidade de licitação?",
    "back": "Na dispensa, a competição é juridicamente possível, mas a lei autoriza deixar de licitar por razões taxativamente previstas (valor baixo, urgência, situações específicas). Na inexigibilidade, a competição é inviável de fato, por exemplo por haver fornecedor exclusivo ou natureza singular do serviço prestado por profissional de notória especialização.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Cite exemplos clássicos de hipótese de inexigibilidade de licitação.",
    "back": "Contratação de fornecedor exclusivo de bem ou serviço, contratação de profissional de notória especialização para serviço técnico singular, e contratação de profissional do setor artístico, diretamente ou por empresário exclusivo, consagrado pela crítica ou opinião pública.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Quais são, em ordem, as fases do processo licitatório na Lei 14.133/2021?",
    "back": "Fase preparatória, divulgação do edital, apresentação de propostas e lances (quando houver), julgamento, habilitação, recursal e homologação.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "O que caracteriza o ato de improbidade administrativa que importa enriquecimento ilícito?",
    "back": "É aquele em que o agente público aufere vantagem patrimonial indevida em razão do exercício de cargo, mandato, função ou emprego. Após a Lei 14.230/2021, exige-se dolo do agente para sua configuração.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Após a Lei 14.230/2021, o ato de improbidade que causa dano ao erário admite modalidade culposa?",
    "back": "Não. A Lei 14.230/2021 extinguiu a modalidade culposa de improbidade administrativa; hoje todas as espécies de ato de improbidade (enriquecimento ilícito, dano ao erário e atentado aos princípios) exigem dolo do agente.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Quais são as três espécies de ato de improbidade administrativa previstas na Lei 8.429/92?",
    "back": "Atos que importam enriquecimento ilícito, atos que causam prejuízo ao erário e atos que atentam contra os princípios da Administração Pública.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Quem pode ajuizar a ação de improbidade administrativa após a Lei 14.230/2021?",
    "back": "Apenas o Ministério Público ou a pessoa jurídica interessada (o ente lesado), tendo a Lei 14.230/2021 retirado a legitimidade ativa concorrente que antes se discutia para outros legitimados.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Cite as formas de provimento de cargo público previstas na Lei 8.112/90.",
    "back": "Nomeação, promoção, readaptação, reversão, reintegração, recondução e aproveitamento.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Qual a diferença entre reintegração e recondução do servidor público estatutário?",
    "back": "Reintegração é o retorno do servidor estável ao cargo do qual foi ilegalmente demitido, com ressarcimento de todas as vantagens. Recondução é o retorno do servidor estável ao cargo anteriormente ocupado, em razão de inabilitação em estágio probatório de outro cargo ou de reintegração do ocupante anterior.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Quais são as formas de vacância de cargo público previstas na Lei 8.112/90?",
    "back": "Exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Qual a diferença entre exoneração e demissão do servidor público?",
    "back": "Exoneração é o desligamento sem caráter punitivo, seja a pedido do servidor, seja de ofício (ex.: não aprovação em estágio probatório). Demissão é penalidade disciplinar aplicada em razão de infração funcional apurada em processo administrativo disciplinar.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Qual a teoria adotada pelo ordenamento brasileiro para a responsabilidade civil do Estado por atos comissivos?",
    "back": "A teoria da responsabilidade objetiva, na modalidade do risco administrativo: basta a comprovação de conduta do agente público, dano e nexo causal, sendo dispensada a prova de dolo ou culpa. O Estado pode se eximir ou atenuar sua responsabilidade demonstrando causa excludente, como culpa exclusiva da vítima, força maior ou fato de terceiro.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "A responsabilidade civil do Estado por omissão segue o mesmo regime da conduta comissiva?",
    "back": "A jurisprudência majoritária entende que, para omissões, aplica-se em regra a responsabilidade subjetiva, exigindo-se a demonstração de que o Estado tinha o dever legal de agir e faltou com esse dever (culpa do serviço), embora o tema comporte debate doutrinário.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "O Estado tem direito de regresso contra o agente público causador do dano?",
    "back": "Sim. Assegura-se à Administração o direito de regresso contra o agente responsável, nos casos de dolo ou culpa, depois de ter indenizado o terceiro lesado com base na responsabilidade objetiva.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Qual a diferença entre concessão e permissão de serviço público?",
    "back": "A concessão é formalizada por contrato administrativo, exige licitação na modalidade concorrência e é outorgada a pessoa jurídica ou consórcio de empresas. A permissão, embora também exija licitação e seja formalizada por contrato de adesão, é outorgada a pessoa física ou jurídica e tem, em tese, caráter mais precário e revogável.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "O que é autorização de serviço público e em que se diferencia de concessão e permissão?",
    "back": "Autorização é ato unilateral, discricionário e precário, normalmente utilizado para serviços de menor relevância ou emergenciais, dispensando licitação, diferentemente da concessão e da permissão, que dependem de prévio processo licitatório.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Qual a modalidade de licitação exigida para a concessão de serviço público?",
    "back": "A concorrência é a modalidade típica para outorga de concessões, dada a complexidade e o vulto econômico do objeto contratado.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "O que é desapropriação e qual sua natureza jurídica?",
    "back": "É a forma originária de aquisição da propriedade pelo Poder Público, mediante procedimento administrativo ou judicial, com base em necessidade pública, utilidade pública ou interesse social, e pagamento de indenização, em regra prévia, justa e em dinheiro.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "A desapropriação por interesse social para fins de reforma agrária admite indenização em dinheiro?",
    "back": "Não como regra geral: nessa modalidade a indenização é paga mediante títulos da dívida agrária, ressalvadas as benfeitorias úteis e necessárias, que são pagas em dinheiro.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "front": "Quais são as principais formas de intervenção do Estado na propriedade privada, além da desapropriação?",
    "back": "Servidão administrativa, requisição administrativa, ocupação temporária, tombamento e limitação administrativa, cada qual com grau distinto de restrição ao direito de propriedade.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "Qual a diferença entre empresário e sociedade empresária?",
    "back": "Empresário é a pessoa física (ou o ente individual) que exerce profissionalmente atividade econômica organizada para produção ou circulação de bens ou serviços. Sociedade empresária é a pessoa jurídica constituída por sócios que exercem coletivamente essa mesma atividade econômica organizada.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "Qual a diferença entre sociedade empresária e sociedade simples?",
    "back": "A sociedade empresária exerce atividade econômica com organização dos fatores de produção (capital, trabalho, insumos e tecnologia) de forma profissional. A sociedade simples exerce atividade intelectual, científica, literária ou artística, ou atividade econômica sem essa organização empresarial típica, ainda que com o concurso de auxiliares.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "O exercício de profissão intelectual (como advocacia ou medicina) é considerado atividade empresarial?",
    "back": "Em regra, não, salvo se o exercício da profissão constituir elemento de empresa, isto é, estiver inserido em uma organização empresarial mais ampla que o absorva como um dos fatores de produção.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "Como se dá, em regra, a responsabilidade dos sócios na sociedade limitada?",
    "back": "A responsabilidade de cada sócio é restrita ao valor de suas quotas, mas todos respondem solidariamente pela integralização do capital social, ou seja, enquanto o capital não estiver totalmente integralizado, os sócios respondem solidariamente por essa diferença perante terceiros.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "O que é o capital social integralizado e por que sua integralização é relevante na sociedade limitada?",
    "back": "É o efetivo aporte, pelos sócios, dos valores ou bens prometidos como contribuição ao capital social. Enquanto não integralizado, os sócios respondem solidariamente por eventual diferença, o que reduz a proteção patrimonial que a limitação de responsabilidade normalmente oferece.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "Na sociedade anônima (S/A), qual o limite de responsabilidade do acionista?",
    "back": "A responsabilidade do acionista é limitada ao preço de emissão das ações que subscreveu ou adquiriu, não respondendo, em regra, pelas obrigações sociais além desse valor.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "Qual a diferença essencial entre companhia aberta e companhia fechada?",
    "back": "Na companhia aberta, os valores mobiliários de sua emissão são admitidos à negociação no mercado de valores mobiliários (bolsa ou balcão), sujeitando-a a registro e fiscalização da autarquia reguladora do mercado de capitais. Na companhia fechada, não há essa negociação em mercado, e a fiscalização externa é menos intensa.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "O que é a desconsideração da personalidade jurídica?",
    "back": "É o instituto que permite, em casos de abuso da personalidade jurídica caracterizado por desvio de finalidade ou confusão patrimonial, estender os efeitos de obrigações da sociedade aos bens particulares dos administradores ou sócios beneficiados, afastando episodicamente a autonomia patrimonial da pessoa jurídica.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "Quais são as duas hipóteses que autorizam a desconsideração da personalidade jurídica segundo a teoria maior, adotada pelo Código Civil?",
    "back": "O desvio de finalidade (uso da sociedade para fins ilícitos ou estranhos ao seu objeto social) e a confusão patrimonial (mistura entre o patrimônio da sociedade e o dos sócios, sem separação contábil e fática clara).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "O que é a desconsideração inversa da personalidade jurídica?",
    "back": "É a hipótese em que se afastam os efeitos da autonomia patrimonial para atingir a sociedade por dívidas ou obrigações pessoais do sócio, geralmente usada quando o sócio esconde patrimônio próprio transferindo-o para a pessoa jurídica que controla.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "Quais são as principais características dos títulos de crédito, segundo a doutrina clássica?",
    "back": "Cartularidade (materialização em um documento), literalidade (produz efeitos nos exatos termos do que consta no título) e autonomia das obrigações cambiais (cada obrigação constante do título é independente das demais).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "O que é o princípio da abstração aplicado aos títulos de crédito e quando ele se manifesta?",
    "back": "É a desvinculação do título em relação ao negócio jurídico que lhe deu origem, de modo que, uma vez circulando por endosso para terceiro de boa-fé, o título passa a ser independente da causa subjacente, não podendo o devedor opor a esse terceiro exceções pessoais que tinha contra o credor original.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "O que é o endosso e qual sua principal função no título de crédito?",
    "back": "É o ato cambiário pelo qual o credor (endossante) transfere a titularidade do crédito representado pelo título a outra pessoa (endossatário), lançando sua assinatura no verso ou anverso do documento, servindo como forma de circulação do título.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "Qual a diferença entre endosso e cessão civil de crédito?",
    "back": "O endosso é ato cambiário que garante ao endossatário direito autônomo e literal, protegendo-o de vícios anteriores à sua aquisição (salvo má-fé), além de o endossante em regra garantir o pagamento. Na cessão civil, o cessionário recebe o crédito com os mesmos vícios e exceções que já existiam contra o cedente, e este não garante, em regra, a solvência do devedor.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "O que é o aval em um título de crédito?",
    "back": "É a garantia pessoal e autônoma pela qual um terceiro (avalista) se compromete a pagar o título nas mesmas condições que o avalizado, sendo sua obrigação independente da obrigação garantida, de modo que a nulidade desta não contamina o aval.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "Qual a diferença entre aval e fiança?",
    "back": "O aval é instituto cambiário, autônomo em relação à obrigação avalizada e regido pelo direito cambiário. A fiança é instituto do direito civil, garantia acessória que segue a sorte da obrigação principal (podendo o fiador arguir exceções relativas ao afiançado) e admite benefício de ordem, salvo renúncia expressa.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "O que é o estabelecimento empresarial?",
    "back": "É o conjunto organizado de bens materiais e imateriais (móveis, equipamentos, mercadorias, ponto, marca, clientela, tecnologia) que o empresário reúne e utiliza para o exercício da atividade empresarial, considerado universalidade de fato.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "O que é o trespasse do estabelecimento empresarial e qual sua principal formalidade legal?",
    "back": "É o contrato de alienação (venda) do estabelecimento empresarial. Para produzir efeitos perante terceiros, em regra exige-se a averbação à margem do registro do empresário e publicação, além de, quando o vendedor não possuir bens suficientes para solver seu passivo, o pagamento de credores ou seu consentimento expresso ou tácito.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "Quais são os requisitos objetivos para o empresário requerer recuperação judicial?",
    "back": "Exercer regularmente a atividade há mais de dois anos, não ser falido (ou, se foi, ter suas obrigações declaradas extintas) e não ter obtido recuperação judicial ou concedida recuperação com base no plano especial de microempresas/EPP em determinado período anterior, entre outros requisitos legais.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "Qual a diferença de finalidade entre recuperação judicial e falência?",
    "back": "A recuperação judicial visa viabilizar a superação da crise econômico-financeira do devedor, permitindo a manutenção da atividade, dos empregos e dos interesses dos credores. A falência é processo de execução coletiva que visa afastar o devedor inviável do mercado e liquidar seu patrimônio para pagamento ordenado dos credores.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "O que caracteriza a impontualidade injustificada como fundamento para o pedido de falência?",
    "back": "É a situação em que o devedor, sem relevante razão de direito, deixa de pagar, no vencimento, obrigação líquida representada por título executivo protestado, que ultrapasse o valor mínimo legal, permitindo a credores requererem a falência.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "Quem administra os bens e negócios do falido após a decretação da falência?",
    "back": "O administrador judicial, nomeado pelo juiz, assume a gestão e representação da massa falida, cabendo-lhe arrecadar bens, verificar créditos e conduzir a liquidação do ativo em benefício dos credores.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "O plano de recuperação judicial precisa necessariamente ser aprovado pelos credores para ser homologado?",
    "back": "Sim, em regra o plano deve ser submetido à assembleia geral de credores e aprovado segundo os quóruns legais por classe; excepcionalmente, o juiz pode conceder a recuperação mesmo sem aprovação unânime de todas as classes, desde que atendidos requisitos legais específicos (o chamado \"cram down\").",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "front": "Microempresas e empresas de pequeno porte têm tratamento diferenciado na recuperação judicial?",
    "back": "Sim, a lei prevê o plano especial de recuperação judicial para ME e EPP, com procedimento simplificado e condições próprias para parcelamento de dívidas, embora seu uso não impeça o pedido de recuperação pelo procedimento comum, observadas as restrições legais.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "Quais são os requisitos (elementos fático-jurídicos) da relação de emprego?",
    "back": "Pessoalidade, não eventualidade (habitualidade), onerosidade e subordinação, prestados por pessoa física em favor de um tomador de serviços. Faltando qualquer um deles, não há vínculo de emprego, ainda que exista prestação de trabalho.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "Qual a principal diferença entre empregado e trabalhador autônomo?",
    "back": "O empregado presta serviços de forma subordinada, seguindo ordens e diretrizes do tomador quanto ao modo de execução do trabalho. O autônomo executa a atividade com autonomia técnica, organizando por conta própria os meios, o tempo e o modo de trabalho, assumindo os riscos do próprio negócio.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "Qual é o limite constitucional de jornada de trabalho no Brasil?",
    "back": "8 horas diárias e 44 horas semanais, facultada a compensação de horários e a redução da jornada mediante acordo ou convenção coletiva de trabalho.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "Qual é a regra geral do intervalo intrajornada e quando ele é devido?",
    "back": "Em jornadas contínuas que excedam 6 horas, é obrigatório intervalo mínimo de 1 hora para repouso ou alimentação. Para jornadas entre 4 e 6 horas, o intervalo mínimo é de 15 minutos. Após a reforma trabalhista, a supressão parcial do intervalo gera apenas indenização do período suprimido, com natureza indenizatória, e não mais o pagamento do período total como hora extra.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "O que é o intervalo interjornadas e qual sua duração mínima?",
    "back": "É o descanso entre o fim de uma jornada de trabalho e o início da seguinte. A CLT exige um período mínimo de 11 horas consecutivas de descanso entre duas jornadas.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "Qual é o adicional mínimo devido pela hora extra trabalhada?",
    "back": "O adicional de hora extra não pode ser inferior a 50% sobre o valor da hora normal, salvo previsão mais benéfica em norma coletiva ou contrato.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "Como funciona o banco de horas após a reforma trabalhista (Lei 13.467/2017)?",
    "back": "O banco de horas pode ser instituído por acordo individual escrito, desde que a compensação ocorra no período máximo de 6 meses. Por acordo ou convenção coletiva, a compensação pode se estender por até 1 ano. Em qualquer caso, respeita-se o limite de 10 horas diárias de trabalho.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "Qual é a diferença entre compensação de jornada e banco de horas?",
    "back": "Na compensação simples (semana espanhola, por exemplo), as horas excedentes de um dia são compensadas em outro dia dentro da mesma semana ou de curto período, sem gerar crédito de horas. O banco de horas cria um sistema de crédito e débito de horas trabalhadas a mais, a serem compensadas dentro de um prazo determinado (6 meses ou 1 ano, conforme o instrumento).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "Como se calcula o período de férias e qual o adicional constitucional aplicável?",
    "back": "Após o período aquisitivo de 12 meses de trabalho, o empregado tem direito a até 30 dias de férias, a serem gozadas no período concessivo dos 12 meses subsequentes. Sobre a remuneração das férias incide o adicional constitucional de 1/3.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "O empregado pode vender parte das suas férias? Em que condições?",
    "back": "Sim. O empregado pode converter em abono pecuniário até 1/3 do período de férias a que tiver direito, mediante requerimento feito até 15 dias antes do término do período aquisitivo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "Como é calculado o 13º salário (gratificação natalina)?",
    "back": "Corresponde a 1/12 da remuneração devida em dezembro para cada mês trabalhado (ou fração igual ou superior a 15 dias) no ano. É pago em duas parcelas: a primeira até 30 de novembro e a segunda até 20 de dezembro, com os devidos descontos.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "Quais empregadas gozam de estabilidade provisória por gestação e até quando?",
    "back": "A empregada gestante tem estabilidade desde a confirmação da gravidez até 5 meses após o parto, sendo garantida mesmo quando a gravidez ocorre durante o aviso prévio, trabalhado ou indenizado.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "Qual é a estabilidade do dirigente sindical?",
    "back": "O empregado eleito para cargo de direção ou representação sindical tem garantia de emprego desde o registro da candidatura até um ano após o final do mandato, ainda que suplente, salvo cometimento de falta grave apurada em processo próprio.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "O que caracteriza a justa causa para dispensa do empregado pelo empregador?",
    "back": "É a falta grave cometida pelo empregado que autoriza a rescisão do contrato sem ônus para o empregador, como improbidade, incontinência de conduta, mau procedimento, desídia, embriaguez habitual ou em serviço, violação de segredo da empresa, indisciplina ou insubordinação, abandono de emprego, entre outras hipóteses previstas em lei.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "O que é rescisão indireta do contrato de trabalho?",
    "back": "É a modalidade de extinção contratual motivada por falta grave cometida pelo empregador, que autoriza o empregado a considerar o contrato rescindido e pleitear judicialmente as mesmas verbas devidas na dispensa sem justa causa. É como uma 'justa causa do empregador'.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "Qual a diferença entre salário e remuneração?",
    "back": "Salário é a contraprestação paga diretamente pelo empregador em razão do contrato de trabalho. Remuneração é conceito mais amplo, que abrange o salário mais as gorjetas e outras vantagens pagas por terceiros em razão do trabalho prestado.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "Qual a diferença entre suspensão e interrupção do contrato de trabalho?",
    "back": "Na suspensão, cessam todos os efeitos do contrato: não há prestação de serviços, nem pagamento de salário, nem contagem de tempo de serviço (ex.: afastamento por auxílio-doença após o 15º dia). Na interrupção, o contrato continua produzindo efeitos, mesmo sem prestação de serviços: o empregado recebe salário e o período conta como tempo de serviço (ex.: férias, primeiros 15 dias de afastamento por doença).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "Quais verbas rescisórias são devidas na dispensa sem justa causa?",
    "back": "Saldo de salário, aviso prévio (indenizado ou trabalhado), 13º salário proporcional, férias vencidas (se houver) e proporcionais com 1/3, além do saque do FGTS com multa de 40% sobre os depósitos.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "Como funciona o aviso prévio proporcional ao tempo de serviço?",
    "back": "O aviso prévio é de no mínimo 30 dias, acrescido de 3 dias por ano de serviço prestado na mesma empresa, até o máximo de 60 dias adicionais, totalizando até 90 dias.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "O que é o contrato de trabalho intermitente, criado pela reforma trabalhista?",
    "back": "É a modalidade em que a prestação de serviços não é contínua, alternando períodos de prestação e de inatividade, determinados em horas, dias ou meses, independentemente do tipo de atividade. O empregado é convocado com antecedência mínima e recebe apenas pelo período efetivamente trabalhado, com direitos proporcionais (férias, 13º, FGTS).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "O que caracteriza o grupo econômico trabalhista e qual sua principal consequência?",
    "back": "Ocorre quando duas ou mais empresas, mesmo com personalidade jurídica própria, estão sob direção, controle ou administração de uma delas, ou mantêm entre si relação de coordenação e interesse integrado. A consequência é a responsabilidade solidária das empresas integrantes do grupo pelas obrigações trabalhistas decorrentes da relação de emprego.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "front": "O que é sucessão trabalhista e qual seu efeito principal?",
    "back": "Ocorre quando há mudança na propriedade ou na estrutura jurídica da empresa (venda, fusão, incorporação), sem que isso afete os contratos de trabalho vigentes. O sucessor assume as obrigações trabalhistas, respondendo pelos débitos anteriores à sucessão, em regra.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "front": "Qual é a competência da Justiça do Trabalho segundo a Constituição Federal?",
    "back": "Compete à Justiça do Trabalho processar e julgar as ações oriundas da relação de trabalho (gênero, não apenas a relação de emprego), abrangidos os entes de direito público externo e a administração pública direta e indireta da União, Estados, Distrito Federal e Municípios, além de outras controvérsias decorrentes da relação de trabalho previstas em lei.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "front": "Quais são os efeitos do não comparecimento das partes à audiência trabalhista?",
    "back": "O não comparecimento do reclamante importa arquivamento da reclamação (equivalente à extinção sem resolução do mérito). O não comparecimento do reclamado importa revelia e confissão quanto à matéria de fato, presumindo-se verdadeiros os fatos alegados na petição inicial.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "front": "O que é o procedimento sumaríssimo no processo do trabalho e qual seu limite de alçada?",
    "back": "É rito mais célere e simplificado aplicável aos dissídios individuais cujo valor da causa não exceda a 40 vezes o salário-mínimo vigente na data do ajuizamento. Estão excluídas desse procedimento as demandas em que for parte a Administração Pública direta, autárquica e fundacional.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "front": "Como se distribui o ônus da prova no processo do trabalho, como regra geral?",
    "back": "O ônus da prova incumbe a quem alega o fato, tanto quanto ao direito material quanto ao processual: ao reclamante, quanto ao fato constitutivo de seu direito; ao reclamado, quanto à existência de fato impeditivo, modificativo ou extintivo do direito do reclamante.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "front": "Quais títulos podem ser executados na Justiça do Trabalho?",
    "back": "As decisões transitadas em julgado ou das quais não haja recurso com efeito suspensivo, os acordos não cumpridos, os termos de ajuste de conduta firmados perante o Ministério Público do Trabalho e os termos de conciliação firmados perante as Comissões de Conciliação Prévia.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "front": "Qual é o cabimento e o prazo do Recurso Ordinário (RO) trabalhista?",
    "back": "Cabe recurso ordinário das decisões definitivas ou terminativas proferidas por Juízes ou Varas do Trabalho (primeira instância) para o Tribunal Regional do Trabalho, no prazo de 8 dias.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "front": "Qual é o cabimento do Agravo de Petição na Justiça do Trabalho?",
    "back": "Cabe agravo de petição das decisões proferidas pelo Juiz ou Presidente do Tribunal na fase de execução, no prazo de 8 dias. É o recurso próprio da fase executória trabalhista.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "front": "Qual é o cabimento do Recurso de Revista?",
    "back": "Cabe recurso de revista para o Tribunal Superior do Trabalho das decisões proferidas em grau de recurso ordinário, em dissídio individual, pelos Tribunais Regionais do Trabalho, quando contrariarem súmula de jurisprudência uniforme do TST ou súmula vinculante do STF, violarem literal disposição de lei federal ou da Constituição, ou derem a mesmo dispositivo de lei federal interpretação diversa da adotada por outro Tribunal Regional.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "front": "Qual é o cabimento dos Embargos no processo do trabalho?",
    "back": "Cabem embargos, dirigidos à Subseção Especializada em Dissídios Individuais (SDI) do TST, contra decisões de Turmas do TST, principalmente para uniformizar divergência entre Turmas ou entre a decisão da Turma e súmula ou orientação do próprio Tribunal.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "front": "Qual é o cabimento do Agravo de Instrumento na Justiça do Trabalho? (Cuidado para não confundir com Agravo de Petição)",
    "back": "Cabe agravo de instrumento dos despachos que denegarem seguimento (admissibilidade) a recursos trabalhistas, no prazo de 8 dias. Sua finalidade é destrancar o recurso principal que teve seguimento negado, sendo dirigido ao próprio tribunal que julgaria o recurso denegado.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "front": "Qual a diferença fundamental entre Agravo de Petição e Agravo de Instrumento no processo do trabalho?",
    "back": "O Agravo de Petição é o recurso cabível contra decisões proferidas na fase de execução trabalhista. Já o Agravo de Instrumento serve para destrancar um recurso (como o RO ou o Recurso de Revista) cujo seguimento foi negado pelo juízo a quo, e não guarda relação com a fase executória. São recursos com finalidades e momentos processuais totalmente distintos, apesar dos nomes parecidos.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "front": "Qual é o efeito regra dos recursos trabalhistas: suspensivo ou devolutivo?",
    "back": "Como regra, os recursos trabalhistas são recebidos apenas no efeito devolutivo, permitindo-se a execução provisória até a penhora, salvo as exceções expressamente previstas em lei (que admitem efeito suspensivo).",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "front": "O que é o depósito recursal no processo do trabalho e qual sua finalidade?",
    "back": "É a exigência de depósito em dinheiro, em valor tabelado e atualizado periodicamente, imposta ao empregador recorrente como garantia do juízo, condicionando o conhecimento de determinados recursos (RO, recurso de revista etc.) à sua efetivação, dentro do valor da condenação.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "front": "Como ficaram os honorários advocatícios de sucumbência no processo do trabalho após a reforma?",
    "back": "A reforma trabalhista (Lei 13.467/2017) passou a admitir honorários de sucumbência recíproca no processo do trabalho, cabendo ao juízo fixar percentual entre 5% e 15% sobre o valor da condenação, do proveito econômico obtido ou, não sendo possível mensurá-lo, sobre o valor atualizado da causa, devidos inclusive pelo beneficiário da justiça gratuita que tenha créditos capazes de suportar a despesa.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "front": "Quem tem direito aos benefícios da justiça gratuita no processo do trabalho?",
    "back": "Tem direito à gratuidade da justiça quem percebe salário igual ou inferior a 40% do limite máximo dos benefícios do Regime Geral de Previdência Social, ou quem comprovar insuficiência de recursos para arcar com as despesas processuais, mediante declaração ou outros meios de prova.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "Qual a diferença entre competência tributária e capacidade tributária ativa?",
    "back": "Competência tributária é o poder constitucional, indelegável, de instituir tributos, atribuído a União, Estados, Distrito Federal e Municípios. Capacidade tributária ativa é a aptidão para figurar no polo ativo da relação jurídico-tributária, arrecadando e fiscalizando o tributo, que pode ser delegada a outra pessoa jurídica de direito público.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "Qual a diferença entre imposto e taxa?",
    "back": "O imposto é tributo não vinculado a uma atuação estatal específica, tendo por fato gerador situação independente de qualquer atividade do Estado relativa ao contribuinte. A taxa é tributo vinculado, cobrado em razão do exercício regular do poder de polícia ou da utilização, efetiva ou potencial, de serviço público específico e divisível.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "O que é contribuição de melhoria e qual seu fato gerador?",
    "back": "É tributo vinculado cobrado dos proprietários de imóveis beneficiados por obra pública, tendo como fato gerador a valorização imobiliária decorrente da obra, e como limite total o custo da obra e, individual, o acréscimo de valor de cada imóvel.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "Quantas e quais são as espécies tributárias reconhecidas pela teoria pentapartida, adotada pelo STF?",
    "back": "Cinco espécies: impostos, taxas, contribuições de melhoria, empréstimos compulsórios e contribuições especiais (sociais, de intervenção no domínio econômico e de interesse de categorias profissionais ou econômicas).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "O que estabelece o princípio da legalidade tributária?",
    "back": "É vedado à União, Estados, Distrito Federal e Municípios exigir ou aumentar tributo sem lei que o estabeleça, ressalvadas as exceções constitucionais que permitem a alteração de alíquotas de certos tributos por ato do Poder Executivo, dentro de limites legais.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "O que é o princípio da anterioridade tributária anual (ou de exercício)?",
    "back": "Veda a cobrança de tributos no mesmo exercício financeiro em que haja sido publicada a lei que os instituiu ou aumentou, garantindo que o contribuinte não seja surpreendido dentro do mesmo ano fiscal.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "O que é o princípio da noventena (anterioridade nonagesimal)?",
    "back": "Veda a cobrança de tributos antes de decorridos 90 dias da data de publicação da lei que os instituiu ou aumentou. Aplica-se cumulativamente com a anterioridade anual, salvo exceções constitucionais específicas para cada uma das regras.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "Cite exemplos de tributos que são exceção à anterioridade anual, mas se sujeitam à noventena.",
    "back": "As contribuições sociais para financiamento da seguridade social seguem apenas a noventena (não a anterioridade anual). Já o IPI é exceção à anterioridade anual, mas se sujeita à noventena. Já II, IE, IOF e impostos extraordinários de guerra são exceções a ambas as regras.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "O que estabelece o princípio da irretroatividade tributária?",
    "back": "A lei tributária, em regra, não pode retroagir para alcançar fatos geradores ocorridos antes de sua vigência, aplicando-se aos fatos geradores futuros e aos pendentes. Há exceções, como a lei interpretativa ou a lei mais benéfica em matéria de penalidades.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "O que dispõe o princípio da isonomia tributária?",
    "back": "Veda tratamento desigual entre contribuintes que se encontrem em situação equivalente, sendo proibida qualquer distinção em razão de ocupação profissional ou função exercida, independentemente da denominação jurídica dos rendimentos, títulos ou direitos.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "O que é o princípio do não confisco em matéria tributária?",
    "back": "Veda a instituição de tributo com efeito de confisco, ou seja, que retire do contribuinte parcela desproporcional e excessiva de seu patrimônio ou renda, comprometendo o exercício de atividades econômicas lícitas ou o mínimo existencial.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "Qual a diferença entre imunidade e isenção tributária?",
    "back": "A imunidade é limitação constitucional ao poder de tributar: impede que a norma de competência sequer alcance determinadas situações, pessoas ou bens. A isenção é dispensa legal do pagamento de tributo devido: o fato gerador ocorre e a obrigação tributária nasce, mas a lei infraconstitucional exclui o crédito tributário correspondente.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "Em que consiste a imunidade tributária recíproca?",
    "back": "Veda que a União, os Estados, o Distrito Federal e os Municípios instituam impostos sobre patrimônio, renda ou serviços uns dos outros, protegendo o pacto federativo. Não abrange, em regra, taxas e contribuições, nem afasta a responsabilidade tributária por substituição.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "Quais são as hipóteses de suspensão da exigibilidade do crédito tributário?",
    "back": "Moratória, depósito do montante integral, reclamações e recursos administrativos, concessão de medida liminar em mandado de segurança, concessão de medida liminar ou tutela antecipada em outras ações judiciais, e parcelamento.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "Quais são as principais hipóteses de extinção do crédito tributário?",
    "back": "Pagamento, compensação, transação, remissão, prescrição e decadência, conversão de depósito em renda, pagamento antecipado com homologação, consignação em pagamento julgada procedente, decisão administrativa ou judicial irreformável favorável ao contribuinte, e dação em pagamento de bens imóveis, na forma da lei.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "Quais são as hipóteses de exclusão do crédito tributário?",
    "back": "Isenção e anistia. Ao contrário da extinção, a exclusão impede a própria constituição definitiva do crédito, mas a obrigação tributária acessória permanece, salvo disposição em contrário.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "Qual a diferença entre prescrição e decadência tributária?",
    "back": "A decadência é o prazo que a Fazenda Pública tem para constituir o crédito tributário pelo lançamento (em regra, 5 anos). A prescrição é o prazo que a Fazenda Pública tem para cobrar judicialmente o crédito já constituído e não pago (também, em regra, 5 anos, contados da constituição definitiva do crédito).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "A partir de quando, em regra, se conta o prazo decadencial para o lançamento tributário?",
    "back": "Em regra, conta-se do primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado, salvo regras específicas para tributos sujeitos a lançamento por homologação, quando há antecipação de pagamento.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "O que é responsabilidade tributária e qual sua principal distinção em relação à sujeição passiva direta (contribuinte)?",
    "back": "Responsabilidade tributária ocorre quando a lei atribui o dever de pagar o tributo a terceira pessoa, que não realizou o fato gerador, mas possui vínculo com a situação que o originou. Difere do contribuinte, que é quem tem relação pessoal e direta com o fato gerador.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "O que caracteriza a responsabilidade tributária por sucessão?",
    "back": "Ocorre quando o sucessor (por exemplo, adquirente de imóvel, espólio, ou empresa incorporadora/adquirente de fundo de comércio) passa a responder pelos tributos devidos pelo antecessor relativos ao bem ou à atividade transferida, nos termos e limites previstos no Código Tributário Nacional.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "front": "É possível a delegação da competência tributária entre os entes federativos?",
    "back": "Não. A competência tributária é indelegável. É possível, porém, delegar as funções de arrecadar ou fiscalizar tributos, ou de executar leis, serviços, atos ou decisões administrativas em matéria tributária, de uma pessoa jurídica de direito público a outra — o que caracteriza a capacidade tributária ativa, e não a competência em si.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "front": "O que é o Plano Plurianual (PPA) e qual seu papel no orçamento público?",
    "back": "É a lei que estabelece, de forma regionalizada, as diretrizes, objetivos e metas da administração pública para as despesas de capital e outras delas decorrentes, além das relativas aos programas de duração continuada, com vigência de quatro anos.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "front": "O que é a Lei de Diretrizes Orçamentárias (LDO) e qual sua função?",
    "back": "É a lei anual que orienta a elaboração da Lei Orçamentária Anual, estabelecendo metas e prioridades da administração pública, incluindo as despesas de capital para o exercício seguinte, além de dispor sobre alterações na legislação tributária e a política de aplicação das agências financeiras oficiais de fomento.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "front": "O que é a Lei Orçamentária Anual (LOA)?",
    "back": "É a lei que estima as receitas e fixa as despesas do ente público para o exercício financeiro seguinte, compreendendo o orçamento fiscal, o orçamento de investimento das estatais e o orçamento da seguridade social, elaborada em consonância com o PPA e a LDO.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "front": "O que estabelece o princípio orçamentário da unidade?",
    "back": "Determina que o orçamento público deve ser uno, ou seja, cada ente federativo deve ter apenas um orçamento para cada exercício financeiro, reunindo todas as receitas e despesas em um único documento, e não em peças orçamentárias distintas e paralelas.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "front": "O que estabelece o princípio orçamentário da universalidade?",
    "back": "Exige que o orçamento contenha todas as receitas e todas as despesas do ente público, de todos os poderes, órgãos, fundos e entidades da administração direta e indireta, sem exclusões, permitindo o controle global das finanças públicas.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "front": "O que estabelece o princípio orçamentário da anualidade (ou periodicidade)?",
    "back": "O orçamento deve ser elaborado e autorizado para vigorar por um determinado período de tempo, em regra coincidente com o ano civil (exercício financeiro de 1º de janeiro a 31 de dezembro no Brasil), sendo renovado periodicamente.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "front": "O que estabelece o princípio orçamentário da exclusividade?",
    "back": "A lei orçamentária não pode conter dispositivo estranho à previsão da receita e à fixação da despesa, ressalvada a autorização para abertura de créditos suplementares e a contratação de operações de crédito, ainda que por antecipação de receita.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "front": "Quais os limites de despesa total com pessoal impostos pela Lei de Responsabilidade Fiscal para cada ente federativo, em relação à receita corrente líquida?",
    "back": "Os limites máximos são: 50% para a União e 60% para Estados e Municípios, calculados sobre a receita corrente líquida do respectivo ente.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "front": "Quais são os principais instrumentos de transparência da gestão fiscal previstos na Lei de Responsabilidade Fiscal?",
    "back": "Os planos, orçamentos e leis de diretrizes orçamentárias; as prestações de contas e o respectivo parecer prévio; o Relatório Resumido da Execução Orçamentária; e o Relatório de Gestão Fiscal, todos com ampla divulgação, inclusive por meios eletrônicos de acesso público.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "front": "O que a Lei de Responsabilidade Fiscal entende por gestão fiscal responsável?",
    "back": "É a ação planejada e transparente que previne riscos e corrige desvios capazes de afetar o equilíbrio das contas públicas, mediante o cumprimento de metas de resultados entre receitas e despesas e a observância de limites e condições quanto à renúncia de receita, geração de despesas com pessoal e com a seguridade social, dívida pública, operações de crédito, concessão de garantias e inscrição em Restos a Pagar.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "front": "O que são créditos adicionais e quais suas modalidades?",
    "back": "São autorizações de despesa não computadas ou insuficientemente dotadas na Lei Orçamentária Anual. Classificam-se em: suplementares (reforço de dotação já existente), especiais (despesas sem dotação orçamentária específica) e extraordinários (despesas urgentes e imprevisíveis, como guerra ou calamidade pública).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "front": "É permitido iniciar programas ou projetos não incluídos na lei orçamentária anual?",
    "back": "Não. É vedado o início de programas ou projetos não incluídos na Lei Orçamentária Anual, em observância aos princípios da universalidade e da exclusividade orçamentária.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "front": "Qual a natureza jurídica e a data de adoção da Declaração Universal dos Direitos Humanos (DUDH)?",
    "back": "É uma resolução da Assembleia Geral da ONU, adotada em 10 de dezembro de 1948, sem força vinculante direta de tratado (soft law), mas que se tornou referência moral e jurídica universal e fonte de diversos tratados posteriores.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "front": "O que é a Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica)?",
    "back": "É o principal tratado do sistema interamericano de proteção aos direitos humanos, adotado em 1969 e ratificado pelo Brasil em 1992, que cria a Comissão Interamericana e a Corte Interamericana de Direitos Humanos.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "front": "O que é controle de convencionalidade?",
    "back": "É a verificação da compatibilidade das normas internas com os tratados internacionais de direitos humanos ratificados pelo Estado, podendo ser exercido tanto por tribunais internacionais (controle concentrado, pela Corte Interamericana) quanto pelos juízes internos (controle difuso).",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "front": "Tratados de direitos humanos aprovados com quórum de emenda constitucional têm que status no Brasil?",
    "back": "Equivalem a emendas constitucionais (art. 5º, §3º, da CF), exigindo aprovação em dois turnos por três quintos dos votos em cada Casa do Congresso Nacional. Os demais tratados de direitos humanos, não aprovados por esse rito, têm status supralegal.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "front": "Qual a diferença entre o sistema global (ONU) e o sistema regional interamericano de proteção aos direitos humanos?",
    "back": "O sistema global, ligado à ONU, tem alcance universal e abrange todos os Estados-membros, com órgãos como o Conselho de Direitos Humanos; o sistema interamericano é regional, vinculado à OEA, e conta com a Comissão e a Corte Interamericana de Direitos Humanos, atuando de forma complementar ao sistema global.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "front": "O que caracteriza os direitos humanos de primeira dimensão (ou geração)?",
    "back": "São os direitos civis e políticos, ligados à liberdade e à limitação do poder estatal (ex.: vida, liberdade, propriedade, participação política), surgidos com as revoluções liberais dos séculos XVIII e XIX.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "front": "O que caracteriza os direitos humanos de segunda dimensão?",
    "back": "São os direitos sociais, econômicos e culturais, ligados à igualdade material e que exigem prestações positivas do Estado (ex.: saúde, educação, trabalho, previdência social).",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "front": "O que caracteriza os direitos humanos de terceira dimensão?",
    "back": "São os direitos de titularidade coletiva ou difusa, ligados à fraternidade e solidariedade, como o direito ao meio ambiente equilibrado, à paz, ao desenvolvimento e à autodeterminação dos povos.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "front": "Quais são os órgãos de proteção aos direitos humanos previstos na Convenção Americana?",
    "back": "A Comissão Interamericana de Direitos Humanos, que recebe petições e emite recomendações, e a Corte Interamericana de Direitos Humanos, órgão jurisdicional que profere sentenças vinculantes para os Estados que reconheceram sua competência contenciosa, como o Brasil.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "front": "O que é o princípio da vedação do retrocesso (efeito cliquet) em direitos humanos?",
    "back": "É o princípio segundo o qual, uma vez alcançado um determinado nível de proteção ou efetivação de um direito humano, não é admissível que o Estado promova sua supressão ou redução sem justificativa proporcional e razoável.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "front": "O que significa dizer que os direitos humanos são indivisíveis e interdependentes?",
    "back": "Significa que os direitos civis, políticos, sociais, econômicos e culturais formam um conjunto único, sem hierarquia entre si, de modo que a efetivação de uns depende e reforça a efetivação dos demais.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "front": "Quem pode apresentar petições à Comissão Interamericana de Direitos Humanos alegando violação da Convenção Americana?",
    "back": "Qualquer pessoa, grupo de pessoas ou entidade não governamental legalmente reconhecida em um ou mais Estados-membros da OEA, sem necessidade de ser a própria vítima da violação.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "front": "Pela LINDB, qual lei rege as regras sobre o começo e o fim da personalidade, o nome, a capacidade e os direitos de família?",
    "back": "Aplica-se a lei do país em que a pessoa é domiciliada (princípio do domicílio), e não a lei da nacionalidade.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "front": "Qual a lei aplicável para reger as obrigações contratuais, segundo a LINDB, na ausência de disposição em contrário?",
    "back": "Aplica-se, em regra, a lei do país em que a obrigação foi constituída (lex loci contractus); se o proponente for domiciliado no exterior, aplica-se a lei do domicílio do proponente, salvo situações específicas previstas na norma.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "front": "Qual lei rege os bens, segundo a LINDB?",
    "back": "Os bens são regulados pela lei do país em que estiverem situados (lex rei sitae), independentemente da nacionalidade ou domicílio do proprietário, ressalvadas regras específicas sobre bens móveis que o proprietário transporta consigo e sobre penhor.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "front": "Qual lei se aplica à sucessão por morte ou por ausência, segundo a LINDB?",
    "back": "Aplica-se, em regra, a lei do domicílio do falecido ou do desaparecido, ainda que os bens estejam situados em outro país; porém, quanto à sucessão de bens de estrangeiros situados no Brasil, aplica-se a lei brasileira quando esta for mais favorável ao cônjuge ou aos filhos brasileiros.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "front": "Como se adquire a nacionalidade brasileira originária?",
    "back": "Pelo critério do jus soli (nascidos no Brasil, ainda que de pais estrangeiros, salvo se estes estiverem a serviço de seu país) e, excepcionalmente, pelo jus sanguinis combinado com registro ou residência, para os nascidos no exterior de pai ou mãe brasileiros.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "front": "Qual a diferença entre extradição, expulsão e deportação?",
    "back": "Extradição é a entrega de pessoa a outro Estado para responder a processo ou cumprir pena, a pedido do país solicitante; expulsão é a retirada compulsória do estrangeiro que cometeu ato nocivo à ordem pública ou aos interesses nacionais; deportação é a retirada do estrangeiro em situação migratória irregular, sem caráter punitivo, geralmente por infração administrativa.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "front": "O brasileiro nato pode ser extraditado?",
    "back": "Não. A Constituição veda a extradição de brasileiro nato em qualquer hipótese; o brasileiro naturalizado só pode ser extraditado em caso de crime comum praticado antes da naturalização, ou de comprovado envolvimento em tráfico ilícito de entorpecentes e drogas afins, na forma da lei, a qualquer tempo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "front": "O que é homologação de sentença estrangeira e a quem compete no Brasil?",
    "back": "É o procedimento pelo qual uma decisão judicial proferida por tribunal estrangeiro passa a produzir efeitos e ser executável no Brasil; a competência para homologar sentenças estrangeiras é do Superior Tribunal de Justiça (STJ).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "front": "O que é carta rogatória e qual sua finalidade?",
    "back": "É o instrumento de cooperação jurídica internacional pelo qual uma autoridade judiciária de um país solicita a outro a prática de atos processuais (como citação, intimação ou colheita de provas), sendo, no Brasil, o STJ o órgão competente para conceder o exequatur às cartas rogatórias passivas.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "front": "Qual a diferença entre tratados internacionais bilaterais e multilaterais?",
    "back": "Tratados bilaterais são celebrados entre apenas dois sujeitos de direito internacional (geralmente dois Estados); tratados multilaterais envolvem três ou mais sujeitos, sendo comuns em convenções de alcance regional ou universal, como as da ONU.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "front": "Qual o papel do Congresso Nacional na incorporação de tratados internacionais ao ordenamento jurídico brasileiro?",
    "back": "Compete ao Congresso Nacional resolver definitivamente sobre tratados, acordos ou atos internacionais que acarretem encargos ou compromissos gravosos ao patrimônio nacional, por meio de decreto legislativo, cabendo ao Presidente da República celebrar o tratado e, após a aprovação, promulgá-lo e publicá-lo por decreto executivo para que produza efeitos internos.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "front": "Quais são as condições de elegibilidade previstas na Constituição Federal?",
    "back": "Nacionalidade brasileira, pleno exercício dos direitos políticos, alistamento eleitoral, domicílio eleitoral na circunscrição, filiação partidária e idade mínima, variável conforme o cargo pretendido.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "front": "Qual a diferença entre condições de elegibilidade e causas de inelegibilidade?",
    "back": "As condições de elegibilidade são requisitos positivos que o candidato deve preencher para poder concorrer (ex.: idade mínima, filiação partidária); as inelegibilidades são impedimentos, previstos na Constituição e na Lei Complementar 64/1990, que obstam o registro da candidatura mesmo que as condições de elegibilidade estejam presentes (ex.: condenação por órgão colegiado, parentesco com titular do Executivo).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "front": "O que é inelegibilidade reflexa e quem ela atinge?",
    "back": "É a inelegibilidade que atinge o cônjuge e os parentes consanguíneos ou afins até o segundo grau (ou por adoção) do titular do Poder Executivo, para concorrer no território de jurisdição do titular, salvo se já forem titulares de mandato eletivo e candidatos à reeleição.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "front": "Quais são as hipóteses constitucionais de perda dos direitos políticos?",
    "back": "Cancelamento da naturalização por sentença transitada em julgado e recusa de cumprir obrigação a todos imposta ou prestação alternativa, nos termos do art. 5º, VIII, da Constituição.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "front": "Quais são as hipóteses constitucionais de suspensão dos direitos políticos?",
    "back": "Incapacidade civil absoluta, condenação criminal transitada em julgado (enquanto durarem seus efeitos) e improbidade administrativa, nos termos do art. 37, §4º, da Constituição.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "front": "O alistamento eleitoral e o voto são obrigatórios para quem?",
    "back": "São obrigatórios para os maiores de 18 e menores de 70 anos; são facultativos para os analfabetos, os maiores de 70 anos e os maiores de 16 e menores de 18 anos.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "front": "O que dispõe o princípio da anterioridade eleitoral (art. 16 da Constituição)?",
    "back": "A lei que alterar o processo eleitoral entra em vigor na data de sua publicação, mas não se aplica à eleição que ocorra até um ano da data de sua vigência, garantindo segurança jurídica e igualdade de condições entre os concorrentes.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "front": "Os partidos políticos têm natureza de pessoa jurídica de que tipo?",
    "back": "Têm natureza de pessoa jurídica de direito privado, adquirindo personalidade jurídica na forma da lei civil, e devem registrar seus estatutos no Tribunal Superior Eleitoral (TSE) após esse registro.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "front": "O que é a cláusula de fidelidade partidária no direito eleitoral brasileiro?",
    "back": "É o entendimento, consolidado pelo TSE e pelo STF, de que o mandato eletivo obtido pelo sistema proporcional pertence, em regra, ao partido político, de modo que a desfiliação partidária sem justa causa pode ensejar a perda do mandato.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "front": "Qual o prazo mínimo de filiação partidária exigido para concorrer a cargo eletivo?",
    "back": "É necessário estar filiado a partido político no prazo previsto em lei antes do pleito, sendo a filiação partidária uma das condições de elegibilidade previstas constitucionalmente.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "front": "Qual órgão da Justiça Eleitoral é competente para processar e julgar o registro de candidatura a Presidente e Vice-Presidente da República?",
    "back": "Compete ao Tribunal Superior Eleitoral (TSE) processar e julgar originariamente o registro das candidaturas a Presidente e Vice-Presidente da República.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "front": "Qual a diferença entre segurado e dependente no Regime Geral de Previdência Social (RGPS)?",
    "back": "O segurado é a pessoa que contribui diretamente para a Previdência Social, seja obrigatória ou facultativamente; o dependente não contribui diretamente, mas tem direito a benefícios em razão de seu vínculo com o segurado (ex.: cônjuge, filhos, pais), organizados em classes preferenciais.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "front": "O que é a 'qualidade de segurado' e por que ela é relevante?",
    "back": "É a condição de vínculo do indivíduo com a Previdência Social que o mantém protegido pelo sistema; sem a manutenção dessa qualidade, o segurado perde o direito à maioria dos benefícios previdenciários, ainda que preencha os demais requisitos.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "front": "O que é o 'período de graça' na Previdência Social?",
    "back": "É o período em que a pessoa mantém a qualidade de segurado mesmo sem contribuir, em razão de situações como desemprego, prestação de serviço militar ou cessação de benefício por incapacidade, com prazos que variam conforme a situação (em regra, 12 meses, podendo ser prorrogado).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "front": "O que é carência, em matéria previdenciária?",
    "back": "É o número mínimo de contribuições mensais exigidas para que o segurado tenha direito a determinado benefício, contado a partir do início da filiação ao RGPS, sendo dispensada carência em algumas situações, como acidente de qualquer natureza.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "front": "Qual a diferença entre auxílio-doença (incapacidade temporária) e aposentadoria por incapacidade permanente?",
    "back": "O auxílio-doença (atualmente denominado auxílio por incapacidade temporária) é devido quando o segurado fica temporariamente incapaz para o trabalho, sendo pago enquanto durar a incapacidade; a aposentadoria por incapacidade permanente é devida quando a incapacidade é considerada insuscetível de reabilitação para o exercício de atividade que garanta a subsistência, gerando benefício em regra vitalício.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "front": "Quem tem direito à pensão por morte no RGPS?",
    "back": "Os dependentes do segurado falecido, aposentado ou não, desde que comprovada a condição de dependência e, em regra, a qualidade de segurado do instituidor à data do óbito, com regras específicas de duração conforme a idade e o tempo de casamento ou união estável do cônjuge ou companheiro.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "front": "Quem tem direito ao salário-maternidade e qual sua finalidade?",
    "back": "É devido à segurada gestante, adotante ou que obtenha guarda judicial para fins de adoção, com a finalidade de substituir sua remuneração durante o afastamento por licença-maternidade, sendo também estendido, em determinadas hipóteses, ao segurado que adota ou obtém guarda judicial para fins de adoção.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "front": "O RGPS adota qual tipo de filiação: obrigatória, facultativa ou ambas?",
    "back": "Admite ambas: a filiação é obrigatória para quem exerce atividade remunerada abrangida pelo regime (empregados, contribuintes individuais, trabalhadores avulsos, entre outros) e facultativa para quem, mesmo sem exercer atividade remunerada, deseja se filiar voluntariamente ao sistema (ex.: dona de casa, estudante).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "front": "O que caracteriza o regime de repartição simples adotado pelo RGPS?",
    "back": "É o sistema em que as contribuições dos segurados ativos financiam, de forma solidária, o pagamento dos benefícios dos atuais aposentados e pensionistas, sem formação de reserva individual de capital para cada segurado.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "front": "Quem são os dependentes de primeira classe do segurado, no RGPS?",
    "back": "São o cônjuge, o companheiro ou companheira e os filhos não emancipados de qualquer condição, menores de 21 anos ou inválidos, ou que tenham deficiência intelectual, mental ou grave; a existência de dependente de classe anterior exclui o direito ao benefício dos das classes seguintes.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "front": "Qual a diferença entre benefício previdenciário e benefício assistencial (BPC/LOAS)?",
    "back": "O benefício previdenciário depende de contribuição prévia ao sistema (caráter contributivo); o benefício assistencial, como o BPC/LOAS, independe de contribuição e é destinado a idosos e pessoas com deficiência em situação de miserabilidade, custeado pela assistência social.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "front": "O que é a aposentadoria programável e quais suas principais espécies após a Reforma da Previdência (EC 103/2019)?",
    "back": "É a aposentadoria concedida mediante o cumprimento cumulativo de requisitos de idade mínima e tempo de contribuição, tendo como principais espécies a aposentadoria por idade e a aposentadoria por tempo de contribuição, com regras de transição para quem já era filiado ao sistema antes da reforma.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "front": "O que é o princípio do poluidor-pagador no Direito Ambiental?",
    "back": "É o princípio segundo o qual aquele que explora atividade econômica com potencial poluidor deve arcar com os custos de prevenção, reparação e repressão do dano ambiental, internalizando esses custos em sua atividade, sem que isso configure autorização para poluir mediante pagamento.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "front": "Em que consiste o princípio da prevenção e como ele se diferencia do princípio da precaução?",
    "back": "A prevenção aplica-se a riscos já conhecidos e cientificamente comprovados, exigindo medidas concretas para evitar o dano; a precaução aplica-se a riscos incertos ou ainda não plenamente comprovados pela ciência, orientando a adoção de medidas cautelares mesmo diante de incerteza científica (in dubio pro natura).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "front": "A responsabilidade civil por dano ambiental é subjetiva ou objetiva?",
    "back": "É objetiva, na modalidade de risco integral, bastando a comprovação do dano e do nexo de causalidade com a atividade do poluidor, sendo irrelevante a discussão sobre culpa e não se admitindo, segundo entendimento consolidado, as excludentes de caso fortuito ou força maior para afastar o dever de reparar.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "front": "O que caracteriza a tríplice responsabilização em matéria ambiental?",
    "back": "A conduta lesiva ao meio ambiente pode gerar, cumulativamente e de forma independente, responsabilidade civil (reparação do dano), responsabilidade administrativa (sanções aplicadas pelo órgão ambiental, como multas) e responsabilidade penal (crimes ambientais), sem que a aplicação de uma afaste as demais.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "front": "O que é licenciamento ambiental?",
    "back": "É o procedimento administrativo pelo qual o órgão ambiental competente licencia a localização, instalação, ampliação e operação de empreendimentos e atividades que utilizam recursos ambientais, considerados efetiva ou potencialmente poluidores, dividindo-se, em regra, nas fases de licença prévia, licença de instalação e licença de operação.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "front": "Qual a diferença entre licença ambiental e autorização ambiental?",
    "back": "A licença é ato administrativo vinculado, resultado de procedimento complexo e faseado, exigida para empreendimentos que utilizam recursos ambientais de forma efetiva ou potencialmente poluidora; a autorização é ato precário, discricionário e mais simples, usada para atividades pontuais e temporárias, como supressão de vegetação ou transporte de produtos perigosos.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "front": "A competência para legislar sobre meio ambiente no Brasil é privativa de um único ente federativo?",
    "back": "Não. A competência legislativa em matéria ambiental é concorrente entre União, Estados e Distrito Federal, cabendo à União editar normas gerais e aos Estados e ao Distrito Federal suplementá-las; a competência para proteger o meio ambiente e combater a poluição, por sua vez, é comum a todos os entes federativos (União, Estados, Distrito Federal e Municípios).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "front": "O que é o princípio do desenvolvimento sustentável?",
    "back": "É o princípio que busca conciliar o crescimento econômico e social com a proteção do meio ambiente, de modo que a exploração dos recursos naturais atenda às necessidades da geração presente sem comprometer a capacidade de as gerações futuras atenderem às suas próprias necessidades.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "front": "O que é o princípio da função socioambiental da propriedade?",
    "back": "É o desdobramento ambiental da função social da propriedade, segundo o qual o direito de propriedade deve ser exercido em harmonia com a preservação do meio ambiente, condicionando seu uso ao respeito às normas ambientais e à manutenção do equilíbrio ecológico.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "front": "O órgão ambiental estadual pode ser competente para o licenciamento ambiental mesmo quando o empreendimento tem impacto em mais de um município do mesmo Estado?",
    "back": "Sim. Em regra, cabe ao órgão ambiental estadual licenciar empreendimentos e atividades cujos impactos ambientais diretos ultrapassem os limites de um município, mas permaneçam circunscritos ao território estadual, reservando-se ao órgão federal (IBAMA) o licenciamento de impactos de âmbito nacional ou que envolvam mais de um Estado ou país.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "front": "Qual a diferença entre fato do produto/serviço e vício do produto/serviço?",
    "back": "O fato do produto ou serviço (acidente de consumo) é o defeito que causa dano à segurança do consumidor, atingindo sua saúde ou patrimônio além do próprio produto (ex.: explosão de um eletrodoméstico); o vício é a inadequação intrínseca do produto ou serviço, que o torna impróprio ou inadequado ao consumo ou lhe diminui o valor, sem necessariamente causar dano externo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "front": "Quais são os prazos decadenciais para reclamar de vícios aparentes ou de fácil constatação no CDC?",
    "back": "30 dias para produtos e serviços não duráveis e 90 dias para produtos e serviços duráveis, contados a partir da entrega efetiva do produto ou do término da execução do serviço.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "front": "Qual o prazo prescricional para a pretensão de reparação de danos causados por fato do produto ou serviço?",
    "back": "É de 5 anos, iniciando-se a contagem a partir do conhecimento do dano e de sua autoria, conforme o CDC.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "front": "A responsabilidade do fornecedor por fato ou vício do produto/serviço é, em regra, objetiva ou subjetiva?",
    "back": "É objetiva, dispensando a comprovação de culpa do fornecedor, bastando a demonstração do defeito ou vício, do dano (quando exigido) e do nexo de causalidade; a exceção fica por conta da responsabilidade do profissional liberal por fato do serviço, que é apurada mediante verificação de culpa.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "front": "O que são práticas abusivas no Direito do Consumidor?",
    "back": "São condutas que o CDC veda por colocarem o consumidor em desvantagem exagerada ou por serem contrárias à boa-fé e aos usos e costumes, como venda casada, envio de produto ou serviço não solicitado e recusa de venda de bens ou prestação de serviços diretamente a quem se disponha a pagar à vista.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "front": "O que é o direito de arrependimento no CDC e em que prazo pode ser exercido?",
    "back": "É o direito do consumidor de desistir do contrato no prazo de 7 dias a contar da assinatura ou do recebimento do produto ou serviço, sempre que a contratação ocorrer fora do estabelecimento comercial (por telefone ou a domicílio, incluindo compras pela internet), independentemente de justificativa.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "front": "Qual a diferença entre publicidade enganosa e publicidade abusiva?",
    "back": "A publicidade enganosa é aquela capaz de induzir o consumidor a erro sobre a natureza, características, qualidade ou preço do produto ou serviço, seja por informação falsa ou por omissão de dado essencial; a publicidade abusiva não necessariamente engana, mas explora valores sociais, discrimina, incentiva violência ou se aproveita da deficiência de julgamento de crianças, ferindo valores éticos e sociais.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "front": "O que é a inversão do ônus da prova no CDC e quando pode ser aplicada?",
    "back": "É a possibilidade de o juiz determinar que caiba ao fornecedor, e não ao consumidor, provar fatos relativos à relação de consumo, aplicável quando for verossímil a alegação do consumidor ou quando este for hipossuficiente, segundo as regras ordinárias de experiência.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "front": "O que caracteriza uma cláusula abusiva em contrato de consumo?",
    "back": "É a cláusula que estabelece obrigações consideradas iníquas, abusivas ou que coloquem o consumidor em desvantagem exagerada, ou que sejam incompatíveis com a boa-fé e a equidade, sendo nula de pleno direito, independentemente de declaração judicial expressa para produzir esse efeito.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "front": "Quem responde solidariamente pelos vícios de qualidade que tornem os produtos impróprios ao consumo?",
    "back": "Respondem solidariamente todos os fornecedores da cadeia de consumo (fabricante, produtor, construtor e comerciante), podendo o consumidor exigir de qualquer um deles a solução do vício, conforme opções previstas no CDC (substituição, restituição do valor ou abatimento proporcional do preço).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "front": "O comerciante responde de forma objetiva pelo fato do produto em quais hipóteses no CDC?",
    "back": "O comerciante é responsabilizado subsidiariamente por fato do produto quando o fabricante, o produtor, o construtor ou o importador não puderem ser identificados, quando o produto for fornecido sem identificação clara do fabricante ou quando o comerciante não conservar adequadamente produtos perecíveis.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "front": "O que é a vulnerabilidade do consumidor e qual sua relevância no CDC?",
    "back": "É o reconhecimento de que o consumidor ocupa posição de fragilidade técnica, jurídica, fática ou informacional na relação de consumo em face do fornecedor; é o fundamento que justifica o tratamento protetivo e as normas de ordem pública e interesse social que compõem o CDC.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "front": "Qual a diferença etária entre criança e adolescente segundo o Estatuto da Criança e do Adolescente (ECA)?",
    "back": "Considera-se criança a pessoa até 12 anos de idade incompletos, e adolescente aquela entre 12 e 18 anos de idade, ressalvados os casos em que a lei dispuser excepcionalmente sobre a aplicação do Estatuto a pessoas entre 18 e 21 anos.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "front": "O que é a doutrina da proteção integral adotada pelo ECA?",
    "back": "É o paradigma segundo o qual crianças e adolescentes são reconhecidos como sujeitos de direitos e pessoas em condição peculiar de desenvolvimento, devendo ter seus direitos fundamentais assegurados com absoluta prioridade pela família, pela sociedade e pelo Estado, superando a antiga doutrina da situação irregular.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "front": "Qual a diferença entre medida protetiva e medida socioeducativa?",
    "back": "A medida protetiva é aplicável a qualquer criança ou adolescente cujos direitos estejam ameaçados ou violados, tendo caráter assistencial e não punitivo (ex.: encaminhamento aos pais, matrícula em escola); a medida socioeducativa é aplicável apenas ao adolescente autor de ato infracional, tendo natureza pedagógica e caráter de responsabilização (ex.: advertência, liberdade assistida, internação).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "front": "O que é ato infracional, segundo o ECA?",
    "back": "É a conduta descrita como crime ou contravenção penal praticada por criança ou adolescente; à criança que pratica ato infracional aplicam-se apenas medidas protetivas, enquanto ao adolescente podem ser aplicadas medidas socioeducativas.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "front": "Quais são as principais medidas socioeducativas previstas no ECA?",
    "back": "Advertência, obrigação de reparar o dano, prestação de serviços à comunidade, liberdade assistida, inserção em regime de semiliberdade e internação em estabelecimento educacional, aplicáveis conforme a gravidade do ato infracional e a capacidade do adolescente de cumpri-las.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "front": "O que é o Conselho Tutelar e qual sua natureza?",
    "back": "É órgão permanente e autônomo, não jurisdicional, encarregado pela sociedade de zelar pelo cumprimento dos direitos da criança e do adolescente, podendo aplicar medidas protetivas administrativamente, sem que isso configure exercício de jurisdição.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "front": "Qual a diferença entre a competência do Conselho Tutelar e a do Poder Judiciário no âmbito do ECA?",
    "back": "O Conselho Tutelar aplica medidas protetivas de natureza administrativa, sem poder decidir sobre questões que envolvam a família natural, adoção ou aplicação de medidas socioeducativas de internação; a aplicação de medidas socioeducativas ao adolescente autor de ato infracional e as decisões relativas à colocação em família substituta são de competência exclusiva da autoridade judiciária.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "front": "O que é a internação como medida socioeducativa e quais seus princípios básicos?",
    "back": "É a medida socioeducativa privativa de liberdade mais grave prevista no ECA, sujeita aos princípios da brevidade, excepcionalidade e respeito à condição peculiar de pessoa em desenvolvimento, não podendo o período de internação exceder o prazo máximo previsto em lei.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "front": "O que caracteriza o princípio da prioridade absoluta no ECA?",
    "back": "É a garantia de precedência de atendimento nos serviços públicos, preferência na formulação e execução de políticas sociais e destinação privilegiada de recursos públicos às áreas relacionadas à proteção da infância e da juventude, refletindo o comando constitucional de absoluta prioridade aos direitos da criança e do adolescente.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "front": "A colocação em família substituta pode ocorrer mediante quais modalidades previstas no ECA?",
    "back": "Guarda, tutela e adoção, cada uma com requisitos e efeitos jurídicos próprios, sendo a adoção a modalidade que gera vínculo de filiação definitivo e irrevogável, atribuindo à criança ou adolescente a condição de filho, com os mesmos direitos e deveres dos filhos biológicos.",
    "seedVersion": 1
  },
  ];

  // Casa pela chave disciplinaId+front (o texto da frente do cartão), já
  // que o id gravado no banco é aleatório e não rastreia de volta pra
  // entrada correspondente em CARDS. Não há edição manual do texto de um
  // flashcard pré-cadastrado na UI hoje (só remoção), então sobrescrever o
  // verso é seguro caso o texto de origem mude numa atualização futura.
  function chaveItem(disciplinaId, front) {
    return disciplinaId + '::' + front;
  }

  function atualizarConteudo(idPorNome) {
    return DB.getAll('flashcards').then(function (existentes) {
      var porChave = {};
      existentes.forEach(function (c) {
        porChave[chaveItem(c.disciplinaId, c.front)] = c;
      });

      var atualizacoes = [];
      CARDS.forEach(function (item) {
        var disciplinaId = idPorNome[item.territorio];
        if (!disciplinaId) return;
        var existente = porChave[chaveItem(disciplinaId, item.front)];
        if (!existente) return;
        if (item.back && existente.back !== item.back) {
          existente.back = item.back;
          atualizacoes.push(DB.put('flashcards', existente));
        }
      });
      return Promise.all(atualizacoes);
    });
  }

  function seedar() {
    var versaoAplicada = Storage.read(Storage.KEYS.flashcardsSeedVersion, 0);
    if (versaoAplicada >= SEED_VERSION_ATUAL) return Promise.resolve();

    return DB.getAll('disciplinas').then(function (disciplinas) {
      var idPorNome = {};
      disciplinas.forEach(function (d) { idPorNome[d.nome] = d.id; });

      var pendentes = [];
      CARDS.forEach(function (item) {
        if (item.seedVersion <= versaoAplicada) return;
        var disciplinaId = idPorNome[item.territorio];
        if (!disciplinaId) return;
        pendentes.push(DB.put('flashcards', {
          id: Storage.makeId(),
          disciplinaId: disciplinaId,
          front: item.front,
          back: item.back,
          interval: 0,
          repetition: 0,
          easeFactor: 2.5,
          dueDate: Storage.todayStr()
        }));
      });

      return Promise.all(pendentes).then(function () {
        return atualizarConteudo(idPorNome);
      }).then(function () {
        Storage.write(Storage.KEYS.flashcardsSeedVersion, SEED_VERSION_ATUAL);
      });
    });
  }

  return { seedar: seedar };
})();
