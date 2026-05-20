package com.oabapp.etica.domain.usecase

import com.oabapp.etica.domain.model.ProgressoModulo
import com.oabapp.etica.domain.repository.StudyCardRepository
import com.oabapp.etica.util.Constants
import javax.inject.Inject

/**
 * Retorna o progresso (% dominado) dos 3 módulos para a ModulesScreen.
 */
class GetModuleProgressUseCase @Inject constructor(
    private val cardRepo: StudyCardRepository
) {
    suspend operator fun invoke(): List<ProgressoModulo> =
        listOf(
            Constants.MODULO_ESTATUTO,
            Constants.MODULO_CODIGO_ETICA,
            Constants.MODULO_REGULAMENTO
        ).map { cardRepo.obterProgressoPorModulo(it) }
}
