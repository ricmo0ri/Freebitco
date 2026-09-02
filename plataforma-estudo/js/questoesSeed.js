// Banco de questões pré-carregado, extraído e classificado por matéria a
// partir de provas oficiais da OAB (prova + gabarito). Assim que a questão
// tem um território, ela já entra automaticamente no jogo inteiro: missões,
// chefões por tema, XP/combo e estatística de fraquezas — não é um passo à
// parte, é como o motor de questões já funciona pra qualquer questão.
var QuestoesSeed = (function () {
  var SEED_VERSION_ATUAL = 3;

  var PROVAS = [
    {
      "provaOrigem": "46º Exame de Ordem Unificado",
      "seedVersion": 1,
      "questoes": [
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O Estatuto da OAB (art. 7º, XX e XXI, com redação da Lei 13.363/2016) garante à advogada gestante o direito de não passar por detector de metais e a reserva de vaga em garagem. A lei fala em Fóruns e Tribunais de forma geral, sem distinguir Justiça Estadual, Federal ou Superior.",
          "explicacaoErradas": "A e B erram ao restringir os direitos a Tribunais Federais ou Superiores — a lei não faz essa distinção. D erra ao chamar a vaga reservada de 'mera liberalidade': é direito legal, não favor do Tribunal.",
          "pegadinha": "A banca tenta te fazer achar que esses direitos só valem em esfera federal ou nos tribunais superiores — mas a lei protege a advogada gestante em qualquer Fórum ou Tribunal.",
          "regraMemoria": "Gestante advogada: sem detector, com vaga — em QUALQUER Fórum, estadual, federal ou superior, não importa."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Procurador-Geral do Estado ocupa cargo de direção em órgão da Administração Pública direta, o que gera incompatibilidade total com a advocacia (art. 28, III, EAOAB). A incompatibilidade vale 'mesmo em causa própria' e abrange qualquer causa, privada ou não, enquanto durar a investidura.",
          "explicacaoErradas": "As demais alternativas confundem incompatibilidade com impedimento. Impedimento (art. 30) só proíbe atuar contra o ente público que remunera o profissional, mas continuando a advocacia normal; incompatibilidade proíbe advogar por completo, inclusive em causas privadas sem relação com o cargo.",
          "pegadinha": "A pegadinha é confundir 'impedimento' (parcial, só contra a Fazenda que paga o salário) com 'incompatibilidade' (total, veda qualquer advocacia enquanto durar o cargo de direção).",
          "regraMemoria": "Cargo de DIREÇÃO na Administração = incompatibilidade TOTAL. Nada de advocacia paralela, nem causa privada."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O art. 9º do Estatuto e as normas regulamentares da OAB não exigem que o estagiário esteja cursando a graduação: o estágio pode ser feito por bacharel já formado, em escritório credenciado pelo Conselho Seccional, permitindo também a inscrição no quadro de estagiários.",
          "explicacaoErradas": "A e D erram ao exigir que o candidato ainda esteja matriculado na graduação. B erra ao restringir o estágio à instituição de ensino, ignorando que escritórios credenciados pela OAB também podem oferecê-lo.",
          "pegadinha": "A armadilha é achar que 'estagiário' só pode ser quem ainda está na faculdade — bacharel formado (mesmo reprovado no Exame de Ordem) também pode estagiar e se inscrever.",
          "regraMemoria": "Estágio de advocacia não é só para quem 'ainda está na faculdade': bacharel formado também pode, desde que o escritório seja credenciado pela OAB."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O art. 15 do Estatuto, lido com o Código de Ética (art. 19, §2º), estende a vedação de patrocinar interesses opostos a todos os integrantes da mesma sociedade de advogados. O conflito de interesses entre sócios do mesmo escritório é presumido e indisponível.",
          "explicacaoErradas": "B, C e D erram ao imaginar que um acordo escrito, um aviso ao juiz ou uma separação interna de equipes resolveria o conflito — nada disso afasta a vedação legal, que é objetiva e não comporta esse tipo de 'contorno'.",
          "pegadinha": "A pegadinha é achar que basta 'avisar o juiz' ou 'prometer independência' para sanar o conflito — a lei não aceita esse tipo de solução informal.",
          "regraMemoria": "Mesma banca, interesses opostos: NUNCA. Não existe 'gentleman's agreement' que resolva conflito de sócios do mesmo escritório."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O art. 40 do Estatuto lista as circunstâncias atenuantes que o Tribunal de Ética deve considerar na dosimetria da sanção, entre elas ter o infrator exercido, com zelo e proficiência, mandato em órgão da OAB. Trata-se de fator obrigatório de ponderação, não faculdade do julgador.",
          "explicacaoErradas": "A erra porque a multa não substitui a censura, apenas se soma a ela em caso de reincidência. B erra porque, em regra, a censura é aplicada de forma reservada, sem ampla publicidade. C erra ao afirmar que a conversão em advertência é sempre impossível, quando a lei a admite justamente quando não há punição disciplinar anterior.",
          "pegadinha": "A pegadinha é achar que atenuante é 'liberalidade' do Tribunal — na verdade, listada no art. 40, é circunstância que DEVE ser levada em conta na aplicação da pena.",
          "regraMemoria": "Zelo na OAB conta a seu favor: mandato bem exercido em órgão da Ordem é atenuante que o Tribunal É OBRIGADO a considerar."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Mesmo com o bloqueio patrimonial na esfera criminal, a jurisprudência e a legislação sobre lavagem de capitais admitem a liberação parcial de bens (até o percentual legalmente autorizado) para custear honorários e despesas de defesa, preservando o direito de defesa e a remuneração do advogado.",
          "explicacaoErradas": "B erra porque o advogado não pode se apropriar de bens não pactuados, mesmo em situação excepcional. C erra porque a quota litis pode sim ser paga em bens (como uma joia), não exclusivamente em dinheiro. D erra porque a quota litis não é vedada pelo Código de Ética (art. 50), apenas regulada.",
          "pegadinha": "A pegadinha é achar que bloqueio total de bens elimina o direito do advogado aos honorários — a lei sempre reserva uma fatia para custear a defesa.",
          "regraMemoria": "Bloqueio de bens não bloqueia honorários: sempre há uma fatia liberada para pagar advogado e defesa."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O Código de Ética e o Provimento da OAB sobre publicidade vedam a divulgação conjunta da advocacia com outra atividade econômica, mesmo exercida pela mesma pessoa e mesmo havendo afinidade temática, para preservar a independência técnica e evitar a mercantilização da profissão.",
          "explicacaoErradas": "A e D erram ao admitir a divulgação conjunta com base em 'decoro' ou 'afinidade temática' — a vedação é objetiva e não comporta esse tipo de exceção. B erra ao inventar uma hipótese de convênio entre entidades de classe que a norma não prevê.",
          "pegadinha": "A pegadinha é achar que 'afinidade entre as áreas' (imobiliário e construção civil) justifica a publicidade conjunta — a vedação é absoluta, independe de afinidade.",
          "regraMemoria": "Advocacia não divide holofote: publicidade conjunta com outra atividade é sempre vedada, afinidade ou não."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O Estatuto da OAB, com o reforço trazido pelo Pacote Anticrime (Lei 13.964/2019), veda expressamente que o advogado celebre colaboração premiada contra quem seja ou tenha sido seu cliente. A violação gera infração disciplinar gravíssima, com possível exclusão dos quadros da OAB, sem prejuízo da responsabilidade penal.",
          "explicacaoErradas": "A, B e C erram ao admitir exceções (redução de pena, ex-cliente, autorização judicial) — a vedação é absoluta e vale tanto para o cliente atual quanto para o antigo, sendo o sigilo profissional e a confiança pilares indisponíveis da advocacia.",
          "pegadinha": "A pegadinha é achar que 'ex-cliente' ou 'autorização judicial' abre uma brecha — a proibição é total, presente e passado não importam.",
          "regraMemoria": "Advogado nunca vira delator do próprio cliente — nem do atual, nem do antigo. Sigilo profissional é regra sem exceção aqui."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Sócrates questiona o próprio conceito de 'ladrão', focando no ser da coisa ('o que é isso?') — essa dúvida ontológica e infinita é a marca da questão zetética, na terminologia de Tercio Sampaio Ferraz Jr.",
          "explicacaoErradas": "A erra ao chamar a postura de Sócrates de dogmática, quando é justamente o oposto: dogmática é a busca por uma decisão prática, finita, baseada em normas postas. C também inverte os conceitos, e D contraria o próprio autor, que não defende a supressão da zetética pela dogmática.",
          "pegadinha": "A pegadinha clássica é trocar zetética por dogmática: zetética = pergunta aberta sobre 'o que é' (Sócrates); dogmática = decisão prática baseada em norma posta (usar o Código Penal para enquadrar a conduta).",
          "regraMemoria": "Zetética pergunta 'o que é?' (dúvida infinita, tipo Sócrates); Dogmática decide 'o que fazer?' (usa a lei e ponto final)."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "Diante da lacuna sobre greve de servidor público, o STF aplicou lei já existente e semelhante (a lei de greve do setor privado) ao caso similar não regulado — essa é a técnica da analogia, prevista no art. 4º da LINDB para suprir omissão legislativa.",
          "explicacaoErradas": "Equidade seria decidir por senso de justiça sem apoio em norma; princípios gerais de direito são valores abstratos do sistema, não uma lei concreta aplicada por semelhança; costumes não têm relação com o caso, que envolveu aplicação de lei escrita já existente.",
          "pegadinha": "A pegadinha é confundir analogia com princípios gerais de direito — aqui houve aplicação de uma LEI já existente e semelhante, não um princípio abstrato.",
          "regraMemoria": "Falta lei? Analogia usa uma lei parecida que já existe. Princípios gerais e equidade entram só quando nem isso resolve."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O habeas data é o remédio adequado para retificação de dados pessoais em registros públicos, mas — diferentemente do habeas corpus — exige capacidade postulatória, ou seja, deve ser impetrado por advogado (art. 133 da CF/88 e jurisprudência do STF).",
          "explicacaoErradas": "A erra porque mandado de segurança não é o instrumento adequado para retificação de dados pessoais (essa é a função específica do habeas data). B inventa um 'processo sigiloso' inexistente. D erra porque o habeas data serve exatamente para casos como o de Maria: correção de dados próprios em registro público.",
          "pegadinha": "A pegadinha é achar que, como no habeas corpus, dá para impetrar sem advogado — só o habeas corpus dispensa capacidade postulatória; os demais remédios constitucionais exigem advogado.",
          "regraMemoria": "Só o HABEAS CORPUS dispensa advogado. Habeas data, mandado de segurança e injunção sempre precisam de advogado."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 20, §1º, da CF/88 assegura participação nos resultados da exploração de petróleo e gás natural ao Estado, ao Município onde ocorre a exploração e à União, nos termos da lei (royalties e participações especiais).",
          "explicacaoErradas": "As demais alternativas erram ao excluir um dos três entes: A ignora Estado e União, C ignora Estado e Município, D ignora a União — mas a Constituição garante participação aos três, simultaneamente.",
          "pegadinha": "A pegadinha é achar que só o Município onde está o petróleo (ou só a União, dona do subsolo) fica com o benefício — na verdade os três entes participam.",
          "regraMemoria": "Petróleo achado dá royalties para todo mundo: União, Estado e Município — ninguém fica de fora."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O efeito vinculante das decisões do STF em controle concentrado atinge o Judiciário e a Administração Pública, mas não alcança a função legislativa típica — o Legislativo pode editar nova lei com conteúdo igual ao já declarado inconstitucional, sujeitando-se a novo controle em nova ADI.",
          "explicacaoErradas": "A erra porque reclamação não cabe contra ato legislativo típico, já que este não está vinculado à decisão anterior. C e D erram ao estender o efeito vinculante ao próprio processo legislativo, o que a jurisprudência do STF rejeita, sob pena de 'fossilizar' a Constituição.",
          "pegadinha": "A pegadinha é achar que o Legislativo fica 'proibido para sempre' de legislar sobre o tema já julgado inconstitucional — na verdade ele pode tentar de novo, sujeito a novo controle.",
          "regraMemoria": "Efeito vinculante trava o Judiciário e a Administração, mas não amarra o Legislativo em sua função de legislar."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O art. 35, II, da CF/88 prevê expressamente a intervenção estadual no Município quando não forem prestadas as contas devidas na forma da lei. Essa hipótese é espontânea: o Governador decreta diretamente, sem precisar de autorização prévia do Legislativo ou do Judiciário.",
          "explicacaoErradas": "A e B erram ao exigir provocação do STF ou decisão judicial prévia — desnecessárias nessa hipótese objetiva. C erra ao exigir autorização prévia da Assembleia Legislativa, quando o controle político ocorre depois, pela apreciação do decreto já editado.",
          "pegadinha": "A pegadinha é achar que toda intervenção depende de autorização prévia de outro Poder — nas hipóteses espontâneas do art. 35, o Governador decreta direto, e o controle legislativo vem depois.",
          "regraMemoria": "Não prestou contas por 3 anos? Governador decreta intervenção na hora, sem pedir licença a ninguém antes."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "As decisões dos Tribunais de Contas que imputam débito têm eficácia de título executivo (art. 71, §3º, CF/88), permitindo que a Fazenda Pública execute diretamente o gestor, sem necessidade de nova ação de conhecimento no Judiciário.",
          "explicacaoErradas": "A erra ao subordinar o Tribunal de Contas ao Legislativo para esse fim — ele tem competência própria e definitiva quanto ao dever de ressarcir. B e D erram ao exigir ação judicial prévia, contrariando a própria natureza de título executivo da decisão.",
          "pegadinha": "A pegadinha é achar que decisão de Tribunal de Contas é só 'recomendação' e precisa passar pelo Judiciário para virar cobrança — na verdade já nasce executável.",
          "regraMemoria": "Tribunal de Contas mandou ressarcir? Já virou título executivo, direto pra execução fiscal, sem passar por juiz antes."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O art. 29, V, da CF/88 exige que a fixação do subsídio de Prefeito e Vice-Prefeito seja feita por lei de iniciativa da Câmara Municipal, não do Chefe do Executivo. Projeto de lei sobre o tema enviado pelo próprio Prefeito viola o processo legislativo constitucional, mesmo que aprovado e sancionado.",
          "explicacaoErradas": "A e B erram ao validar a lei apenas pela forma (lei municipal) ou pela Lei Orgânica, ignorando o vício de iniciativa. C erra ao achar que o fato de João Carlos não se beneficiar diretamente (por já estar no fim do mandato) sana o vício — o vício de iniciativa contamina a lei independentemente de quem se beneficia.",
          "pegadinha": "A pegadinha é achar que, por ser 'para o próximo mandato' e o Prefeito atual não se beneficiar, o vício desaparece — vício de iniciativa não se cura por isso.",
          "regraMemoria": "Subsídio de Prefeito e Vice? Só a Câmara pode propor a lei — se o Executivo iniciar, é inconstitucional na largada."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "STF e Corte IDH reconhecem que o conflito possessório iniciado antes da CF/88 e que se prolonga no tempo (renitente esbulho) não impede o reconhecimento da tradicionalidade da ocupação indígena, afastando a tese rígida do marco temporal.",
          "explicacaoErradas": "A erra porque os direitos são coletivos: a defesa em juízo cabe à comunidade, ao MPF ou entidades representativas, não a um indivíduo isolado substituindo a coletividade. C erra porque terras indígenas são inalienáveis e indisponíveis (art. 231, §4º, CF), não podendo ser vendidas nem por acordo. D erra porque a representação em juízo não é exclusiva da Funai — a CF (art. 232) reconhece capacidade postulatória própria às comunidades indígenas.",
          "pegadinha": "A pegadinha é achar que o conflito ter começado antes de 1988 (marco temporal) elimina a proteção — o renitente esbulho comprovado afasta essa exigência.",
          "regraMemoria": "Esbulho renitente que já vinha antes de 1988 não tira a proteção da terra indígena — marco temporal não é regra absoluta."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O STF firmou (RE 466.343) que os tratados de direitos humanos incorporados antes da EC 45/2004, por não terem seguido o rito de emenda constitucional, têm status supralegal: abaixo da Constituição, mas acima da lei ordinária — caso paradigmático foi a prisão civil do depositário infiel frente ao Pacto de San José.",
          "explicacaoErradas": "A erra ao rebaixar os tratados a mero status de lei ordinária. B e C erram ao elevá-los a status supraconstitucional ou constitucional — o STF nunca adotou essas duas teses para os tratados anteriores à EC 45/2004.",
          "pegadinha": "A pegadinha é confundir o status desses tratados antigos com o dos aprovados depois da EC 45/2004 pelo rito de emenda (que aí sim têm status constitucional) — antes da emenda, o status é supralegal, não constitucional.",
          "regraMemoria": "Tratado de direitos humanos sem rito de emenda = supralegal: abaixo da Constituição, acima da lei comum. Ponto de referência: caso do depositário infiel."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "A Lei 9.504/97 exige domicílio eleitoral na circunscrição pelo prazo mínimo de 6 meses antes da eleição como condição de elegibilidade. Maria deve escolher e formalizar esse domicílio dentro desse prazo mínimo, em um dos Estados onde tem vínculo.",
          "explicacaoErradas": "B erra ao dizer que a definição pode ocorrer só no momento do registro — precisa ser antes, respeitando o prazo mínimo. C erra: mesmo cargo de projeção nacional (Senador) exige domicílio eleitoral no Estado da candidatura. D erra ao negar o caráter de ficção jurídica do domicílio eleitoral, que é definido perante a Justiça Eleitoral, não pela simples permanência física.",
          "pegadinha": "A pegadinha é achar que Senador, por representar o Estado no plano federal, pode concorrer em qualquer lugar — o domicílio eleitoral no Estado continua sendo exigido.",
          "regraMemoria": "Domicílio eleitoral: define com 6 meses de antecedência e é nele que você concorre — nem antes vale, nem depois."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Doação estimável em dinheiro (como publicidade paga por terceiro em benefício do candidato) configura captação ilícita de recursos, apurável pelo rito da Ação de Investigação Judicial Eleitoral (art. 22, LC 64/90), aplicado por analogia/entendimento do TSE também à captação ou gastos ilícitos de recursos.",
          "explicacaoErradas": "B erra porque benefício em bens ou serviços (publicidade) também conta como recurso de campanha, mesmo sem repasse direto em dinheiro. C erra porque não houve preclusão: o prazo para representação corre a partir da diplomação, que acabou de ocorrer. D erra ao exigir que a doação seja só em moeda — doações estimáveis em dinheiro (bens, serviços) também se sujeitam às regras e vedações de campanha.",
          "pegadinha": "A pegadinha é achar que, por não ter havido repasse em dinheiro (só publicidade), não há ilícito — vantagem estimável em dinheiro conta igual a dinheiro vivo.",
          "regraMemoria": "Não precisa ser dinheiro na mão: publicidade de graça também é doação — e se for de fonte vedada, é captação ilícita."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "A confirmação de testamento particular e a partilha de bens situados no Brasil são de competência exclusiva da autoridade judiciária brasileira (art. 23, II, CPC), ainda que o autor da herança seja estrangeiro e domiciliado fora do país. Sendo competência exclusiva, nenhum ato estrangeiro (nem judicial, nem notarial) pode ser homologado quanto a essa parte.",
          "explicacaoErradas": "A e B erram porque tratam o caso como se fosse homologação comum de decisão estrangeira (art. 15 e 17 da LINDB), quando na verdade a matéria é de competência exclusiva brasileira, que nem sequer comporta homologação. C erra ao supor efeitos automáticos por 'autonomia da vontade': competência exclusiva não se flexibiliza por acordo entre as partes.",
          "pegadinha": "O fato de ser consensual (sem litígio) engana: parece que, sem disputa, tudo poderia ser homologado, mas a exclusividade da jurisdição brasileira sobre imóveis aqui situados independe de haver ou não litígio.",
          "regraMemoria": "Bem no Brasil em sucessão = juiz brasileiro manda, ponto final; STJ não homologa nada estrangeiro nessa fatia (competência exclusiva, art. 23, II, CPC)."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "Pelo art. 7º, §4º da LINDB, o regime de bens obedece à lei do domicílio comum dos nubentes ao tempo do casamento; havendo domicílio diverso, aplica-se a lei do primeiro domicílio conjugal. Como ambos eram domiciliados na Alemanha quando casaram, é a lei alemã que rege o regime de bens.",
          "explicacaoErradas": "França e Holanda erram porque são os domicílios atuais/posteriores de cada cônjuge, irrelevantes para fixar o regime de bens, que se define no momento do casamento. Brasil erra porque a nacionalidade de Maria não é o critério da regra do art. 7º, §4º, que é domiciliar, não nacional.",
          "pegadinha": "A questão tenta confundir com os domicílios atuais (separados) dos cônjuges e com a nacionalidade brasileira de Maria; o que importa é o domicílio comum no momento do casamento (ou o primeiro domicílio conjugal), que foi Frankfurt/Alemanha.",
          "regraMemoria": "Regime de bens = 'foto do momento do casamento': domicílio comum dos noivos na hora do 'sim', ou primeiro lar do casal se moravam em países diferentes (art. 7º, §4º LINDB)."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "A 'regra de ouro' do orçamento (art. 167, III, CF) veda operação de crédito que financie despesa corrente, permitindo-a só para despesas de capital (investimentos). Pagamento de folha de servidores é despesa corrente, logo é vedado ao BNDES emprestar para esse fim.",
          "explicacaoErradas": "B erra porque garantia robusta não afasta vedação constitucional: a regra de ouro é sobre a finalidade do gasto, não sobre a solidez da garantia. C erra porque não é discricionariedade do banco avaliar liquidez da garantia — a vedação é objetiva e prévia. D erra porque a regra de ouro não distribui competência por ente federativo controlador do banco.",
          "pegadinha": "O valor alto da garantia (superior ao empréstimo) parece resolver tudo, mas o problema não é o risco de crédito — é a finalidade do empréstimo (custear despesa corrente), que é vedada independentemente da garantia oferecida.",
          "regraMemoria": "Regra de ouro: empréstimo público só para investimento (despesa de capital), nunca para pagar salário atrasado (despesa corrente) — art. 167, III, CF."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "A LOA deve ser compatível com o PPA e detalhar, entre seus anexos, os investimentos plurianuais e os já em andamento, concretizando anualmente o planejamento de médio prazo do PPA (art. 165, §7º e art. 167, §1º, CF). Não há vedação constitucional a essa inserção — pelo contrário, é exigida a compatibilização.",
          "explicacaoErradas": "As alternativas A, B e D erram ao tratar como exclusiva do PPA ou da LDO uma informação que a LOA também deve trazer para dar transparência e compatibilidade entre as peças orçamentárias. PPA fixa diretrizes de médio prazo; a LOA anual é que efetivamente aloca a dotação de cada exercício, inclusive para obras plurianuais e em andamento.",
          "pegadinha": "A pegadinha é achar que PPA, LDO e LOA são compartimentos estanques, cada um só podendo tratar de um assunto — na prática elas se comunicam e se compatibilizam, e investimento plurianual aparece nas três, com funções diferentes.",
          "regraMemoria": "PPA planeja o filme inteiro, LOA paga a cena do ano — mas a cena do ano pode (e deve) mencionar o filme todo, inclusive obras em andamento."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Nova contribuição de seguridade social fora do rol do art. 195, CF exige lei complementar (competência residual, art. 195, §4º c/c art. 154, I, CF) e se sujeita apenas à noventena (art. 195, §6º, CF), não à anterioridade anual. Como a cobrança começou 61 dias após a publicação, viola a noventena, além de ter sido criada por lei ordinária, e não complementar.",
          "explicacaoErradas": "A erra ao apontar violação da anterioridade anual, que simplesmente não se aplica a contribuições de seguridade social. C e D erram ao dizer que não há inconstitucionalidade, ou que só há vício quanto à lei complementar — ambas ignoram que os 90 dias mínimos não foram respeitados.",
          "pegadinha": "A pegadinha é confundir a exceção à anterioridade ANUAL (que de fato existe para contribuições de seguridade) com dispensa da noventena — a contribuição de seguridade é EXCEÇÃO à anterioridade anual, mas está SUJEITA à nonagesimal.",
          "regraMemoria": "Contribuição de seguridade nova: precisa de LEI COMPLEMENTAR e espera 90 dias — 'pula o ano, mas não pula os 90 dias'."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Pela sistemática do art. 40 da LEF e Súmula 314 do STJ, não localizado o devedor/bens, suspende-se a execução por 1 ano; só depois desse prazo começa a correr a prescrição intercorrente de 5 anos. Contando a partir de abril/2021 (fim da suspensão), o prazo quinquenal só terminaria em abril/2026, não tendo se consumado em julho/2025.",
          "explicacaoErradas": "A erra por ignorar a suspensão do art. 40 da LEF, tratando como prescrição comum contada sem esse intervalo. B erra porque a citação por edital, embora precária, é válida para fins processuais e não impede o curso do prazo. C erra porque descreve a prescrição intercorrente do CTN, mas o instituto correto aplicável a execuções fiscais é o do art. 40 da LEF (lei específica).",
          "pegadinha": "A armadilha é esquecer de somar o 'ano de suspensão' antes de começar a contar os 5 anos de prescrição intercorrente — quem conta direto da citação por edital erra a conta e acha que já prescreveu.",
          "regraMemoria": "Execução fiscal sem bens: primeiro 1 ano de 'pausa' (suspensão), só depois começa o cronômetro de 5 anos da prescrição intercorrente (Súmula 314 STJ)."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 169 do CTN fixa em 2 anos o prazo para a ação anulatória da decisão administrativa que denega a restituição de tributo. Além disso, pela Súmula 498 do STJ, não incide Imposto de Renda sobre indenização por dano moral, por não representar acréscimo patrimonial (renda), mas mera recomposição de um prejuízo.",
          "explicacaoErradas": "A erra porque contraria a Súmula 498 STJ, que afasta o IR sobre dano moral. C erra porque o acesso à Justiça independe de esgotamento da via administrativa (art. 5º, XXXV, CF). D erra porque a exigência de depósito prévio para recorrer administrativamente é inconstitucional (Súmula Vinculante 21, STF).",
          "pegadinha": "O enunciado tenta passar a ideia de que, por ter origem trabalhista, a verba vira 'quase salário' — mas indenização por dano moral não é remuneração por trabalho, é reparação de dano, e por isso não é renda tributável.",
          "regraMemoria": "Dano moral não é lucro, é remédio para uma dor — remédio não é renda, não paga Imposto de Renda (Súmula 498 STJ). E para brigar contra a negativa: 2 anos, art. 169 CTN."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "A CIDE-Combustíveis é exceção expressa à legalidade tributária estrita: o art. 177, §4º, I, 'b', CF permite que o Poder Executivo reduza e restabeleça sua alíquota por ato infralegal (decreto), sem necessidade de lei.",
          "explicacaoErradas": "B erra porque a redução por decreto é exatamente o que a CF autoriza, não havendo inconstitucionalidade. A e D erram porque tratam o restabelecimento como se violasse legalidade ou anterioridade anual — mas a CIDE-Combustíveis não se sujeita à anterioridade anual (só à noventena), e o intervalo entre 1º/fev e 3/jun de 2025 já ultrapassa os 90 dias exigidos.",
          "pegadinha": "A pegadinha é achar que 'restabelecer' equivale a 'criar' ou 'majorar' e por isso exigiria lei — mas a CF trata reduzir e restabelecer como a mesma prerrogativa do Executivo, sem essa distinção.",
          "regraMemoria": "CIDE-Combustíveis é a 'exceção camaleão': o Executivo sobe e desce a alíquota por decreto (dentro do teto legal), só respeitando os 90 dias — art. 177, §4º, CF."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "A fixação da data (prazo) de pagamento de tributo não está entre as matérias sob reserva de lei do art. 97 do CTN, sendo entendimento pacífico do STF que pode ser disciplinada por ato infralegal (decreto), mesmo sem previsão expressa na lei instituidora.",
          "explicacaoErradas": "A e B erram por tratar o prazo de vencimento como matéria de lei ou por invocar prazo do CTN que não existe para esse fim — o CTN não fixa um prazo geral de 30 dias para pagamento de taxas. C erra ao qualificar mal a taxa: fiscalização de atividade é sim taxa de polícia, mas isso não a torna inconstituível, pois cabe ao Município fiscalizar atividades em seu território.",
          "pegadinha": "A armadilha é achar que 'tudo em matéria tributária' precisa de lei — mas o rol do art. 97 CTN é taxativo, e data de vencimento não está nele.",
          "regraMemoria": "Data de pagamento de tributo não é 'DNA do tributo' (fato gerador, alíquota, base de cálculo) — pode vir de decreto, mesmo sem a lei autorizar expressamente."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Na Lei 14.133/2021, com o julgamento das propostas antes da habilitação, os recursos contra o julgamento e contra a habilitação/inabilitação são processados em fase recursal única: a intenção de recorrer deve ser manifestada de imediato, mas o prazo para as razões só se inicia com a intimação ou lavratura da ata de habilitação/inabilitação.",
          "explicacaoErradas": "A erra porque há sim previsão de recurso contra o julgamento das propostas. B erra porque a manifestação da intenção de recorrer deve ser imediata, não pode aguardar o fim de todo o certame. C erra ao falar em 'pedido de reconsideração' com efeito suspensivo automático — o regime é de recurso hierárquico em fase única, não de reconsideração.",
          "pegadinha": "A pegadinha é achar que, por já ter passado o julgamento das propostas, o recurso contra ele deve ser processado 'na hora' — na Nova Lei de Licitações, ele espera a habilitação para ser julgado junto, em fase única.",
          "regraMemoria": "Lei 14.133: reclama na hora (intenção), mas a discussão só rola depois, junto com a habilitação — recurso 'tudo de uma vez' em fase única."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Pelo art. 11 do Decreto-Lei 3.365/1941, quando o autor da ação de desapropriação não é a União, a ação deve ser proposta no foro da situação do bem — no caso, a Comarca do Município Sigma, onde está o imóvel de João.",
          "explicacaoErradas": "B erra porque o ingresso de autoridades para levantamentos/estudos no imóvel dispensa autorização judicial (art. 7º do DL 3.365/41), bastando eventual auxílio policial em caso de oposição. C erra porque o valor do depósito para imissão provisória segue critérios legais objetivos (não o que o expropriado 'entender justo'). D erra porque a contestação na desapropriação só pode versar sobre vício processual ou preço (art. 20 DL 3.365/41), não sobre o mérito da utilidade pública.",
          "pegadinha": "A pegadinha é achar que a regra do foro da capital vale sempre — ela só se aplica quando a União é a autora; sendo outro ente (Estado, Município), o foro é o da situação do bem.",
          "regraMemoria": "União desapropriando = pode ir na capital; qualquer outro ente = tem que ir onde o imóvel está (art. 11, DL 3.365/41)."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "A Lei 13.848/2019 exige divulgação prévia e gravação das reuniões deliberativas do Conselho Diretor, salvo quando o objeto envolver documentos/processos sigilosos ou matérias de natureza administrativa — exatamente a hipótese do caso, o que afasta qualquer irregularidade.",
          "explicacaoErradas": "A e C erram porque tratam a divulgação/gravação como obrigatória mesmo diante de sigilo e matéria administrativa, ignorando a exceção legal. D erra porque, não havendo sequer irregularidade, não há que se falar em demonstração de prejuízo para anulação.",
          "pegadinha": "A pegadinha é assumir que toda reunião de agência reguladora precisa ser pública e gravada — a própria lei prevê exceções para sigilo e assuntos administrativos internos.",
          "regraMemoria": "Agência reguladora: reunião é regra pública e gravada — exceto quando o assunto é sigiloso ou 'coisa de escritório' (administrativa); aí pode ser fechada."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 17, §10, da Lei 8.429/1992 estabelece que da decisão que rejeita as preliminares e ordena o prosseguimento da ação de improbidade cabe agravo de instrumento.",
          "explicacaoErradas": "A erra porque apelação é cabível contra sentença, não contra decisão interlocutória que apenas afasta preliminares. C e D erram ao negar recurso próprio, quando a lei prevê expressamente o agravo de instrumento para essa hipótese.",
          "pegadinha": "A pegadinha é aplicar a lógica geral do CPC (agravo só nas hipóteses do art. 1.015) — mas a Lei de Improbidade tem regra especial e específica prevendo agravo de instrumento para essa decisão.",
          "regraMemoria": "Improbidade: rejeitou preliminar e mandou o processo seguir? Agravo de instrumento, sempre (art. 17, §10, Lei 8.429/92)."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O art. 13, II, da Lei 9.784/1999 veda expressamente a delegação da competência para decidir recursos administrativos, por ser matéria indelegável.",
          "explicacaoErradas": "B erra porque a delegação é sempre revogável a qualquer tempo pela autoridade delegante, não sendo irrevogável nem exigindo avocação para cessar. C erra porque a delegação pode ocorrer mesmo entre órgãos sem subordinação hierárquica, desde que inexista impedimento legal. D erra ao inverter a regra: as decisões por delegação devem mencionar essa condição e são consideradas editadas pelo delegado, não pelo delegante.",
          "pegadinha": "A pegadinha é achar que qualquer competência pode ser delegada 'com detalhamento formal suficiente' — a lei blinda especificamente a decisão de recursos administrativos, edição de atos normativos e matérias de competência exclusiva.",
          "regraMemoria": "Delegação tem 3 proibições de ouro: ato normativo, recurso administrativo e competência exclusiva — nenhuma dessas três sai da mão do titular (art. 13, Lei 9.784/99)."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "A cobrança pelo uso de recursos hídricos (Lei 9.433/1997) se fundamenta no princípio do usuário-pagador: quem utiliza um recurso natural escasso deve remunerar a coletividade por esse uso, independentemente de causar dano ou poluição.",
          "explicacaoErradas": "A e D erram porque condicionam a cobrança à existência de dano ambiental efetivo, confundindo usuário-pagador com responsabilização por dano (que envolveria prevenção/precaução e poluidor-pagador). B erra ao vincular a cobrança à ideia de 'antecipação por dano', quando na verdade é preço pelo uso do bem, não indenização.",
          "pegadinha": "A pegadinha clássica é confundir usuário-pagador (paga pelo uso, mesmo sem poluir) com poluidor-pagador (paga por poluir/degradar) — são princípios distintos e a questão testa exatamente essa distinção.",
          "regraMemoria": "Usou água, paga — mesmo sem sujar nada: usuário-pagador é preço de usar o recurso, não multa por poluir."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "A APA pode ser constituída por terras públicas ou privadas (art. 15, §1º, Lei 9.985/2000), e, sendo o imóvel de Adélia particular, cabe a ela, como proprietária, estabelecer as condições de pesquisa e visitação em sua propriedade, respeitadas as exigências e restrições legais (art. 15, §2º).",
          "explicacaoErradas": "B erra porque a criação de unidade de conservação, inclusive APA, pode se dar por decreto, não exigindo lei em sentido estrito. C erra porque a existência de propriedade privada dentro de APA não implica desapropriação automática, apenas restrições de uso. D erra porque a APA integra o grupo de unidades de USO SUSTENTÁVEL, e não de proteção integral.",
          "pegadinha": "A pegadinha é achar que 'unidade de conservação' sempre significa desapropriação ou proibição total de uso — a APA é justamente a categoria mais branda, compatível com propriedade e uso privado continuados.",
          "regraMemoria": "APA = 'unidade de conservação com dono': terra pode ser privada, e quem manda nas regras de visita/pesquisa ali dentro é o próprio proprietário, dentro da lei."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O casamento é causa de emancipação legal (art. 5º, parágrafo único, II, CC), tornando o menor plenamente capaz de forma irrevogável, mesmo que o casamento venha depois a se dissolver. Clarice, casada com autorização dos pais, já é civilmente capaz.",
          "explicacaoErradas": "B erra porque a causa de emancipação do CC é a COLAÇÃO DE GRAU em curso superior (conclusão), não a mera matrícula/início do curso — Maria, que só começou a faculdade, continua relativamente incapaz. C e D erram por tratar as duas irmãs da mesma forma, ignorando que Clarice já foi emancipada pelo casamento.",
          "pegadinha": "A pegadinha típica troca 'iniciar' por 'concluir' o curso superior — só formatura emancipa, matrícula não.",
          "regraMemoria": "Casou, virou capaz para sempre. Só matriculou na faculdade, continua incapaz — capacidade por estudo só vem com o diploma na mão."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Pelo art. 1.641, II, do Código Civil, é obrigatório o regime de separação de bens para a pessoa maior de 70 anos. Joaquim, com 71 anos, se enquadra diretamente nessa regra, sem margem de escolha de outro regime.",
          "explicacaoErradas": "A e B erram porque tratam como escolha livre ('autonomia' ou 'convencional') o que a lei impõe de forma cogente pela idade. C erra ao sugerir comunhão parcial, que é justamente incompatível com a exigência legal de separação obrigatória nesse caso.",
          "pegadinha": "A pegadinha é achar que a comunhão parcial já resolveria o problema do inventário pendente (protegendo os bens não partilhados) — mas a idade de Joaquim (>70) já impõe, por si só, a separação obrigatória, independentemente da situação do inventário.",
          "regraMemoria": "Passou dos 70 e vai casar de novo? Separação obrigatória, sem escolha — art. 1.641, II, CC ('regime made in cartório, não na vontade')."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 1.815, §2º, do Código Civil dá ao Ministério Público legitimidade concorrente para requerer a exclusão por indignidade quando a vítima foi morta dolosamente por descendente/ascendente/cônjuge/irmão e o interessado no reconhecimento da indignidade é incapaz — exatamente o caso de Mateus, menor, prejudicado pela recusa do tutor.",
          "explicacaoErradas": "A erra porque não é preciso esperar a maioridade de Mateus para agir — a lei prevê legitimado alternativo justamente para essa lacuna. C e D erram ao tornar a atuação do tutor Ricardo condição única e insuperável, ignorando a legitimidade concorrente do MP para suprir a omissão ou recusa do responsável legal.",
          "pegadinha": "A pegadinha é achar que a recusa do tutor 'trava' definitivamente a ação — a lei previu justamente esse cenário (tutor omisso/conivente) e deu ao MP poder de agir para proteger o incapaz.",
          "regraMemoria": "Herdeiro incapaz sem quem o defenda contra o indigno? Entra o Ministério Público — a lei não deixa a vítima menor na mão do tutor relapso."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Imóvel de valor superior a 30 salários mínimos exige escritura pública como forma essencial (art. 108, CC); sem ela, o negócio é nulo por vício de forma (art. 166, IV, CC). Como o instrumento particular reúne os elementos de um contrato preliminar, o negócio nulo pode ser convertido em promessa de compra e venda, que não exige escritura pública (conversão substancial, art. 170, CC).",
          "explicacaoErradas": "A erra porque a presença de testemunhas não substitui a exigência legal de escritura pública para esse valor de imóvel. C erra porque o vício é de NULIDADE, não anulabilidade, logo não há prazo decadencial de 2 anos para arguí-la. D erra porque reconhecimento de firma não é escritura pública e não sana a nulidade por vício de forma essencial.",
          "pegadinha": "A pegadinha é confundir nulidade com anulabilidade: como o vício é de forma essencial (não uma simples irregularidade sanável), o ato é nulo de pleno direito, não convalesce nem tem prazo decadencial curto para ser reconhecido.",
          "regraMemoria": "Imóvel caro (acima de 30 salários mínimos) sem escritura pública = negócio nulo, não anulável — mas pode 'baixar de categoria' e virar promessa de compra e venda (conversão do art. 170, CC)."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "A preempção convencional (arts. 513 e 518 do CC) gera obrigação pessoal de Clara para com Eduardo, e não direito real oponível a terceiros. Descumprida a preferência, a sanção legal é perdas e danos contra quem vendeu sem notificar, não a anulação do negócio com Flávio.",
          "explicacaoErradas": "Não há previsão legal de reaver o imóvel do terceiro adquirente (B), nem a preferência depende do conhecimento do comprador sobre a cláusula (C), pois ela obriga apenas Clara. Também não existe prazo de 180 dias para reivindicar o bem — esse prazo (60 dias para imóveis) é para o exercício da preferência após notificação, não para buscar o bem alienado (D).",
          "pegadinha": "Parece caso de retrovenda ou direito real com efeito de sequela, mas preempção do CC é só obrigação pessoal entre vendedor e comprador original.",
          "regraMemoria": "Preempção fere quem prometeu, não quem comprou depois: sem notificação, só cabe indenização, nunca tomar o imóvel de volta."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "A interdição da mandante é causa de extinção do mandato (art. 682, II, CC), pois a incapacidade superveniente de uma das partes cessa a representação. A procuração deixa de ser eficaz a partir daí, mesmo tendo prazo determinado e forma pública.",
          "explicacaoErradas": "Validade formal da outorga (instrumento público, boa saúde à época) não garante eficácia atual — o mandato já se extinguiu (afastando C e D). O problema central não é conflito de interesses entre mãe e filho, mas a própria extinção do vínculo representativo (afastando A).",
          "pegadinha": "A questão tenta te prender no detalhe do 'prazo determinado' e na formalidade da procuração, escondendo que a extinção por interdição é automática e independe de prazo.",
          "regraMemoria": "Interdição do mandante mata o mandato na hora — prazo bonito na procuração não ressuscita representação de quem virou incapaz."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O art. 122 do ECA só permite internação em caso de ato infracional com grave ameaça ou violência à pessoa, reiteração no cometimento de infrações graves, ou descumprimento reiterado e injustificável de medida anteriormente imposta. Furto sem violência e primeira passagem não preenchem nenhuma hipótese.",
          "explicacaoErradas": "Internação (B) e semiliberdade (C) violam a excepcionalidade da privação de liberdade no ECA, que exige os requisitos do art. 122. Advertência (A) é perfeitamente cabível para ato infracional leve e réu primário — não há vedação legal a isso.",
          "pegadinha": "O valor alto da picanha (R$ 2.000,00) tenta induzir à ideia de 'crime grave que merece internação', mas o critério legal é a natureza do ato (violência/grave ameaça), não o valor subtraído.",
          "regraMemoria": "Internação de adolescente só com violência, grave ameaça ou reincidência grave — furto sem arma nunca tranca ninguém."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O art. 67, I, do ECA proíbe expressamente o trabalho noturno do adolescente realizado entre 22h de um dia e 5h do dia seguinte, independentemente da idade dentro da faixa de 14 a 18 anos incompletos ou de não prejudicar os estudos.",
          "explicacaoErradas": "Ter 17 anos não afasta a proibição, pois a vedação vale para todo menor de 18 anos, sem margem de 'quase maioridade' (afastando A). A proibição não é de todo trabalho, apenas do noturno — o adolescente pode ser aprendiz/trabalhador em outros horários (afastando B). E não prejudicar a escola não é exceção que libere o horário vedado (afastando D).",
          "pegadinha": "A pergunta tenta te fazer confundir a vedação do ECA (22h às 5h) com a regra da CLT sobre jornada de adulto (22h às 5h também, mas para adulto é só adicional noturno, não proibição total).",
          "regraMemoria": "Menor de 18 nunca trabalha da meia-noite ao amanhecer — 22h às 5h é linha vermelha do ECA, sem exceção por idade ou boas notas."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Na conciliação por superendividamento (Lei 14.181/2021, art. 104-A do CDC), a ausência injustificada do credor à audiência conciliatória sujeita seu crédito a consequências processuais, entre elas a interrupção dos encargos moratórios enquanto perdurar a repactuação, como forma de estimular a participação do credor no procedimento.",
          "explicacaoErradas": "A ausência não antecipa o vencimento da dívida (A) nem autoriza cobrança individual imediata (C), pois o processo de repactuação segue coletivo e suspende as execuções individuais. Também não há submissão automática do credor faltante às mesmas condições aceitas pelos presentes (D) — o resultado é diferenciado, não idêntico.",
          "pegadinha": "A pegadinha é achar que 'não comparecer' é neutro para o credor ausente — na repactuação por superendividamento, a ausência tem consequência prática (perda de encargos), não é like faltar sem custo.",
          "regraMemoria": "Credor que falta na audiência do superendividado perde os juros da demora — ausência aqui sai caro."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Cartão de crédito e conta-corrente são contratos distintos, ainda que com a mesma instituição financeira. O débito automático de fatura em conta-corrente só é lícito se houver autorização expressa, clara e destacada no contrato, em respeito ao dever de informação do art. 46 do CDC.",
          "explicacaoErradas": "Não existe regra que autorize débito automático sem previsão contratual, seja do valor integral (A e C) ou do mínimo (B), mesmo havendo saldo em conta ou relação única com o banco. A ausência de cláusula expressa torna a prática abusiva por violar o dever de informação e transparência do CDC.",
          "pegadinha": "A questão tenta confundir 'mesma instituição financeira' com 'mesma relação jurídica' — são contratos autônomos mesmo sendo o mesmo banco.",
          "regraMemoria": "Cartão de crédito e conta-corrente são como irmãos gêmeos que moram em casas separadas: um só invade o dinheiro do outro se isso estiver escrito no contrato, bem grande e bem claro."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O prazo prescricional da ação cambial contra o emitente de nota promissória é de 3 anos do vencimento (art. 70 c/c art. 77 da LUG). O protesto cambial interrompe a prescrição (art. 202, III, CC), e como ocorreu antes de completados os 3 anos, a prescrição recomeçou a correr, permitindo ainda a execução.",
          "explicacaoErradas": "O prazo não é de 5 anos (B), e sim 3. O protesto contra o emitente (obrigado principal) é facultativo, mas isso não significa que ele seja irrelevante — quando realizado, interrompe a prescrição (afastando C). Também não há perda do direito de ação contra o emitente por apresentação tardia; essa consequência (perda do direito de regresso) atinge apenas endossantes, não o emitente (afastando D).",
          "pegadinha": "A pegadinha é achar que, por o protesto ser facultativo para cobrar do emitente, ele não produziria nenhum efeito jurídico — mas mesmo facultativo, quando feito, interrompe a prescrição.",
          "regraMemoria": "Facultativo não é inútil: protesto contra o emitente pode não ser obrigatório, mas, se feito, reinicia o relógio da prescrição de 3 anos."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Pelo art. 98, parágrafo único, da Lei 11.101/2005, o devedor elide a falência depositando o valor total do crédito, acrescido de correção monetária, juros e honorários advocatícios — não apenas o valor original da dívida.",
          "explicacaoErradas": "O prazo para contestar/depositar é de 10 dias da citação, não 15 (afastando A). Não há suspensão do processo por 30 dias como efeito do depósito elisivo (C), e a elisão exige depósito em dinheiro do valor integral, não caução real ou fidejussória em 5 dias (D).",
          "pegadinha": "O candidato tende a lembrar só do 'valor cobrado' e esquecer que a elisão exige o pacote completo: principal + correção + juros + honorários.",
          "regraMemoria": "Elidir falência é pagar tudo, não só a dívida seca: principal, correção, juros e honorários juntos, em dinheiro."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O art. 124, V, da Lei de Propriedade Industrial veda o registro de marca que reproduza ou imite elemento característico de título de estabelecimento de terceiro, quando capaz de causar confusão ou associação indevida entre os sinais.",
          "explicacaoErradas": "Não é verdade que título de estabelecimento anterior seja irrelevante para o registro de marca (A e B) — a LPI protege justamente contra essa colisão de sinais distintivos. A proteção do título de estabelecimento decorre do uso efetivo, não de registro na Junta Comercial (que registra apenas o nome empresarial), o que afasta a fundamentação de D.",
          "pegadinha": "A pegadinha é confundir nome empresarial (registrado na Junta) com título de estabelecimento (protegido pelo uso) — são institutos diferentes de propriedade industrial.",
          "regraMemoria": "Marca nova não pode copiar nome de fachada antigo que já confunde o público — quem usou primeiro, mesmo sem registro, barra o INPI."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O art. 966, caput, do Código Civil define empresário como quem exerce profissionalmente atividade econômica organizada para a produção ou circulação de bens ou de serviços.",
          "explicacaoErradas": "Prestação de serviços está incluída no conceito, não excluída (afastando A). Profissão intelectual pode caracterizar empresário quando constituir elemento de empresa, conforme exceção do parágrafo único do art. 966 (afastando a regra absoluta de B). A inscrição na Junta Comercial é obrigação decorrente da condição de empresário, de natureza declaratória, não requisito constitutivo (afastando D).",
          "pegadinha": "A pegadinha clássica é achar que sem registro na Junta Comercial não existe empresário — mas o registro é declaratório, e a atividade em si já caracteriza a condição.",
          "regraMemoria": "Empresário nasce da atividade organizada, não do carimbo da Junta — registro só declara o que a atividade já criou."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 512 do CPC permite que a liquidação de sentença seja requerida na pendência de recurso, processando-se em autos apartados no juízo de origem, independentemente do julgamento da apelação.",
          "explicacaoErradas": "A pendência da apelação não impede a liquidação (afastando A). A legitimidade para requerer liquidação não é exclusiva do credor de forma absoluta a ponto de negar interesse a discussões pertinentes (afastando C, cujo fundamento de ilegitimidade do réu é o ponto central errado). A liquidação não permite rediscutir a obrigação ou modificar a sentença — isso é vedado pelo art. 509, §4º, do CPC (afastando D).",
          "pegadinha": "A pegadinha é achar que apelação pendente 'trava' tudo o que depende da sentença — mas a liquidação do capítulo ilíquido pode correr em paralelo, em autos apartados.",
          "regraMemoria": "Recurso pendente não paralisa liquidação: art. 512 do CPC deixa rodar em autos apartados enquanto o tribunal não decide."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "Pelo art. 526, §§1º e 2º, do CPC, o devedor pode depositar espontaneamente o valor que entende devido antes de intimado para cumprir a sentença; se o credor não impugnar o valor no prazo, presume-se aceito como quitação integral da obrigação.",
          "explicacaoErradas": "A multa e os honorários de 10% do art. 523, §1º, do CPC pressupõem intimação regular para cumprimento voluntário não atendida, o que não é o caso de depósito espontâneo (afastando A). O levantamento não depende necessariamente de decisão prévia sobre suficiência quando não há impugnação (afastando B). O cumprimento pode ser iniciado por iniciativa do próprio devedor, sem necessidade de manifestação prévia do credor (afastando D).",
          "pegadinha": "A armadilha é achar que valor menor que a condenação nunca poderia quitar a obrigação — mas a inércia do credor em impugnar o depósito espontâneo tem efeito de aceitação tácita.",
          "regraMemoria": "Depósito espontâneo sem impugnação em 15 dias vira quitação — quem não reclama, aceita."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "Contra decisão de Turma Recursal de Juizado Especial cabe recurso extraordinário ao STF quando há questão constitucional pré-questionada (Súmula 640/STF), já que compete ao STF a última palavra em matéria constitucional mesmo nesses órgãos.",
          "explicacaoErradas": "Existe recurso cabível, o que afasta A. Embargos de declaração servem para sanar omissão, contradição, obscuridade ou erro material, não erro de interpretação de norma, o que a questão exclui expressamente (afastando B). Recurso especial não cabe contra decisão de Turma Recursal de Juizado Especial, conforme Súmula 203/STJ, o que afasta D mesmo havendo também violação de norma federal infraconstitucional.",
          "pegadinha": "A pegadinha é lembrar que existem REsp e RE 'para cada tipo de violação' e esquecer que a Súmula 203/STJ bloqueia o REsp especificamente contra Turma Recursal de Juizado Especial.",
          "regraMemoria": "Turma Recursal de Juizado só dá acesso ao STF, nunca ao STJ — Súmula 203 fecha a porta do recurso especial."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O art. 997, §1º, do CPC permite apelação adesiva no mesmo prazo das contrarrazões, para a parte que não recorreu de forma independente. Pelo §2º, III, do mesmo artigo, o recurso adesivo não será conhecido se o recurso principal for considerado inadmissível, dada sua natureza acessória.",
          "explicacaoErradas": "O prazo é de 15 dias úteis, não corridos (afastando A). Contrarrazões e apelação adesiva são apresentadas no mesmo prazo, simultaneamente, e não em prazos sucessivos de 15 + 15 dias (afastando B). O recurso adesivo é expressamente admitido em apelação pelo art. 997, caput, do CPC (afastando D).",
          "pegadinha": "A pegadinha é esquecer a acessoriedade do recurso adesivo: ele 'pega carona' no principal e cai junto se o principal for inadmitido.",
          "regraMemoria": "Recurso adesivo é carona: mesmo prazo das contrarrazões e mesmo destino do recurso principal — se este cai, aquele cai junto."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Pelo art. 550, §3º, do CPC, quando o réu apresenta as contas junto com a contestação, o juiz deve intimar o autor para se manifestar sobre elas no prazo de 15 dias, garantindo o contraditório antes de qualquer decisão sobre o mérito.",
          "explicacaoErradas": "Não cabe julgamento antecipado impondo o dever de prestar contas, pois as contas já foram apresentadas — falta o objeto dessa determinação (afastando B). Há interesse de agir de João em verificar a regularidade das contas prestadas extrajudicialmente, o que afasta a extinção sem mérito (C). A audiência de instrução não é etapa necessária nesse momento processual, que depende primeiro da manifestação do autor sobre as contas (afastando D).",
          "pegadinha": "A pegadinha é achar que, tendo o réu já 'prestado as contas', o processo acaba automaticamente — mas o autor ainda precisa ter chance de contestar o conteúdo delas.",
          "regraMemoria": "Contas juntadas na contestação não encerram nada sozinhas — o autor sempre ganha 15 dias para dizer se concorda."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 5º, §3º, da Lei 7.347/85 determina que, em caso de abandono da ação por associação legitimada, o Ministério Público ou outro legitimado assumirá a titularidade ativa, preservando o interesse coletivo em jogo.",
          "explicacaoErradas": "O Poder Público pode se habilitar como litisconsorte nas ações coletivas, conforme art. 5º, §2º, da mesma lei, o que afasta A. O abandono não gera extinção automática sem mérito, já que a lei prioriza a substituição processual à extinção (afastando C). O requisito de pré-constituição de um ano pode ser dispensado pelo juiz havendo manifesto interesse social, conforme art. 5º, §4º (afastando D).",
          "pegadinha": "A pegadinha é aplicar a lógica do processo individual (abandono gera extinção) a um direito coletivo, onde o interesse social não pode ficar refém da inércia de um autor específico.",
          "regraMemoria": "Interesse coletivo não morre com o autor: se a associação abandona, MP ou outro legitimado assume o barco."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Como o crime foi interrompido por terceiros antes da consumação, configura-se tentativa de estupro, cabendo à defesa a causa de diminuição de pena do art. 14, parágrafo único, do CP.",
          "explicacaoErradas": "Não há retratação de representação a alegar, pois estupro é crime de ação penal pública incondicionada desde a Lei 12.015/2009 (afastando A). Não há exercício regular de direito em constranger o cônjuge à força — isso é crime, não excludente de ilicitude (afastando C). Perdão do ofendido só extingue punibilidade em ação penal privada, não na pública incondicionada, então a reconciliação conjugal é juridicamente irrelevante para a persecução penal (afastando D).",
          "pegadinha": "A pegadinha central é achar que existir casamento e reconciliação afeta a ação penal — desde 2009 estupro não depende de representação nem de perdão do cônjuge.",
          "regraMemoria": "Estupro é ação pública incondicionada: casar de novo com a vítima não apaga o processo, só a tentativa reduz a pena."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Hermenegildo tinha meios de continuar atirando (16 munições restantes) e parou por decisão própria, configurando desistência voluntária (art. 15, CP), que faz o agente responder apenas pelos atos já praticados — no caso, lesão corporal.",
          "explicacaoErradas": "Não houve arrependimento eficaz (A), pois este pressupõe execução completa e impedimento posterior do resultado, o que não ocorreu aqui — ele simplesmente parou de agir. Não é crime impossível (B), já que o meio (arma carregada) era plenamente eficaz. 'Tentativa imperfeita' (C) é só classificação doutrinária, não excludente, e não afasta a incidência da desistência voluntária.",
          "pegadinha": "A pegadinha é achar que parar por emoção/nostalgia não conta como 'voluntário' — mas voluntariedade não exige motivo racional, só que a interrupção parta do próprio agente, não de fator externo.",
          "regraMemoria": "Tinha bala no pente e parou por vontade própria: isso é desistência voluntária — só responde pelo estrago já feito."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "José e Luciano contribuíram de forma consciente e relevante para o crime (dirigindo os veículos até o local, cientes do plano), sem praticar o núcleo do tipo, o que caracteriza participação no homicídio doloso consumado, nos termos do art. 29 do CP.",
          "explicacaoErradas": "Não há autonomia de crime de roubo, pois o assalto era mera simulação para disfarçar o plano real de matar, o que afasta B e C. A ausência de domínio funcional do fato não exclui o concurso de agentes, pois a participação (diferente da coautoria) não exige domínio do fato, apenas contribuição consciente para o resultado, o que afasta D.",
          "pegadinha": "A pegadinha é achar que quem 'não pegou em arma' está fora do crime — mas contribuir cientemente, mesmo sem executar o núcleo do tipo, já é participação.",
          "regraMemoria": "Motorista que sabe do plano e leva o atirador até o alvo não é passageiro inocente — é partícipe do homicídio."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Paulo não queria diretamente matar, mas assumiu o risco de produzir a morte ao atirar contra local que sabia lotado — configura dolo eventual (art. 18, I, 2ª parte, CP), e o crime se consumou com a morte do padre.",
          "explicacaoErradas": "Não é culpa consciente (B), pois esta exige que o agente confiasse sinceramente na não ocorrência do resultado, o que não é o caso de quem atira várias vezes contra multidão. Não é tentativa (C), pois houve consumação com a morte. Não é preterdolo (D), pois este exige dolo no crime antecedente e culpa apenas no resultado mais grave, mas aqui há dolo (eventual) quanto à própria morte.",
          "pegadinha": "A pegadinha é confundir 'não queria matar aquela pessoa específica' com 'não tinha dolo de matar' — no dolo eventual não importa quem é a vítima, basta aceitar o risco de matar alguém ali.",
          "regraMemoria": "Atirar pra multidão aceitando o risco de matar é dolo eventual, não importa quem cai — não precisa mirar em alguém específico para responder por homicídio doloso."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 126, §2º, da LEP autoriza expressamente a remição pelo estudo por metodologia de ensino a distância, inclusive em cursos profissionalizantes, sem exigir modalidade presencial.",
          "explicacaoErradas": "A remição pelo estudo não é 1 dia por 1 dia (isso vale só para o trabalho); a razão correta é 1 dia de pena a cada 12h de frequência escolar, divididas em no mínimo 3 dias. A falta grave revoga só até 1/3 do tempo remido (art. 127 LEP), nunca a integralidade. Detração e remição são institutos diferentes, não comparáveis em 'vantagem'.",
          "pegadinha": "A armadilha é achar que EAD não conta para remição, ou confundir a proporção do estudo (12h) com a do trabalho (1 dia = 1 dia).",
          "regraMemoria": "Trabalho remi 1x1; estudo remi 1 dia a cada 12h — e EAD conta igual, inclusive curso profissionalizante."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O art. 33 da Lei 11.343/2006 é tipo misto alternativo (crime de ação múltipla): praticar vários verbos do mesmo tipo no mesmo contexto fático configura crime único, pelo princípio da alternatividade.",
          "explicacaoErradas": "Não há concurso de crimes (formal ou continuidade), pois as condutas integram um só tipo penal e um só contexto de tráfico; também não é caso de porte para consumo pessoal, já que há inequívoca finalidade de mercancia (cultivo, fabricação, depósito e venda).",
          "pegadinha": "A pegadinha é contar cada verbo (plantar, fabricar, guardar, vender) como crime autônomo e cair em concurso formal ou continuidade, quando na verdade é crime único.",
          "regraMemoria": "Tipo misto alternativo: vários verbos, um só crime — 'vários atos, uma só dança'."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O art. 4º, §16, da Lei 12.850/2013 veda que qualquer decisão, inclusive o recebimento da denúncia, se funde exclusivamente nas declarações do colaborador sem elementos de corroboração — logo, falta justa causa para a ação penal.",
          "explicacaoErradas": "O corréu delatado não participa das tratativas do acordo de colaboração (o sigilo é da essência do instituto, sem violar contraditório, que é apenas diferido). O prazo de resposta à acusação corre da citação de cada réu individualmente, não é prazo comum contado a partir do último citado como no processo civil.",
          "pegadinha": "A pegadinha é focar no detalhe das datas de citação, quando o ponto central é a fragilidade probatória de uma denúncia lastreada só na delação.",
          "regraMemoria": "Delação sozinha não embasa denúncia nem condena — precisa de prova de corroboração."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Denunciada por furto (sem violência ou grave ameaça) e condenada por roubo com base em fato não descrito na denúncia, sem aditamento do MP, há violação do princípio da correlação entre acusação e sentença (mutatio libelli, art. 384 CPP).",
          "explicacaoErradas": "Não há bis in idem (uma única condenação); a prova testemunhal é meio de prova idôneo para condenar; o reconhecimento pessoal da vítima não é condição obrigatória de validade da condenação, que pode se apoiar em outras provas.",
          "pegadinha": "A armadilha é focar na ausência de reconhecimento formal pela vítima, quando o vício real é condenar por fato/elementar não imputado na denúncia.",
          "regraMemoria": "Sem aditamento do MP, o juiz não pode 'trocar' o fato da denúncia — furto na peça não vira roubo na sentença."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "A Súmula Vinculante 14 do STF garante ao advogado regularmente constituído acesso aos elementos de prova já documentados no inquérito, sobretudo quando não há mais diligência pendente que justifique o sigilo.",
          "explicacaoErradas": "O acesso não é absoluto em qualquer hipótese (diligências em andamento continuam sigilosas); a publicidade plena não se aplica ao inquérito, que é procedimento inquisitivo; in dubio pro reo não guarda relação com acesso a autos.",
          "pegadinha": "A pegadinha é confundir publicidade processual da fase judicial com o direito mais restrito de acesso do defensor ao inquérito, previsto na SV 14.",
          "regraMemoria": "SV 14: o que já está documentado nos autos, o advogado vê — o que ainda está por vir, não."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Cada ofendido tem prazo decadencial próprio e autônomo para oferecer queixa; a indivisibilidade da ação penal privada refere-se aos coautores do crime, não à pluralidade de vítimas, de modo que a decadência de Carlos não contamina o direito de Robson.",
          "explicacaoErradas": "Decadência extingue a punibilidade, não é causa de diminuição de pena; não existe 'interrupção' do prazo decadencial de um ofendido pela ação do outro; o princípio da eventualidade não tem pertinência com o caso.",
          "pegadinha": "A pegadinha é confundir a indivisibilidade da ação penal privada (entre autores do crime) com uma suposta indivisibilidade entre vítimas distintas — são institutos diferentes.",
          "regraMemoria": "Cada vítima tem seu próprio relógio de decadência — o atraso de uma não trava o prazo da outra."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "No JECRIM, contra a decisão que rejeita a queixa-crime (decisão terminativa equiparada a sentença), cabe apelação, nos termos do art. 82 da Lei 9.099/95, pois o rito sumaríssimo não admite recurso em sentido estrito.",
          "explicacaoErradas": "Recurso em sentido estrito é do procedimento comum do CPP, não do JECRIM; recurso inominado é típico dos Juizados cíveis; carta testemunhável serve para impugnar decisão que nega seguimento a recurso, não a decisão terminativa em si.",
          "pegadinha": "A armadilha é aplicar automaticamente o RESE do CPP comum (cabível contra a rejeição de denúncia) ao rito sumaríssimo, que segue regra recursal própria.",
          "regraMemoria": "No Juizado Criminal só existe um recurso de mérito: apelação — esqueça o RESE."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Simulacro de arma não é arma de fogo apta a lesar, não configurando o tráfico internacional de arma (art. 18 do Estatuto do Desarmamento); por ser mercadoria de importação proibida, desclassifica-se para contrabando (art. 334-A CP, pena de 2 a 5 anos), pena que também viabiliza a liberdade provisória.",
          "explicacaoErradas": "Não é caso de crime impossível ou atipicidade total, pois subsiste o contrabando; a competência é da Justiça Federal mesmo assim, por se tratar de importação internacional de mercadoria proibida; não houve mera tentativa, já que trazer consigo a mercadoria já consuma o contrabando; antecedentes e ausência de violência, isoladamente, não geram prisão domiciliar automática sem os requisitos do art. 318 CPP.",
          "pegadinha": "A pegadinha é tratar o simulacro como arma de fogo real e manter a capitulação gravíssima do art. 18, ignorando que ele não tem potencial lesivo.",
          "regraMemoria": "Simulacro não atira, não é 'arma' de verdade — vira contrabando, não tráfico de armas."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Após a EC 103/2019, a aposentadoria por idade do RGPS exige, para o homem, 65 anos e carência de 15 anos (180 contribuições); com 65 anos e 30 anos ininterruptos de contribuição, Antônio já preenche os dois requisitos.",
          "explicacaoErradas": "Não se exige 35 anos de contribuição para aposentadoria por idade (isso é parâmetro de aposentadoria por tempo de contribuição, que deixou de ser regra geral); a idade mínima não vem diretamente do texto original da CF/88, mas de lei/emenda, e ele já supera muito o mínimo de carência.",
          "pegadinha": "A armadilha é confundir aposentadoria por idade com aposentadoria por tempo de contribuição, que exigia 35 anos e não é mais a regra padrão pós-reforma.",
          "regraMemoria": "Depois da Reforma: 65 anos + 15 de contribuição já garante a aposentadoria por idade — idade manda."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Nos termos do art. 26, II, da Lei 8.213/91, os benefícios decorrentes de acidente do trabalho, inclusive doença equiparada, independem de carência, podendo ser concedidos ainda que o segurado tenha menos de 12 contribuições.",
          "explicacaoErradas": "Não existe exigência de incapacidade mínima de seis meses para caracterizar acidente de trabalho; o NTEP é justamente o instrumento técnico-epidemiológico usado pelo INSS para presumir o nexo entre atividade e incapacidade; doenças ocupacionais são equiparadas por lei a acidente de trabalho, não exigindo evento súbito.",
          "pegadinha": "A pegadinha é achar que, por faltar carência geral de 12 contribuições, a segurada ficaria descoberta — em acidente de trabalho a carência é dispensada.",
          "regraMemoria": "Acidente de trabalho não pede fila de contribuições: carência zero."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Entre Paulo e Luciana há identidade de função, mesmo empregador, mesma localidade e diferença de tempo na função inferior a 4 anos, preenchendo os requisitos do art. 461 da CLT e da Súmula 6 do TST — equiparação devida. Já quanto a João, o art. 461, §4º, CLT veda que o empregado readaptado por motivo de saúde sirva de paradigma.",
          "explicacaoErradas": "Não cabe equiparar todos ao maior salário de forma genérica; sexo não é critério legítimo de diferenciação salarial (art. 461 CLT veda discriminação); o tempo de função de Paulo não afasta o direito de Luciana à equiparação com ele, pois a diferença está dentro do limite legal de 4 anos.",
          "pegadinha": "A armadilha é achar que a vedação de equiparar com o readaptado (João) também contamina a equiparação entre Paulo e Luciana — são situações jurídicas distintas.",
          "regraMemoria": "Readaptado nunca é paradigma — mas entre os demais, função igual + até 4 anos de diferença = mesmo salário."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O contrato de aprendizagem é permitido a partir dos 14 anos, nos termos do art. 7º, XXXIII, da CF/88 e do art. 428 da CLT.",
          "explicacaoErradas": "Trabalho noturno (22h às 5h) é vedado a menores de 18 anos em qualquer atividade; trabalho em posto de gasolina é considerado perigoso/insalubre e vedado ao menor; venda de bebidas alcoólicas é atividade vedada ao menor por ser prejudicial à sua formação.",
          "pegadinha": "A pegadinha é o horário parecer inofensivo (22h às 24h em cinema) ou o local parecer neutro (posto de gasolina, quiosque de praia), mas configurarem trabalho noturno ou insalubre vedado ao menor.",
          "regraMemoria": "Menor nunca trabalha à noite. A partir de 14, só como aprendiz."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O intervalo intrajornada tem piso legal negociável de 30 minutos (art. 611-A, XIII, CLT); reduzi-lo para 20 minutos é vedado pelo art. 611-B, XVII, CLT. O adicional noturno é garantia constitucional (art. 7º, IX, CF) e norma de saúde do trabalhador, indisponível pela via coletiva.",
          "explicacaoErradas": "Não são matérias livremente negociáveis pelo art. 7º, XXVI, CF, pois envolvem saúde/segurança e direitos indisponíveis, fora do rol de flexibilização do art. 611-A CLT.",
          "pegadinha": "A pegadinha é lembrar que a Reforma prestigia o negociado sobre o legislado e achar que 'tudo pode' na norma coletiva — mas o art. 611-B impõe limites que tornam nulas as duas cláusulas.",
          "regraMemoria": "Negociado só vale até o piso: intervalo abaixo de 30 min e noturno sem adicional nem acordo coletivo derruba."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O art. 458, §2º, da CLT lista uniformes, equipamentos de trabalho, transporte e auxílio à educação (mensalidade, material) entre as utilidades que não têm natureza salarial e não integram a remuneração para nenhum efeito.",
          "explicacaoErradas": "Não há exceção correta em nenhuma alternativa — todos os itens citados (uniforme, computador de trabalho, transporte, educação) se enquadram nas hipóteses legais de não integração do art. 458, §2º, CLT.",
          "pegadinha": "A armadilha é achar que algum item mais 'valioso', como o computador ou o incentivo à educação, integraria a remuneração — a lei os isenta expressamente.",
          "regraMemoria": "Uniforme, ferramenta de trabalho, transporte e educação: dados pelo empregador, nunca viram salário."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O art. 4º da Lei 9.029/95 garante ao empregado vítima de dispensa discriminatória (aqui por orientação sexual) o direito de optar entre a readmissão com ressarcimento integral do período de afastamento ou a percepção, em dobro, da remuneração desse período.",
          "explicacaoErradas": "A dispensa sem justa causa não é livre quando motivada por discriminação, que é ilícita; a lei não impõe só a reintegração nem só o pagamento simples — dá ao empregado a escolha, e o valor devido na hipótese de não reintegração é em dobro, não simples.",
          "pegadinha": "A pegadinha é esquecer que a escolha é do empregado, não do juiz ou do empregador, e que o pagamento alternativo é em DOBRO.",
          "regraMemoria": "Dispensa discriminatória: o empregado escolhe — volta com tudo pago, ou fica fora recebendo em dobro."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O valor pago indevidamente a título de aviso prévio pode ser objeto de compensação com a condenação em horas extras, desde que arguida como matéria de defesa na contestação, nos termos do art. 767 da CLT.",
          "explicacaoErradas": "Não há preclusão automática pelo pagamento espontâneo; dedução de ofício não se aplica a verbas de naturezas diferentes; quitação a qualquer tempo processual não é a via correta, pois compensação exige alegação na primeira oportunidade de defesa.",
          "pegadinha": "A armadilha é confundir dedução (de ofício, mesma verba), compensação (créditos de naturezas diferentes, exige alegação na contestação) e quitação (a qualquer tempo).",
          "regraMemoria": "Compensação trabalhista só vale se alegada na contestação — quem cala na defesa, perde a chance."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Quanto ao FGTS, é do empregador o ônus de provar o correto recolhimento (Súmula 461 TST), por ser o responsável pela guarda dos comprovantes. Quanto ao vale-transporte, cabe ao empregador provar que o empregado dispensou o benefício por escrito (art. 7º do Decreto 95.247/87), por se tratar de fato impeditivo do direito alegado.",
          "explicacaoErradas": "Não é correto atribuir o ônus ao empregado em nenhuma das duas verbas: em ambos os casos quem detém os documentos e alega o fato extintivo/modificativo é a sociedade empresária, a quem cabe provar.",
          "pegadinha": "A pegadinha é achar que, por ser o autor quem pede a verba, o ônus seria sempre dele — mas em fato negativo (não precisar do VT) e em guarda documental (FGTS) o ônus se inverte para o empregador.",
          "regraMemoria": "Quem guarda o comprovante, prova: FGTS e vale-transporte são ônus do empregador."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Sendo o recurso ordinário da reclamada intempestivo, ele não é conhecido; como o recurso adesivo depende da existência e do conhecimento do recurso principal, ele também não será conhecido — aplicação subsidiária do art. 997, §2º, III, do CPC.",
          "explicacaoErradas": "Não existe regra de dobra de prazo pela simples existência de recurso adesivo; o preparo do recorrente adesivo não supre a intempestividade do recurso principal alheio; o recurso adesivo não subsiste isoladamente quando o principal não é conhecido.",
          "pegadinha": "A armadilha é achar que o recurso adesivo, por pertencer à parte que já ganhou em parte, segue vida própria — mas ele é sempre acessório do recurso principal.",
          "regraMemoria": "Recurso adesivo é carona: se o principal não sai da garagem (intempestivo), o adesivo também não anda."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O art. 789, §3º, da CLT determina que, havendo acordo antes da sentença e nada sendo convencionado sobre as custas, estas serão pagas em partes iguais pelos litigantes.",
          "explicacaoErradas": "Custas não são sempre do réu (a regra do sucumbente muda quando há acordo); o sindicato assistente não responde pelas custas da parte assistida; a gratuidade negada e o vulto do acordo não tornam Daniele automaticamente responsável exclusiva, pois a lei prevê rateio igualitário quando nada foi pactuado.",
          "pegadinha": "A pegadinha é achar que, por Daniele não ter direito à gratuidade e o acordo ser vultoso, ela pagaria tudo sozinha — a regra do acordo sem cláusula expressa é sempre meio a meio.",
          "regraMemoria": "Acordo sem cláusula de custas = 50/50, sempre — ninguém paga sozinho."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 770 da CLT determina que os atos processuais se realizam em dias úteis das 6h às 20h; chegar às 5h30 viola o horário mínimo legal, tornando o ato irregular por antecipação, não pelo dia da semana.",
          "explicacaoErradas": "Não é verdade que a lei não preveja horário; o limite mínimo é 6h, não 7h; a possibilidade excepcional de atos em domingos/feriados depende de autorização judicial expressa constante do mandado, o que não ocorreu, não se estendendo por analogia à madrugada em dia útil.",
          "pegadinha": "A armadilha é pensar 'é dia útil, então está tudo certo', esquecendo que o horário de início (6h) também é limite legal, independente do dia.",
          "regraMemoria": "Atos processuais: só entre 6h e 20h — antes das 6, nem oficial de justiça pode bater à porta."
        }
      ]
    },
    {
      "provaOrigem": "44º Exame de Ordem Unificado",
      "seedVersion": 2,
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "Advogar contra literal disposição de lei é infração disciplinar (art. 34, XVII, EAOAB), mas a lei presume a boa-fé do advogado quando a tese se apoia na inconstitucionalidade ou na injustiça da norma. Nesse caso a presunção afasta a punição.",
          "explicacaoErradas": "A e D erram ao dizer que a conduta é irrelevante para o direito disciplinar — advogar contra lei expressa é infração típica. B erra a sanção: quando não protegida pela presunção de boa-fé, a pena é de censura, não multa isolada.",
          "pegadinha": "A pegadinha é achar que avisar o cliente dos riscos e agir a pedido dele livra a advogada — o que importa é se a tese usada foi de inconstitucionalidade ou injustiça da lei, não a autorização do cliente.",
          "regraMemoria": "Advogar contra lei clara só não é infração se a tese for 'essa lei é inconstitucional ou injusta' — sem essa bandeira, vira censura."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 28, V, EAOAB torna incompatível o exercício da advocacia por dirigentes de instituições financeiras, mas ressalva quem ocupa cargo de direção jurídica. Roberto pode advogar, porém só nos limites da advocacia vinculada a esse cargo.",
          "explicacaoErradas": "A erra: há ressalva legal para o diretor jurídico, não é incompatibilidade plena. C erra ao usar a regra de impedimento de servidor (que só limita atuação contra a Fazenda vinculada), que não é o caso de Roberto. D erra porque a exceção não depende da área de atuação anterior do advogado.",
          "pegadinha": "A pegadinha é confundir 'incompatibilidade' (proibição total, mesmo em causa própria) com a ressalva específica do diretor jurídico, que permite advocacia restrita ao cargo, não advocacia autônoma paralela.",
          "regraMemoria": "Diretor jurídico de banco público ou privado: pode advogar, mas só 'dentro de casa' — advocacia do cargo, não advocacia de rua."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "A sociedade de advogados só pode ter por objeto a advocacia e só pode ter advogados regularmente inscritos como sócios (art. 15, EAOAB, e Código de Ética). Misturar comércio com advocacia e admitir sócio não advogado impede o registro na OAB.",
          "explicacaoErradas": "A erra: sócio não advogado é vedado, não apenas seu nome na razão social. C erra ao admitir atividade estranha à advocacia, o que é proibido. D erra ao achar válido o registro na junta comercial — sociedade de advogados só registra no Conselho da OAB.",
          "pegadinha": "A pegadinha é achar que separar 'quem cuida do jurídico' e 'quem cuida do comércio' dentro da mesma pessoa jurídica resolve o problema — o defeito está na própria sociedade, que não pode ter objeto misto nem sócio leigo.",
          "regraMemoria": "Sociedade de advogados é clube fechado: só advogado dentro, só advocacia como objeto, registro só na OAB."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "A Lei 14.365/2022 incluiu no EAOAB a possibilidade de termo de ajustamento de conduta quando a infração for punível com censura e não houver repercussão negativa relevante à advocacia — exatamente o caso descrito.",
          "explicacaoErradas": "B erra: a suspensão preventiva não é automática na instauração, exige requisitos específicos de risco. C e D erram os detalhes do recurso do arquivamento liminar e da fase de defesa, que não exige oitiva prévia à designação de relator.",
          "pegadinha": "A pegadinha é achar que qualquer representação recebida vira processo disciplinar sem alternativa — o TAC é uma saída legal para infrações mais leves (censura), desde que sem dano à imagem da advocacia.",
          "regraMemoria": "Infração leve, punição = censura, sem estrago à imagem da advocacia: cabe TAC em vez de processo até o fim."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O art. 24, §4º, do EAOAB garante que o acordo feito pelo cliente com a parte contrária, sem participação do advogado, não prejudica os honorários (convencionados ou sucumbenciais) já devidos, salvo aquiescência do próprio advogado.",
          "explicacaoErradas": "A e B erram ao aceitar que o acordo de Dênis, sozinho, elimine ou reduza o direito de Gomes aos honorários. D erra ao condicionar a cobrança à nulidade judicial do acordo — o direito de Gomes já existe independentemente disso.",
          "pegadinha": "A pegadinha é achar que o cliente pode 'negociar' os honorários do advogado sem ele — os honorários são direito autônomo do advogado, o cliente não dispõe deles sozinho.",
          "regraMemoria": "Honorário é do advogado, não do cliente — cliente não assina por ele nem renuncia por ele."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 13 do EAOAB confere à carteira da OAB natureza de documento de identidade civil, válida em todo o território nacional para todos os fins legais, inclusive para embarque em voos domésticos.",
          "explicacaoErradas": "As demais alternativas erram ao restringir esse valor a viagens, a exigir documento adicional ou a limitar seu uso ao ambiente forense — a lei não faz essas restrições.",
          "pegadinha": "A pegadinha é achar que a carteira da OAB só vale 'dentro do tribunal' — na verdade tem fé pública de documento de identidade civil para qualquer finalidade.",
          "regraMemoria": "Carteira da OAB com foto vale como RG em qualquer lugar — inclusive no check-in do aeroporto."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "Pela Súmula Vinculante 14 do STF e pelos §§10 e 11 do art. 7º do EAOAB, o acesso amplo aos elementos de prova vale para o que já está documentado nos autos, podendo ser restringido apenas quanto a diligências ainda em andamento e não documentadas, quando houver risco comprovado à eficácia da investigação.",
          "explicacaoErradas": "B erra por não admitir nenhuma limitação, ignorando a exceção da SV 14. D erra ao permitir restrição sobre diligências já encerradas e documentadas — a restrição só vale para o que ainda está em curso e sigiloso. A erra ao dizer que não há limite algum uma vez apresentada a procuração.",
          "pegadinha": "A pegadinha é achar que o sigilo da investigação bloqueia tudo, ou que nada pode ficar sigiloso uma vez apresentada procuração — a linha exata é: documentado e concluído, acesso garantido; em andamento e sigiloso, pode ficar restrito.",
          "regraMemoria": "SV 14: o que já virou papel no processo, o advogado lê; o que ainda está sendo apurado em sigilo, pode esperar."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "A suspensão preventiva do advogado exige notificação prévia do representado (ou sua não apresentação após notificado), conforme o rito do processo disciplinar do EAOAB, e o prazo máximo regular de conclusão do processo disciplinar é de 90 dias, prorrogável, não 180.",
          "explicacaoErradas": "A e D erram ao validar a suspensão sem notificação prévia. B erra ao dispensar totalmente notificação ou oitiva. Todas que aceitam o prazo de 180 dias como regular erram o prazo-regra, que é de 90 dias.",
          "pegadinha": "A pegadinha é achar que a gravidade e a repercussão do caso autorizam pular etapas do devido processo disciplinar — gravidade não dispensa notificação prévia nem estica o prazo legal do processo.",
          "regraMemoria": "Suspensão preventiva de advogado: primeiro avisa, depois suspende. E o processo disciplinar tem prazo de 90 dias, não 180."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Para Locke, no Segundo Tratado sobre o Governo, uma vez instituída a sociedade política, todos — governantes e governados, inclusive os próprios legisladores — estão igualmente sujeitos ao império da lei civil; ninguém está acima dela.",
          "explicacaoErradas": "As demais alternativas erram ao criar exceções (o soberano, autoridades religiosas, parlamentares e magistrados) que Locke não admite — para ele a submissão à lei civil é universal dentro da sociedade política.",
          "pegadinha": "A pegadinha é achar que quem faz a lei (o legislador) estaria isento de cumpri-la — Locke rejeita exatamente essa ideia de poder acima da lei.",
          "regraMemoria": "Locke: quem faz a lei também obedece a lei — ninguém fica de fora do contrato social."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "A interpretação extensiva amplia o alcance semântico do termo 'casa' do art. 5º, XI, CF, para abranger o quarto de hotel ocupado, equiparando-o a domicílio para fins de proteção constitucional contra ingresso não consentido.",
          "explicacaoErradas": "A erra porque o texto não é 'claro' o suficiente para dispensar interpretação. B erra porque o caso pede ampliar, não restringir, o conceito. C erra ao chamar de 'interpretação autêntica' o que seria apenas analogia com outro ramo do direito.",
          "pegadinha": "A pegadinha é confundir interpretação extensiva (amplia o alcance de um conceito já existente) com interpretação autêntica (norma que define oficialmente o termo) — aqui não há norma definindo 'casa', só ampliação do sentido.",
          "regraMemoria": "Quarto de hotel = 'casa' para efeito de proteção constitucional: interpretação extensiva amplia, não cria lei nova."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O art. 199, §2º, da CF veda a destinação de recursos públicos a auxílios ou subvenções a instituições privadas com fins lucrativos, o que impede o governador de socorrer financeiramente hospitais privados sob a justificativa de baixa margem de lucro.",
          "explicacaoErradas": "A e B erram ao validar esse repasse com base em limite orçamentário ou autonomia do chefe do Executivo — a vedação constitucional independe de percentual de gasto ou de discricionariedade política. D erra ao inventar competência exclusiva da União sobre orçamento de saúde estadual.",
          "pegadinha": "A pegadinha é achar que investir mais em saúde justifica qualquer forma de gasto — a Constituição veda especificamente repassar dinheiro público a hospital privado com fins lucrativos.",
          "regraMemoria": "Dinheiro público de saúde não socorre lucro de hospital privado — art. 199, §2º, CF, fecha essa porta."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Sociedade de economia mista, ainda que federal, não está no rol do art. 109, I, CF que atrai a Justiça Federal — pela Súmula 42 do STJ, compete à Justiça Estadual julgar causas cíveis em que é parte sociedade de economia mista.",
          "explicacaoErradas": "A e C erram ao atrair a competência federal — essa regra vale para empresa pública federal, não para sociedade de economia mista. B erra ao condicionar a competência estadual à previsão em lei de criação, quando a regra decorre diretamente da Constituição e da Súmula 42 STJ.",
          "pegadinha": "A pegadinha é confundir empresa pública federal (vai para a Justiça Federal) com sociedade de economia mista federal (fica na Justiça Estadual) — a União ser sócia majoritária não muda isso.",
          "regraMemoria": "Empresa pública federal = Justiça Federal. Sociedade de economia mista, mesmo federal = Justiça Estadual. Não confunda as duas."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "As normas do ADCT têm estatura constitucional, integrando o bloco da Constituição, e por isso podem ser usadas como parâmetro em Ação Direta de Inconstitucionalidade contra lei que as contrarie.",
          "explicacaoErradas": "A e B erram ao rebaixar o ADCT a status legal ou supralegal — ele é formalmente constitucional. D erra ao tratar o conflito como antinomia de normas infraconstitucionais resolvida por revogação tácita, quando na verdade é caso de controle de constitucionalidade.",
          "pegadinha": "A pegadinha é achar que, por ser 'transitório', o ADCT teria hierarquia inferior à Constituição — transitório não é sinônimo de hierarquia menor.",
          "regraMemoria": "ADCT é Constituição também: lei que contraria o ADCT enfrenta ADI, não simples revogação."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O art. 63, I, da CF veda emenda parlamentar que aumente despesa em projetos de lei de iniciativa exclusiva do Presidente da República, salvo as exceções orçamentárias do art. 166, §§3º e 4º — não aplicáveis ao caso, tornando a emenda inconstitucional.",
          "explicacaoErradas": "A erra ao ignorar o limite constitucional ao poder de emenda em iniciativa exclusiva. B erra ao achar que qualquer quórum de aprovação supre esse vício. C erra ao inventar exigência de medida provisória, que não é via obrigatória para esse tipo de aumento.",
          "pegadinha": "A pegadinha é achar que o Congresso pode emendar livremente qualquer projeto — projetos de iniciativa exclusiva do Presidente têm blindagem específica contra emenda que aumente despesa.",
          "regraMemoria": "Iniciativa exclusiva do Presidente + aumento de despesa por emenda parlamentar = inconstitucional, sem exceção aqui."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Todas as normas constitucionais originárias, sejam formal ou materialmente constitucionais, têm a mesma hierarquia dentro da Constituição — o STF rejeita a tese de 'normas constitucionais inconstitucionais' entre si, prevalecendo a unidade hierárquico-normativa da Carta.",
          "explicacaoErradas": "A e C erram ao criar hierarquia entre normas constitucionais conforme seu conteúdo material. B erra ao supor que toda norma formalmente constitucional precisa também ser materialmente constitucional — na prática há normas que são só formalmente constitucionais.",
          "pegadinha": "A pegadinha é achar que uma norma 'mais importante' pelo conteúdo vale mais do que outra 'só formal' — dentro da Constituição originária não existe essa hierarquia interna.",
          "regraMemoria": "Constituição originária é tudo do mesmo nível: não existe norma constitucional 'mais constitucional' que outra."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "A requisição administrativa de bens particulares em caso de perigo público iminente (art. 5º, XXV, CF) só gera indenização se houver dano ao bem — sem dano, não há indenização a pagar.",
          "explicacaoErradas": "A erra ao garantir indenização mesmo sem dano. C erra ao negar indenização mesmo havendo dano. D erra ao condicionar o direito à indenização à esfera federal da autoridade requisitante, o que a Constituição não faz.",
          "pegadinha": "A pegadinha é achar que toda requisição administrativa gera indenização automática — o texto constitucional condiciona a indenização à existência de dano.",
          "regraMemoria": "Requisição administrativa só indeniza se quebrar ou estragar algo — sem dano, sem indenização."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "A Corte Interamericana de Direitos Humanos admite 'distinções' de tratamento entre grupos quando razoáveis e objetivas, compatíveis com a Convenção Americana, diferenciando-as das 'discriminações', que são diferenças arbitrárias e violadoras de direitos humanos.",
          "explicacaoErradas": "A erra ao chamar a segunda dimensão da igualdade de 'justiça retributiva' (o correto é justiça distributiva/material). B erra: a CEDAW admite expressamente ações afirmativas temporárias. C erra ao afirmar que a Convenção sobre discriminação racial veda toda medida compensatória, quando ela permite ações afirmativas temporárias em favor de grupos historicamente discriminados.",
          "pegadinha": "A pegadinha é confundir 'distinção' (tratamento diferenciado justificado e válido, como ação afirmativa) com 'discriminação' (tratamento arbitrário e vedado) — os tratados de direitos humanos proíbem a segunda, não a primeira.",
          "regraMemoria": "Distinção justificada não é discriminação: tratar diferente para corrigir desigualdade é permitido pela Corte IDH."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "As Regras de Mandela (presos em geral) e as Regras de Bangkok (mulheres presas) são normas de soft law da ONU — não vinculantes juridicamente, mas usadas como parâmetro orientador para os Estados-membros.",
          "explicacaoErradas": "B erra a origem: as Regras de Mandela são do sistema global (ONU), não do sistema interamericano. C erra ao admitir confinamento solitário prolongado como sanção disciplinar — isso é expressamente vedado pelas próprias regras. D erra ao chamá-las de jus cogens e ao dizer que as Regras de Mandela não se aplicam a mulheres — elas se aplicam a todos os presos, complementadas pela Bangkok para especificidades femininas.",
          "pegadinha": "A pegadinha é achar que 'regras da ONU sobre presos' têm força de tratado vinculante (jus cogens) — na verdade são soft law, recomendações sem força coercitiva direta.",
          "regraMemoria": "Mandela e Bangkok são conselho da ONU, não lei da ONU — soft law orienta, não obriga."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "A fraude que compromete a normalidade e a legitimidade do pleito, descoberta após a diplomação, é combatida pela Ação de Impugnação de Mandato Eletivo (AIME), prevista no art. 14, §10, CF, cabível no prazo de 15 dias contados da diplomação.",
          "explicacaoErradas": "A investigação judicial eleitoral (A) é cabível antes da diplomação. A ação de captação ilícita de votos (B) tem hipótese fática específica (compra de votos), não fraude genérica ao pleito. O recurso contra expedição de diploma (C) tem hipóteses e prazo próprios, distintos do caso de fraude ampla à legitimidade da eleição.",
          "pegadinha": "A pegadinha é confundir as várias ações eleitorais parecidas (AIJE, RCED, ação de captação ilícita) — o marco temporal 'depois da diplomação' e a causa 'fraude à legitimidade' apontam direto para a AIME.",
          "regraMemoria": "Depois da diplomação, fraude no resultado: quem chama é a AIME, prazo de 15 dias."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "A Lei das Eleições permite propaganda eleitoral paga na imprensa escrita, respeitados limites de tamanho e número de anúncios por veículo, podendo ser veiculada até a antevéspera do pleito.",
          "explicacaoErradas": "A erra ao vedar totalmente essa modalidade. B erra ao afirmar que essa é a única propaganda paga permitida e ao estender o prazo até o dia da eleição. D erra ao restringir a contratação exclusivamente aos partidos, excluindo o próprio candidato.",
          "pegadinha": "A pegadinha é achar que toda propaganda eleitoral é gratuita ou proibida se for paga — a imprensa escrita é uma exceção expressa que admite contratação paga, dentro de limites.",
          "regraMemoria": "Propaganda paga na imprensa escrita: pode, com limite de espaço e quantidade, até a antevéspera da eleição — depois disso, silêncio."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Pelo art. 9º, caput e §1º, da LINDB, a lei aplicável às obrigações é a do local em que o contrato se constituiu; como foi celebrado presencialmente no Japão, é a lei japonesa que rege a relação, independentemente do foro eleito.",
          "explicacaoErradas": "A cláusula de eleição de foro só define quem julga (competência jurisdicional), não qual lei se aplica ao mérito — a LINDB não adota a autonomia da vontade para escolha de lei em contratos. O domicílio das partes também é irrelevante para essa regra específica do art. 9º.",
          "pegadinha": "Confundir eleição de foro (jurisdição) com lei aplicável (direito material) — são coisas diferentes, e a banca aposta que você misture as duas.",
          "regraMemoria": "Foro escolhe quem julga; a LINDB escolhe qual lei — contrato presencial usa a lei do local da celebração (art. 9º, §1º, LINDB)."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O art. 31, §2º, da Convenção de Viena de 1969 estabelece que o contexto para interpretação de um tratado compreende, além do texto, o preâmbulo e os anexos.",
          "explicacaoErradas": "A alternativa B erra ao dizer 'sem exceção', pois o art. 33.1 admite que o tratado ou as partes convencionem a prevalência de um texto em caso de divergência entre idiomas. A C é imprecisa quanto à forma de reconhecimento de versão em outra língua. A D erra porque o art. 32 admite meios suplementares (trabalhos preparatórios, circunstâncias da conclusão) justamente para dirimir sentido ambíguo ou obscuro.",
          "pegadinha": "Alternativas com 'sem exceção' e 'não são admitidos... ainda que' são bandeiras vermelhas em questões sobre tratados — regra de Direito Internacional quase sempre comporta ressalva.",
          "regraMemoria": "Contexto do tratado = texto + preâmbulo + anexos (art. 31 CVDT); desconfie sempre de resposta com 'sem exceção'."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Pelo art. 165, §8º, da CF, a LOA só pode conter, além da previsão de receita e fixação de despesa, autorização para créditos suplementares e para operações de crédito (inclusive por antecipação de receita); crédito adicional especial não está nessa exceção, então sua previsão no PLOA viola o princípio da exclusividade orçamentária.",
          "explicacaoErradas": "As alternativas A, C e D apontam como indevido algo que a própria CF autoriza expressamente no art. 165, §8º (suplementares, operações de crédito e ARO); só a autorização para crédito especial extrapola essa exceção.",
          "pegadinha": "Confundir crédito suplementar (autorizável na LOA) com crédito especial (exige lei própria) — nomes parecidos, regimes bem diferentes.",
          "regraMemoria": "Na LOA só entra o que reforça o que já existe (suplementar) e operação de crédito; crédito especial é novidade, precisa de lei específica."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O art. 11, parágrafo único, da LC 101/2000 (LRF) prevê que o ente que não institui, prevê e arrecada efetivamente os impostos de sua competência fica impedido de receber transferências voluntárias de outros entes.",
          "explicacaoErradas": "A LRF não comina essa consequência específica para operações de crédito, concurso público ou contratos com outros entes — essas sanções existem para outras hipóteses de descumprimento (como estouro do limite de despesa com pessoal ou de dívida), não para a falta de instituição/arrecadação de impostos.",
          "pegadinha": "Misturar as várias sanções da LRF — cada tipo de descumprimento tem sua própria consequência, e aqui a resposta certa é a vedação a transferências voluntárias.",
          "regraMemoria": "Não cobrou o imposto próprio? Não recebe transferência voluntária de ninguém (art. 11 da LRF)."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O art. 155, §1º, II, da CF atribui o ITCMD sobre bens móveis ao Estado onde se processa o inventário; para inventário — inclusive extrajudicial — o critério normativo de vinculação é o domicílio do autor da herança (art. 48, CPC), que era Ubatuba/SP, e não o local do tabelionato livremente escolhido.",
          "explicacaoErradas": "A alternativa A e B erram porque a livre escolha do cartório para lavrar o inventário extrajudicial não desloca, por si só, a competência tributária estadual; D erra porque a localização da embarcação (bem móvel) não é o critério constitucional para ITCMD causa mortis sobre bens móveis.",
          "pegadinha": "Achar que o Estado do tabelionato escolhido para o inventário extrajudicial (aqui, MG) muda o Estado competente para cobrar o imposto — o critério fica preso ao domicílio de quem faleceu.",
          "regraMemoria": "ITCMD de bem móvel causa mortis segue o domicílio de quem morreu, não o cartório escolhido para o inventário."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O art. 150, VI, 'b', c/c §4º, da CF garante que a imunidade religiosa alcança todo o patrimônio vinculado às finalidades essenciais da entidade, incluindo imóveis anexos como a moradia dos religiosos, ainda que tenham matrícula própria no Registro de Imóveis.",
          "explicacaoErradas": "As alternativas A e D condicionam a imunidade a formalidades registrais (escolha de um imóvel, unificação de matrícula) que a Constituição não exige; B restringe indevidamente o benefício só ao templo, ignorando os imóveis conexos à atividade essencial.",
          "pegadinha": "Achar que matrícula distinta no Registro de Imóveis significa 'imóvel diferente' para fins de imunidade — o que importa é a finalidade (afetação ao culto), não o número da matrícula.",
          "regraMemoria": "Imunidade religiosa segue a finalidade, não a matrícula — tudo que serve à atividade essencial do culto está protegido."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O STF (RE 379.572 e RE 255.111, e reafirmado no Tema 1226) fixou que o conceito de 'veículo automotor' para fins de IPVA (art. 155, III, CF) abrange apenas veículos terrestres, herança histórica da antiga Taxa Rodoviária Única — por isso embarcações não sofrem a incidência do imposto.",
          "explicacaoErradas": "A alternativa A generaliza demais ao falar em proibição textual e absoluta sobre 'quaisquer veículos aquáticos'; B cria uma distinção artificial entre uso em água e em terra que não existe na jurisprudência; C erra porque não há exigência de lei complementar para essa delimitação — decorre de interpretação constitucional do STF.",
          "pegadinha": "Pensar que, por ter motor próprio e se locomover, toda unidade automotora está sujeita a IPVA — mas o STF restringe o imposto a veículos terrestres.",
          "regraMemoria": "IPVA é imposto de chão: pega carro e moto, não pega barco nem avião."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Pelo art. 201 do CTN, só se inscreve em dívida ativa o crédito regularmente constituído e não pago no prazo fixado; enquanto não escoados os 30 dias para pagamento ou impugnação, o crédito não é exigível, logo a inscrição antecipada foi indevida.",
          "explicacaoErradas": "A alternativa A ignora que o lançamento, por si só, não torna a dívida imediatamente exigível/inscritível; C inventa uma 'condição resolutiva' inexistente no regime da dívida ativa; D inverte a ordem correta — o lançamento antecede a inscrição, que só ocorre depois de esgotado o prazo sem quitação nem impugnação.",
          "pegadinha": "Confundir 'lançamento' (que já tornou a dívida líquida) com 'exigibilidade'/'inscrição em dívida ativa', que dependem do vencimento do prazo sem pagamento ou impugnação.",
          "regraMemoria": "Antes de vencer o prazo, não existe dívida ativa — a inscrição só vem depois (art. 201, CTN)."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O art. 151, III, da CF veda a isenção heterônoma — a União não pode isentar tributo de competência de outro ente federativo; como o IPTU é imposto municipal, só lei do próprio Município poderia validamente conceder a isenção.",
          "explicacaoErradas": "As alternativas B e C validam a isenção heterônoma federal mesmo em calamidade pública, hipótese que a CF não excepciona; D erra porque decreto do prefeito não tem força de lei nem convalida isenção heterônoma inconstitucional.",
          "pegadinha": "Achar que a boa intenção (calamidade pública, verba federal) ou a concordância do prefeito legitima a isenção — a vedação à isenção heterônoma é regra rígida do pacto federativo, indisponível.",
          "regraMemoria": "Só quem cobra o imposto pode isentar — isenção heterônoma é proibida (art. 151, III, CF), nem calamidade nem decreto municipal consertam isso."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Autarquias têm bens públicos, sujeitos ao regime de precatório (art. 100, CF) e, portanto, impenhoráveis; já a sociedade de economia mista exploradora de atividade econômica em regime concorrencial, com bens não afetados a serviço público, submete-se a regime predominantemente privado (art. 173, §1º, II, CF), sendo seus bens penhoráveis.",
          "explicacaoErradas": "A e C tratam erroneamente os bens da autarquia como privados/penhoráveis; B trata erroneamente os bens da estatal exploradora de atividade econômica como públicos/impenhoráveis, ignorando a distinção constitucional entre estatal prestadora de serviço público e exploradora de atividade econômica.",
          "pegadinha": "Tratar toda entidade da Administração Indireta com o mesmo regime de bens — o regime depende da natureza jurídica (autarquia x estatal) e da atividade exercida.",
          "regraMemoria": "Autarquia é Fazenda Pública, paga por precatório; estatal que compete no mercado tem regime privado e pode ser penhorada."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O art. 185, I, da CF declara insuscetíveis de desapropriação para reforma agrária a pequena e a média propriedade rural, assim definidas em lei, desde que o proprietário não possua outro imóvel.",
          "explicacaoErradas": "B ignora essa proteção constitucional ao afirmar que qualquer propriedade é desapropriável; C erra ao dizer que só a produtividade importa, esquecendo o critério do tamanho (inciso I); D restringe indevidamente a desapropriação apenas a latifúndios, ignorando que qualquer grande propriedade improdutiva também é desapropriável.",
          "pegadinha": "Esquecer que existem dois critérios autônomos de proteção contra a desapropriação para reforma agrária: tamanho da propriedade (com a ressalva de não ter outra) e produtividade.",
          "regraMemoria": "Pequena ou média propriedade + proprietário sem outro imóvel = imune à reforma agrária (art. 185, I, CF)."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "A Lei nº 14.133/2021 (art. 151 e parágrafo único) autoriza o uso de meios alternativos de solução de controvérsias em contratos administrativos, e nada impede que um contrato originalmente omisso seja aditado para incluir essa possibilidade.",
          "explicacaoErradas": "B erra porque a escolha de árbitros deve observar critérios técnicos, isonômicos e de transparência, não é escolha livre e unilateral da contratante; C erra porque conciliação e mediação são expressamente admitidas pela Lei 14.133/2021; D erra porque controvérsias sobre reequilíbrio econômico-financeiro estão expressamente entre as matérias arbitráveis (art. 151, §1º, I).",
          "pegadinha": "Achar que a ausência de cláusula original de meios alternativos impede seu uso depois — basta aditivo contratual — e achar que reequilíbrio econômico-financeiro não é arbitrável, quando é expressamente previsto.",
          "regraMemoria": "A Lei 14.133 abriu a porta para conciliação, mediação e arbitragem nos contratos públicos — e essa porta pode ser aberta depois, por aditivo."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O art. 23 da LINDB (incluído pela Lei 13.655/2018) determina que decisão administrativa que estabeleça nova orientação sobre conceito jurídico indeterminado, impondo novo condicionamento de direito, deve prever regime de transição proporcional, equânime e eficiente, sem prejuízo ao interesse geral.",
          "explicacaoErradas": "A e B defendem retroatividade e invalidação da situação já consolidada, contrariando a proteção à segurança jurídica dos arts. 23 e 24 da LINDB; C erra ao restringir 'orientação geral' apenas à jurisprudência do Judiciário, quando o conceito abrange também atos administrativos normativos (art. 30, parágrafo único, LINDB).",
          "pegadinha": "Achar que mudança de entendimento administrativo retroage e desfaz automaticamente atos anteriores praticados de boa-fé — a LINDB exige regime de transição, não retroatividade.",
          "regraMemoria": "Mudou o entendimento? Quem já agiu conforme o antigo tem direito a uma transição suave (art. 23, LINDB) — segurança jurídica não retroage para prejudicar."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "A Lei 14.230/2021 alterou a Lei 8.429/92 para exigir dolo específico em qualquer modalidade de improbidade administrativa (art. 1º, §§1º e 2º, e art. 10, caput), afastando a improbidade culposa; como Lucas agiu apenas culposamente, não há ato de improbidade.",
          "explicacaoErradas": "A exige só a comprovação de perda patrimonial, ignorando a exigência de dolo; B erra porque empregado celetista de empresa pública também se enquadra no conceito de agente público da LIA (art. 2º); D erra ao enquadrar a conduta em enriquecimento ilícito (art. 9º), que exige vantagem indevida ao próprio agente, ausente no caso.",
          "pegadinha": "Achar que ainda existe improbidade culposa (regra antiga, antes da Lei 14.230/2021) — hoje o dolo é elemento indispensável em qualquer modalidade.",
          "regraMemoria": "Depois de 2021: sem dolo, não tem improbidade — culpa não basta mais."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 38 do Estatuto da Cidade (Lei 10.257/2001) estabelece que a elaboração do EIV não substitui a elaboração e aprovação do EIA quando este for exigido pela legislação ambiental — são instrumentos autônomos e cumulativos.",
          "explicacaoErradas": "A erra ao tratar o EIV como irrelevante frente ao EIA, quando na verdade ambos coexistem; C erra porque o EIV deve contemplar tanto efeitos positivos quanto negativos do empreendimento (art. 37); D erra porque o EIV só é exigível se houver lei municipal que o preveja para aquele tipo de empreendimento.",
          "pegadinha": "Achar que fazer o EIV (municipal, urbanístico) dispensa o EIA (ambiental) ou vice-versa — são exigências cumulativas e independentes.",
          "regraMemoria": "EIV não troca de lugar com EIA — instrumento urbanístico não substitui instrumento ambiental."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O art. 225, §3º, da CF e a Lei 9.605/1998 consagram a responsabilização cumulativa e independente da pessoa jurídica nas esferas penal, civil e administrativa por dano ambiental, sendo a civil objetiva (art. 14, §1º, Lei 6.938/81) e a penal da PJ dispensada de dupla imputação com pessoa física (STF, RE 548.181).",
          "explicacaoErradas": "B e C tratam as instâncias como interdependentes, quando na verdade elas são independentes entre si; D erra porque a própria CF prevê expressamente a responsabilidade penal da pessoa jurídica em matéria ambiental.",
          "pegadinha": "Achar que a responsabilização penal da pessoa jurídica depende da condenação de uma pessoa física (teoria da dupla imputação) — o STF já afastou essa exigência.",
          "regraMemoria": "Dano ambiental de empresa: pega os três (civil, administrativo e penal), cada esfera anda com as próprias pernas."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Pelo art. 1.729, parágrafo único, do CC, a tutela testamentária, nomeada conjuntamente pelos pais em testamento, prevalece sobre a tutela legítima — que só se aplica na falta de nomeação; como Lucas foi nomeado por ambos os pais, deve exercer a tutela.",
          "explicacaoErradas": "A e B aplicam a ordem de tutela legítima por parentesco (art. 1.731, CC), que só teria cabimento se não houvesse tutor nomeado por testamento; C inventa uma restrição de grau de parentesco inexistente no CC para tutela testamentária.",
          "pegadinha": "Aplicar direto a ordem de parentesco (tios) ignorando que a tutela testamentária tem prioridade e dispensa qualquer vínculo de parentesco do tutor nomeado.",
          "regraMemoria": "Testamento manda primeiro na tutela — só na falta de tutor nomeado pelos pais entra a ordem de parentes."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O art. 16, IV, da LGPD permite que, após o fim do tratamento, os dados sejam conservados para uso exclusivo do controlador (inclusive fins estatísticos), desde que anonimizados e vedado o acesso de terceiros.",
          "explicacaoErradas": "A e D erram ao exigir eliminação obrigatória em qualquer hipótese, ignorando as exceções do art. 16; B fala em manter os dados para finalidade específica ainda vigente, o que não corresponde ao caso, em que o tratamento já terminou e a intenção é apenas estatística com dados anonimizados.",
          "pegadinha": "Achar que término do tratamento significa eliminação automática e obrigatória dos dados — a LGPD prevê hipóteses legítimas de conservação, inclusive para fins estatísticos, desde que anonimizados.",
          "regraMemoria": "Dado anonimizado, de uso interno, sem acesso a terceiro: pode guardar mesmo depois de acabar o tratamento (art. 16, IV, LGPD)."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O art. 167, caput, do CC estabelece que o negócio jurídico simulado é nulo; como não houve pagamento nem transferência real (simulação absoluta, sem negócio dissimulado válido por trás), não há nada a aproveitar.",
          "explicacaoErradas": "A erra porque simulação gera nulidade, vício mais grave, e não anulabilidade; B erra porque negócio nulo não é 'válido, mas ineficaz' — é inválido desde a origem; D erra porque nulidade não convalesce nem se corrige apenas ajustando a data (art. 169, CC).",
          "pegadinha": "Confundir simulação (gera nulidade, vício mais grave) com fraude contra credores (gera anulabilidade) — institutos parecidos, consequências diferentes.",
          "regraMemoria": "Simulação é nulidade que não se cura — combinaram fingir um contrato, o negócio já nasce morto."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Pelo art. 1.947 do CC, a substituição vulgar abrange tanto a hipótese de o herdeiro não poder quanto não querer (renúncia) aceitar; como a substituição foi estipulada individualmente para cada legatário, apenas a quota de Henrique passa a Carlos, permanecendo a de Carolina com ela.",
          "explicacaoErradas": "B aplicaria direito de acrescer, cabível apenas na ausência de substituto designado; C erra porque a renúncia de Henrique não contamina a parte de Carolina, já designada individualmente a ela; D erra porque a disposição foi individual, não conjuntiva, então Carlos só recebe a parte de quem precisou de substituto.",
          "pegadinha": "Confundir substituição individual (cada legatário tem seu próprio substituto) com disposição conjuntiva (que geraria direito de acrescer entre os beneficiários).",
          "regraMemoria": "Substituição é personalíssima: só troca quem falhou — a renúncia de um não afeta a parte do outro herdeiro nomeado."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O art. 1.597, II, do Código Civil presume concebidos na constância do casamento os filhos nascidos até 300 dias após a dissolução da sociedade conjugal por morte. Beatriz nasceu 250 dias após a morte de Bernardo, dentro desse prazo, logo a paternidade é presumida e o registro independe de DNA.",
          "explicacaoErradas": "A e B erram ao exigir DNA para o registro, ignorando que a presunção legal (pater is est) dispensa prova nesse momento — a impugnação de paternidade é ação própria, não condição prévia. C acerta a conclusão mas erra o fundamento central, que é a presunção do art. 1.597, II, e não apenas o caráter personalíssimo da contestação.",
          "pegadinha": "Achar que, como o marido já morreu, não há mais presunção de paternidade — o Código Civil estende essa presunção por até 300 dias após a dissolução por morte.",
          "regraMemoria": "Viúva grávida: conta até 300 dias da morte do marido — nascendo dentro do prazo, o filho já nasce presumido dele."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O direito real de laje (art. 1.510-A, CC) recai apenas sobre a unidade autônoma correspondente à projeção atribuída ao titular, não abrangendo as demais áreas da construção-base, como o subsolo. Não havendo interferência no direito de Carlos nem no uso do bem, a autorização dele é dispensável.",
          "explicacaoErradas": "A e D erram ao estender o direito de laje de Carlos a áreas que não lhe pertencem, já que o subsolo integra a construção-base e é de disposição do respectivo proprietário. C erra porque não há previsão legal de compensação a quem não tem direito algum sobre a área explorada.",
          "pegadinha": "Confundir 'titular de direito real sobre uma laje' com 'dono de toda a construção' — a laje é só a fração específica registrada, o resto do prédio segue sendo do proprietário da construção-base.",
          "regraMemoria": "Laje é fatia, não é bolo inteiro: só vale para a área que você recebeu, o resto é decisão do dono da construção-base."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O art. 198 do ECA determina a aplicação do sistema recursal do CPC aos procedimentos da Infância e Juventude, inclusive na execução de medidas socioeducativas, mas fixa prazo uniforme de 10 dias para todos os recursos, inclusive apelação — diferente do prazo geral de 15 dias do CPC.",
          "explicacaoErradas": "B e D erram ao aplicar o sistema do Código de Processo Penal, que não é o adotado pelo ECA. C erra o prazo, pois o ECA reduz para 10 dias em vez do prazo geral de 15 dias do CPC.",
          "pegadinha": "Achar que, por envolver ato infracional (matéria com cara de 'penal'), o sistema recursal seria o do CPP — mas o ECA remete expressamente ao CPC, só com prazo reduzido.",
          "regraMemoria": "ECA usa as regras do CPC, mas aperta o relógio: todo recurso tem 10 dias, sem exceção."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O art. 42, §6º, do ECA autoriza a adoção póstuma quando o adotante manifestou inequivocamente sua vontade de adotar e falece no curso do processo, antes da sentença. Julgado procedente o pedido, os efeitos retroagem à data do óbito.",
          "explicacaoErradas": "B erra porque a lei cria exceção expressa para permitir o prosseguimento do processo, afastando a extinção. C erra porque não há exigência de anuência dos herdeiros biológicos do adotante falecido. D erra o marco temporal dos efeitos, que retroagem à morte, e não ao trânsito em julgado.",
          "pegadinha": "Achar que a morte do adotante sempre extingue o processo por ser direito personalíssimo — o ECA cria exceção quando há inequívoca manifestação de vontade já registrada nos autos.",
          "regraMemoria": "Morreu no meio da adoção mas já tinha topado de vez? Adoção póstuma vale e os efeitos voltam no tempo até o dia da morte."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "A Lei do Superendividamento (Lei 14.181/2021), incorporada ao CDC (arts. 54-A e seguintes), garante ao consumidor pessoa física de boa-fé o direito de repactuar o conjunto de suas dívidas de consumo, preservando o mínimo existencial e buscando plano de pagamento compatível com sua renda.",
          "explicacaoErradas": "A erra ao restringir a renegociação apenas às dívidas de consumo pessoal, excluindo empréstimos financeiros — a lei trata do endividamento como um todo. C erra por exigir prova de nexo causal com o problema de saúde, requisito inexistente. D erra porque a própria lei existe para viabilizar essa renegociação judicial.",
          "pegadinha": "Achar que só entram na renegociação as dívidas 'de consumo direto', deixando de fora cartão de crédito e empréstimo consignado — a lei trata do superendividamento em bloco.",
          "regraMemoria": "Superendividamento: renegocia tudo, mas ninguém tira o pão da mesa — o mínimo existencial é intocável."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O art. 2º, parágrafo único, do CDC equipara a consumidor a coletividade de pessoas, ainda que indetermináveis, que tenha intervindo na relação de consumo, permitindo tutela por ação civil pública para proteção de interesses difusos (art. 81, III, CDC).",
          "explicacaoErradas": "B, C e D erram ao exigir individualização, determinação ou comprovação de aquisição do produto pela coletividade, contrariando o próprio conceito de consumidor por equiparação e a lógica da tutela de direitos difusos, que dispensa identificação individual.",
          "pegadinha": "Confundir direito difuso (titulares indetermináveis, como no caso do risco à saúde da coletividade) com interesse individual homogêneo (titulares determináveis) — a ação civil pública tutela ambos, mas por fundamentos diferentes.",
          "regraMemoria": "Difuso é sem rosto: mesmo sem saber quem é, todo mundo que pode consumir já é consumidor tutelável em ação coletiva."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O art. 995 do Código Civil determina que, salvo estipulação contratual em sentido diverso, o sócio ostensivo não pode admitir novo sócio na sociedade em conta de participação sem o consentimento expresso dos demais sócios participantes.",
          "explicacaoErradas": "A erra ao admitir consentimento tácito por silêncio, quando a lei exige manifestação expressa. B erra porque a responsabilidade ilimitada do sócio ostensivo não lhe confere poder de admitir sócio livremente. D erra ao criar regra de maioria e voto de qualidade inexistente na lei.",
          "pegadinha": "Confundir 'consentimento expresso', exigido por lei, com 'consentimento tácito' bastando o silêncio dos demais sócios — a lei não admite presunção nesse caso.",
          "regraMemoria": "Na conta de participação, sócio novo só entra com 'sim' expresso de todo mundo — silêncio não vale."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 77 da Lei 11.101/2005 estabelece que a decretação da falência acarreta o vencimento antecipado das dívidas do falido, com abatimento proporcional de juros, além de converter os créditos em moeda estrangeira para moeda nacional pelo câmbio do dia da decisão.",
          "explicacaoErradas": "A erra o percentual e o instituto: o deságio a 25% dos quirografários é regra de plano de recuperação judicial, não efeito automático da falência. C e D erram ao atribuir à falência regras de suspensão de prazo e de execuções (como o stay period de 180 dias) que pertencem, na verdade, ao instituto da recuperação judicial.",
          "pegadinha": "Confundir os efeitos automáticos da falência (art. 77, Lei 11.101/2005) com institutos próprios da recuperação judicial, como o deságio de 25% aos quirografários e a suspensão de 180 dias das execuções.",
          "regraMemoria": "Falência: tudo vence na hora, juro é abatido e dólar vira real no câmbio do dia da quebra."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "A inscrição do empresário deve ocorrer no local de sua sede — onde efetivamente exercerá a atividade —, no caso Brasília/DF (art. 1.150, CC), e as filiais devem ser inscritas nas Juntas Comerciais dos Estados onde se localizam (Minas Gerais e Tocantins), com averbação dessas alterações na Junta Comercial da sede, no Distrito Federal (art. 969, CC).",
          "explicacaoErradas": "A e C erram ao considerar o domicílio pessoal do empresário (Goiás) como referência para a inscrição, quando a lei manda observar o local da sede da atividade empresarial. D erra ao dispensar a inscrição das filiais nas Juntas Comerciais dos próprios Estados onde estão instaladas.",
          "pegadinha": "Confundir domicílio civil da pessoa natural com a sede da atividade empresarial — a inscrição segue o local do negócio, não onde a pessoa mora.",
          "regraMemoria": "Empresário se registra onde o negócio mora, não onde ele dorme — e toda filial também avisa a matriz de sua própria Junta."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "A LC 123/2006 (art. 4º, §5º-A) autoriza o microempreendedor individual a utilizar sua própria residência como sede do estabelecimento, quando não for indispensável a existência de local próprio para o exercício da atividade.",
          "explicacaoErradas": "B erra o valor do teto de faturamento do MEI, atualmente R$ 81.000,00, e não R$ 60.000,00. C erra ao exigir formalidades de registro empresarial não aplicáveis da mesma forma ao MEI. D erra porque o MEI é dispensado de escrituração contábil formal, bastando relatório simplificado mensal de receitas, não Livro Caixa.",
          "pegadinha": "Usar o valor antigo do limite de faturamento do MEI (R$ 60.000,00) — a lei foi atualizada e hoje o teto é R$ 81.000,00.",
          "regraMemoria": "MEI pode trabalhar de casa quando não precisa de loja — e hoje o teto de faturamento é R$ 81 mil, não mais R$ 60 mil."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "Contra decisão monocrática do relator (art. 932, CPC) que nega provimento à apelação, cabe agravo interno (art. 1.021, CPC), a ser julgado pelo próprio órgão colegiado competente — no caso, a Câmara Cível.",
          "explicacaoErradas": "A e D erram ao indicar recurso especial, incabível nesse momento processual, pois é preciso antes esgotar a via ordinária levando a questão ao colegiado (agravo interno). B erra ao dizer que o agravo interno seria julgado pelo próprio relator, quando na verdade é julgado pelo colegiado.",
          "pegadinha": "Achar que a decisão monocrática do relator já esgota a instância e permite recurso especial direto — antes é preciso o agravo interno para o colegiado se manifestar.",
          "regraMemoria": "Decisão sozinha do relator? Agravo interno chama o colegiado inteiro para decidir junto."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "A procuração com cláusula 'ad judicia' (poderes gerais para o foro) confere ao advogado poderes para praticar todos os atos do processo, ressalvados os que exigem poderes especiais previstos no art. 105 do CPC, como receber citação, confessar, reconhecer a procedência do pedido, transigir, desistir e renunciar ao direito.",
          "explicacaoErradas": "A trata de hipótese diversa (prazo de exibição de procuração quando a parte não pôde assinar por urgência), não aplicável aqui pois a procuração já foi outorgada por instrumento particular assinado pela própria parte. B erra porque o advogado pode postular em causa própria, bastando declarar endereço (art. 106, CPC). C erra porque a lei admite regularização, não gerando extinção automática do processo.",
          "pegadinha": "Achar que advogado nunca pode acumular a condição de parte e procurador ('causa própria') — isso é plenamente permitido, exigindo apenas formalidades mínimas.",
          "regraMemoria": "Procuração geral 'ad judicia' abre quase tudo, menos citação, confissão e reconhecimento do pedido — isso só com poder especial."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O art. 854, caput, do CPC autoriza a indisponibilidade de ativos financeiros do executado sem ciência prévia (penhora on-line), justamente para evitar que ele esvazie a conta antes da constrição — o contraditório é postergado, não suprimido.",
          "explicacaoErradas": "B erra o prazo, que é de 5 dias, e não 10, para comprovar impenhorabilidade ou excesso (art. 854, §3º, CPC). C erra o percentual da fiança bancária substitutiva, que deve ser de 30%, e não 20%, acrescido ao débito. D erra o prazo para a instituição financeira cancelar a indisponibilidade após pagamento por outro meio, que é de 24 horas, e não 48 horas (art. 854, §1º, CPC).",
          "pegadinha": "Trocar os prazos e percentuais específicos da penhora on-line (5 dias, 30%, 24 horas) — o CPC tem números precisos para cada etapa que se confundem facilmente entre si.",
          "regraMemoria": "Penhora on-line: primeiro trava a conta, só depois avisa — e o executado tem 5 dias, não 10, para provar impenhorabilidade."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Nos termos do art. 189, II, do CPC, tramitam em segredo de justiça os processos que versem sobre divórcio, separação e guarda de filhos, para proteger a intimidade das partes e da criança envolvida.",
          "explicacaoErradas": "B erra a competência: em ação envolvendo guarda de filho menor, o foro é o do domicílio do guardião da criança (art. 53, I, CPC), não necessariamente o do réu. C erra porque a revelia em ação sobre direito indisponível relativo a estado da pessoa não impede a intervenção posterior do réu. D erra porque o vencido, mesmo em ação de família, pode normalmente ser condenado em honorários de sucumbência.",
          "pegadinha": "Achar que, por envolver divórcio e filho menor, a ação segue a regra geral de competência do foro do réu — na verdade há foro especial do domicílio do guardião da criança.",
          "regraMemoria": "Divórcio com filho menor: processo é sigiloso e a ação corre onde mora quem tem a guarda da criança."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O cumprimento de sentença contra a Fazenda Pública segue o rito do art. 535 do CPC: o exequente instrui a petição com demonstrativo discriminado e atualizado do crédito, e a Fazenda é intimada — não citada — para impugnar no prazo de 30 dias, nos mesmos autos.",
          "explicacaoErradas": "A erra porque todos os entes da Fazenda Pública (municipal, estadual, federal) têm seus bens impenhoráveis, pagando por RPV ou precatório, sem distinção. C erra porque, ainda sem impugnação, o pagamento segue o rito de requisição (RPV/precatório), não depósito direto em conta. D erra porque a Fazenda é intimada, não citada, e a defesa cabível é a impugnação nos mesmos autos, não embargos em autos apartados.",
          "pegadinha": "Confundir o rito do cumprimento de sentença contra a Fazenda Pública (intimação + impugnação nos mesmos autos) com o da execução por título extrajudicial (citação + embargos em autos apartados).",
          "regraMemoria": "Fazenda Pública não é citada, é intimada — e a defesa é impugnação nos mesmos autos, nunca embargos apartados."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Diante da revelia de Ana, que não contestou a ação após regularmente citada, presumem-se verdadeiros os fatos alegados por Pedro (art. 344, CPC), impondo-se o julgamento de procedência do pedido de consignação, com declaração de extinção da obrigação e condenação da ré em custas e honorários.",
          "explicacaoErradas": "A é providência dispensável, pois a revelia e a ausência de controvérsia sobre a matéria de fato já deixam o processo pronto para julgamento imediato. B está equivocada porque a recusa comprovada ao recebimento é o próprio fundamento da ação, não ato atentatório à dignidade da justiça. C está errada porque, sendo o pedido procedente, o depósito não deve ser devolvido nem o processo extinto sem mérito.",
          "pegadinha": "Achar que a ausência de contestação sempre exige fase de produção de provas antes do julgamento — na consignação com revelia e prova documental já produzida, o juiz deve julgar procedente de imediato.",
          "regraMemoria": "Consignação sem contestação é procedência na hora: dívida quitada e ré paga a conta do processo."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Tocar as nádegas e tentar beijar Laís sem consentimento, para satisfazer a própria lascívia, sem violência ou grave ameaça, configura o crime de importunação sexual (art. 215-A, CP), tipo subsidiário criado pela Lei 13.718/2018.",
          "explicacaoErradas": "A erra porque o ato libidinoso sem consentimento é penalmente relevante, não fato atípico. B erra porque o estupro (art. 213, CP) exige violência ou grave ameaça, ausentes no caso. C erra porque assédio sexual (art. 216-A, CP) exige relação de superioridade hierárquica ou ascendência funcional, inexistente entre ex-namorados numa festa.",
          "pegadinha": "Confundir importunação sexual com estupro (que exige violência ou grave ameaça) ou com assédio sexual (que exige relação de hierarquia/emprego) — aqui não há nem uma coisa nem outra.",
          "regraMemoria": "Sem violência e sem chefe no meio: toque indevido para satisfação própria é importunação sexual, art. 215-A."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Chamar alguém de 'burro' e 'idiota', com intuito de ofender a dignidade e o decoro, sem imputar fato específico, configura injúria (art. 140, CP). Pelo art. 106, I, do CP, o perdão concedido a um dos querelados em concurso se estende, obrigatoriamente, aos demais, salvo se algum deles recusar.",
          "explicacaoErradas": "B e C erram a tipificação: calúnia exige imputação falsa de fato definido como crime, e difamação exige imputação de fato ofensivo à reputação — aqui há apenas ofensa genérica à honra subjetiva. A erra ao dizer que o perdão é personalíssimo, quando a lei prevê sua extensão obrigatória aos demais querelados.",
          "pegadinha": "Achar que 'burro' e 'idiota' configuram calúnia ou difamação — só há injúria quando a ofensa não imputa um fato concreto, apenas ataca a honra subjetiva.",
          "regraMemoria": "Xingamento genérico (burro, idiota) é injúria; e o perdão a um dos coautores vale para todos, salvo se alguém recusar."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Como Thiago só descobriu a menoridade de Vinicius após a prática do furto, incorre em erro de tipo essencial quanto à elementar 'menor de 18 anos' do art. 244-B do ECA, afastando o dolo e a tipicidade da corrupção de menores; o furto, porém, permanece qualificado pelo concurso de agentes (art. 155, §4º, IV, CP), qualificadora objetiva que não depende da imputabilidade do comparsa (Súmula 60, STJ).",
          "explicacaoErradas": "A erra a espécie de erro (fala em erro de tipo permissivo, ligado a descriminantes putativas, não à ignorância sobre elementar etária) e ainda desqualifica indevidamente o furto. C e D erram ao afirmar que a inimputabilidade do comparsa descaracterizaria a qualificadora do concurso de pessoas no furto, contrariando expressamente a Súmula 60 do STJ.",
          "pegadinha": "Achar que a menoridade do comparsa 'desqualifica' o furto pelo concurso de pessoas — o STJ (Súmula 60) mantém a qualificadora mesmo com um dos agentes inimputável; o que realmente afasta é só a corrupção de menores, por falta de dolo.",
          "regraMemoria": "Furto em dupla é sempre qualificado, mesmo com menor no time (Súmula 60, STJ); só a corrupção de menores exige saber da idade dele."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "Marisa reparou integralmente o dano antes do recebimento da denúncia (pagamento concluído em janeiro/2024, denúncia recebida em fevereiro/2024), em crime sem violência ou grave ameaça à pessoa, configurando arrependimento posterior (art. 16, CP), causa de diminuição de pena de 1/3 a 2/3.",
          "explicacaoErradas": "A e B (desistência voluntária e arrependimento eficaz, art. 15, CP) não se aplicam porque pressupõem interrupção do próprio agente antes da consumação, e aqui o crime já se consumou com os saques indevidos. D é descabida, pois não há exercício regular de direito em sacar valores de aposentadoria de pessoa falecida sem comunicar o óbito.",
          "pegadinha": "Confundir arrependimento posterior (reparação do dano após a consumação, mas antes do recebimento da denúncia — reduz a pena) com arrependimento eficaz (impede o resultado antes da consumação — afasta a consumação do crime).",
          "regraMemoria": "Crime já aconteceu, mas pagou antes da denúncia ser recebida? Isso é arrependimento posterior — reduz a pena, não apaga o crime."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O crime foi praticado dentro do território brasileiro, então incide o princípio da territorialidade (art. 5º, CP): a lei brasileira se aplica independentemente da nacionalidade do agente, da vítima ou de o fato ser crime no país de origem de Pierre.",
          "explicacaoErradas": "As alternativas A e B confundem territorialidade com extraterritorialidade: exigir dupla tipicidade (crime também no país Alfa) só faz sentido para fatos cometidos no exterior (art. 7º, §2º, CP), não para crimes cometidos aqui. A alternativa C erra ao condicionar a aplicação da lei brasileira à nacionalidade da vítima, quando o critério decisivo é o local do crime.",
          "pegadinha": "A questão tenta te fazer pensar em extraterritorialidade (nacionalidade, dupla tipicidade) quando, na verdade, o crime ocorreu em solo brasileiro — é caso simples de territorialidade.",
          "regraMemoria": "Crime cometido AQUI = lei brasileira sempre, sem condição nenhuma; dupla tipicidade só entra quando o crime foi cometido LÁ fora."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "Perigo de vida é elemento que qualifica a lesão corporal como grave (art. 129, §1º, II, CP). Como Aquiles sobreviveu sem sequelas e voltou às atividades em uma semana, não há lesão gravíssima (art. 129, §2º), apenas grave.",
          "explicacaoErradas": "Não é tentativa de homicídio porque o disparo único, o arrependimento imediato e o socorro prestado por Hermes indicam animus laedendi (vontade de ferir), não animus necandi — critério usado pela jurisprudência para diferenciar os dois crimes. Também não é lesão leve, pois o perigo de vida já qualifica a lesão como grave; e não é exercício arbitrário das próprias razões, que exige pretensão que a lei permitiria satisfazer por meios próprios.",
          "pegadinha": "A pegadinha é achar que 'quase matou' e 'tinha munição sobrando' apontam para tentativa de homicídio — mas o comportamento posterior (parou, socorreu, se arrependeu) é o que classifica o dolo como de lesão, não de morte.",
          "regraMemoria": "Perigo de vida = lesão GRAVE (não gravíssima, sem sequela); tiro único + socorro à vítima = dolo de ferir, não de matar."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Injúria é crime de menor potencial ofensivo (pena até 6 meses), sujeito ao rito da Lei 9.099/95. O art. 82 dessa lei prevê apelação contra toda decisão terminativa no Juizado Especial Criminal, incluindo a rejeição da queixa-crime.",
          "explicacaoErradas": "Recurso em sentido estrito (art. 581, I, CPP) seria a regra geral do CPP para rejeição de denúncia/queixa, mas não se aplica aos crimes de competência do JECrim, que têm rito recursal próprio e unificado pela apelação. Agravo e recurso inominado não são os recursos previstos na legislação processual penal para esse caso.",
          "pegadinha": "A armadilha é aplicar a regra geral do CPP (RESE para rejeição de denúncia/queixa) sem perceber que injúria é infração de menor potencial ofensivo, com recurso próprio da Lei 9.099/95.",
          "regraMemoria": "No Juizado Especial Criminal, terminativa rejeitada = apelação, sempre — esqueça o RESE do CPP comum."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Sendo os indígenas 'integrados', aplica-se a legislação comum: a Lei Maria da Penha (Lei 11.340/06) incide pela relação íntima de afeto entre autor e vítima, tornando a ação pública incondicionada (conforme ADI 4.424/STF), e a competência é da Justiça Estadual, no Juizado de Violência Doméstica (Súmula 140, STJ).",
          "explicacaoErradas": "Não há competência da Justiça Federal apenas por os envolvidos serem indígenas integrados — a Súmula 140 do STJ afasta a federalização quando não há disputa sobre direitos indígenas propriamente ditos. A ação não depende de representação: na visão do STF, a lesão leve em contexto de violência doméstica é ação pública incondicionada, superando a regra geral da Lei 9.099/95.",
          "pegadinha": "A pegadinha é achar que indígena = Justiça Federal automaticamente; isso só vale para disputas sobre direitos indígenas, não para crimes comuns entre indígenas integrados.",
          "regraMemoria": "Indígena integrado = lei comum; violência doméstica = sempre ação pública incondicionada e Justiça Estadual, indígena ou não."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "A prisão temporária só é cabível nos crimes taxativamente listados no art. 1º, III, da Lei 7.960/89, e o homicídio culposo na direção de veículo (art. 302 do CTB) não está nesse rol. Sendo a hipótese legal inexistente, a prisão é ilegal desde a decretação e deve ser relaxada de imediato (art. 5º, LXV, CF).",
          "explicacaoErradas": "As alternativas de liberdade provisória (com ou sem fiança) pressupõem prisão válida que precisaria ser afastada por outro motivo, mas o problema aqui é mais grave: a prisão nem poderia ter sido decretada. A alternativa que fala em relaxamento só a partir do 5º dia também erra, pois a ilegalidade existe desde o início, não depois de decorrido certo prazo.",
          "pegadinha": "A pegadinha é discutir prazo (5 ou 30 dias) quando o verdadeiro vício é a prisão temporária ter sido decretada para um crime fora do rol taxativo — o problema não é o prazo, é a própria prisão não poder existir.",
          "regraMemoria": "Prisão temporária só para crime que está na lista da Lei 7.960/89 — não está na lista, relaxamento na hora, sem discutir prazo."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Como o rompimento de obstáculo deixou vestígios e não houve perícia sem justificativa, falta prova técnica da qualificadora (arts. 158 e 167, CPP — o exame de corpo de delito é indispensável quando há vestígios, e a confissão não supre a perícia). Sem essa prova, a qualificadora deve ser afastada, restando o furto simples, já comprovado por outros meios.",
          "explicacaoErradas": "Não cabe absolvição sumária porque o fato (subtração) é típico e foi comprovado — a falta de prova é só da qualificadora, não do crime todo. Não é nulidade absoluta do processo, pois a ausência de perícia sobre um elemento específico não contamina toda a instrução; e converter em diligência ao final para suprir uma omissão da acusação não é o papel da defesa, que deve se beneficiar da falha probatória.",
          "pegadinha": "A armadilha é pedir a nulidade de tudo ou uma perícia tardia, quando o correto e mais vantajoso para o réu é simplesmente aproveitar a falta de prova para desclassificar para furto simples.",
          "regraMemoria": "Vestígio sem perícia e sem justificativa = a qualificadora cai; o crime simples continua se provado por outro meio."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O princípio da identidade física do juiz (art. 399, §2º, CPP) exige que o juiz que colheu a prova oral profira a sentença. Um afastamento breve e não urgente não justifica a substituição, e a jurisprudência trata a violação desse princípio como nulidade relativa, que exige alegação oportuna e comprovação de prejuízo.",
          "explicacaoErradas": "Não há impedimento ou suspeição, pois essas hipóteses (arts. 252 e 254, CPP) dizem respeito a relações do juiz com as partes ou o caso, não à simples ausência na sentença. Também não há violação ao juiz natural, já que a designação de substituto pela Corregedoria é procedimento legal e não subverte a competência previamente fixada.",
          "pegadinha": "A pegadinha é confundir identidade física do juiz com impedimento/suspeição ou com juiz natural — são institutos diferentes, e aqui o vício certo é a quebra da identidade física, gerando nulidade relativa.",
          "regraMemoria": "Quem colheu a prova, sentencia — quebrou isso sem motivo sério, é nulidade relativa (precisa provar prejuízo)."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Surgindo fato novo na instrução (existência de câmeras com o álibi de Flávio), a defesa deve requerer diligência para juntada das imagens, conforme art. 402 do CPP, que permite requerimento de diligência cuja necessidade se origine de circunstâncias apuradas na própria instrução.",
          "explicacaoErradas": "Ir direto para memoriais sem pedir as imagens desperdiça prova decisiva de inocência. Pedir absolvição sumária não cabe nessa fase processual (ela é cabível antes da instrução, art. 397, CPP). E não há nulidade da audiência: a imagem não ter sido apresentada na polícia não invalida o ato, apenas mostra que a prova ainda não foi produzida.",
          "pegadinha": "A pegadinha é achar que já dá para pedir absolvição só com a palavra da testemunha — sem trazer a prova documental/imagem ao processo, o pedido fica fraco; o passo certo é garantir essa prova antes de concluir.",
          "regraMemoria": "Prova nova surgiu na instrução? Art. 402 CPP: peça diligência antes de fechar o caso."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O art. 89, parágrafo único, da Lei 8.213/91 inclui expressamente o transporte, quando necessário, entre as prestações do processo de reabilitação profissional custeado pela Previdência Social.",
          "explicacaoErradas": "A reabilitação não é facultativa: o art. 101 da Lei 8.213/91 torna obrigatória a submissão do segurado, sob pena de suspensão do benefício. Ela também não exclui prótese, órtese ou instrumentos de locomoção — pelo contrário, esses itens estão entre as prestações típicas. E não há previsão legal de estabilidade de 5 anos decorrente da reabilitação.",
          "pegadinha": "A pegadinha é achar que reabilitação é 'só fisioterapia e prótese' e esquecer que o transporte necessário também está coberto por lei.",
          "regraMemoria": "Reabilitação profissional é pacote completo: prótese, órtese, locomoção E transporte quando precisar — e é obrigatória, não opcional."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O trabalhador autônomo (eletricista sem vínculo empregatício) se enquadra como contribuinte individual, categoria de segurado obrigatório do RGPS (art. 11, V, Lei 8.213/91).",
          "explicacaoErradas": "Contribuinte individual pode sim se aposentar por idade ou por incapacidade permanente, desde que cumpridos os requisitos e carência. Ele não está dispensado de contribuir — é justamente por ser segurado obrigatório que deve recolher suas contribuições. E trabalhador avulso é categoria distinta, ligada à intermediação de sindicato/OGMO, não ao autônomo que atende clientes diretamente.",
          "pegadinha": "A pegadinha é achar que 'sem vínculo de emprego' significa 'sem obrigação com a Previdência' — autônomo também é segurado obrigatório, só que em categoria diferente do empregado.",
          "regraMemoria": "Autônomo = contribuinte individual = segurado obrigatório do RGPS, com direito a todos os benefícios se contribuir."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O art. 134, §1º, da CLT permite o fracionamento das férias em até 3 períodos, desde que um deles não seja inferior a 14 dias corridos e os demais não sejam inferiores a 5 dias corridos cada.",
          "explicacaoErradas": "Não usufruir de fracionamento em anos anteriores não impede o fracionamento agora — a regra depende do acordo entre as partes, não do histórico. Dividir em 3 períodos de 10 dias descumpre o mínimo de 14 dias para o maior período. E a regra de períodos inferiores a 5 dias associados a feriados já não existe mais na CLT após a reforma trabalhista.",
          "pegadinha": "A pegadinha é lembrar de regras antigas de fracionamento (períodos curtos ligados a feriados) que a reforma trabalhista de 2017 revogou — hoje é 14 + 5 + 5, no mínimo.",
          "regraMemoria": "Fracionar férias hoje: um bloco de pelo menos 14 dias, e os outros dois, no mínimo 5 dias cada."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "Como Pedro extrapola habitualmente a 6ª hora (jornada especial de bancário, art. 224, CLT), sua jornada se descaracteriza e passa a ser de 8 horas, com direito ao intervalo de 1 hora (art. 71, CLT). Usufruindo apenas 15 minutos, faltam 45 minutos, pagos de forma indenizatória com adicional de 50%, conforme art. 71, §4º, CLT (redação da reforma trabalhista).",
          "explicacaoErradas": "Não é intervalo já aproveitado, pois 15 minutos não corresponde ao intervalo devido para jornada de 8 horas. Também não são 55 minutos de horas extras salariais: a reforma trabalhista (Lei 13.467/2017) mudou a natureza do pagamento pela supressão do intervalo para indenizatória, e limitou o valor ao período efetivamente não gozado (45 min, não a hora toda).",
          "pegadinha": "A pegadinha é usar a regra antiga (pagar a hora inteira como extra, com reflexos) — depois da reforma trabalhista, só se paga o período suprimido, e com natureza indenizatória, sem reflexos.",
          "regraMemoria": "Depois da reforma: intervalo cortado só rende o pedaço que faltou, +50%, indenizado — não a hora inteira."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 395 da CLT garante à empregada, em caso de aborto não criminoso comprovado por atestado médico, repouso remunerado de 2 semanas, com direito de retornar à função que ocupava.",
          "explicacaoErradas": "Não há previsão de 30 dias nem de equiparação aos 5 dias da licença-paternidade — são institutos e prazos diferentes. E não é correto dizer que falta previsão legal: o art. 395 da CLT trata exatamente dessa hipótese.",
          "pegadinha": "A pegadinha é confundir aborto com licença-maternidade (que tem prazo bem maior) ou achar que não há regra específica — existe, e o prazo é curto: 2 semanas.",
          "regraMemoria": "Aborto não criminoso = 2 semanas de repouso remunerado, ponto (art. 395 CLT)."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O entendimento do TST é de que a suspensão do contrato de trabalho por auxílio-doença não suspende o curso da prescrição trabalhista. Como já se passaram mais de 5 anos desde que as horas extras foram supostamente prestadas, o direito de ação está prescrito (prescrição quinquenal), tornando a demanda inviável.",
          "explicacaoErradas": "Não é prescrição bienal, pois esta só começa a correr da extinção do contrato (que aqui continua apenas suspenso, não extinto). Não existe prescrição trintenária no direito do trabalho para essa hipótese. E a alegação de que a prescrição não flui durante a suspensão contratual contraria o entendimento consolidado do TST.",
          "pegadinha": "A pegadinha é achar que 'contrato suspenso' significa 'prescrição parada' — para o TST, a suspensão não impede o curso do prazo prescricional.",
          "regraMemoria": "Contrato suspenso não é prescrição suspensa: o relógio da prescrição continua correndo mesmo no auxílio-doença."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "As exigências contra Lígia (anúncio com preferência de sexo), Paula (preterição por gravidez) e Geórgia (atestado de não gravidez) são discriminatórias e ilegais (art. 373-A, CLT, e Lei 9.029/95). Já a exigência no caso de Sílvia é legítima, pois a atividade envolve carregar 30 kg sem meios mecânicos, superando o limite de força manual permitido à mulher pelo art. 390 da CLT, o que justifica a exceção prevista no próprio art. 373-A, I, CLT.",
          "explicacaoErradas": "Não são todas legítimas (viola direitos da maternidade e da igualdade de gênero) nem todas ilegítimas (a exigência de Sílvia decorre de limitação legal objetiva de esforço físico, não de discriminação pura). Tratar somente Paula e Geórgia como ilícitas ignora que o anúncio de emprego de Lígia também viola a lei.",
          "pegadinha": "A pegadinha é achar que toda distinção por sexo em vaga de emprego é discriminação — quando a lei mesma limita o esforço físico da mulher sem equipamento mecânico, a exigência de homens pode ser legítima.",
          "regraMemoria": "Discriminação por gravidez ou sexo em anúncio = sempre ilegal; exigir homem por causa de peso acima do limite legal (sem máquina) = pode ser legítimo."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Na equiparação salarial, cabe à reclamante provar apenas a identidade de função; à empresa cabe provar os fatos impeditivos, como diferença de perfeição técnica e diferença de tempo de serviço superior a 4 anos (Súmula 6, VIII, TST).",
          "explicacaoErradas": "Dividir o ônus entre empregada e empresa (colocando qualquer um dos dois fatos impeditivos a cargo da empregada) contraria a Súmula 6 do TST, que atribui integralmente ao empregador o ônus de provar fato impeditivo, modificativo ou extintivo da equiparação.",
          "pegadinha": "A pegadinha é achar que cada parte prova 'o que é mais fácil para ela' — na verdade, tudo que for fato impeditivo da equiparação (tempo de serviço e perfeição técnica) é ônus do empregador.",
          "regraMemoria": "Equiparação salarial: quem quer negar o direito (a empresa) é quem tem que provar o motivo — sempre."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "A Justiça do Trabalho só executa contribuições previdenciárias decorrentes das próprias sentenças que profere (art. 114, VIII, CF), não sendo competente para uma ação autônoma e exclusiva de cobrança de contribuições que não decorra de condenação trabalhista.",
          "explicacaoErradas": "A Justiça do Trabalho é competente, sim, para dissídios de greve e para pedidos de dano moral decorrentes da relação de trabalho (art. 114, I e VI, CF) — essas duas alternativas invertem a regra. O motivo certo de incompetência é a cobrança previdenciária autônoma, não greve ou dano moral.",
          "pegadinha": "A pegadinha é achar que dano moral no trabalho ou greve escapam da Justiça do Trabalho — a real exceção é a cobrança previdenciária que não vem de sentença trabalhista.",
          "regraMemoria": "Justiça do Trabalho só mexe em contribuição previdenciária que nasceu de sentença dela mesma — cobrança avulsa não é dela."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Aplicando-se subsidiariamente o art. 916 do CPC à execução trabalhista (quando não há oposição do exequente, dada a natureza alimentar do crédito), o executado pode depositar 30% do valor mais custas e honorários, parcelando o restante em até 6 parcelas mensais, com correção monetária e juros de 1% ao mês.",
          "explicacaoErradas": "Não há previsão de 5 parcelas iguais, nem de metade do valor em 3 parcelas — esses formatos não correspondem à regra do art. 916 CPC. Também não é verdade que o parcelamento só valha quando o cálculo homologado for o do executado: a regra vale a partir do reconhecimento do crédito e da concordância do exequente, exatamente como no caso narrado.",
          "pegadinha": "A pegadinha é inventar percentuais e números de parcelas diferentes do texto legal — o correto é sempre 30% + até 6 parcelas com juros de 1% ao mês, e apenas quando o credor não se opõe.",
          "regraMemoria": "Parcelamento na execução (art. 916 CPC): 30% na entrada, até 6 parcelas, juros de 1% ao mês — e só rola se o credor topar."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "A produção antecipada de provas não gera prevenção do juízo para a ação principal (arts. 381 e 382, CPC, aplicáveis subsidiariamente ao processo do trabalho). Logo, a reclamação trabalhista posterior é livremente distribuída entre as Varas do Trabalho de São Paulo.",
          "explicacaoErradas": "Não há prevenção da 950ª Vara pelo simples fato de ter colhido a prova antecipada, nem impedimento dela para julgar o caso — o CPC afasta expressamente esse efeito. A exceção de suspeição também não se aplica automaticamente: ter colhido prova antecipada não torna o juiz suspeito.",
          "pegadinha": "A pegadinha é achar que quem já ouviu a prova 'ficou marcado' para o caso — a lei diz o contrário: produção antecipada de prova não gera prevenção nem suspeição.",
          "regraMemoria": "Produção antecipada de prova não gruda o juiz no processo depois — distribuição livre, sempre."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O art. 10-A da CLT permite a execução do sócio retirante quando a ação for ajuizada em até 2 anos contados da averbação da alteração contratual, desde que esgotada a busca de bens da empresa e dos sócios atuais. Entre a averbação (dez/2021) e o ajuizamento (out/2023) passou-se menos de 2 anos, então Soraya pode ser executada.",
          "explicacaoErradas": "O prazo do art. 10-A não se conta do afastamento de fato do sócio, mas da averbação na Junta Comercial, e é comparado com a data do ajuizamento da ação, não com o início da execução. As alternativas que usam essas datas erradas chegam à conclusão equivocada de que o prazo já passou.",
          "pegadinha": "A pegadinha é usar a data errada (afastamento em vez de averbação, ou início da execução em vez de ajuizamento) para calcular o prazo de 2 anos do art. 10-A da CLT.",
          "regraMemoria": "Sócio retirante: conte 2 anos da AVERBAÇÃO até o AJUIZAMENTO da ação — não do afastamento nem da execução."
        }
      ]
    },
    {
      "provaOrigem": "45º Exame de Ordem Unificado",
      "seedVersion": 2,
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "A alternativa A está certa porque o Código de Ética e o art. 16 do EAOAB vedam a divulgação da advocacia em conjunto com outra atividade, para evitar mercantilização e confusão sobre a natureza privativa da profissão.",
          "explicacaoErradas": "B, C e D tentam abrir exceções — por rede social, por 'afinidade' das atividades ou por sobriedade do material — mas a vedação é objetiva: não importa o meio nem a discrição, publicidade conjunta com outra atividade é proibida.",
          "pegadinha": "A pegadinha é achar que, por serem irmãos ou por as atividades 'se complementarem', vale juntar advocacia com consultoria empresarial na publicidade — a OAB não abre essa exceção.",
          "regraMemoria": "Advocacia não divide vitrine: publicidade de advogado é só advocacia, nunca em pacote com outro negócio."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Art. 4º, caput e parágrafo único, do EAOAB: são nulos os atos privativos de advocacia praticados por quem não é inscrito na OAB e também os praticados por advogado suspenso, pois a suspensão retira, durante o período, a capacidade postulacional.",
          "explicacaoErradas": "B e C erram ao supor que autorização do cliente ou o tipo de atuação (extrajudicial) convalidam ato de quem não tem inscrição; D erra ao admitir 'convalidação excepcional', que a lei não prevê — a nulidade é a regra, sem exceção para conhecimento jurídico informal.",
          "pegadinha": "A armadilha é achar que autorização do cliente ou 'boa vontade' salvam o ato praticado por quem não pode advogar — capacidade postulacional não se negocia.",
          "regraMemoria": "Sem carteira da OAB (ou suspenso), o ato é nulo — não tem 'jeitinho' que valide."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "Nos termos do art. 25 da Lei 8.935/94 (Lei dos Cartórios), o exercício de atividade notarial e de registro é incompatível com a advocacia, inclusive em causa própria — é incompatibilidade total, diferente dos impedimentos comuns do EAOAB, que costumam admitir causa própria.",
          "explicacaoErradas": "A confunde incompatibilidade com impedimento: impedimento (como o de agentes públicos) costuma permitir advogar em causa própria, mas a atividade notarial é incompatibilidade total, vedando até isso; B e D ignoram a vedação total imposta a titulares de serventia.",
          "pegadinha": "A pegadinha é misturar as regras de impedimento (que liberam causa própria) com a incompatibilidade do notário/registrador, que é total e não abre exceção nem para causa própria.",
          "regraMemoria": "Notário e registrador: cartório não convive com a advocacia — incompatibilidade total, nem causa própria escapa."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O art. 20 do EAOAB fixa jornada de 4h contínuas/20h semanais, salvo dedicação exclusiva, que admite no máximo 8h diárias; as horas extras têm adicional mínimo de 100%, norma de ordem pública que prevalece sobre o que o contrato disser.",
          "explicacaoErradas": "A e B validam 10h diárias, o que estoura o teto mesmo na dedicação exclusiva (máx. 8h); D acerta o percentual das horas extras mas mantém as 10h como válidas — o vício da jornada por si só já invalida a cláusula.",
          "pegadinha": "A pegadinha é achar que 40h semanais 'compensa' o excesso diário — o limite de 8h diárias na dedicação exclusiva é autônomo e não se dilui na semana.",
          "regraMemoria": "Advogado empregado: 8 é o teto do dia, 100% é o mínimo da hora extra — e contrato não pode reduzir isso."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 38, parágrafo único, do EAOAB exige deliberação de dois terços dos membros do Conselho Seccional para aplicar a pena de exclusão nos casos de inscrição obtida por meio fraudulento (art. 38, II).",
          "explicacaoErradas": "A generaliza sem citar o quórum específico exigido por lei; C erra a sanção (não é suspensão condicionada, é exclusão); D erra o raciocínio da prescrição — o uso continuado do documento falso (na inscrição e depois) afasta a tese de prescrição consumada.",
          "pegadinha": "A pegadinha é confundir exclusão (pena máxima, com quórum qualificado de 2/3) com suspensão comum — fraude na inscrição não é infração qualquer.",
          "regraMemoria": "Diploma falso pra entrar na OAB é exclusão, e só sai com 2/3 do Conselho Seccional dizendo sim."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Art. 7º, XIX, do EAOAB: o advogado tem o direito de recusar-se a depor sobre fato relacionado a quem foi seu cliente, mesmo que este autorize ou solicite o depoimento — é prerrogativa do advogado, não do cliente.",
          "explicacaoErradas": "B inverte a titularidade do direito, achando que a autorização do cliente obriga o advogado a depor; C e D ignoram que a prerrogativa persiste mesmo após o fim do vínculo contratual e mesmo diante da gravidade do crime investigado.",
          "pegadinha": "A pegadinha é achar que o cliente pode 'liberar' o advogado do sigilo — quem decide se depõe ou não é o próprio advogado, o sigilo protege a profissão, não só o cliente.",
          "regraMemoria": "Sigilo profissional é do advogado, não do cliente: só ele decide se quebra o silêncio."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "É prerrogativa expressa do EAOAB (incluída pela Lei 14.365/2022) assegurar à advogada lactante acesso a creche, onde houver, ou local adequado para atendimento das necessidades do bebê nas dependências de órgãos públicos como o Fórum.",
          "explicacaoErradas": "As demais opções (vaga de garagem, suspensão de prazo, dispensa de detector de metais) não são prerrogativas ligadas à amamentação — são benefícios distintos ou simplesmente não previstos em lei para essa situação.",
          "pegadinha": "A pegadinha é misturar prerrogativas genéricas do advogado (como entrar sem passar por revista) com a prerrogativa específica e recente da lactante, que é o acesso a local adequado para o bebê.",
          "regraMemoria": "Advogada amamentando: a lei garante lugar para o bebê, não vaga de garagem nem prazo suspenso."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O Regulamento Geral do EAOAB veda que o advogado integre mais de uma sociedade de advocacia (unipessoal ou pluripessoal) com sede na mesma área territorial do Conselho Seccional; Pedro precisa encerrar a unipessoal antes de ingressar na nova sociedade.",
          "explicacaoErradas": "A e C tentam resolver o problema com 'cuidados de conduta' (evitar processos em comum, declarar independência), mas a vedação é estrutural — não depende de conflito de interesses concreto; D usa um artifício de filial que não afasta a vedação, pois a atuação seria no mesmo Estado Alfa.",
          "pegadinha": "A pegadinha é achar que basta 'tomar cuidado' (não atuar nos mesmos processos) para acumular duas sociedades — a vedação independe de conflito de interesses concreto.",
          "regraMemoria": "Uma sociedade de advocacia por praça: para entrar em outra no mesmo Estado, primeiro fecha a que já tem."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O trecho é a definição clássica de Contrato Social de Rousseau: a união de todos que preserva a liberdade individual dentro da vontade geral.",
          "explicacaoErradas": "Luta de classes é conceito marxista; União das Nações é organização internacional; Utilitarismo de Regras é teoria ética consequencialista — nenhuma dessas responde ao problema formulado por Rousseau.",
          "pegadinha": "A pegadinha é confundir com outros conceitos de teoria política que também tratam de 'associação' ou 'coletividade', mas a citação é literalmente a definição de Contrato Social.",
          "regraMemoria": "'Unindo-se a todos, só obedece a si mesmo' é o Contrato Social de Rousseau, ponto final."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "Caso I: o Tribunal reduz o alcance da norma para excluir cães-guias — interpretação restritiva. Caso II: limita-se estritamente ao texto, sem ampliar nem restringir — interpretação especificadora/declarativa. Caso III: amplia o benefício para além da literalidade (mãe adotiva) — interpretação extensiva.",
          "explicacaoErradas": "As demais alternativas trocam a ordem ou usam rótulos que não correspondem exatamente à técnica de cada caso — o critério é identificar se o Tribunal reduziu (restritiva), manteve exatamente o texto (especificadora) ou ampliou (extensiva) o alcance da norma.",
          "pegadinha": "A pegadinha é confundir 'especificadora' (interpretação estritamente literal) com 'restritiva' (que reduz o alcance) — parecidas, mas com efeitos diferentes.",
          "regraMemoria": "Reduziu o alcance é restritiva; ficou só no texto é especificadora; ampliou é extensiva."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "Ações afirmativas com critério temporal e finalidade de superar desigualdades históricas (raça, deficiência) realizam a igualdade material (arts. 3º, III, e 5º, caput, CF), sendo constitucionais conforme jurisprudência do STF (ex.: ADPF 186, sobre cotas raciais).",
          "explicacaoErradas": "A restringe indevidamente cotas à educação básica/superior, quando o STF já validou ações afirmativas também na pós-graduação; B exagera a autonomia universitária, que não é absoluta; D confunde igualdade formal com material, ignorando que tratar desiguais desigualmente é constitucional quando há finalidade legítima e temporária.",
          "pegadinha": "A pegadinha é achar que isonomia significa tratamento idêntico sempre; a Constituição também protege a igualdade material, que autoriza distinções para corrigir desigualdades históricas.",
          "regraMemoria": "Isonomia não é só tratar igual — é tratar desigual quando a desigualdade é histórica e a medida é temporária."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "A exigência de distância mínima entre estabelecimentos do mesmo ramo viola a livre iniciativa e a livre concorrência (art. 170, IV, CF), conforme a Súmula Vinculante 49 do STF: 'ofende o princípio da livre concorrência lei municipal que impede a instalação de estabelecimentos comerciais do mesmo ramo em determinada área'.",
          "explicacaoErradas": "A e C erram ao validar a norma com base em autonomia municipal ou hierarquia com lei federal — o vício não é de competência, é de conteúdo (inconstitucionalidade material); B erra a premissa, pois o Município tem sim competência para legislar sobre interesse local — o problema é o conteúdo da lei, não a falta de competência.",
          "pegadinha": "A pegadinha é discutir a competência do Município (que ele tem) em vez de atacar o vício real: o conteúdo da lei fere a livre concorrência.",
          "regraMemoria": "Distância mínima entre concorrentes é inconstitucional (Súmula Vinculante 49) — o Município legisla, mas não pode travar concorrência."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 100 da CF/88 estabelece ordem cronológica de apresentação dos precatórios; a prioridade etária (art. 100, §2º) só se aplica a credores com 60 anos ou mais na data de expedição do precatório, não sendo critério geral entre pessoas com menos de 60.",
          "explicacaoErradas": "A erra ao negar qualquer critério de prioridade (ele existe, só não se aplica ao caso); C e D inventam prioridade por idade para menores de 60 anos, o que a Constituição não prevê — Joana tem 58, não atinge o patamar etário exigido.",
          "pegadinha": "A pegadinha é achar que 'ser mais velha' já garante prioridade — a prioridade etária constitucional só vale a partir de 60 anos completos na data de expedição do precatório.",
          "regraMemoria": "Prioridade por idade em precatório só destrava aos 60 — antes disso, vale a fila cronológica."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Diante da omissão constitucional quanto à competência legislativa expressa sobre a matéria, aplica-se a competência remanescente dos Estados prevista no art. 25, §1º, da CF/88, que reserva a eles tudo que não é vedado nem é competência expressa de outro ente.",
          "explicacaoErradas": "B erra ao supor competência exclusiva da União sem base constitucional para isso; C erra ao atribuir a matéria aos Municípios, que só têm competência para assuntos de interesse local expresso; D inventa uma exigência de autorização do Congresso Nacional inexistente no sistema federativo brasileiro.",
          "pegadinha": "A pegadinha é achar que 'matéria não prevista' significa incompetência de todos — a omissão aciona a competência remanescente dos Estados, não gera vácuo legislativo.",
          "regraMemoria": "Se ninguém tem competência expressa, sobra pro Estado — competência remanescente é dele, não da União nem do Município."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "A Lei 1.079/1950 é pré-constitucional; o STF não admite ADI para impugnar lei anterior à CF/88, pois o controle concentrado resolve esse caso pelo fenômeno da recepção/revogação, e por ser erro grosseiro do proponente, a Corte nega a fungibilidade com a ADPF nesse tipo de situação.",
          "explicacaoErradas": "A erra ao admitir ADI para lei recepcionada; B generaliza a fungibilidade ADI/ADPF como automática e irrestrita, o que o STF não admite quando há erro grosseiro; C erra ao admitir ADC para lei pré-constitucional, que também não é cabível.",
          "pegadinha": "A pegadinha é lembrar que existe fungibilidade ADI/ADPF, mas esquecer que ela não vale quando o erro é grosseiro — impugnar lei pré-constitucional por ADI é erro evitável.",
          "regraMemoria": "Lei anterior à Constituição não se ataca por ADI — isso é ADPF, e errar essa via é erro grosseiro sem fungibilidade."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Após a EC 131/2023, que alterou o art. 12, §4º, II, da CF, a aquisição de outra nacionalidade não implica mais perda automática da nacionalidade brasileira; a perda depende de manifestação de vontade expressa nesse sentido, o que Mariana não fez.",
          "explicacaoErradas": "B, C e D ainda partem da lógica anterior de perda automática ou condicionada a fatores como exercício de direitos políticos ou imposição estrangeira — regra superada pela EC 131/2023, que passou a exigir pedido expresso de renúncia.",
          "pegadinha": "A pegadinha é aplicar a regra antiga (perda automática por naturalização voluntária sem imposição do país estrangeiro) — a EC 131/2023 mudou isso e hoje exige manifestação expressa de renúncia.",
          "regraMemoria": "Depois da EC 131/2023, brasileiro só perde nacionalidade se pedir — naturalizar-se lá fora não tira o passaporte sozinho."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 14 da Convenção 169 da OIT reconhece expressamente o direito de propriedade e posse dos povos indígenas e tribais sobre as terras que tradicionalmente ocupam, sendo o principal instrumento do sistema internacional sobre o tema.",
          "explicacaoErradas": "A extrapola o usufruto das riquezas do solo para autorizar cultivo de transgênicos, o que não decorre automaticamente do direito de usufruto; C admite arrendamento das terras indígenas, vedado pela CF/88 (art. 231, §4º — terras indígenas são inalienáveis e indisponíveis); D erra ao negar reconhecimento da Corte IDH ao direito de propriedade coletiva, que ela reconhece (ex.: caso Comunidade Mayagna Awas Tingni).",
          "pegadinha": "A pegadinha é confundir 'usufruto exclusivo das riquezas do solo' (que a CF garante) com liberdade irrestrita de uso, incluindo atos vedados como arrendamento ou cultivo de transgênicos.",
          "regraMemoria": "Terra indígena: usufruto sim, mas inalienável — não se arrenda, não se vende, e a Convenção 169 da OIT garante a propriedade tradicional."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "A jurisprudência da Corte IDH (ex.: casos 'Cinco Pensionistas vs. Peru' e 'Baena Ricardo vs. Panamá') entende que o direito à proteção judicial do art. 25 da CADH não se limita a obter uma decisão favorável, exigindo também que o Estado garanta meios efetivos de execução dessa decisão.",
          "explicacaoErradas": "B reduz o direito a uma garantia meramente formal, o que a Corte rejeita; C erra ao blindar o Judiciário interno do exame da Corte, que pode analisar a atuação judicial doméstica para verificar violações convencionais; D erra ao admitir anistia como justificativa legítima para não punir graves violações de direitos humanos, o que a Corte IDH rechaça expressamente.",
          "pegadinha": "A pegadinha é achar que basta o Estado ter recursos judiciais 'no papel' — a Corte IDH exige efetividade real, inclusive na fase de execução da sentença.",
          "regraMemoria": "Proteção judicial na Corte IDH não é só ganhar a ação — é também conseguir executá-la de verdade."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "A Lei das Eleições (Lei 9.504/97, art. 73) veda a cessão de bens públicos para fins eleitorais, mas ressalva expressamente a cessão de uso de bens públicos para a realização de convenções partidárias, ato que antecede e é distinto da campanha eleitoral propriamente dita.",
          "explicacaoErradas": "A erra ao presumir prejuízo ao erário e exigir aluguel numa hipótese legalmente ressalvada; B ignora a exceção legal específica para convenções partidárias; D generaliza demais, pois a ressalva vale para convenções, não para qualquer finalidade eleitoral solicitada por candidatos ou partidos.",
          "pegadinha": "A pegadinha é aplicar a regra geral de vedação de uso de bem público em campanha sem lembrar da exceção específica e expressa para convenções partidárias.",
          "regraMemoria": "Bem público e eleição não se misturam — menos para convenção partidária, que é a exceção que a lei abre."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O Fundo Partidário (Lei 9.096/95) reúne recursos de origem pública e privada, mas sua aplicação deve seguir as finalidades legalmente autorizadas e está sujeita a prestação de contas obrigatória à Justiça Eleitoral, não havendo liberdade valorativa irrestrita do partido.",
          "explicacaoErradas": "B erra ao limitar a prestação de contas ao órgão de direção nacional do partido, quando a lei exige prestação à Justiça Eleitoral; C e D restringem incorretamente a obrigação de prestar contas a hipóteses específicas (projeto de interesse público, TCU), quando a regra geral e ampla é a prestação de contas periódica à Justiça Eleitoral.",
          "pegadinha": "A pegadinha é achar que, por ser dinheiro público de fundo partidário, a fiscalização seria do Tribunal de Contas — quem fiscaliza a prestação de contas de partido é a Justiça Eleitoral.",
          "regraMemoria": "Fundo Partidário: o dinheiro é do partido, mas a prestação de contas é sempre para a Justiça Eleitoral."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Repatriação é a medida cabível quando o estrangeiro é impedido de ingressar no país, seja por impedimento de reingresso ainda em vigor, seja por outra causa de inadmissão (art. 49 da Lei 13.445/2017). Hector foi barrado na fronteira/aeroporto, ou seja, sequer chegou a entrar no território nacional.",
          "explicacaoErradas": "Extradição serve para entregar alguém a outro país para responder a processo penal ou cumprir pena, o que não é o caso. Expulsão já foi a medida aplicada em 2020 e pressupõe estrangeiro que praticou ato grave estando no território; deportação é usada para quem já ingressou e está em situação migratória irregular dentro do país, o que também não ocorreu aqui.",
          "pegadinha": "A armadilha é confundir a expulsão (medida do passado, já consumada) com a medida cabível agora que ele está sendo barrado na entrada: o que define o instituto certo é o momento — antes de entrar ou já dentro do país.",
          "regraMemoria": "Regra de bolso: REpatriação = REcusa na entrada; deportação é para quem já entrou irregular; expulsão pune conduta grave de quem já estava aqui; extradição é processo penal internacional."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O visto temporário para atividade religiosa ou serviço voluntário está expressamente previsto na Lei de Migração (art. 14, §1º, VII, da Lei 13.445/2017) como hipótese de residência por prazo determinado.",
          "explicacaoErradas": "Visto de visita nunca admite intuito de fixar residência (art. 13, §1º), o que já derruba a alternativa A; ele deixa de ser dispensado se o visitante sair da área de trânsito internacional, ainda que por poucas horas, contrariando B; e o visto diplomático pode sim ser estendido aos dependentes de autoridades estrangeiras, contrariando D.",
          "pegadinha": "A pegadinha é achar que 'visita' e 'residência temporária' se confundem — visto de visita é sempre sem ânimo de fixar residência, mesmo que o motivo seja tratar da saúde.",
          "regraMemoria": "Visita é sempre de passagem, nunca residência; temporário é residência com prazo certo (trabalho, estudo, religião, voluntariado)."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "A execução da despesa pública segue a sequência empenho → liquidação → pagamento (arts. 58 a 65 da Lei 4.320/1964); a nota de empenho só é dispensada em casos especiais previstos em legislação específica, e a liquidação exige verificar a entrega do bem ou a conclusão da obra antes de emitir a ordem de pagamento.",
          "explicacaoErradas": "Empenho e liquidação nunca deixam de ser exigidos, mesmo havendo licitação regular ou fornecedor de boa reputação; e quem emite o empenho e a ordem de pagamento é o próprio órgão contratante (ordenador de despesa), jamais o Tribunal de Contas, que apenas fiscaliza.",
          "pegadinha": "A armadilha é achar que 'já foi licitado, então pode pagar antecipado' — licitação regular não dispensa empenho, liquidação e comprovação da entrega/execução antes do pagamento.",
          "regraMemoria": "Decore a ordem: Empenhou, Liquidou, Pagou (ELP) — sempre nessa ordem, sem pular etapa."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "A LRF (art. 9º, §2º) protege contra a limitação de empenho as despesas que constituam obrigação constitucional/legal, o serviço da dívida e as ressalvadas pela LDO (aí incluídas despesas custeadas por fundos específicos); despesa comum e discricionária, como material de consumo administrativo, é justamente a que pode sofrer contingenciamento.",
          "explicacaoErradas": "Obrigação legal do ente, serviço da dívida e despesa vinculada a fundo específico são exceções expressamente blindadas pela Lei de Responsabilidade Fiscal e não podem ser objeto de limitação de empenho.",
          "pegadinha": "A pegadinha é achar que toda despesa pode ser contingenciada; a LRF blinda um rol específico, e a questão pede exatamente a despesa que fica fora dessa proteção.",
          "regraMemoria": "Contingenciamento mira o 'supérfluo administrativo' — dívida, obrigação legal e fundo vinculado são intocáveis; compra de material de escritório é o alvo certo do corte."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Na omissão da lei quanto à data de vigência, aplica-se a regra geral da LINDB (art. 1º): a lei entra em vigor 45 dias após a publicação oficial, em todo o território nacional.",
          "explicacaoErradas": "90 dias é o prazo da anterioridade nonagesimal para instituir ou majorar tributo (art. 150, III, 'c', CF), que não se aplica aqui — a Súmula Vinculante 50 do STF afirma que mudança de prazo de recolhimento não se submete à anterioridade; 30 dias e o 1º dia do exercício seguinte também não correspondem a nenhuma regra cabível no caso.",
          "pegadinha": "A armadilha é confundir a vacatio legis padrão (45 dias, LINDB) com os prazos de anterioridade tributária (90 dias ou exercício seguinte), que só valem para instituição/majoração de tributo, não para mudança de prazo de pagamento.",
          "regraMemoria": "Prazo de pagamento não é 'criar ou aumentar tributo' — não tem anterioridade. Lei omissa? Sempre 45 dias (LINDB)."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "Instituir nova hipótese de incidência de IPVA (e não apenas fixar base de cálculo) exige observar anterioridade anual e noventena (art. 150, III, CF); como a exceção do art. 150, §1º, CF só afasta a noventena da fixação da base de cálculo do IPVA, a cobrança só pode começar 90 dias após a publicação da lei de 29/12/2024.",
          "explicacaoErradas": "Cobrar já em 01/01/2025 ignora a noventena; dizer que a incidência é inconstitucional desconsidera a EC 132/2023, que alterou o art. 155, §6º, III, CF e passou a autorizar IPVA sobre veículos aquáticos e aéreos; e não há vedação a instituir a incidência sobre os dois tipos de veículo na mesma lei.",
          "pegadinha": "A pegadinha é achar que IPVA sobre aeronaves e embarcações ainda é inconstitucional — isso mudou com a Reforma Tributária (EC 132/2023); o problema real do caso é só a contagem da noventena.",
          "regraMemoria": "No IPVA, só a BASE DE CÁLCULO escapa da noventena; criar incidência nova sempre espera os 90 dias."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Em tributo por homologação em que o contribuinte declara e não paga, o crédito já está constituído pela declaração (Súmula 436 STJ), mas só se torna exigível a partir do vencimento fixado para pagamento — por isso a prescrição de 5 anos para a execução fiscal conta do dia seguinte ao vencimento da guia.",
          "explicacaoErradas": "A prescrição não pode começar antes de o crédito se tornar exigível: no dia do óbito ou da entrega da declaração o débito ainda não estava vencido; e não existe regra de contagem a partir do exercício seguinte para esse tipo de tributo.",
          "pegadinha": "A pegadinha é confundir fato gerador (óbito) e constituição do crédito (declaração) com o marco de exigibilidade que dispara a prescrição, que é o vencimento fixado na guia.",
          "regraMemoria": "Declarou e não pagou: a prescrição só começa 'no dia seguinte ao vencimento da guia', nunca antes disso."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "A lei municipal pode atribuir ao tomador do serviço a condição de responsável tributário pela retenção do ISS (arts. 121, parágrafo único, II, e 128 do CTN); a imunidade de Educando 100% protege apenas sua condição de contribuinte, não a exime do dever de reter e recolher tributo devido por terceiro.",
          "explicacaoErradas": "A imunidade não alcança a construtora, verdadeira contribuinte do ISS; Educando 100% não é contribuinte nessa obra, é apenas responsável pela retenção; e a imunidade não afasta a obrigação legal de retenção, que é encargo distinto da tributação da própria entidade imune.",
          "pegadinha": "A armadilha é achar que 'ser imune' blinda a entidade de qualquer cobrança — imunidade tributária não se confunde com dispensa do dever de reter na fonte como responsável tributário.",
          "regraMemoria": "Imune não paga como contribuinte, mas pode (e deve) reter como responsável — imunidade não é escudo contra dever de retenção."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Conceder autorização para localização e funcionamento é fato gerador típico de taxa de polícia, não de imposto; municípios só têm competência para os impostos taxativamente listados no art. 156 da CF (IPTU, ITBI, ISS) e não têm competência residual, que é exclusiva da União (art. 154, I, CF).",
          "explicacaoErradas": "O problema não é a espécie normativa (lei ordinária x complementar) nem apenas a anterioridade nonagesimal — é a falta de competência constitucional para instituir esse imposto; e a ação cabível antes de qualquer lançamento é a declaratória (preventiva), não a anulatória, que pressupõe cobrança já existente.",
          "pegadinha": "A pegadinha é prender-se à discussão de anterioridade nonagesimal e esquecer o vício mais grave e anterior: a falta de competência tributária para criar esse imposto.",
          "regraMemoria": "Autorização/licença de funcionamento é fato de TAXA, não de IMPOSTO — e município não tem competência residual para inventar imposto novo."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 21 da LINDB (com redação da Lei 13.655/2018) exige que a decisão que decretar a invalidação de ato administrativo indique de modo expresso suas consequências jurídicas e administrativas, sobretudo quando o ato ainda produz efeitos.",
          "explicacaoErradas": "O parágrafo único do art. 21 veda impor ônus anormal ou excessivo com a invalidação retroativa; nem todo vício exige invalidação, pois vícios sanáveis admitem convalidação em prol do interesse público; e a anulação que atinge terceiros sempre exige contraditório e ampla defesa, nunca prescinde deles.",
          "pegadinha": "A armadilha é achar que a nova LINDB tornou a invalidação automática e sem peso das consequências práticas — ela fez o oposto: exigiu motivação consequencialista e proporcionalidade.",
          "regraMemoria": "LINDB pós-2018: antes de anular, pese as consequências e explique-as por escrito — nada de anulação 'no automático'."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Pela Lei 14.133/2021 (art. 137, §2º, III, c/c art. 138), a suspensão da execução do contrato por ordem escrita da Administração, sem justificativa, por mais de três meses, dá à contratada o direito de pleitear a extinção do contrato, de forma consensual (acordo, conciliação, mediação, comitê de resolução de disputas) ou, na falta de acordo e sem cláusula arbitral pactuada, por decisão judicial.",
          "explicacaoErradas": "O prazo legal que autoriza a extinção é de três meses, não de doze; a ausência de justificativa não afasta o direito da contratada mesmo tendo sido a própria Administração quem suspendeu; e a lei admite expressamente formas consensuais de extinção, como conciliação e mediação, não as veda.",
          "pegadinha": "A pegadinha é o prazo — muita gente lembra '12 meses' de outra hipótese da lei e esquece que, para suspensão sem justificativa, o gatilho é de apenas três meses.",
          "regraMemoria": "Suspensão sem justificativa por mais de 3 meses fura o contrato: extinção consensual (acordo/conciliação/mediação/comitê) ou, sem arbitragem pactuada, pela via judicial."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "A Lei 8.429/1992, reformada pela Lei 14.230/2021, admite agravo de instrumento contra a decisão interlocutória que rejeita as preliminares suscitadas em contestação, ampliando o cabimento desse recurso além do rol do art. 1.015 do CPC, dada a relevância dessa fase de defesa na ação de improbidade.",
          "explicacaoErradas": "O bem de família licitamente adquirido não pode ser atingido pela indisponibilidade de bens; a sanção da LIA para direitos políticos é suspensão, e não cassação, vedada pela própria Constituição (art. 15, CF); e o acordo de não persecução cível não pode ser condicionado à confissão formal do réu quanto ao ato ímprobo.",
          "pegadinha": "A pegadinha reúne três armadilhas clássicas de improbidade: bem de família 'blindado' virando alvo de indisponibilidade, 'cassação' no lugar de 'suspensão' de direitos políticos, e 'confissão obrigatória' no ANPC — nenhuma dessas está correta.",
          "regraMemoria": "Improbidade: direitos políticos se SUSPENDEM, nunca se CASSAM; bem de família lícito é intocável; e ANPC não exige confissão."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Pelo art. 94, II, da Lei 8.112/1990, o servidor público federal investido no mandato de Prefeito fica afastado do cargo público, sendo-lhe facultado optar entre a remuneração do cargo efetivo ou a do mandato eletivo.",
          "explicacaoErradas": "A regra de perceber as vantagens do cargo público sem prejuízo da remuneração do mandato, havendo compatibilidade de horário, é exclusiva do mandato de Vereador (art. 94, III, 'a'), não se aplica a Prefeito; filiação partidária não obriga o servidor a se exonerar; e a licença remunerada para atividade política antes da eleição (art. 86) é regra distinta da situação de quem já foi eleito e vai tomar posse.",
          "pegadinha": "A armadilha é aplicar ao Prefeito a regra de compatibilidade de horário que só vale para Vereador — cargo executivo (Prefeito) sempre exige afastamento.",
          "regraMemoria": "Vereador pode acumular se der tempo; Prefeito (e Deputado/Senador) sempre se afasta e escolhe a remuneração."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "A Lei 14.133/2021 (art. 75, I) prevê dispensa de licitação em razão do valor não só para obras e serviços de engenharia, mas também para serviços de manutenção de veículos automotores, quando o valor estimado for inferior ao teto legal atualizado — o contrato de R$ 60.000,00 se encaixa nessa hipótese.",
          "explicacaoErradas": "Não é caso de inexigibilidade, pois há competição viável entre vários prestadores desse serviço; a lei não exige que o particular esteja no mesmo território do ente contratante; e negar a possibilidade de contratação direta ignora a hipótese específica de dispensa por valor prevista para manutenção de veículos.",
          "pegadinha": "A pegadinha é confundir dispensa (baixo valor, competição viável mas legalmente dispensada) com inexigibilidade (competição inviável) — manutenção de veículos tem teto próprio, equiparado ao de obras.",
          "regraMemoria": "Manutenção de veículo tem teto de dispensa igual ao de obra — lembre 'oficina conta como obra' na Lei 14.133."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "A responsabilidade civil ambiental é objetiva, solidária entre todos que concorrem para o dano (comissiva ou omissivamente) e de natureza propter rem, legitimando incluir no polo passivo o poluidor direto, o atual proprietário (mesmo de boa-fé) e os entes públicos omissos na fiscalização (art. 14, §1º, da Lei 6.938/1981 e jurisprudência do STJ).",
          "explicacaoErradas": "A omissão fiscalizatória do Poder Público também gera responsabilidade civil, não afasta legitimidade passiva; a responsabilidade não recai só sobre quem praticou a conduta comissiva, alcançando também quem detém a coisa (propter rem); e a boa-fé do novo proprietário não o exime, justamente por essa natureza propter rem da obrigação ambiental.",
          "pegadinha": "A pegadinha é achar que quem comprou 'sem saber' do dano está livre — a obrigação ambiental gruda no imóvel (propter rem), não só na pessoa que causou o dano.",
          "regraMemoria": "Dano ambiental é como dívida propter rem: gruda no imóvel e pega todo mundo que concorreu, causando ou deixando acontecer."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "Segundo o art. 4º da Resolução CONAMA 237/1997, compete ao IBAMA o licenciamento ambiental de atividades cujos impactos ultrapassem os limites territoriais de um Estado, como no caso de atividade desenvolvida em dois Estados.",
          "explicacaoErradas": "A competência não é definida pela sede da empresa, nem é exercida em conjunto pelos dois Estados, nem fica à escolha do empreendedor — a Resolução CONAMA atribui a competência conforme a abrangência territorial do impacto ambiental.",
          "pegadinha": "A pegadinha é pensar na sede da empresa ou dar liberdade de escolha ao particular — o critério da Resolução CONAMA 237/97 é sempre a abrangência do impacto, não a conveniência de quem vai licenciar.",
          "regraMemoria": "Impacto em mais de um Estado, Ibama entra em campo. Sede da empresa não importa para competência de licenciamento."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O rendimento acima de 10% é evento futuro e incerto do qual dependia a eficácia do negócio — uma condição suspensiva (art. 121 CC); implementada a condição, o direito é adquirido e Marina pode exigir o cumprimento (art. 125 CC).",
          "explicacaoErradas": "Não é encargo, pois não há ônus imposto a quem recebe uma liberalidade, e sim negócio bilateral condicionado; não é termo, porque termo é evento futuro certo, e aqui o rendimento era incerto; e não é condição puramente potestativa, pois o resultado das ações depende do mercado, não da vontade exclusiva de Dagoberto.",
          "pegadinha": "A pegadinha é confundir condição (evento incerto) com termo (evento certo, só a data pode ser incerta) e com condição potestativa pura (que dependeria só da vontade de uma parte).",
          "regraMemoria": "Evento incerto é condição; evento certo é termo. Se depende do mercado, não é 'puramente potestativo' — é condição casual/mista válida."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Pelo art. 276 do Código Civil, falecendo devedor solidário, cada herdeiro só responde pela quota da dívida correspondente ao seu quinhão hereditário, pois dívida em dinheiro é divisível; a solidariedade entre os herdeiros só existiria se a obrigação fosse indivisível.",
          "explicacaoErradas": "Não há desobrigação, pois a dívida integra o passivo transmitido aos herdeiros; e nenhum herdeiro responde sozinho pela dívida inteira do falecido, pois ela se reparte entre eles na proporção do quinhão de cada um.",
          "pegadinha": "A pegadinha é achar que a solidariedade original entre Mateus e Pedro se transmite inteira a cada herdeiro — a solidariedade quebra com a morte e vira responsabilidade fracionada pelo quinhão.",
          "regraMemoria": "Devedor solidário morreu: a solidariedade não passa para os herdeiros, cada um paga só a sua fatia da herança."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "A Súmula 387 do STJ autoriza a cumulação das indenizações por dano estético e dano moral decorrentes do mesmo fato, desde que se baseiem em fundamentos autônomos (lesão física de um lado, abalo psíquico do outro).",
          "explicacaoErradas": "No transporte gratuito de simples cortesia, a responsabilidade do condutor é subjetiva, exigindo dolo ou culpa grave (Súmula 145 STJ), não objetiva; parentes próximos podem pleitear dano moral reflexo (por ricochete) pelo sofrimento com o acidente do ente querido; e em responsabilidade extracontratual os juros moratórios correm desde o evento danoso, não do trânsito em julgado (Súmula 54 STJ).",
          "pegadinha": "A pegadinha reúne três súmulas em uma questão só: cortesia não é responsabilidade objetiva (Súmula 145), dano moral não é só de quem se machucou (dano por ricochete), e juros não esperam o trânsito em julgado (Súmula 54).",
          "regraMemoria": "Carona de favor só responsabiliza com culpa grave/dolo (Súmula 145); estético + moral pode somar (Súmula 387); juros contam do acidente, não da sentença (Súmula 54)."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Doação de ascendente a descendente não exige consentimento dos demais descendentes (essa exigência é da compra e venda, art. 496 CC), então o contrato é válido; a dispensa de colação pode ser feita tanto no próprio ato de doação quanto em testamento posterior (art. 2.006 CC), e aqui é eficaz porque o bem doado estava dentro da parte disponível do doador.",
          "explicacaoErradas": "A exigência de consentimento dos demais descendentes é regra da venda entre ascendente e descendente (art. 496 CC), não da doação, o que afasta a nulidade/anulabilidade do negócio; e a dispensa de colação não precisa constar do próprio contrato de doação, podendo vir em testamento posterior, como ocorreu.",
          "pegadinha": "A pegadinha é aplicar à doação a regra do art. 496 CC (consentimento dos demais descendentes), que só vale para compra e venda entre ascendente e descendente.",
          "regraMemoria": "Consentimento dos outros filhos só se exige na VENDA de pai para filho (art. 496); na doação, o pai só respeita a parte disponível — e a dispensa de colação vale no contrato OU no testamento."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "A farmácia compartilhou dado sensível de saúde (medicamentos e histórico de uso) sem consentimento específico e destacado do titular, violando os arts. 5º, II, e 11 da LGPD; a sanção pode incluir a eliminação dos dados tratados irregularmente (art. 18, VI, LGPD).",
          "explicacaoErradas": "Não há base legal de 'execução de contrato' ou 'legítimo interesse' que autorize compartilhar dado sensível de saúde com terceiro para fins comerciais — essas hipóteses não valem para dado sensível sem consentimento específico, e a responsabilidade não é só da operadora, atingindo também a farmácia que compartilhou.",
          "pegadinha": "A alternativa que fala em 'legítimo interesse' ou 'execução do contrato' parece plausível, mas dado sensível de saúde exige consentimento destacado só para aquela finalidade — legítimo interesse não serve de base legal para dado sensível.",
          "regraMemoria": "Dado de saúde é dado sensível: sem consentimento específico e destacado, é sempre violação da LGPD, ponto final."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Servidão não aparente (como tubulação subterrânea, invisível a olho nu) não pode ser adquirida por usucapião nem dispensa registro — só a servidão aparente admite usucapião, conforme art. 1.379 do CC c/c Súmula 415 do STF.",
          "explicacaoErradas": "As alternativas que admitem usucapião em 5, 10 ou 20 anos ignoram o requisito da aparência: sem sinal visível externo, a posse não gera presunção de servidão perceptível a terceiros, por isso a lei exige título registrado.",
          "pegadinha": "O tempo longo de uso (15 anos, contínuo, sem oposição) engana quem lembra da usucapião comum de imóveis — mas servidão usucapível precisa ser APARENTE, e aqui ela é subterrânea.",
          "regraMemoria": "Servidão que ninguém vê não vira usucapião: só o que aparece no terreno pode virar direito sem registro."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "A exigência de autorização judicial do art. 83 do ECA aplica-se ao menor que viaja desacompanhado dos pais; viajando com a genitora guardiã, dentro do território nacional, não é necessária anuência do outro genitor nem alvará judicial.",
          "explicacaoErradas": "A guarda compartilhada não é pré-requisito para o outro genitor se opor, e a exigência de autorização judicial ou anuência do outro genitor só existe para viagem ao exterior (art. 84 ECA) ou quando o adolescente viaja sozinho, sem os pais.",
          "pegadinha": "A pegadinha é achar que toda viagem de menor de idade precisa de autorização — mas isso só vale quando ele viaja sem os pais ou vai para fora do país.",
          "regraMemoria": "Viajou com o pai ou a mãe guardião, dentro do Brasil? Não precisa de papel nenhum."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "Quando o advogado é indicado pela parte em ato formal (audiência), com a presença da autoridade judiciária, e isso fica registrado em ata, dispensa-se a juntada de procuração escrita — o magistrado errou ao excluir o(a) advogado(a) e nomear a Defensoria.",
          "explicacaoErradas": "Adiar a audiência para juntar procuração ou tratar o adolescente como indefeso ignora que o registro em ata do ato de constituição já supre a exigência do instrumento de mandato; também não há fundamento para notificar a OAB por infração disciplinar nesse cenário.",
          "pegadinha": "Parece só uma questão de prazo para juntar procuração, mas a chave é que a constituição verbal em audiência, registrada em ata, já vale — dispensa o papel.",
          "regraMemoria": "Constituiu o advogado na frente do juiz e ficou na ata? Procuração escrita é dispensável."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 47 do CDC determina que cláusulas de contrato de adesão sejam interpretadas da forma mais favorável ao consumidor, especialmente diante de cobrança retroativa sem previsão clara no contrato.",
          "explicacaoErradas": "Contrato de adesão assinado não afasta o direito de contestação do consumidor, e o corte de serviço essencial por dívida antiga e não explicada previamente, sem previsão contratual clara, não é automaticamente lícito nem pode ser cobrado sem justificar o cálculo.",
          "pegadinha": "A pegadinha é achar que 'contrato assinado é lei entre as partes' vale igual em relação de consumo — no CDC, cláusula obscura ou surpresa se interpreta a favor do consumidor.",
          "regraMemoria": "Cláusula confusa em contrato de adesão? Sempre lê a favor de quem assinou sem poder discutir: o consumidor."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Responsabilidade objetiva do fabricante por fato do produto (art. 12 do CDC): provado o defeito de fabricação e o nexo causal com o dano, ele responde independentemente de culpa.",
          "explicacaoErradas": "Não é o consumidor quem precisa provar ausência de mau uso como regra geral — o ônus de provar excludente, como culpa exclusiva do consumidor, é do fornecedor (art. 12, §3º, CDC); alegar que 'o risco é inerente ao produto' não afasta a responsabilidade quando há defeito de fabricação comprovado.",
          "pegadinha": "A armadilha é inverter o ônus da prova: no CDC, quem precisa provar a excludente (culpa exclusiva da vítima) é o fornecedor, não o consumidor.",
          "regraMemoria": "Defeito de fábrica + dano = fabricante paga, sem discutir culpa. Provar o contrário é problema dele."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Sócio da recuperanda não tem direito de voto na assembleia mesmo sendo credor (art. 43 da Lei 11.101/2005), e credor cujo crédito não sofre qualquer alteração de valor ou condições pelo plano também não vota, por ausência de interesse na deliberação sobre o próprio crédito.",
          "explicacaoErradas": "Não é correto dizer que ambos votam livremente como credores quirografário/subordinado: a condição de sócio da devedora, por si só, retira o direito de voto de Afonso, e a inalterabilidade das condições do crédito de Viana & Cia. afasta o interesse de voto deste.",
          "pegadinha": "Parece que basta constar formalmente como credor para votar — mas sócio da devedora e credor cujas condições o plano não mexe ficam de fora da votação.",
          "regraMemoria": "Sócio da empresa em recuperação não vota. Crédito que o plano não altera também não vota."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O art. 977 do Código Civil só veda a sociedade entre cônjuges (ou com terceiros) quando o regime de bens for comunhão universal ou separação obrigatória; no regime de comunhão parcial a constituição é livremente permitida, inclusive com os filhos.",
          "explicacaoErradas": "As alternativas que proíbem a sociedade 'em qualquer regime' ou vinculam a permissão à separação absoluta invertem a regra: a restrição legal atinge especificamente comunhão universal e separação obrigatória, não a comunhão parcial.",
          "pegadinha": "A pegadinha é achar que toda sociedade entre marido e mulher é proibida — só é vedada em dois regimes específicos: comunhão universal e separação obrigatória.",
          "regraMemoria": "Só 2 regimes proíbem sócio-cônjuge: comunhão universal e separação obrigatória. Comunhão parcial libera geral."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Consolidada a propriedade fiduciária pela mora, o credor fiduciário pode vender o bem a terceiros independentemente de leilão, hasta pública ou avaliação prévia, salvo disposição contratual em contrário, aplicando o preço no pagamento do crédito e despesas, nos termos do art. 2º do Decreto-Lei 911/1969.",
          "explicacaoErradas": "Não é necessário processo judicial declaratório, execução por quantia certa ou interpelação com prazo específico para a venda extrajudicial: essas exigências pertencem a outros contextos (bem imóvel, SFI), não à alienação fiduciária de bem móvel regida pelo DL 911/69.",
          "pegadinha": "A pegadinha é confundir o rito da alienação fiduciária de bem MÓVEL (venda direta, sem leilão) com o de bem imóvel ou com execução judicial comum.",
          "regraMemoria": "Alienação fiduciária de carro: comprovada a mora, vende direto, sem leilão nem juiz — a lei já autoriza."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "Na contestação da ação renovatória, o locador pode apresentar proposta de terceiro em condições melhores (art. 72, II, da Lei 8.245/91), e o locatário pode, em réplica, aceitar essas condições para permanecer no imóvel (art. 72, §5º, da mesma lei).",
          "explicacaoErradas": "O locatário não tem direito potestativo absoluto capaz de impedir a proposta de terceiro; quanto à forma da proposta e ao ramo de atividade do terceiro, a lei exige requisitos próprios (documento com firma reconhecida ou testemunhas, e indicação do ramo de exploração), diferentes do que dizem as demais alternativas.",
          "pegadinha": "A pegadinha é achar que a renovatória é direito automático e incontestável do locatário — na verdade o locador pode contra-atacar com proposta melhor de terceiro, e o locatário pode simplesmente topar.",
          "regraMemoria": "Locador trouxe oferta melhor de terceiro? Locatário pode dizer 'topo essa' na réplica e ficar com o imóvel."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "A decisão que concede tutela provisória de urgência é interlocutória, atacável por agravo de instrumento, conforme art. 1.015, I, do CPC.",
          "explicacaoErradas": "Não é sentença nem fica imune a recurso imediato: a tutela concedida antes do julgamento do mérito não encerra a fase cognitiva do processo, logo não cabe apelação, e existe sim recurso cabível de imediato.",
          "pegadinha": "A pegadinha é confundir decisão interlocutória com sentença só porque ela 'decide' algo importante (bloqueio de bens) — o critério é o conteúdo do art. 203 do CPC, não a relevância prática da decisão.",
          "regraMemoria": "Tutela provisória concedida no meio do processo? Sempre agravo de instrumento."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "O CPC permite expressamente que a reconvenção seja proposta contra o autor e um terceiro (o fiador Marcelo), nos termos do art. 343, §3º, sem que isso configure óbice processual.",
          "explicacaoErradas": "A desistência da ação principal por Joana não impede o prosseguimento da reconvenção já proposta (art. 343, §2º), sua citação como reconvinda não segue as regras de citação pessoal inicial (ela já é parte, sendo intimada na pessoa do advogado), e a reconvenção não depende de contestação prévia, podendo ser oferecida na própria peça de resposta.",
          "pegadinha": "A pegadinha é achar que reconvenção só pode mirar quem já é parte no processo original — o CPC autoriza incluir terceiro, como o fiador.",
          "regraMemoria": "Reconvenção pode trazer gente nova para o processo: autor original mais terceiro, numa peça só."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Sendo o executado servidor público, o exequente pode requerer o desconto em folha de pagamento dos alimentos vencidos e vincendos, observado o limite de 50% dos ganhos líquidos, conforme art. 529, §3º, do CPC.",
          "explicacaoErradas": "Dificuldade financeira alegada sem prova não afasta a obrigação nem legitima cumprimento apenas parcial; a prisão civil é cabível para as três últimas prestações vencidas antes da execução e as que vencerem no curso do processo, e o cumprimento da prisão não extingue o débito, apenas encerra a coerção pessoal daquele período.",
          "pegadinha": "A pegadinha mistura os dois ritos de cobrança de alimentos (prisão civil x desconto em folha/expropriação) — preste atenção em qual rito a questão está tratando.",
          "regraMemoria": "Servidor público devendo alimentos? Desconto direto na folha, até 50% do líquido — sem precisar de cadeia."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Havendo consenso entre herdeiros capazes, o inventário pode ser feito extrajudicialmente por escritura pública no Tabelionato, exigindo-se sempre a assistência de advogado(a), conforme art. 610, §1º, do CPC, e a Lei 11.441/2007.",
          "explicacaoErradas": "Não há necessidade de intervenção do Ministério Público quando não há incapazes, a via judicial não é obrigatória havendo consenso e capacidade de todos, e a assistência de advogado é sempre exigida no inventário extrajudicial, nunca dispensada.",
          "pegadinha": "A pegadinha é achar que, sendo tudo consensual, dá para dispensar o advogado no cartório — advogado nunca sai da jogada, mesmo com acordo total.",
          "regraMemoria": "Inventário no cartório: todo mundo maior, capaz e de acordo — mas advogado é sempre obrigatório."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O prazo de 15 dias para impugnação ao cumprimento de sentença começa a correr automaticamente após o decurso do prazo para pagamento voluntário, independentemente de nova intimação, conforme art. 525, caput, do CPC.",
          "explicacaoErradas": "Não existe exigência de intimação específica adicional para o início do prazo de impugnação, tampouco prazo indeterminado a qualquer momento, e a ordem não se inverte: primeiro corre o prazo de pagamento voluntário, depois, automaticamente, o de impugnação.",
          "pegadinha": "A pegadinha é achar que cada fase do cumprimento de sentença precisa de intimação separada — na prática, o prazo de impugnação já está embutido e corre sozinho após o prazo de pagamento.",
          "regraMemoria": "Acabou o prazo de pagar, já começou a contar o prazo de impugnar — automático, sem novo aviso."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Havendo decisão de mérito transitada em julgado entre as mesmas partes, com a mesma causa de pedir e o mesmo pedido, o segundo processo deve ser extinto sem resolução de mérito por coisa julgada, conforme art. 337, §§1º a 4º, e art. 485, V, do CPC.",
          "explicacaoErradas": "Litispendência exige ação idêntica ainda em curso, não já julgada definitivamente; conexão pressupõe processos distintos sem identidade total tramitando ao mesmo tempo; perempção decorre de extinção por abandono em três processos anteriores idênticos, o que não é o caso.",
          "pegadinha": "A pegadinha é confundir institutos parecidos — litispendência é ação repetida ainda em curso, coisa julgada é ação repetida já julgada e definitiva.",
          "regraMemoria": "Ação repetida ainda rolando é litispendência. Ação repetida já julgada e encerrada é coisa julgada."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Aeronave brasileira privada, quando fora do território nacional, sujeita-se ao princípio da representação (do pavilhão): a lei brasileira só se aplica subsidiariamente, se o fato não for julgado no país estrangeiro, conforme art. 5º, §§1º e 2º, c/c art. 7º, II, 'c', do Código Penal.",
          "explicacaoErradas": "Não há sujeição incondicional ou exclusiva à lei brasileira só pela nacionalidade dos envolvidos, nem exclusividade da lei estrangeira: aeronave privada em voo sobre território estrangeiro não é extensão do território nacional como seria uma aeronave pública, por isso a aplicação da lei brasileira é subsidiária.",
          "pegadinha": "A pegadinha é tratar aeronave privada como se fosse pública (extensão do território) — aeronave privada em voo estrangeiro fica sujeita primeiro à lei local, e à brasileira só se não houver julgamento lá fora.",
          "regraMemoria": "Avião privado brasileiro lá fora: a lei brasileira só entra se o país estrangeiro não julgar primeiro."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "A lesão corporal culposa na direção de veículo automotor (art. 303 do CTB) é norma especial em relação à lesão corporal culposa genérica do Código Penal, prevalecendo pelo princípio da especialidade, que absorve inclusive a conduta de dirigir sem habilitação.",
          "explicacaoErradas": "Não houve tentativa de homicídio, pois não há dolo de matar, apenas culpa; também não se trata de subsidiariedade ou alternatividade — o CTB já é lei especial completa para lesão culposa no trânsito, afastando o tipo genérico do CP.",
          "pegadinha": "A pegadinha é aplicar o tipo genérico do Código Penal ignorando que o Código de Trânsito tem norma específica e mais completa para lesão culposa causada por veículo.",
          "regraMemoria": "Lesão culposa no trânsito é sempre CTB, nunca CP genérico. Lei especial afasta a geral."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "João desistiu voluntariamente de consumar o furto antes de subtrair o bem, respondendo apenas pelos atos já praticados (art. 15 do CP) — e o ato já consumado foi a violação de domicílio (art. 150 do CP), pois ingressou por arrombamento em casa alheia contra a vontade do morador.",
          "explicacaoErradas": "Não há tentativa de furto a punir, pois a desistência voluntária, quando os atos executórios ainda não se esgotaram, afasta a punição pela tentativa; as alternativas que falam em tentativa perfeita ou imperfeita de furto ignoram esse efeito da desistência voluntária.",
          "pegadinha": "A pegadinha é achar que, por já ter arrombado e chegado perto do dinheiro, João automaticamente responde por tentativa de furto — mas a desistência voluntária afasta a tentativa, restando só o crime já consumado (violação de domicílio).",
          "regraMemoria": "Desistiu antes de terminar o crime-fim? Só responde pelo que já fez até ali — aqui, invasão de domicílio."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "A extorsão mediante sequestro é crime permanente, cuja consumação se prolonga enquanto dura o cárcere da vítima; por isso, a lei mais gravosa que entra em vigor durante a permanência já se aplica ao fato, considerando-se o crime praticado durante toda a permanência, conforme a Súmula 711 do STF.",
          "explicacaoErradas": "Não se trata de retroatividade (que beneficiaria o réu), nem de alternatividade ou ubiquidade, regras usadas para outros conflitos de normas ou de lugar do crime; a chave é a natureza permanente do delito, que faz a lei nova incidir mesmo sem ser mais benéfica.",
          "pegadinha": "A pegadinha é lembrar da regra geral de que lei penal não retroage para prejudicar o réu — mas em crime permanente, enquanto a execução continua, a lei nova, ainda que mais severa, já incide.",
          "regraMemoria": "Crime permanente é crime 'ao vivo': mudou a lei enquanto ele ainda acontecia, a lei nova pega, mesmo mais dura."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Pedro acreditava estar cremando um cadáver real; a farsa foi construída com sedação e documentos falsificados sofisticados, tornando o engano inevitável para qualquer coveiro. Isso configura erro de tipo invencível (art. 20, CP), que exclui tanto o dolo quanto a culpa, afastando qualquer crime.",
          "explicacaoErradas": "Não há homicídio culposo (C) porque o erro era inevitável mesmo com o cuidado objetivo esperado de um coveiro — não houve negligência. Não há homicídio qualificado (D) porque Pedro não tinha intenção de matar. Vilipêndio culposo (B) nem existe como modalidade, já que o crime do art. 212 do CP exige dolo.",
          "pegadinha": "Parece que Pedro 'deveria ter desconfiado' e por isso responderia por culpa — mas o erro foi construído para ser indetectável, o que afasta até a culpa.",
          "regraMemoria": "Erro de tipo invencível: nem dolo, nem culpa, nem crime — ninguém poderia ter percebido."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Bernardo furtou para salvar a vida do filho sequestrado, sob ameaça grave e atual contra terceiro querido. Isso configura coação moral irresistível (art. 22, CP), que gera inexigibilidade de conduta diversa e exclui a culpabilidade, isentando-o de pena.",
          "explicacaoErradas": "Não é exercício regular de direito (A), pois furtar nunca é um direito. Não é legítima defesa de terceiro (C), pois o bem sacrificado (dinheiro do banco) pertence a um terceiro alheio à agressão, e o que se exclui aqui é a culpabilidade, não a ilicitude. O furto se consumou (posse da coisa), então dizer que ele 'deve responder' só por isso (D) ignora a excludente de culpabilidade, aplicável mesmo a crime consumado.",
          "pegadinha": "A pegadinha é achar que, por ter sido flagrado com o dinheiro (furto consumado), ele necessariamente responde pelo crime — mas consumação e culpabilidade são planos diferentes: o fato é típico e ilícito, mas não é culpável.",
          "regraMemoria": "Ameaça a quem você ama = coação moral irresistível: exclui a culpa, não o crime em si."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "A incompetência absoluta é matéria de ordem pública, não sujeita à preclusão, podendo ser arguida a qualquer tempo, inclusive após o trânsito em julgado, por meio de habeas corpus. Pelo art. 567 do CPP, a incompetência anula apenas os atos decisórios (sentença e decisões posteriores), preservando atos instrutórios como a busca e apreensão.",
          "explicacaoErradas": "A (trânsito em julgado impede a alegação) está errada porque incompetência absoluta nunca preclui. B exagera ao anular também a busca e apreensão e 'todos os atos dela decorrentes', quando o art. 567 do CPP só invalida atos decisórios. D erra o instrumento: mandado de segurança não serve para questionar ato de persecução penal que ameaça a liberdade — o remédio é o habeas corpus.",
          "pegadinha": "A armadilha é achar que anular por incompetência absoluta destrói tudo, inclusive a prova colhida — mas a lei protege os atos não decisórios da diligência.",
          "regraMemoria": "Incompetência absoluta nunca preclui e vira HC a qualquer momento; mas só derruba os atos decisórios, não a prova em si (art. 567, CPP)."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Decisões do juízo da execução penal se impugnam por agravo em execução, no prazo de 5 dias (art. 197, LEP, e Súmula 700, STF), aplicando-se o rito do recurso em sentido estrito. Como o caso envolve a liberdade do apenado, o habeas corpus pode ser impetrado cumulativamente, sem prejuízo do recurso.",
          "explicacaoErradas": "Não cabe apelação (B) nem recurso em sentido estrito autônomo (D) contra decisão do juiz da execução — o recurso próprio é sempre o agravo em execução. C erra ao tornar o HC subsidiário ('somente se não interposto recurso'); na verdade, agravo e HC podem ser usados ao mesmo tempo, pois o HC tutela a liberdade e não depende do esgotamento de outro recurso.",
          "pegadinha": "A pegadinha é achar que HC e agravo se excluem — envolvendo liberdade, podem ser manejados simultaneamente.",
          "regraMemoria": "Execução penal = agravo em execução, 5 dias, sempre. E HC anda junto, nunca como reserva."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "Injúria comum (art. 140, CP) é crime de ação penal exclusivamente privada (art. 145, CP), processada por queixa-crime do ofendido, não por denúncia do Ministério Público. Como não há aqui injúria racial (que desde 2023 é pública condicionada), a legitimidade para acusar é só de Felícia.",
          "explicacaoErradas": "A está errada porque violência doméstica não transforma a natureza da ação penal da injúria simples. C e D tratam a injúria como pública condicionada à representação — regra que só vale para a injúria racial/por preconceito (art. 140, §3º, CP), não para o insulto comum de 'assassina'.",
          "pegadinha": "A pegadinha é confundir injúria comum (privada) com injúria racial (pública condicionada desde a Lei 14.532/2023) — o xingamento aqui não tem conotação racial.",
          "regraMemoria": "Injúria comum = queixa da vítima, sempre. Só a injúria racial virou 'caso do MP'."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "A Lei 13.431/2017 (Sistema de Garantia de Direitos da Criança e do Adolescente Vítima ou Testemunha de Violência) prevê medidas protetivas de urgência, incluindo a proibição de contato e aproximação do agressor, aplicáveis independentemente do sexo da vítima.",
          "explicacaoErradas": "A ignora que existe lei específica para crianças/adolescentes vítimas de violência, não sendo necessário recorrer ao CPP genérico. B inverte a ordem: não é preciso destituir o poder familiar antes de buscar proteção urgente. D erra a lei aplicável — a Lei Maria da Penha protege mulheres, e não há lacuna a suprir por analogia, já que existe legislação própria para crianças e adolescentes.",
          "pegadinha": "A armadilha é achar que, por Joaquim ser menino, só resta a Lei Maria da Penha por analogia — mas existe lei específica e neutra quanto ao gênero da vítima infantil.",
          "regraMemoria": "Criança e adolescente vítima de violência doméstica = Lei 13.431/2017, não importa o sexo."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "A mistura de todos os alimentos em um único invólucro, sem possibilidade de repetição da perícia, quebrou a cadeia de custódia e impede saber com certeza qual alimento causou a morte. Isso compromete a prova do nexo de causalidade específico entre a conduta de Caim e o resultado, elemento essencial do homicídio.",
          "explicacaoErradas": "A necropsia (A) não foi afetada, pois seu objeto é o corpo, não os alimentos. A quebra de cadeia de custódia não gera nulidade processual ampla (C) nem exige desentranhamento automático da perícia (D) — pela jurisprudência do STJ, ela fragiliza a força probante da prova específica, sem contaminar todo o processo.",
          "pegadinha": "A pegadinha é achar que quebra de cadeia de custódia sempre anula a prova ou o processo inteiro — na verdade, o efeito é enfraquecer a fiabilidade da prova quanto ao ponto atingido pela contaminação (aqui, o nexo causal).",
          "regraMemoria": "Cadeia de custódia quebrada não anula tudo: ela fura a confiança no elo específico da prova — aqui, o nexo causal."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "Quando há dúvida sobre a imparcialidade do júri ou risco à segurança do acusado por comoção popular no local do julgamento, o instrumento cabível é o desaforamento (art. 427-428, CPP), que transfere o julgamento do júri para outra comarca.",
          "explicacaoErradas": "Não é caso de incidente de deslocamento de competência para a Justiça Federal (A), reservado a graves violações de direitos humanos. Revisão criminal (B) só serve após trânsito em julgado condenatório. Exceção de incompetência territorial (C) não se aplica, pois a comarca é territorialmente competente — o problema é a imparcialidade do julgamento, não a competência.",
          "pegadinha": "A armadilha é confundir 'mudar a comarca do júri por risco/comoção' com 'incompetência territorial' — são institutos diferentes; aqui o correto é o desaforamento.",
          "regraMemoria": "Júri com risco à imparcialidade ou à segurança do réu = desaforamento, não incompetência."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Mesmo demitida por justa causa, Joana mantém a qualidade de segurada durante o período de graça de 12 meses após cessar as contribuições (art. 15, II, Lei 8.213/91). Como o acidente ocorreu 6 meses depois, dentro desse período, e o acidente de qualquer natureza dispensa carência (art. 26, II, Lei 8.213/91), ela tem direito à aposentadoria por incapacidade permanente.",
          "explicacaoErradas": "B erra ao achar que a justa causa retira direitos previdenciários — o motivo da demissão é irrelevante para o período de graça. C é desnecessária, pois ela já é segurada obrigatória dentro do período de graça, não precisando contribuir como facultativa. D inventa um prazo de 3 meses que não existe na lei — o período de graça é de 12 meses.",
          "pegadinha": "A pegadinha é achar que demissão por justa causa 'corta' os direitos previdenciários — mas o período de graça de 12 meses independe do motivo do desligamento.",
          "regraMemoria": "Justa causa demite do emprego, não da Previdência: 12 meses de período de graça continuam valendo."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O acidente ocorreu no trajeto de retorno ao trabalho durante uma entrega, sendo equiparado a acidente de trabalho (art. 21, IV, 'd', Lei 8.213/91). Após o retorno de auxílio-doença acidentário, o art. 118 da Lei 8.213/91 garante estabilidade provisória de 12 meses no emprego, independentemente de sequela.",
          "explicacaoErradas": "A não cabe porque ela se recuperou plenamente, sem incapacidade permanente. B não cabe porque o auxílio-acidente exige sequela que reduza a capacidade laboral, o que não ocorreu aqui. C está errada porque durante o afastamento por incapacidade quem paga é o INSS (benefício previdenciário), não a empresa via salário normal.",
          "pegadinha": "A pegadinha é esquecer que a estabilidade do art. 118 da Lei 8.213/91 vale mesmo sem sequela — basta ter havido auxílio-doença acidentário.",
          "regraMemoria": "Voltou de acidente de trabalho? 12 meses de estabilidade garantidos, com ou sem sequela."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "A CLT, atualizada pela reforma trabalhista e por normas posteriores, admite expressamente a contratação de aprendizes e estagiários maiores de 18 anos em regime de teletrabalho, não havendo vedação legal a essa modalidade para esses contratos especiais.",
          "explicacaoErradas": "B e C inventam vedações que não existem — tanto a aprendizagem quanto o estágio podem ocorrer em teletrabalho. D é desnecessária: sendo maiores de 18 anos, os aprendizes e estagiários têm plena capacidade civil, dispensando autorização de pais ou responsáveis.",
          "pegadinha": "A pegadinha é achar que contratos 'especiais' (aprendizagem, estágio) seriam incompatíveis com o teletrabalho, ou que maiores de idade ainda precisam de autorização dos pais.",
          "regraMemoria": "Maior de 18 + aprendiz ou estagiário = pode fazer home office, sem pedir licença a ninguém."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O atraso na entrega das guias do FGTS e dos formulários do seguro-desemprego, ainda que as verbas rescisórias tenham sido pagas no prazo, gera a multa do art. 477, §8º, da CLT, no valor equivalente a um salário do empregado, em favor do trabalhador.",
          "explicacaoErradas": "A está errada porque a multa do §8º é autônoma e não depende de prova de prejuízo. B e C inventam percentuais e penalidades (50% ou pagamento em dobro) que não correspondem à previsão legal, que é de um salário integral.",
          "pegadinha": "A pegadinha é achar que, como o dinheiro caiu na conta a tempo, não há mais nada a pagar — mas a entrega das guias é uma obrigação distinta, com multa própria.",
          "regraMemoria": "Guia do FGTS e seguro-desemprego atrasados = multa de 1 salário, ainda que o dinheiro tenha caído em dia."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O art. 394-A, §2º, da CLT determina que, ao remanejar a gestante ou lactante de local insalubre por medida de proteção, a empresa deve continuar pagando o adicional de insalubridade enquanto durar o afastamento, compensando o valor com a cota patronal devida ao INSS.",
          "explicacaoErradas": "A e B erram ao extinguir o adicional só porque houve a transferência — a lei garante a manutenção do valor justamente para não penalizar financeiramente a gestante. C inventa uma redução pela metade que a lei não prevê; o valor deve ser mantido integralmente.",
          "pegadinha": "A pegadinha é achar que, saindo do ambiente insalubre, o adicional acaba automaticamente — mas a lei protege a gestante mantendo o valor, com compensação previdenciária para a empresa.",
          "regraMemoria": "Gestante tirada do insalubre não perde o adicional: a empresa paga e depois compensa com o INSS."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "A jornada efetivamente trabalhada por Luana é de 6 horas (7h às 13h15, descontados os 15 minutos de intervalo), não ultrapassando o limite do art. 71, §1º, da CLT. Por isso, o intervalo mínimo exigido é de apenas 15 minutos, que já foi corretamente concedido — não há hora extra a pagar.",
          "explicacaoErradas": "A e D presumem que falta parte do intervalo, mas o intervalo de 15 minutos já é o correto para essa jornada. C exigiria 1 hora de intervalo, regra aplicável apenas quando a jornada efetiva ultrapassa 6 horas, o que não é o caso.",
          "pegadinha": "A pegadinha é somar o período total (7h às 13h15 = 6h15) e achar que passou de 6 horas — mas o intervalo não conta como tempo trabalhado; descontando-o, sobram exatos 6 horas de trabalho.",
          "regraMemoria": "Para saber se passa de 6 horas, tire o intervalo da conta primeiro — só a jornada efetiva importa."
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
          "respostaCorreta": 3,
          "explicacaoCorreta": "O uso de tornozeleira eletrônica é medida cautelar diversa da prisão (art. 319, IX, CPP), aplicada em processo ainda em curso, sem condenação definitiva e sem relação com o trabalho. Pela presunção de inocência (art. 5º, LVII, CF), o contrato de trabalho de Reginaldo não sofre nenhuma consequência.",
          "explicacaoErradas": "B erra porque a suspensão do contrato por questão criminal (art. 494, CLT) exige prisão efetiva, o que não é o caso de quem está solto com tornozeleira. C erra porque não há justa causa sem condenação e sem relação do fato com o trabalho. A inventa uma interrupção com pagamento de 50% que não tem previsão legal.",
          "pegadinha": "A pegadinha é confundir tornozeleira eletrônica com prisão — ela é justamente a alternativa à prisão, permitindo que o trabalhador continue exercendo normalmente suas atividades.",
          "regraMemoria": "Tornozeleira não é cadeia: sem prisão e sem condenação, o contrato de trabalho segue intocado."
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
          "respostaCorreta": 2,
          "explicacaoCorreta": "Desde a reforma trabalhista (Lei 13.467/2017), o art. 800 da CLT exige que a exceção de incompetência territorial seja apresentada em petição autônoma, no prazo de 5 dias a contar do recebimento da notificação, antes da realização da audiência.",
          "explicacaoErradas": "A está errada porque a competência territorial trabalhista (art. 651, CLT, local da prestação de serviços) não é regra disponível para o empregado escolher livremente. B e D descrevem a sistemática antiga (alegação oral na audiência antes da defesa), superada pela reforma trabalhista de 2017.",
          "pegadinha": "A pegadinha é aplicar a regra antiga de arguição oral na audiência — a reforma trabalhista mudou o procedimento para petição escrita e prévia, em 5 dias.",
          "regraMemoria": "Pós-reforma: incompetência territorial trabalhista é petição em 5 dias, antes da audiência — nunca mais 'na hora'."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 790, §3º, da CLT autoriza o juiz a conceder a justiça gratuita de ofício, mesmo sem requerimento, a quem perceba salário igual ou inferior a 40% do teto do RGPS. Ganhando um salário mínimo, Lorena se enquadra nessa presunção legal de hipossuficiência.",
          "explicacaoErradas": "A está errada porque a CLT não é omissa — traz critério objetivo de renda. C erra ao chamar de extra petita algo que a lei expressamente autoriza de ofício. D exagera ao dizer que é automático para qualquer trabalhador — depende da faixa salarial ou da declaração de hipossuficiência para quem ganha mais.",
          "pegadinha": "A pegadinha é achar que conceder algo não pedido é sempre julgamento extra petita — mas a lei processual trabalhista cria exceção expressa para a gratuidade de justiça.",
          "regraMemoria": "Até 40% do teto do INSS = juiz pode dar gratuidade de justiça de ofício, mesmo sem pedido."
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
          "respostaCorreta": 1,
          "explicacaoCorreta": "O art. 195, §2º, da CLT e a jurisprudência do TST admitem que a perícia de insalubridade seja realizada tanto por médico do trabalho quanto por engenheiro do trabalho, desde que devidamente registrados no órgão competente.",
          "explicacaoErradas": "A e D erram ao tornar a perícia privativa de apenas uma categoria profissional — a CLT admite expressamente as duas. C erra ao dispensar a habilitação específica exigida por lei, permitindo 'qualquer profissional de confiança do juiz'.",
          "pegadinha": "A pegadinha é achar que só médico (ou só engenheiro) pode periciar insalubridade — a CLT dá a mesma habilitação às duas profissões.",
          "regraMemoria": "Insalubridade: médico OU engenheiro do trabalho, os dois servem, desde que registrados."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "Contra decisão de TRT que extingue, sem resolução de mérito, dissídio coletivo processado originariamente naquele tribunal, cabe recurso ordinário para o TST, no prazo de 8 dias (art. 895, II, CLT).",
          "explicacaoErradas": "Agravo de petição (C) é recurso de execução, não de dissídio coletivo. Recurso de revista (B) pressupõe decisão em recurso ordinário anterior de processo individual, não decisão originária de TRT. Recurso extraordinário (D) é via constitucional ao STF, não a via ordinária cabível aqui.",
          "pegadinha": "A pegadinha é confundir a competência originária do TRT em dissídio coletivo com processos individuais que sobem por recurso de revista — aqui o caminho é direto: recurso ordinário ao TST.",
          "regraMemoria": "Dissídio coletivo decidido pelo TRT (1ª instância) = recurso ordinário, 8 dias, direto pro TST."
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
          "respostaCorreta": 0,
          "explicacaoCorreta": "O art. 114, III, da Constituição Federal atribui expressamente à Justiça do Trabalho a competência para julgar ações sobre representação sindical, inclusive entre sindicatos, como a disputa sobre legitimidade para receber contribuições sindicais.",
          "explicacaoErradas": "B e C erram ao indicar Justiça Federal ou Estadual, competências afastadas pela regra constitucional específica do art. 114, III. D erra ao negar acesso ao Judiciário, violando a inafastabilidade da jurisdição (art. 5º, XXXV, CF); o MTE não decide esse tipo de disputa com força de coisa julgada.",
          "pegadinha": "A pegadinha é achar que, por envolver dois sindicatos (e não um empregado), o caso sai da Justiça do Trabalho — mas o art. 114, III, CF inclui expressamente conflitos entre sindicatos.",
          "regraMemoria": "Briga de sindicato com sindicato por representação/contribuição sindical = sempre Justiça do Trabalho."
        }
      ]
    }
  ];

  // Atualiza explicação/pegadinha/regra de memória de questões já inseridas
  // anteriormente (quando esse conteúdo foi escrito depois da inserção
  // inicial). Casa pelo par prova+enunciado, já que o id gravado no banco é
  // aleatório e não rastreia de volta pra entrada correspondente em PROVAS.
  function atualizarConteudoPedagogico() {
    return DB.getAll('questoes').then(function (existentes) {
      var porChave = {};
      existentes.forEach(function (r) {
        porChave[r.provaOrigem + '::' + r.enunciado] = r;
      });

      var atualizacoes = [];
      PROVAS.forEach(function (prova) {
        prova.questoes.forEach(function (q) {
          if (!q.explicacaoCorreta) return;
          var existente = porChave[prova.provaOrigem + '::' + q.enunciado];
          if (!existente || existente.explicacaoCorreta) return;
          existente.explicacaoCorreta = q.explicacaoCorreta;
          existente.explicacaoErradas = q.explicacaoErradas || '';
          existente.pegadinha = q.pegadinha || '';
          existente.regraMemoria = q.regraMemoria || '';
          atualizacoes.push(DB.put('questoes', existente));
        });
      });
      return Promise.all(atualizacoes);
    });
  }

  function seedar() {
    var versaoAplicada = Storage.read(Storage.KEYS.questoesSeedVersion, 0);
    if (versaoAplicada >= SEED_VERSION_ATUAL) return Promise.resolve();

    return DB.getAll('disciplinas').then(function (disciplinas) {
      var idPorNome = {};
      disciplinas.forEach(function (d) { idPorNome[d.nome] = d.id; });

      var pendentes = [];
      PROVAS.forEach(function (prova) {
        if (prova.seedVersion <= versaoAplicada) return;
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
            explicacaoCorreta: q.explicacaoCorreta || '',
            explicacaoErradas: q.explicacaoErradas || '',
            pegadinha: q.pegadinha || '',
            regraMemoria: q.regraMemoria || '',
            casoAbsurdo: ''
          }));
        });
      });

      return Promise.all(pendentes).then(function () {
        return atualizarConteudoPedagogico();
      }).then(function () {
        Storage.write(Storage.KEYS.questoesSeedVersion, SEED_VERSION_ATUAL);
      });
    });
  }

  return { seedar: seedar };
})();
