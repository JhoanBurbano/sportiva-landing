import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Términos de Servicio | Sportiva',
  description: 'Términos y condiciones de uso de la aplicación Sportiva',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-dark py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-electric mb-8 hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Volver al inicio
        </Link>

        <div className="bg-dark-alt p-8 rounded-2xl border border-gray-800 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white flex items-center">
            <span className="mr-3 text-blue-electric">📝</span> 
            Términos de Servicio — Sportiva
          </h1>
          
          <p className="text-gray-400 mb-8">Última actualización: 1 jul de 2025</p>
          
          <div className="text-gray-200 space-y-6">
            <p>
              Al utilizar la aplicación Sportiva, accedes a cumplir con estos términos de servicio. Por favor, léelos cuidadosamente antes de acceder o utilizar nuestra plataforma.
            </p>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">1.</span> Aceptación de los Términos
              </h2>
              <p>
                Al registrarte, acceder o utilizar los servicios de Sportiva (en adelante, &ldquo;la aplicación&rdquo;, &ldquo;la plataforma&rdquo;, &ldquo;el servicio&rdquo; o &ldquo;nosotros&rdquo;), aceptas estar legalmente obligado por estos Términos de Servicio, nuestra Política de Privacidad y todas las condiciones adicionales aplicables.
              </p>
              <p className="mt-2">
                Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder al servicio.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">2.</span> Cambios en los Términos
              </h2>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en la aplicación. Es tu responsabilidad revisar periódicamente estos términos.
              </p>
              <p className="mt-2">
                El uso continuado de la plataforma después de cualquier modificación constituirá tu aceptación de los nuevos términos.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">3.</span> Registro y Cuentas de Usuario
              </h2>
              <p>
                Para utilizar ciertas funcionalidades de Sportiva, debes crear una cuenta. Aceptas proporcionar información precisa, actualizada y completa durante el proceso de registro y mantener actualizada dicha información.
              </p>
              <p className="mt-2">
                Eres responsable de mantener la confidencialidad de tu cuenta y contraseña, así como de restringir el acceso a tu dispositivo. Aceptas la responsabilidad por todas las actividades realizadas bajo tu cuenta.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">4.</span> Uso del Servicio
              </h2>
              <p>
                Sportiva te permite organizar y participar en eventos deportivos, conectar con otros usuarios y gestionar actividades relacionadas con el deporte.
              </p>
              <p className="mt-2">
                Te comprometes a utilizar el servicio solo para propósitos legales y de acuerdo con estos términos. No puedes utilizar el servicio:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Para violar leyes o regulaciones aplicables.</li>
                <li>Para publicar contenido falso, engañoso, ofensivo o inapropiado.</li>
                <li>Para acosar, intimidar o dañar a otros usuarios.</li>
                <li>Para recopilar información de otros usuarios sin su consentimiento.</li>
                <li>Para interferir con el funcionamiento normal de la plataforma.</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">5.</span> Contenido del Usuario
              </h2>
              <p>
                Al publicar contenido en Sportiva (textos, fotos, comentarios, etc.), concedes a la plataforma una licencia mundial, no exclusiva, libre de regalías para usar, reproducir, modificar, adaptar, publicar y distribuir dicho contenido en relación con el funcionamiento del servicio.
              </p>
              <p className="mt-2">
                Garantizas que tienes todos los derechos necesarios sobre el contenido que publicas y que este no infringe derechos de terceros.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">6.</span> Propiedad Intelectual
              </h2>
              <p>
                La plataforma Sportiva y su contenido original, características y funcionalidades son propiedad exclusiva de Sportiva y están protegidos por leyes de propiedad intelectual.
              </p>
              <p className="mt-2">
                No puedes modificar, reproducir, distribuir, crear trabajos derivados, realizar exhibiciones públicas, o explotar de cualquier manera el contenido de la plataforma sin autorización expresa.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">7.</span> Limitación de Responsabilidad
              </h2>
              <p>
                Sportiva se ofrece &ldquo;tal cual&rdquo; y &ldquo;según disponibilidad&rdquo; sin garantías de ningún tipo. No garantizamos que el servicio sea ininterrumpido, seguro o libre de errores.
              </p>
              <p className="mt-2">
                En ningún caso Sportiva será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pérdida de ganancias, datos, uso o cualquier otro daño intangible.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">8.</span> Indemnización
              </h2>
              <p>
                Aceptas defender, indemnizar y eximir de responsabilidad a Sportiva y sus afiliados de cualquier reclamo, responsabilidad, daño, pérdida y gasto que surjan de tu uso del servicio o de cualquier violación de estos términos.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">9.</span> Terminación
              </h2>
              <p>
                Podemos terminar o suspender tu cuenta y acceso al servicio inmediatamente, sin previo aviso ni responsabilidad, por cualquier razón, incluyendo, sin limitación, la violación de estos Términos.
              </p>
              <p className="mt-2">
                Tras la terminación, tu derecho a utilizar el servicio cesará inmediatamente. Si deseas terminar tu cuenta, simplemente puedes discontinuar el uso del servicio.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">10.</span> Legislación Aplicable
              </h2>
              <p>
                Estos términos se regirán e interpretarán de acuerdo con las leyes de Colombia, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
              </p>
              <p className="mt-2">
                Cualquier controversia relacionada con estos términos será sometida a la jurisdicción exclusiva de los tribunales competentes de Colombia.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">11.</span> Contacto
              </h2>
              <p>
                Si tienes alguna pregunta sobre estos Términos de Servicio, por favor contáctanos en:
              </p>
              <p className="mt-2 flex items-center">
                <span className="text-blue-electric mr-2">📧</span>
                <a href="mailto:joans.burbano@gmail.com" className="text-blue-electric hover:underline">joans.burbano@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
