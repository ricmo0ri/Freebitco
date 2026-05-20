package com.oabapp.etica.domain.model

/**
 * Dados consolidados do relatório diário exibidos na ReportScreen.
 */
data class DailyReport(
    val sessao: StudySession,
    val estatisticasPorModulo: List<EstatisticaModulo>,
    val mensagemIncentivo: String,
    val revisoesPendentes: Int
)

data class EstatisticaModulo(
    val moduleId: Int,
    val nomeModulo: String,
    val totalCards: Int,
    val acertos: Int
) {
    val percentual: Float
        get() = if (totalCards == 0) 0f else acertos.toFloat() / totalCards * 100f
}

/**
 * Resumo de progresso de um módulo para a tela de módulos.
 */
data class ProgressoModulo(
    val moduleId: Int,
    val nomeModulo: String,
    val totalCards: Int,
    val cardsDominados: Int  // intervalo SRS >= 21 dias
) {
    val percentualDominado: Float
        get() = if (totalCards == 0) 0f else cardsDominados.toFloat() / totalCards * 100f
}
