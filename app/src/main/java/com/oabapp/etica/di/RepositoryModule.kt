package com.oabapp.etica.di

import com.oabapp.etica.data.local.repository.StudyCardRepositoryImpl
import com.oabapp.etica.data.local.repository.StudySessionRepositoryImpl
import com.oabapp.etica.domain.repository.StudyCardRepository
import com.oabapp.etica.domain.repository.StudySessionRepository
import dagger.Binds
import dagger.Module
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
abstract class RepositoryModule {

    @Binds
    @Singleton
    abstract fun bindStudyCardRepository(
        impl: StudyCardRepositoryImpl
    ): StudyCardRepository

    @Binds
    @Singleton
    abstract fun bindStudySessionRepository(
        impl: StudySessionRepositoryImpl
    ): StudySessionRepository
}
