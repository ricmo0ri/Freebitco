package com.oabapp.etica

import com.oabapp.etica.data.local.entities.SrsStateEntity
import com.oabapp.etica.util.SrsAlgorithm
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test

class SrsAlgorithmTest {

    private fun estadoPadrao(cardId: Long = 1L) = SrsStateEntity(
        cardId = cardId,
        interval = 1,
        easeFactor = 2.5f,
        repetitions = 0,
        nextReviewDate = System.currentTimeMillis(),
        lastAnswerQuality = 0
    )

    // ─── Primeiras repetições ─────────────────────────────────────────────────

    @Test
    fun `primeira repeticao correta usa intervalo 1`() {
        val estado = estadoPadrao()
        val resultado = SrsAlgorithm.calcularProximaRevisao(estado, qualidade = 5)
        assertEquals(1, resultado.interval)
        assertEquals(1, resultado.repetitions)
    }

    @Test
    fun `segunda repeticao correta usa intervalo 6`() {
        val estado = estadoPadrao().copy(repetitions = 1, interval = 1)
        val resultado = SrsAlgorithm.calcularProximaRevisao(estado, qualidade = 5)
        assertEquals(6, resultado.interval)
        assertEquals(2, resultado.repetitions)
    }

    @Test
    fun `terceira repeticao usa intervalo vezes EF`() {
        val estado = estadoPadrao().copy(repetitions = 2, interval = 6, easeFactor = 2.5f)
        val resultado = SrsAlgorithm.calcularProximaRevisao(estado, qualidade = 5)
        // 6 * 2.6 (EF atualizado com q=5) = ~15-16
        assertTrue(resultado.interval in 14..17)
        assertEquals(3, resultado.repetitions)
    }

    // ─── Reinício por erro ────────────────────────────────────────────────────

    @Test
    fun `qualidade abaixo de 3 reinicia o intervalo`() {
        val estado = estadoPadrao().copy(repetitions = 5, interval = 30)
        val resultado = SrsAlgorithm.calcularProximaRevisao(estado, qualidade = 1)
        assertEquals(1, resultado.interval)
        assertEquals(0, resultado.repetitions)
    }

    @Test
    fun `qualidade 2 tambem reinicia`() {
        val estado = estadoPadrao().copy(repetitions = 3, interval = 15)
        val resultado = SrsAlgorithm.calcularProximaRevisao(estado, qualidade = 2)
        assertEquals(1, resultado.interval)
        assertEquals(0, resultado.repetitions)
    }

    // ─── Fator de facilidade ──────────────────────────────────────────────────

    @Test
    fun `easeFactor nao cai abaixo de 1_3`() {
        var estado = estadoPadrao().copy(easeFactor = 1.3f)
        // Responder errado várias vezes não desce abaixo de 1.3
        repeat(10) {
            estado = SrsAlgorithm.calcularProximaRevisao(estado, qualidade = 0)
        }
        assertTrue(estado.easeFactor >= 1.3f)
    }

    @Test
    fun `qualidade 5 aumenta easeFactor`() {
        val estado = estadoPadrao().copy(easeFactor = 2.5f)
        val resultado = SrsAlgorithm.calcularProximaRevisao(estado, qualidade = 5)
        assertTrue(resultado.easeFactor > 2.5f)
    }

    @Test
    fun `qualidade 3 mantem easeFactor aproximadamente estavel`() {
        val estado = estadoPadrao().copy(easeFactor = 2.5f)
        val resultado = SrsAlgorithm.calcularProximaRevisao(estado, qualidade = 3)
        // q=3: delta = 0.1 - 2*(0.08+2*0.02) = 0.1 - 0.24 = -0.14? Não, vamos verificar
        // delta = 0.1 - (5-3)*(0.08 + (5-3)*0.02) = 0.1 - 2*(0.08+0.04) = 0.1 - 0.24 = -0.14
        // EF = 2.5 - 0.14 = 2.36
        assertTrue(resultado.easeFactor in 2.3f..2.5f)
    }

    // ─── Conversão dificuldade ────────────────────────────────────────────────

    @Test
    fun `dificuldade 1 mapeia para qualidade 5`() {
        assertEquals(5, SrsAlgorithm.dificuldadeParaQualidade(1))
    }

    @Test
    fun `dificuldade 2 mapeia para qualidade 3`() {
        assertEquals(3, SrsAlgorithm.dificuldadeParaQualidade(2))
    }

    @Test
    fun `dificuldade 3 mapeia para qualidade 1`() {
        assertEquals(1, SrsAlgorithm.dificuldadeParaQualidade(3))
    }

    // ─── Próxima data de revisão ──────────────────────────────────────────────

    @Test
    fun `proxima data e posterior a agora`() {
        val estado = estadoPadrao()
        val antes = System.currentTimeMillis()
        val resultado = SrsAlgorithm.calcularProximaRevisao(estado, qualidade = 5)
        assertTrue(resultado.nextReviewDate > antes)
    }
}
