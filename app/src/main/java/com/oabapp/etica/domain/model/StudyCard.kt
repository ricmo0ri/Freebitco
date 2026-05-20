package com.oabapp.etica.domain.model

/**
 * Modelo de domínio do card — desacoplado da entidade Room.
 * Carregado com o estado SRS correspondente quando disponível.
 */
data class StudyCard(
    val id: Long,
    val moduleId: Int,
    val themeId: Int,
    val type: CardType,
    val front: String,
    val back: String,
    val options: List<String> = emptyList(),
    val correctOption: Int = 0,
    val explanation: String = "",
    val difficulty: Int = 2,
    val srsState: SrsState? = null
)

enum class CardType { FLASHCARD, MULTIPLE_CHOICE }
