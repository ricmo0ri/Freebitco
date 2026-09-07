// Camada narrativa: dá um "porquê" a cada território (por que esse assunto
// existe, o que está em jogo) e marca os grandes momentos da jornada —
// início, cada reino libertado, e a jornada completa. É conteúdo estático
// puro: não representa nenhuma regra jurídica, só contexto e motivação.
var HistoriaSeed = (function () {
  var INTRO = {
    titulo: 'Sua jornada começa aqui',
    texto: 'Você é um(a) Aprendiz da Ordem, prestes a atravessar 20 reinos do Direito até conquistar o direito de carregar a toga. Cada reino guarda seu próprio desafio — e alguns escondem guardiões que só caem depois de muita prática. Não existe atalho: só progresso, um acerto de cada vez. Boa sorte, Aprendiz.',
    botao: 'Começar minha jornada'
  };

  var FINAL = {
    titulo: 'Você se tornou Advogado(a)',
    texto: 'Os 20 reinos reconhecem sua marca. Você atravessou territórios de lei seca, tribunais de sombra, cofres, fortalezas e até uma torre de filosofia — e chegou aqui sabendo muito mais do que quando começou. A Ordem não tem mais nada a te ensinar que só a prática real completa. Continue revisando: mesmo advogado formado nunca para de estudar.'
  };

  // Chave = disciplina.nome (nome jurídico oficial, não o nome fantasia).
  var LORE = {
    'Ética': {
      abertura: 'Antes de pisar em qualquer outro reino, todo aprendiz jura lealdade à Ordem. Aqui não se discute lei — discute-se caráter: o que um(a) advogado(a) pode fazer, o que nunca deve fazer, e o preço de quebrar a palavra. É o primeiro reino porque, sem ele, nenhum outro título vale nada.',
      liberado: 'A Ordem reconhece você como um dos seus. O selo da Ética está guardado — e vai te seguir em todos os outros reinos.'
    },
    'Direito Constitucional': {
      abertura: 'No topo de todos os reinos fica a Constituição — a lei que dá ordem às outras leis. Quem domina este reino aprende os alicerces que sustentam tudo: direitos que ninguém pode tirar, e as regras de como o próprio poder se organiza. Ignorar este reino é construir uma casa sem fundação.',
      liberado: 'Você domina os alicerces. A partir de agora, entende por que toda lei, em algum momento, presta contas a este reino.'
    },
    'Direito Penal': {
      abertura: 'Aqui se decide a linha entre o que é apenas errado e o que a lei chama de crime. É um território de regras rígidas de propósito: ninguém pode ser punido por algo que a lei não previu antes. Aprender aqui é aprender os limites do poder de punir.',
      liberado: 'Você domina os limites entre o proibido e o permitido — e por que a lei exige clareza antes de punir.'
    },
    'Processo Penal': {
      abertura: 'Chamam este lugar de Tribunal das Sombras porque é aqui que se decide, passo a passo, como alguém acusado de um crime é investigado, julgado e, se for o caso, condenado — sem atalhos. Cada etapa existe pra impedir que a pressa vire injustiça.',
      liberado: 'As sombras não te assustam mais. Você entende o caminho inteiro entre a acusação e a decisão final.'
    },
    'Direito Civil': {
      abertura: 'Este é o maior reino de todos — o das relações entre pessoas comuns: contratos, famílias, heranças, danos causados e reparados. Quase toda disputa entre duas pessoas passa, cedo ou tarde, por aqui.',
      liberado: 'Você domina o reino mais vasto de todos: as regras que organizam a vida entre as pessoas.'
    },
    'Direito do Trabalho': {
      abertura: 'Aqui moram patrões e empregados, e as regras que equilibram essa relação naturalmente desigual: jornada, salário, descanso, proteção. Quem domina este reino entende por que a lei intervém quando um lado tem mais poder que o outro.',
      liberado: 'Você entende o equilíbrio entre quem contrata e quem trabalha — e por que a lei pesa a balança.'
    },
    'Direito Tributário': {
      abertura: 'Todo reino precisa de um cofre, e este é o que financia o Estado inteiro. Aqui se aprende quem pode cobrar o quê, com quais limites, e o que acontece quando a cobrança passa do ponto — porque até o cofre do rei tem regras.',
      liberado: 'Você conhece as regras do cofre: quem cobra, quanto, e onde a cobrança encontra seu limite.'
    },
    'Direito Empresarial': {
      abertura: 'Uma república guiada por quem assume riscos: empresários e sociedades que produzem, vendem e às vezes quebram. Aqui se aprende como negócios nascem, como se organizam, e o que acontece quando as coisas dão errado.',
      liberado: 'Você entende como uma ideia vira negócio — e o que a lei exige em cada etapa desse caminho.'
    },
    'Direito Administrativo': {
      abertura: 'Uma fortaleza cheia de regras porque quem governa não pode fazer o que quiser: só o que a lei permite. Aqui se aprende como o poder público age, contrata, pune e presta contas — e por que ele responde por seus próprios erros.',
      liberado: 'Você entende os muros da fortaleza: até quem manda tem limites, e você sabe quais são.'
    },
    'Processo Civil': {
      abertura: 'Um labirinto de passos que qualquer disputa civil precisa atravessar até chegar numa decisão final — e depois, fazer essa decisão valer de verdade. Perder-se aqui é fácil; por isso cada corredor tem um propósito.',
      liberado: 'Você não se perde mais no labirinto: conhece o caminho do início da briga até o fim de verdade.'
    },
    'Processo do Trabalho': {
      abertura: 'Uma engrenagem própria, feita sob medida pra resolver rápido as disputas entre quem trabalha e quem contrata. As peças se encaixam diferente do Processo Civil comum — e é preciso saber onde cada uma entra.',
      liberado: 'As engrenagens já não emperram: você sabe como uma disputa trabalhista roda do início ao fim.'
    },
    'Direitos Humanos': {
      abertura: 'Um santuário que protege o que nenhum país, sozinho, pode desrespeitar: dignidade, liberdade, vida. Aqui as regras vêm de acordos entre nações inteiras — e valem mesmo quando um governo tenta ignorá-las.',
      liberado: 'Você entende o que protege as pessoas mesmo quando um país tenta esquecer.'
    },
    'Direito Ambiental': {
      abertura: 'Uma floresta que pertence a todo mundo e a ninguém ao mesmo tempo — por isso precisa de regras próprias. Aqui se aprende quem responde quando a natureza é machucada, mesmo sem querer.',
      liberado: 'Você entende as regras da floresta: quem cuida, quem responde, e por quê.'
    },
    'Direito do Consumidor': {
      abertura: 'Um mercado onde quem vende geralmente sabe mais do que quem compra — e a lei existe pra equilibrar essa balança. Aqui se aprende os direitos que protegem quem só quer comprar sem ser enganado.',
      liberado: 'Você entende as regras do mercado: o que protege quem compra, sempre.'
    },
    'Direito da Criança e do Adolescente': {
      abertura: 'Uma vila com prioridade absoluta: tudo aqui existe pra proteger quem ainda está crescendo. Aprender este reino é entender por que a lei trata crianças e adolescentes de um jeito completamente diferente dos adultos.',
      liberado: 'Você entende por que esta vila vem sempre em primeiro lugar.'
    },
    'Direito Internacional': {
      abertura: 'Aqui não existe um único rei: são vários países tentando conviver, comerciar e resolver brigas sem guerra. As regras deste reino nascem de acordos, não de uma única lei — e mudam conforme o mundo muda.',
      liberado: 'Você atravessa as fronteiras do mundo sabendo como países resolvem suas diferenças.'
    },
    'Filosofia do Direito': {
      abertura: 'Uma torre de onde se enxerga tudo de longe: por que existem leis, o que faz uma lei ser justa, e quem decide isso. Não tem prova de flagrante nem prazo processual aqui — só as perguntas que sustentam todos os outros reinos.',
      liberado: 'Do topo da torre, você entende por que os outros 19 reinos existem.'
    },
    'Direito Eleitoral': {
      abertura: 'Uma arena onde se decide, a cada eleição, quem vai representar o povo — com regras rígidas pra ninguém trapacear no caminho. Aqui se aprende como uma candidatura nasce, se defende, e pode até cair.',
      liberado: 'Você entende as regras da arena: como se disputa, e como se joga limpo.'
    },
    'Direito Financeiro': {
      abertura: 'Diferente do cofre dos tributos, que arrecada, esta tesouraria decide como o dinheiro público é planejado e gasto. Aqui se aprende os limites de quanto e como um governo pode gastar sem quebrar as contas de todo mundo.',
      liberado: 'Você entende como a tesouraria do Estado planeja e presta contas do dinheiro de todos.'
    },
    'Direito Previdenciário': {
      abertura: 'Um reino que guarda uma promessa: quem contribui hoje é protegido amanhã — na doença, na velhice, ou quando o imprevisto acontece. Aqui se aprende como essa promessa vira direito de verdade.',
      liberado: 'Você entende como a promessa da Previdência se transforma em proteção de verdade.'
    }
  };

  return { INTRO: INTRO, FINAL: FINAL, LORE: LORE };
})();
