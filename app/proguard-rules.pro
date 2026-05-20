# Regras ProGuard para OAB Ética

# Hilt
-keep class dagger.hilt.** { *; }
-keep class javax.inject.** { *; }

# Room — manter entidades e DAOs
-keep class com.oabapp.etica.data.local.entities.** { *; }
-keep class com.oabapp.etica.data.local.database.** { *; }

# Gson — manter tipos serializados
-keepattributes Signature
-keepattributes *Annotation*
-dontwarn sun.misc.**
-keep class com.google.gson.** { *; }
-keep class * implements com.google.gson.TypeAdapterFactory
-keep class * implements com.google.gson.JsonSerializer
-keep class * implements com.google.gson.JsonDeserializer
