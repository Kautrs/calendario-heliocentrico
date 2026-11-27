# ☀️ Calendario Heliocéntrico • 365 (Heliocentric Calendar)

> **Síntesis cronométrica y astronómica de 365 días sin años bisiestos.**  
> *A 365-day symmetrical chronometric & astronomical synthesis with zero leap years.*

🌐 **Aplicación en Vivo (Live App):** [https://github.io](https://github.io)

---

### 🏛️ La Síntesis Dialéctica
* **Tesis (Egipcio):** Simetría perfecta (12 meses × 30 días + 5 días = 365) sin ajuste solar (*Annus Vagus*).
* **Antítesis (Juliano/Gregoriano/Revolucionario):** Ancla las estaciones rompiendo la simetría interna (`28, 30, 31`) y años bisiestos; el intento decimal de 1793 colapsó por semanas de 9 días de trabajo y 1 de descanso.
* **Síntesis (Heliocéntrico):** Traslada el ajuste del calendario al reloj, conservando 365 días simétricos, segundos elásticos continuos y un ritmo laboral equilibrado.

---

### ⚙️ Arquitectura del Sistema
* **Estructura Anual:** 12 meses de 30 días (`I·Unario` a `XII·Duodenario`) + 1 Péntada de 5 días festivos (365 días exactos).
* **Ritmo de la Década (10d):** 3 días trabajo + ½ pausa ámbar (*Quartidi*) + 3 días trabajo + 3 días descanso.
* **Cronometría y Precisión:** Curva continua de Kepler sincronizada con el Tiempo Universal Heliocéntrico (TUH), con saltos seculares de `+1.00 s` cada 62 años.
* **Planetario en Vivo:** Traslación heliocéntrica, rotación terrestre día/noche en tiempo real y fases lunares con corrección elíptica.

---

### 📱 Características de la Aplicación (PWA Offline)
* **Instalable:** 100% sin conexión en Android, iPhone y PC.
* **Modo Kiosco y Esfera Analógica:** Compara en vivo el Segundo Elástico Heliocéntrico frente al Civil.
* **Identidad Heliocéntrica:** Genera tarjetas astronómicas (1080×1920 px) con posición orbital, globo iluminado y fase lunar.
* **Puente `.ics` y Bilingüe:** Exporta eventos recurrentes sin desfasarse por bisiestos y permite alternar en vivo entre **Español (`ES`)** e **Inglés (`EN`)**.

---

### 🧩 Uso para Desarrolladores (`heliocentric.js`)
Puedes integrar el motor matemático en tu web mediante script:
```html

<script src="https://kautrs.github.io/calendario-heliocentrico.js.js"></script>
<script>
  const hoy = Heliocentric.now();
  console.log(hoy.formatted);  // Fecha completa + hora TUH
  console.log(hoy.workStatus); // "WORK", "HALF_REST" o "REST"
</script>
