package com.oabapp.etica.data.local.database

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import com.oabapp.etica.data.local.entities.StudyCardEntity
import kotlinx.coroutines.flow.Flow

@Dao
interface StudyCardDao {

    @Insert(onConflict = OnConflictStrategy.IGNORE)
    suspend fun inserirTodos(cards: List<StudyCardEntity>)

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun inserir(card: StudyCardEntity): Long

    @Query("SELECT * FROM study_card WHERE moduleId = :moduleId ORDER BY themeId, id")
    fun observarCardsPorModulo(moduleId: Int): Flow<List<StudyCardEntity>>

    @Query("SELECT * FROM study_card WHERE moduleId = :moduleId ORDER BY themeId, id")
    suspend fun obterCardsPorModulo(moduleId: Int): List<StudyCardEntity>

    @Query("SELECT * FROM study_card WHERE themeId = :themeId ORDER BY id")
    suspend fun obterCardsPorTema(themeId: Int): List<StudyCardEntity>

    @Query("SELECT * FROM study_card WHERE id = :id")
    suspend fun obterPorId(id: Long): StudyCardEntity?

    @Query("SELECT COUNT(*) FROM study_card WHERE moduleId = :moduleId")
    suspend fun contarPorModulo(moduleId: Int): Int

    @Query("SELECT COUNT(*) FROM study_card")
    suspend fun contarTotal(): Int

    // Cards com revisão SRS pendente para hoje
    @Query("""
        SELECT sc.* FROM study_card sc
        INNER JOIN srs_state ss ON sc.id = ss.cardId
        WHERE ss.nextReviewDate <= :agora
        ORDER BY ss.nextReviewDate ASC
    """)
    fun observarCardsParaRevisao(agora: Long): Flow<List<StudyCardEntity>>

    @Query("""
        SELECT sc.* FROM study_card sc
        INNER JOIN srs_state ss ON sc.id = ss.cardId
        WHERE ss.nextReviewDate <= :agora
        ORDER BY ss.nextReviewDate ASC
    """)
    suspend fun obterCardsParaRevisao(agora: Long): List<StudyCardEntity>

    @Query("""
        SELECT COUNT(*) FROM study_card sc
        INNER JOIN srs_state ss ON sc.id = ss.cardId
        WHERE ss.nextReviewDate <= :agora
    """)
    fun observarContadorRevisoesPendentes(agora: Long): Flow<Int>
}
