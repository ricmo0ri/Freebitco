package com.oabapp.etica.data.local.database

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.Update
import androidx.room.Upsert
import com.oabapp.etica.data.local.entities.SrsStateEntity
import kotlinx.coroutines.flow.Flow

@Dao
interface SrsStateDao {

    @Upsert
    suspend fun salvar(estado: SrsStateEntity)

    @Insert(onConflict = OnConflictStrategy.IGNORE)
    suspend fun inserirTodos(estados: List<SrsStateEntity>)

    @Query("SELECT * FROM srs_state WHERE cardId = :cardId")
    suspend fun obterPorCard(cardId: Long): SrsStateEntity?

    @Query("SELECT * FROM srs_state WHERE nextReviewDate <= :agora ORDER BY nextReviewDate ASC")
    suspend fun obterPendentesHoje(agora: Long): List<SrsStateEntity>

    @Query("SELECT COUNT(*) FROM srs_state WHERE nextReviewDate <= :agora")
    fun observarContadorPendentes(agora: Long): Flow<Int>

    // Progresso por módulo: % de cards com intervalo >= limiar "dominado"
    @Query("""
        SELECT COUNT(*) FROM srs_state ss
        INNER JOIN study_card sc ON ss.cardId = sc.id
        WHERE sc.moduleId = :moduleId AND ss.interval >= 21
    """)
    suspend fun contarCardsDominadosPorModulo(moduleId: Int): Int
}
