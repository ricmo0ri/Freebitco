// Questionário inédito: questões originais, no estilo FGV (enunciado +
// A/B/C/D), nível médio/difícil, pensadas a partir do que tende a cair no
// 48º Exame — não são tiradas de provas reais (isso já existe em
// questoesSeed.js). Mesmo padrão de seed versionado e idempotente dos outros
// bancos: reconcilia por território+enunciado, respeita correcaoManual e
// explicacaoManual, e remove quem sair da lista (ex.: questão trocada por
// ficar desatualizada).
var QuestionarioSeed = (function () {
  var SEED_VERSION_ATUAL = 2;
  var PROVA_ORIGEM = 'Questionário Inédito — Preparação 48º Exame';

  var QUESTOES = [
    {
      "territorio": "Ética",
      "tema": "Prerrogativas do Advogado",
      "dificuldade": "dificil",
      "enunciado": "O advogado Rogério Matias é investigado em inquérito policial por suposta participação em fraude a licitações, apurada a partir de indícios de autoria e materialidade colhidos em depoimentos de terceiros. A autoridade judiciária, em decisão fundamentada, determina a quebra da inviolabilidade do escritório de Rogério, expedindo mandado de busca e apreensão específico e pormenorizado, a ser cumprido na presença de representante da OAB. Durante a diligência, os policiais apreendem também documentos e mídias referentes a outros clientes de Rogério que não figuram como investigados no mesmo inquérito. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A quebra da inviolabilidade foi regular quanto à decisão motivada, ao mandado específico e à presença de representante da OAB, mas é vedada a utilização dos documentos e mídias pertencentes a clientes de Rogério que não estejam formalmente investigados como partícipes ou coautores do mesmo crime."
        },
        {
          "letra": "B",
          "texto": "A inviolabilidade do escritório de advocacia é absoluta, de modo que nenhuma autoridade judiciária pode autorizar busca e apreensão em local de trabalho de advogado, ainda que existam indícios de autoria de crime."
        },
        {
          "letra": "C",
          "texto": "A diligência é integralmente nula, pois a quebra da inviolabilidade do escritório de advocacia somente pode ser decretada pelo Conselho Federal da OAB, e não por autoridade judiciária."
        },
        {
          "letra": "D",
          "texto": "Por se tratar de local de trabalho de advogado, a presença de representante da OAB é mera formalidade recomendável, cuja ausência não gera nulidade do ato."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "Nos termos do art. 7º, §6º, da Lei 8.906/1994, presentes indícios de autoria e materialidade de crime por parte de advogado, a autoridade judiciária competente pode decretar a quebra da inviolabilidade do escritório, em decisão motivada, mediante mandado específico e pormenorizado, cumprido na presença de representante da OAB. Contudo, o próprio §6º veda a utilização de documentos, mídias e objetos pertencentes a clientes do advogado averiguado, ressalva que, pelo §7º, só não se aplica a clientes formalmente investigados como partícipes ou coautores do mesmo crime.",
      "explicacaoErradas": "(B) está errada porque a inviolabilidade do escritório não é absoluta, podendo ser quebrada mediante decisão judicial motivada nos termos do art. 7º, §6º. (C) está errada porque a competência para decretar a quebra é da autoridade judiciária, e não da OAB, cujo papel é acompanhar a diligência por meio de representante. (D) está errada porque a presença do representante da OAB é requisito legal expresso, e sua ausência é causa de nulidade do ato, conforme o mesmo art. 7º, §6º e o inciso II do caput.",
      "pegadinha": "A banca tenta levar o candidato a achar que toda a diligência é nula só porque material de terceiros foi apreendido indevidamente, quando na verdade a nulidade recai apenas sobre o uso dos documentos de clientes não investigados, não sobre a diligência como um todo quanto a Rogério.",
      "regraMemoria": "Escritório de advogado pode ser alvo de busca e apreensão: decisão motivada + mandado específico + representante da OAB presente, mas documentos de clientes alheios ao crime são sempre intocáveis.",
      "seedVersion": 2
    },
    {
      "territorio": "Ética",
      "tema": "Sigilo Profissional e Inviolabilidade",
      "dificuldade": "media",
      "enunciado": "A advogada Betânia Cordovil atuou por anos representando o empresário Jurandir em diversas causas empresariais. Após o rompimento da relação profissional, Jurandir se envolve em processo criminal e, buscando se defender de acusação de terceiros, autoriza expressamente Betânia a revelar, em juízo, fatos que lhe foram confiados durante o período em que o representou, pois entende que tais fatos lhe seriam favoráveis. Intimada a depor como testemunha, Betânia pondera se deve ou não prestar o depoimento sobre tais fatos. Sobre a situação, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Betânia pode se recusar a depor sobre fatos que constituam sigilo profissional ou que tenha conhecido no exercício do mandato, mesmo tendo sido autorizada ou solicitada pelo próprio Jurandir a fazê-lo."
        },
        {
          "letra": "B",
          "texto": "Betânia é obrigada a depor normalmente, pois a autorização expressa do antigo cliente afasta qualquer hipótese de sigilo profissional em favor do advogado."
        },
        {
          "letra": "C",
          "texto": "Betânia somente poderá se recusar a depor se o fato também configurar crime, sendo obrigatório o depoimento em relação aos demais fatos cíveis conhecidos no exercício da advocacia."
        },
        {
          "letra": "D",
          "texto": "O sigilo profissional do advogado cessa automaticamente com o fim do mandato, de modo que Betânia deve depor livremente sobre fatos conhecidos durante a representação de Jurandir."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 7º, XIX, da Lei 8.906/1994 assegura ao advogado o direito de recusar-se a depor como testemunha em processo no qual funcionou ou deva funcionar, ou sobre fato relacionado a pessoa de quem seja ou tenha sido advogado, mesmo quando autorizado ou solicitado pelo próprio constituinte, bem como sobre fato que constitua sigilo profissional. Trata-se de prerrogativa de ordem pública, vinculada à confiança essencial à advocacia, que não se esgota com a vontade do cliente.",
      "explicacaoErradas": "(B) e (D) erram ao supor que a autorização do cliente ou o fim do mandato extinguem o sigilo profissional; a lei expressamente mantém o direito de recusa do advogado mesmo diante de autorização do constituinte, justamente porque o sigilo protege a instituição da advocacia, não apenas o interesse individual do cliente. (C) erra ao criar uma distinção entre fatos criminais e cíveis que a lei não estabelece: a recusa alcança qualquer fato sobre o qual o advogado funcionou ou deva funcionar, ou que constitua sigilo profissional, independentemente da natureza da causa.",
      "pegadinha": "O examinador explora a falsa premissa de que, se o próprio titular do sigilo (o cliente) autoriza a revelação, o advogado perderia o direito de recusa; a lei, no entanto, garante a recusa 'mesmo quando autorizado ou solicitado pelo constituinte'.",
      "regraMemoria": "Sigilo profissional é direito do advogado, não dever que o cliente possa dispensar: nem autorização do constituinte obriga o advogado a depor.",
      "seedVersion": 2
    },
    {
      "territorio": "Ética",
      "tema": "Postulação e Atividades Privativas",
      "dificuldade": "media",
      "enunciado": "Vagner, leigo em Direito e sem inscrição na OAB, tem seu irmão preso em flagrante por suposto crime de furto. Sem conseguir contratar advogado a tempo, Vagner redige e protocola, em nome próprio, uma petição de habeas corpus perante o juízo competente, pleiteando a soltura do irmão por ausência dos requisitos da prisão preventiva. O juiz, ao receber a petição, questiona-se sobre a validade do ato diante da ausência de capacidade postulatória de Vagner. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A impetração de habeas corpus não se inclui na atividade privativa de advocacia, podendo ser formulada por qualquer pessoa, independentemente de capacidade postulatória, de modo que o juiz deve conhecer do pedido."
        },
        {
          "letra": "B",
          "texto": "A petição é nula de pleno direito, pois a postulação perante o Poder Judiciário é atividade privativa de advogado em qualquer hipótese, inclusive em sede de habeas corpus."
        },
        {
          "letra": "C",
          "texto": "O ato somente seria válido se Vagner fosse estagiário de Direito regularmente inscrito na OAB, ainda que sem capacidade postulatória plena."
        },
        {
          "letra": "D",
          "texto": "A petição deve ser recebida como mera notícia de constrangimento ilegal, cabendo ao juiz instaurar de ofício processo de habeas corpus, mas nunca conhecer o pedido formulado por leigo."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 1º, §1º, da Lei 8.906/1994 exclui expressamente a impetração de habeas corpus em qualquer instância ou tribunal da atividade privativa de advocacia. Trata-se de garantia fundamental de liberdade de locomoção que pode ser exercida por qualquer pessoa, leiga ou não, de modo que o juiz deve conhecer regularmente do pedido formulado por Vagner.",
      "explicacaoErradas": "(B) erra ao generalizar a privatividade da postulação, ignorando a exceção expressa do habeas corpus. (C) erra ao condicionar a validade do ato à condição de estagiário, quando a lei não exige qualquer vínculo com a advocacia para essa modalidade de remédio constitucional. (D) erra ao negar o conhecimento direto do pedido como habeas corpus, criando uma figura (mera notícia de constrangimento) não prevista em lei para este caso, em que a petição já preenche os requisitos de um habeas corpus regular.",
      "pegadinha": "O candidato é levado a aplicar a regra geral de que só advogado pode postular em juízo, esquecendo que o habeas corpus é a exceção clássica e expressamente prevista em lei à exigência de capacidade postulatória.",
      "regraMemoria": "Habeas corpus é remédio de todos: qualquer pessoa pode impetrar, com ou sem advogado.",
      "seedVersion": 2
    },
    {
      "territorio": "Ética",
      "tema": "Infrações Disciplinares",
      "dificuldade": "media",
      "enunciado": "O advogado Henrique Salgado firma acordo verbal com o proprietário de um despachante judicial, por meio do qual este último passa a indicar clientes acidentados de trânsito ao escritório de Henrique, mediante repasse de parte dos honorários contratuais recebidos em cada caso. Descoberta a prática por meio de representação de colegas de profissão, instaura-se processo disciplinar perante o Tribunal de Ética e Disciplina. Sobre a conduta de Henrique, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Henrique cometeu infração disciplinar por angariar e captar causa com a intervenção de terceiro mediante participação nos honorários a receber, conduta sujeita à sanção de censura."
        },
        {
          "letra": "B",
          "texto": "A conduta de Henrique é atípica, pois a lei apenas proíbe a publicidade mercantilista da advocacia, não alcançando acordos de indicação de clientes mediante remuneração de terceiros."
        },
        {
          "letra": "C",
          "texto": "Por se tratar de infração gravíssima equiparada ao exercício ilegal da profissão, a conduta de Henrique deve ser sancionada com a exclusão dos quadros da OAB."
        },
        {
          "letra": "D",
          "texto": "A conduta somente seria disciplinarmente relevante se o despachante fosse ele próprio advogado, não havendo infração na indicação de clientes por leigos mediante pagamento."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 34, IV, da Lei 8.906/1994 tipifica como infração disciplinar angariar ou captar causa, com ou sem intervenção de terceiros, bem como utilizar-se de agenciador de causas mediante participação nos honorários a receber. Por constar entre os incisos I a XVI do art. 34, a infração é sancionada com censura, nos termos do art. 36, I, do mesmo diploma.",
      "explicacaoErradas": "(B) erra ao restringir a vedação apenas à publicidade mercantilista, quando a captação de clientela mediante agenciador remunerado é infração autônoma e expressamente tipificada. (C) erra quanto à sanção, pois a captação de clientela não está entre as infrações sancionadas com exclusão (que exigem reincidência em infrações graves específicas), mas sim com censura. (D) erra porque a lei não exige que o terceiro agenciador seja advogado; a infração se configura pela captação com intervenção de terceiro, seja ele quem for.",
      "pegadinha": "O examinador tenta fazer o candidato associar a gravidade da conduta a uma sanção máxima (exclusão), quando a captação de clientela está entre as infrações mais brandas do rol do art. 34, sancionadas com censura.",
      "regraMemoria": "Captar cliente com ajuda remunerada de terceiro é infração disciplinar sancionada com censura, com ou sem intervenção de terceiro.",
      "seedVersion": 2
    },
    {
      "territorio": "Ética",
      "tema": "Processo Disciplinar na OAB",
      "dificuldade": "dificil",
      "enunciado": "Em março de 2019, o advogado Osvaldo pratica conduta que configura infração disciplinar, mas o fato somente é oficialmente constatado pela Corregedoria da Seccional em outubro de 2019, por meio de auto de representação formalizado. Em dezembro de 2025, um ex-cliente insatisfeito representa contra Osvaldo pelo mesmo fato, dando origem à instauração de processo disciplinar. A defesa de Osvaldo alega prescrição da pretensão punitiva. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Consumou-se a prescrição, pois a pretensão à punibilidade das infrações disciplinares prescreve em cinco anos contados da data da constatação oficial do fato, e não da data de sua ocorrência."
        },
        {
          "letra": "B",
          "texto": "Não há prescrição, pois o prazo de cinco anos deve ser contado a partir da data em que o ex-cliente teve conhecimento do fato e apresentou sua representação."
        },
        {
          "letra": "C",
          "texto": "A prescrição das infrações disciplinares da advocacia segue o mesmo prazo da prescrição penal do crime eventualmente correspondente, ainda que o fato não configure ilícito penal."
        },
        {
          "letra": "D",
          "texto": "As infrações disciplinares praticadas por advogados são imprescritíveis, de modo que o processo disciplinar pode ser instaurado a qualquer tempo."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 43 da Lei 8.906/1994 estabelece que a pretensão à punibilidade das infrações disciplinares prescreve em cinco anos, contados da data da constatação oficial do fato. No caso, a constatação oficial ocorreu em outubro de 2019; como a representação de dezembro de 2025 é posterior ao quinquênio, está consumada a prescrição.",
      "explicacaoErradas": "(B) erra ao vincular o termo inicial à ciência do particular ofendido, quando a lei exige a constatação oficial do fato pelo órgão disciplinar. (C) erra ao generalizar a prescrição penal para toda e qualquer infração disciplinar; essa equiparação só se aplica quando a infração também configura crime. (D) erra ao afirmar a imprescritibilidade, pois o próprio art. 43 fixa prazo prescricional expresso de cinco anos.",
      "pegadinha": "A armadilha está em confundir a data do fato (2019, mesmo mês da conduta) com a data da constatação oficial, que é o marco inicial correto segundo a lei; o candidato apressado pode contar o prazo a partir de datas erradas, como a ciência do ofendido.",
      "regraMemoria": "Prescrição disciplinar: 5 anos contados da constatação oficial do fato, não da sua prática nem da ciência do ofendido.",
      "seedVersion": 2
    },
    {
      "territorio": "Ética",
      "tema": "Sanções Disciplinares e Atenuantes",
      "dificuldade": "media",
      "enunciado": "A advogada Carolina, sem qualquer punição disciplinar anterior em toda a sua carreira, é processada disciplinarmente por ter dirigido expressões deselegantes a colega de profissão durante audiência, em violação ao dever de urbanidade. Apurada a infração, que é em tese punível com censura, o Tribunal de Ética e Disciplina reconhece a ausência de antecedentes disciplinares de Carolina como circunstância relevante. Sobre a possível consequência dessa circunstância, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A ausência de punição disciplinar anterior configura circunstância atenuante, podendo o órgão julgador converter a censura em advertência, feita reservadamente, sem registro nos assentamentos de Carolina."
        },
        {
          "letra": "B",
          "texto": "A ausência de antecedentes disciplinares é irrelevante para a dosimetria da sanção, devendo a censura ser aplicada em sua forma plena e registrada nos assentamentos."
        },
        {
          "letra": "C",
          "texto": "A circunstância apenas poderia ser considerada se Carolina comprovasse, cumulativamente, relevantes serviços prestados à advocacia, não bastando a mera ausência de punição anterior."
        },
        {
          "letra": "D",
          "texto": "A conversão da censura em advertência exige, além da atenuante, a concordância expressa da parte ofendida pela conduta de Carolina."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "A ausência de punição disciplinar anterior é expressamente prevista como circunstância atenuante na disciplina ética da advocacia. Presente atenuante, a censura pode ser convertida em advertência, aplicada em ofício reservado, sem registro nos assentamentos do inscrito, nos termos do art. 36, parágrafo único, da Lei 8.906/1994, combinado com o Código de Ética e Disciplina.",
      "explicacaoErradas": "(B) erra ao desconsiderar a relevância da atenuante na dosimetria da sanção disciplinar. (C) erra ao exigir cumulação de atenuantes que a lei prevê de forma alternativa (bastando uma delas, como a ausência de punição anterior, por si só). (D) erra ao criar um requisito de anuência da parte ofendida que não encontra respaldo na legislação disciplinar, que trata de matéria de ordem pública decidida pelo órgão julgador.",
      "pegadinha": "O examinador tenta fazer o candidato imaginar que apenas a combinação de várias atenuantes, ou a concordância do ofendido, autorizaria a conversão, quando basta a presença de uma única circunstância atenuante reconhecida pelo órgão julgador.",
      "regraMemoria": "Atenuante (ex.: réu primário disciplinar) permite converter censura em advertência reservada, sem mancha nos assentamentos.",
      "seedVersion": 2
    },
    {
      "territorio": "Ética",
      "tema": "Incompatibilidades e Impedimentos",
      "dificuldade": "dificil",
      "enunciado": "Juliana é servidora pública federal, ocupante de cargo de professora efetiva de Direito Processual Civil em universidade federal, sem exercer qualquer função de direção administrativa. Regularmente inscrita na OAB, Juliana é procurada por um cliente particular para patrocinar ação de cobrança movida contra a própria União. Questiona-se se Juliana estaria impedida de atuar nessa causa em razão de seu vínculo funcional com ente federal. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Juliana não está impedida de patrocinar a causa contra a União, pois o parágrafo único do art. 30 da Lei 8.906/1994 exclui expressamente os docentes de cursos jurídicos da hipótese de impedimento prevista para servidores públicos em geral."
        },
        {
          "letra": "B",
          "texto": "Juliana está impedida de atuar, pois todo servidor público federal, inclusive professor universitário, é impedido de advogar contra a Fazenda Pública à qual está vinculado."
        },
        {
          "letra": "C",
          "texto": "Juliana está em situação de incompatibilidade total com o exercício da advocacia, devendo cancelar sua inscrição na OAB enquanto permanecer no magistério público."
        },
        {
          "letra": "D",
          "texto": "A atuação de Juliana só seria permitida mediante autorização expressa e prévia da reitoria da universidade a que está vinculada."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 30, I, da Lei 8.906/1994 impede servidores da administração direta, indireta e fundacional de advogar contra a Fazenda Pública que os remunera. Entretanto, o parágrafo único do mesmo artigo exclui expressamente dessa hipótese os docentes dos cursos jurídicos, permitindo que professores de Direito vinculados ao serviço público atuem inclusive contra o ente ao qual estão vinculados.",
      "explicacaoErradas": "(B) erra ao generalizar o impedimento do caput sem considerar a exceção expressa do parágrafo único para docentes de cursos jurídicos. (C) erra ao confundir impedimento (restrição parcial a certas causas) com incompatibilidade (proibição total do exercício da advocacia), institutos distintos no Capítulo VII do Estatuto, sendo que o magistério jurídico sequer está listado entre as hipóteses de incompatibilidade do art. 28. (D) erra ao criar exigência de autorização institucional não prevista em lei.",
      "pegadinha": "A pegadinha está em aplicar mecanicamente a regra geral do impedimento de servidor público contra a Fazenda que o remunera, ignorando a exceção específica e expressa para docentes de cursos jurídicos.",
      "regraMemoria": "Professor de Direito da rede pública é exceção expressa: pode advogar até contra o próprio ente ao qual está vinculado.",
      "seedVersion": 2
    },
    {
      "territorio": "Ética",
      "tema": "Incompatibilidades e Impedimentos",
      "dificuldade": "media",
      "enunciado": "Edmilson é Delegado de Polícia Civil, no exercício efetivo do cargo, e obtém aprovação no Exame de Ordem. Pretendendo atuar como advogado em causas de direito de família de parentes próximos, sem qualquer relação com sua atividade policial, Edmilson requer sua inscrição como advogado nos quadros da OAB, mantendo-se simultaneamente no cargo de Delegado. Sobre a possibilidade de inscrição, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Edmilson não pode ser inscrito como advogado enquanto permanecer no cargo de Delegado de Polícia, pois o exercício de atividade policial é incompatível com a advocacia, mesmo em causa própria ou de parentes."
        },
        {
          "letra": "B",
          "texto": "Edmilson pode se inscrever normalmente, desde que atue apenas em causas estranhas à sua atividade policial, como as de direito de família de parentes."
        },
        {
          "letra": "C",
          "texto": "A situação configura mero impedimento, e não incompatibilidade, de modo que Edmilson pode advogar livremente, salvo nas causas em que a autoridade policial seja parte interessada."
        },
        {
          "letra": "D",
          "texto": "Edmilson pode se inscrever como advogado se obtiver licença não remunerada do cargo de Delegado pelo período de tramitação de cada processo em que atuar."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 28 da Lei 8.906/1994 estabelece que a advocacia é incompatível, mesmo em causa própria, com o exercício de cargos ou funções vinculados, direta ou indiretamente, a atividade policial de qualquer natureza. Tratando-se de incompatibilidade (e não mero impedimento), a vedação é total e não comporta exceção por tipo de causa, inclusive as de parentes ou próprias.",
      "explicacaoErradas": "(B) e (C) erram ao tratar a situação como mero impedimento restrito a certas causas, quando a lei a classifica expressamente como incompatibilidade total, que não se restringe à matéria tratada no processo. (D) erra ao sugerir que licenças pontuais regularizariam a situação; a incompatibilidade decorre do próprio exercício do cargo policial, exigindo o afastamento efetivo e não apenas licenças eventuais para casos específicos.",
      "pegadinha": "O candidato pode ser tentado a pensar que, por não haver relação entre a causa (direito de família) e a função policial, a atuação seria permitida; mas a incompatibilidade com atividade policial é total, 'mesmo em causa própria', não dependendo da matéria da causa.",
      "regraMemoria": "Atividade policial é incompatível com a advocacia mesmo em causa própria: não importa o assunto da causa.",
      "seedVersion": 2
    },
    {
      "territorio": "Ética",
      "tema": "Sociedade de Advogados",
      "dificuldade": "media",
      "enunciado": "O advogado Gustavo Peralta, que atua sozinho em seu escritório, deseja constituir pessoa jurídica para exercer a advocacia, buscando melhor organização patrimonial e tributária de sua atividade, mas sem pretender se associar a outros advogados. Gustavo é informado por um conhecido contador de que, ao constituir sociedade unipessoal de advocacia, estaria livre de qualquer responsabilidade pessoal por eventuais danos causados a clientes no exercício da profissão, já que tais danos passariam a ser de responsabilidade exclusiva da pessoa jurídica. Sobre a informação recebida por Gustavo, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A informação está incorreta: ainda que constitua sociedade unipessoal de advocacia, Gustavo responderá subsidiária e ilimitadamente pelos danos causados a clientes por ação ou omissão no exercício da advocacia."
        },
        {
          "letra": "B",
          "texto": "A informação está correta, pois a personalidade jurídica própria da sociedade unipessoal de advocacia isola integralmente o patrimônio pessoal do advogado de qualquer responsabilidade por erro profissional."
        },
        {
          "letra": "C",
          "texto": "A informação está correta apenas quanto a danos decorrentes de culpa leve, subsistindo responsabilidade pessoal unicamente em casos de dolo ou culpa grave."
        },
        {
          "letra": "D",
          "texto": "A informação é irrelevante, pois o ordenamento jurídico brasileiro não admite a constituição de sociedade unipessoal de advocacia, sendo exigida a pluralidade de sócios."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "A Lei 8.906/1994 (art. 15, com a redação da Lei 13.247/2016) permite a constituição de sociedade unipessoal de advocacia. Entretanto, o art. 17 do mesmo Estatuto estabelece que, além da sociedade, o sócio responde subsidiária e ilimitadamente pelos danos causados aos clientes por ação ou omissão no exercício da advocacia, regra que se aplica também ao sócio único da sociedade unipessoal.",
      "explicacaoErradas": "(B) e (C) erram ao supor blindagem patrimonial integral ou condicionada ao grau de culpa; a lei não faz tal distinção, mantendo a responsabilidade subsidiária e ilimitada do advogado por qualquer ato culposo no exercício profissional. (D) erra ao negar a existência da figura da sociedade unipessoal de advocacia, expressamente admitida pela legislação desde 2016.",
      "pegadinha": "O examinador explora a confusão entre a limitação de responsabilidade típica das sociedades empresárias em geral e o regime especial da advocacia, em que a responsabilidade pessoal do advogado por erro profissional subsiste mesmo com a personificação da sociedade.",
      "regraMemoria": "Sociedade de advocacia organiza o negócio, mas não blinda o advogado: responsabilidade por erro profissional é sempre subsidiária e ilimitada.",
      "seedVersion": 2
    },
    {
      "territorio": "Ética",
      "tema": "Sociedade de Advogados",
      "dificuldade": "media",
      "enunciado": "Buscando oferecer um serviço de consultoria jurídico-contábil integrada, os advogados sócios de determinada sociedade de advocacia deliberam admitir como novo sócio um contador, profissional de notória competência técnica, que passaria a integrar o quadro societário e a participar dos resultados da sociedade, mantendo sua atuação voltada à área contábil dos clientes em comum. Submetida a alteração contratual ao registro na OAB, a Seccional recusa o pedido de registro. Sobre a recusa, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A recusa é correta, pois não são admitidas a registro, nem podem funcionar, as sociedades de advogados que incluam sócio não inscrito como advogado."
        },
        {
          "letra": "B",
          "texto": "A recusa é incorreta, pois a lei permite expressamente a composição de sociedades multidisciplinares entre advogados e profissionais de outras áreas técnicas, como a contabilidade."
        },
        {
          "letra": "C",
          "texto": "A recusa seria correta apenas se o contador pretendesse deter mais da metade das quotas sociais, sendo lícita sua participação minoritária."
        },
        {
          "letra": "D",
          "texto": "A recusa só se justificaria caso o contador já fosse sócio de outra sociedade de advogados, o que não é o caso narrado."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 16 da Lei 8.906/1994 veda o registro e o funcionamento de sociedades de advogados que incluam sócio não inscrito como advogado, ainda que para a prestação de serviços complementares. A sociedade de advogados somente pode ser integrada por profissionais regularmente inscritos na OAB, sendo vedada a composição multidisciplinar ou de capital com profissionais de outras áreas.",
      "explicacaoErradas": "(B) erra ao afirmar existir permissão legal para sociedades multidisciplinares entre advogados e outros profissionais, o que é expressamente vedado. (C) erra ao condicionar a vedação ao percentual de participação societária; a lei veda a simples presença de sócio não advogado, independentemente do percentual de quotas. (D) erra ao criar hipótese não prevista em lei para justificar a recusa, quando o fundamento está na própria natureza não advocatícia da profissão do pretendente a sócio.",
      "pegadinha": "O candidato pode supor que uma participação minoritária ou técnica de profissional de outra área seria tolerável por não comprometer a independência técnica dos advogados, mas a vedação legal é objetiva: só advogado pode ser sócio de sociedade de advogados.",
      "regraMemoria": "Sociedade de advogados só admite advogados como sócios: nada de sócio contador, administrador ou investidor.",
      "seedVersion": 2
    },
    {
      "territorio": "Ética",
      "tema": "Honorários Advocatícios",
      "dificuldade": "media",
      "enunciado": "O advogado Felipe Andrade presta serviço extrajudicial de elaboração de parecer e negociação de distrato de contrato imobiliário para o cliente Norberto, concluindo integralmente o serviço em março de 2019, sem jamais ter recebido os honorários contratuais ajustados verbalmente. Felipe somente ajuíza ação de cobrança dos honorários em setembro de 2025, mais de seis anos após a ultimação do serviço. Norberto, em contestação, alega prescrição. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Está prescrita a pretensão de Felipe, pois a ação de cobrança de honorários de advogado prescreve em cinco anos, contados, no caso de serviço extrajudicial, da data de sua ultimação."
        },
        {
          "letra": "B",
          "texto": "Não há prescrição, pois a ação de cobrança de honorários advocatícios, por envolver verba de natureza alimentar, é imprescritível."
        },
        {
          "letra": "C",
          "texto": "O prazo prescricional para cobrança de honorários é de dez anos, por se tratar de prestação de serviço sem contrato escrito, aplicando-se o prazo geral do Código Civil."
        },
        {
          "letra": "D",
          "texto": "O prazo prescricional somente começaria a correr a partir da citação de Felipe na ação de cobrança, e não da ultimação do serviço."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 25 da Lei 8.906/1994 estabelece que prescreve em cinco anos a ação de cobrança de honorários de advogado, contado o prazo, entre outras hipóteses, da ultimação do serviço extrajudicial. Tendo o serviço sido concluído em março de 2019 e a ação proposta apenas em setembro de 2025, transcorreram mais de cinco anos, consumando-se a prescrição.",
      "explicacaoErradas": "(B) erra ao afirmar a imprescritibilidade; embora os honorários tenham natureza alimentar para outros fins (como a impenhorabilidade), a pretensão de cobrança está sujeita a prazo prescricional expresso. (C) erra ao aplicar o prazo geral decenal do Código Civil, quando existe regra especial e específica no Estatuto da Advocacia. (D) erra ao deslocar o termo inicial para evento posterior (a própria citação na ação), quando a lei fixa o termo inicial na ultimação do serviço extrajudicial.",
      "pegadinha": "A armadilha está em supor que, por não haver contrato escrito, aplicar-se-ia o prazo geral civil e não a regra especial do Estatuto; a prescrição quinquenal do art. 25 se aplica independentemente de o ajuste de honorários ser escrito ou verbal.",
      "regraMemoria": "Honorários de advogado prescrevem em 5 anos: no serviço extrajudicial, conta-se da ultimação do serviço.",
      "seedVersion": 2
    },
    {
      "territorio": "Ética",
      "tema": "Honorários Advocatícios",
      "dificuldade": "dificil",
      "enunciado": "A advogada Simone patrocina ação de indenização por danos materiais ajuizada por sua cliente Adalgisa contra uma construtora, mediante contrato de honorários que prevê, além dos honorários contratuais, o direito de Simone aos honorários de sucumbência fixados em eventual condenação. Antes do término do processo, Adalgisa, sem comunicar Simone, procura diretamente a construtora e celebra transação extrajudicial, encerrando o litígio sem qualquer participação da advogada e sem lhe pagar os honorários ajustados. Sobre os honorários de Simone, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O acordo feito diretamente por Adalgisa com a parte contrária, sem anuência de Simone, não lhe prejudica os honorários, sejam eles os convencionados, sejam os que seriam concedidos por sentença."
        },
        {
          "letra": "B",
          "texto": "Simone perde o direito aos honorários de sucumbência, pois estes somente são devidos em caso de sentença condenatória transitada em julgado, o que não ocorreu em razão do acordo direto."
        },
        {
          "letra": "C",
          "texto": "Simone perde tanto os honorários contratuais quanto os de sucumbência, pois a transação extrajudicial extingue todas as obrigações relacionadas ao processo, inclusive as devidas ao advogado."
        },
        {
          "letra": "D",
          "texto": "Simone só teria direito aos honorários caso tivesse providenciado, previamente, cláusula de irrevogabilidade do mandato no contrato de honorários."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 24, §4º, da Lei 8.906/1994 dispõe que o acordo feito pelo cliente do advogado e a parte contrária, salvo aquiescência do profissional, não lhe prejudica os honorários, sejam os convencionados, sejam os concedidos por sentença. A norma protege o advogado contra a deslealdade do cliente que transaciona diretamente para se esquivar do pagamento dos honorários ajustados.",
      "explicacaoErradas": "(B) erra ao supor que a ausência de sentença condenatória, provocada justamente pelo acordo direto não consentido, extingue o direito aos honorários; a própria lei neutraliza esse efeito ao preservar o direito do advogado. (C) erra ao estender a extinção de obrigações da transação às verbas honorárias, que a lei expressamente ressalva. (D) erra ao criar exigência contratual (cláusula de irrevogabilidade) não prevista como condição para a proteção legal do art. 24, §4º.",
      "pegadinha": "O examinador tenta induzir o candidato a achar que, sem sentença condenatória, não há honorários de sucumbência a proteger; mas a lei resguarda a advogada justamente contra a manobra do cliente que evita a condenação por meio de acordo direto não consentido.",
      "regraMemoria": "Acordo direto do cliente com a parte contrária, sem o advogado, não prejudica os honorários contratuais nem os de sucumbência.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Constitucional",
      "tema": "Repartição de Competências Federativas",
      "dificuldade": "dificil",
      "enunciado": "O Estado de Serra Clara edita lei estadual que proíbe, em todo o seu território, a instalação de novas pequenas centrais hidrelétricas em trechos de rios estaduais, sob o fundamento de proteção ao meio ambiente e aos ecossistemas locais, matéria sobre a qual os Estados detêm competência legislativa concorrente. A União ajuíza ação questionando a validade da lei estadual, por entender que ela invade competência federal para legislar sobre energia e recursos hídricos. Sobre a controvérsia, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A lei estadual é inconstitucional, pois, embora os Estados tenham competência concorrente para legislar sobre proteção do meio ambiente, essa competência não pode se sobrepor à competência privativa da União para legislar sobre águas e energia."
        },
        {
          "letra": "B",
          "texto": "A lei estadual é constitucional, pois a proteção ambiental é matéria de competência concorrente que prevalece sobre qualquer competência privativa da União, inclusive em matéria energética."
        },
        {
          "letra": "C",
          "texto": "A lei estadual é constitucional, desde que aprovada por maioria absoluta da Assembleia Legislativa, requisito suficiente para validar normas ambientais mais restritivas que a legislação federal."
        },
        {
          "letra": "D",
          "texto": "A controvérsia deveria ser resolvida exclusivamente pelo Congresso Nacional, mediante decreto legislativo, e não pelo Poder Judiciário, por se tratar de conflito federativo."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "Nos termos do art. 22, IV, da Constituição Federal, compete privativamente à União legislar sobre águas e energia. Embora o art. 24, VI, confira aos Estados competência concorrente para legislar sobre proteção do meio ambiente, essa competência concorrente não pode ser utilizada para, na prática, impedir o exercício de competência privativa da União sobre recursos hídricos e energéticos, sob pena de invasão de competência federal.",
      "explicacaoErradas": "(B) erra ao afirmar prevalência automática e absoluta da competência ambiental concorrente sobre a competência privativa da União, inversão que não corresponde à repartição constitucional de competências. (C) erra ao supor que o quórum de aprovação na Assembleia Legislativa seria apto a sanar vício de competência, que é questão de validade material, não formal. (D) erra ao afastar a jurisdição do Poder Judiciário em conflito de competência legislativa, que é matéria tipicamente sujeita a controle jurisdicional de constitucionalidade.",
      "pegadinha": "A pegadinha está em around a competência ambiental concorrente dos Estados (art. 24, VI) parecer suficiente para justificar a lei estadual, quando, na verdade, a matéria central (energia elétrica e águas) é de competência privativa da União, que não pode ser esvaziada por norma estadual proibitiva.",
      "regraMemoria": "Competência ambiental concorrente dos Estados não pode anular a competência privativa da União sobre águas e energia.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Constitucional",
      "tema": "Intervenção Federal",
      "dificuldade": "dificil",
      "enunciado": "No Estado de Vale Formoso, o Governador, em conflito político com o Tribunal de Justiça estadual, determina o bloqueio administrativo de recursos destinados ao Poder Judiciário local, impedindo o pagamento de servidores e o próprio funcionamento regular dos órgãos judiciais, configurando coação direta contra o Poder Judiciário estadual. O Tribunal de Justiça, sem alternativa para restabelecer seu funcionamento, pretende provocar a decretação de intervenção federal no Estado. Sobre o procedimento cabível, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A decretação de intervenção federal, nessa hipótese, depende de requisição do Supremo Tribunal Federal, por se tratar de coação exercida contra o Poder Judiciário estadual, nos termos do art. 36, I, da Constituição Federal."
        },
        {
          "letra": "B",
          "texto": "A decretação de intervenção federal depende de representação do Procurador-Geral da República, por se tratar de garantia da observância de princípio constitucional sensível."
        },
        {
          "letra": "C",
          "texto": "A intervenção federal é incabível nessa hipótese, pois o conflito entre Governador e Tribunal de Justiça é questão interna do Estado, insuscetível de intervenção da União."
        },
        {
          "letra": "D",
          "texto": "A decretação de intervenção federal, nesse caso, depende exclusivamente de solicitação do próprio Poder Judiciário estadual coagido, dirigida diretamente ao Congresso Nacional."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 36, I, da Constituição Federal estabelece que, no caso do art. 34, IV (garantir o livre exercício de qualquer dos Poderes nas unidades da Federação), a decretação de intervenção depende de solicitação do Poder Legislativo ou Executivo coacto ou impedido, ou de requisição do Supremo Tribunal Federal, se a coação for exercida contra o Poder Judiciário. Como a coação no caso recai sobre o Tribunal de Justiça, cabe ao STF requisitar ao Presidente da República a decretação da intervenção.",
      "explicacaoErradas": "(B) erra ao atribuir a legitimidade ao Procurador-Geral da República, cuja representação ao STF é cabível para a hipótese de inobservância de princípios constitucionais sensíveis (art. 34, VII) ou recusa à execução de lei federal, e não para a coação contra o Judiciário estadual. (C) erra ao afirmar a incompetência da União para intervir, quando a própria Constituição prevê expressamente essa hipótese de intervenção para assegurar o livre exercício dos Poderes estaduais. (D) erra ao atribuir a legitimidade para requisição ao Congresso Nacional, quando a Constituição confere essa competência ao Supremo Tribunal Federal nessa hipótese específica.",
      "pegadinha": "O candidato pode confundir as diferentes legitimidades do art. 36: solicitação do Poder coacto, requisição do STF (quando o Judiciário é coagido) e representação do PGR (para princípios sensíveis), aplicando a hipótese errada ao caso concreto.",
      "regraMemoria": "Judiciário estadual coagido: só o STF requisita a intervenção federal, não o PGR nem o Congresso.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Constitucional",
      "tema": "Organização do Estado",
      "dificuldade": "media",
      "enunciado": "O Município de Campo Dourado edita lei municipal determinando que todos os documentos públicos expedidos por órgãos de outros Estados da Federação, para produzirem efeitos em repartições municipais locais, deverão ser submetidos a nova autenticação cartorial perante tabelionato local, sob pena de recusa de recebimento, independentemente de já ostentarem fé pública de origem. Questionada judicialmente, a lei municipal é impugnada por suposta violação à Constituição Federal. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A lei municipal é inconstitucional, pois é vedado aos entes federativos recusar fé aos documentos públicos, vedação que alcança também os Municípios em suas relações com atos emanados de outros entes da Federação."
        },
        {
          "letra": "B",
          "texto": "A lei municipal é constitucional, pois os Municípios têm autonomia para disciplinar o funcionamento de suas próprias repartições administrativas, inclusive quanto à forma de recebimento de documentos de outros entes."
        },
        {
          "letra": "C",
          "texto": "A lei municipal seria válida se editada por Estado-membro, mas é inconstitucional por ter sido editada por Município, ente que não integra a Federação para esse efeito."
        },
        {
          "letra": "D",
          "texto": "A exigência de nova autenticação é compatível com a Constituição, desde que limitada a documentos emitidos há mais de cinco anos."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 19, II, da Constituição Federal veda à União, aos Estados, ao Distrito Federal e aos Municípios recusar fé aos documentos públicos, na forma da lei. A exigência municipal de nova autenticação de documentos que já gozam de fé pública de origem, sob pena de recusa de recebimento, viola diretamente essa vedação constitucional, que se dirige a todos os entes federativos, incluindo os Municípios.",
      "explicacaoErradas": "(B) erra ao invocar a autonomia municipal para justificar afronta a vedação expressa e dirigida a todos os entes federativos, não se tratando de mera disciplina de procedimento administrativo interno. (C) erra ao excluir o Município do alcance da vedação constitucional, que o art. 19 expressamente inclui ao lado da União, dos Estados e do Distrito Federal. (D) erra ao criar exceção temporal (documentos com mais de cinco anos) inexistente no texto constitucional, que não condiciona a vedação a qualquer prazo.",
      "pegadinha": "O examinador explora a ideia de autonomia municipal para disfarçar uma violação a vedação constitucional expressa e geral, que não comporta exceção com base em autonomia administrativa local.",
      "regraMemoria": "Nenhum ente federativo, nem o Município, pode recusar fé a documento público de outro ente.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Constitucional",
      "tema": "Controle de Constitucionalidade",
      "dificuldade": "dificil",
      "enunciado": "Uma confederação sindical de âmbito nacional pretende impugnar lei municipal do Município de Porto Alegre do Sul, editada pela Câmara Municipal, sob a alegação de que o diploma viola preceito fundamental da Constituição Federal relativo à livre associação profissional. Antes de ajuizar a medida no Supremo Tribunal Federal, verifica-se que a Constituição do respectivo Estado prevê representação de inconstitucionalidade de leis municipais em face da Constituição Estadual perante o Tribunal de Justiça local, cujo parâmetro de controle reproduz, em norma de repetição obrigatória, o preceito fundamental invocado. Sobre o cabimento da arguição de descumprimento de preceito fundamental perante o STF, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A arguição de descumprimento de preceito fundamental não é cabível, em razão do princípio da subsidiariedade, pois existe outro meio processual eficaz para sanar a lesividade, consistente na representação de inconstitucionalidade perante o Tribunal de Justiça estadual."
        },
        {
          "letra": "B",
          "texto": "A arguição de descumprimento de preceito fundamental é sempre cabível contra lei municipal, independentemente da existência de outros meios processuais aptos a sanar a lesividade questionada."
        },
        {
          "letra": "C",
          "texto": "A arguição de descumprimento de preceito fundamental é incabível, pois confederações sindicais não possuem legitimidade ativa para propor esse tipo de ação perante o Supremo Tribunal Federal."
        },
        {
          "letra": "D",
          "texto": "A existência de representação de inconstitucionalidade estadual é irrelevante, pois a competência do Supremo Tribunal Federal para julgar arguição de descumprimento de preceito fundamental é absoluta e não se sujeita a qualquer critério de subsidiariedade."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 4º, §1º, da Lei 9.882/1999 consagra o princípio da subsidiariedade, segundo o qual não será admitida arguição de descumprimento de preceito fundamental quando houver qualquer outro meio eficaz de sanar a lesividade. Havendo representação de inconstitucionalidade cabível perante o Tribunal de Justiça, com parâmetro de controle que reproduz o preceito fundamental alegado, esse meio processual se mostra eficaz, afastando o cabimento da ADPF perante o STF.",
      "explicacaoErradas": "(B) e (D) erram ao desconsiderar o caráter subsidiário da ADPF, expressamente previsto em lei, que a torna incabível quando exista outro meio processual eficaz. (C) erra quanto à legitimidade: confederações sindicais de âmbito nacional figuram entre os legitimados do art. 103 da Constituição Federal, aplicável também à ADPF por força do art. 2º, I, da Lei 9.882/1999.",
      "pegadinha": "O examinador tenta levar o candidato a pensar que a ADPF é sempre cabível contra lei municipal (já que ADI genérica perante o STF não alcança lei municipal), esquecendo que a subsidiariedade afasta a ADPF quando há representação de inconstitucionalidade estadual eficaz para sanar a mesma lesividade.",
      "regraMemoria": "ADPF é subsidiária: se existe outro meio eficaz (como representação de inconstitucionalidade estadual), ela não cabe.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Constitucional",
      "tema": "Controle de Constitucionalidade",
      "dificuldade": "media",
      "enunciado": "O Supremo Tribunal Federal, ao julgar procedente ação direta de inconstitucionalidade proposta contra lei federal que regula determinado tributo há mais de oito anos, reconhece que a declaração de nulidade com efeitos retroativos geraria grave insegurança jurídica e comprometeria situações já consolidadas de boa-fé. Por essa razão, o Tribunal delibera modular os efeitos da decisão, fazendo-a produzir efeitos somente a partir de data futura fixada no acórdão. Sobre o quórum exigido para essa modulação, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A modulação de efeitos, tendo em vista razões de segurança jurídica ou excepcional interesse social, exige o voto de dois terços dos membros do Supremo Tribunal Federal."
        },
        {
          "letra": "B",
          "texto": "A modulação de efeitos pode ser determinada pela maioria simples dos Ministros presentes à sessão de julgamento, independentemente do quórum de instalação."
        },
        {
          "letra": "C",
          "texto": "A modulação de efeitos independe de quórum qualificado, bastando que conste expressamente do pedido inicial formulado pelo autor da ação direta de inconstitucionalidade."
        },
        {
          "letra": "D",
          "texto": "A modulação de efeitos é vedada em sede de ação direta de inconstitucionalidade, sendo cabível apenas no controle difuso de constitucionalidade."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 27 da Lei 9.868/1999 permite que o Supremo Tribunal Federal, tendo em vista razões de segurança jurídica ou de excepcional interesse social, restrinja os efeitos da declaração de inconstitucionalidade ou decida que ela só tenha eficácia a partir de seu trânsito em julgado ou de outro momento que venha a ser fixado, exigindo para tanto o voto de dois terços de seus membros.",
      "explicacaoErradas": "(B) e (C) erram ao reduzir o quórum exigido para maioria simples ou dispensá-lo, quando a lei exige expressamente o quórum qualificado de dois terços dos membros da Corte. (D) erra ao negar a possibilidade de modulação em ADI, instrumento de controle concentrado em que a modulação é expressamente prevista e frequentemente utilizada pelo STF.",
      "pegadinha": "O candidato pode confundir o quórum de modulação (dois terços dos membros) com o quórum comum de julgamento de ADI (maioria absoluta para declarar a inconstitucionalidade), que são exigências distintas e cumulativas quando há modulação.",
      "regraMemoria": "Modular efeitos de decisão de inconstitucionalidade exige 2/3 dos Ministros do STF, quórum mais alto que o da própria declaração de inconstitucionalidade.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Constitucional",
      "tema": "Processo Legislativo",
      "dificuldade": "dificil",
      "enunciado": "Em tramitação na Câmara dos Deputados, projeto de lei complementar destinado a dispor sobre normas gerais de direito tributário é submetido a votação em Plenário, sendo aprovado pelo voto favorável da maioria simples dos Deputados presentes à sessão, número que correspondia a pouco mais da metade dos presentes, mas não alcançava a maioria absoluta do total de membros da Casa. O projeto segue então ao Senado Federal para nova apreciação. Sobre a validade da aprovação na Câmara dos Deputados, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A aprovação é formalmente inválida, pois lei complementar exige, para sua aprovação, o voto da maioria absoluta dos membros de cada Casa Legislativa, e não apenas a maioria simples dos presentes."
        },
        {
          "letra": "B",
          "texto": "A aprovação é válida, pois toda espécie normativa infraconstitucional, inclusive lei complementar, pode ser aprovada por maioria simples dos presentes à sessão, desde que presente o quórum mínimo de instalação."
        },
        {
          "letra": "C",
          "texto": "A aprovação é válida, pois o quórum de maioria absoluta somente se aplica a emendas constitucionais, e não a leis complementares."
        },
        {
          "letra": "D",
          "texto": "A validade da aprovação depende exclusivamente de deliberação do Senado Federal, sendo irrelevante o quórum obtido na Câmara dos Deputados."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 69 da Constituição Federal exige que as leis complementares sejam aprovadas por maioria absoluta dos membros de cada uma das Casas do Congresso Nacional, e não apenas pela maioria simples dos presentes à sessão. A aprovação por maioria simples, ainda que com quórum de instalação presente, não satisfaz essa exigência constitucional específica, tornando o ato formalmente inválido.",
      "explicacaoErradas": "(B) erra ao confundir o quórum geral de aprovação de leis ordinárias (maioria simples dos presentes, respeitado o quórum de instalação) com o quórum especial e mais rigoroso exigido para leis complementares. (C) erra ao restringir a exigência de maioria absoluta apenas às emendas constitucionais (que, na verdade, exigem quórum ainda mais elevado, de três quintos, em dois turnos), ignorando a previsão específica do art. 69 para leis complementares. (D) erra ao transferir para o Senado a responsabilidade por sanar vício de quórum ocorrido na Câmara, quando cada Casa deve observar autonomamente o quórum constitucional exigido para a espécie normativa.",
      "pegadinha": "O examinador explora a confusão entre maioria simples dos presentes (regra geral para leis ordinárias) e maioria absoluta dos membros da Casa (regra específica para leis complementares), quórum que não se confunde com o das emendas constitucionais.",
      "regraMemoria": "Lei complementar exige maioria absoluta dos membros da Casa, não maioria simples dos presentes.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Constitucional",
      "tema": "Medida Provisória",
      "dificuldade": "dificil",
      "enunciado": "Diante de uma crise fiscal considerada urgente pelo Poder Executivo, a Presidência da República edita medida provisória destinada a alterar dispositivos do Código Tributário Nacional, instituindo nova regra geral de prescrição e decadência tributária aplicável a todos os entes federativos, matéria tradicionalmente tratada por lei complementar, com fundamento em norma geral de direito tributário prevista no art. 146 da Constituição Federal. Questionada a validade da medida provisória perante o Supremo Tribunal Federal, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A medida provisória é inconstitucional, pois é vedada a edição de medida provisória sobre matéria reservada a lei complementar."
        },
        {
          "letra": "B",
          "texto": "A medida provisória é constitucional, pois a urgência e a relevância da matéria tributária autorizam sua disciplina por medida provisória, ainda que reservada à lei complementar."
        },
        {
          "letra": "C",
          "texto": "A medida provisória é constitucional, desde que convertida em lei complementar pelo Congresso Nacional no prazo de sessenta dias, prorrogável por igual período."
        },
        {
          "letra": "D",
          "texto": "A vedação à edição de medida provisória sobre matéria de lei complementar aplica-se apenas às matérias penais e processuais, não alcançando normas gerais tributárias."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 62, §1º, III, da Constituição Federal veda expressamente a edição de medida provisória sobre matéria reservada a lei complementar. Como as normas gerais de prescrição e decadência tributária, nos termos do art. 146, III, 'b', da Constituição, devem ser veiculadas por lei complementar, a medida provisória editada sobre essa matéria é formalmente inconstitucional, independentemente da urgência alegada.",
      "explicacaoErradas": "(B) erra ao supor que a urgência e a relevância, requisitos gerais para edição de medida provisória, possam afastar a vedação material específica do §1º do art. 62. (C) erra ao imaginar que a posterior conversão em lei complementar sanaria o vício de origem; medida provisória não pode ser convertida em lei complementar, pois seu rito de conversão é o de lei ordinária. (D) erra ao restringir indevidamente o alcance da vedação, que o texto constitucional não limita a matérias penais e processuais, mas sim a toda e qualquer matéria reservada a lei complementar.",
      "pegadinha": "O candidato pode ser levado a crer que a urgência fiscal, por si só, autorizaria a medida provisória, ignorando que a vedação do art. 62, §1º, III, é absoluta quanto a matérias reservadas a lei complementar, não comportando ponderação com a urgência do caso concreto.",
      "regraMemoria": "Medida provisória nunca pode tratar de matéria reservada a lei complementar, nem mesmo em nome da urgência.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Constitucional",
      "tema": "Nacionalidade",
      "dificuldade": "media",
      "enunciado": "Thiago nasceu na Alemanha, filho de pai brasileiro que ali residia a trabalho, sem que seu nascimento tenha sido registrado em repartição consular brasileira competente. Já maior de idade, Thiago decide se mudar definitivamente para o Brasil e, após fixar residência no país, opta formalmente pela nacionalidade brasileira perante a Justiça Federal. Sobre a condição de Thiago, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Thiago é brasileiro nato, pois, nascido no estrangeiro de pai brasileiro, veio a residir no Brasil e optou, após atingir a maioridade, pela nacionalidade brasileira, situação que a Constituição Federal enquadra como hipótese de nacionalidade originária, podendo ocupar cargos privativos de brasileiro nato."
        },
        {
          "letra": "B",
          "texto": "Thiago é brasileiro naturalizado, pois a ausência de registro consular no momento do nascimento afasta a nacionalidade originária, sujeitando-o ao processo comum de naturalização."
        },
        {
          "letra": "C",
          "texto": "Thiago permanece estrangeiro até que requeira e obtenha naturalização ordinária, não sendo suficiente a simples residência e opção pela nacionalidade brasileira."
        },
        {
          "letra": "D",
          "texto": "Thiago é brasileiro nato desde o nascimento, independentemente de vir a residir no Brasil ou de exercer a opção, por ser automática a aquisição da nacionalidade em razão da filiação brasileira."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 12, I, 'c', da Constituição Federal considera brasileiros natos os nascidos no estrangeiro, de pai brasileiro ou mãe brasileira, desde que sejam registrados em repartição brasileira competente ou venham a residir na República Federativa do Brasil e optem, em qualquer tempo, depois de atingida a maioridade, pela nacionalidade brasileira. Tratando-se de nacionalidade originária (nato), Thiago pode ocupar os cargos privativos de brasileiro nato previstos no art. 12, §3º, da Constituição.",
      "explicacaoErradas": "(B) e (C) erram ao tratar a hipótese como naturalização, quando a própria Constituição classifica essa situação como nacionalidade nata (originária), e não derivada. (D) erra ao afirmar que a aquisição seria automática desde o nascimento, sem necessidade de registro consular ou, alternativamente, de residência e opção posterior; a Constituição exige o cumprimento de uma dessas condições para a nacionalidade se aperfeiçoar nessa hipótese.",
      "pegadinha": "O examinador explora a falsa impressão de que a ausência de registro consular no nascimento tornaria Thiago naturalizado; na verdade, a própria Constituição prevê via alternativa (residência mais opção após a maioridade) que preserva sua condição de brasileiro nato.",
      "regraMemoria": "Filho de brasileiro nascido fora e não registrado no consulado: vira brasileiro nato se vier residir no Brasil e optar após a maioridade.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Constitucional",
      "tema": "Mandado de Segurança",
      "dificuldade": "media",
      "enunciado": "Rogéria, servidora pública estadual, toma ciência inequívoca, em 10 de janeiro, de ato administrativo que reduziu ilegalmente parcela de sua remuneração. Apenas em 25 de junho do mesmo ano, mais de cinco meses depois, Rogéria impetra mandado de segurança contra a autoridade coatora, buscando a anulação do ato e o restabelecimento integral da remuneração. A autoridade impetrada suscita, em suas informações, a decadência do direito de impetrar o mandado de segurança. Sobre a alegação, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Assiste razão à autoridade impetrada, pois o direito de requerer mandado de segurança extingue-se decorridos cento e vinte dias, contados da ciência, pelo interessado, do ato impugnado, prazo que foi ultrapassado no caso."
        },
        {
          "letra": "B",
          "texto": "Não assiste razão à autoridade impetrada, pois o mandado de segurança não se sujeita a prazo decadencial, podendo ser impetrado a qualquer tempo enquanto persistirem os efeitos do ato ilegal."
        },
        {
          "letra": "C",
          "texto": "Assiste razão à autoridade impetrada, mas apenas porque o prazo para mandado de segurança contra ato de servidor estadual é de sessenta dias, e não de cento e vinte dias."
        },
        {
          "letra": "D",
          "texto": "Não assiste razão à autoridade impetrada, pois o prazo decadencial de cento e vinte dias é inconstitucional, por restringir indevidamente o acesso ao Poder Judiciário."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 23 da Lei 12.016/2009 estabelece que o direito de requerer mandado de segurança extingue-se decorridos cento e vinte dias, contados da ciência, pelo interessado, do ato impugnado. O Supremo Tribunal Federal, na Súmula 632, reconhece a constitucionalidade desse prazo decadencial. Tendo Rogéria tomado ciência em 10 de janeiro e impetrado o mandado apenas em 25 de junho, ultrapassados os cento e vinte dias, está consumada a decadência.",
      "explicacaoErradas": "(B) erra ao negar a existência de prazo decadencial, expressamente previsto em lei específica. (C) erra ao inventar prazo de sessenta dias não previsto na legislação, que fixa uniformemente cento e vinte dias para a impetração, independentemente do ente federativo da autoridade coatora. (D) erra ao afirmar a inconstitucionalidade do prazo, quando o próprio STF, por meio de súmula vinculante de sua jurisprudência consolidada (Súmula 632), reconhece expressamente sua constitucionalidade.",
      "pegadinha": "O candidato pode ser levado a pensar que a decadência do mandado de segurança extingue também o direito material da servidora, quando, na verdade, apenas a via processual específica (mandado de segurança) fica inviabilizada, podendo o direito ser buscado por ação ordinária comum.",
      "regraMemoria": "Mandado de segurança: 120 dias contados da ciência do ato, prazo constitucional segundo a Súmula 632 do STF.",
      "seedVersion": 2
    },
    {
      "territorio": "Direitos Humanos",
      "tema": "Sistema Global de Proteção da ONU",
      "dificuldade": "media",
      "enunciado": "Leonardo, cidadão brasileiro, alega ter sido vítima de violação, por parte do Estado brasileiro, de direito civil assegurado no Pacto Internacional sobre Direitos Civis e Políticos, após esgotar todos os recursos internos disponíveis, inclusive perante o Supremo Tribunal Federal, sem obter a reparação pretendida. Orientado por sua advogada, Leonardo pretende submeter o caso diretamente ao Comitê de Direitos Humanos da Organização das Nações Unidas, por meio de petição individual. Sobre a possibilidade dessa petição, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A petição é cabível, pois o Brasil ratificou o Protocolo Facultativo ao Pacto Internacional sobre Direitos Civis e Políticos, reconhecendo a competência do Comitê de Direitos Humanos para receber e examinar comunicações de indivíduos que se considerem vítimas de violação de direitos previstos no Pacto, condicionada ao esgotamento dos recursos internos."
        },
        {
          "letra": "B",
          "texto": "A petição é incabível, pois o sistema global de proteção da ONU admite apenas a apresentação de relatórios periódicos pelos próprios Estados, não existindo mecanismo de petição individual em qualquer de seus órgãos."
        },
        {
          "letra": "C",
          "texto": "A petição é incabível, pois o Brasil, embora tenha ratificado o Pacto Internacional sobre Direitos Civis e Políticos, jamais aderiu a qualquer instrumento que autorize petições individuais ao Comitê de Direitos Humanos."
        },
        {
          "letra": "D",
          "texto": "A petição somente seria cabível se dirigida à Corte Interamericana de Direitos Humanos, órgão exclusivo para o recebimento de petições individuais contra o Estado brasileiro."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O Brasil aprovou o Protocolo Facultativo ao Pacto Internacional sobre Direitos Civis e Políticos por meio do Decreto Legislativo 311/2009, e o instrumento foi promulgado pelo Decreto 11.777/2023. Com isso, o Brasil reconheceu a competência do Comitê de Direitos Humanos da ONU para receber e examinar comunicações de indivíduos que se considerem vítimas de violação de direitos do Pacto, desde que esgotados os recursos internos disponíveis, condição satisfeita no caso de Leonardo.",
      "explicacaoErradas": "(B) erra ao afirmar que o sistema global se resume a relatórios estatais, ignorando o mecanismo de petições individuais consolidado pelo Protocolo Facultativo. (C) erra quanto à adesão brasileira, pois o Brasil efetivamente ratificou e promulgou o referido Protocolo Facultativo. (D) erra ao confundir o sistema global (ONU) com o sistema regional interamericano; a Corte Interamericana integra o sistema regional, distinto do Comitê de Direitos Humanos da ONU, sendo este o órgão competente no caso narrado.",
      "pegadinha": "O examinador explora a crença comum de que o Brasil só se submete a petições individuais no sistema interamericano (Comissão e Corte Interamericanas), ignorando a adesão, já consolidada, ao Protocolo Facultativo do sistema global da ONU.",
      "regraMemoria": "Brasil aderiu ao Protocolo Facultativo do PIDCP: cabe petição individual ao Comitê de Direitos Humanos da ONU após esgotar recursos internos.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Ambiental",
      "tema": "Licenciamento Ambiental",
      "dificuldade": "media",
      "enunciado": "Uma pequena padaria industrial, classificada como empreendimento de baixo impacto ambiental e baixo potencial poluidor, pretende obter regularização ambiental perante o órgão estadual competente, sem necessidade de elaboração de estudo de impacto ambiental completo. O empreendedor formula autodeclaração das características da atividade e assume compromisso formal de cumprir as condicionantes ambientais aplicáveis, buscando uma modalidade simplificada de licenciamento voltada a esse perfil de atividade. Sobre a modalidade de licença cabível, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O empreendimento pode obter a Licença por Adesão e Compromisso, modalidade destinada a atividades de menor potencial poluidor e baixo impacto ambiental, baseada em autodeclaração do empreendedor e assunção formal de compromissos ambientais, sem prejuízo de fiscalização posterior pelo órgão ambiental."
        },
        {
          "letra": "B",
          "texto": "O empreendimento somente pode ser licenciado mediante Licença Ambiental Especial, modalidade de licenciamento prioritário reservada a empreendimentos estratégicos definidos pelo Poder Executivo."
        },
        {
          "letra": "C",
          "texto": "O empreendimento está, em qualquer hipótese, dispensado de qualquer licenciamento ambiental, por não ter porte suficiente para se sujeitar ao Sistema Nacional do Meio Ambiente."
        },
        {
          "letra": "D",
          "texto": "A autodeclaração do empreendedor, por si só, nunca pode substituir a análise prévia do órgão ambiental competente, sendo sempre exigível a emissão de licença prévia, de instalação e de operação em etapas distintas."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "A Lei Geral do Licenciamento Ambiental instituiu a Licença por Adesão e Compromisso (LAC), destinada a atividades de menor potencial poluidor e baixo impacto ambiental, baseada em autodeclaração do empreendedor quanto às características do empreendimento e em compromisso formal de atendimento às condicionantes ambientais, permanecendo o órgão ambiental com poder de fiscalização e eventual responsabilização posterior.",
      "explicacaoErradas": "(B) erra ao atribuir ao caso a Licença Ambiental Especial, modalidade voltada a empreendimentos estratégicos de interesse prioritário do Poder Executivo, perfil incompatível com uma pequena padaria industrial de baixo impacto. (C) erra ao presumir dispensa total de licenciamento com base apenas no pequeno porte, quando a legislação prevê modalidades simplificadas (como a LAC), e não a ausência de qualquer controle ambiental. (D) erra ao negar a possibilidade de simplificação procedimental baseada em autodeclaração, que é justamente a principal característica da Licença por Adesão e Compromisso criada para atividades desse perfil.",
      "pegadinha": "O candidato pode achar que baixo impacto ambiental significa dispensa total de licenciamento, quando, na verdade, a legislação criou uma modalidade própria e simplificada (LAC), e não uma isenção de controle ambiental.",
      "regraMemoria": "Baixo impacto ambiental não é isenção de licenciamento: é Licença por Adesão e Compromisso, com autodeclaração e fiscalização posterior.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Civil",
      "tema": "Vícios do Consentimento - Lesão",
      "dificuldade": "dificil",
      "enunciado": "Mariana, estudante universitária sem qualquer experiência em negócios imobiliários, precisando urgentemente de dinheiro para custear tratamento médico de sua mãe, vendeu o único apartamento que possuía, avaliado em mercado por R$ 500.000,00, pelo valor de R$ 230.000,00, para Ricardo, que conhecia a situação de aperto financeiro da vendedora e se aproveitou dela para fechar o negócio rapidamente. Arrependida, Mariana busca orientação jurídica sobre a validade do negócio. Assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O negócio é anulável por lesão, pois Mariana, sob premente necessidade, obrigou-se a prestação manifestamente desproporcional ao valor da prestação oposta, sendo a lesão vício objetivo que dispensa a prova de dolo de aproveitamento por parte de Ricardo."
        },
        {
          "letra": "B",
          "texto": "O negócio é nulo de pleno direito, pois a lesão é vício social que contamina o negócio jurídico com nulidade absoluta, insanável e imprescritível."
        },
        {
          "letra": "C",
          "texto": "O negócio é plenamente válido, pois a lesão somente se configura quando presente coação moral, elemento inexistente no caso relatado."
        },
        {
          "letra": "D",
          "texto": "O negócio é anulável, mas a anulação deverá ser decretada ainda que Ricardo se disponha a oferecer suplemento suficiente ao preço pago, pois esse oferecimento é irrelevante para afastar a lesão já configurada."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "Nos termos do art. 157, caput, do Código Civil, ocorre lesão quando uma pessoa, sob premente necessidade ou por inexperiência, se obriga a prestação manifestamente desproporcional ao valor da prestação oposta. A doutrina e a jurisprudência majoritárias tratam a lesão como vício objetivo do negócio jurídico, bastando a desproporção manifesta somada ao estado de necessidade ou inexperiência do lesado, sendo dispensada a prova de que a outra parte agiu com dolo específico de aproveitamento (diferentemente do estado de perigo, que exige expressamente o conhecimento da outra parte quanto ao grave dano, nos termos do art. 156 do CC).",
      "explicacaoErradas": "A alternativa B está errada porque a lesão gera anulabilidade do negócio jurídico (e não nulidade absoluta), sujeita a prazo decadencial de quatro anos (art. 178, II, CC). A alternativa C está errada porque a lesão é vício autônomo, distinto da coação, prescindindo de qualquer ameaça ou violência. A alternativa D está errada porque o art. 157, § 2º, do Código Civil expressamente prevê que não se decretará a anulação do negócio se for oferecido suplemento suficiente ou se a parte favorecida concordar com a redução do proveito, preservando-se o negócio sempre que possível.",
      "pegadinha": "O examinador insere na narrativa elementos sugestivos de que Ricardo agiu de má-fé (\"conhecia\" e \"se aproveitou\"), tentando levar o candidato a crer que a lesão exigiria prova de dolo de aproveitamento da parte beneficiada, quando na verdade a lesão é aferida objetivamente a partir da situação do lesado.",
      "regraMemoria": "Lesão = premente necessidade ou inexperiência + desproporção manifesta das prestações — é vício objetivo, anulável, mas pode ser salva com oferta de suplemento ao preço.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Civil",
      "tema": "Vícios do Consentimento - Estado de Perigo",
      "dificuldade": "media",
      "enunciado": "Jorge, com seu filho internado em estado grave e necessitando de cirurgia de urgência, procurou a clínica particular VitaMax, que, ciente da gravidade da situação, condicionou o atendimento imediato à assinatura de contrato de prestação de serviços com valor três vezes superior ao normalmente praticado no mercado para o mesmo procedimento. Para salvar a vida do filho, Jorge assinou o contrato nessas condições. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O negócio é anulável por estado de perigo, pois Jorge assumiu obrigação excessivamente onerosa para salvar pessoa de sua família de grave dano conhecido pela outra parte contratante, nos termos do art. 156 do Código Civil."
        },
        {
          "letra": "B",
          "texto": "O negócio é anulável por lesão, uma vez que a desproporção entre as prestações é o elemento central do caso, sendo irrelevante a situação de urgência e perigo vivenciada por Jorge."
        },
        {
          "letra": "C",
          "texto": "O negócio é nulo, pois a conduta da clínica caracteriza venda casada, vedada em qualquer relação contratual, civil ou de consumo, independentemente de outros elementos."
        },
        {
          "letra": "D",
          "texto": "O negócio é plenamente válido, pois a vontade de Jorge foi livremente manifestada no momento da assinatura, não havendo vício que comprometa a declaração de vontade."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 156 do Código Civil dispõe que se configura o estado de perigo quando alguém, premido da necessidade de salvar-se, ou a pessoa de sua família, de grave dano conhecido pela outra parte, assume obrigação excessivamente onerosa. No caso, Jorge, para salvar o filho de grave dano à saúde, assumiu obrigação excessivamente onerosa, e a clínica tinha conhecimento da situação de urgência, configurando-se todos os elementos do vício.",
      "explicacaoErradas": "A alternativa B confunde estado de perigo com lesão: a lesão (art. 157, CC) está ligada à premente necessidade econômica ou inexperiência do lesado, sem exigir que a contraparte conheça a situação, enquanto o estado de perigo exige grave dano a pessoa (do declarante ou de sua família) e o conhecimento desse perigo pela outra parte. A alternativa C está errada porque não há, na narrativa, condicionamento à aquisição de produto ou serviço diverso do contratado, elemento típico da venda casada. A alternativa D ignora que a manifestação de vontade, embora existente, foi viciada pela situação de perigo conhecida pela outra parte, autorizando a anulação.",
      "pegadinha": "O examinador tenta induzir à confusão entre estado de perigo e lesão, já que ambos envolvem necessidade e desproporção; a diferença-chave é que o estado de perigo exige grave dano a pessoa e conhecimento desse perigo pela contraparte, enquanto a lesão é aferida objetivamente, sem esse requisito de ciência alheia.",
      "regraMemoria": "Estado de perigo: perigo de vida/saúde (próprio ou de família) + contraparte sabia do perigo + obrigação excessivamente onerosa.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Civil",
      "tema": "Prescrição e Decadência",
      "dificuldade": "dificil",
      "enunciado": "A sociedade empresária Consultoria Atlas Ltda. prestou serviço de auditoria contábil para a empresa Metalúrgica Boreal S.A. em 2014, mediante contrato de prestação de serviços. Em 2018, a Metalúrgica Boreal constatou que a auditoria fora realizada de forma negligente, deixando de identificar fraude contábil interna que gerou prejuízos de R$ 2.000.000,00. Em 2024, a Metalúrgica Boreal ajuizou ação de reparação de danos contra a Consultoria Atlas, fundada no inadimplemento das obrigações contratuais de auditoria. Em contestação, a Consultoria Atlas arguiu prescrição, sustentando aplicável o prazo trienal do art. 206, § 3º, V, do Código Civil, contado da descoberta do dano em 2018. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A prescrição não se consumou, pois, tratando-se de responsabilidade civil contratual decorrente de inadimplemento de obrigação assumida em contrato, aplica-se o prazo geral de dez anos previsto no art. 205 do Código Civil, e não o prazo trienal do art. 206, § 3º, V, reservado à responsabilidade extracontratual (aquiliana)."
        },
        {
          "letra": "B",
          "texto": "A prescrição consumou-se em 2021, pois o prazo trienal do art. 206, § 3º, V, do Código Civil aplica-se indistintamente a toda pretensão de reparação civil, seja ela de natureza contratual ou extracontratual."
        },
        {
          "letra": "C",
          "texto": "A pretensão é imprescritível, pois a fraude contábil constitui também ilícito penal, e a imprescritibilidade da pretensão penal correspondente afasta, por força do princípio da especialidade, qualquer prazo prescricional cível."
        },
        {
          "letra": "D",
          "texto": "O prazo prescricional é de cinco anos, pois se trata de relação de consumo entre fornecedora de serviços e destinatária final, nos termos do art. 27 do Código de Defesa do Consumidor, aplicável ao caso."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "A Corte Especial do Superior Tribunal de Justiça consolidou entendimento de que a expressão \"reparação civil\" constante do art. 206, § 3º, V, do Código Civil refere-se aos danos decorrentes de ato ilícito extracontratual (aquiliano), não se aplicando às pretensões de reparação fundadas em inadimplemento contratual, para as quais incide o prazo geral de dez anos do art. 205 do Código Civil. Como o prejuízo foi descoberto em 2018 e a ação foi ajuizada em 2024, dentro do decênio, não há prescrição.",
      "explicacaoErradas": "A alternativa B está errada por desconsiderar a distinção consolidada pelo STJ entre responsabilidade contratual e extracontratual para fins do art. 206, § 3º, V. A alternativa C está errada porque a eventual tipicidade penal da conduta e a disciplina da prescrição penal não geram, por si sós, imprescritibilidade da pretensão cível de reparação. A alternativa D está errada porque, tratando-se de empresa que contrata serviço de auditoria para uso em sua própria atividade econômica (insumo), não há relação de consumo pela ausência de destinação final, conforme a teoria finalista adotada pela jurisprudência dominante, afastando a incidência do CDC.",
      "pegadinha": "O examinador explora a tendência do candidato de aplicar automaticamente o prazo trienal do art. 206, § 3º, V, a qualquer pretensão rotulada como \"reparação civil\", sem atentar para a distinção consolidada pelo STJ entre dano contratual (10 anos, art. 205) e dano extracontratual (3 anos, art. 206, § 3º, V).",
      "regraMemoria": "Dano por descumprir contrato = 10 anos (art. 205, CC); dano por ato ilícito extracontratual = 3 anos (art. 206, § 3º, V, CC).",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Civil",
      "tema": "Boa-Fé Objetiva - Supressio",
      "dificuldade": "media",
      "enunciado": "A empresa Alfa Distribuidora Ltda. mantinha contrato de distribuição com a fabricante Beta Indústria S.A., que previa pagamento até o dia 10 de cada mês, sob pena de multa de 2% ao dia de atraso. Durante quatro anos consecutivos, a Beta sistematicamente recebeu os pagamentos da Alfa entre os dias 20 e 25 de cada mês, sem jamais cobrar a multa contratual ou notificar a distribuidora sobre o atraso. Certo mês, após nova entrega de mercadorias e pagamento novamente realizado no dia 22, a Beta subitamente exigiu o pagamento integral de toda a multa acumulada ao longo dos últimos quatro anos, alegando estrito cumprimento da cláusula contratual. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A pretensão da Beta viola a boa-fé objetiva, configurando-se a figura da supressio, pela qual o não exercício de um direito ao longo do tempo, aliado à legítima confiança gerada na contraparte, impede seu exercício posterior."
        },
        {
          "letra": "B",
          "texto": "A pretensão da Beta é legítima, pois cláusulas contratuais livremente pactuadas não podem ser mitigadas pelo comportamento posterior das partes, vigorando o princípio pacta sunt servanda de forma absoluta no direito civil contemporâneo."
        },
        {
          "letra": "C",
          "texto": "A conduta da Beta caracteriza apenas inadimplemento parcial da Alfa, sendo cabível unicamente a revisão judicial por onerosidade excessiva, nos termos do art. 478 do Código Civil."
        },
        {
          "letra": "D",
          "texto": "A tolerância reiterada da Beta configura novação tácita da obrigação principal, extinguindo definitivamente o próprio valor principal da dívida de fornecimento, e não apenas a multa moratória."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "A boa-fé objetiva (art. 422, CC) exerce, entre outras, função de limitação ao exercício de direitos subjetivos. A supressio é a figura pela qual o decurso do tempo sem o exercício de um direito, somado à confiança legítima despertada na contraparte de que ele não mais seria exercido, impede seu exercício posterior de forma abusiva e contraditória, impedindo a cobrança retroativa da multa.",
      "explicacaoErradas": "A alternativa B desconsidera a função de controle exercida pela boa-fé objetiva sobre o exercício de direitos contratuais, hoje pacificamente reconhecida pela doutrina e jurisprudência. A alternativa C está errada porque a onerosidade excessiva do art. 478 exige fato superveniente, extraordinário e imprevisível, com extrema vantagem para a outra parte, hipótese distinta da simples tolerância reiterada quanto ao prazo de pagamento. A alternativa D está errada porque a novação exige animus novandi inequívoco, não presumido (art. 361, CC), e a discussão no caso recai apenas sobre a multa moratória, não sobre a obrigação principal de pagamento do preço.",
      "pegadinha": "O examinador tenta levar o candidato a enquadrar o caso em institutos mais conhecidos, porém inadequados, como onerosidade excessiva ou novação, quando o instituto correto é a supressio, decorrência da boa-fé objetiva.",
      "regraMemoria": "Supressio: quem não exerce um direito por longo período, gerando confiança na outra parte, perde a possibilidade de exercê-lo depois.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Civil",
      "tema": "Revisão Contratual - Onerosidade Excessiva",
      "dificuldade": "media",
      "enunciado": "A empresa Transportadora Rumo Certo Ltda. celebrou contrato de execução continuada, com prazo de cinco anos, com a empresa exportadora AgroBrasil S.A., para transporte de grãos, com preço fixo reajustável apenas anualmente por índice setorial. No segundo ano de vigência, em razão de evento extraordinário e absolutamente imprevisível à época da contratação (embargo internacional que triplicou o preço do combustível utilizado pela frota), a prestação da Transportadora tornou-se excessivamente onerosa, com extrema vantagem para a AgroBrasil, que se recusa a renegociar o contrato. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A Transportadora pode pleitear a resolução do contrato por onerosidade excessiva, nos termos do art. 478 do Código Civil, facultando-se à AgroBrasil evitar a resolução oferecendo-se a modificar equitativamente as condições do contrato, conforme o art. 479 do mesmo diploma."
        },
        {
          "letra": "B",
          "texto": "A Transportadora somente poderá rescindir unilateralmente o contrato, sem possibilidade de revisão judicial, pois a teoria da imprevisão não se aplica a contratos empresariais paritários celebrados entre sociedades empresárias."
        },
        {
          "letra": "C",
          "texto": "A onerosidade excessiva autoriza apenas a redução proporcional do preço diretamente pelo juiz, sendo vedada a resolução contratual, ainda que a parte-ré não concorde com qualquer revisão das condições pactuadas."
        },
        {
          "letra": "D",
          "texto": "Por se tratar de contrato de execução continuada entre empresários, aplica-se exclusivamente a regra da revisão por fato do príncipe, instituto inexistente no Código Civil, de modo que nenhuma pretensão pode ser deduzida pela Transportadora."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 478 do Código Civil autoriza o devedor a pedir a resolução do contrato de execução continuada ou diferida quando sua prestação se tornar excessivamente onerosa, com extrema vantagem para a outra parte, em razão de acontecimentos extraordinários e imprevisíveis. O art. 479 complementa a regra, permitindo que o réu evite a resolução oferecendo-se a modificar equitativamente as condições do contrato.",
      "explicacaoErradas": "A alternativa B está errada porque a teoria da imprevisão, positivada nos arts. 478 a 480 do Código Civil, aplica-se também a contratos empresariais, desde que presentes os requisitos legais (execução continuada ou diferida, onerosidade excessiva, vantagem extrema da contraparte e fato extraordinário e imprevisível). A alternativa C inverte a ordem legal: a lei faculta à parte-ré (e não impõe ao juiz de ofício) a opção de oferecer a modificação equitativa para evitar a resolução. A alternativa D está errada porque \"fato do príncipe\" é instituto de direito administrativo relacionado a contratos com a Administração Pública, estranho à hipótese, e o Código Civil efetivamente disciplina a onerosidade excessiva nos arts. 478 a 480.",
      "pegadinha": "O examinador insinua que contratos entre empresários (relações paritárias) estariam imunes à teoria da imprevisão, quando na verdade os arts. 478 a 480 do CC não fazem tal distinção, aplicando-se a qualquer contrato de execução continuada ou diferida que preencha os requisitos legais.",
      "regraMemoria": "Art. 478 CC: onerosidade excessiva + vantagem extrema da outra parte + fato extraordinário e imprevisível = resolução, salvo oferta de modificação equitativa pelo réu (art. 479).",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Civil",
      "tema": "Contratos de Adesão - Cláusulas Abusivas",
      "dificuldade": "dificil",
      "enunciado": "João celebrou contrato de adesão com a administradora de consórcio Construir Já para aquisição de carta de crédito imobiliário. O contrato continha cláusula segundo a qual o consorciado excluído do grupo renunciaria antecipadamente a qualquer direito de restituição das parcelas pagas, mesmo em caso de exclusão por atraso justificado. Após perder o emprego, João atrasou três parcelas e foi excluído do consórcio, tendo a administradora invocado a cláusula para negar qualquer devolução de valores. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A cláusula é nula, pois, nos contratos de adesão, são nulas as cláusulas que estipulem a renúncia antecipada do aderente a direito resultante da natureza do negócio, nos termos do art. 424 do Código Civil."
        },
        {
          "letra": "B",
          "texto": "A cláusula é válida, pois decorre da autonomia da vontade e da liberdade de contratar, não podendo o julgador afastar disposição expressamente pactuada entre as partes em contrato civil paritário."
        },
        {
          "letra": "C",
          "texto": "A cláusula é apenas anulável, dependendo de ação própria ajuizada pelo consorciado no prazo decadencial de quatro anos, sob pena de convalidação pelo decurso do tempo."
        },
        {
          "letra": "D",
          "texto": "A cláusula somente poderia ser afastada se o contrato fosse regido pelo Código de Defesa do Consumidor, sendo inaplicável essa proteção aos contratos de adesão regidos exclusivamente pelo Código Civil."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 424 do Código Civil estabelece que, nos contratos de adesão, são nulas as cláusulas que estipulem a renúncia antecipada do aderente a direito resultante da natureza do negócio. Como a restituição (ainda que com eventual retenção administrativa) é direito inerente à natureza do contrato de consórcio em caso de desistência ou exclusão, a cláusula de renúncia antecipada e total é nula de pleno direito.",
      "explicacaoErradas": "A alternativa B ignora o limite legal expresso do art. 424, que relativiza a autonomia da vontade justamente nos contratos de adesão, em que o aderente não negocia as cláusulas. A alternativa C está errada porque a nulidade prevista no art. 424 é nulidade absoluta (e não anulabilidade), não convalidável pelo decurso do tempo, podendo ser reconhecida de ofício e alegada a qualquer tempo. A alternativa D está errada porque a proteção do art. 424 integra o próprio Código Civil e aplica-se a qualquer contrato de adesão por ele regido, independentemente de also configurar relação de consumo.",
      "pegadinha": "O examinador sugere que a proteção contra cláusulas abusivas em contratos de adesão seria exclusividade do Código de Defesa do Consumidor, quando o próprio Código Civil, no art. 424, traz regra protetiva equivalente para contratos de adesão em geral, inclusive os puramente civis.",
      "regraMemoria": "Art. 424, CC: nos contratos de adesão, é nula a cláusula que faça o aderente renunciar antecipadamente a direito decorrente da natureza do negócio.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Civil",
      "tema": "União Estável",
      "dificuldade": "dificil",
      "enunciado": "Camila e Rodrigo mantiveram relacionamento afetivo por três anos, com encontros frequentes, viagens em conjunto e presença em eventos familiares de ambos, mas sempre residindo em imóveis separados, sem constituição de economia comum, sem assumirem publicamente a relação como entidade familiar perante terceiros e sem jamais manifestarem a intenção de constituir família. Após o término, Rodrigo pleiteia judicialmente o reconhecimento de união estável e a partilha de bens adquiridos exclusivamente por Camila durante o período do relacionamento. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Não há união estável, pois a mera affectio e a convivência social, sem o elemento finalístico de constituição de família e sem a assunção pública da relação como entidade familiar, caracterizam namoro qualificado, insuficiente para os efeitos do art. 1.723 do Código Civil."
        },
        {
          "letra": "B",
          "texto": "Há união estável, pois o Código Civil exige apenas convivência pública, contínua e duradoura entre o casal, sendo dispensável qualquer elemento subjetivo relativo ao objetivo de constituição de família."
        },
        {
          "letra": "C",
          "texto": "Há união estável, uma vez que a coabitação sob o mesmo teto é dispensável, sendo o único requisito legal a affectio societatis entre os companheiros, demonstrada no caso pelas viagens e eventos familiares conjuntos."
        },
        {
          "letra": "D",
          "texto": "Não há união estável, pois a ausência de registro público do relacionamento em cartório é condição essencial e constitutiva para a configuração da entidade familiar, nos termos do art. 1.723 do Código Civil."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 1.723 do Código Civil exige, para a configuração da união estável, convivência pública, contínua e duradoura, estabelecida com o objetivo de constituição de família. A doutrina e a jurisprudência distinguem a união estável do chamado \"namoro qualificado\", no qual, a despeito de intimidade e convivência social contínua, falta o elemento finalístico essencial (affectio maritalis e propósito de constituir família), bem como a assunção pública da relação como entidade familiar perante terceiros, não bastando o relacionamento afetivo duradouro isoladamente considerado.",
      "explicacaoErradas": "A alternativa B está errada por ignorar o elemento finalístico exigido expressamente pelo art. 1.723 (objetivo de constituição de família), sem o qual não há união estável, por mais pública e duradoura que seja a convivência social. A alternativa C está parcialmente correta ao afirmar que a coabitação é dispensável (Súmula 382 do STF), mas erra ao afirmar que a affectio isolada, sem o propósito de constituir família e sem a assunção da relação como entidade familiar, seria suficiente. A alternativa D está errada porque a união estável é situação de fato, não dependendo de registro público em cartório para sua configuração, embora o registro declaratório facilite a prova.",
      "pegadinha": "O examinador explora a confusão entre namoro duradouro com intimidade (ainda que com viagens e convívio social) e união estável propriamente dita, cujo traço distintivo essencial é o elemento finalístico de constituição de família e a assunção pública da relação como entidade familiar, e não apenas a duração ou intensidade do vínculo afetivo.",
      "regraMemoria": "União estável = convivência pública + contínua + duradoura + objetivo de constituir família (dispensa coabitação, mas exige affectio maritalis e assunção pública como família).",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Civil",
      "tema": "Alimentos",
      "dificuldade": "media",
      "enunciado": "Pedro paga pensão alimentícia a seu filho Lucas, fixada judicialmente. Ao completar 18 anos, Pedro simplesmente parou de efetuar os depósitos, entendendo que a maioridade civil extingue automaticamente o dever alimentar, independentemente de qualquer manifestação judicial. Lucas, que ingressou em curso superior e não possui renda própria, continua a necessitar dos alimentos para se manter e custear os estudos. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A conduta de Pedro é incorreta, pois o cancelamento da pensão alimentícia de filho que atingiu a maioridade está sujeito a decisão judicial, proferida mediante contraditório, ainda que nos próprios autos, não operando a exoneração de forma automática."
        },
        {
          "letra": "B",
          "texto": "A conduta de Pedro é correta, pois a maioridade civil extingue automaticamente o poder familiar e, por consequência direta e imediata, qualquer obrigação alimentar, independentemente de decisão judicial."
        },
        {
          "letra": "C",
          "texto": "A conduta de Pedro é incorreta, mas apenas porque Lucas está cursando ensino superior, hipótese em que a lei brasileira fixa expressamente a exoneração automática apenas aos 24 anos de idade."
        },
        {
          "letra": "D",
          "texto": "A conduta de Pedro é correta, pois os alimentos devidos a filhos decorrem exclusivamente do poder familiar, extinguindo-se o dever alimentar com a maioridade, ainda que o filho comprove necessidade e o alimentante possua recursos."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "A Súmula 358 do Superior Tribunal de Justiça dispõe que o cancelamento de pensão alimentícia de filho que atingiu a maioridade está sujeito a decisão judicial, mediante contraditório, ainda que nos próprios autos, não sendo a exoneração automática pela simples superveniência da maioridade civil.",
      "explicacaoErradas": "A alternativa B confunde a extinção do poder familiar com a extinção do dever alimentar: a obrigação alimentar entre pais e filhos maiores pode subsistir com fundamento no parentesco (arts. 1.694 e 1.696 do CC), e não apenas no poder familiar, exigindo-se prova da cessação da necessidade em processo próprio. A alternativa C está errada porque não existe regra legal fixando automaticamente os 24 anos como termo de exoneração; essa idade é apenas parâmetro comumente utilizado na prática forense para conclusão de curso superior, mas a exoneração sempre dependerá de decisão judicial. A alternativa D incorre no mesmo equívoco da alternativa B.",
      "pegadinha": "O examinador explora a crença comum, mas equivocada, de que a maioridade civil extingue automaticamente a pensão alimentícia, quando a Súmula 358 do STJ exige expressamente decisão judicial com contraditório para o cancelamento.",
      "regraMemoria": "Súmula 358, STJ: maioridade não exonera automaticamente a pensão alimentícia — é necessária decisão judicial com contraditório.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Civil",
      "tema": "Usucapião",
      "dificuldade": "dificil",
      "enunciado": "Antônio ocupa, há 11 anos, ininterruptamente e sem oposição de quem quer que seja, um imóvel rural abandonado de 80 hectares, nele estabelecendo sua moradia habitual e desenvolvendo atividade agrícola produtiva com sua família, sem jamais ter possuído justo título ou boa-fé quanto à origem da posse. Antônio pretende requerer a declaração judicial de usucapião do imóvel. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Antônio pode requerer a usucapião extraordinária com prazo reduzido para dez anos, pois estabeleceu no imóvel sua moradia habitual e nele realizou obras e serviços de caráter produtivo, nos termos do parágrafo único do art. 1.238 do Código Civil, sendo dispensados justo título e boa-fé."
        },
        {
          "letra": "B",
          "texto": "Antônio somente poderá requerer a usucapião ordinária, pois a ausência de justo título e boa-fé afasta, no caso de imóveis rurais, qualquer outra modalidade de usucapião."
        },
        {
          "letra": "C",
          "texto": "Antônio não pode requerer usucapião, pois o prazo mínimo para a usucapião extraordinária de imóvel rural é sempre de quinze anos, independentemente de a posse ser qualificada por moradia habitual ou produtividade."
        },
        {
          "letra": "D",
          "texto": "Antônio poderá requerer apenas a usucapião especial rural, cujo prazo é de cinco anos, por se tratar de área rural utilizada para subsistência da família, nos termos do art. 1.239 do Código Civil."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 1.238, caput, do Código Civil fixa o prazo geral de quinze anos para a usucapião extraordinária, mas o parágrafo único reduz esse prazo para dez anos quando o possuidor houver estabelecido no imóvel sua moradia habitual, ou nele realizado obras ou serviços de caráter produtivo (chamada usucapião extraordinária por posse-trabalho), dispensando-se justo título e boa-fé em ambos os casos.",
      "explicacaoErradas": "A alternativa B está errada porque a ausência de justo título e boa-fé não afasta a usucapião extraordinária (que justamente dispensa esses requisitos), apenas impede a usucapião ordinária, que os exige (art. 1.242, CC). A alternativa C ignora a redução de prazo prevista no parágrafo único do art. 1.238 para a posse qualificada por moradia ou produtividade. A alternativa D está errada porque a usucapião especial rural (art. 1.239, CC) exige área não superior a cinquenta hectares, e a área ocupada por Antônio é de oitenta hectares, o que afasta essa modalidade específica, restando aplicável a usucapião extraordinária por posse-trabalho.",
      "pegadinha": "O examinador insere uma área de 80 hectares, acima do limite de 50 hectares da usucapião especial rural, para testar se o candidato aplicará automaticamente essa modalidade apenas por se tratar de imóvel rural usado para subsistência, sem atentar ao requisito dimensional.",
      "regraMemoria": "Usucapião extraordinária: 15 anos (regra geral) ou 10 anos com posse-trabalho (moradia habitual ou obras/serviços produtivos) — sempre dispensa título e boa-fé.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Civil",
      "tema": "Posse e Detenção",
      "dificuldade": "media",
      "enunciado": "Jurandir trabalha há 15 anos como caseiro na fazenda de propriedade de Eduardo, residindo em casa dentro da propriedade em razão do contrato de trabalho e exercendo atos de vigilância e conservação sobre o imóvel exclusivamente em cumprimento de ordens e instruções do proprietário. Após ser demitido, Jurandir se recusa a desocupar o imóvel, alegando ter posse própria sobre ele e pretendendo ajuizar ação possessória em nome próprio contra Eduardo. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Jurandir não tem posse própria, mas mera detenção, por conservar a coisa em nome alheio e em cumprimento de ordens e instruções do proprietário, não lhe assistindo legitimidade para ajuizar ação possessória em nome próprio, nos termos do art. 1.198 do Código Civil."
        },
        {
          "letra": "B",
          "texto": "Jurandir tem posse direta sobre o imóvel, decorrente do desdobramento da posse operado pela relação de trabalho, podendo ajuizar ação possessória contra o proprietário, que deteria apenas a posse indireta."
        },
        {
          "letra": "C",
          "texto": "Jurandir tem posse plena sobre o imóvel, já consolidada pelo longo decurso de tempo, podendo inclusive pleitear usucapião extraordinária do bem com base nesses mais de dez anos de ocupação."
        },
        {
          "letra": "D",
          "texto": "Jurandir não tem posse nem detenção, configurando-se mera ocupação de fato, de modo que o proprietário poderá retomar o imóvel por conta própria, exercendo desforço imediato a qualquer tempo, independentemente de prazo."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 1.198 do Código Civil dispõe que se considera detentor aquele que, achando-se em relação de dependência para com outro, conserva a posse em nome deste e em cumprimento de ordens ou instruções suas. O caseiro, nessa condição, é tradicionalmente chamado de \"fâmulo da posse\", não exercendo posse própria e, por isso, carecendo de legitimidade para ajuizar ação possessória em nome próprio.",
      "explicacaoErradas": "A alternativa B está errada porque não há, na relação de trabalho de caseiro, desdobramento da posse em direta e indireta (típico, por exemplo, da locação), mas simples detenção subordinada às ordens do proprietário. A alternativa C está errada porque a detenção não gera posse ad usucapionem, sendo pressuposto da usucapião a posse própria, com ânimo de dono. A alternativa D está errada porque, embora o desforço imediato (art. 1.210, § 1º, CC) seja cabível para a defesa da posse contra turbação ou esbulho, ele deve ser exercido \"logo\" após o ato, e não a qualquer tempo, de forma indefinida; além disso, há sim detenção subordinada, e não mera ocupação de fato.",
      "pegadinha": "O examinador explora o longo tempo de ocupação (15 anos) para induzir o candidato a cogitar posse própria apta à usucapião, quando, por se tratar de detenção subordinada (fâmulo da posse), o decurso do tempo é irrelevante para esse fim.",
      "regraMemoria": "Caseiro/empregado subordinado = fâmulo da posse = mera detenção, sem legitimidade para ação possessória própria e sem posse ad usucapionem.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Civil",
      "tema": "Sucessões - Concorrência Sucessória do Cônjuge",
      "dificuldade": "dificil",
      "enunciado": "Haroldo, viúvo de 72 anos, casou-se com Beatriz, de 45 anos, sob regime de separação obrigatória de bens, por força da idade do nubente (art. 1.641, II, do Código Civil). Três anos depois, Haroldo faleceu, deixando dois filhos de casamento anterior e bens particulares adquiridos antes de seu casamento com Beatriz. Discute-se, no inventário, se Beatriz concorre com os filhos na herança desses bens particulares. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Beatriz não concorre com os descendentes na herança dos bens particulares de Haroldo, pois, no regime da separação legal (obrigatória) de bens, o cônjuge sobrevivente é excluído da concorrência sucessória, nos termos do art. 1.829, I, do Código Civil."
        },
        {
          "letra": "B",
          "texto": "Beatriz concorre integralmente com os descendentes, em igualdade de condições quanto a todo o acervo hereditário, pois o regime de bens do casamento é irrelevante para fins de direito sucessório, aplicando-se sempre a regra geral de concorrência do art. 1.829, I."
        },
        {
          "letra": "C",
          "texto": "Beatriz não herda absolutamente nada, pois cônjuges casados sob separação obrigatória de bens, em razão da idade, são excluídos de qualquer direito sucessório, inclusive do direito real de habitação sobre o imóvel residencial da família."
        },
        {
          "letra": "D",
          "texto": "Beatriz concorre com os descendentes exclusivamente em relação aos bens adquiridos onerosamente na constância do casamento, por aplicação analógica da Súmula 377 do STF ao direito sucessório, entendimento que constitui a posição dominante na jurisprudência do STJ."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 1.829, I, do Código Civil exclui o cônjuge sobrevivente da concorrência com os descendentes quando o casamento tenha sido celebrado sob o regime da comunhão universal, da separação obrigatória (legal) de bens, ou da comunhão parcial quando o autor da herança não tiver deixado bens particulares. No regime de separação obrigatória, a exclusão é a regra consolidada aplicada pelos tribunais, independentemente de o bem ser particular ou de haver esforço comum na sua aquisição.",
      "explicacaoErradas": "A alternativa B ignora a exceção expressamente prevista no próprio art. 1.829, I, que exclui a concorrência justamente nos casos de separação obrigatória. A alternativa C está errada porque a exclusão da concorrência sucessória quanto à herança não afeta o direito real de habitação sobre o imóvel em que residia o casal, assegurado ao cônjuge sobrevivente independentemente do regime de bens, nos termos do art. 1.831 do Código Civil. A alternativa D traz posição minoritária (aplicação da Súmula 377 do STF, voltada à comunicabilidade de bens no divórcio, ao direito sucessório), que não corresponde ao entendimento consolidado e prevalecente aplicado para fins de concorrência sucessória nos termos literais do art. 1.829, I.",
      "pegadinha": "O examinador insere a tese minoritária de aplicação da Súmula 377 do STF ao direito sucessório como alternativa tentadora, mas essa posição não é a consolidada; a regra aplicável é a exclusão pura e simples da concorrência na separação obrigatória, nos termos do art. 1.829, I.",
      "regraMemoria": "Separação obrigatória de bens + descendentes = cônjuge/companheiro sobrevivente NÃO concorre na herança (mas mantém direito real de habitação).",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Civil",
      "tema": "Sucessões - Indignidade e Deserdação",
      "dificuldade": "media",
      "enunciado": "Valdemar, viúvo, foi vítima de tentativa de homicídio doloso praticada por seu filho Breno, em razão de desentendimento financeiro, fato comprovado por sentença penal condenatória transitada em julgado. Meses depois, Valdemar faleceu sem deixar testamento, sucedido por Breno e por seu outro filho, Caio. Este último pretende excluir Breno da sucessão em razão da tentativa de homicídio cometida contra o pai. O Ministério Público sustenta que, não havendo testamento de Valdemar excluindo expressamente Breno, nenhum herdeiro poderia ser afastado da sucessão legítima. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Caio poderá ajuizar ação de exclusão por indignidade contra Breno, no prazo decadencial de quatro anos contado da abertura da sucessão, pois a tentativa de homicídio doloso contra o autor da herança constitui causa de indignidade (art. 1.814, I, do Código Civil), sendo prescindível testamento prévio determinando a exclusão."
        },
        {
          "letra": "B",
          "texto": "Breno somente poderá ser excluído da sucessão por deserdação, instituto que dispensa processo judicial e pode ser decretado unilateralmente pelos demais herdeiros mediante simples declaração extrajudicial."
        },
        {
          "letra": "C",
          "texto": "Como Valdemar não deixou testamento mencionando expressamente a exclusão de Breno, nenhum dos herdeiros poderá excluí-lo da sucessão, operando-se a sucessão legítima em partes iguais entre os dois filhos."
        },
        {
          "letra": "D",
          "texto": "A tentativa de homicídio contra o autor da herança não constitui causa de indignidade, mas apenas de deserdação, instituto exclusivo para fatos ocorridos após a abertura da sucessão."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 1.814, I, do Código Civil estabelece que são excluídos da sucessão os herdeiros ou legatários que houverem sido autores, coautores ou partícipes de homicídio doloso, ou tentativa deste, contra a pessoa de cuja sucessão se tratar. A indignidade independe de testamento do autor da herança, bastando a ocorrência de uma das hipóteses legais taxativas, reconhecida por sentença em ação própria, ajuizada no prazo decadencial de quatro anos a contar da abertura da sucessão (art. 1.815, CC).",
      "explicacaoErradas": "A alternativa B confunde indignidade com deserdação: esta última, ao contrário daquela, exige expressa declaração de vontade do autor da herança em testamento, apontando a causa legal (arts. 1.961 e 1.962, CC), e depende de ação judicial para comprovação da causa alegada (art. 1.965, CC), não podendo ser decretada unilateralmente pelos herdeiros. A alternativa C está errada porque a indignidade, diferentemente da deserdação, não exige testamento prévio do autor da herança, bastando a configuração de uma das hipóteses do art. 1.814. A alternativa D inverte os institutos: a tentativa de homicídio doloso é causa clássica de indignidade (art. 1.814, I), aplicável independentemente de o fato ser anterior ou posterior à abertura da sucessão, desde que haja nexo com a pessoa do autor da herança.",
      "pegadinha": "O examinador tenta fazer o candidato confundir indignidade (hipóteses legais do art. 1.814, independente de testamento, reconhecida por ação judicial própria) com deserdação (depende de testamento expresso do autor da herança apontando causa legal), levando-o a crer, erroneamente, que a ausência de testamento impediria qualquer exclusão de herdeiro.",
      "regraMemoria": "Indignidade independe de testamento (ação judicial própria, prazo de 4 anos); deserdação exige testamento expresso do autor da herança apontando a causa legal.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Civil",
      "tema": "Responsabilidade Civil - LGPD",
      "dificuldade": "dificil",
      "enunciado": "A empresa DataFácil Ltda. (controladora) contratou a empresa CloudSeguro S.A. (operadora) para processar, em plataforma de armazenamento em nuvem, dados pessoais de seus clientes. A CloudSeguro, descumprindo expressa instrução contratual lícita da DataFácil e as obrigações previstas na legislação de proteção de dados pessoais, deixou de implementar medida de segurança básica exigida, o que permitiu vazamento de dados sensíveis de milhares de titulares, causando-lhes danos morais individuais. Sobre a responsabilidade civil no caso, à luz da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A CloudSeguro responde solidariamente pelos danos causados, pois, na qualidade de operadora, descumpriu as obrigações da legislação de proteção de dados pessoais e não seguiu as instruções lícitas da controladora, nos termos do art. 42, § 1º, da Lei Geral de Proteção de Dados."
        },
        {
          "letra": "B",
          "texto": "Apenas a DataFácil, na qualidade de controladora, pode ser responsabilizada civilmente, pois a Lei Geral de Proteção de Dados não prevê, em nenhuma hipótese, responsabilidade solidária do operador perante os titulares de dados."
        },
        {
          "letra": "C",
          "texto": "A responsabilidade dos agentes de tratamento de dados pessoais perante os titulares é sempre subsidiária, somente podendo o operador ser acionado após o esgotamento do patrimônio da controladora."
        },
        {
          "letra": "D",
          "texto": "Nenhuma das empresas responde civilmente, pois o vazamento de dados decorrente de falha de segurança constitui caso fortuito externo, apto a excluir a responsabilidade independentemente da adoção ou não de medidas de segurança adequadas."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 42 da LGPD estabelece que o controlador ou o operador que, em razão do exercício de atividade de tratamento de dados pessoais, causar a outrem dano patrimonial, moral, individual ou coletivo, em violação à legislação de proteção de dados, é obrigado a repará-lo. O § 1º do mesmo artigo prevê que o operador responde solidariamente pelos danos causados pelo tratamento quando descumprir as obrigações da legislação de proteção de dados ou quando não tiver seguido as instruções lícitas do controlador, hipóteses ambas configuradas no caso.",
      "explicacaoErradas": "A alternativa B contraria expressamente o art. 42, § 1º, da LGPD, que prevê a responsabilidade solidária do operador nas hipóteses nela descritas. A alternativa C está errada porque, configurada a solidariedade legal, o titular lesado pode acionar diretamente qualquer um dos responsáveis solidários, sem necessidade de esgotamento prévio do patrimônio de outro agente. A alternativa D está errada porque a excludente de caso fortuito externo pressupõe evento imprevisível e inevitável mesmo com a adoção das medidas de segurança exigíveis; no caso, houve falha evitável na implementação de medida básica de segurança, atribuível diretamente à operadora, o que afasta a excludente.",
      "pegadinha": "O examinador tenta induzir à ideia de que apenas o controlador responde perante o titular dos dados, ou de que a responsabilidade do operador seria sempre subsidiária, quando a LGPD prevê expressamente hipóteses de responsabilidade solidária do operador no art. 42, § 1º.",
      "regraMemoria": "Art. 42, § 1º, LGPD: o operador responde solidariamente se descumprir a legislação de proteção de dados ou desobedecer instrução lícita do controlador.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito do Consumidor",
      "tema": "Práticas Comerciais - Oferta Vinculante",
      "dificuldade": "media",
      "enunciado": "A loja virtual TechPreço anunciou, em seu site, um notebook por R$ 1.999,00, com destaque de \"oferta relâmpago, últimas unidades\". Diversos consumidores efetuaram o pedido e receberam confirmação automática de compra. Horas depois, a empresa enviou e-mail informando que o preço anunciado decorrera de erro de sistema e que o valor correto seria R$ 3.999,00, oferecendo aos consumidores apenas a devolução do valor pago, sem a entrega do produto anunciado. Sobre o caso, à luz do Código de Defesa do Consumidor, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O consumidor pode exigir, à sua escolha, o cumprimento forçado da obrigação nos termos da oferta, aceitar outro produto equivalente, ou rescindir o contrato com direito à restituição e a perdas e danos, não podendo o fornecedor impor unilateralmente apenas a devolução do valor pago, nos termos do art. 35 do CDC."
        },
        {
          "letra": "B",
          "texto": "O fornecedor pode retratar-se unilateralmente de oferta publicitária veiculada por erro de sistema, bastando a devolução do valor pago, pois a oferta não vincula o anunciante quando decorrente de falha técnica não intencional."
        },
        {
          "letra": "C",
          "texto": "A oferta publicitária tem natureza de mera proposta preliminar, não vinculando o fornecedor, que pode revogá-la livremente até a emissão da nota fiscal de venda."
        },
        {
          "letra": "D",
          "texto": "O consumidor somente pode pleitear indenização por danos morais, sendo vedada por lei qualquer pretensão de cumprimento específico da obrigação de entregar o produto efetivamente anunciado."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "Os arts. 30 e 35 do CDC consagram o princípio da vinculação da oferta: toda informação ou publicidade suficientemente precisa obriga o fornecedor e integra o contrato. Diante do descumprimento da oferta, o art. 35 confere ao consumidor, à sua escolha, as alternativas de exigir o cumprimento forçado da obrigação, aceitar outro produto ou prestação de serviço equivalente, ou rescindir o contrato, com direito à restituição e a perdas e danos. A escolha do remédio cabe ao consumidor, não ao fornecedor.",
      "explicacaoErradas": "A alternativa B está errada porque o chamado erro de sistema constitui risco inerente à própria atividade do fornecedor (fortuito interno), não configurando excludente de responsabilidade perante o consumidor. A alternativa C está errada porque, no microssistema consumerista, a oferta e a publicidade suficientemente precisas vinculam o fornecedor desde sua veiculação, diferentemente da regra geral civilista que trata o convite a contratar como mera proposta não vinculante. A alternativa D está errada porque o cumprimento forçado da obrigação é expressamente previsto como opção do consumidor no art. 35, I, do CDC.",
      "pegadinha": "O examinador explora a justificativa comum de \"erro de sistema\" como se fosse automaticamente excludente de responsabilidade, e também insinua que apenas o fornecedor poderia escolher a forma de reparação, quando a escolha do remédio cabe ao consumidor.",
      "regraMemoria": "Art. 35, CDC: diante do descumprimento da oferta, a escolha do remédio (cumprimento forçado, produto equivalente ou rescisão com perdas e danos) é do consumidor, não do fornecedor.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito do Consumidor",
      "tema": "Práticas Comerciais - Venda Casada",
      "dificuldade": "media",
      "enunciado": "A operadora de telefonia ConectaMais somente disponibiliza o plano de internet banda larga com desconto promocional aos consumidores que também contratarem, obrigatoriamente, o serviço de TV por assinatura da mesma empresa, não oferecendo qualquer possibilidade de contratação isolada do plano de internet com o desconto anunciado. Sobre o caso, à luz do Código de Defesa do Consumidor, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A conduta da ConectaMais caracteriza prática abusiva de venda casada, vedada pelo art. 39, I, do Código de Defesa do Consumidor, que proíbe condicionar o fornecimento de produto ou serviço ao fornecimento de outro produto ou serviço, salvo justa causa."
        },
        {
          "letra": "B",
          "texto": "A conduta é lícita, pois compõe estratégia legítima de composição de pacotes promocionais, prática amplamente aceita e incentivada pelo Código de Defesa do Consumidor como forma de reduzir custos ao consumidor."
        },
        {
          "letra": "C",
          "texto": "A conduta somente seria abusiva se a operadora detivesse posição dominante de mercado na região, sendo a posição dominante elemento indispensável à caracterização da venda casada pelo CDC."
        },
        {
          "letra": "D",
          "texto": "A conduta é lícita, pois o consumidor mantém plena liberdade de escolha, podendo simplesmente optar por não contratar nenhum dos serviços oferecidos pela operadora ConectaMais."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 39, I, do CDC veda ao fornecedor condicionar o fornecimento de produto ou de serviço ao fornecimento de outro produto ou serviço, bem como, sem justa causa, a limites quantitativos. A imposição de contratação conjunta de TV por assinatura como condição para obter o desconto no plano de internet, sem opção de contratação isolada nas mesmas condições promocionais, caracteriza venda casada, prática abusiva vedada objetivamente pela lei.",
      "explicacaoErradas": "A alternativa B está errada porque a venda casada permanece vedada ainda que apresentada sob a roupagem de \"pacote promocional\", não havendo exceção legal para essa prática quando ausente justa causa. A alternativa C está errada porque a vedação à venda casada no CDC é objetiva, não exigindo a comprovação de posição dominante de mercado do fornecedor, ao contrário do que ocorre em certas hipóteses do direito concorrencial. A alternativa D está errada porque a mera possibilidade teórica de recusa total aos serviços não afasta a abusividade da imposição de contratação conjunta como condição para obtenção da vantagem especificamente ofertada (o desconto no plano de internet).",
      "pegadinha": "O examinador insinua que a venda casada exigiria posição dominante de mercado (confundindo com conceitos de direito concorrencial) ou que a liberdade de recusar toda a contratação afastaria a abusividade, quando a vedação do art. 39, I, do CDC é objetiva e incide independentemente desses fatores.",
      "regraMemoria": "Art. 39, I, CDC: venda casada é vedada objetivamente — não é necessário provar posição dominante de mercado do fornecedor.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito do Consumidor",
      "tema": "Vício do Produto - Decadência",
      "dificuldade": "dificil",
      "enunciado": "Fernanda adquiriu um fogão novo (produto durável) em janeiro de 2024. Em outubro de 2025, passou a perceber mau funcionamento do forno, decorrente de defeito de fabricação que somente se manifestou com o uso ao longo do tempo (vício oculto). Reclamou formalmente à loja em novembro de 2025, que negou o conserto gratuito, argumentando que já haviam se passado mais de 90 dias contados da data da compra, estando extinto o direito de reclamar. Sobre o caso, à luz do Código de Defesa do Consumidor, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A loja está equivocada, pois, tratando-se de vício oculto, o prazo decadencial de 90 dias para produtos duráveis começa a fluir a partir do momento em que ficar evidenciado o defeito, e não da data da aquisição do produto, nos termos do art. 26, § 3º, do CDC."
        },
        {
          "letra": "B",
          "texto": "A loja está correta, pois o prazo decadencial de 90 dias para produtos duráveis conta-se sempre da data da entrega efetiva do produto, independentemente da natureza aparente ou oculta do vício."
        },
        {
          "letra": "C",
          "texto": "Não há prazo decadencial aplicável ao caso, pois vícios ocultos de fabricação estão sujeitos exclusivamente ao prazo prescricional de cinco anos do art. 27 do CDC, próprio da responsabilidade por vício do produto."
        },
        {
          "letra": "D",
          "texto": "A loja está equivocada, mas apenas porque o prazo correto para produtos duráveis é de 30 dias, e não de 90 dias, de modo que a reclamação de Fernanda seria tempestiva por outro motivo."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 26 do CDC fixa prazos decadenciais de 30 dias (produtos e serviços não duráveis) e 90 dias (produtos e serviços duráveis) para reclamar por vícios aparentes ou de fácil constatação, contados, em regra, da entrega efetiva do produto. Entretanto, o § 3º do mesmo artigo estabelece regra especial para os vícios ocultos: o prazo decadencial inicia-se no momento em que ficar evidenciado o defeito, e não na data da aquisição ou entrega do bem.",
      "explicacaoErradas": "A alternativa B aplica a regra geral de contagem (própria de vícios aparentes) a um caso de vício oculto, ignorando a regra especial do § 3º do art. 26. A alternativa C confunde os institutos: o prazo de cinco anos do art. 27 do CDC refere-se à prescrição da pretensão de reparação por fato do produto ou do serviço (acidente de consumo que causa dano para além do próprio bem), e não ao regime de decadência da responsabilidade por vício, disciplinado pelos arts. 18 a 26. A alternativa D está errada porque o prazo de 30 dias aplica-se a produtos não duráveis, e o fogão, como produto durável, sujeita-se ao prazo de 90 dias.",
      "pegadinha": "O examinador explora a confusão entre a regra geral de contagem do prazo decadencial (da entrega do produto, para vícios aparentes) e a regra especial para vícios ocultos (da ciência inequívoca do defeito), além de tentar confundir decadência do vício (arts. 18 a 26) com prescrição do fato do produto (art. 27).",
      "regraMemoria": "Vício oculto: o prazo decadencial só começa a correr quando o defeito se torna evidente, não na data da entrega do produto.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito do Consumidor",
      "tema": "Fato do Serviço - Responsabilidade Objetiva",
      "dificuldade": "media",
      "enunciado": "Um cliente contratou serviço de estacionamento pago oferecido pelo Shopping Boulevard. Durante a permanência do veículo no estabelecimento, houve furto do automóvel, praticado por terceiro que burlou a segurança do local. O shopping alega ausência de culpa, por ter contratado empresa terceirizada especializada em segurança, sustentando que a responsabilidade pelo furto seria exclusivamente do autor do crime, terceiro estranho à relação de consumo. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O Shopping Boulevard responde objetivamente pelo furto, pois o dever de guarda e vigilância é inerente ao serviço de estacionamento pago oferecido, não se configurando a excludente de fato de terceiro quando o evento danoso está diretamente relacionado ao risco do próprio serviço prestado, conforme a Súmula 130 do STJ."
        },
        {
          "letra": "B",
          "texto": "O shopping não responde, pois a contratação de empresa terceirizada de segurança transfere integralmente a responsabilidade civil para a prestadora terceirizada, excluindo qualquer vínculo de responsabilidade do estabelecimento perante o consumidor."
        },
        {
          "letra": "C",
          "texto": "O shopping não responde, pois o furto praticado por terceiro configura fortuito externo, hipótese que sempre exclui a responsabilidade objetiva do fornecedor de serviços, independentemente da natureza do serviço contratado."
        },
        {
          "letra": "D",
          "texto": "O shopping responde, mas apenas subjetivamente, cabendo ao consumidor comprovar a culpa do estabelecimento na escolha ou na fiscalização da empresa terceirizada de segurança."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "A Súmula 130 do STJ estabelece que a empresa responde, perante o cliente, pela reparação de dano ou furto de veículo ocorridos em seu estacionamento. O furto de veículo em estacionamento oferecido como serviço configura fortuito interno, ligado ao próprio risco da atividade explorada pelo fornecedor, não rompendo o nexo causal e atraindo a responsabilidade objetiva prevista no art. 14 do CDC.",
      "explicacaoErradas": "A alternativa B está errada porque a terceirização da segurança não exime o fornecedor perante o consumidor, respondendo este pela falha na prestação do serviço que colocou à disposição, podendo depois voltar-se regressivamente contra a empresa terceirizada. A alternativa C está errada porque o furto ocorrido no próprio estacionamento, serviço contratado justamente para a guarda do veículo, caracteriza fortuito interno (inerente ao risco da atividade), e não fortuito externo. A alternativa D está errada porque a responsabilidade do fornecedor de serviços pelo fato do serviço é objetiva (art. 14, caput, do CDC), dispensando a prova de culpa.",
      "pegadinha": "O examinador tenta fazer o candidato acreditar que a terceirização da segurança ou a atuação de um terceiro (o ladrão) excluiria a responsabilidade do shopping, quando a jurisprudência consolidada (Súmula 130, STJ) atribui o furto em estacionamento ao próprio risco do serviço prestado (fortuito interno).",
      "regraMemoria": "Súmula 130, STJ: o estabelecimento responde por furto ou dano a veículo ocorrido em seu estacionamento.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito da Criança e do Adolescente",
      "tema": "Conselho Tutelar - Medidas de Proteção",
      "dificuldade": "dificil",
      "enunciado": "Um Conselho Tutelar, ao atender denúncia de negligência grave por parte dos pais de uma criança de 6 anos, decidiu, por deliberação própria do colegiado, determinar o afastamento imediato da criança do convívio familiar e seu encaminhamento definitivo para acolhimento institucional, sem qualquer comunicação ao Poder Judiciário ou ao Ministério Público, antes ou depois da medida. Sobre a atuação do Conselho Tutelar, à luz do Estatuto da Criança e do Adolescente, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A atuação do Conselho Tutelar extrapolou suas atribuições legais, pois o afastamento da criança do convívio familiar é medida de competência exclusiva da autoridade judiciária, podendo o Conselho, em caráter excepcional e de urgência, até proceder ao acolhimento imediato, mas sempre com comunicação ao Judiciário."
        },
        {
          "letra": "B",
          "texto": "A atuação do Conselho Tutelar foi regular, pois compete a esse órgão, com autonomia decisória plena e definitiva, determinar o afastamento de crianças e adolescentes do convívio familiar, sem necessidade de qualquer intervenção judicial."
        },
        {
          "letra": "C",
          "texto": "A atuação foi irregular, mas apenas porque o acolhimento institucional é medida que compete privativamente ao Ministério Público requerer, não podendo ser determinada nem pelo Conselho Tutelar, nem pela autoridade judiciária."
        },
        {
          "letra": "D",
          "texto": "A atuação foi regular, pois o Conselho Tutelar, como órgão permanente e autônomo, possui competência jurisdicional para todas as medidas de proteção previstas no art. 101 do ECA, inclusive as que impliquem afastamento do convívio familiar."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 101, § 2º, do ECA (com redação dada pela Lei nº 12.010/2009) estabelece que o afastamento da criança ou adolescente do convívio familiar é de competência exclusiva da autoridade judiciária, ouvido o Ministério Público, admitindo-se a atuação do Conselho Tutelar apenas em caráter excepcional e de urgência, hipótese em que a medida deve ser imediatamente comunicada à autoridade judiciária, sob pena de irregularidade.",
      "explicacaoErradas": "A alternativa B está errada porque desconsidera a reserva de jurisdição introduzida pela Lei nº 12.010/2009 para o afastamento do convívio familiar, matéria que escapa à competência decisória definitiva do Conselho Tutelar, órgão não jurisdicional. A alternativa C está errada porque o requerimento do Ministério Público não é a única via para a determinação da medida, que compete à autoridade judiciária, inclusive de ofício, no exercício da função protetiva. A alternativa D está errada porque, embora o Conselho Tutelar seja órgão permanente e autônomo encarregado de zelar pelo cumprimento dos direitos da criança e do adolescente, ele não possui competência jurisdicional, estando sujeito a limites legais expressos, como o do art. 101, § 2º.",
      "pegadinha": "O examinador explora a autonomia do Conselho Tutelar para sugerir que ele teria competência irrestrita sobre todas as medidas do art. 101 do ECA, inclusive o afastamento do convívio familiar, quando esta última matéria está reservada por lei à autoridade judiciária, admitida atuação tutelar apenas excepcional, urgente e com comunicação obrigatória ao juízo.",
      "regraMemoria": "Afastamento do convívio familiar = competência exclusiva da autoridade judiciária (art. 101, § 2º, ECA); Conselho Tutelar só age em urgência e deve comunicar ao Judiciário.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito da Criança e do Adolescente",
      "tema": "Conselho Tutelar - Limites de Competência",
      "dificuldade": "media",
      "enunciado": "Em determinado município, um adolescente de 15 anos foi apreendido em flagrante pela prática de ato infracional análogo a furto. Diante da gravidade considerada leve do fato e da ausência de antecedentes, os conselheiros tutelares, reunidos em sessão, decidiram, por conta própria, aplicar ao adolescente a medida socioeducativa de liberdade assistida, sem levar o caso ao conhecimento do Ministério Público ou da autoridade judiciária. Sobre a atuação dos conselheiros tutelares, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A atuação dos conselheiros tutelares é ilegal, pois a aplicação de medida socioeducativa, inclusive a liberdade assistida, constitui atribuição exclusiva da autoridade judiciária, sendo vedado ao Conselho Tutelar, órgão não jurisdicional, aplicar qualquer das medidas previstas no art. 112 do ECA."
        },
        {
          "letra": "B",
          "texto": "A atuação dos conselheiros tutelares é legal, pois o Conselho Tutelar pode aplicar diretamente qualquer medida socioeducativa de natureza branda, reservando-se à autoridade judiciária apenas a aplicação da medida de internação."
        },
        {
          "letra": "C",
          "texto": "A atuação é ilegal apenas porque faltou representação do Ministério Público, sendo válida a aplicação de medida socioeducativa por conselheiros tutelares sempre que precedida de manifestação ministerial favorável."
        },
        {
          "letra": "D",
          "texto": "A atuação é legal, pois a prática de ato infracional por adolescente de 15 anos, por não gerar responsabilidade penal, permite que qualquer órgão da rede de proteção, incluindo o Conselho Tutelar, aplique medidas de caráter pedagógico equivalentes às socioeducativas."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "As medidas socioeducativas previstas no art. 112 do ECA, por pressuporem a apuração de ato infracional mediante procedimento com garantias próprias (representação do Ministério Público, defesa técnica, contraditório), somente podem ser aplicadas pela autoridade judiciária. As atribuições do Conselho Tutelar, nos termos do art. 136 do ECA, restringem-se à aplicação das medidas de proteção do art. 101, incisos I a VII, e das medidas dirigidas aos pais ou responsável previstas no art. 129, incisos I a VII, não alcançando, em nenhuma hipótese, a aplicação de medida socioeducativa ao adolescente autor de ato infracional.",
      "explicacaoErradas": "A alternativa B está errada porque não há, no ECA, distribuição de competência entre Conselho Tutelar e Judiciário conforme a gravidade da medida socioeducativa: toda e qualquer medida do art. 112 depende de decisão da autoridade judiciária. A alternativa C está errada porque a irregularidade não decorre apenas da ausência de manifestação do Ministério Público, mas da própria incompetência do Conselho Tutelar para aplicar medida socioeducativa, ainda que o Ministério Público viesse a concordar. A alternativa D está errada porque a inimputabilidade penal do adolescente não transfere ao Conselho Tutelar competência para aplicar medidas equivalentes às socioeducativas, que seguem procedimento próprio do ECA perante o Judiciário.",
      "pegadinha": "O examinador explora a confusão entre as atribuições de proteção do Conselho Tutelar (arts. 101 e 129 do ECA, dirigidas a crianças/adolescentes em situação de risco e aos pais) e a competência exclusivamente jurisdicional para aplicação de medida socioeducativa ao autor de ato infracional (art. 112 do ECA).",
      "regraMemoria": "Conselho Tutelar aplica medidas de proteção (art. 101) e medidas aos pais (art. 129); somente o juiz aplica medida socioeducativa (art. 112) ao autor de ato infracional.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito da Criança e do Adolescente",
      "tema": "Ato Infracional - Medida de Internação",
      "dificuldade": "media",
      "enunciado": "Um adolescente de 16 anos foi internado em unidade socioeducativa pela prática de ato infracional análogo a roubo circunstanciado. Passados 2 anos e 8 meses de internação, sem que tenha havido qualquer reavaliação judicial da medida desde o seu início, o adolescente completou 19 anos de idade. A defesa técnica pleiteia a imediata análise da situação pelo juízo da execução. Sobre o caso, à luz do Estatuto da Criança e do Adolescente, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A ausência de reavaliação da medida é irregular, pois a manutenção da internação deve ser reavaliada mediante decisão fundamentada, no máximo a cada seis meses, sendo o prazo máximo de internação de três anos e obrigatória a liberação compulsória aos vinte e um anos de idade, nos termos do art. 121, §§ 2º, 3º e 5º, do ECA."
        },
        {
          "letra": "B",
          "texto": "A internação deve cessar imediatamente, pois nenhum adolescente pode permanecer internado após completar 18 anos, ainda que a medida tenha sido aplicada regularmente antes da maioridade."
        },
        {
          "letra": "C",
          "texto": "Não há qualquer irregularidade, pois a reavaliação periódica da medida de internação é mera faculdade do juízo da execução, não constituindo direito subjetivo do adolescente nem dever do magistrado."
        },
        {
          "letra": "D",
          "texto": "A medida de internação deve ser imediatamente substituída por semiliberdade, pois esta é a única consequência jurídica expressamente prevista no ECA para a ausência de reavaliação no prazo semestral."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 121 do ECA estabelece que a internação constitui medida privativa de liberdade sujeita aos princípios de brevidade, excepcionalidade e respeito à condição peculiar de pessoa em desenvolvimento, não podendo exceder o prazo máximo de três anos (§ 3º); a manutenção da medida deve ser reavaliada mediante decisão fundamentada, no máximo a cada seis meses (§ 2º); e, em qualquer hipótese, a liberação é compulsória aos vinte e um anos de idade (§ 5º).",
      "explicacaoErradas": "A alternativa B está errada porque a internação pode ser mantida até os 21 anos de idade (liberação compulsória), não cessando automaticamente aos 18 anos, idade que corresponde à maioridade civil e penal, mas não à execução da medida socioeducativa já em curso. A alternativa C está errada porque a reavaliação semestral constitui dever do juízo da execução e direito subjetivo do adolescente, cuja inobservância pode configurar constrangimento ilegal sanável por habeas corpus. A alternativa D está errada porque a lei não prevê essa consequência automática específica para a falta de reavaliação tempestiva.",
      "pegadinha": "O examinador explora a confusão entre maioridade civil/penal (18 anos) e o regime próprio de execução da medida socioeducativa de internação, que pode perdurar até os 21 anos, desde que respeitado o prazo máximo de três anos e a reavaliação semestral.",
      "regraMemoria": "Internação: prazo máximo de 3 anos, reavaliação obrigatória a cada 6 meses, liberação compulsória aos 21 anos de idade.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito da Criança e do Adolescente",
      "tema": "Ato Infracional - Prescrição",
      "dificuldade": "dificil",
      "enunciado": "Jonas praticou ato infracional análogo ao crime de furto qualificado em março de 2019, quando contava 15 anos de idade. O procedimento de apuração ficou paralisado por falha cartorária, e apenas em 2024 foi proferida sentença aplicando-lhe medida socioeducativa de internação. A defesa requer o reconhecimento da prescrição da pretensão socioeducativa, mas o Ministério Público sustenta que a prescrição é absolutamente incompatível com a natureza pedagógica e protetiva das medidas socioeducativas, não se aplicando aos procedimentos regidos pelo ECA. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Aplica-se, por analogia, a prescrição penal às pretensões socioeducativas, nos termos da Súmula 338 do STJ, devendo os prazos prescricionais ser reduzidos pela metade, conforme o art. 115 do Código Penal, por ser Jonas menor de 21 anos à época do fato."
        },
        {
          "letra": "B",
          "texto": "A tese do Ministério Público está correta, pois é entendimento pacífico do STJ que a prescrição é absolutamente incompatível com a natureza das medidas socioeducativas, sendo estas imprescritíveis."
        },
        {
          "letra": "C",
          "texto": "Aplica-se a prescrição penal integralmente, sem qualquer redução de prazo, pois a redução pela metade prevista no art. 115 do Código Penal destina-se exclusivamente aos agentes maiores de 70 anos na data da sentença."
        },
        {
          "letra": "D",
          "texto": "A prescrição em matéria de ato infracional somente pode ser reconhecida de ofício pelo juiz da execução, sendo vedado à defesa técnica do adolescente suscitá-la em qualquer fase do procedimento."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "A Súmula 338 do STJ estabelece que a prescrição penal é aplicável nas medidas socioeducativas, utilizando-se, por analogia, as regras do Código Penal relativas à prescrição. Como Jonas tinha 15 anos de idade (menor de 21 anos) à época do fato, os prazos prescricionais devem ser reduzidos pela metade, por força do art. 115 do Código Penal.",
      "explicacaoErradas": "A alternativa B contraria diretamente a Súmula 338 do STJ, que reconhece expressamente a aplicabilidade da prescrição penal às medidas socioeducativas. A alternativa C está errada porque o art. 115 do Código Penal prevê a redução do prazo prescricional pela metade em duas hipóteses: quando o agente era, ao tempo do crime (ou ato infracional), menor de 21 anos, ou quando, na data da sentença, era maior de 70 anos; a hipótese do adolescente menor de 21 anos à época do fato também autoriza a redução. A alternativa D está errada porque a prescrição é matéria de ordem pública, podendo ser alegada pela defesa técnica a qualquer tempo e grau de jurisdição, e não apenas reconhecida de ofício pelo juízo.",
      "pegadinha": "O examinador explora a ideia equivocada, mas recorrente, de que as medidas socioeducativas, por seu caráter pedagógico, seriam imprescritíveis, e também tenta restringir a redução do art. 115 do CP apenas aos idosos, quando a regra abrange igualmente os menores de 21 anos à época do fato.",
      "regraMemoria": "Súmula 338, STJ + art. 115, CP: a prescrição penal aplica-se ao ato infracional, reduzida pela metade para quem era menor de 21 anos à época do fato.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito da Criança e do Adolescente",
      "tema": "Direitos Fundamentais - Prioridade Absoluta",
      "dificuldade": "media",
      "enunciado": "Durante atendimento em hospital público, uma criança de 3 anos deu entrada simultaneamente com um paciente adulto, ambos em situação de urgência clínica semelhante segundo o protocolo de triagem do estabelecimento. A administração hospitalar determinou que o atendimento seguiria estritamente a ordem de chegada, sem qualquer preferência baseada na idade dos pacientes. Sobre o caso, à luz da Constituição Federal e do Estatuto da Criança e do Adolescente, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A conduta hospitalar viola o princípio da prioridade absoluta assegurado à criança e ao adolescente, que garante precedência de atendimento nos serviços públicos ou de relevância pública, nos termos do art. 4º, parágrafo único, do ECA, e do art. 227 da Constituição Federal."
        },
        {
          "letra": "B",
          "texto": "A conduta hospitalar é regular, pois o princípio da prioridade absoluta aplica-se exclusivamente à formulação de políticas públicas legislativas e orçamentárias, não irradiando efeitos sobre o atendimento individual e concreto em serviços de saúde."
        },
        {
          "letra": "C",
          "texto": "A conduta hospitalar é regular, pois a prioridade etária no atendimento de saúde é assegurada apenas aos idosos por legislação específica, inexistindo regra equivalente aplicável às crianças."
        },
        {
          "letra": "D",
          "texto": "A conduta hospitalar viola o princípio da prioridade absoluta, mas essa prioridade somente se aplica quando a criança for vítima de violência doméstica, não alcançando situações de atendimento de saúde em geral."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 227 da Constituição Federal e o art. 4º, parágrafo único, do ECA asseguram à criança e ao adolescente a prioridade absoluta, que compreende, entre outras garantias, a primazia de receber proteção e socorro em quaisquer circunstâncias e a precedência de atendimento nos serviços públicos ou de relevância pública, impondo preferência concreta no atendimento em relação a outros grupos, salvo situações excepcionais devidamente justificadas.",
      "explicacaoErradas": "A alternativa B está errada porque a prioridade absoluta tem eficácia concreta e imediata, aplicando-se também ao atendimento individual em serviços públicos ou de relevância pública, e não apenas à formulação abstrata de políticas públicas. A alternativa C está errada porque existe regra específica e expressa para crianças e adolescentes (art. 4º, parágrafo único, ECA), que coexiste, sem excluir-se mutuamente, com a prioridade assegurada aos idosos por legislação própria. A alternativa D está errada porque a prioridade absoluta não se restringe a hipóteses de violência doméstica, aplicando-se a toda e qualquer situação de atendimento, inclusive de saúde.",
      "pegadinha": "O examinador tenta reduzir o alcance do princípio da prioridade absoluta a hipóteses específicas (apenas políticas públicas, ou apenas casos de violência), quando se trata de garantia de eficácia concreta e abrangente, aplicável também ao atendimento individual em serviços de saúde.",
      "regraMemoria": "Prioridade absoluta (art. 4º, ECA): primazia de socorro + precedência de atendimento + preferência na formulação de políticas públicas — eficácia concreta e imediata, não apenas programática.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Civil",
      "tema": "Ônus da Prova e Perícia",
      "dificuldade": "media",
      "enunciado": "Marina ajuíza ação de indenização por danos morais e materiais contra o Hospital Vida Plena, alegando ter sofrido infecção hospitalar em decorrência de falha no procedimento cirúrgico realizado pela equipe do nosocômio. Em contestação, o hospital nega a falha e afirma que cabe à autora provar o nexo de causalidade. Ao sanear o processo, o juiz verifica que apenas o hospital detém os prontuários, os protocolos de assepsia e demais documentos técnicos capazes de demonstrar a dinâmica dos fatos, e profere decisão fundamentada atribuindo ao réu o ônus de provar a ausência de falha no procedimento, concedendo-lhe oportunidade para produzir tal prova. Sobre a decisão do juiz, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A decisão é nula, pois o CPC adota exclusivamente a distribuição estática do ônus da prova, sendo vedada qualquer redistribuição pelo julgador."
        },
        {
          "letra": "B",
          "texto": "A decisão é válida, pois o CPC autoriza o juiz a atribuir o ônus da prova de modo diverso do critério legal quando houver maior facilidade de obtenção da prova por uma das partes, desde que por decisão fundamentada e com oportunidade de desincumbência do encargo atribuído."
        },
        {
          "letra": "C",
          "texto": "A decisão é válida, mas somente poderia ter sido proferida na sentença, nunca na fase de saneamento do processo."
        },
        {
          "letra": "D",
          "texto": "A decisão é nula, pois a redistribuição do ônus da prova é instituto exclusivo das relações de consumo, não se aplicando à responsabilidade civil hospitalar fora do âmbito do Código de Defesa do Consumidor."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 373, §1º, do CPC autoriza o juiz a atribuir o ônus da prova de modo diverso do critério legal quando houver peculiaridades da causa relacionadas à impossibilidade ou à excessiva dificuldade de cumprir o encargo, ou à maior facilidade de obtenção da prova do fato contrário, desde que por decisão fundamentada que conceda à parte oportunidade de se desincumbir do ônus atribuído.",
      "explicacaoErradas": "A alternativa A está errada porque o CPC admite expressamente a dinamização do ônus da prova, tornando o sistema híbrido (estático como regra, dinâmico como exceção fundamentada). A alternativa C está errada porque a jurisprudência recomenda que a redistribuição ocorra preferencialmente no saneamento, antes da instrução, exatamente para não surpreender a parte e permitir-lhe produzir a prova que lhe foi atribuída; se feita apenas na sentença, gera cerceamento de defesa. A alternativa D está errada porque a dinamização do art. 373, §1º, é regra geral do CPC, aplicável a qualquer relação processual, e não instituto exclusivo do CDC.",
      "pegadinha": "O examinador tenta levar à confusão entre a inversão do ônus da prova típica das relações de consumo (art. 6º, VIII, CDC) e a dinamização genérica prevista no CPC, como se uma excluísse a outra, ou a crer que o CPC só admite a distribuição estática.",
      "regraMemoria": "Dificuldade de provar de um lado, facilidade do outro: o juiz pode redistribuir o ônus da prova, mas sempre com decisão fundamentada e dando chance real de produzir a prova.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Civil",
      "tema": "Contestação e Preliminares",
      "dificuldade": "media",
      "enunciado": "A empresa Construtec Engenharia Ltda. ajuíza ação de cobrança contra a sociedade Metal Forte Indústria S.A., referente a contrato de fornecimento de insumos que continha cláusula compromissória elegendo a arbitragem como meio de solução de controvérsias. Citada, a ré apresenta contestação arguindo, em preliminar, a existência de convenção de arbitragem, requerendo a extinção do processo sem resolução do mérito. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A alegação deve ser rejeitada, pois a existência de cláusula compromissória não pode ser conhecida de ofício nem alegada em preliminar de contestação, somente por meio de exceção autônoma."
        },
        {
          "letra": "B",
          "texto": "A convenção de arbitragem é matéria que o réu deve alegar como preliminar de contestação e, acolhida, o processo será extinto sem resolução de mérito."
        },
        {
          "letra": "C",
          "texto": "A convenção de arbitragem é matéria de ordem pública que o juiz pode conhecer de ofício a qualquer tempo e grau de jurisdição, independentemente de alegação da parte."
        },
        {
          "letra": "D",
          "texto": "A convenção de arbitragem somente pode ser alegada depois de esgotada a fase de instrução processual, sob pena de preclusão."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 337, X, do CPC inclui a convenção de arbitragem entre as preliminares que o réu deve alegar em contestação; acolhida a preliminar, o processo é extinto sem resolução do mérito, nos termos do art. 485, VII, do CPC.",
      "explicacaoErradas": "A alternativa A está errada porque a convenção de arbitragem é exatamente uma das preliminares do art. 337 do CPC, cabível em contestação. A alternativa C está errada porque, diferentemente das demais preliminares do rol do art. 337, a convenção de arbitragem é a única que não pode ser conhecida de ofício pelo juiz, dependendo de alegação da parte, sob pena de se presumir aceita a jurisdição estatal. A alternativa D está errada porque a matéria deve ser suscitada na primeira oportunidade que a parte tem para falar nos autos, isto é, na contestação, sob pena de preclusão.",
      "pegadinha": "O examinador explora a confusão entre as preliminares que podem ser conhecidas de ofício pelo juiz e a convenção de arbitragem, que é a exceção expressa a essa regra, dependendo sempre de alegação da parte interessada.",
      "regraMemoria": "Convenção de arbitragem: só vale se a parte alegar — nunca é conhecida de ofício pelo juiz.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Civil",
      "tema": "Sentença e Coisa Julgada",
      "dificuldade": "dificil",
      "enunciado": "Ricardo ajuíza ação de cobrança de dívida de empréstimo contra Felipe, no valor de R$ 80.000,00. Em sua defesa, Felipe sustenta que o contrato de mútuo seria nulo por simulação, tese amplamente debatida no processo, com efetivo contraditório, e expressamente rejeitada na fundamentação da sentença, que condenou Felipe ao pagamento. O juízo da causa tinha competência em razão da matéria e da pessoa para apreciar a questão da simulação como ação própria, não houve revelia, e o julgamento da nulidade era indispensável para o deslinde do pedido principal de cobrança. Transitada em julgado a sentença, Felipe pretende ajuizar nova ação declaratória de nulidade do contrato por simulação. Sobre a hipótese, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Felipe pode ajuizar a nova ação, pois a coisa julgada somente alcança o dispositivo da sentença, jamais as questões decididas na fundamentação, ainda que prejudiciais ao mérito."
        },
        {
          "letra": "B",
          "texto": "Felipe não pode rediscutir a simulação, pois a resolução da questão prejudicial decidida expressa e incidentalmente no processo fica acobertada pela coisa julgada, uma vez presentes os requisitos legais de contraditório prévio e efetivo, competência do juízo e indispensabilidade para o julgamento do mérito."
        },
        {
          "letra": "C",
          "texto": "Felipe pode ajuizar a nova ação, pois questões prejudiciais somente fazem coisa julgada se tiverem sido objeto de reconvenção."
        },
        {
          "letra": "D",
          "texto": "Felipe não pode rediscutir a simulação, mas apenas porque já decorreram mais de dois anos do trânsito em julgado, prazo decadencial da ação rescisória."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 503, §1º, do CPC estabelece que a resolução de questão prejudicial, decidida expressa e incidentemente no processo, é alcançada pela coisa julgada quando dessa resolução depender o julgamento do mérito, tiver havido contraditório prévio e efetivo (não se aplicando em caso de revelia) e o juízo tiver competência em razão da matéria e da pessoa para resolvê-la como questão principal — todos os requisitos presentes no caso.",
      "explicacaoErradas": "A alternativa A está errada porque o CPC/2015 superou a regra do CPC/1973, segundo a qual só o dispositivo fazia coisa julgada, passando a admitir que a questão prejudicial decidida incidentalmente também seja alcançada pela coisa julgada, sem necessidade de ação declaratória incidental. A alternativa C está errada porque a lei não exige reconvenção para esse efeito, bastando os requisitos do art. 503, §1º. A alternativa D está errada porque o óbice correto ao ajuizamento da nova ação é a própria coisa julgada sobre a questão prejudicial, e não o prazo da ação rescisória, que trata de hipótese diversa.",
      "pegadinha": "O examinador explora a regra antiga do CPC/1973 (somente o dispositivo faz coisa julgada) para testar se o candidato conhece a inovação do art. 503, §1º, do CPC/2015, que estende a coisa julgada à questão prejudicial incidental, dispensada a ação declaratória incidental.",
      "regraMemoria": "Questão prejudicial decidida expressamente, com contraditório efetivo e juízo competente, também faz coisa julgada — sem precisar de ação declaratória incidental.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Civil",
      "tema": "Apelação e Embargos de Declaração",
      "dificuldade": "dificil",
      "enunciado": "Em ação de cobrança julgada improcedente, o autor opõe embargos de declaração apontando contradição na fundamentação da sentença, cujo eventual acolhimento tem potencial de inverter o resultado do julgamento em seu favor. O juiz, sem conceder qualquer oportunidade de manifestação prévia à parte ré, acolhe de imediato os embargos e reforma a sentença, passando a julgar procedente o pedido. Sobre a regularidade do procedimento adotado, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O procedimento é irregular, pois o CPC determina que, sempre que o eventual acolhimento dos embargos de declaração possa implicar modificação da decisão embargada, o embargado deve ser previamente intimado para se manifestar, no prazo de 5 dias."
        },
        {
          "letra": "B",
          "texto": "O procedimento é regular, pois os embargos de declaração, por serem recurso de fundamentação vinculada e de julgamento célere, dispensam em qualquer hipótese a manifestação prévia da parte contrária."
        },
        {
          "letra": "C",
          "texto": "O procedimento é irregular, mas apenas porque o prazo para a manifestação prévia da parte contrária, nesses casos, é de 15 dias, e não de 5 dias."
        },
        {
          "letra": "D",
          "texto": "O procedimento é regular, pois a exigência de intimação prévia da parte contrária somente se aplica aos embargos de declaração opostos contra acórdãos, e não contra sentenças."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 1.023, §2º, do CPC determina que o juiz intimará o embargado para, querendo, manifestar-se no prazo de 5 dias sobre os embargos opostos, sempre que o eventual acolhimento possa implicar modificação da decisão embargada, em respeito ao contraditório.",
      "explicacaoErradas": "A alternativa B está errada porque a exigência de manifestação prévia existe exatamente para preservar o contraditório quando há risco de efeito infringente. A alternativa C está errada porque o prazo legal é de 5 dias, não de 15. A alternativa D está errada porque a regra do art. 1.023, §2º, aplica-se a qualquer decisão judicial embargada, seja sentença, decisão interlocutória ou acórdão, sem a distinção sugerida.",
      "pegadinha": "O examinador explora a ideia equivocada de que os embargos de declaração, por serem recurso de cognição restrita, sempre dispensam contraditório prévio — mas, havendo risco de efeito infringente, a intimação prévia do embargado é obrigatória.",
      "regraMemoria": "Embargos com chance de efeito infringente exigem contraditório prévio: 5 dias para o embargado se manifestar antes do julgamento.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Civil",
      "tema": "Recurso Especial e Extraordinário",
      "dificuldade": "dificil",
      "enunciado": "O acórdão proferido pelo Tribunal de Justiça, ao julgar a apelação, deixou de se manifestar expressamente sobre a incidência de dispositivo do Código Civil invocado pela parte autora em suas razões recursais. Sem opor embargos de declaração para suprir a omissão, a parte interpõe diretamente recurso especial ao Superior Tribunal de Justiça, sustentando violação ao referido dispositivo. Sobre a admissibilidade do recurso especial nessas circunstâncias, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O recurso especial deve ser admitido, pois o prequestionamento ficto previsto no CPC dispensa a oposição de embargos de declaração no tribunal de origem, bastando que a matéria tenha sido suscitada nas razões do recurso anteriormente julgado."
        },
        {
          "letra": "B",
          "texto": "O recurso especial é inadmissível por ausência de prequestionamento, pois a matéria não foi apreciada pelo tribunal de origem e a parte sequer opôs embargos de declaração para viabilizar o suprimento da omissão."
        },
        {
          "letra": "C",
          "texto": "O recurso especial deve ser admitido, pois a ausência de prequestionamento é vício sanável no próprio STJ, bastando que a parte demonstre, em memorial, a relevância da matéria federal."
        },
        {
          "letra": "D",
          "texto": "O recurso especial é inadmissível, mas apenas porque o prazo para a interposição de embargos de declaração ainda está em curso, e não pela ausência de manifestação do tribunal a quo sobre a matéria."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "A Súmula 211 do STJ dispõe ser inadmissível o recurso especial quanto à questão que, a despeito da oposição de embargos declaratórios, não foi apreciada pelo tribunal a quo. Com mais razão, se a parte sequer opôs embargos de declaração para viabilizar o suprimento da omissão, não há prequestionamento a autorizar o conhecimento do recurso especial.",
      "explicacaoErradas": "A alternativa A está errada porque o prequestionamento ficto do art. 1.025 do CPC pressupõe que embargos de declaração tenham sido efetivamente opostos (ainda que rejeitados ou inadmitidos) e que o STJ reconheça existir o vício apontado; ele dispensa o sucesso dos embargos, não a sua oposição. A alternativa C está errada porque não existe mecanismo de sanação do prequestionamento por simples memorial. A alternativa D está errada porque o fundamento da inadmissibilidade é a falta de manifestação do tribunal de origem sobre a matéria, somada à ausência de embargos de declaração, e não uma questão de prazo em curso.",
      "pegadinha": "O examinador explora a confusão entre o prequestionamento ficto do art. 1.025 do CPC (que dispensa o sucesso dos embargos de declaração) e uma suposta dispensa total da oposição de embargos, que na verdade continua sendo necessária.",
      "regraMemoria": "Prequestionamento ficto dispensa que os embargos de declaração sejam acolhidos, mas não dispensa que eles tenham sido opostos.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Civil",
      "tema": "Recursos",
      "dificuldade": "media",
      "enunciado": "Em ação de alimentos ajuizada por Clara em face de seu pai, Eduardo, o juiz julga procedente o pedido, condenando-o ao pagamento de pensão mensal. Inconformado, Eduardo interpõe apelação, pretendendo que o recurso seja recebido com efeito suspensivo, de modo que fique dispensado de efetuar o pagamento até o julgamento final do recurso pelo Tribunal de Justiça. Sobre a pretensão de Eduardo, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A pretensão deve ser acolhida, pois a apelação, como regra geral do sistema processual civil, é sempre recebida no efeito devolutivo e no efeito suspensivo."
        },
        {
          "letra": "B",
          "texto": "A pretensão deve ser rejeitada, pois a sentença que condena ao pagamento de prestação alimentícia começa a produzir efeitos imediatamente após a sua publicação, de modo que a apelação, nesse capítulo, é recebida apenas no efeito devolutivo."
        },
        {
          "letra": "C",
          "texto": "A pretensão deve ser acolhida, pois somente as sentenças proferidas em ações de interdição produzem efeitos imediatos, sendo a apelação contra sentença de alimentos sempre recebida com efeito suspensivo."
        },
        {
          "letra": "D",
          "texto": "A pretensão deve ser rejeitada, mas apenas porque Eduardo não comprovou probabilidade de provimento do recurso, requisito indispensável à concessão do efeito suspensivo nesse caso."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 1.012, §1º, do CPC estabelece que começam a produzir efeitos imediatamente após a publicação as sentenças que, entre outras hipóteses, condenam ao pagamento de alimentos, de modo que a apelação interposta contra essa sentença é recebida apenas no efeito devolutivo quanto a esse capítulo, independentemente de requerimento da parte.",
      "explicacaoErradas": "A alternativa A está errada porque a lei prevê exceções legais automáticas ao efeito suspensivo da apelação. A alternativa C está errada porque o rol do art. 1.012, §1º, do CPC é mais amplo que a interdição, abrangendo também, entre outras, a condenação a alimentos. A alternativa D está errada porque essas hipóteses do §1º operam automaticamente, por força de lei, sem exigir requerimento ou demonstração de probabilidade de provimento do recurso, diferentemente das hipóteses do §3º do mesmo artigo.",
      "pegadinha": "O examinador tenta confundir as hipóteses automáticas de ausência de efeito suspensivo do art. 1.012, §1º (que não dependem de pedido) com as hipóteses do §3º, que dependem de requerimento e demonstração de probabilidade de provimento do recurso ou risco de dano.",
      "regraMemoria": "Alimentos, interdição e outras hipóteses do art. 1.012, §1º: a apelação só devolve, não suspende — automaticamente, sem precisar pedir.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Civil",
      "tema": "Penhora e Impenhorabilidade",
      "dificuldade": "media",
      "enunciado": "Em execução de título extrajudicial decorrente de contrato de mútuo bancário não pago por Henrique, o exequente requer a penhora de 30% dos vencimentos mensais que Henrique recebe como servidor público, sob o argumento de que o valor remanescente seria suficiente para sua subsistência. Henrique se opõe, sustentando a impenhorabilidade da verba salarial. Sobre a controvérsia, à luz do CPC, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A penhora deve ser deferida, pois o CPC não prevê qualquer impenhorabilidade sobre vencimentos e salários, sendo tal proteção aplicável apenas aos proventos de aposentadoria."
        },
        {
          "letra": "B",
          "texto": "A penhora deve ser indeferida, pois, em regra, são impenhoráveis os vencimentos e salários do devedor, ressalvada, entre outras exceções legais expressas, a penhora para pagamento de prestação alimentícia, hipótese não configurada no caso, que trata de dívida comum decorrente de mútuo bancário."
        },
        {
          "letra": "C",
          "texto": "A penhora deve ser deferida, pois a impenhorabilidade de salários somente se aplica a valores inferiores a determinado teto de salários mínimos, sendo lícita a constrição sobre qualquer excedente, independentemente da natureza da dívida."
        },
        {
          "letra": "D",
          "texto": "A penhora deve ser indeferida, mas apenas porque o devedor é servidor público, sendo a remuneração de servidores públicos sempre impenhorável, diferentemente da remuneração de empregados da iniciativa privada."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 833, IV, do CPC estabelece a impenhorabilidade de vencimentos, subsídios, salários e remunerações, ressalvando o §2º do mesmo artigo apenas a penhora para pagamento de prestação alimentícia e as importâncias excedentes a 50 salários mínimos mensais, exceções não configuradas no caso, que envolve dívida comum de mútuo bancário.",
      "explicacaoErradas": "A alternativa A está errada porque há expressa previsão legal de impenhorabilidade de salários. A alternativa C está errada porque a exceção quanto ao excedente de salários mínimos refere-se especificamente ao limite de 50 salários mínimos mensais, e não a 'qualquer excedente' do salário, qualquer que fosse o valor. A alternativa D está errada porque a impenhorabilidade da remuneração não depende de o devedor ser servidor público ou empregado privado, sendo regra geral aplicável à remuneração de qualquer natureza.",
      "pegadinha": "O examinador explora a ideia de que as exceções legais (prestação alimentícia ou valores que excedem 50 salários mínimos mensais) liberariam a penhora para qualquer dívida comum, quando na verdade a regra geral de impenhorabilidade do salário permanece para dívidas comuns de valor normal.",
      "regraMemoria": "Salário só pode ser penhorado para dívida comum se exceder 50 salários mínimos mensais; para dívida de alimentos, pode sempre.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Civil",
      "tema": "Cumprimento de Sentença e Execução",
      "dificuldade": "media",
      "enunciado": "Após o trânsito em julgado de sentença condenatória ao pagamento de quantia certa, o exequente requer o cumprimento de sentença. Intimado para pagamento voluntário no prazo de 15 dias, o executado deixa transcorrer o prazo sem efetuar qualquer pagamento nem garantir o juízo por penhora ou depósito. Passados 20 dias do decurso do prazo de pagamento voluntário, o executado apresenta impugnação ao cumprimento de sentença, sustentando excesso de execução. O exequente alega que a impugnação é intempestiva, pois o prazo de 15 dias para impugnar já teria se esgotado junto com o prazo para pagamento voluntário. Sobre a controvérsia, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A tese do exequente está correta, pois o prazo para impugnação corre simultaneamente ao prazo de pagamento voluntário, ambos de 15 dias contados da intimação."
        },
        {
          "letra": "B",
          "texto": "A tese do exequente está incorreta, pois o prazo de 15 dias para impugnar o cumprimento de sentença somente se inicia depois de transcorrido o prazo de 15 dias para pagamento voluntário, independentemente de penhora ou nova intimação, de modo que a impugnação apresentada está dentro do prazo."
        },
        {
          "letra": "C",
          "texto": "A tese do exequente está correta, pois, não havendo penhora de bens, o executado perde o direito de impugnar o cumprimento de sentença, ainda que dentro do prazo."
        },
        {
          "letra": "D",
          "texto": "A tese do exequente está incorreta, mas apenas porque o prazo para impugnação é de 30 dias, a contar da intimação inicial para pagamento."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 525, caput, do CPC estabelece que, transcorrido o prazo do art. 523 sem pagamento voluntário, inicia-se automaticamente o prazo de 15 dias para o executado apresentar impugnação ao cumprimento de sentença nos próprios autos, independentemente de penhora ou nova intimação.",
      "explicacaoErradas": "A alternativa A está errada porque os prazos não correm simultaneamente: o prazo de impugnação só se inicia após esgotado o prazo de pagamento voluntário. A alternativa C está errada porque a impugnação independe de prévia penhora de bens. A alternativa D está errada porque o prazo correto é de 15 dias, e não de 30.",
      "pegadinha": "O examinador explora a ideia equivocada de que os prazos de pagamento voluntário e de impugnação correm em paralelo, ou de que a impugnação dependeria de prévia penhora, quando na verdade os prazos são sucessivos e a impugnação independe de garantia do juízo.",
      "regraMemoria": "Quinze dias para pagar; depois, automaticamente, mais quinze dias para impugnar — prazos sucessivos, nunca simultâneos.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Civil",
      "tema": "Penhora e Impenhorabilidade",
      "dificuldade": "dificil",
      "enunciado": "Vítor celebrou contrato de locação residencial na qualidade de locatário, tendo sua irmã Paula figurado como fiadora, com garantia incidente sobre o único imóvel residencial de propriedade de Paula, onde ela reside com sua família. Diante da inadimplência de Vítor, o locador ajuíza execução de título extrajudicial contra Paula, na qualidade de fiadora, requerendo a penhora do referido imóvel. Paula opõe embargos à execução, alegando que o imóvel é bem de família, legalmente impenhorável, nos termos da Lei nº 8.009/1990. Sobre a controvérsia, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A penhora é ilegítima, pois o imóvel residencial único constitui bem de família e é absolutamente impenhorável, não havendo exceção legal aplicável à hipótese de fiança em contrato de locação."
        },
        {
          "letra": "B",
          "texto": "A penhora é legítima, pois a Lei nº 8.009/1990 excepciona expressamente a impenhorabilidade do bem de família nas obrigações decorrentes de fiança concedida em contrato de locação, entendimento cuja constitucionalidade foi reconhecida pelo Supremo Tribunal Federal em repercussão geral."
        },
        {
          "letra": "C",
          "texto": "A penhora é ilegítima, pois a exceção da fiança locatícia somente se aplica ao imóvel do próprio locatário inadimplente, e não ao imóvel do fiador."
        },
        {
          "letra": "D",
          "texto": "A penhora é legítima, mas somente porque o contrato de fiança foi celebrado após a entrada em vigor da Lei nº 8.009/1990, sendo inaplicável a fiadores que assumiram a obrigação anteriormente."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 3º, VII, da Lei nº 8.009/1990 excepciona expressamente a impenhorabilidade do bem de família nas obrigações decorrentes de fiança concedida em contrato de locação, e o Supremo Tribunal Federal, no julgamento do RE 612.360, com repercussão geral reconhecida, declarou a constitucionalidade dessa exceção, por compatibilidade com o direito à moradia.",
      "explicacaoErradas": "A alternativa A está errada porque a impenhorabilidade do bem de família não é absoluta, havendo exceções legais expressas, entre elas a da fiança locatícia. A alternativa C está errada porque a exceção legal recai justamente sobre o imóvel do fiador, não do locatário. A alternativa D está errada porque a jurisprudência consolidada aplica a exceção mesmo a contratos de fiança celebrados antes da alteração legislativa que incluiu o inciso VII no art. 3º da lei.",
      "pegadinha": "O examinador explora a crença de que a impenhorabilidade do bem de família é absoluta, ignorando as exceções legais expressas do art. 3º da Lei nº 8.009/1990, em especial a hipótese de fiança em contrato de locação.",
      "regraMemoria": "Fiador de contrato de locação não tem bem de família protegido: penhora é legítima e constitucional, segundo o STF.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Civil",
      "tema": "Procedimentos Especiais",
      "dificuldade": "media",
      "enunciado": "Inconformado com o valor exigido pelo locador Josué a título de reajuste de aluguel, o locatário Bruno ajuíza ação de consignação em pagamento, depositando judicialmente a quantia que reputa devida. Citado, Josué contesta a ação alegando que o valor depositado é insuficiente, pois o reajuste contratual determinaria quantia superior, e indica expressamente o montante que entende correto. Sobre o processamento da ação de consignação em pagamento nessa hipótese, à luz do CPC, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Alegada a insuficiência do depósito, com indicação do valor pelo réu, é facultado ao autor complementá-lo no prazo de 10 dias, hipótese em que se considera extinta a obrigação quanto à parcela depositada e complementada, prosseguindo o processo quanto à parcela controvertida remanescente, se houver."
        },
        {
          "letra": "B",
          "texto": "Alegada a insuficiência do depósito, o processo deve ser imediatamente extinto sem resolução do mérito, cabendo ao autor ajuizar nova ação de consignação depositando o valor total pretendido pelo réu."
        },
        {
          "letra": "C",
          "texto": "A alegação de insuficiência do depósito não pode ser formulada em contestação, mas apenas por meio de reconvenção, sob pena de preclusão."
        },
        {
          "letra": "D",
          "texto": "Alegada a insuficiência do depósito, o réu perde automaticamente o direito de levantar a quantia depositada, somente podendo fazê-lo após o trânsito em julgado de sentença que reconheça a suficiência do valor."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 544, IV, e parágrafo único, do CPC exige que o réu, ao alegar insuficiência do depósito, indique o montante que entende devido; o art. 545, caput, faculta ao autor complementar o depósito no prazo de 10 dias, e o §1º permite ao réu levantar desde logo a quantia depositada, com liberação parcial do autor, prosseguindo o processo quanto à parcela controvertida remanescente.",
      "explicacaoErradas": "A alternativa B está errada porque a lei não determina extinção imediata do processo, prevendo expressamente a possibilidade de complementação do depósito. A alternativa C está errada porque a insuficiência do depósito é matéria de contestação, e não de reconvenção. A alternativa D está errada porque o CPC autoriza expressamente o réu a levantar desde logo a quantia depositada, com liberação parcial do autor, independentemente do trânsito em julgado.",
      "pegadinha": "O examinador explora o desconhecimento da possibilidade de complementação do depósito em 10 dias e do levantamento imediato, pelo réu, da quantia incontroversa, como se a insuficiência do depósito inviabilizasse integralmente a ação.",
      "regraMemoria": "Depósito insuficiente: réu indica o valor correto, autor complementa em 10 dias, e o réu já pode levantar o que for incontroverso.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Civil",
      "tema": "Procedimentos Especiais",
      "dificuldade": "media",
      "enunciado": "A imobiliária Casa Segura, na qualidade de locadora, ajuíza ação de despejo por falta de pagamento cumulada com cobrança de aluguéis em face do locatário Marcelo, inadimplente há seis meses. Na petição inicial, fundamentada exclusivamente na hipótese de falta de pagamento de aluguel, a locadora requer a concessão de liminar para desocupação do imóvel em quinze dias, independentemente da oitiva da parte contrária, oferecendo caução correspondente a três meses de aluguel. Sobre o pedido liminar formulado, à luz da Lei do Inquilinato, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O pedido liminar não pode ser deferido, pois a Lei do Inquilinato não autoriza, em qualquer hipótese, a concessão de liminar de desocupação sem a prévia oitiva do locatário, por violação ao contraditório."
        },
        {
          "letra": "B",
          "texto": "O pedido liminar pode ser deferido, pois a Lei do Inquilinato autoriza a concessão de liminar para desocupação em quinze dias, independentemente da audiência da parte contrária, em hipóteses taxativamente previstas, entre elas a de ação fundada exclusivamente em falta de pagamento de aluguel, desde que prestada a caução equivalente a três meses de aluguel."
        },
        {
          "letra": "C",
          "texto": "O pedido liminar pode ser deferido, mas somente se o locatário for previamente intimado para purgar a mora, sendo vedada a concessão de liminar inaudita altera parte em ação de despejo."
        },
        {
          "letra": "D",
          "texto": "O pedido liminar não pode ser deferido, pois a caução exigida pela lei para a concessão da liminar corresponde a doze meses de aluguel, valor muito superior ao oferecido pela locadora."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 59, §1º, da Lei nº 8.245/1991 autoriza a concessão de liminar para desocupação em quinze dias, independentemente da audiência da parte contrária, em hipóteses taxativamente previstas, entre elas a de ação fundada exclusivamente em falta de pagamento de aluguel e acessórios, desde que prestada caução equivalente a três meses de aluguel.",
      "explicacaoErradas": "A alternativa A está errada porque há previsão legal expressa autorizando a liminar sem prévia oitiva do réu nessas hipóteses taxativas. A alternativa C está errada porque a lei não condiciona a liminar à prévia intimação do locatário para purgar a mora. A alternativa D está errada porque o valor da caução exigido pela lei é de três meses de aluguel, e não de doze.",
      "pegadinha": "O examinador explora a ideia de que toda liminar em ação de despejo exigiria contraditório prévio, ignorando o rol taxativo de hipóteses do art. 59, §1º, da Lei do Inquilinato, que admite decisão sem a oitiva do réu mediante caução.",
      "regraMemoria": "Despejo por falta de pagamento: liminar de desocupação em 15 dias, sem ouvir o réu, mediante caução de 3 meses de aluguel.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Civil",
      "tema": "Competência e Partes",
      "dificuldade": "dificil",
      "enunciado": "A empresa Comércio Global Ltda., sediada em São Paulo/SP, celebra contrato de compra e venda de mercadorias com a empresa Distribuidora Nordeste Ltda., sediada em Recife/PE, sendo o local de entrega e cumprimento da obrigação também em Recife/PE. O contrato contém cláusula elegendo o foro da comarca de Manaus/AM para dirimir eventuais litígios, local que não guarda qualquer vinculação com o domicílio das partes contratantes ou com o local da obrigação. Ajuizada ação de cobrança pela Comércio Global perante o foro de Manaus/AM, antes mesmo da citação da ré, o juiz verifica a ausência de qualquer pertinência do foro eleito com as partes ou com o negócio. Sobre a atuação do juiz, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O juiz não pode reconhecer de ofício a abusividade da cláusula de eleição de foro antes da citação, devendo aguardar que a ré a alegue em preliminar de contestação, sob pena de preclusão."
        },
        {
          "letra": "B",
          "texto": "O juiz pode, antes da citação, reputar de ofício ineficaz a cláusula de eleição de foro abusiva, determinando a remessa dos autos ao juízo de domicílio do réu, pois a lei processual civil restringe a eleição de foro aos locais que guardem pertinência com o domicílio ou a residência de uma das partes ou com o local da obrigação."
        },
        {
          "letra": "C",
          "texto": "A cláusula de eleição de foro é sempre válida entre pessoas jurídicas empresárias, não se aplicando a elas qualquer limite de pertinência territorial, por se tratar de relação paritária entre empresários."
        },
        {
          "letra": "D",
          "texto": "O juiz deve extinguir o processo sem resolução de mérito, pois a eleição de foro sem pertinência com as partes ou com a obrigação é causa de incompetência absoluta, insuscetível de correção pela simples remessa dos autos."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 63 do CPC, em sua redação atual, restringe a eleição de foro aos locais que guardem pertinência com o domicílio ou a residência de uma das partes ou com o local da obrigação, e autoriza o juiz, antes da citação, a reputar de ofício ineficaz a cláusula abusiva, determinando a remessa dos autos ao juízo do foro de domicílio do réu.",
      "explicacaoErradas": "A alternativa A está errada porque, antes da citação, o próprio juiz pode agir de ofício, sem depender de alegação da ré. A alternativa C está errada porque a exigência de pertinência territorial aplica-se a qualquer relação contratual, inclusive entre empresários, não havendo exceção por paridade entre as partes. A alternativa D está errada porque se trata de competência relativa (territorial), resolvida por simples remessa dos autos ao foro adequado, e não de incompetência absoluta a exigir extinção do processo.",
      "pegadinha": "O examinador explora a confusão entre tratar a eleição de foro sem pertinência como simples competência relativa comum (que exigiria alegação da parte) e como incompetência absoluta (que exigiria extinção do processo), quando a solução correta é intermediária: controle de ofício antes da citação, resolvido por remessa dos autos.",
      "regraMemoria": "Foro de eleição sem pertinência com domicílio ou obrigação: o juiz pode reconhecer de ofício, antes da citação, e remeter os autos ao foro do domicílio do réu.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Civil",
      "tema": "Tutela de Evidência",
      "dificuldade": "media",
      "enunciado": "Fabiana ajuíza ação em face de Rogério, sustentando que este recebeu em depósito, por força de contrato de depósito regularmente formalizado por instrumento escrito, determinada máquina industrial de sua propriedade, e se recusa a restituí-la. Fabiana requer a concessão de tutela de evidência, em caráter liminar, para que seja determinada a entrega imediata do bem, sob cominação de multa diária, dispensada a demonstração de perigo de dano ou de risco ao resultado útil do processo. Sobre o pedido, à luz do CPC, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O pedido não pode ser apreciado liminarmente, pois toda tutela de evidência pressupõe o prévio contraditório, sendo vedada sua concessão sem a oitiva da parte contrária."
        },
        {
          "letra": "B",
          "texto": "O pedido pode ser apreciado liminarmente, pois o CPC autoriza a concessão de tutela de evidência, independentemente da demonstração de perigo de dano, no caso de pedido reipersecutório fundado em prova documental adequada do contrato de depósito, hipótese em que o juiz pode decidir de plano, determinando a entrega do bem sob cominação de multa."
        },
        {
          "letra": "C",
          "texto": "O pedido não pode ser apreciado liminarmente, pois a tutela de evidência somente pode ser concedida após a sentença, como antecipação dos efeitos da coisa julgada."
        },
        {
          "letra": "D",
          "texto": "O pedido pode ser apreciado liminarmente, mas apenas se Fabiana também comprovar a urgência decorrente do risco de perecimento do bem, requisito indispensável a qualquer modalidade de tutela de evidência."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 311, III, do CPC autoriza a concessão de tutela de evidência, independentemente da demonstração de perigo de dano, quando se tratar de pedido reipersecutório fundado em prova documental adequada do contrato de depósito, decretando-se a ordem de entrega do objeto custodiado sob cominação de multa; o parágrafo único do mesmo artigo autoriza o juiz a decidir liminarmente nessa hipótese.",
      "explicacaoErradas": "A alternativa A está errada porque, nas hipóteses dos incisos II e III do art. 311, a lei expressamente autoriza decisão liminar, sem contraditório prévio. A alternativa C está errada porque a tutela de evidência pode ser concedida em caráter antecedente ou incidental, inclusive liminarmente, antes da sentença. A alternativa D está errada porque a tutela de evidência é concedida justamente por dispensar a demonstração de urgência, diferenciando-se da tutela de urgência.",
      "pegadinha": "O examinador explora a confusão entre tutela de evidência (que dispensa demonstração de perigo de dano) e tutela de urgência (que exige periculum in mora), além de induzir à ideia equivocada de que toda tutela de evidência exige contraditório prévio.",
      "regraMemoria": "Tutela de evidência dispensa perigo de dano; no caso de depósito com prova documental, o juiz pode decidir liminarmente.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Empresarial",
      "tema": "Sociedade Limitada",
      "dificuldade": "media",
      "enunciado": "Gustavo, titular de empresa individual, pretende constituir uma sociedade limitada da qual será o único sócio, concentrando em suas mãos a totalidade das quotas representativas do capital social, sem a participação de qualquer outra pessoa física ou jurídica desde o ato constitutivo. Consultado, seu contador afirma que tal estrutura societária não é viável no ordenamento jurídico brasileiro, pois a sociedade limitada exigiria pluralidade de sócios desde sua constituição. Sobre a orientação do contador, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A orientação está correta, pois a sociedade limitada é modalidade essencialmente plural, sendo a affectio societatis entre dois ou mais sócios requisito de existência desse tipo societário."
        },
        {
          "letra": "B",
          "texto": "A orientação está incorreta, pois o Código Civil passou a admitir expressamente a constituição de sociedade limitada por um único sócio, aplicando-se ao ato constitutivo do sócio único, no que couber, as disposições sobre o contrato social."
        },
        {
          "letra": "C",
          "texto": "A orientação está correta, pois a concentração de quotas nas mãos de um único sócio somente é admitida supervenientemente, por unipessoalidade incidental, sendo vedada a constituição originária unipessoal."
        },
        {
          "letra": "D",
          "texto": "A orientação está incorreta, mas apenas porque a sociedade unipessoal cabível no caso seria exclusivamente a empresa individual de responsabilidade limitada, e não a sociedade limitada unipessoal."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 1.052, §§1º e 2º, do Código Civil, com a redação dada pela Lei nº 13.874/2019, passou a admitir expressamente que a sociedade limitada seja constituída por uma ou mais pessoas, aplicando-se ao documento de constituição do sócio único, no que couber, as disposições sobre o contrato social.",
      "explicacaoErradas": "A alternativa A está errada porque não há mais exigência de pluralidade originária de sócios para a sociedade limitada. A alternativa C está errada porque a lei admite a constituição originária unipessoal, e não apenas a concentração superveniente de quotas. A alternativa D está errada porque a figura da empresa individual de responsabilidade limitada foi revogada pela mesma Lei nº 13.874/2019, que introduziu a sociedade limitada unipessoal como alternativa.",
      "pegadinha": "O examinador explora a crença de que a sociedade limitada sempre exigiu pluralidade de sócios, ou a confusão entre a sociedade limitada unipessoal (figura atual) e a empresa individual de responsabilidade limitada (figura revogada).",
      "regraMemoria": "Sociedade limitada hoje pode ter um único sócio desde a constituição; a EIRELI não existe mais.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Empresarial",
      "tema": "Responsabilidade dos Sócios",
      "dificuldade": "media",
      "enunciado": "Em execução movida contra a sociedade empresária Têxtil Boa Vista Ltda., o exequente, diante da ausência de bens penhoráveis em nome da sociedade, requer a desconsideração da personalidade jurídica para alcançar o patrimônio pessoal do sócio majoritário, Antônio, fundamentando o pedido exclusivamente no fato de a sociedade estar inadimplente e não possuir bens suficientes para satisfazer o crédito. Não há qualquer indício de desvio de finalidade ou de confusão patrimonial entre os bens da sociedade e os de Antônio. Sobre o pedido, à luz do Código Civil, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O pedido deve ser acolhido, pois a mera insolvência ou inadimplemento da sociedade já autoriza, por si só, a desconsideração da personalidade jurídica para atingir o patrimônio dos sócios."
        },
        {
          "letra": "B",
          "texto": "O pedido deve ser rejeitado, pois a desconsideração da personalidade jurídica pressupõe a caracterização de abuso da personalidade jurídica, evidenciado por desvio de finalidade ou confusão patrimonial, não bastando a mera inadimplência ou insuficiência patrimonial da sociedade."
        },
        {
          "letra": "C",
          "texto": "O pedido deve ser acolhido, pois, embora a inadimplência isolada não configure abuso, a simples existência de grupo econômico entre a sociedade e seus sócios já autoriza a desconsideração, independentemente de outros requisitos."
        },
        {
          "letra": "D",
          "texto": "O pedido deve ser rejeitado, mas apenas porque a desconsideração da personalidade jurídica somente pode ser requerida pelo Ministério Público, jamais pelo próprio credor exequente."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 50, caput, do Código Civil condiciona a desconsideração da personalidade jurídica à caracterização de abuso, evidenciado por desvio de finalidade ou confusão patrimonial, conforme definidos nos §§1º e 2º do mesmo artigo, não bastando a mera inadimplência ou insuficiência de bens da sociedade.",
      "explicacaoErradas": "A alternativa A está errada porque contraria a exigência legal expressa de caracterização do abuso. A alternativa C está errada porque o §4º do art. 50 expressamente dispõe que a mera existência de grupo econômico, sem os requisitos do caput, não autoriza a desconsideração. A alternativa D está errada porque a desconsideração pode ser requerida pela parte interessada (inclusive o credor exequente) ou pelo Ministério Público quando lhe couber intervir no processo.",
      "pegadinha": "O examinador explora a ideia de que a simples inadimplência da sociedade ou a existência de grupo econômico, isoladamente, já autorizariam a desconsideração da personalidade jurídica, sem exigir desvio de finalidade ou confusão patrimonial.",
      "regraMemoria": "Desconsideração exige desvio de finalidade ou confusão patrimonial; simples dívida não paga ou grupo econômico, isoladamente, não bastam.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Empresarial",
      "tema": "Tipos Societários",
      "dificuldade": "dificil",
      "enunciado": "Pedro e Igor exploram, em conjunto, atividade de comércio de autopeças, sem ter promovido o registro de seus atos constitutivos em qualquer órgão de registro, de modo que a sociedade entre eles formada não possui personalidade jurídica, caracterizando-se como sociedade em comum. Pedro foi quem celebrou, em nome do empreendimento, o contrato de fornecimento de peças que deu origem à dívida ora cobrada pelo credor Vinícius. Executada a sociedade, verifica-se a inexistência de bens sociais suficientes para quitar o débito, razão pela qual Vinícius pretende alcançar o patrimônio pessoal de Pedro e de Igor. Sobre a responsabilidade de ambos, à luz do Código Civil, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Pedro e Igor respondem apenas subsidiariamente, cada qual na proporção de sua participação na sociedade, podendo ambos exigir que primeiro sejam executados os bens sociais, sem qualquer exceção."
        },
        {
          "letra": "B",
          "texto": "Pedro e Igor respondem solidária e ilimitadamente pelas obrigações sociais, mas Pedro, por ter contratado em nome da sociedade, não pode invocar o benefício de ordem de prévia excussão dos bens sociais, ao contrário de Igor, que, em princípio, pode exigi-lo."
        },
        {
          "letra": "C",
          "texto": "Apenas Pedro responde pela dívida, pois somente o sócio que efetivamente contratou em nome da sociedade assume responsabilidade por obrigações sociais, ficando Igor inteiramente isento."
        },
        {
          "letra": "D",
          "texto": "Pedro e Igor não respondem com seu patrimônio pessoal em nenhuma hipótese, pois a ausência de registro da sociedade afasta qualquer responsabilidade pessoal dos sócios, sendo a dívida de responsabilidade exclusiva do patrimônio comum."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 990 do Código Civil estabelece que, na sociedade em comum, todos os sócios respondem solidária e ilimitadamente pelas obrigações sociais, excluído do benefício de ordem previsto no art. 1.024 aquele que contratou pela sociedade — no caso, Pedro.",
      "explicacaoErradas": "A alternativa A está errada porque confunde o regime da sociedade em comum (solidário e ilimitado) com o da sociedade simples (subsidiário e proporcional às quotas, nos termos do art. 1.023). A alternativa C está errada porque ambos os sócios respondem solidariamente pelas obrigações sociais, não ficando Igor isento. A alternativa D está errada porque, na sociedade em comum, a ausência de registro não afasta a responsabilidade pessoal e ilimitada dos sócios, mas sim a reforça.",
      "pegadinha": "O examinador explora a confusão entre o regime de responsabilidade da sociedade em comum (solidária e ilimitada, com exclusão do benefício de ordem apenas para quem contratou) e o da sociedade simples (subsidiária, proporcional às quotas, com benefício de ordem geral).",
      "regraMemoria": "Sociedade em comum: todos os sócios respondem solidária e ilimitadamente; quem contratou pela sociedade não tem benefício de ordem.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Empresarial",
      "tema": "Requisitos e Efeitos da Falência",
      "dificuldade": "media",
      "enunciado": "A sociedade Alfa Comércio Ltda. é credora da sociedade Beta Indústria Ltda. em razão de título executivo extrajudicial protestado, no valor correspondente a 25 (vinte e cinco) salários mínimos, decorrente de duplicata não paga no vencimento, sem que Beta tenha apresentado qualquer razão de direito para a impontualidade. Com fundamento exclusivamente nesse título, Alfa ajuíza pedido de falência de Beta perante o juízo competente. Sobre a viabilidade do pedido, à luz da Lei nº 11.101/2005, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O pedido é inviável, pois a decretação da falência com fundamento na impontualidade injustificada de obrigação líquida materializada em título protestado exige que a soma dos títulos apresentados ultrapasse o equivalente a 40 salários mínimos na data do pedido, valor não atingido no caso."
        },
        {
          "letra": "B",
          "texto": "O pedido é viável, pois a lei não estabelece valor mínimo para a decretação de falência fundada em impontualidade injustificada, bastando a existência de um único título protestado e não pago."
        },
        {
          "letra": "C",
          "texto": "O pedido é viável, pois o valor de 25 salários mínimos já é suficiente, sendo o piso legal de apenas 10 salários mínimos para a hipótese de impontualidade injustificada."
        },
        {
          "letra": "D",
          "texto": "O pedido é inviável, mas apenas porque a falência não pode ser requerida com fundamento em duplicata, título de crédito excluído do rol de títulos aptos a instruir pedido de falência."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 94, I, da Lei nº 11.101/2005 exige que a soma dos títulos executivos protestados, relativos a obrigação líquida não paga sem relevante razão de direito, ultrapasse o equivalente a 40 salários mínimos na data do pedido de falência, patamar não atingido pelo crédito de 25 salários mínimos do caso.",
      "explicacaoErradas": "A alternativa B está errada porque há piso legal expresso de 40 salários mínimos. A alternativa C está errada porque o piso legal é de 40 salários mínimos, e não de 10. A alternativa D está errada porque a duplicata protestada é título executivo plenamente hábil a instruir pedido de falência, não havendo essa exclusão legal.",
      "pegadinha": "O examinador explora a ideia de que qualquer título protestado, independentemente do valor, bastaria para o pedido de falência fundado no inciso I do art. 94, ignorando o piso legal de 40 salários mínimos.",
      "regraMemoria": "Falência por impontualidade injustificada: título(s) protestado(s) somando mais de 40 salários mínimos.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Empresarial",
      "tema": "Classes de Credores",
      "dificuldade": "dificil",
      "enunciado": "Durante a assembleia geral de credores convocada para deliberar sobre o plano de recuperação judicial da sociedade Metalúrgica Progresso S.A., os credores são organizados segundo suas respectivas classes legais. Felipe, engenheiro que prestou serviços à recuperanda como empregado e possui crédito trabalhista de pequeno valor decorrente de verbas rescisórias, questiona em qual classe seu crédito deve ser enquadrado para fins de votação. Sobre a classificação dos credores na assembleia geral, à luz da Lei nº 11.101/2005, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O crédito de Felipe deve ser classificado na classe dos titulares de créditos derivados da legislação do trabalho, independentemente de seu valor, classe distinta daquela reservada aos titulares de créditos com garantia real."
        },
        {
          "letra": "B",
          "texto": "O crédito de Felipe deve necessariamente ser classificado na classe dos titulares de créditos quirografários, pois a classe trabalhista somente abrange empregados com vínculo de longa duração."
        },
        {
          "letra": "C",
          "texto": "O crédito de Felipe deve ser classificado na classe dos titulares de créditos enquadrados como microempresa ou empresa de pequeno porte, em razão do pequeno valor envolvido."
        },
        {
          "letra": "D",
          "texto": "O crédito de Felipe deve ser classificado na classe dos titulares de créditos com garantia real, pois todo crédito decorrente de prestação de serviços é equiparado a crédito com garantia."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 41, I, da Lei nº 11.101/2005 estabelece a Classe I como a dos titulares de créditos derivados da legislação do trabalho ou decorrentes de acidentes de trabalho, distinta da Classe II, reservada aos titulares de créditos com garantia real, sendo que o §1º do mesmo artigo prevê que esses credores votam com a totalidade de seu crédito, independentemente do valor.",
      "explicacaoErradas": "A alternativa B está errada porque a lei não condiciona o enquadramento na classe trabalhista à duração do vínculo empregatício. A alternativa C está errada porque a Classe IV refere-se à natureza do credor como microempresa ou empresa de pequeno porte, e não ao valor do crédito trabalhista envolvido. A alternativa D está errada porque crédito trabalhista não se equipara a crédito com garantia real.",
      "pegadinha": "O examinador explora a confusão entre 'pequeno valor' do crédito trabalhista e a classe IV, destinada a credores que sejam microempresas ou empresas de pequeno porte, categorias distintas e não relacionadas entre si.",
      "regraMemoria": "Classe I é sempre a dos créditos trabalhistas e de acidente de trabalho, qualquer que seja o valor do crédito.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Empresarial",
      "tema": "Empresário e Sociedade Empresária",
      "dificuldade": "media",
      "enunciado": "Dr. Leonardo, médico, funda uma clínica de grande porte, estruturada com dezenas de funcionários, equipamentos de alta tecnologia, diversos médicos contratados e filiais em diferentes cidades, atuando de forma organizada para a prestação de serviços de saúde em larga escala. Um colega sustenta que, por se tratar do exercício de profissão intelectual de natureza científica, a atividade de Leonardo jamais poderia ser considerada atividade empresária, independentemente da estrutura organizacional adotada. Sobre essa afirmação, à luz do Código Civil, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A afirmação está correta, pois o exercício de profissão intelectual de natureza científica é sempre excluído do conceito de empresário, por expressa vedação legal, qualquer que seja a estrutura adotada."
        },
        {
          "letra": "B",
          "texto": "A afirmação está incorreta, pois, embora o exercício de profissão intelectual de natureza científica, literária ou artística não constitua, em regra, atividade empresária, o próprio Código Civil ressalva que, se o exercício da profissão constituir elemento de empresa, a atividade passa a ser considerada empresária."
        },
        {
          "letra": "C",
          "texto": "A afirmação está correta, pois apenas a forma societária adotada, e nunca a estrutura organizacional da atividade, pode determinar a caracterização como empresária."
        },
        {
          "letra": "D",
          "texto": "A afirmação está incorreta, mas apenas porque toda atividade de prestação de serviços de saúde é, por determinação legal expressa, considerada atividade empresária, independentemente de sua organização."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 966, parágrafo único, do Código Civil dispõe que o exercício de profissão intelectual, de natureza científica, literária ou artística, não é considerado atividade empresária, salvo se o exercício da profissão constituir elemento de empresa, situação em que a organização dos fatores de produção em larga escala, como ocorre na clínica de Leonardo, caracteriza a atividade como empresária.",
      "explicacaoErradas": "A alternativa A está errada porque a exclusão legal do conceito de empresário comporta a ressalva expressa do parágrafo único do art. 966. A alternativa C está errada porque é exatamente a estrutura organizacional da atividade (elemento de empresa) que determina a caracterização como empresária, independentemente da forma societária. A alternativa D está errada porque não há regra que torne toda atividade de saúde automaticamente empresária, dependendo da organização dos fatores de produção no caso concreto.",
      "pegadinha": "O examinador explora a crença de que o profissional intelectual nunca pode ser considerado empresário, ignorando a exceção legal de quando o exercício da profissão se transforma em elemento de empresa, por meio de estrutura organizacional de grande porte.",
      "regraMemoria": "Profissão intelectual não é, em regra, atividade empresária — salvo quando vira elemento de empresa, com estrutura organizada de grande porte.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Empresarial",
      "tema": "Registro do Empresário",
      "dificuldade": "dificil",
      "enunciado": "Marcelo exerce, de forma habitual, organizada e profissional, atividade de fabricação e venda de móveis, caracterizando-se como empresário nos termos do art. 966 do Código Civil, mas nunca promoveu a inscrição de seus atos constitutivos no Registro Público de Empresas Mercantis. Diante de sua situação de insolvência, Marcelo pretende requerer recuperação judicial para reorganizar suas dívidas. Sobre a situação de Marcelo, à luz do Código Civil e da Lei nº 11.101/2005, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Marcelo não pode ser considerado empresário, pois a inscrição no Registro Público de Empresas Mercantis é requisito constitutivo da própria condição de empresário, de modo que, sem registro, não há atividade empresarial a ser reconhecida."
        },
        {
          "letra": "B",
          "texto": "Marcelo é empresário de fato, pois o exercício da atividade empresarial independe do registro para sua caracterização, mas a ausência de registro regular compromete a comprovação do exercício regular da atividade por mais de dois anos, exigida pela Lei nº 11.101/2005 para a concessão de recuperação judicial, entre outros documentos previstos em lei."
        },
        {
          "letra": "C",
          "texto": "Marcelo é empresário de fato e pode requerer recuperação judicial normalmente, pois a Lei nº 11.101/2005 não exige qualquer comprovação de regularidade registral para a concessão da recuperação judicial."
        },
        {
          "letra": "D",
          "texto": "Marcelo não pode ser considerado empresário nem sujeito à falência, permanecendo sua situação de insolvência regida exclusivamente pelas regras de insolvência civil do Código de Processo Civil."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O Enunciado 198 da III Jornada de Direito Civil esclarece que o registro não é requisito para a caracterização do empresário, que pode ser empresário de fato (irregular); contudo, o art. 48 da Lei nº 11.101/2005 exige que o devedor, ao tempo do pedido, exerça regularmente suas atividades há mais de 2 anos, comprovação essa que a lei associa, entre outros documentos exigidos para a petição inicial, à regularidade do registro empresarial.",
      "explicacaoErradas": "A alternativa A está errada porque confunde a caracterização substancial do empresário (independente de registro) com a regularidade formal de sua atividade. A alternativa C está errada porque a comprovação do exercício regular da atividade é requisito expresso do art. 48 da lei, associada a documentos que atestam a regularidade registral. A alternativa D está errada porque o empresário irregular continua sujeito à falência, ainda que a ausência de registro possa dificultar o acesso à recuperação judicial.",
      "pegadinha": "O examinador explora a confusão entre a caracterização de fato do empresário (que não depende de registro) e os requisitos formais para acesso à recuperação judicial (que pressupõem comprovação de regularidade e exercício contínuo da atividade).",
      "regraMemoria": "Registro não é requisito para ser empresário, mas a comprovação de regularidade pode ser exigida para pedir recuperação judicial.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Empresarial",
      "tema": "Títulos de Crédito e Contratos Empresariais",
      "dificuldade": "media",
      "enunciado": "Em uma nota promissória emitida por Carlos em favor de Diego, Juliana apôs sua assinatura no verso do título, na qualidade de avalista, sem indicar expressamente a quem estaria avalizando. Diego, posteriormente, pretende cobrar de Juliana apenas metade do valor do título, sob o argumento de que o aval teria sido prestado parcialmente, cobrindo somente 50% da obrigação. Sobre a validade do aval prestado por Juliana, à luz do Código Civil, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O aval de Juliana é válido e eficaz apenas na parte referente a 50% do valor do título, pois o aval parcial é expressamente admitido pelo Código Civil quando resultar da intenção das partes."
        },
        {
          "letra": "B",
          "texto": "O aval de Juliana é nulo em sua totalidade, pois a ausência de indicação expressa do avalizado torna o aval, por si só, inválido, independentemente de qualquer presunção legal."
        },
        {
          "letra": "C",
          "texto": "O aval de Juliana é válido pela totalidade do valor do título, pois o Código Civil veda o aval parcial, e, na falta de indicação de a quem avaliza, o avalista se equipara ao devedor final, que, no caso, é Carlos, emitente da nota promissória."
        },
        {
          "letra": "D",
          "texto": "O aval de Juliana é válido apenas se houver posterior ratificação expressa de Carlos, emitente do título, autorizando a vinculação de Juliana como sua avalista."
        }
      ],
      "respostaCorreta": 2,
      "explicacaoCorreta": "O art. 897 do Código Civil veda expressamente o aval parcial, e o art. 898, §1º, estabelece que o avalista se equipara àquele cujo nome indicar e, na falta de indicação, ao emitente ou devedor final, que, na nota promissória, é o próprio emitente, Carlos.",
      "explicacaoErradas": "A alternativa A está errada porque o aval parcial é vedado pelo Código Civil, não sendo admitido ainda que as partes assim desejassem. A alternativa B está errada porque a ausência de indicação do avalizado não invalida o aval, havendo regra legal supletiva de equiparação ao devedor final. A alternativa D está errada porque não há exigência de ratificação expressa do avalizado para a validade do aval.",
      "pegadinha": "O examinador explora a crença de que o aval parcial seria admissível por vontade das partes, ou de que a falta de indicação expressa do avalizado invalidaria o aval, quando na verdade existe regra supletiva de equiparação ao devedor final.",
      "regraMemoria": "Aval parcial é proibido; sem indicação do avalizado, presume-se avalizado o devedor final (emitente ou aceitante).",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Empresarial",
      "tema": "Títulos de Crédito e Contratos Empresariais",
      "dificuldade": "dificil",
      "enunciado": "A empresa Fábrica União Ltda. emite duplicata mercantil em face da compradora Comércio Rápido Ltda., em razão de venda de mercadorias, e remete o título para aceite. A compradora, no entanto, não devolve o título nem se manifesta a respeito, tampouco recusa formalmente o aceite dentro do prazo e pelas razões legalmente previstas. Diante disso, a vendedora pretende executar judicialmente a duplicata não aceita. Sobre a viabilidade da execução, à luz da Lei nº 5.474/1968, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A execução é inviável, pois a duplicata sem aceite jamais constitui título executivo extrajudicial, independentemente de qualquer outro documento que a acompanhe."
        },
        {
          "letra": "B",
          "texto": "A execução é viável, mas apenas se a duplicata tiver sido protestada, sendo irrelevante a comprovação da entrega e do recebimento da mercadoria pela compradora."
        },
        {
          "letra": "C",
          "texto": "A execução é viável, desde que, cumulativamente, a duplicata tenha sido protestada, esteja acompanhada de documento hábil comprobatório da entrega e recebimento da mercadoria, e a compradora não tenha comprovadamente recusado o aceite dentro do prazo e pelos motivos previstos em lei."
        },
        {
          "letra": "D",
          "texto": "A execução é viável independentemente de protesto ou de qualquer prova de entrega da mercadoria, bastando a simples emissão regular da duplicata pela vendedora."
        }
      ],
      "respostaCorreta": 2,
      "explicacaoCorreta": "O art. 15, II, da Lei nº 5.474/1968 exige, cumulativamente, para a execução da duplicata não aceita e não devolvida, que ela tenha sido protestada, esteja acompanhada de documento hábil comprobatório da entrega e recebimento da mercadoria, e que o sacado não tenha, comprovadamente, recusado o aceite dentro do prazo, condições e motivos legalmente previstos.",
      "explicacaoErradas": "A alternativa A está errada porque a duplicata sem aceite pode constituir título executivo quando preenchidos os requisitos legais cumulativos. A alternativa B está errada porque a lei exige também a comprovação da entrega e do recebimento da mercadoria, não bastando apenas o protesto. A alternativa D está errada porque a lei exige protesto e os demais requisitos cumulativos, não bastando a simples emissão do título.",
      "pegadinha": "O examinador explora a ideia de que bastaria o protesto, isoladamente, para tornar executável a duplicata sem aceite, ou de que ela nunca seria executável, ignorando os requisitos cumulativos previstos em lei.",
      "regraMemoria": "Duplicata sem aceite só vira título executivo com protesto, comprovante de entrega da mercadoria e ausência de recusa justificada do aceite.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Empresarial",
      "tema": "Nome Empresarial e Estabelecimento",
      "dificuldade": "media",
      "enunciado": "Marcos adquire o estabelecimento empresarial pertencente à sociedade Padaria Estrela Ltda., por meio de contrato de trespasse que expressamente autoriza o uso do nome anteriormente empregado pela alienante. Pretendendo capitalizar o reconhecimento de mercado já consolidado, Marcos pretende simplesmente assumir a titularidade do nome empresarial da alienante, continuando a utilizá-lo exatamente como constava no registro desta, sem qualquer alteração. Sobre a pretensão de Marcos, à luz do Código Civil, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A pretensão é integralmente viável, pois o nome empresarial, assim como a marca, pode ser livremente alienado em conjunto com o estabelecimento, mediante simples previsão contratual nesse sentido."
        },
        {
          "letra": "B",
          "texto": "A pretensão não é viável nos termos pretendidos, pois o nome empresarial não pode ser objeto de alienação; Marcos, autorizado pelo contrato, poderá usar o nome do alienante, mas precedido do seu próprio nome, com a qualificação de sucessor."
        },
        {
          "letra": "C",
          "texto": "A pretensão é inviável em qualquer hipótese, pois a lei veda completamente que o adquirente de um estabelecimento utilize, de qualquer forma, o nome anteriormente usado pelo alienante, ainda que haja previsão contratual nesse sentido."
        },
        {
          "letra": "D",
          "texto": "A pretensão é viável, mas apenas mediante prévia autorização da Junta Comercial, que deve analisar o mérito econômico da continuidade do uso do nome empresarial pelo adquirente."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 1.164 do Código Civil estabelece que o nome empresarial não pode ser objeto de alienação, mas seu parágrafo único permite que o adquirente do estabelecimento, por ato entre vivos, use o nome do alienante, se o contrato o permitir, desde que precedido de seu próprio nome e com a qualificação de sucessor.",
      "explicacaoErradas": "A alternativa A está errada porque o nome empresarial, diferentemente da marca, não pode ser diretamente alienado como tal. A alternativa C está errada porque a lei admite expressamente o uso do nome do alienante pelo adquirente, desde que observada a forma legal (nome próprio precedendo o do alienante, com qualificação de sucessor). A alternativa D está errada porque não há exigência de autorização prévia da Junta Comercial quanto ao mérito econômico dessa continuidade.",
      "pegadinha": "O examinador explora a confusão entre a transferência da marca (bem industrial alienável) e o nome empresarial (atributo da personalidade do empresário, inalienável como tal), além de ignorar a possibilidade de uso do nome do alienante na forma qualificada prevista em lei.",
      "regraMemoria": "Nome empresarial não se vende; o sucessor pode usar o nome do antecessor, mas sempre precedido do próprio nome e com a qualificação de sucessor.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Penal",
      "tema": "Teoria Geral do Crime",
      "dificuldade": "dificil",
      "enunciado": "Durante a madrugada, Ricardo ouviu um barulho na garagem de sua casa e, ao se aproximar, viu uma silhueta segurando um objeto comprido em riste, em posição que lhe pareceu de ataque. Acreditando, de forma plenamente justificada pelas circunstâncias do local mal iluminado e pelo histórico recente de assaltos na região, que seria vítima de agressão iminente, desferiu um golpe com um cano que estava à mão, ferindo gravemente o indivíduo. Posteriormente, apurou-se que se tratava de Vagner, seu vizinho, que apenas carregava um cabo de vassoura e caminhava distraído até o portão dos fundos, sem qualquer intenção de agredir Ricardo. Não havia, portanto, agressão real, mas as circunstâncias eram aptas a induzir qualquer pessoa prudente ao mesmo engano. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Ricardo não responderá pelo resultado, pois incorreu em descriminante putativa decorrente de erro plenamente justificado pelas circunstâncias, que exclui o dolo e também a culpa, nos termos do art. 20, § 1º, do Código Penal."
        },
        {
          "letra": "B",
          "texto": "Ricardo responderá pelo crime na forma culposa, caso se demonstre que o erro sobre a situação fática decorreu de sua falta de cautela, pois a descriminante putativa sobre pressupostos fáticos de causa de justificação, quando escusável, isenta de pena, mas, se inescusável, permite a punição a título de culpa, se prevista em lei."
        },
        {
          "letra": "C",
          "texto": "Ricardo deverá responder pelo crime doloso consumado, pois a legítima defesa putativa é irrelevante para o Direito Penal brasileiro, que somente admite a legítima defesa real como excludente de ilicitude."
        },
        {
          "letra": "D",
          "texto": "Ricardo estará isento de pena unicamente se comprovar que agiu em legítima defesa real, sendo irrelevante, para fins penais, a mera suposição equivocada sobre a existência de agressão."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 20, § 1º, do Código Penal trata da descriminante putativa sobre pressupostos fáticos (erro de tipo permissivo): quem, por erro plenamente justificado pelas circunstâncias, supõe situação de fato que, se existisse, tornaria a ação legítima, fica isento de pena se o erro for escusável (inevitável); se o erro decorrer de falta de cuidado (evitável), o agente responde por crime culposo, se previsto em lei. Como o enunciado não afirma categoricamente que o erro era inevitável para qualquer pessoa, a alternativa correta é a que contempla as duas possíveis consequências a depender da escusabilidade do erro.",
      "explicacaoErradas": "A alternativa A erra ao afirmar que a isenção de pena é automática e sempre exclui também a punição culposa — na verdade, se o erro for evitável (inescusável), subsiste a responsabilização a título de culpa. A alternativa C está errada porque o ordenamento brasileiro reconhece expressamente a legítima defesa putativa como causa que pode isentar de pena (teoria limitada da culpabilidade, adotada pelo CP). A alternativa D ignora por completo o instituto da descriminante putativa, tratando apenas da legítima defesa real.",
      "pegadinha": "A banca tenta levar o candidato a confundir a descriminante putativa (que pode isentar de pena mesmo sem agressão real) com a exigência de agressão efetivamente existente para a legítima defesa real, ou a crer que a isenção é sempre incondicional, desprezando a distinção entre erro escusável e inescusável.",
      "regraMemoria": "Putativa escusável isenta; putativa inescusável (evitável) pune por culpa, se o tipo culposo existir.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Penal",
      "tema": "Excludentes de Ilicitude e Culpabilidade",
      "dificuldade": "dificil",
      "enunciado": "Durante um incêndio de grandes proporções em um galpão industrial, o bombeiro Edmilson, destacado para o combate direto às chamas, recusou-se a adentrar o setor mais crítico da edificação, alegando risco iminente à própria vida, e permaneceu em local seguro, apesar de ordem expressa de seu superior hierárquico e de haver outra pessoa ainda presa no interior do galpão, que acabou falecendo em razão da demora no resgate. Instado a se justificar, Edmilson sustentou que agiu em estado de necessidade, pois sacrificou o bem alheio (a vida da vítima) para preservar bem próprio de igual ou maior valor (sua própria vida), diante de perigo atual que não provocara. Sobre a tese defensiva, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A tese deve ser acolhida, pois o estado de necessidade exclui a ilicitude sempre que o agente sacrifica bem jurídico alheio para proteger a própria vida, independentemente de sua profissão ou função."
        },
        {
          "letra": "B",
          "texto": "A tese não pode ser acolhida, pois, nos termos do art. 24, § 1º, do Código Penal, não pode alegar estado de necessidade quem tinha o dever legal de enfrentar o perigo, categoria em que se insere o bombeiro no exercício de sua função específica de combate a incêndio."
        },
        {
          "letra": "C",
          "texto": "A tese deve ser acolhida, pois a omissão de socorro em contexto de perigo coletivo é sempre atípica quando o próprio agente também corre risco de morte."
        },
        {
          "letra": "D",
          "texto": "A tese não pode ser acolhida, mas apenas porque o estado de necessidade pressupõe que o perigo tenha sido provocado pelo próprio agente, o que não ocorreu no caso, tornando a excludente inaplicável por ausência desse requisito."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 24, § 1º, do Código Penal estabelece expressamente que não pode alegar estado de necessidade quem tinha o dever legal de enfrentar o perigo. O bombeiro, em razão de sua função, possui esse dever legal específico quanto ao combate a incêndios e resgate de vítimas, de modo que não pode invocar a excludente para justificar a omissão, ainda que corra risco pessoal inerente ao ofício.",
      "explicacaoErradas": "A alternativa A ignora a limitação expressa do art. 24, § 1º, do CP, aplicável justamente a quem tem o dever legal de enfrentar o perigo. A alternativa C inventa uma causa de atipicidade genérica que não existe no ordenamento. A alternativa D erra ao apontar o fundamento: o requisito de que o perigo não tenha sido provocado pelo agente está presente (o incêndio não foi causado por Edmilson); o óbice correto é o dever legal de enfrentar o perigo, e não a origem do perigo.",
      "pegadinha": "O examinador explora a confusão entre os dois requisitos negativos do estado de necessidade: (i) não ter provocado o perigo e (ii) não ter o dever legal de enfrentá-lo. O candidato apressado pode aplicar o requisito errado ao caso.",
      "regraMemoria": "Quem tem dever legal de enfrentar o perigo (bombeiro, policial, salva-vidas em serviço) não pode alegar estado de necessidade para fugir dele.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Penal",
      "tema": "Culpabilidade",
      "dificuldade": "media",
      "enunciado": "Josiane foi denunciada pela prática de lesão corporal grave. Laudo pericial psiquiátrico, submetido ao contraditório, atestou que, ao tempo da conduta, ela sofria de perturbação de saúde mental que reduzia, mas não eliminava, sua capacidade de entender o caráter ilícito do fato e de se determinar de acordo com esse entendimento. O juiz, reconhecendo a autoria e a materialidade, precisa decidir como tratar a culpabilidade de Josiane à luz do laudo pericial. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Josiane deverá ser absolvida sumariamente, com imposição de medida de segurança, pois toda perturbação de saúde mental atestada por perícia equivale à inimputabilidade plena prevista no art. 26, caput, do Código Penal."
        },
        {
          "letra": "B",
          "texto": "Josiane é penalmente imputável e sua pena poderá ser reduzida de um a dois terços, nos termos do art. 26, parágrafo único, do Código Penal, por se tratar de hipótese de semi-imputabilidade, e não de isenção de pena."
        },
        {
          "letra": "C",
          "texto": "Josiane deverá ser condenada à pena integral, sem qualquer redução, pois a semi-imputabilidade é circunstância que apenas poderá ser valorada como atenuante genérica na segunda fase da dosimetria."
        },
        {
          "letra": "D",
          "texto": "Josiane será isenta de pena, pois qualquer redução de capacidade de entendimento, ainda que parcial, equipara-se à incapacidade total para fins de exclusão da culpabilidade."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 26, parágrafo único, do Código Penal prevê que, quando o agente, por perturbação de saúde mental ou desenvolvimento mental incompleto ou retardado, não era inteiramente capaz de entender o caráter ilícito do fato ou de se determinar de acordo com esse entendimento, a pena pode ser reduzida de um a dois terços. Trata-se da semi-imputabilidade, que não exclui a imputabilidade (e, portanto, a culpabilidade), apenas autoriza a redução da pena, diferentemente do caput do art. 26, que trata da inimputabilidade plena.",
      "explicacaoErradas": "A alternativa A confunde a semi-imputabilidade com a inimputabilidade total do caput do art. 26, que exige incapacidade plena. A alternativa C erra ao tratar como mera atenuante genérica o que a lei disciplina como causa especial de diminuição de pena, com quantum próprio (um a dois terços). A alternativa D repete o erro de equiparar capacidade reduzida a incapacidade total.",
      "pegadinha": "A armadilha está em confundir capacidade mental reduzida (parágrafo único, redução de pena) com capacidade mental totalmente abolida (caput, isenção de pena com medida de segurança), já que ambas decorrem de laudo pericial sobre saúde mental.",
      "regraMemoria": "Incapacidade total = isenção de pena (medida de segurança); incapacidade parcial (semi-imputável) = redução de um a dois terços.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Penal",
      "tema": "Concurso de Pessoas",
      "dificuldade": "dificil",
      "enunciado": "Danilo e Fabrício combinaram a prática de um furto em uma residência que sabiam estar vazia, sem qualquer combinação prévia sobre o uso de violência contra pessoas. Durante a execução, o morador retornou inesperadamente e surpreendeu Fabrício no interior do imóvel. Sem que Danilo tivesse qualquer ciência prévia ou participação direta nesse desdobramento, Fabrício, sozinho, desferiu golpes fatais contra o morador para garantir a fuga com os bens subtraídos, caracterizando latrocínio. Apurou-se que, embora Danilo não tenha anuído com a violência, era previsível, diante das circunstâncias do crime (imóvel que poderia não estar vazio, horário de risco de retorno do morador), que o resultado mais grave pudesse ocorrer. Sobre a responsabilização penal de Danilo, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Danilo responderá pelo latrocínio consumado nas mesmas condições de Fabrício, por força da teoria monista adotada pelo art. 29, caput, do Código Penal, que não admite distinção de tratamento entre coautores."
        },
        {
          "letra": "B",
          "texto": "Danilo responderá apenas pelo furto, crime que efetivamente quis praticar, com a pena aumentada até a metade, por ser previsível o resultado mais grave, nos termos do art. 29, § 2º, do Código Penal, aplicável à cooperação dolosamente distinta."
        },
        {
          "letra": "C",
          "texto": "Danilo não responderá por crime algum, pois o excesso praticado por Fabrício rompe completamente o nexo causal e exclui qualquer responsabilidade penal do partícipe que não anuiu com a violência."
        },
        {
          "letra": "D",
          "texto": "Danilo responderá por latrocínio tentado, pena intermediária entre o furto e o latrocínio consumado, por analogia in bonam partem ao art. 29, § 2º, do Código Penal."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 29, § 2º, do Código Penal disciplina a cooperação dolosamente distinta (desvio subjetivo de condutas): se algum dos concorrentes quis participar de crime menos grave, ser-lhe-á aplicada a pena deste, aumentada até a metade quando previsível o resultado mais grave. Como Danilo quis praticar apenas o furto e não anuiu com a violência, mas o resultado mais grave era previsível diante das circunstâncias, ele responde pela pena do furto, majorada em até a metade, e não pelo latrocínio.",
      "explicacaoErradas": "A alternativa A está errada porque, embora o art. 29, caput, consagre a teoria monista (todos respondem pelo mesmo crime), essa regra é expressamente excepcionada pelo § 2º nos casos de cooperação dolosamente distinta. A alternativa C erra ao afastar qualquer responsabilidade, quando na verdade a lei prevê exatamente a punição pelo crime menos grave, com possível majoração. A alternativa D inventa uma figura de 'latrocínio tentado por analogia' que não corresponde ao texto legal, que determina a aplicação da pena do crime menos grave desejado (furto), e não de um crime intermediário inexistente.",
      "pegadinha": "A banca tenta induzir à aplicação automática da teoria monista do caput do art. 29 (todo mundo responde pelo mesmo crime), escondendo a exceção do § 2º para quem quis participar de infração menos grave.",
      "regraMemoria": "Quis o crime menor, mas era previsível o maior: pena do menor, aumentada até a metade (art. 29, § 2º, CP).",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Penal",
      "tema": "Concurso de Crimes",
      "dificuldade": "media",
      "enunciado": "Wellington, dirigindo embriagado e em excesso de velocidade, perdeu o controle do veículo e atropelou, em um único e indivisível momento, duas pessoas que caminhavam juntas na calçada, causando a morte de ambas por culpa. Não há qualquer indício de que Wellington tivesse desígnios autônomos em relação às duas vítimas, tratando-se de evento culposo decorrente de uma só conduta. Sobre a definição da espécie de concurso de crimes e o sistema de aplicação da pena, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Trata-se de concurso material de crimes, devendo as penas dos dois homicídios culposos ser somadas, nos termos do art. 69 do Código Penal, por haver pluralidade de resultados."
        },
        {
          "letra": "B",
          "texto": "Trata-se de concurso formal de crimes (art. 70 do Código Penal), pois, mediante uma só ação, o agente deu causa a dois resultados; por se tratar de concurso formal perfeito, derivado de culpa e sem desígnios autônomos, aplica-se o sistema da exasperação, e não o cúmulo material."
        },
        {
          "letra": "C",
          "texto": "Trata-se de crime continuado, nos termos do art. 71 do Código Penal, devendo ser aplicada a pena de um só dos crimes, aumentada de um sexto a dois terços, por se tratar de crimes da mesma espécie praticados em condições semelhantes de tempo e lugar."
        },
        {
          "letra": "D",
          "texto": "Trata-se de concurso formal impróprio, pois houve desígnios autônomos em relação a cada vítima, impondo-se necessariamente o cúmulo material das penas, com soma integral das sanções."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "Há concurso formal de crimes quando o agente, mediante uma só ação ou omissão, pratica dois ou mais crimes, idênticos ou não (art. 70 do CP). No caso, uma única conduta (dirigir embriagado e perder o controle) gerou dois resultados morte culposos, sem desígnios autônomos, caracterizando concurso formal perfeito (próprio), ao qual se aplica o sistema da exasperação: a pena de um dos crimes, se idênticas, ou a mais grave, se diversas, aumentada de um sexto até metade.",
      "explicacaoErradas": "A alternativa A erra porque o concurso material pressupõe mais de uma conduta (ação ou omissão), e aqui houve apenas uma ação. A alternativa C está incorreta porque o crime continuado exige mais de uma ação ou omissão, com reiteração ao longo do tempo, o que não é o caso de um único evento instantâneo. A alternativa D inverte o conceito: desígnios autônomos (concurso formal impróprio) exigem dolo direcionado especificamente a cada resultado, o que é incompatível com crime culposo, hipótese em que não há desígnios autônomos.",
      "pegadinha": "A banca explora a diferença entre concurso formal próprio (uma conduta, resultados não desejados autonomamente, pena exasperada) e concurso formal impróprio (desígnios autônomos, cúmulo material), tentando levar o candidato a aplicar cúmulo material a um evento tipicamente culposo e unitário.",
      "regraMemoria": "Uma só conduta, mais de um resultado, sem desígnios autônomos: concurso formal perfeito, pena exasperada (nunca cúmulo material).",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Penal",
      "tema": "Concurso de Crimes",
      "dificuldade": "dificil",
      "enunciado": "Leandro, auxiliar de caixa de uma loja de departamentos, ao longo de quatro meses, subtraiu pequenas quantias em dinheiro do caixa em que trabalhava, sempre utilizando o mesmo método (lançamentos contábeis fictícios), em dias e horários semelhantes, aproveitando a mesma oportunidade proporcionada por sua função. Ao ser descoberto, responde por doze subtrações de pequeno valor, todas tipificadas como furto simples. Sobre a solução jurídico-penal aplicável ao concurso de crimes praticado por Leandro, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Configura-se concurso material de crimes, com a soma das penas de cada um dos doze furtos, por se tratar de condutas distintas e autônomas no tempo."
        },
        {
          "letra": "B",
          "texto": "Configura-se crime continuado, nos termos do art. 71 do Código Penal, pois Leandro praticou mais de uma ação, resultando em crimes da mesma espécie, executados de modo semelhante e em condições de tempo e lugar que permitem considerar os furtos subsequentes como continuação do primeiro, aplicando-se a pena de um só furto, aumentada de um sexto a dois terços."
        },
        {
          "letra": "C",
          "texto": "Configura-se concurso formal de crimes, pois todas as subtrações decorreram de uma única resolução criminosa inicial, devendo a pena de um dos furtos ser aplicada com aumento de até a metade."
        },
        {
          "letra": "D",
          "texto": "Configura-se crime único, devendo as doze subtrações ser somadas para fins de fixação de um único valor da res furtiva, sem qualquer causa de aumento de pena."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 71 do Código Penal exige, para o crime continuado, mais de uma ação ou omissão, crimes da mesma espécie e semelhança de tempo, lugar, maneira de execução e outras condições que permitam considerar os subsequentes como continuação do primeiro. O caso de Leandro preenche todos os requisitos: reiteração de furtos simples (mesma espécie), mesmo modus operandi, mesmo local de trabalho e proximidade temporal entre as condutas, justificando a aplicação da pena de um só dos crimes, aumentada de um sexto a dois terços.",
      "explicacaoErradas": "A alternativa A ignora o tratamento mais benéfico do crime continuado, que é a ficção jurídica criada justamente para situações como essa, em que a aplicação do cúmulo material seria desproporcional. A alternativa C erra tecnicamente porque o concurso formal pressupõe uma só ação ou omissão gerando dois ou mais resultados, o que não corresponde a condutas autônomas e sucessivas ao longo de quatro meses. A alternativa D inventa uma figura de 'crime único por soma de valores' que não corresponde a nenhuma categoria do Código Penal.",
      "pegadinha": "O examinador busca testar se o candidato sabe diferenciar reiteração criminosa que configura concurso material (crimes sem vínculo de continuidade) daquela que preenche os requisitos específicos do crime continuado, especialmente quando há múltiplas subtrações de pequeno valor.",
      "regraMemoria": "Mais de uma ação + crimes da mesma espécie + semelhança de tempo, lugar e modo de execução = crime continuado (pena de um só, aumentada de 1/6 a 2/3).",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Penal",
      "tema": "Penas",
      "dificuldade": "media",
      "enunciado": "Patrícia foi condenada, por sentença transitada em julgado, à pena de 2 (dois) anos de reclusão pela prática de estelionato simples, sem violência ou grave ameaça à pessoa. Trata-se de sua primeira condenação, não sendo reincidente em crime doloso, e o juiz da execução entendeu, com base na culpabilidade, nos antecedentes, na conduta social e na personalidade de Patrícia, bem como nos motivos e circunstâncias do crime, que a substituição da pena privativa de liberdade seria suficiente e socialmente recomendável. Sobre a possibilidade de substituição da pena, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A substituição é incabível, pois as penas restritivas de direitos somente podem substituir penas privativas de liberdade não superiores a um ano."
        },
        {
          "letra": "B",
          "texto": "A substituição é cabível, nos termos do art. 44 do Código Penal, podendo o juiz, considerando a pena igual a dois anos, substituir a pena privativa de liberdade por uma pena restritiva de direitos e multa ou por duas penas restritivas de direitos."
        },
        {
          "letra": "C",
          "texto": "A substituição é incabível, pois o estelionato é crime cometido mediante grave ameaça à pessoa, o que impede, por si só, a aplicação de penas restritivas de direitos, independentemente do quantum de pena aplicado."
        },
        {
          "letra": "D",
          "texto": "A substituição é cabível, mas apenas por multa isolada, sendo vedada, em qualquer hipótese, a substituição por pena restritiva de direitos quando a pena aplicada for superior a um ano."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 44 do Código Penal permite a substituição da pena privativa de liberdade por restritiva de direitos quando: a pena aplicada não for superior a quatro anos e o crime não for cometido com violência ou grave ameaça à pessoa (ou, se culposo, qualquer que seja a pena); o réu não for reincidente em crime doloso; e as circunstâncias judiciais forem favoráveis. Como a condenação de Patrícia foi de dois anos, por crime sem violência ou grave ameaça, sem reincidência em crime doloso e com circunstâncias favoráveis, cabe a substituição; sendo a pena superior a um ano, a substituição se dá por uma restritiva de direitos e multa, ou por duas restritivas de direitos, nos termos do art. 44, § 2º, do CP.",
      "explicacaoErradas": "A alternativa A erra ao limitar o teto a um ano, quando o limite geral do art. 44, I, é de quatro anos (o limite de um ano é apenas o critério para escolher entre multa isolada ou pena restritiva de direitos simples, conforme o § 2º). A alternativa C está errada porque o estelionato, em sua forma simples, é crime contra o patrimônio cometido mediante fraude, e não mediante violência ou grave ameaça à pessoa. A alternativa D ignora a possibilidade de substituição por restritivas de direitos quando a pena é superior a um ano, prevista expressamente no § 2º do art. 44.",
      "pegadinha": "A banca explora a confusão entre o teto geral de quatro anos para a substituição (art. 44, I) e o critério de um ano usado apenas para escolher a modalidade de substituição (multa isolada ou restritiva simples, versus restritiva + multa ou duas restritivas).",
      "regraMemoria": "Substituição cabe até 4 anos sem violência/grave ameaça; até 1 ano pode ser por multa ou 1 restritiva; acima de 1 ano, restritiva + multa ou duas restritivas.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Penal",
      "tema": "Extinção da Punibilidade",
      "dificuldade": "dificil",
      "enunciado": "Gilmar foi denunciado pela prática de crime cuja pena máxima cominada em abstrato é de quatro anos de reclusão. Antes de qualquer decisão condenatória, transcorreram seis anos entre o recebimento da denúncia e a data em que o processo, por falhas cartorárias, voltou a tramitar, sem que tenha ocorrido qualquer causa interruptiva ou suspensiva do prazo prescricional nesse período. Considerando que a pena máxima em abstrato é superior a dois anos e não excede quatro anos, assinale a afirmativa correta quanto à prescrição da pretensão punitiva.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Está prescrita a pretensão punitiva estatal, pois, nos termos do art. 109, IV, do Código Penal, quando o máximo da pena é superior a dois anos e não excede quatro anos, a prescrição ocorre em oito anos, prazo que, no caso, ainda não se esgotou, de modo que a afirmação de prescrição seria incorreta."
        },
        {
          "letra": "B",
          "texto": "Não está prescrita a pretensão punitiva, pois o prazo prescricional aplicável, calculado pela pena máxima em abstrato (superior a dois e até quatro anos), é de oito anos, nos termos do art. 109, IV, do Código Penal, e apenas seis anos se passaram."
        },
        {
          "letra": "C",
          "texto": "Está prescrita a pretensão punitiva, pois o prazo aplicável é de quatro anos, equivalente ao próprio máximo da pena cominada, e esse prazo já foi superado pelos seis anos transcorridos."
        },
        {
          "letra": "D",
          "texto": "Não é possível aferir a prescrição sem o trânsito em julgado de sentença condenatória, pois antes da condenação não corre qualquer prazo prescricional contra o Estado."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 109, IV, do Código Penal estabelece que a prescrição da pretensão punitiva, antes de transitar em julgado a sentença, regula-se pelo máximo da pena privativa de liberdade cominada ao crime, verificando-se em oito anos, se o máximo da pena é superior a dois anos e não excede quatro. Como a pena máxima do crime imputado a Gilmar é de quatro anos, o prazo prescricional é de oito anos, e apenas seis anos se passaram sem causa interruptiva, de modo que a pretensão punitiva não está prescrita.",
      "explicacaoErradas": "A alternativa A chega à conclusão correta sobre a ausência de prescrição, mas o enunciado da própria alternativa se contradiz ao afirmar 'está prescrita' logo no início, tornando-a formalmente incorreta. A alternativa C erra ao confundir o prazo prescricional com o próprio quantum da pena máxima, quando na verdade a tabela do art. 109 estabelece prazos específicos e distintos da pena-base. A alternativa D está errada porque a prescrição da pretensão punitiva corre normalmente antes do trânsito em julgado, inclusive durante a tramitação do processo, regulada pela pena máxima em abstrato.",
      "pegadinha": "A pegadinha está em confundir o valor da pena (quatro anos) com o prazo de prescrição aplicável (oito anos), já que a tabela do art. 109 não corresponde a uma simples repetição do quantum da pena, mas a faixas específicas com prazos próprios.",
      "regraMemoria": "Pena máxima > 2 e ≤ 4 anos: prescrição em 8 anos (art. 109, IV, CP) — nunca confundir o prazo com o valor da pena.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Penal",
      "tema": "Extinção da Punibilidade",
      "dificuldade": "media",
      "enunciado": "Durante a tramitação de uma ação penal, sobreveio lei que descriminalizou totalmente a conduta imputada ao réu Anderson, deixando de considerá-la crime em qualquer hipótese. O processo ainda não havia sido julgado em primeira instância. O magistrado, ao tomar conhecimento da nova lei, precisa decidir sobre os efeitos desse fato superveniente no processo em curso. Assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Trata-se de hipótese de extinção da punibilidade pela retroatividade de lei que não mais considera o fato como criminoso (abolitio criminis), nos termos do art. 107, III, do Código Penal, devendo o processo ser extinto, com cessação de todos os efeitos penais da conduta."
        },
        {
          "letra": "B",
          "texto": "A nova lei não poderá retroagir para beneficiar Anderson, pois a abolitio criminis somente se aplica a condenações já transitadas em julgado, jamais a processos em curso."
        },
        {
          "letra": "C",
          "texto": "Trata-se de hipótese de anistia, que, embora também extinga a punibilidade, depende de ato do Poder Judiciário, e não de lei em sentido formal editada pelo Poder Legislativo."
        },
        {
          "letra": "D",
          "texto": "O processo deverá prosseguir normalmente até decisão final, pois apenas o indulto ou a graça, concedidos pelo Chefe do Poder Executivo, têm o condão de extinguir a punibilidade de fato ainda em apuração."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 107, III, do Código Penal prevê que se extingue a punibilidade pela retroatividade de lei que não mais considera o fato como criminoso, fenômeno conhecido como abolitio criminis. Por força do art. 5º, XL, da Constituição Federal e do art. 2º do Código Penal, a lei penal mais benéfica retroage sempre, inclusive para atingir fatos ainda em apuração ou já definitivamente julgados, fazendo cessar a execução e os efeitos penais da sentença condenatória, sendo irrelevante a fase em que se encontra o processo.",
      "explicacaoErradas": "A alternativa B inverte a lógica da retroatividade benéfica, que se aplica com ainda mais razão a processos em curso, e não apenas a condenações já transitadas em julgado. A alternativa C confunde abolitio criminis com anistia, que é ato do Poder Legislativo (não do Judiciário) com efeitos distintos, sendo institutos autônomos no rol do art. 107. A alternativa D ignora que a abolitio criminis, por si só, já é causa autônoma de extinção da punibilidade, independente de indulto ou graça.",
      "pegadinha": "A banca tenta fazer o candidato acreditar que a retroatividade benéfica só vale para sentenças já transitadas em julgado, quando na verdade ela se aplica a qualquer fase, inclusive durante a investigação ou o processo.",
      "regraMemoria": "Abolitio criminis retroage sempre, em qualquer fase (inquérito, processo ou execução), extinguindo a punibilidade (art. 107, III, CP).",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Penal",
      "tema": "Feminicídio e Homicídio Qualificado",
      "dificuldade": "dificil",
      "enunciado": "Cristiane foi vítima de homicídio praticado por seu ex-companheiro Marcelo, em contexto de violência doméstica e familiar, poucos dias após ela ter registrado boletim de ocorrência relatando ameaças e humilhações constantes motivadas pela recusa de Cristiane em reatar o relacionamento. A denúncia imputou a Marcelo homicídio qualificado pelo feminicídio, nos termos do art. 121, § 2º, VI, c/c § 2º-A, do Código Penal. A defesa sustentou que o feminicídio seria circunstância de caráter pessoal (subjetiva), razão pela qual não poderia qualificar o crime de forma objetiva. Sobre a natureza jurídica da qualificadora do feminicídio e seus efeitos, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O feminicídio, por envolver violência doméstica e familiar ou menosprezo e discriminação à condição de mulher, configura-se quando o crime é cometido contra a mulher por razões da condição de sexo feminino, tratando-se de qualificadora de natureza objetiva, ligada ao modo de execução e à motivação relacionada ao gênero da vítima, podendo ser corretamente imputada a Marcelo."
        },
        {
          "letra": "B",
          "texto": "A qualificadora do feminicídio é incompatível com crimes cometidos no contexto de violência doméstica, sendo cabível apenas quando o crime decorre de menosprezo ou discriminação à condição de mulher fora do âmbito familiar."
        },
        {
          "letra": "C",
          "texto": "A qualificadora do feminicídio somente se configura quando a vítima e o agressor nunca tiveram qualquer relação de afeto ou convivência, o que afastaria sua aplicação ao caso de Marcelo e Cristiane."
        },
        {
          "letra": "D",
          "texto": "O feminicídio, por constituir qualificadora de caráter exclusivamente subjetivo relacionada à motivação do agente, jamais poderia incidir sobre o fato, pois qualificadoras subjetivas não podem qualificar o homicídio nos termos do art. 121, § 2º, do Código Penal."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 121, § 2º, VI, do Código Penal, incluído pela Lei nº 13.104/2015, qualifica o homicídio quando cometido contra a mulher por razões da condição de sexo feminino. O § 2º-A esclarece que há razões de condição de sexo feminino quando o crime envolve violência doméstica e familiar ou menosprezo ou discriminação à condição de mulher. No caso, o crime foi cometido no contexto de violência doméstica e familiar (relacionamento íntimo de afeto) e motivado pela recusa da vítima em retomar o relacionamento, configurando-se o feminicídio.",
      "explicacaoErradas": "A alternativa B está errada porque é justamente o contexto de violência doméstica e familiar uma das duas hipóteses expressamente previstas no § 2º-A para caracterizar as razões da condição de sexo feminino, e não uma causa de exclusão. A alternativa C inventa um requisito negativo (ausência de qualquer vínculo afetivo) que contraria a própria lógica da lei, voltada justamente a situações de violência doméstica, em regra entre pessoas com vínculo afetivo ou familiar. A alternativa D desconsidera que o feminicídio é majoritariamente tratado pela doutrina e jurisprudência como qualificadora de caráter objetivo (relativa ao motivo e ao contexto do crime), e não subjetivo-pessoal incomunicável.",
      "pegadinha": "A banca explora a tentativa de afastar o feminicídio por existir relação afetiva prévia entre agressor e vítima, quando, na verdade, a violência doméstica e familiar é justamente uma das hipóteses centrais da qualificadora.",
      "regraMemoria": "Feminicídio = morte da mulher por violência doméstica/familiar OU por menosprezo/discriminação de gênero (art. 121, § 2º-A, CP) — contexto familiar reforça, não afasta, a qualificadora.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Penal",
      "tema": "Crimes contra a Dignidade Sexual",
      "dificuldade": "media",
      "enunciado": "Rogério, maior de idade, manteve conjunção carnal com Letícia, de 13 anos de idade, alegando em sua defesa que a adolescente teria consentido livremente com o ato, que ela já possuía vida sexual ativa anterior ao fato e que aparentava ser mais velha do que realmente era. Sobre a tipificação da conduta, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Rogério praticou o crime de estupro de vulnerável, previsto no art. 217-A do Código Penal, sendo irrelevantes, para a configuração do delito, o eventual consentimento da vítima, sua experiência sexual anterior ou a aparência física, pois a presunção de vulnerabilidade do menor de 14 anos é absoluta."
        },
        {
          "letra": "B",
          "texto": "Rogério não praticou crime algum, pois o consentimento da vítima, ainda que menor de 14 anos, afasta a tipicidade da conduta quando comprovada experiência sexual anterior."
        },
        {
          "letra": "C",
          "texto": "Rogério praticou apenas a contravenção penal de importunação, visto que a presunção de vulnerabilidade prevista no art. 217-A do Código Penal é relativa e pode ser afastada por prova em sentido contrário quanto à maturidade da vítima."
        },
        {
          "letra": "D",
          "texto": "Rogério praticou o crime de estupro, na forma simples do art. 213 do Código Penal, pois o tipo do art. 217-A somente se aplica a vítimas menores de 12 anos."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 217-A do Código Penal tipifica o estupro de vulnerável como a conduta de ter conjunção carnal ou praticar outro ato libidinoso com menor de 14 anos. A jurisprudência consolidada dos tribunais superiores entende que a vulnerabilidade do menor de 14 anos é presunção absoluta, sendo irrelevantes o consentimento da vítima, sua eventual experiência sexual anterior ou aparência física, circunstâncias expressamente afastadas pelo § 5º do art. 217-A como causas de exclusão do crime.",
      "explicacaoErradas": "As alternativas B e C adotam a tese da vulnerabilidade relativa, que foi rejeitada pela jurisprudência consolidada e pela própria lei, que reforçou o caráter absoluto da presunção. A alternativa D erra ao reduzir a faixa etária de proteção do art. 217-A, que abrange menores de 14 anos, e não apenas menores de 12.",
      "pegadinha": "A banca testa se o candidato cede à tese de 'vulnerabilidade relativa', aceitando consentimento ou experiência sexual prévia como excludentes, quando a lei e a jurisprudência dominante afastam expressamente essa relativização.",
      "regraMemoria": "Menor de 14 anos: vulnerabilidade absoluta. Consentimento, experiência sexual anterior ou aparência não afastam o estupro de vulnerável (art. 217-A, CP).",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Penal",
      "tema": "Aplicação da Lei Penal no Tempo",
      "dificuldade": "media",
      "enunciado": "Em janeiro de determinado ano, Fernando praticou um crime sob a vigência de lei que cominava pena de reclusão de dois a seis anos. Antes do julgamento definitivo do processo, sobreveio nova lei, mais severa, elevando a pena mínima para quatro anos. Por ocasião da sentença, o juiz precisa definir qual lei aplicar ao caso de Fernando. Assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Deverá ser aplicada a lei nova, mais severa, por ser a vigente ao tempo da sentença, em obediência ao princípio tempus regit actum, que rege toda a aplicação da lei penal."
        },
        {
          "letra": "B",
          "texto": "Deverá ser aplicada a lei vigente ao tempo da prática do fato (lei antiga, mais benéfica), pois a lei penal não retroagirá, salvo para beneficiar o réu, nos termos do art. 5º, XL, da Constituição Federal e do art. 2º, parágrafo único, do Código Penal."
        },
        {
          "letra": "C",
          "texto": "Caberá ao réu escolher qual das duas leis deseja ver aplicada ao seu caso, cabendo ao juiz apenas homologar a escolha da defesa."
        },
        {
          "letra": "D",
          "texto": "Deverá ser aplicada a lei intermediária entre as duas, combinando-se o mínimo da lei nova com o máximo da lei antiga, de modo a obter a solução mais favorável ao réu."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "Nos termos do art. 5º, XL, da Constituição Federal, a lei penal não retroagirá, salvo para beneficiar o réu. O art. 2º, parágrafo único, do Código Penal reforça que a lei posterior que, de qualquer modo, favorecer o agente aplica-se aos fatos anteriores, ainda que decididos por sentença condenatória transitada em julgado. Como a lei nova é mais severa (novatio legis in pejus), ela não pode retroagir, devendo ser aplicada a lei vigente ao tempo do fato (tempus regit actum na sua formulação correta: aplica-se a lei do tempo do crime, salvo quando a lei posterior for mais benéfica).",
      "explicacaoErradas": "A alternativa A inverte o sentido do princípio tempus regit actum no Direito Penal: a regra geral é a aplicação da lei vigente ao tempo do fato, e não da lei vigente ao tempo da sentença, justamente para impedir a retroatividade prejudicial. A alternativa C não corresponde a nenhuma regra do ordenamento jurídico brasileiro, que não atribui à defesa a escolha da lei aplicável fora das hipóteses de combinação vedada. A alternativa D está errada porque o ordenamento brasileiro, segundo entendimento dominante do STF, veda a combinação de leis (criação de uma 'lex tertia'), devendo o juiz aplicar integralmente uma lei ou outra, a mais favorável como um todo.",
      "pegadinha": "A pegadinha está em um uso enganoso da expressão 'tempus regit actum', que a alternativa A aplica de forma invertida para justificar a aplicação da lei do tempo da sentença, quando na verdade a regra impede a retroatividade de lei mais gravosa.",
      "regraMemoria": "Lei nova mais severa nunca retroage; aplica-se a lei do tempo do fato, salvo quando a lei posterior for mais benéfica (art. 2º, CP; art. 5º, XL, CF).",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Penal",
      "tema": "Aplicação da Lei Penal no Espaço",
      "dificuldade": "dificil",
      "enunciado": "Durante viagem internacional, um brasileiro praticou, em território de outro país, crime de peculato contra a Administração Pública brasileira, na qualidade de funcionário público em comissão no exterior. O agente não foi processado nem julgado no país estrangeiro. Sobre a aplicação da lei penal brasileira ao caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A lei penal brasileira jamais poderá ser aplicada a fatos praticados integralmente fora do território nacional, em razão do princípio da territorialidade absoluta adotado pelo Código Penal."
        },
        {
          "letra": "B",
          "texto": "Trata-se de hipótese de extraterritorialidade incondicionada, prevista no art. 7º, I, do Código Penal, que submete à lei brasileira os crimes cometidos contra a Administração Pública por funcionário a seu serviço, ainda que praticados no estrangeiro, independentemente de condições como o ingresso do agente no território nacional."
        },
        {
          "letra": "C",
          "texto": "A aplicação da lei brasileira depende, necessariamente, de condições cumulativas como entrar o agente no território nacional e não ter sido o agente absolvido ou perdoado no estrangeiro, por se tratar de extraterritorialidade condicionada."
        },
        {
          "letra": "D",
          "texto": "Somente seria possível a aplicação da lei brasileira caso o Brasil tivesse requerido e obtido a extradição do agente, não havendo outra hipótese de incidência da lei penal nacional a fatos praticados no exterior."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O Código Penal adota, como regra, a territorialidade (art. 5º), mas prevê hipóteses de extraterritorialidade no art. 7º. O inciso I do art. 7º trata da extraterritorialidade incondicionada, que submete à lei brasileira, independentemente de qualquer condição, os crimes cometidos contra a Administração Pública, por quem está a seu serviço, ainda que no estrangeiro (art. 7º, I, alínea c). Nessas hipóteses, o agente fica sujeito à lei brasileira ainda que absolvido ou condenado no estrangeiro, sem as condições exigidas para a extraterritorialidade condicionada do inciso II.",
      "explicacaoErradas": "A alternativa A contraria a própria estrutura do art. 7º do Código Penal, que prevê expressamente hipóteses de extraterritorialidade. A alternativa C descreve corretamente as condições da extraterritorialidade condicionada (art. 7º, II), mas erra ao aplicá-las ao caso, que se enquadra na extraterritorialidade incondicionada (crime contra a Administração Pública por funcionário a seu serviço), dispensando tais condições. A alternativa D ignora por completo o instituto da extraterritorialidade da lei penal, tratando apenas da extradição, que é instrumento de cooperação distinto.",
      "pegadinha": "A banca tenta levar o candidato a aplicar as condições da extraterritorialidade condicionada (entrada no território nacional, dupla tipicidade etc.) a uma hipótese que, na verdade, é de extraterritorialidade incondicionada, dispensando qualquer condição.",
      "regraMemoria": "Crime contra a Administração Pública por funcionário a seu serviço no exterior: extraterritorialidade incondicionada (art. 7º, I, CP) — a lei brasileira se aplica sempre.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Penal",
      "tema": "Crimes contra o Patrimônio",
      "dificuldade": "media",
      "enunciado": "Diego invadiu uma residência durante a noite com o propósito de subtrair bens de valor. Ao ser surpreendido pelo morador no corredor da casa, antes de conseguir retirar qualquer objeto do imóvel, desferiu golpes de faca contra a vítima, causando sua morte imediata, e fugiu do local sem levar consigo qualquer bem subtraído. Sobre a classificação do crime praticado por Diego quanto à consumação, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Diego praticou latrocínio tentado, pois não houve subtração patrimonial consumada, elemento indispensável para a consumação do crime previsto no art. 157, § 3º, II, do Código Penal."
        },
        {
          "letra": "B",
          "texto": "Diego praticou latrocínio consumado, pois, nos termos da Súmula 610 do Supremo Tribunal Federal, há crime de latrocínio quando o homicídio se consuma, ainda que não se realize a subtração dos bens da vítima."
        },
        {
          "letra": "C",
          "texto": "Diego praticou dois crimes autônomos, homicídio qualificado em concurso material com tentativa de furto, e não o delito complexo de latrocínio."
        },
        {
          "letra": "D",
          "texto": "Diego praticou apenas homicídio simples, pois a ausência de subtração efetiva descaracteriza qualquer relação com crime patrimonial."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "A Súmula 610 do STF estabelece que há crime de latrocínio quando o homicídio se consuma, ainda que não se realize o agente a subtração de bens da vítima. O latrocínio (art. 157, § 3º, II, do CP) é crime complexo cuja consumação se afere pelo resultado morte, elemento preponderante para a fixação da competência do Tribunal do Júri e para a consumação do delito, sendo irrelevante, para esse efeito, que a subtração patrimonial tenha sido ou não concretizada.",
      "explicacaoErradas": "A alternativa A inverte a regra da Súmula 610, que exatamente dispensa a consumação da subtração para caracterizar o latrocínio consumado, bastando a morte consumada. A alternativa C desconsidera a natureza de crime complexo e único do latrocínio, que não se desdobra em dois crimes autônomos quando os elementos (violência patrimonial com resultado morte) estão interligados em um só contexto fático. A alternativa D ignora que o elemento subjetivo de subtração patrimonial estava presente desde o início da ação (invasão com o fim de subtrair bens), o que mantém o enquadramento no tipo complexo do latrocínio.",
      "pegadinha": "A pegadinha clássica está em supor que a ausência de subtração efetiva do bem implica necessariamente tentativa; a Súmula 610 do STF resolve exatamente esse ponto, consumando o latrocínio pela morte, independentemente da sorte da subtração.",
      "regraMemoria": "Morte consumada + subtração tentada = latrocínio consumado (Súmula 610, STF).",
      "seedVersion": 2
    },
    {
      "territorio": "Processo do Trabalho",
      "tema": "Recurso Ordinário",
      "dificuldade": "media",
      "enunciado": "Em reclamação trabalhista ajuizada perante a Vara do Trabalho, foi proferida sentença de mérito julgando parcialmente procedentes os pedidos. A parte sucumbente pretende impugnar a decisão perante o Tribunal Regional do Trabalho competente. Sobre o recurso cabível e seu prazo, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Cabe recurso ordinário, no prazo de 8 (oito) dias, nos termos do art. 895 da CLT, por se tratar de impugnação de decisão definitiva de primeiro grau, proferida por Vara do Trabalho."
        },
        {
          "letra": "B",
          "texto": "Cabe recurso de revista, no prazo de 15 (quinze) dias, dirigido diretamente ao Tribunal Superior do Trabalho, por se tratar de decisão de mérito proferida em processo de conhecimento."
        },
        {
          "letra": "C",
          "texto": "Cabe agravo de petição, no prazo de 8 (oito) dias, por se tratar de decisão proferida em fase de conhecimento no processo do trabalho."
        },
        {
          "letra": "D",
          "texto": "Cabe apelação, no prazo de 15 (quinze) dias, por aplicação subsidiária do Código de Processo Civil ao processo do trabalho, ante a ausência de recurso específico na CLT para o caso."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 895 da CLT prevê o recurso ordinário como o recurso cabível contra decisões definitivas ou terminativas proferidas pelas Varas do Trabalho, no prazo de 8 (oito) dias, dirigido ao Tribunal Regional do Trabalho com jurisdição na localidade. Tratando-se de sentença de mérito proferida em primeiro grau, o recurso ordinário é o instrumento processual adequado.",
      "explicacaoErradas": "A alternativa B está errada porque o recurso de revista (art. 896 da CLT) é cabível contra decisões de Turmas dos Tribunais Regionais do Trabalho em recurso ordinário, e não diretamente contra sentença de primeiro grau. A alternativa C erra porque o agravo de petição é o recurso cabível na fase de execução trabalhista (art. 897, alínea a, da CLT), e não na fase de conhecimento. A alternativa D desconsidera que a CLT possui recurso específico (recurso ordinário) para a hipótese, afastando a aplicação subsidiária do CPC quanto à nomenclatura e ao prazo.",
      "pegadinha": "A banca tenta confundir o candidato quanto ao recurso cabível em cada fase processual trabalhista, especialmente misturando o agravo de petição (execução) com o recurso ordinário (conhecimento).",
      "regraMemoria": "Sentença de Vara do Trabalho (conhecimento) = recurso ordinário, 8 dias, para o TRT (art. 895, CLT).",
      "seedVersion": 2
    },
    {
      "territorio": "Processo do Trabalho",
      "tema": "Recurso de Revista",
      "dificuldade": "dificil",
      "enunciado": "Uma Turma de Tribunal Regional do Trabalho, ao julgar recurso ordinário, manteve a sentença que havia reconhecido a existência de vínculo de emprego com base na análise do conjunto fático-probatório produzido em audiência, considerando crível o depoimento das testemunhas ouvidas. A empresa sucumbente pretende interpor recurso de revista ao Tribunal Superior do Trabalho, sustentando, unicamente, que a prova testemunhal não deveria ter sido valorada daquela forma, pretendendo nova análise do conjunto probatório pelo TST. Sobre o cabimento do recurso nessas condições, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O recurso de revista deve ser conhecido, pois o TST, como corte de revisão, pode reexaminar livremente fatos e provas sempre que entender que houve equívoco na valoração das provas pelas instâncias ordinárias."
        },
        {
          "letra": "B",
          "texto": "O recurso de revista não comporta conhecimento nesses termos, pois, nos termos da Súmula 126 do TST, é incabível recurso de revista para reexame de fatos e provas, sendo o TST corte de natureza extraordinária, vinculada ao quadro fático delineado pelo Tribunal Regional."
        },
        {
          "letra": "C",
          "texto": "O recurso de revista deve ser conhecido, desde que a empresa deposite o valor da condenação em dobro, como condição específica para a reabertura da instrução probatória perante o TST."
        },
        {
          "letra": "D",
          "texto": "O recurso de revista é incabível em qualquer hipótese contra decisão de Turma de Tribunal Regional do Trabalho, sendo cabível apenas embargos de declaração para esse fim."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "A Súmula 126 do TST estabelece que é incabível o recurso de revista (e também os embargos) para reexame de fatos e provas. O Tribunal Superior do Trabalho não atua como terceira instância ordinária, mas como corte extraordinária, cuja função é a uniformização da interpretação da legislação federal e constitucional, ficando adstrito ao quadro fático delineado na decisão regional, nos termos do art. 896 da CLT.",
      "explicacaoErradas": "A alternativa A contraria diretamente a Súmula 126 do TST e a própria natureza extraordinária do recurso de revista. A alternativa C inventa uma condição processual (depósito em dobro para reabertura de instrução) que não existe na CLT. A alternativa D está errada porque o recurso de revista é, em tese, cabível contra decisões de Turmas de TRT, desde que presentes os requisitos de admissibilidade do art. 896 da CLT (violação literal de lei ou divergência jurisprudencial), não sendo a hipótese de reexame de provas que o torna incabível, e não a simples existência do recurso contra acórdão regional.",
      "pegadinha": "A banca tenta fazer o candidato acreditar que qualquer inconformismo quanto à valoração da prova pode justificar recurso de revista, ignorando a vedação expressa e consolidada da Súmula 126 do TST ao reexame fático-probatório.",
      "regraMemoria": "TST não reexamina fatos e provas: Súmula 126 do TST veda recurso de revista para rediscutir prova.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo do Trabalho",
      "tema": "Recurso de Revista",
      "dificuldade": "dificil",
      "enunciado": "Interposto recurso de revista por determinado reclamante, o relator, ao examinar o apelo, verificou que, embora presentes os pressupostos formais de admissibilidade, a matéria discutida não apresentava relevância econômica, política, social ou jurídica que justificasse a análise da causa pelo Tribunal Superior do Trabalho, razão pela qual negou seguimento ao recurso por ausência de transcendência. A parte pretende interpor agravo de instrumento contra essa decisão monocrática, especificamente quanto ao fundamento da ausência de transcendência. Sobre o tema, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A transcendência, prevista no art. 896-A da CLT, é pressuposto específico de admissibilidade do recurso de revista, cujos indicadores são de natureza econômica, política, social ou jurídica; porém, nos termos do § 5º desse artigo, é irrecorrível a decisão monocrática do relator que, em agravo de instrumento em recurso de revista, considerar ausente a transcendência da matéria."
        },
        {
          "letra": "B",
          "texto": "A decisão sobre a transcendência é sempre recorrível por agravo de instrumento, pois a CLT não admite decisões monocráticas irrecorríveis em qualquer hipótese recursal."
        },
        {
          "letra": "C",
          "texto": "A transcendência é requisito aplicável apenas aos recursos de revista interpostos pela parte reclamada, não se aplicando quando o recorrente for o trabalhador reclamante."
        },
        {
          "letra": "D",
          "texto": "A ausência de transcendência não pode fundamentar a negativa de seguimento ao recurso de revista, servindo esse instituto apenas como critério de distribuição interna de processos entre os Ministros do TST."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 896-A da CLT determina que o Tribunal Superior do Trabalho, no recurso de revista, examinará previamente se a causa oferece transcendência com relação aos reflexos gerais de natureza econômica, política, social ou jurídica, sendo esse requisito específico de admissibilidade. O § 5º do mesmo dispositivo estabelece expressamente que é irrecorrível a decisão monocrática do relator que, em agravo de instrumento em recurso de revista, considerar ausente a transcendência da matéria.",
      "explicacaoErradas": "A alternativa B contraria o texto expresso do § 5º do art. 896-A da CLT, que prevê exatamente uma hipótese de irrecorribilidade dessa decisão monocrática específica. A alternativa C inventa uma distinção entre reclamante e reclamada que não existe no texto legal, aplicável a qualquer recorrente. A alternativa D desconsidera que a transcendência é verdadeiro pressuposto de admissibilidade, cuja ausência autoriza a negativa de seguimento ao recurso, e não mero critério interno de distribuição.",
      "pegadinha": "A banca explora o conhecimento específico do § 5º do art. 896-A da CLT, que cria uma exceção à recorribilidade geral das decisões monocráticas, tentando levar o candidato a aplicar a regra geral de recorribilidade sem considerar essa exceção expressa.",
      "regraMemoria": "Decisão monocrática que nega transcendência em agravo de instrumento é irrecorrível (art. 896-A, § 5º, CLT).",
      "seedVersion": 2
    },
    {
      "territorio": "Processo do Trabalho",
      "tema": "Execução Trabalhista",
      "dificuldade": "media",
      "enunciado": "Em fase de execução de sentença trabalhista, o juízo determinou a penhora de bens da executada, que, devidamente garantida a execução, pretende apresentar defesa. A executada deseja arguir, em sua peça de defesa, além da quitação parcial da dívida, também a alegação de nulidade de cláusula contratual celebrada entre as partes durante a vigência do contrato de trabalho, matéria que não foi discutida na fase de conhecimento. Sobre o instrumento de defesa cabível e seus limites, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Cabem embargos à execução, no prazo de 5 (cinco) dias contados da garantia do juízo, nos termos do art. 884 da CLT, cuja matéria de defesa é restrita ao cumprimento da decisão ou do acordo, à quitação ou à prescrição da dívida, não sendo cabível a discussão sobre nulidade de cláusula contratual não debatida na fase de conhecimento."
        },
        {
          "letra": "B",
          "texto": "Cabem embargos à execução, no prazo de 15 (quinze) dias, podendo a executada alegar livremente qualquer matéria de direito material referente ao contrato de trabalho, inclusive questões não suscitadas na fase de conhecimento."
        },
        {
          "letra": "C",
          "texto": "Cabe exceção de pré-executividade, independentemente de garantia do juízo, sendo este o único meio de defesa admitido na execução trabalhista após o trânsito em julgado da sentença."
        },
        {
          "letra": "D",
          "texto": "Cabe recurso ordinário, no prazo de 8 (oito) dias, diretamente contra a penhora efetuada, sendo esse o instrumento próprio para impugnar atos de execução trabalhista."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 884 da CLT estabelece que, garantida a execução, o executado terá 5 (cinco) dias para apresentar embargos, sendo a matéria de defesa restrita às alegações de cumprimento da decisão ou do acordo, quitação ou prescrição da dívida (além de excesso de execução e vícios da penhora, conforme parágrafos do artigo). Não é cabível, em sede de embargos à execução, a rediscussão de matérias de direito material relativas ao contrato de trabalho que não foram objeto de debate na fase de conhecimento, sob pena de ofensa à coisa julgada.",
      "explicacaoErradas": "A alternativa B erra tanto quanto ao prazo (que é de 5, e não 15 dias) quanto quanto à amplitude da matéria, que é restrita pelo art. 884 da CLT, não comportando livre discussão de direito material do contrato de trabalho. A alternativa C está errada porque a exceção de pré-executividade, embora admitida pela jurisprudência trabalhista em hipóteses específicas (matérias de ordem pública cognoscíveis de ofício, sem necessidade de dilação probatória), não é o único meio de defesa na execução, convivendo com os embargos à execução, que continuam sendo a via própria após garantido o juízo. A alternativa D confunde o recurso cabível na execução (agravo de petição, e não recurso ordinário) com o instrumento de defesa contra a penhora.",
      "pegadinha": "A banca tenta levar o candidato a acreditar que, uma vez garantida a execução, a parte pode rediscutir livremente qualquer matéria contratual, ignorando a restrição expressa de matérias do art. 884 da CLT e o respeito à coisa julgada da fase de conhecimento.",
      "regraMemoria": "Embargos à execução: 5 dias após garantia do juízo, matéria restrita a cumprimento, quitação e prescrição da dívida (art. 884, CLT).",
      "seedVersion": 2
    },
    {
      "territorio": "Processo do Trabalho",
      "tema": "Execução Trabalhista",
      "dificuldade": "dificil",
      "enunciado": "Transitada em julgado a sentença condenatória ilíquida proferida em reclamação trabalhista, o juízo determinou sua liquidação por cálculos. Na elaboração da conta de liquidação, o exequente pretendeu incluir parcela que não constava da condenação fixada na sentença, sob o argumento de que a interpretação mais favorável ao trabalhador autorizaria essa inclusão na fase de liquidação. Sobre a possibilidade de inclusão dessa parcela, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "É possível a inclusão de novas parcelas na liquidação, em qualquer hipótese, em razão do princípio da proteção ao trabalhador, que autoriza interpretação extensiva em seu favor mesmo na fase executória."
        },
        {
          "letra": "B",
          "texto": "Não é possível a inclusão de parcela estranha à condenação, pois, nos termos do art. 879, § 1º, da CLT, na liquidação não se poderá modificar ou inovar a sentença liquidanda, nem discutir matéria pertinente à causa principal, sob pena de ofensa à coisa julgada."
        },
        {
          "letra": "C",
          "texto": "É possível a inclusão de parcela nova, desde que o exequente comprove, por meio de nova instrução probatória em sede de liquidação, que teria direito a ela, ainda que não tenha constado da sentença."
        },
        {
          "letra": "D",
          "texto": "A questão deve ser resolvida exclusivamente pelo Tribunal Regional do Trabalho, em sede de recurso ordinário, não podendo o juízo de primeiro grau decidir sobre os limites da liquidação."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 879, § 1º, da CLT estabelece expressamente que, na liquidação, não se poderá modificar ou inovar a sentença liquidanda, nem discutir matéria pertinente à causa principal. A fase de liquidação destina-se exclusivamente à apuração quantitativa do valor devido com base no que já foi decidido na sentença, não podendo servir para incluir parcelas não reconhecidas na fase de conhecimento, sob pena de violação à coisa julgada material.",
      "explicacaoErradas": "A alternativa A está errada porque o princípio da proteção ao trabalhador não pode ser invocado para contornar os limites objetivos da coisa julgada, expressamente vedados pelo art. 879, § 1º, da CLT. A alternativa C inventa a possibilidade de reabertura de instrução probatória em fase de liquidação para incluir parcela nova, o que contraria a própria natureza da liquidação, restrita à apuração de valores já decididos. A alternativa D desloca indevidamente a competência para decidir sobre os limites da liquidação, que é, em regra, do próprio juízo da execução em primeiro grau, sujeita a impugnação e, se for o caso, a agravo de petição, e não exclusivamente do TRT em recurso ordinário.",
      "pegadinha": "A banca explora a tentação de aplicar o princípio protetivo do Direito do Trabalho para justificar a inovação na fase de liquidação, ignorando a vedação expressa do art. 879, § 1º, da CLT e a garantia constitucional da coisa julgada.",
      "regraMemoria": "Liquidação não inova nem modifica a sentença: apenas apura o quantum já decidido (art. 879, § 1º, CLT).",
      "seedVersion": 2
    },
    {
      "territorio": "Processo do Trabalho",
      "tema": "Incidente de Desconsideração da Personalidade Jurídica",
      "dificuldade": "dificil",
      "enunciado": "Em fase de execução de sentença trabalhista, não tendo a executada (sociedade empresária) bens suficientes para garantir a dívida, o exequente requereu a desconsideração da personalidade jurídica para alcançar o patrimônio pessoal dos sócios, que não haviam integrado a relação processual na fase de conhecimento. O juízo pretende instaurar o incidente respectivo antes de determinar qualquer constrição sobre os bens dos sócios. Sobre o procedimento aplicável, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Aplica-se ao processo do trabalho o incidente de desconsideração da personalidade jurídica previsto nos arts. 133 a 137 do Código de Processo Civil, por força do art. 855-A da CLT, assegurando-se aos sócios o contraditório prévio antes da responsabilização patrimonial."
        },
        {
          "letra": "B",
          "texto": "O processo do trabalho é incompatível com o incidente de desconsideração da personalidade jurídica do CPC, devendo o juiz determinar diretamente a penhora de bens dos sócios, independentemente de prévia oitiva, em razão do princípio da celeridade processual trabalhista."
        },
        {
          "letra": "C",
          "texto": "A desconsideração da personalidade jurídica no processo do trabalho exige sempre o ajuizamento de ação autônoma perante a Justiça Comum, sendo incompetente a Justiça do Trabalho para apreciar a matéria."
        },
        {
          "letra": "D",
          "texto": "O incidente de desconsideração da personalidade jurídica, quando instaurado de ofício pelo juízo trabalhista, deverá obrigatoriamente ser autuado como processo autônomo, apartado dos autos principais."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 855-A da CLT, incluído pela Lei nº 13.467/2017, determina a aplicação ao processo do trabalho do incidente de desconsideração da personalidade jurídica previsto nos arts. 133 a 137 do Código de Processo Civil. O procedimento assegura aos sócios que ainda não integraram a relação processual o direito ao contraditório e à ampla defesa antes de qualquer constrição patrimonial sobre seus bens pessoais, tramitando como incidente processual nos próprios autos, vedada sua autuação como processo autônomo.",
      "explicacaoErradas": "A alternativa B contraria a garantia constitucional do contraditório e a própria sistemática do art. 855-A da CLT, que exige a instauração do incidente antes da responsabilização patrimonial dos sócios. A alternativa C está errada porque a Justiça do Trabalho é plenamente competente para processar e julgar o incidente de desconsideração da personalidade jurídica relativo a créditos trabalhistas, não havendo necessidade de ação autônoma na Justiça Comum. A alternativa D inverte a regra procedimental, já que o incidente deve tramitar nos próprios autos do processo em que foi suscitado, sendo vedada sua autuação como processo autônomo.",
      "pegadinha": "A banca tenta induzir o candidato a acreditar que a celeridade do processo do trabalho dispensaria o contraditório prévio dos sócios, quando o art. 855-A da CLT determina expressamente a aplicação do procedimento do CPC, com suas garantias.",
      "regraMemoria": "IDPJ trabalhista segue os arts. 133 a 137 do CPC por força do art. 855-A da CLT: contraditório prévio e tramitação nos próprios autos, nunca como processo autônomo.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Penal",
      "tema": "Inquérito Policial e Investigação",
      "dificuldade": "dificil",
      "enunciado": "O delegado de polícia Rogério concluiu inquérito policial instaurado para apurar suposto crime de estelionato praticado por Fábio em desfavor de uma construtora. Ao final das investigações, a Promotora de Justiça responsável, entendendo ausente justa causa para a ação penal, promoveu o arquivamento do inquérito. Inconformado, o juiz da causa, por discordar da tese de atipicidade sustentada pelo Ministério Público, pretende determinar a remessa dos autos ao Procurador-Geral de Justiça para que este decida se oferece ou não a denúncia. Sobre a sistemática atualmente em vigor para o arquivamento do inquérito policial, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O juiz não possui mais competência para exercer controle sobre o arquivamento promovido pelo Ministério Público; a promoção de arquivamento deve ser comunicada à vítima, ao investigado e à autoridade policial e remetida à instância de revisão ministerial para fins de homologação, cabendo a esta, e não ao magistrado, a última palavra, ressalvada apenas a hipótese excepcional, reconhecida pelo Supremo Tribunal Federal, de o juiz provocar essa revisão em caso de ilegalidade manifesta no ato de arquivamento."
        },
        {
          "letra": "B",
          "texto": "A conduta do juiz está correta, pois, discordando das razões invocadas pelo Ministério Público, cabe a ele remeter os autos ao Procurador-Geral de Justiça, a quem compete oferecer a denúncia, designar outro órgão do Ministério Público para oferecê-la ou insistir no arquivamento, vinculando o magistrado."
        },
        {
          "letra": "C",
          "texto": "O juiz pode determinar diretamente a continuidade das investigações e a realização de novas diligências, independentemente de manifestação do Ministério Público, por força do sistema inquisitivo que rege a fase pré-processual no processo penal brasileiro."
        },
        {
          "letra": "D",
          "texto": "O arquivamento de inquérito policial, por se tratar de ato discricionário do Ministério Público, não comporta qualquer forma de revisão, nem mesmo por parte do próprio órgão ministerial, consolidando-se de forma definitiva desde a promoção do Promotor de Justiça."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "Desde a Lei nº 13.964/2019 (Pacote Anticrime), o art. 28, caput, do CPP atribui o controle do arquivamento ao próprio Ministério Público: a promoção de arquivamento é comunicada à vítima, ao investigado e à autoridade policial e remetida à instância de revisão ministerial, que a homologa ou não. O Supremo Tribunal Federal, na ADI 6.298, admitiu interpretação conforme a Constituição para permitir que, excepcionalmente, o juiz provoque essa revisão em caso de ilegalidade manifesta ou teratologia, mas sem reassumir o papel de controlador ordinário do arquivamento.",
      "explicacaoErradas": "A alternativa B descreve a sistemática revogada, anterior ao Pacote Anticrime, em que o juiz discordante remetia os autos ao Procurador-Geral de Justiça. A alternativa C contraria o sistema acusatório adotado pelo CPP (art. 3º-A), que veda ao juiz substituir a atuação investigatória do órgão de acusação. A alternativa D está errada porque o arquivamento, mesmo sem controle judicial ordinário, ainda depende de homologação pela instância de revisão do próprio Ministério Público.",
      "pegadinha": "A banca explora o conhecimento desatualizado do examinando sobre a antiga redação do art. 28 do CPP (antes do Pacote Anticrime), que previa o envio dos autos ao Procurador-Geral de Justiça em caso de discordância do juiz.",
      "regraMemoria": "Depois do Pacote Anticrime: quem controla o arquivamento é o próprio Ministério Público (revisão interna), não mais o juiz.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Penal",
      "tema": "Ação Penal",
      "dificuldade": "media",
      "enunciado": "Camila foi vítima de estelionato praticado por Ricardo, crime de ação penal pública incondicionada. Após a conclusão do inquérito policial, os autos foram remetidos ao Ministério Público, que, dentro do prazo legal, requereu ao juiz a realização de diligências complementares antes de se manifestar sobre o oferecimento da denúncia. Impaciente, Camila, antes de qualquer nova manifestação do órgão ministerial, contratou advogado e pretende oferecer queixa-crime subsidiária diretamente contra Ricardo. Sobre a hipótese, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "É cabível a queixa subsidiária, pois o prazo para oferecimento da denúncia é fatal e improrrogável sob qualquer circunstância, encerrando-se, com seu decurso, o poder de atuação do Ministério Público no caso."
        },
        {
          "letra": "B",
          "texto": "É cabível a queixa subsidiária, mas, uma vez admitida, o Ministério Público perde definitivamente a titularidade da ação penal, não podendo mais intervir no processo, aditar a queixa ou retomar a persecução penal como parte principal."
        },
        {
          "letra": "C",
          "texto": "Não é cabível a ação penal privada subsidiária da pública, pois a inércia apta a autorizá-la pressupõe o decurso integral do prazo legal sem qualquer manifestação do Ministério Público, não se configurando quando este requer diligências dentro do prazo, ainda que a investigação se prolongue."
        },
        {
          "letra": "D",
          "texto": "Não é cabível ação penal privada subsidiária em nenhuma hipótese nos crimes de ação pública, por força do princípio da obrigatoriedade, que é absoluto e não comporta qualquer exceção constitucional."
        }
      ],
      "respostaCorreta": 2,
      "explicacaoCorreta": "Nos termos do art. 5º, LIX, da CF/88 c/c o art. 29 do CPP, a ação penal privada subsidiária da pública somente é cabível quando o Ministério Público permanece inerte, deixando de oferecer denúncia dentro do prazo legal sem qualquer manifestação. O requerimento de diligências complementares dentro do prazo, ainda que retarde o oferecimento da denúncia, não configura a inércia exigida, de modo que não é cabível a queixa subsidiária.",
      "explicacaoErradas": "A alternativa A erra ao tratar o prazo como fatal mesmo havendo manifestação do MP dentro dele, o que afasta a inércia. A alternativa B erra porque, mesmo após o oferecimento de queixa subsidiária, o Ministério Público continua atuando como fiscal da lei, podendo aditar a queixa, repudiá-la e oferecer denúncia substitutiva, intervir em todos os termos do processo, fornecer elementos de prova, recorrer e, em caso de negligência do querelante, retomar a ação como parte principal (art. 29 do CPP). A alternativa D erra porque a própria Constituição Federal prevê a ação penal privada subsidiária como exceção expressa ao princípio da obrigatoriedade.",
      "pegadinha": "Confundir qualquer manifestação do Ministério Público dentro do prazo legal (como o requerimento de diligências) com a inércia que efetivamente autoriza a queixa subsidiária.",
      "regraMemoria": "Só cabe queixa subsidiária se o Ministério Público ficar calado durante todo o prazo legal - pedir diligência a tempo não é inércia.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Penal",
      "tema": "Denúncia/Queixa e Condições da Ação",
      "dificuldade": "dificil",
      "enunciado": "O Promotor de Justiça ofereceu denúncia contra os cinco diretores da sociedade empresária Alfa Equipamentos S.A. pela prática de crime ambiental, descrevendo apenas que 'os diretores, no exercício de suas funções, permitiram o despejo irregular de resíduos industriais em curso d'água', sem especificar qual diretor teria determinado a conduta, qual sua atribuição específica na cadeia decisória ou qualquer elemento que vinculasse cada um, individualmente, ao resultado danoso. Sobre a hipótese, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A denúncia é apta, pois, em crimes societários, o simples exercício de cargo de direção já autoriza a responsabilização penal de todos os diretores pelos atos praticados no âmbito da pessoa jurídica."
        },
        {
          "letra": "B",
          "texto": "A denúncia deve ser considerada inepta, pois, mesmo em crimes societários, não se admite a imputação genérica fundada exclusivamente na condição de diretor ou sócio, exigindo-se a descrição, ainda que mínima, do vínculo entre a conduta de cada acusado e o resultado delituoso, sob pena de violação ao direito de defesa."
        },
        {
          "letra": "C",
          "texto": "A denúncia é apta, porque caberá ao próprio acusado, em sua defesa prévia, demonstrar que não participou da conduta, invertendo-se o ônus da prova quanto à autoria em crimes dessa natureza."
        },
        {
          "letra": "D",
          "texto": "A denúncia é inepta, mas apenas porque crimes ambientais exigem sempre laudo pericial prévio como condição de procedibilidade, faltando elemento formal, e não propriamente pela ausência de individualização das condutas."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 41 do CPP exige a exposição do fato criminoso com todas as suas circunstâncias. A jurisprudência dos tribunais superiores veda a denúncia genérica em crimes societários ou coletivos quando não há qualquer nexo mínimo entre a conduta narrada e o resultado imputado a cada acusado, por violar o direito de defesa e a ampla possibilidade de contraditório, configurando inépcia (arts. 41 e 395, I, do CPP).",
      "explicacaoErradas": "A alternativa A está errada porque o Direito Penal não admite responsabilidade penal objetiva, sendo necessário demonstrar a conduta individual de cada agente. A alternativa C inverte indevidamente o ônus da prova, que compete à acusação, e não ao réu. A alternativa D está errada porque o vício apontado no enunciado é a ausência de individualização das condutas, e não a falta de laudo pericial, que sequer é mencionada como ausente no caso.",
      "pegadinha": "Levar o examinando a acreditar que, em crimes societários ou coletivos, basta citar o cargo de direção ocupado pelo acusado para fundamentar validamente a denúncia, dispensando a descrição de sua conduta específica.",
      "regraMemoria": "Em crime societário, ocupar cargo de diretor não é prova de autoria - a denúncia precisa narrar o elo de cada um com o fato.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Penal",
      "tema": "Prisões e Medidas Cautelares",
      "dificuldade": "media",
      "enunciado": "Bruno, primário e sem antecedentes, foi preso em flagrante pela prática de furto simples (sem violência ou grave ameaça), cuja pena máxima cominada é de 4 anos. O delegado representou pela conversão em prisão preventiva, alegando apenas que Bruno não possui residência fixa comprovada nos autos, sem apontar qualquer outro elemento concreto de risco. Sobre a possibilidade de decretação da prisão preventiva no caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A prisão preventiva pode ser decretada, pois a ausência de residência fixa comprovada é causa autônoma e suficiente para a decretação da prisão preventiva, independentemente da pena máxima cominada ao delito imputado."
        },
        {
          "letra": "B",
          "texto": "A prisão preventiva não pode ser decretada, pois, além de o crime imputado não ultrapassar a pena máxima de 4 anos exigida pelo art. 313, I, do CPP, a mera ausência de residência fixa comprovada, isoladamente, não supre a exigência de fundamentação concreta quanto ao periculum libertatis, exigida pelo art. 312 do CPP."
        },
        {
          "letra": "C",
          "texto": "A prisão preventiva pode ser decretada, pois o furto, ainda que simples, admite preventiva sempre que o investigado for primário, sendo essa condição, por si só, suficiente para caracterizar risco à ordem pública."
        },
        {
          "letra": "D",
          "texto": "A prisão preventiva não pode ser decretada apenas porque o investigado é primário, sendo irrelevante, para esse fim, a pena máxima cominada ao delito imputado."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 313, I, do CPP somente admite a prisão preventiva, fora das hipóteses específicas dos demais incisos, em crimes dolosos com pena privativa de liberdade máxima superior a 4 anos. Além disso, o art. 312 do CPP exige fundamentação em elementos concretos e contemporâneos de risco, não bastando presunções genéricas como a simples ausência de comprovação documental de residência fixa.",
      "explicacaoErradas": "A alternativa A está errada porque a ausência de residência fixa, isoladamente, não é causa autônoma de prisão preventiva, exigindo-se fundamentação concreta de risco. A alternativa C está errada porque a primariedade, por si só, não autoriza a preventiva, e a pena máxima do furto simples (4 anos) não ultrapassa o limite do art. 313, I, do CPP. A alternativa D está errada porque ignora que a pena máxima cominada é, sim, requisito relevante e normalmente impeditivo no caso descrito.",
      "pegadinha": "Levar o examinando a aceitar que qualquer elemento vago, como a ausência de endereço comprovado, basta para fundamentar a prisão preventiva, ignorando tanto a exigência de fundamentação concreta quanto o requisito de pena mínima do art. 313 do CPP.",
      "regraMemoria": "Preventiva exige, como regra, pena máxima acima de 4 anos (ressalvadas exceções legais) mais perigo concreto fundamentado - nunca presunção genérica.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Penal",
      "tema": "Audiência de Custódia",
      "dificuldade": "media",
      "enunciado": "Juliana foi presa em flagrante às 14h de uma sexta-feira. Em razão de dificuldades de escala de plantão, a audiência de custódia somente foi realizada 50 horas após a prisão, sem que a autoridade apontasse qualquer motivo idôneo para o atraso. Na audiência, o juiz verificou que, embora tardia, estavam presentes os requisitos do art. 312 do CPP para a conversão em prisão preventiva. Sobre a hipótese, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A não realização da audiência de custódia no prazo de 24 horas, sem motivação idônea, torna a prisão ilegal e impõe o seu relaxamento, sem prejuízo da possibilidade de imediata decretação de prisão preventiva, caso presentes os requisitos legais, respondendo a autoridade omissa administrativa, civil e penalmente."
        },
        {
          "letra": "B",
          "texto": "O atraso na realização da audiência de custódia é mera irregularidade administrativa, sem qualquer consequência jurídica para a validade da prisão, desde que a audiência seja realizada em algum momento, ainda que tardiamente."
        },
        {
          "letra": "C",
          "texto": "A ausência de realização da audiência de custódia no prazo legal impede, de forma absoluta e definitiva, a decretação de prisão preventiva em qualquer momento posterior, ainda que presentes os requisitos do art. 312 do CPP."
        },
        {
          "letra": "D",
          "texto": "O prazo de 24 horas previsto para a audiência de custódia é meramente moral, podendo ser dilatado livremente pela autoridade judiciária, sem qualquer responsabilização, em razão de dificuldades operacionais da estrutura judiciária."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "Nos termos do art. 310, caput e parágrafo único, do CPP, transcorridas 24 horas após a prisão sem a realização da audiência de custódia e sem motivação idônea para o atraso, a prisão deve ser relaxada por ilegalidade, sem prejuízo da imediata decretação de prisão preventiva caso presentes os requisitos legais; a autoridade que deu causa à omissão responde administrativa, civil e penalmente.",
      "explicacaoErradas": "A alternativa B está errada porque o atraso injustificado gera consequência jurídica expressa: o relaxamento da prisão. A alternativa C está errada porque o relaxamento por atraso não impede a decretação imediata de nova prisão preventiva, se presentes os requisitos. A alternativa D está errada porque o prazo de 24 horas é legal e seu descumprimento injustificado gera relaxamento e responsabilização da autoridade.",
      "pegadinha": "Levar o examinando a crer que o relaxamento da prisão ilegal por atraso na audiência de custódia impede qualquer prisão preventiva posterior, quando na verdade ela pode ser decretada de imediato se presentes os requisitos legais.",
      "regraMemoria": "Atraso sem motivo idôneo relaxa a prisão, mas o juiz pode decretar preventiva na mesma hora, se houver requisito.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Penal",
      "tema": "Medidas Cautelares Diversas da Prisão",
      "dificuldade": "dificil",
      "enunciado": "Pedro responde a processo por crime de ameaça contra sua ex-companheira. A pedido do Ministério Público, e entendendo desnecessária e desproporcional a prisão preventiva, o juiz impôs a Pedro, cumulativamente, a proibição de se aproximar e manter contato com a ofendida e a monitoração eletrônica. A defesa recorreu alegando que o juiz não poderia ter cumulado duas medidas cautelares diversas da prisão simultaneamente. Sobre a hipótese, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O CPP somente autoriza a aplicação de uma única medida cautelar diversa da prisão por vez, sendo vedada expressamente a cumulação entre elas, ainda que requeridas pelo Ministério Público."
        },
        {
          "letra": "B",
          "texto": "A decisão do juiz está correta, pois, tendo a medida sido requerida pelo Ministério Público, nos termos do art. 282, §2º, do CPP, e observada a adequação ao caso concreto, o art. 319 do CPP admite expressamente a aplicação isolada ou cumulativa das medidas cautelares diversas da prisão, prevalecendo a lógica de que a prisão preventiva é a ultima ratio do sistema cautelar."
        },
        {
          "letra": "C",
          "texto": "Havendo risco à integridade da vítima, a única medida cautelar cabível seria a prisão preventiva, não sendo as medidas diversas da prisão, como a proibição de aproximação, aptas a essa finalidade protetiva."
        },
        {
          "letra": "D",
          "texto": "As medidas cautelares diversas da prisão somente podem ser aplicadas no curso do inquérito policial, não sendo cabíveis após o oferecimento da denúncia, fase em que a única cautelar possível passa a ser a prisão preventiva."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 319 do CPP admite expressamente a imposição isolada ou cumulativa das medidas cautelares diversas da prisão, sempre que adequadas e proporcionais ao caso concreto, sendo a prisão preventiva medida subsidiária, cabível apenas quando as demais se mostrarem inadequadas ou insuficientes. No caso, a medida foi corretamente requerida pelo Ministério Público, atendendo à exigência do art. 282, §2º, do CPP, que veda a decretação de cautelares de ofício pelo juiz.",
      "explicacaoErradas": "A alternativa A está errada porque a lei permite expressamente a cumulação de medidas do art. 319 do CPP. A alternativa C está errada porque a proibição de aproximação e contato com a vítima é medida idônea para essa finalidade, prevista no próprio art. 319, III, do CPP. A alternativa D está errada porque as medidas cautelares diversas da prisão podem ser aplicadas tanto na fase de investigação quanto no curso do processo penal, não havendo tal restrição temporal.",
      "pegadinha": "Levar o examinando a crer que as medidas cautelares diversas da prisão previstas no art. 319 do CPP são sempre isoladas ou alternativas entre si, nunca cumuláveis.",
      "regraMemoria": "As medidas do art. 319 do CPP podem ser somadas entre si - a prisão preventiva é que é a exceção da exceção.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Penal",
      "tema": "Provas no Processo Penal",
      "dificuldade": "media",
      "enunciado": "Durante a perícia em arma de fogo apreendida em suposto local de crime, o item foi recolhido por policial sem o uso de lacre apropriado, sem registro do agente responsável pela coleta e sem documentação do trajeto percorrido até a central de custódia, somente sendo formalmente lacrado dias depois, na própria delegacia, por servidor diverso daquele que efetuou a apreensão. A defesa alega quebra da cadeia de custódia da prova. Sobre o instituto da cadeia de custódia, previsto nos arts. 158-A a 158-F do CPP, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A cadeia de custódia é formalidade meramente burocrática, interna à polícia científica, sem qualquer repercussão sobre a validade da prova em juízo, ainda que integralmente descumprida pelos agentes envolvidos na coleta."
        },
        {
          "letra": "B",
          "texto": "A cadeia de custódia somente se aplica a provas digitais, não alcançando vestígios materiais como armas de fogo apreendidas em via pública ou em local de crime."
        },
        {
          "letra": "C",
          "texto": "A cadeia de custódia compreende o conjunto de procedimentos destinados a documentar e preservar a história cronológica do vestígio, da coleta até o descarte, de modo que falhas relevantes nesse rastreamento, como a ausência de lacração imediata e de identificação dos responsáveis pela coleta, podem comprometer a confiabilidade da prova pericial produzida a partir do vestígio."
        },
        {
          "letra": "D",
          "texto": "A quebra da cadeia de custódia gera automaticamente a absolvição do acusado, independentemente da existência de outras provas autônomas e lícitas que sustentem a condenação."
        }
      ],
      "respostaCorreta": 2,
      "explicacaoCorreta": "Os arts. 158-A a 158-F do CPP, incluídos pela Lei nº 13.964/2019, definem a cadeia de custódia como o conjunto de procedimentos que visa manter e documentar a história cronológica do vestígio, desde sua coleta até o descarte, de modo a preservar sua integridade. Falhas relevantes nesse rastreamento, como a ausência de lacração imediata e a falta de identificação dos responsáveis pela coleta, comprometem a confiabilidade da prova pericial derivada do vestígio.",
      "explicacaoErradas": "A alternativa A está errada porque a cadeia de custódia tem repercussão direta sobre a valoração da prova em juízo. A alternativa B está errada porque o instituto se aplica a qualquer vestígio, material ou digital, coletado em investigação criminal. A alternativa D está errada porque a quebra da cadeia de custódia não gera absolvição automática, apenas compromete especificamente a confiabilidade daquela prova, podendo o processo prosseguir com base em outras provas autônomas e lícitas.",
      "pegadinha": "Levar o examinando a crer que toda quebra de cadeia de custódia gera, por si só, nulidade processual ou absolvição automática, quando na verdade ela apenas enfraquece o valor probatório daquele vestígio específico.",
      "regraMemoria": "Cadeia de custódia quebrada não absolve sozinha - apenas enfraquece o valor daquela prova específica.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Penal",
      "tema": "Corpo de Delito e Reconhecimento de Pessoas",
      "dificuldade": "dificil",
      "enunciado": "Em inquérito por roubo, a vítima foi levada à delegacia e, antes de qualquer descrição verbal prévia das características do suspeito, foi apresentada a uma única fotografia de Gabriel, extraída de seu perfil em rede social, sendo informada de que ele era 'o suspeito investigado'. A vítima reconheceu Gabriel como autor do crime, e esse reconhecimento fotográfico foi o principal fundamento da denúncia e, posteriormente, confirmado em juízo nos mesmos moldes. Sobre o reconhecimento de pessoas realizado em desacordo com o procedimento do art. 226 do CPP, assinale a afirmativa correta, considerando o entendimento consolidado do Superior Tribunal de Justiça.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O reconhecimento fotográfico é sempre válido e suficiente para fundamentar a condenação, independentemente da observância das formalidades do art. 226 do CPP, por se tratar de mera recomendação dirigida à autoridade policial, sem caráter vinculante."
        },
        {
          "letra": "B",
          "texto": "A exibição de fotografia única ao reconhecedor é procedimento plenamente válido e preferível ao reconhecimento presencial, por reduzir o risco de influência externa sobre a vítima durante o ato."
        },
        {
          "letra": "C",
          "texto": "O procedimento do art. 226 do CPP não constitui mera recomendação, mas garantia mínima de confiabilidade do ato, de modo que o reconhecimento realizado em desacordo com suas formalidades essenciais, exibindo-se apenas a fotografia do suspeito sem a prévia descrição e sem o devido cuidado na colheita, é inválido para fundamentar a condenação, ainda que posteriormente confirmado em juízo nos mesmos moldes."
        },
        {
          "letra": "D",
          "texto": "A confirmação do reconhecimento em juízo, em audiência de instrução, convalida automaticamente qualquer vício ocorrido no reconhecimento extrajudicial realizado na fase policial, tornando-o apto a fundamentar isoladamente a condenação."
        }
      ],
      "respostaCorreta": 2,
      "explicacaoCorreta": "O Superior Tribunal de Justiça consolidou entendimento de que as formalidades do art. 226 do CPP (como a descrição prévia da pessoa a ser reconhecida e, sempre que possível, sua colocação ao lado de outras pessoas semelhantes) não são mera recomendação dispensável, constituindo garantia mínima contra erros judiciários; o descumprimento dessas formalidades torna o reconhecimento inválido para fundamentar a condenação, mesmo quando posteriormente confirmado em juízo nos mesmos moldes viciados.",
      "explicacaoErradas": "A alternativa A está errada porque o STJ afastou a tese de que o art. 226 do CPP seria mera recomendação dispensável. A alternativa B está errada porque a exibição de fotografia única é exatamente o inverso do procedimento recomendado, que pressupõe a colocação do suspeito ao lado de outras pessoas com características semelhantes. A alternativa D está errada porque a confirmação em juízo, quando realizada nos mesmos moldes viciados do reconhecimento extrajudicial, carrega o mesmo vício, não o convalidando.",
      "pegadinha": "Levar o examinando a crer que a simples 'confirmação em juízo' sana qualquer vício do reconhecimento extrajudicial, ignorando que, se feita nos mesmos moldes falhos e sugestivos, a confirmação carrega o mesmo defeito.",
      "regraMemoria": "Reconhecimento feito sem seguir o art. 226 do CPP não vira prova válida só porque foi repetido em juízo do mesmo jeito errado.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Penal",
      "tema": "Recursos Penais",
      "dificuldade": "media",
      "enunciado": "O juiz rejeitou liminarmente a denúncia oferecida pelo Ministério Público, com fundamento em ausência de justa causa (art. 395, III, do CPP), antes mesmo da citação do acusado. O Promotor de Justiça pretende recorrer dessa decisão. Assinale a alternativa que indica corretamente o recurso cabível e o respectivo prazo de interposição.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Recurso em sentido estrito, no prazo de 5 dias, nos termos do art. 581, I, c/c o art. 586 do CPP, por se tratar de decisão interlocutória que rejeita a denúncia ou queixa, não se confundindo com a apelação, cabível apenas contra sentenças que julgam o mérito da pretensão punitiva."
        },
        {
          "letra": "B",
          "texto": "Apelação, no prazo de 5 dias, pois qualquer decisão que ponha fim à primeira instância do feito deve ser impugnada por esse recurso, independentemente de seu conteúdo interlocutório ou definitivo."
        },
        {
          "letra": "C",
          "texto": "Recurso em sentido estrito, no prazo de 20 dias, por se tratar de decisão equivalente à absolvição sumária, atraindo o prazo recursal diferenciado aplicável a essa hipótese específica."
        },
        {
          "letra": "D",
          "texto": "Apelação, no prazo de 10 dias, cabível sempre que a decisão impugnada implicar a extinção do processo sem resolução do mérito."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 581, I, do CPP prevê expressamente o cabimento de recurso em sentido estrito contra a decisão que não receber a denúncia ou a queixa, hipótese que abrange a rejeição liminar da inicial acusatória. O prazo para sua interposição é de 5 dias, nos termos do art. 586 do CPP.",
      "explicacaoErradas": "A alternativa B está errada porque a rejeição liminar da denúncia é decisão interlocutória, atacável por recurso em sentido estrito, e não por apelação. A alternativa C está errada porque o prazo de 5 dias é a regra geral do recurso em sentido estrito, sendo o prazo de 20 dias hipótese específica prevista apenas para a impugnação relativa à lista de jurados (art. 581, XIV, do CPP). A alternativa D está errada tanto quanto ao recurso cabível quanto quanto ao prazo.",
      "pegadinha": "Confundir a rejeição liminar da denúncia ou queixa (decisão interlocutória, impugnável por recurso em sentido estrito) com a sentença absolutória ou condenatória proferida após a instrução (impugnável por apelação).",
      "regraMemoria": "Rejeitou a denúncia antes de iniciar o processo? Recurso em sentido estrito, 5 dias. Depois da instrução? Apelação.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Penal",
      "tema": "Execução Penal",
      "dificuldade": "dificil",
      "enunciado": "Vinícius, condenado por estelionato (crime sem violência ou grave ameaça à pessoa), é primário e cumpre pena em regime fechado. Ao completar o cumprimento de 1/6 (um sexto) da pena, seu defensor requer a progressão para o regime semiaberto, juntando atestado de bom comportamento carcerário emitido pela direção do estabelecimento prisional. Sobre o requisito objetivo para a progressão de regime no caso, assinale a afirmativa correta, considerando a legislação em vigor.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O requisito objetivo não está satisfeito, pois, independentemente da natureza do crime, todo condenado deve cumprir ao menos 40% da pena para progredir de regime, por força das alterações promovidas pelo Pacote Anticrime em 2019."
        },
        {
          "letra": "B",
          "texto": "O requisito objetivo está satisfeito, pois, para o condenado primário por crime sem violência ou grave ameaça à pessoa, a regra geral do art. 112 da Lei de Execução Penal exige o cumprimento de ao menos 1/6 da pena no regime anterior, somando-se o requisito subjetivo do bom comportamento carcerário, atestado pelo diretor do estabelecimento."
        },
        {
          "letra": "C",
          "texto": "O requisito objetivo é irrelevante para a progressão de regime, bastando o atestado de bom comportamento carcerário emitido pela direção do estabelecimento, dispensado qualquer lapso temporal mínimo de cumprimento de pena."
        },
        {
          "letra": "D",
          "texto": "O requisito objetivo não está satisfeito, pois a progressão de regime exige sempre o cumprimento de 1/3 da pena, independentemente da natureza do crime ou da reincidência do condenado."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "A legislação em vigor restabeleceu, no caput do art. 112 da Lei de Execução Penal, a fração de 1/6 como regra geral para a progressão de regime do condenado primário em crime cometido sem violência ou grave ameaça à pessoa, reservando percentuais maiores apenas para hipóteses específicas (como violência, grave ameaça, reincidência ou crimes hediondos). Exige-se, cumulativamente, o requisito subjetivo do bom comportamento carcerário.",
      "explicacaoErradas": "A alternativa A está errada porque o percentual de 40% (ou outros percentuais majorados) aplica-se a hipóteses específicas, não à regra geral do condenado primário em crime sem violência. A alternativa C está errada porque tanto o requisito objetivo (temporal) quanto o subjetivo (mérito) são exigidos cumulativamente para a progressão. A alternativa D está errada porque 1/3 não corresponde à fração geral atualmente prevista no art. 112 da LEP.",
      "pegadinha": "Levar o examinando a crer que os percentuais majorados trazidos pelo Pacote Anticrime em 2019 continuam sendo a regra geral para todo e qualquer condenado, ignorando que legislação posterior restabeleceu o 1/6 como regra geral para crimes sem violência cometidos por primários, reservando percentuais maiores a hipóteses específicas. Atenção: a Lei 15.402/2026 (que restabeleceu o 1/6 como regra geral) está sob contestação nas ADIs 7966, 7967, 7968 e 7969 no STF, ainda pendentes de julgamento de mérito — o requisito objetivo pode mudar de novo antes da prova. Fique de olho em atualizações.",
      "regraMemoria": "Regra geral atual: 1/6 para primário em crime sem violência ou grave ameaça. Percentuais maiores são exceção, não regra geral. (Mas essa fração está sob disputa no STF — ADIs 7966/7967/7968/7969 — confirme antes da prova se não mudou de novo.)",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Penal",
      "tema": "Nulidades no Processo Penal",
      "dificuldade": "dificil",
      "enunciado": "No curso de um processo criminal, o réu Anderson, por equívoco cartorário, não foi intimado para apresentar alegações finais, e seu defensor dativo também não se manifestou nessa fase, tendo o processo seguido para sentença condenatória sem qualquer peça de defesa nessa etapa. Em sede de apelação, o Ministério Público sustenta que a nulidade não pode ser reconhecida, pois a defesa não demonstrou, de forma específica, qual argumento teria sido levantado nas alegações finais e como isso mudaria o resultado do julgamento. Sobre a hipótese, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Não há nulidade, pois o princípio do art. 563 do CPP (pas de nullité sans grief) exige, em qualquer hipótese, inclusive nos casos de cerceamento do direito de defesa, a demonstração cabal e específica do prejuízo concreto pela parte interessada, sob pena de preclusão."
        },
        {
          "letra": "B",
          "texto": "Há nulidade, mas de natureza relativa, que deveria ter sido arguida pela própria defesa antes da sentença, estando agora preclusa a possibilidade de seu reconhecimento em sede de apelação."
        },
        {
          "letra": "C",
          "texto": "Trata-se de nulidade absoluta por cerceamento de defesa, decorrente da falta de um dos termos essenciais do processo (alegações finais), cujo prejuízo é presumido pela própria natureza do vício, não sendo exigível da defesa a demonstração concreta e específica de qual tese teria sido suscitada, sob pena de se esvaziar a garantia constitucional da ampla defesa."
        },
        {
          "letra": "D",
          "texto": "Não há qualquer vício a ser sanado, pois a ausência de alegações finais é suprida automaticamente pelo princípio da instrumentalidade das formas, que prevaleceria sobre a garantia da ampla defesa nesse caso."
        }
      ],
      "respostaCorreta": 2,
      "explicacaoCorreta": "Embora o art. 563 do CPP consagre a regra do pas de nullité sans grief, a jurisprudência reconhece que, em nulidades absolutas ligadas a garantias fundamentais do processo penal — como o cerceamento de defesa decorrente da falta de alegações finais —, o prejuízo é presumido, dispensando-se da defesa a prova específica de qual tese teria sido suscitada, sob pena de esvaziar a própria garantia da ampla defesa.",
      "explicacaoErradas": "A alternativa A está errada ao generalizar a exigência de prova específica de prejuízo para hipóteses em que a jurisprudência admite presunção de prejuízo, como o cerceamento de defesa. A alternativa B está errada porque se trata de nulidade absoluta, não relativa, podendo ser arguida a qualquer tempo e até reconhecida de ofício, sem sujeição à preclusão. A alternativa D está errada porque a ausência de alegações finais viola a ampla defesa e não pode ser suprida automaticamente por princípio de índole instrumental.",
      "pegadinha": "Levar o examinando a crer que a regra do art. 563 do CPP se aplica de forma absoluta e sem exceções, mesmo diante de cerceamento de defesa, quando a própria jurisprudência admite presunção de prejuízo em hipóteses de violação a garantias fundamentais.",
      "regraMemoria": "O prejuízo tem que ser provado, exceto quando a nulidade fere garantia fundamental essencial - aí ele se presume.",
      "seedVersion": 2
    },
    {
      "territorio": "Processo Penal",
      "tema": "Procedimentos comum e do júri, da Pronúncia ao Plenário",
      "dificuldade": "media",
      "enunciado": "Ao proferir a decisão de pronúncia contra Thiago pela suposta prática de homicídio qualificado, o juiz, na fundamentação, afirmou categoricamente que 'o acusado friamente premeditou e executou o crime com requintes de crueldade, não restando dúvida alguma quanto à sua culpa', utilizando linguagem própria de sentença condenatória. A defesa alega nulidade da decisão por excesso de linguagem. Sobre a hipótese, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Não há qualquer nulidade, pois a pronúncia, por exigir o mesmo grau de convicção de uma sentença condenatória, deve necessariamente afirmar a culpa do acusado de forma categórica e devidamente fundamentada."
        },
        {
          "letra": "B",
          "texto": "Há nulidade, mas de natureza puramente formal, suprida pela simples determinação de desentranhamento e lacração da peça viciada, sem necessidade de prolação de nova decisão de pronúncia pelo juízo."
        },
        {
          "letra": "C",
          "texto": "Não há nulidade, pois o excesso de linguagem em decisão de pronúncia somente seria relevante caso o processo fosse julgado por juiz togado, e não pelo Tribunal do Júri, órgão imune a qualquer influência da motivação judicial anterior."
        },
        {
          "letra": "D",
          "texto": "Assiste razão à defesa, pois a decisão de pronúncia deve se limitar a um juízo de admissibilidade da acusação, reconhecendo a materialidade do fato e a existência de indícios suficientes de autoria, sem se valer de linguagem incisiva, própria de condenação, sob pena de nulidade por excesso de linguagem apto a influenciar o Conselho de Sentença."
        }
      ],
      "respostaCorreta": 3,
      "explicacaoCorreta": "Nos termos do art. 413 do CPP, a decisão de pronúncia deve se limitar a reconhecer a materialidade do fato e a existência de indícios suficientes de autoria ou participação, sem adentrar em juízo de certeza sobre a culpa. A jurisprudência do STJ reconhece a nulidade da pronúncia por excesso de linguagem (eloquência acusatória), justamente porque os autos, com essa fundamentação incisiva, podem chegar ao conhecimento dos jurados leigos e influenciar indevidamente seu julgamento.",
      "explicacaoErradas": "A alternativa A está errada porque a pronúncia exige apenas juízo de admissibilidade fundado em indícios, não certeza ou afirmação categórica de culpa. A alternativa B está errada porque a jurisprudência entende que o simples desentranhamento ou lacração da peça viciada não basta, devendo o juízo proferir nova decisão de pronúncia, sem o excesso de linguagem. A alternativa C está errada porque é exatamente o contrário: o risco de influência recai sobre os jurados leigos no plenário do júri, e é por isso que a nulidade é reconhecida nesses casos.",
      "pegadinha": "Levar o examinando a crer que basta 'lacrar' ou desentranhar a decisão viciada sem proferir nova pronúncia, ou a crer que a pronúncia deve convencer com a mesma força de uma sentença condenatória.",
      "regraMemoria": "A pronúncia só manda o caso para o júri decidir - o juiz não pode falar como se já tivesse condenado.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito do Trabalho",
      "tema": "Relação de Emprego",
      "dificuldade": "media",
      "enunciado": "A senhora Helena presta serviços de limpeza na residência da família Souza há mais de dois anos, comparecendo exatamente duas vezes por semana (sempre às terças e sextas-feiras), recebendo o pagamento ao final de cada dia trabalhado, sem qualquer outro vínculo com a família. Insatisfeita com o fim da prestação de serviços, Helena pretende ajuizar reclamação trabalhista postulando o reconhecimento de vínculo empregatício doméstico, com base na habitualidade da prestação ao longo dos anos. Sobre a hipótese, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "É devido o reconhecimento do vínculo, pois a reiteração da prestação de serviços por mais de dois anos, independentemente do número de dias trabalhados por semana, já é suficiente, por si só, para caracterizar a não eventualidade exigida pela legislação."
        },
        {
          "letra": "B",
          "texto": "Não é devido o reconhecimento de vínculo empregatício doméstico, pois a Lei Complementar nº 150/2015 exige, para a configuração do trabalho doméstico, prestação de serviços por mais de dois dias por semana ao mesmo tomador; trabalhando Helena exatamente dois dias semanais, ainda que por longo período, permanece caracterizada como diarista autônoma, e não como empregada doméstica."
        },
        {
          "letra": "C",
          "texto": "É devido o reconhecimento do vínculo, pois toda prestação de serviço remunerada e pessoal a uma mesma família, uma vez por semana que seja, já configura vínculo empregatício doméstico, sendo irrelevante a frequência semanal da prestação."
        },
        {
          "letra": "D",
          "texto": "Não é devido o reconhecimento do vínculo, mas não em razão da frequência semanal, e sim porque o pagamento por diária, e não por mês, descaracteriza por si só qualquer onerosidade apta a gerar vínculo de emprego."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "A Lei Complementar nº 150/2015, em seu art. 1º, exige a prestação de serviços por mais de dois dias por semana ao mesmo tomador para a configuração do trabalho doméstico. Trabalhando Helena exatamente dois dias semanais, ainda que ao longo de vários anos, ela permanece caracterizada como diarista autônoma, não se configurando o vínculo empregatício doméstico.",
      "explicacaoErradas": "A alternativa A está errada porque a longa duração da prestação de serviços não supre a exigência legal de frequência mínima semanal superior a dois dias. A alternativa C está errada porque a prestação de apenas uma vez por semana é claramente insuficiente para caracterizar vínculo doméstico. A alternativa D está errada porque o fundamento correto para a ausência de vínculo é a frequência semanal (não eventualidade), e não a forma de pagamento por diária, que, por si só, não afasta a onerosidade.",
      "pegadinha": "Levar o examinando a crer que a longa duração da prestação de serviços (vários anos) supre a exigência legal de frequência mínima semanal (mais de dois dias) para caracterizar o vínculo empregatício doméstico.",
      "regraMemoria": "Empregada doméstica exige mais de 2 dias por semana ao mesmo tomador; 2 dias ou menos é diarista autônoma.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito do Trabalho",
      "tema": "Fraude e Nulidade",
      "dificuldade": "dificil",
      "enunciado": "A empresa Beta Consultoria Ltda. contratou Rafael como pessoa jurídica ('Rafael Serviços de TI Ltda.'), mediante contrato de prestação de serviços, para atuar como analista de sistemas. Na prática, Rafael cumpria horário fixo de entrada e saída fiscalizado por cartão de ponto eletrônico, recebia ordens diretas e diárias de seu superior hierárquico quanto ao modo de execução das tarefas, não podia se fazer substituir por terceiros e trabalhava exclusivamente para a tomadora há três anos, recebendo valor fixo mensal. Sobre a hipótese, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A existência de contrato formal de prestação de serviços entre pessoas jurídicas afasta, de forma absoluta e em qualquer hipótese, a possibilidade de reconhecimento de vínculo empregatício, por força da autonomia da vontade das partes contratantes."
        },
        {
          "letra": "B",
          "texto": "Diante da presença concreta dos elementos caracterizadores da relação de emprego — pessoalidade, não eventualidade, subordinação jurídica e onerosidade —, a formalização de contrato de prestação de serviços entre pessoas jurídicas não afasta o reconhecimento do vínculo empregatício, por força do princípio da primazia da realidade e da nulidade dos atos que visem desvirtuar a aplicação da legislação trabalhista."
        },
        {
          "letra": "C",
          "texto": "O reconhecimento do vínculo empregatício, nesse caso, depende exclusivamente da existência de exclusividade na prestação dos serviços, sendo irrelevantes os demais elementos fáticos descritos, como o controle de horário e a subordinação."
        },
        {
          "letra": "D",
          "texto": "Não é possível o reconhecimento do vínculo de emprego quando o prestador de serviços constitui pessoa jurídica própria para a prestação dos serviços, ainda que presentes a subordinação e o controle de jornada, por vedação legal expressa."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "Nos termos dos arts. 3º e 9º da CLT, a presença concreta dos elementos caracterizadores da relação de emprego — pessoalidade, não eventualidade, subordinação jurídica e onerosidade — autoriza o reconhecimento do vínculo empregatício, independentemente da roupagem formal de contrato entre pessoas jurídicas, por força do princípio da primazia da realidade sobre a forma contratual.",
      "explicacaoErradas": "A alternativa A está errada porque o contrato formal não constitui blindagem absoluta quando os fatos evidenciam fraude à legislação trabalhista. A alternativa C está errada porque a exclusividade é apenas um dos elementos relevantes, não o único, sendo a subordinação e o controle de horário igualmente decisivos. A alternativa D está errada porque não existe vedação legal absoluta ao reconhecimento do vínculo quando presentes os elementos fáticos da relação de emprego, independentemente da existência formal de pessoa jurídica.",
      "pegadinha": "Levar o examinando a crer que a mera existência de contrato de pessoa jurídica sempre afasta ou sempre caracteriza o vínculo, ignorando que a análise depende dos elementos fáticos concretos da prestação de serviços.",
      "regraMemoria": "A roupagem de pessoa jurídica não encobre subordinação visível - o fato prevalece sobre o papel (primazia da realidade).",
      "seedVersion": 2
    },
    {
      "territorio": "Direito do Trabalho",
      "tema": "Grupo Econômico e Terceirização",
      "dificuldade": "media",
      "enunciado": "As empresas Gama Alimentos Ltda. e Delta Comércio Ltda. possuem, cada uma, personalidade jurídica própria e autonomia administrativa plena, sem que uma exerça direção, controle ou administração sobre a outra. Constatou-se, contudo, que ambas têm um sócio em comum, detentor de pequena participação societária em cada uma delas, sem qualquer outro elemento de atuação conjunta, comunhão de interesses ou integração de atividades entre as duas sociedades. Em reclamação trabalhista movida por ex-empregado da Gama, pretende-se a condenação solidária da Delta, sob o argumento de formação de grupo econômico. Sobre a hipótese, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Caracteriza-se grupo econômico por coordenação, de forma automática, sempre que houver qualquer sócio em comum entre duas ou mais sociedades, independentemente de outros elementos de integração entre elas."
        },
        {
          "letra": "B",
          "texto": "Caracteriza-se grupo econômico por subordinação, pois a mera existência de sócio comum já evidencia, por si só, direção e controle de uma empresa sobre a outra, independentemente de prova adicional."
        },
        {
          "letra": "C",
          "texto": "Não se caracteriza grupo econômico apenas pela identidade de sócios entre as empresas, sendo necessária, para a responsabilização solidária prevista no art. 2º, §§2º e 3º, da CLT, a demonstração de efetiva comunhão de interesses e atuação conjunta entre as sociedades, o que não ocorre no caso descrito."
        },
        {
          "letra": "D",
          "texto": "Não se caracteriza grupo econômico pela identidade de sócios, mas, ainda assim, a Delta responderia solidariamente, por mera liberalidade legal, por todo e qualquer débito trabalhista de empresas que tenham sócios em comum."
        }
      ],
      "respostaCorreta": 2,
      "explicacaoCorreta": "O art. 2º, §§2º e 3º, da CLT, na redação dada pela reforma trabalhista, exige, para a configuração do grupo econômico (por subordinação ou por coordenação), a demonstração de efetivo interesse integrado, comunhão de interesses e atuação conjunta entre as empresas, sendo pacífico o entendimento de que a mera identidade de sócios, isoladamente, não basta para essa caracterização.",
      "explicacaoErradas": "A alternativa A está errada porque a formação do grupo por coordenação não é automática, exigindo a comprovação dos demais elementos de integração. A alternativa B está errada porque a direção ou controle efetivo de uma empresa sobre a outra (grupo por subordinação) não se presume pela mera coincidência societária. A alternativa D está errada porque não existe responsabilidade solidária automática, por liberalidade legal, sem a comprovação dos requisitos legais de configuração do grupo econômico.",
      "pegadinha": "Levar o examinando a crer que a existência de sócio em comum, isoladamente, já basta para caracterizar grupo econômico e gerar responsabilidade solidária entre as empresas.",
      "regraMemoria": "Sócio em comum, isoladamente, não forma grupo econômico - é preciso comunhão de interesses e atuação conjunta entre as empresas.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito do Trabalho",
      "tema": "Jornada e Descanso",
      "dificuldade": "media",
      "enunciado": "Paulo trabalha oito horas diárias, mas, por determinação do empregador, usufrui apenas 20 minutos de intervalo intrajornada, quando o mínimo legal para sua jornada seria de uma hora. Após o término do contrato, Paulo pleiteia, judicialmente, o pagamento do período integral de uma hora de intervalo, acrescido de 50%, com reflexos em outras verbas, sob o argumento de que a supressão parcial do intervalo gera o pagamento do período total como se trabalhado fosse. Sobre a hipótese, à luz da legislação em vigor, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Paulo tem direito apenas ao pagamento, com natureza indenizatória, do período efetivamente suprimido do intervalo (40 minutos), acrescido de 50% sobre o valor da hora normal de trabalho, sem repercussão em outras verbas, nos termos do art. 71, §4º, da CLT, com redação dada pela reforma trabalhista."
        },
        {
          "letra": "B",
          "texto": "Paulo tem direito ao pagamento do período total de uma hora de intervalo, com natureza salarial, gerando reflexos em férias, 13º salário e FGTS, por se tratar de descumprimento integral da norma de proteção à saúde do trabalhador."
        },
        {
          "letra": "C",
          "texto": "Paulo não tem direito a qualquer pagamento, pois a concessão parcial do intervalo intrajornada, ainda que inferior ao mínimo legal, é mera infração administrativa, sem repercussão no contrato individual de trabalho."
        },
        {
          "letra": "D",
          "texto": "Paulo tem direito ao pagamento do período suprimido em dobro, por analogia à regra aplicável ao descanso semanal remunerado não concedido, acrescido de reflexos em todas as demais verbas contratuais."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 71, §4º, da CLT, com a redação dada pela reforma trabalhista (Lei nº 13.467/2017), estabelece que a concessão parcial do intervalo intrajornada gera o pagamento, com natureza indenizatória, apenas do período efetivamente suprimido, acrescido de 50% sobre o valor da remuneração da hora normal de trabalho, sem repercussão em outras verbas contratuais.",
      "explicacaoErradas": "A alternativa B descreve a sistemática anterior à reforma trabalhista, que previa o pagamento do período integral, com natureza salarial e reflexos em outras verbas, regra que não mais vigora. A alternativa C está errada porque há, sim, repercussão pecuniária no contrato de trabalho pela supressão parcial do intervalo. A alternativa D está errada porque não há previsão legal de pagamento em dobro para o intervalo intrajornada suprimido.",
      "pegadinha": "Aplicar a regra antiga, anterior à reforma trabalhista, de pagamento do período integral com natureza salarial e reflexos, ignorando a mudança trazida pela Lei nº 13.467/2017 ao art. 71, §4º, da CLT.",
      "regraMemoria": "Depois da reforma: paga-se só o pedaço que faltou do intervalo, com natureza indenizatória e sem reflexos.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito do Trabalho",
      "tema": "Horas Extras e Banco de Horas",
      "dificuldade": "dificil",
      "enunciado": "A empresa Industrial Nortex Ltda. firmou com o empregado Diego, de forma individual e escrita, acordo de compensação de jornada em banco de horas, nos termos do art. 59, §5º, da CLT. Passados oito meses da pactuação, grande parte do saldo de horas extraordinárias trabalhadas por Diego ainda não havia sido compensada com folgas ou redução de jornada. Sobre a hipótese, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O prazo para compensação de banco de horas pactuado individualmente é sempre de um ano, idêntico ao prazo aplicável ao banco de horas instituído por acordo ou convenção coletiva, não havendo distinção legal entre as duas modalidades."
        },
        {
          "letra": "B",
          "texto": "Independentemente do prazo transcorrido, o saldo de banco de horas jamais se converte em horas extraordinárias remuneradas, devendo ser sempre compensado em folgas, ainda que isso ocorra anos após sua formação."
        },
        {
          "letra": "C",
          "texto": "O acordo individual de banco de horas é sempre nulo, por exigir a lei, em qualquer hipótese, a participação do sindicato da categoria mediante acordo ou convenção coletiva de trabalho."
        },
        {
          "letra": "D",
          "texto": "Tratando-se de acordo individual escrito de banco de horas, a compensação integral deve ocorrer no prazo máximo de seis meses; ultrapassado esse período sem a quitação do saldo, as horas não compensadas devem ser pagas como horas extraordinárias, com o adicional legal ou convencional, e não mais geridas pela lógica da compensação."
        }
      ],
      "respostaCorreta": 3,
      "explicacaoCorreta": "O art. 59, §5º, da CLT, com a redação dada pela reforma trabalhista, permite o acordo individual escrito de banco de horas, cuja compensação integral deve ocorrer no prazo máximo de seis meses. Ultrapassado esse prazo sem a quitação do saldo, as horas remanescentes devem ser pagas como horas extraordinárias, com o adicional devido.",
      "explicacaoErradas": "A alternativa A está errada porque o prazo de um ano aplica-se ao banco de horas instituído por negociação coletiva (art. 59, §2º, da CLT), e não ao acordo individual, cujo prazo é de seis meses. A alternativa B está errada porque o saldo não compensado no prazo legal se converte em horas extraordinárias remuneradas, não permanecendo indefinidamente pendente de compensação. A alternativa C está errada porque a reforma trabalhista passou a admitir expressamente o acordo individual escrito de banco de horas, sem necessidade de participação do sindicato.",
      "pegadinha": "Confundir o prazo de seis meses, aplicável ao acordo individual de banco de horas, com o prazo de um ano, aplicável ao banco de horas instituído por negociação coletiva.",
      "regraMemoria": "Banco de horas individual: seis meses para compensar. Coletivo: um ano. Passado o prazo sem compensar, vira hora extra.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito do Trabalho",
      "tema": "13º Salário e Férias, Intervalos",
      "dificuldade": "dificil",
      "enunciado": "Marina tinha direito a 30 dias de férias, concedidas corretamente dentro do período concessivo pela empresa. Entretanto, o pagamento da remuneração das férias, que deveria ocorrer até dois dias antes do início do respectivo período (art. 145 da CLT), foi realizado com 5 dias de atraso. Marina pleiteia o pagamento em dobro da remuneração das férias, com base em entendimento sumulado do TST. Sobre a hipótese, à luz do entendimento do Supremo Tribunal Federal, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "É devido o pagamento em dobro, pois a Súmula 450 do TST permanece plenamente válida e aplicável a qualquer atraso no pagamento da remuneração de férias, ainda que estas tenham sido gozadas no período concessivo correto."
        },
        {
          "letra": "B",
          "texto": "É devido o pagamento em dobro, por aplicação analógica do art. 467 da CLT, referente a verbas rescisórias incontroversas não pagas na primeira audiência trabalhista."
        },
        {
          "letra": "C",
          "texto": "Não é devido qualquer acréscimo, nem mesmo juros ou correção monetária, pelo atraso no pagamento da remuneração de férias dentro do período concessivo correto."
        },
        {
          "letra": "D",
          "texto": "Não é devido o pagamento em dobro, pois o STF declarou a inconstitucionalidade da Súmula 450 do TST, de modo que o pagamento em dobro da remuneração de férias, previsto no art. 137 da CLT, somente é devido quando as férias não forem concedidas dentro do período concessivo, e não pelo simples atraso no pagamento de férias gozadas na época própria."
        }
      ],
      "respostaCorreta": 3,
      "explicacaoCorreta": "O Supremo Tribunal Federal, no julgamento da ADPF 501, declarou a inconstitucionalidade da Súmula 450 do TST. Assim, o pagamento em dobro previsto no art. 137 da CLT aplica-se apenas à hipótese de as férias não serem concedidas dentro do período concessivo, e não ao mero atraso no pagamento da remuneração de férias gozadas corretamente dentro do prazo legal.",
      "explicacaoErradas": "A alternativa A está errada porque contraria a decisão do STF que invalidou a Súmula 450 do TST. A alternativa B está errada porque não há previsão de aplicação analógica do art. 467 da CLT a essa hipótese. A alternativa C está errada porque, ainda que não haja pagamento em dobro, são devidos juros e correção monetária pelo atraso no pagamento, que configura inadimplemento, apenas sem o efeito dobrado.",
      "pegadinha": "Aplicar automaticamente a antiga Súmula 450 do TST (pagamento em dobro por simples atraso no pagamento), sem considerar que o STF a declarou inconstitucional, restringindo o dobro à hipótese de férias não concedidas no período concessivo.",
      "regraMemoria": "O dobro das férias só é devido quando elas não são concedidas no prazo - o mero atraso no pagamento não dobra mais (STF, ADPF 501).",
      "seedVersion": 2
    },
    {
      "territorio": "Direito do Trabalho",
      "tema": "transferência de empregado",
      "dificuldade": "media",
      "enunciado": "João, engenheiro júnior sem qualquer cargo de gestão ou fidúcia especial, foi comunicado por sua empregadora de que seria transferido definitivamente da filial de Curitiba para a filial de Manaus, com mudança de domicílio, sob a justificativa de 'necessidade de serviço' decorrente de reestruturação interna, sem que o contrato de trabalho contivesse cláusula, implícita ou explícita, prevendo a possibilidade de transferência. A empresa não solicitou a anuência de João, nem se dispôs a pagar qualquer verba adicional. Sobre a hipótese, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A transferência é válida independentemente de anuência, bastando a invocação de 'necessidade de serviço' pelo empregador, hipótese que, por si só, autoriza a transferência de qualquer empregado, com ou sem cargo de confiança."
        },
        {
          "letra": "B",
          "texto": "A transferência é inválida sem a anuência de João, pois, não exercendo ele cargo de confiança nem havendo cláusula contratual, implícita ou explícita, prevendo a transferência, a mudança para localidade diversa que implique alteração de domicílio depende de sua concordância, nos termos do art. 469 da CLT; ainda que fosse lícita, seria devido o pagamento suplementar mínimo de 25% dos salários enquanto durasse a situação, além das despesas da mudança, nos termos do art. 470 da CLT."
        },
        {
          "letra": "C",
          "texto": "A transferência somente seria válida mediante anuência de João, ainda que ele exercesse cargo de confiança, pois a exceção prevista no art. 469 da CLT para empregados de confiança aplica-se apenas quando a transferência ocorrer dentro do mesmo município, nunca entre estados diferentes."
        },
        {
          "letra": "D",
          "texto": "A transferência é inválida, mas apenas porque a empresa não arcou com as despesas de mudança; a ausência de anuência de João, por si só, seria irrelevante diante da simples necessidade de serviço alegada pelo empregador."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 469 da CLT veda a transferência do empregado para localidade diversa, com mudança de domicílio, sem sua anuência, salvo quando exerça cargo de confiança ou haja cláusula contratual, implícita ou explícita, prevendo a transferência em razão de real necessidade de serviço. Ainda que lícita a transferência, o art. 469, §3º, da CLT garante pagamento suplementar não inferior a 25% dos salários enquanto durar a situação, e o art. 470 da CLT impõe ao empregador as despesas decorrentes da mudança.",
      "explicacaoErradas": "A alternativa A está errada porque a simples alegação de necessidade de serviço não dispensa a anuência fora das exceções legais (cargo de confiança ou cláusula contratual específica). A alternativa C está errada porque a exceção para empregados de confiança não se limita a transferências dentro do mesmo município, aplicando-se independentemente da distância geográfica. A alternativa D está errada porque o vício principal é a ausência de anuência, e não apenas o custeio das despesas de mudança.",
      "pegadinha": "Levar o examinando a crer que basta invocar 'necessidade de serviço' para transferir qualquer empregado sem anuência, ignorando a exigência de cargo de confiança ou de cláusula contratual específica prevendo a transferência.",
      "regraMemoria": "Sem cargo de confiança e sem cláusula contratual de transferência, a mudança de domicílio exige a anuência do empregado.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito do Trabalho",
      "tema": "sucessão de empregadores",
      "dificuldade": "media",
      "enunciado": "A empresa Comercial União Ltda. foi adquirida integralmente pela empresa Nova Aurora Participações Ltda., que assumiu o estabelecimento empresarial, a clientela e os contratos de trabalho em vigor. Marcos, empregado da antiga Comercial União desde período anterior à aquisição, ajuizou reclamação trabalhista após seu desligamento, postulando horas extras referentes a período integralmente anterior à venda do negócio. A Nova Aurora, em sua defesa, alega que não pode ser responsabilizada por débitos trabalhistas gerados antes da aquisição, pois tais obrigações seriam exclusivas da sucedida. Não há qualquer indício de fraude na operação societária. Sobre a hipótese, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A tese de defesa prospera integralmente, pois a sucessão de empregadores somente gera responsabilidade da sucessora por obrigações trabalhistas constituídas a partir da data da aquisição, sendo a sucedida a única responsável pelo período anterior."
        },
        {
          "letra": "B",
          "texto": "Ambas as empresas devem ser automaticamente condenadas em litisconsórcio necessário e responsabilidade solidária por todo o período contratual, independentemente de existir ou não fraude na sucessão, por força do princípio da despersonalização do empregador."
        },
        {
          "letra": "C",
          "texto": "A responsabilidade da sucessora depende de prova de que Marcos continuou trabalhando efetivamente após a sucessão; caso contrário, nenhuma das duas empresas responderia pelas verbas pleiteadas."
        },
        {
          "letra": "D",
          "texto": "A tese de defesa não prospera, pois, caracterizada a sucessão de empregadores nos termos dos arts. 10 e 448 da CLT, a empresa sucessora responde por todas as obrigações trabalhistas, inclusive as contraídas quando os empregados ainda trabalhavam para a empresa sucedida, conforme expressamente prevê o art. 448-A da CLT, somente se afastando essa regra, com responsabilização solidária da sucedida, em caso de comprovada fraude na sucessão."
        }
      ],
      "respostaCorreta": 3,
      "explicacaoCorreta": "O art. 448-A da CLT, incluído pela reforma trabalhista, atribui à empresa sucessora a responsabilidade por todas as obrigações trabalhistas, inclusive aquelas contraídas quando os empregados ainda trabalhavam para a empresa sucedida, somente se afastando essa regra, com responsabilidade solidária da sucedida, em caso de fraude comprovada na transferência do negócio, o que não ocorre no caso descrito.",
      "explicacaoErradas": "A alternativa A inverte a regra legal, que atribui à sucessora, e não exclusivamente à sucedida, a responsabilidade pelo período anterior à sucessão. A alternativa B está errada porque a regra geral é a responsabilidade da sucessora, não havendo solidariedade automática entre ambas as empresas na ausência de fraude comprovada. A alternativa C está errada porque a responsabilidade da sucessora independe de o empregado ter continuado trabalhando após a sucessão, bastando a caracterização da sucessão trabalhista em relação ao contrato vigente à época da transferência do negócio.",
      "pegadinha": "Levar o examinando a crer que a empresa sucessora só responde pelas obrigações trabalhistas posteriores à aquisição, quando, na verdade, ela responde por todo o contrato de trabalho, inclusive pelo período anterior.",
      "regraMemoria": "A sucessora assume toda a dívida trabalhista, até a mais antiga - só vira solidária com a sucedida se houver fraude comprovada.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito do Trabalho",
      "tema": "Estabilidades e Garantias de Emprego",
      "dificuldade": "media",
      "enunciado": "Camila foi dispensada sem justa causa por sua empregadora. Na data da dispensa, nem ela nem a empresa tinham conhecimento de que Camila já se encontrava grávida havia poucas semanas, fato que só veio a ser descoberto por exame médico realizado após o desligamento. Camila ajuizou reclamação trabalhista pleiteando a estabilidade provisória da gestante. Sobre a hipótese, à luz da Súmula 244 do TST, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O desconhecimento do estado gravídico por parte da empregadora afasta integralmente o direito a qualquer indenização, pois a estabilidade da gestante exige a comunicação formal da gravidez à empresa antes da dispensa, sob pena de preclusão do direito."
        },
        {
          "letra": "B",
          "texto": "Camila não tem direito a qualquer indenização, pois a estabilidade da gestante somente é garantida quando a concepção ocorre durante a vigência do aviso prévio, não alcançando situações de desconhecimento recíproco das partes quanto à gravidez."
        },
        {
          "letra": "C",
          "texto": "O desconhecimento do estado gravídico por parte da empregadora, no momento da dispensa, não afasta o direito à indenização decorrente da estabilidade prevista no art. 10, II, 'b', do ADCT, tratando-se de garantia de natureza objetiva, vinculada unicamente à existência da gravidez no período de proteção, independentemente da ciência das partes."
        },
        {
          "letra": "D",
          "texto": "Camila tem direito à reintegração automática ao emprego, com pagamento de todos os salários do período, ainda que o período estabilitário já tenha se exaurido antes do ajuizamento da ação."
        }
      ],
      "respostaCorreta": 2,
      "explicacaoCorreta": "A Súmula 244, I, do TST estabelece que o desconhecimento do estado gravídico pelo empregador não afasta o direito ao pagamento da indenização decorrente da estabilidade prevista no art. 10, II, 'b', do ADCT, por se tratar de garantia de natureza objetiva, vinculada à existência da gravidez durante o período de proteção, independentemente da ciência das partes no momento da dispensa.",
      "explicacaoErradas": "A alternativa A está errada porque não há exigência de comunicação formal prévia da gravidez para o surgimento do direito à indenização, por se tratar de garantia objetiva. A alternativa B está errada porque a estabilidade protege a gestante desde a confirmação da gravidez até cinco meses após o parto, independentemente de quando ocorreu a concepção dentro do contrato de trabalho. A alternativa D está errada porque, segundo a própria Súmula 244, II, do TST, exaurido o período estabilitário, a garantia se restringe ao pagamento dos salários e demais direitos correspondentes, não cabendo mais reintegração.",
      "pegadinha": "Levar o examinando a crer que o desconhecimento da gravidez pela empresa no momento da dispensa afasta o direito à indenização, ou que, exaurido o período estabilitário, ainda caberia reintegração ao invés de indenização substitutiva.",
      "regraMemoria": "A estabilidade da gestante é objetiva: não importa se ninguém sabia da gravidez no momento da dispensa.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito do Trabalho",
      "tema": "Estabilidades e Garantias de Emprego",
      "dificuldade": "dificil",
      "enunciado": "Eduardo sofreu um acidente de trabalho leve, sem lesão incapacitante grave, e ficou afastado de suas atividades por apenas 8 dias, sendo esses dias custeados pela própria empregadora, sem que houvesse concessão de auxílio-doença acidentário pelo INSS. Após retornar ao trabalho, Eduardo foi dispensado sem justa causa um mês depois, pleiteando judicialmente a estabilidade acidentária de 12 meses prevista no art. 118 da Lei nº 8.213/91. Sobre a hipótese, à luz do entendimento consolidado do TST, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Eduardo tem direito à estabilidade acidentária, pois todo e qualquer acidente de trabalho, independentemente do tempo de afastamento ou da concessão de benefício previdenciário, gera automaticamente o direito à garantia de emprego de 12 meses."
        },
        {
          "letra": "B",
          "texto": "Eduardo não tem direito à estabilidade acidentária, pois, segundo a Súmula 378, II, do TST, são pressupostos dessa garantia o afastamento superior a 15 dias e a consequente percepção do auxílio-doença acidentário, não bastando o mero acidente de trabalho sem a configuração desses requisitos."
        },
        {
          "letra": "C",
          "texto": "Eduardo tem direito à estabilidade acidentária, pois o requisito de 15 dias de afastamento previsto na jurisprudência do TST aplica-se apenas às doenças ocupacionais, e não aos acidentes de trabalho típicos como o sofrido por ele."
        },
        {
          "letra": "D",
          "texto": "Eduardo não tem direito à estabilidade acidentária, mas pelo motivo de que a garantia somente protege empregados que tenham sofrido o acidente há mais de um ano de casa na mesma empresa, independentemente do tempo de afastamento."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "A Súmula 378, II, do TST estabelece como pressupostos da estabilidade acidentária o afastamento superior a 15 dias e a consequente percepção do auxílio-doença acidentário pelo INSS. Não preenchidos esses requisitos, como no caso de Eduardo, que se afastou por apenas 8 dias sem concessão de benefício previdenciário, não há direito à garantia de emprego prevista no art. 118 da Lei nº 8.213/91.",
      "explicacaoErradas": "A alternativa A está errada porque a estabilidade não é automática, dependendo da configuração dos pressupostos fixados pela jurisprudência. A alternativa C está errada porque o requisito dos 15 dias de afastamento com percepção de benefício acidentário aplica-se tanto a acidentes de trabalho típicos quanto a doenças ocupacionais, equiparadas pelo art. 20 da Lei nº 8.213/91. A alternativa D está errada porque o motivo correto para a ausência de direito é a falta de afastamento superior a 15 dias com percepção de benefício previdenciário, e não o tempo de casa do empregado.",
      "pegadinha": "Levar o examinando a crer que basta a ocorrência do acidente de trabalho em si para gerar a estabilidade, sem atentar para a exigência jurisprudencial do afastamento superior a 15 dias com percepção de auxílio-doença acidentário do INSS.",
      "regraMemoria": "A estabilidade acidentária exige mais de 15 dias de afastamento com auxílio-doença acidentário do INSS, não bastando o acidente em si.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito do Trabalho",
      "tema": "Remuneração e Verbas Rescisórias",
      "dificuldade": "dificil",
      "enunciado": "Renata e Fábio exercem idêntica função na mesma empresa e na mesma localidade, com igual produtividade e perfeição técnica. Fábio foi admitido pela empresa há 5 anos, enquanto Renata foi admitida há 2 anos (diferença de tempo de serviço para o mesmo empregador de 3 anos). Entretanto, Fábio somente passou a exercer a função atual há 1 ano, quando foi promovido internamente, ao passo que Renata já exerce essa mesma função desde sua admissão (diferença de tempo na função de 1 ano). Renata pleiteia equiparação salarial com Fábio, que recebe salário superior. Sobre a hipótese, à luz do art. 461 da CLT, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Não é possível a equiparação salarial, pois a diferença de tempo de serviço para o mesmo empregador não pode ultrapassar dois anos, limite que foi excedido no caso, visto que Fábio foi admitido 3 anos antes de Renata."
        },
        {
          "letra": "B",
          "texto": "Não é possível a equiparação salarial, pois a diferença de tempo na função, ainda que de apenas 1 ano, por si só já impede qualquer equiparação, sendo necessária identidade perfeita na data de ingresso na função."
        },
        {
          "letra": "C",
          "texto": "É possível a equiparação salarial, pois, além de presentes os demais requisitos legais (identidade de função, mesmo empregador, mesma localidade e trabalho de igual valor), a diferença de tempo de serviço para o mesmo empregador (3 anos) não é superior a quatro anos, e a diferença de tempo na função (1 ano) não é superior a dois anos, conforme exige o art. 461, §1º, da CLT."
        },
        {
          "letra": "D",
          "texto": "É possível a equiparação salarial, independentemente dos prazos de tempo de serviço e de tempo na função, bastando a identidade de função e de localidade entre os empregados comparados."
        }
      ],
      "respostaCorreta": 2,
      "explicacaoCorreta": "O art. 461, §1º, da CLT, com a redação dada pela reforma trabalhista, exige, para a equiparação salarial, que a diferença de tempo de serviço para o mesmo empregador não seja superior a quatro anos e que a diferença de tempo na função não seja superior a dois anos. No caso, a diferença de tempo de serviço (3 anos) e a diferença de tempo na função (1 ano) estão dentro desses limites, sendo cabível a equiparação, desde que presentes os demais requisitos legais.",
      "explicacaoErradas": "A alternativa A está errada porque o limite de tempo de serviço para o mesmo empregador é de quatro anos, e não de dois, conforme alterado pela reforma trabalhista. A alternativa B está errada porque a diferença de 1 ano na função está dentro do limite de até dois anos permitido pela lei. A alternativa D está errada porque os prazos de tempo de serviço e de tempo na função são requisitos legais expressos, não podendo ser ignorados na análise da equiparação.",
      "pegadinha": "Trocar os dois limites temporais entre si, confundindo o limite de quatro anos de diferença de tempo de serviço para o mesmo empregador com o limite de dois anos de diferença de tempo na função.",
      "regraMemoria": "Equiparação salarial: até quatro anos de diferença de tempo de serviço (empregador), até dois anos de diferença de tempo na função.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito do Trabalho",
      "tema": "Remuneração e Verbas Rescisórias",
      "dificuldade": "media",
      "enunciado": "A empresa Confecções Delta Ltda. dispensou sem justa causa o empregado Vitor, com último dia de trabalho em uma segunda-feira. O pagamento das verbas rescisórias e a entrega dos documentos comprobatórios da comunicação da extinção contratual aos órgãos competentes somente ocorreram 12 dias após o término do contrato, sem qualquer justificativa legal para o atraso. Vitor pleiteia a multa prevista no art. 477 da CLT. Sobre a hipótese, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Não é devida a multa, pois a reforma trabalhista extinguiu qualquer penalidade para o atraso no pagamento de verbas rescisórias, remetendo a matéria exclusivamente à correção monetária e aos juros de mora."
        },
        {
          "letra": "B",
          "texto": "É devida a multa, mas seu valor corresponde sempre à metade do salário do empregado, e não a um salário integral, conforme a nova redação do art. 477 da CLT após a reforma trabalhista."
        },
        {
          "letra": "C",
          "texto": "Não é devida a multa, pois o prazo de 10 dias previsto na CLT se conta apenas a partir da homologação da rescisão perante o sindicato da categoria, ato que, no caso, ainda não ocorreu."
        },
        {
          "letra": "D",
          "texto": "É devida a multa equivalente a um salário do empregado, pois, nos termos do art. 477, §§6º e 8º, da CLT, com redação dada pela reforma trabalhista, o pagamento das verbas rescisórias e a entrega da documentação devem ocorrer em até 10 dias contados do término do contrato, independentemente da modalidade de aviso prévio, sendo o descumprimento desse prazo único suficiente para atrair a penalidade."
        }
      ],
      "respostaCorreta": 3,
      "explicacaoCorreta": "O art. 477, §6º, da CLT, com a redação dada pela reforma trabalhista, unificou o prazo para pagamento das verbas rescisórias e entrega dos documentos comprobatórios em até 10 dias contados do término do contrato, independentemente da modalidade de aviso prévio. O §8º do mesmo artigo prevê multa equivalente a um salário do trabalhador em caso de descumprimento desse prazo.",
      "explicacaoErradas": "A alternativa A está errada porque a multa do art. 477, §8º, da CLT continua prevista e exigível. A alternativa B está errada porque o valor da multa corresponde a um salário integral do empregado, e não à metade. A alternativa C está errada porque a reforma trabalhista aboliu a exigência de homologação sindical como condição para a contagem do prazo de quitação, que corre a partir do término do contrato de trabalho.",
      "pegadinha": "Aplicar a sistemática anterior à reforma trabalhista, que previa prazos diferenciados conforme a modalidade de aviso prévio (trabalhado ou indenizado) e exigia homologação sindical, quando a reforma unificou o prazo em 10 dias corridos do término do contrato, sem necessidade de homologação.",
      "regraMemoria": "Depois da reforma: sempre 10 dias a partir do fim do contrato para pagar as verbas e entregar os documentos, sem homologação sindical.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito do Trabalho",
      "tema": "Segurança e Saúde no Trabalho",
      "dificuldade": "media",
      "enunciado": "Carlos trabalha exposto simultaneamente a agente insalubre (ruído acima dos limites de tolerância) e a agente perigoso (contato permanente com inflamáveis), ambos comprovados por laudo pericial técnico, caracterizando fatos geradores autônomos e distintos. Carlos pretende receber cumulativamente o adicional de insalubridade e o adicional de periculosidade, sob o argumento de que cada risco decorre de uma fonte diferente. Sobre a hipótese, à luz do art. 193, §2º, da CLT e do entendimento do TST, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Carlos tem direito à cumulação integral dos dois adicionais, pois, tratando-se de fatos geradores autônomos e comprovados por perícia técnica distinta, a vedação legal à cumulação não se aplicaria a essa hipótese específica."
        },
        {
          "letra": "B",
          "texto": "Carlos não tem direito à cumulação pretendida, pois o art. 193, §2º, da CLT veda a percepção simultânea dos adicionais de insalubridade e de periculosidade, ainda que decorrentes de fatores de risco autônomos e distintos, cabendo ao empregado optar pelo adicional que lhe for mais vantajoso."
        },
        {
          "letra": "C",
          "texto": "Carlos não tem direito a nenhum dos dois adicionais, isolada ou cumulativamente, pois a existência de dois riscos distintos e simultâneos anularia reciprocamente o direito a qualquer um dos adicionais."
        },
        {
          "letra": "D",
          "texto": "Carlos tem direito a optar por apenas um dos adicionais, mas essa opção seria automaticamente a do adicional de menor valor, por se tratar de regra voltada à proteção do equilíbrio financeiro do empregador."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 193, §2º, da CLT, recepcionado pela Constituição Federal e confirmado por tese fixada pela SDI-1 do TST, veda a cumulação dos adicionais de insalubridade e de periculosidade, mesmo quando decorrentes de fatos geradores autônomos e distintos, cabendo ao empregado optar pelo adicional que lhe for mais vantajoso.",
      "explicacaoErradas": "A alternativa A está errada porque, mesmo com fatos geradores autônomos e distintos, a vedação à cumulação se mantém segundo o entendimento consolidado do TST. A alternativa C está errada porque o empregado tem direito a receber um dos adicionais, apenas não podendo cumular ambos. A alternativa D está errada porque a opção cabe ao empregado e recai sobre o adicional mais vantajoso, e não sobre o de menor valor.",
      "pegadinha": "Levar o examinando a crer que, por se tratar de fatos geradores autônomos e distintos (comprovados por laudos técnicos diferentes), a vedação à cumulação do art. 193, §2º, da CLT não se aplicaria ao caso.",
      "regraMemoria": "Insalubridade e periculosidade nunca se cumulam - o empregado escolhe o adicional mais vantajoso.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Administrativo",
      "tema": "Licitações",
      "dificuldade": "media",
      "enunciado": "O prefeito do Município de Boa Serra determina ao setor de compras que utilize a modalidade licitatória 'convite' para contratar a reforma de um prédio escolar, por entender se tratar de obra de pequeno valor e, portanto, sujeita a procedimento mais simplificado. A chefe do setor de licitações, Fabiana, orienta o prefeito de forma diversa, afirmando que tal modalidade não pode mais ser utilizada. Sobre o caso, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Fabiana está equivocada, pois o convite continua previsto na Lei nº 14.133/2021 para contratações de obras e serviços de engenharia de baixo valor."
        },
        {
          "letra": "B",
          "texto": "Fabiana está correta: a Lei nº 14.133/2021 extinguiu as modalidades convite e tomada de preços, cabendo à Administração escolher entre pregão, concorrência, concurso, leilão e diálogo competitivo, considerando a natureza do objeto, e não mais apenas o valor estimado da contratação."
        },
        {
          "letra": "C",
          "texto": "Fabiana está equivocada, pois o valor estimado da contratação continua sendo o critério legal exclusivo para a escolha entre pregão e concorrência, tal como na legislação revogada."
        },
        {
          "letra": "D",
          "texto": "Fabiana está correta quanto à vedação ao convite, mas a modalidade cabível seria necessariamente o diálogo competitivo, por se tratar de obra pública de pequeno valor."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "A Lei nº 14.133/2021 (art. 28) prevê apenas cinco modalidades de licitação: pregão, concorrência, concurso, leilão e diálogo competitivo, tendo extinto as antigas modalidades convite e tomada de preços da Lei nº 8.666/93. Ademais, a escolha entre pregão e concorrência passou a ser definida pela natureza do objeto (se possui padrões de desempenho e qualidade objetivamente definíveis no edital) e não mais pelo valor estimado da contratação.",
      "explicacaoErradas": "A alternativa A erra ao afirmar que o convite persiste na lei atual, quando na verdade foi extinto. A alternativa C erra ao manter o critério do valor como definidor de modalidade, superado pela nova lei. A alternativa D erra ao indicar o diálogo competitivo, modalidade reservada a objetos que envolvam inovação tecnológica ou técnica e impossibilidade de definição precisa das especificações pela Administração, não sendo cabível para uma reforma predial comum.",
      "pegadinha": "O examinador explora o hábito de concursandos e candidatos de associar automaticamente 'baixo valor' às modalidades simplificadas da lei revogada (convite/tomada de preços), que não existem mais no regime da Lei 14.133/2021.",
      "regraMemoria": "Lei 14.133: só sobrou pregão, concorrência, concurso, leilão e diálogo competitivo — convite e tomada de preços foram embora, e quem manda na escolha entre pregão e concorrência é a natureza do objeto, não o valor.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Administrativo",
      "tema": "Licitações",
      "dificuldade": "dificil",
      "enunciado": "Em licitação promovida por autarquia estadual, o pregoeiro publica edital determinando que a fase de habilitação dos licitantes anteceda a fase de julgamento das propostas, sem apresentar, no processo administrativo, qualquer motivação quanto aos benefícios dessa opção. Diante da impugnação de uma das licitantes, que questiona a regularidade da sequência adotada, assinale a afirmativa correta à luz da Lei nº 14.133/2021.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O edital está em conformidade com a lei, pois a habilitação deve sempre anteceder o julgamento das propostas, por se tratar da regra geral do procedimento licitatório."
        },
        {
          "letra": "B",
          "texto": "O edital contraria a lei, pois a regra geral é o julgamento das propostas anteceder a habilitação, sendo a inversão dessa ordem excepcional e condicionada a ato motivado, que explicite os benefícios da medida, além de previsão expressa no instrumento convocatório."
        },
        {
          "letra": "C",
          "texto": "O edital é nulo de pleno direito, pois a Lei nº 14.133/2021 veda, em qualquer hipótese, que a fase de habilitação anteceda o julgamento das propostas."
        },
        {
          "letra": "D",
          "texto": "O edital está correto quanto à possibilidade de inversão de fases, mas esta somente seria válida se autorizada por decreto regulamentador editado pelo respectivo ente federativo, e não por simples ato motivado constante do próprio processo licitatório."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 17 da Lei nº 14.133/2021 estabelece a sequência regular das fases da licitação, prevendo que o julgamento das propostas anteceda a habilitação. O §1º do mesmo artigo admite, excepcionalmente, a inversão dessa ordem, desde que mediante ato motivado, com explicitação dos benefícios decorrentes, e expressa previsão no edital.",
      "explicacaoErradas": "A alternativa A inverte a regra geral com a exceção. A alternativa C erra ao afirmar vedação absoluta, quando a própria lei admite a inversão em caráter excepcional. A alternativa D cria exigência (decreto regulamentador) não prevista em lei; a autorização de que trata o §1º do art. 17 se dá por ato motivado no próprio processo licitatório, sem necessidade de regulamento específico.",
      "pegadinha": "A confusão proposital está em inverter o que é regra e o que é exceção: muitos candidatos ainda associam a habilitação como etapa inicial (como ocorria sob certas interpretações da lei antiga), quando a Lei 14.133/2021 fixou o julgamento das propostas como a ordem padrão.",
      "regraMemoria": "Regra: primeiro julga, depois habilita. Exceção (inversão): só com ato motivado explicando o benefício e previsão no edital.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Administrativo",
      "tema": "Licitações",
      "dificuldade": "media",
      "enunciado": "O Município de Serra Dourada, para a festa de aniversário da cidade, pretende contratar o show de uma cantora de renome nacional, consagrada pela crítica especializada, por meio de seu empresário, que detém documento de exclusividade de representação da artista em todo o território nacional, de forma permanente e contínua. Sobre a contratação, assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Trata-se de dispensa de licitação em razão do pequeno valor do evento, nos termos do rol taxativo do art. 75 da Lei nº 14.133/2021."
        },
        {
          "letra": "B",
          "texto": "Trata-se de hipótese de inexigibilidade de licitação, pois a contratação de profissional do setor artístico consagrado pela crítica especializada ou pela opinião pública, diretamente ou por meio de empresário exclusivo, configura inviabilidade de competição."
        },
        {
          "letra": "C",
          "texto": "A contratação é irregular, pois a Lei nº 14.133/2021 exige, para toda contratação de artistas por entes públicos, a realização de concurso para seleção da melhor proposta artística."
        },
        {
          "letra": "D",
          "texto": "Trata-se de dispensa de licitação, pois contratações de natureza artística sempre se enquadram nas hipóteses de dispensa, e nunca nas de inexigibilidade, previstas na lei de licitações."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 74, II, da Lei nº 14.133/2021 prevê como hipótese de inexigibilidade a contratação de profissional do setor artístico, diretamente ou por meio de empresário exclusivo, desde que consagrado pela crítica especializada ou pela opinião pública, exigindo-se documento que comprove a exclusividade permanente e contínua da representação, e não restrita a um evento ou local específico — situação compatível com o caso narrado.",
      "explicacaoErradas": "A alternativa A confunde inexigibilidade com dispensa em razão de valor, institutos distintos: na dispensa a competição é juridicamente viável, mas a lei dispensa a licitação; na inexigibilidade a competição é inviável. A alternativa C inventa exigência de concurso, inexistente para esse fim. A alternativa D generaliza de forma incorreta, atribuindo à dispensa hipótese que a lei trata como inexigibilidade.",
      "pegadinha": "A armadilha central é confundir dispensa (em que a competição seria viável, mas a lei autoriza a contratação direta por razões legais específicas) com inexigibilidade (em que a própria competição é inviável, como no caso de artista consagrado com representação exclusiva).",
      "regraMemoria": "Artista consagrado + empresário exclusivo permanente = inexigibilidade (competição inviável), não dispensa.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Administrativo",
      "tema": "Intervenção na Propriedade",
      "dificuldade": "media",
      "enunciado": "O Município de Vale Formoso declara a utilidade pública de um imóvel urbano pertencente a Aristides, para a construção de um posto de saúde, e ajuíza ação de desapropriação, requerendo a imissão provisória na posse mediante depósito do valor arbitrado judicialmente. Aristides se opõe, alegando que não pode ser imitido na posse antes de receber a integralidade da indenização definitiva em dinheiro, sob pena de violação à garantia constitucional da prévia e justa indenização. Assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Assiste razão a Aristides, pois nenhuma imissão na posse pode ocorrer antes do pagamento integral e definitivo da indenização, sob pena de violação ao art. 5º, XXIV, da Constituição Federal."
        },
        {
          "letra": "B",
          "texto": "Não assiste razão a Aristides: a imissão provisória na posse pode ser deferida mediante o depósito do valor arbitrado judicialmente, nos termos do Decreto-Lei nº 3.365/41, observando-se a garantia constitucional da indenização prévia, justa e em dinheiro no momento da indenização definitiva, ao fim do processo expropriatório."
        },
        {
          "letra": "C",
          "texto": "Assiste razão a Aristides quanto à necessidade de prévio pagamento integral, mas apenas a desapropriação por interesse social admitiria imissão provisória mediante simples depósito."
        },
        {
          "letra": "D",
          "texto": "Não assiste razão a Aristides, pois, tratando-se de desapropriação por utilidade pública, a indenização pode ser paga em títulos da dívida pública resgatáveis em até vinte anos, o que dispensa qualquer depósito prévio."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O Decreto-Lei nº 3.365/41 (art. 15) autoriza a imissão provisória na posse mediante depósito do valor arbitrado, mecanismo distinto da indenização definitiva, que, essa sim, deve observar a garantia constitucional de ser prévia, justa e em dinheiro antes da transferência definitiva da propriedade ao poder expropriante, ao término do processo.",
      "explicacaoErradas": "A alternativa A ignora a possibilidade legal de imissão provisória mediante depósito, tratando-a como se fosse a indenização definitiva. A alternativa C erra ao restringir esse mecanismo apenas à desapropriação por interesse social, quando ele também se aplica à desapropriação por utilidade/necessidade pública do Decreto-Lei 3.365/41. A alternativa D confunde o regime da desapropriação comum (indenização em dinheiro) com o regime especial da desapropriação para reforma agrária (em que a terra nua é paga em títulos da dívida agrária).",
      "pegadinha": "O examinador explora a confusão entre a garantia constitucional da indenização prévia, justa e em dinheiro (que se refere à indenização definitiva) e a imissão provisória na posse (que pode ocorrer mediante simples depósito do valor arbitrado, sem que isso viole a Constituição).",
      "regraMemoria": "Imissão provisória: basta o depósito do valor arbitrado. Indenização definitiva: aí sim tem que ser prévia, justa e em dinheiro.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Administrativo",
      "tema": "Intervenção na Propriedade",
      "dificuldade": "dificil",
      "enunciado": "A União desapropria, por interesse social, para fins de reforma agrária, o imóvel rural de propriedade de Marieta, por constatar que a propriedade não cumpre sua função social. O imóvel possui, além da terra nua, benfeitorias úteis e necessárias, como cercas e uma casa-sede. Marieta questiona a forma como a indenização lhe será paga. Assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Toda a indenização, tanto da terra nua quanto das benfeitorias úteis e necessárias, deverá ser paga em títulos da dívida agrária, resgatáveis em até vinte anos."
        },
        {
          "letra": "B",
          "texto": "A indenização da terra nua será paga em títulos da dívida agrária, resgatáveis no prazo de até vinte anos a partir do segundo ano de sua emissão, com cláusula de preservação do valor real, ao passo que as benfeitorias úteis e necessárias serão indenizadas em dinheiro."
        },
        {
          "letra": "C",
          "texto": "Toda a indenização deverá ser paga em dinheiro, à vista, pois a Constituição não autoriza o pagamento em títulos públicos para a desapropriação de imóvel rural."
        },
        {
          "letra": "D",
          "texto": "A indenização será integralmente paga em títulos da dívida agrária, inclusive quanto às benfeitorias, salvo se o imóvel for pequena ou média propriedade rural, hipótese em que a indenização será toda em dinheiro."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 184 da Constituição Federal estabelece que a desapropriação para fins de reforma agrária será indenizada mediante prévia e justa indenização em títulos da dívida agrária, resgatáveis no prazo de até vinte anos a partir do segundo ano de sua emissão, com cláusula de preservação do valor real. O §1º do mesmo artigo determina que as benfeitorias úteis e necessárias serão indenizadas em dinheiro.",
      "explicacaoErradas": "As alternativas A e D erram ao estender o pagamento em títulos às benfeitorias, quando a Constituição expressamente as ressalva para pagamento em dinheiro. A alternativa C ignora o regime constitucional específico do art. 184, que expressamente autoriza o pagamento em títulos da dívida agrária para a terra nua.",
      "pegadinha": "A pegadinha está em generalizar o regime de títulos da dívida agrária para toda a indenização, ignorando que as benfeitorias úteis e necessárias têm regime diferenciado (pagamento em dinheiro), distinção central nesse tipo de desapropriação.",
      "regraMemoria": "Reforma agrária: terra nua em títulos da dívida agrária (até 20 anos); benfeitorias úteis e necessárias em dinheiro.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Administrativo",
      "tema": "Organização Administrativa e Serviços Públicos",
      "dificuldade": "dificil",
      "enunciado": "O Estado-membro, concedente de serviço público de rodovia, decide retomar a prestação do serviço antes do término do prazo contratual, motivado por relevante interesse público superveniente, sem que haja qualquer inadimplemento contratual por parte da concessionária. Sobre o instituto aplicável, assinale a afirmativa correta, à luz da Lei nº 8.987/95.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Trata-se de caducidade, que pode ser decretada diretamente pelo chefe do Poder Executivo, independentemente de lei autorizativa específica ou de indenização prévia à concessionária."
        },
        {
          "letra": "B",
          "texto": "Trata-se de encampação, que depende de lei autorizativa específica e de prévio pagamento de indenização à concessionária, nos termos da Lei nº 8.987/95."
        },
        {
          "letra": "C",
          "texto": "Trata-se de rescisão, que somente pode ser promovida pela própria concessionária, mediante ação judicial, quando o poder concedente descumprir normas contratuais."
        },
        {
          "letra": "D",
          "texto": "Trata-se de anulação, uma vez que a retomada do serviço por interesse público superveniente pressupõe reconhecimento de ilegalidade na outorga originária da concessão."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "A encampação é a retomada do serviço pelo poder concedente, durante o prazo da concessão, por motivo de interesse público superveniente, exigindo, nos termos dos arts. 37 e 38 da Lei nº 8.987/95, lei autorizativa específica e prévio pagamento da indenização devida à concessionária.",
      "explicacaoErradas": "A alternativa A descreve a caducidade, que decorre de inadimplência da concessionária e é declarada por decreto, sem necessidade de indenização prévia — hipótese inversa à do enunciado, em que não há inadimplemento. A alternativa C erra ao atribuir a rescisão exclusivamente à iniciativa da concessionária contra o poder concedente. A alternativa D erra ao tratar como vício de legalidade originário o que, no caso, é retomada por conveniência e oportunidade administrativa.",
      "pegadinha": "O examinador explora a confusão clássica entre encampação (interesse público superveniente, exige lei específica e indenização prévia) e caducidade (inadimplência da concessionária, declarada por decreto, sem indenização prévia).",
      "regraMemoria": "Encampação: por conveniência, precisa de lei + indenização prévia. Caducidade: por culpa da concessionária, só decreto, sem indenização prévia.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Administrativo",
      "tema": "Organização Administrativa e Serviços Públicos",
      "dificuldade": "media",
      "enunciado": "O governador de determinado Estado exonera, antes do término do mandato fixado em lei, o diretor-presidente de agência reguladora estadual, sob a justificativa de 'perda de confiança política'. O diretor, considerando ilegítima a medida, busca orientação jurídica. Assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A exoneração é válida, pois dirigentes de autarquias, inclusive as de regime especial, são sempre demissíveis ad nutum pelo chefe do Poder Executivo, dado o vínculo de confiança político-administrativa."
        },
        {
          "letra": "B",
          "texto": "A exoneração é inválida, pois a nota distintiva do regime autárquico especial das agências reguladoras é justamente a investidura a termo (mandato fixo) de seus dirigentes, que lhes confere estabilidade durante o período, não podendo ser afastados por mera discricionariedade do chefe do Executivo."
        },
        {
          "letra": "C",
          "texto": "A exoneração é válida, pois, embora o mandato seja fixo, a estabilidade dos dirigentes de agências reguladoras somente é assegurada em relação às agências federais, não se estendendo às estaduais."
        },
        {
          "letra": "D",
          "texto": "A exoneração é inválida apenas porque não houve processo administrativo disciplinar prévio, sendo, de resto, livre a exoneração de dirigente de agência reguladora a qualquer tempo, desde que motivada em razões políticas."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "As agências reguladoras são autarquias em regime especial, cujo regime se caracteriza, entre outros aspectos, pela independência administrativa, fundamentada na estabilidade de seus dirigentes, investidos a termo (mandato fixo), que não podem ser livremente exonerados pelo chefe do Executivo durante o período do mandato, salvo nas hipóteses legalmente previstas.",
      "explicacaoErradas": "A alternativa A ignora a nota distintiva do regime especial (mandato fixo e estabilidade), que afasta a livre exoneração ad nutum. A alternativa C inventa distinção entre agências federais e estaduais que não decorre da natureza do instituto, aplicável à lógica das agências reguladoras em geral. A alternativa D mantém o equívoco de admitir exoneração por razões políticas, quando o próprio fundamento do regime especial é afastar esse tipo de ingerência durante o mandato.",
      "pegadinha": "A pegadinha é tratar o dirigente de agência reguladora como qualquer cargo em comissão de livre nomeação e exoneração, ignorando que o mandato fixo é exatamente o que diferencia o regime autárquico especial do regime autárquico comum.",
      "regraMemoria": "Agência reguladora = autarquia especial = dirigente com mandato fixo, sem exoneração ad nutum durante o período.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Administrativo",
      "tema": "Agentes Públicos",
      "dificuldade": "dificil",
      "enunciado": "Em janeiro de 2019, um servidor público federal, lotado em autarquia, pratica conduta tipificada como falta disciplinar punível com demissão. A autoridade competente toma conhecimento do fato em março de 2019, mas somente instaura o processo administrativo disciplinar em fevereiro de 2024. O servidor alega que a pretensão punitiva estatal já estaria prescrita. Assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A pretensão está prescrita, pois o prazo de 5 anos deve ser contado da data da prática do fato, e não da data em que a autoridade dele tomou conhecimento."
        },
        {
          "letra": "B",
          "texto": "A pretensão não está prescrita: o prazo prescricional de 5 anos para faltas puníveis com demissão conta-se da data em que o fato se tornou conhecido, e a instauração do processo disciplinar, antes de escoado esse prazo, interrompe a prescrição, reiniciando sua contagem."
        },
        {
          "letra": "C",
          "texto": "A pretensão está prescrita, pois a instauração de processo disciplinar apenas suspende, e não interrompe, o curso da prescrição, voltando o prazo a correr do ponto em que havia parado."
        },
        {
          "letra": "D",
          "texto": "A pretensão não está prescrita, pois faltas disciplinares puníveis com demissão são imprescritíveis, não se aplicando qualquer prazo prescricional a essa espécie de penalidade."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "A ação disciplinar prescreve em 5 anos quanto às infrações puníveis com demissão, contados da data em que o fato se tornou conhecido pela autoridade competente (março de 2019). Como a instauração do processo disciplinar ocorreu em fevereiro de 2024, antes de completados os 5 anos, houve interrupção da prescrição, recomeçando a contagem integral a partir desse ato, até a decisão final da autoridade competente.",
      "explicacaoErradas": "A alternativa A erra o termo inicial, que não é a data do fato, mas a data do conhecimento pela autoridade competente. A alternativa C erra a natureza do efeito: a instauração de sindicância ou processo disciplinar interrompe (zera e reinicia a contagem), e não apenas suspende, a prescrição. A alternativa D inventa imprescritibilidade inexistente para penalidades disciplinares em geral.",
      "pegadinha": "O examinador testa duas armadilhas simultâneas: o termo inicial correto da contagem (conhecimento do fato, não a prática) e a diferença entre suspensão e interrupção da prescrição ao se instaurar o processo disciplinar.",
      "regraMemoria": "5 anos para demissão, contados do conhecimento do fato; instaurar o PAD interrompe (zera) a prescrição, não apenas suspende.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Administrativo",
      "tema": "Agentes Públicos",
      "dificuldade": "media",
      "enunciado": "Helena é professora efetiva em escola pública municipal, no turno da manhã, e também ocupa, no turno da tarde, cargo técnico de nível superior (engenheira) em autarquia estadual, havendo plena compatibilidade entre os horários de ambos os cargos. Um colega questiona a legalidade dessa situação, afirmando que seria vedada a acumulação. Assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A acumulação é vedada, pois a Constituição somente permite a acumulação entre dois cargos de professor, não entre cargo de professor e cargo técnico ou científico."
        },
        {
          "letra": "B",
          "texto": "A acumulação é permitida, pois a Constituição Federal admite a acumulação remunerada de um cargo de professor com outro cargo técnico ou científico, desde que haja compatibilidade de horários, ainda que os entes federativos e os regimes jurídicos sejam distintos."
        },
        {
          "letra": "C",
          "texto": "A acumulação é vedada, pois a compatibilidade de horários somente autoriza a acumulação quando ambos os cargos pertencerem ao mesmo ente federativo."
        },
        {
          "letra": "D",
          "texto": "A acumulação é permitida apenas se Helena optar pela remuneração mais vantajosa, renunciando ao recebimento cumulativo dos subsídios ou vencimentos de ambos os cargos."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 37, XVI, 'b', da Constituição Federal admite a acumulação remunerada de um cargo de professor com outro cargo técnico ou científico, desde que haja compatibilidade de horários, sem exigir que os cargos pertençam ao mesmo ente federativo ou ao mesmo regime jurídico.",
      "explicacaoErradas": "A alternativa A restringe indevidamente a hipótese constitucional, que não se limita à acumulação entre dois cargos de professor, indo além deste para abarcar a combinação com cargo técnico ou científico. A alternativa C cria exigência de mesmo ente federativo que não consta do texto constitucional. A alternativa D nega a possibilidade de acumulação remunerada, quando a própria Constituição a admite expressamente, com recebimento cumulativo das remunerações.",
      "pegadinha": "A armadilha é limitar as hipóteses de acumulação lícita apenas ao caso mais lembrado (dois cargos de professor), esquecendo a hipótese também expressa de cargo de professor com cargo técnico ou científico, igualmente sujeita apenas à compatibilidade de horários.",
      "regraMemoria": "CF art. 37, XVI: pode acumular dois cargos de professor, ou um de professor com um técnico/científico, ou dois na saúde com profissão regulamentada — sempre com compatibilidade de horários.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Administrativo",
      "tema": "Improbidade Administrativa",
      "dificuldade": "media",
      "enunciado": "Um secretário municipal de obras, por mera negligência no acompanhamento de uma prestação de contas, deixa de observar determinada formalidade legal, dando causa a prejuízo ao erário municipal, sem que se demonstre qualquer intenção de causar o dano ou de obter vantagem indevida. O Ministério Público pretende enquadrar a conduta como ato de improbidade administrativa que causa dano ao erário. Assinale a afirmativa correta, considerando a Lei nº 8.429/92 com a redação dada pela Lei nº 14.230/2021.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Configura improbidade administrativa na modalidade de dano ao erário, pois o art. 10 da Lei nº 8.429/92 continua admitindo a forma culposa para esse tipo de ato ímprobo."
        },
        {
          "letra": "B",
          "texto": "Não configura improbidade administrativa, pois, após a Lei nº 14.230/2021, todas as modalidades de improbidade (enriquecimento ilícito, dano ao erário e atentado aos princípios da administração) passaram a exigir dolo, não sendo mais admitida a conduta meramente culposa."
        },
        {
          "letra": "C",
          "texto": "Configura improbidade administrativa, pois o simples exercício da função pública que resulte em prejuízo ao erário gera responsabilidade objetiva do agente público, independentemente de dolo ou culpa."
        },
        {
          "letra": "D",
          "texto": "Não configura improbidade administrativa, mas apenas porque o secretário municipal é agente político, categoria genericamente excluída da aplicação da Lei nº 8.429/92."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "A Lei nº 14.230/2021 alterou os arts. 9º, 10 e 11 da Lei nº 8.429/92 para prever expressamente o dolo como elemento subjetivo indispensável à configuração de qualquer das três modalidades de ato de improbidade administrativa, inclusive a de dano ao erário, afastando a modalidade culposa antes admitida nesse tipo de ato.",
      "explicacaoErradas": "A alternativa A está desatualizada, pois descreve a redação anterior à Lei 14.230/2021, que admitia a modalidade culposa no art. 10. A alternativa C inventa responsabilidade objetiva, incompatível com a exigência expressa de dolo. A alternativa D generaliza de forma incorreta uma exclusão que não existe na lei: agentes políticos também se submetem à Lei de Improbidade, nos termos da jurisprudência do STF e da própria lei.",
      "pegadinha": "A pegadinha é manter na memória a redação antiga da Lei 8.429/92, que admitia culpa para o dano ao erário (art. 10), ignorando que a Lei 14.230/2021 unificou a exigência de dolo para todas as modalidades de improbidade.",
      "regraMemoria": "Depois da Lei 14.230/2021: sem dolo, não há improbidade — nem mesmo para dano ao erário.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Administrativo",
      "tema": "Improbidade Administrativa",
      "dificuldade": "dificil",
      "enunciado": "Em junho de 2014, um particular pratica conduta que induz agente público à prática de ato de improbidade administrativa causador de dano ao erário. O Ministério Público ajuíza a respectiva ação de improbidade apenas em julho de 2022. O réu alega, em sua defesa, a ocorrência de prescrição. Assinale a afirmativa correta, considerando a Lei nº 8.429/92 com a redação dada pela Lei nº 14.230/2021.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A pretensão está prescrita, pois o prazo de 8 anos previsto no art. 23 da Lei nº 8.429/92 conta-se da ocorrência do fato, tendo se esgotado em junho de 2022, antes do ajuizamento da ação em julho do mesmo ano."
        },
        {
          "letra": "B",
          "texto": "A pretensão não está prescrita, pois o prazo prescricional somente começa a correr a partir do término do exercício do cargo ou mandato do agente público responsável pelo ato."
        },
        {
          "letra": "C",
          "texto": "A pretensão é imprescritível, pois toda ação de improbidade administrativa, independentemente da modalidade de ato praticado, não se sujeita a prazo prescricional."
        },
        {
          "letra": "D",
          "texto": "A pretensão não está prescrita, pois o prazo de 8 anos somente se inicia a partir da citação válida do réu na ação de improbidade."
        }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "O art. 23 da Lei nº 8.429/92, com a redação dada pela Lei nº 14.230/2021, fixou o prazo prescricional geral de 8 anos, contado da ocorrência do fato ou, em se tratando de infração permanente, do dia em que cessou a permanência, abandonando o antigo critério vinculado ao término do exercício de mandato, cargo ou função. No caso, o prazo se esgotou em junho de 2022, antes do ajuizamento da ação em julho de 2022.",
      "explicacaoErradas": "A alternativa B reproduz a sistemática anterior à Lei 14.230/2021 (vinculada ao fim do mandato/cargo), que não mais se aplica à nova contagem do art. 23. A alternativa C confunde a pretensão sancionatória da ação de improbidade (prescritível em 8 anos) com a pretensão de ressarcimento ao erário, que a Constituição trata separadamente. A alternativa D inventa termo inicial (citação) sem previsão legal.",
      "pegadinha": "O examinador explora a mudança de paradigma trazida pela Lei 14.230/2021: antes, a contagem dependia do fim do exercício do cargo/mandato; agora, o prazo de 8 anos corre da própria ocorrência do fato (ou do fim da permanência, se for infração permanente), independentemente de o agente ainda estar ou não no exercício da função.",
      "regraMemoria": "Lei 14.230/2021: prescrição da ação de improbidade é de 8 anos contados do fato (ou do fim da permanência), e não mais do fim do mandato.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Administrativo",
      "tema": "Atos Administrativos",
      "dificuldade": "media",
      "enunciado": "A vigilância sanitária municipal, após constatar risco iminente à saúde pública em um estabelecimento comercial, determina sua interdição imediata, independentemente de prévia autorização judicial, com fundamento em lei que a autoriza a agir dessa forma em situações de urgência. Assinale a afirmativa que identifica corretamente o atributo do ato administrativo que fundamenta essa atuação.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Trata-se de presunção de legitimidade, atributo pelo qual o ato administrativo se presume verdadeiro e conforme a lei até prova em contrário, o que, por si só, autoriza sua execução material direta pela Administração."
        },
        {
          "letra": "B",
          "texto": "Trata-se de autoexecutoriedade, atributo que permite à Administração executar diretamente suas decisões, sem necessidade de prévia manifestação do Poder Judiciário, nas hipóteses expressamente previstas em lei ou que configurem medida urgente de proteção ao interesse público."
        },
        {
          "letra": "C",
          "texto": "Trata-se de imperatividade, atributo presente em todo e qualquer ato administrativo, vinculado ou discricionário, que autoriza, por si só, a Administração a empregar meios diretos de coerção material contra o particular."
        },
        {
          "letra": "D",
          "texto": "Trata-se de tipicidade, atributo segundo o qual o ato deve corresponder a figura previamente definida em lei, sendo este, isoladamente, o fundamento para a execução material imediata pela Administração."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "A autoexecutoriedade é o atributo que permite à Administração Pública executar diretamente suas próprias decisões, empregando, se necessário, meios de coerção material, sem a necessidade de prévia manifestação do Poder Judiciário, estando presente apenas quando há expressa previsão legal ou quando se trata de medida urgente indispensável à proteção do interesse público, como no caso de interdição sanitária.",
      "explicacaoErradas": "A alternativa A confunde presunção de legitimidade (que apenas inverte o ônus da prova quanto à conformidade do ato com a lei) com o poder de executá-lo materialmente sem controle judicial prévio. A alternativa C erra ao afirmar que a imperatividade, por si só e presente em todo ato, autoriza a coerção material direta — na verdade nem todo ato possui imperatividade (atos negociais, por exemplo, não a possuem) e ela não se confunde com a execução forçada. A alternativa D erra pelo mesmo motivo: a tipicidade apenas exige previsão legal da figura do ato, não se confundindo com a possibilidade de executá-lo materialmente sem intervenção judicial.",
      "pegadinha": "A pegadinha clássica é confundir os quatro atributos entre si, em especial autoexecutoriedade (executar sem precisar de ordem judicial) com imperatividade (impor obrigação unilateral a terceiros, independentemente de sua concordância, mas sem necessariamente autorizar a execução forçada direta).",
      "regraMemoria": "Imperatividade impõe; autoexecutoriedade executa sem precisar de juiz — são atributos diferentes e nem todo ato tem os dois.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Tributário",
      "tema": "Competência Tributária e Limitações ao Poder de Tributar",
      "dificuldade": "media",
      "enunciado": "Em meio a conflito armado externo envolvendo o Brasil, a União institui, por meio de lei ordinária, imposto extraordinário sobre a renda de pessoas jurídicas, cuja base de cálculo coincide com a do imposto de renda já existente, determinando sua cobrança cumulada com este último. Assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "É inconstitucional, pois a instituição de imposto extraordinário de guerra depende de lei complementar e não pode incidir sobre fato gerador já tributado por outro imposto, sob pena de bitributação vedada."
        },
        {
          "letra": "B",
          "texto": "É constitucional: na iminência ou no caso de guerra externa, a União pode instituir, por lei ordinária, impostos extraordinários compreendidos ou não em sua competência tributária, ainda que isso implique coincidência com o fato gerador de imposto já existente, devendo ser suprimidos gradativamente cessadas as causas de sua criação."
        },
        {
          "letra": "C",
          "texto": "É inconstitucional, pois a competência extraordinária da União somente autoriza a majoração de alíquotas de impostos já existentes, e não a criação de um novo imposto."
        },
        {
          "letra": "D",
          "texto": "É constitucional, mas apenas enquanto durar formalmente o estado de guerra, pois a Constituição exige a imediata supressão do tributo no dia seguinte à cessação do conflito armado, sob pena de inconstitucionalidade superveniente."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 154, II, da Constituição Federal autoriza a União a instituir, na iminência ou no caso de guerra externa, impostos extraordinários, compreendidos ou não em sua competência tributária, admitindo-se expressamente a coincidência com fato gerador de tributo já existente, como exceção à vedação ao bis in idem. A instituição se dá por lei ordinária, e os impostos devem ser suprimidos gradativamente, cessadas as causas de sua criação.",
      "explicacaoErradas": "A alternativa A erra ao exigir lei complementar (desnecessária para o imposto extraordinário de guerra) e ao vedar a coincidência de fato gerador, que é expressamente autorizada pela Constituição nesse caso excepcional. A alternativa C erra ao restringir a competência extraordinária à mera majoração de tributos existentes, quando a Constituição autoriza a criação de novo imposto. A alternativa D erra ao exigir supressão imediata; a Constituição determina supressão gradativa, e não instantânea.",
      "pegadinha": "A armadilha é confundir o regime do imposto extraordinário de guerra (lei ordinária, pode coincidir com fato gerador de outro tributo) com o do empréstimo compulsório (exige lei complementar), e também supor que a supressão do tributo, cessada a guerra, seja imediata, quando a Constituição prevê que seja gradativa.",
      "regraMemoria": "Imposto extraordinário de guerra: lei ordinária, pode repetir fato gerador de outro imposto, e sai de cena aos poucos quando a guerra acaba.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Tributário",
      "tema": "Competência Tributária e Limitações ao Poder de Tributar",
      "dificuldade": "dificil",
      "enunciado": "Lei federal publicada em 10 de novembro de determinado ano majora a alíquota do IPI incidente sobre certo produto, prevendo sua aplicação já a partir do dia seguinte à publicação. Um contribuinte alega que a majoração viola tanto o princípio da anterioridade anual quanto o da anterioridade nonagesimal. Assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O contribuinte tem razão quanto às duas anterioridades: a majoração do IPI somente pode produzir efeitos após decorridos noventa dias da publicação da lei e, cumulativamente, no exercício financeiro seguinte."
        },
        {
          "letra": "B",
          "texto": "O contribuinte não tem razão quanto à anterioridade anual, pois o IPI é exceção a essa regra, mas tem razão quanto à anterioridade nonagesimal, pois o IPI não é exceção à noventena, devendo a majoração aguardar noventa dias da publicação da lei para produzir efeitos."
        },
        {
          "letra": "C",
          "texto": "O contribuinte não tem razão em nenhum dos dois aspectos, pois o IPI é exceção tanto à anterioridade anual quanto à nonagesimal, podendo ser cobrado imediatamente após a publicação da lei que o majora."
        },
        {
          "letra": "D",
          "texto": "O contribuinte tem razão quanto à anterioridade anual, pois o IPI deve respeitar o exercício financeiro seguinte, mas não tem razão quanto à nonagesimal, da qual o IPI é expressamente excepcionado."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 150, §1º, da Constituição Federal exclui o IPI da anterioridade anual (podendo ser cobrado no mesmo exercício financeiro em que a lei for publicada), mas não o exclui da anterioridade nonagesimal, de modo que a majoração somente pode produzir efeitos após decorridos noventa dias da publicação da lei que a instituiu.",
      "explicacaoErradas": "A alternativa A erra ao exigir cumulativamente as duas anterioridades, quando o IPI está dispensado da anual. A alternativa C erra ao isentar o IPI também da noventena, quando a Constituição não o inclui entre as exceções à anterioridade nonagesimal. A alternativa D inverte as regras, atribuindo ao IPI sujeição à anterioridade anual (da qual é exceção) e exceção à nonagesimal (à qual se submete).",
      "pegadinha": "A pegadinha é achar que os tributos excepcionados da anterioridade anual (como o IPI) estão automaticamente excepcionados também da anterioridade nonagesimal — são regimes de exceção distintos e nem sempre coincidentes.",
      "regraMemoria": "IPI foge da anterioridade anual, mas não foge da noventena: precisa esperar os 90 dias mesmo assim.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Tributário",
      "tema": "Competência Tributária e Limitações ao Poder de Tributar",
      "dificuldade": "media",
      "enunciado": "Determinado Estado-membro institui, por lei ordinária estadual, uma taxa para custear serviço público específico e divisível de fiscalização ambiental, exercido no âmbito de sua competência comum. No mesmo período, o governador pretende instituir, por meio de lei complementar estadual, um novo imposto sobre grandes fortunas estaduais, não previsto na Constituição Federal. Assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Ambas as iniciativas são válidas, pois tanto a instituição de taxas quanto a de impostos residuais integram a competência comum de todos os entes federativos."
        },
        {
          "letra": "B",
          "texto": "A instituição da taxa é válida, por se inserir na competência comum dos entes federativos relativa a tributos vinculados a serviço público específico e divisível; já a instituição do imposto é inválida, pois a competência residual para a criação de novos impostos, mediante lei complementar, pertence exclusivamente à União."
        },
        {
          "letra": "C",
          "texto": "Ambas as iniciativas são inválidas, pois nem taxas nem impostos residuais podem ser instituídos por Estados-membros, sendo essa competência exclusiva da União e dos Municípios."
        },
        {
          "letra": "D",
          "texto": "A instituição da taxa é inválida, pois apenas a União pode instituir taxas vinculadas ao exercício do poder de polícia; a instituição do imposto é válida, pois a competência residual pode ser exercida por qualquer ente federativo, desde que por lei complementar."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "Taxas vinculadas ao exercício do poder de polícia ou à prestação de serviço público específico e divisível podem ser instituídas por qualquer ente federativo, no âmbito de sua competência comum (art. 145, II, CF). Já a competência residual para instituição de novos impostos, não previstos na Constituição, é privativa da União, mediante lei complementar (art. 154, I, CF), sendo vedado aos Estados-membros exercê-la.",
      "explicacaoErradas": "A alternativa A erra ao incluir a competência residual entre as competências comuns de todos os entes, quando ela é privativa da União. A alternativa C erra ao negar a possibilidade de Estados instituírem taxas, que é expressamente permitida pela Constituição. A alternativa D erra ao validar a criação do imposto residual por Estado-membro, competência exclusiva da União.",
      "pegadinha": "A pegadinha mistura dois institutos de naturezas distintas na mesma questão: taxas (competência comum, qualquer ente) e competência residual para impostos (competência privativa da União), levando o candidato a tratar ambos pela mesma lógica.",
      "regraMemoria": "Taxa: qualquer ente pode, desde que vinculada a serviço específico/divisível ou poder de polícia. Imposto novo (residual): só a União, só por lei complementar.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Tributário",
      "tema": "Obrigação Tributária e Responsabilidade Tributária",
      "dificuldade": "dificil",
      "enunciado": "Uma sociedade empresária deixa de funcionar em seu domicílio fiscal, sem comunicar o encerramento ou a mudança de endereço às autoridades competentes. Ao tentar promover a citação em execução fiscal, o oficial de justiça certifica que a empresa não mais opera no local indicado. A Fazenda Pública, sem produzir qualquer outra prova além dessa certidão, requer o redirecionamento da execução para o sócio-gerente Osvaldo, que administrava a sociedade à época dos fatos. Assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Não é possível, pois o redirecionamento da execução fiscal ao sócio-gerente exige prova inequívoca de ato praticado com excesso de poderes ou infração à lei distinto da mera cessação das atividades no endereço fiscal."
        },
        {
          "letra": "B",
          "texto": "É possível: presume-se dissolvida irregularmente a empresa que deixa de funcionar em seu domicílio fiscal sem comunicação aos órgãos competentes, o que caracteriza, por si só, infração à lei apta a legitimar o redirecionamento da execução fiscal para o sócio-gerente que administrava a sociedade à época."
        },
        {
          "letra": "C",
          "texto": "Não é possível, pois a responsabilidade pessoal do sócio-gerente prevista no art. 135 do CTN somente se aplica a tributos de natureza não tributária, como contribuições e multas administrativas."
        },
        {
          "letra": "D",
          "texto": "É possível, mas apenas se Osvaldo figurar como sócio na data da inscrição do crédito em dívida ativa, sendo irrelevante sua condição de administrador ao tempo da dissolução irregular da sociedade."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "A Súmula 435 do STJ estabelece que se presume dissolvida irregularmente a empresa que deixa de funcionar no seu domicílio fiscal sem comunicação aos órgãos competentes, o que legitima o redirecionamento da execução fiscal para o sócio-gerente, por caracterizar infração à lei nos termos do art. 135, III, do CTN, sendo essa a hipótese mais comum de responsabilização pessoal de sócios na prática.",
      "explicacaoErradas": "A alternativa A desconsidera que a própria dissolução irregular, presumida pela certidão do oficial de justiça, já é considerada infração à lei suficiente para o redirecionamento, dispensando outra prova de excesso de poderes. A alternativa C erra ao restringir indevidamente o alcance do art. 135 do CTN, que se aplica a créditos tributários em geral. A alternativa D erra ao exigir vínculo societário apenas no momento da inscrição em dívida ativa; o relevante é a condição de administrador ao tempo da ocorrência da dissolução irregular (ou do fato gerador da responsabilização), e não a mera titularidade de quotas na data da inscrição.",
      "pegadinha": "A pegadinha está em exigir, erroneamente, uma prova adicional de desvio de finalidade além da própria dissolução irregular — a jurisprudência do STJ já considera essa dissolução, por si só, infração à lei suficiente para o redirecionamento.",
      "regraMemoria": "Súmula 435 STJ: sumiu do endereço fiscal sem avisar = dissolução irregular presumida = pode redirecionar para o sócio-gerente da época.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Tributário",
      "tema": "Obrigação Tributária e Responsabilidade Tributária",
      "dificuldade": "media",
      "enunciado": "Benedito arremata, em hasta pública, um imóvel urbano sobre o qual recaem débitos de IPTU anteriores à arrematação. Ele questiona se será pessoalmente responsável por esses débitos pretéritos. Assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O arrematante responde pessoalmente pelos débitos de IPTU anteriores à arrematação, tal como ocorreria em uma compra e venda comum de imóvel sem certidão de quitação."
        },
        {
          "letra": "B",
          "texto": "Não há responsabilidade pessoal do arrematante pelos débitos tributários pretéritos, pois, no caso de arrematação em hasta pública, a sub-rogação dos créditos tributários relativos ao imóvel ocorre sobre o respectivo preço pago, e não sobre a pessoa do adquirente."
        },
        {
          "letra": "C",
          "texto": "O arrematante responde subsidiariamente pelos débitos, podendo ser acionado pelo fisco somente após o esgotamento das diligências de cobrança contra o antigo proprietário."
        },
        {
          "letra": "D",
          "texto": "Não há responsabilidade de ninguém pelos débitos tributários pretéritos, pois a arrematação em hasta pública extingue definitivamente o crédito tributário anterior, ainda que o preço arrecadado seja insuficiente para quitá-lo."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 130, parágrafo único, do CTN estabelece que, no caso de arrematação em hasta pública, a sub-rogação dos créditos tributários relativos ao imóvel ocorre sobre o respectivo preço, afastando a responsabilidade pessoal do arrematante por débitos tributários anteriores à arrematação.",
      "explicacaoErradas": "A alternativa A erra ao equiparar a arrematação em hasta pública à compra e venda comum, regime geral do caput do art. 130 (no qual o adquirente responde, salvo prova de quitação no título), ignorando a exceção expressa do parágrafo único para a hasta pública. A alternativa C inventa responsabilidade subsidiária não prevista em lei. A alternativa D erra ao afirmar extinção do crédito independentemente do valor arrecadado; a sub-rogação se opera sobre o preço, nos limites deste.",
      "pegadinha": "A pegadinha é não diferenciar a regra geral de aquisição de imóveis (regra do caput do art. 130, em que o adquirente responde, salvo prova de quitação) da regra específica da arrematação em hasta pública (parágrafo único, em que a sub-rogação recai sobre o preço, e não sobre a pessoa do arrematante).",
      "regraMemoria": "Comprou em hasta pública: dívida de IPTU vai para o preço pago, não para o bolso do arrematante.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Tributário",
      "tema": "Obrigação Tributária e Responsabilidade Tributária",
      "dificuldade": "media",
      "enunciado": "Um adolescente de 16 anos, que exerce atividade remunerada de forma informal, aufere renda tributável sem possuir inscrição regularizada perante o fisco para essa atividade. Ao ser questionado sobre o recolhimento do tributo devido, alega que não poderia figurar como sujeito passivo de obrigação tributária por ser relativamente incapaz para os atos da vida civil. Assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Assiste razão ao adolescente, pois a capacidade tributária passiva pressupõe a plena capacidade civil, de modo que incapazes não podem ser sujeitos passivos de obrigação tributária."
        },
        {
          "letra": "B",
          "texto": "Não assiste razão ao adolescente: a capacidade tributária passiva independe da capacidade civil das pessoas naturais, de modo que mesmo os relativamente ou absolutamente incapazes podem figurar como sujeitos passivos de obrigações tributárias."
        },
        {
          "letra": "C",
          "texto": "Assiste razão ao adolescente apenas quanto às obrigações tributárias principais, podendo, todavia, ser responsabilizado por obrigações acessórias, já que estas não exigem capacidade civil."
        },
        {
          "letra": "D",
          "texto": "Não assiste razão ao adolescente, mas apenas porque toda pessoa que exerce atividade remunerada, ainda que informalmente, adquire capacidade civil plena para todos os efeitos, inclusive tributários."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 126, I, do CTN estabelece que a capacidade tributária passiva independe da capacidade civil das pessoas naturais, de modo que a incapacidade civil, relativa ou absoluta, não impede que a pessoa figure como sujeito passivo de obrigação tributária, principal ou acessória.",
      "explicacaoErradas": "A alternativa A inverte a regra legal, que justamente dissocia capacidade tributária passiva de capacidade civil. A alternativa C erra ao restringir a independência apenas às obrigações acessórias, quando o art. 126, I, do CTN abrange a capacidade tributária passiva de forma geral, sem distinguir obrigação principal de acessória. A alternativa D cria fundamento falso (capacidade civil plena pelo trabalho), que não corresponde à razão correta (irrelevância da capacidade civil para fins tributários).",
      "pegadinha": "A pegadinha é importar, para o direito tributário, institutos próprios da capacidade civil (como a incapacidade relativa de menores), quando o CTN expressamente desvincula a capacidade tributária passiva da capacidade civil da pessoa natural.",
      "regraMemoria": "No direito tributário, até incapaz pode ser sujeito passivo: capacidade tributária passiva não depende de capacidade civil.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Tributário",
      "tema": "Espécies Tributárias",
      "dificuldade": "media",
      "enunciado": "O Município de Campo Alegre realiza obra de pavimentação asfáltica em determinado bairro, da qual decorre valorização imobiliária para os imóveis lindeiros. Pretendendo cobrar contribuição de melhoria de Jurandir, proprietário de um dos imóveis beneficiados, o fisco municipal fixa valor superior ao efetivo acréscimo de valor que a obra agregou ao imóvel dele, ainda que o total arrecadado de todos os contribuintes não ultrapasse o custo total da obra. Assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "É legítima, pois o único limite imposto pelo CTN à contribuição de melhoria é o custo total da obra, podendo a cobrança individual variar livremente desde que a arrecadação total não exceda esse valor."
        },
        {
          "letra": "B",
          "texto": "É ilegítima, pois o CTN estabelece, como limite individual da contribuição de melhoria, o acréscimo de valor que da obra resultar para cada imóvel beneficiado, não podendo a cobrança de um contribuinte específico superar a valorização por ele efetivamente experimentada, ainda que o limite total da obra não seja ultrapassado."
        },
        {
          "letra": "C",
          "texto": "É legítima, pois a contribuição de melhoria, por ser um imposto, pode ser cobrada independentemente de qualquer relação com a valorização individual do imóvel, bastando a comprovação da realização da obra pública."
        },
        {
          "letra": "D",
          "texto": "É ilegítima, mas apenas porque contribuições de melhoria somente podem ser instituídas pela União, e não pelos Municípios."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 81 do CTN estabelece dois limites cumulativos para a contribuição de melhoria: o limite total, correspondente à despesa realizada com a obra, e o limite individual, correspondente ao acréscimo de valor que da obra resultar para cada imóvel beneficiado. A cobrança de valor superior à valorização individual experimentada pelo contribuinte é ilegítima, ainda que o total arrecadado respeite o limite geral do custo da obra.",
      "explicacaoErradas": "A alternativa A ignora o limite individual, tratando apenas do limite total como se fosse o único parâmetro legal. A alternativa C erra ao classificar a contribuição de melhoria como imposto, quando se trata de espécie tributária vinculada e autônoma, com fato gerador atrelado à valorização imobiliária decorrente de obra pública. A alternativa D erra ao negar competência municipal, que é plenamente admitida, já que qualquer ente federativo que realize a obra pública valorizadora pode instituir a contribuição de melhoria correspondente.",
      "pegadinha": "A pegadinha é lembrar apenas do limite total (custo da obra) e esquecer do limite individual (valorização específica de cada imóvel), que também deve ser respeitado, nos termos do art. 81 do CTN.",
      "regraMemoria": "Contribuição de melhoria tem dois limites: total (custo da obra) e individual (valorização de cada imóvel) — os dois valem ao mesmo tempo.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Tributário",
      "tema": "Espécies Tributárias",
      "dificuldade": "media",
      "enunciado": "Determinado Município institui, por lei ordinária municipal, contribuição previdenciária a ser descontada da remuneração de seus servidores efetivos, destinada ao custeio do respectivo regime próprio de previdência social, fixando alíquota inferior àquela cobrada dos servidores titulares de cargos efetivos da União pelo regime próprio federal. Assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "É válida, pois os Municípios têm autonomia federativa plena para fixar livremente a alíquota da contribuição previdenciária de seus servidores, sem qualquer vinculação a parâmetros federais."
        },
        {
          "letra": "B",
          "texto": "É inválida: embora os Municípios tenham competência para instituir, por lei, a contribuição previdenciária de custeio do regime próprio de seus servidores, a Constituição exige que a alíquota cobrada não seja inferior à da contribuição exigida dos servidores titulares de cargos efetivos da União."
        },
        {
          "letra": "C",
          "texto": "É inválida, mas apenas porque contribuições previdenciárias de regime próprio somente podem ser instituídas pela União, sendo vedada sua instituição por Estados, Distrito Federal e Municípios."
        },
        {
          "letra": "D",
          "texto": "É válida, pois a contribuição previdenciária não tem natureza tributária, não se submetendo às limitações constitucionais ao poder de tributar nem a parâmetros mínimos de alíquota."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "A contribuição previdenciária tem natureza jurídica tributária, submetendo-se aos princípios da legalidade e da anterioridade. A Constituição Federal determina que Estados, Distrito Federal e Municípios instituam, por lei, contribuição cobrada de seus servidores para custeio do regime próprio de previdência social, cuja alíquota não poderá ser inferior à da contribuição exigida dos servidores titulares de cargos efetivos da União.",
      "explicacaoErradas": "A alternativa A ignora o parâmetro mínimo de alíquota constitucionalmente estabelecido. A alternativa C nega, equivocadamente, a competência de Estados, Distrito Federal e Municípios para instituir contribuição previdenciária de regime próprio, quando a Constituição expressamente a prevê para esses entes. A alternativa D erra ao negar a natureza tributária da contribuição previdenciária, pacificamente reconhecida.",
      "pegadinha": "A pegadinha é supor que a autonomia federativa dos Municípios para instituir seus próprios tributos é absoluta, ignorando o parâmetro mínimo de alíquota fixado constitucionalmente em relação à contribuição previdenciária dos regimes próprios.",
      "regraMemoria": "Contribuição previdenciária de regime próprio estadual/distrital/municipal não pode ter alíquota menor que a da União.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Tributário",
      "tema": "Processo Tributário e Execução Fiscal",
      "dificuldade": "media",
      "enunciado": "Em execução fiscal, o executado, sem ter oferecido penhora, depósito ou fiança bancária, apresenta simples petição arguindo a prescrição do crédito tributário exequendo, matéria cognoscível de ofício e comprovável de plano pelos próprios documentos já constantes dos autos. Assinale a afirmativa correta quanto ao instrumento processual cabível.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Não é cabível qualquer defesa sem garantia do juízo, pois toda manifestação do executado em execução fiscal, seja qual for a matéria alegada, depende de prévia penhora, depósito ou fiança bancária."
        },
        {
          "letra": "B",
          "texto": "É cabível por meio de exceção de pré-executividade, construção pretoriana que dispensa a garantia do juízo quando a matéria alegada for de ordem pública, cognoscível de ofício, e comprovável de plano, sem necessidade de dilação probatória."
        },
        {
          "letra": "C",
          "texto": "É cabível, mas apenas por meio de embargos à execução fiscal, instrumento que, segundo a Lei nº 6.830/80, pode ser oposto independentemente de garantia do juízo quando a matéria for de ordem pública."
        },
        {
          "letra": "D",
          "texto": "Não é cabível no bojo da execução fiscal, pois a prescrição do crédito tributário, por envolver matéria de mérito, somente pode ser arguida em ação anulatória autônoma."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "A exceção de pré-executividade é construção pretoriana, consolidada pela Súmula 393 do STJ, que permite ao executado apresentar defesa nos próprios autos da execução fiscal, independentemente de garantia do juízo, desde que a matéria alegada seja de ordem pública, cognoscível de ofício pelo juiz, e comprovável de plano, sem necessidade de dilação probatória — hipótese compatível com a prescrição demonstrável pelos documentos já existentes nos autos.",
      "explicacaoErradas": "A alternativa A ignora a construção jurisprudencial da exceção de pré-executividade. A alternativa C erra ao atribuir aos embargos a dispensa de garantia do juízo; ao contrário, a Lei nº 6.830/80 condiciona os embargos à prévia garantia da execução (depósito, fiança ou penhora). A alternativa D erra ao negar a possibilidade de arguir prescrição nos próprios autos da execução, quando a jurisprudência admite isso justamente pela via da exceção de pré-executividade.",
      "pegadinha": "A pegadinha é confundir exceção de pré-executividade (dispensa garantia, mas só para matérias de ordem pública comprováveis de plano) com embargos à execução (exigem garantia do juízo, mas comportam ampla cognição e dilação probatória).",
      "regraMemoria": "Sem garantir o juízo: só exceção de pré-executividade, e só para matéria de ordem pública provável de plano.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Tributário",
      "tema": "Processo Tributário e Execução Fiscal",
      "dificuldade": "media",
      "enunciado": "Em execução fiscal, determinados bens do executado são penhorados, e ele é pessoalmente intimado dessa penhora no dia 2 de maio. Pretendendo impugnar a cobrança, o executado consulta seu advogado sobre o prazo e o termo inicial para a oposição de embargos à execução fiscal. Assinale a afirmativa correta, à luz da Lei nº 6.830/80.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "O prazo é de 15 dias, contado da juntada aos autos do mandado de penhora devidamente cumprido, por aplicação subsidiária do Código de Processo Civil."
        },
        {
          "letra": "B",
          "texto": "O prazo é de 30 dias, contado da intimação pessoal da penhora, nos termos do art. 16 da Lei nº 6.830/80."
        },
        {
          "letra": "C",
          "texto": "O prazo é de 30 dias, contado da data em que a penhora foi efetivamente realizada, independentemente de quando o executado tenha sido dela intimado."
        },
        {
          "letra": "D",
          "texto": "O prazo é de 5 dias, equivalente ao prazo de citação para pagamento ou garantia da execução fiscal, por força do princípio da simetria processual."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 16, III, da Lei nº 6.830/80 estabelece que o executado oferecerá embargos no prazo de 30 dias, contado, entre outras hipóteses, da intimação da penhora, sendo esse o termo inicial aplicável ao caso narrado, em que há intimação pessoal da constrição.",
      "explicacaoErradas": "A alternativa A erra o prazo (15 dias) e o termo inicial (juntada do mandado), que não se aplicam à execução fiscal regida pela Lei nº 6.830/80, lei especial que prevalece sobre a aplicação subsidiária genérica do CPC nesse ponto. A alternativa C erra ao desconsiderar a necessidade de intimação do executado como termo inicial do prazo. A alternativa D confunde o prazo de embargos com o prazo de citação para pagamento ou garantia da execução.",
      "pegadinha": "A pegadinha é importar, por analogia com o processo civil comum, prazos e termos iniciais diversos dos estabelecidos pela lei especial de execução fiscal, que tem regramento próprio quanto ao prazo (30 dias) e ao termo inicial (intimação da penhora, entre outras hipóteses do art. 16).",
      "regraMemoria": "Execução fiscal: embargos em 30 dias, contados da intimação da penhora (ou do depósito, ou da juntada da garantia).",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Tributário",
      "tema": "Crédito Tributário",
      "dificuldade": "dificil",
      "enunciado": "Um contribuinte declara e paga antecipadamente, em valor a menor, certo tributo sujeito a lançamento por homologação, relativo a fato gerador ocorrido em 10 de março de 2019. O fisco, em auditoria realizada somente em maio de 2024, pretende lançar de ofício a diferença entre o valor pago e o valor que entende efetivamente devido, sem que haja indício de dolo, fraude ou simulação por parte do contribuinte. Assinale a afirmativa correta quanto à decadência.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Não há decadência, pois, havendo pagamento antecipado, ainda que a menor, o prazo decadencial de 5 anos somente começa a correr a partir do primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado, nos termos do art. 173, I, do CTN."
        },
        {
          "letra": "B",
          "texto": "Há decadência: tratando-se de tributo sujeito a lançamento por homologação com pagamento antecipado, o prazo decadencial de 5 anos conta-se da data da ocorrência do fato gerador, nos termos do art. 150, §4º, do CTN, de modo que, salvo dolo, fraude ou simulação, o prazo já havia se esgotado quando da auditoria."
        },
        {
          "letra": "C",
          "texto": "Não há decadência, pois, uma vez efetuado o pagamento pelo contribuinte, ainda que a menor, opera-se a homologação tácita imediata, tornando o crédito tributário definitivamente extinto, sem possibilidade de revisão pelo fisco em qualquer hipótese."
        },
        {
          "letra": "D",
          "texto": "Há decadência, mas o prazo aplicável é de 10 anos, pois o pagamento parcial do tributo declarado equivale, para fins de contagem decadencial, a tributo sujeito a lançamento de ofício."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "Nos tributos sujeitos a lançamento por homologação em que há pagamento antecipado pelo contribuinte, ainda que a menor, aplica-se a regra específica do art. 150, §4º, do CTN, segundo a qual o prazo decadencial de 5 anos para o fisco homologar (expressa ou tacitamente) o pagamento, ou lançar de ofício eventual diferença, conta-se da data da ocorrência do fato gerador. No caso, o prazo se esgotou em 10 de março de 2024, antes da auditoria realizada em maio de 2024, não havendo indício de dolo, fraude ou simulação que afastasse essa regra.",
      "explicacaoErradas": "A alternativa A aplica a regra do art. 173, I, do CTN, cabível apenas quando não há pagamento antecipado algum (situação diversa da narrada). A alternativa C exagera o efeito do pagamento parcial, que não impede a revisão do fisco dentro do prazo decadencial, apenas limita o período para tanto. A alternativa D inventa prazo de 10 anos, inexistente no CTN para essa hipótese.",
      "pegadinha": "A pegadinha clássica é aplicar a regra do art. 173, I (primeiro dia do exercício seguinte), que vale para a ausência de pagamento, ao invés da regra específica do art. 150, §4º (data do fato gerador), aplicável quando há antecipação de pagamento, ainda que insuficiente.",
      "regraMemoria": "Pagou antecipado (mesmo que a menor) em tributo por homologação: decadência conta do fato gerador (art. 150, §4º). Não pagou nada: conta do exercício seguinte (art. 173, I).",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Tributário",
      "tema": "Crédito Tributário",
      "dificuldade": "dificil",
      "enunciado": "Um crédito tributário é definitivamente constituído em 15 de janeiro de 2018, após lançamento não impugnado pelo contribuinte. A Fazenda Pública ajuíza a execução fiscal correspondente em dezembro de 2022, e o juiz profere o despacho que ordena a citação do executado somente em fevereiro de 2023, em razão do volume de processos em tramitação na vara. Assinale a afirmativa correta quanto à prescrição.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Há prescrição, pois o despacho que ordena a citação somente interrompe a prescrição se proferido antes do término do prazo de 5 anos contado da constituição definitiva do crédito, o que não ocorreu, já que o despacho é de fevereiro de 2023."
        },
        {
          "letra": "B",
          "texto": "Não há prescrição: a execução fiscal foi ajuizada dentro do prazo de 5 anos contado da constituição definitiva do crédito, e o despacho que ordena a citação, ainda que proferido após o transcurso do prazo, retroage à data do ajuizamento da ação para fins de interrupção da prescrição, não podendo a demora inerente aos mecanismos da justiça prejudicar o exequente diligente."
        },
        {
          "letra": "C",
          "texto": "Há prescrição, pois somente a efetiva citação pessoal do executado, e não o despacho judicial que a ordena, tem o condão de interromper o prazo prescricional do crédito tributário."
        },
        {
          "letra": "D",
          "texto": "Não há prescrição, mas apenas porque o prazo prescricional de créditos tributários é de 10 anos, e não de 5 anos, contado da constituição definitiva do crédito."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "O art. 174 do CTN fixa o prazo prescricional de 5 anos, contado da constituição definitiva do crédito tributário (15 de janeiro de 2018, esgotando-se em 15 de janeiro de 2023). A execução fiscal foi ajuizada em dezembro de 2022, dentro do prazo. O despacho que ordena a citação interrompe a prescrição (art. 174, parágrafo único, I, do CTN) e, por entendimento consolidado, retroage à data do ajuizamento da ação quando a demora na sua prolação decorrer de mecanismos inerentes à máquina judiciária, não podendo prejudicar o exequente que agiu diligentemente (lógica da Súmula 106 do STJ).",
      "explicacaoErradas": "A alternativa A desconsidera a retroatividade do despacho citatório à data do ajuizamento, quando a demora não é imputável ao exequente. A alternativa C erra ao negar o efeito interruptivo do despacho judicial, que a própria lei atribui a ele, e não apenas à citação pessoal. A alternativa D inventa prazo de 10 anos, inexistente para a prescrição do crédito tributário, que é de 5 anos.",
      "pegadinha": "A pegadinha é achar que a demora do Judiciário em expedir o despacho citatório, após o ajuizamento tempestivo da execução, acarreta automaticamente a prescrição, ignorando a regra de que essa demora, quando imputável aos mecanismos da justiça, não prejudica o exequente diligente.",
      "regraMemoria": "Ajuizou a execução dentro do prazo? A demora do cartório/juiz para despachar a citação não conta contra o fisco.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Tributário",
      "tema": "Impostos em Espécie",
      "dificuldade": "media",
      "enunciado": "Uma empresa transfere mercadorias de seu estabelecimento matriz, localizado em um Estado, para uma filial sua, localizada em outro Estado, sem qualquer alteração de titularidade sobre os bens. O fisco do Estado de origem exige o recolhimento de ICMS sobre essa operação de transferência. Assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "A exigência é correta, pois o ICMS incide sobre a simples circulação física de mercadorias, ainda que não haja mudança de titularidade, bastando o deslocamento entre unidades federadas distintas."
        },
        {
          "letra": "B",
          "texto": "A exigência é incorreta: o simples deslocamento de mercadoria entre estabelecimentos do mesmo contribuinte não constitui fato gerador do ICMS, por inexistir ato de mercancia ou transferência de titularidade, conforme pacificado pela Súmula 166 do STJ e confirmado pelo STF."
        },
        {
          "letra": "C",
          "texto": "A exigência é correta, mas somente quando a transferência ocorrer entre estados distintos, sendo a operação efetivamente tributada quando os estabelecimentos estiverem localizados no mesmo estado."
        },
        {
          "letra": "D",
          "texto": "A exigência é incorreta, mas apenas porque o ICMS, nessa hipótese, seria devido ao estado de destino da mercadoria, e não ao estado de origem, não havendo, portanto, isenção da operação."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "A Súmula 166 do STJ dispõe que não constitui fato gerador do ICMS o simples deslocamento de mercadoria de um para outro estabelecimento do mesmo contribuinte, entendimento confirmado pelo STF, inclusive para transferências interestaduais, por inexistir ato de mercancia ou transferência de titularidade sobre o bem.",
      "explicacaoErradas": "A alternativa A ignora a exigência de circulação jurídica (mudança de titularidade) para a incidência do ICMS, contentando-se com a mera circulação física. A alternativa C inverte a lógica: a não incidência vale tanto para transferências interestaduais quanto para transferências dentro do mesmo estado, pois o fundamento (ausência de mudança de titularidade) é o mesmo em ambos os casos. A alternativa D erra ao afirmar que o imposto seria devido ao estado de destino; na verdade, não há tributação da operação em si, podendo, no entanto, haver transferência de créditos entre os estabelecimentos.",
      "pegadinha": "A pegadinha é confundir circulação física (mero deslocamento) com circulação jurídica (mudança de titularidade), sendo esta última o elemento material indispensável à incidência do ICMS, conforme pacificado pela jurisprudência.",
      "regraMemoria": "Súmula 166 STJ: transferência entre estabelecimentos do mesmo dono não é fato gerador de ICMS, nem entre estados.",
      "seedVersion": 2
    },
    {
      "territorio": "Direito Tributário",
      "tema": "Imunidades Tributárias",
      "dificuldade": "dificil",
      "enunciado": "Uma entidade de assistência social sem fins lucrativos, que atende a todos os requisitos legais para gozo de imunidade, aluga parte de um imóvel de sua propriedade a um terceiro, que ali instala uma loja comercial. Os valores recebidos a título de aluguel são integralmente revertidos para a manutenção de abrigo destinado a pessoas em situação de vulnerabilidade, finalidade essencial da entidade. O fisco municipal pretende cobrar IPTU sobre esse imóvel alugado, sob o argumento de que a locação comercial descaracteriza a imunidade. Assinale a afirmativa correta.",
      "alternativas": [
        {
          "letra": "A",
          "texto": "Não está abrangido pela imunidade, pois a locação do imóvel a terceiro para fins comerciais descaracteriza, de forma automática e definitiva, a destinação do bem às finalidades essenciais da entidade."
        },
        {
          "letra": "B",
          "texto": "Está abrangido pela imunidade, pois, segundo entendimento pacificado pelo STF, o fato de o imóvel pertencente a entidade assistencial imune estar alugado a terceiros não afasta a imunidade tributária, desde que o valor dos aluguéis seja aplicado nas atividades essenciais da entidade."
        },
        {
          "letra": "C",
          "texto": "Não está abrangido pela imunidade, pois esta somente alcança os imóveis onde a entidade exerce diretamente suas atividades-fim, sendo irrelevante a destinação dada à renda obtida com a locação de outros imóveis."
        },
        {
          "letra": "D",
          "texto": "Está abrangido pela imunidade, mas apenas quanto à metade do valor do imposto, devendo a outra metade ser recolhida proporcionalmente à área do imóvel destinada à locação comercial."
        }
      ],
      "respostaCorreta": 1,
      "explicacaoCorreta": "A Súmula Vinculante 52 do STF dispõe que, ainda quando alugado a terceiros, permanece imune ao IPTU o imóvel pertencente a entidade de que trata o art. 150, VI, 'c', da Constituição Federal, desde que o valor dos aluguéis seja aplicado nas atividades essenciais de tais entidades, não se exigindo afetação direta e exclusiva do próprio imóvel à atividade-fim.",
      "explicacaoErradas": "A alternativa A desconsidera a jurisprudência pacífica do STF, que não vincula a imunidade à destinação direta e exclusiva do imóvel, mas sim à destinação da renda obtida. A alternativa C comete o mesmo equívoco, exigindo afetação direta do imóvel às atividades-fim. A alternativa D inventa fracionamento do benefício (metade do imposto) sem qualquer previsão legal ou jurisprudencial.",
      "pegadinha": "A pegadinha é supor que a imunidade exige que o próprio imóvel esteja diretamente afetado à atividade essencial da entidade, quando, na verdade, o STF admite a locação a terceiros, desde que a renda obtida seja revertida às finalidades essenciais.",
      "regraMemoria": "Súmula Vinculante 52: imóvel de entidade imune alugado a terceiro continua imune, se a renda do aluguel for usada na atividade essencial.",
      "seedVersion": 2
    }
  ];

  function atualizarConteudoPedagogico() {
    return DB.getAll('questionario').then(function (existentes) {
      var porChave = {};
      existentes.forEach(function (r) {
        porChave[r.provaOrigem + '::' + r.enunciado] = r;
      });

      var atualizacoes = [];
      QUESTOES.forEach(function (q) {
        var existente = porChave[PROVA_ORIGEM + '::' + q.enunciado];
        if (!existente) return;
        var mudou = false;

        var explicacaoManual = existente.explicacaoManual || {};
        if (typeof explicacaoManual.explicacaoCorreta !== 'string' &&
            q.explicacaoCorreta && q.explicacaoCorreta !== existente.explicacaoCorreta) {
          existente.explicacaoCorreta = q.explicacaoCorreta;
          mudou = true;
        }
        if (typeof explicacaoManual.explicacaoErradas !== 'string' &&
            q.explicacaoErradas && q.explicacaoErradas !== existente.explicacaoErradas) {
          existente.explicacaoErradas = q.explicacaoErradas;
          mudou = true;
        }
        if (q.pegadinha && q.pegadinha !== existente.pegadinha) {
          existente.pegadinha = q.pegadinha;
          mudou = true;
        }
        if (q.regraMemoria && q.regraMemoria !== existente.regraMemoria) {
          existente.regraMemoria = q.regraMemoria;
          mudou = true;
        }
        if (q.tema && q.tema !== existente.tema) {
          existente.tema = q.tema;
          mudou = true;
        }
        if (!existente.correcaoManual && typeof q.respostaCorreta === 'number' && q.respostaCorreta !== existente.respostaCorreta) {
          existente.respostaCorreta = q.respostaCorreta;
          mudou = true;
        }
        if (mudou) atualizacoes.push(DB.put('questionario', existente));
      });

      // Remove questões que saíram da lista (ex.: substituídas por ficarem
      // desatualizadas ou por pedido do usuário).
      var chavesValidas = {};
      QUESTOES.forEach(function (q) {
        chavesValidas[PROVA_ORIGEM + '::' + q.enunciado] = true;
      });
      existentes.forEach(function (r) {
        var chave = r.provaOrigem + '::' + r.enunciado;
        if (!chavesValidas[chave]) atualizacoes.push(DB.remove('questionario', r.id));
      });

      return Promise.all(atualizacoes);
    });
  }

  function seedar() {
    var versaoAplicada = Storage.read(Storage.KEYS.questionarioSeedVersion, 0);
    if (versaoAplicada >= SEED_VERSION_ATUAL) return Promise.resolve();

    return DB.getAll('disciplinas').then(function (disciplinas) {
      var idPorNome = {};
      disciplinas.forEach(function (d) { idPorNome[d.nome] = d.id; });

      var pendentes = [];
      QUESTOES.forEach(function (q) {
        if (q.seedVersion <= versaoAplicada) return;
        var disciplinaId = idPorNome[q.territorio];
        if (!disciplinaId) return;
        pendentes.push(DB.put('questionario', {
          id: Storage.makeId(),
          disciplinaId: disciplinaId,
          provaOrigem: PROVA_ORIGEM,
          tema: q.tema || '',
          dificuldade: q.dificuldade || 'media',
          enunciado: q.enunciado,
          alternativas: q.alternativas,
          respostaCorreta: q.respostaCorreta,
          explicacaoCorreta: q.explicacaoCorreta || '',
          explicacaoErradas: q.explicacaoErradas || '',
          pegadinha: q.pegadinha || '',
          regraMemoria: q.regraMemoria || '',
          casoAbsurdo: ''
        }));
      });

      return Promise.all(pendentes).then(function () {
        return atualizarConteudoPedagogico();
      }).then(function () {
        Storage.write(Storage.KEYS.questionarioSeedVersion, SEED_VERSION_ATUAL);
      });
    });
  }

  return { seedar: seedar };
})();
