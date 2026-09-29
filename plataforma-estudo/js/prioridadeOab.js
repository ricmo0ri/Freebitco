// Priorização por frequência real de cobrança na OAB (provas 32ª a 47ª),
// baseada em estatística que o usuário levantou por conta própria. Cada
// assunto listado aqui foi mapeado para um ou mais subtemas já usados em
// Resumo Fácil/Lei Seca (ou fica só no nível do território, quando não há
// um subtema específico correspondente ainda). Serve só de sinalização —
// não interfere na fila de questões nem no mapa de fraquezas (que já
// refletem o desempenho real do usuário, não a frequência histórica).
var PrioridadeOab = (function () {
  var ASSUNTOS = [
    {
      territorio: "Ética",
      subtemas: ["Direitos e Prerrogativas do Advogado"],
      bloco: "S",
      ocorrencias: 19,
      media: 1.19,
      assunto: "Direitos e prerrogativas"
    },
    {
      territorio: "Ética",
      subtemas: ["Ética e Disciplina"],
      bloco: "S",
      ocorrencias: 19,
      media: 1.19,
      assunto: "Infrações, sanções e processo disciplinar"
    },
    {
      territorio: "Direito Constitucional",
      subtemas: ["Organização do Estado"],
      bloco: "S",
      ocorrencias: 21,
      media: 1.31,
      assunto: "Organização do Estado/federalismo"
    },
    {
      territorio: "Direito Civil",
      subtemas: ["Parte Geral"],
      bloco: "S",
      ocorrencias: 19,
      media: 1.19,
      assunto: "Parte Geral"
    },
    {
      territorio: "Processo Civil",
      subtemas: ["Cumprimento de Sentença e Execução"],
      bloco: "S",
      ocorrencias: 24,
      media: 1.5,
      assunto: "Cumprimento de sentença e execução"
    },
    {
      territorio: "Processo Penal",
      subtemas: ["Inquérito Policial e Investigação","Ação Penal"],
      bloco: "S",
      ocorrencias: 22,
      media: 1.38,
      assunto: "Inquérito policial e ação penal"
    },
    {
      territorio: "Direito Constitucional",
      subtemas: ["Controle de Constitucionalidade"],
      bloco: "S",
      ocorrencias: 19,
      media: 1.19,
      assunto: "Controle de constitucionalidade"
    },
    {
      territorio: "Direito Civil",
      subtemas: ["Contratos"],
      bloco: "S",
      ocorrencias: 18,
      media: 1.13,
      assunto: "Contratos"
    },
    {
      territorio: "Direito Civil",
      subtemas: ["Família"],
      bloco: "S",
      ocorrencias: 17,
      media: 1.06,
      assunto: "Direito de Família"
    },
    {
      territorio: "Processo Civil",
      subtemas: ["Petição Inicial e Resposta do Réu","Provas"],
      bloco: "S",
      ocorrencias: 17,
      media: 1.06,
      assunto: "Procedimento comum/provas/postulação"
    },
    {
      territorio: "Processo Civil",
      subtemas: ["Recursos"],
      bloco: "S",
      ocorrencias: 16,
      media: 1,
      assunto: "Recursos"
    },
    {
      territorio: "Ética",
      subtemas: ["Inscrição e Órgãos da OAB","Exercício da Advocacia"],
      bloco: "S",
      ocorrencias: 16,
      media: 1,
      assunto: "Inscrição e exercício da advocacia"
    },
    {
      territorio: "Direito Constitucional",
      subtemas: ["Organização dos Poderes","Processo Legislativo"],
      bloco: "S",
      ocorrencias: 16,
      media: 1,
      assunto: "Organização dos Poderes/processo legislativo"
    },
    {
      territorio: "Direito Penal",
      subtemas: ["Teoria Geral do Crime"],
      bloco: "S",
      ocorrencias: 20,
      media: 1.25,
      assunto: "Teoria do crime"
    },
    {
      territorio: "Processo Penal",
      subtemas: ["Prisões e Medidas Cautelares"],
      bloco: "S",
      ocorrencias: 15,
      media: 0.94,
      assunto: "Prisões e medidas cautelares"
    },
    {
      territorio: "Processo Penal",
      subtemas: ["Provas no Processo Penal"],
      bloco: "S",
      ocorrencias: 14,
      media: 0.88,
      assunto: "Provas"
    },
    {
      territorio: "Processo do Trabalho",
      subtemas: ["Recursos Trabalhistas"],
      bloco: "S",
      ocorrencias: 21,
      media: 1.31,
      assunto: "Recursos trabalhistas"
    },
    {
      territorio: "Direito do Trabalho",
      subtemas: ["Relação de Emprego"],
      bloco: "S",
      ocorrencias: 18,
      media: 1.13,
      assunto: "Relação de emprego/contrato"
    },
    {
      territorio: "Direito do Trabalho",
      subtemas: ["Jornada e Descanso"],
      bloco: "S",
      ocorrencias: 18,
      media: 1.13,
      assunto: "Jornada, férias e repousos"
    },
    {
      territorio: "Direito Administrativo",
      subtemas: ["Licitações e Contratos Administrativos"],
      bloco: "S",
      ocorrencias: 16,
      media: 1,
      assunto: "Licitações e contratos administrativos"
    },
    {
      territorio: "Direito Tributário",
      subtemas: ["Competência Tributária","Limitações ao Poder de Tributar"],
      bloco: "S",
      ocorrencias: 15,
      media: 0.94,
      assunto: "Competência e limitações ao poder de tributar"
    },
    {
      territorio: "Direito Empresarial",
      subtemas: ["Empresário e Sociedade Empresária","Tipos Societários"],
      bloco: "S",
      ocorrencias: 18,
      media: 1.13,
      assunto: "Sociedades empresárias"
    },
    {
      territorio: "Direito Empresarial",
      subtemas: ["Recuperação Judicial e Falência"],
      bloco: "S",
      ocorrencias: 15,
      media: 0.94,
      assunto: "Recuperação judicial e falência"
    },
    {
      territorio: "Direito Tributário",
      subtemas: ["Obrigação Tributária"],
      bloco: "S",
      ocorrencias: 14,
      media: 0.88,
      assunto: "Obrigação e responsabilidade tributária"
    },
    {
      territorio: "Direito do Trabalho",
      subtemas: ["Relação de Emprego"],
      bloco: "S",
      ocorrencias: 14,
      media: 0.88,
      assunto: "Alteração, suspensão e interrupção do contrato"
    },
    {
      territorio: "Processo Civil",
      subtemas: ["Procedimentos Especiais"],
      bloco: "A",
      ocorrencias: 14,
      media: 0.88,
      assunto: "Procedimentos especiais"
    },
    {
      territorio: "Direito Penal",
      subtemas: ["Penas e Extinção da Punibilidade"],
      bloco: "A",
      ocorrencias: 15,
      media: 0.94,
      assunto: "Penas/medidas de segurança/efeitos"
    },
    {
      territorio: "Direito Penal",
      subtemas: ["Teoria Geral do Crime","Concurso de Pessoas e de Crimes"],
      bloco: "A",
      ocorrencias: 15,
      media: 0.94,
      assunto: "Iter criminis/concurso"
    },
    {
      territorio: "Ética",
      subtemas: ["Honorários Advocatícios"],
      bloco: "A",
      ocorrencias: 14,
      media: 0.88,
      assunto: "Honorários advocatícios"
    },
    {
      territorio: "Ética",
      subtemas: ["Sociedade de Advogados"],
      bloco: "A",
      ocorrencias: 15,
      media: 0.94,
      assunto: "Sociedade de advogados"
    },
    {
      territorio: "Direito Constitucional",
      subtemas: ["Direitos e Garantias Fundamentais"],
      bloco: "A",
      ocorrencias: 14,
      media: 0.88,
      assunto: "Direitos fundamentais"
    },
    {
      territorio: "Direito Civil",
      subtemas: ["Direitos Reais"],
      bloco: "A",
      ocorrencias: 14,
      media: 0.88,
      assunto: "Direitos reais"
    },
    {
      territorio: "Direito Civil",
      subtemas: ["Sucessões"],
      bloco: "A",
      ocorrencias: 13,
      media: 0.81,
      assunto: "Sucessões"
    },
    {
      territorio: "Direito Civil",
      subtemas: ["Responsabilidade Civil"],
      bloco: "A",
      ocorrencias: 12,
      media: 0.75,
      assunto: "Responsabilidade civil"
    },
    {
      territorio: "Direito do Trabalho",
      subtemas: ["Remuneração e Verbas Rescisórias"],
      bloco: "A",
      ocorrencias: 13,
      media: 0.81,
      assunto: "Remuneração/salário/adicionais"
    },
    {
      territorio: "Direito do Trabalho",
      subtemas: ["Estabilidades e Garantias de Emprego"],
      bloco: "A",
      ocorrencias: 14,
      media: 0.88,
      assunto: "Extinção do contrato/estabilidades"
    },
    {
      territorio: "Processo do Trabalho",
      subtemas: ["Atos, Prazos e Nulidades"],
      bloco: "A",
      ocorrencias: 18,
      media: 1.13,
      assunto: "Procedimento/audiência/nulidades"
    },
    {
      territorio: "Processo do Trabalho",
      subtemas: ["Execução Trabalhista"],
      bloco: "A",
      ocorrencias: 17,
      media: 1.06,
      assunto: "Execução e liquidação trabalhista"
    },
    {
      territorio: "Direito Administrativo",
      subtemas: ["Intervenção do Estado na Propriedade"],
      bloco: "A",
      ocorrencias: 13,
      media: 0.81,
      assunto: "Intervenção do Estado na propriedade"
    },
    {
      territorio: "Direito Administrativo",
      subtemas: ["Serviços Públicos e Concessões"],
      bloco: "A",
      ocorrencias: 12,
      media: 0.75,
      assunto: "Organização administrativa/serviços públicos"
    },
    {
      territorio: "Direito Administrativo",
      subtemas: ["Agentes Públicos e Regime Disciplinar"],
      bloco: "A",
      ocorrencias: 12,
      media: 0.75,
      assunto: "Agentes públicos"
    },
    {
      territorio: "Direito Administrativo",
      subtemas: ["Improbidade Administrativa"],
      bloco: "A",
      ocorrencias: 10,
      media: 0.63,
      assunto: "Improbidade administrativa"
    },
    {
      territorio: "Direito Tributário",
      subtemas: ["Impostos em Espécie"],
      bloco: "A",
      ocorrencias: 13,
      media: 0.81,
      assunto: "Espécies tributárias"
    },
    {
      territorio: "Direito Tributário",
      subtemas: ["Processo Tributário"],
      bloco: "A",
      ocorrencias: 13,
      media: 0.81,
      assunto: "Administração/processo tributário"
    },
    {
      territorio: "Direito Tributário",
      subtemas: ["Lançamento e Crédito Tributário"],
      bloco: "A",
      ocorrencias: 11,
      media: 0.69,
      assunto: "Crédito tributário"
    },
    {
      territorio: "Direito Penal",
      subtemas: ["Aplicação da Lei Penal"],
      bloco: "A",
      ocorrencias: 11,
      media: 0.69,
      assunto: "Aplicação da lei penal"
    },
    {
      territorio: "Direito Penal",
      subtemas: ["Crimes contra a Pessoa","Crimes contra a Dignidade Sexual"],
      bloco: "A",
      ocorrencias: 12,
      media: 0.75,
      assunto: "Crimes contra pessoa/honra/dignidade sexual"
    },
    {
      territorio: "Processo Penal",
      subtemas: ["Recursos Penais"],
      bloco: "A",
      ocorrencias: 10,
      media: 0.63,
      assunto: "Recursos e habeas corpus"
    },
    {
      territorio: "Processo Penal",
      subtemas: ["Execução Penal"],
      bloco: "A",
      ocorrencias: 10,
      media: 0.63,
      assunto: "Execução penal"
    },
    {
      territorio: "Processo Penal",
      subtemas: ["Ação Penal"],
      bloco: "A",
      ocorrencias: 9,
      media: 0.56,
      assunto: "Competência processual penal"
    },
    {
      territorio: "Ética",
      subtemas: ["Exercício da Advocacia"],
      bloco: "B",
      ocorrencias: 10,
      media: 0.63,
      assunto: "Mandato/procuração"
    },
    {
      territorio: "Ética",
      subtemas: ["Incompatibilidades e Impedimentos"],
      bloco: "B",
      ocorrencias: 10,
      media: 0.63,
      assunto: "Incompatibilidades e impedimentos"
    },
    {
      territorio: "Ética",
      subtemas: ["Ética e Disciplina"],
      bloco: "B",
      ocorrencias: 10,
      media: 0.63,
      assunto: "Publicidade profissional"
    },
    {
      territorio: "Ética",
      subtemas: ["Direitos e Prerrogativas do Advogado","Ética e Disciplina"],
      bloco: "B",
      ocorrencias: 9,
      media: 0.56,
      assunto: "Deveres/sigilo/responsabilidade"
    },
    {
      territorio: "Direito Constitucional",
      subtemas: ["Organização dos Poderes"],
      bloco: "B",
      ocorrencias: 10,
      media: 0.63,
      assunto: "Poder Judiciário/funções essenciais/precatórios"
    },
    {
      territorio: "Direito Constitucional",
      subtemas: ["Ordem Social e Econômica"],
      bloco: "B",
      ocorrencias: 13,
      media: 0.81,
      assunto: "Ordem social/econômica"
    },
    {
      territorio: "Direito Constitucional",
      subtemas: ["Remédios Constitucionais (MS, HD, MI, HC)"],
      bloco: "B",
      ocorrencias: 7,
      media: 0.44,
      assunto: "Remédios constitucionais"
    },
    {
      territorio: "Direito Constitucional",
      subtemas: ["Nacionalidade e Direitos Políticos"],
      bloco: "B",
      ocorrencias: 6,
      media: 0.38,
      assunto: "Nacionalidade/direitos políticos"
    },
    {
      territorio: "Direito Civil",
      subtemas: ["Obrigações"],
      bloco: "B",
      ocorrencias: 10,
      media: 0.63,
      assunto: "Obrigações"
    },
    {
      territorio: "Processo Civil",
      subtemas: ["Competência e Partes"],
      bloco: "B",
      ocorrencias: 8,
      media: 0.5,
      assunto: "Litisconsórcio/intervenção de terceiros"
    },
    {
      territorio: "Processo Civil",
      subtemas: ["Competência e Partes"],
      bloco: "B",
      ocorrencias: 7,
      media: 0.44,
      assunto: "Sujeitos/competência/atos processuais"
    },
    {
      territorio: "Processo Civil",
      subtemas: ["Tutelas Provisórias"],
      bloco: "B",
      ocorrencias: 6,
      media: 0.38,
      assunto: "Tutela provisória"
    },
    {
      territorio: "Processo Civil",
      subtemas: [],
      bloco: "B",
      ocorrencias: 6,
      media: 0.38,
      assunto: "Arbitragem/meios consensuais"
    },
    {
      territorio: "Direito Penal",
      subtemas: ["Crimes contra o Patrimônio"],
      bloco: "B",
      ocorrencias: 7,
      media: 0.44,
      assunto: "Crimes contra patrimônio"
    },
    {
      territorio: "Direito Penal",
      subtemas: [],
      bloco: "B",
      ocorrencias: 9,
      media: 0.56,
      assunto: "Legislação penal especial"
    },
    {
      territorio: "Direito Penal",
      subtemas: ["Crimes contra a Administração Pública"],
      bloco: "B",
      ocorrencias: 5,
      media: 0.31,
      assunto: "Crimes contra Administração Pública"
    },
    {
      territorio: "Processo Penal",
      subtemas: ["Nulidades"],
      bloco: "B",
      ocorrencias: 9,
      media: 0.56,
      assunto: "Sujeitos/atos/nulidades"
    },
    {
      territorio: "Processo Penal",
      subtemas: ["Procedimentos (comum e júri)"],
      bloco: "B",
      ocorrencias: 8,
      media: 0.5,
      assunto: "Tribunal do Júri"
    },
    {
      territorio: "Direito do Trabalho",
      subtemas: ["Segurança e Saúde no Trabalho"],
      bloco: "B",
      ocorrencias: 6,
      media: 0.38,
      assunto: "Segurança/saúde/proteção do trabalhador"
    },
    {
      territorio: "Processo do Trabalho",
      subtemas: [],
      bloco: "B",
      ocorrencias: 10,
      media: 0.63,
      assunto: "Ações/procedimentos especiais trabalhistas"
    },
    {
      territorio: "Processo do Trabalho",
      subtemas: ["Provas no Processo do Trabalho"],
      bloco: "B",
      ocorrencias: 5,
      media: 0.31,
      assunto: "Provas/ônus no processo trabalhista"
    },
    {
      territorio: "Direito Administrativo",
      subtemas: ["Atos Administrativos"],
      bloco: "B",
      ocorrencias: 8,
      media: 0.5,
      assunto: "Atos administrativos"
    },
    {
      territorio: "Direito Administrativo",
      subtemas: ["Princípios da Administração Pública"],
      bloco: "B",
      ocorrencias: 7,
      media: 0.44,
      assunto: "Processo administrativo/bens públicos"
    },
    {
      territorio: "Direito Administrativo",
      subtemas: ["Responsabilidade Civil do Estado"],
      bloco: "B",
      ocorrencias: 3,
      media: 0.19,
      assunto: "Responsabilidade civil do Estado"
    },
    {
      territorio: "Direito Tributário",
      subtemas: ["Limitações ao Poder de Tributar"],
      bloco: "B",
      ocorrencias: 6,
      media: 0.38,
      assunto: "Imunidades tributárias"
    },
    {
      territorio: "Direito do Consumidor",
      subtemas: ["Práticas e Contratos de Consumo"],
      bloco: "C",
      ocorrencias: 14,
      media: 0.88,
      assunto: "Práticas comerciais/proteção contratual"
    },
    {
      territorio: "Direito do Consumidor",
      subtemas: ["Responsabilidade pelo Fato/Vício"],
      bloco: "C",
      ocorrencias: 11,
      media: 0.69,
      assunto: "Vício/fato do produto/serviço"
    },
    {
      territorio: "Direito da Criança e do Adolescente",
      subtemas: ["Medidas de Proteção","Conselho Tutelar"],
      bloco: "C",
      ocorrencias: 8,
      media: 0.5,
      assunto: "Medidas de proteção/Conselho Tutelar"
    },
    {
      territorio: "Direito da Criança e do Adolescente",
      subtemas: ["Ato Infracional e Medidas Socioeducativas"],
      bloco: "C",
      ocorrencias: 8,
      media: 0.5,
      assunto: "Ato infracional/medidas socioeducativas"
    },
    {
      territorio: "Direitos Humanos",
      subtemas: ["Sistema Interamericano (Corte/Comissão)"],
      bloco: "C",
      ocorrencias: 11,
      media: 0.69,
      assunto: "Sistema Interamericano"
    },
    {
      territorio: "Direitos Humanos",
      subtemas: ["Direitos de Grupos Vulneráveis"],
      bloco: "C",
      ocorrencias: 10,
      media: 0.63,
      assunto: "Grupos vulneráveis"
    },
    {
      territorio: "Filosofia do Direito",
      subtemas: ["Positivismo Jurídico"],
      bloco: "C",
      ocorrencias: 8,
      media: 0.5,
      assunto: "Positivismo/pós-positivismo"
    },
    {
      territorio: "Filosofia do Direito",
      subtemas: ["Justiça (autores clássicos)"],
      bloco: "C",
      ocorrencias: 8,
      media: 0.5,
      assunto: "Justiça/ética/filosofia clássica"
    },
    {
      territorio: "Direito Internacional",
      subtemas: ["Cooperação Jurídica Internacional","Jurisdição e Competência Internacional"],
      bloco: "C",
      ocorrencias: 10,
      media: 0.63,
      assunto: "Cooperação jurídica/competência internacional"
    },
    {
      territorio: "Direito Internacional",
      subtemas: ["Migração e Nacionalidade"],
      bloco: "C",
      ocorrencias: 10,
      media: 0.63,
      assunto: "Estrangeiro/migração"
    },
    {
      territorio: "Direito Ambiental",
      subtemas: ["Espaços Territoriais Protegidos"],
      bloco: "C",
      ocorrencias: 10,
      media: 0.63,
      assunto: "Áreas protegidas/recursos/instrumentos"
    },
    {
      territorio: "Direito Ambiental",
      subtemas: ["Licenciamento Ambiental"],
      bloco: "C",
      ocorrencias: 9,
      media: 0.56,
      assunto: "Competência/licenciamento ambiental"
    },
    {
      territorio: "Direito Eleitoral",
      subtemas: ["Partidos Políticos e Financiamento"],
      bloco: "C",
      ocorrencias: 8,
      media: 0.5,
      assunto: "Partidos/financiamento"
    },
    {
      territorio: "Direito Eleitoral",
      subtemas: ["Ações Eleitorais"],
      bloco: "C",
      ocorrencias: 7,
      media: 0.44,
      assunto: "Ações/ilícitos eleitorais"
    },
    {
      territorio: "Direito Previdenciário",
      subtemas: ["Benefícios Previdenciários"],
      bloco: "C",
      ocorrencias: 9,
      media: 0.56,
      assunto: "Benefícios por incapacidade"
    },
    {
      territorio: "Direito Financeiro",
      subtemas: ["Orçamento Público (LOA/LDO/PPA)"],
      bloco: "C",
      ocorrencias: 8,
      media: 0.5,
      assunto: "Leis/processo orçamentário"
    },
    {
      territorio: "Direito Financeiro",
      subtemas: ["Lei de Responsabilidade Fiscal"],
      bloco: "C",
      ocorrencias: 7,
      media: 0.44,
      assunto: "LRF/gestão fiscal"
    },
    {
      territorio: "Direito Internacional",
      subtemas: ["Direito Internacional Privado (LINDB)"],
      bloco: "C",
      ocorrencias: 7,
      media: 0.44,
      assunto: "Direito Internacional Privado/LINDB"
    },
    {
      territorio: "Direitos Humanos",
      subtemas: ["Sistema Global de Proteção (ONU)","Tratados Internacionais de Direitos Humanos"],
      bloco: "C",
      ocorrencias: 8,
      media: 0.5,
      assunto: "Sistema global/tratados de DH"
    },
    {
      territorio: "Direito Ambiental",
      subtemas: ["Princípios e Competência Ambiental","Responsabilidade Ambiental"],
      bloco: "C",
      ocorrencias: 7,
      media: 0.44,
      assunto: "Princípios/responsabilidade ambiental"
    },
    {
      territorio: "Direito da Criança e do Adolescente",
      subtemas: ["Adoção e Família Substituta"],
      bloco: "C",
      ocorrencias: 6,
      media: 0.38,
      assunto: "Adoção/família substituta"
    },
    {
      territorio: "Direito da Criança e do Adolescente",
      subtemas: ["Direitos Fundamentais da Criança e do Adolescente"],
      bloco: "C",
      ocorrencias: 6,
      media: 0.38,
      assunto: "Direitos fundamentais/proteção integral"
    },
    {
      territorio: "Filosofia do Direito",
      subtemas: ["Teorias Contemporâneas do Direito"],
      bloco: "C",
      ocorrencias: 6,
      media: 0.38,
      assunto: "Contratualismo/teoria política"
    },
    {
      territorio: "Direito Previdenciário",
      subtemas: ["Benefícios Previdenciários"],
      bloco: "C",
      ocorrencias: 4,
      media: 0.25,
      assunto: "Salário-maternidade/família/auxílio-reclusão"
    },
    {
      territorio: "Direito Previdenciário",
      subtemas: ["Benefícios Previdenciários"],
      bloco: "C",
      ocorrencias: 3,
      media: 0.19,
      assunto: "Aposentadorias/pensão por morte"
    },
  ];

  var PESO_BLOCO = { S: 4, A: 3, B: 2, C: 1 };

  var META_BLOCO = {
    S: { emoji: '🔴', letra: 'S', label: 'Bloco S — prioridade máxima' },
    A: { emoji: '🟠', letra: 'A', label: 'Bloco A — altíssima importância' },
    B: { emoji: '🟡', letra: 'B', label: 'Bloco B — alta prioridade' },
    C: { emoji: '🟢', letra: 'C', label: 'Bloco C — caça-pontos' }
  };

  function melhorBloco(lista) {
    var melhor = lista[0];
    lista.forEach(function (item) {
      if (PESO_BLOCO[item.bloco] > PESO_BLOCO[melhor.bloco]) melhor = item;
    });
    return melhor;
  }

  // Prioridade de um subtema específico (Resumo Fácil / Lei Seca).
  function getPrioridadeSubtema(territorio, subtema) {
    var candidatos = ASSUNTOS.filter(function (a) {
      return a.territorio === territorio && a.subtemas.indexOf(subtema) !== -1;
    });
    if (candidatos.length === 0) return null;
    var item = melhorBloco(candidatos);
    return Object.assign({}, META_BLOCO[item.bloco], {
      ocorrencias: item.ocorrencias, media: item.media, assunto: item.assunto
    });
  }

  // Prioridade agregada de um território inteiro: o melhor bloco entre
  // todos os assuntos mapeados para ele (sinaliza "este território tem
  // conteúdo de prioridade máxima, não pule ele").
  function getPrioridadeTerritorio(territorio) {
    var doTerritorio = ASSUNTOS.filter(function (a) { return a.territorio === territorio; });
    if (doTerritorio.length === 0) return null;
    var item = melhorBloco(doTerritorio);
    return Object.assign({}, META_BLOCO[item.bloco]);
  }

  // Monta o <span> do selo, pronto pra ser inserido no DOM. `prioridade` é
  // o retorno de getPrioridadeSubtema/getPrioridadeTerritorio (pode ser
  // null, e nesse caso não cria nada).
  function criarBadge(prioridade) {
    if (!prioridade) return null;
    var badge = document.createElement('span');
    badge.className = 'prioridade-badge bloco-' + prioridade.letra;
    badge.textContent = prioridade.emoji + ' ' + prioridade.letra;
    var titulo = prioridade.label;
    if (prioridade.assunto) {
      titulo += ' — "' + prioridade.assunto + '" caiu em média ' + prioridade.media +
        ' vez(es) por prova nas últimas provas analisadas (' + prioridade.ocorrencias + ' ocorrências)';
    }
    badge.title = titulo;
    return badge;
  }

  return {
    getPrioridadeSubtema: getPrioridadeSubtema,
    getPrioridadeTerritorio: getPrioridadeTerritorio,
    criarBadge: criarBadge
  };
})();
