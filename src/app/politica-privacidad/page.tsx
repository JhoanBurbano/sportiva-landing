import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad | Sportiva',
  description: 'Política de privacidad y términos de uso de la aplicación Sportiva',
};

export default function PrivacyPolicy() {
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
            <span className="mr-3 text-blue-electric">🛡️</span> 
            Política de Privacidad — Sportiva
          </h1>
          
          <p className="text-gray-400 mb-8">Última actualización: 1 jul de 2025</p>
          
          <div className="text-gray-200 space-y-6">
            <p>
              En Sportiva, estamos comprometidos con la protección de tu privacidad y tus datos personales. Esta Política de Privacidad describe cómo recolectamos, utilizamos, almacenamos y protegemos tu información, de conformidad con las normas nacionales e internacionales aplicables, incluyendo el Reglamento General de Protección de Datos (GDPR), la Ley 1581 de 2012 de Colombia (Habeas Data), y otras regulaciones similares.
            </p>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">📌</span> 1. Responsable del tratamiento
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre del responsable: Sportiva</li>
                <li>Correo electrónico de contacto: joans.burbano@gmail.com</li>
                <li>Dirección física: No aplica actualmente.</li>
                <li>País de operación: Colombia</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">📌</span> 2. Datos personales recolectados
              </h2>
              <p>Recopilamos los siguientes tipos de datos personales:</p>
              
              <h3 className="text-lg font-semibold mt-4 mb-2 text-blue-electric">a. Datos proporcionados por el usuario:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nombre, correo electrónico, número de teléfono (opcional).</li>
                <li>Foto de perfil, información deportiva y preferencias.</li>
                <li>Datos de ubicación (previa autorización).</li>
                <li>Información cargada voluntariamente (comentarios, fotos, etc.).</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-4 mb-2 text-blue-electric">b. Datos recolectados automáticamente:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Dirección IP.</li>
                <li>Tipo de dispositivo, sistema operativo, e identificadores únicos.</li>
                <li>Datos de uso e interacción con la app.</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-4 mb-2 text-blue-electric">c. Datos de terceros:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Contactos o datos de redes sociales, solo si el usuario lo autoriza.</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">📌</span> 3. Finalidad del tratamiento
              </h2>
              <p>Usamos tus datos personales para:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Crear y gestionar tu cuenta de usuario.</li>
                <li>Mostrarte partidos, eventos y personas cercanas.</li>
                <li>Enviarte notificaciones relevantes.</li>
                <li>Mejorar la experiencia, funcionalidad y seguridad de la app.</li>
                <li>Cumplir con obligaciones legales.</li>
                <li>Prevenir fraude y uso indebido de la plataforma.</li>
                <li>Enviar comunicaciones opcionales sobre novedades o promociones (previo consentimiento).</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">📌</span> 4. Base legal
              </h2>
              <p>El tratamiento de datos se fundamenta en:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>El consentimiento explícito otorgado por el usuario.</li>
                <li>La necesidad contractual de prestar nuestros servicios.</li>
                <li>El interés legítimo del responsable para mejorar el servicio.</li>
                <li>El cumplimiento de obligaciones legales.</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">📌</span> 5. Derechos de los titulares (Habeas Data)
              </h2>
              <p>De acuerdo con la Ley 1581 de 2012 y el GDPR, como titular de los datos tienes derecho a:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Acceder a tus datos personales.</li>
                <li>Solicitar su corrección, actualización o supresión.</li>
                <li>Solicitar prueba de tu consentimiento.</li>
                <li>Revocar el consentimiento y/o solicitar la eliminación de tus datos si no hay una obligación legal para conservarlos.</li>
                <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) u otra autoridad competente.</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">📌</span> 6. Conservación de datos
              </h2>
              <p>
                Tus datos personales serán conservados mientras exista una relación activa contigo o hasta que solicites su supresión. Algunos datos podrán conservarse durante el plazo legal necesario para cumplir con obligaciones fiscales, contractuales o legales.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">📌</span> 7. Transferencia y transmisión internacional de datos
              </h2>
              <p>
                Sportiva podrá transferir o almacenar tus datos en servidores ubicados fuera del país, garantizando siempre un nivel adecuado de protección de datos, ya sea por:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Decisiones de adecuación de protección (GDPR).</li>
                <li>Cláusulas contractuales tipo.</li>
                <li>Otras garantías legales.</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">📌</span> 8. Medidas de seguridad
              </h2>
              <p>
                Adoptamos medidas técnicas, legales y organizativas para proteger tus datos:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Cifrado de datos en tránsito y en reposo.</li>
                <li>Acceso restringido y autenticación segura.</li>
                <li>Auditoría y monitoreo continuo.</li>
                <li>Eliminación segura de datos cuando ya no se requieran.</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">📌</span> 9. Datos de menores de edad
              </h2>
              <p>
                Sportiva no está dirigida a menores de 13 años (o 14/16 según país). No recopilamos ni tratamos datos de menores sin el consentimiento verificable de los padres o representantes legales.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">📌</span> 10. Uso de cookies o tecnologías similares
              </h2>
              <p>
                En versiones web o híbridas de la app, podremos usar cookies o tecnologías similares para mejorar la navegación, medir la audiencia y ofrecer contenido personalizado. El usuario podrá aceptar o rechazar su uso.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">📌</span> 11. Cambios a esta política
              </h2>
              <p>
                Esta política puede modificarse ocasionalmente. Notificaremos cualquier cambio significativo a través de la app, correo electrónico o nuestro sitio web.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-green-lime mr-2">📌</span> 12. Contacto
              </h2>
              <p>
                Para ejercer tus derechos o realizar consultas sobre esta Política de Privacidad, puedes escribirnos a:
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
