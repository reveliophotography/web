# Guía de Analíticas Web: Vercel y Metricool

Esta guía te ayudará a entender cómo monitorizar el tráfico de tu web de fotografía (RevelioWeddings) y medir el rendimiento de tus acciones de marketing, utilizando las dos herramientas que tienes integradas en tu código: **Vercel** y **Metricool**.

---

## 1. Vercel (Analítica Técnica y de Rendimiento)

Vercel (donde está alojada tu web) tiene dos pestañas fundamentales para desarrolladores y dueños de negocio que no quieren configuraciones complejas tipo Google Analytics: **Web Analytics** y **Speed Insights**.

### A. Web Analytics (Tráfico de la web)

Muestra la cantidad de personas que visitan tu web de forma respetuosa con la privacidad (sin necesidad de banners de cookies intrusivos para este fin).

- **Cómo acceder:**
  1. Entra en tu dashboard de [Vercel](https://vercel.com).
  2. Selecciona tu proyecto (`revelioweb` o el nombre que le dieras).
  3. Haz clic en la pestaña superior **"Analytics"**.

- **¿Qué mirar aquí (Métricas clave)?**
  - **Visitors (Visitantes Únicos):** Personas distintas que han entrado a tu web en un periodo de tiempo.
  - **Pageviews (Páginas Vistas):** Número total de páginas que han cargado. Si un visitante mira la Home, luego About y luego Galería, son 3 pageviews.
  - **Top Pages:** Te dice qué secciones de tu web interesan más. ¿Las parejas visitan más la Galería o van directos a Contacto?
  - **Referrers:** De dónde viene tu tráfico (Instagram, búsqueda de Google, directorios de bodas como Bodas.net, etc.).
  - **Devices & OS:** Para saber si te ven mayoritariamente desde el móvil (iPhone/Android) o desde ordenadores.

### B. Speed Insights (Velocidad de carga)

Métricas vitales para el SEO. A Google le encanta que las páginas carguen rápido.

- **Cómo acceder:**
  1. En tu proyecto de Vercel, ve a la pestaña superior **"Speed Insights"**.

- **¿Qué mirar aquí?**
  - Te dará una puntuación (normalmente un semáforo rojo, amarillo o verde) sobre métricas como el **FCP** (First Contentful Paint) o el **LCP** (Largest Contentful Paint), que miden cuánto tarda en aparecer la primera imagen o texto en la pantalla de los novios cuando entran desde su móvil. ¡Ideal que esté siempre en verde!

---

## 2. Metricool (Analítica de Marketing y Redes Sociales)

Metricool es tu centro de mandos para vincular el tráfico de tu web con tus esfuerzos en redes sociales.

- **Cómo acceder:**
  1. Entra en tu cuenta de [Metricool](https://metricool.com).
  2. Selecciona la marca de "Revelio Weddings".
  3. En el menú de la izquierda, clica en **Analítica** y luego en la sección **Web/Blog** (icono de la bola del mundo).

- **¿Qué mirar aquí (Métricas clave)?**
  - **Visitas en Tiempo Real:** Interesante para ver si alguien está navegando por tu web en ese preciso momento (por ejemplo, justo después de subir una historia a Instagram con el enlace).
  - **Páginas vistas, Visitas y Visitantes:** (Similar a Vercel) para analizar tendencias mensuales.
  - **Fuentes de Tráfico:** Súper visual. Te dice si el tráfico es _Directo_ (escriben tu URL a mano), _Orgánico_ (te encuentran en Google), o _Social_ (vienen de Instagram o TikTok).
  - **Mapa de clics (si está disponible/activado):** Analiza dónde hace más clic la gente para optimizar la posición de tus botones de "Contacto" o WhatsApp.

### 💡 El súper poder de Metricool (La omnicanalidad)

Lo mejor de Metricool no es ver la web aislada, sino poder ir a la sección de **Instagram** en el mismo panel y cruzar datos:

- _¿El Reel que subí el miércoles generó un pico de visitas en la web el jueves?_
- _¿Mi pico de seguidores de enero se traduce en más clics al enlace de la bio?_

### Resumen para tu rutina semanal:

1. **Los Lunes por la mañana:** Abre Metricool para ver cómo funcionaron los posts de la semana anterior y si llevaron tráfico a la web.
2. **Una vez al mes:** Abre Vercel Analytics para ver qué rutas (ej. nuevas historias de boda que hayas subido) son las más leídas de tu portfolio.
