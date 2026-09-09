// Banco de "resumo fácil": explicação bem simples (modo "explica pra uma
// criança de 5 anos") de cada assunto/subtema, com um exemplo concreto —
// pensado como a primeira parada antes de encarar questões e lei seca,
// pra quem precisa de uma porta de entrada mais leve no assunto.
var ResumoFacilSeed = (function () {
  var SEED_VERSION_ATUAL = 4;

  var RESUMOS = [
  {
    "territorio": "Ética",
    "subtema": "Exercício da Advocacia",
    "resumoSimples": "Advogado é como um tradutor especial: ele fala com o juiz no lugar da pessoa, porque tem hora que a linguagem da Justiça é complicada demais pra alguém enfrentar sozinho. Essa regra existe pra proteger quem precisa de ajuda, porque se qualquer pessoa pudesse falar por qualquer outra sem preparo, dava pra confundir tudo e até prejudicar quem confiou. Por isso, pra virar advogado de verdade, a pessoa precisa estudar direito bastante tempo, passar numa prova bem difícil da OAB e só depois ganhar a carteirinha. Sem essa carteirinha, quase ninguém pode entrar na Justiça no lugar dos outros. Em pouquíssimos casos bem simples a pessoa até pode se defender sozinha, mas a regra geral é sempre precisar do advogado.",
    "exemplo": "Imagina uma sala de brinquedos onde só quem tem uma pulseira especial pode entrar e pegar os brinquedos pros amigos que pediram ajuda. Pra ganhar essa pulseira, a pessoa teve que estudar bastante e passar numa prova difícil, pra todo mundo confiar que ela vai cuidar bem dos brinquedos dos outros. Quem não tem a pulseira não pode entrar, mesmo sabendo direitinho onde estão os brinquedos, porque a regra é proteger quem está esperando lá fora.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "subtema": "Direitos e Prerrogativas do Advogado",
    "resumoSimples": "Pra defender bem o cliente, o advogado ganha alguns poderes especiais, quase como uma capa de super-herói. Isso existe porque, se o advogado tivesse medo de ser perseguido ou atrapalhado só por fazer o trabalho dele, ninguém defenderia ninguém direito. Ele pode entrar em certos lugares que outras pessoas não podem, guardar segredo do que o cliente contou, e ninguém pode mexer nas coisas dele sem um motivo muito forte. Essas prerrogativas não são um mimo pro advogado: elas protegem principalmente o cliente, porque garantem que ele pode contar tudo sem medo de que o segredo vaze. Se alguém desrespeita essas regras, existe um jeito de reclamar e pedir que isso seja corrigido.",
    "exemplo": "Imagina que o advogado tem um crachá mágico que abre a porta de salas reservadas sem precisar pedir superpermissão, porque foi lá defender um amigo que estava com problema. E ninguém pode espiar a mochila dele à toa, procurando os segredos que o amigo contou, porque só um bilhete muito especial do juiz permite isso, e só em casos bem raros.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "subtema": "Incompatibilidades e Impedimentos",
    "resumoSimples": "Tem gente que não pode ser advogado enquanto ocupa outro cargo, porque ia ficar injusto ela usar o poder desse cargo pra ganhar vantagem como advogada - isso é a incompatibilidade, uma proibição total, não dá nem pra advogar escondido. Já o impedimento é mais leve: a pessoa pode advogar normalmente, só não pode em alguns casos específicos, tipo contra o lugar onde ela trabalha ou em causa de um parente próximo. A diferença existe porque nem toda situação de conflito é do mesmo tamanho: umas contaminam a profissão inteira, outras só atrapalham um caso específico. Por isso uma vira proibição pra sempre e a outra só uma restrição pontual.",
    "exemplo": "Imagina um juiz de brincadeira de um jogo de futebol: ele não pode jogar no time e apitar o jogo ao mesmo tempo, isso é proibido sempre, mesmo em outro campeonato, porque ele já é o juiz (incompatibilidade). Já se o menino é irmão do goleiro de um time, ele até pode apitar os jogos de outros times sem problema nenhum, só não pode apitar justamente o jogo do time do irmão dele, pra ninguém desconfiar que ele ajudou escondido (impedimento).",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "subtema": "Ética e Disciplina",
    "resumoSimples": "Advogado tem um livro de regras de boa conduta que precisa seguir: não mentir pro juiz, não pegar dinheiro do cliente de jeito errado, tratar todo mundo com respeito. Essas regras existem pra proteger quem confia no advogado e pra manter todo mundo acreditando que a profissão é séria. Se ele desobedecer, recebe um castigo, que pode ser leve, como um aviso, ou bem grave, como não poder mais ser advogado. Antes de aplicar o castigo, alguém sempre escuta as duas versões da história, porque não seria justo punir sem ouvir o que aconteceu. E quanto mais grave for o erro, ou quanto mais vezes ele se repetir, mais pesado costuma ser o castigo.",
    "exemplo": "Imagina o combinado de uma sala de aula: quem desobedece uma regrinha pequena leva um aviso, quem faz algo mais sério fica sem participar de um passeio, e quem faz uma coisa gravíssima é expulso da escola. Antes de decidir o castigo, a diretora sempre chama a criança pra ouvir o que ela tem a dizer. Com advogado é parecido: tem aviso, tempo sem poder trabalhar, multa e, no caso mais grave, ser tirado da profissão pra sempre.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "subtema": "Honorários Advocatícios",
    "resumoSimples": "Honorário é o nome bonito pro pagamento que a pessoa dá ao advogado pelo trabalho dele. Essa regra existe porque o advogado estudou, dedicou tempo e conhecimento pra ajudar, então é justo que ele receba por isso, do mesmo jeito que qualquer trabalho merece pagamento. Tem um tipo que é combinado direto entre cliente e advogado, geralmente antes de começar o caso. E tem outro tipo em que quem perde o caso na Justiça também precisa pagar uma partezinha pro advogado do outro lado, além do que já combinou com o seu próprio advogado. Isso existe pra reconhecer o trabalho de quem ganhou a causa e também pra fazer as pessoas pensarem duas vezes antes de brigar na Justiça sem motivo forte.",
    "exemplo": "Imagina que você paga um amigo pra te ajudar numa gincana - isso é o combinado direto, feito antes de começar. Mas se o time adversário perder a gincana, as regras dizem que ele também tem que dar um prêmio extra pro ajudante do time vencedor, além do que o próprio time já pagou o ajudante dele. Isso é parecido com o pagamento que quem perde na Justiça precisa fazer pro advogado do outro lado.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "subtema": "Sociedade de Advogados",
    "resumoSimples": "Às vezes vários advogados se juntam pra trabalhar em equipe, formando um grupo com nome próprio. Isso existe porque, trabalhando juntos, eles conseguem dividir tarefas, atender mais gente e se ajudar nos casos difíceis. Esse grupo precisa ser registrado na OAB, principalmente pra que todo mundo saiba quem são os responsáveis se algo der errado. Tem regras sobre como dividir o trabalho, o dinheiro e as responsabilidades entre todos, porque só juntar os nomes na placa não seria suficiente sem combinar isso direitinho antes.",
    "exemplo": "Imagina que três amigos montam juntos uma barraquinha de picolé com um nome bonito escrito na placa. Eles combinam antes quem vai fazer o picolé, quem vai vender e como vão dividir o dinheiro no final do dia. E precisam avisar a diretoria da escola, que aqui é a OAB, que essa barraquinha existe, pra ela saber quem procurar se algum picolé sair estragado.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "subtema": "Inscrição e Órgãos da OAB",
    "resumoSimples": "Pra virar advogado de verdade, a pessoa faz um pedido pra OAB, que é como o clube dos advogados do Brasil inteiro. Essa organização em níveis existe porque o Brasil é enorme: seria impossível uma única sede cuidar de tudo sozinha. A OAB tem uma direção geral, que cuida das decisões mais importantes pro país inteiro, um representante em cada estado, que cuida das questões daquela região, e times menores nas cidades, que ficam mais perto do dia a dia dos advogados. Assim, cada nível resolve o que faz mais sentido resolver perto de onde o problema acontece.",
    "exemplo": "Imagina um clube de futebol nacional: tem a diretoria principal (Conselho Federal), que decide as regras gerais pra todo o país, um time em cada estado (Seccional), que organiza os jogadores daquela região, e um timinho em cada bairro (Subseção), que resolve as coisas do dia a dia mais de perto. Pra jogar oficialmente, você precisa se inscrever nesse clube, começando pelo timinho do seu bairro, e seguir as regras dele.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "subtema": "Jusnaturalismo",
    "resumoSimples": "Jusnaturalismo é a ideia de que existem regras certas que já nascem com a gente, mesmo antes de alguém escrever numa lei, tipo não machucar o outro. Essa ideia surgiu porque, ao longo da história, muita gente percebeu que uma lei escrita podia ser aprovada e mesmo assim ser injusta ou cruel. Então pensaram: precisa existir algo acima da lei escrita, pra poder dizer que aquela lei está errada. Essas regras vêm da natureza ou da razão, e servem justamente pra isso: dizer se uma lei escrita é justa ou não, mesmo que ela tenha sido aprovada do jeito certo.",
    "exemplo": "Imagina que, mesmo sem o professor escrever no quadro, todo mundo já sabe que não pode bater no coleguinha. Se um dia um diretor bem bravo escrevesse uma regra permitindo bater nos colegas, mesmo aprovada e assinada, todo mundo sentiria que aquela regra está errada. Essa sensação de que existe um certo e um errado mesmo antes de escrever é o que o direito natural tenta explicar.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "subtema": "Positivismo Jurídico",
    "resumoSimples": "O positivismo jurídico diz que lei é lei: só vale o que está escrito nas regras oficiais, aprovado do jeito certo pelas pessoas certas. Essa ideia existe porque, se cada um pudesse escolher seguir só as leis que acha bonitas ou justas, ninguém saberia ao certo o que vale e viraria uma bagunça, cada pessoa com sua própria regra. Por isso, não importa se a pessoa acha uma lei bonita ou feia, certa ou errada; o que manda é o que está escrito no papel, aprovado direitinho. Isso dá mais certeza pra todo mundo, mas também significa que uma lei aprovada certinho pode continuar valendo mesmo que alguém ache ela injusta.",
    "exemplo": "Imagina o manual oficial de um jogo de tabuleiro. Não importa se você acha uma regra chata ou sem graça: se ela está escrita no manual e foi aprovada direitinho pelos donos do jogo, todo mundo precisa seguir do jeitinho que está escrita, sem inventar moda. Só quem pode mudar a regra é quem tem autoridade pra reescrever o manual, seguindo o processo certo.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "subtema": "Hermenêutica e Interpretação",
    "resumoSimples": "Hermenêutica é a arte de entender o que uma regra realmente quer dizer, porque às vezes a mesma frase pode ter mais de um jeito de entender. Isso existe porque quem escreve uma lei não consegue prever cada situação exata que vai acontecer no mundo real, então a regra sai um pouco geral. Pra descobrir o que ela quer dizer numa situação específica, a pessoa olha as palavras escritas, olha as regras que ficam perto dela, e pensa pra que serve aquela regra, isto é, qual problema ela queria resolver. Duas pessoas podem interpretar a mesma regra de um jeito diferente e as duas terem um argumento razoável, e é aí que entra a arte de escolher a interpretação que faz mais sentido.",
    "exemplo": "Imagina uma placa que diz proibido entrar com bicicleta. Você pode olhar só a palavra bicicleta e achar que patinete pode entrar numa boa. Ou pode pensar: será que patinete também não pode, já que o motivo da placa é não bater em ninguém correndo? Pensar no porquê da regra, e não só nas palavras soltas, é o que se chama de interpretar.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "subtema": "Justiça (autores clássicos)",
    "resumoSimples": "Vários pensadores antigos tentaram explicar o que é ser justo, porque sem um critério claro, cada pessoa chamaria de justo só aquilo que é bom pra ela mesma. Uma ideia famosa, de Aristóteles, é que justiça é dar pra cada um a parte que é dele, nem mais nem menos, do jeito certo. Ele também notou que existem dois jeitos de pensar nisso: às vezes o justo é tratar todo mundo exatamente igual, e às vezes o justo é dar mais pra quem contribuiu mais ou precisa mais. Essa diferença ajuda a entender por que, em certas situações, tratar todo mundo do mesmo jeito pode até ser injusto.",
    "exemplo": "Imagina uma pizza dividida entre amigos: se todos comeram o mesmo tanto no lanche e ajudaram igual a organizar a festa, o justo é repartir em pedaços iguais. Mas se um amigo trouxe mais ingredientes e ajudou a fazer a massa, pode ser justo ele ganhar um pedaço maior. Pensar em quando dividir igual e quando dividir diferente é o que os filósofos chamavam de pensar sobre justiça.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "subtema": "Teorias Contemporâneas do Direito",
    "resumoSimples": "Pensadores mais modernos criaram novos jeitos de explicar como o direito funciona, porque as ideias antigas não respondiam tudo, tipo o que fazer quando a lei fica em silêncio sobre um caso. Tem quem diga que existe uma regra mãe que dá força a todas as outras leis, servindo de base pra todo o resto. Tem quem diga que existem regras de fazer (o que pode e o que não pode) e regras de como criar outras regras (quem tem poder pra fazer leis novas). E tem quem diga que além das leis escritas também valem princípios de justiça, usados principalmente quando a lei não resolve claramente um caso difícil.",
    "exemplo": "Imagina um videogame: tem a regra principal que diz que aquilo é um jogo válido (regra mãe), tem as regras de como jogar e as regras de como criar novas fases (regras de fazer e regras de criar regras), e às vezes, quando o manual não prevê uma situação estranha que aconteceu, o juiz da brincadeira usa o espírito do jogo, não só o manual, pra resolver a disputa da forma mais justa.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "subtema": "Sistema Global de Proteção (ONU)",
    "resumoSimples": "A ONU é um grande grupo de países do mundo inteiro que se juntou pra combinar regras de respeito entre as pessoas, tipo todo mundo tem direito à vida, à liberdade e a ser tratado com respeito. Esse combinado surgiu depois de épocas muito tristes da história, quando países perceberam que precisavam de uma promessa geral pra tentar evitar que coisas terríveis acontecessem de novo. Esse combinado vale pro mundo todo, não só pra um país, e a ideia é que nenhum governo possa dizer que os direitos humanos são só um assunto interno dele. Quando um país maltrata muito seu próprio povo, isso pode virar preocupação de todos os outros países também.",
    "exemplo": "Imagina que todas as escolas do mundo se juntassem numa reunião gigante, depois de um ano cheio de brigas feias, e combinassem: em nenhuma escola pode bater em aluno, e todo aluno tem direito a estudar e ser tratado bem. Esse combinado geral, pro mundo inteiro, é o que a ONU faz com os direitos humanos, e nenhuma escola pode dizer que isso não é da conta das outras.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "subtema": "Sistema Interamericano (Corte/Comissão)",
    "resumoSimples": "Além do combinado do mundo todo, os países da América, incluindo o Brasil, fizeram um combinado só entre eles, com órgãos próprios pra olhar mais de perto quando um país da região desrespeita os direitos humanos. Isso existe porque um sistema regional consegue entender melhor a realidade daquele grupo de países vizinhos e agir mais rápido do que esperar sempre pelo sistema do mundo inteiro. Primeiro um grupo analisa o caso e tenta resolver, ouvindo os dois lados. Se não resolver e o caso for grave, ele vai pra um tribunal da região, que pode mandar o país consertar o erro e até indenizar quem sofreu.",
    "exemplo": "Imagina que as escolas do seu bairro criaram um conselho só pra elas, separado da reunião mundial, porque conhecem melhor os problemas daquela vizinhança. Se uma escola desrespeitar um aluno, primeiro um grupo de bairro analisa e tenta conversar com a escola (a Comissão), e se ela não resolver e o caso for sério, vai pro tribunal do bairro (a Corte), que pode mandar a escola pedir desculpa, consertar o erro e até dar alguma coisa em troca pro aluno prejudicado.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "subtema": "Direitos de Grupos Vulneráveis",
    "resumoSimples": "Algumas pessoas precisam de um cuidado extra porque sofrem mais preconceito ou têm mais dificuldade no dia a dia, tipo crianças, idosos, pessoas com deficiência e povos indígenas. Isso existe porque tratar todo mundo exatamente do mesmo jeito, sem olhar as diferenças, às vezes deixa quem já parte em desvantagem ainda mais pra trás. Por isso existem regras especiais só pra proteger esses grupos, além das regras gerais que valem pra todo mundo, tentando equilibrar o que a vida já desequilibrou. Dar essa atenção especial não é favorecer alguém sem motivo: é tentar garantir que todos cheguem numa condição parecida de oportunidade.",
    "exemplo": "Imagina que na fila do escorregador os menorzinhos e quem tem mais dificuldade pra andar ganham uma ajudinha extra, tipo alguém segurando a mão, pra não se machucar e conseguir se divertir igual aos outros. Isso não é injusto com quem já sobe sozinho, é dar atenção especial justamente pra quem precisa mais, pra brincadeira ficar boa pra todo mundo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "subtema": "Refugiados e Migrantes",
    "resumoSimples": "Refugiado é quem precisou fugir do seu país porque estava em perigo de verdade, tipo guerra ou perseguição, e por isso tem proteção especial: ninguém pode mandar ele de volta pro lugar perigoso, nem mesmo se o país novo não quiser mais recebê-lo. Migrante é quem se muda de país por outros motivos, tipo procurar trabalho, estudar ou ficar perto da família, sem estar fugindo de um perigo direto contra a vida dele. Essa diferença importa porque o refugiado tem essa garantia forte de não ser devolvido, enquanto o migrante segue outras regras, parecidas com as de quem pede visto ou permissão pra morar num país novo.",
    "exemplo": "Imagina duas crianças novas na escola: uma teve que sair correndo da escola antiga porque um valentão ameaçava machucar ela de verdade todos os dias, e por isso a escola nova não pode mandar ela de volta pro perigo, nem se ela brigar ou aprontar (é como um refugiado). A outra só mudou de bairro porque o pai arrumou um emprego novo e queria morar perto dos avós, sem fugir de perigo nenhum (é como um migrante), e por isso segue as regras normais de matrícula.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "subtema": "Tratados Internacionais de Direitos Humanos",
    "resumoSimples": "Tratado é um combinado escrito que o Brasil faz com outros países, prometendo respeitar certos direitos das pessoas. Isso existe porque tem problemas que nenhum país sozinho resolve direito, tipo proteger crianças, cuidar do meio ambiente ou impedir tortura, então os países se juntam e prometem seguir as mesmas regras básicas. Depois que o Brasil assina e aprova esse combinado do jeito certo, ele passa a valer aqui dentro também. Dependendo do assunto e de como foi aprovado, esse combinado pode até valer quase com a mesma força das regras mais importantes do país.",
    "exemplo": "Imagina que sua turma decide seguir as regras de boas maneiras que vieram de uma reunião entre várias escolas, porque perceberam que sozinha cada escola não estava conseguindo resolver o problema da bagunça no recreio. Depois que a diretora aprova esse combinado direitinho, seguindo os passos certos, ele passa a valer dentro da sua escola também, quase como se fosse uma regra do próprio regimento dela.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Direitos e Garantias Fundamentais",
    "resumoSimples": "São as regras mais importantes de todas, que protegem todo mundo: ninguém pode te machucar, você pode falar o que pensa e todo mundo deve ser tratado igual. Elas existem porque, em vários momentos da história, governos abusaram do poder e machucaram muita gente, então o país decidiu escrever antecipadamente limites que nem o próprio governo pode ultrapassar. Elas ficam guardadas na Constituição, que é a regra maior do país, bem mais difícil de mudar do que uma lei comum. Nem o governo, nem a maioria das pessoas votando junto, pode simplesmente tirar isso de você de um dia pro outro.",
    "exemplo": "Imagina que na escola tem uma regra gigante pendurada na parede: nenhuma criança pode bater na outra e todo mundo tem direito ao lanche, escrita bem grande pra ninguém esquecer nem inventar de mudar de qualquer jeito. Até o diretor precisa seguir essa regra, e nem uma votação da turma inteira pode simplesmente apagar ela da parede. Com os direitos fundamentais é igual: nem o presidente, nem a maioria do povo votando, pode desrespeitar isso.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Organização do Estado",
    "resumoSimples": "É como o Brasil se divide em pedaços para organizar o trabalho: a União (o país inteiro), os Estados, os Municípios e o Distrito Federal. Isso existe porque seria muito difícil um único governo, sozinho, cuidar bem de cada rua, cada escola e cada hospital do Brasil inteiro ao mesmo tempo. Cada um cuida de uma parte das tarefas, como escola, saúde ou rua, e geralmente tem suas próprias regras e seu próprio dinheiro pra cuidar dessas tarefas. Assim, quem decide sobre um problema costuma estar mais perto de quem vive esse problema no dia a dia.",
    "exemplo": "Imagina uma casa grande com três irmãos dividindo as tarefas: um cuida do quintal, outro cuida da sala e o pai cuida da casa toda e das decisões maiores, tipo consertar o telhado. Cada um tem sua parte de mesada pra cuidar do que é dele, e ninguém precisa pedir permissão pro pai só pra varrer o próprio quintal. Cada um cuida do seu pedaço, mas moram na mesma casa-Brasil.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Organização dos Poderes",
    "resumoSimples": "O governo se divide em três times com tarefas diferentes: um cria as regras, outro coloca essas regras em prática no dia a dia e o terceiro resolve as brigas quando alguém não obedece. Isso existe porque, se um único time mandasse em tudo sozinho, sem ninguém de olho, ficaria fácil demais abusar do poder e prejudicar as pessoas. Por isso nenhum time pode mandar mais que os outros, e um fica de olho no outro o tempo todo, podendo até corrigir um erro do colega. Esse equilíbrio é o que ajuda a proteger todo mundo de um governo forte demais.",
    "exemplo": "Imagina uma brincadeira com três amigos: um inventa as regras do jogo, outro toca o jogo pra frente no dia a dia, e o terceiro é o juiz que decide quando alguém trapaceou. Se um deles quiser mandar em tudo sozinho, inventando regra e já jogando e ainda julgando, os outros dois podem dizer não pode!, e assim ninguém consegue virar o mandão da brincadeira.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Controle de Constitucionalidade",
    "resumoSimples": "É quando alguém confere se uma lei nova está seguindo a regra maior, a Constituição. Isso existe porque, sem essa conferência, qualquer lei poderia ser aprovada, mesmo indo contra os direitos mais importantes das pessoas, e ninguém conseguiria impedir isso depois. Se a lei for contra essa regra maior, ela é anulada, como se nunca tivesse existido de verdade, pra ninguém precisar segui-la. Quem faz essa conferência mais importante no Brasil é o STF, mas outros juízes também podem, em certos casos, deixar de aplicar uma lei que pareça contrariar a Constituição.",
    "exemplo": "Imagina que a regra maior da escola diz nenhum castigo pode machucar. Um professor, sem perceber esse limite, inventa uma regra de castigo que machuca de verdade. A diretoria confere essa regra nova e avisa: essa regra não vale, porque contraria a regra maior da escola, então nenhum professor pode aplicar ela, e é como se ela nunca tivesse existido.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Processo Legislativo",
    "resumoSimples": "É o caminho que uma ideia percorre até virar lei de verdade. Isso existe porque uma regra que vai valer pra todo mundo não pode nascer da vontade de uma pessoa só, ela precisa passar por várias etapas de discussão pra ficar mais equilibrada. Alguém propõe a ideia, os deputados e senadores discutem, sugerem mudanças e votam, e depois o presidente confirma ou não. Só depois de passar por todas essas etapas, uma de cada vez, a ideia realmente vira lei e passa a valer pra todo mundo.",
    "exemplo": "Imagina que você quer criar uma regra nova para o seu grupo de amigos brincarem. Primeiro conta a ideia pro grupo, depois todo mundo discute se tem algum ajuste a fazer, então vota se gosta da ideia com o ajuste, e por fim o líder do grupo confirma que ela vale a partir de agora. Se pulasse alguma dessas etapas, a regra nova podia não valer direito, porque ninguém teve chance de opinar.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Ordem Social e Econômica",
    "resumoSimples": "São as regras que cuidam do trabalho, da saúde, da educação e de como o dinheiro e os negócios devem funcionar no país. Elas existem porque o país crescer, sozinho, não é garantia de que a vida das pessoas vai melhorar: às vezes só quem já tem mais dinheiro fica ainda mais rico. A ideia é que o país cresça, mas de um jeito justo, ajudando todo mundo a ter uma vida melhor, não só quem já começou na frente. Por isso essas regras tentam equilibrar liberdade pra trabalhar e empreender com cuidado pra ninguém ficar totalmente desamparado.",
    "exemplo": "Imagina uma festa de aniversário com um bolo grande: a regra diz que todo mundo ganha um pedaço, e ninguém pode pegar o bolo inteiro só porque chegou primeiro ou trouxe mais amigos. Mas também não é proibido alguém trazer um bolo extra pra vender uma fatia, desde que sobre pedaço suficiente pra quem não trouxe nada. É esse cuidado, entre deixar crescer e garantir que sobre pra todo mundo, que essas regras tentam equilibrar com o bolo do país.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Nacionalidade e Direitos Políticos",
    "resumoSimples": "Nacionalidade é o time do país ao qual você pertence, como ser brasileiro, seja porque nasceu aqui, seja porque escolheu se tornar brasileiro depois de um tempo. Direitos políticos são as coisas que você pode fazer por causa disso, como votar e se candidatar pra ajudar a escolher quem toma as decisões do país. Isso existe porque faz sentido que quem vai viver com as decisões seja também quem ajuda a escolhê-las. Para votar ou ser candidato existem regras, tipo idade mínima e estar certinho na lista de eleitores, pra garantir que a escolha seja feita com organização e responsabilidade.",
    "exemplo": "Imagina que só quem veste a camiseta do time pode entrar em campo jogar, seja porque nasceu torcendo pra aquele time, seja porque decidiu vestir a camiseta depois de um tempo acompanhando de fora. Ser brasileiro é vestir a camiseta do time Brasil, e votar é poder entrar em campo pra escolher o capitão do time, desde que a pessoa já tenha idade suficiente e esteja anotada certinho na lista de jogadores.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "subtema": "Elegibilidade e Registro de Candidatura",
    "resumoSimples": "Elegibilidade é o conjunto de condições que uma pessoa precisa ter para poder disputar uma eleição, como ter idade mínima, não estar proibido de concorrer e cumprir outros requisitos parecidos. Essa regra existe para garantir que só pessoas preparadas e sem impedimentos sérios possam disputar um cargo importante. Registro de candidatura é o passo seguinte: é quando a pessoa avisa oficialmente à Justiça Eleitoral que quer concorrer, apresentando os documentos que provam que cumpre tudo isso. Só depois que esse pedido é aceito é que o nome da pessoa pode aparecer na urna para as pessoas votarem. Se alguém não cumpre os requisitos ou esconde algo errado, o pedido pode ser recusado, mesmo que a pessoa já esteja fazendo campanha. Por isso, ser elegível e ter o registro aprovado são coisas diferentes, mas as duas precisam acontecer para a pessoa poder ser votada.",
    "exemplo": "Imagina uma corrida na escola em que, antes de correr, cada criança precisa se inscrever na lista da professora, mostrando que tem idade certa para participar e que não está de castigo por ter trapaceado numa corrida anterior. A professora confere a lista com calma, e só quem foi aprovado nela pode entrar na pista no dia da corrida. Se uma criança tentar correr sem estar na lista aprovada, mesmo tendo treinado bastante, ela não pode competir, porque faltou seguir o passo de se inscrever direitinho antes.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "subtema": "Propaganda Eleitoral",
    "resumoSimples": "São as regras que dizem como um candidato pode se divulgar e pedir voto, como quando a propaganda pode começar, o que pode ser dito e onde é permitido colocar cartazes e panfletos. Essas regras existem para que todo mundo tenha uma chance parecida de ser conhecido, sem que quem tem mais dinheiro ou mais poder leve vantagem injusta. Também é proibido mentir sobre o adversário ou usar meios enganosos só para conseguir votos, porque isso engana quem vai escolher. Antes da data permitida, ninguém pode fazer propaganda oficial pedindo voto, mesmo já sendo candidato. Quem desrespeita essas regras pode ser punido, dependendo da gravidade do que fez. A ideia principal é simples: deixar a disputa justa e a informação verdadeira para quem vai votar.",
    "exemplo": "Imagina uma eleição para escolher o representante da turma. Só vale colar cartaz e pedir voto a partir de um dia combinado pela professora, e ninguém pode inventar mentira sobre o colega concorrente, como dizer que ele não estuda direito sem isso ser verdade. Se um aluno colar cartaz antes da data combinada ou espalhar uma mentira grave sobre o adversário, a professora pode até tirar pontos dele na disputa, porque ele quebrou a regra que deixa a eleição justa para todo mundo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "subtema": "Condutas Vedadas e Abuso de Poder",
    "resumoSimples": "São comportamentos proibidos para quem já ocupa um cargo público e quer se candidatar de novo, como usar dinheiro público, funcionários ou bens do governo para fazer campanha. Essas proibições existem porque quem já está no poder tem vantagens que os outros candidatos não têm, e a regra tenta equilibrar essa disputa. Abuso de poder é um problema parecido, mas mais amplo: é usar a força, o dinheiro ou a autoridade do cargo de um jeito desleal para conseguir votos ou prejudicar concorrentes. Isso pode acontecer tanto com dinheiro público quanto com poder econômico de empresas ou pessoas influentes. Quando isso é descoberto, o candidato pode até perder o cargo que ganhou, porque a eleição deixou de ser justa. A regra serve para que ninguém vença só porque já tinha poder demais antes de a disputa começar.",
    "exemplo": "Imagina que o professor que concorre a diretor da escola usa o material de todo mundo, como cartolina e tinta da escola, só para fazer a propaganda dele, e ainda ameaça dar nota baixa em quem não votar nele. Além disso, ele usa o horário da aula, que é de todos, para falar bem de si mesmo o tempo inteiro. Isso é proibido porque ele está usando um poder que só tem por já ser professor, de um jeito injusto com quem está concorrendo contra ele sem essas vantagens.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "subtema": "Ações Eleitorais",
    "resumoSimples": "São os pedidos formais que alguém faz à Justiça Eleitoral quando desconfia que houve trapaça ou desrespeito grave às regras da eleição, como compra de voto, uso de dinheiro proibido ou abuso de poder. Essas ações existem porque a eleição só tem valor se for feita de um jeito limpo, e alguém precisa poder reclamar quando isso não acontece. A Justiça Eleitoral recebe o pedido, ouve as duas partes e investiga com calma antes de decidir. Se a trapaça for confirmada, o candidato pode perder o cargo, ficar proibido de concorrer por um tempo, ou responder por outras consequências, dependendo da gravidade. Nem toda reclamação vira punição: é preciso provar que realmente houve algo errado. No fim, essas ações são o jeito de garantir que quem ganhou, ganhou de verdade, sem trapaça.",
    "exemplo": "Imagina que alguém trocou balas por votos na eleição da turma, prometendo doce pra quem escolhesse ele como representante. Um colega percebe e conta para a professora, que funciona como a juíza daquela eleição. Ela conversa com as duas partes, pergunta para outras crianças o que viram e, se confirmar que a troca aconteceu mesmo, tira o \"prêmio\" de quem trapaceou e pode até proibir aquele aluno de se candidatar de novo por um tempo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "subtema": "Partidos Políticos e Financiamento",
    "resumoSimples": "Partidos políticos são grupos de pessoas que compartilham ideias parecidas sobre como o país deveria ser governado e que se organizam para disputar eleições juntos, em vez de cada um tentar sozinho. Eles existem para organizar as ideias da sociedade em propostas mais claras, facilitando para quem vai votar entender o que cada grupo defende. Financiamento é de onde vem o dinheiro usado para pagar a campanha, como cartazes, viagens e eventos, e esse dinheiro precisa ser declarado e seguir regras bem definidas. A regra existe porque, se o dinheiro pudesse vir de qualquer lugar sem controle, ele poderia virar um jeito escondido de comprar favores de quem for eleito depois. Por isso há limites de quanto se pode doar e obrigação de mostrar tudo em registros públicos. Quando as regras de financiamento são quebradas, o partido ou o candidato pode ser punido, mesmo que tenha ganhado a eleição.",
    "exemplo": "Imagina um time de futebol da escola que precisa de dinheiro para comprar uniforme, bola e lanche para o campeonato. Esse dinheiro tem que vir de fontes conhecidas, como uma rifa organizada com a professora, e tudo precisa ficar anotado num caderninho que qualquer um pode conferir. Se alguém desse dinheiro escondido ao técnico só para o time jogar de um jeito que beneficiasse quem pagou, isso seria proibido, porque quebraria a confiança de que o time joga limpo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "subtema": "Direito Internacional Público",
    "resumoSimples": "São as regras que os países combinam entre si para conseguirem viver em paz, comerciar, se ajudar e resolver problemas sem precisar de guerra. Elas existem porque, assim como as pessoas dentro de um país precisam de leis para conviver bem, os países também precisam de combinados para não ficar cada um fazendo o que quiser sem limite. Essas regras nascem principalmente de tratados e acordos que os países assinam voluntariamente, prometendo cumprir o que foi combinado. Diferente das leis de dentro de um país, aqui não existe um \"chefe\" acima de todos os países para obrigar o cumprimento, então tudo depende muito da boa vontade e da pressão dos outros países quando alguém quebra o combinado. Mesmo assim, existem organizações internacionais que ajudam a fiscalizar e mediar esses conflitos. No fim, é um jeito de o mundo inteiro conseguir conviver com menos brigas.",
    "exemplo": "Imagina que várias casas de um condomínio se reúnem e combinam uma regra: \"ninguém joga lixo no quintal do outro, e quem usar a piscina comum ajuda a limpar depois\". Os países fazem algo parecido: assinam acordos combinando como vão se tratar, comerciar e resolver brigas sem precisar de guerra. A diferença é que, no condomínio, existe o síndico para cobrar quem não cumpre, enquanto entre países, às vezes, é mais difícil obrigar alguém a seguir o combinado.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "subtema": "Migração e Nacionalidade",
    "resumoSimples": "Migração é quando uma pessoa decide se mudar para morar em outro país, o que exige seguir certas regras para poder entrar e permanecer lá de forma legal, como ter documentos certos ou um motivo aceito pelo país que vai recebê-la. Existem regras especiais para quem precisou fugir de perigo grave, como guerra ou perseguição, chamadas de proteção ao refugiado, porque essas pessoas não migraram por escolha, mas por necessidade de sobreviver. Nacionalidade é diferente: é o vínculo que liga uma pessoa a um país, fazendo com que aquele país a reconheça como um dos seus, com direitos e deveres específicos. Uma pessoa pode migrar para um país sem nunca se tornar nacional dele, assim como pode ser nacional de um país sem nunca ter morado lá, se nasceu com esse vínculo. Essas regras existem para equilibrar o direito de as pessoas se moverem pelo mundo com a organização que cada país precisa ter para receber quem chega. Por isso, migrar bem e se tornar nacional de um lugar são passos diferentes, que nem sempre acontecem juntos.",
    "exemplo": "Imagina uma criança que muda de cidade e precisa se matricular numa escola nova, levando os documentos certos e esperando a escola aceitar a vaga dela, para não ficar sem estudar. Se essa criança teve que sair correndo de outra escola por causa de um perigo sério, a escola nova costuma ter um jeito mais rápido e cuidadoso de recebê-la. Só depois de um tempo, cumprindo certas condições, é que ela pode ser considerada de verdade \"da turma\", como se tivesse nascido ali.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "subtema": "Cooperação Jurídica Internacional",
    "resumoSimples": "É quando a Justiça de um país pede ajuda para a Justiça de outro país, porque precisa de algo que só existe ou só pode ser feito naquele outro lugar, como buscar uma prova, ouvir uma testemunha ou trazer de volta alguém que fugiu depois de cometer um crime. Essa cooperação existe porque, se cada país só pudesse agir dentro das suas próprias fronteiras sem ajuda de ninguém, seria fácil para alguém escapar da Justiça apenas atravessando uma fronteira. Por isso, os países combinam formas de se ajudar, seguindo regras e prazos para que o pedido seja atendido de um jeito organizado e respeitoso às leis de cada lugar. Às vezes esse pedido é para buscar informação, outras vezes é para devolver uma pessoa que está sendo procurada pela Justiça de origem. Mesmo cooperando, cada país continua seguindo suas próprias regras internas ao atender o pedido, sem simplesmente obedecer cegamente ao que o outro pediu. No fim, essa ajuda entre países torna a Justiça mais forte e mais difícil de ser burlada.",
    "exemplo": "Imagina que um brinquedo foi levado escondido e a criança responsável fugiu para a casa do vizinho, achando que aí ninguém iria mais procurá-la. A mãe da criança prejudicada liga para a mãe do vizinho, explica o que aconteceu e pede ajuda para trazer o brinquedo de volta e conversar com a criança que o levou. A mãe do vizinho não faz qualquer coisa que pedirem: ela confere a história, mas decide ajudar porque entende que também não gostaria que alguém escapasse assim de casa em casa.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "subtema": "Jurisdição e Competência Internacional",
    "resumoSimples": "É o conjunto de regras que ajuda a decidir qual país tem o direito de julgar um problema quando ele envolve pessoas, empresas ou situações ligadas a mais de um lugar do mundo. Essa dúvida existe porque, com pessoas viajando, empresas negociando e famílias formadas por gente de países diferentes, um mesmo problema pode ter ligação com vários lugares ao mesmo tempo. Sem uma regra clara, dois países poderiam tentar julgar o mesmo caso, ou nenhum deles quereria assumir a responsabilidade. Por isso, existem critérios, como onde o fato aconteceu ou onde a pessoa mora, que ajudam a escolher qual Justiça deve resolver aquela situação específica. Cada tipo de caso, como um contrato, um casamento ou um acidente, pode seguir um critério diferente para essa escolha. No fim, essa organização evita confusão e garante que alguém sempre seja responsável por julgar o caso.",
    "exemplo": "Imagina dois amigos de escolas diferentes que brigaram durante uma viagem de intercâmbio em outra cidade. Antes de decidir quem tem razão, é preciso descobrir qual das duas escolas vai cuidar do caso: a escola de onde cada um veio, ou a cidade onde a briga aconteceu. Se as duas escolas decidissem resolver ao mesmo tempo, cada uma poderia dar um resultado diferente, então é importante combinar antes qual delas assume a responsabilidade.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "subtema": "Direito Internacional Privado (LINDB)",
    "resumoSimples": "É o conjunto de regras que ajuda a decidir qual país e quais leis devem ser usadas quando um assunto da vida de pessoas comuns envolve mais de um país ao mesmo tempo, como um casamento, uma herança ou um contrato entre pessoas de nacionalidades diferentes. Isso é necessário porque as leis de cada país podem ser bem diferentes entre si, e sem uma regra combinada ninguém saberia qual delas vale para aquele caso específico. A LINDB funciona como um manual de instruções que explica, para cada tipo de situação, qual país \"manda\" naquele assunto, olhando coisas como onde a pessoa mora ou onde o bem está localizado. Assim, mesmo quando uma situação nasce fora do Brasil, existe um jeito organizado de saber como aplicar as leis aqui dentro. Sem esse tipo de regra, um mesmo caso poderia ter respostas diferentes dependendo de quem julgasse, gerando insegurança para as pessoas envolvidas. No fim, é uma ferramenta que traz previsibilidade para situações que atravessam fronteiras.",
    "exemplo": "Imagina que um brinquedo vem de outro país, com instruções de montagem escritas num idioma diferente do seu. Só que, dentro da caixa, também tem um pequeno manual explicando, passo a passo, como usar aquele brinquedo direitinho no seu país, sem errar a montagem. A LINDB é como esse manual explicativo: ela não cria o brinquedo em si, mas ensina qual regra aplicar quando a situação envolve gente ou coisas de países diferentes.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "subtema": "Orçamento Público (LOA/LDO/PPA)",
    "resumoSimples": "É como o planejamento de mesada de uma família inteira, só que pensado para o país todo, envolvendo muito mais dinheiro e muito mais gente. Antes de gastar qualquer centavo, o governo precisa combinar com antecedência quanto espera arrecadar, em que vai gastar e por quanto tempo aquele plano vale, para não sair gastando sem controle. Esse planejamento existe porque, sem ele, o dinheiro público poderia ser usado de qualquer jeito, sem prioridade nem cuidado com o que a população realmente precisa. Existem três peças que se conectam: o PPA é o plano mais amplo, pensado para quatro anos, mostrando as grandes metas que o governo quer alcançar. A LDO é o conjunto de regras e prioridades para o ano seguinte, servindo de ponte entre o plano grande e o gasto detalhado. Já a LOA é a lista final e detalhada de tudo que pode ser gasto naquele ano específico, sendo o documento que realmente autoriza o dinheiro a sair do cofre.",
    "exemplo": "Imagina que sua família se reúne e combina: \"esse ano vamos gastar tanto com escola, tanto com mercado e tanto com passeio\", mas antes disso já existia um sonho de família, tipo reformar a casa em quatro anos, que guia essas decisões menores. O PPA é esse sonho de quatro anos, quase até você terminar uma fase inteira da escola. A LDO são as regras combinadas sobre como gastar bem esse ano, dizendo o que é mais urgente. E a LOA é a lista final, bem detalhada, de tudo que realmente vai ser comprado durante o ano, item por item.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "subtema": "Lei de Responsabilidade Fiscal",
    "resumoSimples": "É um conjunto de regras que diz que quem cuida do dinheiro do governo, seja prefeito, governador ou presidente, não pode gastar mais do que arrecada nem fazer bagunça nas contas públicas. Essa regra existe porque, no passado, muitos gestores gastavam sem limite e deixavam dívidas enormes para os próximos governantes ou para a própria população pagar depois. Por isso, hoje é preciso planejar o gasto com cuidado, guardar dinheiro antes de assumir compromissos maiores e mostrar publicamente como cada centavo foi usado. Quando um gestor gasta de forma irresponsável ou esconde informações das contas, ele pode ser punido, inclusive de um jeito pessoal, não só o governo como um todo. A ideia central é transformar o cuidado com o dinheiro público em uma obrigação, e não apenas em uma boa intenção. Assim, um governo não pode deixar uma bomba de dívidas para o próximo, sem controle nenhum.",
    "exemplo": "Imagina que o responsável por cuidar da pracinha do bairro só pode comprar brinquedos novos se realmente tiver dinheiro guardado para isso, sem gastar tudo de uma vez achando que vai sobrar depois. Ele também não pode prometer construir um brinquedo caro sem antes garantir que vai ter dinheiro suficiente até o fim da obra. Além disso, ele precisa colar um cartaz explicando certinho quanto gastou com cada brinquedo, para que os vizinhos possam conferir e ninguém desconfie que o dinheiro sumiu.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "subtema": "Despesa e Receita Pública",
    "resumoSimples": "Receita é todo o dinheiro que entra nos cofres do governo, vindo principalmente de impostos pagos pelas pessoas e empresas, mas também de outras fontes, como a venda de bens públicos. Despesa é todo o dinheiro que sai desses cofres, usado para pagar coisas que a população precisa, como escolas, hospitais, estradas e salários de quem trabalha para o governo. Essa relação existe porque, assim como em uma casa, não dá para gastar de forma saudável sem saber quanto está entrando, e não adianta arrecadar muito se o dinheiro for mal usado depois. Quando a despesa fica maior que a receita por muito tempo, o governo precisa se endividar ou cortar gastos, o que pode afetar serviços importantes para todo mundo. Por isso, controlar bem essas duas pontas é essencial para manter os serviços públicos funcionando sem crise. É basicamente o equilíbrio entre o que entra e o que sai, só que em uma escala muito maior que a de uma família.",
    "exemplo": "Imagina um cofrinho da turma, guardado numa gaveta da sala. O dinheiro que as crianças trazem de casa para uma rifa da escola é a receita, porque está entrando no cofrinho. O dinheiro gasto para comprar bolas novas, giz colorido e lanche para o passeio é a despesa, porque está saindo do cofrinho. Se a turma gastar mais do que arrecadou com a rifa, vai faltar dinheiro para as próximas coisas que precisar comprar.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "subtema": "Precatórios",
    "resumoSimples": "É o que acontece quando o governo perde uma disputa na Justiça e é obrigado a pagar uma quantia em dinheiro para alguém, mas, diferente de uma pessoa comum, ele não paga logo depois da decisão. Isso acontece porque o governo lida com muito dinheiro público de uma vez e precisa organizar os pagamentos dentro do que já está planejado no orçamento, sem simplesmente tirar o dinheiro de outro lugar de repente. Por isso, esse pagamento entra em uma fila especial, organizada geralmente pela ordem de chegada, e é pago em um momento futuro definido por regras próprias. Existem situações específicas em que o pagamento pode ser mais rápido, mas, de modo geral, é preciso esperar essa fila andar. Esse sistema existe para equilibrar o direito de quem venceu a causa com a necessidade de o governo continuar pagando outras despesas importantes, como saúde e educação, sem quebrar. No fim, é uma forma organizada de garantir que a dívida será paga, só que não imediatamente.",
    "exemplo": "Imagina que a escola prometeu devolver o dinheiro do passeio que foi cancelado, mas avisa que só vai devolver ano que vem, porque precisa primeiro pagar outras contas urgentes, como o conserto do telhado. Cada criança recebe o dinheiro de volta na ordem em que se inscreveu na lista de devolução, então quem entrou primeiro na fila recebe primeiro. Essa fila organizada de \"vou te pagar depois, prometido\" é parecida com o que se chama de precatório.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "subtema": "Transparência Fiscal",
    "resumoSimples": "É a regra que obriga o governo a mostrar publicamente como está gastando o dinheiro que vem de impostos e de outras fontes, sem esconder informações da população. Essa transparência existe porque o dinheiro público não pertence a quem está no governo, e sim a todas as pessoas, então elas têm o direito de saber e de conferir para onde ele está indo. Quando as contas ficam escondidas ou difíceis de entender, fica mais fácil acontecerem desvios, favorecimentos ou erros que ninguém percebe a tempo. Por isso, existem sites, relatórios e documentos públicos que qualquer pessoa pode consultar para acompanhar os gastos do governo. Essa fiscalização pode ser feita não só por órgãos oficiais, mas também por qualquer pessoa interessada em olhar os números. No fim, é um jeito de manter a confiança entre quem governa e quem é governado.",
    "exemplo": "Imagina um cofrinho de turma que fica bem à vista, em cima da mesa da professora, com um caderninho ao lado mostrando tudo que entrou e saiu, item por item. Qualquer coleguinha pode se aproximar quando quiser e conferir se o dinheiro da rifa foi mesmo usado para comprar as bolas novas prometidas. Se algum dia o caderninho sumisse ou ficasse cheio de rasuras difíceis de entender, os colegas ficariam desconfiados de que algo não está certo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "subtema": "Princípios e Competência Ambiental",
    "resumoSimples": "A natureza é de todo mundo, então cuidar dela também é dever de todo mundo. Essa regra existe porque, se só uma pessoa cuidasse, ia faltar gente pra proteger rio, floresta e ar em todo canto do país. Por isso o país inteiro (a União), os estados e as cidades (municípios) dividem esse trabalho entre eles. Cada um cuida de um pedaço, mas ninguém pode ficar de fora nem dizer que o cuidado é só dos outros. Assim, se um lugar esquece de proteger a natureza, ainda tem outro nível cuidando também, pra ninguém ficar desprotegido.",
    "exemplo": "Imagina uma casa com quintal grande demais pra uma pessoa só cuidar sozinha. O pai cuida do jardim inteiro (o país), a mãe cuida de um pedaço específico (o estado) e a criança cuida do vasinho dela na janela (o município). Se a criança esquecer de regar o vasinho, a mãe pode dar uma força, porque cuidar da natureza é tarefa de todos ao mesmo tempo, não só de quem está mais perto.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "subtema": "Licenciamento Ambiental",
    "resumoSimples": "Algumas atividades, como construir uma fábrica ou uma estrada, podem machucar a natureza sem querer, sujando rio ou derrubando árvores. Por isso, antes de começar, a pessoa ou empresa precisa pedir uma autorização especial, mostrando um plano de como vai evitar esses estragos. Essa autorização não é dada de qualquer jeito: geralmente tem várias etapas, indo de um primeiro sim pra ideia até a autorização final pra funcionar de verdade. Se a atividade for arriscada demais e ninguém conseguir garantir que a natureza fica segura, a autorização pode ser negada.",
    "exemplo": "Imagina que, antes de montar um trampolim gigante no quintal, você precisa mostrar pros seus pais um desenho explicando onde ele vai ficar, garantindo que não vai esmagar as florzinhas nem incomodar o cachorro do vizinho. Primeiro eles dizem 'a ideia parece boa', depois conferem o trampolim já montado, e só então dão o sim final pra você pular. Esse processo de pedir e mostrar cuidado, em etapas, é o licenciamento ambiental.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "subtema": "Responsabilidade Ambiental",
    "resumoSimples": "Quando alguém suja rio, desmata ou polui o ar, precisa consertar o estrago, mesmo sem ter feito de propósito. Essa regra existe porque a natureza machucada demora muito pra se recuperar sozinha, então quem causou o problema precisa ajudar a acelerar essa recuperação. Além de consertar (limpar, replantar, cuidar), a pessoa também pode ser punida, como pagar uma multa. Uma coisa importante: às vezes mais de uma pessoa ou empresa participou do estrago, e aí todas podem ser chamadas a ajudar a resolver juntas, não só uma.",
    "exemplo": "Imagina que, brincando de pintar, um grupo de crianças derruba tinta no jardim da escola sem querer. Mesmo que ninguém tenha feito por maldade, todo mundo que participou da bagunça vai ajudar a limpar o chão e replantar as florzinhas, porque o jardim machucado não vira do jeito antigo sozinho. E se a professora perceber que a tinta estragou demais, pode até avisar que da próxima vez vai ter um castigo além da limpeza.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "subtema": "Espaços Territoriais Protegidos",
    "resumoSimples": "Existem lugares da natureza tão importantes ou frágeis que a lei dá uma proteção extra pra eles, como parques, reservas e florestas especiais. Essa proteção existe porque, se deixasse qualquer um construir ou cortar árvore ali, esses lugares raros podiam desaparecer pra sempre, junto com os bichos e plantas que só vivem lá. Por isso, dentro dessas áreas as regras são bem mais rígidas: em muitas delas não pode construir, caçar ou desmatar de jeito nenhum. Cada tipo de área protegida tem um nível diferente de rigidez, indo desde 'pode visitar com cuidado' até 'ninguém entra sem autorização especial'.",
    "exemplo": "Imagina que, no parquinho da escola, tem um cantinho marcado com uma fitinha porque ali existe um ninho de passarinho raro. Ninguém pode pisar ali, mexer nos gravetos nem levar o ninho pra casa, mesmo que o resto do parquinho seja livre pra brincar. Esse cantinho especial, protegido de um jeito mais rígido que o resto, é como funcionam as áreas protegidas da natureza.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "subtema": "Código Florestal",
    "resumoSimples": "É o conjunto de regras que diz quanto de mato, árvore e vegetação cada fazenda ou terreno precisa deixar em pé, mesmo sendo dono do lugar. Essa regra existe porque árvores e mato ajudam a segurar a terra nas encostas, proteger os rios e manter a chuva chegando direitinho; se todo mundo desmatasse tudo, o solo enfraquece e os rios sofrem. Por isso, existem partes do terreno que precisam ficar sempre preservadas, como as beiras de rio e os morros mais íngremes, além de uma reserva de mato guardada dentro da própria propriedade. Mesmo sendo dono da terra, a pessoa não pode decidir sozinha derrubar tudo.",
    "exemplo": "Imagina que você ganha uma caixa enorme de blocos de montar, mas seus pais combinam que uma parte da caixa sempre fica guardada, intocada, mesmo sendo sua. Isso porque, se você usasse todos os blocos de uma vez, não sobraria nada pra construir depois. O Código Florestal funciona parecido: mesmo o dono do terreno tendo que deixar uma parte de mato sempre guardada, pra natureza não acabar.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "subtema": "Segurados e Filiação",
    "resumoSimples": "É sobre quem faz parte do 'clube da Previdência', que ajuda as pessoas em momentos difíceis da vida. Assim que a pessoa começa a trabalhar ou contribuir com dinheiro, ela entra automaticamente nesse clube, sem precisar assinar nada especial pra isso acontecer. Essa entrada automática existe pra proteger o trabalhador desde o primeiro dia, porque um imprevisto, como uma doença, pode acontecer a qualquer momento. Existem diferentes tipos de 'sócios' desse clube, dependendo de como a pessoa trabalha (empregado, autônomo, entre outros), mas todos que contribuem viram parte dele.",
    "exemplo": "Imagina um clube de brinquedos da escola: assim que você começa a colocar suas moedinhas na caixinha do clube, já vira sócio automaticamente, sem precisar pedir permissão de novo toda semana. A partir daí, se um dia você se machucar ou precisar de ajuda, o clube já sabe que você faz parte e pode te socorrer. Virar sócio automaticamente ao contribuir é a filiação.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "subtema": "Benefícios Previdenciários",
    "resumoSimples": "São as 'ajudas' que a Previdência dá pra quem contribuiu, quando a vida traz alguma dificuldade, como ficar idoso, doente, ou ter um bebê pra cuidar. Essa ajuda existe porque nem sempre a pessoa vai poder trabalhar do mesmo jeito pra sempre, e sem essa proteção ela ficaria sem renda justamente quando mais precisa. Cada benefício serve pra uma situação diferente: um é pra quando a pessoa para de trabalhar de vez (aposentadoria), outro é temporário, só enquanto durar o problema de saúde. O valor e o tempo de cada ajuda variam de acordo com quanto e por quanto tempo a pessoa contribuiu.",
    "exemplo": "Imagina que, depois de guardar moedinhas na caixinha do clube de brinquedos por muito tempo, um dia você se machuca e não consegue brincar do jeito normal por um tempo. O clube te dá uma ajuda enquanto você está machucado, e outra ajuda maior e permanente quando você ficar bem velhinho e quiser descansar de vez. Essas diferentes ajudas, cada uma pra uma situação, são os benefícios.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "subtema": "Custeio da Seguridade Social",
    "resumoSimples": "É de onde vem o dinheiro que paga todas essas ajudas da Previdência. Esse dinheiro não cai do céu: ele vem das contribuições dos trabalhadores, das empresas e também de uma parte que o próprio governo separa, formando um 'cofre' comum. Essa mistura de fontes existe porque, se dependesse só do trabalhador, o cofre podia ficar pequeno demais nos momentos em que muita gente precisasse de ajuda ao mesmo tempo. Quanto mais gente contribuindo direitinho, mais forte e seguro fica esse cofre pra quando alguém precisar tirar dinheiro dele.",
    "exemplo": "Imagina a caixinha do clube de brinquedos: cada criança bota uma moedinha toda semana, os pais também ajudam de vez em quando, e a escola completa um pouquinho a mais. Assim, mesmo se várias crianças precisarem de ajuda no mesmo mês, a caixinha não fica vazia, porque tem várias fontes enchendo ela ao mesmo tempo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "subtema": "Acidente de Trabalho",
    "resumoSimples": "É quando a pessoa se machuca ou fica doente justamente por causa do trabalho que faz, e não por outro motivo qualquer. Essa situação existe como categoria especial porque o trabalhador estava exposto ao risco pra ajudar a empresa, então parece justo que ele tenha uma proteção maior nesse caso. Por isso, quem sofre esse tipo de acidente tem direito a ficar em casa recebendo ajuda financeira, receber tratamento de saúde, e ainda continua com um vínculo protegido com o trabalho, sem perder o lugar dele enquanto se recupera. Isso é diferente de um problema de saúde comum, sem relação nenhuma com o trabalho, que tem regras um pouco diferentes.",
    "exemplo": "Imagina que um coleguinha se machuca ajudando a carregar as carteiras pesadas da sala de aula, numa tarefa que a professora pediu. Como ele se machucou fazendo justamente o que foi combinado, tem direito a descansar em casa recebendo ajuda, ser cuidado até sarar, e continuar tendo o lugar dele garantido na turma quando voltar, diferente de se ele tivesse se machucado brincando sozinho em casa no fim de semana.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "subtema": "Conceitos e Princípios",
    "resumoSimples": "É a ideia de que, numa compra, quem vende geralmente sabe muito mais sobre o produto do que quem compra. Essa diferença de conhecimento e de poder faz com que o consumidor fique em desvantagem, podendo ser enganado sem nem perceber. Por isso a lei dá uma ajuda extra pra proteger quem compra, tratando o consumidor como a parte mais fraca da relação, que precisa de mais cuidado. Essa proteção vale mesmo quando o consumidor é uma empresa, desde que ela esteja comprando algo pra usar, e não pra revender.",
    "exemplo": "Imagina uma criança pequena trocando figurinhas com um adulto que entende muito mais sobre quais são raras e valiosas. Se ninguém ficar de olho, o adulto pode convencer a criança a trocar dez figurinhas comuns por uma só que na verdade não vale tanto assim. Por isso alguém mais experiente precisa acompanhar a troca e garantir que seja justa, do jeito que a lei acompanha as compras pra proteger o consumidor.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "subtema": "Direitos Básicos e Informação",
    "resumoSimples": "Todo consumidor tem direitos que ninguém pode tirar dele, nem mesmo combinando isso no momento da compra. Um dos mais importantes é o direito à informação: saber exatamente o que está comprando, quanto custa, do que é feito e se tem algum risco. Esse direito existe porque, sem informação clara, a pessoa não consegue escolher de verdade - ela só está adivinhando. Por isso a empresa que vende tem o dever de contar as coisas importantes antes da compra acontecer, e não depois, quando já é tarde pra desistir.",
    "exemplo": "Imagina que, antes de comprar um brinquedo novo, alguém precisa te contar tudo certinho: do que ele é feito, se quebra fácil, se usa pilha que pode ser perigosa se a criança for pequena. Saber tudo isso antes de decidir comprar, e não só depois de já ter gastado a mesada, é um direito básico seu como consumidor.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "subtema": "Responsabilidade pelo Fato/Vício",
    "resumoSimples": "Quando um produto tem problema, existem dois jeitos diferentes de olhar pra isso. Se o problema faz o produto machucar alguém ou causar um estrago maior, isso é chamado de 'fato' (ou defeito), e é mais grave. Se o produto só não funciona direito, mas não machuca ninguém, isso é chamado de 'vício'. Essa diferença existe porque as consequências são diferentes: no fato, alguém se machucou de verdade; no vício, só o produto não cumpriu o que prometia. Mesmo assim, nos dois casos quem fabricou ou vendeu tem o dever de resolver, seja trocando, consertando ou devolvendo o dinheiro.",
    "exemplo": "Imagina que você ganha um carrinho de brinquedo e uma peça dele se solta e machuca seu dedo - isso é o fato, porque você se machucou de verdade. Agora imagina que o carrinho simplesmente não anda, mas não te machuca em nada - isso é o vício, um defeito que só atrapalha a diversão. Nos dois casos a loja ou fábrica precisa resolver, mas o jeito de cobrar isso pode ser um pouco diferente dependendo da gravidade.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "subtema": "Práticas e Contratos de Consumo",
    "resumoSimples": "São as regras sobre como as empresas podem vender, fazer propaganda e escrever os combinados (contratos) com o consumidor. Essas regras existem porque, sem elas, uma empresa poderia prometer coisas que não são verdade só pra vender mais, ou esconder informações importantes em letrinhas pequenas que ninguém lê. Por isso, a propaganda não pode enganar, e o contrato não pode ter cláusulas escondidas que prejudiquem demais o consumidor sem ele perceber. Se isso acontecer, essas partes enganosas ou injustas do combinado podem simplesmente não valer, mesmo que estejam escritas.",
    "exemplo": "Imagina uma propaganda de brinquedo que mostra ele voando de verdade, mas quando você ganha, percebe que ele nem sai do chão - isso é enganar, e não pode. Agora imagina que, no papel da compra, tem uma letrinha bem miudinha, escondida no canto, dizendo que você nunca pode trocar o brinquedo mesmo se vier quebrado. Mesmo estando escrito, essa parte escondida e injusta pode não valer, porque o combinado precisa ser claro e justo desde o início.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "subtema": "Defesa do Consumidor em Juízo",
    "resumoSimples": "Se o consumidor tentar resolver um problema sozinho e não conseguir, ele pode pedir ajuda da Justiça. Essa possibilidade existe porque, sozinho, o consumidor muitas vezes não tem força nem tempo pra brigar contra uma empresa grande. Por isso a lei também permite que grupos inteiros de pessoas com o mesmo problema se juntem numa única reclamação, em vez de cada uma processar sozinha. Isso deixa a briga mais forte e mais rápida, porque uma decisão da Justiça pode resolver o problema de todo mundo de uma vez, em vez de repetir o mesmo caso centenas de vezes.",
    "exemplo": "Imagina que cem crianças compraram o mesmo brinquedo e ele quebrou do mesmo jeito em todas. Em vez de cada criança reclamar sozinha, uma associação que defende os consumidores pode juntar todo mundo numa única reclamação e pedir ajuda de um juiz. Assim, quando o juiz decide, a solução vale pra todas as cem crianças de uma vez só, sem precisar de cem processos diferentes.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "Competência Tributária",
    "resumoSimples": "É tipo um combinado de família bem antigo: cada um (a União, os Estados, o Distrito Federal e os Municípios) já tem os seus próprios impostos certinhos pra cobrar, definidos desde o começo. Essa divisão existe pra evitar brigas e confusão, porque, se dois cobrassem o mesmo imposto da mesma coisa, ia virar uma bagunça pra quem paga. Por isso, ninguém pode pegar emprestado o imposto do outro nem inventar de cobrar algo que já é reservado pra outro nível de governo. Essa divisão já vem escrita nas regras principais do país, então não é algo que muda de vontade própria.",
    "exemplo": "Imagina que a mamãe deu uma caixa de brinquedos pra cada irmão logo no começo: um só mexe na caixa vermelha, outro só na caixa azul, e o terceiro só na caixa verde. Mesmo se um irmão achar a caixa do outro mais legal e quiser usar também, ele não pode simplesmente abrir e mexer, porque cada caixa já tem dono certo desde sempre.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "Limitações ao Poder de Tributar",
    "resumoSimples": "São regras que impedem o governo de cobrar imposto do jeito que quiser, na hora que quiser. Essas limitações existem pra proteger as pessoas de cobranças surpresa ou injustas. Por isso, o governo só pode cobrar um novo imposto se existir uma lei explicando isso antes, não pode cobrar sobre algo que já aconteceu no passado (quando ainda não tinha essa regra), e não pode aumentar tudo de um dia pro outro sem avisar com antecedência. Além disso, existem coisas que a lei protege de qualquer cobrança, como igrejas, livros e partidos políticos, porque cobrar imposto delas atrapalharia atividades importantes pra sociedade.",
    "exemplo": "Imagina um jogo de tabuleiro em família: as regras precisam estar escritas antes de começar a jogar, ninguém pode inventar uma regra nova no meio da partida pra prejudicar quem já jogou uma rodada, e é preciso avisar com tempo antes de mudar alguma regra importante. Além disso, tem coisas que a família combinou que nunca vão valer ponto contra ninguém, tipo 'rezar antes de dormir não dá multa'.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "Obrigação Tributária",
    "resumoSimples": "Quando você faz algo que a lei diz que gera imposto, nasce automaticamente um dever de pagar aquele valor pro governo, mesmo sem ninguém pedir na hora. Esse dever existe porque o dinheiro dos impostos é o que sustenta serviços que todo mundo usa, como escola e hospital, então a lei já define de antemão quais ações fazem esse dever nascer. Além do dever principal de pagar, às vezes existe também um dever menorzinho, chamado obrigação acessória, que é mais sobre informar do que sobre pagar, como preencher um papel contando o que você fez. Mesmo quem não precisa pagar nada às vezes ainda precisa cumprir esse dever de informar.",
    "exemplo": "Imagina que, toda vez que você pega um doce escondido do potinho, você fica devendo automaticamente uma ficha pra mamãe, mesmo sem ela ver na hora. Além de entregar a ficha depois, você também precisa contar direitinho pra ela quantos doces pegou e de qual sabor, porque esse relatório também faz parte do combinado, mesmo sendo uma parte menor dele.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "Lançamento e Crédito Tributário",
    "resumoSimples": "É o momento em que o governo faz a conta certinha de quanto você deve de imposto e transforma isso em algo oficial, com valor exato e definido. Antes desse momento, o dever de pagar já existia, mas de um jeito meio solto, sem número fechado. Esse passo existe porque, sem uma conta oficial, ninguém saberia exatamente quanto cobrar nem quando cobrar. Depois do lançamento, a dívida vira algo concreto, que pode ser cobrado de verdade, e a pessoa passa a ter um prazo certo pra pagar ou contestar aquele valor.",
    "exemplo": "Imagina que a mamãe desconfia que você pegou vários doces da caixa, mas ainda não sabe exatamente quantos. Um dia ela conta tudo direitinho e escreve num caderninho: 'você deve exatamente 5 fichas'. A partir desse momento, a dívida fica registrada, com número certo, e não é mais um 'sei lá quanto' solto no ar.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "Prescrição e Decadência Tributária",
    "resumoSimples": "São prazos que fazem o governo perder o direito de cobrar um imposto se ele demorar tempo demais pra agir. Essas regras existem porque não seria justo deixar a pessoa devendo pra sempre, com medo de ser cobrada anos e anos depois, sem nunca ter certeza se aquilo ainda vale. Existem dois momentos diferentes: se o governo demora demais pra fazer a conta oficial da dívida (o lançamento), ele perde o direito de fazer essa conta, e isso se chama decadência. Se ele já fez a conta, mas demora demais pra cobrar de verdade depois disso, ele perde o direito de cobrar, e isso se chama prescrição.",
    "exemplo": "Imagina um vale-presente que expira depois de um tempo. Se a mamãe demorar anos e anos pra conferir a caixa de doces e descobrir quanto você comeu, ela perde o direito de fazer essa conta agora - isso é como a decadência. E se ela já sabe exatamente quanto você deve, escreveu no caderninho, mas esquece de cobrar por muito tempo, ela também perde o direito de pedir depois - isso é como a prescrição.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "Impostos em Espécie",
    "resumoSimples": "São os impostos de cada 'dono' diferente dentro do governo, e cada um deles serve pra tributar uma coisa específica da vida das pessoas, como ter uma casa, ter um carro, ganhar dinheiro no trabalho ou comprar produtos numa loja. Essa separação existe porque cobrar de coisas diferentes, com regras diferentes, ajuda a distribuir melhor quem paga o quê, em vez de um imposto só tentando cobrir tudo. Cada imposto tem seu próprio motivo de existir e sua própria forma de calcular o valor, mesmo que às vezes pareçam parecidos por fora.",
    "exemplo": "Imagina potes de doce com etiquetas bem diferentes na prateleira: um pote é só pra guardar chiclete, outro só pra chocolate, outro só pra pirulito, e ninguém mistura o conteúdo de um pote no outro. Cada imposto funciona como um pote separado, com sua própria etiqueta e sua própria razão de existir, mesmo que todos fiquem juntos na mesma prateleira do governo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "Processo Tributário",
    "resumoSimples": "É o jeito de resolver a briga quando a pessoa acha que não deve pagar aquele imposto, ou acha que o valor cobrado está errado. Esse caminho existe porque ninguém deve ser obrigado a pagar algo sem ter chance de discordar e mostrar seu lado. Primeiro, geralmente dá pra reclamar dentro do próprio governo, apresentando os motivos pra alguém do mesmo órgão reconsiderar a cobrança. Se essa reclamação interna não resolver, ou se a pessoa preferir, ainda dá pra pedir ajuda de um juiz de fora, numa etapa diferente e mais formal.",
    "exemplo": "Imagina que você acha injusto ter que lavar toda a louça sozinho todo dia. Primeiro você conversa com os pais em casa, explicando seu ponto de vista, esperando que reconsiderem (processo administrativo). Se mesmo assim ninguém concordar com você, você pode pedir pra um adulto de fora, tipo o vovô, ouvir os dois lados e decidir quem tem razão (processo judicial).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "subtema": "Direitos Fundamentais da Criança e do Adolescente",
    "resumoSimples": "Crianças e adolescentes têm prioridade em quase tudo: saúde, educação, carinho e proteção vêm sempre em primeiro lugar, antes de qualquer outra coisa. Isso existe porque crianças ainda não conseguem se proteger sozinhas, então alguém precisa cuidar disso por elas. A família, as pessoas ao redor, as escolas e o governo têm o dever de garantir esses direitos, cada um fazendo a sua parte. Se alguém não fizer isso, a lei entende que essa pessoa falhou com a criança, porque cuidar dela não é favor, é obrigação. Assim, mesmo quando falta dinheiro ou tempo, o direito da criança não pode ficar pra depois.",
    "exemplo": "Imagina uma festa de aniversário: as crianças são sempre as primeiras a serem servidas com bolo e suco, antes de todo mundo, mesmo que os adultos também estejam com fome. Se um adulto quisesse pegar o pedaço maior do bolo primeiro, todo mundo acharia estranho, porque o combinado é que a criança vem primeiro. É assim que a lei quer que seja com os direitos delas: escola, saúde e carinho sempre em primeiro lugar, sem sobrar pro final.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "subtema": "Medidas de Proteção",
    "resumoSimples": "São ações para ajudar uma criança quando ela está em perigo, doente ou sofrendo, e nunca porque ela fez algo de errado — isso é bem importante, porque proteção não é castigo. Elas existem porque, quando uma criança está em risco, alguém precisa agir rápido antes que a situação piore. Pode ser levar a criança para um médico, colocá-la temporariamente com uma família que cuide bem dela, orientar os pais para melhorarem, ou até afastá-la de quem está machucando ela. A diferença importante é essa: a medida de proteção olha pra criança como alguém que precisa de socorro, não como alguém que precisa ser corrigido. Assim, o foco é sempre resolver o perigo e devolver a ela um lugar seguro pra viver.",
    "exemplo": "Imagina uma criança sendo maltratada em casa, com muito medo de contar pra alguém. A escola percebe que algo está errado e chama gente especializada pra ajudar imediatamente. Não é castigo pra criança nem punição pra ninguém: é um time inteiro de pessoas cuidando dela até que fique segura de novo, como quando vários amigos ajudam alguém que caiu a se levantar.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "subtema": "Ato Infracional e Medidas Socioeducativas",
    "resumoSimples": "Quando um adolescente faz algo que seria considerado crime se fosse feito por um adulto, isso tem um nome especial: ato infracional. Existe esse nome diferente porque a lei entende que o adolescente ainda está aprendendo e amadurecendo, então ele não deve ser tratado do mesmo jeito que um adulto. Em vez de receber a mesma punição que um adulto receberia, ele recebe medidas socioeducativas, pensadas pra ensinar e mudar o comportamento, não só pra punir. Essas medidas podem ser mais leves, como prestar serviço à comunidade, ou mais sérias, como ficar internado em um local específico para adolescentes, dependendo da gravidade do que aconteceu. A ideia central é dar uma chance de o adolescente entender o erro e não repetir, em vez de simplesmente afastá-lo e esquecer dele.",
    "exemplo": "Imagina que uma criança quebra uma regra grave do jogo, tipo roubar uma peça de outro jogador escondido. Em vez de mandá-la pra \"prisão de adulto\", que seria exagero pra idade dela, ela vai pro \"cantinho de pensar com lição\": lá ela entende o que fez de errado, conversa sobre isso e aprende a se comportar melhor da próxima vez. Se ela repetir o erro várias vezes, a lição fica mais séria, mas o objetivo nunca é só afastar e não ensinar nada.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "subtema": "Adoção e Família Substituta",
    "resumoSimples": "É quando uma criança que não pode ficar com a família de sangue ganha uma nova família pra sempre, de um jeito oficial, feito com cuidado e acompanhado por quem entende do assunto. Isso existe porque toda criança precisa de um lar e de pessoas que cuidem dela, e às vezes a família original não consegue ou não pode oferecer isso. Depois que a adoção acontece, a criança vira filho de verdade, com os mesmos direitos de qualquer outro filho, incluindo sobrenome e herança. A diferença importante é que isso não tem volta: uma vez adotada, a criança pertence pra sempre àquela família, não é como um empréstimo que pode ser devolvido se não der certo. É por isso que o processo de adoção é cuidadoso e demorado: pra garantir que a nova família realmente vai amar e cuidar bem daquela criança.",
    "exemplo": "Imagina um cachorrinho de rua sem dono que é adotado por uma família cheia de amor, depois de visitas e conversas pra ter certeza de que vai dar tudo certo. A partir daquele dia, ele é da família pra sempre: ganha nome, coleira nova e passa a dormir dentro de casa. Ninguém pode simplesmente devolver ele depois porque cansou ou porque apareceu outro bichinho mais novo — agora ele é filho de verdade daquela família, com todos os cuidados que isso significa.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "subtema": "Conselho Tutelar",
    "resumoSimples": "É um grupo de pessoas escolhidas pela própria comunidade do bairro, que cuida de proteger os direitos das crianças e adolescentes no dia a dia. Ele existe porque nem sempre dá tempo de esperar um juiz decidir algo urgente: às vezes uma criança precisa de ajuda agora, e alguém precisa poder agir rápido. Por isso, o Conselho Tutelar recebe pedidos de ajuda, conversa com famílias, escolas e vizinhos, e toma providências imediatas quando percebe que uma criança está em risco. A diferença importante é que essas pessoas não são juízes e não julgam crimes: elas não decidem culpa nem punição, só cuidam pra que o direito da criança seja respeitado. Quando o problema é mais grave e precisa de uma decisão judicial, aí sim o caso vai pro juiz.",
    "exemplo": "Imagina que a escola tem uma \"equipe de ajuda\" formada por vizinhos escolhidos, que qualquer criança pode procurar quando precisa de socorro, tipo quando alguém em casa não está cuidando bem dela. Eles resolvem rápido, conversam com os adultos responsáveis e acompanham a situação de perto, sem precisar esperar um tribunal decidir. Se descobrirem algo mais sério, aí sim chamam quem tem autoridade de juiz pra resolver, mas o primeiro socorro já foi dado.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "subtema": "Empresário e Sociedade Empresária",
    "resumoSimples": "Empresário é a pessoa que organiza sozinha um negócio pra vender produtos ou serviços e ganhar dinheiro com isso, de forma profissional e organizada, não só de vez em quando. Sociedade empresária é quando duas ou mais pessoas se juntam pra fazer isso juntas, formando um só negócio com um nome próprio. Essa diferença existe porque a lei precisa saber quem é responsável pelo negócio: se é uma pessoa só ou um grupo de sócios dividindo tarefas, lucros e responsabilidades. Quando várias pessoas se juntam numa sociedade, elas costumam combinar entre si como vão dividir o trabalho e o dinheiro que ganharem, e isso fica registrado formalmente. Assim, tanto clientes quanto quem empresta dinheiro sabem exatamente com quem estão lidando.",
    "exemplo": "Imagina uma barraquinha de limonada: se só uma criança toca o negócio sozinha, decide os preços e guarda o dinheiro, ela é a \"empresária\". Se duas crianças se juntam, dão um nome pra barraquinha, tipo \"Limonada das Amigas\", e combinam quem traz os limões e quem faz a propaganda, tocando tudo juntas, isso é uma \"sociedade empresária\". Nos dois casos tem alguém vendendo pra ganhar dinheiro, mas o jeito de organizar e dividir as coisas é diferente.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "subtema": "Tipos Societários",
    "resumoSimples": "São os diferentes \"modelos\" que uma sociedade pode escolher pra existir, cada um com regras diferentes sobre quem paga se o negócio der dívida e não conseguir se sustentar. Isso existe porque as pessoas que abrem um negócio querem saber, antes de começar, o quanto elas arriscam perder se as coisas derem errado. Em alguns tipos, os donos arriscam só o dinheiro que já investiram ali, e nada além disso, o que dá mais segurança pra quem quer empreender. Em outros tipos, se o negócio ficar devendo muito, os donos podem ter que usar até dinheiro próprio, de fora da empresa, pra pagar as dívidas. Por isso, escolher o tipo certo de sociedade é uma decisão importante logo no começo do negócio.",
    "exemplo": "Imagina que um time de brincadeira pode escolher entre duas \"camisas\" antes do campeonato começar. Numa camisa, se o time perder o jogo e ficar devendo pontos, cada jogador só perde as próprias fichas que já tinha apostado, nada mais. Na outra camisa, se perder, todo mundo do time tem que ajudar a pagar tudo, até usando fichas guardadas em casa, mesmo além do que cada um tinha apostado no jogo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "subtema": "Nome Empresarial e Estabelecimento",
    "resumoSimples": "Nome empresarial é o nome oficial que identifica o negócio perante todo mundo, e estabelecimento é o lugar, físico ou virtual, onde esse negócio realmente funciona e atende os clientes. Essas duas coisas existem porque os clientes precisam confiar em quem estão comprando, e reconhecer sempre o mesmo negócio quando voltam a procurar. Por isso, os dois são protegidos: ninguém pode usar um nome parecido de propósito, nem se instalar por perto imitando o visual, só pra confundir quem compra e roubar clientes. Se isso acontecer, o dono original pode pedir que a cópia pare, porque o nome e o local também têm valor, às vezes até podendo ser vendidos ou passados adiante junto com o negócio. Assim, quem trabalhou pra construir a fama de um negócio não perde ela pra uma cópia.",
    "exemplo": "Imagina uma barraquinha de limonada com uma placa colorida escrito \"Limonada da Ana\" num cantinho conhecido da rua, onde todo mundo já sabe que a limonada é boa. Nenhuma outra barraquinha pode usar esse mesmo nome, nem montar uma barraca idêntica bem do lado fingindo ser a mesma, pra enganar quem já confia na Ana. Se alguém tentar copiar assim, a Ana pode reclamar e pedir pra pessoa parar, porque o nome e o cantinho dela são só dela.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "subtema": "Títulos de Crédito e Contratos Empresariais",
    "resumoSimples": "Títulos de crédito são papéis que prometem um pagamento, tipo um cheque ou uma nota promissória, e a grande vantagem deles é que podem passar de mão em mão até serem cobrados, sem precisar refazer a promessa toda vez. Isso existe porque, no mundo dos negócios, é mais prático poder repassar uma promessa de pagamento a outra pessoa do que sempre esperar receber diretamente de quem prometeu. Contratos empresariais, por sua vez, são os combinados que os donos de negócio fazem entre si pra comprar, vender, prestar serviços ou fazer parcerias, deixando claro o que cada lado tem que cumprir. A diferença é que o título de crédito é como uma promessa que \"anda sozinha\" de mão em mão, enquanto o contrato geralmente fica só entre as pessoas que combinaram diretamente. Os dois ajudam o comércio a funcionar com mais confiança, porque tudo fica registrado e pode ser cobrado se alguém não cumprir.",
    "exemplo": "Imagina um bilhetinho onde você escreve \"prometo dar 3 bolinhas de gude pro João na próxima semana\" e assina embaixo. O João pode até passar esse bilhete pra outra amiga cobrar as bolinhas de gude no seu lugar, sem precisar te perguntar de novo, porque a promessa escrita já vale por si só. Já se você e o João combinarem de trocar brinquedos toda sexta-feira, esse combinado maior é mais parecido com um contrato: fica só entre vocês dois, valendo enquanto os dois cumprirem a palavra.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "subtema": "Propriedade Industrial",
    "resumoSimples": "É a proteção legal para invenções, marcas e desenhos criados por alguém, garantindo que só o dono pode usar e vender aquilo por um tempo determinado. Isso existe porque, se qualquer pessoa pudesse copiar uma ideia boa assim que ela aparecesse, ninguém teria vontade de inventar coisas novas ou gastar tempo criando algo diferente. Por isso, quem registra sua invenção, marca ou desenho ganha o direito de ser o único a lucrar com aquilo durante um período, como um prêmio por ter criado primeiro. Passado esse tempo protegido, a ideia costuma ficar livre pra todo mundo usar, porque a proteção não dura pra sempre. Assim, a lei tenta equilibrar duas coisas: incentivar quem cria e, no futuro, deixar o conhecimento disponível pra todos.",
    "exemplo": "Imagina que você inventa um brinquedo novo, tipo um carrinho que muda de cor no sol, e desenha um símbolo bem legal pra colar nele. Você registra essa invenção e esse desenho, e agora nenhuma outra criança pode copiar o carrinho ou usar o mesmo símbolo pra vender como se fosse dela, pelo menos por um bom tempo. Só depois de muitos anos, quando essa proteção acabar, outras crianças poderão fazer carrinhos parecidos livremente.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "subtema": "Recuperação Judicial e Falência",
    "resumoSimples": "Quando uma empresa está em apuros com dívidas, mas ainda tem chance de se recuperar, ela pode pedir recuperação judicial: um plano pra se reorganizar e pagar aos poucos, sem precisar fechar as portas de uma vez. Isso existe porque, às vezes, é melhor pra todo mundo — donos, funcionários e quem tem dinheiro a receber — dar um tempo pra empresa se ajeitar do que simplesmente acabar com ela de repente. Se, mesmo com esse plano, não der jeito nenhum e a empresa não conseguir se recuperar, então tudo que ela tem é vendido pra pagar quem é devido, na ordem que a lei define, e ela encerra suas atividades de vez: isso é a falência. A diferença importante é essa: recuperação judicial é uma segunda chance com prazo, enquanto falência é o fim mesmo, sem volta. Nos dois casos, o objetivo é tentar pagar o máximo possível de quem confiou e emprestou dinheiro pra empresa.",
    "exemplo": "Imagina que a barraquinha de limonada ficou sem dinheiro pra comprar limão e açúcar, devendo pra vários fornecedores. Primeiro a família tenta um plano detalhado pra pagar as dívidas aos poucos, cortando gastos e vendendo mais, pra manter a barraquinha aberta e ir quitando tudo. Se não der certo de jeito nenhum, mesmo tentando de tudo, vendem os potes, a mesa e o que sobrou da barraquinha pra pagar quem é devido, e ela fecha pra sempre, sem chance de reabrir com esse mesmo negócio.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Parte Geral",
    "resumoSimples": "Essa parte fala sobre quem pode ter direitos e deveres perante a lei: as pessoas comuns e também as empresas, que são tratadas como se fossem \"pessoas\" em certos aspectos. Ela existe porque, antes de falar sobre contratos, família ou heranças, é preciso definir coisas básicas, como quando alguém passa a ter direitos e o que conta como um \"bem\" que a lei protege, tipo uma casa, um carro ou até uma ideia. É por isso que essa parte funciona como o manual de regras básicas que vale pra tudo o mais no Direito Civil, meio que as \"regras do jogo\" antes de começar a jogar. Ela também explica que existem diferenças entre uma criança pequena, um adolescente e um adulto na hora de assumir responsabilidades sozinhos, porque nem todo mundo pode decidir tudo sozinho na mesma idade. Assim, sem essa base, as outras partes do Direito Civil não fariam sentido.",
    "exemplo": "Imagina que, assim que o bebê nasce e respira pela primeira vez, ele já vira uma pessoa pra lei, com nome e direitos, tipo já poder ser dono de um brinquedo que ganhou de presente. Antes de nascer, ele ainda não é considerado dono de nada, mesmo que já exista uma expectativa de que vai nascer. E quando esse bebê crescer um pouco, mesmo sendo uma pessoa com direitos, ainda vai precisar dos pais pra decidir coisas importantes por ele, porque criança pequena ainda não decide tudo sozinha.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Obrigações",
    "resumoSimples": "É quando uma pessoa promete dar, fazer ou não fazer alguma coisa pra outra pessoa, e essa promessa passa a valer de verdade, não é só um \"combinado de boca\". Quem promete se chama devedor, e quem vai receber aquilo se chama credor, e essa relação existe porque, sem regras claras, as pessoas não confiariam nas promessas umas das outras. Se um dos dois não cumprir o combinado, o outro tem o direito de cobrar isso e, se precisar, pedir ajuda pra resolver a situação, inclusive recebendo algo no lugar do que foi combinado. A diferença importante é que existem tipos diferentes de obrigação: dar uma coisa, fazer um serviço, ou até deixar de fazer algo que iria incomodar o outro. Assim, sempre que alguém promete algo de um jeito sério, essa promessa vira uma obrigação que pode ser cobrada.",
    "exemplo": "Imagina que você promete emprestar seu carrinho de brinquedo pro seu amigo amanhã de manhã, e ele já contou pros outros que vai levar o carrinho pra escola. Você é quem prometeu (o devedor), e seu amigo é quem vai receber o carrinho (o credor), esperando confiante que você vai cumprir. Se você não emprestar sem nenhum motivo, ele pode reclamar e cobrar isso de você, porque uma promessa séria não pode ser simplesmente esquecida.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Contratos",
    "resumoSimples": "Contrato é um combinado entre pessoas que topam fazer uma troca ou um negócio, decidindo juntas as regras e prometendo cumprir aquilo que ficou acertado. Ele existe porque, quando duas pessoas vão trocar algo importante, é bom deixar bem claro o que cada uma vai dar e receber, pra evitar brigas depois. Os dois lados precisam concordar livremente, sem ninguém ser obrigado à força, e é justamente essa concordância que torna o contrato válido. Se alguém não cumprir a parte combinada, o outro lado pode pedir ajuda pra lei resolver, cobrando o que foi prometido ou até uma compensação pelo prejuízo. Existem contratos bem simples, como uma troca rápida, e outros mais complicados, com várias regras, mas todos seguem essa mesma ideia de combinado que vale a pena respeitar.",
    "exemplo": "Imagina que você e sua amiga combinam, conversando com calma: \"eu te dou meu carrinho novinho e você me dá sua boneca que eu adoro\". Os dois toparam de verdade, sem ninguém forçar o outro, então virou um combinado valendo, tipo um contrato de troca de brinquedos. Se depois sua amiga mudar de ideia e não quiser mais dar a boneca, você pode lembrar dela que vocês já tinham combinado e cobrar que ela cumpra a palavra.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Responsabilidade Civil",
    "resumoSimples": "Quando alguém causa um estrago ou machuca outra pessoa, tem que consertar o problema ou pagar por ele, mesmo sem ter sido de propósito. Isso existe porque não seria justo alguém sofrer um prejuízo sozinho quando outra pessoa foi a causa daquilo, então a lei tenta devolver as coisas o mais parecido possível de como estavam antes. Às vezes isso acontece porque a pessoa foi descuidada, não prestou atenção ou agiu com pressa demais, e nesses casos ela precisa se responsabilizar pelo descuido. Só que também existem casos em que a pessoa tem que resolver o problema mesmo sem ter agido com culpa direta, principalmente quando ela estava fazendo algo arriscado por natureza. A diferença importante é essa: às vezes cobra-se culpa, às vezes cobra-se só o fato de ter causado o dano, dependendo da situação.",
    "exemplo": "Imagina que, brincando de bola dentro de casa mesmo sabendo que era proibido, você quebra o vaso favorito da vovó, que se espatifa em vários pedaços. Mesmo sem querer quebrar o vaso, você precisa ajudar a consertar ou repor um parecido, porque foi você quem causou o estrago com o descuido de jogar bola lá dentro. Se, em vez disso, o vaso tivesse caído sozinho sem ninguém ter empurrado nada, aí a história seria bem diferente, porque ninguém teria causado aquilo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Direitos Reais",
    "resumoSimples": "São as regras sobre ser dono ou ter o direito de usar uma coisa, tipo uma casa, um terreno ou até um carro. Elas existem porque é importante que, quando alguém é dono de algo, essa informação valha para o mundo inteiro, e não só para uma pessoa específica com quem se fez um combinado. Quando você é dono de algo, todo mundo precisa respeitar isso, mesmo pessoas que nunca conversaram com você sobre aquilo, o que é bem diferente de um simples combinado entre duas pessoas, que só vale entre elas. Além de ser dono, existem outros direitos parecidos, como poder usar um terreno que não é seu mas que você tem permissão pra atravessar sempre, e isso também é respeitado por todos. Assim, os direitos reais dão uma segurança maior, porque protegem a pessoa contra o mundo todo, não só contra quem assinou um papel com ela.",
    "exemplo": "Imagina que você tem uma bicicleta que é sua de verdade, com nome gravado embaixo do banco. Não importa quem apareça, um vizinho novo, um primo distante ou um estranho na rua, todo mundo tem que respeitar que ela é sua e não pode simplesmente pegar sem pedir. Ser dono vale pra qualquer pessoa que vier a ver a bicicleta, mesmo que ela nunca tenha combinado nada diretamente com você sobre isso.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Família",
    "resumoSimples": "São as regras sobre como funciona uma família pra lei: casar, morar junto sem casar oficialmente, cuidar dos filhos e ajudar financeiramente quem precisa de dinheiro pra viver bem. Essas regras existem porque as famílias passam por momentos difíceis, como separações e brigas, e é preciso ter um jeito justo de resolver essas situações sem deixar ninguém desamparado. A ideia principal é proteger todo mundo da família, mas principalmente as crianças, porque elas dependem dos adultos pra crescer com segurança e carinho. Por isso, mesmo quando os adultos se separam e não moram mais juntos, a responsabilidade de cuidar dos filhos continua existindo para os dois lados, dividida entre eles. Assim, a lei tenta garantir que o fim de um relacionamento entre adultos não vire um problema a mais na vida das crianças envolvidas.",
    "exemplo": "Imagina que os pais de um amiguinho se separam depois de brigarem bastante e decidem morar em casas diferentes. A lei ajuda a decidir com quem ele vai morar durante a semana e nos finais de semana, e garante que os dois pais continuem cuidando dele, ajudando com comida, escola, roupas e carinho, mesmo morando separados. Assim, mesmo com a separação dos pais, o amiguinho continua tendo os dois cuidando dele, cada um do seu jeito.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Sucessões",
    "resumoSimples": "É sobre o que acontece com as coisas de uma pessoa quando ela morre: quem vai ficar com o carro, a casa, o dinheiro guardado e outros bens que ela tinha. Isso existe porque, sem regras claras, poderia virar uma bagunça enorme entre os parentes discutindo quem fica com o quê. Por isso, esses bens passam automaticamente pra família dela, que são chamados de herdeiros, seguindo uma ordem que a lei já define, como filhos e cônjuge primeiro. Às vezes a pessoa deixa escrito antes de morrer como quer dividir tudo, e isso se chama testamento, permitindo que ela organize uma parte da divisão do seu próprio jeito. Mesmo com testamento, existem limites: a lei garante que uma parte sempre vá pros parentes mais próximos, pra que ninguém importante fique de fora.",
    "exemplo": "Imagina que o vovô tinha uma casinha de bonecas enorme, cheia de móveis pequenininhos que ele mesmo construiu ao longo dos anos. Quando ele morre, essa casinha passa pros netos, que são os herdeiros, mesmo que ninguém tenha combinado nada antes. Se o vovô deixou escrito antes de morrer quem fica com o quê, tipo \"a Ana fica com a cozinha de brinquedo e o Pedro com o quarto\", todo mundo segue esse combinado, desde que respeite a parte que por lei tem que ficar garantida pra família mais próxima.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Proteção de Dados/LGPD",
    "resumoSimples": "São regras pra proteger as informações sobre você, tipo seu nome, endereço, fotos e até seus gostos, que hoje em dia ficam guardadas em muitos lugares diferentes. Isso existe porque essas informações podem ser usadas de jeitos que te prejudicam, como vender seus dados sem você saber ou te vigiar demais, então é preciso ter limites. As empresas só podem usar esses dados se tiverem um bom motivo, e muitas vezes precisam pedir sua autorização antes de guardar ou usar qualquer coisa sobre você. Além disso, você sempre pode pedir pra saber quais informações guardaram sobre você, corrigir o que estiver errado, ou até pedir pra apagar tudo, quando não tiver mais motivo pra guardar. Assim, a ideia é que você continue no controle das suas próprias informações, mesmo quando elas estão guardadas em computadores de outras pessoas.",
    "exemplo": "Imagina que uma lojinha de brinquedos quer guardar seu nome, endereço e data de aniversário pra te mandar um convite especial de aniversário com desconto. Ela só pode fazer isso se você, ou seus pais por você, deixar claro que topa, explicando exatamente pra que vai usar essas informações. Depois, se você não quiser mais receber esses convites, dá pra pedir pra lojinha apagar essas informações guardadas, e ela é obrigada a fazer isso.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Princípios da Administração Pública",
    "resumoSimples": "São as regras de bom comportamento que o governo tem que seguir sempre, em tudo que faz. Elas existem porque quem cuida do dinheiro e das decisões de todo mundo não pode fazer só o que quiser, precisa ter limites claros. Por isso o governo só pode fazer o que a lei permite, tem que tratar todo mundo igual sem escolher favoritos, precisa ser honesto e mostrar pra população o que está fazendo. Também tem que trabalhar bem feito, sem desperdiçar tempo nem dinheiro de ninguém. Se um desses princípios for quebrado, mesmo que o resultado pareça bom no final, a decisão pode ser desfeita, porque o jeito de agir importa tanto quanto o resultado. É como um código de bons modos que vale pra qualquer pessoa que cuida das coisas de todos, não só pra alguns.",
    "exemplo": "Imagina uma professora organizando uma brincadeira de pega-pega na escola. Ela usa as regras que já existem, não deixa só os amigos dela pegarem os brinquedos melhores, é sincera quando alguém pergunta como vai funcionar, e conta pra turma inteira as regras antes de começar. Se ela resolvesse escolher só os alunos preferidos pra ganhar prêmio, mesmo sendo a professora quem manda, isso seria errado e a brincadeira teria que ser refeita do jeito certo. Assim é o governo cuidando das coisas públicas: pode até fazer coisas boas, mas só se fizer do jeito certo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Atos Administrativos",
    "resumoSimples": "É quando o governo toma uma decisão oficial que já passa a valer na hora, tipo dar uma licença, proibir alguma coisa ou autorizar uma obra. Isso existe porque, se cada decisão do governo precisasse ser confirmada por um juiz antes de funcionar, tudo ficaria devagar demais e a vida das pessoas travaria. Por isso todo mundo confia que essa decisão foi feita certinho até que se prove o contrário, e as pessoas já precisam obedecer enquanto isso não é provado. Mas essa confiança não é cega: se depois aparecer um erro ou uma injustiça na decisão, ela pode ser revista e até desfeita. Ou seja, vale logo, mas não é perfeita nem intocável pra sempre.",
    "exemplo": "Imagina que a diretora da escola avisa, por um bilhete oficial afixado no mural, que o parquinho vai fechar pra manutenção a partir de amanhã. Todo mundo já para de brincar lá, porque o aviso veio de quem manda, mesmo sem perguntar o motivo na hora. Mas se depois alguém descobrir que na verdade não tinha problema nenhum no parquinho e a diretora se enganou, ela pode voltar atrás e reabrir tudo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Poderes Administrativos",
    "resumoSimples": "São as ferramentas que o governo usa pra conseguir organizar a vida de todo mundo, porque só mandar 'faça o que é certo' de um jeito vago não funcionaria na prática. Um desses poderes é mandar em quem trabalha pra ele, outro é criar regras extras pra completar o que a lei já disse de um jeito mais geral, outro é dar bronca e aplicar castigo quando alguém erra, e ainda tem o poder de limitar o que a gente faz em certas situações pra proteger a saúde, a segurança ou o bem de todos. Cada poder serve pra uma situação diferente, e o governo não pode misturar ou usar um poder além do que ele permite. Se usar demais ou do jeito errado, essa ação pode ser considerada abusiva e ser corrigida depois.",
    "exemplo": "Imagina um professor de educação física organizando um campeonato de futebol na escola. Ele manda os times se organizarem em grupos, cria regras extras pro jogo que não estavam escritas antes, tipo o tempo de cada partida, e pode tirar da quadra quem chutar bola nos coleguinhas de propósito. Se ele resolvesse tirar um aluno do time só porque não gosta dele, sem nenhum motivo relacionado ao jogo, estaria usando o poder do jeito errado, e isso poderia ser reclamado depois.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Licitações e Contratos Administrativos",
    "resumoSimples": "Quando o governo precisa comprar algo ou contratar alguém pra fazer um serviço, ele não pode simplesmente escolher o amigo ou o primeiro que aparecer, porque esse dinheiro é de todo mundo, não só dele. Por isso existe uma disputa justa, chamada licitação, onde várias empresas ou pessoas mostram o que oferecem e por quanto, e vence quem apresenta a proposta mais vantajosa dentro das regras combinadas. Depois que alguém vence essa disputa, os dois lados assinam um contrato, que é um papel detalhando o que cada um promete fazer. Isso ajuda a evitar favorecimento e desperdício de dinheiro público. Só em situações bem específicas e urgentes é que o governo pode contratar sem passar por essa disputa toda.",
    "exemplo": "Imagina que a escola precisa comprar bolas novas pra educação física e chama três lojinhas da região pra participar de uma disputa, mostrando preço e qualidade das bolas de cada uma. A lojinha que oferecer o melhor negócio dentro das regras é quem vai vender as bolas pra escola. Depois disso, a escola e a lojinha assinam um papel combinando quantas bolas, por quanto dinheiro e até quando elas precisam ser entregues.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Serviços Públicos e Concessões",
    "resumoSimples": "São as coisas essenciais que o governo precisa garantir pra todo mundo poder viver bem, tipo água encanada, luz elétrica e transporte de ônibus. Esses serviços existem porque tem coisas que precisam funcionar pra cidade inteira, e não seria justo nem prático deixar cada família se virar sozinha pra ter isso. Às vezes o próprio governo cuida diretamente do serviço, e às vezes ele passa essa tarefa pra uma empresa privada fazer no lugar dele, através de um contrato especial chamado concessão. Mesmo quando é a empresa que executa o serviço, o governo continua de olho, fiscalizando preço, qualidade e se está funcionando bem pra população. Se a empresa fizer um serviço ruim ou cobrar além do combinado, o governo pode intervir e até tirar essa tarefa dela.",
    "exemplo": "Imagina que a prefeitura não tem gente nem equipamento suficiente pra cuidar da limpeza de todos os parques da cidade, então chama uma empresa especializada pra fazer esse trabalho, através de um contrato que dura vários anos. A empresa cuida dos parques todos os dias, mas a prefeitura continua mandando fiscais de vez em quando pra ver se a limpeza está mesmo sendo feita direito e se o preço cobrado está de acordo com o combinado.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Intervenção do Estado na Propriedade",
    "resumoSimples": "Às vezes o governo precisa usar, limitar ou até tomar um terreno ou uma casa de alguém pra fazer algo importante pra toda a cidade, tipo construir uma estrada, um hospital ou uma escola. Isso existe porque, em certas situações, o interesse de todo mundo precisa vir na frente da vontade de uma única pessoa, mesmo que ela não queira vender ou emprestar aquele espaço. Só que isso não pode ser feito de qualquer jeito: existem regras bem definidas sobre quando isso é permitido, e o dono geralmente tem direito de receber um valor justo em troca, calculado antes de o governo tomar posse. Tem situações mais leves, onde o governo só limita um pouco o uso do terreno, e situações mais fortes, onde o dono realmente perde a propriedade. A diferença está em quanto aquilo afeta o direito do dono e em quanto dinheiro ele recebe de volta.",
    "exemplo": "Imagina que a prefeitura precisa construir uma escola bem no lugar onde hoje existe uma casa antiga, porque não tem outro terreno livre na região. Ela avisa o dono, explica o motivo, e paga um valor justo em dinheiro antes de começar a obra, calculado por pessoas especializadas em avaliar quanto vale aquele terreno. O dono não pode simplesmente dizer não pra sempre, mas também não fica no prejuízo, porque recebe o valor da casa de volta.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Agentes Públicos e Regime Disciplinar",
    "resumoSimples": "São todas as pessoas que trabalham pro governo, desde professores de escola pública até fiscais e diretores de repartições. Elas ocupam um lugar de confiança, cuidando de coisas que são de todo mundo, por isso têm regras de comportamento mais rígidas do que um trabalho comum. Se alguém desrespeitar essas regras, pode receber castigos de tamanhos diferentes, dependendo da gravidade: desde uma advertência simples, passando por suspensão do trabalho, até perder o emprego de vez em casos bem graves. Antes de qualquer castigo mais sério, a pessoa geralmente tem direito de se explicar e se defender, porque ninguém pode ser punido sem chance de contar sua versão. Esse cuidado existe pra proteger tanto quem trabalha honestamente quanto a confiança que a população precisa ter em quem cuida das coisas públicas.",
    "exemplo": "Imagina um zelador de uma escola pública que trabalha pro governo. Se ele faltar sem avisar algumas vezes, pode receber uma bronca oficial por escrito. Se ele fizer isso repetidamente ou fizer algo bem mais grave, como deixar a escola sem segurança de propósito, ele pode ser afastado do trabalho por um tempo ou até perder o emprego, mas antes disso alguém sempre vai perguntar pra ele o motivo, pra ouvir o lado dele também.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Responsabilidade Civil do Estado",
    "resumoSimples": "Se alguém que trabalha pro governo causa um estrago fazendo o trabalho dele, quem tem que consertar ou pagar geralmente é o próprio governo, sem precisar provar que o funcionário quis fazer aquilo de propósito. Isso existe porque seria muito injusto e difícil pra uma pessoa comum brigar sozinha contra um funcionário do governo, então a lei facilita fazendo o governo responder primeiro, já que ele tem mais estrutura pra isso. Depois de pagar o prejuízo, se ficar provado que o funcionário agiu com descuido ou de propósito, o governo pode cobrar esse dinheiro de volta dele, numa etapa separada. Ou seja, quem sofreu o problema recebe a solução mais rápido, e só depois se discute quem realmente tem culpa entre o governo e o funcionário.",
    "exemplo": "Imagina que um motorista de ônibus da prefeitura, dirigindo distraído, bate sem querer no portão da sua casa enquanto está trabalhando. Quem paga o conserto do portão é a prefeitura, porque ele estava exercendo o trabalho dela, mesmo sem querer causar aquele estrago. Depois, se ficar provado que o motorista estava mexendo no celular enquanto dirigia, a prefeitura pode cobrar dele o dinheiro que gastou consertando o portão.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Improbidade Administrativa",
    "resumoSimples": "É quando alguém que trabalha pro governo faz algo errado de propósito usando o cargo que ocupa, tipo roubar dinheiro público, favorecer amigos escondido ou causar prejuízo por puro descaso grave. Isso existe como uma categoria separada e mais grave porque quem trabalha pro governo tem o dever de cuidar bem do dinheiro e da confiança de todo mundo, então trair essa confiança merece uma resposta mais forte do que um erro comum de trabalho. Por isso, além de precisar devolver o que roubou ou o prejuízo causado, a pessoa ainda pode perder o cargo, pagar multa, ficar proibida de trabalhar de novo pro governo por um tempo e sofrer outras punições sérias. A gravidade da punição também varia dependendo se a pessoa realmente queria fazer aquilo de propósito ou só foi extremamente descuidada.",
    "exemplo": "Imagina um responsável pela merenda de uma escola pública que recebe o dinheiro certinho pra comprar comida das crianças, mas fica com parte desse dinheiro pra ele e entrega uma merenda pior do que deveria. Isso é desonesto e muito errado, porque ele traiu a confiança que colocaram nele. Além de ter que devolver todo o dinheiro que pegou escondido, ele ainda pode perder o cargo e ficar proibido de trabalhar de novo em escolas públicas por um bom tempo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Controle da Administração",
    "resumoSimples": "Alguém sempre precisa ficar de olho pra ver se o governo está fazendo tudo certinho, gastando bem o dinheiro de todo mundo e seguindo as regras que existem. Isso existe porque quem tem poder e dinheiro em mãos precisa ser fiscalizado, senão fica fácil cometer erros ou até abusos sem que ninguém perceba a tempo. Esse olhar vigilante pode vir de dentro do próprio governo, revisando o próprio trabalho, pode vir de um órgão externo especializado em conferir contas e decisões, ou pode vir da Justiça, quando é preciso corrigir algo de um jeito mais forte. Cada tipo de controle serve pra um momento diferente: alguns previnem o problema antes de acontecer, outros corrigem depois que já aconteceu. Quanto mais camadas de controle existem, mais difícil fica esconder um erro ou uma injustiça por muito tempo.",
    "exemplo": "Imagina que, além da diretora cuidar da escola no dia a dia, existe também um conselho de pais que confere de tempos em tempos se o dinheiro da cantina está sendo bem usado. Se o conselho achar algo estranho, pode pedir explicações pra diretora ou levar o caso pra alguém ainda mais responsável resolver, como a secretaria de educação. Assim, ninguém fica cuidando do dinheiro da escola sem que outra pessoa também esteja de olho.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Competência e Partes",
    "resumoSimples": "Cada juiz cuida de um tipo de assunto ou de uma região específica, meio que nem cada professor cuida de uma turma ou de uma matéria diferente na escola. Competência é justamente a regra que ajuda a descobrir qual juiz é o certo pra resolver aquele problema específico, e ela existe pra organizar o trabalho e garantir que o caso seja julgado por quem realmente entende ou tem autoridade sobre aquele assunto e lugar. Se o processo for parar num juiz errado, ele pode ser encaminhado pro juiz certo depois. Já as partes são as pessoas envolvidas na briga dentro do processo: quem reclama de algo e pede ajuda ao juiz se chama autor, e quem está sendo acusado ou cobrado se chama réu. Sem saber quem são as partes certas e qual juiz é o competente, o processo nem consegue começar direito.",
    "exemplo": "Imagina uma escola com professores diferentes: um cuida de brigas por causa de brinquedos, outro cuida de bagunça no recreio, e outro ainda cuida de problemas na hora do lanche. Se você brigar por causa de um brinquedo, precisa procurar o professor certo daquele assunto, não pode simplesmente ir reclamar com qualquer um. E as partes envolvidas são você, que está reclamando (o autor), e o coleguinha que brigou com você, que vai se explicar (o réu).",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Petição Inicial e Resposta do Réu",
    "resumoSimples": "Petição inicial é a cartinha que a pessoa que se sentiu prejudicada escreve pro juiz, contando com detalhes o que aconteceu e explicando exatamente o que ela está pedindo de ajuda. Ela existe porque o juiz não pode adivinhar sozinho qual é o problema, alguém precisa contar a história e formular o pedido primeiro. Depois que essa cartinha chega, a pessoa acusada recebe uma cópia e tem direito de escrever de volta, contando a versão dela e se defendendo, isso é a resposta do réu. Esse vaivém de explicações existe pra garantir que o juiz escute os dois lados antes de decidir qualquer coisa, porque não seria justo julgar ouvindo só quem reclamou primeiro.",
    "exemplo": "Imagina que a Ana escreve pro juiz: 'o Pedro pegou meu urso de pelúcia e não devolveu, eu quero ele de volta e também quero que ele peça desculpas!' Essa cartinha detalhada, com a história e o pedido, é a petição inicial. Aí o Pedro recebe uma cópia dela e escreve de volta: 'não é verdade, ela me deu de presente no meu aniversário, tem até testemunha!' Essa é a resposta dele, contando o lado dele da história antes do juiz decidir quem tem razão.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Tutelas Provisórias",
    "resumoSimples": "Às vezes não dá pra esperar o processo inteiro terminar, porque alguém pode se machucar, perder algo importante ou o problema pode piorar muito enquanto espera a decisão final, que às vezes demora bastante tempo. Por isso existe a tutela provisória: o juiz analisa rapidinho o que já foi mostrado até ali e dá uma ordem provisória pra resolver a urgência logo, sem esperar todo o processo se completar. Essa ordem vale enquanto o caso continua sendo estudado com calma, e pode até ser mudada depois, quando o juiz enxergar tudo com mais detalhes e provas. Ou seja, é uma solução rápida pra proteger alguém de um risco imediato, sem significar que o assunto já está encerrado de vez.",
    "exemplo": "Imagina que o sorvete da Maria está derretendo bem na sua frente, enquanto ela e o colega discutem de quem é aquele sorvete e esperam a professora decidir com calma quem tinha razão. Não dá pra esperar a discussão inteira terminar, porque o sorvete vai virar poça! Então a professora dá uma ordem rápida: 'come agora antes que derreta todo, depois com calma eu escuto os dois direitinho e decido quem estava certo desde o início.'",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Provas",
    "resumoSimples": "Prova é tudo aquilo que ajuda a mostrar pro juiz que uma versão da história é a verdadeira, porque o juiz não estava lá quando o problema aconteceu e não pode simplesmente acreditar em quem fala mais alto ou mais bonito. Pode ser uma foto, um vídeo, um bilhete escrito, um documento, ou até alguém que viu tudo acontecer e conta pro juiz o que presenciou. Quanto mais provas fortes e confiáveis uma pessoa apresenta, mais fácil fica pro juiz decidir a favor dela, porque a decisão precisa ser baseada em fatos, não só em quem parece mais convincente na hora de falar. Às vezes as duas partes apresentam provas diferentes, e cabe ao juiz analisar qual delas é mais convincente.",
    "exemplo": "Imagina que você diz pra sua mãe que não foi você quem quebrou o vaso da sala. Só falar 'não fui eu' pode não ser suficiente pra convencer ela, então você mostra um vídeo do celular flagrando o gato pulando em cima da estante bem na hora em que o vaso caiu. Esse vídeo é a prova que ajuda sua mãe a acreditar em você, porque mostra o que realmente aconteceu, em vez de depender só da sua palavra.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Sentença e Coisa Julgada",
    "resumoSimples": "Sentença é o momento em que o juiz termina de analisar tudo, bate o martelo e diz oficialmente quem tem razão naquela briga, explicando os motivos da decisão. Coisa julgada é o que acontece um tempo depois: se ninguém reclamar daquela decisão dentro do prazo certo, ela vira definitiva pra sempre, e ninguém mais pode voltar discutindo o mesmo assunto de novo. Isso existe porque, se toda decisão pudesse ser reaberta a qualquer momento, ninguém teria segurança de verdade sobre nada, e os problemas nunca teriam um fim. Por isso, depois que a coisa julgada acontece, mesmo que alguém não goste do resultado, geralmente já não dá mais pra mudar aquilo através do mesmo processo.",
    "exemplo": "Imagina que a professora analisou a briga do brinquedo e decidiu, com uma explicação, que o brinquedo é da Julia. Ela dá um tempo pra quem discordar reclamar da decisão. Se ninguém reclamar dentro desse prazo, a decisão vira regra fixa: ninguém pode chegar semana que vem, ou daqui a um mês, pedindo pra decidir tudo de novo, porque aquele assunto já está encerrado de vez.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Recursos",
    "resumoSimples": "Recurso é o direito que a pessoa tem de não concordar com uma decisão e pedir pra outro juiz, mais graduado ou de uma instância superior, olhar de novo o caso inteiro pra ver se a primeira decisão estava mesmo certa. Isso existe porque juízes também podem errar ou enxergar as coisas de um jeito diferente, então dar uma segunda chance de análise ajuda a corrigir injustiças antes que a decisão vire definitiva. Só que existe um prazo certo pra pedir esse recurso, e se a pessoa deixar passar esse tempo sem reclamar, a decisão original acaba valendo do jeito que está. Esse segundo juiz pode manter a decisão como estava, mudar uma parte dela, ou até mudar tudo, dependendo do que ele enxergar de novo no caso.",
    "exemplo": "Imagina que a professora da sua sala decidiu que você errou numa discussão e te colocou de castigo. Você acha aquilo injusto e, dentro de um prazo certo, vai conversar com a diretora, pedindo pra ela olhar de novo toda a situação com calma. A diretora pode concordar com a professora e manter o castigo, ou pode discordar e cancelar o castigo, justamente porque está analisando o caso com um olhar novo e de um lugar mais alto.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Cumprimento de Sentença e Execução",
    "resumoSimples": "De nada adianta o juiz decidir com todo cuidado quem tem razão se, na prática, ninguém obedece à decisão. Cumprimento de sentença e execução é justamente a etapa em que essa decisão sai do papel e vira realidade de verdade, forçando quem perdeu a fazer o que foi determinado, mesmo contra a própria vontade. Isso pode significar pegar dinheiro, bens ou objetos de quem devia entregar algo e não entregou por conta própria. Essa etapa existe porque uma decisão sem força pra ser cumprida seria inútil, e a Justiça precisa ter meios de garantir que suas próprias ordens realmente aconteçam.",
    "exemplo": "Imagina que a professora decidiu que o João precisa devolver o carrinho de brinquedo pra Sofia, mas mesmo assim ele guarda o carrinho escondido na mochila e finge que esqueceu. Depois de um tempo esperando ele obedecer sozinho, alguém vai até a mochila dele, pega o carrinho e entrega direto pra Sofia. Isso é fazer a decisão acontecer de verdade, mesmo quando a pessoa que perdeu não quer cooperar por conta própria.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Procedimentos Especiais",
    "resumoSimples": "Nem toda briga ou problema se resolve seguindo exatamente o mesmo caminho dentro da Justiça. Pra algumas situações bem específicas, existem regras próprias, feitas sob medida, porque o jeito comum de resolver as coisas não encaixaria bem naquele tipo de caso. Esses procedimentos especiais costumam ser mais rápidos ou mais adequados justamente porque foi percebido que aquela situação tem particularidades que merecem um tratamento diferente do padrão. Assim, em vez de forçar todo tipo de problema a passar pelo mesmo caminho longo, cada situação especial ganha um atalho ou um jeito de organizar que faz mais sentido pra ela.",
    "exemplo": "Imagina que dividir os brinquedos de um coleguinha que mudou de escola de repente é bem diferente de resolver uma briga comum no recreio, porque tem mais gente envolvida e mais coisas pra organizar de uma vez. Pra isso existe um jeito especial de resolver, com passos próprios e mais organizados, criado justamente porque a professora percebeu que o jeito comum de resolver brigas não dava conta direito dessa situação mais complicada.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "subtema": "Relação de Emprego",
    "resumoSimples": "Relação de emprego é quando uma pessoa trabalha sempre para o mesmo alguém, seguindo as ordens desse alguém, sem poder mandar outra pessoa em seu lugar, e recebendo dinheiro por isso toda vez. Essa regra existe porque, quando alguém depende do trabalho de outra pessoa desse jeito, precisa ter proteção, já que quem manda costuma ter mais poder do que quem obedece. Por isso, quando esses ingredientes aparecem todos juntos - sempre a mesma pessoa, seguindo ordens, sem poder trocar, recebendo pagamento certo - a lei entende que ali existe uma relação de emprego de verdade, mesmo sem nenhum papel assinado. E com o rótulo de empregado vêm direitos especiais, como férias e descanso, que quem só ajuda de vez em quando não tem do mesmo jeito.",
    "exemplo": "Imagina que o Tio Carlos trabalha toda semana na padaria do Seu Zé, sempre ele mesmo (não manda o irmão no lugar dele), seguindo o horário e as ordens do Seu Zé, e recebendo um salário certinho todo mês. Isso é uma relação de emprego. Agora imagina o primo dele, que só ajuda de vez em quando, um dia aqui outro lá, sem hora fixa e sem ninguém mandando nele: esse não vira empregado, porque falta o \"sempre\" e o \"seguir ordens\" que tornam a relação de emprego especial.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "subtema": "Jornada e Descanso",
    "resumoSimples": "Ninguém pode trabalhar o dia inteiro sem parar, porque o corpo e a cabeça de qualquer pessoa precisam descansar pra continuar funcionando bem. Por isso existem regras dizendo quantas horas por dia dá pra trabalhar, e depois desse limite a pessoa tem que parar. Além disso, todo mundo tem direito a pausas durante o dia pra comer e respirar, um descanso maior entre um dia de trabalho e o outro, e ainda férias uma vez por ano pra descansar de verdade, bem mais tempo. Se esses limites não forem respeitados e a pessoa trabalhar demais, isso vira um problema sério, porque descanso não é luxo, é necessidade.",
    "exemplo": "Imagina que na escola tem hora de estudar, hora de recreio e ainda as férias no fim do ano. Se a criança estudasse o dia inteiro sem nenhuma pausa, ela ficaria cansada demais e nem aprenderia direito. No trabalho é parecido: depois de um tempo trabalhando, a pessoa tem direito a uma pausa pra comer, depois um descanso até o dia seguinte, e no fim do ano, férias inteiras pra descansar igual nas férias escolares.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "subtema": "Remuneração e Verbas Rescisórias",
    "resumoSimples": "Remuneração é todo o dinheiro e as outras coisinhas que a pessoa ganha por trabalhar, não é só o salário do fim do mês, pode incluir outros bônus que ela recebe por causa do trabalho. Isso existe porque quem trabalha precisa ser pago de forma justa e completa por tudo que fez, não só por uma parte. Quando o trabalho termina, seja porque a pessoa saiu ou foi mandada embora, é preciso fazer um acerto final de contas, somando tudo que ainda falta pagar: dias trabalhados e não pagos, férias que ficaram guardadas, entre outras coisinhas. Esse acerto final se chama verbas rescisórias, e existe justamente pra ninguém sair no prejuízo quando o trabalho acaba.",
    "exemplo": "Imagina que você ajudou um amigo a organizar a festa dele o mês inteiro, e ele te pagava toda semana um dinheirinho combinado - isso é a remuneração. Quando a festa termina e vocês param de trabalhar juntos, ele confere tudo e percebe que ainda te deve alguns dias que esqueceu de pagar, mais uma reservinha que tinha guardado pra você. Esse acerto final, feito antes de vocês se despedirem de vez, são as verbas rescisórias.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "subtema": "Segurança e Saúde no Trabalho",
    "resumoSimples": "É um conjunto de cuidados pra ninguém se machucar ou ficar doente enquanto trabalha, porque trabalhar não pode custar a saúde de ninguém. Essa regra existe porque tem trabalhos com mais risco - subir em lugar alto, mexer com máquinas, produtos perigosos - e quem manda no trabalho geralmente sabe mais sobre esses riscos do que quem só está ali fazendo o serviço. Por isso, é dever de quem manda dar equipamentos de proteção, ensinar o jeito certo de trabalhar com segurança e deixar o ambiente todo arrumado pra evitar acidentes. Se um acidente acontece porque esses cuidados foram esquecidos, quem devia ter cuidado também carrega responsabilidade pelo que aconteceu.",
    "exemplo": "Imagina um construtor trabalhando bem alto numa obra grande. Ele usa capacete pra proteger a cabeça, luvas pra não se cortar e um cinto preso numa corda pra não cair lá de cima, porque o dono da obra é quem precisa fornecer esses equipamentos e garantir que tudo esteja seguro antes de mandar alguém subir. Se faltasse o cinto e ele caísse, a culpa não seria só do acidente, seria também de quem esqueceu de cuidar da segurança dele.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "subtema": "Direito Coletivo do Trabalho",
    "resumoSimples": "Às vezes um trabalhador sozinho pede uma melhoria e ninguém escuta, porque sozinho ele tem pouca força pra negociar. Aí os trabalhadores se juntam todos num grupo, chamado sindicato, pra pedir melhorias juntos, com muito mais força do que cada um pedindo separado. Esse grupo pode conversar direto com os patrões pra combinar regras que valem pra todo mundo do mesmo tipo de trabalho, e se a conversa não der certo, os trabalhadores ainda podem, em último caso, parar de trabalhar juntos (isso se chama greve) pra serem ouvidos. Essa força de grupo existe justamente pra equilibrar as coisas, já que um patrão sozinho costuma ter mais poder que um empregado sozinho.",
    "exemplo": "Imagina que uma criança sozinha pede pro professor mais tempo de recreio e ele nem presta atenção. Mas se a turma inteira se junta, escolhe um representante e pede tudo junto, fica bem mais difícil o professor dizer não, porque agora não é o pedido de um só, é o pedido de todos. E se mesmo assim o professor não aceitar nada, a turma toda ainda pode combinar de ficar sentada quietinha até ser ouvida - isso lembra bastante o que é uma greve.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "subtema": "Grupo Econômico e Terceirização",
    "resumoSimples": "Grupo econômico é quando várias empresas são como irmãs, pertencem ao mesmo dono ou trabalham muito ligadas umas às outras, e por isso, se uma delas deve algo pro trabalhador e não paga, as outras podem ser chamadas pra ajudar a pagar essa dívida. Essa regra existe pra proteger o trabalhador, porque senão um dono esperto poderia se esconder atrás de várias empresas diferentes pra nunca pagar o que deve. Já terceirização é uma coisa diferente: é quando uma empresa, em vez de contratar a pessoa direto pra fazer um serviço, chama outra empresa especializada pra cuidar daquilo. Isso é permitido, mas também tem regras, porque o trabalhador terceirizado precisa continuar tendo seus direitos garantidos, mesmo trabalhando por meio dessa outra empresa.",
    "exemplo": "Imagina três lanchonetes de brinquedo que são todas do mesmo tio, só com nomes diferentes na fachada - isso é um grupo econômico. Se uma delas não paga o funcionário no fim do mês, as outras duas podem ser chamadas pra ajudar a completar esse pagamento, porque no fundo são da mesma \"família\". Agora, se essa lanchonete contrata uma empresa de limpeza pra mandar alguém fazer a faxina, em vez de ter um faxineiro contratado só por ela, isso é terceirização - e mesmo assim, esse faxineiro continua tendo direito a ser tratado direito.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "subtema": "Estabilidades e Garantias de Emprego",
    "resumoSimples": "Tem momentos na vida do trabalhador em que a lei protege ele de um jeito especial e não deixa ele ser mandado embora sem um motivo bem forte, mesmo que o chefe quisesse demitir. Isso acontece justamente nas fases mais delicadas, quando a pessoa está mais vulnerável e precisaria de mais segurança, tipo durante a gravidez, logo depois de se machucar trabalhando, ou quando acabou de virar representante dos colegas no sindicato. A ideia por trás disso é simples: nesses momentos, perder o emprego de repente causaria um problema ainda maior do que numa época normal. Por isso, enquanto durar essa proteção especial, o trabalhador tem uma segurança a mais, embora isso não signifique que ele nunca mais possa ser demitido - só que precisa ter um motivo de peso.",
    "exemplo": "Imagina que a Dona Marta está esperando um bebê e trabalha numa loja de roupas. Enquanto ela está grávida e por um tempinho depois que o bebê nasce, o dono da loja não pode simplesmente decidir mandar ela embora porque quis, sem nenhum motivo sério, porque esse é justamente o momento em que ela mais precisa de segurança pra cuidar da família. Se ele quiser mesmo assim demiti-la, vai precisar de um motivo bem forte e justificado, não pode ser só porque deu vontade.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Teoria Geral do Crime",
    "resumoSimples": "Isso explica o que precisa acontecer de verdade pra algo virar \"crime\" e não só uma coisa ruim ou um acidente qualquer. Não basta fazer algo que causou um mal: primeiro, tem que ser uma ação que a lei já proibia antes de acontecer; segundo, a pessoa precisa ter feito por querer ou por descuido sério, ou seja, precisa ter culpa por aquilo. Se faltar qualquer uma dessas partes - se não era proibido, ou se foi um acidente sem nenhuma culpa - a lei entende que não é crime, mesmo que algo ruim tenha acontecido. Essa separação existe pra não punir quem não teve culpa nenhuma, porque só é justo castigar quem realmente escolheu fazer algo errado, sabendo que era errado.",
    "exemplo": "Imagina que um brinquedo cai sozinho da estante e quebra, sem ninguém encostar nele - ninguém teve culpa, foi só um acidente, então não é crime de ninguém. Agora imagina que o Pedro pega esse mesmo brinquedo e joga no chão de propósito, sabendo bem que ele ia quebrar. Aí sim ele escolheu fazer aquilo, teve culpa de verdade, e por isso conta como algo que a regra proíbe - a diferença toda está em ter escolhido ou não ter escolhido.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Aplicação da Lei Penal",
    "resumoSimples": "Isso mostra quando e onde uma regra vale, porque não adianta ter uma lei se ninguém souber pra quem e a partir de quando ela funciona. Uma pessoa só pode ser punida por algo que já era proibido antes de ela fazer aquilo - se a proibição surgiu depois, ela não pode ser usada pra castigar quem agiu antes, quando ainda era permitido. Além disso, a regra vale principalmente pro que acontece dentro do país, embora em alguns casos especiais ela também possa alcançar coisas feitas fora, quando envolve interesses importantes daquele lugar. Esse cuidado com o \"quando\" existe pra ninguém ser pego de surpresa por uma regra que nem existia no momento em que agiu.",
    "exemplo": "Imagina que a escola cria uma regra nova: \"não pode trazer bolinha de gude\". Só quem trouxer DEPOIS de a regra existir pode ser advertido por isso. Quem trouxe antes, numa época em que ainda não tinha regra nenhuma proibindo, não pode ser punido, porque seria injusto castigar alguém por uma regra que só apareceu depois. E claro, essa regra da escola vale pra dentro da escola - se a criança levar a bolinha de gude pra casa do vizinho, a regra da escola já nem se aplica mais ali.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Concurso de Pessoas e de Crimes",
    "resumoSimples": "Concurso de pessoas é quando mais de uma pessoa participa da mesma ação errada, cada uma fazendo uma parte, tipo uma que executa e outra que ajuda ou vigia. Isso importa porque, mesmo que só uma pessoa tenha feito a ação principal, todo mundo que colaborou de propósito também pode responder pelo que aconteceu, cada um de acordo com o tamanho da sua ajuda. Já concurso de crimes é uma coisa diferente: é quando a mesma pessoa, sozinha, comete mais de uma ação errada, uma atrás da outra, seja no mesmo momento ou em momentos separados. Nesse caso, o jeito de somar os castigos de cada ação segue regras próprias, porque não é justo simplesmente ignorar que foram várias ações diferentes.",
    "exemplo": "Imagina que o João derruba a torre de blocos do amigo enquanto o Lucas fica de olheiro, avisando se alguém vem checar - os dois participaram, cada um com seu papel, e por isso os dois têm responsabilidade, mesmo o Lucas não tendo encostado na torre. Isso é concurso de pessoas. Agora, se depois disso o João ainda pega escondido o lanche do amigo, ele sozinho fez duas coisas erradas diferentes, uma depois da outra - isso é concurso de crimes, porque agora é uma pessoa só, mas duas ações separadas.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Crimes contra a Pessoa",
    "resumoSimples": "São as regras bem sérias que protegem a vida e o corpo de cada pessoa, porque nada é mais importante do que estar vivo e são. Elas existem pra impedir que alguém machuque, ameace ou faça mal a outra pessoa de propósito, e quanto mais grave for o mal causado, mais séria costuma ser a resposta da lei. Essas regras não protegem só contra a morte, mas também contra machucados, ameaças e outras formas de fazer mal ao corpo ou à tranquilidade de alguém. A ideia central é sempre a mesma: o corpo e a vida de cada um merecem respeito, e quem desrespeita isso de propósito precisa responder por essa escolha.",
    "exemplo": "Imagina que, numa briga de recreio, um coleguinha empurra o outro com força de propósito e ele cai, machucando o braço feio. Machucar o corpo de alguém assim, de propósito, é muito errado, por isso existe uma regra bem séria protegendo todo mundo disso - e se em vez de um empurrão fosse algo bem mais grave, a resposta da regra seria ainda mais severa, porque o tamanho do mal importa.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Crimes contra o Patrimônio",
    "resumoSimples": "São as regras que protegem as coisas que pertencem a cada pessoa, porque cada um tem direito de guardar e cuidar do que é seu sem medo de perder pra outra pessoa. Elas existem pra impedir que alguém pegue, estrague ou engane outra pessoa pra ficar com algo que não é dela. Tem jeitos diferentes de desrespeitar isso: pegar escondido é uma forma, pegar usando força ou ameaça é outra bem mais grave, e enganar alguém pra ela mesma entregar a coisa é ainda outra forma diferente. Por isso a resposta da lei costuma mudar de acordo com o jeito que a pessoa usou pra tirar algo que não era dela.",
    "exemplo": "Imagina que a Maria pega o brinquedo do irmão escondido, sem pedir e sem devolver, aproveitando que ele não estava olhando - isso já é errado, porque o brinquedo é dele. Mas seria ainda mais grave se ela tivesse empurrado o irmão pra tirar o brinquedo à força, ou enganado ele dizendo que ia devolver e nunca devolvesse - são jeitos diferentes de fazer a mesma coisa errada, e cada um pesa de um jeito na hora de julgar.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Crimes contra a Dignidade Sexual",
    "resumoSimples": "São regras muito sérias que dizem que o corpo de cada pessoa pertence só a ela, e ninguém mais tem o direito de decidir o que fazer com ele. Elas existem porque o corpo é a coisa mais íntima que uma pessoa tem, e por isso precisa de uma proteção ainda mais forte do que as outras coisas que alguém possui. Ninguém pode fazer nada com o corpo de outra pessoa sem ela concordar de verdade, de forma livre, e isso vale ainda mais quando a pessoa não tem idade ou condição de entender e decidir sozinha. Quem desrespeita essa regra comete algo muito grave, porque atinge a parte mais pessoal e delicada de alguém.",
    "exemplo": "Pensa assim: cada pessoa é dona do seu próprio corpo, do mesmo jeito que cada um é dono das suas coisas, só que de um jeito ainda mais importante e delicado. Ninguém pode mexer ou fazer nada com o que é do outro sem pedir e sem a pessoa realmente concordar - e quando é sobre o corpo de alguém, essa regra é levada muito a sério, porque a lei entende que essa é a parte mais íntima que uma pessoa tem pra proteger.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Crimes contra a Administração Pública",
    "resumoSimples": "São regras que protegem o funcionamento correto do governo e das repartições públicas, porque esses lugares cuidam de dinheiro e de poder que pertencem a todo mundo, não a uma pessoa só. Elas existem pra impedir que quem trabalha nesses lugares use a confiança que recebeu pra se beneficiar sozinho, enganando as pessoas ou desviando o que deveria servir a todos. Isso pode acontecer de formas diferentes: pegar dinheiro público pra si mesmo, aceitar vantagens pra fazer favores indevidos, ou simplesmente não fazer o trabalho direito e prejudicar todo mundo que dependia daquilo. No fundo, a ideia é que quem recebe uma responsabilidade pública precisa cuidar dela pensando em todos, não só no próprio bolso.",
    "exemplo": "Imagina que o responsável pelo dinheiro da escola, guardado pra comprar giz de cera pra turma toda, decide usar boa parte desse dinheiro pra comprar doce só pra ele. Isso é errado porque o dinheiro era de todos os alunos, ele usou mal a confiança que a escola depositou nele, e no fim quem sai prejudicada é a turma inteira, que fica sem os materiais que precisava.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Penas e Extinção da Punibilidade",
    "resumoSimples": "Pena é o castigo que a lei manda dar pra quem cometeu um crime, e ela pode ser de tamanhos diferentes dependendo da gravidade do que a pessoa fez. Mas nem sempre esse castigo dura pra sempre ou chega a ser aplicado: extinção da punibilidade é quando, por algum motivo especial, esse castigo deixa de poder ser cobrado. Isso acontece, por exemplo, quando passa tempo demais sem que nada seja resolvido, quando a pessoa que cometeu o crime morre, ou em outras situações parecidas previstas como motivo pra encerrar aquilo. A ideia é que o poder de punir não pode durar pra sempre, sem limite nenhum, e certos acontecimentos fazem esse poder simplesmente deixar de existir.",
    "exemplo": "Imagina que a professora combinou: \"quem quebrar o brinquedo fica uma semana sem parquinho\" - isso é a pena, o castigo combinado. Mas se passar tempo demais e ninguém aplicar esse castigo, ou se a criança já mudou de escola antes de cumprir, o castigo simplesmente não vale mais, porque não faz sentido aplicar um castigo tão atrasado ou pra quem nem está mais ali - isso é a extinção da punibilidade.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "subtema": "Competência da Justiça do Trabalho",
    "resumoSimples": "Isso define quais brigas devem ser resolvidas pelo juiz do trabalho, e não por outro juiz de outra área, porque cada tipo de problema precisa ser julgado por quem entende bem daquele assunto. Ele cuida principalmente das questões entre patrão e empregado, tipo quando um não pagou o outro direito ou quando alguém foi tratado de forma injusta no trabalho. Se a briga não tiver nada a ver com uma relação de trabalho, esse juiz não é quem deve resolver, porque sairia da área dele. Essa divisão existe pra organizar a Justiça, garantindo que cada assunto vá parar na mão de quem realmente é especialista naquilo.",
    "exemplo": "Imagina que na escola tem professores especialistas: um resolve briga de brinquedo, outro resolve briga de merenda, e cada um só cuida do que é da sua área. Se a briga é sobre trabalho - tipo um patrão que não pagou o empregado direito, ou que tratou ele mal no serviço - quem resolve é o juiz especialista em trabalho, ninguém mais, porque ele é quem entende de verdade desse tipo de assunto.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "subtema": "Atos, Prazos e Nulidades",
    "resumoSimples": "São as regras de como e quando cada passo do processo deve acontecer, porque um processo organizado precisa de ordem pra ser justo com todo mundo envolvido. Cada ato tem um prazo certo pra ser feito, e esse prazo existe justamente pra que ninguém fique esperando pra sempre nem seja pego de surpresa. Se alguém fizer um ato errado ou fora do prazo combinado, esse ato pode ser anulado, ou seja, deixar de valer, como se não tivesse acontecido. Isso é importante porque um processo bagunçado, sem essas regras, poderia virar injusto pra qualquer um dos lados.",
    "exemplo": "Imagina que numa gincana cada equipe tem um horário certo pra entregar a tarefa, e todo mundo sabe esse horário desde o começo. Se uma equipe entregar atrasada, ou de um jeito que não segue as regras combinadas, tipo colando a resposta de outra equipe, aquela tarefa é desclassificada - não conta mais, mesmo que o resultado final parecesse certo, porque o jeito de chegar até ali não seguiu as regras.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "subtema": "Provas no Processo do Trabalho",
    "resumoSimples": "São os jeitos de mostrar pro juiz que o que a pessoa está dizendo é verdade, porque só a palavra de alguém, sem nada que comprove, não é suficiente pra decidir uma briga. Existem vários tipos de prova, como documentos que mostram por escrito o que aconteceu e testemunhas que contam o que viram com os próprios olhos. O juiz usa essas provas justamente pra descobrir quem realmente tem razão, comparando as versões e vendo o que faz mais sentido com o que foi mostrado. Sem provas, fica muito difícil pro juiz saber em quem confiar, por isso elas são tão importantes em qualquer processo.",
    "exemplo": "Imagina que dois colegas discutem sobre quem quebrou o brinquedo, e cada um diz que foi o outro. Pra saber a verdade, o professor pergunta pra quem viu tudo acontecer (a testemunha) e ainda olha o vídeo da câmera de segurança (o documento). Juntando essas duas informações, ele consegue descobrir o que realmente aconteceu antes de decidir quem tem razão, em vez de acreditar só na palavra de um dos dois.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "subtema": "Recursos Trabalhistas",
    "resumoSimples": "São os pedidos que a pessoa faz pra um juiz mais graduado olhar de novo uma decisão que ela achou injusta, porque ninguém é obrigado a aceitar uma decisão sem poder questionar. Esse pedido só faz sentido dentro de um prazo certo, e precisa ter um motivo, não pode ser só porque a pessoa não gostou do resultado. Quando o pedido é aceito, um juiz diferente, numa posição mais alta, analisa tudo de novo e pode manter a decisão como estava ou mudá-la, se achar que teve algum erro. Esse segundo olhar existe justamente pra dar mais uma chance de corrigir possíveis erros antes de a decisão virar definitiva.",
    "exemplo": "Imagina que o professor da sala decidiu algo que a criança achou muito injusto, tipo tirar pontos que ela achava que não devia perder. Ela pode pedir pra diretora, que está numa posição acima do professor, olhar o caso de novo com calma e ver se a decisão foi certa ou se precisa ser mudada - mas ela precisa explicar o motivo do pedido, não pode ser só \"eu não gostei\".",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "subtema": "Execução Trabalhista",
    "resumoSimples": "É a etapa em que, depois que o juiz já decidiu que o empregado tem razão, alguém garante que o patrão realmente cumpra e pague o que deve. Serve justamente porque não adianta ganhar a briga no papel se, na prática, ninguém obriga o patrão a cumprir. Primeiro é feita uma conta certinha de quanto é devido, e o patrão é chamado a pagar; se ele não pagar sozinho, o juiz pode mandar tomar dinheiro ou bens dele até completar o valor. É a fase que transforma a decisão de \"você tem razão\" em dinheiro de verdade no bolso de quem trabalhou.",
    "exemplo": "Imagina que o juiz já disse: \"o patrão tem que devolver o brinquedo que pegou emprestado e não devolveu\". Na execução, primeiro alguém confere direitinho quantos brinquedos faltam devolver. Se ele ainda não devolveu sozinho, alguém vai lá, pega os brinquedos (ou troca por outros do mesmo valor) e entrega pra quem tinha razão. Só quando o brinquedo chega mesmo na mão do dono é que a história termina de verdade.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "subtema": "Dissídios Coletivos",
    "resumoSimples": "É quando um grupo inteiro de trabalhadores e as empresas não conseguem se entender sobre as regras de trabalho, mesmo depois de conversar bastante, e por isso pedem pra um juiz decidir de uma vez a regra que vai valer pra todo o grupo. Isso é diferente de uma briga individual, porque aqui a decisão não afeta só uma pessoa, afeta todos os trabalhadores daquela categoria de uma vez só. Essa ferramenta existe justamente pra destravar situações em que a negociação direta emperrou e ninguém consegue avançar sozinho. Assim, em vez de cada trabalhador brigar separado pela mesma coisa, o assunto é resolvido de uma vez, com uma regra única pra todo mundo daquele grupo.",
    "exemplo": "Imagina que a turma toda quer mudar uma regra do recreio, tipo aumentar o tempo de brincar, mas a diretoria não concorda de jeito nenhum, mesmo depois de várias conversas. Em vez de cada aluno reclamar sozinho, sem chegar a lugar nenhum, a turma toda se junta e pede pra uma autoridade acima da diretoria decidir a regra nova que vai valer pra todo mundo daquele grupo de uma vez.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Inquérito Policial e Investigação",
    "resumoSimples": "É a fase em que a polícia investiga pra descobrir o que aconteceu e quem fez, antes mesmo de o caso chegar pro juiz. É só uma pesquisa, uma coleta de pistas, provas e informações - ninguém é considerado culpado ainda nessa hora, porque essa fase serve só pra reunir elementos, não pra julgar. Essa etapa existe porque, sem investigar direito primeiro, seria muito difícil saber se realmente aconteceu algo errado e quem pode ter feito. Depois que a polícia termina de juntar as pistas, ela manda tudo pronto pro Ministério Público, que é quem vai decidir o que fazer com essas informações a partir dali.",
    "exemplo": "Imagina que sumiu um brinquedo na sala de aula e ninguém sabe quem pegou. Antes de contar pra diretora quem foi, a professora primeiro pergunta pra todo mundo, olha as pistas, como quem estava perto da estante, e junta as informações com calma, sem apontar ninguém ainda. Só depois de ter tudo organizado é que ela entrega pronto pra diretora decidir o que fazer - isso é o inquérito, juntar pistas com cuidado antes de qualquer decisão ser tomada.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Ação Penal",
    "resumoSimples": "É o momento em que alguém pede formalmente pro juiz olhar o caso e decidir se a pessoa realmente fez aquilo, porque o juiz não pode simplesmente começar a julgar por conta própria, sem ninguém pedir. Às vezes quem faz esse pedido é o Ministério Público, que existe justamente pra defender as regras em nome de todo mundo, e às vezes é a própria vítima quem precisa pedir, dependendo do tipo de caso. Sem esse pedido formal, o processo nem começa, porque é ele que dá o start pra tudo o que vem depois. Essa exigência existe pra que o julgamento não comece do nada, sem ninguém assumindo a responsabilidade de levar o caso adiante.",
    "exemplo": "Imagina que alguém quebrou de propósito o brinquedo do coleguinha. Pra resolver isso do jeito certo, alguém precisa ir até a diretora e pedir formalmente: \"por favor, olha esse caso e decide o que aconteceu\". Só depois desse pedido é que a diretora pode analisar as informações e decidir alguma coisa - sem o pedido, mesmo sabendo que algo errado aconteceu, ela não começaria a agir sozinha.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Provas no Processo Penal",
    "resumoSimples": "São as coisas que mostram o que realmente aconteceu, tipo pistas encontradas no local, testemunhas que viram tudo e documentos que registram informações importantes. Só valem as provas conseguidas do jeito certo, seguindo as regras combinadas - uma prova pega de forma errada, invadindo a privacidade de alguém sem autorização, por exemplo, não pode ser usada, mesmo que mostre algo verdadeiro. Além disso, quem acusa alguém de ter feito algo errado precisa mostrar provas de verdade, sólidas, não pode ser só uma suspeita ou um achismo sem nada que comprove. Essas regras existem pra proteger todo mundo de ser julgado injustamente, com base em coisas que não foram verificadas direito.",
    "exemplo": "Imagina uma investigação de quem comeu o biscoito escondido da despensa. Vale contar o que alguém viu de verdade, tipo enxergar a pessoa comendo, ou achar migalhas grudadas no bolso do suspeito. Mas não vale espiar escondido dentro da mochila do coleguinha sem pedir licença pra descobrir isso - mesmo que ache o biscoito lá dentro, essa prova pega de jeito errado não pode ser usada pra acusar ninguém.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Prisões e Medidas Cautelares",
    "resumoSimples": "São jeitos de proteger o processo enquanto ele ainda não termina, tipo prender alguém antes mesmo do julgamento acontecer, mas isso só pode ser usado quando é realmente necessário, nunca por qualquer motivo pequeno. Não é o castigo final ainda, é uma forma de garantir que a pessoa não fuja, não atrapalhe as investigações ou não faça de novo algo parecido enquanto tudo é resolvido com calma. Além da prisão, também existem opções bem mais leves pra situações que não precisam de algo tão forte, como usar uma tornozeleira eletrônica ou ter que se apresentar de tempos em tempos, sem precisar ficar preso. A escolha entre essas opções depende de quanto risco realmente existe naquele caso específico.",
    "exemplo": "Imagina um aluno que vive aprontando confusão e que pode fugir da escola no meio do recreio se ninguém ficar de olho. Enquanto a diretora não decide qual vai ser o castigo final, ela pede pra ele ficar sempre perto da inspetora, só pra garantir que nada de errado aconteça antes da decisão. Não é o castigo definitivo, é só uma forma de manter tudo sob controle - e se o risco fosse bem menor, talvez bastasse pedir pra ele avisar a inspetora antes de sair da sala, sem precisar ficar vigiado o tempo todo.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Procedimentos (comum e júri)",
    "resumoSimples": "É o caminho de passos que o processo segue até chegar numa decisão final, porque cada tipo de caso precisa de um jeito de organizar as etapas até o julgamento. O caminho comum serve pra maioria dos casos, e nele o juiz analisa tudo e decide sozinho, seguindo os passos normais. Já o júri é usado especificamente pros crimes mais graves contra a vida, e nesse caminho diferente quem decide não é só o juiz - é um grupo de pessoas comuns, escolhidas do meio da população, que ouvem tudo e ajudam a decidir junto. Essa diferença existe porque, pra certos casos muito graves, entende-se que a decisão deve envolver também a visão da própria sociedade, não só de um juiz.",
    "exemplo": "Imagina duas filas diferentes na escola pra resolver problemas: numa fila normal, a inspetora ouve tudo e resolve sozinha, seguindo os passos de sempre. Numa fila especial, reservada só pras brigas muito grandes e graves, vários alunos escolhidos pela turma se juntam pra ouvir o caso e ajudar a decidir junto com a diretora, porque ali a decisão é importante demais pra ficar só na mão de uma pessoa.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Recursos Penais",
    "resumoSimples": "É quando alguém não concorda com a decisão do juiz e pede formalmente pra outro juiz, numa posição mais alta e mais experiente, olhar o caso de novo com calma. Isso serve pra corrigir possíveis erros que possam ter acontecido na primeira decisão, dando mais uma chance de revisão antes de tudo virar definitivo. Não pode ser usado só porque a pessoa não gostou do resultado ou achou ruim por qualquer motivo, precisa ter um motivo de verdade, apontando o que especificamente pode ter saído errado. Esse segundo olhar existe porque juízes também podem errar, e é importante ter uma chance de revisar antes de fechar o assunto de vez.",
    "exemplo": "Imagina que a professora corrigiu uma prova de um jeito que o aluno acha errado, tirando pontos que ele acredita que estavam certos. Ele pode pedir pra coordenadora, que está numa posição acima da professora, olhar a prova de novo, explicando exatamente qual questão acha que foi corrigida errado - mas ele precisa apontar o motivo certo, não pode só dizer \"não gostei da nota\".",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Execução Penal",
    "resumoSimples": "É a fase depois que o juiz já decidiu e o processo terminou, quando a pessoa precisa realmente cumprir o castigo definido, tipo ficar presa por um tempo ou fazer serviço comunitário. Nessa fase, já não se discute mais se a pessoa é culpada ou não, porque isso já foi decidido antes - agora é só a hora de cumprir o que foi combinado. Ainda assim, existem regras pra cuidar de como esse cumprimento acontece, garantindo que seja feito de forma correta e organizada. E a pessoa ainda pode ganhar benefícios ao longo do caminho se se comportar bem, como sair mais cedo ou ter regras mais leves, porque o bom comportamento também conta nessa fase.",
    "exemplo": "Imagina que um aluno foi proibido de jogar bola no recreio por uma semana inteira, porque quebrou uma regra importante da escola. Agora não dá mais pra ficar discutindo se ele fez ou não - isso já ficou decidido, ele só precisa cumprir o castigo combinado. Mas se ele se comportar super bem durante esses dias, ajudando os colegas e seguindo as regras direitinho, pode até ganhar um dia a menos de castigo, porque o esforço dele também é levado em conta.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Nulidades",
    "resumoSimples": "É quando alguma parte do processo foi feita errado, sem seguir as regras importantes que deveriam ter sido respeitadas, e por causa disso aquela parte não pode valer do jeito que foi feita. Nem todo erro é igual: tem erro pequeno, que não muda muita coisa e pode ser corrigido sem grandes problemas, e tem erro grande, que atinge algo essencial e por isso faz aquela parte, ou até o processo inteiro, ter que ser refeita do zero. Essa distinção existe porque seria exagerado jogar tudo fora por qualquer deslize pequeno, mas também seria injusto deixar passar um erro que realmente prejudicou alguém de forma séria. No fim, essas regras servem pra garantir que ninguém seja julgado de um jeito injusto, mesmo que isso signifique refazer parte do caminho.",
    "exemplo": "Imagina um jogo de tabuleiro em que alguém trapaceou numa rodada importante, jogando fora da vez e decidindo sozinho quem ganhou, sem deixar os outros jogarem direito. Se a trapaça for grande o bastante pra mudar o resultado do jogo, essa rodada inteira não vale e precisa ser jogada de novo, do jeito certo - mas se fosse só um errinho pequeno, tipo esquecer de contar uma casinha, dava pra corrigir na hora sem precisar refazer tudo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Vícios do Consentimento",
    "resumoSimples": "Um acordo só vale de verdade quando as duas pessoas dizem \"sim\" porque realmente quiseram, sabendo direito o que estavam fazendo e sem ninguém empurrando ou enganando ninguém. Às vezes, porém, esse \"sim\" sai torto: a pessoa pode ter se enganado sozinha sobre algo importante (erro), pode ter sido enganada de propósito por outra pessoa (dolo), pode ter sido ameaçada até aceitar com medo (coação), pode ter fechado um negócio muito ruim porque alguém se aproveitou da pressa ou da necessidade dela (lesão), ou pode ter aceitado algo péssimo só para escapar de um perigo grande, como salvar a própria vida ou a de alguém (estado de perigo). Em todos esses casos o problema não é o papel assinado, é a vontade por trás dele: ela não nasceu livre e limpa. Por isso a lei permite desfazer esse acordo depois, porque proteger a vontade verdadeira das pessoas é mais importante do que manter de pé um combinado que nasceu torto.",
    "exemplo": "Imagina que um coleguinha te convence a trocar seu carrinho novo por uma pedra pintada de dourado, dizendo que é ouro de verdade - se você descobre depois que era mentira, dá pra desfazer a troca, porque você só topou porque foi enganado. Diferente seria se ele simplesmente tivesse um carrinho mais bonito e você quisesse trocar por vontade própria: aí vale, porque ninguém mentiu nem obrigou ninguém.",
    "seedVersion": 3
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Posse e Usucapião",
    "resumoSimples": "Ter posse de uma coisa é diferente de ser dono dela no papel: posse é usar, cuidar e agir como se fosse seu no dia a dia, mesmo sem nenhum documento provando isso. Já a propriedade é o título oficial, reconhecido por lei, que diz quem é o dono de verdade. A lei presta atenção nessa diferença porque, às vezes, o dono de papel abandona a coisa por muito tempo, enquanto outra pessoa cuida dela, usa e trata como sua, na frente de todo mundo, sem esconder nada e sem brigar com ninguém por isso. Quando isso acontece durante um tempo bem longo, de um jeito calmo e público, a lei entende que seria injusto manter o título com quem nunca mais apareceu, e transforma quem cuidou de verdade no novo dono oficial. Isso se chama usucapião, e existe para premiar quem dá uso real às coisas e não deixar tudo parado só porque um papel antigo diz outra coisa.",
    "exemplo": "Pensa numa bicicleta velha, largada num canto do quintal, que ninguém mais busca. Um menino começa a consertar ela, anda com ela toda semana, na frente dos vizinhos, sem esconder de ninguém, ano após ano. Depois de muito tempo cuidando dela sozinho e abertamente, é justo dizer que a bicicleta virou dele de verdade - mesmo que, no começo, o dono fosse outra pessoa que nunca mais apareceu.",
    "seedVersion": 3
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Homicídio Qualificado e Feminicídio",
    "resumoSimples": "Quando uma pessoa tira a vida de outra, a lei não trata todo caso do mesmo jeito: ela olha com muito cuidado o motivo e a forma como aquilo aconteceu, porque isso muda o quanto aquele ato é grave. Se o motivo foi mesquinho, como fazer por dinheiro ou por um motivo bobo demais para justificar algo tão sério, ou se o jeito de fazer foi especialmente cruel, traiçoeiro ou colocou outras pessoas em risco, a lei considera esse homicídio qualificado - um caso mais grave, com punição bem mais pesada. Existe também uma qualificadora específica, o feminicídio, para quando uma mulher é morta justamente por ser mulher, dentro de uma relação de violência doméstica, familiar ou de desprezo pela condição feminina. Ela foi criada porque esse tipo de crime tem uma raiz e um padrão diferentes dos outros, ligados a uma história de controle e desigualdade que a lei quer combater de um jeito mais forte. Então, quanto mais torpe for o motivo ou mais cruel for o jeito, e quando a violência tem essa raiz de gênero, mais duro é o peso da lei.",
    "exemplo": "Pensa num jogo com juiz: se um jogador esbarra sem querer no outro, o juiz dá uma falta simples. Mas se ele empurra de propósito, escondido, pelas costas, e só pra prejudicar sem motivo nenhum, o juiz aplica um castigo bem mais pesado, porque o tanto de maldade e o jeito como foi feito pesam na hora da punição. É esse mesmo raciocínio - motivo e forma mudando o tamanho da punição - que a lei usa para separar um homicídio comum de um qualificado, e para dar uma atenção especial quando a violência acontece só porque a vítima é mulher.",
    "seedVersion": 3
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Furto, Roubo e Latrocínio",
    "resumoSimples": "Furto, roubo e latrocínio são três jeitos diferentes de tirar uma coisa que não é sua, e a lei separa eles pelo tanto de violência envolvida. No furto, a pessoa leva o objeto escondido, sem ninguém perceber e sem usar força ou ameaça contra ninguém - é como um sumiço silencioso. No roubo, ela usa violência física ou ameaça grave para forçar a vítima a entregar a coisa, então além de perder o objeto a vítima passa medo ou é machucada. Já o latrocínio é o caso mais grave de todos: é um roubo em que a vítima acaba morrendo por causa da violência usada. A lei pune cada um de um jeito bem diferente porque não é só a coisa perdida que importa, e sim o quanto a segurança e a vida da vítima foram colocadas em risco durante aquilo.",
    "exemplo": "Imagina três formas de sumir com um brinquedo: uma criança pega escondido enquanto ninguém olha e some (furto); outra empurra o coleguinha e arranca o brinquedo da mão dele à força, deixando ele assustado (roubo); e, num caso extremo e triste, imagina que durante esse empurrão alguém se machuca muito gravemente e não resiste - aí a gravidade é bem maior, porque não se perdeu só o brinquedo, se perdeu uma vida (latrocínio).",
    "seedVersion": 3
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Atributos e Extinção dos Atos Administrativos",
    "resumoSimples": "Quando o governo faz alguma coisa - tipo proibir um carro de passar numa rua ou multar alguém - esse \"fazer alguma coisa\" se chama ato administrativo, e ele tem características especiais que o diferenciam de um pedido de pessoa comum. Primeiro, todo mundo já acredita que aquele ato está certo até que se prove o contrário, porque senão nada nunca funcionaria direito. Segundo, às vezes o próprio governo consegue fazer a coisa acontecer sozinho, sem precisar pedir autorização de um juiz, tipo apreender um produto vencido na hora. Terceiro, esse ato manda mesmo, obrigando as pessoas a obedecerem, quer elas queiram ou não. E quarto, cada tipo de ato só serve pra aquilo que já foi determinado antes, não dá pra inventar um novo na hora. Só que nenhum ato dura pra sempre: ele pode ser retirado porque deixou de ser conveniente, porque nasceu errado desde o começo, porque quem ganhou um benefício descumpriu uma condição combinada, ou porque uma mudança de regras tornou aquela situação incompatível com o presente.",
    "exemplo": "Imagina que a diretora da escola pendura um aviso na parede dizendo \"hoje o recreio termina às 10h\". Todo mundo já obedece na hora, sem precisar checar se é verdade, porque o aviso da diretora já vale por si só. Se um aluno insistir em ficar brincando depois da hora, ela mesma pode tocar o sinal e mandar todo mundo entrar, sem chamar ninguém pra autorizar. Mas se depois ela perceber que colocou o aviso por engano, ou resolver mudar de ideia porque surgiu uma novidade, ela pode tirar aquele aviso da parede - é bem parecido com o que acontece quando um ato do governo deixa de valer.",
    "seedVersion": 3
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Modalidades e Fases da Licitação",
    "resumoSimples": "Quando o governo precisa comprar alguma coisa, tipo canetas pra escola ou construir uma ponte, ele não pode simplesmente escolher a empresa que quiser - ele precisa organizar uma espécie de disputa entre várias empresas, chamada licitação, pra escolher quem oferece o melhor negócio. Existem formatos diferentes pra essa disputa, dependendo do que está sendo comprado: um mais rápido e simples pra coisas do dia a dia, outro mais robusto pra obras grandes e caras, um específico pra escolher ideias e projetos criativos, e até um pra vender coisas que o governo não precisa mais. Além de escolher o formato certo, existe também uma ordem de passos que precisa ser seguida sempre: primeiro o governo se organiza e decide exatamente o que quer, depois avisa a todos sobre a disputa, em seguida as empresas mandam suas propostas, o governo compara e escolhe a melhor, confere se a empresa escolhida realmente tem condições de cumprir o combinado, dá um tempo pra quem perdeu poder reclamar se achar injusto, e só no fim confirma que está tudo certo pra fechar negócio. Essa ordem existe justamente pra garantir que a escolha seja justa e que ninguém saia beneficiado por atalhos.",
    "exemplo": "Imagina uma gincana na escola pra decidir quem vai fazer o mural da sala. Primeiro a professora decide o que quer no mural e escreve as regras. Depois ela avisa todos os alunos que podem participar. Cada interessado entrega o seu desenho de proposta. A professora olha todos os desenhos e escolhe o que achou melhor. Antes de confirmar, ela checa se aquele aluno realmente tem os lápis de cor e o tempo pra terminar o trabalho. Se algum coleguinha achar a escolha injusta, ele pode levantar a mão e reclamar antes de virar definitivo. Só depois disso a professora anuncia oficialmente quem vai pintar o mural.",
    "seedVersion": 3
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Tutela de Evidência",
    "resumoSimples": "Às vezes, numa ação na Justiça, a pessoa precisa de uma resposta rápida do juiz antes do processo terminar todo, porque esperar até o fim demoraria demais. Só que a tutela de evidência é diferente de pedir \"socorro, isso não pode esperar\": ela serve pra quando o direito da pessoa já está tão bem demonstrado, tão claro, que não faz sentido obrigá-la a esperar o processo inteiro só pra confirmar o óbvio. Ou seja, aqui não importa se existe perigo ou urgência: o que importa é que as provas já deixam quase certo que a pessoa tem razão. Isso acontece, por exemplo, quando a outra parte está claramente enrolando o processo, ou quando existe um documento tão forte que praticamente já resolve a discussão sozinho, ou quando tribunais já decidiram casos iguais antes. Por isso o juiz pode adiantar a decisão sem esperar o fim de tudo, porque insistir em esperar seria só perda de tempo diante de algo tão evidente.",
    "exemplo": "Imagina uma prova de matemática em que um aluno mostra a continha toda certinha, com todos os cálculos corretos, mas o professor só vai fechar as notas no fim do bimestre. Se já está óbvio que a resposta está certa, não faz sentido o aluno ficar esperando o bimestre inteiro pra ouvir isso - o professor pode confirmar ali mesmo que ele acertou, sem precisar aguardar mais nada, porque a prova já fala por si só.",
    "seedVersion": 3
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Recursos Especial e Extraordinário",
    "resumoSimples": "Quando alguém perde um processo e acha que o tribunal errou, existem cartas especiais que podem ser enviadas a tribunais ainda mais altos pedindo uma revisão - mas cada carta só serve pra um tipo de erro específico. Uma delas vai pro tribunal superior que cuida de garantir que as leis federais comuns sejam aplicadas do mesmo jeito em todo o país; ela só serve se o erro foi não seguir direito uma lei federal. A outra vai pro tribunal mais alto de todos, guardião da Constituição; ela só serve se o problema foi desrespeitar alguma regra da própria Constituição, a base de tudo. E pra essa segunda carta ser aceita, não basta o caso ser importante só pra quem está brigando - precisa ser um assunto relevante pra muita gente, capaz de servir de exemplo pra outros casos parecidos no país inteiro, senão o tribunal mais alto nem entra no mérito.",
    "exemplo": "Pensa em duas caixinhas de reclamação na escola: uma vai direto pra coordenação, que cuida das regras gerais que valem pra escola inteira, e serve só se alguém descumpriu uma dessas regras. A outra vai direto pra diretoria máxima, que só recebe reclamação sobre o próprio estatuto da escola, aquele documento mais importante de todos que define os princípios básicos. E a diretoria só abre essa segunda caixinha se o problema for tão importante que vai servir de exemplo pra decidir casos parecidos de outras salas também, não só pra resolver a briga de um aluno sozinho.",
    "seedVersion": 3
  },
  {
    "territorio": "Direito do Trabalho",
    "subtema": "Horas Extras e Banco de Horas",
    "resumoSimples": "Quando alguém trabalha além do horário combinado, esse tempo a mais vale mais caro, porque está tirando o descanso, o sono ou o tempo de família da pessoa. Por isso a lei diz que a hora extra tem que ser paga com um adicional de pelo menos 50% em cima da hora normal. Também existe um limite de até 2 horas extras por dia, porque ninguém pode trabalhar sem parar sem que isso faça mal pra saúde. Em vez de pagar em dinheiro toda vez, a empresa pode guardar essas horas numa espécie de cofrinho chamado banco de horas, e depois dar um dia de folga no lugar do pagamento. Essa troca só é válida se for combinada direito e se as horas guardadas forem realmente usadas como descanso depois. A ideia por trás de tudo isso é proteger o tempo de descanso do trabalhador, sem deixar de reconhecer o esforço extra que ele fez.",
    "exemplo": "É como quando você ajuda a arrumar a casa depois da hora de dormir: como isso tira o seu sono, seus pais te dão um agrado maior por esse esforço extra, tipo mais figurinhas do que o normal. E, em vez de ganhar as figurinhas na hora, dá pra combinar de guardar esse esforço num cofrinho e trocar depois por uma tarde inteira de folga pra brincar, sem fazer tarefa nenhuma.",
    "seedVersion": 3
  },
  {
    "territorio": "Direito do Trabalho",
    "subtema": "13º Salário e Férias",
    "resumoSimples": "O 13º salário é como um presente de fim de ano que todo trabalhador ganha por ter trabalhado durante o ano, e ele é pago em duas partes, uma na primeira metade e outra na segunda metade do ano. Só que esse presente é proporcional: quem trabalhou o ano inteiro ganha o valor completo, e quem trabalhou só alguns meses ganha só a fatia referente aos meses trabalhados. Já as férias são um período de descanso de até 30 dias por ano, e durante esse descanso a pessoa ainda ganha um dinheiro extra, chamado de terço de férias, exatamente pra ela poder aproveitar de verdade esse tempo livre, viajando ou descansando com mais tranquilidade. Existe até a possibilidade de trocar parte desse descanso por dinheiro: a pessoa pode vender até um terço dos dias de férias e continuar trabalhando nesse período, recebendo o valor correspondente em vez do descanso. Essas regras existem pra garantir que ninguém trabalhe o ano inteiro sem parar e sem ser recompensado por isso.",
    "exemplo": "Pensa numa criança que ganha uma moedinha de recompensa a cada mês que ajuda em casa direitinho. No fim do ano, ela recebe todas as moedinhas juntas, divididas em duas entregas, e só ganha a quantidade cheia se ajudou o ano inteiro. As férias são como um mês de recesso escolar garantido, em que, além de descansar, ela ainda ganha um mimo a mais só por estar de folga, e pode até escolher trocar uma parte desse recesso por um brinde, continuando a ajudar um pouquinho naqueles dias.",
    "seedVersion": 3
  },
  {
    "territorio": "Direito Empresarial",
    "subtema": "Sociedade Limitada",
    "resumoSimples": "Quando um grupo de pessoas resolve abrir um negócio junto, uma das formas mais usadas no Brasil é a sociedade limitada, porque ela protege o bolso pessoal de cada sócio. Isso quer dizer que, se o negócio der errado e ficar devendo, em regra quem cobra essa dívida só pode ir atrás do dinheiro que foi colocado na empresa, e não da casa, do carro ou da poupança pessoal de cada sócio. Mas tem um detalhe importante: todos os sócios prometeram entrar com uma parte do dinheiro inicial, chamado capital social, e enquanto essa promessa não for cumprida por completo, todos respondem juntos por essa falta, mesmo que não tenha sido o sócio errado quem deixou de pagar. Ou seja, a proteção existe, mas só funciona de verdade quando todo mundo cumpriu a sua parte combinada lá no início.",
    "exemplo": "Imagina um grupo de amigos que combina montar uma barraquinha de limonada, e cada um promete trazer uma moeda pra comprar limão e copinhos. Se a barraquinha quebrar tudo e ficar devendo, só o dinheiro que foi colocado na barraquinha se perde, ninguém precisa quebrar o próprio cofrinho lá de casa. Mas se um dos amigos esqueceu de trazer a moeda que prometeu, os outros vão ter que completar essa falta juntos, porque a promessa inicial precisa ser cumprida por todo mundo.",
    "seedVersion": 3
  },
  {
    "territorio": "Direito Empresarial",
    "subtema": "Classes de Credores na Recuperação Judicial",
    "resumoSimples": "Quando uma empresa está com muita dívida e pede um plano especial pra Justiça, chamado recuperação judicial, pra tentar se reorganizar e não fechar as portas, ela precisa combinar com quem tem dinheiro a receber dela como e quando vai pagar. Só que nem todo credor está na mesma situação: tem os trabalhadores, que precisam receber logo porque contavam com aquele dinheiro pra viver; tem quem emprestou dinheiro com uma garantia forte, como um bem preso àquela dívida; tem os credores comuns, sem garantia especial; e tem as empresas pequenas, que muitas vezes não aguentam esperar muito tempo pra receber. Por isso a lei separa esses credores em grupos diferentes, chamados classes, e o plano de pagamento só é aprovado se conseguir a concordância da maioria dentro de cada grupo, e não só da maioria geral. Isso existe pra proteger os grupos menores ou mais frágeis, evitando que um grupo grande e forte imponha sozinho as condições de pagamento pra todo mundo.",
    "exemplo": "É como se a turma da escola precisasse decidir junto como dividir um lanche que sobrou, mas em vez de decidir tudo numa votação geral, cada mesinha da sala vota separado sobre a sua parte: a mesinha de quem está com mais fome vota uma coisa, a mesinha de quem trouxe lanche de casa vota outra. Assim, a mesinha maior não consegue decidir sozinha por todo mundo, e cada grupo tem sua própria voz garantida na hora de aceitar o combinado.",
    "seedVersion": 3
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "ICMS e ISS na Prática",
    "resumoSimples": "Quando alguém compra um produto numa loja ou contrata um serviço, geralmente tem um imposto embutido nesse preço, mas nem todo imposto é igual: um é cobrado pelo Estado, outro pela Prefeitura. O ICMS é o imposto que o Estado cobra quando uma mercadoria \"anda\" de um lugar pra outro, tipo de uma fábrica pra loja, ou é vendida pro cliente final. Já o ISS é o imposto que a Prefeitura cobra quando alguém presta um serviço, tipo um cabeleireiro cortando cabelo ou um mecânico consertando carro. Essa separação existe porque produto e serviço são coisas diferentes, e cada nível de governo cuida de um tipo de \"movimento econômico\" que acontece dentro do seu território. Assim, ninguém paga os dois impostos ao mesmo tempo pela mesma coisa: ou é mercadoria circulando, e aí é ICMS, ou é serviço sendo prestado, e aí é ISS.",
    "exemplo": "Imagina uma barraquinha de sorvete: quando ela compra os potes de sorvete pra revender, isso é tipo o ICMS, o imposto que anda junto com a mercadoria de um lugar pra outro. Agora, se em vez de vender sorvete pronto alguém contrata a barraquinha só pra decorar um bolo de aniversário, isso é um serviço, e aí é como se fosse o ISS. São dois \"potinhos\" diferentes de imposto, cada um cuidando de uma coisa.",
    "seedVersion": 3
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "Responsabilidade Tributária de Terceiros",
    "resumoSimples": "Às vezes, quem devia pagar um imposto não consegue fazer isso sozinho, ou quem cuidava do dinheiro agiu de um jeito errado, então a lei diz que outra pessoa pode ter que responder por essa dívida. Isso existe porque tem gente que cuida de bens ou dinheiro de outra pessoa, como pais cuidando dos filhos pequenos, tutores cuidando de quem eles representam, ou administradores cuidando do dinheiro de uma empresa, e essa responsabilidade de cuidar bem vem junto com a responsabilidade de pagar os tributos direitinho. Se essa pessoa que devia cuidar for descuidada, ou pior, usar essa posição pra fazer coisa errada, ela pode ter que pagar o imposto no lugar de quem deveria pagar originalmente. A ideia central é que quem tem o poder de decidir sobre o dinheiro ou os bens de alguém também carrega o dever de fazer isso com responsabilidade, inclusive na hora de acertar as contas com o fisco.",
    "exemplo": "É como quando a mamãe guarda a mesada do filho pequeno num potinho pra pagar alguma coisa importante depois, tipo a taxa da festa da escola. Se a mamãe gastar esse dinheiro com outra coisa e a taxa não for paga, quem vai ter que resolver isso é ela, porque era ela quem estava cuidando do potinho, não a criança.",
    "seedVersion": 3
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Medidas Cautelares Diversas da Prisão",
    "resumoSimples": "Quando alguém está sendo investigado ou processado por um crime, às vezes é preciso garantir que essa pessoa não vai fugir, atrapalhar a investigação ou continuar fazendo coisa errada, mas prender ela na cadeia pode ser um exagero pro caso. Por isso existem outras medidas, mais leves que a prisão, que ajudam a controlar a situação sem tirar a pessoa de casa, como ter que aparecer periodicamente na Justiça pra avisar que está tudo bem, usar uma tornozeleira eletrônica, ser proibida de ir a certos lugares, ou pagar uma fiança. Essas medidas existem porque prender alguém é uma decisão muito grave, que deve ser usada só quando realmente não tem outro jeito de garantir o bom andamento do processo. Assim, o juiz escolhe a medida do tamanho certo pro problema, nem mais nem menos do que o necessário.",
    "exemplo": "É tipo quando uma criança aprontou na escola e a professora, em vez de deixar ela de castigo trancada num quartinho, decide que ela vai ficar sem poder ir ao recreio por uma semana e vai ter que mostrar o caderno todo dia pra diretora. É uma forma de vigiar de perto sem precisar de um castigo tão grande.",
    "seedVersion": 3
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Júri: da Pronúncia ao Plenário",
    "resumoSimples": "Quando alguém é acusado de um crime muito grave, como matar outra pessoa de propósito, o caso não é julgado só por um juiz sozinho, ele passa por duas etapas até chegar num grupo de pessoas comuns que vão decidir. Na primeira etapa, o juiz analisa se existem indícios suficientes pra mandar esse caso pra ser julgado pelo júri popular; se ele achar que sim, isso se chama pronúncia, é como abrir a porta pra passar pra próxima fase. Se o juiz achar que não tem prova nenhuma, ele pode encerrar o caso ali mesmo, sem mandar pro júri, ou até já absolver a pessoa de cara se ficar clara sua inocência. Se as provas mostrarem que o crime na verdade não é do tipo que vai a júri, o juiz muda a classificação e manda o caso pra outro juiz cuidar. Quando o caso realmente vai a julgamento, acontece uma sessão especial, o plenário, onde pessoas comuns da cidade, os jurados, ouvem tudo e depois decidem em segredo se a pessoa é culpada ou não.",
    "exemplo": "É como quando, numa brincadeira de detetive na escola, primeiro a professora dá uma olhada nas pistas pra ver se faz sentido continuar a investigação com a turma toda. Se as pistas forem fracas, ela encerra ali mesmo. Mas se tiverem pistas fortes, ela chama toda a turma pra sentar em roda, ouvir as explicações e, no final, cada criança vota escrevendo num papelzinho se acha que foi aquele coleguinha ou não.",
    "seedVersion": 3
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Remédios Constitucionais (MS, HD, MI, HC)",
    "resumoSimples": "Quando alguém sente que um direito importante está sendo desrespeitado ou ameaçado, a Constituição dá algumas \"ferramentas especiais\" pra essa pessoa correr atrás da Justiça rapidinho, e cada uma serve pra um tipo de problema. Se o problema é a liberdade de ir e vir, tipo alguém sendo preso ou ameaçado de prisão de forma errada, a ferramenta certa é o habeas corpus. Se o direito violado é outro, bem claro e certo, mas não tem a ver nem com liberdade de locomoção nem com acesso a informação, usa-se o mandado de segurança. Quando a pessoa quer saber ou corrigir informações que existem sobre ela guardadas em algum banco de dados, o remédio é o habeas data. E quando um direito previsto na Constituição não pode ser usado na prática porque falta uma lei explicando como aplicá-lo, existe o mandado de injunção, pra cobrar essa solução. Cada remédio funciona como uma chave que serve pra destrancar um tipo específico de porta trancada injustamente.",
    "exemplo": "Pensa numa caixa de ferramentas com quatro chaves diferentes penduradas na parede: uma é só pra destrancar a porta de quando alguém te prende sem razão, essa é o habeas corpus; outra pra resolver qualquer outro probleminha injusto que sobrou, essa é o mandado de segurança; outra pra abrir a gaveta com seus próprios documentos e ver o que escreveram sobre você, essa é o habeas data; e a última pra chamar alguém pra vir consertar o brinquedo que não veio com manual de instrução nenhum, essa é o mandado de injunção. Cada chave só serve pra sua fechadura certa.",
    "seedVersion": 3
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Intervenção Federal e Estadual",
    "resumoSimples": "O Brasil é formado por vários \"pedaços\" que se organizam sozinhos, como a União, os Estados e os Municípios, cada um cuidando da sua parte com autonomia. Mas existem situações muito graves e excepcionais, como uma grave desordem, um risco à integridade do país, ou um desrespeito muito sério às regras básicas, em que esse \"pedaço\" para de conseguir se organizar direito sozinho. Nesses casos raros, a União pode entrar temporariamente pra colocar ordem num Estado, ou um Estado pode fazer isso num Município dentro dele, tomando conta da situação até tudo se normalizar. Essa intervenção existe como um recurso de emergência, não algo do dia a dia, porque tirar a autonomia de um ente federado é uma medida séria que só se justifica quando não sobra outra saída. Depois que o problema é resolvido, a autonomia volta ao normal, como se tivesse sido só \"emprestada\" por um tempo e devolvida em seguida.",
    "exemplo": "É como quando os pais deixam a criança arrumar o próprio quarto sozinha, mas ela some numa bagunça tão grande que nem consegue mais andar lá dentro. Aí os pais entram, ajudam a organizar tudo, e assim que o quarto volta ao normal, devolvem pra criança a tarefa de cuidar dele sozinha de novo.",
    "seedVersion": 3
  },
  {
    "territorio": "Ética",
    "subtema": "Sigilo Profissional e Inviolabilidade",
    "resumoSimples": "É o dever que o advogado tem de guardar segredo sobre tudo que ele fica sabendo por causa da profissão, mesmo coisas bem delicadas que o cliente contou pra ele em confiança. Isso existe porque, pra se defender direito, o cliente precisa contar a verdade inteira pro advogado, até os pedaços ruins - e ninguém conta isso se tiver medo de que vá parar na boca do mundo. Por causa desse mesmo motivo, o escritório do advogado, seus papéis e suas comunicações ligadas ao trabalho são invioláveis: ninguém pode simplesmente entrar lá e vasculhar tudo, porque isso quebraria a confiança que sustenta a profissão inteira. No fim das contas, essa proteção não é um privilégio do advogado, é uma garantia pro cliente.",
    "exemplo": "Imagina que você conta um segredo pro seu melhor amigo, tipo que quebrou o vaso da vovó sem querer. Se ele sair contando pra todo mundo, você nunca mais vai confiar nele pra contar nada. Com o advogado é igual: se ele pudesse espalhar os segredos do cliente, ninguém contaria a verdade toda pra ele, e aí ele não conseguiria ajudar direito. Por isso o escritório dele funciona como uma caixinha de segredos que ninguém de fora pode abrir.",
    "seedVersion": 4
  },
  {
    "territorio": "Ética",
    "subtema": "Processo Disciplinar na OAB",
    "resumoSimples": "Quando alguém acha que um advogado cometeu uma falta ética, não dá pra simplesmente puni-lo de cara - existe um caminho organizado pra apurar isso com cuidado. Primeiro alguém faz uma reclamação formal, contando o que achou que aconteceu. Depois, o advogado acusado tem direito de se explicar e se defender antes de qualquer decisão. Só então um grupo de advogados mais experientes, o Tribunal de Ética, analisa os dois lados e decide se realmente houve erro e o que fazer a respeito. Essa ordem existe porque toda pessoa acusada de algo merece a chance de contar sua versão antes de ser julgada - ninguém pode ser condenado sem antes poder se explicar.",
    "exemplo": "É como quando dois irmãos brigam e a mãe não sai distribuindo castigo na hora. Primeiro ela escuta quem reclamou, depois escuta o lado do outro irmão, e só depois de ouvir os dois é que decide se vai ter castigo e qual vai ser. Ninguém fica de castigo sem antes poder contar o que realmente aconteceu.",
    "seedVersion": 4
  },
  {
    "territorio": "Ética",
    "subtema": "Estrutura da OAB (Federal, Seccional, Subseção)",
    "resumoSimples": "A OAB é organizada em camadas, parecido com bonecas russas que ficam uma dentro da outra. Lá no topo fica o Conselho Federal, que cuida das regras gerais que valem pra todo o Brasil. Em cada estado existe um Conselho Seccional, responsável pelos advogados daquele estado especificamente. E dentro dos estados, em cidades ou regiões, ficam as Subseções, que resolvem os assuntos mais do dia a dia, bem mais pertinho de cada advogado. Essa divisão existe porque o Brasil é enorme, e seria impossível uma sede só em Brasília dar conta de resolver tudo de todo mundo - por isso cada nível cuida do tamanho de problema que faz sentido pra ele.",
    "exemplo": "Pensa numa rede de escolas espalhada pelo país: existe uma diretoria geral que define as regras pra todas as escolas (Conselho Federal), a diretoria de cada escola da cidade que cuida do que é daquela escola (Seccional), e a coordenação de cada turma que resolve o dia a dia da sala (Subseção). A coordenadora não precisa incomodar a diretoria geral pra resolver uma briguinha de sala de aula.",
    "seedVersion": 4
  },
  {
    "territorio": "Ética",
    "subtema": "Postulação e Atividades Privativas",
    "resumoSimples": "Existem coisas na Justiça que só o advogado pode fazer em nome de outra pessoa, como entrar com uma ação em juízo ou dar uma orientação jurídica formal. Isso existe pra proteger quem precisa de ajuda: o Direito é cheio de prazo, regra técnica e detalhe que um erro pode prejudicar bastante quem está se defendendo, então só quem estudou e tem habilitação pode assumir essa responsabilidade pelos outros. Só que existem exceções pra situações urgentes e simples, como pedir a soltura de alguém preso de forma injusta através de um habeas corpus: nesse caso qualquer pessoa pode fazer sozinha, sem precisar de advogado, porque a urgência de proteger a liberdade é mais importante do que a exigência técnica.",
    "exemplo": "É como pilotar um avião cheio de passageiros - só quem tem carteira de piloto pode fazer isso, porque um erro pode ser perigoso pra muita gente. Mas se alguém está se afogando na piscina, qualquer pessoa pode pular pra ajudar, mesmo sem ser salva-vidas profissional, porque a urgência de salvar uma vida vale mais do que a regra normal.",
    "seedVersion": 4
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Repartição de Competências Federativas",
    "resumoSimples": "O Brasil é organizado em governo federal (União), estados e municípios, e a Constituição decide o que cada um deles pode fazer. Algumas coisas só a União pode cuidar sozinha, como as forças armadas ou a moeda do país. Outras ficam também nas mãos dos estados e municípios, porque interessam mais de perto a cada lugar, como o transporte da cidade ou a segurança de um estado. E existem assuntos que todos cuidam juntos, cada um fazendo sua parte, como saúde e educação. Essa divisão existe porque nem tudo precisa ser decidido do mesmo jeito pro país inteiro - assuntos locais ficam melhor resolvidos por quem está mais perto do problema.",
    "exemplo": "É como organizar as tarefas de uma casa grande: o pai cuida das contas mais importantes da casa toda, cada filho cuida da arrumação do próprio quarto, e a limpeza da sala todo mundo ajuda junto. Ninguém faz tudo sozinho, e cada tarefa vai pra quem faz mais sentido cuidar dela.",
    "seedVersion": 4
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "ADI, ADC e ADPF",
    "resumoSimples": "São três jeitos diferentes de perguntar direto pro Supremo Tribunal Federal se algo está de acordo com a Constituição, sem precisar passar por um processo comum na Justiça. A ADI serve pra pedir que uma lei seja considerada inválida porque contraria a Constituição. A ADC é o contrário: serve pra confirmar que uma lei está certinha, quando existe muita dúvida e discussão sobre ela pelo país. Já a ADPF entra quando o problema não é bem sobre uma lei específica, mas sobre um direito fundamental muito importante sendo desrespeitado, sem outro jeito de resolver isso rapidamente. As três existem pra manter a Constituição sempre valendo acima de tudo, resolvendo essas dúvidas de forma direta no tribunal mais alto do país.",
    "exemplo": "Imagina uma competição de jogos com um regulamento oficial. A ADI é tipo reclamar 'essa regra nova que inventaram fere o regulamento, tira ela'. A ADC é tipo perguntar antes 'essa regra que criamos está certinha com o regulamento, pode confirmar?'. E a ADPF é quando o problema não é bem uma regra nova, mas alguém está desrespeitando algo essencial do jogo e só o juiz principal pode resolver.",
    "seedVersion": 4
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Poder Executivo, Legislativo e Judiciário",
    "resumoSimples": "O poder de comandar o país é dividido em três partes, pra ninguém ficar mandando em tudo sozinho. O Executivo (Presidente, governadores, prefeitos) cuida de administrar o país e colocar as leis em prática no dia a dia. O Legislativo (Congresso, Assembleias, Câmaras) é quem cria as leis. E o Judiciário (juízes e tribunais) resolve as brigas e diz quem tem razão quando existe dúvida ou desobediência à lei. Eles são independentes, cada um faz sua parte sem o outro mandar nele, mas ficam de olho uns nos outros e podem corrigir exageros - é o que se chama de freios e contrapesos. Essa divisão existe porque, se uma só pessoa ou grupo tivesse todo esse poder junto, seria fácil abusar dele e ninguém conseguiria impedir.",
    "exemplo": "Pensa numa casa onde um irmão decide as regras, outro fiscaliza se elas estão sendo cumpridas, e o terceiro julga quando tem briga sobre quem desrespeitou a regra. Nenhum dos três manda nos outros dois, mas cada um pode chamar atenção se algum exagerar, assim ninguém vira o mandão da casa sozinho.",
    "seedVersion": 4
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Sanção, Veto e Medida Provisória",
    "resumoSimples": "Depois que o Congresso aprova um projeto de lei, ele segue pro Presidente decidir. Se ele concordar, assina e a lei passa a valer, isso é a sanção. Se ele achar que tem algo errado, pode recusar aquele projeto, inteiro ou só uma parte, isso é o veto, e aí o Congresso pode discutir de novo e até derrubar essa recusa. Só que existem situações urgentes e importantes demais pra esperar todo esse trâmite demorado - nesses casos o Presidente pode criar uma regra que já passa a valer na hora, chamada medida provisória, mas ela é temporária e depois precisa ser confirmada pelo Congresso, senão perde a validade. Esse jeito de funcionar existe pra equilibrar a rapidez que uma emergência exige com o cuidado de sempre ouvir quem representa o povo.",
    "exemplo": "É como quando as crianças da escola votam uma regra nova pro recreio e levam pro diretor aprovar. Se ele gostar, carimba e ela vale (sanção). Se achar ruim, ele devolve dizendo que não pode (veto), e as crianças podem tentar convencer ele de novo. Mas se surge uma emergência, tipo uma torneira quebrada, o diretor pode criar uma regra provisória na hora, e depois explicar pras crianças votarem se aquilo continua valendo ou não.",
    "seedVersion": 4
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Prescrição e Decadência Civil",
    "resumoSimples": "Algumas coisas na vida têm um relógio invisível: se a pessoa não faz alguma coisa dentro de um tempo razoável, ela perde a chance pra sempre. É isso que acontece com a prescrição e a decadência, só que de dois jeitos diferentes. Na prescrição, a pessoa tinha um direito de reclamar de algo, como cobrar uma dívida, mas demorou tanto pra ir atrás disso que a lei diz: agora já não dá mais pra pedir ajuda da Justiça pra isso. Na decadência, é o próprio direito que tinha prazo de validade pra ser usado, tipo um convite que só vale até certo dia - se a pessoa não usa aquele direito dentro do prazo, ele simplesmente desaparece, mesmo sem ninguém ter feito nada de errado. A lei cria esses prazos porque não seria justo deixar todo mundo esperando pra sempre, sem saber se alguém vai aparecer reclamando de um problema antigo. Passado tempo suficiente, as provas vão sumindo, os detalhes vão sendo esquecidos, e é preciso um ponto final pra dar estabilidade pra vida de todo mundo.",
    "exemplo": "Pensa num vale-brinquedo que veio de brinde numa caixa de cereal, escrito bem grande: troque até o dia 30. Se a criança não for buscar o brinquedo até essa data, o vale perde a validade e o direito de trocar acaba - isso é como a decadência. Agora pensa numa outra criança que emprestou um brinquedo pro coleguinha e não pediu de volta por anos e anos, deixando o tempo passar sem falar nada; quando finalmente for cobrar, pode ser tarde demais pra reclamar com a professora, porque ela demorou demais pra agir - isso é como a prescrição.",
    "seedVersion": 4
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Boa-Fé Objetiva e Revisão Contratual",
    "resumoSimples": "Quando duas pessoas fazem um combinado, elas não prometem só cumprir a letra exata do que foi dito - elas também prometem se tratar com lealdade, contando a verdade, ajudando uma a outra e não pregando peças escondidas no meio do caminho. Isso é a boa-fé: um dever de jogar limpo, mesmo que o combinado não tenha escrito isso em nenhuma linha. Por isso, se alguém usa um detalhe pequeno do contrato pra prejudicar o outro de um jeito desleal, ou esconde uma informação importante, a lei considera isso errado, mesmo que a pessoa não tenha, tecnicamente, quebrado nenhuma cláusula. Só que às vezes acontece uma coisa completamente inesperada, que ninguém podia prever quando o combinado foi feito, e que torna cumprir aquilo extremamente injusto e pesado pra um dos lados. Nesses casos, a lei permite pedir pra rever as condições do contrato, ou até desfazer o combinado, porque manter a palavra dada não pode significar carregar um peso absurdo, que ninguém imaginava existir. A ideia central é: contrato é combinado de confiança, não é uma armadilha, e imprevistos gigantes merecem uma segunda olhada.",
    "exemplo": "Pensa em duas crianças que combinam trocar figurinhas toda semana, sempre no mesmo valor. Se uma delas começa a esconder as figurinhas raras que tem, fingindo não ter nenhuma, ela está quebrando a confiança do combinado, mesmo sem ter dito nenhuma mentira escrita num papel - isso é falta de boa-fé. Agora imagina que essa mesma troca semanal virou uma promessa de entregar 10 figurinhas por semana, mas de repente a fábrica parou de vender o álbum e as figurinhas sumiram das lojas - não seria justo obrigar a criança a continuar entregando 10 toda semana, porque aconteceu algo que ninguém podia adivinhar, e o combinado precisa ser ajustado.",
    "seedVersion": 4
  },
  {
    "territorio": "Direito Civil",
    "subtema": "União Estável e Alimentos",
    "resumoSimples": "Duas pessoas não precisam passar no cartório e assinar todos os papéis do casamento pra formar uma família de verdade perante a lei. Quando um casal vive junto de um jeito público, contínuo e duradouro, com a intenção clara de construir uma vida em comum, a lei reconhece isso como união estável e dá a esse casal praticamente as mesmas proteções de quem é casado, como direito a herança e a dividir bens. Isso existe porque o que importa pra lei não é só o papel assinado, mas o compromisso real que as pessoas assumem uma com a outra no dia a dia. Já os alimentos são outra forma de proteção da família: quando alguém não consegue se sustentar sozinho - um filho pequeno, um cônjuge, um companheiro ou até um pai idoso - e tem um parente que pode ajudar financeiramente, a lei obriga esse parente a contribuir com uma quantia, calculada olhando pra quem precisa e pra quem pode pagar. A ideia é simples: ninguém deve ficar desamparado se tem alguém da própria família com condições de ajudar.",
    "exemplo": "É como duas pessoas que, mesmo sem fazer festa de casamento nem assinar nenhum papel, moram juntas há anos, dividem as contas, criam os filhos juntas e todo mundo na rua sabe que elas são uma família - a lei enxerga isso como uma família de verdade, com os mesmos direitos de quem casou no papel. E pensa numa criança que ainda não sabe se cuidar sozinha: se o pai tem dinheiro sobrando mas não dá nem o lanche da escola pra ela, é justo que ele seja obrigado a ajudar, dando uma mesada proporcional ao que ele pode pagar e ao que ela realmente precisa.",
    "seedVersion": 4
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Penhora e Impenhorabilidade",
    "resumoSimples": "Quando uma pessoa deve dinheiro e não paga, mesmo depois de ser cobrada pela Justiça, é possível que um juiz autorize tomar bens dela pra vender e usar o dinheiro pra pagar a dívida - isso se chama penhora. Mas a lei não deixa tomar absolutamente tudo, porque isso destruiria a vida da pessoa e da família dela, em vez de só cobrar o que é devido. Por isso existem bens protegidos, chamados impenhoráveis, que nunca podem ser tomados pra pagar dívida, como o salário, até um certo limite, e a casa onde a família mora, mesmo que seja o único bem de valor que a pessoa tenha. A ideia por trás disso é encontrar um equilíbrio: quem tem uma dívida precisa pagar, mas ninguém pode ficar sem teto, sem comida ou sem as ferramentas do próprio trabalho só porque não conseguiu quitar uma conta. A lei protege o mínimo necessário pra uma vida digna, mesmo quando existe uma dívida real pra ser cobrada.",
    "exemplo": "Imagina uma criança que quebrou o brinquedo do amiguinho e precisa pagar por ele com a mesada. É justo que ela entregue parte da mesada até cobrir o estrago - isso é como a penhora. Mas não seria justo tirar dela o cobertor que usa pra dormir ou o prato de comida do jantar só pra pagar mais rápido - existem coisas básicas que ninguém pode tirar de uma pessoa, nem quando ela deve algo a alguém, e é exatamente isso que a impenhorabilidade garante com a casa e o salário de quem trabalha.",
    "seedVersion": 4
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Contestação e Preliminares",
    "resumoSimples": "Quando alguém é processado, tem um prazo certo pra se defender, apresentando ao juiz por escrito todos os argumentos que tem naquele momento - essa defesa se chama contestação, e ela não pode ser feita aos poucos, um argumento de cada vez, mais tarde. Dentro dessa defesa, existem dois tipos de argumento bem diferentes. Primeiro vêm as preliminares, que são questões sobre se o processo pode até continuar existindo daquele jeito - por exemplo, se foi movido no lugar certo, se quem processou tinha o direito de fazer isso, ou se falta algum documento essencial. Só depois de resolver essas questões é que o juiz entra no que interessa de verdade: quem tem razão sobre o problema em si. Isso existe porque não faz sentido gastar tempo discutindo detalhes do problema principal se existe algo básico errado logo na porta de entrada do processo, tipo um defeito que pode encerrar tudo antes mesmo de começar a discussão de mérito.",
    "exemplo": "Pensa numa competição de pipa que só pode acontecer se a criança trouxer a autorização assinada pelos pais. Antes de julgar se a pipa dela é a mais bonita, o organizador precisa checar se ela tem a autorização certa e se está inscrita na categoria certa - isso é como as preliminares. Só depois de passar por essa checagem inicial é que faz sentido discutir se a pipa dela realmente merece ganhar o prêmio.",
    "seedVersion": 4
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Ônus da Prova e Perícia",
    "resumoSimples": "Num processo, não basta só dizer que alguma coisa aconteceu - é preciso provar. Mas nem toda prova precisa vir da mesma pessoa: geralmente, quem afirma um fato importante pra defender o próprio pedido é quem tem a responsabilidade de trazer as provas dele, enquanto quem se defende precisa provar os fatos que usa pra se livrar daquela acusação. Isso existe pra não deixar ninguém tendo que provar o impossível, tipo provar que algo nunca aconteceu. Às vezes, porém, o fato discutido é tão técnico que nem o juiz nem as partes têm conhecimento suficiente pra entender sozinhos - imagina calcular se uma rachadura numa parede foi causada por obra do vizinho ou por um problema antigo do prédio. Nesses casos, entra em cena um perito, um especialista escolhido pra examinar aquele detalhe técnico e explicar pro juiz, num laudo, o que realmente aconteceu, servindo como um guia confiável pra ajudar na decisão.",
    "exemplo": "É como numa discussão sobre quem quebrou o vaso da sala: quem diz que foi o irmão precisa mostrar alguma prova disso, tipo ter visto a cena, e quem é acusado pode mostrar provas de que estava em outro cômodo na hora. Agora, se a dúvida é saber por que exatamente o vaso rachou por dentro, pode ser preciso chamar alguém que entende de cerâmica pra examinar o caco e explicar pros pais o que realmente aconteceu - esse especialista chamado pra ajudar é como o perito de um processo.",
    "seedVersion": 4
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Apelação e Embargos de Declaração",
    "resumoSimples": "Quando um juiz dá a decisão final de um processo, a parte que não ficou satisfeita não precisa aceitar aquilo como última palavra - ela pode pedir pra um tribunal, formado por juízes diferentes, olhar o caso de novo, com calma, e decidir se aquela sentença estava certa. Esse pedido de revisão mais completo é a apelação, e nele dá pra discutir de novo praticamente tudo o que foi decidido. Só que existe também um recurso bem mais simples e rápido, chamado embargos de declaração, que não pede pra ninguém mudar de ideia sobre quem tem razão - ele serve só pra avisar o próprio juiz que a decisão ficou confusa, contraditória, ou que esqueceu de responder alguma coisa que devia ter sido decidida. É como pedir pra alguém esclarecer o que já disse, sem abrir uma discussão nova. A diferença central é essa: um recurso pede pra rediscutir o mérito inteiro num lugar diferente, o outro só pede pra arrumar um defeito pontual na própria decisão, no mesmo lugar onde ela foi tomada.",
    "exemplo": "Imagina que a professora deu uma nota final pro trabalho e a criança acha que ela avaliou tudo errado - ela pode pedir pra coordenação pedagógica reavaliar o trabalho inteiro, com outros olhos; isso é como a apelação. Mas se a professora só esqueceu de colocar a nota de uma das perguntas, ou escreveu duas notas diferentes pro mesmo trabalho, a criança não precisa pedir uma reavaliação completa - só precisa voltar na própria professora e pedir pra ela esclarecer ou corrigir aquele detalhe. Isso é como os embargos de declaração.",
    "seedVersion": 4
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Prazos e Encerramento do Inquérito",
    "resumoSimples": "A polícia não pode investigar um crime pra sempre, sem prazo, guardando o caso na gaveta indefinidamente. Por isso existe um tempo certo pra ela juntar as provas, ouvir as pessoas envolvidas e descobrir o que aconteceu, antes de mandar tudo pronto pro Ministério Público decidir o próximo passo. Esse prazo é bem mais curto quando o suspeito já está preso, porque ninguém pode ficar trancado esperando enquanto a investigação anda devagar - isso seria muito injusto. Quando a pessoa está solta, dá pra esperar um pouco mais, já que ela não está perdendo a liberdade nesse meio tempo. Se a polícia não conseguir terminar no prazo, ela pode pedir mais tempo, explicando o motivo da demora. No fim, o que importa é equilibrar o tempo de fazer um trabalho bem-feito com o direito da pessoa de não ficar esperando pra sempre.",
    "exemplo": "Pense numa gincana em que um time precisa montar um quebra-cabeça antes de mostrar pro professor. Se um dos jogadores estiver 'de castigo' esperando o resultado, o professor dá um tempo bem curtinho pra não deixar ninguém esperando à toa. Mas se todo mundo já foi liberado pro recreio, dá pra ter um pouquinho mais de calma pra terminar o quebra-cabeça direitinho.",
    "seedVersion": 4
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Denúncia, Queixa e Condições da Ação",
    "resumoSimples": "Quando um crime acontece, alguém precisa contar pro juiz 'olha, isso aqui aconteceu, e essa pessoa deve responder por isso' - e essa peça pode vir de dois lugares diferentes. Na maioria das vezes, quem faz essa acusação é o Ministério Público, que representa toda a sociedade, e o papel dele se chama denúncia. Só que em alguns casos mais pessoais, é a própria vítima quem escolhe processar, através de um advogado, e aí o nome muda pra queixa. Não importa quem escreve, essa peça precisa contar direitinho o que aconteceu, quem é o suspeito e quais provas existem, senão o juiz nem aceita começar o processo. É como preencher um formulário completo: faltando informação essencial, ele simplesmente não pode ser aceito.",
    "exemplo": "Imagina que alguém quebrou o brinquedo de um coleguinha na escola. Se for uma bagunça que afeta a turma toda, é a diretora quem chama atenção e resolve, tipo o Ministério Público. Mas se for algo mais pessoal, tipo um apelido que só magoou aquele coleguinha, aí é ele mesmo quem decide se vai reclamar pra diretora, contando exatamente o que aconteceu.",
    "seedVersion": 4
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Audiência de Custódia",
    "resumoSimples": "Quando alguém é pego cometendo um crime na hora e levado preso, essa pessoa não pode simplesmente ficar trancada sem ninguém 'de fora' olhar pro que aconteceu. Por isso, bem rapidinho, ela precisa ser levada na frente de um juiz, pra ele conversar pessoalmente com ela. Nesse encontro, o juiz confere três coisas: se a prisão foi feita do jeito certo, se a pessoa não sofreu nenhum tipo de maltrato enquanto estava presa, e o que fazer dali pra frente - se ela continua presa, se pode responder o processo solta, ou se cabe alguma outra medida no meio do caminho. É como um freio de segurança bem rápido, pra garantir que ninguém fique preso por engano ou de um jeito errado sem que um juiz saiba.",
    "exemplo": "É como quando um professor precisa conferir pessoalmente, assim que alguém é levado pra sala da direção, se tudo aconteceu do jeito certo e se a criança está bem. Ele não deixa a criança esperando dias sentada lá - conversa logo, olha se está tudo certo, e decide na hora o que vai acontecer a seguir.",
    "seedVersion": 4
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Corpo de Delito e Reconhecimento de Pessoas",
    "resumoSimples": "Quando um crime deixa marcas físicas - tipo um ferimento, um objeto quebrado ou qualquer vestígio que dá pra examinar - não basta só alguém contar o que aconteceu, é preciso que um especialista analise essas provas de verdade. Isso existe porque palavras podem confundir, mas uma marca física, quando bem examinada, ajuda a confirmar o que realmente aconteceu. Já quando é preciso descobrir se uma testemunha reconhece o suspeito, existe um jeito certo de fazer isso, sem forçar a resposta: a pessoa que está reconhecendo primeiro descreve como era o suspeito, e depois olha pra ele ao lado de outras pessoas parecidas, nunca sozinho isolado, pra não ficar óbvio demais quem é 'o escolhido'. Isso evita que alguém aponte a pessoa errada só porque estava na sua frente.",
    "exemplo": "É como quando a professora encontra um vaso quebrado e, antes de acusar alguém, ela examina os pedaços pra entender direito o que aconteceu, em vez de acreditar só no primeiro palpite. E se for pra descobrir quem fez, ela não aponta uma criança sozinha e pergunta 'foi ela?' - ela coloca várias crianças parecidas enfileiradas, pra quem viu apontar com calma quem realmente reconhece, sem ser induzido.",
    "seedVersion": 4
  },
  {
    "territorio": "Processo do Trabalho",
    "subtema": "Recurso Ordinário e Recurso de Revista",
    "resumoSimples": "Quando alguém perde uma parte do caso na Justiça do Trabalho, pode pedir pra um tribunal maior olhar de novo - esse pedido básico de 'revisão' se chama recurso ordinário, e é o caminho comum, usado quase toda vez que alguém não concorda com a decisão. Só que existe outro tipo de recurso, mais especial, chamado recurso de revista, que só serve pra levar a discussão pro tribunal mais alto quando dois tribunais diferentes decidiram a mesma questão de lei de jeitos diferentes. Esse recurso não é pra brigar de novo sobre os fatos do caso, mas sim pra deixar a interpretação da lei igual pra todo mundo no país, sem cada lugar decidindo de um jeito distinto pra mesma regra.",
    "exemplo": "É como quando um aluno não concorda com a nota da prova e pede pra outro professor conferir de novo - isso é o recurso comum, que quase todo mundo pode pedir. Mas se duas escolas diferentes estiverem corrigindo a mesma questão de jeitos totalmente opostos, alguém mais experiente da secretaria de educação precisa entrar e decidir qual é o jeito certo de corrigir aquela questão pra sempre, pra ninguém ficar confuso.",
    "seedVersion": 4
  },
  {
    "territorio": "Direito do Trabalho",
    "subtema": "Fraude e Nulidade na Relação de Emprego",
    "resumoSimples": "Existem alguns direitos do trabalhador que são tão importantes que a pessoa não pode simplesmente abrir mão deles, nem que 'combine' isso com o patrão. Então, se um contrato ou um jeitinho é criado só pra fingir que aquele direito não existe ou pra disfarçar a real situação de trabalho, esse acordo não vale nada, mesmo que os dois tenham assinado embaixo concordando. Isso existe porque, na prática, o empregado costuma estar em desvantagem na hora de negociar, e pode acabar 'aceitando' perder direitos só pra conseguir ou manter o emprego. Por isso a lei protege a pessoa mesmo contra a vontade dela mesma nesse tipo de situação, garantindo que a regra de verdade continue valendo.",
    "exemplo": "Imagina que um combinado da escola diz que toda criança tem direito a um lanche no recreio. Se um colega mais forte convencer outro a 'abrir mão' do lanche pra continuar brincando no grupo, isso não pode valer, porque o direito ao lanche é importante demais pra depender de pressão ou combinação escondida - a escola garante o lanche de qualquer jeito.",
    "seedVersion": 4
  },
  {
    "territorio": "Direito do Trabalho",
    "subtema": "Intervalos Intra e Interjornada",
    "resumoSimples": "Trabalhar o dia inteiro sem nenhuma pausa faz mal pra saúde e pra atenção de qualquer pessoa, por isso existem dois descansos obrigatórios diferentes. Um deles acontece durante o próprio dia de trabalho, geralmente na hora do almoço, pra pessoa comer com calma e recarregar as energias - isso é o intervalo intrajornada. O outro acontece entre o fim de um dia de trabalho e o começo do outro, garantindo um tempo mínimo de descanso completo antes de voltar de novo - isso é o intervalo interjornada. Sem essas pausas, a pessoa corre risco de se cansar demais, cometer erros ou até se machucar no trabalho, então esses descansos não são só um 'favor' da empresa, são uma exigência mesmo.",
    "exemplo": "É como na escola, que tem o intervalinho do recreio no meio das aulas pra comer e descansar um pouco (isso é o intra), e depois tem a noite inteira de sono entre um dia de aula e o outro, pra acordar descansado de novo (isso é o inter). Sem esses dois descansos, ninguém consegue prestar atenção direito nem no dia seguinte.",
    "seedVersion": 4
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Dispensa e Inexigibilidade de Licitação",
    "resumoSimples": "Quando o governo precisa comprar alguma coisa ou contratar alguém, a regra normal é fazer uma disputa justa entre várias empresas, pra escolher a melhor proposta e ninguém favorecer o amigo. Mas existem dois casos em que dá pra pular essa disputa. No primeiro, chamado de dispensa, a disputa até seria possível, só que a lei entende que não vale a pena fazer todo esse processo - porque o valor é pequeno demais, ou porque é uma emergência e não dá tempo de esperar. No segundo, chamado de inexigibilidade, a disputa é simplesmente impossível de existir, porque só tem um fornecedor capaz de entregar aquilo, então não tem quem competir com quem. A diferença central é essa: na dispensa, dava pra competir mas a lei libera; na inexigibilidade, nem dava pra competir porque só existe uma opção. Essas exceções existem pra que o governo não fique travado em situações urgentes ou impossíveis, mas elas continuam exigindo explicação por escrito, justamente pra evitar que virem desculpa pra comprar de qualquer jeito.",
    "exemplo": "Imagina que a escola precisa comprar giz de cera urgente porque acabou no meio da aula: não dá tempo de pedir orçamento pra três lojas, então a professora compra na papelaria mais perto - isso é dispensa. Agora imagina que a escola quer contratar aquele único palhaço da cidade que sabe fazer o show específico que as crianças pediram: não existe outro palhaço igual pra competir com ele, então não tem disputa possível - isso é inexigibilidade.",
    "seedVersion": 4
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "Impostos da União, Estados e Municípios",
    "resumoSimples": "O Brasil é organizado em três níveis de governo - o governo do país inteiro, o governo de cada estado e o governo de cada cidade - e cada um deles tem despesas diferentes pra cuidar, como estradas, hospitais, escolas e coleta de lixo. Pra que cada um consiga pagar suas próprias contas, a Constituição já separou de antemão quais impostos cada nível pode cobrar, evitando que todos cobrem a mesma coisa da mesma pessoa ao mesmo tempo. O imposto de renda, por exemplo, é cobrado pelo governo federal, porque envolve algo que acontece em qualquer lugar do país. O imposto sobre o carro é do estado, porque tem a ver com o território estadual, como as estradas que ele cuida. Já o imposto sobre a casa é da cidade, porque é a prefeitura quem cuida das ruas e da infraestrutura ao redor daquele imóvel. Essa divisão evita brigas e confusão, porque cada governo sabe exatamente qual fatia lhe pertence.",
    "exemplo": "É como se em casa cada pessoa tivesse uma tarefa certa pra cuidar do dinheiro guardado: o pai cuida do dinheiro do aluguel, a mãe cuida do dinheiro do mercado, e o filho mais velho cuida do dinheiro da mesada dos irmãos menores. Ninguém mexe na parte do outro, porque já ficou combinado antes quem é responsável por qual gasto.",
    "seedVersion": 4
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "Imunidades Tributárias",
    "resumoSimples": "Existem algumas coisas que o governo nunca pode cobrar imposto, porque a própria Constituição, que é a regra mais importante de todas, já disse que ali é proibido cobrar. Isso é diferente de quando uma lei comum decide, por bondade, deixar de cobrar de alguém por um tempo - isso é chamado de isenção, e pode ser mudado depois. A imunidade é mais forte: ela protege valores que a sociedade considera importantes demais pra serem prejudicados por um imposto, como a liberdade religiosa, o acesso a livros e informação, e o equilíbrio entre os próprios governos. Por isso um governo não cobra imposto do outro governo, uma igreja não paga imposto sobre o templo, e um livro não paga imposto só por existir e circular. A ideia é que certas atividades são tão valiosas pra todo mundo que cobrar dinheiro por elas atrapalharia mais do que ajudaria.",
    "exemplo": "É como se a família combinasse uma regra fixa, escrita bem grande na porta da geladeira, dizendo que ninguém nunca pode cobrar dinheiro dos avós pra eles entrarem em casa, custe o que custar. Diferente de quando os pais apenas avisam que, por enquanto, o irmão mais novo está liberado de pagar pela sobremesa - isso pode mudar amanhã, mas a regra da porta da geladeira, não.",
    "seedVersion": 4
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "Sujeito Passivo e Fato Gerador",
    "resumoSimples": "Todo tributo só nasce quando alguma coisa específica acontece na vida real, e essa coisa que dispara a cobrança se chama fato gerador. Por exemplo, vender uma mercadoria, ganhar salário ou ser dono de um carro são situações que, quando acontecem, fazem o tributo surgir automaticamente. Depois de identificar o que aconteceu, a lei também precisa dizer quem vai ter que pagar por isso, e essa pessoa é chamada de sujeito passivo. Às vezes quem paga é exatamente quem viveu a situação, e às vezes a lei escolhe outra pessoa pra pagar no lugar dela, por facilidade de fiscalização. Esses dois conceitos andam sempre juntos: primeiro precisa acontecer o fato que a lei escolheu como gatilho, e só depois se descobre, olhando a mesma lei, quem tem a obrigação de colocar a mão no bolso.",
    "exemplo": "É como uma regra da casa que diz: toda vez que alguém comer o último pedaço de bolo (esse é o gatilho, o fato que acontece), quem comeu tem que lavar a forma (essa pessoa é quem vai responder por aquilo). O gatilho e o responsável sempre vêm em par: sem o bolo ser comido, ninguém lava nada, e depois que é comido, já está definido de antemão quem segura a esponja.",
    "seedVersion": 4
  },
  {
    "territorio": "Direito Empresarial",
    "subtema": "Registro do Empresário",
    "resumoSimples": "Antes de começar a vender produtos ou prestar serviços de forma profissional, quem decide virar empresário precisa se cadastrar oficialmente em um órgão próprio, como se fosse tirar uma carteirinha que comprova que aquele negócio existe de verdade. Esse registro é importante porque, sem ele, o negócio funciona de forma informal, sem nome protegido, sem conseguir emitir nota fiscal direito e sem várias garantias que a lei só dá pra quem seguiu o caminho certo. Depois de registrado, o empresário passa a ter um nome empresarial só dele, protegido contra outra pessoa usar igual, e ganha acesso a coisas como empréstimos em banco, participação em licitações e benefícios fiscais. O registro também serve pra dar transparência: qualquer pessoa pode consultar e saber que aquele negócio é real, quem é o responsável por ele e desde quando está funcionando. É basicamente o jeito de sair da informalidade e passar a operar dentro das regras que protegem tanto o empresário quanto quem compra dele.",
    "exemplo": "É como a diferença entre vender bolinho escondido no portão de casa, sem ninguém saber direito quem é o responsável, e abrir uma barraquinha registrada na feira, com uma placa oficial, um número certinho e um espaço garantido só seu. Na barraquinha registrada, todo mundo sabe quem procurar se o bolinho vier estragado, e ninguém mais pode chegar e roubar o nome que você escolheu pra sua marca.",
    "seedVersion": 4
  },
  {
    "territorio": "Direito Empresarial",
    "subtema": "Responsabilidade dos Sócios",
    "resumoSimples": "Quando um negócio dá errado e fica devendo dinheiro pra muita gente, surge a pergunta: quem vai pagar essa conta, só a empresa ou também o bolso pessoal de cada sócio? A resposta depende do tipo de sociedade que os sócios escolheram lá no começo. Em alguns tipos, a responsabilidade de cada sócio é limitada, ou seja, ele só arrisca perder o que já investiu no negócio, e seus bens pessoais - casa, carro, poupança - ficam protegidos. Em outros tipos, a responsabilidade é ilimitada, o que significa que, se o dinheiro da empresa não for suficiente, os credores podem ir atrás dos bens pessoais dos sócios também. Essa escolha muda completamente o nível de risco que cada pessoa aceita assumir ao entrar num negócio, e por isso é uma das decisões mais importantes na hora de montar uma sociedade.",
    "exemplo": "É como duas crianças que combinam de dividir os prejuízos se quebrarem um vaso jogando bola: numa combinação, cada uma só perde o dinheiro da mesada que já tinha separado pra brincadeira; na outra combinação, se a mesada não for suficiente pra pagar o vaso, elas prometeram usar até o cofrinho de aniversário guardado no quarto. O risco que cada uma aceitou correr é bem diferente, mesmo jogando a mesma bola.",
    "seedVersion": 4
  },
  {
    "territorio": "Direito Empresarial",
    "subtema": "Requisitos e Efeitos da Falência",
    "resumoSimples": "Uma empresa não é declarada falida só porque está devendo dinheiro; é preciso que ela esteja numa situação grave o bastante, como não conseguir pagar dívidas significativas e não ter jeito de se reorganizar sozinha. Quando um juiz confirma essa situação, a empresa entra oficialmente em falência, e a partir daí muita coisa muda na vida dela. Os antigos donos deixam de tomar as decisões do dia a dia, porque um administrador nomeado pelo processo passa a cuidar de tudo no lugar deles. Os bens da empresa são reunidos e depois vendidos, e o dinheiro arrecadado é usado pra pagar quem tinha direito de receber, seguindo uma ordem de prioridade definida em lei - por exemplo, salários de funcionários costumam vir antes de outras dívidas. A ideia por trás de tudo isso é organizar uma bagunça financeira de um jeito justo, pra que ninguém saia levando vantagem sobre os outros credores.",
    "exemplo": "É como quando um grupo de amigos monta uma barraca de limonada, ela vai muito mal e fica devendo pra todo mundo que emprestou copo, açúcar e limão. Em vez de cada amigo brigar sozinho pra receber de volta, alguém de fora assume, vende tudo que sobrou da barraca - a mesa, os copos, a jarra - e distribui o dinheiro entre os credores numa ordem combinada, começando por quem mais precisava receber primeiro.",
    "seedVersion": 4
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Excludentes de Ilicitude e Culpabilidade",
    "resumoSimples": "Nem toda vez que alguém faz algo parecido com um crime a lei considera aquilo errado. Existem situações em que a própria lei diz que não houve crime nenhum, porque a pessoa agiu de um jeito que, apesar de parecer grave, era justificado - como se defender de um ataque ou agir pra escapar de um perigo muito sério que não criou por conta própria. Isso é diferente de outra situação, em que o fato realmente aconteceu e é considerado errado, mas a pessoa que fez não pode ser culpada e punida por causa de alguma condição especial dela, como não ter capacidade de entender o que estava fazendo, ou ter se enganado, sem culpa, sobre o que a lei permitia. No primeiro caso, a lei apaga o próprio erro; no segundo, o erro continua existindo, só que a punição não recai sobre aquela pessoa específica. Essa diferença importa porque muda completamente as consequências: quando não há crime, ninguém é responsabilizado; quando há crime mas não há culpa, a pessoa pode até receber outro tipo de tratamento, mas não a pena comum.",
    "exemplo": "Pense numa criança que empurra outra pra ela não cair de um buraco: por fora parece um empurrão, mas ali não teve nada de errado, porque foi pra proteger. Agora pense numa criança tão pequena que nem entende que quebrar o brinquedo do amigo de propósito é errado: o brinquedo quebrou de verdade, só que ninguém espera que aquela criança seja tratada como se tivesse feito por maldade, porque ela ainda não tem noção suficiente pra ser cobrada por isso.",
    "seedVersion": 4
  },
];

  // Atualiza resumoSimples/exemplo de itens já inseridos anteriormente,
  // quando o texto foi reescrito depois da inserção inicial (ex.: pedido de
  // deixar o resumo "mais explicativo"). Casa pela chave disciplinaId+subtema,
  // já que o id gravado no banco é aleatório e não rastreia de volta pra
  // entrada correspondente em RESUMOS.
  function atualizarConteudoResumo(idPorNome) {
    return DB.getAll('resumoFacil').then(function (existentes) {
      var porChave = {};
      existentes.forEach(function (r) {
        porChave[r.disciplinaId + '::' + r.subtema] = r;
      });

      var atualizacoes = [];
      RESUMOS.forEach(function (r) {
        var disciplinaId = idPorNome[r.territorio];
        if (!disciplinaId) return;
        var existente = porChave[disciplinaId + '::' + r.subtema];
        if (!existente) return;
        var mudou = false;
        if (r.resumoSimples && existente.resumoSimples !== r.resumoSimples) {
          existente.resumoSimples = r.resumoSimples;
          mudou = true;
        }
        if (r.exemplo && existente.exemplo !== r.exemplo) {
          existente.exemplo = r.exemplo;
          mudou = true;
        }
        if (mudou) atualizacoes.push(DB.put('resumoFacil', existente));
      });
      return Promise.all(atualizacoes);
    });
  }

  function seedar() {
    var versaoAplicada = Storage.read(Storage.KEYS.resumoFacilSeedVersion, 0);
    if (versaoAplicada >= SEED_VERSION_ATUAL) return Promise.resolve();

    return DB.getAll('disciplinas').then(function (disciplinas) {
      var idPorNome = {};
      disciplinas.forEach(function (d) { idPorNome[d.nome] = d.id; });

      var pendentes = [];
      RESUMOS.forEach(function (r) {
        if (r.seedVersion <= versaoAplicada) return;
        var disciplinaId = idPorNome[r.territorio];
        if (!disciplinaId) return;
        pendentes.push(DB.put('resumoFacil', {
          id: Storage.makeId(),
          disciplinaId: disciplinaId,
          subtema: r.subtema,
          resumoSimples: r.resumoSimples,
          exemplo: r.exemplo
        }));
      });

      return Promise.all(pendentes).then(function () {
        return atualizarConteudoResumo(idPorNome);
      }).then(function () {
        Storage.write(Storage.KEYS.resumoFacilSeedVersion, SEED_VERSION_ATUAL);
      });
    });
  }

  return { seedar: seedar };
})();
