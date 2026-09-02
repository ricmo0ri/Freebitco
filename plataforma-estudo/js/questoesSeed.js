// Banco de questões pré-carregado, extraído e classificado por matéria a
// partir de provas oficiais da OAB (prova + gabarito). Assim que a questão
// tem um território, ela já entra automaticamente no jogo inteiro: missões,
// chefões por tema, XP/combo e estatística de fraquezas — não é um passo à
// parte, é como o motor de questões já funciona pra qualquer questão.
var QuestoesSeed = (function () {
  var SEED_VERSION_ATUAL = 2;

  var PROVAS = [
    {
      provaOrigem: '46º Exame de Ordem Unificado',
      questoes: [
        {
          "territorio": "Ética",
          "enunciado": "Paloma, advogada gestante, compareceu ao Fórum da Comarca de Itaporanga, PB, para participar de uma audiência. Ao tentar estacionar no local, foi impedida de acessar a garagem sob a justificativa de que não havia vagas reservadas para gestantes. Além disso , foi obrigada a passar por um detector de metais, mesmo tendo informado de sua condição de gestante. Indignada, Paloma buscou esclarecer os seus direitos. Sobre a hipótese narrada, com base no Estatuto da OAB, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Paloma, por ser advogada gestante, tem o direito de não ser submetida a detectores de metais, mas o estacionamento exclusivo só é garantido em Tribunais e Fóruns Federais, não nos Fóruns Estaduais."
            },
            {
              "letra": "B",
              "texto": "Os direitos de Paloma, como o de não ser submetida aos detectores de metais e à reserva de vagas, são aplicáveis apenas em Tribunais Superiores, e não se estendem a Fóruns de Comarcas Estaduais."
            },
            {
              "letra": "C",
              "texto": "Paloma, por ser advogada gestante, tem o direito de entrar em Fóruns e Tribunais sem ser submetida a detectores de metais e tem direito à reserva de vagas nas garagens dos Fóruns dos Tribunais."
            },
            {
              "letra": "D",
              "texto": "Paloma tem o direito de entrada no Fórum sem ser submetida a detectores de metais, mas o direito à reserva de vagas em garagens para gestantes é uma mera liberalidade do Tribunal e não é garantido por lei."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Ética",
          "enunciado": "Danilo, procurador de carreira, foi nomeado Procurador -Geral de sua instituição. Antes de assumir a Procuradoria -Geral do Estado, ele patrocinava várias causas trabalhistas contra empresas privadas e causas tributárias. Agora, Danilo está em dúvida se poderá continuar advogando nessas ações. Sobre a hipótese apresentada, com base nas disposições do Estatuto da OAB sobre incompatibilidades e impedimentos, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Danilo está impedido de atuar em causas trabalhistas e tributárias contra a Fazenda Pública que o remunera, mas pode continuar patrocinando as causas contra empresas privadas."
            },
            {
              "letra": "B",
              "texto": "Danilo poderá continuar patrocinando suas causas trabalhistas e tributárias, pois o cargo de Procurador -Geral do Estado não gera incompatibilidade ou impedimento para advogar em questões privadas."
            },
            {
              "letra": "C",
              "texto": "Danilo poderá continuar patrocinando as causas tributárias, mas não as trabalhistas, pois apenas as causas tributárias contra a Fazenda Pública estão abrangidas pelo impedimento previsto no Estatuto da OAB."
            },
            {
              "letra": "D",
              "texto": "Danilo não poderá continuar patrocinando suas causas trabalhistas e tributárias, pois o cargo de Procurador-Geral do Estado obsta o exercício da advocacia desvinculado da função que exerce, durante o período da investidura."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Ética",
          "enunciado": "Alfredo é graduado em Direito pela Universidade Beta, mas não foi aprovado no Exame da Ordem dos Advogados do Brasil (OAB). Durante a graduação, Alfredo não teve a oportunidade de estagiar em um escritório de advocacia. Recentemente, após já estar formado, surgiu a oportunidade de estagiar em um escritório credenciado pelo Conselho Seccional da OAB. Ele deseja saber se pode participar do estágio profissional de advocacia mesmo após a conclusão de seu curso e se seria possível inscrever-se no quadro de estagiários da OAB. Sobre a hipótese, com base no disposto no Art. 9º do Estatuto da Advocacia e da OAB, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Alfredo não pode participar de estágio de advocacia, pois o estágio só é permitido para estudantes de Direito que ainda estejam cursando os últimos anos do curso jurídico."
            },
            {
              "letra": "B",
              "texto": "Alfredo pode se inscrever no quadro de estagiários da OAB, mas somente se concluir o estágio profissional em uma instituição de ensino superior, e não em escritório credenciado pelo Conselho Seccional da OAB."
            },
            {
              "letra": "C",
              "texto": "Alfredo pode participar do estágio profissional de advocacia e inscrever-se como estagiário da OAB, mesmo após a conclusão do curso, desde que o estágio seja realizado em escritório credenciado pela OAB."
            },
            {
              "letra": "D",
              "texto": "Alfredo pode participar do estágio profissional, mas não poderá inscrever-se no quadro de estagiários da OAB, pois já concluiu a graduação em Direito e apenas alunos ainda cursando o ensino jurídico podem obter essa inscrição."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Ética",
          "enunciado": "Os advogados Eduardo e Diogo são sócios de uma sociedade profissional de advogados, cujos atos constitutivos foram devidamente registrados e aprovados pelo Conselho Seccional da OAB na base territorial em que está localizada a sua sede. No entanto, Eduardo foi contratado por Afonso para representá - lo em uma ação de alimentos movida por sua esposa Dalila, e Diogo foi contratado por Dalila para representá-la na mesma ação. Os advogados desejam saber se podem continuar com essas representações, tendo em vista que são sócios da mesma sociedade de advogados. Sobre o caso narrado, com base no Art. 15 do Estatuto da Advocacia e da OAB, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Eduardo e Diogo não podem representar, em juízo, clientes com interesses opostos, por serem sócios da mesma sociedade de advogados."
            },
            {
              "letra": "B",
              "texto": "Eduardo e Diogo podem representar Afonso e Dalila em juízo, desde que firmem compromisso por escrito de que não haverá conflito de interesse entre os dois advogados."
            },
            {
              "letra": "C",
              "texto": "Eduardo e Diogo podem continuar com as respectivas representações de Afonso e Dalila, desde que informem previamente ao Juiz que ambos fazem parte da mesma sociedade."
            },
            {
              "letra": "D",
              "texto": "Eduardo e Diogo podem continuar com as representações, desde que cada um atue de forma independente dentro da sociedade de advogados, contando com corpo auxiliar próprio."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Ética",
          "enunciado": "Mateus, advogado regularmente inscrito na OAB, contratou Marcos, profissional da área de vendas, para abordar pessoas nas imediações da agência do Instituto Nacional do Seguro Social da sua cidade, visando à captação de causas previdenciárias. Foi acertado que Marcos teria participação nos honorários advocatícios das causas que conseguisse agenciar. Constatados os fatos, e após o devido processo administrativo disciplinar, o Tribunal de Ética e Disciplina do Conselho Seccional competente aplicou a pena de censura a Mateus. Considerando o enunciado e o Estatuto da Advocacia e da OAB, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Havendo circunstâncias atenuantes, será possível substituir a sanção de censura pela aplicação isolada de multa."
            },
            {
              "letra": "B",
              "texto": "Transitada em julgado a decisão, a sanção aplicada a Mateus deverá constar dos seus assentamentos, dando -se ampla publicidade nos meios oficiais."
            },
            {
              "letra": "C",
              "texto": "A gravidade da conduta infracional de Mateus não permite a conversão da pena de censura em advertência, ainda que verificada a ausência de punição disciplinar anterior."
            },
            {
              "letra": "D",
              "texto": "A circunstância de Mateus exercer de modo assíduo e proficiente mandato em cargo ou qualquer órgão da OAB, caso comprovada, deverá ser considerada pelo Tribunal na aplicação da sanção disciplinar."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Ética",
          "enunciado": "Abelardo é contratado para representar o milionário Everardo em uma causa cível de importante vulto. Ficou combinado que, em caso de êxito, Abelardo fará jus a uma joia de elevadíssimo valor, a título de honorários. Sucede que, depois de ganhar a causa, Everardo sofreu revés na justiça criminal, quando uma decisão judicial determinou o bloqueio de todo o seu patrimônio pela suspeita de crimes financeiros. Nesse caso, à luz do Estatuto da Ordem dos Advogados do Brasil e do Código de Ética e Disciplina, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Abelardo poderá requerer ao Juiz Criminal o desbloqueio de até 20% dos bens de Everardo para o pagamento de seus honorários e dos demais custos com a defesa."
            },
            {
              "letra": "B",
              "texto": "Abelardo poderá, diante do bloqueio, participar dos bens particulares de Everardo, de forma excepcional, considerada a impossibilidade de pagamento por outro meio, ainda que tal forma de pagamento não tenha sido pactuada."
            },
            {
              "letra": "C",
              "texto": "A cláusula de honorários de êxito ou quota litis não é vedada, mas deve necessariamente ser expressa em pecúnia, de modo que, prevendo -se a entrega de uma joia, constata -se a nulidade que determina que Abelardo só fará jus aos honorários de sucumbência, se houver."
            },
            {
              "letra": "D",
              "texto": "A cláusula de honorários de êxito ou quota litis é vedada, de sorte que será necessário proceder ao arbitramento dos honorários de Abelardo, em remuneração compatível com o trabalho e o valor econômico da questão, observado obrigatoriamente o disposto no Art. 85 do Código de Processo Civil."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Ética",
          "enunciado": "Frederico, advogado, após alcançar grande sucesso na advocacia, decidiu se dedicar também à construção civil, passando a atuar simultaneamente nas duas áreas. Diante da afinidade temática entre o Direito Imobiliário e o setor de construção civil, Frederico teve a ideia de unir ambas as atividades em um único escritório, oferecendo aos clientes consultoria jurídica e serviços de incorporação imobiliária. Para divulgar o seu novo empreendimento, contratou um escritório de marketing, que produziu uma campanha publicitária conjunta, ressaltando seus trabalhos como advogado e como empreendedor da construção civil. Sobre o fato narrado, com base no Estatuto da OAB, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "É possível a divulgação conjunta, desde que respeitados o decoro e a dignidade da advocacia, cabendo ao Tribunal de Ética e Disciplina da OAB avaliar a adequação da publicidade."
            },
            {
              "letra": "B",
              "texto": "É permitida a divulgação conjunta apenas quando a outra atividade também for regulamentada por entidade de classe, hipótese em que a OAB poderá celebrar o convênio para a publicidade cruzada."
            },
            {
              "letra": "C",
              "texto": "É vedada a divulgação conjunta de advocacia com outra atividade, ainda que exercida pela mesma pessoa e que haja afinidade entre os ramos, como ocorre entre a advocacia imobiliária e a construção civil."
            },
            {
              "letra": "D",
              "texto": "Em regra, não é possível divulgar a advocacia em conjunto com outra atividade, mas nesse caso seria permitido, pois as atividades são exercidas por uma mesma pessoa e possuem afinidade temática, inexistindo conflito ético."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Ética",
          "enunciado": "O advogado Toledo atua na defesa de Tício, investigado por crimes de corrupção e lavagem de dinheiro. Durante as investigações, o próprio Toledo passou a ser investigado por suposta participação em atos ilícitos praticados por seu cliente. Em troca de benefícios penais, o Ministério Público ofereceu a possibilidade de firmar acordo de colaboração premiada ao advogado, desde que ele fornecesse informações sobre Tício e outros envolvidos. Com base no Estatuto da OAB, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O advogado pode colaborar contra seu cliente se a colaboração resultar apenas em redução de pena, sendo vedada a extinção total da punibilidade em razão de delação premiada."
            },
            {
              "letra": "B",
              "texto": "O advogado não pode celebrar colaboração premiada contra o cliente atual, mas poderá fazê -lo em relação a um ex -cliente, desde que não mais exista vínculo profissional formal entre ambos."
            },
            {
              "letra": "C",
              "texto": "O advogado poderá firmar colaboração premiada em face de seu cliente, desde que o acordo seja autorizado judicialmente, hipótese em que ficará isento de punição administrativa perante o Tribunal de Ética e Disciplina."
            },
            {
              "letra": "D",
              "texto": "O advogado não pode efetuar colaboração premiada contra quem seja ou tenha sido seu cliente, e a inobservância dessa regra poderá acarretar processo disciplinar com aplicação de uma sanção de exclusão dos quadros da OAB, sem prejuízo da responsabilização penal."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Filosofia do Direito",
          "enunciado": "Leia os fragmentos a seguir. Sócrates estava sentado à porta de sua casa. Nesse momento, passa um homem correndo e atrás dele vem um grupo de soldados. Um dos soldados então grita: agarre esse sujeito, ele é um ladrão! Ao que responde Sócrates: que você entende por ‘ladrão’? (...) Questões zetéticas têm uma função especulativa explícita e são infinitas. Questões dogmáticas têm uma função diretiva explícita e são finitas. Nas primeiras, o problema tematizado é configurado como um ser (que é algo?). Nas segundas, a situação nelas captada configura-se como um dever-ser (como deve-ser algo?). Por isso, o enfoque zetético visa saber o que é uma coisa. Já o enfoque dogmático preocupa -se em possibilitar uma decisão e orientar ação. (FERRAZ JUNIOR, Tercio Sampaio. Introdução ao Estudo do direito: técnica, decisão, dominação.) De acordo com a terminologia utilizada pelo Professor Tercio Sampaio Ferraz Junior, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O enfoque dado por Sócrates pode ser considerado dogmático, pois coloca em dúvida o próprio conceito de ladrão utilizado pelo soldado."
            },
            {
              "letra": "B",
              "texto": "A acentuação da dúvida e do aspecto ontológico da conduta de Sócrates denotam uma característica típica das questões zetéticas."
            },
            {
              "letra": "C",
              "texto": "A utilização dos conceitos de roubo e furto previstos no Código Penal para descaracterizar a imputação de um homem correndo como sendo um ladrão é tipicamente zetética."
            },
            {
              "letra": "D",
              "texto": "O enfoque zetético deve ceder espaço para a função dogmática, pois o Direito no mundo atual exige decisões técnicas, tornando contraproducente especulações ontológicas."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Filosofia do Direito",
          "enunciado": "Em decisão histórica, o Supremo Tribunal Federal (STF) aplicou a lei de greve do setor privado, Lei nº 7.783/1989, aos servidores públicos, pois, apesar de existir previsão constitucional expressa desse direito ao setor público, não havia lei que a regulamentasse, impedindo o seu exercício. Ao verificar a ausência da norma e das razões de semelhança para aplicar o normativo já existente, assinale a opção que melhor explica a técnica utilizada pelo STF para justificar o seu julgamento.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Costumes."
            },
            {
              "letra": "B",
              "texto": "Equidade."
            },
            {
              "letra": "C",
              "texto": "Analogia."
            },
            {
              "letra": "D",
              "texto": "Princípios Gerais de Direito."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direitos Humanos",
          "enunciado": "Maria descobriu que seu nome constava, erroneamente, em registros públicos estaduais como devedora de impostos, mesmo sem nada dever ao Fisco. Muito correta, procurou imediatamente a Secretaria de Estado da Fazenda do Estado Alfa, solicitando que fosse corrigida a informação. Porém, apesar das reiteradas solicitações, o órgão não realizou a retificação. Em razão disso, seu amigo Pedro sugeriu a impetração de um habeas data , o que seria feito diretamente por Maria, sem a presença de um(a) advogado(a). Insegura, Maria procurou você, como advogado(a), para saber se este seria o caminho adequado para a retificação desejada. Segundo o sistema jurídico -constitucional brasileiro, assinale a opção que apresenta, corretamente, a orientação a ser dada.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A questão deve ser solucionada pela via do mandado de segurança, único remédio capaz de propiciar a retificação de dados, como no caso de Maria."
            },
            {
              "letra": "B",
              "texto": "O objetivo almejado por Maria deve ser atingido pela via de processo judicial sigiloso, não sendo o remédio sugerido hábil para solucionar o problema ventilado."
            },
            {
              "letra": "C",
              "texto": "Maria pode utilizar esse específico remédio constitucional, embora sua impetração vá depender da contratação de advogado(a), que possua capacidade postulatória."
            },
            {
              "letra": "D",
              "texto": "O remédio constitucional em questão não é o instrumento adequado para o caso, pois é direcionado a situações em que se queira ter acesso a informações de sua própria pessoa."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Constitucional",
          "enunciado": "Carlos é prefeito do Município Beta, localizado no Estado Alfa. Ele tomou conhecimento da descoberta de uma nova reserva de petróleo em Alfa (reserva Mantuã), situada no território de Beta. Interessado em saber se os resultados da exploração de petróleo e gás natural poderiam gerar recursos para Beta, Carlos consultou você, como Procurador(a)-Geral do Município, para esclarecer sua dúvida. Sobre a hipótese narrada, segundo o sistema constitucional brasileiro, assinale a opção que apresenta, corretamente, o esclarecimento dado.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Somente Beta, região que efetivamente abriga a reserva Mantuã, poderá se beneficiar dos resultados econômicos diretos da exploração."
            },
            {
              "letra": "B",
              "texto": "O Estado Alfa, o Município Beta e a União, nos termos da lei, serão beneficiados pelos resultados econômicos diretos obtidos da exploração."
            },
            {
              "letra": "C",
              "texto": "Apenas a União, a quem pertencem os recursos minerais no país, inclusive os do subsolo, poderá se beneficiar dos resultados econômicos diretos da exploração."
            },
            {
              "letra": "D",
              "texto": "Somente Alfa e Beta, os entes que suportarão diretamente os reveses que a exploração de petróleo ocasiona, poderão se beneficiar dos resultados econômicos diretos da exploração."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Constitucional",
          "enunciado": "O Estado Delta publicou lei que criou novos critérios para a concessão de benefícios fiscais no âmbito estadual. Esse diploma normativo, no entanto, foi declarado inconstitucional pelo Supremo Tribunal Federal (STF), em sede de Ação Direta de Inconstitucionalidade (ADI). Apesar disso, meses depois, a Assembleia Legislativa de Delta aprovou a Lei X/2025 com conteúdo idêntico ao da lei anteriormente declarada inconstitucional. O Governador do Estado Delta, inconformado, solicitou que o Procurador -Geral do Estado analisasse a conformidade constitucional da Lei X/2025. Assinale a opção que, do ponto de vista jurídico -constitucional, apresenta a solução correta para o tema.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O Governador do Estado deve ingressar com uma reclamação perante o STF, pois a Lei X/2025 afrontou o efeito vinculante da decisão anterior."
            },
            {
              "letra": "B",
              "texto": "O efeito vinculante da decisão anterior do STF não alcança a atividade legislativa típica, não havendo óbice a que seja proposta uma nova ADI tendo a Lei X/2025 como objeto."
            },
            {
              "letra": "C",
              "texto": "A Lei X/2025 não pode ser objeto de nova ADI, pois o efeito vinculante da decisão do STF na ADI anterior impede que qualquer legitimado questione a norma de mesmo conteúdo."
            },
            {
              "letra": "D",
              "texto": "Pode ser ajuizada uma nova ADI, tendo a Lei X/2025 como objeto, porque o Poder Legislativo está vinculado à decisão anterior do STF, mesmo em relação à sua função típica de legislar."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Constitucional",
          "enunciado": "A Câmara Municipal de Alfa constatou que o Prefeito Municipal não prestou as contas anuais de governo, afetas à administração municipal, dentro do prazo estabelecido na legislação, o que se estendeu por três exercícios. Após reiteradas notificações, a omissão permaneceu, impedindo a fiscalização do uso dos recursos públicos. Diante dessa situação, o Governador do Estado Beta decidiu decretar intervenção estadual no Município para garantir a prestação de contas. No entanto, a medida gerou debate entre os agentes políticos locais, que questionaram a sua legalidade e consultaram você, como advogado(a), a esse respeito. Sobre a hipótese narrada, considerando a ordem constitucional vigente, assinale a opção que apresenta, corretamente, a orientação jurídica prestada.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A Câmara Municipal de Alfa, ao constatar a omissão na prestação de contas, deve requerer diretamente ao Supremo Tribunal Federal que determine a intervenção estadual."
            },
            {
              "letra": "B",
              "texto": "A intervenção estadual, no caso, somente poderia ser decretada se houvesse uma determinação judicial reconhecendo a omissão como grave o suficiente para justificar a medida extrema."
            },
            {
              "letra": "C",
              "texto": "A intervenção estadual depende de autorização prévia do Poder Legislativo estadual, pois qualquer limitação à autonomia municipal exige controle político pelos representantes do povo."
            },
            {
              "letra": "D",
              "texto": "O Governador pode decretar a intervenção sem a necessidade de autorização legislativa ou judicial prévia, pois a situação apresentada no problema constitui hipótese expressa de intervenção estadual."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Constitucional",
          "enunciado": "O Tribunal de Contas do Estado Ômega, ao analisar as contas de um gestor público, constatou a existência de irregularidades graves na aplicação de verbas destinadas à educação, gerando prejuízo ao erário. Após garantir o contraditório e a ampla defesa, o Tribunal proferiu decisão definitiva determinando o ressarcimento dos valores desviados. No entanto, o gestor público entendia que não deveria cumprir a decisão, pois, a seu ver, seria necessário o ajuizame nto de uma ação judicial para validar a obrigação de pagamento. Por essa razão, consultou você, como advogado(a). Sobre a hipótese, com base no sistema constitucional brasileiro, assinale a afirmativa que apresenta a orientação jurídica correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A obrigação de ressarcimento ao erário dependeria da confirmação por parte da Assembleia Legislativa de Ômega, pois os Tribunais de Contas são órgãos subordinados ao Poder Legislativo."
            },
            {
              "letra": "B",
              "texto": "A decisão do Tribunal de Contas não pode ser executada diretamente pela Fazenda Pública, pois, para que haja exigibilidade do crédito, é imprescindível o ajuizamento de ação judicial declaratória."
            },
            {
              "letra": "C",
              "texto": "A decisão do Tribunal de Contas tem eficácia de título executivo extrajudicial, sem necessidade de homologação pelo Poder Judiciário, e pode ser cobrada pela Fazenda Pública por meio de execução fiscal."
            },
            {
              "letra": "D",
              "texto": "A obrigação de ressarcimento ao erário somente pode ser imposta por decisão do Poder Judiciário, pois os Tribunais de Contas não possuem competência para reconhecer a responsabilidade financeira de gestores públicos."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Constitucional",
          "enunciado": "Ao final de seu segundo mandato consecutivo, o Prefeito do Município Delta, João Carlos, encaminhou à Câmara de Vereadores um projeto de lei de sua própria iniciativa, propondo a majoração dos subsídios dos próximos Prefeito e Vice -Prefeito para a legislatura seguinte. O projeto foi devidamente aprovado pela maioria dos vereadores de Delta e sancionado por João Carlos, antes do término de seu mandato. Um legitimado à deflagração do controle concentrado de constitucionalidade consultou você, como advogado(a), em relação à compatibilidade do respectivo diploma normativo com a Constituição da República. Sobre o caso concreto apresentado, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A lei municipal aprovada atende aos pressupostos constitucionais da ordem jurídica brasileira, que exige a forma de lei municipal para a fixação do subsídio do Prefeito."
            },
            {
              "letra": "B",
              "texto": "A lei municipal aprovada atende aos pressupostos da ordem jurídica brasileira, desde que as regras estabelecidas para o tema observem o que dispõe a Lei Orgânica do Município."
            },
            {
              "letra": "C",
              "texto": "Não sendo João Carlos beneficiário da majoração dos subsídios, o processo legislativo aprovado pela Câmara Municipal de Delta converge com o que determina o sistema jurídico brasileiro."
            },
            {
              "letra": "D",
              "texto": "A lei aprovada pela Câmara Municipal de Delta não atende ao regime constitucional vigente, pois a matéria em questão exige projeto de iniciativa da Câmara Municipal, não do Chefe do Poder Executivo."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direitos Humanos",
          "enunciado": "Na condição de advogado(a), você é procurado(a) por membros de uma comunidade indígena que estão sofrendo reiteradas ofensas aos seus direitos originários sobre as terras que tradicionalmente ocupam, sofrendo renitente esbulho, em conflito possessório que se arrasta desde antes da promulgação da Constituição Federal de 1988. Nesse contexto, de acordo com o entendimento da Corte Interamericana de Direitos Humanos (Corte IDH) e do Supremo Tribunal Federal (STF), assinale a opção que apresenta, corretamente, a sua orientação.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Diante da natureza jurídica despersonalizada da comunidade indígena, reconhece-se a possibilidade de quaisquer de seus integrantes pleitear individualmente, em substituição à coletividade respectiva, o provimento de tutela jurisdicional adequada à proteção dos seus direitos originários violados."
            },
            {
              "letra": "B",
              "texto": "Em razão da situação narrada protrair -se no tempo, estendendo-se o conflito possessório a período anterior à edição da nova ordem constitucional, não há, no caso, óbice de ordem técnico-jurídica que inviabiliza o reconhecimento da tradicionalidade da ocupa ção indígena, nos termos da jurisprudência mais recente do STF."
            },
            {
              "letra": "C",
              "texto": "Tanto a Corte IDH quanto o STF reconhecem a possibilidade de a comunidade indígena, por livre disposição, anuir à solução conciliatória em que se estabeleça a alienação das terras indígenas, desde que o produto da venda seja destinado exclusivamente à comu nidade, assegurada a sua capacidade de autodeterminação sobre a sua disposição."
            },
            {
              "letra": "D",
              "texto": "Diante das peculiaridades culturais e de organização inerentes aos povos originários, para melhor proteção dos seus direitos, é obrigatório que a sua representação em juízo seja realizada por órgão governamental especialmente instituído para atuar na defes a de seus interesses, como ocorre no contexto brasileiro com a Fundação Nacional do Índio (Funai)."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direitos Humanos",
          "enunciado": "Após a edição da Emenda Constitucional nº 45/2004, com a inserção do § 3º no Art. 5º da Constituição Federal de 1988, muito se discutiu acerca do status normativo que deveria ser atribuído aos Tratados e Convenções Internacionais sobre Direitos Humanos já incorporados ao ordenamento jurídico brasileiro em data anterior ao advento da reforma constitucional referida. Acerca do tema, e de acordo com a atual jurisprudência do Supremo Tribunal Federal (STF), assinale a opção correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Diante da impossibilidade de adoção do rito constitucionalmente exigido para a aprovação de emendas constitucionais, os Tratados e as Convenções Internacionais sobre Direitos Humanos incorporados ao ordenamento jurídico nacional antes da EC nº 45/2004 possuem status de lei ordinária."
            },
            {
              "letra": "B",
              "texto": "Diante da ausência de previsão constitucional expressa em relação à matéria, em razão dos compromissos assumidos pelo Estado brasileiro no plano internacional, os Tratados e as Convenções Internacionais sobre Direitos Humanos incorporados ao ordenamento jurídico nacional antes da EC nº 45/2004 possuem status de norma supraconstitucional."
            },
            {
              "letra": "C",
              "texto": "Em razão da cláusula aberta contida no Art. 5º, § 2º, da Constituição Federal de 1988, ao admitir expressamente a existência de outros direitos fundamentais para além daqueles expressamente elencados no texto constitucional, os Tratados e as Convenções Internacionais sobre Direitos Humanos incorporados ao ordenamento jurídico nacional antes da EC nº 45/2004 possuem status de norma constitucional."
            },
            {
              "letra": "D",
              "texto": "Em razão da necessidade de interpretação do texto constitiucional, notadamente as previsões insertas nos parágrafos do art. 5º da Constituição Federal de 1988, à luz do Art. 7º, § 7º, da Convenção Americana de Direitos Humanos (Pacto de São José da Costa Rica), os Tratados e as Convenções Internacionais sobre Direitos Humanos incorporados ao ordenamento jurídico nacional antes da edição da EC nº 45/2004 possuem status supralegal."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Eleitoral",
          "enunciado": "Maria pretendia concorrer ao cargo eletivo de senadora. Embora tivesse nascido no Estado Alfa e passasse a maior parte do seu tempo nesse Estado, possuía propriedades nos Estados Beta e Gama, para onde se deslocava com regularidade em razão de sua atividade profissional, ali permanecendo por longos períodos. Para saber em qual desses Estados poderia concorrer ao cargo eletivo de senadora, Maria o(a) consultou como advogado(a). Sobre a hipótese apresentada, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Maria somente pode concorrer no Estado em que tenha domicílio eleitoral, o qual deve ser estabelecido até seis meses antes da eleição."
            },
            {
              "letra": "B",
              "texto": "Na medida em que o domicílio eleitoral é uma condição de elegibilidade regida pelo princípio da unicidade, Maria deve defini-lo no momento do registro."
            },
            {
              "letra": "C",
              "texto": "Em razão do caráter nacional do cargo eletivo de senadora, Maria pode concorrer em qualquer dos Estados, ainda que não tenha domicílio eleitoral no Estado escolhido."
            },
            {
              "letra": "D",
              "texto": "Como o domicílio eleitoral não é uma ficção, sendo regido pela realidade, Maria somente pode concorrer no Estado Alfa, no qual passa a maior parte do tempo, ainda que tenha declinado domicílio diverso à Justiça Eleitoral."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Eleitoral",
          "enunciado": "Logo após a diplomação de Maria, candidata eleita para o cargo de Prefeita do Município Delta, Ana, candidata derrotada, procurou você, como advogado(a), com provas de que Maria recebera doação estimável em dinheiro, por meio da publicidade realizada, em seu benefício, pela organização da sociedade civil de interesse público Gama. Ana o(a) questionou em relação à juridicidade da conduta de Maria. Quanto à orientação a ser dada, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Trata-se de captação ilícita de recursos, e a medida a ser ajuizada deve observar o procedimento da ação de investigação judicial eleitoral."
            },
            {
              "letra": "B",
              "texto": "Como não houve repasse de recursos financeiros, o fato de Maria ter sido beneficiada pela publicidade realizada por Gama não configura ilícito eleitoral."
            },
            {
              "letra": "C",
              "texto": "Ocorreu a preclusão de qualquer medida passível de ser adotada em relação à situação descrita, o que torna desinfluente a análise de sua licitude ou não."
            },
            {
              "letra": "D",
              "texto": "Como somente são admitidas doações expressas em moeda, a conduta é ilícita, o que acarreta a incidência da pena cominada, sendo possível a aplicação da sanção de multa a Gama e a Maria."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Internacional",
          "enunciado": "Um cidadão brasileiro, domiciliado na Espanha, faleceu deixando um testamento particular que dispõe sobre bens situados tanto no exterior quanto no Brasil. Após a sua morte, os herdeiros promoveram, de comum acordo, perante autoridade notarial estrangeira competente, procedimento consensual de confirmação do testamento particular e partilha do patrimônio, incluindo os bens localizados no Brasil. Posteriorment e, requereram ao Superior Tribunal de Justiça (STJ) a homologação do ato notarial estrangeiro, alegando a inexistência de litígio entre os herdeiros e a plena validade do procedimento conforme a legislação do país de origem. Sobre o caso apresentado, à luz do sistema jurídico brasileiro, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A homologação será possível apenas se o ato estrangeiro for convertido em decisão judicial no país de origem, pois somente decisões judiciais estrangeiras são passíveis de homologação pelo STJ."
            },
            {
              "letra": "B",
              "texto": "O ato notarial poderá ser homologado pelo STJ desde que todos os herdeiros sejam capazes e tenham manifestado consentimento expresso quanto à confirmação do testamento e à partilha dos bens, inclusive os situados no Brasil."
            },
            {
              "letra": "C",
              "texto": "A homologação deverá ser deferida parcialmente, produzindo efeitos automáticos sobre os bens situados no Brasil, em respeito ao princípio da autonomia da vontade dos herdeiros e ao reconhecimento internacional dos atos notariais."
            },
            {
              "letra": "D",
              "texto": "O ato notarial estrangeiro não poderá ser homologado na parte relativa aos bens situados no Brasil, pois a confirmação de testamento particular e a partilha desses bens se inserem na competência jurisdicional exclusiva da autoridade judiciária brasileira."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Internacional",
          "enunciado": "François, cidadão francês, residente e domiciliado na Holanda, e Maria, cidadã brasileira, residente e domiciliada na França, são casados. Conheceram -se na Alemanha, onde concluíram o doutorado em Direito Internacional na Universidade de Frankfurt. Os nubentes eram domiciliados na Alemanha na ocasião do casamento e tiveram em Frankfurt o seu primeiro domicílio conjugal. Posteriormente, mudaram-se para países diferentes por razões profissionais. Após alguns meses, resolveram não dar continuidade ao ca samento. Maria pretende ajuizar ação de divórcio no Brasil porque está prestes a retornar ao seu país de origem. Sobre a hipótese, assinale a opção que indica a lei que será aplicada ao regime de bens de acordo com a legislação brasileira, em especial a Lei de Introdução às Normas do Direito Brasileiro.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Francesa."
            },
            {
              "letra": "B",
              "texto": "Brasileira."
            },
            {
              "letra": "C",
              "texto": "Alemã."
            },
            {
              "letra": "D",
              "texto": "Holandesa."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Financeiro",
          "enunciado": "O Município Alfa estava enfrentando dificuldades para pagar em dia a remuneração de seus servidores públicos municipais. Em razão disso, resolveu requerer à instituição financeira federal BNDES um empréstimo, a fim de pagar as remunerações em atraso. O Município ofereceu, em garantia do empréstimo, terrenos de sua propriedade, cujo valor de mercado inclusive suplantava o montante a ser emprestado. Diante desse cenário, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "É proibido ao BNDES realizar empréstimo para o pagamento de despesas com pessoal."
            },
            {
              "letra": "B",
              "texto": "Como houve oferta de garantia em valor superior ao do empréstimo, este deverá ser realizado pelo BNDES."
            },
            {
              "letra": "C",
              "texto": "É facultado ao BNDES realizar o empréstimo, mas apenas se reputar que as garantias oferecidas são de liquidez satisfatória."
            },
            {
              "letra": "D",
              "texto": "Somente uma instituição financeira controlada pelo Estado em que se localiza o Município Alfa poderia realizar tal empréstimo."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Financeiro",
          "enunciado": "Em determinado ano, na elaboração do projeto de Lei Orçamentária Anual (LOA) da União, o Poder Executivo resolveu inserir as previsões de despesas para os exercícios seguintes, com a especificação dos investimentos plurianuais e daqueles em andamento. Sobre esse projeto de LOA, à luz das regras constitucionais de elaboração das leis orçamentárias, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Veiculou indevidamente investimentos plurianuais e aqueles em andamento, os quais somente poderiam constar do Plano Plurianual (PPA)."
            },
            {
              "letra": "B",
              "texto": "Inseriu, equivocadamente, os investimentos plurianuais em seu conteúdo, pois deveriam estar previstos na Lei de Diretrizes Orçamentárias (LDO)."
            },
            {
              "letra": "C",
              "texto": "Adequa-se às disposições constitucionais que permitem tais inserções dos investimentos plurianuais e daqueles em andamento."
            },
            {
              "letra": "D",
              "texto": "Poderia conter, apenas, os investimentos já em andamento, uma vez que os investimentos plurianuais somente poderiam constar do Plano Plurianual (PPA)."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Tributário",
          "enunciado": "Com necessidade de ampliar os gastos na área da seguridade social, a União criou uma nova contribuição de seguridade social, por meio da Lei Ordinária nº XXX/2024, publicada em 1º de setembro de 2024, cuja cobrança se iniciou em 1º de novembro de 2024. Diante desse cenário, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A Lei Ordinária nº XXX/2024 é inconstitucional por violar tanto a reserva de lei complementar como os princípios da anterioridade tributária anual e nonagesimal."
            },
            {
              "letra": "B",
              "texto": "Embora não viole o princípio da anterioridade tributária anual, a Lei Ordinária nº XXX/2024 é inconstitucional por violar tanto a reserva de lei complementar como o princípio da anterioridade tributária nonagesimal."
            },
            {
              "letra": "C",
              "texto": "Não há qualquer inconstitucionalidade na Lei Ordinária nº XXX/2024, uma vez que as novas contribuições de seguridade social são instituídas por meio de lei ordinária e constituem exceção aos princípios da anterioridade tributária anual e nonagesimal."
            },
            {
              "letra": "D",
              "texto": "As novas contribuições de seguridade social constituem exceção aos princípios da anterioridade tributária anual e nonagesimal, de modo que a única inconstitucionalidade formal presente na Lei Ordinária nº XXX/2024 é a de violar a reserva de lei complementar."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Tributário",
          "enunciado": "Mateus devia um valor elevado ao Fisco Federal, em dívidas de certo tributo federal devidamente lançadas e inscritas em Dívida Ativa da União ainda não prescritas, o que levou a Procuradoria da Fazenda Nacional (PFN), em fevereiro de 2020, a ajuizar execução fiscal contra ele. Mateus não foi localizado para ser citado nem foram encontrados bens sobre os quais poderia recair a penhora, tendo sido a PFN cientificada desses fatos, em abril de 2020. Assim, foi requerida e realizada a citação de Mateus por edital, ainda em abril de 2020. Em julho de 2025, sem que a situação se alterasse, o Magistrado, ouvida previamente a Fazenda Nacional, decretou a ocorrência da prescrição de tais créditos tributários. Diante desse cenário, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Ocorreu a prescrição direta de tais créditos, pois foi alcançado o prazo prescricional quinquenal previsto no Código Tributário Nacional."
            },
            {
              "letra": "B",
              "texto": "A ausência de citação pessoal de Mateus impede o curso da prescrição, de modo que esta, nesse caso, não poderia ter se consumado."
            },
            {
              "letra": "C",
              "texto": "A prescrição intercorrente prevista no Código Tributário Nacional, ocorrida na pendência do processo de execução fiscal, fulminou tais créditos tributários."
            },
            {
              "letra": "D",
              "texto": "A prescrição intercorrente prevista na Lei de Execuções Fiscais ainda não havia sido atingida, pois não se computou na contagem geral do prazo o período de 1 ano de suspensão do curso da execução."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Tributário",
          "enunciado": "João da Silva recebeu vultosa importância da sociedade empresária em que trabalhava, a título de indenização por danos morais, por ter sido exposto meses antes, em público, diante de seus colegas, a uma situação vexatória. No momento do pagamento do valor da indenização, a sociedade empresária reteve na fonte o Imposto sobre a Renda que entendeu devido, recolhendo -o em DARF no mesmo ato. João, inconformado com a retenção, impugnou administrativamente a cobrança, mas a decisã o de primeira instância administrativa denegou a restituição do imposto. João então consultou você, como advogado(a), pretendendo reaver o imposto que entende ser indevido. Diante desse cenário, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Foi correta a retenção do Imposto de Renda sobre aquela verba indenizatória, por se tratar de fato ocorrido em relação de emprego, equiparando-a a verba salarial."
            },
            {
              "letra": "B",
              "texto": "Caso queira promover ação anulatória contra a decisão administrativa que denegou a restituição do Imposto sobre a Renda, João terá um prazo máximo de dois anos para fazê-lo."
            },
            {
              "letra": "C",
              "texto": "João somente poderá requerer judicialmente a restituição do valor de Imposto sobre a Renda retido indevidamente, por ter natureza indenizatória, após esgotar a via administrativa tributária em todas as instâncias."
            },
            {
              "letra": "D",
              "texto": "Tendo sido negado em primeira instância administrativa o seu pedido de restituição do Imposto sobre a Renda que entende indevidamente retido, João somente poderá recorrer à segunda instância administrativa após realizar depósito prévio."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Tributário",
          "enunciado": "A lei federal que instituiu a Contribuição de Intervenção no Domínio Econômico incidente sobre a importação e a comercialização de petróleo e seus derivados (Cide Combustíveis) fixou a alíquota do álcool etílico combustível em R$ 37,20/m³ para a comerciali zação no mercado interno. Contudo, o governo federal, querendo estimular o uso do álcool etílico combustível, pelo Decreto do Presidente da República nº XXX, de 1º de agosto de 2024, reduziu esta alíquota para R$ 20,50/m³. Mudada a política governamental sobre a matéria, pelo Decreto nº YYY, datado de 1º de fevereiro de 2025, tal alíquota foi restabelecida em R$ 37,20/m³, com efeitos a serem produzidos a partir de 3 de junho de 2025. Diante desse cenário, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A produção de efeitos do Decreto nº YYY a partir de 3 de junho de 2025 viola o princípio da anterioridade tributária anual."
            },
            {
              "letra": "B",
              "texto": "A redução da alíquota para R$ 20,50/m³ por decreto é inconstitucional, ainda que seja mais benéfica ao sujeito passivo tributário."
            },
            {
              "letra": "C",
              "texto": "A redução da alíquota para R$ 20,50/m³ e seu restabelecimento para R$ 37,20/m³ podem ser feitas por decreto."
            },
            {
              "letra": "D",
              "texto": "O restabelecimento de tal alíquota da Cide Combustíveis para o patamar de R$ 37,20/m³ por decreto viola o princípio da legalidade tributária."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Tributário",
          "enunciado": "O Município Alfa, por lei ordinária municipal, criou a Taxa de Fiscalização de Cemitérios, relativa ao custeio das atividades de fiscalização das instalações e atividades das concessionárias de cemitérios em território municipal, tendo tais concessionárias como contribuintes. A lei criadora estabeleceu que a data de pagamento dessa taxa seria fixada em decreto do Prefeito Municipal. O Decreto Municipal XX/2023 fixou a data de pagamento em 15 dias após o recebimento da notificação para pagamento. Diante desse cenário, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Somente lei municipal, e não mero decreto , poderia fixar o prazo de pagamento da referida taxa."
            },
            {
              "letra": "B",
              "texto": "O Decreto Municipal XX/2023 não poderia fixar a data de pagamento dessa taxa em 15 dias, por contrariar o prazo de 30 dias previsto no Código Tributário Nacional (CTN)."
            },
            {
              "letra": "C",
              "texto": "Como a fiscalização de cemitérios configura uma taxa de polícia, e não uma taxa de serviço público específico e divisível, tal taxa não poderia ser instituída pelo Município Alfa."
            },
            {
              "letra": "D",
              "texto": "Ainda que não houvesse previsão na lei instituidora do tributo de que seria um decreto a fixar a data de pagamento dessa taxa, o Decreto Municipal XX/2023 seria ato normativo apto a fazê-lo."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Administrativo",
          "enunciado": "A sociedade empresária Begônia deseja participar de um procedimento licitatório, na modalidade concorrência, para a contratação de uma obra, que adotará a sequência adotada como regra na Lei nº 14.133/2021, mas está com receio de ser prejudicada no julgamento das propostas, que antecede à fase de habilitação. Em razão disso, a sociedade empresária consultou você, como advogado(a), a fim de esclarecer a possibilidade de apresentar um recurso administrativo, o momento correto para fazê -lo e os efeitos dele decorrentes, caso tal receio venha a ser concretizado. Sobre essa situação hipotética, assinale a opção que indica, corretamente, o esclarecimento que você prestou.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Não há a possibilidade de se apresentar um recurso administrativo contra o julgamento das propostas, diante da vedação expressa na aludida norma."
            },
            {
              "letra": "B",
              "texto": "Apenas depois da habilitação é que caberá a apresentação de um recurso administrativo contra o julgamento das propostas, de modo que é necessário aguardar o prosseguimento do certame para a manifestação da intenção de recorrer no momento oportuno."
            },
            {
              "letra": "C",
              "texto": "O pedido de reconsideração em relação ao julgamento das propostas deve ser prontamente apresentado ao fim da respectiva fase e possui efeito suspensivo, de modo que a licitação só seguirá para a fase de habilitação após a apreciação das irresignações apresentadas."
            },
            {
              "letra": "D",
              "texto": "A intenção de recorrer do julgamento das propostas deve ser imediatamente manifestada, mas o prazo para a apresentação das razões recursais será iniciado na data da intimação ou da lavratura da ata de habilitação ou inabilitação, pois sua apreciação dar-se-á em fase única."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Administrativo",
          "enunciado": "O Estado Alfa, cuja capital é o Município Beta, mediante decreto do Governador, em observância às formalidades legais, declarou de utilidade pública uma grande área localizada no Município Sigma, sede de Comarca, a qual abarca o imóvel pertencente ao particular João. Em razão do grande apego emocional com a localidade, onde vive há 25 anos, João recusou todas as propostas oferecidas pelo Poder Público e tentou impedir que as autoridades administrativas estaduais ingressassem no terreno do seu imóvel para a realização de levantamentos. Por isso, o Estado Alfa pretende ingressar, em juízo, com uma ação visando à desapropriação do bem. Preocupado, João contratou você, como advogado(a), para defendê-lo na futura demanda judicial. Nesse cenário, considerando as disposições do Decreto -Lei nº 3.365/1941, que versa sobre as desapropriações por utilidade pública, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A ação judicial deverá ser proposta pelo expropriante no foro da situação do bem imóvel, ou seja, na Comarca do Município Sigma."
            },
            {
              "letra": "B",
              "texto": "As autoridades administrativas do Estado Alfa poderão ingressar nas áreas compreendidas pela declaração de utilidade pública após a autorização judicial específica, ouvido o expropriado João."
            },
            {
              "letra": "C",
              "texto": "O Estado Alfa poderá se imitir provisoriamente na posse do imóvel de João, desde que, declarada a situação de urgência, deposite, em juízo, o valor que o expropriado João entender justo a título de indenização."
            },
            {
              "letra": "D",
              "texto": "Incumbirá ao expropriado João, em sede de contestação, expor todas as razões de fato e de direito com que impugna o pedido do expropriante, especificando as provas que pretende produzir para demonstrar que inexiste utilidade pública na desapropriação almejada pelo Estado Alfa."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Administrativo",
          "enunciado": "A sociedade empresária Alfa tomou conhecimento de que o Conselho Diretor da Agência Reguladora Beta realizou reunião deliberativa, na semana anterior, tendo por objeto discussões sobre documentos classificados como sigilosos, bem como sobre matérias de natureza administrativa. Considerando que a data da referida reunião não foi previamente divulgada no sítio da agência reguladora na internet, tampouco foi gravada em meio eletrônico, os sócios da entidade privada procuraram você para, na qualidade de advogado (a), prestar a devida consultoria jurídica. Nesse cenário, à luz da Lei n o 13.848/2019, que dispõe sobre a gestão, a organização, o processo decisório e o controle social das agências reguladoras, assinale a opção que apresenta, corretamente, a orientação jurídica prestada.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A reunião deliberativa do Conselho Diretor da Agência Reguladora Beta deverá ser anulada, na medida em que não houve a sua gravação em meio eletrônico."
            },
            {
              "letra": "B",
              "texto": "Inexiste irregularidade na reunião deliberativa do Conselho Diretor da Agência Reguladora Beta, já que foram discutidos documentos classificados como sigilosos, bem como matérias de natureza administrativa."
            },
            {
              "letra": "C",
              "texto": "Muito embora a gravação, em meio eletrônico, da reunião deliberativa do Conselho Diretor da Agência Reguladora Beta não fosse obrigatória, era necessário a prévia divulgação da sua data no sítio da referida autarquia na internet."
            },
            {
              "letra": "D",
              "texto": "Para que a reunião deliberativa do Conselho Diretor da Agência Reguladora Beta seja anulada, a sociedade empresária Alfa deverá demonstrar prejuízo em razão da ausência de divulgação prévia desta no sítio da referida autarquia na internet."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Administrativo",
          "enunciado": "O Ministério Público ingressou, em Juízo, com ação de improbidade administrativa em face de João, agente público no Município Alfa, sob o fundamento de que ele teria, em outubro de 2025, frustrado, em ofensa à imparcialidade, o caráter concorrencial de procedimento licitatório. Citado, o servidor público ofereceu contestação, por meio da sua atuação, na qualidade de advogado(a). Contudo, as preliminares suscitadas pelo réu, na contestação, foram rejeitadas. Em assim sendo, João procurou você, na condição de advogado(a), para tomar conhecimento das próximas etapas procedimentais. Nesse cenário, considerando as disposições da Lei nº 8.429/1992 (Lei de Improbidade Administrativa), assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A apelação é o recurso cabível para questionar a decisão judicial que rejeitou as questões preliminares suscitadas na contestação."
            },
            {
              "letra": "B",
              "texto": "A defesa de João poderá interpor agravo de instrumento em detrimento da decisão judicial que rejeitou as questões preliminares suscitadas em sede de contestação."
            },
            {
              "letra": "C",
              "texto": "Muito embora não seja cabível recurso em face da decisão judicial que rejeitou as questões preliminares suscitadas por João na contestação, nada impede que a defesa formule pedido de reconsideração."
            },
            {
              "letra": "D",
              "texto": "Por não ter ingressado no mérito da relação processual, a decisão judicial que rejeitou as questões preliminares suscitadas na contestação não é passível de impugnação via recurso ou pedido de reconsideração."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Administrativo",
          "enunciado": "As autoridades competentes de determinado órgão federal, diante do grande acúmulo de trabalho, fizeram editar um ato formal delegando parcela de sua competência para outro órgão que a ele não é hierarquicamente subordinado, mediante a especificação das matérias e dos poderes transferidos, os limites da atuação do delegado, a duração e os objetivos da delegação e o recurso cabível. Ao tomar conhecimento de tal fato, Gyslaine ficou muito preocupada quanto à possibilidade de o órgão delegado vir a decidir determinado recurso administrativo que estava tramitando perante o órgão delegante, razão pela qual buscou a sua assessoria jurídica a fim de esclarecer as peculiaridades e os limites da delegação de competência, à luz do disposto na Lei nº 9.784/1999. Assinale a opção que apresenta a informação correta que você, na qualidade de advogado(a), prestou.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A competência relativa à decisão de recursos administrativos não pode ser objeto de delegação."
            },
            {
              "letra": "B",
              "texto": "O ato de delegação é irrevogável, razão pela qual o desfazimento da delegação deve ser objeto de avocação."
            },
            {
              "letra": "C",
              "texto": "A competência, inexistindo impedimento legal, apenas poderia ser delegada para o órgão hierarquicamente subordinado."
            },
            {
              "letra": "D",
              "texto": "As decisões adotadas por delegação devem mencionar explicitamente essa qualidade e considerar -se-ão editadas pela autoridade delegante, que detém a competência originária."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Ambiental",
          "enunciado": "A sociedade empresária Alfa está em processo de licenciamento ambiental de atividade de tingimento de tecidos e fabricação de roupas, e pretende obter outorga pelo Poder Público do direito do uso de recursos hídricos, consistente em extração de água de aquífero subterrâneo existente no local, como insumo do processo produtivo. Nesse contexto, o empreendedor tomou conhecimento de que será cobrado um valor pelo recurso natural consumido. Inconformado com a cobrança, pois ainda terá grande gasto financeiro com as obras para a extração de água do aquífero, a sociedade empresária procurou a advogada Marcela, especialista em Direito Ambiental, para esclarecer as dúvidas dele acerca da viabilidade de tal exigência. Sobre a cobrança pelo uso da água, à luz dos princípios do Direito Ambiental, assinale a opção que apresenta, corretamente, o esclarecimento dado por Marcela.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O empreendedor não deve pagar pelo uso da água, exceto se houver efetivo dano ambiental, com base no princípio de direito ambiental da prevenção."
            },
            {
              "letra": "B",
              "texto": "A cobrança antecipada por danos ambientais a serem causados por poluidores é pertinente, com base no princípio de direito ambiental do desenvolvimento sustentável."
            },
            {
              "letra": "C",
              "texto": "O empreendedor deve pagar uma contribuição financeira à coletividade, que sofre as consequências do uso privado da água, com base no princípio de direito ambiental do usuário - pagador."
            },
            {
              "letra": "D",
              "texto": "A cobrança pelo uso da água não é pertinente, salvo se houver efetivo dano ambiental com a necessária prova pericial que demonstre o nexo causal, com base no princípio de direito ambiental da precaução."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Ambiental",
          "enunciado": "O Prefeito do Município Ômega, após os trâmites pertinentes, fez editar um decreto que delimitou uma Área de Proteção Ambiental (APA), unidade de conservação de uso sustentável, em decorrência de sua grande extensão e do grau de ocupação humana, diante de atributos abióticos, bióticos , estéticos ou culturais especialmente importantes para a qualidade de vida e o bem-estar das populações humanas. Dessa maneira busca proteger a diversidade biológica, disciplinar o processo de ocupação e assegurar a sustentabi lidade do uso dos recursos naturais. A propriedade privada de Adélia Figueiredo está situada dentro da mencionada unidade de conservação. Preocupada, ela procura você, como advogado, para receber orientação sobre a validade do mencionado decreto e a extensão de seus efeitos, à luz do disposto na Lei nº 9.985/2000. Acerca dessa situação hipotética, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "As condições para a pesquisa e a visitação do público, observadas as exigências e restrições legais, devem ser estabelecidas por Adélia."
            },
            {
              "letra": "B",
              "texto": "O Prefeito não poderia ter editado um decreto para a finalidade descrita, pois a Unidade de Conservação Ambiental só pode ser criada por lei."
            },
            {
              "letra": "C",
              "texto": "A propriedade de Adélia deve ser desapropriada de acordo com o que dispõe a lei, porque está localizada em uma Unidade de Conservação de domínio público."
            },
            {
              "letra": "D",
              "texto": "A Unidade de Conservação pertence, na realidade, ao grupo das unidades de proteção integral, o que permite o uso dos recursos naturais pelos proprietários privados."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Civil",
          "enunciado": "Joaquim Cardoso e Celina de Holanda são pais das gêmeas Clarice e Maria, que têm 17 anos de idade. No ano passado, Clarice, com a devida autorização dos pais, casou- se com Ariano. Maria, no mês de março deste ano, iniciou o curso de Medicina em uma universidade federal. O casal procurou você, como advogado(a) especializado(a) em Direito Civil, para ser orientado sobre a situação jurídica das filhas. A respeito da capacidade civil das filhas de Joaquim e Celina, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Como Clarice é casada, ela é civilmente capaz."
            },
            {
              "letra": "B",
              "texto": "Maria do Carmo, pela matrícula no ensino superior, é civilmente capaz."
            },
            {
              "letra": "C",
              "texto": "Todas as filhas são relativamente incapazes, pois são maiores de 16 e menores de 18 anos."
            },
            {
              "letra": "D",
              "texto": "Todas as filhas são absolutamente incapazes, pois são menores de 18 anos, sujeitando-se à autoridade parental."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Civil",
          "enunciado": "Joaquim, de 71 anos de idade, é viúvo de Marta há cerca de quatro anos, e não finalizou a partilha de bens deixados por sua falecida esposa, porque há um litígio entre o filho comum do ex -casal e a filha do primeiro casamento de Marta. Na semana passada, Joaquim procurou você, como advogado(a), para ser orientado juridicamente acerca da união que pretende estabelecer com Joana, tendo em vista que a partilha anterior não será realizada antes do novo matrimônio. A respeito do regime de bens que deveria adotar na nova união, assinale a opção que apresenta, corretamente, a sua orientação.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Separação convencional de bens, ante a idade de Joaquim."
            },
            {
              "letra": "B",
              "texto": "Qualquer regime de bens, por força da autonomia que é assegurada a Joaquim."
            },
            {
              "letra": "C",
              "texto": "Comunhão parcial de bens, de forma a resguardar os bens ainda não partilhados."
            },
            {
              "letra": "D",
              "texto": "Separação obrigatória de bens, para evitar a confusão patrimonial entre os vínculos conjugais."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Civil",
          "enunciado": "Após uma intensa discussão motivada por questões financeiras, Lucas desferiu golpes fatais em seus pais, resultando na morte de ambos, que deixaram uma herança significativa. Mateus, seu irmão mais novo, ainda menor de idade, está sob a tutela de seu tio Ricardo, que se recusa a promover a exclusão de Lucas da sucessão por indignidade. Considerando que Mateus, por ser menor, não tem capacidade legal para agir diretamente, surgem dúvidas sobre quem tem legitimidade para requerer judicialmente a exclusão de Lucas da herança e quais são os procedimentos adequados para isso. Diante da situação hipotética narrada e com base na legislação vigente, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Apenas Mateus, ao atingir a maioridade, terá o direito de pedir judicialmente a exclusão de Lucas da sucessão, pois ele é o herdeiro direto prejudicado."
            },
            {
              "letra": "B",
              "texto": "O Ministério Público tem legitimidade para requerer a exclusão de Lucas por indignidade, protegendo os direitos de Mateus, menor e incapaz de agir por conta própria."
            },
            {
              "letra": "C",
              "texto": "Apenas Ricardo, na qualidade de tutor de Mateus, pode requerer judicialmente a exclusão de Lucas da sucessão, e a recusa de Ricardo impede que qualquer outra pessoa o faça."
            },
            {
              "letra": "D",
              "texto": "Lucas só poderá ser excluído da sucessão se Ricardo, na qualidade de tutor, concordar, independentemente da legitimidade de outro herdeiro ou do Ministério Público para a propositura da ação."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Civil",
          "enunciado": "Lorena resolveu alienar um imóvel avaliado em R$ 2.000.000,00 para Marta. Para tanto, elas elaboraram uma minuta de contrato de compra e venda, especificando as partes, o bem, o preço e a forma de pagamento. Considerando a urgência da vendedora, que iria se mudar para o exterior, essa minuta foi impressa na casa de Marta e assinada pelas partes e pelas testemunhas Natália e Oscar. Sobre a situação hipotética narrada, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O contrato de compra e venda é válido, uma vez que, na presença de duas testemunhas, o instrumento particular poderia ser utilizado."
            },
            {
              "letra": "B",
              "texto": "O contrato de compra e venda é nulo, por desobediência de sua forma, mas poderá ser convertido em promessa de compra e venda."
            },
            {
              "letra": "C",
              "texto": "O contrato de compra e venda é anulável, por vício de sua forma, decaindo as partes do direito de promover a anulação no prazo de dois anos de sua celebração."
            },
            {
              "letra": "D",
              "texto": "O contrato de compra e venda é anulável por vício de forma. A lei permite, entretanto, a sua convalidação caso haja o reconhecimento das firmas de todos os envolvidos no Ofício de Notas."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Civil",
          "enunciado": "Eduardo vendeu um imóvel urbano a Clara, estipulando em contrato particular que, caso futuramente ela decidisse vendê -lo, Clara deveria notificá-lo previamente, conferindo-lhe o direito de adquirir o bem nas mesmas condições ofertadas a terceiros. Passados doze meses da compra, Clara recebeu proposta de venda pelo mesmo valor pago e, sem notificar Eduardo, vendeu o imóvel para Flávio. Eduardo, ao saber do negócio já concluído, procurou Flávio para discutir o direito de preferência, mas este afirmou não ter sido informado sobre qualquer cláusula contratual anterior. Eduardo ajuizou ação para haver o imóvel para si, mediante o pagamento do mesmo valor da proposta aceita por Clara. Com base nas disposições legais sobre o direito de preempção, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Eduardo não pode exigir o imóvel para si, mas poderá pleitear perdas e danos contra Clara, caso comprove que foi privado de exercer seu direito de preferência."
            },
            {
              "letra": "B",
              "texto": "Eduardo poderá reaver o imóvel se provar que notificou Flávio, por escrito, antes da conclusão do negócio, mesmo que Clara tenha omitido a existência da preferência."
            },
            {
              "letra": "C",
              "texto": "Eduardo perdeu o direito à preempção, pois este não pode ser exercido se o novo comprador não tinha ciência da cláusula de preferência existente no contrato anterior."
            },
            {
              "letra": "D",
              "texto": "Eduardo pode exigir o imóvel para si, mediante depósito do valor ajustado com o terceiro, desde que o faça no prazo de até 180 dias da alienação, conforme admite o Código Civil."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Civil",
          "enunciado": "Sara, em 24 de outubro de 2023, outorgou a Vítor, seu filho, uma procuração por instrumento público para vender seu imóvel até 24 de outubro de 2026. No momento da outorga, Sara gozava de boa saúde mental. A partir de 2024, Sara passou a sofrer um acelerado processo de demência, vindo a perder as suas habilidades cognitivas básicas no início de 2025. Sara foi interditada e Roberto, seu marido, tornou- se o seu curador. Em 24 de setembro de 2025, Raul se interessou em comprar o imóvel de Sara, e Vítor se apresentou como procurador da mãe. Na qualidade de advogado de Raul, assinale a opção que apresenta a sua orientação jurídica para o caso.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Não recomendaria a aquisição do imóvel, figurando Vítor como representante de Sara, pois há possíveis interesses conflitantes entre eles."
            },
            {
              "letra": "B",
              "texto": "Não recomendaria a aquisição do imóvel, figurando Vítor como representante de Sara, pois, diante da interdição, o contrato de mandato é extinto."
            },
            {
              "letra": "C",
              "texto": "Recomendaria a aquisição do imóvel, figurando Vítor como representante de Sara, pois, apesar da incapacidade superveniente, o contrato de mandato é eficaz até o término do prazo, quando este for determinado."
            },
            {
              "letra": "D",
              "texto": "Recomendaria a aquisição do imóvel, figurando Vítor como representante de Sara, pois, tendo a procuração sido outorgada por instrumento público, e estando Sara com boa saúde mental no momento da outorga, o mandato é válido e eficaz."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito da Criança e do Adolescente",
          "enunciado": "Enzo, de 16 anos de idade, ingressou em um grande supermercado e subtraiu diversas peças de picanha, que totalizaram mais de R$ 2.000,00 (dois mil reais). Um segurança, percebendo a atitude suspeita de Enzo, o apreendeu no estacionamento. Enzo confessou a autoria. O Ministério Público representou contra o adolescente pela prática de ato infracional análogo ao crime de furto (Art. 155, caput, do CP). Durante a instrução processual, ficou constatado que essa foi a primeira passagem de Enzo pela Vara da Infância e Juventude. A família de Enzo procurou você, como advogado(a), para saber qual medida poderá ser aplicada ao caso. Com base na expressa disposição do Estatuto da Criança e do Adolescente (ECA), assinale a afirmativa que apresenta, corretamente, a medida que você indicou.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Não poderá ser aplicada a medida socioeducativa de advertência, tendo em vista a primariedade e a pouca lesividade do ato."
            },
            {
              "letra": "B",
              "texto": "Ele deve receber a medida socioeducativa de internação, já que isso o afastará do meio criminoso e permitirá sua ressocialização."
            },
            {
              "letra": "C",
              "texto": "A medida cabível é a semiliberdade, já que ele deve receber uma medida socioeducativa, mas não a ponto de mantê -lo totalmente privado de liberdade."
            },
            {
              "letra": "D",
              "texto": "Não cabe a aplicação da medida socioeducativa de internação, porque o ato não foi cometido mediante grave ameaça ou violência à pessoa e não há reiteração em infrações graves."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito da Criança e do Adolescente",
          "enunciado": "Matheus, 17 anos, insiste em passar longos períodos na rua, deixando de lado os deveres escolares e, também, os compromissos familiares. A rebeldia de Matheus é atribuída à ausência do pai, que abandonou a família logo após o seu nascimento e de quem nunca mais ele teve notícia. Carolina, preocupada com a situação do filho, busca a inserção de Matheus no mercado formal de trabalho e encontra a oportunidade em um grande supermercado da região. O estabelecimento necessita de uma pessoa para carregar as caixas de produtos e abastecer o mercado durante a madrugada, especificamente entre meia-noite e quatro horas da manhã. Entretanto, por ainda não ter atingido a maioridade, Carolina possui dúvidas sobre a possibilidade de Matheus trabalhar. Por isso, procura você, como advogado(a), para ter sua orientação jurídica. Sobre a hipótese apresentada, assinale a afirmativa que, corretamente, apresenta a sua orientação.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Matheus, por estar no final da adolescência, pode trabalhar sem restrições."
            },
            {
              "letra": "B",
              "texto": "Matheus não pode ingressar no mercado formal de trabalho, por ainda não ter completado 18 anos."
            },
            {
              "letra": "C",
              "texto": "Matheus não pode trabalhar no cargo oferecido, já que o ECA veda o trabalho noturno entre as 22h de um dia e as 5h do dia seguinte."
            },
            {
              "letra": "D",
              "texto": "Por ter 17 anos, Matheus pode trabalhar no mercado durante a madrugada, desde que a atividade não prejudique a sua frequência às aulas."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito do Consumidor",
          "enunciado": "Mário, passando por dificuldades financeiras, solicitou, em juízo, a instauração de processo de repactuação de dívidas, que é deferido juntamente com a designação de audiência conciliatória. Na data fixada, a maior parte dos credores compareceu, com exceção do Banco XYZ S.A. , que preferiu não se submeter à conciliação por superendividamento, por entender ser infrutífero o procedimento. A respeito da ausência do Banco XYZ S.A. à audiência, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Acarreta o vencimento antecipado da dívida de Mário."
            },
            {
              "letra": "B",
              "texto": "Interrompe os encargos da mora incidentes em seu crédito."
            },
            {
              "letra": "C",
              "texto": "Permite-lhe ajuizar individualmente ação de cobrança do crédito."
            },
            {
              "letra": "D",
              "texto": "Importa na submissão ao plano de repactuação de dívidas nas mesmas condições que os credores presentes."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito do Consumidor",
          "enunciado": "Maria Victoria, em maio de 2023, decidiu aceitar a oferta do cartão de crédito Black, oferecido pelo Banco Y, do qual já era correntista há cerca de três anos. Contudo, em agosto de 2023, deixou de pagar a fatura de julho, no valor de R$ 5.300,00 (cinco mil e trezentos reais). Em razão disso, passado o vencimento, o Banco Y debitou automaticamente da conta -corrente dela o valor de R$ 300,00 (trezentos reais), referente ao denominado “pagamento mínimo” da fatura do cartão de crédito. Sobre a hipótese apresentada, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Nas hipóteses em que não há previsão contratual para tanto, é possível ao banco debitar automaticamente o valor integral da fatura do cartão de crédito da conta -corrente do consumidor, quando ultrapassados 60 dias do inadimplemento e notificado o consumidor do débito após 30 dias da data do seu vencimento."
            },
            {
              "letra": "B",
              "texto": "Independentemente de serem contratos distintos, pelo fato de existir uma única relação jurídica entre o consumidor e o banco, pode o banco debitar o valor mínimo da fatura do cartão de crédito automaticamente da conta -corrente do consumidor em caso de inadimplemento."
            },
            {
              "letra": "C",
              "texto": "Havendo saldo em conta, mesmo não havendo previsão contratual para tanto, é possível ao banco debitar automaticamente o valor integral da fatura do cartão de crédito da conta -corrente do consumidor, quando ultrapassados 30 dias do inadimplemento e notifica do o consumidor do débito."
            },
            {
              "letra": "D",
              "texto": "Tratando-se de contratos distintos, de cartão de crédito e de conta-corrente, o banco somente pode fazer o débito na conta-corrente do valor mínimo da fatura se essa possibilidade estiver prevista de forma expressa, clara e destacada no contrato celebrado com a instituição financeira."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Empresarial",
          "enunciado": "Mercado Barra Velha Ltda. emitiu nota promissória no valor de R$ 19.800,00 (dezenove mil e oitocentos reais), com vencimento no dia 19 de dezembro de 2021. Não houve pagamento na data do vencimento e o credor somente levou o título a protesto no dia 2 de dezembro de 2023, sendo o protesto lavrado dois dias após. Sobre o caso, com base na legislação de regência da nota promissória e das condições para sua cobrança em face do emitente, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O credor ainda poderá promover a execução da nota promissória em face do emitente em razão da interrupção da prescrição pelo protesto cambial."
            },
            {
              "letra": "B",
              "texto": "O credor poderá promover a execução da nota promissória em face do emitente, considerando -se que ainda não expirou o prazo de cinco anos para a propositura da ação cambial."
            },
            {
              "letra": "C",
              "texto": "O credor não pode promover a execução da nota promissória, em razão do protesto para a cobrança do emitente ser facultativo e do decurso do prazo de três anos da data do vencimento."
            },
            {
              "letra": "D",
              "texto": "O título deveria ter sido apresentado até o primeiro dia útil após o vencimento, acarretando a perda do direito de ação em caso de inobservância dessa regra, embora o protesto seja facultativo para a cobrança."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Empresarial",
          "enunciado": "A padaria Jacaré dos Homens Ltda. teve sua falência requerida em razão da impontualidade no pagamento de duplicata de prestação de serviço, no valor de R$ 62.000,00 (sessenta e dois mil reais), aceita e devidamente protestada para este fim. A devedora procurou você, como advogado(a), inf ormando que pretende depositar o valor cobrado. Acerca deste depósito, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Deverá ser realizado em dinheiro, no prazo de quinze dias, contado da citação da devedora."
            },
            {
              "letra": "B",
              "texto": "Compreenderá o valor total do crédito, acrescido de correção monetária, juros e honorários advocatícios."
            },
            {
              "letra": "C",
              "texto": "Suspenderá o processo pelo prazo de trinta dias ou até que seja apreciado o mérito da cobrança, o que ocorrer por último."
            },
            {
              "letra": "D",
              "texto": "Poderá ser realizado em dinheiro ou mediante prestação de caução real ou fidejussória no prazo de cinco dias, contado da citação."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Empresarial",
          "enunciado": "A sociedade empresária Pinheiros & Filhos Ltda ., constituída em 2017 e com sede em Pancas, ES, pretende registrar como marca o sinal distintivo nominativo Pancadão, a ser utilizado nos produtos alimentícios que ela fornece a mercados, supermercados e armazéns na região de Pancas, ES, e Resplendor, MG. Na mesma cidade de Pancas, ES, há um estabelecimento explorado pelo empresário individual Domingos Guandu, cujo título é Bar e Mercearia Pancadão, constituído em 2000 e usado desde então, que revende os produtos alimentícios fornecidos por Pinheiros & Filhos Ltda. Considerados estes dados, a respeito do registro de marca , assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Não há impedimento do registro de Pancadão como marca, pois o uso do mesmo sinal distintivo para título de estabelecimento de terceiro, ainda que anterior, é incapaz de retirar a originalidade da marca."
            },
            {
              "letra": "B",
              "texto": "Não há impedimento do registro de Pancadão como marca, haja vista que o sinal distintivo é novo e só há proteção para o título de estabelecimento no âmbito da propriedade industrial com o registro no INPI."
            },
            {
              "letra": "C",
              "texto": "Pancadão não poderá ser registrado como marca por ser a reprodução de sinal distintivo característico de título de estabelecimento de terceiro, quando suscetível de causar confusão ou associação entre a marca e o título de estabelecimento."
            },
            {
              "letra": "D",
              "texto": "Pancadão não poderá ser registrado como marca em razão da prioridade de uso do título de estabelecimento Pancadão pelo empresário Domingos Guandu , em âmbito nacional, decorrente da inscrição do empresário na Junta Comercial."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Empresarial",
          "enunciado": "Em relação aos elementos caracterizadores do empresário, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O empresário caracteriza-se pelo exercício profissional de atos de comércio, dentre os quais não se inclui a prestação de serviços."
            },
            {
              "letra": "B",
              "texto": "O exercício de profissão intelectual, de natureza artística, literária ou científica em nenhuma hipótese poderá servir para caracterizar o empresário."
            },
            {
              "letra": "C",
              "texto": "O empresário caracteriza -se pelo exercício profissional de atividade econômica organizada para produção ou circulação de bens ou de serviços."
            },
            {
              "letra": "D",
              "texto": "A inscrição do empresário na Junta Comercial e o exercício de atividade econômica em caráter habitual são os dois requisitos para sua caracterização."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Processo Civil",
          "enunciado": "Machado de Assis ajuizou ação indenizatória em face de Quincas Borba, pugnando pela condenação do réu ao pagamento de indenização por danos morais e materiais, resultantes do inadimplemento de contrato de prestação de serviços. O Juiz condenou o réu ao pagamento de indenização por danos morais no montante de R$ 5.000,00 (cinco mil reais) e danos materiais, a serem apurados em sede de liquidação de sentença, diante da necessidade de comprovação dos prejuízos que vêm sendo experimentados pelo autor, desde a ocorrência do ilícito. Quincas Borba contratou você, como advogado(a), para interpor recurso de apelação, buscando a reforma integral da sentença. Tomando o caso acima como premissa, assinale a opção que, corretamente, apresenta sua orientação.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Enquanto não houver o julgamento do recurso de apelação, não será possível realizar a liquidação de sentença no capítulo referente aos danos materiais."
            },
            {
              "letra": "B",
              "texto": "Apesar de Quincas Borba ter ofertado apelação, Machado de Assis poderá requerer desde logo a liquidação do capítulo dos danos materiais em autos apartados."
            },
            {
              "letra": "C",
              "texto": "A liquidação de sentença somente poderá ser promovida por requerimento de Machado de Assis, pois o réu não detém legitimidade para requerer a liquidação de sentença."
            },
            {
              "letra": "D",
              "texto": "Quincas Borba, em liquidação de sentença, poderá rediscutir a obrigação de pagamento dos danos materiais, sendo lícito ao Juiz modificar a sentença anteriormente proferida."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Processo Civil",
          "enunciado": "Por conta de danos sofridos em um acidente de trânsito, Juciara ajuizou ação em face de Carla, pleiteando a sua condenação ao pagamento de indenização. Julgado procedente o pedido, a Ré foi condenada ao pagamento de R$ 20.000,00 (vinte mil reais) a título de indenização por danos morais e materiais. Transitada em julgado a sentença, Carla imediatamente peticiona no referido processo, antes de qualquer depósito, oferecendo o pagamento de R$ 15.000,00 (quinze mil reais), com o devido depósito de tal quantia, e pleiteando o reconhecimento do cumprimento de sua obrigação. Sobre tal fato, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Concluindo o Juiz pela insuficiência do depósito, incidirão a multa e os honorários advocatícios de 10% sobre o valor total devido."
            },
            {
              "letra": "B",
              "texto": "Juciara deverá ser intimada do depósito e, caso impugne o valor, somente poderá levantar o montante total após o Juiz decidir sobre a suficiência do depósito."
            },
            {
              "letra": "C",
              "texto": "Caso Juciara não se oponha ao valor ofertado, ainda que inferior à condenação, será reconhecida como satisfeita a obrigação, com a consequente extinção do processo."
            },
            {
              "letra": "D",
              "texto": "O cumprimento de sentença depende da expressa manifestação de vontade da parte autora, de modo que Carla não poderia realizar o depósito dos valores devidos antes de intimada para tanto."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Processo Civil",
          "enunciado": "Paula ajuizou ação indenizatória por atraso de voo contra a companhia aérea Big Ben perante certo Juizado Especial Cível. Em sentença, o Magistrado condenou a companhia aérea ao pagamento de determinada quantia em dinheiro. Interposto recurso inominado pela companhia aérea, a Turma Recursal competente proveu o recurso. No entanto, em sua decisão, cometeu graves erros de aplicação de normas infraconstitucionais federais e normas constitucionais. A decisão colegiada, por outro lado, não incorreu em omissão, contradição, obscuridade ou erro material, e a matéria constitucional está devidamente pré-questionada. Diante desse cenário, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Não há recurso cabível contra a decisão proferida pela Turma Recursal."
            },
            {
              "letra": "B",
              "texto": "Paula deve opor embargos de declaração a fim de sanar os erros de interpretação de norma cometidos pela Turma Recursal."
            },
            {
              "letra": "C",
              "texto": "Paula deve interpor recurso extraordinário contra a decisão da Turma Recursal, tendo em vista que a decisão incorreu em erros de aplicação de normas constitucionais."
            },
            {
              "letra": "D",
              "texto": "Paula deve interpor recurso especial e recurso extraordinário simultaneamente, tendo em vista que o primeiro é cabível quando há violação à norma infraconstitucional federal, enquanto o segundo é cabível quando há violação à norma constitucional."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Processo Civil",
          "enunciado": "Aziz ajuizou ação de procedimento comum contra Betina, na qual requer sua condenação ao pagamento de R$ 10.000,00 (dez mil reais) por danos morais, após ter se sentido humilhado por Betina, que o xingou na frente de colegas de trabalho durante certa reunião profissional. Em primeiro grau, o Magistrado proferiu sentença que julgou parcialmente procedente o pedido de Aziz, condenando Betina ao pagamento de R$ 6.000,00 (seis mil reais). Aberto o prazo de 15 dias úteis para a interposição de recurso contra a sentença, apenas Aziz interpôs apelação, tendo requerido a reforma da decisão para que Betina fosse condenada a pagar o valor integral de R$ 10.000,00 (dez mil reais). Após a interposição do recurso de apelação por Aziz, o Magistrado abriu o prazo para que Betina apresentasse contrarrazões no prazo legal. Diante desse cenário, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Betina poderá apresentar contrarrazões ao recurso unicamente no prazo de 15 dias corridos."
            },
            {
              "letra": "B",
              "texto": "Betina poderá apresentar contrarrazões ao recurso no prazo de 15 dias úteis e, nos 15 dias úteis subsequentes, poderá interpor apelação adesiva."
            },
            {
              "letra": "C",
              "texto": "Betina poderá apresentar, no prazo concedido, contrarrazões ao recurso e interpor apelação adesiva; caso o recurso de apelação de Aziz seja inadmitido, o recurso de Betina também o será."
            },
            {
              "letra": "D",
              "texto": "Betina poderá apresentar apenas contrarrazões ao recurso, não sendo possível a interposição de recurso adesivo no caso concreto, tendo em vista que o recurso adesivo não é admissível em apelação."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Processo Civil",
          "enunciado": "João propõe ação de exigência das contas contra o seu sócio, Vinícius, para verificar a regularidade da administração dos bens da pessoa jurídica Discos de Vinil Ltda , da qual ambos são sócios. Vinícius contesta o pedido, sustentando que já havia prestado as contas extrajudicialmente, bem como efetuado a juntada da prestação de contas em conjunto com a contestação. Nesse caso, continuando o procedimento, o Juiz deverá",
          "alternativas": [
            {
              "letra": "A",
              "texto": "intimar João para se manifestar no prazo de 15 dias."
            },
            {
              "letra": "B",
              "texto": "julgar antecipadamente o mérito, impondo a Vinícius o dever de prestar as contas."
            },
            {
              "letra": "C",
              "texto": "extinguir o processo sem resolução do mérito, ante a falta de interesse de agir de João."
            },
            {
              "letra": "D",
              "texto": "designar, necessariamente, uma audiência de instrução e julgamento para colher o depoimento pessoal das partes, a fim de deslindar a controvérsia."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Processo Civil",
          "enunciado": "A Associação de Defesa dos Usuários de Smartphone (ADUS) ajuizou ação civil pública em face do fabricante X, requerendo a sua condenação para a retirada do aparelho Y do mercado, em razão de vícios em seu processo construtivo. Após a oferta de contestação pelo réu, no curso da fase instrutória, houve abandono imotivado da causa pela Associação. Sobre o caso narrado, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "É vedado ao Poder Público se habilitar como litisconsorte na causa."
            },
            {
              "letra": "B",
              "texto": "O Ministério Público poderá assumir a titularidade da ação, assim como outra associação legitimada."
            },
            {
              "letra": "C",
              "texto": "A ação deverá ser extinta sem resolução do mérito, fundado em abandono da causa, independentemente de requerimento do réu."
            },
            {
              "letra": "D",
              "texto": "A associação, para propor a ação civil pública, deve necessariamente ter sido constituída há pelo menos um ano, vedada a dispensa de tal requisito por decisão judicial."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Daniel chegou em casa embriagado e exigiu que sua esposa, Bianca, praticasse com ele conjunção carnal. Diante da recusa de Bianca, Daniel passou a empregar a coação física contra a sua esposa, porém, os gritos de Bianca foram ouvidos por vizinhos, que lograram entrar no imóvel e imobilizar Daniel, antes que consumasse o ato. Daniel foi denunciado pelo delito de estupro, mas, alguns meses após os fatos, e antes do recebimento da denúncia, Daniel e Bianca reataram o casamento. A você, na qualidade de advogado(a) de defesa de Daniel, cabe alegar",
          "alternativas": [
            {
              "letra": "A",
              "texto": "a retratação tácita da representação da ofendida."
            },
            {
              "letra": "B",
              "texto": "a causa de diminuição de pena em razão da tentativa."
            },
            {
              "letra": "C",
              "texto": "a excludente de ilicitude ante o exercício regular de um direito."
            },
            {
              "letra": "D",
              "texto": "o perdão tácito em razão da manutenção da sociedade conjugal."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Hermenegildo e Ataulfo são amigos desde a infância, mas, devido a divergências políticas, tornaram -se inimigos. Na véspera da eleição para Presidente do Sindicato da classe a qual pertencem, eles se encontraram em um botequim da cidade de Sucupira e o primeiro sacou sua pistola, que estava carregada com 17 munições, e disparou uma vez, com a intenção de matar, na direção de Ataulfo, atingindo-o no joelho. No clima tenso que surgiu depois do ato, Ataulfo lembrou a Hermegildo que ambos formaram o ataque do time de futebol que se sagrou campeão juvenil na escola primária. Hermenegildo, emocionado com a lembrança do ex-amigo, abandonou a arma de fogo no chão e foi embora. Ataulfo sobreviveu sem sequelas. Diante da situação hipotética narrada, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Houve arrependimento voluntário, e Hermenegildo deve responder pelo crime que desejou consumar."
            },
            {
              "letra": "B",
              "texto": "Houve crime impossível, pois a conduta de Hermenegildo mostrou-se absolutamente ineficaz."
            },
            {
              "letra": "C",
              "texto": "Houve tentativa imperfeita, pois a hesitação de Hermenegildo impediu o resultado mais gravoso."
            },
            {
              "letra": "D",
              "texto": "Houve desistência voluntária, e Hermenegildo deve responder pelos atos já praticados."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Leandro e Leonardo planejaram matar Sérgio e, para tanto, resolveram simular um assalto durante o qual aqueles efetuariam disparos com armas de fogo na direção deste. Leandro e Leonardo foram conduzidos ao local em dois carros pilotados, respectivamente, por José e Luciano, que estavam cientes do plano, mas se recusaram a pegar nas armas de fogo. Sérgio faleceu em razão dos ferimentos. Diante da situação hipotética, assinale a opção correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "José e Luciano são partícipes do crime de homicídio doloso consumado praticado por Leandro e Leonardo."
            },
            {
              "letra": "B",
              "texto": "José e Luciano praticaram tentativa de roubo, enquanto Leandro e Leonardo praticaram o crime de homicídio."
            },
            {
              "letra": "C",
              "texto": "José e Luciano são autores colaterais do crime de roubo, enquanto Leandro e Leonardo são autores mediatos do crime de homicídio."
            },
            {
              "letra": "D",
              "texto": "José e Luciano não integram o concurso de agentes, pois somente Leandro e Leonardo detinham o domínio final da empreitada criminosa."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Paulo, ao sair irritado da partida em que o seu clube de futebol havia perdido de goleada para o maior rival, sacou sua arma de fogo e, mesmo não desejando diretamente matar alguém, mas assumindo o risco de fazê -lo, disparou diversas vezes na direção de um a estação de trem, pois tinha ciência de que ela estava lotada e servia como ponto de encontro para a torcida do clube rival. Um dos disparos acabou atingindo fatalmente um padre, que se deslocava em direção à igreja para oficiar a missa. Sobre o crime praticado por Paulo, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Homicídio, mediante dolo eventual."
            },
            {
              "letra": "B",
              "texto": "Homicídio culposo, pois sua intenção não era causar a morte."
            },
            {
              "letra": "C",
              "texto": "Tentativa de homicídio, pois sua intenção não era causar a morte."
            },
            {
              "letra": "D",
              "texto": "Homicídio mediante preterdolo, pois o padre não estava entre os alvos de Paulo."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Josué foi condenado, por sentença transitada em julgado, pela prática do crime de tráfico de drogas, a cumprir a pena de 9 anos de reclusão e 900 dias-multa. Durante a execução da pena, entre as opções de trabalho e estudo que lhe foram ofertadas, Josué optou por aderir aos cursos profissionalizantes a distância, com o objetivo de reduzir o tempo de encarceramento. Diante de tal situação hipotética, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Josué tem direito à remição na razão de um dia de pena para cada dia de estudo."
            },
            {
              "letra": "B",
              "texto": "O tempo de ensino a distância pode ser computado para fins de remição da pena."
            },
            {
              "letra": "C",
              "texto": "Em caso de falta grave, o Juiz poderá revogar a integralidade do tempo remido do ato praticado."
            },
            {
              "letra": "D",
              "texto": "A detração por trabalho na prisão é mais vantajosa do que a remição do tempo de pena pelo estudo."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Pedro costumava consumir maconha. Vislumbrando a perspectiva de lucro, passou a plantá -la e a fabricar artesanalmente cigarros de maconha, mantendo-os parcialmente em depósito e vendendo o restante da produção por meio de aplicativo de mensagens telefônicas. Devido ao aumento da divulgação do serviço prestado, Pedro foi investigado e preso quando possuía, em casa, 500 gramas de maconha, sendo acusado da prática do crime de tráfico de drogas por cinco vezes, haja vista que importou sementes, plantou -as, fabricou cigarros e os manteve em depósito, além de vender parte da produção. Você, como advogado(a), foi constituído(a) por Pedro para atuar no curso da Ação Penal. Sobre o caso narrado, assinale a opção que indica, corretamente, a orientação jurídica que você prestou.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Pedro praticou apenas o crime de porte de drogas para o consumo pessoal, pois a droga foi produzida e apreendida no interior de sua casa."
            },
            {
              "letra": "B",
              "texto": "Pedro praticou o crime de tráfico de drogas por cinco vezes, sob continuidade delitiva, razão pela qual faz jus à mitigação da pena total."
            },
            {
              "letra": "C",
              "texto": "Pedro praticou crime único de tráfico de drogas, pois o tipo penal aplicável ao caso é misto, o que atrai a incidência do princípio da alternatividade."
            },
            {
              "letra": "D",
              "texto": "Pedro praticou o crime de tráfico de drogas por cinco vezes, sob concurso formal, razão pela qual faz jus à mitigação da pena total."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Processo Penal",
          "enunciado": "Marivaldo foi denunciado por organização criminosa e peculato. A denúncia foi lastreada, exclusivamente, no depoimento de Sérgio, corréu, que celebrou acordo de colaboração premiada com o Ministério Público. Assim, recebida a denúncia, foram citados ambos os réus, sendo que a citação de Marivaldo ocorreu no dia 10/05, e a de Sérgio, no dia 20/05 do corrente ano. De acordo com o caso narrado, na qualidade de advogado(a) de Marivaldo, assinale a opção que apresenta a conduta adequada a ser adotada.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O prazo de apresentação da resposta à acusação é de dez dias a contar da citação do último corréu, tratando -se de prazo comum às partes."
            },
            {
              "letra": "B",
              "texto": "O prazo de apresentação da resposta à acusação é de dez dias a contar da citação de Marivaldo, podendo ser encerrado antes do prazo de Sérgio."
            },
            {
              "letra": "C",
              "texto": "Deve ser alegada a violação ao contraditório, pois o corréu delatado deve participar das tratativas de celebração do acordo de colaboração premiada."
            },
            {
              "letra": "D",
              "texto": "Deve ser alegada a ausência de justa causa para o recebimento da denúncia, pois a palavra do colaborador, sem provas de corroboração, é insuficiente para o recebimento da denúncia."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Processo Penal",
          "enunciado": "Vanessa foi denunciada pelo crime de furto por ter subtraído um celular. Na audiência, a prova testemunhal apontou que Vanessa utilizou de grave ameaça, consistente em apontar um revólver para a vítima, como meio de obtenção do celular. A vítima não compareceu à audiência de reconhecimento de pessoas. O Juiz, usando a prova testemunhal, sem qualquer aditamento da denúncia por parte do Ministério Público, condenou Vanessa pelo crime de roubo. Sobre a hipótese, assinale a opção que apresenta, corretamente, o que a defesa deve alegar na apelação.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A violação ao princípio do ne bis in idem."
            },
            {
              "letra": "B",
              "texto": "A violação ao princípio da correlação entre acusação e sentença."
            },
            {
              "letra": "C",
              "texto": "A impossibilidade de a prova testemunhal servir para condenar a ré, inclusive pelo furto."
            },
            {
              "letra": "D",
              "texto": "A nulidade do processo, porque a condenação dependeria necessariamente do reconhecimento pessoal feito pela vítima."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Processo Penal",
          "enunciado": "Anderson está sendo investigado pela prática do crime de extorsão mediante sequestro. Depois da quebra dos sigilos bancários e fiscal, a polícia efetuou o indiciamento de Anderson, sendo certo que não existia mais nenhuma diligência pendente. A defesa de Anderson requereu o acesso aos autos da investigação, que foi negado pelo Delegado de Polícia, com o argumento da inquisitividade e sigilo do inquérito policial. O Juiz também negou o acesso afirmando que o inquérito é sigiloso e possuía extratos bancários e fiscais. Assinale a opção que indica, corretamente, o argumento que você, na condição de advogado(a), deve usar no recurso para garantir o acesso ao inquérito.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O princípio de in dubio pro reo."
            },
            {
              "letra": "B",
              "texto": "O direito absoluto de acessar o inquérito, em qualquer hipótese, como consectário da ampla defesa."
            },
            {
              "letra": "C",
              "texto": "O princípio da publicidade, que deve ser aplicado tanto na fase de investigação quanto na fase processual."
            },
            {
              "letra": "D",
              "texto": "É direito do advogado regularmente constituído ter acesso às diligências já documentadas, somado ao fato de não existir nenhuma diligência pendente."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Processo Penal",
          "enunciado": "Nicola injuriou Robson e Carlos, servidores públicos federais, por fatos relacionados a times de futebol, mas sem caráter racial na injúria. Robson ofereceu queixa-crime, ao passo que Carlos deixou passar o prazo de decadência. O Juiz extinguiu a punibilidade, sob o argumento de que a decadência do direito de um dos envolvidos provocava a extinção de punibilidade em relação a todos. Assinale a opção que apresenta o recurso que você, na condição de advogado(a) de Robson, deve apresentar.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O princípio da eventualidade demonstra o equívoco da decisão do Juiz."
            },
            {
              "letra": "B",
              "texto": "O direito de queixa é autônomo para cada vítima, o que torna impossível, juridicamente, a extensão da decadência nesse caso."
            },
            {
              "letra": "C",
              "texto": "A decadência não extingue a punibilidade, sendo apenas uma causa de diminuição a ser levada em consideração na dosimetria da pena."
            },
            {
              "letra": "D",
              "texto": "A propositura de queixa por parte de Robson interrompeu o prazo de decadência para Carlos, uma vez que não há que se falar em extinção de punibilidade."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Processo Penal",
          "enunciado": "Leandro oferece queixa-crime no Juizado Especial Criminal. O Juiz rejeita a queixa sustentando a existência de decadência. Na condição de advogado(a) de Leandro, assinale a opção que indica, corretamente, o recurso que deve ser interposto contra a decisão que rejeitou a queixa.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Apelação."
            },
            {
              "letra": "B",
              "texto": "Recurso inominado."
            },
            {
              "letra": "C",
              "texto": "Carta testemunhável."
            },
            {
              "letra": "D",
              "texto": "Recurso em sentido estrito."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Débora, primária e sem antecedentes, foi presa em flagrante no Aeroporto Internacional de Guarulhos, quando desembarcava no Brasil, em voo vindo do exterior, com um artefato que simulava uma arma de fogo de uso proibido na bagagem, ou seja, um simulacro que pode facilmente ser confundido com uma arma de fogo real. O simulacro é produto de importação proibida no Brasil. Débora foi enquadrada no delito de tráfico internacional de armas, previsto no Art. 18 do Estatuto do Desarmamento, cuja pena cominada é de 8 a 16 anos de reclusão, com a causa de aumento de metade (Art. 19 do Estatuto). A Polícia Federal lavrou o auto de prisão em flagrante e Débora foi submetida à audiência de custódia perante o Juiz Federal de Guarulhos. Como advogado(a) de Débora, assinale a afirmativa que contém as teses defensivas corretas.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A atipicidade do fato, ante o crime impossível e, ainda que assim não fosse, há incompetência absoluta da Justiça Federal."
            },
            {
              "letra": "B",
              "texto": "A desclassificação para contrabando (pena de 2 a 5 anos) e o cabimento de liberdade provisória, com ou sem medidas cautelares diversas da prisão."
            },
            {
              "letra": "C",
              "texto": "Como Débora é mulher e não tem antecedentes criminais, e o fato não foi cometido mediante violência ou grave ameaça, é cabível a substituição da prisão preventiva por domiciliar."
            },
            {
              "letra": "D",
              "texto": "O fato foi meramente tentado, de forma que a pena mínima cominada com a redução máxima pela tentativa é igual a 4 anos, tornando cabível o acordo de não persecução penal."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Previdenciário",
          "enunciado": "Antônio José, segurado obrigatório do Regime Geral de Previdência Social, completou 65 anos de idade, após 30 anos ininterruptos de atividade remunerada como segurado empregado. Diante disso, procurou você, como advogado(a), para ser orientado sobre sua aposentadoria. Assinale a opção que apresenta, corretamente, a sua orientação.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Antônio não possui carência para fins de aposentadoria."
            },
            {
              "letra": "B",
              "texto": "Antônio já possui idade e carência para fins de aposentadoria."
            },
            {
              "letra": "C",
              "texto": "Antônio somente poderia, no caso narrado, se aposentar após 35 anos de contribuição."
            },
            {
              "letra": "D",
              "texto": "Antônio não possui idade mínima, na forma fixada pela Constituição da República de 1988."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Previdenciário",
          "enunciado": "Manuela Dias, empregada doméstica, procurou você, como advogado(a), para receber orientação jurídica para uma demanda relacionada a acidente de trabalho, que ocorreu durante os seus afazeres diários na residência da empregadora doméstica, que gerou incapacidade temporária. Assinale a opção que indica a orientação correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Manuela poderá usufruir de benefício previdenciário por incapacidade temporária, ainda que possua menos de 12 contribuições mensais."
            },
            {
              "letra": "B",
              "texto": "O acidente de trabalho somente será reconhecido como tal caso haja incapacidade mínima de seis meses para o trabalho, avaliada por perícia médica."
            },
            {
              "letra": "C",
              "texto": "A conexão da incapacidade com o trabalho poderá ser aferida pelo INSS, mas nunca com a aplicação do Nexo Técnico Epidemiológico Previdenciário – NTEP."
            },
            {
              "letra": "D",
              "texto": "A incapacidade de Manuela, na situação narrada, nunca poderia ser decorrente de doenças, pois o acidente de trabalho é sempre súbito, imediato e instantâneo."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito do Trabalho",
          "enunciado": "Paulo foi contratado pela sociedade empresária Novos Horizontes para exercer a função de técnico em informática. João trabalha no mesmo setor e, por força de readaptação, exerce a mesma função de Paulo há seis meses. Luciana foi contratada um ano depois de Paulo, e ambos exercem a mesma função, não havendo diferença no trabalho realizado pelos três empregados. A sociedade empresária não tinha pessoal organizado em quadro de carreira, e o trabalho era distribuído entre os três indistintamente. Contudo, João recebia R$ 600,00 (seiscentos reais) a mais que Paulo, que, por sua vez recebia R$ 500,00 (quinhentos reais ) a mais de salário que Luciana. Diante disso, você, como advogado(a), foi consultado(a) por Luciana acerca da diferença salarial. Assinale a opção que apresenta a resposta correta dada ao questionamento.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A diferença salarial não se justifica em nenhuma das hipóteses, cabendo a equiparação ao salário de maior valor."
            },
            {
              "letra": "B",
              "texto": "Paulo pode ganhar mais que Luciana pelo fato de ser homem, mas, em relação a João, a diferença salarial é injustificável."
            },
            {
              "letra": "C",
              "texto": "Paulo pode ganhar mais que Luciana em razão do tempo na função, que é a razão de Luciana não fazer jus ao mesmo salário que João."
            },
            {
              "letra": "D",
              "texto": "A diferença salarial de Luciana em relação a Paulo não se justifica, pelo que os dois deveriam receber o mesmo salário, mas no caso de João, por ser readaptado, a diferença salarial é cabível."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito do Trabalho",
          "enunciado": "Uma Organização não Governamental está realizando uma série de parcerias com entidades privadas visando à inserção e ao aprendizado de menores no mercado de trabalho, a fim de estimular o primeiro emprego, bem como evitar os riscos de envolvimento com a criminalidade. Diante disso, consultou você, na qualidade de advogado(a), a respeito do trabalho do menor como empregado. Assinale a opção que apresenta, corretamente, a sua orientação sobre o caso.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "É permitido ao menor de 18 e maior de 16 anos, o trabalho em bilheterias em cinemas e teatros, das 22 às 24 horas, a fim de não gerar prejuízo à frequência escolar."
            },
            {
              "letra": "B",
              "texto": "É permitido ao maior de 16 anos e menor de 18 anos, o trabalho como frentista em postos de gasolina."
            },
            {
              "letra": "C",
              "texto": "É permitido ao menor o trabalho em quiosques da orla das praias destinados à venda de comidas de todo o gênero e bebidas alcoólicas e não alcoólicas."
            },
            {
              "letra": "D",
              "texto": "É permitido ao menor, a partir de 14 anos, trabalhar na condição de aprendiz."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito do Trabalho",
          "enunciado": "Pedro trabalha numa sociedade empresária desde 2022. Na norma coletiva da categoria de Pedro há uma cláusula que fixa o intervalo intrajornada de 20 minutos para a jornada superior a seis horas diárias e, outra cláusula, prevendo que a remuneração do trabalho noturno será igual à do diurno. Considerando o que foi estipulado na norma coletiva, de acordo com a CLT, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Ambas as cláusulas da norma coletiva são inválidas."
            },
            {
              "letra": "B",
              "texto": "Somente a cláusula relativa ao trabalho noturno é válida."
            },
            {
              "letra": "C",
              "texto": "Somente a cláusula relativa ao intervalo intrajornada é válida."
            },
            {
              "letra": "D",
              "texto": "Ambas as cláusulas são válidas, porque relativas a direitos passíveis de negociação."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito do Trabalho",
          "enunciado": "A sociedade empresária Distribuidora de Bebidas Bom Paladar Ltda. pretende instituir uma política de incentivo aos seus empregados. Para tanto, deseja dar benefícios compreendidos em melhorias da condição de trabalho, com o fornecimento de uniformes novos, mais leves e confortáveis, computadores portáteis, transporte co letivo de ida e volta para o trabalho em ônibus da sociedade empresária, além de incentivo à educação, com pagamento de mensalidades e bolsa -livros para todos os empregados. Você foi procurado(a), como advogado(a), para responder à consulta da sociedade empresária acerca da integração dos valores à remuneração dos empregados. Diante disso, observado o texto da CLT, assinale a afirmativa que, corretamente, apresenta a sua resposta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Todos os benefícios concedidos não integrarão a remuneração dos empregados."
            },
            {
              "letra": "B",
              "texto": "Apenas a concessão de uniformes novos não integrará a remuneração dos empregados."
            },
            {
              "letra": "C",
              "texto": "Apenas o benefício de incentivo à educação não integrará a remuneração dos empregados."
            },
            {
              "letra": "D",
              "texto": "Apenas o fornecimento de transporte não integrará a remuneração dos empregados, por ser tempo à disposição do empregador."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito do Trabalho",
          "enunciado": "Jonas trabalhava em uma sociedade empresária desde 2021. Com a nova chefia, que assumiu em janeiro de 2025, Jonas passou a ser explícita e sistematicamente discriminado pelo chefe em razão de sua orientação sexual, já que mantinha uma relação homoafetiva que era de conhecimento geral. Jonas foi dispensado, sem justa causa, em março de 2025. Em razão disso, Jonas o(a) procurou, na condição de advogado(a), para conhecer dos seus direitos. Assinale a opção que, considerando os fatos narrados e a norma de regência, apresenta, corretamente, sua orientação jurídica para o caso.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Nada há a fazer, porque é direito do empregador efetuar a dispensa sem justa causa."
            },
            {
              "letra": "B",
              "texto": "O direito que assiste a Jonas é ser reintegrado, com ressarcimento integral de todo o período de afastamento."
            },
            {
              "letra": "C",
              "texto": "Jonas poderá optar entre a reintegração ou a percepção, em dobro, da remuneração do período de afastamento."
            },
            {
              "letra": "D",
              "texto": "Caberá apenas o pagamento, de forma simples, do período compreendido entre a dispensa e o ajuizamento da ação."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito do Trabalho",
          "enunciado": "Jorge Lucas trabalhou por um ano na sociedade empresária Alfa Beta Gama Ltda . Insatisfeito por trabalhar várias horas extras diárias sem recebê -las, apesar de consignar corretamente a sobrejornada nos controles de ponto, Jorge Lucas pediu demissão. Na rescisão do contrato de trabalho, por um equívoco do Departamento de Pessoal, foi pago um valor equivalente ao aviso prévio. Dias depois, Jorge Lucas ajuizou reclamação trabalhista pleiteando horas extras. A sociedade empresária contratou você, como advogado(a), para defendê-la. Acerca do que poderá ser alegado sobre o equívoco do pagamento a mais de aviso prévio, à luz do entendimento consolidado na jurisprudência do Tribunal Superior do Trabalho (TST), assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Tendo sido pago o valor do aviso prévio espontaneamente pela sociedade empresária, está preclusa qualquer argumentação a esse respeito."
            },
            {
              "letra": "B",
              "texto": "Deverá ser alegada a dedução dos valores pagos a título de aviso prévio da condenação ao pagamento dos valores relativos às horas extras."
            },
            {
              "letra": "C",
              "texto": "Deverá ser alegada a compensação do valor pago a título do aviso prévio com eventual condenação em horas extras, o que deverá ser feito em sede de contestação."
            },
            {
              "letra": "D",
              "texto": "Deverá ser alegada a quitação do valor pago a título do aviso prévio com eventual condenação em horas extras, o que poderá ser feito em qualquer momento processual na instância ordinária."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Processo do Trabalho",
          "enunciado": "Em determinada reclamação trabalhista que tramita perante a 60ª Vara do Trabalho de Maringá, PR, o autor requereu o pagamento do vale-transporte, que jamais fora pago, e as diferenças do FGTS, afirmando que, em parte do contrato, ele não foi depositado pelo ex-empregador na conta vinculada. Em defesa, a sociedade empresária sustentou que o empregado não necessitava de vale -transporte, porque ele residia próximo à sede da sociedade empresária em que exercia as suas atividades, deslocando-se a pé para ir ao serviço e voltar, e que recolheu de forma escorreita o FGTS. Sobre o ônus da prova, considerando os fatos narrados e o entendimento consolidado do Tribunal Superior do Trabalho (TST), assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Tanto em relação ao vale -transporte quanto ao FGTS, o ônus da prova caberá ao empregado."
            },
            {
              "letra": "B",
              "texto": "Em relação ao vale-transporte caberá à sociedade empresária; quanto ao FGTS, ao trabalhador."
            },
            {
              "letra": "C",
              "texto": "Em relação ao vale-transporte, caberá ao trabalhador; quanto ao FGTS, à sociedade empresária."
            },
            {
              "letra": "D",
              "texto": "Tanto em relação ao vale -transporte quanto ao FGTS, o ônus da prova caberá à sociedade empresária."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Processo do Trabalho",
          "enunciado": "Em determinada reclamação trabalhista que tramita perante a 58ª Vara do Trabalho de Cuiabá, MT, o pedido formulado foi julgado procedente em parte. A sociedade empresária reclamada recorreu ordinariamente e o reclamante, de forma adesiva. Distribuídos os apelos pelo Tribunal Regional, o Relator verificou que o recurso ordinário da reclamada se encontrava intempestivo, já que interposto no 16º dia contado da publicação da sentença. Considerando esses fatos e a norma de regência, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Os dois recursos não serão conhecidos."
            },
            {
              "letra": "B",
              "texto": "O recurso ordinário não será conhecido, e o recurso adesivo será apreciado."
            },
            {
              "letra": "C",
              "texto": "O recurso adesivo não será conhecido, salvo se o reclamante recorrente tiver feito o preparo na forma da lei."
            },
            {
              "letra": "D",
              "texto": "Equivocado o Relator, pois, havendo recurso adesivo, o prazo é contado em dobro, pelo que o recurso ordinário é tempestivo e será conhecido."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Processo do Trabalho",
          "enunciado": "Daniele, assistida pelo seu sindicato de classe, ajuizou reclamação trabalhista contra o seu ex -empregador. Na audiência, as partes chegaram a um acordo de R$ 200.000,00 (duzentos mil reais), mas o Juiz indeferiu a concessão de gratuidade de justiça à auto ra, porque a situação financeira dela era, comprovadamente, muito confortável. O Juiz fixou as custas em R$ 4.000,00 (quatro mil reais). Considerando esses fatos e o previsto na CLT, uma vez que nada foi convencionado no acordo, assinale a opção que indica quem pagará as custas.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O reclamado, pois as custas sempre serão pagas pelo réu."
            },
            {
              "letra": "B",
              "texto": "O sindicato de classe deverá pagar as custas, integralmente."
            },
            {
              "letra": "C",
              "texto": "Daniele, pois além da sua situação financeira, fez um acordo de vultoso valor."
            },
            {
              "letra": "D",
              "texto": "Se de outra forma não for convencionado, o pagamento das custas caberá em partes iguais aos litigantes."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Processo do Trabalho",
          "enunciado": "Jonas, executado na Justiça do Trabalho, reclamou com você, na condição de advogado(a), porque um Oficial de Justiça chegou à residência dele, em uma quinta-feira, dia útil, às 5h30, com ordem judicial para penhorar o seu imóvel, sendo certo que o mandado de penhora não continha nenhuma previsão de excepcionalidade. A revolta do executado reside no horário de chegada do Oficial de Justiça à sua residência, o que o obrigou a acordar muito cedo, o mesmo valendo para sua esposa. Sobre os fatos apresentados, considerando o previsto na CLT, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O procedimento é regular porque a lei não prevê horário para a prática dos atos processuais."
            },
            {
              "letra": "B",
              "texto": "O Oficial de Justiça está equivocado, porque somente poderia realizar o ato processual a partir das 6 horas."
            },
            {
              "letra": "C",
              "texto": "O procedimento é irregular, porque a lei prevê que os atos processuais podem ser feitos a partir das 7 horas."
            },
            {
              "letra": "D",
              "texto": "Se os atos podem ser realizados até mesmo no domingo, mesmo sem a autorização do Juiz, com igual razão pode ser feito durante a semana, às 5h30."
            }
          ],
          "respostaCorreta": 1
        }
      ]
    }
,
    {
      "provaOrigem": "44º Exame de Ordem Unificado",
      "questoes": [
        {
          "territorio": "Ética",
          "enunciado": "Antônia, advogada atuante na área previdenciária, foi consultada por Osvaldo sobre a possibilidade de propor ação judicial contra decisão do Instituto Nacional do Seguro Social (INSS), visando à obtenção de benefício previdenciário indeferido na via administrativa. Ao estudar o caso, Antônia verificou que o indeferimento do benefício havia se dado com base em dispositivo claro e expresso da lei que dispõe sobre o Plano de Benefícios da Previdência Social; e que não havia, até aquele momento, notícia de precedente judicial favorável à pretensão de Osvaldo. Essas informações, bem como os riscos de eventual ação judicial, foram prestadas de modo claro e inequívoco por Antônia ao cliente. No entanto, d evido à insistência de Osvaldo, Antônia decidiu propor a demanda judicial. Com base nesse cenário, considerando o regime das infrações e sanções disciplinares da Advocacia, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Antônia advogou contra literal disposição de lei, o que, não obstante seja conduta irrelevante no regime das infrações disciplinares, poderá sujeitá-la a eventual sanção por litigância de má-fé aplicada pelo juiz da causa."
            },
            {
              "letra": "B",
              "texto": "Antônia advogou contra literal disposição de lei, conduta qu e poderá sujeitá-la, perante o órgão competente da OAB, à pena isolada de multa."
            },
            {
              "letra": "C",
              "texto": "Antônia advogou contra literal disposição de lei, porém poderá contar com a presunção de boa -fé em seu favor, caso tenha fundamentado seu pedido na inconstitucionalidade o u na injustiça da lei."
            },
            {
              "letra": "D",
              "texto": "Antônia advogou contra literal disposição de lei, conduta que não possui relevância jurídico -disciplinar, mesmo porque a atuação da advocacia deve ser a mais ampla possível na defesa dos interesses de seus clientes."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Ética",
          "enunciado": "Roberto, advogado autônomo com destacada atuação no Direito Criminal, foi investido no cargo de diretor jurídico da Nossa Estatal, empresa pública federal que atua no mercado financeiro em regime de competição com o setor privado. Acerca da nova condição profissional de Roberto, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A nova atividade exercida por Roberto caracteriza incompatibilidade para o exercício da advocacia, mesmo em causa própria."
            },
            {
              "letra": "B",
              "texto": "Durante o período da investidura, Roberto estará exclusivamente legitimado para o exercício da advocacia vinculada ao cargo de diretor jurídico."
            },
            {
              "letra": "C",
              "texto": "Roberto, durante o período da investidura, somente não poderá atuar como advogado autônomo contra a Fazenda Pública à qual está vinculada sua entidade empregadora."
            },
            {
              "letra": "D",
              "texto": "Uma vez que a atuação de Roberto é na área criminal, sem relação direta com o mercado financeiro, Roberto poderá continuar exercendo normalmente a advocacia autônoma."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Ética",
          "enunciado": "Gustavo, conhecido comerciante de Brasília/DF, obteve graduação no c urso de Direito. Em sequência, foi aprovado no Exame de Ordem, e, em razão disso, inscreveu-se como advogado na OAB. Desejando conciliar as atividades de comércio com o exercício da advocacia, decidiu reunir, em um mesmo estabelecimento, seu escritório de advocacia e sua loja comercial, adaptando a fachada do prédio para identificar que, naquele local, praticava -se, conjuntamente, o comércio e a advocacia. Para solucionar a parte contábil, decidiu elaborar aditivo ao contrato social da sua sociedade empresá ria de comércio, tendo incorporado, como finalidade adicional da pessoa jurídica, a atividade de advocacia. Em função da expansão do negócio, admitiu sócios sem formação jurídica na sociedade, para que esses últimos conduzissem a parte comercial, e ele, Gu stavo, pudesse se dedicar à prestação de serviços jurídicos. Sobre a natureza e as características da sociedade de advogados e sobre sua constituição e registro, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "É possível a admissão de sócio não advogado nas sociedades advocatícias, sendo proibido apenas que a razão social contenha o nome daquele sócio não inscrito na OAB."
            },
            {
              "letra": "B",
              "texto": "A sociedade criada por Gustavo não pode ser admitida a registro, porque congrega serviços de advocacia com atividades estranhas à prática advocatícia, além de contar com sócios não inscritos como advogado."
            },
            {
              "letra": "C",
              "texto": "Apesar de ser admitida a realização de atividades estranhas à advocacia por parte da sociedade de advogados, a sociedade fundada por Gustavo não pode ser registrada por incluir como sócio pessoa não inscrita como advogado."
            },
            {
              "letra": "D",
              "texto": "A conduta adotada por Gustavo de incorporar serviços de comércio e advocatícios em uma mesma pessoa jurídica, a despeito de pouco usual, é válida, porque se admite o registro nas juntas comerciais de sociedade que inclua, entre suas finalidades, a atividade de advocacia."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Ética",
          "enunciado": "O Presidente do Conselho Seccional da Ordem dos Advogados do Brasil do Estado Alfa recebeu representação devidamente identificada, contendo narrativa fática indicat iva da prática de infração disciplinar pelo advogado Paulo. O autor da representação apresentou documentos, rol de testemunhas e indicou a produção de provas. Ato contínuo, o Presidente imediatamente designou relator para a competente instrução do processo disciplinar. Considerando a legislação que rege o processo disciplinar do advogado, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Se a infração ético -disciplinar apontada na representação for punível com a sanção de censura, será admissível a celebração de termo de ajustamento de conduta, desde que o fato apurado não tenha gerado repercussão negativa à advocacia."
            },
            {
              "letra": "B",
              "texto": "A autoridade competente que proferir o despacho declaratório da instauração do processo disciplinar deverá, no mesmo ato, promover a suspensão preventiva de Paulo pelo prazo de até 90 (noventa) dias."
            },
            {
              "letra": "C",
              "texto": "Na hipótese de arquivamento liminar da representação pelo Presidente do Conselho Seccional, caberá recurso ao Conselho Federal da OAB."
            },
            {
              "letra": "D",
              "texto": "A designação imediata de relator pelo Presidente do Conselho Seccional, sem a prévia oitiva de Paulo, viola o princípio da ampla defesa."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Ética",
          "enunciado": "O advogado Gomes representou Dênis em uma ação de responsabilidade civil contra o Banco Alfa, tendo firmado contrato escrito com Dênis, no qual foi estipul ado que Gomes receberia honorários convencionais de 20% sobre o proveito econômico obtido, além dos honorários sucumbenciais que fossem concedidos. No entanto, Dênis entrou em contato diretamente com o advogado do Banco Alfa e firmou um acordo extrajudicia l para receber R$ 5.000,00 de indenização por danos morais, sem a participação de Gomes e renunciando aos direitos aos honorários advocatícios. Gomes foi informado do acordo posteriormente. Sobre o caso relatado, com base no Art. 24 do Estatuto da Advocacia e da OAB, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Dênis tem o direito de renunciar aos honorários advocatícios convencionados e sucumbenciais, desde que tenha feito isso expressamente no acordo com o Banco Alfa, e isso prejudica o direito de Gomes de receber qualquer valor."
            },
            {
              "letra": "B",
              "texto": "O acordo firmado por Dênis com o Banco Alfa retira o direito de Gomes aos honorários convencionados, mas Gomes ainda pode pleitear apenas os honorários sucumbenciais, desde que haja condenação judicial."
            },
            {
              "letra": "C",
              "texto": "Gomes mantém o direito aos honorários convencionados e sucumbenciais, independentemente do acordo realizado por Dênis com o Banco Alfa, uma vez que o acordo não prejudica o advogado sem sua aquiescência."
            },
            {
              "letra": "D",
              "texto": "Gomes somente poderá cobrar os honorários convencionados se houver uma decisão judicial declarando nulo o acordo firmado entre Dênis e o Banco Alfa."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Ética",
          "enunciado": "O advogado Ivan precisava embarcar em um voo doméstico de Recife para Curitiba, a fim de participar do Congresso Brasileiro de Direito de Família. Ao chegar ao balcão de check-in, percebeu que havia esquecido todos os seus documentos de identificação em seu escritório, com exceção da carteira da Ordem dos Advogados do Brasil (OAB), na qual consta sua foto. A responsável pelo atendimento da companhia aérea informou que não aceitaria a carteira da OAB como documento de identidade e, por iss o, Ivan estaria impedido de embarcar. Ivan argumentou que o documento deveria ser aceito como prova de identidade civil, uma vez que é o único documento de identidade profissional obrigatório para o exercício da advocacia. Sobre a hipótese, com base no Estatuto da Ordem dos Advogados do Brasil, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Ivan não poderá embarcar, pois a carteira da OAB não é considerada documento de identidade civil válido para viagens nacionais em aviões."
            },
            {
              "letra": "B",
              "texto": "Ivan poderá embarcar, pois a carteira d a OAB constitui prova de identidade civil para todos os fins legais, inclusive para viagens nacionais em aviões."
            },
            {
              "letra": "C",
              "texto": "Ivan somente poderá embarcar se apresentar outro documento de identificação civil junto com a carteira da OAB, como medida de segurança adicional."
            },
            {
              "letra": "D",
              "texto": "Ivan não poderá embarcar, pois a carteira da OAB só é válida como documento de identificação quando utilizada em exercício da atividade profissional em fóruns e tribunais."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Ética",
          "enunciado": "No âmbito de investigação sigilosa, o Magistrado com petente decretou a prisão de João, amigo íntimo de Carlos. Carlos é advogado regularmente inscrito na Ordem dos Advogados do Brasil. Ao saber do cumprimento do mandado, com a consequente custódia de João, Carlos se dirigiu à delegacia e, em seguida, procurou o Magistrado plantonista para tratar do caso. Nesse contexto, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Carlos somente terá acesso aos autos da investigação que culminou na prisão de João se apresentar procuração para representá-lo. Nesse caso, deve lhe ser f ranqueado amplo acesso aos elementos de prova colhidos pela autoridade policial, não sendo possível a imposição de qualquer limitação."
            },
            {
              "letra": "B",
              "texto": "Carlos deverá ter acesso aos autos da investigação que culminou na prisão de João, independentemente da apresentação de procuração para representá -lo. Ademais, deve lhe ser franqueado amplo acesso aos elementos de prova colhidos pela autoridade policial, não sendo possível a imposição de qualquer limitação."
            },
            {
              "letra": "C",
              "texto": "Carlos somente terá acesso aos autos da investi gação que culminou na prisão de João se apresentar procuração para representá-lo. Entretanto, o acesso aos elementos de prova colhidos pela autoridade policial poderá ser delimitado, desde que relacionados a diligências em andamento e ainda não documentados nos autos, desde que haja comprovado risco de comprometimento da eficiência, da eficácia ou da finalidade da investigação."
            },
            {
              "letra": "D",
              "texto": "Carlos deverá ter acesso aos autos da investigação que culminou na prisão de João, independentemente da apresentação de procuração para representá-lo. Entretanto, o acesso aos elementos de prova colhidos pela autoridade policial poderá ser delimitado, ainda que relacionados a diligências já encerradas e devidamente documentadas nos autos, desde que haja comprovado risco de comprometimento da eficiência, da eficácia ou da finalidade da investigação."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Ética",
          "enunciado": "Euclides é advogado regularmente inscrito na OAB e foi flagrado praticando assédio sexual contra diversas colaboradoras de seu escritório, conduta que foi amplamente divulgada na imprensa regional após a veiculação de imagens captadas por câmeras de segurança, nas quais o advogado aparece se insinuando de forma inapropriada. O caso causou grande repercussão regional, afetando a imagem da Advocacia. Diante disso, o Tribunal de Ética e Disciplina do Conselho Seccional determinou a suspensão preventiva de Euclides, designando sessão especial para ouvi -lo na semana seguinte à suspensão. No mesmo ato, o Tribunal estabeleceu que o processo disciplinar deveria ser concluído em prazo máximo de 180 dias. Com base no Estatuto da Advocacia e da OAB, sobre a decisão do Tribunal, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O procedimento adotado foi regular, pois diante da gravidade dos fatos e da ampla repercussão, o Tribunal de Ética pode suspender preventivamente o advogado e prorrogar o prazo do processo disciplinar para até 180 dias."
            },
            {
              "letra": "B",
              "texto": "O procedimento adotado foi válido apenas quanto à suspensão, pois o Estatuto admite a suspensão preventiva sem qualquer necessidade de notificação ou sessão de oitiva, desde que haja repercussão negativa à imagem da OAB."
            },
            {
              "letra": "C",
              "texto": "O procedimento foi irregular, porque a suspensão preventiva do advogado somente é válida se o representado for previamente notificado ou, depois de notificado, não comparecer, e o prazo máximo do processo, na hipótese, é de 90 dias."
            },
            {
              "letra": "D",
              "texto": "O procedimento adotado foi regular quanto ao prazo máximo de duração do processo disciplinar, mas irregular quanto à suspensão preventiva, pois, embora seja cabível, a oitiva do advogado deve ocorr er antes da suspensão, e não posteriormente."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Filosofia do Direito",
          "enunciado": "John Locke, em seu Segundo Tratado sobre o Governo , fala da instituição de uma sociedade política onde devem vigorar não mais as leis da natureza, mas as leis feitas pelo poder civil. Portanto, nessa sociedade política, o parlamento faz as leis para que sejam cumpridas. Assinale a opção que, segundo Lock e no livro em referência, expressa corretamente a ideia de cumprimento e obediência às leis civis.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Todas as pessoas, as mais distintas e as mais modestas, estão sujeitas às leis feitas pelo parlamento, inclusive os próprios parlamentares, pois ninguém pode, na sociedade civil, isentar- se das leis que a regem."
            },
            {
              "letra": "B",
              "texto": "Os cidadãos ficam sujeitos às leis do governo civil após o contrato social, mas o soberano, encarnado nos agentes do governo, não faz parte do pacto e, por isso, não deve obediência às leis que produz."
            },
            {
              "letra": "C",
              "texto": "Os cidadãos e os governantes estão sujeitos às leis instituídas após o contrato social, contudo as autoridades religiosas, ainda que vivam na sociedade civil, não devem obediência às leis, mas, sim, a Deus."
            },
            {
              "letra": "D",
              "texto": "Os governantes, responsá veis pela administração da sociedade política, e os governados devem se submeter ao império da lei, contudo, parlamentares e magistrados estão isentos da obediência à lei para exercerem seu ofício de forma livre e soberana."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Filosofia do Direito",
          "enunciado": "O Artigo 5º , inciso XI, da CRFB/88 dispõe que “ a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.” João Vicente, que residia em um quarto de hotel, procura você, na função de advogado(a), para tentar anular o ingresso policial, sem mandado judicial e sem flagrante delito, utilizando como fundamento a norma constitucional acima citada. Assinale a opção que indica o tipo de interpretação adequado para fundamentar a ilegalidade do ingresso.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Interpretação gramatical, baseada no brocardo in claris cessat interpretatio."
            },
            {
              "letra": "B",
              "texto": "Interpretação restritiva, sob o argumento de que não se pode usar um conceito de modo amplo."
            },
            {
              "letra": "C",
              "texto": "Interpretação autêntica, usando conceito semelhante previsto em norma de Direito Civil, que possui legislação específica acerca do alcance semântico do domicílio."
            },
            {
              "letra": "D",
              "texto": "Interpretação extensiva, usando a argumentação de que o alcance da norma e do conceito de casa é mais amplo do que o utilizado pela autoridade policial, a fim de abarcar aquele que reside em quarto de hotel."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Constitucional",
          "enunciado": "Após diversos indicadores de qualidade da saúde evidenciarem que, entre todos os estados da Federação, o Estado Delta é aquele que oferta o pior serviço de saúde à sua população, o governador desse Estado prometeu elevado investimento público na área. Ele assegurou que iria trabalhar junto à Assembleia Legislativa no sentido de aumentar a dotação orçamentária dos hospitais públicos estaduais, como, também, auxiliar financeiramente os hospitais privados que comprovassem, por vias fidedignas, que sua margem de lucro estaria sendo insufic iente para investir em uma melhor qualidade no atendimento. Sobre o posicionamento do governador, segundo a perspectiva jurídico-constitucional, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Ele poderá cumprir sua promessa, contanto que não ultrapasse o percentual má ximo de gastos constitucionalmente permitidos para os serviços de saúde."
            },
            {
              "letra": "B",
              "texto": "Ele poderá promover a política de saúde indicada, porque, como chefe do Poder Executivo de ente federativo autônomo, é ele quem determina as ações de governo."
            },
            {
              "letra": "C",
              "texto": "Ele não está au torizado a destinar recursos públicos para auxiliar hospitais privados que possuam a característica explicitada no caso narrado."
            },
            {
              "letra": "D",
              "texto": "Ele não poderá concretizar sua promessa, já que a matéria orçamentária em temas relacionados ao cuidado e à defesa da saúde é de competência exclusiva da União."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Constitucional",
          "enunciado": "Um consumidor, cliente de instituição financeira constituída sob a forma de sociedade de economia mista federal, teve seu nome negativado indevidamente em um cadastro de devedores. Por essa razão, procurou você, na qualidade de advogado(a), para saber se seria possível ingressar, de acordo com a Constituição da República, com uma ação de responsabilidade civil em face da referida instituição no âmbito da Justiça Federal. Com base na situação descrita e no sistema jurídico-constitucional brasileiro, assinale a opção que apresenta, corretamente, sua resposta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A competência para apreciar a ação de responsabilidade civil a ser proposta é da Justiça Federal, pois a União, indiretamente, figura no polo passivo."
            },
            {
              "letra": "B",
              "texto": "A ação deve ser proposta perante a Justiça Estadual, não perante a Justiça Federal, isto se o referido foro tiver sido definido pela lei que autorizou a criação da instituição financeira."
            },
            {
              "letra": "C",
              "texto": "Por se tratar de sociedade de economia mista federal, a competência originária para a apreciação da ação de responsabilidade civil é do Tribunal Regional Federal da região do consumidor."
            },
            {
              "letra": "D",
              "texto": "A despeito de possuir a União como seu sócio majoritário, a ação de responsabilidade civil em face da instituição financeira deve ser proposta na Justiça Estadual."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Constitucional",
          "enunciado": "No Estado Sigma foi promulgada a Lei Estadual nº X/2024, que aborda matéria de Direito Financeiro. Ocorre que os dispositivos desse diploma normativo entram em confli to com as normas do Ato das Disposições Constitucionais Transitórias (ADCT) que ainda produzem seus naturais efeitos. O Presidente do Partido Político Delta, o deputado federal João Silva, sem possuir conhecimentos jurídicos, resolve consultar você, como a dvogado(a), para saber se poderia questionar a constitucionalidade das normas da Lei Estadual nº X/2024, por afrontarem as normas do ADCT. Assinale a opção que indica a resposta correta à consulta formulada.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Embora federais, as normas do ADCT possuem hierarquia legal, razão pela qual não poderia haver controle de constitucionalidade, mas controle de legalidade da Lei Estadual nº X/2024."
            },
            {
              "letra": "B",
              "texto": "As normas do ADCT, por possuírem status supralegal, poderiam servir de parâmetro para aferir a validade d a Lei Estadual nº X/2024, muito embora não pudessem ser consideradas normas paramétricas para o controle de constitucionalidade."
            },
            {
              "letra": "C",
              "texto": "Na medida em que as normas do ADCT têm estatura constitucional, pode ser proposta Ação Direta de Inconstitucionalidade para que seja reconhecida a inconstitucionalidade das normas da Lei Estadual nº X/2024."
            },
            {
              "letra": "D",
              "texto": "Como o ADCT possui natureza legal, uma possível antinomia entre suas normas e as da Lei Estadual nº X/2024 faria que as normas anteriores, as do ADCT, fossem tacitament e revogadas."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Constitucional",
          "enunciado": "O Presidente da República apresentou projeto de lei para aumentar a remuneração dos cargos X e Y do Poder Executivo. Durante a tramitação na Câmara dos Deputados, foi aprovada uma emenda parlamentar que estendeu esse aumen to também aos cargos W e X. Sobre a emenda parlamentar apresentada, considerando a sistemática estabelecida pela Constituição da República, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Deve ser considerada válida, pois o Congresso Nacional tem competência para modificar projetos de lei de iniciativa do Presidente da República."
            },
            {
              "letra": "B",
              "texto": "É constitucional, desde que seja aprovada pela maioria absoluta dos membros da Câmara dos Deputados e do Senado Federal."
            },
            {
              "letra": "C",
              "texto": "Deve ser considerada inválida, pois o aumento de remuneração só pode ser feito por medida provisória editada pelo Presidente da República."
            },
            {
              "letra": "D",
              "texto": "É inconstitucional, pois não se pode aumentar despesa prevista em projetos de lei de iniciativa exclusiva do Presidente da República."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Constitucional",
          "enunciado": "A partir da análise do conflito entre normas constitucionais originárias em uma relação processual, ambas válidas e vigentes, João, advogado do autor, sustentou que a norma X, por ser, sob a perspectiva conteudística, materialmente constitucional, deve ter preponderância sobre a norma Y, pois esta última versa sobre matéria que não é própria de uma Constituição, sendo considerada norma constitucional apenas sob o prisma da forma. Pedro, advogado da parte ex adversa, por não concordar com a análise de João, se opõe, afirmando que, sob uma perspectiva normativo-hierárquica, a discussão não possui sentido, já que, prima facie , ambas as normas possuem a mesma hierarquia no âmbito do ordenamento jurídico brasileiro. Sobre a hipótese apresentada, segundo a visão jurídico - constitucional brasileira, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "João está correto, pois as normas constitucionais, na perspectiva meramente formal, possuem, prima facie, status legal e, portanto, hierarquia inferior àquelas materialmente constitucionais."
            },
            {
              "letra": "B",
              "texto": "Pedro está correto, porque as normas formalmente constitucionais, sob a perspectiva do conteúdo, obrigatoriamente também o são sob a perspectiva de análise material."
            },
            {
              "letra": "C",
              "texto": "João, como a norma Y consubstancia norma constitucional somente sob o ponto de vista formal, está correto, pois há de se considerar que a ela deve ser sempre atribuído status supralegal, mas infraconstitucional."
            },
            {
              "letra": "D",
              "texto": "Pedro está correto, porque as normas X e Y, na perspectiva normativo-hierárquica, não possuem qualquer superio ridade uma sobre a outra, sendo reconhecida em ambas a estatura constitucional."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Administrativo",
          "enunciado": "Durante uma forte tempestade que causou inundações e interrupções no fornecimento de energia na cidade Delta, o Prefeito Municipal, buscando evitar o agravamento da situação de iminente perigo público, requisitou um gerador de energia de propriedade da soc iedade empresária Gama para manter em funcionamento o hospital municipal. O equipamento foi utilizado por dois dias, até que o fornecimento de energia fosse restabelecido, o que não causou qualquer dano ao bem requisitado. Diante dessa situação, o sócio -gerente de Gama compareceu à Prefeitura de Delta para exigir indenização pela requisição do bem. A esse respeito, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A sociedade empresária Gama tem direito à indenização, independentemente de ter havido dano ao bem."
            },
            {
              "letra": "B",
              "texto": "Como o bem não sofreu danos durante sua utilização, a sociedade empresária Gama não tem direito à indenização."
            },
            {
              "letra": "C",
              "texto": "A utilização de bem privado, em prol do interesse público, sendo-lhe causado dano, ou não, não gera direito à indenização."
            },
            {
              "letra": "D",
              "texto": "A sociedade empresária Gama só teria direito à indenização se a requisição tivesse sido realizada por autoridade federal, mas não pela autoridade citada no caso concreto."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direitos Humanos",
          "enunciado": "No que concerne aos standards internacionais atualmente adotados para defesa do Direito Humano à Igualdade, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O direito à igualdade abrange atualmente três dimensões, havendo amplo consenso quanto à existência de uma dimensão de ordem formal, também co mpreendida como igualdade perante a lei; uma segunda dimensão, de ordem material, comumente relacionada ao conceito de justiça retributiva; e uma terceira dimensão, de ordem instrumental, que reconhece no direito à igualdade a condição viabilizadora da concretização de outros direitos fundamentais."
            },
            {
              "letra": "B",
              "texto": "No âmbito do sistema global de proteção aos direitos humanos, a Convenção das Nações Unidas sobre a Eliminação de Todas as Formas de Discriminação Contra a Mulher pode ser apontada como importante instrumento para superação das desigualdades de gênero. Contudo, o instrumento não admite de forma expressa a utilização de ações afirmativas, ou medidas compensatórias, destinadas a acelerar o processo de superação das desigualdades existentes."
            },
            {
              "letra": "C",
              "texto": "A Convenção Inter nacional sobre a Eliminação de Todas as Formas de Discriminação Racial rechaça a possibilidade dos Estados-parte estabelecerem medidas de tratamento desigual, em detrimento de grupos étnicos historicamente mais favorecidos, por considerar que a referida pr ática pode configurar a conduta expressamente vedada do denominado “racismo reverso”."
            },
            {
              "letra": "D",
              "texto": "Ao interpretar a Convenção Americana sobre Direitos Humanos, a Corte IDH reconhece a possibilidade de serem adotados critérios para “distinção” de tratamento entre determinados grupos de indivíduos. O que não se admite é a prática de condutas “discriminatórias”. Para a Corte, as “distinções” constituem diferenças compatíveis com a Convenção Americana por serem razoáveis e objetivas. Já as “discriminações” constituem di ferenças arbitrárias que redundam em prejuízo dos Direitos Humanos."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direitos Humanos",
          "enunciado": "Em relação aos Direitos Humanos das pessoas presas, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Tanto as Regras de Nelson Mandela quanto as Regras de Bangkok possuem natureza de soft law , ou seja, são consideradas normas não vinculantes de Direito Internacional. Nada obstante, configuram -se em importantes diretrizes que servem de orientação para os E stados membros da Organização das Nações Unidas."
            },
            {
              "letra": "B",
              "texto": "No âmbito do Sistema de Proteção Interamericano de Direitos Humanos foram editadas as denominadas regras de Nelson Mandela, com vistas à fixação de standards mínimos de organização e funcionamento dos estabelecimentos prisionais, em ordem à proteção dos direitos dos indivíduos privados de suas liberdades."
            },
            {
              "letra": "C",
              "texto": "De acordo com as Regras Mínimas das Nações Unidas para o Tratamento de Presos, todas as penas cruéis, desumanas, degradantes ou que impliquem tortur a devem ser proibidas. Entretanto, não há óbice à imposição do confinamento solitário prolongado, desde que aplicado como forma de sanção disciplinar, em razão de falta grave cometida pelo apenado."
            },
            {
              "letra": "D",
              "texto": "No âmbito do sistema global, há dois tratados, consubstanciando-se em norma de jus cogens , que estabelecem disposições específicas para os presos do sexo masculino e do sexo feminino. Assim, enquanto as Regras de Nelson Mandela disciplinam os cuidados mínimos com os encarcerados do sexo masculino, não se aplicando às mulheres presas, as regras de Bangkok se destinam exclusivamente ao encarceramento feminino."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Eleitoral",
          "enunciado": "Maria e João foram eleitos, respectivamente, prefeita e vice - prefeito do Município Alfa, com poucos votos de vantagem sobre Ana e Antônio, que formavam a outra chapa que disputou a eleição. Dez dias após a diplomação dos eleitos, os integrantes da chapa derrotada obtiveram provas cabais de que os integrantes da chapa vencedora teriam praticado uma fraude, o que comprometera a normalidade e a legitimidade do pleito. Sobre o caso apresentado, como advogado(a) dos integrantes da chapa derrotada, assinale a medida judicial que deve ser ajuizada em face dos integrantes da chapa vencedora.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Investigação judicial eleitoral."
            },
            {
              "letra": "B",
              "texto": "Ação de captação ilícita de votos."
            },
            {
              "letra": "C",
              "texto": "Recurso contra expedição de diploma."
            },
            {
              "letra": "D",
              "texto": "Ação de impugnação de mandato eletivo."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Eleitoral",
          "enunciado": "Pedro, que teve deferido o registro de candidatura para concorrer ao cargo eletivo de Prefeito Municipal de uma importante capital brasileira, deseja aumentar a capilaridade de seu projeto de governo junto à população, de modo que um número maior de eleitores tenha conhecimento de suas propostas. Com esse objetivo, consultou você, como advogado(a), a respeito da possibilidade de veicular propaganda eleitoral paga, na imprensa escrita, durante o período de propaganda eleitoral. Quanto à orientação a ser dada, assinale a afirmativa que apresenta, corretamente, sua resposta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A realização da propaganda eleitoral na forma pretendida é vedada, em qualquer hipótese."
            },
            {
              "letra": "B",
              "texto": "A propaganda eleitoral que ele deseja realizar é a única de natureza não gratuita permitida pela legislação eleitoral, podendo ser realizada até o dia da eleição."
            },
            {
              "letra": "C",
              "texto": "A veiculação de anúncios de propaganda eleitoral na imprensa escrita é permitida, observados limites quantitativos e de espaço, até a antevéspera das eleições."
            },
            {
              "letra": "D",
              "texto": "Somente os partidos políticos podem contratar a realização da propaganda eleitoral pretendida por Pedro, sendo os limites quantitativos distribuídos internamente entre os candidatos do respectivo partido."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Internacional",
          "enunciado": "João, brasileiro domiciliado no Japão, celebrou um contrato presencial no Japão com Adam, estrangeiro domiciliado no Brasil, com uma cláusula de eleição de foro, em que o Brasil foi escolhido como competente para resolver eventuais conflitos. A controvérsia sobre o contrato foi submetida à justiça brasileira. Assinale a opção que indica, conforme a Lei de Introdução às normas do Direito Brasileiro (LINDB), a lei que deve ser aplicada para a resolução da lide.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A do Brasil, devido à cláusula de eleição de foro."
            },
            {
              "letra": "B",
              "texto": "A do Japão, porque é o local em que João é domiciliado."
            },
            {
              "letra": "C",
              "texto": "A do Brasil, porque é o local em que Adam é domiciliado."
            },
            {
              "letra": "D",
              "texto": "A do Japão, porque é o local em que o contrato foi celebrado."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Internacional",
          "enunciado": "A Convenção de Viena sobre os Direitos dos Tratados de 1969 estabelece regras gerais para os tratados internacionais em relação a diversos aspectos, como entrada em vigor, aplicação e interpretação. Quanto à interpretação dos tratados, estes devem ser interpretados de boa-fé levando em consideração o contexto, o objetivo e a finalidade. A esse respeito, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Para os fins de interpretação de um tratado, o contexto compreenderá, além do texto, seu preâmbulo e anexos."
            },
            {
              "letra": "B",
              "texto": "Toda vez que um tratado for autenticado em duas ou mais línguas, sem exceção, seu texto tem validade em cada uma delas."
            },
            {
              "letra": "C",
              "texto": "Uma versão do tratado em língua diversa daquelas em que o texto foi autenticado, só será considerada texto autêntico se o tratado o previr."
            },
            {
              "letra": "D",
              "texto": "Não são admitidos meios suplementares de interpretação dos tratados internacionais, como os trabalhos preparatórios e as circunstâncias de conclusão do tratado, ainda que a interpretação deixe o sentido ambíguo ou obscuro."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Financeiro",
          "enunciado": "Em um determinado exercício financeiro , o Projeto de Lei Orçamentária Anual (PLOA) enviado pelo Governador do Estado Alfa à Assembleia Legislativa dispunha sobre matérias relacionadas ao direito financeiro, entre as quais: I. autorização para abertura de créditos adicionais suplementares; II. autorização para abertura de créditos adicionais especiais; III. autorização para contratação de operações de crédito; IV. autorização para contratação de operações de crédito por antecipação de receita. Diante desse cenário, à luz do texto da Constituição Federal de 1988, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A autorização para abertura de créditos adicionais suplementares não poderia constar neste PLOA."
            },
            {
              "letra": "B",
              "texto": "A autorização para abertura de créditos adicionais especiais foi indevidamente inserida neste PLOA."
            },
            {
              "letra": "C",
              "texto": "A autorização para contratação de operações de crédito não poderia ser prevista neste PLOA."
            },
            {
              "letra": "D",
              "texto": "A Constituição Federal expressamente proíbe que se insira no PLOA autorização para contratação de operações de crédito por antecipação de receita."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Financeiro",
          "enunciado": "O Município Alfa revogou a lei que instituía a cobrança do Imposto Predial e Territorial Urbano (IPTU) dos imóveis situados em seu território, há mais de 5 anos, deixando, desde então, de realizar sua cobrança e arrecadação. Notificado pelo respectivo Tribunal de Contas para retornar a cobrar o imposto por descumprir um dos requisitos essenciais de uma gestão fiscal responsável, o prefeito pergunta a você, como advogado(a), qual será a consequência para a municipalidade, caso mantenha a política da não instituição, previsão e efetiva arrecadação de todo s os impostos de sua competência constitucionalmente atribuída. Nesse cenário, à luz da Lei de Responsabilidade Fiscal (LC nº 101/2000), você respondeu que o Município Alfa ficará impedido de",
          "alternativas": [
            {
              "letra": "A",
              "texto": "realizar operações de crédito."
            },
            {
              "letra": "B",
              "texto": "realizar qualquer concurso público."
            },
            {
              "letra": "C",
              "texto": "receber transferências voluntárias."
            },
            {
              "letra": "D",
              "texto": "contratar com qualquer outro ente da Federação."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Tributário",
          "enunciado": "Paulo, domiciliado em Ubatuba (SP), era proprietário de uma única embarcação automotora, que ficava ancorada em Paraty (RJ). Ele veio a falecer no início do ano de 2024, em Belo Horizonte (MG), durante visita à filha e única herdeira, Joana, domiciliada nesta mesma cidade. A filha, maior de idade e capaz, realizou o inventário extr ajudicial de seu pai perante tabelião de Belo Horizonte (MG). De acordo com o texto da Constituição Federal de 1988, assinale a opção que indica, corretamente, o Estado em que o Imposto sobre Transmissão Causa Mortis e Doação (ITCMD) incidente sobre essa transmissão causa mortis é devido.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Minas Gerais, por ser o local onde se processou o inventário extrajudicial."
            },
            {
              "letra": "B",
              "texto": "Minas Gerais, por ser o local de domicílio da única herdeira."
            },
            {
              "letra": "C",
              "texto": "São Paulo, por ser o local de domicílio do falecido."
            },
            {
              "letra": "D",
              "texto": "Rio de Janeiro, por ser o local onde ancorada a embarcação automotora."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Tributário",
          "enunciado": "A entidade religiosa ABC requereu o reconhecimento da imunidade de IPTU do imóvel em que realizava seus cultos, bem como do edifício ao lado, que servia de moradia para se us ministros religiosos e suas famílias. O Município Alfa negou parcialmente tal reconhecimento, afirmando que, embora ambos os imóveis fossem registrados em nome da entidade religiosa ABC, possuíam matrículas distintas no Registro de Imóveis. Desta forma, reconheceu que apenas o imóvel em que realizava seus cultos seria contemplado com a imunidade tributária reconhecida pela Constituição Federal. Surpreendida, a entidade religiosa ABC procurou você, como advogado(a), para questionar essa decisão. Assinale a opção que apresenta, corretamente, sua orientação para o caso.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A entidade deve escolher sobre qual imóvel deve recair a imunidade do IPTU, uma vez que os imóveis têm matrículas distintas."
            },
            {
              "letra": "B",
              "texto": "O imóvel que tem como função precípua a realização dos cultos fará jus à imunidade do IPTU, já que os imóveis apresentam duplicidade de matrículas."
            },
            {
              "letra": "C",
              "texto": "A imunidade tributária religiosa do IPTU beneficia o imóvel em que se realiza o culto e todos os imóveis afetados à sua finalidade essencial, ai nda que os imóveis tenham matrículas distintas."
            },
            {
              "letra": "D",
              "texto": "Para que os imóveis pudessem gozar da imunidade tributária religiosa do IPTU, seria necessário que suas matrículas fossem unificadas."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Tributário",
          "enunciado": "Uma sociedade empresária do setor petrolífero adquiriu uma Unidade Flutuante de Produção, Armazenamento e Transferência de Petróleo , a fim de produzir petróleo nas águas territoriais brasileiras. Esta Unidade tem capacidade de se locomover pelas águas por meio de motores próprios, razão pela qual o Estado Alfa, onde fica o domicílio da sociedade empresária, publicou, em 10/02/2024, lei estadual ordinária estabelecendo que a propriedade de tais Unidades configura fato gerador de IPVA. Diante desse cenário, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Embora se trate de veículo automotor, a Constituição Federal proíbe a incidência de IPVA sobre quaisquer veículos aquáticos."
            },
            {
              "letra": "B",
              "texto": "O IPVA não pode incidir sobre veículo que é utilizado nas águas territoriais brasileiras, mas apenas se fosse utilizado em terra."
            },
            {
              "letra": "C",
              "texto": "Somente por lei complementar se poderia delimitar a incidência de IPVA sobre este tipo de Unidade."
            },
            {
              "letra": "D",
              "texto": "Apesar de poder ser classificada como veículo automotor, o IPVA não incidirá por exceção constitucional."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Tributário",
          "enunciado": "José recebeu notificação para pagar ou impugnar o lançamento referente a determinado crédito tributário estadual dentro do prazo de 30 dias corridos. No 20º dia do recebimento da notificação, quando pretendia protocolizar impu gnação administrativa contra a cobrança, verificou, por meio da Internet, que seu nome já constava do cadastro da Dívida Ativa Estadual, em razão da dívida que lhe fora notificada. Diante desse cenário, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Como já ocorrera previamente o lançamento tributário, a inserção do nome de José no cadastro da Dívida Ativa Estadual era devida."
            },
            {
              "letra": "B",
              "texto": "Foi indevida a inserção do nome de José no cadastro da Dívida Ativa Estadual antes do vencimento do prazo para pagamento ou impugnação."
            },
            {
              "letra": "C",
              "texto": "É possível a inserção do nome de José no cadastro da Dívida Ativa Estadual, sob condição resolutiva vinculada ao prazo de 30 dias ofertado para que pagasse ou impugnasse o lançamento."
            },
            {
              "letra": "D",
              "texto": "O lançamento da dívida tributária se faz por meio do Termo de Inscrição em Dívida Ativa, razão pela qual não seria possível fazer o lançamento sem que o nome de José fosse inscrito em Dívida Ativa."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Tributário",
          "enunciado": "Tendo ocorrido uma situação de calamidade pública no Município Alfa, no final do ano de 2022, a União enviou vultosos recursos federais para enfrentar tal situação. De modo a também diminuir a carga tributária sobre a população municipal nesse período, a União, por lei federal, aprovou uma isenção de Imposto sobre a Propriedade Predial e Territorial Urbana (IPTU) no Município, por todo o ano de 2023. O Prefeito municipal estava de acordo e editou um decreto para regulamentar a forma como se daria o gozo dessa isenção. Diante desse cenário, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A referida isenç ão, para ser válida, deveria ter sido veiculada por lei municipal."
            },
            {
              "letra": "B",
              "texto": "A União, e m situação de calamidade pública, excepcionalmente, fica autorizada por lei federal a conceder isenção de qualquer imposto municipal."
            },
            {
              "letra": "C",
              "texto": "A União, como ente central, pode condicionar a entrega de tais recursos ao Município à aceitação de que lei federal conceda isenção de imposto municipal."
            },
            {
              "letra": "D",
              "texto": "A edição de decreto por parte do Prefeito configura a concordância do ente municipal com a concessão de tal isenção, tornando -a vál ida por ratificação expressa do Município."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Administrativo",
          "enunciado": "Juliana ajuizou duas ações indenizatórias que resultaram na condenação dos réus, obrigando -os a pagar vultosa quantia em dinheiro. A primeira foi ajuizada em face de uma autarquia e, a segunda, em face de uma sociedade de economia mista que realiza atividade econômica em regime concorrencial, cujos bens não estão afetados ao serviço público. Considerando que ambas as condenações transitaram em julgado e estão em fase de cumprimento de sentença, Juliana questionou você, como advogada(o), acerca da viabilidade de penhora dos bens das mencionadas entidades administrativas. Considerando a definição legal de bens públicos, assinale a opção que indica a informação correta que você prestou.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A penhora dos bens das referidas entidades administrativas integrantes da Administração Indireta é possível, considerando que os bens de ambas são privados."
            },
            {
              "letra": "B",
              "texto": "A penhora dos bens das citadas entidades administrativas não é admissível, na medida em que os bens de ambas são públicos."
            },
            {
              "letra": "C",
              "texto": "A penhora dos bens da autarquia é possível, na medida em que seus bens são privados, mas os da sociedade de economia mista não é viável, considerando que seus bens são públicos."
            },
            {
              "letra": "D",
              "texto": "A penhora dos bens da sociedade de economia mista é possível, porque seus bens são privados, mas os da autarquia não podem ser penhorados, uma vez que seus bens são públicos."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Administrativo",
          "enunciado": "Jaílson pretende adquirir uma propriedade rural, considerada média nos termos da lei, que será a única de sua titularidade, para realizar a plantação de alimentos orgânicos para subsistência, mas tem o receio de investir todas as suas economias em imóvel que seja passível de desapropriação para fins de reforma agrá ria pela União, mediante indenização em títulos da dívida agrária. Diante disso, Jaílson consultou você, como advogado(a), acerca dos bens que podem ser objeto dessa intervenção do Estado na propriedade. Assinale a opção que apresenta a informação que você , corretamente, prestou.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "São insuscetíveis de desapropriação para fins de reforma agrária a pequena e a média propriedade rural, assim definidas em lei, desde que seu proprietário não possua outra."
            },
            {
              "letra": "B",
              "texto": "Qualquer propriedade é passível de desapropriação para fins de reforma agrária, independentemente de seu tamanho ou produtividade."
            },
            {
              "letra": "C",
              "texto": "O tamanho da propriedade não é relevante com relação à desapropriação para fins de reforma agrária, pois são insuscetíveis de tal medida apenas os imóveis produtivos."
            },
            {
              "letra": "D",
              "texto": "Somente os latifúndios são passíveis de desapropriação para fins de reforma agrária, ainda que sejam produtivos."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Administrativo",
          "enunciado": "A sociedade empresária Chique possui dois contratos administrativos distintos regularmente formalizados com o Município Gama, tendo por objeto a realização de serviços contínuos, com contratação de mão de obra para atividades de limpeza e manutenção predial. Registre -se que em apenas uma das contratações há cláusula expressa para a adoção de meios alternativos de solução de controvérsias. Durante a execução, o equilíbrio econômico -financeiro dos contratos foi fortemente afetado por áleas econômicas extraordinárias e imprevisíveis. Dessa forma, os representantes da sociedade empresária Chique procuram você, como advogado(a), sobre a viabilidade de usar instrumentos consensuais para restabelecer o equilíbrio econômico-financeiro do contrato ou outro meio extrajudicial para dirimir o conflito. À luz do disposto na Lei nº 14.133/2021, assinale a opção que, corretamente, materializa a essência da consultoria jurídica prestada por você à sociedade empresária Chique.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O contrato, que não prevê expressamente a utilização de meios alternativos de solução de controvérsias, pode ser aditado para admit ir instrumentos consensuais para tal finalidade."
            },
            {
              "letra": "B",
              "texto": "O contrato, que possui previsão expressa, pode usar a arbitragem como meio alternativo de resolução das controvérsias, sendo que a escolha dos árbitros cabe à contratante, independentemente dos critérios isonômicos, técnicos e de transparência."
            },
            {
              "letra": "C",
              "texto": "A conciliação e a mediação não são admitidas como instrumentos consensuais para a resolução de conflitos com a Administração Pública, de modo que não é possível a utilização de tais meios alternativos, nem mesmo para a hipótese em que exista previsão contratual."
            },
            {
              "letra": "D",
              "texto": "Em razão da natureza do conflito, que versa sobre o equilíbrio econômico-financeiro de contrato administrativo, não é viável o uso de qualquer meio alternativo de resolução das controvérsias, de form a que eventual cláusula contratual nesse sentido, estipulada pelo Município Alfa e pela sociedade empresária Chique, é nula."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Administrativo",
          "enunciado": "A sociedade empresária Bemquerer obteve junto ao órgão municipal competente uma licença, que não tem cunho ambiental, versando sobre matéria administrativa, a qual é ato vinculado, mediante o preenchimento dos requisitos legais, de acordo com a orientação geral da Administração, vigente à época do deferimento, quanto a certo conceito jurídico indeterminado constante da respectiva norma local. Diante da relevância de tal licença para as suas atividades, os dirigentes da aludida sociedade consultaram você, na condição de advogado(a), em relação à viabilidade de modificação da situação jurídica deles, em decorrência de eventual mudança de entendimento atinente ao referido conceito jurídico indeterminado, notadamente se a nova orientação vier a impor um novo condicionamento para o Direito. À l uz das normas sobre segurança jurídica e eficiência na interpretação e aplicação do Direito Público, introduzidas pela Lei nº 13.655/2018 no Decreto -Lei nº 4.657/1942 (Lei de Introdução às Normas do Direito Brasileiro), assinale a opção que, corretamente, apresenta seu esclarecimento.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Caso nova orientação geral venha a ser editada pela Administração, deve ser invalidada situação jurídica consolidada para a sociedade Bemquerer, mesmo que a licença ainda esteja em seu prazo de validade, considerando que a anulação deve operar efeitos retroativos."
            },
            {
              "letra": "B",
              "texto": "Eventual mudança de orientação geral em sede administrativa deve retroagir para alcançar a situação jurídica constituída para a sociedade Bemquerer, independentemente da orientação vigente à época do deferimento da licença, o que importaria necessariamente na revogação do ato deferido."
            },
            {
              "letra": "C",
              "texto": "O entendimento que permitiu o deferimento da licença para a sociedade Bemquerer apenas poderia prevalecer se fundado em jurisprudência firmada no âmbito do Poder Judiciário, considerando que as diretrizes estabelecidas em sede administrativa não podem ser consideradas orientações gerais."
            },
            {
              "letra": "D",
              "texto": "A decisão administrativa que venha a estabelecer nova orientação que preveja novo condicionamento do Direito, deverá pr ever regime de transição para que a sociedade Bemquerer possa cumprir tal condicionamento ulterior de modo proporcional, equânime e eficiente e sem prejuízo aos interesses gerais."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Administrativo",
          "enunciado": "Em dezembro de 2024, Lucas, servidor público celetista no âmbito da empresa pública XYZ, permitiu, culposamente, que Matheus da Silva utilizasse veículos automotores da estatal para a execução de serviços particulares, sem qualquer relação com a empresa pública. Nesse contexto, após tomar ciência de que o Ministério Público deflagrou inquérito civil para apurar os fatos, Lucas procurou você para, na qualidade de advogado(a), lhe prestar a adequada orientação jurídica. Sobre a posição de Lucas, considerando a Lei nº 8.429/1992 (Lei de Improbidade Administrativa), assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Ele responderá por ato de improbidade administrativa, desde que se comprove a perda patrimonial efetiva em detrimento da empresa pública XYZ."
            },
            {
              "letra": "B",
              "texto": "Ele não está sujeito aos regramentos da Lei de Improbidade Administrativa, por não se enquadrar como um servidor público estatutário."
            },
            {
              "letra": "C",
              "texto": "Ele não poderá ser responsabilizado por ato de improbidade administrativa, já que não agiu de forma dolosa."
            },
            {
              "letra": "D",
              "texto": "Ele será responsabilizado pela prática de ato de improbidade administrativa que importa enriquecimento ilícito."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Ambiental",
          "enunciado": "A sociedade empresária Empreendedorix deseja construir um grande shopping center em terreno situado na área urbana do Município Delta, que contribuirá para incrementar o comércio na localidade, mas surtirá efeitos na qualidade de vida da população e no meio ambiente do entorno, razão pela qual a atividade se enquadra entre aquelas para as quais é necessária a elaboração de Estudo de Impacto Ambiental (EIA). Ocorre que o Município Delta tem legislação local que define que tal empreendimento privado depende de elaboração de Estudo Prévio de Impacto de Vizinhança (EIV), para obter as lice nças ou autorizações de construção, ampliação ou funcionamento a cargo do Poder Público local. Em razão disso, os representantes da sociedade empresária Empreendedorix procuram você, como advogado(a), para esclarecer as peculiaridades do instrumento previs to na referida legislação municipal. Considerando os fatos narrados, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O EIV, diferentemente do EIA, não pode ser enquadrado como instrumento da Política Nacional do Meio Ambiente."
            },
            {
              "letra": "B",
              "texto": "A realização do EIV não substitui a e laboração e a aprovação do EIA, requeridas nos termos da legislação ambiental."
            },
            {
              "letra": "C",
              "texto": "O EIV será executado de forma a contemplar seus efeitos positivos, mas não precisa apontar os efeitos negativos do empreendimento, diante de seus objetivos legítimos."
            },
            {
              "letra": "D",
              "texto": "Independentemente de previsão na lei municipal, o EIV seria necessário, considerando o grande empreendimento a ser realizado pela sociedade Empreendedorix."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Ambiental",
          "enunciado": "Por decisão de seus representantes legais, o exercício de determinada atividade empresarial da sociedade Aurora, em benefício próprio, ensejou a poluição de um determinado rio, de modo que a conduta praticada ocasionou severos danos ao meio ambiente e, ao mesmo tempo, caracteriza ilícito penal, civil e administrativo. Diante dessa situação hipotética e considerando as normas de responsabilização da pessoa jurídica em matéria ambiental, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A sociedade Aurora deve ser responsabilizada administrativa, civil e penalmente pela aludida conduta, nos termos da legislação de regência."
            },
            {
              "letra": "B",
              "texto": "Eventual responsabilização penal da sociedade Aurora afasta a possibilidade de que ela seja responsabilizada nas esferas civil e administrativa."
            },
            {
              "letra": "C",
              "texto": "Para que possa responder na esfera administrativa, é imprescindível a condenação penal da sociedade Aurora, o que não ocorre para fins de responsabilização civil."
            },
            {
              "letra": "D",
              "texto": "Por se tratar de pessoa jurídica, a sociedade Aurora não pode ser responsabilizada na esfera penal, de modo que a sua responsabilização fica restrita às esferas civil e administrativa."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Civil",
          "enunciado": "Gabriel e Vitória, pais de Ana e de Clara, faleceram em um acidente aéreo. Os parentes mais próximos de Ana e Clara são os tios, Rafael – irmão de Gabriel –, com 42 anos de idade, e a tia, Júlia – irmã de Vitória –, com 38 anos de idade. Atualmente, Ana tem 9 anos de idade e, Clara, 7. Verificou-se que, em seus respectivos testamentos, Gabriel e Vitória nomearam, como tutor de Ana e Clara, Lucas, primo de Gabriel. Sobre o caso narrado, segundo o ordenamento jurídico brasileiro, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Júlia deverá exercer a tutela das meninas, por estar no mesmo grau de parentesco que Rafael, e por ser mais nova que ele, além de ser parente mais próxima que Lucas."
            },
            {
              "letra": "B",
              "texto": "Rafael deverá exercer a tutela das meninas, por estar no mesmo grau de parentesco que Júlia, e por ser mais velho que ela, além de ser parente mais próximo que Lucas."
            },
            {
              "letra": "C",
              "texto": "Lucas não poderá exercer a tutela, porque somente os colaterais até o terceiro grau podem ser tutores."
            },
            {
              "letra": "D",
              "texto": "Lucas deverá exercer a tutela, por ter sido nomeado pelos pais das meninas em testamento."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Civil",
          "enunciado": "A sociedade empresária Calçados Novos Ltda. consultou você, como advogado(a), na qualidade de controladora dos dados pessoais de seus clientes. Isso porque há quantidade relevante de dados cujo término do tratamento já ocorreu, considerando o fim do período de tratamento. Contudo, a sociedade empre sária tem a intenção de manter as informações históricas de seus clientes, para fins exclusivamente estatísticos, sem a necessidade de identificar pessoalmente os titulares de cada informação. Sobre a hipótese narrada, considerando o interesse do cliente, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A controladora é obrigada a eliminar os dados pessoais dos clientes cujo término do tratamento já ocorreu, em qualquer hipótese."
            },
            {
              "letra": "B",
              "texto": "A controladora pode conservar os dados cujo término do tratamento já ocorreu, desde que ainda seja possível tratar os dados conforme a finalidade específica."
            },
            {
              "letra": "C",
              "texto": "A controladora pode conservar os dados cujo término do tratamento já ocorreu, para seu uso exclusivo, vedado o acesso por terceiro, e desde que anonimizados os dados."
            },
            {
              "letra": "D",
              "texto": "A controlad ora é obrigada a eliminar os dados pessoais dos clientes cujo término do tratamento já ocorreu, desde que desnecessários ao alcance da finalidade específica almejada."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Civil",
          "enunciado": "Cláudia é devedora de valores elevados e foi executada em determinada demanda. Para evitar a penhora de seu carro, celebrou contrato de compra e venda do veículo com Eduardo, seu amigo fraterno, indicando data anterior às dívidas. Cláudia e Eduardo combinaram que o contrato não produziria qualquer efeito, de modo que não h ouve o pagamento do preço e tampouco a transferência da propriedade do carro. Sobre o contrato celebrado entre Cláudia e Eduardo , assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "É anulável."
            },
            {
              "letra": "B",
              "texto": "É válido, mas ineficaz."
            },
            {
              "letra": "C",
              "texto": "É nulo, sem possibilidade de aproveitamento."
            },
            {
              "letra": "D",
              "texto": "Pode ser convalidado, bastando que se desconsidere a data indicada e se considere a data em que ele efetivamente foi celebrado."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Civil",
          "enunciado": "Do testamento deixado por Natália constou a seguinte cláusula acerca da parte disponível: “lego o apartamento X para meus filhos Henrique e Carolina, os quais serão individualmente substituídos, se não puderem aceitar, pelo meu filho Carlos.” Após o registro, abertura e determinação de seu cumprimento, Henrique renunciou à sucessão testamentária, satisfazendo -se com a legítima. Você, como advogado(a), foi consultado(a) acerca da transmissão causa mortis do apartamento X. Assinale a opção que apresenta, corretamente, sua orientação.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Caberá à Carolina e a Carlos, por força da substituição prevista."
            },
            {
              "letra": "B",
              "texto": "Ficará integralmente com Carolina, por conta do direito de acrescer."
            },
            {
              "letra": "C",
              "texto": "Será dividido entre Henrique e Carolina, pois a renúncia não pode ser parcial."
            },
            {
              "letra": "D",
              "texto": "Deverá ser integralmente entregue a Carlos, em razão da disposição conjuntiva."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Civil",
          "enunciado": "Beatriz nasceu duzentos e cinquenta dias após a morte do pai, Bernardo, com quem sua mãe, Gabriela, era casada há 2 anos. Quando Gabriela foi registrar Beatriz, Leonardo, irmão de Bernardo, afirmou que não aceitaria que ela a registrasse como filha de Bernardo, a não ser que Gabriela provasse a paternidade, por meio de exame de DNA. Sobre a situação apresentada, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Gabriela precisa realizar o exame de DNA para que possa registrar Beatriz, uma vez que é direito da família do falecido questionar a paternidade a este atribuída após a sua morte."
            },
            {
              "letra": "B",
              "texto": "Gabriela precisa realizar o exame de DNA para que possa registrar Beatriz, uma vez que, nos termos do Código Civil, a paternidade não é presumida após a dissolução do vínculo conjugal."
            },
            {
              "letra": "C",
              "texto": "Gabriela não precisa realizar o exame de DNA para que possa registrar Beatriz, uma vez que a criança nasceu após a mo rte de Bernardo e o direito para contestação da paternidade é personalíssimo."
            },
            {
              "letra": "D",
              "texto": "Gabriela não precisa realizar o exame de DNA para que possa registrar Beatriz, uma vez que, nos termos do Código Civil, presumem-se concebidos na constância do casamento os filhos nascidos nos trezentos dias subsequentes à dissolução da sociedade conjugal por morte."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Civil",
          "enunciado": "Carlos é titular de direito real de uma laje, referente à parte superior de uma edificação localizada em uma área urbana. Recentemente, ele tomou conhecimento de que uma empresa de internet está negociando diretamente com o proprietário da construção-base para instalar cabeamentos de fibra ótica e outros equipamentos de infraestrutura no subsolo dessa construção. A instalação não interfere no direito real de Carlos, bem como não afeta o uso do bem. Mesmo assim, Carlos tem dúvidas sobre a legalidade dessa instalação sem a sua expressa autorização, bem como sobre seu direito a eventual compensação. Diante disso, ele consultou você, como advogado(a ), para orientá -lo sobre a questão. Assinale a opção que apresenta, corretamente, sua orientação.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Carlos tem o direito de impedir a instalação dos cabos de fibra ótica, pois a utilização do subsolo da construção -base requer sua autorização expressa como titular do direito real de laje."
            },
            {
              "letra": "B",
              "texto": "A empresa de internet pode instalar os cabos de fibra ótica no subsolo da construção-base sem a autorização de Carlos, pois a instalação não interfere em seu direito real de laje."
            },
            {
              "letra": "C",
              "texto": "Carlos deve ser compensado financeiramente pela empresa de internet antes da instalação dos cabos no subsolo da construção-base, devido à titularidade de seu direito real de laje."
            },
            {
              "letra": "D",
              "texto": "A instalação dos cabos de fibra ótica pela empresa de internet é ilegal e pode ser contestada por Carlos judicialmente, já que ele possui um direito real sobre a construção e não autorizou o uso do subsolo."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito da Criança e do Adolescente",
          "enunciado": "João, 17 anos, foi representado pelo Ministério Público pela prática de ato infracional análogo a roubo. Consta nos autos que o representado teria abordado dois transeuntes e, simulando estar armado, anunciou o roubo, tendo subtraído os celulares e as carteiras das vítimas. Ao final do procedimento, o Juízo da Infância considerou comprovadas a autoria e a materialidade, tendo julgado procedente o pedido e fixado a medida socioeducativa de internação. O(A) advogado(a) do adolescente deseja apresentar recurso de apelação. Sobre o recurso a ser interposto, com base no Estatuto da Criança e do Adolescente, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O sistema recursal adotado é o do Código de Processo Civil, sendo certo que o prazo será de 10 (dez) dias."
            },
            {
              "letra": "B",
              "texto": "O sistema recursal adotado é o do Código de Processo Penal, sendo certo que o prazo será de 10 (dez) dias."
            },
            {
              "letra": "C",
              "texto": "O sistema recursal adotado é o do Código de Processo Civil, sendo certo que o prazo será de 15 (quinze) dias."
            },
            {
              "letra": "D",
              "texto": "O sistema recursal adotado é o do Código de Processo Penal, sendo certo que o prazo será de 5 (cinco) dias e, após isso, haverá o prazo de 8 (oito) dias para oferecimento das razões."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito da Criança e do Adolescente",
          "enunciado": "Ricardo, 13 anos, filho de Vanda, não foi registrado pelo pai biológico. Desde tenra idade, o adolescente foi criado por João, de 50 anos, marido de Vanda. João e Ricardo se viam como pai e filho e assim eram reconhecidos na vizinhança. João procura você, como advogado(a), e diz que tem inequívoca vontade de adotar Ricardo. Após a juntada de toda a documentação necessária, e com anuência de Vanda e Ricardo, é ajuizada a ação de adoção, sendo certo que, no curso da ação, João reitera a inequívoca vontade de adotar Ricardo. Ocorre que, dois meses após a distribuição, João sofre um ataque cardíaco e vem a falecer. Vanda e Ricardo, desesperados, o(a) procuram, como advogado(a), para que você indique o caminho jurídico viável para o caso. De acordo com o ECA, assinale a afirmativa que apresenta, corretamente, sua orientação.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O processo de adoção deve prosseguir, mesmo com a morte de João. Nesse caso, se a sentença julgar procedente o pedido, seus efeitos retroagirão à data do óbito."
            },
            {
              "letra": "B",
              "texto": "A adoção é direito personalíssimo. Logo, falecendo o autor do pedido, o único caminho jurídico é a extinção do processo."
            },
            {
              "letra": "C",
              "texto": "A adoção só pode seguir se os herdeiros biológicos de João anuírem, já que possuem interesse direto na herança do finado."
            },
            {
              "letra": "D",
              "texto": "O processo de adoção pode seguir, mesmo com a morte de João. Nessa hipótese, caso julgado procedente o pedido, os efeitos se produzem a partir do trânsito em julgado da sentença constitutiva."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito do Consumidor",
          "enunciado": "Joana, aposentada, contratou diversos empréstimos ao longo dos anos para fazer frente a necessidades inesperadas, em razão de um grave problema de saúde que enfrentou, além de assumir dívidas com cartões de crédito, lojas e empréstimos consignados. Com o tempo, Joana não conseguiu mais pagar todas as parcelas, que agora superam o valor de sua aposentadoria, comprometendo suas despesas básicas, como alimentação e saúde. Buscando uma solução, Joana o(a) procurou, como advogado(a), para que você a assessorasse no caso. Com base no Código de Defesa do Consumidor, assinale a opção que apresenta seu parecer.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Joana pode requerer judicialmente a renegociação das dívidas contraídas para consumo pessoal, mas não dos empréstimos financeiros."
            },
            {
              "letra": "B",
              "texto": "Joana pode requerer judicialmente a renegociação de suas dívidas, preservando o mínimo existencial, e buscar um plano de pagamento compatível com sua renda."
            },
            {
              "letra": "C",
              "texto": "O deferimento do pedido judicial de renegociação das dívidas dependerá de Joana provar que as obrigações foram contraídas em razão do seu grave problema de saúde."
            },
            {
              "letra": "D",
              "texto": "Joana é responsável por suas dívidas, inexistindo possibilidade de renegociação judicial, pois as obrigações contratuais devem ser cumpridas independentemente das dificuldades financeiras."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito do Consumidor",
          "enunciado": "A sociedade empresária VittaBem Alimentos Ltda. lançou no mercado nacional uma nova linha de sucos naturais, supostamente livres de conservantes e aditivos químicos, amplamente divulgada em campanhas publicitárias nas principais redes de televisão e mídias digitais. Após quatro meses de intensa comerci alização, o Ministério da Saúde, por meio de fiscalização e laudos laboratoriais, constatou que os produtos continham substâncias artificiais em níveis superiores aos permitidos pela Anvisa, representando risco potencial à saúde dos consumidores. Diante da repercussão nacional do caso, uma associação de defesa do consumidor ajuizou ação civil pública, pleiteando: a retirada imediata dos produtos do mercado; e a condenação da sociedade empresária ao pagamento de indenização por danos morais coletivos. A soci edade empresária contestou, sustentando, entre outros argumentos, a inaplicabilidade do Código de Defesa do Consumidor e a ausência de culpa e de dano individual comprovado. Sobre o caso apresentado, com base no ordenamento jurídico brasileiro, especialmen te no Código de Defesa do Consumidor, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A coletividade de pessoas, ainda que indetermináveis, equipara-se a consumidor, podendo ser tutelada judicialmente por meio de Ação Civil Pública."
            },
            {
              "letra": "B",
              "texto": "A Ação Civil Pública é incabível , pois somente o consumidor individual e identificado possui legitimidade para pleitear indenização por danos oriundos da relação de consumo."
            },
            {
              "letra": "C",
              "texto": "O conceito de consumidor por equiparação exige que a coletividade seja determinada e tenha comprovadamente adquirido o produto para ser considerada consumidora."
            },
            {
              "letra": "D",
              "texto": "Apenas os consumidores que efetivamente adquiriram e consumiram o produto possuem legitimidade para buscar reparação por danos, ainda que representados por associação."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Empresarial",
          "enunciado": "No contrato de sociedade em conta de participação firmado entre o sócio ostensivo e quatro sócios participantes não há cláusula dispondo sobre a admissão de novos sócios. Diante da omissão, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "É defeso ao sócio ostensivo admitir novo sócio sem o consentimento expresso ou tácito dos demais sócios, sendo tácito o consentimento se eles não se opuserem nos trinta dias seguintes ao ingresso do novo sócio."
            },
            {
              "letra": "B",
              "texto": "O sócio ostensivo pode admitir novo sócio c om ou sem o consentimento dos demais sócios em razão de sua responsabilidade ilimitada e pessoal pelo exercício da atividade constitutiva do objeto social."
            },
            {
              "letra": "C",
              "texto": "É defeso ao sócio ostensivo admitir novo sócio sem o consentimento expresso dos demais sócios."
            },
            {
              "letra": "D",
              "texto": "O sócio ostensivo pode admitir novo sócio com o consentimento da maioria dos demais sócios; havendo empate, cabe a ele o voto de qualidade."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Empresarial",
          "enunciado": "Santa Aceguá, administradora e sócia da Mercearia Cerro Branco Ltda., para saber os efeitos que a falência de um dos seus devedores, o empresário Júlio Cidreira, terá em relação a seu crédito, consulta você como advogado(a). Assinale a opção que apresenta, corretamente, sua orientação.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A falência opera a novação dos cré ditos quirografários existentes na data da decretação, que serão pagos até o limite de 25% (vinte e cinco por cento) de seu valor, exceto se o ativo apurado for superior para garantir o pagamento integral a outras classes de credores."
            },
            {
              "letra": "B",
              "texto": "A falência produz o vencimento antecipado das dívidas do falido, com o abatimento proporcional dos juros, e converte todos os créditos em moeda estrangeira para a moeda do País, pelo câmbio do dia da decisão judicial."
            },
            {
              "letra": "C",
              "texto": "A falência determina a suspensão da prescrição a partir da data da decretação a falência, sendo retomado o curso do prazo a partir da data do trânsito em julgado da sentença de encerramento."
            },
            {
              "letra": "D",
              "texto": "A falência acarreta a suspensão das execuções pelo prazo de 180 (cento e oitenta) dias, contado da data da decre tação, prorrogável uma única vez por igual prazo."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Empresarial",
          "enunciado": "Francisco Morato tem domicílio em Cidade Ocidental/GO e pretende ser empresário individual em Brasília/DF. Se o negócio der certo, Francisco Morato pretende abrir duas filiais, uma em Unaí/MG e, outra, em Natividade/TO. Considerando-se as normas do Código Civil para a inscrição do empresário e da instituição de filiais, é correto afirmar que Francisco Morato deverá realizar sua inscrição como empresário na Junta Comercial do",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Estado de Goiás, tendo como referência a cidade do seu domicílo, Cidade Ocidental, e, com relação às filiais, nas Juntas Comerciais dos Estados de Minas Gerais e do Tocantins, sem necessidade de averbação da constituição das filiais na Junta Comercial do Estado de Goiás."
            },
            {
              "letra": "B",
              "texto": "Distrito Federal, tendo como referência a sede da sociedade empresária, Brasília, e, com relação às filiais, nas Juntas Comerciais dos Estados de Minas Gerais e do Tocantins, com averbação da constituição das filiais na Junta Comercial do Distrito Federal."
            },
            {
              "letra": "C",
              "texto": "Estado de Goiás, tendo como referência a cidade do seu domicílo, Cidade Ocidental, e, com relação às filiais, na mesma Junta Comercial, por ser o lugar do seu domicílio."
            },
            {
              "letra": "D",
              "texto": "Distrito Federal, tendo como referência a sede da sociedade empresária, Brasília, e, com relação às filiais, na mesma Junta Comercial por ser o lugar da sede."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Empresarial",
          "enunciado": "Nísia Parnamirim realizou sua inscrição como microempreendedora individual (MEI) e consultou você, como advogado(a), para saber o tratamento que lhe é dispensado pela Lei Complementar nº 123/2006 (Lei do Simples Nacional). Sobre a hipótese, assinale a opção que apresenta, corretamente, sua resposta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Nísia Parnamirim poderá utilizar sua residência como sede do estabelecimento, quando não for indispensável a existência de local próprio para o exercício da atividade."
            },
            {
              "letra": "B",
              "texto": "Nísia Parnamirim poderá manter sua condição de microempreendedora individual desde que a receita bruta auferida no ano -calendário anterior seja de até R$ 60.000,00 (sessenta mil reais)."
            },
            {
              "letra": "C",
              "texto": "Caso Nísia Parnamirim queira alienar seu estabelecimento, a eficácia do ato em relação a terceiros depende da averbação do contrato no Registro Público de Empresas Mercantis e de sua publicação na imprensa oficial."
            },
            {
              "letra": "D",
              "texto": "A comprovaçã o da receita bruta anual por parte de Nísia Parnamirim será feita mediante escrituração do Livro Caixa e apresentação do registro de vendas ou de prestação de serviços."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Processo Civil",
          "enunciado": "Ricardo propôs a execução de um título executivo extrajudicial contra Isabela. Diante da propositura da execução por Ricardo, Isabela apresentou embargos à execução. O Magistrado julgou improcedentes os embargos à execução de Isabela que, irresignada, interpôs recurso de a pelação contra a sentença de improcedência dos embargos à execução. Ao receber a apelação interposta por Isabela, o Desembargador relator, integrante de Câmara Cível, julgou o recurso monocraticamente, negando provimento à apelação. Assinale a opção que apresenta o recurso cabível a ser interposto por Isabela.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Recurso especial, para que seja analisada, pelo Superior Tribunal de Justiça, eventual violação de lei federal por ter sido negado provimento à apelação de forma monocrática pelo desembargador relator."
            },
            {
              "letra": "B",
              "texto": "Agravo interno, para que seja analisada, pelo Desembargador relator, eventual violação de lei federal decorrente de ter sido negado provimento à apelação de forma monocrática pelo próprio relator."
            },
            {
              "letra": "C",
              "texto": "Agravo interno, por se trata r de decisão proferida pelo Desembargador relator, a ser analisado pelo órgão colegiado da Câmara Cível."
            },
            {
              "letra": "D",
              "texto": "Recurso especial, por se tratar de decisão proferida pelo Desembargador relator, a ser analisado pelo órgão colegiado da Câmara Cível."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Processo Civil",
          "enunciado": "João é advogado regularmente inscrito nos quadros da Ordem dos Advogados do Brasil. Em uma sexta-feira à noite, seu amigo Thiago o procurou e, bastante nervoso, indagou se João poderia ingressar com um requerimento de tutela antecipada an tecedente perante o Plantão Judicial, porque sua irmã necessitava de uma cirurgia de emergência. João reuniu os documentos enviados por Thiago e protocolou o requerimento, porém deixou de fazer a juntada da procuração assinada pela irmã de Thiago, que também é advogada. A medida de urgência foi concedida e, ato contínuo, João foi intimado para efetuar a juntada da procuração, bem como para complementar a petição inicial, nos termos do Art. 303, § 1º, inciso I, do CPC. A irmã de Thiago outorgou procuração geral para o foro por meio de instrumento particular por ela assinado. Sobre o caso narrado, com base no ordenamento jurídico brasileiro, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A procuração deve ser exibida no prazo de 10 (dez) dias, prorrogável por igual período por despacho do Juiz."
            },
            {
              "letra": "B",
              "texto": "A irmã de Thiago, ainda que advogada, não poderá postular em causa própria, por expressa disposição do Código de Processo Civil."
            },
            {
              "letra": "C",
              "texto": "Não seria lícito a João, em nenhuma hipótese, postular em juízo sem procuração, motivo pelo qual o processo deverá ser extinto sem resolução do mérito."
            },
            {
              "letra": "D",
              "texto": "A procuração outorgada pela irmã de Thiago habilita João a praticar todos os atos do processo, exceto, entre outros poderes, receber citação, confessar e reconhecer a procedência do pedido."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Processo Civil",
          "enunciado": "Em execução fundada em título extrajudicial, movida por Murilo, seu ex-sócio, Marília foi executada. Após regular citação, Marília não ofertou defesa, não nomeou bens à penhora, nem pagou o débito exequendo. Por essa razão, Murilo requereu a realização de penhora em contas correntes de titularidade de Marília, com o intuito de satisfazer seu crédito. A indisponibilidade do valor foi determinada pelo Juízo. Tomando o caso acima como premissa, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A indisponib ilidade de ativos financeiros pode ser realizada sem ciência prévia de Marília, pois é hipótese que dispensa o contraditório prévio."
            },
            {
              "letra": "B",
              "texto": "Eventual impenhorabilidade das quantias tornadas indisponíveis poderá ser comprovada por Marília no prazo de 10 dias, contados da intimação da penhora."
            },
            {
              "letra": "C",
              "texto": "Marília poderá requerer a substituição da penhora do dinheiro por fiança bancária, em valor não inferior ao do débito constante da petição inicial, acrescido de vinte por cento."
            },
            {
              "letra": "D",
              "texto": "Caso Marília efetue o pagamento da dívida por outro meio, o Juiz determinará a notificação da instituição financeira para que, em até 48 horas, cancele a indisponibilidade."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Processo Civil",
          "enunciado": "Juliana e André foram casados por anos, tiveram um filho que atualmente está com 6 a nos, mas, por adversidades conjugais, resolveram pôr fim ao casamento. Após a separação, o filho ficou residindo com a mãe em cidade distinta do pai. Considerando que não tem mais volta a relação conjugal, Juliana, por meio do seu advogado, deseja propor a ção de divórcio e guarda. Sobre o caso, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A ação de divórcio e guarda deve tramitar em segredo de justiça."
            },
            {
              "letra": "B",
              "texto": "A ação de divórcio e guarda deve ser proposta no domicílio de André."
            },
            {
              "letra": "C",
              "texto": "Se André, após a citação, não comparece r em audiência nem apresentar contestação, ele não poderá mais intervir no processo."
            },
            {
              "letra": "D",
              "texto": "Ainda que André apresente resistência à ação de divórcio e guarda, sendo vencido na ação, ele não poderá ser condenado em honorários de sucumbência."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Processo Civil",
          "enunciado": "Débora, servidora pública aposentada do Município de Fortaleza, procurou você, como advogado(a), para ajuizar uma ação pelo procedimento comum em face do Município, pleiteando o pagamento de verbas em atraso a título de auxílio alimentação. Proferida se ntença de procedência do pedido, foi interposto recurso de apelação pelo réu, não provido, assim como foi mantida a sentença em remessa necessária na mesma oportunidade. Transitada em julgado a sentença, Débora pretende receber os valores que lhe são devidos. Sobre o caso, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A Fazenda Pública Municipal, caso não pague o valor devido à Débora de forma espontânea, diferentemente do que ocorre com as Fazendas Estadual e Federal, sujeita -se à penhora de seus bens."
            },
            {
              "letra": "B",
              "texto": "Débora deverá instruir sua petição de cumprimento de sentença com o demonstrativo discriminado e atualizado do crédito, devendo o Município ser intimado para apresentar impugnação nos mesmos autos."
            },
            {
              "letra": "C",
              "texto": "Não impugnada a execução, os valores devidos deverão ser depositados diretamente na conta corrente da autora, por se tratar de servidora pública."
            },
            {
              "letra": "D",
              "texto": "Débora deverá indicar o valor atualizado do crédito em sua petição de cumprimento de sentença, devendo o Município ser citado para apresentar embargos em autos apartados."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Processo Civil",
          "enunciado": "Pedro, locatário de um imóvel, ingressa com ação de consignação em pagamento após a locadora, Ana, recusar -se a receber o aluguel, o que foi comprovado pela juntada de documentos, nos quais Ana se recusa, expressamente, a receber a quantia. Atendendo a requerimento de Pedro, o Juiz determinou o depósito do valor em juízo, o que foi tempestivamente cumprido pelo autor. Ato contínuo, Ana é citada, mas não ofereceu contestação. Em tal hipótese, assinale a opção que apresen ta, corretamente, a providência que o(a) advogado(a) deverá requerer ao Juízo.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A intimação das partes para que especifiquem as provas que pretendem produzir."
            },
            {
              "letra": "B",
              "texto": "A decretação da revelia de Ana e a fixação de multa pela prática de ato atentatório à dignidade da justiça."
            },
            {
              "letra": "C",
              "texto": "A determinação de devolução do montante depositado e a extinção do processo sem resolução do mérito em razão de se tratar de pedido incontroverso."
            },
            {
              "letra": "D",
              "texto": "O julgamento pela procedência do pedido da ação de consignação em pagamento, declarando extinta a obrigação e condenando Ana ao pagamento de custas e honorários advocatícios."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Matheus foi a uma festa de réveillon onde reencontrou sua ex - namorada, Laís, sendo ambos maiores e capazes. Assim que a viu, ele se aproximou dela e, a partir daí, iniciaram uma animada conversa sobre os “velhos tempos”. Em determinado momento, Matheus, sem a anuência de Laís, acariciou suas nádegas e tentou beijá-la, para satisfazer sua própria lascívia. Acerca da tipificação da conduta de Matheus, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "É fato atípico."
            },
            {
              "letra": "B",
              "texto": "É crime de estupro."
            },
            {
              "letra": "C",
              "texto": "É crime de assédio sexual."
            },
            {
              "letra": "D",
              "texto": "É crime de importunação sexual."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Saulo, em razão de seu posicionamento político, foi chamado de “burro” e “idiota” por João, Paulo e Sérgio, seus adversários políticos, que tinham a intenção de ofender sua dignidade e decoro. Inconformado, Saulo decidiu processar seus três ofensores. Após a propositura da queixa, Saulo reconciliou -se com Sérgio, sendo o perdão dado pela vítima aceito pelo ofensor, e comunicou o fato ao Juizado Especial em que tramitava a ação penal. Em relação ao caso narrado, assinale a opção que indi ca, corretamente, o crime cometido pelos três amigos e as implicações da reconciliação entre Saulo e Sérgio.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Injúria; o perdão concedido a Sérgio é de natureza personalíssima."
            },
            {
              "letra": "B",
              "texto": "Calúnia; o perdão concedido a Sérgio torna perempta a ação em relação a João e a Paulo."
            },
            {
              "letra": "C",
              "texto": "Difamação; o perdão concedido a Sérgio se aplica, obrigatoriamente, a João e a Paulo."
            },
            {
              "letra": "D",
              "texto": "Injúria; o perdão concedido a Sérgio se aplica, obrigatoriamente, a João e a Paulo."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Thiago, 21 anos de idade, e Vinicius, 17 anos, se conheceram no interior de uma boate. Alterados em razão da ingestão de cerveja, decidiram praticar um crime de furto em um posto de gasolina, mas foram abordados por policiais logo após a prática delitiva. Apenas naquele momento, Thiago veio a tomar conhecimento da idade de Vinicius, e que ele já tinha sido apreendido uma vez pela suposta prática de ato infracional análogo ao crime de dano. O Ministério Público ofereceu denúncia em face de Thiago como incurso nas penas do Art. 155, § 4 º, inciso IV, do CP (furto qualificado pelo concurso de agentes) e do Art. 244 -B do ECA (corrupção de menores). Assinale a opção que indica a alegação que você, como advogado(a) de defesa de Thiago, deve apresentar para questionar a capitulação delitiva.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A conduta não configura crime de corrupção de menores, em razão do erro de tipo permissivo, podendo Thiago apenas ser condenado pelo crime de furto simples."
            },
            {
              "letra": "B",
              "texto": "A conduta não configura crime de corrupção de menores, em razão do erro de tipo essencial, podendo Thiago apenas ser condenado pelo crime de furto qualificado."
            },
            {
              "letra": "C",
              "texto": "O furto supostamente praticado seria simples e não qualificado, diante da inimputabilidade de Vinicius, apesar de possível a condenação pelo crime de corrupção de menores."
            },
            {
              "letra": "D",
              "texto": "O furto supostamente praticado seria simples, diante da inimputabilidade de Vinicius, bem como não seria possível a condenação pelo crime de corrupção de menores, diante da natureza material do delito e da apreensão anterior de Vinicius."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Marisa administrava os proventos de pensão recebidos por sua mãe, Sônia, que faleceu em dezembro de 2022. Com a intenção de continuar recebendo os proventos, Marisa deixou de comunicar à autarquia previdenciária o falecimento de Sônia e, assim, conseguiu efetuar os saques dos valores depositados nos meses de janeiro a março de 2023. Em abril, a autarquia recebeu notícia do falecimento e cessou os pagamentos. Ato contínuo, apurou o valor dos saques indevidos realizados por Marisa após o fal ecimento da segurada, acrescidos de multa e juros e a inscreveu em dívida ativa. Marisa, notificada, efetuou o pagamento integral do débito, de forma parcelada, entre os meses de outubro de 2023 e janeiro de 2024. A denúncia foi ajuizada em janeiro de 2024 , e recebida em fevereiro de 2024. De acordo com a teoria do crime, assinale a opção que apresenta o que a defesa de Marisa deve, corretamente, alegar.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Desistência voluntária."
            },
            {
              "letra": "B",
              "texto": "Arrependimento eficaz."
            },
            {
              "letra": "C",
              "texto": "Arrependimento posterior."
            },
            {
              "letra": "D",
              "texto": "Exercício regular de um direito."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Pierre, estrangeiro, nacional e residente no país Alfa, veio ao Brasil, onde praticou o crime de homicídio contra Bruna, cidadã brasileira. Em seguida, Pierre deixou o território nacional e retornou ao seu país de residência. Você, como advogado(a) de Pierre, deve analisar a aplicação da lei penal brasileira ao caso. Assinale a opção que apresenta seu parecer.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Somente a lei do país Alfa é aplicável, pois Pierre saiu do território nacional."
            },
            {
              "letra": "B",
              "texto": "A lei brasileira só é aplicável se o fato também for considerado crime no país Alfa."
            },
            {
              "letra": "C",
              "texto": "A lei brasileira é aplicável, de forma condicionada, diante do fato de a vítima ser brasileira."
            },
            {
              "letra": "D",
              "texto": "A lei brasileira é aplicável, independentemente de o fato ser crime no país de domicílio ou da nacionalidade de Pierre."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Hermes, aposentado com 65 anos de idade, encontrou sua esposa, Diana, 40 anos mais jovem, em plena execução de ato sexual com seu primo, Aquiles, também sexagenário. Tomado pela fúria, Hermes sacou sua arma de fogo e disparou um tiro no pescoço de Aquiles. Hermes possuía 18 munições restantes no cartucho de sua arma, mas conseguiu controlar sua ira e, arrependido, levou Aquiles ao hospital. Apesar de ter sofrido ferimento que lhe gerou perigo à vida, devido ao rápido atendimento médico, Aquiles sobreviveu e, como ficou livre de sequelas, retomou suas ocupações habituais em uma semana. Atualmente, Hermes, Diana e Aquiles mantêm relação de amizade. Com base na situação hipotética narrada, assinale a opção que indica, corretamente, o delito praticado por Hermes.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Tentativa de homicídio."
            },
            {
              "letra": "B",
              "texto": "Crime de lesão corporal de natureza leve."
            },
            {
              "letra": "C",
              "texto": "Crime de lesão corporal de natureza grave."
            },
            {
              "letra": "D",
              "texto": "Crime de exercício arbitrário das próprias razões."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Processo Penal",
          "enunciado": "No dia 10 de agosto de 2023, foi publicada a decisão de rejeição da queixa-crime relativa ao crime de injúria (pena: um a seis meses de detenção), que teria sido praticado por Maria Aparecida contra Augusto. Augusto, inconformado com a sentença, procurou você, como advogado(a), para se insurgir contra a decisão de rejeição de exordial acusatória. Assinale a opção que indica, corretamente, o recurso cabível para o caso.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Agravo."
            },
            {
              "letra": "B",
              "texto": "Apelação."
            },
            {
              "letra": "C",
              "texto": "Recurso Inominado."
            },
            {
              "letra": "D",
              "texto": "Recurso em Sentido Estrito."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Cauã e Mayara são indígenas integrados e mantêm relação íntima de afeto, sendo residentes em comunidade tradicional. Certo dia, motivado por ciúmes, Cauã agrediu Mayara, atingindo-a no rosto, fato que ocasionou uma lesão corporal leve. Sobre a orientação assumida pelo(a) advogado(a) de defesa de Mayara, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A ação penal é pública e incondicionada, por se tratar de disputa sobre direito indígena, de competência da Vara Criminal da Justiça Estadual."
            },
            {
              "letra": "B",
              "texto": "A ação penal depende de representação da ofendida e seguirá o rito do Juizado Especial Criminal, perante a Justiça Federal, pelo fato de envolver indígenas como autor e vítima."
            },
            {
              "letra": "C",
              "texto": "A ação penal é pública e incondicionada, por se tratar de violência doméstica e familiar contra a mulher, e a competência para julgamento é da Justiça Federal, em razão de envolver indígenas."
            },
            {
              "letra": "D",
              "texto": "A ação penal é pública e incondicionada, e a competência para julgamento é do Juizado de Violência Doméstica e Familiar contra a Mulher, ante a relação íntima de afeto existente entre autor e vítima."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Processo Penal",
          "enunciado": "Peterson teve sua prisão temporária decretada pelo prazo de trinta dias, ao ser investigado pel a prática do crime de homicídio culposo na direção de veículo automotor, disposto no Art. 302 da Lei nº 9.503/1997 (Código de Trânsito Brasileiro), cuja pena cominada é de dois a quatro anos de detenção. A decisão foi fundamentada na necessidade da coleta de provas imprescindíveis durante a investigação policial. Você foi procurado(a), como advogado(a), para atuar no melhor interesse de Peterson, no primeiro dia da sua prisão. Assinale a opção que apresenta, corretamente, o pedido cabível tendo em vista os interesses de seu cliente.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A liberdade provisória com arbitramento de fiança, pois a pena máxima do crime não ultrapassa quatro anos."
            },
            {
              "letra": "B",
              "texto": "A l iberdade provisória com aplicação de medidas cautelares diversas da prisão, pois não demonstrada a imprescindibilidade da medida."
            },
            {
              "letra": "C",
              "texto": "O r elaxamento imediato da prisão ilegal, pois o crime de homicídio culposo na direção de veículo automotor não está no rol dos crimes que autorizam a prisão temporária."
            },
            {
              "letra": "D",
              "texto": "O relaxamento da prisão ilegal a partir do quinto dia de prisão, pois a prática do homicídio culposo na direção de veículo automotor não configura crime hediondo e o prazo da prisão temporária deveria ser de 5 dias, e não, de 30 dias."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Processo Penal",
          "enunciado": "André foi denunciado por ter subtraído a bolsa de Márcia, mediante rompimento de obstáculo. A subtração foi legitimamente comprovada no processo, porém, não obstante tenha o rompimento de obstáculo deixado vestígios, não foi realizada qualquer perícia, sem justificativa plausível. Finda a instrução, manifestou -se o Ministério Público pela condenação, conforme a denúncia, sem requerer qualquer diligência. Dada a palavra ao(à) advogado(a) de André, em alegações finais defensivas, este(a) deve requerer",
          "alternativas": [
            {
              "letra": "A",
              "texto": "a absolvição sumária de André, por não constituir o fato infração penal."
            },
            {
              "letra": "B",
              "texto": "o afastamento da qualificadora do furto, desclassificando a conduta para furto simples."
            },
            {
              "letra": "C",
              "texto": "a nulidade do processo desde o recebimento da denúncia, a fim de que seja realizada a prova pericial."
            },
            {
              "letra": "D",
              "texto": "a conversão do julgamento em diligência, a fim de que se realize prova pericial para comprovar a existência do rompimento de obstáculo."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Processo Penal",
          "enunciado": "Foi oferecida denúncia em face de Samuel, pelo delito de furto, que foi distribuída ao Juízo competente, tendo havido regular instrução processual. Os autos foram conclusos para sentença, porém, o Juiz titular, que presidiu a instrução, afastou -se por dois dias para participar de um curso oficial. Por isso, a Corregedoria do Tribunal designou Juiz substituto para atuar naquele Juízo. O Magistrado substituto prolatou a sentença, condenando Samuel, com base na prova oral colhida, ainda que nenhuma urgência houvesse nesse processo. Com base nas informações do enunciado, assinale a opção que indica a alegação que você, como advogado(a ) de Samuel, deve apresentar.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Violação ao princípio da identidade física do Juiz, causa de nulidade relativa da sentença."
            },
            {
              "letra": "B",
              "texto": "Suspeição do Magistrado que prolatou a sentença, como preliminar de mérito na apelação."
            },
            {
              "letra": "C",
              "texto": "Impedimento do Magistrado que pro latou a sentença, causa de nulidade absoluta da decisão."
            },
            {
              "letra": "D",
              "texto": "Violação ao princípio do Juiz Natural, pois deveria ter havido sorteio entre os Juízes substitutos, e não, a designação por livre escolha da Corregedoria do Tribunal."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Processo Penal",
          "enunciado": "Flávio foi preso em flagrante junto com outros três indivíduos, todos acusados pela prática do crime de roubo, disposto no Art. 157 do CP. Flávio permaneceu preso preventivamente durante o processo. Na audiência de instrução e julgamento, uma das testemunh as arroladas pela defesa afirmou que, no dia dos fatos, Flávio estava trabalhando na loja de material de construção que funcionava na frente do local onde os autores do fato estavam praticando o crime, e acabou sendo preso junto com os outros acusados. A testemunha também mencionou que a loja possui sistema de monitoramento de segurança, e que o dono da loja guardou imagens desse dia, para fornecê -las em sede policial se isso fosse demandado. O interrogatório dos réus foi regularmente realizado. Diante do fato narrado, assinale a opção que indica, corretamente, a medida jurídica que você, como advogado(a) de Flávio, deve adotar.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Apresentar alegações finais por memoriais, requerendo as imagens da loja."
            },
            {
              "letra": "B",
              "texto": "Requerer diligências para oficiar à loja de mater ial de construções para que forneça as imagens do dia dos fatos."
            },
            {
              "letra": "C",
              "texto": "Apresentar alegações finais orais em audiência, com pedido de absolvição sumária, diante do depoimento da testemunha."
            },
            {
              "letra": "D",
              "texto": "Requerer a nulidade da audiência de instrução e julgamento, pois as imagens da loja não foram apresentadas em sede policial."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Previdenciário",
          "enunciado": "Manoel, mecânico de manutenção, após acidente durante sua atividade remunerada, recebeu benefício por incapacidade temporária durante dois anos. Antes da alta previdenciária, foi encaminhado para a reabilitação profissional, na qual se identificou a necessidade de utilização de prótese e fisioterapia, sem necessidade de transfusão de sangue ou cirurgia, em local conveniado com o INSS. Nesse contexto hipotético, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "No seu processo de reabilitação profissional está incluído o transporte, quando necessário."
            },
            {
              "letra": "B",
              "texto": "Manoel poderia se recusar a fazer a reabilitação profissional, pois a lei não a indica como etapa obrigatória a ser observada pelos segurados."
            },
            {
              "letra": "C",
              "texto": "A reabilitação profissional permitirá seu retorno à atividade remunerada, na qual contará com estabilidade provisória de 5 anos."
            },
            {
              "letra": "D",
              "texto": "A reabilitação profissional não compreende o fornecimento de aparelhos de prótese, de órtese e de instrumentos de auxílio para locomoção."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Previdenciário",
          "enunciado": "Humberto Alves, profissional liberal, desempenha a atividade de eletricista autônomo, prestando serviço a diversos clientes, todos pessoas físicas, mediante remuneração e sem relação de emprego. Sobre o enquadramento de Humberto Alves como trabalhador autônomo no RGPS, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Ele é segurado obrigatório do Regime Geral de Previdência Social."
            },
            {
              "letra": "B",
              "texto": "Ele não poderá obter aposentadoria por idade ou por incapacidade permanente."
            },
            {
              "letra": "C",
              "texto": "Ele, por não possuir relação de emprego, é dispensado de quaisquer recolhimentos previdenciários."
            },
            {
              "letra": "D",
              "texto": "Ele se qualifica como segurado trabalhador avulso do Regime Geral de Previdência Social."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito do Trabalho",
          "enunciado": "Guilherme, engenheiro responsável por obras de infraestrutura, trabalha para uma sociedade empresária há cinco anos. Ao longo dos últimos 4 anos sempre desfrutou de 30 dias de férias corridos. Em janeiro de 2024, ao verificar a incidência de numerosos feriados ao longo do ano, ele pretendeu fracionar suas férias. Assim sendo, procurou você, como advogado(a), para orientá -lo sobre a possibilidade de fracionar os 30 dias de férias a que tem direito. Acerca do interesse do seu cliente, assinale a opção que indica, corretamente, a orientação a ser dada.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Ele não pode fracionar as férias porque não usufruiu desse direito nos últimos quatro anos, mas tem o direito de converter 1/3 em pecúnia."
            },
            {
              "letra": "B",
              "texto": "Ele pode fracionar as férias em 3 períodos de 10 dias consecutivos cada, para fazer coincidir com os numerosos feriados observados ao longo do ano."
            },
            {
              "letra": "C",
              "texto": "Ele pode fracionar as férias em períodos inferiores a cinco dias, contados em dias úteis, de modo a coincidir, ou no início ou no término, com os feriados."
            },
            {
              "letra": "D",
              "texto": "Ele pode fracionar as férias em até 3 períodos, desde que um deles não seja inferior a 14 dias corridos e, os demais, não sejam inferiores a cinco dias corridos, cada um."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito do Trabalho",
          "enunciado": "Pedro é caixa em um banco comercial desde 2022, e sua jornada contratual é de 2ª a 6ª feira, das 10 às 16 horas, com intervalo de 15 minutos para refeição. Ocorre que, na prática, diante do grande volume de trabalho, Pedro trabalha de 2ª a 6ª feira , das 10 às 18 horas, com intervalo de 15 minutos. Sobre o intervalo, considerando os fatos e a previsão da CLT, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A jornada cumprida por Pedro não credencia qualquer intervalo."
            },
            {
              "letra": "B",
              "texto": "Pedro terá direito a um intervalo de 15 minutos diários, já aproveitado."
            },
            {
              "letra": "C",
              "texto": "Pedro receberá, a título indenizatório, 45 minutos diários com adicional de 50%."
            },
            {
              "letra": "D",
              "texto": "O empregado deverá receber 55 minutos de horas extras diárias acrescidas de 50%."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito do Trabalho",
          "enunciado": "Eduarda estava r adiante porque ficou grávida de seu primeiro filho, um sonho que acalentou durante muitos anos. Ocorre que, em virtude de problemas de saúde, Eduarda sofreu um aborto espontâneo na 6ª semana da gravidez. Sobre a situação de Eduarda, nos termos da CLT, assi nale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Ela poderá se afastar do trabalho por um período de 30 dias."
            },
            {
              "letra": "B",
              "texto": "Ela terá direito a um repouso remunerado de duas semanas."
            },
            {
              "letra": "C",
              "texto": "Ela terá direito ao mesmo período da licença -paternidade, ou seja, 5 dias."
            },
            {
              "letra": "D",
              "texto": "Ela não terá direito a qualquer período de repouso, por faltar previsão legal."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito do Trabalho",
          "enunciado": "Giovana encontra -se em auxílio temporário por incapacidade (auxílio-doença) há 6 anos, permanecendo, basicamente, em sua residência, realizando afazeres domésticos. Não há impossibilidade de Giovana realizar os atos da vida civil de maneira geral, mas está limitada em sua capacidade laborativa. Em 2024, Giovana lembrou que, no mês anterior ao início do seu benefício previdenciário, realizou várias horas extras, que pretende reivindicar judicialmente, e para tanto o(a) procura, como advogado(a), para obter uma orientação. Considerando esses fatos e o entendimento consolidado do TST, assinale a opção que apresenta, corretamente, sua orientação.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Desaconselhável a demanda, porque a prescrição que vier a ser suscitada impedirá a análise do suposto direito."
            },
            {
              "letra": "B",
              "texto": "Haverá prescrição extintiva bienal porque a ação não foi ajuizada nos 2 anos seguintes à concessão do benefício."
            },
            {
              "letra": "C",
              "texto": "A prescrição para quem e stá recebendo benefício previdenciário é trintenária, daí o pedido de horas extras ser viável."
            },
            {
              "letra": "D",
              "texto": "Não corre prescrição parcial porque o contrato se encontra suspenso e, por isso, a prescrição não flui contra Giovana."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito do Trabalho",
          "enunciado": "Você foi consulta do, na qualidade de advogado(a), por quatro mulheres trabalhadoras (Ligia, Paula, Geórgia e Sílvia), acerca de situações específicas que ocorreram no mercado de trabalho. Ligia indagou sobre um anúncio de emprego para chefe de cozinha que continha expressa referência à preferência por homens. Paula teria sido preterida em promoção, porque estava grávida de 6 meses e entraria em licença -maternidade em pouco tempo. De Geórgia, na entrevista de emprego, foi exigido, como condicionante da contratação, o atestad o de que não estaria grávida. Sílvia perguntou acerca de um anúncio de empregos exclusivos para homens, no qual havia a descrição dos serviços como sendo de transporte, armazenagem e movimentação de cargas de 30 kg, sem o auxílio de meios mecânicos. Acerca da sua resposta às quatro consultas, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Todas as exigências são legítimas, porque estão contidas no poder empregatício."
            },
            {
              "letra": "B",
              "texto": "Todas as exigências são ilegítimas, pois violam os direitos da mulher e demonstram discriminação no mercado de trabalho."
            },
            {
              "letra": "C",
              "texto": "As exigências nos casos de Ligia, Paula e Geórgia são ilegais, por violarem direitos das mulheres; em relação ao caso de Sílvia, a exigência é legítima."
            },
            {
              "letra": "D",
              "texto": "As exigências relacionadas a Paula e a Geórgia são ilícitas, pois ferem o direito à maternidade, sendo as demais justificáveis, com base nas naturais exigências do mercado de trabalho."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Processo do Trabalho",
          "enunciado": "Sandra trabalhou na sociedade empresária Sorvete Saboroso Ltda. por 3 anos, como atendente de loja. Após ser dispensada em 2024, Sandra ajuizou reclamação trabalhista contra a ex -empregadora requerendo equiparação salarial com a funcionária Maria, que exercia a mesma função, mas recebia salário superior. Apresentada a defesa, os pontos controvertidos definidos foram: diferença na perfeição técnica entre as empregadas e diferença superior a quatro anos no tempo de serviço para o empregador. Considerando a distribuição estática do ônus da prova e os termos da CLT, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "À empresa caberá provar a diferença na perfeição técnica e a diferença superior a quatro anos no tempo de serviço entre as cotejadas."
            },
            {
              "letra": "B",
              "texto": "À empresa caberá provar a diferença superior a quatro anos no tempo de serviço e, à empregada, a diferença na perfeição técnica."
            },
            {
              "letra": "C",
              "texto": "À empregada caberá provar a diferença superior a quatro anos no tempo de serviço para o empregador e, à empresa, a diferença na perfeição técnica."
            },
            {
              "letra": "D",
              "texto": "À empregada caberá provar a diferença na perfeição técnica e a diferença superior a quatro anos no tempo de serviço entre as cotejadas."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Processo do Trabalho",
          "enunciado": "Você é advogado(a) de uma sociedade empresária que figura como ré em quatro ações na Justiça do Trabalho. Uma ação versa sobre a dispensa de um empregado que aderiu a uma greve. Outra, sobre indenização por dano moral, em razão de suposto assédio moral praticado por um superior hierárquico de um empregado. A terceira versa sobre horas extras. E a quarta, versa exclusivamente sobre cobrança de cont ribuições previdenciárias supostamente não efetuadas pelo empregador ao longo de um contrato de trabalho de um outro empregado. Sobre a competência da Justiça do Trabalho nas quatro ações apresentadas, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A Justiça do Trabal ho é competente para todos os pedidos formulados nas ações."
            },
            {
              "letra": "B",
              "texto": "A competência para o pedido de indenização por danos morais é da Justiça Comum."
            },
            {
              "letra": "C",
              "texto": "A Justiça do Trabalho não tem competência para os dissídios oriundos de direito de greve."
            },
            {
              "letra": "D",
              "texto": "A Justiça do Trabalho é incompetente para julgar o pedido de cobrança de contribuições previdenciárias supostamente não efetuadas pelo empregador."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Processo do Trabalho",
          "enunciado": "No bojo de uma execução que tramita perante a 100ª Vara do Trabalho de Porto Velho/RO, o Juiz, após conceder vista ao executado, homologou o cálculo apresentado pelo exequente e fixou a dívida em R$ 20.000,00. O executado pretende se valer do parcelamento da dívida na forma do CPC, subsidiariamente aplicado ao Processo do Trabalho. Considerando esses fatos e de acordo com a legislação em vigor, sabendo-se que não há oposição do credor, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O executado poderá honrar a dívida em 5 parcelas iguais e sucessivas e, após garantido o Juízo, apresentar embargos à execução."
            },
            {
              "letra": "B",
              "texto": "O executado depositará 30% da execução acrescido de custas e honorários advocatícios, e o restante, em até seis parcelas mensais, acrescidas de correção monetária e de juros de 1% ao mês."
            },
            {
              "letra": "C",
              "texto": "A pretensão não terá sucesso porque o parcelamento somente é possível quando o valor homologado for o cálculo apresentado pelo executado."
            },
            {
              "letra": "D",
              "texto": "Caberá à sociedade empresária apresentar metade do valor juntamente com uma petição onde irá requerer o parcelamento, devendo pagar o restante em três parcelas iguais e sucessivas."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Processo do Trabalho",
          "enunciado": "Helena foi empregada de uma sociedade empresária de fevereiro de 2022 a janeiro de 2024, quando foi dispensada sob a alegação de justa causa. Ciente de que não fez absolutamente nada de errado, e considerando que sua ún ica testemunha é uma outra ex - funcionária que se encontra enferma e terá pouco tempo de vida, Helena ajuizou, em março de 2024, uma ação para produção antecipada de provas, distribuída por sorteio para a 950ª Vara do Trabalho de São Paulo. Na referida ação foi colhido o depoimento da testemunha, que pouco depois veio a falecer. Arquivada a produção antecipada de provas, Helena pretende ajuizar reclamação trabalhista para anular a justa causa aplicada, valendo-se inclusive do testemunho da finada. Sobre o fato narrado, considerando o disposto na norma de regência, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A ação deverá ser distribuída ao Juízo da 950ª Vara do Trabalho de São Paulo, que é prevento para apreciar a lide."
            },
            {
              "letra": "B",
              "texto": "A reclamação trabalhista será livremente distribuída a uma das Varas do Trabalho de São Paulo."
            },
            {
              "letra": "C",
              "texto": "Qualquer Juízo do Trabalho poderá apreciar a demanda na localidade de São Paulo, exceto a 950ª Vara, que já realizou parte da instrução e formou juízo de valor."
            },
            {
              "letra": "D",
              "texto": "Far-se-á a distribuição por depend ência à 950ª Vara do Trabalho de São Paulo, cabendo ao(à) advogado(a) do réu suscitar exceção de suspeição, caso o mesmo Magistrado que instruiu a produção antecipada da prova queira julgar a causa."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Processo do Trabalho",
          "enunciado": "Soraya integrava o contrato social d e uma sociedade empresária, mas se afastou dela em janeiro de 2019 e registrou sua saída perante a Junta Comercial em dezembro de 2021. Joana foi empregada da sociedade empresária em questão de abril de 2019 a setembro de 2022, tendo ajuizado reclamação trabalhista em outubro de 2023. Obteve vitória judicial e iniciou a execução em janeiro de 2025. Não tendo a sociedade empresária solvabilidade, requereu o direcionamento da execução contra os sócios atuais, sem êxito. Então, requereu que a execução fosse feita em relação à Soraya. Considerando esses fatos e o que prevê a CLT, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "É possível a execução de Soraya porque, entre a averbação de sua saída e o ajuizamento da ação, transcorreu prazo inferior a 2 anos."
            },
            {
              "letra": "B",
              "texto": "Uma vez que entre o afastamento de Soraya e o início da execução transcorreu prazo superior a 2 anos, ela não poderá ser executada."
            },
            {
              "letra": "C",
              "texto": "Entre o afastamento de Soraya e o ajuizamento da ação transcorreu prazo superior a 2 anos, pelo que a ex -sócia não poderá ser executada."
            },
            {
              "letra": "D",
              "texto": "Tendo sido sócia à época da prestação dos serviços de Joana, e enriquecido com o seu labor, Soraya pode ser executada a qualquer tempo. Questionário de percepção sobre a prova Este questionário é de preenchimento facultativo pelo examinando. Como se trata de mera pesquisa, não influi no resultado final do exame. As questões têm como objetivo avaliar a qualidade e a adequação da prova que você acabou de realizar. Assinale suas respostas nos espaços próprios (canto inferior direito) da sua folha de respostas. A OAB e a FGV agradecem sua colaboração. 1 Na sua avaliação, o grau de dificuldade dessa prova foi"
            }
          ],
          "respostaCorreta": 0
        }
      ]
    },
    {
      "provaOrigem": "45º Exame de Ordem Unificado",
      "questoes": [
        {
          "territorio": "Ética",
          "enunciado": "Os irmãos, Matilde, advogada, e Frederico, consultor de empresas, decidiram firmar sociedade para prestar serviços jurídicos e de consultoria empresarial na capital mineira. Para isso, montaram um escritório em conjunto na cidade de Belo Horizonte, MG, divulgando seus serviços por meio de panfletos e redes sociais (Instagram e Linkedin), ressaltando a natureza jurídica e empresarial das atividades como um ponto de destaque do escritório. Em relação às regras sobre a atividade privativa de advocacia e à publicidade de serviços advocatícios, conforme o Estatuto da Advocacia e da Ordem dos Advogados do Brasil, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "É vedada a divulgação dos serviços advocatícios em conjunto com qualquer outra atividade, inclusive a de consultoria empresarial."
            },
            {
              "letra": "B",
              "texto": "A publicidade conjunta dos serviços advocatícios e empresariais é permitida apenas quando realizada por meio de plataformas digitais, como redes sociais."
            },
            {
              "letra": "C",
              "texto": "Matilde e Frederico podem atuar conjuntamente, já que as atividades jurídicas e de consultoria empresarial possuem afinidade e se complementam."
            },
            {
              "letra": "D",
              "texto": "A divulgação dos serviços advocatícios juntamente com atividades de consultoria empresarial é permitida, desde que os materiais de publicidade sejam sóbrios e não induzam ao erro."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Ética",
          "enunciado": "Helena concluiu seu mestrado em Administração Pública e acumulou significativo conhecimento jurídico, mas não possui formação em Direito nem inscrição nos quadros da OAB. Apesar disso, ela passou a oferecer consultoria jurídica e a atuar em audiências representando clientes. André, por sua vez, era advogado regularmente inscrito na OAB, porém foi suspenso do exercício profissional por prática de infração disciplinar. Mesmo suspenso, ele continuou a realizar atos privativos da advocacia, tais como peticionar e participar de audiências. Com base nessas situações hipotéticas, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Os atos praticados por André, após a sua suspensão da OAB, são nulos, pois ele está impedido de exercer a advocacia enquanto durar a suspensão."
            },
            {
              "letra": "B",
              "texto": "Os atos privativos da advocacia praticados por Helena, que não possui inscrição na OAB, são válidos, desde que seus clientes a autorizem expressamente, ratificando os atos por ela praticados."
            },
            {
              "letra": "C",
              "texto": "Os atos praticados por Helena são válidos, desde que restritos à consultoria extrajudicial e relacionados à administração pública, uma vez que ela não representa clientes em processos judiciais."
            },
            {
              "letra": "D",
              "texto": "Tanto os atos praticados por Helena quanto os atos praticados por André são anuláveis, porém sujeitos à convalidação, pois a atuação em audiências e a prática de consultoria jurídica, embora preferencialmente exercidas por advogados, podem, excepcionalmente, ser exercidas por pessoa com conhecimento jurídico."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Ética",
          "enunciado": "Tarcísio, advogado trabalhista com mais de 20 anos de experiência, prestou concurso público para a Outorga de Delegações de Serventias Notariais e Registrais e, após aprovação, assumiu um Tabelionato de Notas e Ofício de Registro Civil em uma comarca do mesmo Estado. Ele deseja saber se poderá continuar exercendo a advocacia em causa própria e, além disso, pretende patrocinar uma ação contra a empresa pública estadual responsável pelo fornecimento de água. Sobre incompatibilidades e impedimentos, com base nas disposições do Estatuto da OAB, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Tarcísio poderá exercer a advocacia apenas em causa própria, conforme prevê o Estatuto da OAB, mas estará impedido de advogar contra a empresa pública estadual de fornecimento de água."
            },
            {
              "letra": "B",
              "texto": "Tarcísio poderá advogar livremente, inclusive contra a empresa pública estadual de fornecimento de água, uma vez que o exercício da atividade notarial não gera impedimento para o exercício da advocacia."
            },
            {
              "letra": "C",
              "texto": "Tarcísio está em situação de incompatibilidade total com o exercício da advocacia, sendo vedada a atuação em qualquer causa, inclusive em causa própria, em razão de seu cargo como titular de serventia notarial e registral."
            },
            {
              "letra": "D",
              "texto": "Tarcísio poderá continuar exercendo a advocacia, desde que em causas particulares que não envolvam empresas públicas ou concessionárias de serviço público, estando livre de impedimentos em ações de interesse pessoal."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Ética",
          "enunciado": "A advogada Jéssica foi contratada pela sociedade empresária de telefonia Alfa para trabalhar 10 horas contínuas por dia, de segunda a quinta-feira, totalizando 40 horas semanais. Além disso, o contrato escrito firmado entre Jéssica e a sociedade empresária prevê que, em situações excepcionais, ela deverá trabalhar horas extras, sendo remunerada com um adicional de 50% sobre o valor da hora normal. Jéssica questiona a validade dessas condições contratuais, especialmente em relação à duração da jornada de trabalho e à remuneração das horas extras. Com base no Art. 20 do Estatuto da Advocacia e da OAB, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O contrato de Jéssica é válido, pois a jornada semanal não ultrapassa 40 horas, e as horas extras podem ser remuneradas com um adicional de 50% conforme estipulado no contrato."
            },
            {
              "letra": "B",
              "texto": "A sociedade empresária está correta ao fixar 10 horas de trabalho por dia, desde que Jéssica cumpra apenas quatro dias de trabalho por semana, sem a necessidade de pagamento de horas extras."
            },
            {
              "letra": "C",
              "texto": "O contrato de Jéssica é inválido, pois a jornada diária não pode exceder 8 horas contínuas, e as horas extras devem ser remuneradas com um adicional de 100%, conforme previsto no Estatuto da OAB, independentemente do contrato firmado."
            },
            {
              "letra": "D",
              "texto": "Asociedade empresária está agindo corretamente, pois Jéssica pode trabalhar até 10 horas por dia desde que sua jornada semanal não ultrapasse 40 horas, mas a remuneração das horas extras deveria ser de 100% sobre o valor da hora normal, independentemente do contrato escrito."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Ética",
          "enunciado": "O jovem Marcos foi contratado como auxiliar de escritório por renomada banca de advocacia. Autodidata e talentoso, Marcos aproveitava os momentos de folga para estudar os processos judiciais patrocinados pelo escritório e, apesar de nunca ter frequentado o curso de graduação em Direito, tornou-se relativamente conhecedor prático de muitos temas jurídicos. Com esse conhecimento, Marcos resolveu se inscrever no Exame da Ordem dos Advogados do Brasil, apresentando, para tanto, diploma falsificado de bacharel em Direito. Após a aprovação, Marcos se inscreveu como advogado na OAB, novamente fazendo uso do referido documento falso. Seis anos após esses fatos, uma denúncia anônima a respeito do ilícito ensejou a instauração do competente processo administrativo disciplinar. Considerando o enunciado e o Estatuto da Advocacia e da Ordem dos Advogados do Brasil, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A gravidade da conduta atribuída a Marcos atrai a do Brasil para apurar e punir a infração disciplinar."
            },
            {
              "letra": "B",
              "texto": "Para a aplicação da sanção correspondente prevista em lei é necessária a manifestação de dois terços dos membros do Conselho Seccional competente."
            },
            {
              "letra": "C",
              "texto": "A sanção disciplinar prevista para a conduta de Marcos é a de suspensão, que deve perdurar até que seja apresentado documento idôneo, cumulada com a aplicação de multa."
            },
            {
              "letra": "D",
              "texto": "A pretensão à punibilidade da infração disciplinar encontra-se prescrita, uma vez que foi ultrapassado o prazo legal de cinco anos, contado da última data em que Marcos fez uso do documento falso."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Ética",
          "enunciado": "Durante muitos anos, João representou Pedro, na condição de seu advogado, em diversas causas. Recentemente, após encerrados todos os vínculos contratuais existentes entre si, Pedro passou a ser investigado pelo suposto cometimento de ilícitos tributários. Sobre esse contexto, de acordo com o Estatuto da Ordem e com o Código de Ética e Disciplina da Ordem dos Advogados do Brasil, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "João não poderá ser obrigado a depor como testemunha no curso de eventual processo judicial em face de Pedro, ainda que este expressamente o autorize ou solicite o depoimento do ex-advogado."
            },
            {
              "letra": "B",
              "texto": "João não poderá ser obrigado a depor como testemunha no curso de eventual processo judicial em face de Pedro, exceto se este expressamente o autorizar, ou no caso de solicitação do próprio ex-constituinte."
            },
            {
              "letra": "C",
              "texto": "João poderá ser obrigado a depor sobre fatos que constituam sigilo profissional caso seu depoimento seja considerado imprescindível para a instrução em processos criminais que apurem a prática de crimes dolosos contra a vida."
            },
            {
              "letra": "D",
              "texto": "Considerando que a investigação se iniciou após a extinção da relação profissional existente entre João e Pedro, não há qualquer prerrogativa em favor de João que o escuse da obrigação de depor como testemunha no curso de processo judicial sobre fato relacionado com pessoa de quem já foi advogado."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Ética",
          "enunciado": "Ana é advogada e acaba de dar à luz seu primeiro filho, a quem ainda amamenta. Ela foi cientificada de que a Sexta Câmara Cível deverá julgar um caso em que é uma das advogadas constituídas pelo recorrente. Sobre a hipótese, assinale a opção que indica o direito que Ana tem assegurado.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Vaga reservada na garagem do Fórum."
            },
            {
              "letra": "B",
              "texto": "Suspensão de prazos processuais, desde que haja notificação p p p o| J Ç por escrito ao cliente."
            },
            {
              "letra": "C",
              "texto": "Entrada em tribunais sem ser submetida a detectores de metais e aparelhos de raios X."
            },
            {
              "letra": "D",
              "texto": "Acesso a creche, onde houver, ou a local adequado para o atendimento das necessidades do bebê."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Ética",
          "enunciado": "Pedro é advogado regularmente inscrito no Conselho Seccional da OAB do Estado Alfa e constituiu uma Sociedade Unipessoal de Advocacia registrada e ativa na mesma unidade federativa. Recentemente, ele foi convidado pelo renomado advogado Abraão para integrar uma Sociedade de Advogados, também com sede no Estado Alfa, na qualidade de sócio. Pedro considerou a proposta promissora e cogita aceitá-la, acreditando que pode participar de ambas as sociedades, desde que evite atuar nos mesmos processos ou contra os interesses de clientes de uma delas. Sobre a decisão de Pedro, com base no Estatuto da Advocacia e da OAB, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Pedro poderá integrar ambas as sociedades, desde que atue em processos distintos e jamais represente partes com interesses opostos."
            },
            {
              "letra": "B",
              "texto": "Pedro poderá aceitar o convite de Abraão apenas se encerrar formalmente a Sociedade Unipessoal de Advocacia que já possui no Estado Alfa."
            },
            {
              "letra": "C",
              "texto": "Pedro poderá participar das duas sociedades se firmar declaração formal de que manterá independência profissional e não haverá conflito de interesses."
            },
            {
              "letra": "D",
              "texto": "Pedro poderá manter a sua sociedade unipessoal e, ao mesmo tempo, integrar a sociedade de Abraão desde que a nova sociedade registre filial em outra área territorial, ainda que continue atuando no Estado Alfa."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Filosofia do Direito",
          "enunciado": "Leia o fragmento a seguir. Encontrar uma forma de associação que defenda e proteja as pessoas e os bens de cada associado com toda a força comum, e pela qual cada um, unindo-se a todos, só obedece a si mesmo, permanecendo, assim, tão livre quanto antes. (Jean-Jacques Rousseau) Assinale a opção que indica a forma de associação que, segundo Rousseau, responde a esse problema.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Luta de Classes."
            },
            {
              "letra": "B",
              "texto": "Contrato Social."
            },
            {
              "letra": "C",
              "texto": "União das Nações."
            },
            {
              "letra": "D",
              "texto": "Utilitarismo de Regras."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Filosofia do Direito",
          "enunciado": "Considere hipoteticamente que determinado Tribunal, no julgamento de três casos diversos, profere as seguintes decisões: |. Ao analisar determinada lei que diz ser “proibida a entrada de animais em estabelecimentos comerciais”, o Tribunal decide que cães-guias de pessoas com deficiência visual não estão abrangidos pela norma. Il. Interpretando lei segundo a qual “é proibido fumar em ambientes fechados”, o Tribunal considera que a proibição deve se limitar ao que está textualmente contido na norma. ll. Com base em lei que prevê o “benefício da licença- maternidade à mãe biológica”, o Tribunal defere esse benefício a uma mãe adotiva. po Assinale a opção que indica corretamente os tipos de interpretação adotados pelo Tribunal nos casos |, Il e III, respectivamente.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Extensiva, teleológica e axiológica."
            },
            {
              "letra": "B",
              "texto": "Axiológica, restritiva e especificadora."
            },
            {
              "letra": "C",
              "texto": "Restritiva, especificadora e extensiva."
            },
            {
              "letra": "D",
              "texto": "Especificadora, restritiva e teleológica."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Constitucional",
          "enunciado": "A Faculdade de Direito da Universidade do Estado Beta, pela primeira vez, publicou edital para o ingresso nos cursos de mestrado e doutorado, contendo sistema de cotas para graduados negros, indígenas, quilombolas e pessoas com deficiência. O edital baseia-se em lei estadual, promulgada no ano passado, que garante, pelo prazo de cinco anos, o acesso diferenciado aos programas de mestrado e doutorado. Indignado com essa regra, um graduado apresentou pedido administrativo visando à modificação do edital, com a exclusão do sistema de cotas. Para tanto, argumentou que ele viola o princípio da isonomia. Diante da polêmica, a Diretora da Faculdade consultou o corpo de advogados da Universidade. Sobre a hipótese apresentada, segundo o sistema jurídico- constitucional brasileiro, assinale a opção que indica o parecer correto que deve ser apresentado.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O acesso diferenciado, como apresentado no edital, só pode ser admitido para as educações básica e superior, sendo expressamente vedada a sua utilização em cursos de pós- graduação."
            },
            {
              "letra": "B",
              "texto": "A diretoria da Faculdade de Direito tem discricionariedade para, livremente, estabelecer critérios para o acesso aos cursos de graduação e pós-graduação para quaisquer grupos sociais, com base na autonomia didático-científica e administrativa de que gozam as universidades públicas."
            },
            {
              "letra": "C",
              "texto": "A realização da dimensão material do princípio da igualdade coaduna-se com a adoção de ações afirmativas que atinja grupos sociais determinados, atribuindo-lhes certas vantagens, normalmente por tempo definido, com vistas à superação de desigualdades decorrentes de situações históricas."
            },
            {
              "letra": "D",
              "texto": "O edital elaborado pela Faculdade de Direito viola o princípio da isonomia formal, princípio constitucional elementar, que tem por função garantir idênticas condições de acesso ao ensino de pós-graduação a todos, relativizando possíveis diferenças culturais, de raça ou mesmo por deficiência."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Constitucional",
          "enunciado": "Romualdo, empresário do ramo de supermercados, dirige-se à Prefeitura do Município Alfa e solicita licença para instalar uma loja da sua rede em um bairro específico da cidade. O pedido é negado sob a justificativa de que já existia outro estabelecimento do mesmo ramo na região. Segundo a Prefeitura de Alfa, a concessão de licença afrontaria a Lei Complementar Municipal nº X (LC X/2024), que exige distância mínima de mil metros entre estabelecimentos que comercializem produtos semelhantes. Romualdo, então, procura você, como advogado(a), para analisar a situação com base na ordem jurídico-constitucional brasileira. Assinale a opção que apresenta, corretamente, sua análise sobre a hipótese narrada.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A norma municipal deve ser observada, em respeito à autonomia municipal garantida pela ordem jurídica brasileira."
            },
            {
              "letra": "B",
              "texto": "A LC X é inconstitucional, já que Alfa, por não ser ente federativo, não possui competência legislativa para produzir leis complementares."
            },
            {
              "letra": "C",
              "texto": "A existência de norma legal federal sobre a questão deve ser avaliada, porque, pelo critério hierárquico, esta última prevaleceria sobre a norma municipal."
            },
            {
              "letra": "D",
              "texto": "A abertura do negócio em questão não deve ser restringida, porque a LCX, ao adotar o referido critério geográfico, viola o princípio constitucional da livre concorrência."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Constitucional",
          "enunciado": "Marcos, que tem 56 anos de idade, é amigo de Joana, que já completou 58 anos de idade. Ambos, em disputas judiciais contra o Estado Alfa, tiveram reconhecidos seus respectivos direitos ao recebimento de valores em face do mencionado ente. Após os trâmites executórios, foi autorizada pelo Presidente do Tribunal de Justiça de Alfa a expedição do precatório de Marcos e, dois meses depois, pela mesma autoridade, autorizada a expedição do precatório de Joana. Ciente de que nenhum dos dois casos caracteriza débito de natureza alimentícia, Joana consultou você, como advogado(a), para saber se ela tem prioridade de recebimento por ser mais velha que Marcos. Assinale a opção que indica, corretamente, sua resposta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A CRFB/88 não estabelece critérios de prioridade cronológica para o recebimento dos precatórios, quando os créditos não têm natureza alimentícia."
            },
            {
              "letra": "B",
              "texto": "Tanto Joana quanto Marcos, por terem menos de 60 anos, devem receber seus créditos na ordem cronológica de apresentação dos precatórios."
            },
            {
              "letra": "C",
              "texto": "Ambos, em razão da idade, terão direito ao recebimento imediato, sem se submeter à ordem cronológica estabelecida para a sistemática de precatórios pela CRFB/88."
            },
            {
              "letra": "D",
              "texto": "Joana, por ter idade superior à de Marcos, possui prioridade etária sobre ele e, por isso, receberá seus créditos em data anterior à realização do pagamento a Marcos."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Constitucional",
          "enunciado": "Carlos Frederico, Deputado Estadual no Estado Alfa, apresentou projeto de lei que versa sobre tema que, embora considerado de grande relevância, não se enquadra no rol de matérias de competência legislativa expressa de qualquer dos entes ederativos (União, Estados, Distrito Federal e Municípios). Por essa razão, alguns dos seus colegas deputados suscitaram a possível incompetência da Assembleia Legislativa de Alfa para egislar sobre o tema. Para esclarecer a dúvida, o Procurador-Geral da Assembleia Legislativa foi chamado a se manifestar. Assinale a opção que apresenta, segundo o sistema jurídico- constitucional brasileiro, o esclarecimento prestado.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A Assembleia Legislativa do Estado Alfa pode legislar sobre a matéria."
            },
            {
              "letra": "B",
              "texto": "O projeto de lei é inconstitucional, porque a competência legislativa sobre a matéria é exclusiva da União."
            },
            {
              "letra": "C",
              "texto": "A omissão constitucional permite concluir que se está diante de matéria de interesse local, de competência municipal."
            },
            {
              "letra": "D",
              "texto": "A constitucionalidade do projeto de lei somente será reconhecida se, aprioristicamente, a Assembleia Legislativa de Alfa solicitar autorização ao Congresso Nacional para a respectiva tramitação."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Constitucional",
          "enunciado": "A Lei Federal nº 1.079/1950 define os crimes de responsabilidade praticados pelo Presidente da República e traz normas regulando o respectivo processo. Há poucos meses, o Diretório Nacional do Partido Político Alfa consultou você, como advogado(a), sobre a possibilidade de ingressar com Ação Direta de Inconstitucionalidade (ADI) para impugnar alguns dispositivos da Lei nº 1.079/1950 que considerava incompatíveis com a ordem constitucional. Sobre a hipótese apresentada, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Como a Lei nº 1.079/1950 foi recepcionada pela ordem constitucional vigente, continuando a produzir efeitos nas últimas décadas, a Ação Direta de Inconstitucionalidade é a via de controle objetivo adequada para impugná-la."
            },
            {
              "letra": "B",
              "texto": "Diante da fungibilidade reconhecida pelo Supremo Tribunal Federal entre a Ação Direta de Inconstitucionalidade e a Arguição de Descumprimento de Preceito Fundamental, admite-se, em qualquer caso, a conversão de uma via impugnativa em outra."
            },
            {
              "letra": "C",
              "texto": "Embora seja cabível o ajuizamento de Ação Declaratória de Constitucionalidade em face da Lei nº 1.079/1950, para reconhecer a compatibilidade de seus dispositivos com a CRFB/88, a Ação Direta de Inconstitucionalidade não se presta a impugnar dispositivos de lei pré-constitucional."
            },
            {
              "letra": "D",
              "texto": "A Ação Direta de Inconstitucionalidade não é a via de controle objetivo adequada para impugnar os dispositivos da Lei nº 1.079/1950, e, por se tratar de erro grosseiro, o Supremo Tribunal Federal não admite sua fungibilidade com a Arguição de Descumprimento de Preceito Fundamental."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direitos Humanos",
          "enunciado": "Mariana, que nasceu no Brasil, decidiu adquirir a nacionalidade de um país asiático. Embora este país não tivesse imposto condições para sua permanência no respectivo território ou para o exercício dos direitos civis, ela acreditava que essa decisão facilitaria sua circulação pelo continente asiático, já que tinha o propósito de explorar vários sítios montanhosos. No entanto, ao retornar ao Brasil neste mês, Mariana foi informada de que essa escolha pode resultar na perda de sua nacionalidade brasileira. Preocupada, ela consultou você, como advogado(a), para esclarecer a sua situação, explicando que nunca realizou qualquer pedido expresso para abdicar da nacionalidade brasileira. Sobre a situação de Mariana, de acordo com o sistema jurídico- constitucional brasileiro, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Ela mantém a nacionalidade brasileira, pois, no caso em análise, apenas o pedido expresso de perda da nacionalidade pode gerar tal consequência."
            },
            {
              "letra": "B",
              "texto": "Ela não perde a nacionalidade brasileira, desde que comunique previamente ao governo brasileiro que não deseja renunciar a ela ao adquirir a nova nacionalidade."
            },
            {
              "letra": "C",
              "texto": "Ela perde a nacionalidade brasileira apenas se deixar de exercer direitos políticos e civis no Brasil, como o voto ou a manutenção de propriedades, após adquirir a nova nacionalidade."
            },
            {
              "letra": "D",
              "texto": "Ela perde a nacionalidade brasileira, pois ao adquirir voluntariamente outra nacionalidade, sem imposição do Estado estrangeiro, ela perde automaticamente a nacionalidade originária."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direitos Humanos",
          "enunciado": "Na condição de advogado(a) especializado(a) na defesa de Direitos Humanos, você é procurado(a) por membros de uma comunidade de povos originários, interessados em regularizar a situação das terras por eles tradicionalmente ocupadas. A referida comunidade pretende obter esclarecimentos acerca do seu eventual direito de propriedade, bem como quanto à forma de sua utilização. Em relação ao tema, de acordo com o sistema regional americano e o ordenamento jurídico nacional, assinale a opção que apresenta, corretamente, o seu esclarecimento.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "De acordo com o ordenamento jurídico interno, aos povos originários é assegurado o usufruto exclusivo das riquezas do solo por eles tradicionamente ocupado. Nesse sentido, pode a comunidade, exercendo o seu direito à autodeterminação, cultivar organismos geneticamente modificados em suas terras."
            },
            {
              "letra": "B",
              "texto": "A Convenção nº 169, da Organização Internacional do Trabalho, reconhece expressamente o direito de propriedade dos povos originários em relação às terras que tradicionalmente ocupam."
            },
            {
              "letra": "C",
              "texto": "Ao reconhecer, em favor das comunidades de povos originários, os direitos originários sobre as terras que tradicionalmente ocupam, o ordenamento jurídico nacional admite que tais áreas possam ser objeto de contrato de arrendamento, desde que celebrado pelos próprios, adequadamente representados e informados."
            },
            {
              "letra": "D",
              "texto": "Embora a Corte Interamericana de Direitos Humanos não reconheça o direito de propriedade coletiva em favor das comunidades de povos originários quanto às terras que tradicionalmente ocupam, a Constituição Federal de 1988 expressamente determinou a outorga do título de propriedade aos povos originários, desde que demonstrada a tradicionalidade da sua ocupação."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direitos Humanos",
          "enunciado": "De acordo com a jurisprudência da Corte Interamericana de Direitos Humanos, em relação ao Direito à Proteção Judicial, previsto no Art. 25 do Pacto de São José da Costa Rica, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O direito à proteção judicial não se exaure na prestação da tutela judicial cognitiva, sendo imprescindível que o Estado garanta os meios para executar, de maneira efetiva, as suas decisões definitivas."
            },
            {
              "letra": "B",
              "texto": "Trata-se de direito que impõe obrigação meramente instrumental aos Estados-parte. Nesse sentido, é suficiente a previsão de recursos no plano formal para que a garantia seja considerada efetivamente observada."
            },
            {
              "letra": "C",
              "texto": "Com vistas à preservação da soberania dos Estados-parte, caso sejam necessários esclarecimentos quanto à violação ou não por determinado Estado, de suas obrigações internacionais em virtude das atuações de seus órgãos judiciais, não poderá a Corte IDH examinar os processos judiciais internos, devendo se valer de outros elementos de análise."
            },
            {
              "letra": "D",
              "texto": "Nos casos em que se verificou uma situação de graves violações a Direitos Humanos, é obrigação do Estado-parte promover a devida apuração e responsabilização de todos os envolvidos, sejam autoridades oficiais ou particulares. Admite- se, como única justificativa legítima ao não sancionamento dos responsáveis, a concessão de anistia, quando prevista em lei, devidamente aprovada pelo Poder Legislativo competente."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Eleitoral",
          "enunciado": "João, prefeito do Município Alfa, no ano em que seriam realizadas eleições municipais, cedeu, de maneira gratuita, o uso de um prédio público, mais especificamente de uma escola pública, fora do horário de aulas, para que os partidos políticos pudessem promover as convenções partidárias nas quais seriam escolhidos os candidatos ao pleito. Ana, cidadã com elevado senso cívico, consultou você, como advogado(a), sobre a compatibilidade dessa medida com a legislação eleitoral. Em relação à atitude de João, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A decisão proferida gera prejuízo ao erário, pois, embora o prédio público possa ser utilizado pelos partidos políticos para a finalidade indicada, deveria ser pago aluguel."
            },
            {
              "letra": "B",
              "texto": "João decidiu de maneira harmônica com a legislação eleitoral, pois o prédio público não pode ser utilizado para finalidades privadas, estando configurada uma conduta vedada aos agentes públicos em campanhas eleitorais."
            },
            {
              "letra": "C",
              "texto": "A decisão de João mostra-se correta, pois, embora exista a regra geral de que os agentes públicos não podem ceder imóveis públicos em benefício dos partidos políticos, é ressalvada a realização de convenção partidária."
            },
            {
              "letra": "D",
              "texto": "A decisão de João está ajustada à sistemática legal, pois, em prol do princípio democrático, os imóveis públicos devem ser cedidos, para fins exclusivamente eleitorais, aos candidatos, aos partidos e às coligações que os solicitem."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Eleitoral",
          "enunciado": "João, que acabara de assumir a função de tesoureiro do partido político Alfa, solicitou explicações ao(à) advogado(a) do partido a respeito dos cuidados que deveria ter na aplicação dos recursos oriundos do Fundo Especial de Assistência Financeira aos Partidos Políticos (Fundo Partidário), mais especificamente em relação à existência de plena liberdade valorativa do partido político na aplicação desses recursos e à necessidade, ou não, de prestação de contas. Sobre a hipótese formulada, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Os recursos devem ser aplicados por Alfa, nas finalidades autorizadas em lei, sendo objeto de prestação de contas à Justiça Eleitoral, embora o referido Fundo receba tanto valores de origem pública como privada."
            },
            {
              "letra": "B",
              "texto": "Os recursos recebidos por Alfa devem ser aplicados nas finalidades autorizadas em lei, sendo objeto de prestação de contas apenas ao seu órgão de direção nacional, embora o referido Fundo seja formado a partir das sobras da arrecadação da União."
            },
            {
              "letra": "C",
              "texto": "Como Alfa tem personalidade jurídica de direito privado, pode aplicar livremente os recursos recebidos nas finalidades previstas em seu estatuto e deve prestar contas à Justiça Eleitoral, quando se comprometer a realizar um projeto de interesse público."
            },
            {
              "letra": "D",
              "texto": "Os recursos devem ser aplicados por Alfa nas finalidades livremente autorizadas em seu estatuto, mas, como os valores remetidos ao referido Fundo são captados pela Justiça Eleitoral com as multas eleitorais e as dotações da União, deve haver prestação de contas ao Tribunal de Contas da União."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Internacional",
          "enunciado": "Hector, cidadão espanhol, chega ao Brasil, em janeiro de 2024, para passar as férias de verão em Salvador. Contudo, é proibido de ingressar no país pela Polícia Federal do Aeroporto Internacional de Salvador, porque, em janeiro de 2020, Hector foi expulso do Brasil e tal medida fora conjugada com o impedimento de reingresso por cinco anos. Sobre a hipótese apresentada, assinale a opção que indica, corretamente, a medida de retirada compulsória a ser aplicada a Hector.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Extradição."
            },
            {
              "letra": "B",
              "texto": "Expulsão."
            },
            {
              "letra": "C",
              "texto": "Deportação."
            },
            {
              "letra": "D",
              "texto": "Repatriação."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Internacional",
          "enunciado": "Sobre a concessão de visto, com base na Lei de Migração e na Constituição da República, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O visto de visita poderá ser concedido ao imigrante que venha ao Brasil com o intuito de estabelecer residência por tempo indeterminado para tratar de sua saúde."
            },
            {
              "letra": "B",
              "texto": "O visto de visita não será exigido do estrangeiro em caso de escala ou conexão em território nacional, ainda que o visitante deixe a área de trânsito internacional por algumas horas."
            },
            {
              "letra": "C",
              "texto": "Entre as hipóteses de concessão do visto temporário está a do imigrante que vem ao Brasil com o intuito de estabelecer residência por tempo determinado e que venha praticar atividade religiosa ou serviço voluntário."
            },
            {
              "letra": "D",
              "texto": "O visto diplomático não poderá ser estendido aos dependentes das autoridades e funcionários estrangeiros que viajem ao Brasil em missão oficial de caráter transitório ou permanente, representando Estado estrangeiro ou organismo internacional."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Financeiro",
          "enunciado": "Apesar de todas as despesas realizadas no primeiro semestre do ano pela Secretaria de Obras do Estado Alfa estarem devidamente previstas na sua lei orçamentária anual, o procedimento formal para sua realização não vinha atendendo integralmente as etapas e regras da legislação vigente, uma vez que todos os pagamentos aos fornecedores e empreiteiros estavam sendo realizados de maneira direta e antecipada ao vencedor da licitação, logo após a conclusão do edital de licitação. Diante desse cenário, à luz da Lei nº 4.320/1964, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Inicialmente deve ser feito o empenho da despesa contratada e, em seguida, salvo casos especiais previstos em legislação específica, a emissão da nota de empenho; após a verificação da entrega do material e da conclusão integral da obra deve haver a liquidação; por último, será emitida a ordem de pagamento para a empresa credora."
            },
            {
              "letra": "B",
              "texto": "Após a entrega do material e a conclusão da obra certificada pelo servidor público responsável, será emitida a ordem de pagamento, a qual será utilizada pelo credor para sacar o valor devido na instituição bancária oficial, não sendo nos dias de hoje mais necessário o empenho e a liquidação."
            },
            {
              "letra": "C",
              "texto": "Tendo havido licitação regular para a contratação de uma empresa para a realização de obras, sendo esta de notória reputação, ficam dispensados empenho e a liquidação, bastando que seja assinado o contrato da obra e apresentada a planilha de custos para que o pagamento seja feito antecipadamente, ficando a contratada responsável pela imediata devolução caso a obra não seja concluída."
            },
            {
              "letra": "D",
              "texto": "Após a realização da licitação regular e contratação formal, mas antes do início da obra, deverá ser obtida autorização prévia do Tribunal de Contas para que este órgão fiscalizador realize o empenho e emita a nota de empenho; em seguida, o órgão contratante deverá acompanhar a entrega do material e a realização da obra, ficando a cargo deste apenas a liquidação e emissão da ordem de pagamento."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Financeiro",
          "enunciado": "O Estado Alfa, ao final do segundo bimestre de um determinado exercício financeiro, percebeu que a realização da receita poderia não comportar o cumprimento das metas de resultado primário estabelecidas no Anexo de Metas Fiscais. Em razão disso, o Poder Executivo teve de realizar, nos trinta dias subsequentes, limitação de empenho e movimentação financeira. Diante desse cenário, assinale a opção que apresenta, corretamente, a despesa que poderia ser objeto de tal limitação de empenho.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A despesa que constitua obrigação legal do ente estadual."
            },
            {
              "letra": "B",
              "texto": "A despesa com o pagamento do serviço da dívida estadual."
            },
            {
              "letra": "C",
              "texto": "A despesa com desenvolvimento científico custeada por fundo criado para tal finalidade."
            },
            {
              "letra": "D",
              "texto": "A despesa com aquisição de material de consumo para setores administrativos do Poder Executivo."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Tributário",
          "enunciado": "Nova lei federal, ampliando o prazo de pagamento de certo tributo federal, foi publicada em 15/06/2023. Contudo, seu texto foi omisso quanto ao momento em que entraria em vigor. Diante desse cenário de omissão, assinale a opção que indica, corretamente, o momento em que tal lei tributária entrará em vigor, em todo o país.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "30 dias depois de oficialmente publicada."
            },
            {
              "letra": "B",
              "texto": "45 dias depois de oficialmente publicada."
            },
            {
              "letra": "C",
              "texto": "90 dias depois de oficialmente publicada."
            },
            {
              "letra": "D",
              "texto": "no 1º dia do exercício seguinte áquele em que foi oficialmente publicada."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Tributário",
          "enunciado": "O Estado Alfa publicou, em 29/12/2024, uma nova lei ordinária, instituindo a incidência de IPVA sobre a propriedade de veículos automotores aéreos e aquáticos, com fato gerador ocorrendo no dia 1º de janeiro de cada ano. A partir do mês de janeiro de 2025, o Fisco Estadual começou a enviar aos contribuintes carnês de pagamento de IPVA incidente sobre tais veículos aéreos e aquáticos, com data de pagamento até o final de fevereiro de 2025. Acerca deste cenário, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A cobrança poderia ser feita a partir de 01/01/2025."
            },
            {
              "letra": "B",
              "texto": "As novas hipóteses de incidência de IPVA são inconstitucionais."
            },
            {
              "letra": "C",
              "texto": "A cobrança poderia ser feita apenas decorridos 90 dias da data em que foi publicada a nova lei."
            },
            {
              "letra": "D",
              "texto": "A lei somente poderia instituir a incidência de IPVA sobre a propriedade de veículos automotores aquáticos."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Tributário",
          "enunciado": "No Estado Alfa, a lei estadual do Imposto sobre a Transmissão Causa Mortis e Doações (ITCMD) determina que o lançamento deste tributo se faz por homologação via Internet. Por isso, dentro do prazo previsto em lei para comunicar o óbito à Secretaria Estadual de Fazenda, Júlia, filha e única herdeira de Maria, apresentou ao Fisco estadual a declaração correta de todos os bens que recebera a título de transmissão causa mortis de sua mãe, sendo o tributo integralmente devido ao Estado Alfa. O sistema on-line da Secretaria de Fazenda Estadual gerou a guia de pagamento do ITCMD, com vencimento em 07/03/2024. Contudo, o pagamento dessa guia não foi efetuado. Diante deste inadimplemento, assinale a opção que indica a partir de quando é contado o prazo prescricional para cobrança deste tributo.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Da data do óbito da mãe de Júlia, seu fato gerador."
            },
            {
              "letra": "B",
              "texto": "Do dia seguinte ao vencimento previsto na guia de pagamento."
            },
            {
              "letra": "C",
              "texto": "Do primeiro dia do exercício seguinte àquele do óbito da autora da herança."
            },
            {
              "letra": "D",
              "texto": "Da data em que Júlia entrega a declaração ao Fisco estadual, seu fato gerador."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Tributário",
          "enunciado": "Educando 100%, associação civil sem fins lucrativos, portadora de Certificado de Entidade Beneficente de Assistência Social (CEBAS), contratou a Construtora ABC Ltda. a fim de que esta realizasse a construção de um novo edifício para a entidade beneficente. Sobre o serviço de realização de obras incide o Imposto sobre Serviços (ISS), e a lei local, instituidora do tributo, estabeleceu que é obrigação da tomadora do serviço a retenção do ISS devido. Contudo, Educando 100% não reteve o ISS devido sobre a obra. A construtora prestadora do serviço também não efetuou o pagamento do ISS devido. Sobre a pretensão do Fisco de fazer a cobrança da dívida tributária, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A imunidade de Educando 100% impede que incida o ISS nessa prestação de serviços de obras."
            },
            {
              "letra": "B",
              "texto": "Como responsável tributária pela retenção do ISS devido, Educando 100% pode ser cobrada pelo Fisco municipal."
            },
            {
              "letra": "C",
              "texto": "Educando 100%, na condição de contribuinte, pode ser cobrada pelo Fisco municipal quanto a tais débitos de ISS."
            },
            {
              "letra": "D",
              "texto": "Educando 100% é uma entidade imune, de modo que não se aplica a ela a lei local que estabelece a obrigação de o tomador do serviço reter o ISS."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Tributário",
          "enunciado": "O Município Alfa, desejando aumentar sua arrecadação tributária, instituiu por lei ordinária municipal, publicada em 10/07/2025, um novo imposto sobre a concessão de autorizações para localização e funcionamento de estabelecimentos comerciais. A lei estabelece que produziria efeitos a partir de 01/01/2026. A sociedade empresária ABC Ltda. com estabelecimento comercial no Município Alfa, irresignada com a nova exação, contratou você, como advogado(a), para ajuizar ação declaratória tributária antes do início da vigência da nova lei, visando garantir que não seja cobrada quanto ao novo imposto municipal. Diante desse cenário, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A ação correta a ser manejada seria a ação anulatória tributária."
            },
            {
              "letra": "B",
              "texto": "O novo imposto só pode ser criado por meio de uma lei complementar municipal, e não por mera lei ordinária."
            },
            {
              "letra": "C",
              "texto": "A anterioridade nonagesimal não foi obedecida, pois a lei apenas entraria em vigor 90 dias após 01/01/2026."
            },
            {
              "letra": "D",
              "texto": "O Município Alfa não pode criar esse novo imposto, por não estar compreendido em sua competência tributária constitucional."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Administrativo",
          "enunciado": "José é servidor público estadual lotado em um cargo que exerce o controle interno de determinado órgão administrativo. No exercício de suas atribuições, ele se deparou com um processo administrativo, no qual foi questionada a validade de certo ato administrativo que beneficia a sociedade empresária Calêndula, o qual apresentou vício na sua constituição, mas que está produzindo seus efeitos. Em razão disso, ele tem fundadas dúvidas acerca da necessidade de invalidar o ato administrativo e sobre as providências necessárias para tanto, dúvidas essas que levaram José a consultar a sua assessoria jurídica. À luz do disposto no Decreto-Lei nº 4.657/1942 (LINDB), com a redação conferida pela Lei nº 13.655/2018, que introduziu as disposições sobre segurança jurídica e eficiência na criação e na aplicação do direito público no ordenamento pátrio, assinale a opção que indica o esclarecimento correto prestado pela assessoria jurídica.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A existência de vício exige que a Administração decrete a invalidação do ato administrativo, com efeitos retroativos, ainda que tal decisão imponha aos sujeitos atingidos ônus e perdas que, em função das peculiaridades do caso, sejam anormais ou excessivos."
            },
            {
              "letra": "B",
              "texto": "Constatado que o vício é insanável, a decisão na esfera administrativa que venha a decretar a invalidação de tal ato administrativo, que ainda não exauriu os seus efeitos, deverá indicar de modo expresso as suas consequências jurídicas e administrativas."
            },
            {
              "letra": "C",
              "texto": "A verificação de qualquer vício em ato administrativo deve ensejar necessariamente a sua invalidação, independentemente do momento em que for verificado e de possíveis alternativas para melhor atender ao interesse público, ainda que tais alternativas possam justificar a sua convalidação."
            },
            {
              "letra": "D",
              "texto": "No âmbito da esfera controladora, observado o vício, é imperiosa a anulação do ato, a ser prontamente realizada de ofício pela Administração, o que prescinde da observância da ampla defesa e do contraditório, bem como da justificação acerca da necessidade e adequação de tal invalidação."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Administrativo",
          "enunciado": "A sociedade empresária XYZ, após o regular processo licitatório, celebrou contrato administrativo com o Estado Alfa, sem previsão de cláusula compromissória ou compromisso arbitral. Contudo, sem qualquer justificativa, a Administração Pública, por meio de uma ordem escrita, suspendeu a execução do contrato, o que já perdura por seis meses. Sendo assim, a entidade privada procurou você, para, na qualidade de advogado(a) auxiliá-la a equacionar a questão posta. Nesse cenário, considerando as disposições da Lei nº 14.133/2021 (Lei de Licitações e Contratos Administrativos), assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A extinção do contrato administrativo não é juridicamente cabível, pois a suspensão da sua execução não ultrapassou o prazo de 12 meses."
            },
            {
              "letra": "B",
              "texto": "A sociedade empresária XYZ não tem direito à extinção do contrato administrativo, pois, como o Estado Alfa suspendeu a sua execução, inexiste inadimplemento contratual."
            },
            {
              "letra": "C",
              "texto": "A extinção do contrato administrativo de forma consensual é vedada por expressa previsão legal, a qual impede o emprego da conciliação e da mediação no âmbito da Administração Pública."
            },
            {
              "letra": "D",
              "texto": "A entidade privada contratada tem direito à extinção do contrato administrativo, que poderá ser consensual, por acordo entre as partes, por conciliação, por mediação ou por comitê de resolução de disputas, desde que haja interesse da Administração ou, ainda, por meio de decisão judicial."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Administrativo",
          "enunciado": "Caio, político em primeira legislatura, responde, em Juízo, por ato doloso de improbidade administrativa que teria causado prejuízo ao erário. Registre-se que os fatos apurados remontam a fevereiro de 2024. No curso da demanda, após apresentar contestação, suscitando questões preliminares, Caio foi informado de que o Ministério Público requereu a decretação de indisponibilidade de todos os seus bens, englobando, inclusive, o imóvel onde reside, tido como bem de família e adquirido licitamente. Nesse contexto, preocupado com as consequências que um potencial resultado desfavorável na ação judicial geraria na sua carreira política, Caio procurou você, como advogado(a), afirmando que estaria disposto a celebrar um acordo de não persecução cível com o Ministério Público e que possui condições financeiras de ressarcir até 80% do dano causado ao erário. Buscou, ainda, a sua orientação jurídica sobre o processo em curso. Nesse cenário, considerando as disposições da Lei nº 8.429/1992 (Lei de Improbidade Administrativa), assinale a opção que apresenta, corretamente, sua orientação.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A defesa técnica poderá interpor agravo de instrumento, caso o Juiz afaste as questões preliminares suscitadas por Caio em sua contestação."
            },
            {
              "letra": "B",
              "texto": "O Juiz poderá, convencido da probabilidade da ocorrência do ato de improbidade administrativa descrito na petição inicial, decretar a indisponibilidade dos bens de Caio, inclusive o bem de família."
            },
            {
              "letra": "C",
              "texto": "Caio sendo condenado em sentença transitada em julgado, além da perda dos valores acrescidos ilicitamente ao patrimônio, estará sujeito à perda da função pública desempenhada e à cassação dos direitos políticos."
            },
            {
              "letra": "D",
              "texto": "O Ministério Público e Caio poderão celebrar acordo de não persecução cível, desde que, além do ressarcimento de 80% do dano causado ao erário, o acusado confesse, formalmente, a prática do ato ímprobo."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Administrativo",
          "enunciado": "Matheus, servidor público federal estável, ocupante de cargo público no Ministério do Meio Ambiente, externou o desejo de concorrer, nas próximas eleições, ao cargo de Prefeito do Município Alfa, cidade onde nasceu. Encorajado pelos amigos, Matheus, leigo na seara jurídica, entrou em contato com você para que, na qualidade de advogado(a), o orientasse sobre o exercício do mandato de prefeito e sua condição de servidor público federal. Nesse cenário, considerando as disposições da Lei nº 8.112/1990, que dispõe sobre o regime jurídico dos servidores civis da União, das autarquias e das funções públicas federais, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Investido no mandato de Prefeito do Município Alfa, Matheus ficará afastado do cargo público ocupado no Ministério do Meio Ambiente, sendo-lhe facultado optar pela sua remuneração."
            },
            {
              "letra": "B",
              "texto": "Como os servidores públicos federais não podem dispor de filiação político-partidária, Matheus deverá exonerar-se do cargo público ocupado no Ministério do Meio Ambiente para que possa concorrer nas eleições municipais."
            },
            {
              "letra": "C",
              "texto": "Havendo compatibilidade de horários e sendo investido no mandato de Prefeito do Município Alfa, Matheus perceberá as vantagens do cargo público ocupado no Ministério do Meio Ambiente, sem prejuízo da remuneração do cargo eletivo."
            },
            {
              "letra": "D",
              "texto": "Matheus, a partir do dia primeiro de janeiro do ano da eleição, terá direito, por se tratar de servidor público federal estável, à licença para o exercício de atividade política, que perdurará até o dia subsequente à data da eleição, assegurados os vencimentos do cargo efetivo."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Administrativo",
          "enunciado": "Lucas, servidor público estatutário do Município Alfa, procurou Rodrigo, proprietário do estabelecimento comercial XYZ, especializado na manutenção de automóveis, para saber se ele tinha interesse em firmar um contrato administrativo, no valor de RS 60.000,00 (sessenta mil reais), para a prestação de serviços de manutenção de veículos automotores de propriedade do Município. Antes de prosseguir nas tratativas, Rodrigo entrou em contato com você para, na qualidade de advogado(a), prestar-lhe a adequada consultoria jurídica. Considerando as disposições da Lei nº 14.133/2021 (Lei de Licitações e Contratos Administrativos), assinale a afirmativa que apresenta, corretamente, a sua orientação.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Em razão da inexigibilidade da licitação, é admissível a contratação direta entre o Município Alfa e o particular Rodrigo, desde que seja apresentada justificativa de preço."
            },
            {
              "letra": "B",
              "texto": "O Município Alfa deverá realizar o processo licitatório para celebrar o contrato administrativo, vedando-se a contratação direta no cenário narrado, por ausência de previsão legal."
            },
            {
              "letra": "C",
              "texto": "Admitir-se-á a contratação direta entre o Município Alfa e o particular Rodrigo, desde que o estabelecimento comercial XYZ esteja situado nos limites territoriais do ente federativo contratante."
            },
            {
              "letra": "D",
              "texto": "É possível a contratação direta entre o Município Alfa e o particular Rodrigo, para a prestação de serviços de manutenção de veículos automotores de propriedade do ente federativo, por ser caso de licitação dispensável."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Ambiental",
          "enunciado": "A sociedade empresária Algoz, ao realizar o tratamento de determinados produtos químicos, causou danos ambientais que comprometeram o solo de sua propriedade, sendo certo que tanto o Estado X quanto o Município Y foram omissos no dever de fiscalização. Após a poluidora mascarar os aludidos danos, a propriedade foi vendida para a sociedade empresária Crédula, que não tinha conhecimento de tais fatos. Diante da situação descrita, o Ministério Público ajuizou ação civil pública com vistas a obter a responsabilização civil em decorrência dos danos ambientais, sendo certo que incluiu no polo passivo da demanda a sociedade empresária Crédula, atual proprietária, a sociedade Algoz, que praticou a conduta lesiva ao meio ambiente, bem como o Estado X e o Município Y, pela omissão deles no dever de fiscalização. Considerando os dados apresentados, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Os entes federativos têm legitimidade passiva para a demanda, na medida em que sua conduta omissiva não pode ensejar a responsabilização civil."
            },
            {
              "letra": "B",
              "texto": "Apenas a sociedade empresária Algoz tem legitimidade passiva para a demanda, na medida em que foi a única que praticou a conduta comissiva que ensejou o dano ambiental."
            },
            {
              "letra": "C",
              "texto": "A sociedade empresária Crédula não pode ser civilmente responsabilizada pelos danos ambientais em comento, de modo que não poderia constar do polo passivo da demanda."
            },
            {
              "letra": "D",
              "texto": "Tanto as referidas sociedades quanto os entes federativos têm legitimidade passiva para a demanda, pois são passíveis de responsabilização civil todos aqueles que concorrerem para o dano ambiental, comissiva ou omissivamente, sendo certo que a obrigação ambiental é de natureza propter rem."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Ambiental",
          "enunciado": "A sociedade empresária XYZ, com sede no Estado Alfa, pretende desenvolver atividade econômica potencialmente causadora de significativa degradação ambiental nos territórios dos Estados Alfa e Beta. Dessa forma, com o objetivo de cumprir a legislação ambiental, a entidade contratou você para, na qualidade de advogado(a), dar entrada com o requerimento de licenciamento ambiental junto ao(s) órgão(s) competente(s), auxiliando-a a obter todas as licenças ambientais necessárias. Nesse cenário, considerando as disposições da Resolução nº 237/1997 do Conselho Nacional do Meio Ambiente (Conama), que versa sobre o licenciamento ambiental, assinale a opção que apresenta, corretamente, a sua orientação.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O licenciamento ambiental deverá ser realizado pelo órgão ambiental competente do Estado Alfa, onde está localizada a sede da sociedade empresária XYZ."
            },
            {
              "letra": "B",
              "texto": "Caberá aos órgãos ambientais dos Estados Alfa e Beta, em conjunto, procederem ao licenciamento ambiental da atividade econômica que a sociedade empresária XYZ pretende desenvolver."
            },
            {
              "letra": "C",
              "texto": "Compete ao Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (Ibama), autarquia de natureza federal, o licenciamento ambiental da atividade econômica que será desenvolvida pela sociedade empresária XYZ."
            },
            {
              "letra": "D",
              "texto": "A sociedade empresária XYZ poderá, a seu critério, requerer o licenciamento ambiental junto ao órgão ambiental competente do Estado Alfa ou do Estado Beta, já que a atividade econômica será desenvolvida nos dois entes federativos."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Civil",
          "enunciado": "Dagoberto celebrou contrato por meio do qual se comprometeu a comprar a casa de Marina, se seu investimento em ações atingisse um rendimento acima de 10% no dia 20 daquele mês. No dia indicado por Dagoberto, restou comprovado que suas ações renderam 15%, mas ele se negou a comprar o imóvel. Em razão disso, Marina procurou você, como advogado(a), para saber como proceder frente ao caso narrado. Assinale a opção que indica a correta orientação jurídica que você prestou.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Ela pode exigir a compra da casa, porque o encargo foi cumprido."
            },
            {
              "letra": "B",
              "texto": "Ela não pode exigir a compra da casa, por se tratar de termo incerto."
            },
            {
              "letra": "C",
              "texto": "Ela pode exigir a compra da casa, já que se implementou a condição suspensiva."
            },
            {
              "letra": "D",
              "texto": "Ela não pode exigir a compra da casa, pois a condição do negócio é puramente potestativa."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Civil",
          "enunciado": "Mateus e Pedro adquiriram um veículo de Joana, figurando ambos como devedores solidários. Foi pactuado que o pagamento seria feito no prazo de 30 dias, contado da data da celebração do contrato. Ocorre que, dez dias após o acordo, Mateus faleceu, deixando dois herdeiros. Sobre as obrigações de cada um dos herdeiros de Mateus, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Estão obrigados a pagar a dívida como um todo, se a obrigação for divisível, com direito de ação regressiva contra Pedro."
            },
            {
              "letra": "B",
              "texto": "Estão desobrigados de qualquer pagamento, pois a responsabilidade pelo pagamento não é transmitida aos herdeiros."
            },
            {
              "letra": "C",
              "texto": "São obrigados, individualmente, a pagar a dívida que corresponder ao devedor solidário falecido, pois a obrigação é divisível."
            },
            {
              "letra": "D",
              "texto": "São obrigados a pagar apenas a parte que corresponder à sua cota hereditária, pois a obrigação é divisível."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Civil",
          "enunciado": "No último domingo, após uma partida de futebol, Ariano ofereceu carona em seu carro a João, seu fraterno amigo. Ao transitar por certa avenida em velocidade muito acima da permitida, o veículo conduzido por Ariano colidiu com um poste. João, com a colisão, sofreu graves lesões por todo corpo, tendo inclusive que amputar uma perna. A esposa de João, que está grávida, ficou extremamente abalada, encontrando-se internada em Unidade de Terapia Intensiva em um hospital público. A respeito do tema da responsabilidade civil de indenizar, com base nas súmulas do Superior Tribunal de Justiça, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "É possível a cumulação das indenizações de dano estético e dano moral eventualmente sofridos por João, em razão das graves lesões sofridas no acidente."
            },
            {
              "letra": "B",
              "texto": "A legitimidade para pleitear a indenização por dano moral é exclusiva de João, sendo inadmissível que sua esposa venha a pleitear perdas e danos pelo acidente."
            },
            {
              "letra": "C",
              "texto": "Mesmo que o transporte realizado por Ariano tenha sido desinteressado e de simples cortesia, ele responde objetivamente pelos danos sofridos por João."
            },
            {
              "letra": "D",
              "texto": "Como se trata de responsabilidade civil extracontratual, os eventuais danos sofridos por João geram juros moratórios e correção monetária a partir do trânsito em julgado da sentença."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Civil",
          "enunciado": "Gustavo, viúvo, é pai de Heitor e Gabriela. Gustavo tem uma relação harmoniosa com sua filha e extremamente conturbada com o filho. Por essa razão, Gustavo doou para sua filha uma casa que, ao tempo da liberalidade, correspondia a uma pequena fração de seu patrimônio. No contrato de doação, inexistiu qualquer cláusula especial. Dois anos após o referido contrato, Gustavo elaborou seu testamento, dispensando Gabriela de colacionar o bem. Com a morte de Gustavo e a abertura de seu testamento, Heitor está questionando a validade do contrato de doação e da dispensa de colação. Sobre a situação apresentada, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O contrato de doação é válido, e Gabriela está dispensada de colacionar o bem por força do testamento."
            },
            {
              "letra": "B",
              "texto": "O contrato de doação é válido, mas a dispensa de colação é nula. Essa dispensa só pode ocorrer no próprio contrato de doação."
            },
            {
              "letra": "C",
              "texto": "O contrato de doação é nulo, uma vez que a doação de ascendente para um descendente exige o consentimento dos demais descendentes."
            },
            {
              "letra": "D",
              "texto": "O contrato de doação é anulável, uma vez que a doação de ascendente para um descendente exige o consentimento dos demais descendentes."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Civil",
          "enunciado": "A Farmácia Vidar, participante de um programa de descontos vinculado à operadora de planos de saúde MedSaúde S.A., compartilhou com a operadora informações detalhadas sobre as compras de seus clientes, incluindo medicamentos adquiridos, frequência das compras e histórico de uso de fármacos. Esse compartilhamento foi realizado sem o consentimento explícito dos clientes, sob a justificativa de que a MedSaúde S.A. poderia utilizar os dados para oferecer benefícios personalizados e otimizar seus serviços de saúde. Ao tomar conhecimento da prática, Cristina, uma das clientes da farmácia, procurou você, como advogado(a) para emitir parecer sobre o caso, especialmente sobre a configuração da violação de algum direito. Diante dessa situação e com base na Lei Geral de Proteção de Dados (LGPD), assinale a opção que apresenta, corretamente, o parecer emitido.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O compartilhamento de dados foi legal, pois tanto a farmácia como a operadora de saúde são autorizadas a tratar os dados pessoais de saúde para a execução dos seus contratos."
            },
            {
              "letra": "B",
              "texto": "A Farmácia Vido+ violou a LGPD ao compartilhar dados pessoais sensíveis sem o consentimento dos titulares, estando sujeita a sanções e obrigada a eliminar os dados compartilhados."
            },
            {
              "letra": "C",
              "texto": "O compartilhamento de dados foi lícito, pois a operadora de saúde tem interesse legítimo na obtenção dessas informações para aprimorar os seus serviços e oferecer benefícios aos clientes."
            },
            {
              "letra": "D",
              "texto": "O compartilhamento de dados foi ilegal, mas a Farmácia Vida+ não pode ser responsabilizada, pois a operadora de planos de saúde é a responsável final pelo tratamento das informações, mas ambas são obrigadas a eliminar os dados."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Civil",
          "enunciado": "Ruth é proprietária do Sítio Felicidade, localizado na zona rural do município de Ribeirão Corrente (SP). Há 15 anos, ela mantém canos subterrâneos de irrigação que atravessam o Sítio da Lua, de propriedade de Demétrio, para captar água de uma nascente situada dentro desse último. O uso sempre foi contínuo e sem oposição, mas invisível a olho nu, já que o sistema está instalado sob o solo. Nunca houve registro da servidão no Cartório de Registro de Imóveis, tampouco um contrato formal entre os antigos proprietários. Em novembro de 2025, Pedro, novo dono do Sítio da Lua, ao descobrir as tubulações, notificou Ruth para interromper o uso da água, alegando que a servidão não se constituiu validamente por ausência de registro. Considerando o caso concreto e as normas do Código Civil sobre a constituição e aquisição de servidões, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A usucapião da servidão poderia ser reconhecida após cinco anos de uso contínuo, dada a boa-fé e a posse qualificada de Ruth."
            },
            {
              "letra": "B",
              "texto": "Ruth adquiriu a servidão por usucapião, pois o uso foi contínuo e incontestado por mais de dez anos, ainda que não fosse visível."
            },
            {
              "letra": "C",
              "texto": "O direito de Ruth configura mera detenção tolerada, mas poderia ser convertido em servidão após 20 anos de utilização contínua."
            },
            {
              "letra": "D",
              "texto": "Ruth não adquiriu a servidão, pois, não sendo aparente, exige registro no Cartório de Imóveis para a sua constituição válida, não admitindo usucapião."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito da Criança e do Adolescente",
          "enunciado": "Maria e José, ambos com 45 anos, possuem um filho em comum, Paulo, que, hoje, tem 17 anos. Quando Paulo tinha 12 anos, Maria e José se divorciaram e foi estipulada judicialmente a guarda unilateral para Maria, sendo certo que José sempre usou o seu direito de convivência com o adolescente em finais de semanas alternados. Após muito esforço, Maria conseguiu angariar recursos para fazer uma viagem dentro do território nacional com Paulo. A viagem será de uma semana e não afetará o direito de visitação de José. Ocorre que o genitor se opõe à viagem, mesmo sem apresentar qualquer justificativa para isso. Preocupada, Maria procura você, como advogado(a), para que lhe preste a solução jurídica adequada. De acordo com o ECA, assinale a opção que, corretamente, indica a sua orientação.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Maria deverá buscar o Juízo da Infância e Juventude e obter alvará para a autorização de viagem."
            },
            {
              "letra": "B",
              "texto": "José só pode se opor à viagem se tivesse sido estipulada a guarda compartilhada, o que não é a hipótese apresentada."
            },
            {
              "letra": "C",
              "texto": "Maria só pode fazer essa viagem com expressa autorização de José, já que ambos são detentores do poder familiar."
            },
            {
              "letra": "D",
              "texto": "Maria não precisa da anuência do genitor, nem de autorização judicial, uma vez que a viagem é dentro do território nacional."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito da Criança e do Adolescente",
          "enunciado": "Marcos, 17 anos, responde a processo de apuração de ato infracional. Segundo a representação, o adolescente foi apreendido quando estava subtraindo bens de um estabelecimento comercial. Assim, foi-lhe imputada a conduta análoga ao Art. 155 do Código Penal (furto). Mariana, 40 anos, mãe de Marcos, o(a) procura, na condição de advogado(a), para fazer a defesa. Designada audiência de apresentação, estavam presentes Marcos, Mariana e as testemunhas de acusação. Tanto Marcos quanto Mariana confirmaram, perante a autoridade judiciária, que você fará a defesa técnica naquele processo. Entretanto, o Juízo verificou que não há procuração juntada aos autos. Por isso, o excluiu do feito e nomeou a Defensoria Pública para patrocinar os interesses do adolescente, contra a vontade deste e de sua genitora. Considerando o caso acima narrado, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O Magistrado errou ao nomear a Defensoria Pública, pois deveria ter adiado a audiência e dado um prazo razoável para a juntada da procuração."
            },
            {
              "letra": "B",
              "texto": "Considerando a ausência de procuração, o adolescente estava indefeso, de modo que o Juízo agiu corretamente ao nomear a Defensoria Pública."
            },
            {
              "letra": "C",
              "texto": "O Magistrado errou, uma vez que é dispensada a outorga de mandato quando o advogado(a) constituído(a) tiver sido indicado(a) por ocasião de ato formal com a presença da autoridade judiciária."
            },
            {
              "letra": "D",
              "texto": "O Juízo errou, pois deveria adiar o ato e oficiar à OAB para a apuração de eventual infração disciplinar, já que o advogado(a) não poderia se apresentar na audiência sem a juntada da respectiva procuração."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito do Consumidor",
          "enunciado": "Augusto assinou um contrato de adesão com a sociedade empresária AquaLimpa, fornecedora de água e esgoto em sua cidade, para o fornecimento de água em sua residência. Após meses de uso regular, Augusto foi surpreendido por uma cobrança inesperada no valor de R$ 2.500,00 (dois mil e quinhentos reais), sendo alegado um “ajuste de consumo retroativo”. A sociedade empresária AquaLimpa informou que o valor deveria ser pago imediatamente para evitar o corte no fornecimento de água. No entanto, Augusto verificou que o contrato não mencionava essa possibilidade de ajuste retroativo, nem qualquer explicação prévia sobre o cálculo desse valor. Diante da situação hipotética narrada e com base no Código de Defesa do Consumidor, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Por ser um contrato escrito, Augusto não tem direito de contestar a cobrança, já que os termos do contrato foram previamente estipulados pela sociedade empresária e aceitos por ele."
            },
            {
              "letra": "B",
              "texto": "Augusto deve questionar judicialmente a cobrança, uma vez que o contrato de adesão deve ser interpretado da forma mais favorável ao consumidor quando houver cláusulas ambíguas, contraditórias ou omissas."
            },
            {
              "letra": "C",
              "texto": "Como o fornecimento de água é um serviço essencial, a sociedade empresária Aqualimpa não pode cortar o fornecimento de água, embora possa realizar a cobrança dos valores retroativos nos termos pactuados."
            },
            {
              "letra": "D",
              "texto": "A sociedade empresária Aqualimpa pode cortar o fornecimento de água imediatamente se Augusto não pagar a dívida, pois a imediata interrupção no fornecimento de serviços em razão de inadimplência, independentemente de notificação, é lícita."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito do Consumidor",
          "enunciado": "Maria adquiriu um aquecedor elétrico de uma marca renomada. Após uma semana de uso, o aquecedor apresentou um curto- circuito, causando um incêndio que danificou parte de sua residência. Após investigações, constatou-se que o defeito era decorrente de uma falha de fabricação, já relatada por outros consumidores. Ao buscar uma solução com o fabricante, este alegou que o acidente foi causado pelo uso inadequado do produto e negou responsabilidade. Sobre o fato narrado, com base no Código de Defesa do Consumidor, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "No caso, não há que se falar em responsabilidade do fornecedor, pois o risco de curto-circuito é inerente a todos os produtos elétricos."
            },
            {
              "letra": "B",
              "texto": "O fabricante só será responsabilizado se Maria provar que o acidente não decorreu de uso inadequado, independentemente da constatação do defeito do produto."
            },
            {
              "letra": "C",
              "texto": "O fabricante poderá ser responsabilizado se Maria provar que utilizou o aquecedor conforme as instruções do manual de uso, bem como demonstrar a adequação de suas instalações elétricas."
            },
            {
              "letra": "D",
              "texto": "O fabricante é responsável pelos danos causados pelo aquecedor defeituoso, independentemente de culpa e, comprovado o nexo causal entre o defeito e os danos, responderá de forma objetiva."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Empresarial",
          "enunciado": "À Assembleia de Credores, convocada para deliberação sobre o plano de recuperação judicial apresentado por Atacado Têxtil Itapemirim Ltda., compareceram os credores Afonso Fundão e Viana & Cia. Ltda. O primeiro é sócio da recuperanda e credor por empréstimo fornecido a ela; o segundo é credor por duplicatas, cujo valor e condições de pagamento não serão alterados pelo plano. Com base nessas informações e nas disposições sobre a participação e o voto nas Assembleias de Credores (Lei nº 11.101/2005), assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Apenas Afonso Fundão poderá votar, já que se trata de credor subordinado, integrante da classe Ill; Viana & Cia. Ltda. não poderá votar, porque o plano não alterou o valor ou as condições originais de pagamento."
            },
            {
              "letra": "B",
              "texto": "Nenhum dos credores poderá votar na Assembleia, em razão de o primeiro ser sócio da devedora, e o segundo não ter alterado o valor ou as condições originais de pagamento."
            },
            {
              "letra": "C",
              "texto": "Ambos poderão votar, em razão de o primeiro ser credor subordinado e o segundo credor quirografário, integrando a classe Ill na composição da Assembleia."
            },
            {
              "letra": "D",
              "texto": "Apenas Viana & Cia. Ltda. poderá votar na Assembleia por ser credor quirografário, integrando a classe Ill; Afonso Fundão não poderá votar, em razão de ser sócio da devedora."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito Empresarial",
          "enunciado": "Pedro e Vitória são casados desde 2005 no regime de comunhão parcial de bens e pretendem constituir sociedade simples com seus filhos Carlos e Conceição. De acordo com as regras do Código Civil para a participação de pessoas casadas em sociedade, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "É possível a constituição de sociedade simples simultaneamente entre os cônjuges e seus filhos, tendo em vista não ser a sociedade empresária."
            },
            {
              "letra": "B",
              "texto": "É defeso a constituição de sociedade simples simultaneamente entre os cônjuges e seus filhos, qualquer que seja o regime de bens do casamento."
            },
            {
              "letra": "C",
              "texto": "É possível a constituição de sociedade simples entre os cônjuges e seus filhos simultaneamente, tendo em vista ser o regime de bens do casamento de comunhão parcial."
            },
            {
              "letra": "D",
              "texto": "É defeso a constituição de sociedade simples simultaneamente entre os cônjuges e seus filhos, pois o casamento foi celebrado em regime de bens diferente do da separação absoluta."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Empresarial",
          "enunciado": "A sociedade empresária Brasilândia Materiais de Construção contraiu empréstimo junto ao Banco Figueirão S.A. garantido pela alienação fiduciária de seis veículos automotores. O contrato tem prazo de vigência de 36 meses e, após o decurso de 17 meses, a devedora fiduciante deixou de pagar as prestações do empréstimo, sendo a mora comprovada por carta registrada com aviso de recebimento devidamente entregue. Diante da mora no adimplemento das obrigações contratuais, assinale a opção que indica a prerrogativa que o Banco Figueirão tem, na condição de proprietário fiduciário dos veículos automotores.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Poderá vendê-los a terceiros, independentemente de leilão, hasta pública, avaliação prévia ou qualquer outra medida judicial ou extrajudicial, salvo disposição expressa em contrário prevista no contrato."
            },
            {
              "letra": "B",
              "texto": "Deverá ajuizar ação declaratória para positivar a mora da fiduciante e, após a avaliação dos bens e alvará judicial, poderá vendê-los a terceiros, devendo aplicar o preço da venda no pagamento de seu crédito e das despesas decorrentes."
            },
            {
              "letra": "C",
              "texto": "Poderá vendê-los a terceiros desde que interpele previamente a devedora fiduciante para que realize o pagamento no prazo improrrogável de 15 dias, findo o qual a propriedade estará consolidada se não for realizado o pagamento integral do saldo devedor."
            },
            {
              "letra": "D",
              "texto": "Deverá ajuizar ação de execução por quantia certa em face da fiduciante para cobrar o crédito, que abrange o principal, a correção monetária, os juros, as comissões, as taxas e a cláusula penal, podendo requerer, liminarmente, uma autorização judicial para a venda do bem em sede de tutela de evidência."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Empresarial",
          "enunciado": "A sociedade empresária Elétrica Passa Sete Ltda., por meio de seu administrador, ajuizou tempestivamente ação renovatória de ocação não residencial referente ao imóvel onde está localizada a ilial na cidade de Varginha, MG. Na petição inicial, a autora indicou as condições oferecidas para a renovação da locação, especialmente o novo valor do aluguel proposto. Apresentada a contestação, o locador informou que recebeu proposta de terceiro para a nova locação em condições melhores do que aquelas propostas pela locatária na petição inicial, sendo o valor locativo do imóvel 12% maior do que o oferecido pela ocatária. Considerados os fatos narrados, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O locador não pode apresentar na contestação proposta de terceiro para a locação, ainda que em condições melhores, diante do direito potestativo do locatário à renovação compulsória."
            },
            {
              "letra": "B",
              "texto": "A proposta de terceiro pode ser apresentada em documento público ou particular. Caso o documento seja particular e esteja com assinatura autenticada, é dispensável a intervenção de testemunhas."
            },
            {
              "letra": "C",
              "texto": "O locatário poderá, em réplica, manifestar ao locador que aceita as condições apresentadas por terceiro para obter a renovação pretendida."
            },
            {
              "letra": "D",
              "texto": "O ramo de negócio a ser explorado pelo terceiro proponente pode ou não ser o mesmo do locatário, desde que seja explorado continuadamente nos últimos três anos."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Processo Civil",
          "enunciado": "José ajuizou ação de indenização por danos materiais e morais contra Ana. Na petição inicial, José formulou requerimento de tutela provisória de urgência para que fosse determinado o bloqueio imediato de bens detidos por Ana, até o valor pleiteado por José no processo judicial, como forma de resguardar uma futura indenização para José, se forem julgados procedentes os seus pedidos de danos materiais e morais. Após realizar a admissibilidade da petição inicial, o magistrado concedeu a tutela provisória de urgência em favor de José. Nessa situação hipotética, assinale a opção que indica o recurso a ser interposto por Ana.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Não cabe recurso imediato contra a decisão que defere a tutela provisória de urgência."
            },
            {
              "letra": "B",
              "texto": "Agravo de instrumento, uma vez que a decisão que defere a tutela provisória de urgência é decisão interlocutória impugnável por tal recurso."
            },
            {
              "letra": "C",
              "texto": "Apelação, tendo em vista que a decisão que defere a tutela provisória de urgência tem natureza de sentença, passível de impugnação por tal recurso."
            },
            {
              "letra": "D",
              "texto": "Apelação, tendo em vista que a decisão que defere a tutela provisória de urgência é decisão interlocutória passível de impugnação por tal recurso."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Processo Civil",
          "enunciado": "Joana ajuizou ação declaratória de nulidade de negócio jurídico em face de João e Regina, alegando ter sido vítima de dolo de ambos na celebração de contrato de compra e venda de imóvel. Em sede de contestação, além de negarem os fatos alegados por Joana, João e Regina procuram você, como advogado(a), para propor reconvenção contra Joana e Marcelo, seu fiador, para cobrar valores alegadamente em atraso, referentes às parcelas do contrato de compra e venda firmado pelas partes. Sobre o caso acima, assinale a opção que apresenta, corretamente, a orientação jurídica prestada.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Joana poderá desistir da ação para impedir o prosseguimento da reconvenção."
            },
            {
              "letra": "B",
              "texto": "Joana, com a propositura da reconvenção, será citada pessoalmente e deverá apresentar resposta no prazo de 15 dias."
            },
            {
              "letra": "C",
              "texto": "Não há óbice à propositura da reconvenção em face de Joana e de Marcelo, ainda que este não tenha sido o autor do processo originário."
            },
            {
              "letra": "D",
              "texto": "A reconvenção somente poderá ser admitida porque João e Regina contestaram o pedido, não sendo lícita a propositura de reconvenção sem que o réu ofereça contestação."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Processo Civil",
          "enunciado": "Lucas requereu o cumprimento de sentença de obrigação de pagar alimentos, decorrente de sentença condenatória proferida em desfavor de Leonardo, seu pai, que é servidor público, condenado ao pagamento de alimentos, no percentual de 20% de seus rendimentos líquidos. Regularmente intimado, Leonardo não pagou o débito cobrado, porém apresentou petição alegando que enfrenta dificuldades financeiras que impossibilitam o cumprimento da obrigação, requerendo ao Juízo a concessão de maior prazo para pagar a dívida. Sobre o caso apresentado, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A comprovação de que Leonardo poderá cumprir parcialmente a obrigação alimentar justificará o inadimplemento em absoluto."
            },
            {
              "letra": "B",
              "texto": "Não acolhida a defesa de Leonardo, o Juiz decretará a sua prisão pelo prazo de dois a seis meses, que, se cumprida, o eximirá do pagamento das prestações vencidas."
            },
            {
              "letra": "C",
              "texto": "O Juiz poderá ordenar a prisão civil de Leonardo em razão do inadimplemento das obrigações referentes às cinco prestações anteriores ao ajuizamento da execução e as que vencerem no curso do processo."
            },
            {
              "letra": "D",
              "texto": "Lucas poderá requerer o desconto em folha de pagamento da importância da prestação alimentícia, buscando o pagamento dos alimentos vencidos e vincendos devidos por Leonardo, até o limite de 50% dos ganhos líquidos do executado."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Processo Civil",
          "enunciado": "Marta faleceu, deixando três filhos, cônjuge e bens a inventariar. Nenhum dos herdeiros é incapaz, há consenso sobre a partilha, e eles desejam realizar o inventário da forma mais rápida possível. Considerando os procedimentos judiciais e extrajudiciais que regem o inventário e a partilha, assinale a afirmativa que apresenta a providência a ser adotada pelos herdeiros.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Realizar o inventário extrajudicial por meio de escritura pública, sendo necessária a assistência de um(a) advogado(a)."
            },
            {
              "letra": "B",
              "texto": "Realizar o inventário extrajudicial por meio de escritura pública, exigindo-se assistência de um(a) advogado(a) e a intervenção do Ministério Público a fim de controlar a egalidade da partilha."
            },
            {
              "letra": "C",
              "texto": "Ajuizar ação pelo procedimento comum de inventário e partilha, os quais necessariamente devem ocorrer pela via judicial, independentemente da existência de consenso entre os herdeiros."
            },
            {
              "letra": "D",
              "texto": "Comparecer perante o Tabelionato e realizar o inventário e a partilha mediante escritura pública, dispensada a assistência de um(a) advogado(a) por haver acordo sobre a partilha."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Processo Civil",
          "enunciado": "Glauco ingressou com uma ação contra Alex que, após o trânsito em julgado da sentença condenatória, deu início ao cumprimento de sentença. Alex foi devidamente intimado para pagar o débito no prazo legal, mas não realizou o pagamento. Seis dias após o término do prazo para o pagamento, ao ser questionado sobre a apresentação da impugnação ao cumprimento de sentença, Alex afirmou que ainda aguardava uma intimação específica para impugnar, pois acreditava que o prazo para se manifestar só começaria a contar após essa nova intimação. Diante dessa situação, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Alex está correto, pois o prazo para impugnação ao cumprimento de sentença só se inicia após uma nova intimação específica para esse fim."
            },
            {
              "letra": "B",
              "texto": "O prazo para impugnação ao cumprimento de sentença tem início após o transcurso do prazo para o pagamento voluntário, independentemente de nova intimação."
            },
            {
              "letra": "C",
              "texto": "Alex pode apresentar a impugnação a qualquer momento durante a execução, pois não há prazo específico para essa manifestação, em razão do princípio da ampla defesa, devendo ser apresentada em autos apartados."
            },
            {
              "letra": "D",
              "texto": "O prazo para a impugnação ao cumprimento de sentença tem início antes do prazo para o pagamento voluntário, isto é, primeiro Alex é intimado para impugnar e, caso a impugnação não seja acolhida, ele é intimado para efetuar o pagamento do débito."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Processo Civil",
          "enunciado": "Joana ajuizou ação em face de Pietra, cirurgiã plástica, requerendo a sua condenação ao pagamento de danos morais e estéticos, resultantes de procedimento estético malsucedido. Ocorre que, anteriormente, em decisão transitada em julgado, fundada na mesma causa de pedir e contra a mesma profissional, um pedido idêntico de Joana foi julgado improcedente em face de Pietra, sob o fundamento de que não restou comprovada conduta negligente de Pietra, a ensejar a sua condenação. Em tal hipótese, assinale a opção que indica o fenômeno processual cabível para extinguir a ação proposta por Joana.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Conexão, por ser comum o pedido e a causa de pedir."
            },
            {
              "letra": "B",
              "texto": "Litispendência, por se repetir ação já proposta e em curso."
            },
            {
              "letra": "C",
              "texto": "Perempção, por ter havido extinção de ação anteriormente proposta por Joana."
            },
            {
              "letra": "D",
              "texto": "Coisa julgada, por haver decisão de mérito transitada em julgado com as mesmas partes, causa de pedir e pedido."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Waldir, cidadão brasileiro, depois de anos de poupança, conseguiu realizar o sonho de infância e comprou um pacote de viagem para conhecer a cidade de Orlando, nos EUA. Como nunca havia viajado em avião, Waldir irritou-se com as condições precárias disponibilizadas na classe econômica da aeronave privada registrada sob bandeira brasileira e desistiu da viagem durante o voo, exigindo, aos gritos, o imediato retorno ao aeroporto de origem. Ao ser advertido pela tripulação, Waldir agrediu fisicamente o comissário de bordo, de nacionalidade brasileira, causando-lhe esão corporal grave, quando o avião já sobrevoava território estrangeiro. Sobre essa situação hipotética, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "O fato está incondicionalmente sujeito à legislação brasileira, tendo em vista a nacionalidade do autor e da vítima do delito."
            },
            {
              "letra": "B",
              "texto": "O fato está sujeito, simultaneamente, à legislação brasileira e à legislação estrangeira, sendo aplicável a teoria da ubiquidade quanto ao tempo do delito."
            },
            {
              "letra": "C",
              "texto": "O fato está sujeito exclusivamente à legislação estrangeira, haja vista que a aeronave privada estava em território estrangeiro quando ocorreu a prática do delito."
            },
            {
              "letra": "D",
              "texto": "O fato estará sujeito à legislação brasileira, caso não seja julgado no país estrangeiro em cujo território se encontrava a aeronave no momento da prática do delito."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Na noite em que completou 19 anos de idade, Júnior, morador do bairro Leblon, RJ, resolveu testar o Bugatti Chiron de seu pai, que é o carro mais caro do Brasil, avaliado em cerca de 10 milhões de reais. Júnior esqueceu a sua carteira de habilitação em casa e saiu com o veículo, mas, por desconhecer a extraordinária potência do motor, perdeu o controle da direção e abalroou José, morador de rua, que foi socorrido, mas teve as pernas amputadas. Diante de tal situação hipotética, com base nos princípios aplicáveis ao conflito aparente de normas penais, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Por força do princípio da consunção, Júnior deverá responder pelo delito de tentativa de homicídio culposo."
            },
            {
              "letra": "B",
              "texto": "Por força do princípio da subsidiariedade, Júnior deverá responder pelo delito de lesão corporal de natureza grave."
            },
            {
              "letra": "C",
              "texto": "Por força do princípio da especialidade, Júnior deverá responder pelo delito de lesão corporal culposa na direção de veículo automotor."
            },
            {
              "letra": "D",
              "texto": "Por força do princípio da alternatividade, Júnior deverá responder pelo delito de dirigir veículo automotor, em via pública, sem a devida habilitação, ou pelo delito de lesão corporal culposa."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "João é missionário, e Pedro é pastor, ambos da mesma igreja. O primeiro planejou apropriar-se do dinheiro dos dízimos que Pedro costumava guardar em uma urna em seu quarto, localizado nos fundos da igreja. Quando Pedro se ausentou durante a noite, João pulou o muro e arrombou a fechadura, mas, ao se aproximar da urna, foi tomado por um sentimento sobrenatural, orou para livrar-se dos maus pensamentos e foi embora. Sobre a ação praticada por João, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "João percorreu as fases da cogitação, preparação e execução, que integram o iter criminis, mas não exauriu a conduta, o que era imprescindível para a caracterização da tentativa."
            },
            {
              "letra": "B",
              "texto": "João praticou tentativa de furto e ser-lhe-á aplicada a pena do crime consumado a ser reduzida, dentro das margens legais, segundo o trecho do iter criminis que foi percorrido."
            },
            {
              "letra": "C",
              "texto": "João praticou tentativa imperfeita de furto, pois, apesar de ter praticado todos os atos executórios, o resultado não foi atingido por circunstâncias sobrenaturais avessas à vontade do agente."
            },
            {
              "letra": "D",
              "texto": "João consumou o crime de violação de domicílio, pois, de maneira livre e consciente, ingressou na casa alheia contra a vontade de quem de direito."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Abelardo pegou a filha de Geraldo na saída do colégio e a manteve sob seu poder durante cinco dias, liberando-a após ter sido cumprida a exigência de pagamento da quantia de R$ 100.000,00 (cem mil reais). No terceiro dia do encarceramento, entrou em vigor uma nova lei que dobrou a pena aplicável ao crime de extorsão mediante sequestro. Sobre a aplicabilidade da nova lei ao caso narrado, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "É inaplicável, por força do princípio da retroatividade da lei penal."
            },
            {
              "letra": "B",
              "texto": "É aplicável, por força do princípio da alternatividade da lei penal."
            },
            {
              "letra": "C",
              "texto": "É aplicável, por força do princípio da continuidade das leis."
            },
            {
              "letra": "D",
              "texto": "É inaplicável, por força do princípio da ubiquidade da lei penal."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Em 1º de abril, dia da mentira, Maria resolveu “pregar uma peça” em Pedro, coveiro no cemitério Paz Eterna. Maria pediu a José que divulgasse nas redes sociais que ela falecera após ter sofrido um infarto. Como parte da encenação, Maria sedou-se e deitou-se em um caixão, que foi lacrado e encaminhado por José, com documentos sofisticadamente falsificados, para a sede do Paz Eterna. Sem ser avisado ou desconfiar da farsa, Pedro ficou muito triste e, após orar pela alma de Maria, cumpriu seu dever profissional, realizando a cremação e guardando as cinzas num pote de vidro, que se quebrou. Sobre o procedimento de Pedro, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Ele não praticou crime, pois agiu com base em erro de tipo invencível."
            },
            {
              "letra": "B",
              "texto": "Ele praticou apenas o delito de vilipêndio culposo das cinzas do cadáver de Maria."
            },
            {
              "letra": "C",
              "texto": "Ele praticou o delito de homicídio culposo por descumprir dever de cuidado objetivo."
            },
            {
              "letra": "D",
              "texto": "Ele praticou o delito de homicídio qualificado pela impossibilidade de reação da vítima."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Bernardo é gerente bancário e teve seu filho levado por terceiros, que lhe exigiram o pagamento de um milhão de reais para devolvê- lo com vida. Bernardo, valendo-se de sua condição de gerente de banco, foi à agência em que trabalhava e subtraiu a quantia, sendo, entretanto, flagrado quando chegava em sua casa portando o dinheiro subtraído. Sobre a situação de Bernardo no fato hipotético, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Agiu amparado por exercício regular de direito."
            },
            {
              "letra": "B",
              "texto": "Está isento de pena por inexigibilidade de conduta diversa."
            },
            {
              "letra": "C",
              "texto": "Agiu em legítima defesa de terceiro e está excluída a antijuridicidade da conduta."
            },
            {
              "letra": "D",
              "texto": "Deve responder pelo crime de furto consumado, pois chegou a ter posse pacífica do dinheiro."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Processo Penal",
          "enunciado": "Lucas era investigado por estupro de vulnerável, pois, de acordo com as investigações, teria mantido relações sexuais com pessoa menor de 14 anos. A partir de indícios concretos, a 12 Vara Criminal da Comarca correspondente ao local dos fatos expediu mandado de busca e apreensão de aparelhos eletrônicos de Lucas, após regular requerimento do Ministério Público. Nos dispositivos eletrônicos apreendidos foram localizados diversos arquivos, cujo conteúdo apresentava abuso sexual infantil, armazenados e compartilhados nas redes sociais, acessíveis de qualquer lugar do país e do exterior, sem se confirmar, contudo, a hipótese inicial de estupro de vulnerável. Assim, Lucas foi denunciado como incurso nas penas do Art. 241- A e do Art. 241-B, ambos do ECA (divulgação e armazenamento de conteúdo pornográfico envolvendo criança ou adolescente). A sentença foi proferida pelo Juiz de Direito da 12 Vara Criminal da Comarca, tendo sido confirmada pelo Tribunal de Justiça correspondente, e transitada em julgado, condenando Lucas a 5 anos de reclusão, em regime semiaberto. A respeito dos fatos, assinale a opção que apresenta, corretamente, a providência de Direito Processual Penal que o(a) advogado(a) deve adotar.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A ocorrência do trânsito em julgado impede que sejam suscitadas questões processuais atinentes à nulidade ou à incompetência absoluta, admitindo-se a rediscussão dos fatos apenas se for baseada em prova nova, mediante revisão criminal."
            },
            {
              "letra": "B",
              "texto": "Pode ser alegada a nulidade da busca e apreensão e de todos os atos dela decorrentes, diante da incompetência absoluta do Juízo que determinou a diligência, impetrando-se habeas corpus."
            },
            {
              "letra": "C",
              "texto": "Pode ser impetrado habeas corpus, alegando a nulidade da sentença e de todos os atos decisórios posteriores à realização da busca e apreensão, diante da incompetência absoluta do Juízo."
            },
            {
              "letra": "D",
              "texto": "Tendo em vista que a busca e apreensão foi deferida apenas para a investigação de estupro de vulnerável, é incabível a utilização das provas na persecução penal relativa a fato diverso, o que pode ser alegado pela impetração de um mandado de segurança."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Processo Penal",
          "enunciado": "Arthur está cumprindo pena privativa de liberdade pela prática do crime de furto qualificado. Durante o curso da execução penal sofreu uma queda e ficou tetraplégico, atestado em laudo médico oficial. No final do ano, o Presidente da República concedeu indulto natalino via Decreto, abrangendo os casos de tetraplegia superveniente à prática do delito, desde que o crime tivesse sido praticado sem violência ou grave ameaça. Sendo assim, você, como advogado(a) de Arthur, formulou o pedido de declaração da extinção da punibilidade ao Juízo da Execução, que indeferiu o pedido, sem apresentar undamentação. Diante do caso narrado, na qualidade de advogado(a) de Arthur, você deve interpor",
          "alternativas": [
            {
              "letra": "A",
              "texto": "agravo em execução, no prazo de cinco dias. Sem prejuízo, pode ser impetrado habeas corpus."
            },
            {
              "letra": "B",
              "texto": "recurso de apelação, no prazo de cinco dias. Sem prejuízo, pode ser impetrado habeas corpus."
            },
            {
              "letra": "C",
              "texto": "agravo em execução, no prazo de cinco dias. Apenas em caso de não ser interposto recurso, pode-se optar pela via do habeas corpus."
            },
            {
              "letra": "D",
              "texto": "recurso em sentido estrito, no prazo de cinco dias. Diante da unirecorribilidade das decisões, de forma alternativa, pode-se optar pela via do habeas corpus."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Penal",
          "enunciado": "Túlio abriu sua geladeira, retirou sua água com gás e, ao beber, sentiu um gosto estranho, posteriormente vindo a descobrir que se tratava de solvente. Em seguida, Túlio entrou no quarto e chamou sua esposa, Felícia, de “assassina”. Após o esclarecimento de que o solvente tinha sido colocado por equívoco na geladeira por seu filho Thor, Túlio pediu desculpas à Felícia. Alguns dias depois, Felícia contou, em uma roda informal, para a sua amiga Promotora de Justiça, que o marido a havia chamado de “assassina”. Diante de tais fatos, o Ministério Público ofereceu a denúncia por crime de injúria em desfavor de Túlio. Sobre o caso narrado, como advogado(a) de Túlio, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Em razão de envolver violência doméstica, o crime é de ação penal pública incondicionada, cabendo apenas se defender quanto ao mérito da acusação."
            },
            {
              "letra": "B",
              "texto": "O crime é de ação penal privada, devendo ser alegada a ilegitimidade do Ministério Público para a propositura da ação."
            },
            {
              "letra": "C",
              "texto": "Ocrime é de ação penal pública condicionada à representação, e essa conversa informal já vale como representação, cabendo apenas se defender quanto ao mérito da acusação."
            },
            {
              "letra": "D",
              "texto": "O crime é de ação pública condicionada à representação, mas a conversa informal não pode ser aceita como exercício do direito de representar."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Processo Penal",
          "enunciado": "Joaquim, menor impúbere de 8 anos de idade, sofreu castigos físicos imoderados praticados por seu pai, Geraldo. Diante do fato, a mãe de Joaquim, representando-o, constituiu você como advogado(a) do menor. Assinale a opção que apresenta, corretamente, o requerimento que você, como advogado(a) de Joaquim, deve apresentar.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A fixação de medida cautelar do Código de Processo Penal, pois ausente um regramento específico em favor de vítimas do sexo masculino."
            },
            {
              "letra": "B",
              "texto": "A destituição de guarda, no âmbito cível, e, somente então, haverá legitimidade de Joaquim para postular qualquer medida no âmbito criminal."
            },
            {
              "letra": "C",
              "texto": "A fixação de medida protetiva de urgência de proibição de contato e aproximação, com base na lei específica de prevenção e enfrentamento à violência doméstica e familiar contra a criança e o adolescente."
            },
            {
              "letra": "D",
              "texto": "A fixação de medida protetiva de urgência de alimentos provisórios, com base na lei de violência doméstica e familiar contra a mulher, por analogia, ante a ausência de lei específica que ampare a pretensão de Joaquim."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Processo Penal",
          "enunciado": "Caim, desejando matar Abel, lhe ofereceu um pastel de camarão durante uma festa, sabendo que esse alimento lhe causaria severa alergia. Abel consumiu o pastel oferecido por Caim, além de diversos outros salgados e, em sequência, teve uma violenta crise alérgica, vindo a falecer. Acionada a polícia, os investigadores recolheram, em um mesmo invólucro, todos os alimentos da festa, os quais foram submetidos à perícia, que concluiu que “todos os alimentos periciados contêm traços de camarão em quantidade suficiente para causar a morte da vítima, da forma como ocorreu, não se podendo precisar se a contaminação de tais alimentos ocorreu durante o preparo, na cozinha, ou durante o recolhimento pela Polícia.” A necropsia revelou que o consumo de substância alergênica causou a morte de Abel. Sabe-se, ainda, que não é mais possível repetir a colheita de vestígios e a perícia dos alimentos. Assim, Caim foi denunciado pelo homicídio doloso de Abel. Como advogado de Caim, é correto afirmar que a quebra da cadeia de custódia enseja",
          "alternativas": [
            {
              "letra": "A",
              "texto": "a ausência de fiabilidade do laudo de necrópsia."
            },
            {
              "letra": "B",
              "texto": "a ausência de prova fiável do nexo de causalidade."
            },
            {
              "letra": "C",
              "texto": "a nulidade absoluta do processo, atingindo todas as provas produzidas."
            },
            {
              "letra": "D",
              "texto": "a nulidade da prova pericial, a qual deve ser desentranhada do processo."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Processo Penal",
          "enunciado": "Flávia foi pronunciada pela suposta prática de crime de aborto. O processo estava tramitando na cidade de Salgados, PA, e teve grande repercussão no local, havendo, inclusive, várias ameaças de populares contra a ré. A sessão de julgamento pelo júri popular já foi designada, tendo a defesa sido intimada da referida designação. Sobre a hipótese, assinale a opção que indica o modo adequado de você, como advogado(a) da ré, requerer que o julgamento ocorra em outra Comarca.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Suscitar incidente de deslocamento de competência para a Justiça Federal."
            },
            {
              "letra": "B",
              "texto": "Apresentar um pedido de Revisão Criminal."
            },
            {
              "letra": "C",
              "texto": "Oferecer exceção de incompetência territorial."
            },
            {
              "letra": "D",
              "texto": "Pedir o desaforamento do júri."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito Previdenciário",
          "enunciado": "Joana Silva, empregada doméstica, prestando serviço aos mesmos empregadores por cinco anos consecutivos, é demitida por justa causa, devido à prática de ilícito prontamente comprovado em ambiente laboral. Joana, seis meses após o desligamento, sofreu um acidente de trânsito, restando incapacitada permanentemente para qualquer atividade remunerada. Nesse contexto, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Joana poderá obter o benefício previdenciário de aposentadoria por incapacidade permanente."
            },
            {
              "letra": "B",
              "texto": "Joana não possui direito a qualquer prestação previdenciária, haja vista o desligamento por justa causa."
            },
            {
              "letra": "C",
              "texto": "Joana, caso comprove ter efetuado recolhimentos como facultativa, pode obter a concessão do benefício previdenciário."
            },
            {
              "letra": "D",
              "texto": "Joana somente pode obter o benefício previdenciário se o acidente tiver ocorrido no prazo de três meses após a demissão."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito Previdenciário",
          "enunciado": "Sílvia Lima, empregada segurada do Regime Geral da Previdência Social (RGPS), desempenha suas funções em atividades externas, mediante entregas de produtos elaborados por seu empregador. Em uma de suas entregas, logo após deixar a mercadoria e já no retorno ao seu posto de trabalho, foi atingida por um veículo em alta velocidade, que transitava em desacordo com os limites da via. Em virtude do ocorrido, Sílvia permaneceu afastada por um ano, em gozo de benefício previdenciário por incapacidade temporária, tendo se recuperado plenamente para as suas atividades. Sobre a situação de Sílvia, segundo o RGPS, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Ela poderá se aposentar por incapacidade permanente."
            },
            {
              "letra": "B",
              "texto": "Ela tem direito ao auxílio-acidente após o retorno às atividades."
            },
            {
              "letra": "C",
              "texto": "Ela, durante o afastamento, deve continuar a receber salários, normalmente."
            },
            {
              "letra": "D",
              "texto": "Ela, após o retorno à sua atividade, gozará de estabilidade provisória de 12 meses no emprego."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito do Trabalho",
          "enunciado": "A sociedade empresária Bons Caminhos Ltda. consultou você, como advogado(a), porque pretendia contratar, em setembro de 2025, alguns aprendizes e estagiários com 18 anos de idade para que realizassem atividades na modalidade de teletrabalho. A sociedade empresária deseja saber se tal pretensão era válida. Em resposta à demanda da sociedade empresária, considerando os termos da CLT, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "É permitido contratar aprendizes e estagiários para realizarem atividades na modalidade de teletrabalho."
            },
            {
              "letra": "B",
              "texto": "É permitido contratar aprendizes na modalidade de teletrabalho, mas não estagiários, por desvirtuar a filosofia do estágio."
            },
            {
              "letra": "C",
              "texto": "É permitido contratar estagiários na modalidade de teletrabalho, mas não aprendizes, porque o contrato de trabalho deles é especial."
            },
            {
              "letra": "D",
              "texto": "Somente é permitido contratar aprendizes e estagiários em regime de teletrabalho se houver autorização dos seus pais ou responsáveis."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Direito do Trabalho",
          "enunciado": "Em outubro de 2023, a sociedade empresária Plantas Ornamentais Ltda. dispensou o empregado Josimar, sem justa causa, após dois anos de contrato de trabalho. A sociedade calculou as verbas resilitórias e depositou-as na conta do trabalhador em cinco dias e, no mesmo dia, fez o recolhimento da indenização de 40% sobre o FGTS. Ocorre que, por equívoco do setor de Recursos Humanos da sociedade empresária, as guias para o saque do FGTS e os formulários para o requerimento do seguro-desemprego somente foram entregues 60 dias após o término do aviso prévio. Sobre a hipótese, considerando os termos da CLT, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Não se cogitará qualquer multa ou penalidade pela ausência de prejuízo, já que as verbas foram depositadas na conta de Josimar no prazo legal."
            },
            {
              "letra": "B",
              "texto": "Asociedade empresária pagará uma multa de 50% do valor das verbas resilitórias, em razão do atraso na entrega dos documentos do FGTS e do seguro-desemprego."
            },
            {
              "letra": "C",
              "texto": "A situação gerou enorme prejuízo ao trabalhador, daí porque as verbas referentes à saída deverão ser pagas em dobro como forma de punição da sociedade empresária."
            },
            {
              "letra": "D",
              "texto": "A sociedade empresária pagará multa pelo atraso na entrega dos documentos do FGTS e do seguro-desemprego em favor do trabalhador, no valor equivalente ao seu salário."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito do Trabalho",
          "enunciado": "Jéssica trabalha em um hospital particular de Belo Horizonte, no setor de tratamento de pacientes com doenças infectocontagiosas, recebendo adicional de insalubridade em grau máximo. Em 2024, Jessica engravidou e deu ciência do fato ao seu chefe, que imediatamente a transferiu para o setor de convênios, localizado em um prédio diferente do hospital, ocupando uma confortável e arejada sala comercial na qual cinco funcionários negociam com os planos de saúde conveniados, por telefone, a tabela de valores pelos atendimentos e procedimentos, sem atendimento presencial do público externo. Sobre a situação apresentada e os termos da CLT, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A empregada, durante a gestação, fez jus ao adicional de insalubridade, que cessará após o nascimento da criança, não se estendendo ao período de lactação."
            },
            {
              "letra": "B",
              "texto": "O direito ao adicional de insalubridade, até o retorno, deverá cessar porque a transferência foi uma necessidade para a qual a sociedade empresária não colaborou."
            },
            {
              "letra": "C",
              "texto": "Jéssica, de acordo com a norma de regência, terá direito à metade do valor do adicional de insalubridade que recebia, enquanto estiver em local sem agente agressor à saúde."
            },
            {
              "letra": "D",
              "texto": "A sociedade empresária deve pagar o adicional de insalubridade à gestante enquanto ela estiver no setor de convênios, fazendo a compensação desse valor na cota-parte do INSS."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Direito do Trabalho",
          "enunciado": "Luana Moreira trabalha em uma sociedade empresária do setor de cosméticos das 7h às 13h15min e desfruta de 15 minutos de intervalo que ocorre das 10h às 10h15min, mas está pressionando sua chefia, aduzindo que teria direito a 1 hora, no mínimo, razão pela qual pretende receber 1 hora como extraordinária, com repercussão nas demais parcelas salariais do contrato. A sociedade empresária consultou você, como advogado(a), para saber como agir. Sobre a hipótese apresentada, de acordo com a legislação trabalhista em vigor, assinale a afirmativa que, corretamente, apresenta a sua resposta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Luana deverá receber o restante do período do intervalo para inteirar 1 hora de forma indenizatória."
            },
            {
              "letra": "B",
              "texto": "Luana não tem direito ao pagamento do intervalo, considerando que a jornada não excede 6 horas e os 15 minutos são de intervalo."
            },
            {
              "letra": "C",
              "texto": "Luana deverá receber o valor correspondente a uma hora integral, com os devidos reflexos nas parcelas salariais do contrato de trabalho."
            },
            {
              "letra": "D",
              "texto": "Luana deverá receber a diferença de 45 minutos de forma indenizatória, com repercussão nas parcelas salariais do contrato de trabalho."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito do Trabalho",
          "enunciado": "Reginaldo trabalha para a sociedade empresária Móveis Modulados Ltda. desde 2021 como montador, sendo considerado um empregado exemplar. Em agosto de 2024, Reginaldo compareceu ao trabalho com uma tornozeleira eletrônica, fato que se tornou o comentário geral na sociedade empresária, pois todos especulavam o que Reginaldo teria feito de errado. A sociedade empresária, que nunca havia se deparado com tal situação, o(a) consultou, como advogado(a), para obter um parecer sobre o que deverá ocorrer com o contrato de trabalho de Reginaldo. Você verifica pelo sistema processual que a tornozeleira foi colocada de modo cautelar, pois o processo de Reginaldo ainda está no início e refere-se a vias de fato que teve com um torcedor de time adversário quando estava em um estádio, no final de semana, assistindo a uma partida de futebol. Sobre o contrato de trabalho de Reginaldo, considerando os fatos e a legislação em vigor, assinale a opção correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Será interrompido, sendo garantido a Reginaldo 50% do seu salário."
            },
            {
              "letra": "B",
              "texto": "Será suspenso, até que haja decisão final da justiça criminal."
            },
            {
              "letra": "C",
              "texto": "Será rompido por justa causa, em razão do mau procedimento."
            },
            {
              "letra": "D",
              "texto": "Não sofrerá qualquer consequência."
            }
          ],
          "respostaCorreta": 3
        },
        {
          "territorio": "Processo do Trabalho",
          "enunciado": "João Paulo trabalhou como vendedor em uma loja de calçados de 20/02/2022 a 30/01/2023, situada próxima de sua residência, no município de Duque de Caxias, RJ. Pela proximidade, menos de 50 m de distância, João Paulo ia a pé para o serviço e não optou por receber vale-transporte. Ocorre que, ao ser dispensado, ajuizou ação trabalhista reclamando a concessão do benefício, ação que seu advogado distribuiu para o Município do Rio de Janeiro, indo para a 1002 Vara do Trabalho (VT) do Rio de Janeiro, que designou uma audiência presencial. A loja está localizada em Duque de Caxias e você, advogado(a) da loja, tem seu escritório na mesma cidade. Sobre a competência territorial e a medida processual a ser adotada, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A ação poderá transcorrer no Rio de Janeiro, tendo sido essa a opção do empregado, pelo que se prorrogou a competência."
            },
            {
              "letra": "B",
              "texto": "Deverá ser apresentada exceção de incompetência territorial em preliminar de contestação, podendo também ser suscitada oralmente no momento da audiência, antes da defesa."
            },
            {
              "letra": "C",
              "texto": "Deverá ser apresentada petição de exceção de incompetência territorial até cinco dias após o recebimento da notificação citatória, em peça autônoma e antes da audiência."
            },
            {
              "letra": "D",
              "texto": "Deverá ser apresentada exceção de incompetência territorial no ato da audiência em peça autônoma, mas junto com a apresentação da defesa, de modo a evitar eventual preclusão."
            }
          ],
          "respostaCorreta": 2
        },
        {
          "territorio": "Processo do Trabalho",
          "enunciado": "Lorena trabalha como tosadora de animais em um pet-shop desde 2022, recebendo um salário mínimo nacional mensalmente. Ainda com o contrato de trabalho em vigor, Lorena pediu que você, como advogado(a), ajuizasse em 2024, reclamação trabalhista postulando o pagamento de adicional noturno, pois ela trabalha até 22h30. Na petição inicial, você não requereu gratuidade de justiça, nem juntou declaração de miserabilidade ou necessidade jurídica. O pedido foi julgado totalmente improcedente, mas o Juiz concedeu, de ofício, a gratuidade de justiça. Considerando os fatos narrados, a previsão contida na CLT e o entendimento consolidado do TST, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Alei é omissa quanto aos critérios para deferir a gratuidade de justiça, podendo o Juiz concedê-la ou não."
            },
            {
              "letra": "B",
              "texto": "O Juiz está correto, porque o nível salarial de Lorena autoriza a concessão da gratuidade de justiça de ofício."
            },
            {
              "letra": "C",
              "texto": "A parte não requereu gratuidade de justiça, caracterizando, assim, julgamento extra petita, vedado na hipótese."
            },
            {
              "letra": "D",
              "texto": "A gratuidade de justiça na Justiça do Trabalho é um pedido implícito, devendo ser automaticamente concedida a qualquer trabalhador."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Direito do Trabalho",
          "enunciado": "Jean ajuizou reclamação trabalhista, em 2024, contra o seu ex- empregador, requerendo o pagamento do adicional de insalubridade. Após contestada, o Juiz determinou a realização de perícia a cargo de um engenheiro do trabalho. A ré apresentou seu protesto sob a alegação de que, para tal perícia, somente um médico do trabalho poderia realizá-la. Considerando os termos da CLT e da jurisprudência consolidada do TST, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A sociedade empresária está correta, porque a realização de perícia de insalubridade é ato privativo de médico do trabalho, conforme prevê a CLT."
            },
            {
              "letra": "B",
              "texto": "A sociedade empresária está equivocada, porque a perícia pode ser realizada por médico do trabalho ou engenheiro do trabalho registrados no Ministério do Trabalho."
            },
            {
              "letra": "C",
              "texto": "Sendo da confiança do Juiz, qualquer profissional poderá ser nomeado perito para a realização de perícia de insalubridade, cabendo à empresa antecipar os honorários."
            },
            {
              "letra": "D",
              "texto": "A perícia para fins de insalubridade somente pode ser realizada por engenheiro do trabalho, desde que registrado no Ministério do Trabalho."
            }
          ],
          "respostaCorreta": 1
        },
        {
          "territorio": "Processo do Trabalho",
          "enunciado": "Um sindicato de classe dos empregados ajuizou, perante o Tribunal Regional do Trabalho competente, dissídio coletivo de natureza econômica com alcance municipal. Após ser devidamente contestado, o processo foi extinto sem a resolução do mérito, não havendo margem para a oposição de embargos de declaração. Considerando esses fatos e que você é o(a) advogado(a) do sindicato autor, assinale a opção que indica o recurso cabível e o respectivo prazo.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "Recurso ordinário, no prazo de 8 dias."
            },
            {
              "letra": "B",
              "texto": "Recurso de revista, no prazo de 8 dias."
            },
            {
              "letra": "C",
              "texto": "Agravo de petição, no prazo de 15 dias."
            },
            {
              "letra": "D",
              "texto": "Recurso extraordinário, no prazo de 15 dias."
            }
          ],
          "respostaCorreta": 0
        },
        {
          "territorio": "Processo do Trabalho",
          "enunciado": "Você foi procurado(a) por um Sindicato de Empregados que deseja ajuizar uma ação em face de outro Sindicato de Empregados, com o objetivo de discutir a legitimidade para receber as contribuições sindicais oriundas de uma determinada sociedade empresária. Sobre a hipótese, assinale a afirmativa correta.",
          "alternativas": [
            {
              "letra": "A",
              "texto": "A ação deverá ser ajuizada na Justiça do Trabalho."
            },
            {
              "letra": "B",
              "texto": "A ação deverá ser ajuizada na Justiça Comum Federal."
            },
            {
              "letra": "C",
              "texto": "A ação deverá ser ajuizada na Justiça Comum Estadual."
            },
            {
              "letra": "D",
              "texto": "Não caberá ajuizamento de ação judicial, mas apenas procedimento administrativo no Ministério do Trabalho e Emprego."
            }
          ],
          "respostaCorreta": 0
        }
      ]
    }
  ];

  function seedar() {
    var versaoAplicada = Storage.read(Storage.KEYS.questoesSeedVersion, 0);
    if (versaoAplicada >= SEED_VERSION_ATUAL) return Promise.resolve();

    return DB.getAll('disciplinas').then(function (disciplinas) {
      var idPorNome = {};
      disciplinas.forEach(function (d) { idPorNome[d.nome] = d.id; });

      var pendentes = [];
      PROVAS.forEach(function (prova) {
        prova.questoes.forEach(function (q) {
          var disciplinaId = idPorNome[q.territorio];
          if (!disciplinaId) return;
          pendentes.push(DB.put('questoes', {
            id: Storage.makeId(),
            disciplinaId: disciplinaId,
            provaOrigem: prova.provaOrigem,
            tema: '',
            dificuldade: 'media',
            enunciado: q.enunciado,
            alternativas: q.alternativas,
            respostaCorreta: q.respostaCorreta,
            explicacaoCorreta: '',
            explicacaoErradas: '',
            pegadinha: '',
            regraMemoria: '',
            casoAbsurdo: ''
          }));
        });
      });

      return Promise.all(pendentes).then(function () {
        Storage.write(Storage.KEYS.questoesSeedVersion, SEED_VERSION_ATUAL);
      });
    });
  }

  return { seedar: seedar };
})();
