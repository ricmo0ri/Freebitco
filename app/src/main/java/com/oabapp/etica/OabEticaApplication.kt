package com.oabapp.etica

import android.app.Application
import com.oabapp.etica.data.local.database.DatabaseSeeder
import com.oabapp.etica.util.SoftReminderManager
import dagger.hilt.android.HiltAndroidApp
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltAndroidApp
class OabEticaApplication : Application() {

    @Inject lateinit var seeder: DatabaseSeeder
    @Inject lateinit var reminderManager: SoftReminderManager

    // Escopo de coroutine vinculado ao ciclo de vida do processo
    private val appScope = CoroutineScope(SupervisorJob() + Dispatchers.IO)

    override fun onCreate() {
        super.onCreate()
        appScope.launch { seeder.popular() }
        reminderManager.iniciar(appScope)
    }

    override fun onTerminate() {
        super.onTerminate()
        reminderManager.parar()
    }
}
