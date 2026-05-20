package com.oabapp.etica.data.local.entities

import androidx.room.Entity
import androidx.room.PrimaryKey

/**
 * Perfil do usuário — armazena preferências de estudo e configurações TDAH.
 * Existe sempre exatamente 1 registro (id fixo = 1).
 */
@Entity(tableName = "user_profile")
data class UserProfileEntity(
    @PrimaryKey val id: Int = 1,
    val focusLevel: Int = 2,           // 1=Difícil focar, 2=Mais ou menos, 3=Focado
    val sessionDuration: Int = 10,     // minutos: 5, 10 ou 15
    val lowTextMode: Boolean = false,  // exibe apenas bullets e termos-chave
    val softReminderEnabled: Boolean = false, // vibração suave ao ficar sem estudar
    val darkMode: Boolean = false
)
