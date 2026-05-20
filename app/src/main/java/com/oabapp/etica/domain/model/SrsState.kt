package com.oabapp.etica.domain.model

data class SrsState(
    val cardId: Long,
    val interval: Int,
    val easeFactor: Float,
    val repetitions: Int,
    val nextReviewDate: Long,
    val lastAnswerQuality: Int
)
