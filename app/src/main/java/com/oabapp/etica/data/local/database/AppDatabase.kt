package com.oabapp.etica.data.local.database

import androidx.room.Database
import androidx.room.RoomDatabase
import androidx.room.TypeConverters
import com.oabapp.etica.data.local.entities.CardAnswerEntity
import com.oabapp.etica.data.local.entities.SrsStateEntity
import com.oabapp.etica.data.local.entities.StudyCardEntity
import com.oabapp.etica.data.local.entities.StudySessionEntity
import com.oabapp.etica.data.local.entities.UserProfileEntity

/**
 * Banco de dados principal do app — versão 1.
 * O [fallbackToDestructiveMigration] está desabilitado; migrações devem ser
 * escritas explicitamente para preservar os dados do usuário.
 */
@Database(
    entities = [
        UserProfileEntity::class,
        StudyCardEntity::class,
        SrsStateEntity::class,
        StudySessionEntity::class,
        CardAnswerEntity::class
    ],
    version = 1,
    exportSchema = true
)
@TypeConverters(Converters::class)
abstract class AppDatabase : RoomDatabase() {
    abstract fun userProfileDao(): UserProfileDao
    abstract fun studyCardDao(): StudyCardDao
    abstract fun srsStateDao(): SrsStateDao
    abstract fun studySessionDao(): StudySessionDao
    abstract fun cardAnswerDao(): CardAnswerDao
}
