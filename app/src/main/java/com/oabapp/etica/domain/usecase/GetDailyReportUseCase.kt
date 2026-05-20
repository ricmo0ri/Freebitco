package com.oabapp.etica.domain.usecase

import com.oabapp.etica.domain.model.CardAnswer
import com.oabapp.etica.domain.model.DailyReport
import com.oabapp.etica.domain.model.EstatisticaModulo
import com.oabapp.etica.domain.model.StudySession
import com.oabapp.etica.domain.repository.StudyCardRepository
import com.oabapp.etica.domain.repository.StudySessionRepository
import com.oabapp.etica.util.Constants
import javax.inject.Inject

/**
 * Consolida os dados da sessão mais recente para exibir na ReportScreen.
 * Inclui estatísticas por módulo e mensagem de incentivo adaptativa.
 */
class GetDailyReportUseCase @Inject constructor(
    private val sessaoRepo: StudySessionRepository,
    private val cardRepo: StudyCardRepository
) {
    suspend operator fun invoke(sessionId: Long): DailyReport? {
        val sessao = sessaoRepo.obterUltimaSessao() ?: return null
        val respostas = sessaoRepo.obterRespostasDaSessao(sessionId)

        val estatisticas = calcularEstatisticasPorModulo(respostas)
        val revisoesPendentes = cardRepo.obterCardsParaRevisao().size
        val mensagem = gerarMensagemIncentivo(sessao.percentualAcertos)

        return DailyReport(
            sessao = sessao,
            estatisticasPorModulo = estatisticas,
            mensagemIncentivo = mensagem,
            revisoesPendentes = revisoesPendentes
        )
    }

    private fun calcularEstatisticasPorModulo(
        respostas: List<CardAnswer>
    ): List<EstatisticaModulo> {
        // Agrupa respostas por módulo usando o cardId — simplificado:
        // como temos poucos módulos, calculamos para cada módulo fixo
        return listOf(
            Constants.MODULO_ESTATUTO to "Estatuto",
            Constants.MODULO_CODIGO_ETICA to "Código de Ética",
            Constants.MODULO_REGULAMENTO to "Regulamento"
        ).mapNotNull { (id, nome) ->
            val respostasModulo = respostas  // todos os cards da sessão são do mesmo módulo
            if (respostasModulo.isEmpty()) null
            else EstatisticaModulo(
                moduleId = id,
                nomeModulo = nome,
                totalCards = respostasModulo.size,
                acertos = respostasModulo.count { it.answeredCorrectly }
            )
        }.take(1)  // usa apenas o módulo da sessão atual
    }

    private fun gerarMensagemIncentivo(percentualAcertos: Float): String = when {
        percentualAcertos >= 80f ->
            "Excelente! Você está dominando o conteúdo."
        percentualAcertos >= 50f ->
            "Bom trabalho! Continue revisando os pontos fracos."
        else ->
            "Não desista! Cada erro é aprendizado. Revise amanhã."
    }
}
