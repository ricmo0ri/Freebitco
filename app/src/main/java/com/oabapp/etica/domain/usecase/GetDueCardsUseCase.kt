package com.oabapp.etica.domain.usecase

import com.oabapp.etica.domain.model.StudyCard
import com.oabapp.etica.domain.repository.StudyCardRepository
import kotlinx.coroutines.flow.Flow
import javax.inject.Inject

/**
 * Retorna os cards com revisão SRS pendente para hoje, em dois formatos:
 * - [invocarFlow]: Flow reativo para a HomeScreen (contador ao vivo)
 * - [invocar]: suspend para carregar a lista completa na ReviewScreen
 */
class GetDueCardsUseCase @Inject constructor(
    private val cardRepo: StudyCardRepository
) {
    suspend operator fun invoke(): List<StudyCard> =
        cardRepo.obterCardsParaRevisao()

    fun invocarFlow(): Flow<List<StudyCard>> =
        cardRepo.observarCardsParaRevisao()

    fun invocarContador(): Flow<Int> =
        cardRepo.observarContadorRevisoesPendentes()
}
