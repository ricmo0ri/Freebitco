// Banco de "lei seca" (redação literal de dispositivos legais) para
// praticar o reconhecimento da redação exata cobrada na 1ª fase da OAB —
// complementa as questões de aplicação de caso concreto com um treino
// específico de memorização de texto de lei.
var LeiSecaSeed = (function () {
  var SEED_VERSION_ATUAL = 3;

  var DISPOSITIVOS = [
  {
    "lei": "Estatuto da Advocacia e da OAB (Lei 8.906/1994)",
    "dispositivo": "Art. 1º, I e II",
    "territorio": "Ética",
    "subtema": "Exercício da Advocacia",
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
    "subtema": "Exercício da Advocacia",
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
    "subtema": "Exercício da Advocacia",
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
    "subtema": "Exercício da Advocacia",
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
    "subtema": "Direitos e Prerrogativas do Advogado",
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
    "subtema": "Direitos e Prerrogativas do Advogado",
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
    "subtema": "Direitos e Prerrogativas do Advogado",
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
    "subtema": "Direitos e Prerrogativas do Advogado",
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
    "subtema": "Direitos e Prerrogativas do Advogado",
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
    "subtema": "Inscrição e Órgãos da OAB",
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
    "subtema": "Sociedade de Advogados",
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
    "subtema": "Exercício da Advocacia",
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
    "subtema": "Honorários Advocatícios",
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
    "subtema": "Honorários Advocatícios",
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
    "subtema": "Incompatibilidades e Impedimentos",
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
    "subtema": "Incompatibilidades e Impedimentos",
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
    "subtema": "Incompatibilidades e Impedimentos",
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
    "subtema": "Ética e Disciplina",
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
    "subtema": "Ética e Disciplina",
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
    "subtema": "Ética e Disciplina",
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
    "subtema": "Inscrição e Órgãos da OAB",
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
    "subtema": "Direitos e Garantias Fundamentais",
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
    "subtema": "Direitos e Garantias Fundamentais",
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
    "subtema": "Direitos e Garantias Fundamentais",
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
    "subtema": "Direitos e Garantias Fundamentais",
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
    "subtema": "Direitos e Garantias Fundamentais",
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
    "subtema": "Direitos e Garantias Fundamentais",
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
    "subtema": "Organização do Estado",
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
    "subtema": "Processo Legislativo",
    "textoCorreto": "Não será objeto de deliberação a proposta de emenda tendente a abolir: a forma federativa de Estado; o voto direto, secreto, universal e periódico; a separação dos Poderes; os direitos e garantias individuais.",
    "versaoErrada1": "Não será objeto de deliberação a proposta de emenda tendente a abolir: a forma republicana de governo; o voto direto, secreto, universal e periódico; a separação dos Poderes; os direitos e garantias individuais.",
    "versaoErrada2": "Não será objeto de deliberação a proposta de emenda tendente a abolir: a forma federativa de Estado; o voto direto, secreto, universal e periódico; a separação dos Poderes; os direitos e garantias fundamentais.",
    "explicacaoDiferenca": "Na versão errada 1, \"a forma federativa de Estado\" foi trocada por \"a forma republicana de governo\"; essa troca é relevante porque o texto constitucional protege como cláusula pétrea expressamente a forma FEDERATIVA de Estado (o pacto federativo entre União, Estados e Municípios), e não a forma republicana de governo, que não consta deste rol taxativo, ainda que seja um valor constitucional relevante por outras vias. Na versão errada 2, \"direitos e garantias individuais\" foi trocada por \"direitos e garantias fundamentais\"; a literalidade do dispositivo fala em direitos e garantias INDIVIDUAIS, expressão mais restrita que \"fundamentais\" (que abrangeria também direitos sociais, coletivos e políticos), e essa diferença de amplitude é frequentemente explorada pelas bancas.",
    "regraMemoria": "Cláusulas pétreas do art. 60, §4º: forma FEDERATIVA de Estado (não república) e direitos INDIVIDUAIS (não todos os fundamentais).",
    "seedVersion": 1
  },
  {
    "lei": "Código Penal (Decreto-Lei 2.848/1940)",
    "dispositivo": "Art. 14, II",
    "territorio": "Direito Penal",
    "subtema": "Teoria Geral do Crime",
    "textoCorreto": "Diz-se o crime tentado, quando, iniciada a execução, não se consuma por circunstâncias alheias à vontade do agente.",
    "versaoErrada1": "Diz-se o crime tentado, quando, iniciada a execução, não se consuma por circunstâncias dependentes da vontade do agente.",
    "versaoErrada2": "Diz-se o crime tentado, quando, praticados atos preparatórios, não se consuma por circunstâncias alheias à vontade do agente.",
    "explicacaoDiferenca": "O texto correto exige que a execução tenha sido iniciada e que a não consumação decorra de circunstâncias ALHEIAS à vontade do agente. Se a interrupção depende da própria vontade do agente, não é tentativa, mas desistência voluntária ou arrependimento eficaz (art. 15), que responde só pelos atos já praticados. Além disso, mera preparação não configura tentativa, pois o Código Penal só pune atos preparatórios quando tipificados como crime autônomo.",
    "regraMemoria": "Tentativa = começou a EXECUTAR e foi interrompido por algo ALHEIO à vontade dele. Parou sozinho? Isso é desistência, não tentativa!",
    "seedVersion": 2
  },
  {
    "lei": "Código Penal (Decreto-Lei 2.848/1940)",
    "dispositivo": "Art. 18, I e II",
    "territorio": "Direito Penal",
    "subtema": "Teoria Geral do Crime",
    "textoCorreto": "Diz-se o crime doloso, quando o agente quis o resultado ou assumiu o risco de produzi-lo. Diz-se o crime culposo, quando o agente deu causa ao resultado por imprudência, negligência ou imperícia.",
    "versaoErrada1": "Diz-se o crime doloso, quando o agente quis o resultado e assumiu o risco de produzi-lo. Diz-se o crime culposo, quando o agente deu causa ao resultado por imprudência, negligência ou imperícia.",
    "versaoErrada2": "Diz-se o crime doloso, quando o agente quis o resultado ou assumiu o risco de produzi-lo. Diz-se o crime culposo, quando o agente deu causa ao resultado por imprudência ou negligência.",
    "explicacaoDiferenca": "O dolo direto (quis o resultado) e o dolo eventual (assumiu o risco) são hipóteses ALTERNATIVAS ('ou'), não cumulativas - basta uma delas para caracterizar dolo. Já a culpa tem três modalidades taxativas: imprudência, negligência e imperícia; omitir a imperícia deixa de fora uma das formas legais de culpa, tipicamente ligada à falta de habilidade técnica.",
    "regraMemoria": "Dolo: quis OU assumiu o risco (uma já basta). Culpa: decoreba dos 3 I's - Imprudência, Negligência, Imperícia.",
    "seedVersion": 2
  },
  {
    "lei": "Código Penal (Decreto-Lei 2.848/1940)",
    "dispositivo": "Art. 23, II",
    "territorio": "Direito Penal",
    "subtema": "Teoria Geral do Crime",
    "textoCorreto": "Não há crime quando o agente pratica o fato em legítima defesa.",
    "versaoErrada1": "Não há crime quando o agente pratica o fato em estado de necessidade.",
    "versaoErrada2": "Não há crime quando o agente pratica o fato em legítima defesa própria.",
    "explicacaoDiferenca": "O inciso II do art. 23 trata especificamente de legítima defesa; 'estado de necessidade' é excludente diversa, prevista no inciso I. Além disso, a legítima defesa (art. 23, II c/c art. 25) protege direito 'seu ou de outrem', não apenas o do próprio agente - restringir a 'própria' exclui indevidamente a legítima defesa de terceiro.",
    "regraMemoria": "Art. 23: I-necessidade, II-legítima defesa, III-estrito cumprimento/exercício regular. Decore a ordem pelo número!",
    "seedVersion": 2
  },
  {
    "lei": "Código Penal (Decreto-Lei 2.848/1940)",
    "dispositivo": "Art. 25",
    "territorio": "Direito Penal",
    "subtema": "Teoria Geral do Crime",
    "textoCorreto": "Entende-se em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem.",
    "versaoErrada1": "Entende-se em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou futura, a direito seu ou de outrem.",
    "versaoErrada2": "Entende-se em legítima defesa quem, usando dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem.",
    "explicacaoDiferenca": "A agressão deve ser ATUAL ou IMINENTE - agressão meramente futura (ainda incerta) não autoriza legítima defesa. Também é exigido o uso MODERADO dos meios necessários; sem essa moderação, o excesso é punível (excesso doloso ou culposo), descaracterizando a excludente.",
    "regraMemoria": "Legítima defesa = MODERADO + meio necessário + agressão ATUAL ou IMINENTE (nunca futura!).",
    "seedVersion": 2
  },
  {
    "lei": "Código de Processo Penal (Decreto-Lei 3.689/1941)",
    "dispositivo": "Art. 5º, § 1º, I",
    "territorio": "Processo Penal",
    "subtema": "Inquérito Policial e Investigação",
    "textoCorreto": "O requerimento de abertura de inquérito deverá conter, sempre que possível, a narração do fato, com todas as circunstâncias, a individualização do indiciado ou seus sinais característicos e as razões de convicção ou de presunção de ser ele o autor da infração, ou os motivos de impossibilidade de o fazer.",
    "versaoErrada1": "O requerimento de abertura de inquérito poderá conter, sempre que possível, a narração do fato, com todas as circunstâncias, a individualização do indiciado ou seus sinais característicos e as razões de convicção ou de presunção de ser ele o autor da infração, ou os motivos de impossibilidade de o fazer.",
    "versaoErrada2": "O requerimento de abertura de inquérito deverá conter, sempre que possível, a narração do fato, com todas as circunstâncias, a individualização do indiciado ou seus sinais característicos e as razões de convicção e de presunção de ser ele o autor da infração, ou os motivos de impossibilidade de o fazer.",
    "explicacaoDiferenca": "A lei impõe um dever ('deverá conter'), não uma faculdade ('poderá conter'), quanto ao conteúdo mínimo do requerimento. Além disso, 'razões de convicção OU de presunção' são alternativas - basta apresentar convicção plena ou mera presunção da autoria; exigir as duas cumulativamente ('e') é mais rigoroso do que a lei prevê.",
    "regraMemoria": "Requerimento de inquérito: DEVERÁ conter (é dever, não opção); convicção OU presunção, uma das duas já serve.",
    "seedVersion": 2
  },
  {
    "lei": "Código de Processo Penal (Decreto-Lei 3.689/1941)",
    "dispositivo": "Art. 302",
    "territorio": "Processo Penal",
    "subtema": "Prisões e Medidas Cautelares",
    "textoCorreto": "Considera-se em flagrante delito quem: está cometendo a infração penal; acaba de cometê-la; é perseguido, logo após, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser autor da infração; é encontrado, logo depois, com instrumentos, armas, objetos ou papéis que façam presumir ser ele autor da infração.",
    "versaoErrada1": "Considera-se em flagrante delito quem: está cometendo a infração penal; acaba de cometê-la; é perseguido, a qualquer tempo, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser autor da infração; é encontrado, logo depois, com instrumentos, armas, objetos ou papéis que façam presumir ser ele autor da infração.",
    "versaoErrada2": "Considera-se em flagrante delito quem: está cometendo a infração penal; acaba de cometê-la; é perseguido, logo após, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser autor da infração; é encontrado, logo depois, com instrumentos, armas, objetos ou papéis que comprovem ser ele autor da infração.",
    "explicacaoDiferenca": "O flagrante impróprio (inciso III) exige perseguição 'logo após' o crime - a proximidade temporal é essencial; 'a qualquer tempo' descaracteriza o instituto, pois sem imediatidade não há mais flagrante. Já o flagrante presumido (inciso IV) baseia-se em elementos que apenas fazem PRESUMIR a autoria (indícios), não em prova cabal ('comprovem') - o padrão de convicção exigido é menor, compatível com a urgência da prisão em flagrante.",
    "regraMemoria": "Flagrante: 'logo após' = perseguição; 'logo depois' = encontrado com objeto. Sempre é PRESUNÇÃO, nunca prova plena.",
    "seedVersion": 2
  },
  {
    "lei": "Código de Processo Penal (Decreto-Lei 3.689/1941)",
    "dispositivo": "Art. 312",
    "territorio": "Processo Penal",
    "subtema": "Prisões e Medidas Cautelares",
    "textoCorreto": "A prisão preventiva poderá ser decretada como garantia da ordem pública, da ordem econômica, por conveniência da instrução criminal, ou para assegurar a aplicação da lei penal, quando houver prova da existência do crime e indício suficiente de autoria e de perigo gerado pelo estado de liberdade do imputado.",
    "versaoErrada1": "A prisão preventiva deverá ser decretada como garantia da ordem pública, da ordem econômica, por conveniência da instrução criminal, ou para assegurar a aplicação da lei penal, quando houver prova da existência do crime e indício suficiente de autoria e de perigo gerado pelo estado de liberdade do imputado.",
    "versaoErrada2": "A prisão preventiva poderá ser decretada como garantia da ordem pública, da ordem econômica, por conveniência da instrução criminal, ou para assegurar a aplicação da lei penal, quando houver prova da existência do crime ou indício suficiente de autoria e de perigo gerado pelo estado de liberdade do imputado.",
    "explicacaoDiferenca": "A prisão preventiva é sempre uma faculdade do juiz mediante análise do caso concreto ('poderá'), nunca uma decretação automática ('deverá'). Além disso, os requisitos - prova da existência do crime, indício de autoria e perigo gerado pela liberdade - são CUMULATIVOS ('e'), todos precisam estar presentes; trocar por 'ou' permitiria a prisão com apenas um deles, enfraquecendo indevidamente a excepcionalidade da medida cautelar.",
    "regraMemoria": "Preventiva: sempre PODERÁ (nunca deverá). Requisitos são um pacote fechado: prova do crime E indício de autoria E perigo da liberdade - falta um, não decreta.",
    "seedVersion": 2
  },
  {
    "lei": "Código Civil (Lei 10.406/2002)",
    "dispositivo": "Art. 1º e 2º",
    "territorio": "Direito Civil",
    "subtema": "Parte Geral",
    "textoCorreto": "Toda pessoa é capaz de direitos e deveres na ordem civil. A personalidade civil da pessoa começa do nascimento com vida; mas a lei põe a salvo, desde a concepção, os direitos do nascituro.",
    "versaoErrada1": "Toda pessoa maior de idade é capaz de direitos e deveres na ordem civil. A personalidade civil da pessoa começa do nascimento com vida; mas a lei põe a salvo, desde a concepção, os direitos do nascituro.",
    "versaoErrada2": "Toda pessoa é capaz de direitos e deveres na ordem civil. A personalidade civil da pessoa começa da concepção; mas a lei põe a salvo, desde o nascimento com vida, os direitos do nascituro.",
    "explicacaoDiferenca": "A capacidade de direito (ser sujeito de direitos e deveres) é atribuída a TODA pessoa, sem distinção de idade - isso é diferente da capacidade de exercício (de fato), que varia conforme a idade. Além disso, o Código Civil adota a teoria natalista: a personalidade começa do NASCIMENTO COM VIDA, e é desde a CONCEPÇÃO que a lei apenas resguarda os direitos do nascituro, sem lhe atribuir personalidade desde já.",
    "regraMemoria": "TODA pessoa tem capacidade de direito, sem exceção de idade. Personalidade = nasceu vivo. Nascituro só tem direitos RESGUARDADOS desde a concepção.",
    "seedVersion": 2
  },
  {
    "lei": "Código Civil (Lei 10.406/2002)",
    "dispositivo": "Art. 4º, caput",
    "territorio": "Direito Civil",
    "subtema": "Parte Geral",
    "textoCorreto": "São incapazes, relativamente a certos atos ou à maneira de os exercer: os maiores de dezesseis e menores de dezoito anos; os ébrios habituais e os viciados em tóxico; aqueles que, por causa transitória ou permanente, não puderem exprimir sua vontade; os pródigos.",
    "versaoErrada1": "São incapazes, relativamente a certos atos ou à maneira de os exercer: os maiores de quatorze e menores de dezoito anos; os ébrios habituais e os viciados em tóxico; aqueles que, por causa transitória ou permanente, não puderem exprimir sua vontade; os pródigos.",
    "versaoErrada2": "São incapazes, relativamente a certos atos ou à maneira de os exercer: os maiores de dezesseis e menores de dezoito anos; os ébrios habituais e os viciados em tóxico; aqueles que, por causa exclusivamente permanente, não puderem exprimir sua vontade; os pródigos.",
    "explicacaoDiferenca": "A incapacidade relativa etária começa aos 16 anos (não 14) - os menores de 16 são ABSOLUTAMENTE incapazes (art. 3º), e só entre 16 e 18 anos são relativamente incapazes. Também é preciso lembrar que a impossibilidade de exprimir vontade pode decorrer de causa TRANSITÓRIA OU PERMANENTE - restringir a apenas 'permanente' exclui situações temporárias (ex.: intoxicação momentânea, coma reversível) que a lei também abrange.",
    "regraMemoria": "Menor de 16 = incapaz ABSOLUTO. De 16 a 18 = incapaz RELATIVO. 'Não exprime vontade' vale para causa transitória OU permanente, tanto faz.",
    "seedVersion": 2
  },
  {
    "lei": "Código Civil (Lei 10.406/2002)",
    "dispositivo": "Art. 927, parágrafo único",
    "territorio": "Direito Civil",
    "subtema": "Responsabilidade Civil",
    "textoCorreto": "Haverá obrigação de reparar o dano, independentemente de culpa, nos casos especificados em lei, ou quando a atividade normalmente desenvolvida pelo autor do dano implicar, por sua natureza, risco para os direitos de outrem.",
    "versaoErrada1": "Haverá obrigação de reparar o dano, havendo comprovação de culpa, nos casos especificados em lei, ou quando a atividade normalmente desenvolvida pelo autor do dano implicar, por sua natureza, risco para os direitos de outrem.",
    "versaoErrada2": "Haverá obrigação de reparar o dano, independentemente de culpa, nos casos especificados em lei, ou quando a atividade eventualmente desenvolvida pelo autor do dano implicar, por sua natureza, risco para os direitos de outrem.",
    "explicacaoDiferenca": "Esse dispositivo consagra a responsabilidade civil OBJETIVA, que dispensa a comprovação de culpa ('independentemente de culpa') - exigi-la desvirtua completamente a norma. Além disso, a teoria do risco exige que a atividade seja NORMALMENTE (habitualmente) desenvolvida pelo autor do dano; uma atividade meramente eventual/esporádica não se enquadra nessa hipótese de responsabilidade objetiva.",
    "regraMemoria": "Art. 927, parágrafo único = responsabilidade SEM culpa. Só vale se a atividade de risco for HABITUAL, não um bico ocasional.",
    "seedVersion": 2
  },
  {
    "lei": "Código Civil (Lei 10.406/2002)",
    "dispositivo": "Art. 187",
    "territorio": "Direito Civil",
    "subtema": "Responsabilidade Civil",
    "textoCorreto": "Também comete ato ilícito o titular de um direito que, ao exercê-lo, excede manifestamente os limites impostos pelo seu fim econômico ou social, pela boa-fé ou pelos bons costumes.",
    "versaoErrada1": "Também comete ato ilícito o titular de um direito que, ao exercê-lo, excede os limites impostos pelo seu fim econômico ou social, pela boa-fé ou pelos bons costumes.",
    "versaoErrada2": "Também comete ato ilícito o titular de um direito que, ao exercê-lo, excede manifestamente os limites impostos pelo seu fim econômico ou social, pela boa-fé e pelos bons costumes.",
    "explicacaoDiferenca": "O abuso de direito exige excesso MANIFESTO (evidente, gritante) - um excesso qualquer, sutil, não configura a figura do art. 187. Além disso, os três critérios (fim econômico/social, boa-fé, bons costumes) são ALTERNATIVOS ('ou') - basta violar um deles para caracterizar o abuso; exigir violação simultânea de boa-fé E bons costumes ('e') torna o padrão indevidamente mais restrito.",
    "regraMemoria": "Abuso de direito = excesso MANIFESTO. E qualquer um dos três (fim social, boa-fé, bons costumes) violado já basta - não precisa violar todos.",
    "seedVersion": 2
  },
  {
    "lei": "Consolidação das Leis do Trabalho (Decreto-Lei 5.452/1943)",
    "dispositivo": "Art. 2º, caput",
    "territorio": "Direito do Trabalho",
    "subtema": "Relação de Emprego",
    "textoCorreto": "Considera-se empregador a empresa, individual ou coletiva, que, assumindo os riscos da atividade econômica, admite, assalaria e dirige a prestação pessoal de serviço.",
    "versaoErrada1": "Considera-se empregador a empresa, individual ou coletiva, que, compartilhando os riscos da atividade econômica com o empregado, admite, assalaria e dirige a prestação pessoal de serviço.",
    "versaoErrada2": "Considera-se empregador a empresa, individual ou coletiva, que, assumindo os riscos da atividade econômica, admite, assalaria ou dirige a prestação pessoal de serviço.",
    "explicacaoDiferenca": "O princípio da alteridade determina que o empregador assume SOZINHO os riscos do empreendimento - o empregado nunca compartilha esse risco, mesmo que o negócio vá mal, o salário é devido. Além disso, os três verbos (admite, assalaria e dirige) são CUMULATIVOS: o empregador precisa reunir as três características simultaneamente; bastar apenas uma delas ('ou') descaracterizaria o conceito legal completo de empregador.",
    "regraMemoria": "Empregador = corre o risco SOZINHO (alteridade). E precisa admitir E pagar E dirigir - os três juntos, não um de cada vez.",
    "seedVersion": 2
  },
  {
    "lei": "Consolidação das Leis do Trabalho (Decreto-Lei 5.452/1943)",
    "dispositivo": "Art. 3º, caput",
    "territorio": "Direito do Trabalho",
    "subtema": "Relação de Emprego",
    "textoCorreto": "Considera-se empregado toda pessoa física que prestar serviços de natureza não eventual a empregador, sob a dependência deste e mediante salário.",
    "versaoErrada1": "Considera-se empregado toda pessoa física ou jurídica que prestar serviços de natureza não eventual a empregador, sob a dependência deste e mediante salário.",
    "versaoErrada2": "Considera-se empregado toda pessoa física que prestar serviços de natureza eventual a empregador, sob a dependência deste e mediante salário.",
    "explicacaoDiferenca": "O empregado só pode ser PESSOA FÍSICA - é elemento essencial da pessoalidade da relação de emprego; pessoa jurídica nunca é empregada. Também é indispensável a natureza NÃO EVENTUAL (habitualidade) do serviço prestado; trabalho eventual, esporádico, não gera vínculo empregatício, apenas relação de trabalho autônomo/avulso.",
    "regraMemoria": "Empregado só pode ser PESSOA FÍSICA. E o trabalho tem que ser habitual (NÃO eventual) - bico não gera vínculo.",
    "seedVersion": 2
  },
  {
    "lei": "Consolidação das Leis do Trabalho (Decreto-Lei 5.452/1943)",
    "dispositivo": "Art. 7º, caput",
    "territorio": "Direito do Trabalho",
    "subtema": "Relação de Emprego",
    "textoCorreto": "Os preceitos constantes desta Consolidação salvo quando for em cada caso, expressamente determinado em contrário, não se aplicam aos empregados domésticos, assim considerados, de um modo geral, os que prestam serviços de natureza não econômica à pessoa ou à família, no âmbito residencial destas.",
    "versaoErrada1": "Os preceitos constantes desta Consolidação salvo quando for em cada caso, expressamente determinado em contrário, aplicam-se subsidiariamente aos empregados domésticos, assim considerados, de um modo geral, os que prestam serviços de natureza não econômica à pessoa ou à família, no âmbito residencial destas.",
    "versaoErrada2": "Os preceitos constantes desta Consolidação salvo quando for em cada caso, expressamente determinado em contrário, não se aplicam aos empregados domésticos, assim considerados, de um modo geral, os que prestam serviços de natureza econômica à pessoa ou à família, no âmbito residencial destas.",
    "explicacaoDiferenca": "A regra é de exclusão total ('não se aplicam'), e não de aplicação subsidiária, dos preceitos da CLT ao trabalho doméstico (hoje regido principalmente pela LC 150/2015). Também é essencial que o serviço doméstico tenha natureza NÃO ECONÔMICA (sem fins lucrativos, no âmbito residencial da família) - se a atividade tiver finalidade econômica/lucrativa, não se caracteriza como trabalho doméstico.",
    "regraMemoria": "CLT NÃO se aplica ao doméstico (regra de exclusão, não de subsidiariedade). Doméstico = serviço SEM fim econômico, dentro de casa.",
    "seedVersion": 2
  },
  {
    "lei": "Consolidação das Leis do Trabalho (Decreto-Lei 5.452/1943)",
    "dispositivo": "Art. 62, II",
    "territorio": "Direito do Trabalho",
    "subtema": "Jornada e Descanso",
    "textoCorreto": "Não são abrangidos pelo regime de duração do trabalho os gerentes, assim considerados os exercentes de cargos de gestão, aos quais se equiparam, para efeito do disposto neste artigo, os diretores e chefes de departamento ou filial.",
    "versaoErrada1": "São abrangidos pelo regime de duração do trabalho os gerentes, assim considerados os exercentes de cargos de gestão, aos quais se equiparam, para efeito do disposto neste artigo, os diretores e chefes de departamento ou filial.",
    "versaoErrada2": "Não são abrangidos pelo regime de duração do trabalho os gerentes, assim considerados os exercentes de cargos de gestão, aos quais se equiparam, para todos os efeitos legais, os diretores e chefes de departamento ou filial.",
    "explicacaoDiferenca": "O art. 62, II exclui (NÃO são abrangidos) os gerentes e equiparados do controle de jornada, justamente por exercerem cargo de gestão/confiança; inverter para 'são abrangidos' contraria o objetivo da norma. Além disso, a equiparação dos diretores e chefes de departamento aos gerentes vale apenas 'para efeito do disposto neste artigo' (ou seja, só para fins de exclusão da duração do trabalho) - estender essa equiparação 'para todos os efeitos legais' extrapola indevidamente o alcance da norma.",
    "regraMemoria": "Art. 62, II: gerente e cargo de confiança NÃO batem ponto. Mas a equiparação de diretores só vale PARA ESSE ARTIGO, não pra tudo.",
    "seedVersion": 2
  },
  {
    "lei": "Código Tributário Nacional (Lei 5.172/1966)",
    "dispositivo": "Art. 3º",
    "territorio": "Direito Tributário",
    "subtema": "Obrigação Tributária",
    "textoCorreto": "Tributo é toda prestação pecuniária compulsória, em moeda ou cujo valor nela se possa exprimir, que não constitua sanção de ato ilícito, instituída em lei e cobrada mediante atividade administrativa plenamente vinculada.",
    "versaoErrada1": "Tributo é toda prestação pecuniária compulsória, em moeda ou cujo valor nela se possa exprimir, que não constitua sanção de ato ilícito, instituída em lei e cobrada mediante atividade administrativa discricionária.",
    "versaoErrada2": "Tributo é toda prestação pecuniária compulsória, em moeda ou cujo valor nela se possa exprimir, que constitua sanção de ato ilícito, instituída em lei e cobrada mediante atividade administrativa plenamente vinculada.",
    "explicacaoDiferenca": "A versão 1 troca 'plenamente vinculada' por 'discricionária', mas a cobrança do tributo não admite juízo de conveniência do agente público, sendo sempre ato vinculado. A versão 2 suprime o 'não', fazendo o tributo parecer sanção de ato ilícito, o que o confundiria com multa e descaracterizaria sua própria definição legal.",
    "regraMemoria": "Tributo NÃO é multa e é cobrado sempre por atividade VINCULADA — nunca 'discricionária'.",
    "seedVersion": 2
  },
  {
    "lei": "Código Tributário Nacional (Lei 5.172/1966)",
    "dispositivo": "Art. 113, §§ 1º e 2º",
    "territorio": "Direito Tributário",
    "subtema": "Obrigação Tributária",
    "textoCorreto": "A obrigação tributária principal tem por objeto o pagamento de tributo ou penalidade pecuniária e extingue-se juntamente com o crédito dela decorrente. A obrigação acessória tem por objeto as prestações, positivas ou negativas, previstas no interesse da arrecadação ou da fiscalização dos tributos.",
    "versaoErrada1": "A obrigação tributária principal tem por objeto o pagamento de tributo ou penalidade pecuniária e constitui-se juntamente com o crédito dela decorrente. A obrigação acessória tem por objeto as prestações, positivas ou negativas, previstas no interesse da arrecadação ou da fiscalização dos tributos.",
    "versaoErrada2": "A obrigação tributária principal tem por objeto o pagamento de tributo ou penalidade pecuniária e extingue-se juntamente com o crédito dela decorrente. A obrigação acessória tem por objeto as prestações, positivas e negativas, previstas no interesse da arrecadação ou da fiscalização dos tributos.",
    "explicacaoDiferenca": "A versão 1 troca 'extingue-se' por 'constitui-se': o CTN diz que a obrigação principal se extingue junto com o crédito (o lançamento apenas declara a obrigação já existente), e não que nasce nesse momento. A versão 2 troca 'ou' por 'e' entre 'positivas/negativas', dando a entender que a obrigação acessória exigiria cumulativamente fazer e não fazer, quando basta uma das duas.",
    "regraMemoria": "Principal EXTINGUE junto com o crédito (não nasce); acessória é fazer OU não fazer, nunca as duas obrigatoriamente.",
    "seedVersion": 2
  },
  {
    "lei": "Código Tributário Nacional (Lei 5.172/1966)",
    "dispositivo": "Art. 173, I",
    "territorio": "Direito Tributário",
    "subtema": "Prescrição e Decadência Tributária",
    "textoCorreto": "O direito de a Fazenda Pública constituir o crédito tributário extingue-se após 5 (cinco) anos, contados do primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado.",
    "versaoErrada1": "O direito de a Fazenda Pública constituir o crédito tributário extingue-se após 10 (dez) anos, contados do primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado.",
    "versaoErrada2": "O direito de a Fazenda Pública constituir o crédito tributário extingue-se após 5 (cinco) anos, contados do primeiro dia do exercício seguinte àquele em que o lançamento foi efetuado.",
    "explicacaoDiferenca": "A versão 1 troca o prazo decadencial de 5 para 10 anos, confundindo com prazos de outras hipóteses tributárias. A versão 2 muda o marco inicial de 'poderia ter sido efetuado' (potencial, base da decadência) para 'foi efetuado' (já realizado), o que descaracteriza a contagem, já que a decadência corre exatamente da omissão do lançamento.",
    "regraMemoria": "173, I: 5 anos contados de quando o Fisco PODERIA ter lançado — não de quando ele efetivamente lançou.",
    "seedVersion": 2
  },
  {
    "lei": "Lei das Sociedades por Ações (Lei 6.404/1976)",
    "dispositivo": "Art. 1º",
    "territorio": "Direito Empresarial",
    "subtema": "Tipos Societários",
    "textoCorreto": "A companhia ou sociedade anônima terá o capital dividido em ações, e a responsabilidade dos sócios ou acionistas será limitada ao preço de emissão das ações subscritas ou adquiridas.",
    "versaoErrada1": "A companhia ou sociedade anônima terá o capital dividido em ações, e a responsabilidade dos sócios ou acionistas será limitada ao valor nominal das ações subscritas ou adquiridas.",
    "versaoErrada2": "A companhia ou sociedade anônima terá o capital dividido em ações, e a responsabilidade dos sócios ou acionistas será limitada ao preço de emissão das ações subscritas e integralizadas.",
    "explicacaoDiferenca": "A versão 1 troca 'preço de emissão' por 'valor nominal': a lei limita a responsabilidade ao preço de emissão (o que foi efetivamente ajustado na subscrição), conceito que existe mesmo em ações sem valor nominal. A versão 2 troca 'ou' por 'e', exigindo cumulativamente a integralização, quando a lei fala apenas em ações subscritas OU adquiridas, bastando a titularidade.",
    "regraMemoria": "S/A: responsabilidade limitada ao PREÇO DE EMISSÃO — nunca ao valor nominal.",
    "seedVersion": 2
  },
  {
    "lei": "Código Civil (Lei 10.406/2002)",
    "dispositivo": "Art. 966, caput",
    "territorio": "Direito Empresarial",
    "subtema": "Empresário e Sociedade Empresária",
    "textoCorreto": "Considera-se empresário quem exerce profissionalmente atividade econômica organizada para a produção ou a circulação de bens ou de serviços.",
    "versaoErrada1": "Considera-se empresário quem exerce profissionalmente, com fins exclusivamente lucrativos, atividade econômica organizada para a produção ou a circulação de bens ou de serviços.",
    "versaoErrada2": "Considera-se empresário quem exerce profissionalmente atividade econômica organizada para a produção e a circulação de bens e de serviços.",
    "explicacaoDiferenca": "A versão 1 acrescenta 'com fins exclusivamente lucrativos', requisito que não consta do art. 966 — a lei exige apenas o exercício profissional de atividade econômica organizada, sem esse qualificativo expresso. A versão 2 troca os conectivos 'ou' por 'e', como se fosse necessário produzir e circular, bens e serviços, ao mesmo tempo, quando basta uma dessas finalidades.",
    "regraMemoria": "Empresário = atividade econômica organizada + profissionalismo. Sem 'fins lucrativos' escrito na lei, e sempre é OU (produção OU circulação; bens OU serviços).",
    "seedVersion": 2
  },
  {
    "lei": "Código Civil (Lei 10.406/2002)",
    "dispositivo": "Art. 972",
    "territorio": "Direito Empresarial",
    "subtema": "Empresário e Sociedade Empresária",
    "textoCorreto": "Podem exercer a atividade de empresário os que estiverem em pleno gozo da capacidade civil e não forem legalmente impedidos.",
    "versaoErrada1": "Podem exercer a atividade de empresário os que estiverem em pleno gozo da capacidade civil ou não forem legalmente impedidos.",
    "versaoErrada2": "Podem exercer a atividade de empresário os que estiverem em pleno gozo da capacidade jurídica e não forem legalmente impedidos.",
    "explicacaoDiferenca": "A versão 1 troca o 'e' por 'ou', tornando alternativos dois requisitos que a lei exige cumulativamente. A versão 2 troca 'capacidade civil' por 'capacidade jurídica' — capacidade jurídica (de direito) todos têm desde o nascimento, mas o art. 972 exige a capacidade de fato/civil plena, essencial para distinguir do empresário incapaz, que só atua representado ou assistido.",
    "regraMemoria": "Empresário: capacidade CIVIL PLENA E sem impedimento legal — os dois juntos, não um ou outro.",
    "seedVersion": 2
  },
  {
    "lei": "Lei de Processo Administrativo Federal (Lei 9.784/1999)",
    "dispositivo": "Art. 2º, caput",
    "territorio": "Direito Administrativo",
    "subtema": "Princípios da Administração Pública",
    "textoCorreto": "A Administração Pública obedecerá, dentre outros, aos princípios da legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência.",
    "versaoErrada1": "A Administração Pública obedecerá, dentre outros, aos princípios da legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, publicidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência.",
    "versaoErrada2": "A Administração Pública obedecerá, dentre outros, aos princípios da legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, interesse público e eficiência.",
    "explicacaoDiferenca": "A versão 1 inclui 'publicidade' na lista do caput do art. 2º — pegadinha clássica, pois esse princípio não está expressamente enumerado nesse dispositivo, ao contrário de 'moralidade', que está. A versão 2 omite 'segurança jurídica', princípio expressamente citado no artigo e muito cobrado, ligado à proteção da confiança legítima do administrado.",
    "regraMemoria": "Art. 2º da 9.784 tem 'segurança jurídica' na lista, mas NÃO tem 'publicidade' escrita — decoreba clássica de pegadinha.",
    "seedVersion": 2
  },
  {
    "lei": "Lei de Improbidade Administrativa (Lei 8.429/1992)",
    "dispositivo": "Art. 9º, caput",
    "territorio": "Direito Administrativo",
    "subtema": "Improbidade Administrativa",
    "textoCorreto": "Constitui ato de improbidade administrativa importando enriquecimento ilícito auferir qualquer tipo de vantagem patrimonial indevida em razão do exercício de cargo, de mandato, de função, de emprego ou de atividade nas entidades referidas no art. 1º desta Lei.",
    "versaoErrada1": "Constitui ato de improbidade administrativa importando enriquecimento ilícito auferir qualquer tipo de vantagem patrimonial em razão do exercício de cargo, de mandato, de função, de emprego ou de atividade nas entidades referidas no art. 1º desta Lei.",
    "versaoErrada2": "Constitui ato de improbidade administrativa importando enriquecimento ilícito auferir qualquer tipo de vantagem patrimonial indevida em razão do exercício de cargo, de mandato, de função, de emprego e de atividade nas entidades referidas no art. 1º desta Lei.",
    "explicacaoDiferenca": "A versão 1 suprime a palavra 'indevida', essencial para caracterizar o ilícito — sem esse termo, até uma vantagem lícita (como o próprio salário) pareceria configurar improbidade. A versão 2 troca o conectivo 'ou' por 'e' entre os vínculos (cargo, mandato, função, emprego, atividade), como se fosse necessário ocupar todos simultaneamente, quando basta um deles.",
    "regraMemoria": "Improbidade por enriquecimento ilícito = vantagem INDEVIDA. Sem essa palavra, o tipo perde o núcleo.",
    "seedVersion": 2
  },
  {
    "lei": "Lei de Improbidade Administrativa (Lei 8.429/1992)",
    "dispositivo": "Art. 10, caput",
    "territorio": "Direito Administrativo",
    "subtema": "Improbidade Administrativa",
    "textoCorreto": "Constitui ato de improbidade administrativa que causa lesão ao erário qualquer ação ou omissão, dolosa, que enseje perda patrimonial efetiva.",
    "versaoErrada1": "Constitui ato de improbidade administrativa que causa lesão ao erário qualquer ação ou omissão, dolosa ou culposa, que enseje perda patrimonial efetiva.",
    "versaoErrada2": "Constitui ato de improbidade administrativa que causa lesão ao erário qualquer ação ou omissão, dolosa, que enseje perda patrimonial, ainda que presumida.",
    "explicacaoDiferenca": "A versão 1 reintroduz a modalidade 'culposa', eliminada pela reforma da Lei 14.230/2021 — hoje a improbidade por dano ao erário exige dolo, não bastando mais a culpa do agente. A versão 2 troca 'perda patrimonial efetiva' por uma perda 'presumida', quando a lei exige dano concreto e comprovado, não sendo cabível a improbidade por dano meramente presumido.",
    "regraMemoria": "Pós-reforma 2021: improbidade do art. 10 só por DOLO (nunca culpa), com dano EFETIVO, nunca presumido.",
    "seedVersion": 2
  },
  {
    "lei": "Lei de Licitações e Contratos Administrativos (Lei 14.133/2021)",
    "dispositivo": "Art. 5º",
    "territorio": "Direito Administrativo",
    "subtema": "Licitações e Contratos Administrativos",
    "textoCorreto": "Na aplicação desta Lei, serão observados os princípios da legalidade, da impessoalidade, da moralidade, da publicidade, da eficiência, do interesse público, da probidade administrativa, da igualdade, do planejamento, da transparência, da eficácia, da segregação de funções, da motivação, da vinculação ao edital, do julgamento objetivo, da segurança jurídica, da razoabilidade, da competitividade, da proporcionalidade, da celeridade, da economicidade e do desenvolvimento nacional sustentável.",
    "versaoErrada1": "Na aplicação desta Lei, serão observados os princípios da legalidade, da finalidade, da impessoalidade, da moralidade, da publicidade, da eficiência, do interesse público, da probidade administrativa, da igualdade, do planejamento, da transparência, da eficácia, da segregação de funções, da motivação, da vinculação ao edital, do julgamento objetivo, da segurança jurídica, da razoabilidade, da competitividade, da proporcionalidade, da celeridade, da economicidade e do desenvolvimento nacional sustentável.",
    "versaoErrada2": "Na aplicação desta Lei, serão observados os princípios da legalidade, da impessoalidade, da moralidade, da publicidade, da eficiência, do interesse público, da probidade administrativa, da igualdade, do planejamento, da transparência, da eficácia, da motivação, da vinculação ao edital, do julgamento objetivo, da segurança jurídica, da razoabilidade, da competitividade, da proporcionalidade, da celeridade, da economicidade e do desenvolvimento nacional sustentável.",
    "explicacaoDiferenca": "A versão 1 acrescenta 'da finalidade', princípio que consta do art. 2º da Lei 9.784/99, mas não está expressamente listado no art. 5º da Lei 14.133/2021. A versão 2 omite 'da segregação de funções', princípio característico e inovador da nova Lei de Licitações, que impõe a separação entre quem solicita, autoriza, aprova e fiscaliza a contratação.",
    "regraMemoria": "14.133 tem 'segregação de funções' (marca da lei nova); 'finalidade' é da 9.784, não entra aqui.",
    "seedVersion": 2
  },
  {
    "lei": "Código de Processo Civil (Lei 13.105/2015)",
    "dispositivo": "Art. 2º",
    "territorio": "Processo Civil",
    "subtema": "Normas Fundamentais do Processo",
    "textoCorreto": "O processo começa por iniciativa da parte e se desenvolve por impulso oficial, salvo as exceções previstas em lei.",
    "versaoErrada1": "O processo começa por iniciativa do juiz e se desenvolve por impulso oficial, salvo as exceções previstas em lei.",
    "versaoErrada2": "O processo começa por iniciativa da parte e se desenvolve por impulso oficial, não admitidas exceções.",
    "explicacaoDiferenca": "A versão 1 inverte o princípio da inércia da jurisdição, atribuindo ao juiz a iniciativa de instaurar o processo, quando a regra é a parte provocar a jurisdição. A versão 2 suprime a ressalva 'salvo as exceções previstas em lei', que permite hipóteses de instauração de ofício (ex.: inventário), tornando a regra absoluta quando não é.",
    "regraMemoria": "Processo começa pela PARTE (inércia da jurisdição), mas caminha por IMPULSO OFICIAL — e sempre 'salvo exceções em lei'.",
    "seedVersion": 2
  },
  {
    "lei": "Código de Processo Civil (Lei 13.105/2015)",
    "dispositivo": "Art. 9º, caput",
    "territorio": "Processo Civil",
    "subtema": "Normas Fundamentais do Processo",
    "textoCorreto": "Não se proferirá decisão contra uma das partes sem que ela seja previamente ouvida.",
    "versaoErrada1": "Poderá proferir-se decisão contra uma das partes sem que ela seja previamente ouvida.",
    "versaoErrada2": "Não se proferirá decisão contra uma das partes sem que ela seja previamente ouvida, ressalvadas as hipóteses de tutela de urgência.",
    "explicacaoDiferenca": "A versão 1 troca 'não se proferirá' (vedação) por 'poderá proferir-se' (faculdade), invertendo a regra do contraditório, que é imperativa, não discricionária. A versão 2 insere no caput a ressalva das hipóteses de tutela de urgência, que na verdade está prevista no parágrafo único do art. 9º, não integrando o texto literal do caput.",
    "regraMemoria": "Art. 9º caput é seco: 'NÃO se profere decisão sem ouvir a parte'. As exceções ficam no parágrafo único.",
    "seedVersion": 2
  },
  {
    "lei": "Código de Processo Civil (Lei 13.105/2015)",
    "dispositivo": "Art. 139, IV",
    "territorio": "Processo Civil",
    "subtema": "Cumprimento de Sentença e Execução",
    "textoCorreto": "O juiz dirigirá o processo conforme as disposições deste Código, incumbindo-lhe determinar todas as medidas indutivas, coercitivas, mandamentais ou sub-rogatórias necessárias para assegurar o cumprimento de ordem judicial, inclusive nas ações que tenham por objeto prestação pecuniária.",
    "versaoErrada1": "O juiz dirigirá o processo conforme as disposições deste Código, incumbindo-lhe determinar todas as medidas indutivas, coercitivas e sub-rogatórias necessárias para assegurar o cumprimento de ordem judicial, inclusive nas ações que tenham por objeto prestação pecuniária.",
    "versaoErrada2": "O juiz dirigirá o processo conforme as disposições deste Código, incumbindo-lhe determinar todas as medidas indutivas, coercitivas, mandamentais ou sub-rogatórias necessárias para assegurar o cumprimento de ordem judicial, exceto nas ações que tenham por objeto prestação pecuniária.",
    "explicacaoDiferenca": "A versão 1 omite a categoria 'mandamentais' do rol de medidas atípicas, empobrecendo o dispositivo que propositalmente é amplo (indutivas, coercitivas, mandamentais e sub-rogatórias). A versão 2 troca 'inclusive' por 'exceto': o avanço do art. 139, IV, é justamente autorizar essas medidas atípicas até nas obrigações de pagar quantia, superando a limitação do CPC/1973.",
    "regraMemoria": "139, IV: juiz pode medida atípica até em dívida de dinheiro — é 'INCLUSIVE', não 'exceto'. E são 4 tipos: indutiva, coercitiva, mandamental, sub-rogatória.",
    "seedVersion": 2
  },
  {
    "lei": "Código de Processo Civil (Lei 13.105/2015)",
    "dispositivo": "Art. 300, caput",
    "territorio": "Processo Civil",
    "subtema": "Tutelas Provisórias",
    "textoCorreto": "A tutela de urgência será concedida quando houver elementos que evidenciem a probabilidade do direito e o perigo de dano ou o risco ao resultado útil do processo.",
    "versaoErrada1": "A tutela de urgência será concedida quando houver elementos que evidenciem a probabilidade do direito ou o perigo de dano ou o risco ao resultado útil do processo.",
    "versaoErrada2": "A tutela de urgência será concedida quando houver prova inequívoca que convença o julgador da verossimilhança do direito e o perigo de dano ou o risco ao resultado útil do processo.",
    "explicacaoDiferenca": "A probabilidade do direito é requisito CUMULATIVO com o perigo de dano/risco (é 'e', não 'ou'); só entre perigo de dano e risco ao resultado útil é que há alternatividade. Além disso, o padrão do CPC/2015 é 'elementos que evidenciem a probabilidade do direito', não 'prova inequívoca da verossimilhança', que é linguagem do CPC/1973 (art. 273) para a antecipação de tutela.",
    "regraMemoria": "PROBABILIDADE + (DANO ou RISCO): o primeiro 'e' é fixo. E esquece 'prova inequívoca', isso é CPC velho.",
    "seedVersion": 2
  },
  {
    "lei": "Consolidação das Leis do Trabalho (Decreto-Lei 5.452/1943)",
    "dispositivo": "Art. 831, parágrafo único",
    "territorio": "Processo do Trabalho",
    "subtema": "Recursos Trabalhistas",
    "textoCorreto": "No caso de conciliação, o termo que for lavrado valerá como decisão irrecorrível, salvo para a Previdência Social quanto às contribuições que lhe forem devidas.",
    "versaoErrada1": "No caso de conciliação, o termo que for lavrado valerá como decisão recorrível, salvo para a Previdência Social quanto às contribuições que lhe forem devidas.",
    "versaoErrada2": "No caso de conciliação, o termo que for lavrado valerá como decisão irrecorrível, salvo para a Fazenda Nacional quanto aos tributos que lhe forem devidos.",
    "explicacaoDiferenca": "O termo de conciliação trabalhista é IRrecorrível como regra geral (a decisão faz coisa julgada, sem recurso das partes). A única exceção é a Previdência Social, que pode recorrer quanto às contribuições previdenciárias incidentes sobre o acordo — não a Fazenda Nacional quanto a tributos em geral.",
    "regraMemoria": "Conciliação trabalhista é ponto final: irrecorrível. Só o INSS pode bater à porta pra cobrar contribuição.",
    "seedVersion": 2
  },
  {
    "lei": "Consolidação das Leis do Trabalho (Decreto-Lei 5.452/1943)",
    "dispositivo": "Art. 843, caput",
    "territorio": "Processo do Trabalho",
    "subtema": "Atos, Prazos e Nulidades",
    "textoCorreto": "Na audiência de julgamento deverão estar presentes o reclamante e o reclamado, independentemente do comparecimento de seus representantes, salvo quando a lei dispensar.",
    "versaoErrada1": "Na audiência de julgamento poderão estar presentes o reclamante e o reclamado, independentemente do comparecimento de seus representantes, salvo quando a lei dispensar.",
    "versaoErrada2": "Na audiência de julgamento deverão estar presentes o reclamante e o reclamado, sendo dispensada a presença pessoal caso compareçam seus representantes, salvo quando a lei dispensar.",
    "explicacaoDiferenca": "O comparecimento pessoal das partes é OBRIGATÓRIO ('deverão'), e a presença de representante/advogado NÃO substitui a presença pessoal ('independentemente do comparecimento de seus representantes'), salvo dispensa legal expressa.",
    "regraMemoria": "Audiência trabalhista: a parte tem que ir PESSOALMENTE. Advogado presente não é substituto. DEVERÃO, não poderão.",
    "seedVersion": 2
  },
  {
    "lei": "Consolidação das Leis do Trabalho (Decreto-Lei 5.452/1943)",
    "dispositivo": "Art. 844, caput",
    "territorio": "Processo do Trabalho",
    "subtema": "Atos, Prazos e Nulidades",
    "textoCorreto": "O não comparecimento do reclamante à audiência importa o arquivamento da reclamação, e o não comparecimento do reclamado importa revelia, além de confissão quanto à matéria de fato.",
    "versaoErrada1": "O não comparecimento do reclamante à audiência importa revelia e confissão quanto à matéria de fato, e o não comparecimento do reclamado importa o arquivamento da reclamação.",
    "versaoErrada2": "O não comparecimento do reclamante à audiência importa o arquivamento da reclamação, e o não comparecimento do reclamado poderá importar revelia ou confissão quanto à matéria de fato, a critério do juízo.",
    "explicacaoDiferenca": "As consequências são invertidas conforme quem falta: ausência do reclamante gera arquivamento; ausência do reclamado gera revelia E confissão ficta quanto à matéria de fato, cumulativamente e de forma automática — não é uma alternativa discricionária do juízo.",
    "regraMemoria": "Reclamante faltou = arquivou. Reclamado faltou = revelia + confissão, as duas juntas, automático.",
    "seedVersion": 2
  },
  {
    "lei": "Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica, 1969)",
    "dispositivo": "Art. 7.1",
    "territorio": "Direitos Humanos",
    "subtema": "Sistema Interamericano (Corte/Comissão)",
    "textoCorreto": "Toda pessoa tem direito à liberdade e à segurança pessoais.",
    "versaoErrada1": "Toda pessoa tem direito à liberdade ou à segurança pessoais.",
    "versaoErrada2": "Toda pessoa tem direito à liberdade e à segurança pessoais, nos termos da lei.",
    "explicacaoDiferenca": "Liberdade e segurança pessoais são assegurados conjuntamente ('e', não 'ou') como um só bloco de proteção; o dispositivo também não traz cláusula de reserva legal ('nos termos da lei') como ocorre em outros artigos da Convenção — o direito é enunciado de forma direta e incondicionada.",
    "regraMemoria": "7.1 é sinal verde puro: liberdade E segurança, sem 'nos termos da lei'.",
    "seedVersion": 2
  },
  {
    "lei": "Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica, 1969)",
    "dispositivo": "Art. 8.1",
    "territorio": "Direitos Humanos",
    "subtema": "Sistema Interamericano (Corte/Comissão)",
    "textoCorreto": "Toda pessoa terá o direito de ser ouvida, com as devidas garantias e dentro de um prazo razoável, por um juiz ou tribunal competente, independente e imparcial, estabelecido anteriormente por lei, na apuração de qualquer acusação penal formulada contra ela, ou para que se determinem seus direitos ou obrigações de natureza civil, trabalhista, fiscal ou de qualquer outra natureza.",
    "versaoErrada1": "Toda pessoa terá o direito de ser ouvida, com as devidas garantias e dentro de um prazo razoável, por um juiz ou tribunal competente, independente e imparcial, na apuração de qualquer acusação penal formulada contra ela, ou para que se determinem seus direitos ou obrigações de natureza civil, trabalhista, fiscal ou de qualquer outra natureza.",
    "versaoErrada2": "Toda pessoa terá o direito de ser ouvida, com as devidas garantias e dentro do prazo legalmente estabelecido, por um juiz ou tribunal competente, independente e imparcial, estabelecido anteriormente por lei, na apuração de qualquer acusação penal formulada contra ela, ou para que se determinem seus direitos ou obrigações de natureza civil, trabalhista, fiscal ou de qualquer outra natureza.",
    "explicacaoDiferenca": "A exigência de que o juízo seja 'estabelecido anteriormente por lei' consagra a garantia do juiz natural e veda tribunais de exceção — omiti-la esvazia a garantia. E o padrão do artigo é 'prazo razoável' (critério flexível, avaliado no caso concreto), não 'prazo legalmente estabelecido' (um prazo fixo em lei).",
    "regraMemoria": "8.1 é: juiz NATURAL (lei anterior) + prazo RAZOÁVEL, não prazo fixo.",
    "seedVersion": 2
  },
  {
    "lei": "Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica, 1969)",
    "dispositivo": "Art. 7.7",
    "territorio": "Direitos Humanos",
    "subtema": "Sistema Interamericano (Corte/Comissão)",
    "textoCorreto": "Ninguém deve ser detido por dívidas. Este princípio não limita os mandados de autoridade judiciária competente expedidos em virtude de inadimplemento de obrigação alimentar.",
    "versaoErrada1": "Ninguém deve ser detido por dívidas. Este princípio não limita os mandados de autoridade judiciária competente expedidos em virtude de inadimplemento de obrigação alimentar ou tributária.",
    "versaoErrada2": "Ninguém deve ser detido por dívidas. Este princípio limita os mandados de autoridade judiciária competente expedidos em virtude de inadimplemento de obrigação alimentar.",
    "explicacaoDiferenca": "A única exceção à vedação de prisão por dívida é a obrigação ALIMENTAR (pensão alimentícia) — não abrange dívida tributária. Além disso, o texto diz que a vedação 'não limita' (isto é, permite) os mandados judiciais por inadimplemento alimentar; dizer que 'limita' inverte completamente o sentido da norma.",
    "regraMemoria": "Prisão por dívida: só pensão alimentícia entra na exceção. Fisco e contrato jamais.",
    "seedVersion": 2
  },
  {
    "lei": "Política Nacional do Meio Ambiente (Lei 6.938/1981)",
    "dispositivo": "Art. 14, § 1º",
    "territorio": "Direito Ambiental",
    "subtema": "Responsabilidade Ambiental",
    "textoCorreto": "Sem obstar a aplicação das penalidades administrativas, é o poluidor obrigado, independentemente da existência de culpa, a indenizar ou reparar os danos causados ao meio ambiente e a terceiros, afetados por sua atividade.",
    "versaoErrada1": "Sem obstar a aplicação das penalidades administrativas, é o poluidor obrigado, mediante comprovação de culpa, a indenizar ou reparar os danos causados ao meio ambiente e a terceiros, afetados por sua atividade.",
    "versaoErrada2": "Obstada a aplicação das penalidades administrativas, é o poluidor obrigado, independentemente da existência de culpa, a indenizar ou reparar os danos causados ao meio ambiente e a terceiros, afetados por sua atividade.",
    "explicacaoDiferenca": "A responsabilidade civil ambiental é OBJETIVA (independe de culpa) — exigir 'comprovação de culpa' descaracteriza a teoria do risco adotada pela lei. Além disso, essa responsabilização é CUMULATIVA com a sanção administrativa ('sem obstar'), não a substitui nem a impede.",
    "regraMemoria": "Dano ambiental: responsabilidade OBJETIVA (sem culpa) e cumulativa com a multa administrativa, nunca 'ou um ou outro'.",
    "seedVersion": 2
  },
  {
    "lei": "Constituição Federal de 1988",
    "dispositivo": "Art. 225, caput",
    "territorio": "Direito Ambiental",
    "subtema": "Princípios e Competência Ambiental",
    "textoCorreto": "Todos têm direito ao meio ambiente ecologicamente equilibrado, bem de uso comum do povo e essencial à sadia qualidade de vida, impondo-se ao Poder Público e à coletividade o dever de defendê-lo e preservá-lo para as presentes e futuras gerações.",
    "versaoErrada1": "Todos os brasileiros têm direito ao meio ambiente ecologicamente equilibrado, bem de uso comum do povo e essencial à sadia qualidade de vida, impondo-se ao Poder Público e à coletividade o dever de defendê-lo e preservá-lo para as presentes e futuras gerações.",
    "versaoErrada2": "Todos têm direito ao meio ambiente ecologicamente equilibrado, bem de uso comum do povo e essencial à sadia qualidade de vida, impondo-se ao Poder Público o dever de defendê-lo e preservá-lo para as presentes e futuras gerações.",
    "explicacaoDiferenca": "O direito ao meio ambiente é de 'todos', sem restrição à nacionalidade brasileira. E o dever de defender e preservar é COMPARTILHADO entre Poder Público e coletividade — atribuí-lo só ao Estado ignora a corresponsabilidade da sociedade civil que é a marca desse dispositivo.",
    "regraMemoria": "Meio ambiente é direito de TODOS (não só brasileiro) e dever de TODOS (Estado + sociedade), presente e futuro.",
    "seedVersion": 2
  },
  {
    "lei": "Código de Defesa do Consumidor (Lei 8.078/1990)",
    "dispositivo": "Art. 2º, caput",
    "territorio": "Direito do Consumidor",
    "subtema": "Conceitos e Princípios",
    "textoCorreto": "Consumidor é toda pessoa física ou jurídica que adquire ou utiliza produto ou serviço como destinatário final.",
    "versaoErrada1": "Consumidor é toda pessoa física que adquire ou utiliza produto ou serviço como destinatário final.",
    "versaoErrada2": "Consumidor é toda pessoa física ou jurídica que adquire e utiliza produto ou serviço como destinatário final.",
    "explicacaoDiferenca": "O conceito de consumidor abrange tanto pessoa física quanto jurídica, e basta ADQUIRIR OU UTILIZAR o produto/serviço (situações alternativas) — não é necessário fazer as duas coisas cumulativamente para ser considerado consumidor.",
    "regraMemoria": "Consumidor = PF ou PJ, que adquire OU usa (uma das duas já basta), como destinatário final.",
    "seedVersion": 2
  },
  {
    "lei": "Código de Defesa do Consumidor (Lei 8.078/1990)",
    "dispositivo": "Art. 6º, VIII",
    "territorio": "Direito do Consumidor",
    "subtema": "Defesa do Consumidor em Juízo",
    "textoCorreto": "São direitos básicos do consumidor a facilitação da defesa de seus direitos, inclusive com a inversão do ônus da prova, a seu favor, no processo civil, quando, a critério do juiz, for verossímil a alegação ou quando for ele hipossuficiente, segundo as regras ordinárias de experiências.",
    "versaoErrada1": "São direitos básicos do consumidor a facilitação da defesa de seus direitos, inclusive com a inversão do ônus da prova, a seu favor, no processo civil, quando, a critério do juiz, for verossímil a alegação e quando for ele hipossuficiente, segundo as regras ordinárias de experiências.",
    "versaoErrada2": "São direitos básicos do consumidor a facilitação da defesa de seus direitos, inclusive com a inversão automática do ônus da prova, a seu favor, no processo civil, quando for verossímil a alegação ou quando for ele hipossuficiente, segundo as regras ordinárias de experiências.",
    "explicacaoDiferenca": "Verossimilhança e hipossuficiência são requisitos ALTERNATIVOS para a inversão do ônus da prova (basta um dos dois, não os dois juntos). Além disso, a inversão depende sempre da avaliação do juiz no caso concreto ('a critério do juiz'), não ocorre de forma automática.",
    "regraMemoria": "Inversão do ônus: verossímil OU hipossuficiente (um já basta), e sempre a critério do juiz, nunca automática.",
    "seedVersion": 2
  },
  {
    "lei": "Código de Defesa do Consumidor (Lei 8.078/1990)",
    "dispositivo": "Art. 14, caput",
    "territorio": "Direito do Consumidor",
    "subtema": "Responsabilidade pelo Fato/Vício",
    "textoCorreto": "O fornecedor de serviços responde, independentemente da existência de culpa, pela reparação dos danos causados aos consumidores por defeitos relativos à prestação dos serviços, bem como por informações insuficientes ou inadequadas sobre sua fruição e riscos.",
    "versaoErrada1": "O fornecedor de serviços responde, desde que comprovada a existência de culpa, pela reparação dos danos causados aos consumidores por defeitos relativos à prestação dos serviços, bem como por informações insuficientes ou inadequadas sobre sua fruição e riscos.",
    "versaoErrada2": "O fornecedor de serviços responde, independentemente da existência de culpa, pela reparação dos danos causados aos consumidores por defeitos relativos à prestação dos serviços, bem como pela ausência de informações sobre sua fruição e riscos.",
    "explicacaoDiferenca": "A responsabilidade do fornecedor de serviços é OBJETIVA (independe de culpa) — exigir culpa comprovada muda o regime para subjetivo. Além disso, o dispositivo responsabiliza tanto por informação 'insuficiente ou inadequada' quanto por ausência total dela; restringir a hipótese apenas à 'ausência de informações' deixa de fora o serviço mal explicado ou informado de forma capenga.",
    "regraMemoria": "Serviço com defeito: responsabilidade OBJETIVA, e vale tanto a falta de informação quanto a informação capenga.",
    "seedVersion": 2
  },
  {
    "lei": "Estatuto da Criança e do Adolescente (Lei 8.069/1990)",
    "dispositivo": "Art. 2º",
    "territorio": "Direito da Criança e do Adolescente",
    "subtema": "Direitos Fundamentais da Criança e do Adolescente",
    "textoCorreto": "Considera-se criança, para os efeitos desta Lei, a pessoa até doze anos de idade incompletos, e adolescente aquela entre doze e dezoito anos de idade.",
    "versaoErrada1": "Considera-se criança, para os efeitos desta Lei, a pessoa até quatorze anos de idade incompletos, e adolescente aquela entre quatorze e dezoito anos de idade.",
    "versaoErrada2": "Considera-se criança, para os efeitos desta Lei, a pessoa até doze anos de idade completos, e adolescente aquela entre doze e dezoito anos de idade.",
    "explicacaoDiferenca": "O corte legal é aos 12 anos INCOMPLETOS (isto é, até um dia antes de completar 12 anos) — quem já completou 12 anos é adolescente, não criança. Mudar os números para 14 ou trocar 'incompletos' por 'completos' desloca a fronteira etária que define qual regime protetivo do ECA se aplica.",
    "regraMemoria": "Criança: até 12 incompletos. Adolescente: 12 a 18. Quem fez 12 anos já é adolescente, não criança.",
    "seedVersion": 2
  },
  {
    "lei": "Estatuto da Criança e do Adolescente (Lei 8.069/1990)",
    "dispositivo": "Art. 4º, caput",
    "territorio": "Direito da Criança e do Adolescente",
    "subtema": "Direitos Fundamentais da Criança e do Adolescente",
    "textoCorreto": "É dever da família, da comunidade, da sociedade em geral e do poder público assegurar, com absoluta prioridade, a efetivação dos direitos referentes à vida, à saúde, à alimentação, à educação, ao esporte, ao lazer, à profissionalização, à cultura, à dignidade, ao respeito, à liberdade e à convivência familiar e comunitária.",
    "versaoErrada1": "É dever da família, da comunidade, da sociedade em geral e do poder público assegurar, sempre que possível, a efetivação dos direitos referentes à vida, à saúde, à alimentação, à educação, ao esporte, ao lazer, à profissionalização, à cultura, à dignidade, ao respeito, à liberdade e à convivência familiar e comunitária.",
    "versaoErrada2": "É dever da família, da comunidade e do poder público assegurar, com absoluta prioridade, a efetivação dos direitos referentes à vida, à saúde, à alimentação, à educação, ao esporte, ao lazer, à profissionalização, à cultura, à dignidade, ao respeito, à liberdade e à convivência familiar e comunitária.",
    "explicacaoDiferenca": "A versão errada 1 troca 'com absoluta prioridade' por 'sempre que possível', esvaziando o princípio da prioridade absoluta, que é justamente o que obriga o Estado e a sociedade a atenderem a criança e o adolescente antes de qualquer outro interesse. A versão errada 2 omite 'da sociedade em geral' entre os responsáveis, reduzindo o rol de quatro para três titulares do dever, o que muda quem pode ser responsabilizado por omissão.",
    "regraMemoria": "4 responsáveis (família, comunidade, sociedade, poder público) + prioridade ABSOLUTA, sem 'se' e sem 'talvez'.",
    "seedVersion": 2
  },
  {
    "lei": "Estatuto da Criança e do Adolescente (Lei 8.069/1990)",
    "dispositivo": "Art. 103",
    "territorio": "Direito da Criança e do Adolescente",
    "subtema": "Ato Infracional e Medidas Socioeducativas",
    "textoCorreto": "Considera-se ato infracional a conduta descrita como crime ou contravenção penal.",
    "versaoErrada1": "Considera-se ato infracional a conduta descrita como crime e contravenção penal.",
    "versaoErrada2": "Considera-se infração penal a conduta descrita como crime ou contravenção penal.",
    "explicacaoDiferenca": "A versão errada 1 troca o 'ou' pelo 'e', dando a entender que a conduta precisaria ser crime e contravenção ao mesmo tempo, quando basta se enquadrar em qualquer um dos dois tipos para configurar ato infracional. A versão errada 2 troca o termo técnico 'ato infracional' por 'infração penal', mas ato infracional é conceito próprio do Direito da Criança e do Adolescente, aplicável apenas a crianças e adolescentes, e não se confunde com infração penal em sentido amplo.",
    "regraMemoria": "Ato infracional = crime OU contravenção. Basta um dos dois, e o nome é 'ato infracional', não 'infração penal'.",
    "seedVersion": 2
  },
  {
    "lei": "Lei de Introdução às Normas do Direito Brasileiro (Decreto-Lei 4.657/1942)",
    "dispositivo": "Art. 7º, caput",
    "territorio": "Direito Internacional",
    "subtema": "Direito Internacional Privado (LINDB)",
    "textoCorreto": "A lei do país em que domiciliada a pessoa determina as regras sobre o começo e o fim da personalidade, o nome, a capacidade e os direitos de família.",
    "versaoErrada1": "A lei do país de que é nacional a pessoa determina as regras sobre o começo e o fim da personalidade, o nome, a capacidade e os direitos de família.",
    "versaoErrada2": "A lei do país em que domiciliada a pessoa determina as regras sobre o começo e o fim da personalidade, o nome e a capacidade.",
    "explicacaoDiferenca": "A versão errada 1 troca o critério de conexão 'domicílio' por 'nacionalidade': o Brasil adota o critério do domicílio para o estatuto pessoal, diferentemente de países que usam a nacionalidade, e confundir os dois é um erro clássico de prova. A versão errada 2 omite 'os direitos de família' do rol de matérias regidas pela lei domiciliar, restringindo indevidamente o alcance do artigo.",
    "regraMemoria": "Brasil = lei do DOMICÍLIO da pessoa, nunca da nacionalidade, para personalidade, nome, capacidade e família.",
    "seedVersion": 2
  },
  {
    "lei": "Lei de Introdução às Normas do Direito Brasileiro (Decreto-Lei 4.657/1942)",
    "dispositivo": "Art. 9º, caput",
    "territorio": "Direito Internacional",
    "subtema": "Direito Internacional Privado (LINDB)",
    "textoCorreto": "Para qualificar e reger as obrigações, aplicar-se-á a lei do país em que se constituírem.",
    "versaoErrada1": "Para qualificar e reger as obrigações, aplicar-se-á a lei do país em que se cumprirem.",
    "versaoErrada2": "Para qualificar e reger os contratos, aplicar-se-á a lei do país em que se constituírem.",
    "explicacaoDiferenca": "A versão errada 1 troca o local de constituição pelo local de cumprimento da obrigação, mas a regra geral do art. 9º usa o local em que a obrigação se constitui (lex loci contractus), não onde é executada. A versão errada 2 restringe o alcance da regra, trocando 'as obrigações' (gênero, mais amplo) por 'os contratos' (espécie), o que reduz indevidamente o campo de aplicação da norma.",
    "regraMemoria": "Obrigação segue a lei do lugar onde NASCEU (se constituiu), não onde é paga.",
    "seedVersion": 2
  },
  {
    "lei": "Lei de Introdução às Normas do Direito Brasileiro (Decreto-Lei 4.657/1942)",
    "dispositivo": "Art. 10, caput",
    "territorio": "Direito Internacional",
    "subtema": "Direito Internacional Privado (LINDB)",
    "textoCorreto": "A sucessão por morte ou por ausência obedece à lei do país em que era domiciliado o defunto ou o desaparecido, qualquer que seja a natureza e a situação dos bens.",
    "versaoErrada1": "A sucessão por morte ou por ausência obedece à lei do país de que era nacional o defunto ou o desaparecido, qualquer que seja a natureza e a situação dos bens.",
    "versaoErrada2": "A sucessão por morte ou por ausência obedece à lei do país em que era domiciliado o defunto ou o desaparecido, desde que os bens estejam situados nesse mesmo país.",
    "explicacaoDiferenca": "A versão errada 1 repete o erro de trocar domicílio por nacionalidade como critério de conexão, quando a LINDB brasileira sempre usa o domicílio. A versão errada 2 acrescenta uma condição territorial inexistente no texto: o artigo é expresso ao dizer que a regra vale 'qualquer que seja a natureza e a situação dos bens', ou seja, independe de onde os bens estejam localizados.",
    "regraMemoria": "Sucessão = lei do domicílio do falecido, e NÃO IMPORTA onde estão os bens.",
    "seedVersion": 2
  },
  {
    "lei": "Lei das Eleições (Lei 9.504/1997)",
    "dispositivo": "Art. 73, caput",
    "territorio": "Direito Eleitoral",
    "subtema": "Condutas Vedadas e Abuso de Poder",
    "textoCorreto": "São proibidas aos agentes públicos, servidores ou não, as seguintes condutas tendentes a afetar a igualdade de oportunidades entre candidatos nos pleitos eleitorais.",
    "versaoErrada1": "São proibidas aos agentes públicos federais, servidores ou não, as seguintes condutas tendentes a afetar a igualdade de oportunidades entre candidatos nos pleitos eleitorais.",
    "versaoErrada2": "São proibidas aos agentes públicos, servidores ou não, as seguintes condutas que efetivamente afetem a igualdade de oportunidades entre candidatos nos pleitos eleitorais.",
    "explicacaoDiferenca": "A versão errada 1 insere a palavra 'federais', restringindo a proibição a agentes da esfera federal, quando na verdade o art. 73 se aplica a agentes públicos de todos os entes federativos (União, Estados, Distrito Federal e Municípios). A versão errada 2 troca 'condutas tendentes a afetar' por 'condutas que efetivamente afetem', exigindo prova de dano concreto, quando a lei pune a mera potencialidade lesiva da conduta, independentemente de resultado comprovado.",
    "regraMemoria": "Art. 73 vale para agente público de qualquer esfera, e pune conduta só 'tendente', sem precisar provar dano.",
    "seedVersion": 2
  },
  {
    "lei": "Lei das Eleições (Lei 9.504/1997)",
    "dispositivo": "Art. 14, § 3º",
    "territorio": "Direito Eleitoral",
    "subtema": "Elegibilidade e Registro de Candidatura",
    "textoCorreto": "São condições de elegibilidade, na forma da lei: a nacionalidade brasileira; o pleno exercício dos direitos políticos; o alistamento eleitoral; o domicílio eleitoral na circunscrição; a filiação partidária; a idade mínima.",
    "versaoErrada1": "São condições de elegibilidade, na forma da lei: a nacionalidade brasileira nata; o pleno exercício dos direitos políticos; o alistamento eleitoral; o domicílio eleitoral na circunscrição; a filiação partidária; a idade mínima.",
    "versaoErrada2": "São condições de elegibilidade, na forma da lei: a nacionalidade brasileira; o pleno exercício dos direitos políticos; o alistamento eleitoral; o domicílio eleitoral na circunscrição; a idade mínima.",
    "explicacaoDiferenca": "A versão errada 1 acrescenta a exigência de nacionalidade brasileira nata, mas essa condição geral admite tanto brasileiro nato quanto naturalizado, sendo a exclusividade de nato reservada apenas a cargos específicos (como Presidente e Vice). A versão errada 2 omite a filiação partidária do rol de condições de elegibilidade, quando ela continua sendo exigida como requisito autônomo para o registro de candidatura.",
    "regraMemoria": "Elegibilidade pede brasileiro nato OU naturalizado (regra geral) + filiação partidária obrigatória.",
    "seedVersion": 2
  },
  {
    "lei": "Lei Complementar de Responsabilidade Fiscal (LC 101/2000)",
    "dispositivo": "Art. 1º, § 1º",
    "territorio": "Direito Financeiro",
    "subtema": "Lei de Responsabilidade Fiscal",
    "textoCorreto": "A responsabilidade na gestão fiscal pressupõe a ação planejada e transparente, em que se previnem riscos e corrigem desvios capazes de afetar o equilíbrio das contas públicas, mediante o cumprimento de metas de resultados entre receitas e despesas e a obediência a limites e condições no que tange a renúncia de receita, geração de despesas com pessoal, da seguridade social e outras, dívidas consolidada e mobiliária, operações de crédito, inclusive por antecipação de receita, concessão de garantia e inscrição em Restos a Pagar.",
    "versaoErrada1": "A responsabilidade na gestão fiscal pressupõe a ação planejada e transparente, em que se previnem riscos e corrigem desvios capazes de afetar o equilíbrio das contas públicas, mediante o cumprimento de metas de resultados entre receitas e despesas do exercício anterior e a obediência a limites e condições no que tange a renúncia de receita, geração de despesas com pessoal, da seguridade social e outras, dívidas consolidada e mobiliária, operações de crédito, inclusive por antecipação de receita, concessão de garantia e inscrição em Restos a Pagar.",
    "versaoErrada2": "A responsabilidade na gestão fiscal pressupõe a ação planejada e transparente, em que se previnem riscos e corrigem desvios capazes de afetar o equilíbrio das contas públicas, mediante o cumprimento de metas de resultados entre receitas e despesas e a obediência a limites e condições no que tange a renúncia de receita, geração de despesas com pessoal, da seguridade social e outras, dívidas consolidada e mobiliária, operações de crédito, inclusive por antecipação de receita, e concessão de garantia.",
    "explicacaoDiferenca": "A versão errada 1 acrescenta 'do exercício anterior' às metas de resultados, mas as metas fiscais são fixadas para o próprio exercício (via LDO), não com base no exercício passado. A versão errada 2 suprime 'inscrição em Restos a Pagar' do rol de itens sujeitos a limites, item que foi uma das grandes inovações da LRF para conter o endividamento por meio de despesas empenhadas e não pagas no exercício.",
    "regraMemoria": "Gestão fiscal responsável controla metas do PRÓPRIO exercício e vai até os Restos a Pagar.",
    "seedVersion": 2
  },
  {
    "lei": "Lei Complementar de Responsabilidade Fiscal (LC 101/2000)",
    "dispositivo": "Art. 15",
    "territorio": "Direito Financeiro",
    "subtema": "Despesa e Receita Pública",
    "textoCorreto": "Serão consideradas não autorizadas, irregulares e lesivas ao patrimônio público a geração de despesa ou assunção de obrigação que não atendam ao disposto nos arts. 16 e 17 desta Lei Complementar.",
    "versaoErrada1": "Serão consideradas não autorizadas, irregulares e lesivas ao patrimônio público a geração de despesa ou assunção de obrigação que não atendam ao disposto no art. 16 ou no art. 17 desta Lei Complementar.",
    "versaoErrada2": "Serão consideradas não autorizadas, irregulares e lesivas ao patrimônio público a geração de despesa ou assunção de obrigação que não atendam ao disposto nos arts. 16 e 18 desta Lei Complementar.",
    "explicacaoDiferenca": "A versão errada 1 troca 'arts. 16 e 17' (cumulativo) por 'art. 16 ou art. 17' (alternativo), sugerindo que bastaria cumprir apenas um deles, quando a lei exige a observância simultânea de ambos os dispositivos (estimativa de impacto e declaração do ordenador de despesa). A versão errada 2 troca a remissão ao art. 17 pelo art. 18, alterando a referência normativa correta e remetendo a um dispositivo que trata de outro tema (despesa obrigatória de caráter continuado).",
    "regraMemoria": "Despesa só é regular se cumprir arts. 16 E 17 juntos, os dois, não um ou outro.",
    "seedVersion": 2
  },
  {
    "lei": "Lei de Benefícios da Previdência Social (Lei 8.213/1991)",
    "dispositivo": "Art. 11, I",
    "territorio": "Direito Previdenciário",
    "subtema": "Segurados e Filiação",
    "textoCorreto": "São segurados obrigatórios da Previdência Social, como empregado, aquele que presta serviço de natureza urbana ou rural à empresa, em caráter não eventual, sob sua subordinação e mediante remuneração.",
    "versaoErrada1": "São segurados obrigatórios da Previdência Social, como empregado, aquele que presta serviço de natureza urbana ou rural à empresa, em caráter eventual, sob sua subordinação e mediante remuneração.",
    "versaoErrada2": "São segurados obrigatórios da Previdência Social, como empregado, aquele que presta serviço de natureza urbana ou rural à empresa, em caráter não eventual, sob sua subordinação ou mediante remuneração.",
    "explicacaoDiferenca": "A versão errada 1 troca 'não eventual' por 'eventual', mas a habitualidade é requisito essencial do vínculo de empregado; quem presta serviço eventual costuma se enquadrar em outra categoria (contribuinte individual ou trabalhador avulso). A versão errada 2 troca o 'e' por 'ou' entre subordinação e remuneração, transformando dois requisitos que devem estar presentes ao mesmo tempo em requisitos alternativos, o que descaracteriza a relação de emprego.",
    "regraMemoria": "Empregado = serviço NÃO eventual + subordinação E remuneração, os dois juntos, sempre.",
    "seedVersion": 2
  },
  {
    "lei": "Lei de Benefícios da Previdência Social (Lei 8.213/1991)",
    "dispositivo": "Art. 25, I",
    "territorio": "Direito Previdenciário",
    "subtema": "Benefícios Previdenciários",
    "textoCorreto": "A concessão das prestações que dependem de carência está sujeita, tratando-se de auxílio por incapacidade temporária e aposentadoria por incapacidade permanente, a 12 (doze) contribuições mensais.",
    "versaoErrada1": "A concessão das prestações que dependem de carência está sujeita, tratando-se de auxílio por incapacidade temporária e aposentadoria por incapacidade permanente, a 24 (vinte e quatro) contribuições mensais.",
    "versaoErrada2": "A concessão das prestações que dependem de carência está sujeita, tratando-se de auxílio por incapacidade temporária ou aposentadoria por incapacidade permanente, a 12 (doze) contribuições mensais.",
    "explicacaoDiferenca": "A versão errada 1 dobra o número de contribuições exigidas, de 12 para 24, alterando o prazo de carência efetivamente previsto em lei para esses benefícios. A versão errada 2 troca o 'e' por 'ou' entre os dois benefícios, o que sugere (incorretamente) que a regra de 12 contribuições valeria só para um deles isoladamente, quando na verdade ela se aplica igualmente a ambos.",
    "regraMemoria": "Auxílio-incapacidade e aposentadoria por incapacidade: carência de 12 contribuições. Decore '12 pra incapacidade'.",
    "seedVersion": 2
  },
  {
    "lei": "Lei de Benefícios da Previdência Social (Lei 8.213/1991)",
    "dispositivo": "Art. 102, caput",
    "territorio": "Direito Previdenciário",
    "subtema": "Segurados e Filiação",
    "textoCorreto": "A perda da qualidade de segurado importa em caducidade dos direitos inerentes a essa qualidade.",
    "versaoErrada1": "A perda da qualidade de segurado importa em suspensão temporária dos direitos inerentes a essa qualidade.",
    "versaoErrada2": "A perda da qualidade de dependente importa em caducidade dos direitos inerentes a essa qualidade.",
    "explicacaoDiferenca": "A versão errada 1 troca 'caducidade' (perda definitiva) por 'suspensão temporária', dando a falsa ideia de que os direitos seriam automaticamente recuperados depois, quando na verdade a caducidade extingue o direito, exigindo nova filiação e, em regra, novo período de carência. A versão errada 2 troca o sujeito 'segurado' por 'dependente', mas o art. 102, caput, trata da perda da qualidade de segurado, e não da qualidade de dependente, que tem regramento próprio.",
    "regraMemoria": "Perder a qualidade de SEGURADO = caducidade, é definitivo, não é 'pausa'.",
    "seedVersion": 2
  },
];

  // Preenche o subtema em itens de lei seca já inseridos antes de o campo
  // existir (ou quando a classificação de subtema de um dispositivo já
  // seedado for revista depois). Casa pela chave disciplinaId+dispositivo,
  // já que o id gravado no banco é aleatório e não rastreia de volta pra
  // entrada correspondente em DISPOSITIVOS.
  function atualizarSubtemas(idPorNome) {
    return DB.getAll('leiSeca').then(function (existentes) {
      var porChave = {};
      existentes.forEach(function (item) {
        porChave[item.disciplinaId + '::' + item.dispositivo] = item;
      });

      var atualizacoes = [];
      DISPOSITIVOS.forEach(function (d) {
        var disciplinaId = idPorNome[d.territorio];
        if (!disciplinaId) return;
        var existente = porChave[disciplinaId + '::' + d.dispositivo];
        if (!existente) return;
        if (d.subtema && existente.subtema !== d.subtema) {
          existente.subtema = d.subtema;
          atualizacoes.push(DB.put('leiSeca', existente));
        }
      });
      return Promise.all(atualizacoes);
    });
  }

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
          subtema: d.subtema,
          textoCorreto: d.textoCorreto,
          versaoErrada1: d.versaoErrada1,
          versaoErrada2: d.versaoErrada2,
          explicacaoDiferenca: d.explicacaoDiferenca,
          regraMemoria: d.regraMemoria
        }));
      });

      return Promise.all(pendentes).then(function () {
        return atualizarSubtemas(idPorNome);
      }).then(function () {
        Storage.write(Storage.KEYS.leiSecaSeedVersion, SEED_VERSION_ATUAL);
      });
    });
  }

  return { seedar: seedar };
})();
