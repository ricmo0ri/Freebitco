// Banco de "resumo fácil": explicação bem simples (modo "explica pra uma
// criança de 5 anos") de cada assunto/subtema, com um exemplo concreto —
// pensado como a primeira parada antes de encarar questões e lei seca,
// pra quem precisa de uma porta de entrada mais leve no assunto.
var ResumoFacilSeed = (function () {
  var SEED_VERSION_ATUAL = 2;

  var RESUMOS = [
  {
    "territorio": "Ética",
    "subtema": "Exercício da Advocacia",
    "resumoSimples": "Advogado é como um tradutor especial: ele fala com o juiz no seu lugar, porque tem coisas que só ele pode fazer. Pra virar advogado de verdade, a pessoa precisa estudar direito, passar na prova da OAB e ganhar a carteirinha. Sem essa carteirinha, quase ninguém pode entrar na Justiça no lugar dos outros.",
    "exemplo": "Imagina uma sala de brinquedos onde só quem tem uma pulseira especial pode entrar e pegar os brinquedos pros amigos. A pulseira é como o diploma mais a prova da OAB. Quem não tem a pulseira não pode entrar, mesmo sabendo onde estão os brinquedos.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "subtema": "Direitos e Prerrogativas do Advogado",
    "resumoSimples": "Pra defender bem o cliente, o advogado ganha alguns poderes especiais, quase como uma capa de super-herói. Ele pode entrar em certos lugares que outras pessoas não podem, guardar segredo do que o cliente contou, e ninguém pode mexer nas coisas dele sem um motivo muito forte.",
    "exemplo": "Imagina que o advogado tem um crachá mágico que abre a porta da sala do diretor sem precisar pedir superpermissão, porque foi lá defender um amigo. E ninguém pode espiar a mochila dele sem um bilhete muito especial do juiz.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "subtema": "Incompatibilidades e Impedimentos",
    "resumoSimples": "Tem gente que não pode ser advogado enquanto ocupa outro cargo, porque ia ficar injusto - isso é a incompatibilidade, uma proibição total. Já o impedimento é mais leve: a pessoa pode advogar, só não pode em alguns casos específicos, tipo contra o lugar onde ela trabalha.",
    "exemplo": "Imagina um juiz de brincadeira de um jogo de futebol: ele não pode jogar no time e apitar o jogo ao mesmo tempo, isso é proibido sempre (incompatibilidade). Já se o menino é irmão do goleiro de um time, ele até pode apitar outros jogos, só não pode apitar o jogo do time do irmão dele (impedimento).",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "subtema": "Ética e Disciplina",
    "resumoSimples": "Advogado tem um livro de regras de boa conduta que precisa seguir: não mentir pro juiz, não pegar dinheiro do cliente errado, tratar todo mundo com respeito. Se ele desobedecer, recebe um castigo, que pode ser leve, como um aviso, ou bem grave, como não poder mais ser advogado.",
    "exemplo": "Imagina o combinado de uma sala de aula: quem desobedece uma regrinha leva um aviso, quem faz algo mais sério fica sem participar de um passeio, e quem faz uma coisa gravíssima é expulso da escola. Com advogado é parecido: tem aviso, tempo sem poder trabalhar, multa e, no caso mais grave, ser tirado da profissão.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "subtema": "Honorários Advocatícios",
    "resumoSimples": "Honorário é o nome bonito pro pagamento que a pessoa dá ao advogado pelo trabalho dele. Tem um tipo que é combinado direto entre cliente e advogado, e outro tipo em que quem perde o caso na Justiça também precisa pagar uma partezinha pro advogado do outro lado.",
    "exemplo": "Imagina que você paga um amigo pra te ajudar numa gincana - isso é o combinado direto. Mas se o time adversário perder, as regras dizem que ele também tem que dar um prêmio pro ajudante do time vencedor - isso é parecido com o pagamento de quem perde na Justiça.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "subtema": "Sociedade de Advogados",
    "resumoSimples": "Às vezes vários advogados se juntam pra trabalhar em equipe, formando um grupo com nome próprio. Esse grupo precisa ser registrado na OAB e tem regras sobre como dividir o trabalho e as responsabilidades entre todos.",
    "exemplo": "Imagina que três amigos montam juntos uma barraquinha de picolé com um nome bonito escrito na placa. Eles combinam como vão dividir o trabalho e o dinheiro, e precisam avisar a diretoria da escola, que aqui é a OAB, que essa barraquinha existe.",
    "seedVersion": 1
  },
  {
    "territorio": "Ética",
    "subtema": "Inscrição e Órgãos da OAB",
    "resumoSimples": "Pra virar advogado de verdade, a pessoa faz um pedido pra OAB, que é como o clube dos advogados do Brasil inteiro. A OAB tem uma direção geral, um representante em cada estado e times menores nas cidades, cada um cuidando de uma parte do trabalho.",
    "exemplo": "Imagina um clube de futebol nacional: tem a diretoria principal (Conselho Federal), um time em cada estado (Seccional) e um timinho em cada bairro (Subseção). Pra jogar oficialmente, você precisa se inscrever nesse clube e seguir as regras dele.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "subtema": "Jusnaturalismo",
    "resumoSimples": "Jusnaturalismo é a ideia de que existem regras certas que já nascem com a gente, mesmo antes de alguém escrever numa lei, tipo não machucar o outro. Essas regras vêm da natureza ou da razão, e servem pra dizer se uma lei escrita é justa ou não.",
    "exemplo": "Imagina que, mesmo sem o professor escrever no quadro, todo mundo já sabe que não pode bater no coleguinha. Essa regra de nascença é o direito natural: ela existe mesmo antes de alguém colocar no papel.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "subtema": "Positivismo Jurídico",
    "resumoSimples": "O positivismo jurídico diz que lei é lei: só vale o que está escrito nas regras oficiais, do jeito que foi aprovado. Não importa se a pessoa acha bonito ou feio, certo ou errado; o que manda é o que está no papel.",
    "exemplo": "Imagina o manual oficial de um jogo de tabuleiro. Não importa se você acha uma regra chata: se ela está escrita no manual e foi aprovada direitinho, todo mundo precisa seguir do jeitinho que está escrita.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "subtema": "Hermenêutica e Interpretação",
    "resumoSimples": "Hermenêutica é a arte de entender o que uma regra realmente quer dizer, porque às vezes a mesma frase pode ter mais de um jeito de entender. Pra isso, a pessoa olha as palavras, olha as regras perto dela e pensa pra que serve aquela regra.",
    "exemplo": "Imagina uma placa que diz proibido entrar com bicicleta. Você pode olhar só a palavra bicicleta, ou pensar: será que patinete também não pode, já que o motivo é não bater em ninguém? Pensar no porquê da regra é interpretar.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "subtema": "Justiça (autores clássicos)",
    "resumoSimples": "Vários pensadores antigos tentaram explicar o que é ser justo. Uma ideia famosa, de Aristóteles, é que justiça é dar pra cada um a parte que é dele, nem mais nem menos, do jeito certo.",
    "exemplo": "Imagina uma pizza dividida entre amigos: se todos comeram o mesmo tanto no lanche, o justo é repartir em pedaços iguais. Mas se um amigo trouxe mais ingredientes, pode ser justo ele ganhar um pedaço maior. Pensar nisso é o que os filósofos chamavam de justiça.",
    "seedVersion": 1
  },
  {
    "territorio": "Filosofia do Direito",
    "subtema": "Teorias Contemporâneas do Direito",
    "resumoSimples": "Pensadores mais modernos criaram novos jeitos de explicar como o direito funciona. Tem quem diga que existe uma regra mãe que dá força a todas as outras leis, quem diga que existem regras de fazer e regras de como criar regras, e quem diga que além das leis escritas também valem princípios de justiça pra resolver os casos.",
    "exemplo": "Imagina um videogame: tem a regra principal que diz que aquilo é um jogo válido (regra mãe), tem as regras de como jogar e as regras de como criar novas fases, e às vezes o juiz da brincadeira usa o espírito do jogo, não só o manual, pra resolver uma disputa.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "subtema": "Sistema Global de Proteção (ONU)",
    "resumoSimples": "A ONU é um grande grupo de países do mundo inteiro que se juntou pra combinar regras de respeito entre as pessoas, tipo todo mundo tem direito à vida, à liberdade e a ser tratado com respeito. Esse combinado vale pro mundo todo, não só pra um país.",
    "exemplo": "Imagina que todas as escolas do mundo se juntassem numa reunião gigante e combinassem: em nenhuma escola pode bater em aluno, e todo aluno tem direito a estudar. Esse combinado geral, pro mundo inteiro, é o que a ONU faz com os direitos humanos.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "subtema": "Sistema Interamericano (Corte/Comissão)",
    "resumoSimples": "Além do combinado do mundo todo, os países da América, incluindo o Brasil, fizeram um combinado só entre eles, com um juiz da região pra olhar quando um país desrespeita os direitos humanos. Primeiro um grupo analisa o caso, e se for grave, vai pra um tribunal que pode mandar o país consertar o erro.",
    "exemplo": "Imagina que as escolas do seu bairro criaram um conselho só pra elas, separado da reunião mundial. Se uma escola desrespeitar um aluno, primeiro um grupo de bairro analisa (a Comissão), e se for sério, vai pro tribunal do bairro (a Corte), que pode mandar a escola pedir desculpa e consertar o erro.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "subtema": "Direitos de Grupos Vulneráveis",
    "resumoSimples": "Algumas pessoas precisam de um cuidado extra porque sofrem mais preconceito ou têm mais dificuldade, tipo crianças, idosos, pessoas com deficiência e povos indígenas. Por isso existem regras especiais só pra proteger esses grupos, além das regras gerais que valem pra todo mundo.",
    "exemplo": "Imagina que na fila do escorregador os menorzinhos e quem tem mais dificuldade pra andar ganham uma ajudinha extra pra não se machucar. Isso não é injusto com os outros, é dar atenção especial pra quem precisa mais.",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "subtema": "Refugiados e Migrantes",
    "resumoSimples": "Refugiado é quem precisou fugir do seu país porque estava em perigo de verdade, tipo guerra ou perseguição, e por isso tem proteção especial, ninguém pode mandar ele de volta pro perigo. Migrante é quem se muda de país por outros motivos, tipo procurar trabalho ou ficar perto da família.",
    "exemplo": "Imagina duas crianças novas na escola: uma teve que sair correndo da escola antiga porque um valentão ameaçava machucar ela de verdade, e a escola nova não pode mandar ela de volta pro perigo (é como um refugiado). A outra só mudou de bairro porque o pai arrumou um emprego novo (é como um migrante).",
    "seedVersion": 1
  },
  {
    "territorio": "Direitos Humanos",
    "subtema": "Tratados Internacionais de Direitos Humanos",
    "resumoSimples": "Tratado é um combinado escrito que o Brasil faz com outros países, prometendo respeitar certos direitos das pessoas. Depois que o Brasil assina e aprova esse combinado do jeito certo, ele passa a valer aqui dentro também, às vezes quase com a mesma força das regras mais importantes do país.",
    "exemplo": "Imagina que sua turma decide seguir as regras de boas maneiras que vieram de uma reunião entre várias escolas. Depois que a diretora aprova esse combinado direitinho, ele passa a valer dentro da sua escola também, quase como se fosse uma regra do próprio regimento dela.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Direitos e Garantias Fundamentais",
    "resumoSimples": "São as regras mais importantes de todas, que protegem todo mundo: ninguém pode te machucar, você pode falar o que pensa e todo mundo deve ser tratado igual. Elas ficam guardadas na Constituição, que é a regra maior do país. Nem o governo pode tirar isso de você.",
    "exemplo": "Imagina que na escola tem uma regra gigante pendurada na parede: \"nenhuma criança pode bater na outra e todo mundo tem direito ao lanche\". Até o diretor precisa seguir essa regra. Com os direitos fundamentais é igual: nem o presidente pode desrespeitar.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Organização do Estado",
    "resumoSimples": "É como o Brasil se divide em pedaços para organizar o trabalho: a União (o país inteiro), os Estados, os Municípios e o Distrito Federal. Cada um cuida de uma parte das tarefas, como escola, saúde ou rua. Assim ninguém precisa fazer tudo sozinho.",
    "exemplo": "Imagina uma casa grande com três irmãos dividindo as tarefas: um cuida do quintal, outro cuida da sala e o pai cuida da casa toda e das decisões maiores. Cada um cuida do seu pedaço, mas moram na mesma casa-Brasil.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Organização dos Poderes",
    "resumoSimples": "O governo se divide em três times com tarefas diferentes: um cria as regras, outro coloca essas regras em prática e o terceiro resolve as brigas quando alguém não obedece. Nenhum time pode mandar mais que os outros, e um fica de olho no outro.",
    "exemplo": "Imagina uma brincadeira com três amigos: um inventa as regras do jogo, outro toca o jogo pra frente, e o terceiro é o juiz que decide quando alguém trapaceou. Se um quiser mandar em tudo sozinho, os outros dois podem dizer \"não pode!\".",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Controle de Constitucionalidade",
    "resumoSimples": "É quando alguém confere se uma lei nova está seguindo a regra maior, a Constituição. Se a lei for contra essa regra maior, ela é anulada, como se nunca tivesse existido. Quem faz essa conferência mais importante é o STF.",
    "exemplo": "Imagina que a regra maior da escola diz \"nenhum castigo pode machucar\". Um professor inventa uma regra de castigo que machuca. A diretoria confere e avisa: \"essa regra nova não vale, porque contraria a regra maior da escola\".",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Processo Legislativo",
    "resumoSimples": "É o caminho que uma ideia percorre até virar lei de verdade. Alguém propõe a ideia, os deputados e senadores discutem e votam, e depois o presidente confirma ou não. Só depois de passar por todas as etapas a ideia vira lei.",
    "exemplo": "Imagina que você quer criar uma regra nova para o seu grupo de amigos brincarem. Primeiro conta a ideia, depois todo mundo vota se gosta, e por fim o líder do grupo confirma que ela vale a partir de agora.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Ordem Social e Econômica",
    "resumoSimples": "São as regras que cuidam do trabalho, da saúde, da educação e de como o dinheiro e os negócios devem funcionar no país. A ideia é que o país cresça, mas de um jeito justo, ajudando todo mundo, não só quem já tem mais.",
    "exemplo": "Imagina uma festa de aniversário com um bolo grande: a regra diz que todo mundo ganha um pedaço, e ninguém pode pegar o bolo inteiro só porque chegou primeiro. É esse cuidado que essas regras tentam garantir com o \"bolo\" do país.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Constitucional",
    "subtema": "Nacionalidade e Direitos Políticos",
    "resumoSimples": "Nacionalidade é o \"time\" do país ao qual você pertence, como ser brasileiro. Direitos políticos são as coisas que você pode fazer por causa disso, como votar e se candidatar. Para votar ou ser candidato existem regras, tipo idade mínima e estar certinho na lista de eleitores.",
    "exemplo": "Imagina que só quem veste a camiseta do time pode entrar em campo jogar. Ser brasileiro é vestir a camiseta do \"time Brasil\", e votar é poder entrar em campo para escolher o capitão do time.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "subtema": "Elegibilidade e Registro de Candidatura",
    "resumoSimples": "Elegibilidade é ter os requisitos para poder se candidatar, como idade mínima e não estar proibido de disputar eleição. Registro de candidatura é avisar oficialmente para a Justiça Eleitoral: \"eu quero concorrer\". Só depois disso a pessoa pode aparecer na urna.",
    "exemplo": "Imagina uma corrida na escola em que, antes de correr, você precisa se inscrever na lista da professora e mostrar que tem idade para participar. Só quem está na lista aprovada corre; quem não se inscreveu fica de fora.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "subtema": "Propaganda Eleitoral",
    "resumoSimples": "São as regras de como um candidato pode se divulgar pedindo voto: quando pode começar, o que pode falar e onde pode colocar cartaz. Também é proibido mentir sobre o outro candidato. A ideia é deixar a disputa justa para todo mundo.",
    "exemplo": "Imagina uma eleição para escolher o representante da turma. Só pode colar cartaz pedindo voto a partir de um dia combinado, e ninguém pode inventar mentira sobre o colega concorrente. Quem descumpre pode ser desclassificado.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "subtema": "Condutas Vedadas e Abuso de Poder",
    "resumoSimples": "São coisas proibidas para quem já está no governo e quer se candidatar de novo, como usar dinheiro público ou funcionários para fazer campanha. Abuso de poder é usar a força, o dinheiro ou o cargo de um jeito desleal para ganhar vantagem na eleição.",
    "exemplo": "Imagina que o professor que concorre a diretor usa o material da escola só para fazer propaganda dele, e ainda ameaça dar nota baixa em quem não votar nele. Isso é proibido, porque usa o poder dele de um jeito injusto.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "subtema": "Ações Eleitorais",
    "resumoSimples": "São os pedidos formais que alguém faz à Justiça Eleitoral quando acha que houve trapaça ou desrespeito às regras da eleição, como compra de voto. A Justiça analisa e pode até tirar o candidato do cargo se a trapaça for confirmada.",
    "exemplo": "Imagina que alguém trocou balas por votos na eleição da turma. Um colega percebe e conta para a professora, que é como o juiz da eleição. Ela investiga e, se for verdade, tira o \"prêmio\" de quem trapaceou.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Eleitoral",
    "subtema": "Partidos Políticos e Financiamento",
    "resumoSimples": "Partidos políticos são grupos de pessoas com ideias parecidas que se juntam para disputar eleições juntos. Financiamento é de onde vem o dinheiro para pagar a campanha, que precisa ser declarado e seguir regras, para não virar um jeito escondido de comprar favores.",
    "exemplo": "Imagina um time de futebol que precisa de dinheiro para comprar uniforme e bola. Esse dinheiro tem que vir de um jeito certo e anotado no caderninho, para ninguém desconfiar que pagaram escondido para o time jogar errado.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "subtema": "Direito Internacional Público",
    "resumoSimples": "São as regras que os países combinam entre si para viverem em paz e resolverem problemas juntos, como tratados e acordos. Funciona como combinados entre vizinhos, só que os \"vizinhos\" aqui são países inteiros.",
    "exemplo": "Imagina que várias casas de um condomínio combinam uma regra: \"ninguém joga lixo no quintal do outro\". Os países fazem parecido: assinam acordos combinando como vão se tratar e resolver brigas sem guerra.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "subtema": "Migração e Nacionalidade",
    "resumoSimples": "Migração é quando uma pessoa se muda para morar em outro país, seguindo regras para entrar e ficar, com regras especiais para quem precisou fugir de perigo (refugiado). Nacionalidade é o país que reconhece aquela pessoa como um dos seus.",
    "exemplo": "Imagina uma criança que muda de escola: ela precisa se matricular direitinho na escola nova para poder estudar lá. Migrar para outro país é parecido: precisa seguir os passos certos para morar e ser bem recebido.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "subtema": "Cooperação Jurídica Internacional",
    "resumoSimples": "É quando a Justiça de um país pede ajuda para a Justiça de outro país, como para buscar uma prova ou trazer alguém de volta para responder pelo que fez. Os países se ajudam para que ninguém escape só por atravessar a fronteira.",
    "exemplo": "Imagina que um brinquedo foi roubado e a pessoa fugiu para a casa do vizinho. Sua mãe liga para a mãe do vizinho pedindo ajuda para trazer o brinquedo de volta. Os países fazem isso entre si quando precisam de ajuda para resolver um caso.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "subtema": "Jurisdição e Competência Internacional",
    "resumoSimples": "É a regra que decide qual país tem o direito de julgar um problema quando ele envolve pessoas ou coisas de lugares diferentes. Cada situação tem um jeito próprio de descobrir de quem é a vez de julgar aquilo.",
    "exemplo": "Imagina dois amigos de escolas diferentes que brigaram durante uma viagem. Precisa decidir qual das duas escolas vai resolver a briga: a de um ou a do outro. É isso que ajuda a decidir, só que com países.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Internacional",
    "subtema": "Direito Internacional Privado (LINDB)",
    "resumoSimples": "É o conjunto de regras que ajuda a decidir qual país manda quando um assunto de pessoas comuns envolve mais de um país, como um casamento entre pessoas de países diferentes. A LINDB é como um manual que explica como usar as leis nesses casos.",
    "exemplo": "Imagina que um brinquedo vem com instruções em outro idioma, mas dentro da caixa também tem um papel explicando como usar tudo certinho no seu país. A LINDB é esse papel explicativo: ensina como aplicar as leis quando tem gente de países diferentes envolvida.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "subtema": "Orçamento Público (LOA/LDO/PPA)",
    "resumoSimples": "É como o planejamento de mesada da família toda, mas do país inteiro. Antes de gastar, o governo combina: quanto vai ganhar, no que vai gastar e por quanto tempo esse plano vale. Tem um plano grande de 4 anos, um plano de regras pro ano que vem, e a lista final de tudo que vai ser gasto naquele ano.",
    "exemplo": "Imagina que sua família combina: \"esse ano vamos gastar tanto com escola, tanto com mercado e tanto com passeio\". O PPA é o plano de 4 anos (tipo até você terminar uma fase da escola), a LDO são as regras de como gastar no ano, e a LOA é a lista final de tudo que vai ser comprado naquele ano.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "subtema": "Lei de Responsabilidade Fiscal",
    "resumoSimples": "É uma regra que diz: quem cuida do dinheiro do governo não pode gastar mais do que tem, nem fazer bagunça nas contas. Tem que gastar com cuidado e mostrar pra todo mundo como gastou.",
    "exemplo": "Imagina que o responsável pela pracinha só pode comprar brinquedos novos se tiver dinheiro guardado pra isso, e não pode gastar tudo de uma vez sem avisar quem cuida da pracinha junto com ele. Ele também precisa mostrar certinho no que gastou.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "subtema": "Despesa e Receita Pública",
    "resumoSimples": "Receita é todo o dinheiro que entra nos cofres do governo, como os impostos. Despesa é todo dinheiro que sai, quando o governo paga por escola, hospital, estrada. É igual uma casa: tem o dinheiro que entra e o dinheiro que sai.",
    "exemplo": "Imagina um cofrinho da turma. O dinheiro que as crianças trazem pra rifa é a receita. O dinheiro gasto pra comprar bolas novas pro recreio é a despesa.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "subtema": "Precatórios",
    "resumoSimples": "É quando o governo perde uma \"briga\" na Justiça e fica devendo dinheiro pra alguém. Só que ele não paga na hora - entra numa fila especial de pagamentos e paga depois, seguindo a ordem da fila.",
    "exemplo": "Imagina que a escola prometeu devolver o dinheiro do passeio que foi cancelado, mas só vai devolver ano que vem, e cada criança recebe na ordem que entrou na fila. Essa fila de \"vou te pagar depois\" é o precatório.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Financeiro",
    "subtema": "Transparência Fiscal",
    "resumoSimples": "É a regra que diz que o governo tem que mostrar pra todo mundo como gasta o dinheiro público, sem esconder nada. Assim qualquer pessoa pode ver e conferir.",
    "exemplo": "Imagina um cofrinho de turma que fica em cima da mesa, com um caderninho do lado mostrando tudo que entrou e saiu, pra qualquer coleguinha poder olhar quando quiser.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "subtema": "Princípios e Competência Ambiental",
    "resumoSimples": "São as regras básicas que dizem que a natureza precisa ser cuidada por todo mundo, e que várias pessoas (o país, os estados, as cidades) têm o dever de proteger o meio ambiente, cada um fazendo sua parte.",
    "exemplo": "Imagina uma casa com quintal grande: o pai cuida do jardim inteiro (o país), a mãe cuida de um pedaço (o estado) e a criança cuida do vasinho dela (o município). Todo mundo tem que cuidar da natureza, cada um no seu pedacinho.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "subtema": "Licenciamento Ambiental",
    "resumoSimples": "Antes de construir algo que pode incomodar a natureza, como uma fábrica, a pessoa precisa pedir uma autorização especial mostrando que vai cuidar pra não estragar o meio ambiente.",
    "exemplo": "Imagina que, antes de montar um trampolim gigante no quintal, você precisa pedir pros seus pais um \"sim, pode\", mostrando que não vai machucar as plantinhas nem incomodar o vizinho. Essa autorização é o licenciamento ambiental.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "subtema": "Responsabilidade Ambiental",
    "resumoSimples": "Se alguém suja ou estraga a natureza, tem que consertar e pode ser punido, mesmo que não tenha feito de propósito. Quem estraga, ajuda a arrumar.",
    "exemplo": "Imagina que, brincando, alguém derruba tinta no jardim da escola. Mesmo sem querer, essa pessoa vai ter que ajudar a limpar e replantar as florzinhas. Quem suja, ajuda a limpar.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "subtema": "Espaços Territoriais Protegidos",
    "resumoSimples": "São lugares da natureza tão especiais que ganham uma proteção extra por lei, pra ninguém estragar - como parques e reservas onde não pode construir ou cortar árvores do jeito que quiser.",
    "exemplo": "Imagina uma parte do parquinho da escola marcada com uma fitinha, onde tem um ninho de passarinho, e ninguém pode pisar ali nem mexer em nada. Esse cantinho protegido é como as áreas protegidas da natureza.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Ambiental",
    "subtema": "Código Florestal",
    "resumoSimples": "É o conjunto de regras que diz quanto de mato e árvore cada fazenda ou terreno precisa deixar em pé, pra proteger rios, encostas e a natureza ao redor.",
    "exemplo": "Imagina que, se você tem uma caixa de blocos de montar, seus pais combinam que uma parte da caixa sempre fica guardada e intocada. O Código Florestal é o combinado de quanto de \"mato\" cada terreno precisa deixar guardado.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "subtema": "Segurados e Filiação",
    "resumoSimples": "É sobre quem faz parte do \"clube da Previdência\". Quando a pessoa começa a trabalhar ou contribuir, ela automaticamente entra nesse clube e passa a ter direito a ajuda em caso de doença, aposentadoria e outras situações.",
    "exemplo": "Imagina um clube de brinquedos da escola: assim que você começa a colocar suas moedinhas na caixinha do clube, já vira sócio e pode pegar brinquedo emprestado quando precisar. Virar sócio automaticamente ao contribuir é a filiação.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "subtema": "Benefícios Previdenciários",
    "resumoSimples": "São as \"ajudas\" que a Previdência dá pra quem contribuiu, quando a pessoa precisa - por exemplo quando fica idosa (aposentadoria), fica doente, ou tem um bebê.",
    "exemplo": "Imagina que, depois de guardar moedinhas na caixinha do clube por muito tempo, quando você fica cansado de brincar direto ou se machuca, o clube te dá um brinquedo ou ajuda de volta. Essas ajudas são os benefícios.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "subtema": "Custeio da Seguridade Social",
    "resumoSimples": "É de onde vem o dinheiro pra pagar todas essas ajudas. Ele vem das contribuições dos trabalhadores, das empresas e do próprio governo, que juntos enchem o \"cofre\" da Previdência.",
    "exemplo": "Imagina a caixinha do clube de brinquedos: cada criança bota uma moedinha toda semana, os pais também ajudam, e a escola completa um pouco. Assim a caixinha nunca fica vazia quando alguém precisar de ajuda.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Previdenciário",
    "subtema": "Acidente de Trabalho",
    "resumoSimples": "É quando a pessoa se machuca ou fica doente por causa do trabalho, e por isso tem direito a proteção especial, como ficar de casa recebendo ajuda e ter cuidado com a saúde.",
    "exemplo": "Imagina que um coleguinha se machuca ajudando a arrumar a sala de aula. Como se machucou fazendo a tarefa combinada, ele tem direito a descansar e ser cuidado até melhorar, sem perder o lugar dele na turma.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "subtema": "Conceitos e Princípios",
    "resumoSimples": "É a ideia de que quem compra (o consumidor) geralmente sabe menos e tem menos poder do que quem vende. Por isso a lei dá uma ajuda extra pra proteger quem compra.",
    "exemplo": "Imagina uma criança pequena trocando figurinhas com um adulto que entende muito mais do assunto. Pra troca ser justa, alguém precisa ficar de olho e ajudar a criança a não ser enganada. Essa \"ajuda extra\" é a proteção do consumidor.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "subtema": "Direitos Básicos e Informação",
    "resumoSimples": "Todo consumidor tem direitos que ninguém pode tirar, como saber exatamente o que está comprando, quanto custa, e ser avisado se o produto tem algum risco.",
    "exemplo": "Imagina que, antes de comprar um brinquedo, alguém tem que te contar tudo certinho: do que é feito, se quebra fácil, se tem pilha perigosa. Saber tudo isso antes de decidir é um direito básico seu.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "subtema": "Responsabilidade pelo Fato/Vício",
    "resumoSimples": "Se um produto machuca alguém, isso é um \"fato\". Se o produto vem com defeito e não funciona direito, isso é um \"vício\". Nos dois casos, quem fez ou vendeu tem que resolver, trocar ou consertar.",
    "exemplo": "Imagina que você ganha um carrinho de brinquedo que solta uma peça e machuca seu dedo - isso é o fato. Se o carrinho simplesmente não anda, mas não te machuca - isso é o vício. Nos dois casos, quem vendeu tem que resolver.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "subtema": "Práticas e Contratos de Consumo",
    "resumoSimples": "São as regras sobre como as empresas podem vender e fazer propaganda: não podem enganar, nem colocar coisas escondidas nos combinados (contratos) que prejudiquem o consumidor.",
    "exemplo": "Imagina uma propaganda de brinquedo que promete que ele voa, mas na verdade não voa - isso é enganar, e não pode. E se no \"combinado\" da compra tiver uma letrinha miúda dizendo que você perde o direito de trocar, isso também não vale.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Consumidor",
    "subtema": "Defesa do Consumidor em Juízo",
    "resumoSimples": "Se o consumidor não conseguir resolver o problema sozinho, ele pode pedir ajuda da Justiça. Às vezes até grupos inteiros de consumidores podem reclamar juntos.",
    "exemplo": "Imagina que várias crianças compraram o mesmo brinquedo quebrado. Em vez de cada uma reclamar sozinha, elas podem pedir ajuda de um juiz ou de uma associação pra resolver o problema de todo mundo de uma vez.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "Competência Tributária",
    "resumoSimples": "É tipo um combinado de família: cada um (União, Estados, Municípios e Distrito Federal) já tem os seus impostos certinhos pra cobrar, e ninguém pode pegar o imposto do outro emprestado. Essa divisão já vem escrita nas regras principais do país e não muda.",
    "exemplo": "Imagina que a mamãe deu uma caixa de brinquedos pra cada irmão: um só mexe na caixa vermelha, outro só na azul. Mesmo se um quiser, ele não pode abrir a caixa do irmão — cada um cuida só da sua.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "Limitações ao Poder de Tributar",
    "resumoSimples": "São regras que impedem o governo de cobrar imposto de qualquer jeito. Ele só pode cobrar se tiver uma lei explicando antes, não pode cobrar coisa que já aconteceu no passado e não pode cobrar de igreja, livro ou coisas assim.",
    "exemplo": "Imagina um jogo de tabuleiro em família: as regras precisam estar escritas antes de começar a jogar, ninguém pode inventar regra no meio do jogo, e tem coisas que combinaram que nunca vão valer ponto, tipo 'rezar não dá multa'.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "Obrigação Tributária",
    "resumoSimples": "Quando você faz algo que a lei diz que gera imposto, nasce um dever: pagar aquele valor pro governo. Às vezes também tem um dever menorzinho, como preencher um papel contando o que você fez.",
    "exemplo": "Imagina que, toda vez que você pega um doce escondido do potinho, você fica devendo uma ficha pra mamãe. Além de dar a ficha, você também precisa contar pra ela quantos doces pegou.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "Lançamento e Crédito Tributário",
    "resumoSimples": "É o momento em que o governo faz a conta certinha de quanto você deve de imposto e deixa isso oficial, com valor definido. Antes disso o dever existia meio solto; depois do lançamento vira uma dívida certa, com número exato.",
    "exemplo": "Imagina que a mamãe conta quantos doces você comeu da caixa e escreve num caderninho: 'você deve 5 fichas'. A partir desse momento, a dívida fica registrada e certinha, não é mais só um 'sei lá quanto'.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "Prescrição e Decadência Tributária",
    "resumoSimples": "São prazos que fazem o governo perder o direito de cobrar se demorar demais. Se ele demorar pra fazer a conta da dívida, perde o direito de cobrar (decadência); se já fez a conta mas demorou pra cobrar de verdade, também perde (prescrição).",
    "exemplo": "Imagina um vale-presente que expira: se a mamãe demorar demais pra conferir a caixa de doces, ela perde o direito de descobrir quanto você deve. E se ela já sabe quanto você deve mas esquece de cobrar por muito tempo, também perde o direito de pedir depois.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "Impostos em Espécie",
    "resumoSimples": "São os impostos de cada 'dono' diferente: cada um serve pra uma coisa específica, como imposto sobre a casa, sobre o carro, sobre a renda, sobre vendas. Cada imposto tem seu próprio motivo pra existir.",
    "exemplo": "Imagina potes de doce com etiquetas diferentes: um pote é só pra chiclete, outro só pra chocolate, outro só pra pirulito. Cada imposto é um pote separado, com sua própria função.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Tributário",
    "subtema": "Processo Tributário",
    "resumoSimples": "É o jeito de resolver a briga quando a pessoa acha que não deve aquele imposto. Primeiro dá pra reclamar dentro do próprio governo; se não resolver, dá pra pedir ajuda de um juiz.",
    "exemplo": "Imagina que você acha injusto ter que lavar a louça. Primeiro você conversa com os pais em casa (processo administrativo); se ninguém concorda, você pede pra um adulto de fora, tipo o vovô, decidir quem tem razão (processo judicial).",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "subtema": "Direitos Fundamentais da Criança e do Adolescente",
    "resumoSimples": "Crianças e adolescentes têm prioridade em tudo: saúde, educação, carinho e proteção vêm em primeiro lugar. A família, as pessoas ao redor e o governo têm que garantir isso sempre.",
    "exemplo": "Imagina uma festa de aniversário: as crianças são sempre as primeiras a serem servidas com bolo e suco, antes de todo mundo. É assim que a lei quer que seja com os direitos delas: sempre em primeiro lugar.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "subtema": "Medidas de Proteção",
    "resumoSimples": "São ações pra ajudar uma criança quando ela está em perigo ou sofrendo, e não porque ela fez algo errado. Pode ser levar pra um médico, colocar numa família que cuide dela, ou orientar os pais.",
    "exemplo": "Imagina uma criança sendo maltratada em casa. A escola percebe e chama gente especializada pra ajudar: não é castigo pra criança, é um time cuidando dela pra deixá-la segura.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "subtema": "Ato Infracional e Medidas Socioeducativas",
    "resumoSimples": "Quando um adolescente faz algo que seria crime se fosse feito por um adulto, isso se chama ato infracional. Só que, em vez de ser castigado como adulto, ele recebe medidas pra aprender e mudar de comportamento.",
    "exemplo": "Imagina que uma criança quebra uma regra grave do jogo, tipo roubar uma peça de outro jogador. Em vez de mandá-la pra 'prisão de adulto', ela vai pro 'cantinho de pensar com lição', pra entender o que fez de errado e não repetir.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "subtema": "Adoção e Família Substituta",
    "resumoSimples": "É quando uma criança que não pode ficar com a família de sangue ganha uma nova família pra sempre, de um jeito oficial e definitivo. Depois de adotada, vira filho de verdade, com todos os direitos, e não tem volta.",
    "exemplo": "Imagina um cachorrinho de rua sem dono que é adotado por uma família cheia de amor. A partir daquele dia, ele é da família pra sempre — ninguém pode devolver depois, porque agora é filho de verdade.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito da Criança e do Adolescente",
    "subtema": "Conselho Tutelar",
    "resumoSimples": "É um grupo de pessoas do bairro, escolhidas pela comunidade, que cuida de proteger os direitos das crianças. Elas recebem pedidos de ajuda e agem rápido, mas não são juízes e não julgam crimes.",
    "exemplo": "Imagina que a escola tem uma 'equipe de ajuda' que qualquer criança pode procurar quando precisa de socorro. Eles resolvem rápido, sem precisar ir ao tribunal, só cuidando pra criança ficar bem.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "subtema": "Empresário e Sociedade Empresária",
    "resumoSimples": "Empresário é a pessoa que organiza sozinha um negócio pra vender produtos ou serviços e ganhar dinheiro com isso, de forma profissional. Sociedade empresária é quando duas ou mais pessoas se juntam pra fazer isso juntas, formando um só negócio.",
    "exemplo": "Imagina uma barraquinha de limonada: se só uma criança toca o negócio sozinha, ela é a 'empresária'. Se duas crianças se juntam, dão um nome pra barraquinha e tocam tudo juntas, isso é uma 'sociedade empresária'.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "subtema": "Tipos Societários",
    "resumoSimples": "São os diferentes 'modelos' que uma sociedade pode escolher pra existir, cada um com regras diferentes sobre quem paga se der dívida. Em alguns tipos os donos arriscam só o que investiram, em outros arriscam mais.",
    "exemplo": "Imagina que um time de brincadeira pode escolher entre duas 'camisas': numa camisa, se o time perder o jogo, cada um só perde as próprias fichas; na outra camisa, se perder, todo mundo tem que ajudar a pagar tudo, mesmo além do que apostou.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "subtema": "Nome Empresarial e Estabelecimento",
    "resumoSimples": "Nome empresarial é o nome oficial que identifica o negócio, e estabelecimento é o lugar (físico ou virtual) onde ele funciona. Os dois são protegidos: ninguém pode copiar pra confundir os clientes.",
    "exemplo": "Imagina uma barraquinha de limonada com uma placa 'Limonada da Ana' num cantinho da rua. Nenhuma outra barraquinha pode usar o mesmo nome nem se instalar bem do lado fingindo ser a mesma, pra não enganar quem compra.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "subtema": "Títulos de Crédito e Contratos Empresariais",
    "resumoSimples": "Títulos de crédito são papéis que prometem um pagamento, tipo um cheque ou uma nota promissória, e podem passar de mão em mão até serem cobrados. Contratos empresariais são os combinados que os donos de negócio fazem entre si.",
    "exemplo": "Imagina um bilhetinho onde você escreve 'prometo dar 3 bolinhas de gude pro João na próxima semana'. O João pode até passar esse bilhete pra outra pessoa cobrar as bolinhas de gude no seu lugar.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "subtema": "Propriedade Industrial",
    "resumoSimples": "É a proteção legal pra invenções, marcas e desenhos criados por alguém, garantindo que só o dono pode usar e vender por um tempo. Assim ninguém copia a ideia dos outros sem permissão.",
    "exemplo": "Imagina que você inventa um brinquedo novo e desenha um símbolo bem legal pra ele. Você registra essa invenção e esse desenho, e agora nenhuma outra criança pode copiar e vender como se fosse dela.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Empresarial",
    "subtema": "Recuperação Judicial e Falência",
    "resumoSimples": "Quando uma empresa está em apuros com dívidas, ela pode tentar se reorganizar e pagar aos poucos pra não fechar (recuperação judicial). Se não der jeito mesmo, tudo que ela tem é vendido pra pagar quem é devido, e ela encerra de vez (falência).",
    "exemplo": "Imagina que a barraquinha de limonada ficou sem dinheiro. Primeiro a família tenta um plano pra pagar as dívidas aos poucos e manter a barraquinha aberta. Se não der certo de jeito nenhum, vendem tudo da barraquinha pra pagar quem é devido, e ela fecha para sempre.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Parte Geral",
    "resumoSimples": "Essa parte fala sobre quem pode ter direitos e deveres: as pessoas e as empresas. Ela explica quando isso começa e o que são as coisas (bens) que a lei protege. É tipo o manual de regras básicas que vale pra tudo no Direito Civil.",
    "exemplo": "Imagina que, assim que o bebê nasce e respira, ele já vira uma pessoa pra lei, com nome e direitos, tipo ganhar um brinquedo que já é dele. Antes de nascer, ele ainda não é dono de nada.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Obrigações",
    "resumoSimples": "É quando uma pessoa promete dar, fazer ou não fazer alguma coisa pra outra pessoa. Quem promete se chama devedor, e quem vai receber se chama credor. Se um dos dois não cumprir o combinado, precisa resolver isso de algum jeito.",
    "exemplo": "Imagina que você promete emprestar seu carrinho de brinquedo pro seu amigo amanhã. Você é quem prometeu, e seu amigo é quem vai receber o carrinho. Se você não emprestar, ele pode reclamar porque você não cumpriu o combinado.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Contratos",
    "resumoSimples": "Contrato é um combinado entre pessoas que topam fazer uma troca ou um negócio. Os dois lados decidem as regras juntos e prometem cumprir. Se alguém não cumprir, o outro pode pedir ajuda pra lei resolver.",
    "exemplo": "Imagina que você e sua amiga combinam: eu te dou meu carrinho e você me dá sua boneca. Os dois toparam, então virou um combinado valendo, tipo um contrato de troca de brinquedos.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Responsabilidade Civil",
    "resumoSimples": "Quando alguém causa um estrago ou machuca outra pessoa, tem que consertar ou pagar pelo problema. Às vezes isso acontece porque a pessoa foi descuidada, e em alguns casos ela tem que resolver mesmo sem ter tido culpa direta.",
    "exemplo": "Imagina que, brincando de bola dentro de casa, você quebra o vaso da vovó. Mesmo sem querer, você precisa ajudar a consertar ou repor o vaso, porque foi você quem causou o estrago.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Direitos Reais",
    "resumoSimples": "São as regras sobre ser dono ou poder usar uma coisa, tipo uma casa ou um terreno. Quando você é dono de algo, todo mundo precisa respeitar isso, não só uma pessoa. É diferente de só combinar algo com alguém.",
    "exemplo": "Imagina que você tem uma bicicleta que é sua. Não importa quem apareça, todo mundo tem que respeitar que ela é sua e não pode pegar sem pedir. Ser dono vale pra qualquer pessoa que vir a bicicleta.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Família",
    "resumoSimples": "São as regras sobre como funciona uma família pra lei: casar, morar junto, cuidar dos filhos e ajudar quem precisa de dinheiro pra viver. A ideia principal é proteger todo mundo da família, especialmente as crianças.",
    "exemplo": "Imagina que os pais de um amiguinho se separam. A lei ajuda a decidir com quem ele vai morar e garante que os dois pais continuem cuidando dele, ajudando com comida, escola e carinho.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Sucessões",
    "resumoSimples": "É sobre o que acontece com as coisas de uma pessoa quando ela morre. Esses bens passam pra família dela, que são chamados de herdeiros. Às vezes a pessoa deixa escrito antes de morrer como quer dividir tudo, e isso se chama testamento.",
    "exemplo": "Imagina que o vovô tinha uma casinha de bonecas enorme. Quando ele morre, essa casinha passa pros netos, que são os herdeiros. Se o vovô deixou escrito quem fica com o quê, todo mundo segue esse combinado.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Civil",
    "subtema": "Proteção de Dados/LGPD",
    "resumoSimples": "São regras pra proteger as informações sobre você, tipo seu nome, endereço e fotos. As empresas só podem usar esses dados se tiverem um bom motivo, e muitas vezes precisam da sua autorização. Você sempre pode pedir pra saber ou apagar o que guardaram sobre você.",
    "exemplo": "Imagina que uma lojinha de brinquedos quer guardar seu nome e endereço pra te mandar um convite de aniversário. Ela só pode fazer isso se você (ou seus pais) deixar, e dá pra pedir pra apagar essas informações quando quiser.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Princípios da Administração Pública",
    "resumoSimples": "São as regras de bom comportamento que o governo tem que seguir sempre: fazer só o que a lei permite, tratar todo mundo igual, ser honesto, mostrar o que está fazendo e trabalhar bem. É tipo um código de bons modos pra quem cuida das coisas de todos.",
    "exemplo": "Imagina uma professora organizando uma brincadeira na escola: ela segue as regras, não favorece só um aluno, é sincera, conta pra todo mundo como vai funcionar e faz tudo direitinho. Assim é o governo cuidando das coisas públicas.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Atos Administrativos",
    "resumoSimples": "É quando o governo toma uma decisão oficial que já vale pra valer, tipo dar uma licença ou proibir alguma coisa. Todo mundo confia que essa decisão está certa até que se prove o contrário, e as pessoas precisam obedecer.",
    "exemplo": "Imagina que a diretora da escola avisa, por um bilhete oficial, que o parquinho vai fechar pra manutenção. Todo mundo segue esse aviso, porque veio de quem manda, mesmo sem perguntar o motivo na hora.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Poderes Administrativos",
    "resumoSimples": "São as ferramentas que o governo usa pra organizar as coisas: mandar em quem trabalha pra ele, criar regras extras pra completar as leis, dar bronca quando alguém erra, e até limitar o que a gente faz pra proteger todo mundo.",
    "exemplo": "Imagina um professor de educação física: ele manda os times se organizarem, cria regras extras pro jogo, e pode tirar da quadra quem não seguir as regras de segurança. Ele está usando vários tipos de poder ao mesmo tempo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Licitações e Contratos Administrativos",
    "resumoSimples": "Quando o governo precisa comprar algo ou contratar alguém pra fazer um serviço, ele não pode escolher de qualquer jeito. Precisa abrir uma disputa justa pra ver quem oferece o melhor negócio, e depois todo mundo assina um papel combinando as regras.",
    "exemplo": "Imagina que a escola precisa comprar bolas novas e chama três lojinhas pra ver qual oferece o melhor preço e qualidade. Quem ganhar essa disputa é quem vai vender as bolas, e aí combinam tudo em um contrato.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Serviços Públicos e Concessões",
    "resumoSimples": "São as coisas que o governo precisa garantir pra todo mundo, tipo água, luz e ônibus. Às vezes o próprio governo faz isso, e às vezes deixa uma empresa fazer no lugar dele, mas sempre ficando de olho pra continuar bom pra população.",
    "exemplo": "Imagina que a prefeitura não consegue cuidar sozinha da limpeza de todos os parques, então chama uma empresa pra fazer esse serviço. A empresa cuida dos parques, mas a prefeitura continua fiscalizando pra ver se está tudo certo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Intervenção do Estado na Propriedade",
    "resumoSimples": "Às vezes o governo precisa usar ou até tomar um terreno ou uma casa de alguém pra fazer algo importante pra todo mundo, tipo construir uma estrada. Quando isso acontece, geralmente tem que pagar um valor justo pro dono.",
    "exemplo": "Imagina que a prefeitura precisa construir uma escola bem no lugar onde tem uma casa. Ela pode pedir pra usar aquele terreno, mas tem que pagar direitinho pro dono da casa por isso.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Agentes Públicos e Regime Disciplinar",
    "resumoSimples": "São as pessoas que trabalham pro governo, tipo professores de escola pública e fiscais. Elas têm regras de comportamento pra seguir, e se fizerem algo errado no trabalho, podem receber um castigo, como uma advertência ou até perder o emprego.",
    "exemplo": "Imagina um zelador da escola que trabalha pro governo. Se ele faltar sem avisar várias vezes, pode receber uma bronca oficial. Se fizer algo bem grave, pode até ser mandado embora, seguindo as regras certinhas.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Responsabilidade Civil do Estado",
    "resumoSimples": "Se alguém que trabalha pro governo causa um estrago fazendo seu trabalho, é o próprio governo que tem que consertar ou pagar, mesmo que ninguém tenha feito por querer. Depois, se o funcionário teve culpa, o governo pode cobrar esse valor dele.",
    "exemplo": "Imagina que um motorista de ônibus da prefeitura bate sem querer no portão da sua casa enquanto trabalha. Quem paga o conserto é a prefeitura, porque ele é funcionário dela. Depois, se ele foi descuidado, a prefeitura pode pedir esse dinheiro de volta pra ele.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Improbidade Administrativa",
    "resumoSimples": "É quando alguém que trabalha pro governo faz coisa errada de propósito, tipo roubar dinheiro público ou usar o cargo pra se dar bem escondido. Isso é considerado muito grave, e a pessoa pode perder o cargo, pagar multa e ter outros castigos sérios.",
    "exemplo": "Imagina um responsável pela merenda da escola que fica com o dinheiro que era pra comprar comida das crianças e não entrega nada. Isso é desonesto e muito errado, e ele vai ter que devolver o dinheiro e receber um castigo grande.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Administrativo",
    "subtema": "Controle da Administração",
    "resumoSimples": "Alguém sempre fica de olho pra ver se o governo está fazendo tudo certinho, gastando bem o dinheiro e seguindo as regras. Esse olho vigilante pode ser dentro do próprio governo, um órgão de fora, ou até a Justiça, se precisar corrigir algo errado.",
    "exemplo": "Imagina que, além da diretora cuidar da escola, tem também um conselho de pais que confere se o dinheiro da cantina está sendo bem usado. Se acharem algo errado, podem pedir pra corrigir ou levar pra alguém mais alto resolver.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Competência e Partes",
    "resumoSimples": "Cada juiz cuida de um tipo de assunto, tipo cada professor cuida de uma turma diferente. Competência é descobrir qual juiz é o certo pra resolver aquele problema. E as partes são as pessoas que estão brigando no processo: quem reclama (autor) e quem é acusado (réu).",
    "exemplo": "Imagina uma escola com professores diferentes: um cuida de briga de brinquedo, outro cuida de bagunça no recreio. Se você brigar por causa de um brinquedo, precisa procurar o professor certo, não qualquer um. E as partes são você e o coleguinha que brigou com você.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Petição Inicial e Resposta do Réu",
    "resumoSimples": "Petição inicial é a cartinha que a pessoa que se sentiu prejudicada escreve pro juiz, contando o que aconteceu e pedindo ajuda. Resposta do réu é a cartinha que a outra pessoa escreve se defendendo, contando a versão dela.",
    "exemplo": "Imagina que a Ana escreve pro juiz: \"o Pedro pegou meu urso de pelúcia e não devolveu, eu quero ele de volta!\" Essa é a petição inicial. Aí o Pedro escreve de volta: \"não é verdade, ela me deu de presente!\" Essa é a resposta dele.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Tutelas Provisórias",
    "resumoSimples": "Às vezes não dá pra esperar o processo inteiro terminar, porque alguém pode se machucar ou perder algo importante enquanto espera. Aí o juiz dá uma ordem rápida e provisória pra resolver isso logo, e só depois decide tudo com calma.",
    "exemplo": "Imagina que o sorvete da Maria está derretendo enquanto ela espera a professora decidir de quem ele é. Não dá pra esperar, tem que comer logo! Então a professora dá uma ordem rápida: \"come agora, depois eu decido direitinho quem tinha razão.\"",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Provas",
    "resumoSimples": "Prova é tudo que ajuda a mostrar pro juiz que você está falando a verdade. Pode ser uma foto, um bilhete, ou alguém que viu o que aconteceu e conta pro juiz.",
    "exemplo": "Imagina que você diz que não foi você quem quebrou o vaso. Você mostra pro juiz um vídeo do gato pulando na estante. Esse vídeo é a prova que ajuda o juiz a acreditar em você.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Sentença e Coisa Julgada",
    "resumoSimples": "Sentença é quando o juiz bate o martelo e diz quem ganhou a briga. Coisa julgada é quando essa decisão fica definitiva pra sempre, e ninguém pode ficar discutindo tudo de novo depois.",
    "exemplo": "Imagina que a professora decidiu que o brinquedo é da Julia. Depois de um tempo sem ninguém reclamar dessa decisão, ela vira regra fixa: ninguém pode chegar semana que vem pedindo pra decidir tudo de novo.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Recursos",
    "resumoSimples": "Recurso é quando você não concorda com a decisão e pede pra outro juiz, mais graduado, olhar de novo o seu caso e ver se está certo.",
    "exemplo": "Imagina que a professora da sua sala decidiu que você errou. Você acha injusto e vai conversar com a diretora, pedindo pra ela olhar de novo o caso e ver se a professora acertou mesmo.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Cumprimento de Sentença e Execução",
    "resumoSimples": "De nada adianta o juiz decidir se ninguém obedece. Cumprimento de sentença e execução é a parte em que a decisão vira realidade de verdade, tipo tomando o dinheiro ou as coisas de quem devia pagar e não pagou.",
    "exemplo": "Imagina que a professora decidiu que o João tem que devolver o carrinho pra Sofia, mas ele não devolve. Aí alguém vai lá, pega o carrinho na mochila dele e entrega pra Sofia. Isso é fazer a decisão acontecer de verdade.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Civil",
    "subtema": "Procedimentos Especiais",
    "resumoSimples": "Nem toda briga se resolve do mesmo jeito. Pra algumas situações diferentes existem regras próprias, feitas sob medida pra aquele tipo de problema.",
    "exemplo": "Imagina que dividir os brinquedos de um coleguinha que mudou de escola é diferente de resolver uma briga comum de recreio. Pra isso existe um jeito especial de organizar, com regras próprias, porque a situação é diferente do dia a dia.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "subtema": "Relação de Emprego",
    "resumoSimples": "Relação de emprego é quando uma pessoa trabalha sempre pra alguém, seguindo as ordens desse alguém, sem poder mandar outra pessoa no seu lugar, e recebendo dinheiro por isso. Quando tem tudo isso junto, essa pessoa é empregada e tem direitos especiais.",
    "exemplo": "Imagina que o Tio Carlos trabalha toda semana na padaria do Seu Zé, sempre ele mesmo (não manda o irmão no lugar dele), seguindo o horário e as ordens do Seu Zé, e recebendo um salário certinho. Isso é uma relação de emprego.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "subtema": "Jornada e Descanso",
    "resumoSimples": "Ninguém pode trabalhar o dia inteiro sem parar. Existem regras dizendo quantas horas por dia dá pra trabalhar, e todo mundo tem direito de descansar, comer, dormir e tirar férias.",
    "exemplo": "Imagina que na escola tem hora de estudar e hora de recreio. Se estudasse o dia inteiro sem parar, ninguém aguentaria. No trabalho é parecido: depois de um tempo trabalhando, a pessoa tem direito a uma pausa e, no fim do ano, férias pra descansar de verdade.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "subtema": "Remuneração e Verbas Rescisórias",
    "resumoSimples": "Remuneração é o dinheiro e as outras coisinhas que a pessoa ganha por trabalhar. Quando o trabalho acaba, tem uma listinha de valores que ainda precisam ser pagos pra ela, como um acerto final de contas.",
    "exemplo": "Imagina que você ajudou um amigo a organizar a festa dele o mês todo e ele te pagava toda semana: isso é a remuneração. Quando a festa termina e vocês param de trabalhar juntos, ele ainda te deve um dinheirinho que ficou faltando pagar. Esse acerto final são as verbas rescisórias.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "subtema": "Segurança e Saúde no Trabalho",
    "resumoSimples": "É um conjunto de cuidados pra ninguém se machucar ou ficar doente enquanto trabalha. Quem manda no trabalho precisa dar equipamentos de proteção e deixar tudo seguro.",
    "exemplo": "Imagina um construtor trabalhando numa obra. Ele usa capacete, luvas e cinto de segurança porque o dono da obra precisa garantir que ele não se machuque. Isso é cuidar da segurança e saúde no trabalho.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "subtema": "Direito Coletivo do Trabalho",
    "resumoSimples": "Às vezes um trabalhador sozinho não consegue mudar as coisas. Aí todos os trabalhadores se juntam num grupo (sindicato) pra pedir melhorias juntos, com mais força, e até podem parar de trabalhar (greve) pra serem ouvidos.",
    "exemplo": "Imagina que uma criança sozinha pede pro professor mais tempo de recreio e ele não escuta. Mas se a turma inteira se junta e pede junto, fica bem mais difícil o professor dizer não. Isso é o poder de pedir coisas em grupo.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "subtema": "Grupo Econômico e Terceirização",
    "resumoSimples": "Grupo econômico é quando várias empresas são como irmãs, do mesmo dono, e por isso todas ajudam a pagar se uma delas dever algo pro trabalhador. Terceirização é quando uma empresa chama outra empresa pra fazer um serviço, em vez de contratar a pessoa direto.",
    "exemplo": "Imagina três lanchonetes de brinquedo que são do mesmo tio (grupo econômico): se uma delas não paga o funcionário, as outras duas ajudam a pagar. E se essa lanchonete contrata uma empresa de limpeza pra fazer a faxina, em vez de ter um faxineiro só dela, isso é terceirização.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito do Trabalho",
    "subtema": "Estabilidades e Garantias de Emprego",
    "resumoSimples": "Tem momentos em que a lei protege o trabalhador e não deixa ele ser mandado embora sem um motivo bem forte, mesmo que o chefe quisesse. Isso acontece em fases mais delicadas, tipo quando a pessoa está grávida ou se machucou trabalhando.",
    "exemplo": "Imagina que a Dona Marta está esperando bebê e trabalha numa loja. Enquanto ela está grávida e um tempinho depois que o bebê nasce, o dono da loja não pode simplesmente mandar ela embora sem um motivo muito sério. Isso é a estabilidade protegendo ela nesse momento especial.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Teoria Geral do Crime",
    "resumoSimples": "Isso explica o que precisa acontecer pra algo virar 'crime' de verdade. Não basta fazer algo ruim: tem que ter uma ação proibida por lei, e a pessoa precisa ter culpa por ter feito aquilo. Se faltar uma dessas partes, não é crime.",
    "exemplo": "Imagina que um brinquedo cai da estante sozinho e quebra, sem ninguém encostar. Ninguém teve culpa, então não é crime de ninguém. Mas se o Pedro joga o brinquedo no chão de propósito, sabendo que ia quebrar, aí sim ele fez por querer - e isso conta.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Aplicação da Lei Penal",
    "resumoSimples": "Isso mostra quando e onde uma regra vale. Uma pessoa só pode ser punida por algo que já era proibido antes de ela fazer, e a regra vale principalmente pro que acontece dentro do país.",
    "exemplo": "Imagina que a escola cria uma regra nova: 'não pode trazer bolinha de gude'. Só quem trouxer DEPOIS da regra existir pode ser advertido. Quem trouxe antes, quando ainda não tinha regra nenhuma, não pode ser punido por isso.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Concurso de Pessoas e de Crimes",
    "resumoSimples": "Concurso de pessoas é quando mais de uma pessoa ajuda a fazer a mesma coisa errada. Concurso de crimes é quando a mesma pessoa faz mais de uma coisa errada, uma depois da outra.",
    "exemplo": "Imagina que o João derruba a torre de blocos do amigo e o Lucas fica de olheiro avisando se alguém vem - os dois ajudaram, cada um com seu papel. Se o João ainda pega o lanche do amigo depois, ele fez duas coisas erradas diferentes, uma atrás da outra.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Crimes contra a Pessoa",
    "resumoSimples": "São as regras bem sérias que protegem a vida e o corpo de cada pessoa, pra ninguém machucar ou fazer mal a outra pessoa de propósito.",
    "exemplo": "Imagina que, numa briga de recreio, um coleguinha empurra o outro com força e ele se machuca o braço. Machucar o corpo de alguém é muito errado, por isso existe uma regra bem séria que protege todo mundo disso.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Crimes contra o Patrimônio",
    "resumoSimples": "São as regras que protegem as coisas que pertencem a cada pessoa, pra ninguém pegar ou estragar o que não é seu.",
    "exemplo": "Imagina que a Maria pega o brinquedo do irmão escondido, sem pedir e sem devolver. Isso é errado porque o brinquedo é do irmão, e existe uma regra pra proteger o que é de cada um.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Crimes contra a Dignidade Sexual",
    "resumoSimples": "São regras muito sérias que dizem que o corpo de cada pessoa pertence só a ela. Ninguém pode fazer nada com o corpo de outra pessoa sem ela concordar, e quem desrespeita isso comete um crime muito grave.",
    "exemplo": "Pensa assim: cada pessoa é dona do seu próprio corpo, do mesmo jeito que cada um é dono das suas coisas. Ninguém pode mexer ou fazer nada com o que é do outro sem pedir e sem a pessoa deixar - e com o corpo é ainda mais sério, porque a lei protege isso com muito cuidado.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Crimes contra a Administração Pública",
    "resumoSimples": "São regras que protegem o funcionamento correto do governo e das repartições, pra ninguém enganar ou usar mal o dinheiro e o poder que são de todo mundo.",
    "exemplo": "Imagina que o responsável pelo dinheiro da escola, guardado pra comprar giz de cera pra turma toda, usa esse dinheiro pra comprar doce só pra ele. Isso é errado porque o dinheiro era de todos, e ele usou mal a confiança que tinha.",
    "seedVersion": 1
  },
  {
    "territorio": "Direito Penal",
    "subtema": "Penas e Extinção da Punibilidade",
    "resumoSimples": "Pena é o castigo que a lei manda dar pra quem cometeu um crime. Extinção da punibilidade é quando, por algum motivo (muito tempo passou, a pessoa morreu, entre outros), esse castigo não pode mais ser aplicado.",
    "exemplo": "Imagina que a professora combinou: 'quem quebrar o brinquedo fica uma semana sem parquinho' - isso é a pena. Mas se passar tempo demais e ninguém aplicar o castigo, ou a criança já mudou de escola, o castigo não vale mais - isso é a extinção.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "subtema": "Competência da Justiça do Trabalho",
    "resumoSimples": "Isso define quais brigas devem ser resolvidas pelo juiz do trabalho, e não por outro juiz. Ele cuida principalmente das questões entre patrão e empregado.",
    "exemplo": "Imagina que na escola tem professores especialistas: um resolve briga de brinquedo, outro resolve briga de merenda. Se a briga é sobre trabalho - tipo um patrão que não pagou o empregado - quem resolve é o juiz especialista em trabalho, ninguém mais.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "subtema": "Atos, Prazos e Nulidades",
    "resumoSimples": "São as regras de como e quando cada coisa deve acontecer dentro do processo. Cada ato tem um prazo certo, e se alguém fizer errado ou fora do prazo, aquele ato pode ser anulado.",
    "exemplo": "Imagina que numa gincana cada equipe tem um horário certo pra entregar a tarefa. Se entregar atrasado ou de um jeito que não segue as regras combinadas, aquela tarefa é desclassificada - não conta mais.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "subtema": "Provas no Processo do Trabalho",
    "resumoSimples": "São os jeitos de mostrar pro juiz que o que a pessoa está dizendo é verdade - como documentos e testemunhas - pra ele descobrir quem tem razão.",
    "exemplo": "Imagina que dois colegas discutem sobre quem quebrou o brinquedo. Pra saber a verdade, o professor pergunta pra quem viu (testemunha) e olha o vídeo da câmera (documento). Assim ele descobre o que aconteceu antes de decidir.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "subtema": "Recursos Trabalhistas",
    "resumoSimples": "São os pedidos que a pessoa faz pra um juiz mais graduado olhar de novo uma decisão que ela achou injusta, pra ver se muda o resultado.",
    "exemplo": "Imagina que o professor da sala decidiu algo que a criança achou injusto. Ela pode pedir pra diretora, que está acima do professor, olhar o caso de novo e ver se a decisão foi certa ou se precisa mudar.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "subtema": "Execução Trabalhista",
    "resumoSimples": "É a etapa em que, depois que o juiz já decidiu que o empregado tem razão, alguém garante que o patrão realmente cumpra e pague o que deve.",
    "exemplo": "Imagina que o juiz já disse: 'o patrão tem que devolver o brinquedo que pegou emprestado e não devolveu'. Na execução, se ele ainda não devolveu sozinho, alguém vai lá e garante que o brinquedo realmente volte pro dono.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo do Trabalho",
    "subtema": "Dissídios Coletivos",
    "resumoSimples": "É quando um grupo inteiro de trabalhadores e as empresas não conseguem se entender sobre as regras de trabalho, e pedem pra um juiz decidir de uma vez a regra que vale pra todo o grupo.",
    "exemplo": "Imagina que a turma toda quer mudar uma regra do recreio, mas a diretoria não concorda. Em vez de cada aluno reclamar sozinho, a turma toda pede pra uma autoridade decidir a regra nova que vai valer pra todo mundo.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Inquérito Policial e Investigação",
    "resumoSimples": "É a fase em que a polícia investiga pra descobrir o que aconteceu e quem fez, antes de ir pro juiz. É só uma pesquisa, uma coleta de pistas — ninguém é considerado culpado ainda nessa hora. Depois que junta as pistas, a polícia manda tudo pro Ministério Público decidir o que fazer.",
    "exemplo": "Imagina que sumiu um brinquedo na sala de aula. Antes de contar pra diretora quem foi, a professora primeiro pergunta pra todo mundo, olha as pistas e junta as informações. Só depois ela entrega tudo pronto pra diretora decidir. Isso é o inquérito: juntar pistas antes de qualquer decisão.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Ação Penal",
    "resumoSimples": "É o momento em que alguém pede formalmente pro juiz olhar o caso e decidir se a pessoa fez mesmo aquilo. Às vezes quem pede é o Ministério Público, que cuida de defender as regras pra todo mundo, e às vezes é a própria vítima. Sem esse pedido, o juiz não pode começar a julgar sozinho.",
    "exemplo": "Imagina que alguém quebrou de propósito o brinquedo do coleguinha. Pra resolver isso do jeito certo, alguém precisa ir até a diretora e pedir: \"por favor, olha esse caso\". Só depois desse pedido é que a diretora pode analisar e decidir.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Provas no Processo Penal",
    "resumoSimples": "São as coisas que mostram o que realmente aconteceu, tipo pistas, testemunhas e documentos. Só valem as provas conseguidas do jeito certo, seguindo as regras — prova pega de forma errada não pode ser usada. Quem acusa precisa mostrar provas de verdade, não pode ser só achismo.",
    "exemplo": "Imagina uma investigação de quem comeu o biscoito escondido. Vale contar o que alguém viu de verdade ou achar migalhas no bolso do suspeito. Mas não vale espiar escondido dentro da mochila do coleguinha sem pedir licença — prova pega de jeito errado não conta.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Prisões e Medidas Cautelares",
    "resumoSimples": "São jeitos de proteger o processo enquanto ele não termina, tipo prender alguém antes do julgamento, mas só quando é realmente necessário. Não é castigo ainda, é pra garantir que a pessoa não fuja, não atrapalhe ou não faça de novo. Também existem opções mais leves, como usar tornozeleira ou ter que se apresentar toda semana, sem precisar prender.",
    "exemplo": "Imagina um aluno que vive aprontando e pode fugir da escola no meio do recreio. Enquanto a diretora não decide o castigo final, ela pede pra ele ficar sempre perto da inspetora. Não é o castigo definitivo, é só pra garantir que nada de errado aconteça antes da decisão.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Procedimentos (comum e júri)",
    "resumoSimples": "É o caminho de passos que o processo segue até chegar numa decisão. O caminho comum serve pra maioria dos casos, e o juiz decide sozinho. Já o júri é usado pros crimes mais graves contra a vida, e quem decide não é só o juiz, é um grupo de pessoas comuns escolhidas pra ajudar.",
    "exemplo": "Imagina duas filas na escola: numa fila normal, a inspetora resolve tudo sozinha. Numa fila especial, pra brigas muito grandes, vários alunos escolhidos se juntam pra ajudar a decidir junto com a diretora. Cada fila tem seus próprios passos até chegar ao fim.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Recursos Penais",
    "resumoSimples": "É quando alguém não concorda com a decisão do juiz e pede pra outro juiz, mais experiente, olhar o caso de novo. Serve pra corrigir erros e dar mais uma chance de revisão. Não pode ser usado só porque a pessoa não gostou do resultado, precisa ter um motivo de verdade.",
    "exemplo": "Imagina que a professora corrigiu uma prova errado e o aluno acha injusto. Ele pode pedir pra coordenadora olhar a prova de novo, explicando o motivo, pra ver se a professora realmente errou.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Execução Penal",
    "resumoSimples": "É a fase depois que o juiz já decidiu, quando a pessoa precisa realmente cumprir o castigo, tipo ficar presa ou fazer serviço comunitário. Nessa fase existem regras pra cuidar de como isso acontece, e a pessoa pode ganhar benefícios se se comportar bem, tipo sair mais cedo. Não é mais hora de discutir se é culpada, é hora de cumprir o combinado.",
    "exemplo": "Imagina que um aluno foi proibido de jogar bola no recreio por uma semana, porque quebrou uma regra. Agora não dá mais pra ficar discutindo se ele fez ou não — ele só precisa cumprir o castigo. Se ele se comportar super bem, pode até ganhar um dia a menos de castigo.",
    "seedVersion": 1
  },
  {
    "territorio": "Processo Penal",
    "subtema": "Nulidades",
    "resumoSimples": "É quando alguma parte do processo foi feita errado, sem seguir as regras importantes, e por isso não pode valer. Tem erro pequeno que não estraga tudo, e tem erro grande que faz aquela parte, ou o processo inteiro, ter que ser refeita. Serve pra garantir que ninguém seja julgado de um jeito injusto.",
    "exemplo": "Imagina um jogo de tabuleiro em que alguém trapaceou numa rodada importante, jogando fora da vez e decidindo sozinho quem ganhou. Se a trapaça for grande, essa rodada não vale e precisa ser jogada de novo, do jeito certo.",
    "seedVersion": 1
  }
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
