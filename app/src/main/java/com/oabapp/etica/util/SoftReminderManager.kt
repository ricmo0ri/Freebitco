package com.oabapp.etica.util

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.launch
import javax.inject.Inject
import javax.inject.Singleton

private const val INTERVALO_VERIFICACAO_MS = 60_000L     // checa a cada 1 minuto
private const val INTERVALO_LEMBRETE_MS    = 30 * 60_000L // lembra após 30 min sem estudar

/**
 * Monitora o tempo de inatividade e emite vibração suave quando o usuário
 * fica [INTERVALO_LEMBRETE_MS] sem responder um card.
 *
 * Uso:
 * - Chame [registrarAtividade] sempre que o usuário responde um card.
 * - Chame [iniciar] na Application e [parar] ao destruir.
 */
@Singleton
class SoftReminderManager @Inject constructor(
    private val vibration: VibrationManager,
    private val prefs: UserPreferences
) {
    private var ultimaAtividadeMs: Long = System.currentTimeMillis()
    private var monitorJob: Job? = null

    fun iniciar(scope: CoroutineScope) {
        monitorJob?.cancel()
        monitorJob = scope.launch(Dispatchers.IO) {
            while (true) {
                delay(INTERVALO_VERIFICACAO_MS)
                val habilitado = prefs.softReminderFlow.first()
                if (!habilitado) continue

                val inativo = System.currentTimeMillis() - ultimaAtividadeMs
                if (inativo >= INTERVALO_LEMBRETE_MS) {
                    vibration.lembreteSuave()
                    // Reseta o contador para não vibrar a cada minuto
                    ultimaAtividadeMs = System.currentTimeMillis()
                }
            }
        }
    }

    fun parar() {
        monitorJob?.cancel()
        monitorJob = null
    }

    /** Deve ser chamado toda vez que o usuário responde um card. */
    fun registrarAtividade() {
        ultimaAtividadeMs = System.currentTimeMillis()
    }
}
