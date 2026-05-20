package com.oabapp.etica.util

import com.oabapp.etica.data.local.entities.SrsStateEntity
import java.util.concurrent.TimeUnit
import kotlin.math.max
import kotlin.math.roundToInt

/**
 * Implementação do algoritmo SM-2 (SuperMemo 2) para revisão espaçada.
 *
 * Qualidade da resposta (q):
 *   5 = acerto fácil    → usuário marcou "Fácil"
 *   3 = acerto com esforço → usuário marcou "Médio"
 *   1 = erro            → usuário marcou "Difícil"
 *
 * Regras de intervalo:
 *   q < 3  → reinicia (interval=1, repetitions=0)
 *   rep=0  → interval=1
 *   rep=1  → interval=6
 *   rep>1  → interval = round(interval * EF)
 *
 * EF (easeFactor):
 *   EF' = EF + (0.1 - (5-q) * (0.08 + (5-q) * 0.02))
 *   EF mínimo = 1.3
 */
object SrsAlgorithm {

    private const val EF_MINIMO = 1.3f

    /**
     * Calcula o próximo estado SRS dado o estado atual e a qualidade da resposta.
     * Retorna um novo [SrsStateEntity] imutável — não modifica o original.
     */
    fun calcularProximaRevisao(estado: SrsStateEntity, qualidade: Int): SrsStateEntity {
        require(qualidade in 0..5) { "Qualidade deve estar entre 0 e 5, recebido: $qualidade" }

        val novoEF = calcularEaseFactor(estado.easeFactor, qualidade)

        return if (qualidade < 3) {
            // Resposta incorreta — reinicia o ciclo
            estado.copy(
                interval = 1,
                easeFactor = novoEF,
                repetitions = 0,
                nextReviewDate = calcularProximaData(1),
                lastAnswerQuality = qualidade
            )
        } else {
            // Resposta correta — avança no intervalo
            val novoIntervalo = when (estado.repetitions) {
                0 -> 1
                1 -> 6
                else -> (estado.interval * novoEF).roundToInt().coerceAtLeast(1)
            }

            estado.copy(
                interval = novoIntervalo,
                easeFactor = novoEF,
                repetitions = estado.repetitions + 1,
                nextReviewDate = calcularProximaData(novoIntervalo),
                lastAnswerQuality = qualidade
            )
        }
    }

    private fun calcularEaseFactor(efAtual: Float, qualidade: Int): Float {
        val delta = 0.1f - (5 - qualidade) * (0.08f + (5 - qualidade) * 0.02f)
        return max(EF_MINIMO, efAtual + delta)
    }

    private fun calcularProximaData(intervaloDias: Int): Long {
        val agora = System.currentTimeMillis()
        return agora + TimeUnit.DAYS.toMillis(intervaloDias.toLong())
    }

    /**
     * Converte a percepção de dificuldade do usuário (1-3) em qualidade SM-2 (0-5).
     * [dificuldadePercebida]: 1=Fácil, 2=Médio, 3=Difícil
     */
    fun dificuldadeParaQualidade(dificuldadePercebida: Int): Int = when (dificuldadePercebida) {
        1 -> 5  // Fácil → qualidade máxima
        2 -> 3  // Médio → qualidade limiar de acerto
        3 -> 1  // Difícil → qualidade de erro
        else -> 3
    }
}
