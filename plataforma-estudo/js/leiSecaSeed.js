// Banco de "lei seca" (redação literal de dispositivos legais) para
// praticar o reconhecimento da redação exata cobrada na 1ª fase da OAB —
// complementa as questões de aplicação de caso concreto com um treino
// específico de memorização de texto de lei.
var LeiSecaSeed = (function () {
  var SEED_VERSION_ATUAL = 1;

  var DISPOSITIVOS = [
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 1º, I e II",
    "territorio": "Ética",
    "textoCorreto": "São atividades privativas de advocacia: I – a postulação a qualquer órgão do Poder Judiciário e aos juizados especiais; II – as atividades de consultoria, assessoria e direção jurídicas.",
    "versaoErrada1": "São atividades privativas de advocacia: I – a postulação a qualquer órgão do Poder Judiciário, exceto aos juizados especiais; II – as atividades de consultoria, assessoria e direção jurídicas.",
    "versaoErrada2": "São atividades privativas de advocacia: I – a postulação a qualquer órgão do Poder Judiciário e aos juizados especiais; II – as atividades de consultoria, assessoria ou direção jurídicas.",
    "explicacaoDiferenca": "Na versão errada 1, a inclusão da ressalva 'exceto aos juizados especiais' retira esses órgãos do rol da postulação privativa, o que é falso: o Estatuto inclui expressamente os juizados especiais no alcance da reserva de mercado do advogado (a dispensa de advogado em causas de menor valor é exceção criada pela Lei 9.099/95, não pelo Estatuto). Na versão errada 2, a troca de 'e' por 'ou' no inciso II sugere que bastaria exercer apenas uma das três atividades (consultoria, assessoria ou direção jurídica) para configurar exclusividade, quando na verdade o dispositivo lista as três atividades de forma cumulativa como privativas, não alternativa.",
    "regraMemoria": "Postular é coisa de advogado em qualquer Judiciário, inclusive juizados especiais; e consultoria + assessoria + direção jurídica andam juntas, não alternadas.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 1º, § 1º",
    "territorio": "Ética",
    "textoCorreto": "Não se inclui na atividade privativa de advocacia a impetração de habeas corpus em qualquer instância ou tribunal.",
    "versaoErrada1": "Inclui-se na atividade privativa de advocacia a impetração de habeas corpus em qualquer instância ou tribunal.",
    "versaoErrada2": "Não se inclui na atividade privativa de advocacia a impetração de habeas corpus, exceto perante os Tribunais Superiores.",
    "explicacaoDiferenca": "A versão errada 1 inverte o sentido da norma: o habeas corpus é justamente uma exceção à reserva de mercado da advocacia, podendo ser impetrado por qualquer pessoa, leiga ou não; dizer que 'se inclui' na atividade privativa reintroduz uma exigência de capacidade postulatória (advogado) que a lei expressamente afasta, o que prejudicaria a tutela urgente da liberdade de locomoção. A versão errada 2 cria uma exceção territorial/hierárquica inexistente (limitando a dispensa de advogado aos Tribunais Superiores), quando a lei é expressa e irrestrita ao dizer 'em qualquer instância ou tribunal'.",
    "regraMemoria": "Habeas corpus não tem dono: qualquer pessoa pode impetrar, em qualquer instância ou tribunal, sem exceção.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 3º, § 1º",
    "territorio": "Ética",
    "textoCorreto": "Exerce atividade de advocacia, sujeitando-se ao regime desta lei, além do estagiário de advocacia, regularmente inscrito, o Advogado que atua em causa própria.",
    "versaoErrada1": "Exerce atividade de advocacia, sujeitando-se ao regime desta lei, além do estagiário de advocacia, ainda que não inscrito, o Advogado que atua em causa própria.",
    "versaoErrada2": "Exerce atividade de advocacia, sujeitando-se ao regime desta lei, além do estagiário de advocacia, regularmente inscrito, o Advogado que atua em causa alheia.",
    "explicacaoDiferenca": "A versão errada 1 dispensa a exigência de inscrição regular do estagiário, quando a lei condiciona expressamente a sujeição ao regime da advocacia à regularidade da inscrição - um estágio não registrado na OAB não gera as prerrogativas nem os deveres do Estatuto. A versão errada 2 troca 'causa própria' por 'causa alheia', descaracterizando o ponto central do parágrafo, que é justamente destacar que o advogado que postula em nome de si mesmo (e não representando terceiros) também está exercendo advocacia sujeita à lei.",
    "regraMemoria": "Estagiário só conta se regularmente inscrito; e advogado que atua em causa própria também é advogado exercendo advocacia.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 4º",
    "territorio": "Ética",
    "textoCorreto": "São nulos os atos privativos de advogado praticados por pessoa não inscrita na OAB, sem prejuízo das sanções civis, penais e administrativas.",
    "versaoErrada1": "São anuláveis os atos privativos de advogado praticados por pessoa não inscrita na OAB, sem prejuízo das sanções civis, penais e administrativas.",
    "versaoErrada2": "São nulos os atos privativos de advogado praticados por pessoa não inscrita na OAB, não gerando qualquer outra sanção civil, penal ou administrativa.",
    "explicacaoDiferenca": "A versão errada 1 troca 'nulos' por 'anuláveis', alterando o regime jurídico do vício: a nulidade absoluta pode ser reconhecida a qualquer tempo, inclusive de ofício, e não se convalida, enquanto a anulabilidade depende de provocação da parte interessada e pode ser sanada, mudando completamente as consequências do ato praticado por quem não é advogado. A versão errada 2 inverte a cláusula final, sugerindo que a nulidade do ato afasta outras responsabilizações, quando a lei é expressa em cumular a nulidade com eventual sanção civil, penal e administrativa de quem exerceu ilegalmente a advocacia.",
    "regraMemoria": "Ato de advogado praticado por quem não é advogado é nulo E ainda gera punição - a nulidade não substitui a sanção.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 6º",
    "territorio": "Ética",
    "textoCorreto": "Não há hierarquia nem subordinação entre advogados, magistrados e membros do Ministério Público, devendo todos tratar-se com consideração e respeito recíprocos.",
    "versaoErrada1": "Não há hierarquia nem subordinação entre advogados e magistrados, devendo todos tratar-se com consideração e respeito recíprocos.",
    "versaoErrada2": "Não há hierarquia nem subordinação entre advogados, magistrados e membros do Ministério Público, salvo em audiência, devendo todos tratar-se com consideração e respeito recíprocos.",
    "explicacaoDiferenca": "A versão errada 1 suprime os 'membros do Ministério Público' do rol, retirando uma das três carreiras jurídicas expressamente equiparadas pela norma quanto à ausência de hierarquia, o que poderia sugerir, erroneamente, alguma subordinação entre advogado e promotor. A versão errada 2 acrescenta a ressalva falsa 'salvo em audiência': a isonomia de tratamento entre advogado, juiz e membro do MP vale em qualquer ambiente processual, sem exceção prevista em lei para o momento da audiência.",
    "regraMemoria": "Advogado, juiz e promotor são iguais entre si, sem hierarquia, sempre e em qualquer ato - inclusive em audiência.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 7º, II",
    "territorio": "Ética",
    "textoCorreto": "São direitos do advogado a inviolabilidade de seu escritório ou local de trabalho, bem como de seus instrumentos de trabalho, de sua correspondência escrita, eletrônica, telefônica e telemática, desde que relativas ao exercício da advocacia.",
    "versaoErrada1": "São direitos do advogado a inviolabilidade de seu escritório ou local de trabalho, bem como de seus instrumentos de trabalho, de sua correspondência escrita, eletrônica, telefônica e telemática, ainda que não relativas ao exercício da advocacia.",
    "versaoErrada2": "São direitos do advogado a inviolabilidade de seu escritório ou local de trabalho, bem como de seus instrumentos de trabalho, de sua correspondência escrita, eletrônica ou telefônica, desde que relativas ao exercício da advocacia.",
    "explicacaoDiferenca": "A versão errada 1 inverte a condição legal: a inviolabilidade só protege a correspondência e os instrumentos de trabalho quando relacionados ao exercício profissional da advocacia; tornar a proteção incondicional (mesmo para assuntos pessoais, estranhos à profissão) ampliaria indevidamente a garantia, permitindo blindar comunicações sem qualquer relação com a atuação advocatícia. A versão errada 2 suprime a modalidade 'telemática' e troca 'e' por 'ou' no rol, reduzindo o alcance da proteção, que a lei garante cumulativamente a todas as formas de comunicação listadas.",
    "regraMemoria": "Escritório e comunicações do advogado são invioláveis, mas só quando forem 'coisa de advocacia' - e a lista de meios (escrita, eletrônica, telefônica, telemática) é completa, não parcial.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 7º, III",
    "territorio": "Ética",
    "textoCorreto": "São direitos do advogado não ser recolhido preso, antes de sentença transitada em julgado, senão em sala de Estado Maior, com instalações e comodidades condignas, e, na sua falta, em prisão domiciliar.",
    "versaoErrada1": "São direitos do advogado não ser recolhido preso, antes de sentença transitada em julgado, senão em prisão domiciliar, e, na sua falta, em sala de Estado Maior, com instalações e comodidades condignas.",
    "versaoErrada2": "São direitos do advogado não ser recolhido preso, antes de sentença transitada em julgado, senão em cela especial, com instalações e comodidades condignas, e, na sua falta, em prisão domiciliar.",
    "explicacaoDiferenca": "A versão errada 1 inverte a ordem de prioridade estabelecida em lei: o recolhimento deve ocorrer primeiro em sala de Estado Maior, e somente na falta desta em prisão domiciliar; inverter essa ordem mudaria a prática de recolhimento provisório de advogados presos, retirando a prioridade da sala de Estado Maior. A versão errada 2 troca 'sala de Estado Maior' por 'cela especial': são institutos distintos - a sala de Estado Maior é a prerrogativa profissional específica do advogado, enquanto a cela especial é benefício genérico ligado a outras condições pessoais (como grau de instrução), previsto em legislação diversa; confundi-los retira a prerrogativa própria da advocacia.",
    "regraMemoria": "Advogado preso antes do trânsito em julgado: primeiro sala de Estado Maior; só na falta dela, prisão domiciliar.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 7º, XIII",
    "territorio": "Ética",
    "textoCorreto": "São direitos do advogado examinar, em qualquer repartição policial, mesmo sem procuração, autos de flagrante e de inquérito, findos ou em andamento, ainda que conclusos à autoridade, podendo copiar peças e tomar apontamentos.",
    "versaoErrada1": "São direitos do advogado examinar, em qualquer repartição policial, desde que com procuração, autos de flagrante e de inquérito, findos ou em andamento, ainda que conclusos à autoridade, podendo copiar peças e tomar apontamentos.",
    "versaoErrada2": "São direitos do advogado examinar, em qualquer repartição policial, mesmo sem procuração, autos de flagrante e de inquérito, findos ou em andamento, salvo se conclusos à autoridade, podendo copiar peças e tomar apontamentos.",
    "explicacaoDiferenca": "A versão errada 1 exige procuração para o exame dos autos, quando a lei a dispensa expressamente, por se tratar de prerrogativa da advocacia em geral (fiscalização do inquérito), e não de representação de cliente específico; exigir procuração restringiria indevidamente o acesso do advogado aos autos. A versão errada 2 insere a exceção 'salvo se conclusos à autoridade', suprimindo justamente a hipótese em que a garantia mais importa (autos na fase decisória do delegado), esvaziando a prerrogativa no momento mais sensível.",
    "regraMemoria": "Advogado examina autos de flagrante/inquérito sem procuração, mesmo concluso à autoridade - e pode copiar e anotar.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 7º, XX",
    "territorio": "Ética",
    "textoCorreto": "São direitos da advogada gestante ou lactante não ser submetida a detector de metais e aparelhos similares, quando em atividade em qualquer tribunal ou repartição policial, cabendo-lhe a reserva de vagas em garagens dos fóruns e tribunais.",
    "versaoErrada1": "São direitos da advogada gestante não ser submetida a detector de metais e aparelhos similares, quando em atividade em qualquer tribunal ou repartição policial, cabendo-lhe a reserva de vagas em garagens dos fóruns e tribunais.",
    "versaoErrada2": "São direitos da advogada gestante ou lactante não ser submetida a detector de metais e aparelhos similares, quando em atividade em qualquer tribunal ou repartição policial, podendo requerer, a seu critério, reserva de vagas em garagens dos fóruns e tribunais.",
    "explicacaoDiferenca": "A versão errada 1 suprime 'ou lactante' do texto, restringindo indevidamente o direito apenas à gestante e excluindo a advogada em período de amamentação da proteção contra detectores de metal, quando a lei protege expressamente as duas situações. A versão errada 2 transforma a reserva de vaga na garagem, que é direito automático ('cabendo-lhe'), em faculdade sujeita a requerimento discricionário ('podendo requerer, a seu critério'), descaracterizando a natureza de direito subjetivo automático da prerrogativa.",
    "regraMemoria": "Gestante OU lactante: sem detector de metal e com vaga garantida na garagem - é direito automático, não pedido a critério de quem quer que seja.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 8º, IV",
    "territorio": "Ética",
    "textoCorreto": "São requisitos para inscrição como advogado ter idoneidade moral, respondendo negativamente a esse requisito aquele que tiver sido condenado por crime infamante, salvo reabilitação judicial.",
    "versaoErrada1": "São requisitos para inscrição como advogado ter idoneidade moral, respondendo negativamente a esse requisito aquele que tiver sido condenado por crime infamante, ainda que tenha havido reabilitação judicial.",
    "versaoErrada2": "São requisitos para inscrição como advogado ter idoneidade moral, respondendo negativamente a esse requisito aquele que tiver sido condenado por qualquer crime, salvo reabilitação judicial.",
    "explicacaoDiferenca": "A versão errada 1 nega o efeito da reabilitação judicial, tornando a vedação permanente mesmo após reabilitação, quando a lei prevê justamente que a reabilitação supera o óbice da condenação por crime infamante, permitindo a inscrição - transformar isso em impedimento perpétuo cria uma pena não prevista em lei. A versão errada 2 estende a restrição a 'qualquer crime', quando a lei exige especificamente que o crime seja 'infamante' (ligado à desonestidade/torpeza); estender indiscriminadamente atingiria até condenações sem qualquer relação com a idoneidade moral exigida do advogado.",
    "regraMemoria": "Idoneidade moral só cai com crime infamante - e a reabilitação judicial limpa a ficha para a inscrição.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 15, caput e § 1º",
    "territorio": "Ética",
    "textoCorreto": "Os advogados podem reunir-se em sociedade simples de prestação de serviços de advocacia, na forma disciplinada nesta lei e no regulamento geral. A sociedade de advogados adquire personalidade jurídica com o registro aprovado dos seus atos constitutivos no Conselho Seccional da OAB em cuja base territorial tiver sede.",
    "versaoErrada1": "Os advogados podem reunir-se em sociedade empresária de prestação de serviços de advocacia, na forma disciplinada nesta lei e no regulamento geral. A sociedade de advogados adquire personalidade jurídica com o registro aprovado dos seus atos constitutivos no Conselho Seccional da OAB em cuja base territorial tiver sede.",
    "versaoErrada2": "Os advogados podem reunir-se em sociedade simples de prestação de serviços de advocacia, na forma disciplinada nesta lei e no regulamento geral. A sociedade de advogados adquire personalidade jurídica com o registro aprovado dos seus atos constitutivos no Conselho Federal da OAB em cuja base territorial tiver sede.",
    "explicacaoDiferenca": "A versão errada 1 troca 'sociedade simples' por 'sociedade empresária': a lei exige que a sociedade de advogados adote sempre a forma de sociedade simples, pois a advocacia é atividade de natureza intelectual, não empresarial; trocar a forma societária descaracteriza um requisito essencial e levaria a um enquadramento jurídico incompatível com a atividade advocatícia. A versão errada 2 troca 'Conselho Seccional' por 'Conselho Federal': a competência para registrar os atos constitutivos e conceder personalidade jurídica é do Conselho Seccional da base territorial da sede da sociedade, não do Conselho Federal, que tem atribuições normativas e recursais distintas.",
    "regraMemoria": "Sociedade de advogados é sempre simples (nunca empresária) e se registra no Seccional da sede, não no Federal.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 18",
    "territorio": "Ética",
    "textoCorreto": "A relação de emprego, na qualidade de advogado, não retira a isenção técnica nem reduz a independência profissional inerentes à advocacia. Parágrafo único: O advogado empregado não é obrigado à execução de atividades estranhas à advocacia.",
    "versaoErrada1": "A relação de emprego, na qualidade de advogado, retira a isenção técnica e reduz a independência profissional inerentes à advocacia. Parágrafo único: O advogado empregado não é obrigado à execução de atividades estranhas à advocacia.",
    "versaoErrada2": "A relação de emprego, na qualidade de advogado, não retira a isenção técnica nem reduz a independência profissional inerentes à advocacia. Parágrafo único: O advogado empregado é obrigado à execução de atividades estranhas à advocacia, quando determinado pelo empregador.",
    "explicacaoDiferenca": "A versão errada 1 inverte o caput, afirmando que o vínculo empregatício retira a isenção técnica e reduz a independência profissional, quando a lei garante exatamente o oposto: mesmo sendo empregado, o advogado mantém autonomia técnica e não se subordina ao empregador quanto ao conteúdo de sua atuação jurídica. A versão errada 2 inverte o parágrafo único, tornando obrigatória a execução de atividades estranhas à advocacia quando determinado pelo empregador, eliminando a proteção específica contra o desvio de função que a lei expressamente veda ao advogado empregado.",
    "regraMemoria": "Advogado empregado continua tecnicamente livre e não é obrigado a fazer trabalho que não seja de advocacia.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 22, caput",
    "territorio": "Ética",
    "textoCorreto": "A prestação de serviço profissional assegura aos inscritos na OAB o direito aos honorários convencionados, aos fixados por arbitramento judicial e aos de sucumbência.",
    "versaoErrada1": "A prestação de serviço profissional assegura aos inscritos na OAB o direito aos honorários convencionados e aos de sucumbência.",
    "versaoErrada2": "A prestação de serviço profissional assegura aos inscritos na OAB o direito aos honorários convencionados, aos fixados por arbitramento judicial ou aos de sucumbência.",
    "explicacaoDiferenca": "A versão errada 1 suprime do rol os honorários 'fixados por arbitramento judicial', retirando uma modalidade autônoma de remuneração do advogado, cabível quando não há contrato prévio de honorários e o juiz precisa arbitrá-los. A versão errada 2 troca 'e' por 'ou', sugerindo que as três modalidades (convencionados, arbitrados e de sucumbência) seriam alternativas/excludentes, quando na verdade são cumuláveis - por exemplo, os honorários de sucumbência (pagos pela parte vencida) não excluem os honorários contratuais (pagos pelo cliente), podendo o advogado receber ambos.",
    "regraMemoria": "Três tipos de honorários, todos no mesmo bolso: convencionados + arbitrados + sucumbência, sempre cumuláveis.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 25",
    "territorio": "Ética",
    "textoCorreto": "Prescreve em cinco anos a ação de cobrança de honorários de advogado, contado o prazo da data do vencimento do contrato, se houver, do trânsito em julgado da decisão que os fixar, da ultimação do serviço extrajudicial, da desistência ou transação, ou da renúncia ou revogação do mandato.",
    "versaoErrada1": "Prescreve em dez anos a ação de cobrança de honorários de advogado, contado o prazo da data do vencimento do contrato, se houver, do trânsito em julgado da decisão que os fixar, da ultimação do serviço extrajudicial, da desistência ou transação, ou da renúncia ou revogação do mandato.",
    "versaoErrada2": "Prescreve em cinco anos a ação de cobrança de honorários de advogado, contado o prazo da data do vencimento do contrato, se houver, do trânsito em julgado da decisão que os fixar, da ultimação do serviço extrajudicial, ou da renúncia ou revogação do mandato.",
    "explicacaoDiferenca": "A versão errada 1 troca o prazo de cinco para dez anos: o Estatuto prevê prescrição especial de cinco anos para a cobrança de honorários advocatícios (mais curta que a prescrição geral decenal do Código Civil), e alterar o prazo muda diretamente o momento em que o direito de cobrança se extingue. A versão errada 2 suprime do rol o marco inicial 'da desistência ou transação', deixando sem termo definido a contagem do prazo nos casos em que o processo se encerra por desistência ou acordo entre as partes antes do trânsito em julgado.",
    "regraMemoria": "Honorários de advogado prescrevem em 5 anos, contados do fim do contrato, do trânsito em julgado, do serviço pronto, da desistência/transação ou da renúncia/revogação do mandato.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 27",
    "territorio": "Ética",
    "textoCorreto": "A incompatibilidade determina a proibição total, e o impedimento, a proibição parcial do exercício da advocacia.",
    "versaoErrada1": "A incompatibilidade determina a proibição parcial, e o impedimento, a proibição total do exercício da advocacia.",
    "versaoErrada2": "A incompatibilidade determina a proibição total, e o impedimento, também a proibição total do exercício da advocacia.",
    "explicacaoDiferenca": "A versão errada 1 inverte completamente os conceitos: a incompatibilidade é a proibição TOTAL do exercício da advocacia (ex.: magistrados, membros do Ministério Público, que não podem advogar em hipótese alguma), enquanto o impedimento é a proibição PARCIAL (ex.: servidor público pode advogar contra a Fazenda Pública que não o remunera, mas não em outras causas); inverter os termos confunde as consequências práticas de cada situação. A versão errada 2 equipara as duas situações como proibição total, eliminando a diferença essencial: o impedido pode exercer a advocacia fora das restrições específicas de sua função, enquanto o incompatível está proibido em qualquer circunstância.",
    "regraMemoria": "IncompaTIbilidade = proibição Total; imPEDImento = proibição Parcial.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 28",
    "territorio": "Ética",
    "textoCorreto": "A advocacia é incompatível, mesmo em causa própria, com as seguintes atividades: chefe do Poder Executivo e membros da Mesa do Poder Legislativo e seus substitutos legais; membros de órgãos do Poder Judiciário, do Ministério Público, dos tribunais e conselhos de contas, dos juizados especiais, da justiça de paz, juízes classistas, bem como de todos os que exerçam função de julgamento em órgãos de deliberação coletiva da administração pública direta e indireta; ocupantes de cargos ou funções de direção em órgãos da administração pública direta ou indireta, ou fundacional, em suas assessorias jurídicas; ocupantes de cargos ou funções vinculados direta ou indiretamente a qualquer órgão do Poder Judiciário e os que exerçam serviços notariais e de registro; ocupantes de cargos ou funções vinculados direta ou indiretamente a atividade policial de qualquer natureza; militares de qualquer natureza, na ativa; ocupantes de cargos ou funções que tenham competência de lançamento, arrecadação ou fiscalização de tributos e contribuições parafiscais; ocupantes de funções de direção e gerência em instituições financeiras, inclusive privadas.",
    "versaoErrada1": "A advocacia é incompatível, salvo em causa própria, com as seguintes atividades: chefe do Poder Executivo e membros da Mesa do Poder Legislativo e seus substitutos legais; membros de órgãos do Poder Judiciário, do Ministério Público, dos tribunais e conselhos de contas, dos juizados especiais, da justiça de paz, juízes classistas, bem como de todos os que exerçam função de julgamento em órgãos de deliberação coletiva da administração pública direta e indireta; ocupantes de cargos ou funções de direção em órgãos da administração pública direta ou indireta, ou fundacional, em suas assessorias jurídicas; ocupantes de cargos ou funções vinculados direta ou indiretamente a qualquer órgão do Poder Judiciário e os que exerçam serviços notariais e de registro; ocupantes de cargos ou funções vinculados direta ou indiretamente a atividade policial de qualquer natureza; militares de qualquer natureza, na ativa; ocupantes de cargos ou funções que tenham competência de lançamento, arrecadação ou fiscalização de tributos e contribuições parafiscais; ocupantes de funções de direção e gerência em instituições financeiras, inclusive privadas.",
    "versaoErrada2": "A advocacia é incompatível, mesmo em causa própria, com as seguintes atividades: chefe do Poder Executivo e membros da Mesa do Poder Legislativo e seus substitutos legais; membros de órgãos do Poder Judiciário, do Ministério Público, dos tribunais e conselhos de contas, dos juizados especiais, da justiça de paz, juízes classistas, bem como de todos os que exerçam função de julgamento em órgãos de deliberação coletiva da administração pública direta e indireta; ocupantes de cargos ou funções de direção em órgãos da administração pública direta ou indireta, ou fundacional, em suas assessorias jurídicas; ocupantes de cargos ou funções vinculados direta ou indiretamente a qualquer órgão do Poder Judiciário e os que exerçam serviços notariais e de registro; ocupantes de cargos ou funções vinculados direta ou indiretamente a atividade policial de qualquer natureza; militares de qualquer natureza, na ativa; ocupantes de cargos ou funções que tenham competência de lançamento, arrecadação ou fiscalização de tributos e contribuições parafiscais; ocupantes de funções de direção e gerência em instituições financeiras, exceto as privadas.",
    "explicacaoDiferenca": "Na versão errada 1, trocou-se \"mesmo em causa própria\" por \"salvo em causa própria\", invertendo o sentido do artigo: o texto correto afirma que a incompatibilidade persiste até mesmo quando o agente público atuaria em defesa de interesse próprio, exatamente para impedir que ele use a posição para burlar a vedação; a versão errada sugere que bastaria alegar causa própria para poder advogar, o que é falso e anularia a finalidade da norma. Na versão errada 2, trocou-se \"inclusive privadas\" por \"exceto as privadas\", excluindo do rol as instituições financeiras privadas; o texto correto expressamente as inclui, de modo que um diretor de banco privado também está impedido de exercer a advocacia, e a versão errada abriria uma exceção que a lei não prevê.",
    "regraMemoria": "Incompatibilidade do art. 28 vale SEMPRE, até em causa própria, e alcança bancos públicos e privados.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 30",
    "territorio": "Ética",
    "textoCorreto": "São impedidos de exercer a advocacia: os servidores da administração direta, indireta e fundacional, contra a Fazenda Pública que os remunere ou à qual seja vinculada a entidade empregadora; os membros do Poder Legislativo, em seus diversos níveis, contra ou a favor das pessoas jurídicas de direito público, empresas públicas, sociedades de economia mista, fundações públicas, entidades paraestatais ou empresas concessionárias ou permissionárias de serviço público.",
    "versaoErrada1": "São impedidos de exercer a advocacia: os servidores da administração direta, indireta e fundacional, contra ou a favor da Fazenda Pública que os remunere ou à qual seja vinculada a entidade empregadora; os membros do Poder Legislativo, em seus diversos níveis, contra ou a favor das pessoas jurídicas de direito público, empresas públicas, sociedades de economia mista, fundações públicas, entidades paraestatais ou empresas concessionárias ou permissionárias de serviço público.",
    "versaoErrada2": "São impedidos de exercer a advocacia: os servidores da administração direta, indireta e fundacional, contra a Fazenda Pública que os remunere ou à qual seja vinculada a entidade empregadora; os membros do Poder Legislativo, em seus diversos níveis, contra as pessoas jurídicas de direito público, empresas públicas, sociedades de economia mista, fundações públicas, entidades paraestatais ou empresas concessionárias ou permissionárias de serviço público.",
    "explicacaoDiferenca": "O artigo distingue dois graus de impedimento: o servidor só está impedido de advogar CONTRA a Fazenda Pública que o remunera (pode advogar a favor dela), enquanto o parlamentar está impedido tanto contra quanto a favor das entidades listadas. A versão errada 1 estende indevidamente ao servidor o impedimento \"a favor\", tornando-o mais restrito do que a lei prevê. A versão errada 2 faz o oposto com o parlamentar, retirando o \"ou a favor\" e deixando-o impedido apenas de atuar contra essas entidades, quando na verdade ele também não pode advogar a favor delas — essa é justamente a pegadinha mais cobrada sobre este artigo.",
    "regraMemoria": "Servidor: impedido só CONTRA a própria Fazenda. Parlamentar: impedido CONTRA e A FAVOR das entidades listadas.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 34, IV, VI e XVII",
    "territorio": "Ética",
    "textoCorreto": "Constitui infração disciplinar: manter conduta incompatível com a advocacia, praticando atos que a lei ou o código de ética classifique como tais; angariar ou captar causas, com ou sem a intervenção de terceiros; recusar-se a prestar contas ao cliente de quantias recebidas dele ou de terceiros por conta dele.",
    "versaoErrada1": "Constitui infração disciplinar: manter conduta incompatível com a advocacia, praticando atos que a lei ou o código de ética classifique como tais; angariar ou captar causas, desde que com a intervenção de terceiros; recusar-se a prestar contas ao cliente de quantias recebidas dele ou de terceiros por conta dele.",
    "versaoErrada2": "Constitui infração disciplinar: manter conduta incompatível com a advocacia, praticando atos que a lei ou o código de ética classifique como tais; angariar ou captar causas, com ou sem a intervenção de terceiros; recusar-se a prestar contas ao tribunal de quantias recebidas dele ou de terceiros por conta dele.",
    "explicacaoDiferenca": "Na versão errada 1, \"com ou sem a intervenção de terceiros\" virou \"desde que com a intervenção de terceiros\", condicionando a infração à existência de um intermediário; na realidade, a captação de clientela é infração de qualquer forma, ainda que o próprio advogado atue sozinho, sem terceiro envolvido. Na versão errada 2, trocou-se o destinatário da prestação de contas: o dever é de prestar contas ao CLIENTE (dono do dinheiro recebido), não ao tribunal ou à OAB; alterar esse sujeito muda por completo a quem se dirige a obrigação ética violada.",
    "regraMemoria": "Captar cliente é infração com OU sem terceiro; prestar contas é sempre AO CLIENTE, nunca a outro órgão.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 35",
    "territorio": "Ética",
    "textoCorreto": "São sanções disciplinares: censura, suspensão, exclusão e multa.",
    "versaoErrada1": "São sanções disciplinares: censura, suspensão, cassação e multa.",
    "versaoErrada2": "São sanções disciplinares: advertência, suspensão, exclusão e multa.",
    "explicacaoDiferenca": "Na versão errada 1, substituiu-se \"exclusão\" por \"cassação\": o Estatuto da OAB não prevê \"cassação\" como sanção disciplinar do advogado (esse termo é usado em outros regimes, como cassação de mandato ou de registro), sendo a sanção correta e mais grave a EXCLUSÃO dos quadros da OAB. Na versão errada 2, substituiu-se \"censura\" por \"advertência\": a lei fala em censura como a sanção mais branda, e \"advertência\" não é uma das quatro sanções legalmente previstas; usar o termo errado pode levar o candidato a marcar como correta uma alternativa que não corresponde ao rol taxativo do art. 35.",
    "regraMemoria": "As 4 sanções são CSEM: Censura, Suspensão, Exclusão, Multa — nada de cassação ou advertência.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 43",
    "territorio": "Ética",
    "textoCorreto": "A pretensão à punibilidade das infrações disciplinares prescreve em cinco anos, contados da data da constatação oficial do fato.",
    "versaoErrada1": "A pretensão à punibilidade das infrações disciplinares prescreve em dez anos, contados da data da constatação oficial do fato.",
    "versaoErrada2": "A pretensão à punibilidade das infrações disciplinares prescreve em cinco anos, contados da data do fato.",
    "explicacaoDiferenca": "Na versão errada 1, o prazo prescricional foi dobrado de cinco para dez anos; isso alteraria completamente o momento em que a OAB perde o poder de punir o infrator, permitindo processos disciplinares muito além do prazo legal. Na versão errada 2, o termo inicial da contagem foi trocado de \"constatação oficial do fato\" para \"data do fato\"; isso importa na prática porque muitas infrações só são descobertas tempos depois de cometidas, e a lei propositalmente inicia a contagem apenas quando a irregularidade é oficialmente constatada, não quando ocorreu.",
    "regraMemoria": "Prescrição disciplinar: 5 anos, contados de quando o fato foi DESCOBERTO oficialmente, não de quando ocorreu.",
    "seedVersion": 1
  },
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 44, I e II",
    "territorio": "Ética",
    "textoCorreto": "A Ordem dos Advogados do Brasil (OAB), serviço público, dotada de personalidade jurídica e forma federativa, tem por finalidade defender a Constituição, a ordem jurídica do Estado democrático de direito, os direitos humanos, a justiça social, e pugnar pela boa aplicação das leis, pela rápida administração da justiça e pelo aperfeiçoamento da cultura e das instituições jurídicas; promover, com exclusividade, a representação, a defesa, a seleção e a disciplina dos advogados em toda a República Federativa do Brasil.",
    "versaoErrada1": "A Ordem dos Advogados do Brasil (OAB), serviço público, dotada de personalidade jurídica e forma federativa, tem por finalidade defender a Constituição, a ordem jurídica do Estado democrático de direito, os direitos humanos, a justiça social, e pugnar pela boa aplicação das leis, pela rápida administração da justiça e pelo aperfeiçoamento da cultura e das instituições jurídicas; promover, preferencialmente, a representação, a defesa, a seleção e a disciplina dos advogados em toda a República Federativa do Brasil.",
    "versaoErrada2": "A Ordem dos Advogados do Brasil (OAB), serviço público, dotada de personalidade jurídica e forma federativa, tem por finalidade defender a Constituição, a ordem jurídica do Estado democrático de direito, os direitos humanos, a justiça social, e pugnar pela boa aplicação das leis, pela rápida administração da justiça e pelo aperfeiçoamento da cultura e das instituições jurídicas; promover, com exclusividade, a representação, a defesa, a seleção e a disciplina dos advogados em cada Estado da Federação.",
    "explicacaoDiferenca": "Na versão errada 1, \"com exclusividade\" virou \"preferencialmente\": isso é decisivo, pois a lei confere à OAB o monopólio dessa função — nenhuma outra entidade pode representar, defender, selecionar ou disciplinar advogados; dizer que é apenas \"preferencial\" sugeriria que outros órgãos poderiam concorrer com a OAB nessa tarefa, o que não é permitido. Na versão errada 2, \"em toda a República Federativa do Brasil\" virou \"em cada Estado da Federação\", sugerindo uma competência fragmentada estado a estado; na verdade a OAB é uma instituição nacional una, com competência sobre todo o território do país, e não uma federação de entidades estaduais autônomas nessa função.",
    "regraMemoria": "OAB representa e disciplina advogados com EXCLUSIVIDADE e em âmbito NACIONAL, não estadual.",
    "seedVersion": 1
  },
  {
    "lei": "Constituição Federal de 1988",
    "dispositivo": "Art. 5º, XI",
    "territorio": "Direito Constitucional",
    "textoCorreto": "A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
    "versaoErrada1": "A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, a qualquer hora, por determinação judicial.",
    "versaoErrada2": "A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo, durante o dia, em caso de flagrante delito ou desastre, ou para prestar socorro, ou por determinação judicial.",
    "explicacaoDiferenca": "Na versão errada 1, a restrição \"durante o dia\" foi removida da hipótese de determinação judicial e substituída por \"a qualquer hora\"; essa é a pegadinha clássica do dispositivo, pois o cumprimento de ordem judicial de busca domiciliar só pode ocorrer durante o dia, diferentemente do flagrante delito, do desastre e da prestação de socorro, que valem a qualquer hora. Na versão errada 2, a restrição \"durante o dia\" foi deslocada para as hipóteses de flagrante delito, desastre e socorro; isso também está errado, pois essas três hipóteses de ingresso independem do horário (podem ocorrer a qualquer hora), sendo apenas a entrada por ordem judicial limitada ao período diurno.",
    "regraMemoria": "Flagrante, desastre e socorro entram a qualquer hora; ordem JUDICIAL só entra DE DIA.",
    "seedVersion": 1
  },
  {
    "lei": "Constituição Federal de 1988",
    "dispositivo": "Art. 5º, XXXV",
    "territorio": "Direito Constitucional",
    "textoCorreto": "A lei não excluirá da apreciação do Poder Judiciário lesão ou ameaça a direito.",
    "versaoErrada1": "A lei poderá excluir da apreciação do Poder Judiciário lesão ou ameaça a direito.",
    "versaoErrada2": "A lei não excluirá da apreciação do Poder Judiciário lesão a direito.",
    "explicacaoDiferenca": "Na versão errada 1, a negativa \"não excluirá\" foi trocada por \"poderá excluir\", invertendo o sentido do princípio da inafastabilidade da jurisdição: a Constituição proíbe que qualquer lei impeça o acesso ao Judiciário, e a versão errada abriria espaço para leis que restringissem esse acesso, o que é vedado. Na versão errada 2, retirou-se a expressão \"ou ameaça a\", deixando o dispositivo proteger apenas a lesão consumada; isso é relevante porque a proteção constitucional também abrange a mera ameaça a direito, fundamento das ações preventivas (como mandado de segurança preventivo e tutelas inibitórias), que ficariam sem amparo se a norma protegesse só a lesão já ocorrida.",
    "regraMemoria": "Judiciário aprecia lesão OU AMEAÇA a direito — a lei NUNCA pode excluir, nem a ameaça.",
    "seedVersion": 1
  },
  {
    "lei": "Constituição Federal de 1988",
    "dispositivo": "Art. 5º, XXXVI",
    "territorio": "Direito Constitucional",
    "textoCorreto": "A lei não prejudicará o direito adquirido, o ato jurídico perfeito e a coisa julgada.",
    "versaoErrada1": "A lei não prejudicará, salvo disposição em contrário, o direito adquirido, o ato jurídico perfeito e a coisa julgada.",
    "versaoErrada2": "A lei não prejudicará o direito adquirido, o ato administrativo perfeito e a coisa julgada.",
    "explicacaoDiferenca": "Na versão errada 1, acrescentou-se a exceção \"salvo disposição em contrário\", que não existe no texto constitucional; essa garantia é uma cláusula de proteção geral e não admite que uma lei ordinária a afaste por disposição própria, sob pena de esvaziar completamente a segurança jurídica que o dispositivo protege. Na versão errada 2, trocou-se \"ato jurídico perfeito\" por \"ato administrativo perfeito\"; são institutos diferentes — ato jurídico perfeito é o já consumado segundo a lei vigente ao tempo em que se efetuou, aplicável a qualquer relação jurídica, enquanto \"ato administrativo\" é categoria bem mais restrita, ligada apenas a atos da Administração Pública.",
    "regraMemoria": "Três intocáveis: direito ADQUIRIDO, ato JURÍDICO perfeito, coisa JULGADA — sem exceções.",
    "seedVersion": 1
  },
  {
    "lei": "Constituição Federal de 1988",
    "dispositivo": "Art. 5º, LIV",
    "territorio": "Direito Constitucional",
    "textoCorreto": "Ninguém será privado da liberdade ou de seus bens sem o devido processo legal.",
    "versaoErrada1": "Ninguém será privado da liberdade e de seus bens sem o devido processo legal.",
    "versaoErrada2": "Ninguém será privado da liberdade ou de seus bens sem prévia notificação.",
    "explicacaoDiferenca": "Na versão errada 1, o conectivo \"ou\" foi trocado por \"e\"; isso muda a estrutura da garantia de disjuntiva para conjuntiva, sugerindo que a proteção só existiria quando liberdade e bens fossem privados simultaneamente, quando na verdade o devido processo legal é exigido para a privação de QUALQUER um dos dois, isoladamente. Na versão errada 2, trocou-se a garantia constitucional \"devido processo legal\" por \"prévia notificação\"; notificação prévia é apenas um dos elementos que compõem o devido processo legal (ao lado do contraditório, ampla defesa etc.), e reduzir a garantia a essa única formalidade desvirtua o alcance muito mais amplo do princípio.",
    "regraMemoria": "Liberdade OU bens — qualquer um dos dois exige o devido processo legal completo, não só aviso prévio.",
    "seedVersion": 1
  },
  {
    "lei": "Constituição Federal de 1988",
    "dispositivo": "Art. 5º, LV",
    "territorio": "Direito Constitucional",
    "textoCorreto": "Aos litigantes, em processo judicial ou administrativo, e aos acusados em geral são assegurados o contraditório e ampla defesa, com os meios e recursos a ela inerentes.",
    "versaoErrada1": "Aos litigantes, em processo judicial, e aos acusados em geral são assegurados o contraditório e ampla defesa, com os meios e recursos a ela inerentes.",
    "versaoErrada2": "Aos litigantes, em processo judicial ou administrativo, e aos acusados em geral poderão ser assegurados, a critério da autoridade competente, o contraditório e ampla defesa, com os meios e recursos a ela inerentes.",
    "explicacaoDiferenca": "O texto literal garante o contraditório e a ampla defesa tanto em processo judicial quanto administrativo, de forma incondicional (\"são assegurados\"), sem margem de discricionariedade. A primeira versão errada restringe a garantia apenas ao processo judicial, excluindo indevidamente os processos administrativos, onde a garantia também se aplica (por exemplo, em processos administrativos disciplinares). A segunda versão errada transforma uma garantia constitucional obrigatória em algo discricionário (\"poderão ser assegurados, a critério da autoridade\"), o que contraria a natureza de direito fundamental do dispositivo: o contraditório e a ampla defesa não dependem de juízo de conveniência de nenhuma autoridade.",
    "regraMemoria": "Contraditório e ampla defesa: sempre judicial E administrativo, nunca discricionário.",
    "seedVersion": 1
  },
  {
    "lei": "Constituição Federal de 1988",
    "dispositivo": "Art. 5º, LXVIII",
    "territorio": "Direito Constitucional",
    "textoCorreto": "Conceder-se-á habeas corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder.",
    "versaoErrada1": "Conceder-se-á habeas corpus excepcionalmente quando alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder.",
    "versaoErrada2": "Conceder-se-á habeas corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de expressão, por ilegalidade ou abuso de poder.",
    "explicacaoDiferenca": "Na versão errada 1, \"sempre que\" foi trocado por \"excepcionalmente quando\", transformando uma garantia de aplicação ampla e automática em algo excepcional e discricionário; isso contraria a natureza do habeas corpus, que deve ser concedido em toda e qualquer situação de violência ou coação ilegal à liberdade de locomoção, sem depender de excepcionalidade. Na versão errada 2, trocou-se o bem jurídico protegido: \"liberdade de locomoção\" virou \"liberdade de expressão\"; o habeas corpus tutela especificamente o direito de ir e vir, e violações à liberdade de expressão são protegidas por outros remédios constitucionais, como o mandado de segurança.",
    "regraMemoria": "Habeas corpus é SEMPRE cabível e protege só a liberdade de LOCOMOÇÃO (ir e vir).",
    "seedVersion": 1
  },
  {
    "lei": "Constituição Federal de 1988",
    "dispositivo": "Art. 37, caput",
    "territorio": "Direito Constitucional",
    "textoCorreto": "A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência.",
    "versaoErrada1": "A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios de legalidade, impessoalidade, razoabilidade, publicidade e eficiência.",
    "versaoErrada2": "A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e continuidade dos serviços públicos.",
    "explicacaoDiferenca": "Na versão errada 1, \"moralidade\" foi substituída por \"razoabilidade\"; embora a razoabilidade seja um princípio administrativo reconhecido, ela não integra o rol expresso do caput do art. 37 (o famoso LIMPE), e trocar moralidade por ela retira do texto um princípio expressamente previsto na Constituição. Na versão errada 2, \"eficiência\" foi substituída por \"continuidade dos serviços públicos\"; a eficiência foi incluída no caput pela EC nº 19/1998 e é um dos cinco princípios expressos, enquanto continuidade do serviço público, apesar de existir no Direito Administrativo, não consta literalmente deste dispositivo.",
    "regraMemoria": "LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência — nem razoabilidade, nem continuidade entram no caput.",
    "seedVersion": 1
  },
  {
    "lei": "Constituição Federal de 1988",
    "dispositivo": "Art. 60, § 4º",
    "territorio": "Direito Constitucional",
    "textoCorreto": "Não será objeto de deliberação a proposta de emenda tendente a abolir: a forma federativa de Estado; o voto direto, secreto, universal e periódico; a separação dos Poderes; os direitos e garantias individuais.",
    "versaoErrada1": "Não será objeto de deliberação a proposta de emenda tendente a abolir: a forma republicana de governo; o voto direto, secreto, universal e periódico; a separação dos Poderes; os direitos e garantias individuais.",
    "versaoErrada2": "Não será objeto de deliberação a proposta de emenda tendente a abolir: a forma federativa de Estado; o voto direto, secreto, universal e periódico; a separação dos Poderes; os direitos e garantias fundamentais.",
    "explicacaoDiferenca": "Na versão errada 1, \"a forma federativa de Estado\" foi trocada por \"a forma republicana de governo\"; essa troca é relevante porque o texto constitucional protege como cláusula pétrea expressamente a forma FEDERATIVA de Estado (o pacto federativo entre União, Estados e Municípios), e não a forma republicana de governo, que não consta deste rol taxativo, ainda que seja um valor constitucional relevante por outras vias. Na versão errada 2, \"direitos e garantias individuais\" foi trocada por \"direitos e garantias fundamentais\"; a literalidade do dispositivo fala em direitos e garantias INDIVIDUAIS, expressão mais restrita que \"fundamentais\" (que abrangeria também direitos sociais, coletivos e políticos), e essa diferença de amplitude é frequentemente explorada pelas bancas.",
    "regraMemoria": "Cláusulas pétreas do art. 60, §4º: forma FEDERATIVA de Estado (não república) e direitos INDIVIDUAIS (não todos os fundamentais).",
    "seedVersion": 1
  }
];

  function seedar() {
    var versaoAplicada = Storage.read(Storage.KEYS.leiSecaSeedVersion, 0);
    if (versaoAplicada >= SEED_VERSION_ATUAL) return Promise.resolve();

    return DB.getAll('disciplinas').then(function (disciplinas) {
      var idPorNome = {};
      disciplinas.forEach(function (d) { idPorNome[d.nome] = d.id; });

      var pendentes = [];
      DISPOSITIVOS.forEach(function (d) {
        if (d.seedVersion <= versaoAplicada) return;
        var disciplinaId = idPorNome[d.territorio];
        if (!disciplinaId) return;
        pendentes.push(DB.put('leiSeca', {
          id: Storage.makeId(),
          disciplinaId: disciplinaId,
          lei: d.lei,
          dispositivo: d.dispositivo,
          textoCorreto: d.textoCorreto,
          versaoErrada1: d.versaoErrada1,
          versaoErrada2: d.versaoErrada2,
          explicacaoDiferenca: d.explicacaoDiferenca,
          regraMemoria: d.regraMemoria
        }));
      });

      return Promise.all(pendentes).then(function () {
        Storage.write(Storage.KEYS.leiSecaSeedVersion, SEED_VERSION_ATUAL);
      });
    });
  }

  return { seedar: seedar };
})();
