package com.oabapp.etica

import com.oabapp.etica.data.local.entities.SrsStateEntity
import com.oabapp.etica.util.SrsAlgorithm
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test
import java.util.concurrent.TimeUnit

class SrsAlgorithmTest {

    private fun estadoPadrao(
        cardId: Long = 1L,
        interval: Int = 1,
        easeFactor: Float = 2.5f,
        repetitions: Int = 0
    ) = SrsStateEntity(
        cardId = cardId,
        interval = interval,
        easeFactor = easeFactor,
        repetitions = repetitions,
        nextReviewDate = System.currentTimeMillis(),
        lastAnswerQuality = 0
    )

    // ─── Sequência de intervalos SM-2 ────────────────────────────────────────

    @Test
    fun `primeira repeticao correta retorna interval 1`() {
        val r = SrsAlgorithm.calcularProximaRevisao(estadoPadrao(repetitions = 0), 5)
        assertEquals(1, r.interval)
        assertEquals(1, r.repetitions)
    }

    @Test
    fun `segunda repeticao correta retorna interval 6`() {
        val r = SrsAlgorithm.calcularProximaRevisao(estadoPadrao(interval = 1, repetitions = 1), 5)
        assertEquals(6, r.interval)
        assertEquals(2, r.repetitions)
    }

    @Test
    fun `terceira repeticao com EF 2_5 retorna interval proximo de 15`() {
        val r = SrsAlgorithm.calcularProximaRevisao(
            estadoPadrao(interval = 6, repetitions = 2, easeFactor = 2.5f), 5
        )
        // EF após q=5: 2.5 + (0.1 - 0*(0.08+0)) = 2.6 → interval = round(6 * 2.6) = 16
        assertTrue("Esperado 14-17, obtido ${r.interval}", r.interval in 14..17)
        assertEquals(3, r.repetitions)
    }

    @Test
    fun `progressao completa de 5 repeticoes com qualidade 5`() {
        var estado = estadoPadrao()
        val intervalosEsperados = listOf(1, 6)
        repeat(5) { i ->
            estado = SrsAlgorithm.calcularProximaRevisao(estado, 5)
            if (i < 2) assertEquals(intervalosEsperados[i], estado.interval)
            else assertTrue("Intervalo deve crescer a cada rep", estado.interval >= 6)
        }
        assertEquals(5, estado.repetitions)
        assertTrue(estado.interval > 6)
    }

    // ─── Reinício por erro ────────────────────────────────────────────────────

    @Test
    fun `qualidade 0 reinicia interval e repetitions`() {
        val r = SrsAlgorithm.calcularProximaRevisao(estadoPadrao(interval = 30, repetitions = 5), 0)
        assertEquals(1, r.interval)
        assertEquals(0, r.repetitions)
    }

    @Test
    fun `qualidade 1 reinicia interval e repetitions`() {
        val r = SrsAlgorithm.calcularProximaRevisao(estadoPadrao(interval = 15, repetitions = 3), 1)
        assertEquals(1, r.interval)
        assertEquals(0, r.repetitions)
    }

    @Test
    fun `qualidade 2 reinicia interval e repetitions`() {
        val r = SrsAlgorithm.calcularProximaRevisao(estadoPadrao(interval = 10, repetitions = 4), 2)
        assertEquals(1, r.interval)
        assertEquals(0, r.repetitions)
    }

    @Test
    fun `qualidade 3 avanca sem reiniciar`() {
        val r = SrsAlgorithm.calcularProximaRevisao(estadoPadrao(interval = 1, repetitions = 0), 3)
        assertEquals(1, r.repetitions)  // avançou
        assertEquals(1, r.interval)     // rep=0 → interval=1
    }

    // ─── EaseFactor ──────────────────────────────────────────────────────────

    @Test
    fun `easeFactor nao cai abaixo de 1_3 com qualidade 0 repetido`() {
        var estado = estadoPadrao(easeFactor = 1.3f)
        repeat(20) { estado = SrsAlgorithm.calcularProximaRevisao(estado, 0) }
        assertTrue("EF=${estado.easeFactor} deve ser >= 1.3", estado.easeFactor >= 1.3f)
    }

    @Test
    fun `qualidade 5 aumenta easeFactor em 0_1`() {
        val estado = estadoPadrao(easeFactor = 2.5f)
        val r = SrsAlgorithm.calcularProximaRevisao(estado, 5)
        // delta = 0.1 - 0*(0.08+0) = 0.1 → EF = 2.6
        assertEquals(2.6f, r.easeFactor, 0.01f)
    }

    @Test
    fun `qualidade 3 reduz easeFactor ligeiramente`() {
        val estado = estadoPadrao(easeFactor = 2.5f)
        val r = SrsAlgorithm.calcularProximaRevisao(estado, 3)
        // delta = 0.1 - 2*(0.08+2*0.02) = 0.1 - 0.24 = -0.14 → EF = 2.36
        assertEquals(2.36f, r.easeFactor, 0.01f)
    }

    @Test
    fun `qualidade 4 mantem easeFactor quase estavel`() {
        val estado = estadoPadrao(easeFactor = 2.5f)
        val r = SrsAlgorithm.calcularProximaRevisao(estado, 4)
        // delta = 0.1 - 1*(0.08+0.02) = 0.0 → EF = 2.5
        assertEquals(2.5f, r.easeFactor, 0.01f)
    }

    // ─── Próxima data de revisão ──────────────────────────────────────────────

    @Test
    fun `proxima data e exatamente intervalo dias a frente`() {
        val antes = System.currentTimeMillis()
        val estado = estadoPadrao(interval = 1, repetitions = 0)
        val r = SrsAlgorithm.calcularProximaRevisao(estado, 5)
        val depois = System.currentTimeMillis()

        val diferencaDias = TimeUnit.MILLISECONDS.toDays(r.nextReviewDate - antes)
        val diferencaDiasMax = TimeUnit.MILLISECONDS.toDays(r.nextReviewDate - depois)

        // interval=1 (rep=0 → permanece 1) → deve ser ~1 dia à frente
        assertEquals(1L, diferencaDias)
    }

    @Test
    fun `data de revisao apos erro e amanha`() {
        val r = SrsAlgorithm.calcularProximaRevisao(
            estadoPadrao(interval = 30, repetitions = 5), 0
        )
        val dias = TimeUnit.MILLISECONDS.toDays(r.nextReviewDate - System.currentTimeMillis())
        assertEquals(1L, dias)
    }

    // ─── Conversão dificuldade → qualidade ───────────────────────────────────

    @Test
    fun `dificuldade 1 Facil mapeia para qualidade 5`() =
        assertEquals(5, SrsAlgorithm.dificuldadeParaQualidade(1))

    @Test
    fun `dificuldade 2 Medio mapeia para qualidade 3`() =
        assertEquals(3, SrsAlgorithm.dificuldadeParaQualidade(2))

    @Test
    fun `dificuldade 3 Dificil mapeia para qualidade 1`() =
        assertEquals(1, SrsAlgorithm.dificuldadeParaQualidade(3))

    @Test
    fun `dificuldade invalida retorna qualidade 3 por padrao`() =
        assertEquals(3, SrsAlgorithm.dificuldadeParaQualidade(99))

    // ─── Invariantes do estado ────────────────────────────────────────────────

    @Test
    fun `lastAnswerQuality e gravado corretamente`() {
        val r = SrsAlgorithm.calcularProximaRevisao(estadoPadrao(), 4)
        assertEquals(4, r.lastAnswerQuality)
    }

    @Test
    fun `cardId e preservado apos calculo`() {
        val r = SrsAlgorithm.calcularProximaRevisao(estadoPadrao(cardId = 42L), 5)
        assertEquals(42L, r.cardId)
    }

    @Test(expected = IllegalArgumentException::class)
    fun `qualidade acima de 5 lanca excecao`() {
        SrsAlgorithm.calcularProximaRevisao(estadoPadrao(), 6)
    }

    @Test(expected = IllegalArgumentException::class)
    fun `qualidade abaixo de 0 lanca excecao`() {
        SrsAlgorithm.calcularProximaRevisao(estadoPadrao(), -1)
    }
}
