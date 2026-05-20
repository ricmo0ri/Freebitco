package com.oabapp.etica.di

import android.content.Context
import androidx.room.Room
import com.oabapp.etica.data.local.database.AppDatabase
import com.oabapp.etica.data.local.database.CardAnswerDao
import com.oabapp.etica.data.local.database.SrsStateDao
import com.oabapp.etica.data.local.database.StudyCardDao
import com.oabapp.etica.data.local.database.StudySessionDao
import com.oabapp.etica.data.local.database.UserProfileDao
import com.oabapp.etica.util.Constants
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.qualifiers.ApplicationContext
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object DatabaseModule {

    @Provides
    @Singleton
    fun provideDatabase(@ApplicationContext context: Context): AppDatabase =
        Room.databaseBuilder(
            context,
            AppDatabase::class.java,
            Constants.NOME_BANCO
        ).build()

    @Provides
    fun provideUserProfileDao(db: AppDatabase): UserProfileDao = db.userProfileDao()

    @Provides
    fun provideStudyCardDao(db: AppDatabase): StudyCardDao = db.studyCardDao()

    @Provides
    fun provideSrsStateDao(db: AppDatabase): SrsStateDao = db.srsStateDao()

    @Provides
    fun provideStudySessionDao(db: AppDatabase): StudySessionDao = db.studySessionDao()

    @Provides
    fun provideCardAnswerDao(db: AppDatabase): CardAnswerDao = db.cardAnswerDao()
}
