package com.oabapp.etica.domain.model

data class CardAnswer(
    val sessionId: Long,
    val cardId: Long,
    val answeredCorrectly: Boolean,
    val difficultyFelt: Int,   // 1=Fácil, 2=Médio, 3=Difícil
    val timestamp: Long = System.currentTimeMillis()
)
