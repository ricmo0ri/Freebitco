package com.oabapp.etica.data.local.database

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query
import com.oabapp.etica.data.local.entities.CardAnswerEntity

@Dao
interface CardAnswerDao {

    @Insert
    suspend fun inserir(resposta: CardAnswerEntity): Long

    @Insert
    suspend fun inserirTodas(respostas: List<CardAnswerEntity>)

    @Query("SELECT * FROM card_answer WHERE sessionId = :sessionId ORDER BY timestamp ASC")
    suspend fun obterPorSessao(sessionId: Long): List<CardAnswerEntity>

    @Query("""
        SELECT COUNT(*) FROM card_answer
        WHERE cardId = :cardId AND answeredCorrectly = 1
    """)
    suspend fun contarAcertosPorCard(cardId: Long): Int

    @Query("""
        SELECT COUNT(*) FROM card_answer
        WHERE sessionId = :sessionId AND answeredCorrectly = 1
    """)
    suspend fun contarAcertosPorSessao(sessionId: Long): Int

    @Query("""
        SELECT COUNT(*) FROM card_answer WHERE sessionId = :sessionId
    """)
    suspend fun contarTotalPorSessao(sessionId: Long): Int
}
