
# Firebase Studio

Este es un proyecto de inicio de NextJS en Firebase Studio.

## Primeros Pasos

Para comenzar, echa un vistazo a `src/app/page.tsx`.

## Personalización

Aquí encontrarás instrucciones sobre cómo personalizar algunas características clave de la aplicación:

### 1. Configurar Enlaces de Contacto

#### a. Botón Flotante de WhatsApp

Este botón permite a los usuarios contactarte directamente a través de WhatsApp.

-   **Archivo a modificar**: `src/components/layout/FloatingWhatsAppButton.tsx`
-   **Qué cambiar**:
    -   Busca la variable `phoneNumber`. Debes reemplazar el valor de ejemplo (`"521XXXXXXXXXX"`) con tu número de WhatsApp real.
        -   **Formato**: Incluye el código de país seguido de tu número, sin el símbolo `+` ni ceros iniciales. Por ejemplo, para un número de México, si tu código de país es +52 y tu número es 1234567890, el valor sería `"521234567890"`. Para un número de España (+34) 123456789 sería `"34123456789"`.
    -   Busca la variable `message`. Puedes personalizar el mensaje predeterminado que se enviará cuando un usuario haga clic en el botón.

#### b. Banner Superior

El banner superior muestra información de contacto y enlaces a redes sociales.

-   **Archivo a modificar**: `src/components/layout/TopBanner.tsx`
-   **Qué cambiar**:
    -   **Teléfono**:
        -   `displayPhone`: El texto que se muestra para el número de teléfono. (Ej: `"(123) 456-7890"`)
        -   `fullPhone`: El número de teléfono completo para el enlace `tel:`. (Ej: `"+1234567890"`)
    -   **Email**:
        -   `email`: Tu dirección de correo electrónico. (Ej: `"hello@revelioweddings.com"`)
    -   **WhatsApp**:
        -   `whatsappNumber`: Tu número de WhatsApp (solo el número, sin código de país si ya está en formato internacional para `wa.me`). (Ej: `"1234567890"` si el enlace es `https://wa.me/1234567890`) O tu número completo con código de país si así lo requiere el enlace.
        -   `whatsappMessage`: El mensaje predeterminado para el enlace de WhatsApp.
    -   **Instagram**:
        -   `instagramUser`: Tu nombre de usuario de Instagram. (Ej: `"revelioweddings"`)

### 2. Gestión de Imágenes

La aplicación utiliza imágenes de marcador de posición de `https://placehold.co/`. Cuando reemplaces estas imágenes, ten en cuenta lo siguiente:

#### a. Atributo `data-ai-hint`

Todas las imágenes de marcador de posición tienen un atributo `data-ai-hint`.
-   **Propósito**: Este atributo ayuda a identificar el tipo de imagen que debería ir en ese lugar. Contiene una o dos palabras clave (separadas por espacios) que pueden usarse para buscar imágenes adecuadas en servicios como Unsplash.
-   **Ejemplo**: `data-ai-hint="wedding couple"` o `data-ai-hint="bride ceremony"`.
-   **Recomendación**: Cuando añadas tus propias imágenes, considera mantener o actualizar este atributo si planeas usar herramientas de IA para la selección de imágenes en el futuro.

#### b. Tamaños de Imagen Recomendados

-   **Pantalla de Bienvenida (Splash Screen - `src/components/splash/SplashScreen.tsx`)**:
    -   Imagen de fondo a pantalla completa.
    -   Ejemplo de marcador de posición: `https://placehold.co/1920x1080.png`
    -   `data-ai-hint` ejemplos: `"wedding elegance welcome"`, `"romantic landscape"`
    -   **Nota**: Esta pantalla solo se muestra la primera vez que un usuario visita el sitio, gracias al uso de `localStorage` (variable `splashScreenShown`).
-   **Página de Inicio (Hero Carousel - `src/app/page.tsx`)**:
    -   Las imágenes de fondo del carrusel principal.
    -   Ejemplo de marcador de posición: `https://placehold.co/1600x900.png`
    -   `data-ai-hint` ejemplos: `"bride groom landscape"`, `"wedding party joy"`
-   **Página de Inicio (Mini Galería - `src/app/page.tsx`)**:
    -   Pequeñas imágenes destacadas.
    -   Ejemplo de marcador de posición: `https://placehold.co/600x400.png`
    -   `data-ai-hint` ejemplos: `"wedding couple"`, `"wedding details"`
-   **Página de Galería (`src/app/gallery/page.tsx` y `src/data/gallery.ts`)**:
    -   Imágenes para el carrusel de la galería.
    -   Ejemplo de marcador de posición: `https://placehold.co/800x600.png`
    -   `data-ai-hint` ejemplos: `"wedding couple sunset"`, `"bride aisle"`
-   **Página de Paquetes (`src/app/packages/page.tsx` y `src/data/packages.ts`)**:
    -   Imágenes para las tarjetas de los paquetes de fotografía.
    -   Ejemplo de marcador de posición: `https://placehold.co/600x400.png`
    -   `data-ai-hint` ejemplos: `"couple mountains"`, `"wedding photography"`

**Formato de Marcador de Posición**: Siempre usa `https://placehold.co/<ANCHO>x<ALTO>.png`. No añadas parámetros de texto a la URL del marcador de posición.

### 3. Inclusión de Mascotas

Se ha añadido la mención de que las mascotas son bienvenidas en las sesiones de fotos en:
- `src/app/page.tsx` (sección de bienvenida)
- `src/app/packages/page.tsx` (descripción general de paquetes)
Puedes editar estos textos si necesitas ajustar el mensaje.

### 4. Política de Cookies y Accesibilidad

-   **Banner de Cookies**: Se muestra un banner de consentimiento de cookies en la parte inferior de la página. La preferencia del usuario se guarda en `localStorage` (variable `cookie_consent`). El contenido del banner está en `src/components/layout/CookieConsentBanner.tsx`.
-   **Página de Política de Cookies**: Disponible en `/cookie-policy`. El contenido se edita en `src/app/cookie-policy/page.tsx`.
-   **Página de Declaración de Accesibilidad**: Disponible en `/accessibility-statement`. El contenido se edita en `src/app/accessibility-statement/page.tsx`.
-   Los enlaces a estas páginas se encuentran en el pie de página (`src/components/layout/Footer.tsx`).

## Desarrollo

### Ejecutar el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:9002](http://localhost:9002) en tu navegador para ver el resultado.

### Ejecutar Genkit (para funciones de IA):

Si en el futuro añades funcionalidades de IA con Genkit:
En una terminal separada, ejecuta:

```bash
npm run genkit:dev
# o
yarn genkit:dev
# o
pnpm genkit:dev
```
Esto iniciará el inspector de Genkit, generalmente en [http://localhost:4000](http://localhost:4000).

```
