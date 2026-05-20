package com.oabapp.etica.domain.model

data class StudySession(
    val id: Long = 0,
    val date: Long,
    val durationMinutes: Int,
    val focusLevel: Int,
    val totalCards: Int,
    val correctAnswers: Int,
    val moduleId: Int
) {
    val percentualAcertos: Float
        get() = if (totalCards == 0) 0f else correctAnswers.toFloat() / totalCards * 100f
}
