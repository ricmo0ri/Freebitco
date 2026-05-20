package com.oabapp.etica.data.local.entities

import androidx.room.Entity
import androidx.room.PrimaryKey

/**
 * Registro de uma sessão de estudo concluída.
 */
@Entity(tableName = "study_session")
data class StudySessionEntity(
    @PrimaryKey(autoGenerate = true) val id: Long = 0,
    val date: Long = System.currentTimeMillis(),
    val durationMinutes: Int,
    val focusLevel: Int,               // nível TDAH durante a sessão
    val totalCards: Int,
    val correctAnswers: Int,
    val moduleId: Int                  // módulo estudado (0 = sessão mista)
)
