package com.oabapp.etica.usecase

import com.oabapp.etica.domain.usecase.SubmitCardAnswerUseCase
import com.oabapp.etica.fake.FakeStudySessionRepository
import kotlinx.coroutines.test.runTest
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Before
import org.junit.Test

class SubmitCardAnswerUseCaseTest {

    private lateinit var sessaoRepo: FakeStudySessionRepository
    private lateinit var useCase: SubmitCardAnswerUseCase

    @Before
    fun setUp() {
        sessaoRepo = FakeStudySessionRepository()
        useCase = SubmitCardAnswerUseCase(sessaoRepo)
    }

    @Test
    fun `registra resposta correta com difficultyFelt 1`() = runTest {
        useCase(sessionId = 1L, cardId = 10L, answeredCorrectly = true, difficultyFelt = 1)
        val resposta = sessaoRepo.respostasRegistradas.first()
        assertTrue(resposta.answeredCorrectly)
        assertEquals(1, resposta.difficultyFelt)
        assertEquals(10L, resposta.cardId)
        assertEquals(1L, resposta.sessionId)
    }

    @Test
    fun `registra resposta incorreta com difficultyFelt 3`() = runTest {
        useCase(sessionId = 2L, cardId = 5L, answeredCorrectly = false, difficultyFelt = 3)
        val resposta = sessaoRepo.respostasRegistradas.first()
        assertTrue(!resposta.answeredCorrectly)
        assertEquals(3, resposta.difficultyFelt)
    }

    @Test
    fun `atualiza SRS apos cada resposta`() = runTest {
        useCase(sessionId = 1L, cardId = 7L, answeredCorrectly = true, difficultyFelt = 2)
        assertEquals(1, sessaoRepo.srsAtualizados.size)
        val (cardId, difficulty) = sessaoRepo.srsAtualizados.first()
        assertEquals(7L, cardId)
        assertEquals(2, difficulty)
    }

    @Test
    fun `multiplas respostas sao todas registradas`() = runTest {
        repeat(5) { i ->
            useCase(
                sessionId = 1L,
                cardId = i.toLong() + 1,
                answeredCorrectly = i % 2 == 0,
                difficultyFelt = (i % 3) + 1
            )
        }
        assertEquals(5, sessaoRepo.respostasRegistradas.size)
        assertEquals(5, sessaoRepo.srsAtualizados.size)
    }

    @Test
    fun `timestamp da resposta e recente`() = runTest {
        val antes = System.currentTimeMillis()
        useCase(sessionId = 1L, cardId = 1L, answeredCorrectly = true, difficultyFelt = 1)
        val depois = System.currentTimeMillis()
        val ts = sessaoRepo.respostasRegistradas.first().timestamp
        assertTrue(ts in antes..depois)
    }
}
