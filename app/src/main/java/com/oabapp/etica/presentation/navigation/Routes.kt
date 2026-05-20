package com.oabapp.etica.presentation.navigation

/**
 * Rotas da aplicação — strings únicas para cada destino do NavGraph.
 * Argumentos de rota seguem o padrão do Navigation Compose: /{argName}
 */
object Routes {
    const val HOME = "home"
    const val MODULES = "modules"
    const val STUDY = "study/{sessionId}/{focusLevel}/{isReviewMode}"
    const val REVIEW = "review"
    const val REPORT = "report/{sessionId}/{totalCards}/{correctAnswers}"
    const val SETTINGS = "settings"

    // Funções auxiliares para construir rotas com argumentos
    fun study(sessionId: Long, focusLevel: Int, isReviewMode: Boolean): String =
        "study/$sessionId/$focusLevel/$isReviewMode"

    fun report(sessionId: Long, totalCards: Int, correctAnswers: Int): String =
        "report/$sessionId/$totalCards/$correctAnswers"
}
