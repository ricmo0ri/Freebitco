package com.oabapp.etica.di

import com.oabapp.etica.util.UserPreferences
import dagger.hilt.EntryPoint
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent

// UserPreferences já usa @Singleton + @Inject constructor — Hilt a provê automaticamente.
// Este arquivo reserva espaço para futuros providers de nível de app (ex: Retrofit, OkHttp).
