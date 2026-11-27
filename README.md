# ☀️ Calendario Heliocéntrico • 365 (Heliocentric Calendar)

> **Síntesis cronométrica y astronómica de 365 días sin años bisiestos.**  
> *A 365-day symmetrical chronometric & astronomical synthesis with zero leap years.*

---

### 🏛️ La Síntesis Dialéctica (Historical & Dialectical Synthesis)

A lo largo de la historia, la humanidad intentó sin éxito conciliar la **simetría geométrica del calendario** con la **órbita real de la Tierra**:

1. **Tesis — Calendario Egipcio:** Logró la simetría perfecta (`12 meses × 30 días + 5 días adicionales = 365 días`), pero al carecer de ajuste solar se desfasaba una estación completa cada pocos siglos (*Annus Vagus*).
2. **Antítesis — Juliano, Gregoriano y Revolucionario:** Los calendarios juliano y gregoriano anclaron las estaciones a costa de destruir la simetría interna con meses irregulares (`28, 30, 31`) y años bisiestos. En 1793, el calendario revolucionario intentó restaurar la geometría decimal, pero colapsó al imponer semanas agotadoras de **9 días de trabajo por apenas 1 de descanso**.
3. **Síntesis — Calendario Heliocéntrico:** Resuelve la contradicción trasladando el ajuste **del calendario al reloj**. Conserva los **365 días simétricos**, ancla la Tierra al Sol mediante **segundos elásticos continuos** e introduce un ritmo laboral humano óptimo.

---

### ⚙️ Arquitectura del Sistema (System Architecture)

| Característica | Especificación Técnica |
| :--- | :--- |
| **Estructura Anual** | **12 meses de 30 días** (`I·Unario` a `XII·Duodenario`) + **1 Péntada** de 5 días festivos = **365 días exactos**. |
| **Ritmo de la Década (10d)** | **🟢 3 días trabajo** + **🟠 ½ pausa ámbar** (*Quartidi*) + **🟢 3 días trabajo** + **🔴 3 días descanso**. |
| **Cronometría Elástica** | Curva continua de Kepler (`+20,925.20 s/año` base) sincronizada con el **TUH** (*Tiempo Universal Heliocéntrico*). |
| **Precisión Cósmica** | Salto secular de **`+1.00 s` cada 62 años**, omitido cada **4,340 años** y restablecido cada **125,860 años**. |
| **Planetario en Vivo** | Traslación heliocéntrica, rotación terrestre día/noche en tiempo real y fases lunares con corrección elíptica. |

---

### 📱 Características de la Aplicación (PWA Offline)

* **Instalable en Celular y Escritorio:** Funciona **100% sin internet** en Android (Chrome), iPhone (Safari) y PC.
* **Modo Kiosco + Esfera Analógica:** Reloj de escritorio de alto contraste que compara en vivo el **Segundo Elástico Heliocéntrico** frente al **Segundo Civil**.
* **Identidad Heliocéntrica (Carta 9:16):** Genera tarjetas astronómicas en alta definición (`1080 × 1920 px`) con la posición orbital, el Globo Terráqueo iluminado, la fase lunar y el sello de descanso de cualquier fecha.
* **Puente `.ics` Circular:** Exporta eventos heliocéntricos recurrentes (desde 1 año hasta ∞) a Google Calendar, Apple Calendar o Outlook sin desfasarse por años bisiestos.
* **Bilingüe Nativo:** Cambio instantáneo en vivo entre **Español (`ES`)** e **Inglés (`EN`)**.

---

### 🚀 Cómo subir o probar

* **En línea:** Abre la URL de **GitHub Pages** de este repositorio y selecciona **"Instalar aplicación / Agregar a pantalla de inicio"**.
* **En local:** Descarga `index.html`, `manifest.json` y `sw.js` en una misma carpeta y ábrelos en cualquier navegador moderno.

---

### 🧩 Uso para Desarrolladores (`heliocentric.js`)

Cualquier proyecto web puede integrar el motor matemático del **Calendario Heliocéntrico** en 2 líneas:

```html
<script src="https://github.io"></script>
<script>
  const hoy = Heliocentric.now();
  console.log(hoy.formatted);  // Fecha completa + hora TUH
  console.log(hoy.workStatus); // "WORK", "HALF_REST" o "REST"
</script>
```

