package com.oabapp.etica.util

import android.content.Context
import androidx.datastore.core.DataStore
import androidx.datastore.preferences.core.Preferences
import androidx.datastore.preferences.core.booleanPreferencesKey
import androidx.datastore.preferences.core.edit
import androidx.datastore.preferences.core.intPreferencesKey
import androidx.datastore.preferences.preferencesDataStore
import dagger.hilt.android.qualifiers.ApplicationContext
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import javax.inject.Inject
import javax.inject.Singleton

// Extensão para criar o DataStore uma única vez por processo
private val Context.dataStore: DataStore<Preferences> by preferencesDataStore(name = "oab_prefs")

/**
 * Gerencia as preferências persistentes do usuário via DataStore.
 * Substituímos SharedPreferences para suporte nativo a Kotlin Flow.
 */
@Singleton
class UserPreferences @Inject constructor(
    @ApplicationContext private val context: Context
) {
    companion object {
        val DARK_MODE = booleanPreferencesKey("dark_mode")
        val LOW_TEXT_MODE = booleanPreferencesKey("low_text_mode")
        val SOFT_REMINDER = booleanPreferencesKey("soft_reminder")
        val SESSION_DURATION = intPreferencesKey("session_duration")
        val FOCUS_LEVEL = intPreferencesKey("focus_level")
    }

    val darkModeFlow: Flow<Boolean> = context.dataStore.data
        .map { prefs -> prefs[DARK_MODE] ?: false }

    val lowTextModeFlow: Flow<Boolean> = context.dataStore.data
        .map { prefs -> prefs[LOW_TEXT_MODE] ?: false }

    val softReminderFlow: Flow<Boolean> = context.dataStore.data
        .map { prefs -> prefs[SOFT_REMINDER] ?: false }

    val sessionDurationFlow: Flow<Int> = context.dataStore.data
        .map { prefs -> prefs[SESSION_DURATION] ?: 10 }

    val focusLevelFlow: Flow<Int> = context.dataStore.data
        .map { prefs -> prefs[FOCUS_LEVEL] ?: 2 }

    suspend fun setDarkMode(enabled: Boolean) {
        context.dataStore.edit { it[DARK_MODE] = enabled }
    }

    suspend fun setLowTextMode(enabled: Boolean) {
        context.dataStore.edit { it[LOW_TEXT_MODE] = enabled }
    }

    suspend fun setSoftReminder(enabled: Boolean) {
        context.dataStore.edit { it[SOFT_REMINDER] = enabled }
    }

    suspend fun setSessionDuration(minutes: Int) {
        context.dataStore.edit { it[SESSION_DURATION] = minutes }
    }

    suspend fun setFocusLevel(level: Int) {
        context.dataStore.edit { it[FOCUS_LEVEL] = level }
    }
}
