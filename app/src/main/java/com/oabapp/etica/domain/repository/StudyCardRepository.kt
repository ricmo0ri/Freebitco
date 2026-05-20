package com.oabapp.etica.domain.repository

import com.oabapp.etica.domain.model.ProgressoModulo
import com.oabapp.etica.domain.model.StudyCard
import kotlinx.coroutines.flow.Flow

interface StudyCardRepository {
    suspend fun obterCardsPorModulo(moduleId: Int): List<StudyCard>
    suspend fun obterCardsPorTema(themeId: Int): List<StudyCard>
    suspend fun obterCardsParaRevisao(): List<StudyCard>
    fun observarCardsParaRevisao(): Flow<List<StudyCard>>
    fun observarContadorRevisoesPendentes(): Flow<Int>
    suspend fun obterProgressoPorModulo(moduleId: Int): ProgressoModulo
}
