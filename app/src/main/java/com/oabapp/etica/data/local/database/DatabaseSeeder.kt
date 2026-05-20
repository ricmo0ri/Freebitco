package com.oabapp.etica.data.local.database

import com.oabapp.etica.data.local.entities.SrsStateEntity
import com.oabapp.etica.data.local.entities.StudyCardEntity
import com.oabapp.etica.data.local.entities.UserProfileEntity
import com.oabapp.etica.util.Constants
import javax.inject.Inject
import javax.inject.Singleton

/**
 * Popula o banco com conteúdo inicial de lei seca OAB Ética.
 * Executado uma única vez na primeira inicialização do app.
 */
@Singleton
class DatabaseSeeder @Inject constructor(
    private val db: AppDatabase
) {
    suspend fun popular() {
        // Não repopular se já existirem cards
        if (db.studyCardDao().contarTotal() > 0) return

        // Perfil padrão do usuário
        db.userProfileDao().inserirOuAtualizar(UserProfileEntity())

        // Todos os cards de seed
        val cards = criarCardsModulo1() + criarCardsModulo2()
        db.studyCardDao().inserirTodos(cards)

        // Obtém IDs gerados e cria estado SRS inicial para cada card
        val idsCards = db.studyCardDao()
            .obterCardsPorModulo(Constants.MODULO_ESTATUTO).map { it.id } +
                db.studyCardDao()
                    .obterCardsPorModulo(Constants.MODULO_CODIGO_ETICA).map { it.id }

        val estadosIniciais = idsCards.map { id ->
            SrsStateEntity(
                cardId = id,
                // Escalonamos as datas iniciais para não sobrecarregar a primeira sessão
                nextReviewDate = System.currentTimeMillis()
            )
        }
        db.srsStateDao().inserirTodos(estadosIniciais)
    }

    // ─── Módulo 1: Estatuto da Advocacia — Lei 8.906/94 ───────────────────────

    private fun criarCardsModulo1(): List<StudyCardEntity> = listOf(

        StudyCardEntity(
            moduleId = Constants.MODULO_ESTATUTO,
            themeId = 101,
            type = Constants.TIPO_FLASHCARD,
            front = "Qual é o mínimo de atos privativos para configurar exercício efetivo da advocacia?",
            back = "Participação anual mínima em 5 atos privativos (Art. 1º, EAOAB), em causas ou questões distintas.",
            difficulty = 2
        ),

        StudyCardEntity(
            moduleId = Constants.MODULO_ESTATUTO,
            themeId = 102,
            type = Constants.TIPO_FLASHCARD,
            front = "Em que caso o advogado pode ser preso em flagrante no exercício da profissão?",
            back = "Apenas em crime inafiançável, com presença obrigatória de representante da OAB (Art. 7º, §3º, EAOAB).",
            difficulty = 2
        ),

        StudyCardEntity(
            moduleId = Constants.MODULO_ESTATUTO,
            themeId = 102,
            type = Constants.TIPO_FLASHCARD,
            front = "O que decidiu a ADIn 1.127-8 sobre as salas especiais para advogados?",
            back = "Declarou inconstitucional a expressão 'controle', mantendo apenas o uso assegurado à OAB (Art. 7º, §4º, EAOAB).",
            difficulty = 3
        ),

        StudyCardEntity(
            moduleId = Constants.MODULO_ESTATUTO,
            themeId = 103,
            type = Constants.TIPO_FLASHCARD,
            front = "Qual a pena para crime de abuso de autoridade por violação de prerrogativas do advogado?",
            back = "Detenção de 2 a 4 anos e multa (Art. 7-B, EAOAB — pena aumentada pela Lei 14.365/2022).",
            difficulty = 2
        ),

        StudyCardEntity(
            moduleId = Constants.MODULO_ESTATUTO,
            themeId = 104,
            type = Constants.TIPO_FLASHCARD,
            front = "O advogado pode celebrar colaboração premiada contra ex-cliente?",
            back = "Não. É vedado (Art. 7º, §6-I). Consequência: processo disciplinar + possível exclusão da OAB + crime (Art. 154 do CP).",
            difficulty = 2
        ),

        StudyCardEntity(
            moduleId = Constants.MODULO_ESTATUTO,
            themeId = 101,
            type = Constants.TIPO_MULTIPLA_ESCOLHA,
            front = "João, advogado inscrito na OAB/SP, exerceu a profissão durante o ano realizando apenas 3 atos privativos em causas distintas. De acordo com o Estatuto da Advocacia, é correto afirmar que:",
            back = "B) João não cumpriu o requisito, pois o mínimo são 5 atos privativos em causas distintas.",
            options = listOf(
                "João cumpriu o requisito mínimo de exercício efetivo da advocacia.",
                "João não cumpriu o requisito, pois o mínimo são 5 atos privativos em causas distintas.",
                "João não cumpriu o requisito, pois o mínimo são 10 atos por ano.",
                "O Estatuto não exige número mínimo de atos para configurar exercício efetivo."
            ),
            correctOption = 1,
            explanation = "Art. 1º, EAOAB: considera-se exercício efetivo a participação anual mínima em 5 atos privativos, em causas ou questões distintas.",
            difficulty = 2
        )
    )

    // ─── Módulo 2: Código de Ética e Disciplina — Res. 02/2015 ───────────────

    private fun criarCardsModulo2(): List<StudyCardEntity> = listOf(

        StudyCardEntity(
            moduleId = Constants.MODULO_CODIGO_ETICA,
            themeId = 201,
            type = Constants.TIPO_FLASHCARD,
            front = "O sigilo profissional do advogado depende de pedido do cliente?",
            back = "Não. É de ordem pública, independe de solicitação (Art. 36, CED). Comunicações advogado-cliente presumem-se confidenciais.",
            difficulty = 1
        ),

        StudyCardEntity(
            moduleId = Constants.MODULO_CODIGO_ETICA,
            themeId = 201,
            type = Constants.TIPO_FLASHCARD,
            front = "Quais são as exceções ao sigilo profissional do advogado?",
            back = "1) Grave ameaça ao direito à vida e à honra.\n2) Defesa própria (quando o cliente acusa o advogado). (Art. 37, CED)",
            difficulty = 2
        ),

        StudyCardEntity(
            moduleId = Constants.MODULO_CODIGO_ETICA,
            themeId = 202,
            type = Constants.TIPO_FLASHCARD,
            front = "Qual tipo de publicidade é permitida ao advogado?",
            back = "Apenas informativa, discreta e sóbria. Proibida qualquer forma de captação de clientela (Arts. 39-47, CED).",
            difficulty = 1
        ),

        StudyCardEntity(
            moduleId = Constants.MODULO_CODIGO_ETICA,
            themeId = 202,
            type = Constants.TIPO_FLASHCARD,
            front = "O advogado pode mencionar cargo público anterior no cartão de visitas?",
            back = "Não, salvo o de professor universitário (Art. 44, §2º, CED).",
            difficulty = 2
        ),

        StudyCardEntity(
            moduleId = Constants.MODULO_CODIGO_ETICA,
            themeId = 203,
            type = Constants.TIPO_FLASHCARD,
            front = "O que é advocacia pro bono?",
            back = "Prestação gratuita, eventual e voluntária de serviços jurídicos a instituições sociais sem fins econômicos ou a pessoas sem recursos. Vedado para fins político-partidários ou captação de clientela (CED).",
            difficulty = 1
        ),

        StudyCardEntity(
            moduleId = Constants.MODULO_CODIGO_ETICA,
            themeId = 201,
            type = Constants.TIPO_MULTIPLA_ESCOLHA,
            front = "Determinado advogado, ao ser investigado criminalmente, celebrou acordo de colaboração premiada revelando informações sigilosas de um ex-cliente. Assinale a alternativa correta:",
            back = "B) O ato é vedado e pode gerar exclusão da OAB e crime de violação de segredo profissional.",
            options = listOf(
                "O ato é permitido, pois a lei de colaboração premiada prevalece sobre o CED.",
                "O ato é vedado e pode gerar exclusão da OAB e crime de violação de segredo profissional.",
                "O ato é permitido se o cliente der autorização expressa.",
                "O ato é vedado apenas se o cliente ainda estiver sendo patrocinado pelo advogado."
            ),
            correctOption = 1,
            explanation = "Art. 7º, §6-I, EAOAB: vedada a colaboração premiada contra quem seja ou tenha sido cliente. Consequência: processo disciplinar com possível exclusão + Art. 154 do CP.",
            difficulty = 3
        )
    )
}
