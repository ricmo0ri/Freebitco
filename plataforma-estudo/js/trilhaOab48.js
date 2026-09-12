// Trilha OAB 48: fila única e ordenada de 114 assuntos, priorizada pelo
// próprio usuário pensando na relevância pra próxima prova (Nível 1 = não
// pode deixar de estudar, Nível 4 = deixar pro final). Substitui a lógica
// de "próximo passo por território/fraqueza" por uma ordem fixa e
// pré-definida: sempre aponta o PRIMEIRO assunto da fila que ainda não
// está dominado, seja porque nunca foi estudado ou porque "escorregou" de
// volta pra fraco/crítico depois de dominado — sem escolha nenhuma pro
// usuário fazer, só seguir a fila.
//
// Cada item da fila mapeia pra um conjunto de "temas" (o campo usado em
// questoesSeed.js/leiSecaSeed.js/resumoFacilSeed.js) dentro de um
// território. A maioria dos temas já cadastrados bate quase literalmente
// com o vocabulário da fila; quando um tema existente não tinha um item
// óbvio correspondente, foi encaixado no item mais próximo pelo conteúdo
// real da questão (não pela etiqueta). Alguns itens (ex: "custas/honorários/JG"
// no Processo do Trabalho) ainda não têm nenhuma questão cadastrada
// especificamente sobre eles — ficam com `temas: []` e, quando a fila
// chegar neles, o app usa o território inteiro como estudo (ver
// Missao.iniciarMissaoPorTemas).
var TrilhaOab48 = (function () {
  var NIVEL_META = {
    1: { emoji: '🔥', label: 'Nível 1 — não pode deixar de estudar' },
    2: { emoji: '🟠', label: 'Nível 2' },
    3: { emoji: '🟡', label: 'Nível 3' },
    4: { emoji: '⚪', label: 'Nível 4 — deixar para o final' }
  };

  var FILA = [
    // ---------- Nível 1 ----------
    { nivel: 1, territorio: 'Processo Civil', assunto: 'execução/cumprimento', temas: ['Cumprimento de Sentença e Execução', 'Penhora e Impenhorabilidade', 'penhora/substituição', 'hasta pública/servidor', 'penhora/fiança bancária', 'honorários sucumbência omissos'] },
    { nivel: 1, territorio: 'Processo Penal', assunto: 'inquérito/ação penal', temas: ['Ação Penal', 'Inquérito Policial e Investigação', 'Prazos e Encerramento do Inquérito', 'Denúncia, Queixa e Condições da Ação', 'estelionato/ação penal condicionada', 'ação penal privada/perempção', 'ANPP/recurso'] },
    { nivel: 1, territorio: 'Direito Constitucional', assunto: 'organização do Estado/federalismo', temas: ['Organização do Estado', 'Intervenção Federal e Estadual', 'Repartição de Competências Federativas'] },
    { nivel: 1, territorio: 'Direito Penal', assunto: 'teoria do crime', temas: ['Teoria Geral do Crime', 'Excludentes de Ilicitude e Culpabilidade', 'troca de bebês', 'omissão de socorro'] },
    { nivel: 1, territorio: 'Direito Civil', assunto: 'Parte Geral', temas: ['Parte Geral', 'Vícios do Consentimento', 'Prescrição e Decadência Civil', 'estado de necessidade', 'associação vs fundação'] },
    { nivel: 1, territorio: 'Ética', assunto: 'prerrogativas', temas: ['Direitos e Prerrogativas do Advogado', 'Sigilo Profissional e Inviolabilidade', 'Postulação e Atividades Privativas'] },
    { nivel: 1, territorio: 'Ética', assunto: 'infrações/sanções', temas: ['Ética e Disciplina', 'Processo Disciplinar na OAB', 'processo disciplinar/notificação', 'sanções/atenuantes'] },
    { nivel: 1, territorio: 'Processo do Trabalho', assunto: 'recursos', temas: ['Recursos Trabalhistas', 'Recurso Ordinário e Recurso de Revista', 'recurso de revista', 'recurso de revista/OJ'] },
    { nivel: 1, territorio: 'Direito Civil', assunto: 'contratos', temas: ['Contratos', 'Boa-Fé Objetiva e Revisão Contratual', 'doação/forma'] },
    { nivel: 1, territorio: 'Direito Empresarial', assunto: 'sociedades', temas: ['Tipos Societários', 'Sociedade Limitada', 'Responsabilidade dos Sócios', 'exclusão de sócio', 'sociedade em comum', 'sociedade limitada/nome', 'assembleia eletrônica', 'gerente/poderes'] },
    { nivel: 1, territorio: 'Direito do Trabalho', assunto: 'relação de emprego/contrato', temas: ['Relação de Emprego', 'Fraude e Nulidade na Relação de Emprego', 'Grupo Econômico e Terceirização', 'dano pré-contratual', 'troca de uniforme', 'subempreitada/grupo econômico'] },
    { nivel: 1, territorio: 'Direito do Trabalho', assunto: 'jornada/descanso/férias', temas: ['Jornada e Descanso', 'Horas Extras e Banco de Horas', '13º Salário e Férias', 'Intervalos Intra e Interjornada', 'banco de horas', 'hora in itinere'] },
    { nivel: 1, territorio: 'Processo Civil', assunto: 'procedimento/provas', temas: ['Provas', 'Petição Inicial e Resposta do Réu', 'Sentença e Coisa Julgada', 'Normas Fundamentais do Processo', 'Contestação e Preliminares', 'Ônus da Prova e Perícia', 'mediação', 'calendário processual', 'produção antecipada de provas', 'alteração pedido/erro material'] },
    { nivel: 1, territorio: 'Processo Civil', assunto: 'recursos', temas: ['Recursos', 'Recursos Especial e Extraordinário', 'Apelação e Embargos de Declaração', 'embargos declaração/prequestionamento'] },
    { nivel: 1, territorio: 'Direito Penal', assunto: 'iter criminis/concurso', temas: ['Concurso de Pessoas e de Crimes', 'roubo/estupro concurso material', 'tráfico/crime único'] },
    { nivel: 1, territorio: 'Direito Penal', assunto: 'penas', temas: ['Penas e Extinção da Punibilidade', 'latrocínio/progressão'] },
    { nivel: 1, territorio: 'Direito Administrativo', assunto: 'licitações', temas: ['Licitações e Contratos Administrativos', 'Modalidades e Fases da Licitação', 'Dispensa e Inexigibilidade de Licitação'] },
    { nivel: 1, territorio: 'Direito Tributário', assunto: 'competência/limitações', temas: ['Competência Tributária', 'Limitações ao Poder de Tributar', 'taxa/poder de polícia'] },
    { nivel: 1, territorio: 'Direito Tributário', assunto: 'obrigação/responsabilidade', temas: ['Obrigação Tributária', 'Sujeito Passivo e Fato Gerador', 'Responsabilidade Tributária de Terceiros', 'IPTU/capacidade menor'] },
    { nivel: 1, territorio: 'Processo Penal', assunto: 'prisões/cautelares', temas: ['Prisões e Medidas Cautelares', 'Medidas Cautelares Diversas da Prisão', 'prisão preventiva/ameaça', 'audiência de custódia', 'Audiência de Custódia'] },

    // ---------- Nível 2 ----------
    { nivel: 2, territorio: 'Direito Constitucional', assunto: 'controle de constitucionalidade', temas: ['Controle de Constitucionalidade', 'ADI, ADC e ADPF', 'ADPF', 'PEC/cláusula pétrea'] },
    { nivel: 2, territorio: 'Direito Constitucional', assunto: 'poderes/processo legislativo', temas: ['Organização dos Poderes', 'Processo Legislativo', 'Poder Executivo, Legislativo e Judiciário', 'Sanção, Veto e Medida Provisória', 'casa iniciadora', 'simetria/processo legislativo', 'subsídios vereadores'] },
    { nivel: 2, territorio: 'Direito Civil', assunto: 'família', temas: ['Família', 'União Estável e Alimentos', 'guarda compartilhada', 'partilha/comunhão parcial', 'adoção/poder familiar'] },
    { nivel: 2, territorio: 'Direito Civil', assunto: 'direitos reais', temas: ['Direitos Reais', 'Posse e Usucapião', 'condomínio/multa', 'tradição/propriedade'] },
    { nivel: 2, territorio: 'Direito Civil', assunto: 'sucessões', temas: ['Sucessões'] },
    { nivel: 2, territorio: 'Processo Civil', assunto: 'procedimentos especiais', temas: ['Procedimentos Especiais', 'consignação/desistência', 'mandado de despejo/recurso', 'consignação em pagamento', 'ação monitória/embargos'] },
    { nivel: 2, territorio: 'Processo Penal', assunto: 'provas', temas: ['Provas no Processo Penal', 'Corpo de Delito e Reconhecimento de Pessoas', 'interceptação telefônica'] },
    { nivel: 2, territorio: 'Direito Penal', assunto: 'crimes contra pessoa/honra/sexual', temas: ['Crimes contra a Pessoa', 'Crimes contra a Dignidade Sexual', 'Homicídio Qualificado e Feminicídio', 'assédio sexual', 'estupro de vulnerável'] },
    { nivel: 2, territorio: 'Direito Penal', assunto: 'aplicação da lei penal', temas: ['Aplicação da Lei Penal'] },
    { nivel: 2, territorio: 'Direito Administrativo', assunto: 'intervenção na propriedade', temas: ['Intervenção do Estado na Propriedade', 'desapropriação função social', 'servidão administrativa', 'Estatuto da Cidade/EIV', 'desapropriação/licitação'] },
    { nivel: 2, territorio: 'Direito Administrativo', assunto: 'organização/serviços públicos', temas: ['Serviços Públicos e Concessões', 'agências reguladoras', 'concessão administrativa/PPP', 'ouvidoria', 'decisão coordenada Lei 9.784'] },
    { nivel: 2, territorio: 'Direito Administrativo', assunto: 'agentes públicos', temas: ['Agentes Públicos e Regime Disciplinar', 'TCU/aposentadoria'] },
    { nivel: 2, territorio: 'Direito Administrativo', assunto: 'improbidade', temas: ['Improbidade Administrativa', 'improbidade/penalidades', 'improbidade/sigilo fiscal'] },
    { nivel: 2, territorio: 'Direito Tributário', assunto: 'espécies tributárias', temas: ['contribuição previdenciária', 'contribuição de melhoria'] },
    { nivel: 2, territorio: 'Direito Tributário', assunto: 'administração/processo', temas: ['Processo Tributário', 'execução fiscal/prazo contestação', 'execução fiscal/embargos prazo', 'denúncia espontânea'] },
    { nivel: 2, territorio: 'Direito Tributário', assunto: 'crédito tributário', temas: ['Lançamento e Crédito Tributário', 'Prescrição e Decadência Tributária', 'certidão positiva com efeito negativa'] },
    { nivel: 2, territorio: 'Direito do Trabalho', assunto: 'alteração/suspensão/interrupção', temas: ['transferência', 'sucessão de empregadores', 'candidatura política'] },
    { nivel: 2, territorio: 'Direito do Trabalho', assunto: 'rescisão/estabilidade', temas: ['Estabilidades e Garantias de Emprego', 'desistência/homologação', 'dirigente sindical/diretor'] },
    { nivel: 2, territorio: 'Direito do Trabalho', assunto: 'remuneração', temas: ['Remuneração e Verbas Rescisórias', 'plano de saúde'] },
    { nivel: 2, territorio: 'Processo do Trabalho', assunto: 'execução/liquidação', temas: ['Execução Trabalhista', 'embargos à execução', 'homologação acordo/INSS'] },
    { nivel: 2, territorio: 'Ética', assunto: 'inscrição/exercício', temas: ['Inscrição e Órgãos da OAB', 'Exercício da Advocacia', 'Incompatibilidades e Impedimentos', 'renúncia mandato/prazo'] },
    { nivel: 2, territorio: 'Ética', assunto: 'sociedade de advogados', temas: ['Sociedade de Advogados', 'sociedade advogados/vereador', 'associação sem vínculo'] },
    { nivel: 2, territorio: 'Ética', assunto: 'honorários', temas: ['Honorários Advocatícios', 'contrato honorários/cláusulas'] },
    { nivel: 2, territorio: 'Direito Empresarial', assunto: 'recuperação/falência', temas: ['Recuperação Judicial e Falência', 'Classes de Credores na Recuperação Judicial', 'Requisitos e Efeitos da Falência', 'falência/depósito elisivo', 'falência/restituição'] },
    { nivel: 2, territorio: 'Direito Empresarial', assunto: 'empresário/registro', temas: ['Empresário e Sociedade Empresária', 'Registro do Empresário'] },
    { nivel: 2, territorio: 'Direito Empresarial', assunto: 'títulos de crédito', temas: ['Títulos de Crédito e Contratos Empresariais', 'nota promissória'] },
    { nivel: 2, territorio: 'Direito do Consumidor', assunto: 'práticas comerciais', temas: ['Práticas e Contratos de Consumo', 'Direitos Básicos e Informação', 'Conceitos e Princípios', 'arrependimento', 'sinal/rescisão', 'venda casada/CET', 'persianas/venda casada'] },
    { nivel: 2, territorio: 'Direito do Consumidor', assunto: 'vício/fato', temas: ['Responsabilidade pelo Fato/Vício', 'grupo econômico'] },
    { nivel: 2, territorio: 'Direito da Criança e do Adolescente', assunto: 'proteção/Conselho Tutelar', temas: ['Conselho Tutelar', 'Medidas de Proteção'] },
    { nivel: 2, territorio: 'Direito da Criança e do Adolescente', assunto: 'ato infracional/socioeducativas', temas: ['Ato Infracional e Medidas Socioeducativas', 'medida socioeducativa', 'reparação do dano'] },

    // ---------- Nível 3 ----------
    { nivel: 3, territorio: 'Direito Constitucional', assunto: 'direitos fundamentais', temas: ['Direitos e Garantias Fundamentais', 'Nacionalidade e Direitos Políticos', 'liberdade religiosa', 'direitos indígenas/educação'] },
    { nivel: 3, territorio: 'Direito Constitucional', assunto: 'ordem social/econômica', temas: ['Ordem Social e Econômica'] },
    { nivel: 3, territorio: 'Direito Constitucional', assunto: 'Judiciário/funções essenciais', temas: [] },
    { nivel: 3, territorio: 'Direito Constitucional', assunto: 'remédios constitucionais', temas: ['Remédios Constitucionais (MS, HD, MI, HC)', 'MI coletivo'] },
    { nivel: 3, territorio: 'Direito Civil', assunto: 'responsabilidade civil', temas: ['Responsabilidade Civil', 'Proteção de Dados/LGPD', 'responsabilidade objetiva/preposto', 'danos estéticos/lucros cessantes', 'garantidor/omissão imprópria'] },
    { nivel: 3, territorio: 'Direito Civil', assunto: 'obrigações', temas: ['Obrigações', 'obrigações solidárias', 'solidariedade ativa'] },
    { nivel: 3, territorio: 'Processo Civil', assunto: 'intervenção/litisconsórcio', temas: [] },
    { nivel: 3, territorio: 'Processo Civil', assunto: 'competência/atos', temas: ['Competência e Partes', 'citação por edital'] },
    { nivel: 3, territorio: 'Processo Civil', assunto: 'tutela provisória', temas: ['Tutelas Provisórias', 'Tutela de Evidência', 'tutela cautelar antecedente'] },
    { nivel: 3, territorio: 'Direito Penal', assunto: 'legislação especial', temas: ['tráfico interestadual/majorante'] },
    { nivel: 3, territorio: 'Direito Penal', assunto: 'crimes patrimoniais', temas: ['Crimes contra o Patrimônio', 'Crimes contra a Administração Pública', 'Furto, Roubo e Latrocínio', 'estelionato tentado', 'extorsão vs roubo', 'furto/abuso de confiança'] },
    { nivel: 3, territorio: 'Processo Penal', assunto: 'recursos/HC', temas: ['Recursos Penais', 'recurso em sentido estrito'] },
    { nivel: 3, territorio: 'Processo Penal', assunto: 'execução penal', temas: ['Execução Penal', 'progressão de regime'] },
    { nivel: 3, territorio: 'Processo Penal', assunto: 'competência', temas: ['Competência e Foro', 'foro por prerrogativa/nulidade', 'foro prerrogativa/defensor'] },
    { nivel: 3, territorio: 'Processo Penal', assunto: 'nulidades', temas: ['Nulidades'] },
    { nivel: 3, territorio: 'Processo Penal', assunto: 'Júri', temas: ['Procedimentos (comum e júri)', 'Júri: da Pronúncia ao Plenário', 'Tribunal do Júri/suspeição'] },
    { nivel: 3, territorio: 'Direito Administrativo', assunto: 'atos administrativos', temas: ['Atos Administrativos', 'Atributos e Extinção dos Atos Administrativos', 'Princípios da Administração Pública', 'Poderes Administrativos'] },
    { nivel: 3, territorio: 'Direito Administrativo', assunto: 'processo/bens públicos', temas: [] },
    { nivel: 3, territorio: 'Direito Tributário', assunto: 'impostos em espécie', temas: ['Impostos em Espécie', 'Impostos da União, Estados e Municípios', 'ICMS e ISS na Prática'] },
    { nivel: 3, territorio: 'Direito Tributário', assunto: 'imunidades', temas: ['Imunidades Tributárias', 'imunidade e-books', 'imunidade entidade assistencial'] },
    { nivel: 3, territorio: 'Direito do Trabalho', assunto: 'segurança/saúde', temas: ['Segurança e Saúde no Trabalho'] },
    { nivel: 3, territorio: 'Processo do Trabalho', assunto: 'ações especiais', temas: ['Dissídios Coletivos', 'IDPJ', 'IDPJ/fase conhecimento', 'ação de cumprimento', 'ação rescisória/depósito', 'Competência da Justiça do Trabalho'] },
    { nivel: 3, territorio: 'Processo do Trabalho', assunto: 'provas/ônus', temas: ['Provas no Processo do Trabalho', 'Atos, Prazos e Nulidades', 'preferência idoso'] },
    { nivel: 3, territorio: 'Processo do Trabalho', assunto: 'custas/honorários/JG', temas: [] },
    { nivel: 3, territorio: 'Direito Empresarial', assunto: 'estabelecimento/nome', temas: ['Nome Empresarial e Estabelecimento', 'nome empresarial'] },
    { nivel: 3, territorio: 'Direito Empresarial', assunto: 'contratos empresariais', temas: ['trespasse/arrendamento'] },
    { nivel: 3, territorio: 'Direito do Consumidor', assunto: 'superendividamento', temas: [] },
    { nivel: 3, territorio: 'Direito da Criança e do Adolescente', assunto: 'direitos fundamentais', temas: ['Direitos Fundamentais da Criança e do Adolescente'] },
    { nivel: 3, territorio: 'Direito da Criança e do Adolescente', assunto: 'adoção/família substituta', temas: ['Adoção e Família Substituta'] },
    { nivel: 3, territorio: 'Direitos Humanos', assunto: 'Interamericano', temas: ['Sistema Interamericano (Corte/Comissão)', 'medidas provisórias Corte'] },
    { nivel: 3, territorio: 'Direitos Humanos', assunto: 'grupos vulneráveis', temas: ['Direitos de Grupos Vulneráveis', 'Refugiados e Migrantes'] },
    { nivel: 3, territorio: 'Direitos Humanos', assunto: 'sistema global/tratados', temas: ['Sistema Global de Proteção (ONU)', 'Tratados Internacionais de Direitos Humanos'] },
    { nivel: 3, territorio: 'Filosofia do Direito', assunto: 'positivismo/pós-positivismo', temas: ['Positivismo Jurídico', 'Teorias Contemporâneas do Direito', 'Dworkin'] },
    { nivel: 3, territorio: 'Filosofia do Direito', assunto: 'justiça/ética clássica', temas: ['Justiça (autores clássicos)', 'Kant'] },
    { nivel: 3, territorio: 'Filosofia do Direito', assunto: 'contratualismo', temas: ['Jusnaturalismo'] },
    { nivel: 3, territorio: 'Direito Internacional', assunto: 'cooperação/competência', temas: ['Cooperação Jurídica Internacional', 'Jurisdição e Competência Internacional', 'LINDB/competência concorrente'] },
    { nivel: 3, territorio: 'Direito Internacional', assunto: 'estrangeiros/migração', temas: ['Migração e Nacionalidade'] },
    { nivel: 3, territorio: 'Direito Internacional', assunto: 'LINDB', temas: ['Direito Internacional Privado (LINDB)', 'LINDB/sucessão'] },
    { nivel: 3, territorio: 'Direito Ambiental', assunto: 'unidades de conservação/recursos', temas: ['Espaços Territoriais Protegidos', 'Código Florestal', 'logística reversa'] },
    { nivel: 3, territorio: 'Direito Ambiental', assunto: 'licenciamento', temas: ['Licenciamento Ambiental', 'licenciamento'] },
    { nivel: 3, territorio: 'Direito Ambiental', assunto: 'princípios/responsabilidade', temas: ['Princípios e Competência Ambiental', 'Responsabilidade Ambiental', 'perícia/prova emprestada'] },
    { nivel: 3, territorio: 'Direito Eleitoral', assunto: 'partidos/financiamento', temas: ['Partidos Políticos e Financiamento'] },
    { nivel: 3, territorio: 'Direito Eleitoral', assunto: 'ações/ilícitos', temas: ['Ações Eleitorais', 'Condutas Vedadas e Abuso de Poder'] },
    { nivel: 3, territorio: 'Direito Previdenciário', assunto: 'incapacidade', temas: ['Acidente de Trabalho'] },
    { nivel: 3, territorio: 'Direito Previdenciário', assunto: 'segurados/regimes', temas: ['Segurados e Filiação', 'Custeio da Seguridade Social'] },
    { nivel: 3, territorio: 'Direito Financeiro', assunto: 'orçamento', temas: ['Orçamento Público (LOA/LDO/PPA)'] },
    { nivel: 3, territorio: 'Direito Financeiro', assunto: 'LRF', temas: ['Lei de Responsabilidade Fiscal', 'Transparência Fiscal'] },

    // ---------- Nível 4 ----------
    { nivel: 4, territorio: 'Ética', assunto: 'organização dos órgãos da OAB', temas: ['Estrutura da OAB (Federal, Seccional, Subseção)', 'comissão OAB/bens'] },
    { nivel: 4, territorio: 'Direito Administrativo', assunto: 'controle/Tribunais de Contas', temas: ['Controle da Administração'] },
    { nivel: 4, territorio: 'Direito Administrativo', assunto: 'responsabilidade civil do Estado', temas: ['Responsabilidade Civil do Estado', 'responsabilidade civil do Estado'] },
    { nivel: 4, territorio: 'Direito Administrativo', assunto: 'Lei Anticorrupção', temas: ['Lei Anticorrupção', 'Lei Abuso de Autoridade'] },
    { nivel: 4, territorio: 'Direito do Trabalho', assunto: 'Direito Coletivo', temas: ['Direito Coletivo do Trabalho', 'acordo coletivo/redução'] },
    { nivel: 4, territorio: 'Direito Empresarial', assunto: 'propriedade industrial', temas: ['Propriedade Industrial', 'patente'] },
    { nivel: 4, territorio: 'Direito do Consumidor', assunto: 'tutela coletiva', temas: ['Defesa do Consumidor em Juízo'] },
    { nivel: 4, territorio: 'Direito da Criança e do Adolescente', assunto: 'crimes/infrações administrativas', temas: [] },
    { nivel: 4, territorio: 'Direitos Humanos', assunto: 'sistema interno', temas: [] },
    { nivel: 4, territorio: 'Filosofia do Direito', assunto: 'norma/ordenamento', temas: [] },
    { nivel: 4, territorio: 'Filosofia do Direito', assunto: 'hermenêutica', temas: ['Hermenêutica e Interpretação'] },
    { nivel: 4, territorio: 'Direito Internacional', assunto: 'imunidades/fontes', temas: ['Direito Internacional Público', 'imunidade jurisdição consular'] },
    { nivel: 4, territorio: 'Direito Ambiental', assunto: 'crimes ambientais', temas: [] },
    { nivel: 4, territorio: 'Direito Eleitoral', assunto: 'propaganda', temas: ['Propaganda Eleitoral'] },
    { nivel: 4, territorio: 'Direito Eleitoral', assunto: 'registro/domicílio', temas: ['Elegibilidade e Registro de Candidatura'] },
    { nivel: 4, territorio: 'Direito Previdenciário', assunto: 'aposentadorias/pensão', temas: ['Benefícios Previdenciários'] },
    { nivel: 4, territorio: 'Direito Financeiro', assunto: 'despesa/execução', temas: ['Despesa e Receita Pública', 'Precatórios'] }
  ];

  var TEXTO_STATUS = {
    critico: function (item) { return 'Você está tendo bastante dificuldade aqui (' + item.pct + '% de acerto). É o próximo da sua trilha — vale reforçar antes de seguir em frente.'; },
    fraco: function (item) { return 'Ainda não está redondo (' + item.pct + '% de acerto). Continue nesse assunto mais um pouco antes de avançar.'; },
    sem_dados: function () { return 'Próximo assunto da sua trilha. Ainda não visitado — bom momento pra começar.'; },
    desenvolvimento: function (item) { return 'Está no caminho certo (' + item.pct + '% de acerto), mas ainda dá pra evoluir antes de avançar.'; }
  };

  function statusDoItem(item, disciplinaId) {
    var todasRespostas = Storage.read(Storage.KEYS.questaoRespostas, []);
    var respostas = todasRespostas.filter(function (r) {
      return r.disciplinaId === disciplinaId && item.temas.indexOf(r.tema || 'Geral') !== -1;
    });
    if (respostas.length === 0) return { total: 0, acertos: 0, pct: 0, status: 'sem_dados' };
    return Fraquezas.classificar(respostas);
  }

  // Acha o primeiro item da fila (na ordem definida acima) que ainda não
  // está dominado — seja porque nunca foi estudado, seja porque um item
  // já dominado antes voltou a ficar fraco/crítico. `disciplinas` é o
  // array de DB.getAll('disciplinas').
  function getProximoItem(disciplinas) {
    var disciplinaIdPorNome = {};
    disciplinas.forEach(function (d) { disciplinaIdPorNome[d.nome] = d.id; });

    for (var i = 0; i < FILA.length; i++) {
      var item = FILA[i];
      var disciplinaId = disciplinaIdPorNome[item.territorio];
      if (!disciplinaId) continue; // território não existe nessa instalação (ex: apagado pelo usuário)
      // Item ainda sem nenhuma questão cadastrada especificamente sobre ele:
      // nunca teria como sair de "sem_dados" (nenhuma resposta bateria com
      // uma lista de temas vazia), o que travaria a trilha pra sempre nele.
      // Melhor pular e deixar a fila seguir — ele continua disponível pra
      // quem quiser estudá-lo manualmente via "escolher outro território".
      if (item.temas.length === 0) continue;
      var info = statusDoItem(item, disciplinaId);
      if (info.status !== 'dominado') {
        return Object.assign({}, item, info, {
          disciplinaId: disciplinaId,
          posicao: i + 1,
          total114: FILA.length,
          nivelInfo: NIVEL_META[item.nivel],
          texto: (TEXTO_STATUS[info.status] || function () { return ''; })(info)
        });
      }
    }
    return null; // trilha inteira dominada
  }

  return { FILA: FILA, getProximoItem: getProximoItem };
})();
