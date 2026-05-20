package com.oabapp.etica.data.local.entities

import androidx.room.Entity
import androidx.room.ForeignKey
import androidx.room.Index
import androidx.room.PrimaryKey

/**
 * Histórico individual de resposta a cada card em uma sessão.
 * Permite análise de progresso por card ao longo do tempo.
 */
@Entity(
    tableName = "card_answer",
    foreignKeys = [
        ForeignKey(
            entity = StudySessionEntity::class,
            parentColumns = ["id"],
            childColumns = ["sessionId"],
            onDelete = ForeignKey.CASCADE
        ),
        ForeignKey(
            entity = StudyCardEntity::class,
            parentColumns = ["id"],
            childColumns = ["cardId"],
            onDelete = ForeignKey.CASCADE
        )
    ],
    indices = [Index("sessionId"), Index("cardId")]
)
data class CardAnswerEntity(
    @PrimaryKey(autoGenerate = true) val id: Long = 0,
    val sessionId: Long,
    val cardId: Long,
    val answeredCorrectly: Boolean,
    val difficultyFelt: Int,           // 1=fácil, 2=médio, 3=difícil (percepção do usuário)
    val timestamp: Long = System.currentTimeMillis()
)
