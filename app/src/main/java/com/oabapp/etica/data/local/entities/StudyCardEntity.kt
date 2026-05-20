package com.oabapp.etica.data.local.entities

import androidx.room.Entity
import androidx.room.PrimaryKey
import androidx.room.TypeConverters
import com.oabapp.etica.data.local.database.Converters

/**
 * Card de estudo — pode ser flashcard ou questão de múltipla escolha.
 * O campo [options] é serializado como JSON via [Converters].
 */
@Entity(tableName = "study_card")
@TypeConverters(Converters::class)
data class StudyCardEntity(
    @PrimaryKey(autoGenerate = true) val id: Long = 0,
    val moduleId: Int,                   // 1=Estatuto, 2=Código Ética, 3=Regulamento
    val themeId: Int,                    // subtema dentro do módulo
    val type: String,                    // "FLASHCARD" ou "MULTIPLE_CHOICE"
    val front: String,                   // enunciado / frente do card
    val back: String,                    // resposta / verso do card
    val options: List<String> = emptyList(), // alternativas A/B/C/D (múltipla escolha)
    val correctOption: Int = 0,          // índice 0-based da alternativa correta
    val explanation: String = "",        // explicação após revelar gabarito
    val difficulty: Int = 2             // 1=fácil, 2=médio, 3=difícil (dificuldade intrínseca)
)
