
# Firebase Studio - Revelio Weddings

Este es un proyecto de inicio de NextJS en Firebase Studio para Revelio Weddings.

## Primeros Pasos

Para comenzar, echa un vistazo a `src/app/page.tsx`.

## Personalización

Aquí encontrarás instrucciones sobre cómo personalizar las características clave de la aplicación.

### 1. Dónde y Cómo Cambiar las Imágenes

Tu web se basa en mostrar tus fotografías. Para actualizar las imágenes de marcador de posición (`https://placehold.co/...`) con las tuyas, sigue estos pasos. Primero, sube tus imágenes a un servicio de alojamiento (como Firebase Storage) y obtén la URL de cada una. Luego, edita los siguientes archivos:

#### a. Pantalla de Bienvenida (Splash Screen)
Esta es la imagen a pantalla completa que se muestra solo la primera vez que un usuario visita el sitio.

-   **Archivo a modificar**: `src/components/splash/SplashScreen.tsx`
-   **Qué cambiar**: Dentro del archivo, busca el componente `<Image>` y reemplaza la URL del atributo `src`.
    ```jsx
    <Image
      src="URL_DE_TU_IMAGEN_AQUI"
      // ...
    />
    ```

#### b. Carrusel Principal (Página de Inicio)
Este es el carrusel grande y automático que se muestra en la parte superior de la página de inicio.

-   **Archivo a modificar**: `src/app/page.tsx`
-   **Qué cambiar**: Al principio del archivo, verás una lista (array) llamada `heroSlides`. Modifica cada objeto de la lista con la URL de tu imagen y un texto descriptivo.
    ```javascript
    const heroSlides = [
      { src: 'URL_IMAGEN_1', alt: 'Descripción de la imagen 1', dataAiHint: '...' },
      { src: 'URL_IMAGEN_2', alt: 'Descripción de la imagen 2', dataAiHint: '...' },
      // ...añade más si quieres
    ];
    ```

#### c. Sección "Historias de Boda" (Página de Inicio)
Esta sección muestra un avance de bodas específicas.

-   **Archivo a modificar**: `src/app/page.tsx`
-   **Qué cambiar**: En el mismo archivo, busca la lista `weddingStories`. Cambia la URL en `imageSrc` para cada historia.
    ```javascript
    const weddingStories = [
      {
        imageSrc: "URL_BODA_1",
        title: "Ana & Javier | Finca La Concepción",
        description: "...",
        link: "/gallery?category=Boda+de+Ana+y+Javier"
      },
      // ...
    ];
    ```
    **Importante**: El `link` debe coincidir con la `category` que uses en la galería para que el filtro funcione.

#### d. Galería Principal
Esta es la colección completa de tus trabajos, con filtros por categoría.

-   **Archivo a modificar**: `src/data/gallery.ts`
-   **Qué cambiar**: Este archivo contiene la lista de todas las fotos de tu galería. Edita cada objeto para añadir la URL de tu foto, una descripción, y una categoría.
    ```javascript
    export const galleryPhotos: Photo[] = [
      { id: '1', src: 'URL_FOTO_1', alt: 'Descripción foto 1', category: 'Ceremonia', height: 1200, dataAiHint: '...' },
      { id: '2', src: 'URL_FOTO_2', alt: 'Descripción foto 2', category: 'Hora Dorada', height: 600, dataAiHint: '...' },
      // ...
    ];
    ```
    **Importante**: La `category` que pongas aquí es la que se usará para los botones de filtro en la página de la galería.

### 2. Configurar Información de Contacto y Legal

Es crucial que reemplaces la información de ejemplo con tus datos reales en los siguientes archivos:

-   `src/app/legal-notice/page.tsx`: **(MUY IMPORTANTE)** Rellena `companyName`, `nif`, `address`, `email` y `domainName`.
-   `src/app/privacy-policy/page.tsx`: **(MUY IMPORTANTE)** Rellena `companyName`, `nif`, `address`, `email` y `domainName`.
-   `src/components/layout/TopBanner.tsx`: Actualiza tu teléfono, email, usuario de Instagram y número de WhatsApp.
-   `src/components/layout/FloatingWhatsAppButton.tsx`: Configura tu número de teléfono de WhatsApp y el mensaje predeterminado.
-   `src/app/contact/page.tsx`: Revisa la información de contacto que se muestra como alternativa al formulario.

### 3. Logo

Para cambiar el logo:
-   **Archivo a modificar**: `src/components/layout/Header.tsx`
-   **Qué cambiar**: Busca el componente `<Logo>`. Puedes reemplazar el SVG que contiene por tu propio logo en formato SVG, o cambiarlo por un componente `<Image>` de Next.js para usar un archivo `.png` o `.jpg`.

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
