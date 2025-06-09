
export default function CookiePolicyPage() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <section className="text-center">
        <h1 className="text-4xl font-serif font-semibold text-primary mb-6">Política de Cookies</h1>
      </section>

      <section className="space-y-4 text-foreground/80">
        <p>Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <h2 className="text-2xl font-serif font-semibold text-primary pt-4">1. ¿Qué son las cookies?</h2>
        <p>
          Una cookie es un pequeño archivo de texto que un sitio web almacena en tu ordenador o dispositivo móvil cuando visitas el sitio.
          Permite que el sitio web recuerde tus acciones y preferencias (como inicio de sesión, idioma, tamaño de fuente y otras preferencias de visualización)
          durante un período de tiempo, para que no tengas que volver a introducirlas cada vez que regreses al sitio o navegues de una página a otra.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-primary pt-4">2. ¿Cómo utilizamos las cookies?</h2>
        <p>En nuestro sitio web, Revelio Weddings, utilizamos cookies para los siguientes propósitos:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Cookies Esenciales/Funcionales:</strong> Algunas cookies son esenciales para que puedas navegar por el sitio web y utilizar sus funciones.
            Por ejemplo, utilizamos `localStorage` (que funciona de manera similar a las cookies para el almacenamiento en el navegador) para:
            <ul className="list-disc list-inside space-y-1 pl-6 mt-1">
                <li>Recordar si ya has visto nuestra pantalla de bienvenida (`splashScreenShown`), para no mostrártela en cada visita a la página de inicio.</li>
                <li>Recordar tu consentimiento sobre el uso de cookies (`cookie_consent`), para no mostrarte el banner de consentimiento repetidamente.</li>
            </ul>
          </li>
          <li>
            <strong>Cookies de Preferencias:</strong> Estas cookies permiten que nuestro sitio web recuerde información que cambia la forma en que se comporta o se ve el sitio, como tu idioma preferido o la región en la que te encuentras. Actualmente no utilizamos cookies de preferencias específicas más allá de las funcionales mencionadas.
          </li>
          <li>
            <strong>Cookies Analíticas/De Rendimiento:</strong> Estas cookies nos ayudan a entender cómo interactúan los visitantes con nuestro sitio web recopilando y reportando información de forma anónima. Esto nos ayuda a mejorar el funcionamiento de nuestro sitio. (Nota: Actualmente no tenemos implementadas cookies analíticas de terceros como Google Analytics, pero podríamos hacerlo en el futuro).
          </li>
          <li>
            <strong>Cookies de Marketing/Publicidad:</strong> Estas cookies se utilizan para rastrear a los visitantes en los sitios web. La intención es mostrar anuncios que sean relevantes y atractivos para el usuario individual. (Nota: Actualmente no utilizamos cookies de marketing de terceros).
          </li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-primary pt-4">3. Cookies de Terceros</h2>
        <p>
          Actualmente, nuestro sitio web no utiliza cookies de terceros para publicidad o análisis avanzados. Sin embargo, algunos de nuestros servicios integrados (como los enlaces a redes sociales o WhatsApp) pueden establecer sus propias cookies si interactúas con ellos. No tenemos control sobre estas cookies. Te recomendamos que consultes las políticas de cookies de estos servicios de terceros para obtener más información.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-primary pt-4">4. ¿Cómo controlar las cookies?</h2>
        <p>
          Puedes controlar y/o eliminar las cookies como desees. Para más detalles, consulta <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">aboutcookies.org</a>.
          Puedes eliminar todas las cookies que ya están en tu ordenador y puedes configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si haces esto, es posible que tengas que ajustar manualmente algunas preferencias cada vez que visites un sitio y que algunos servicios y funcionalidades no funcionen.
        </p>
        <p>
          Para el almacenamiento local (`localStorage`) utilizado por nuestro sitio, puedes borrarlo a través de las herramientas de desarrollador de tu navegador (generalmente en la pestaña "Aplicación" o "Almacenamiento").
        </p>

        <h2 className="text-2xl font-serif font-semibold text-primary pt-4">5. Cambios en nuestra Política de Cookies</h2>
        <p>
          Podemos actualizar nuestra Política de Cookies de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Cookies en esta página.
          Se te aconseja revisar esta Política de Cookies periódicamente para cualquier cambio. Los cambios a esta Política de Cookies son efectivos cuando se publican en esta página.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-primary pt-4">6. Contáctanos</h2>
        <p>
          Si tienes alguna pregunta sobre esta Política de Cookies, puedes contactarnos a través de la información proporcionada en nuestra página de <Link href="/contact" className="underline hover:text-primary">Contacto</Link>.
        </p>
      </section>
    </div>
  );
}
