package com.oabapp.etica.data.local.database

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query
import androidx.room.Update
import com.oabapp.etica.data.local.entities.StudySessionEntity
import kotlinx.coroutines.flow.Flow

@Dao
interface StudySessionDao {

    @Insert
    suspend fun inserir(sessao: StudySessionEntity): Long

    @Update
    suspend fun atualizar(sessao: StudySessionEntity)

    @Query("SELECT * FROM study_session WHERE id = :id")
    suspend fun obterPorId(id: Long): StudySessionEntity?

    @Query("SELECT * FROM study_session ORDER BY date DESC LIMIT 1")
    suspend fun obterUltimaSessao(): StudySessionEntity?

    @Query("SELECT * FROM study_session WHERE date >= :inicioDia AND date <= :fimDia ORDER BY date DESC")
    fun observarSessoesHoje(inicioDia: Long, fimDia: Long): Flow<List<StudySessionEntity>>

    @Query("SELECT * FROM study_session ORDER BY date DESC LIMIT :limite")
    suspend fun obterUltimasSessoes(limite: Int): List<StudySessionEntity>

    // Estatísticas por módulo para o relatório
    @Query("""
        SELECT SUM(correctAnswers) FROM study_session
        WHERE moduleId = :moduleId AND date >= :inicioPeriodo
    """)
    suspend fun somarAcertosPorModulo(moduleId: Int, inicioPeriodo: Long): Int?

    @Query("""
        SELECT SUM(totalCards) FROM study_session
        WHERE moduleId = :moduleId AND date >= :inicioPeriodo
    """)
    suspend fun somarTotalCardsPorModulo(moduleId: Int, inicioPeriodo: Long): Int?
}
