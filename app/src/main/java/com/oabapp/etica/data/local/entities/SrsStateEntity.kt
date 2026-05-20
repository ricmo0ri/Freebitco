package com.oabapp.etica.data.local.entities

import androidx.room.Entity
import androidx.room.ForeignKey
import androidx.room.Index
import androidx.room.PrimaryKey

/**
 * Estado de revisão espaçada (SM-2) por card.
 * Relacionado 1:1 com [StudyCardEntity] via [cardId].
 */
@Entity(
    tableName = "srs_state",
    foreignKeys = [ForeignKey(
        entity = StudyCardEntity::class,
        parentColumns = ["id"],
        childColumns = ["cardId"],
        onDelete = ForeignKey.CASCADE
    )],
    indices = [Index("cardId"), Index("nextReviewDate")]
)
data class SrsStateEntity(
    @PrimaryKey val cardId: Long,
    val interval: Int = 1,             // intervalo atual em dias
    val easeFactor: Float = 2.5f,      // fator de facilidade (mínimo 1.3)
    val repetitions: Int = 0,          // número de repetições consecutivas corretas
    val nextReviewDate: Long = System.currentTimeMillis(), // timestamp da próxima revisão
    val lastAnswerQuality: Int = 0     // 0-5: qualidade da última resposta SM-2
)
