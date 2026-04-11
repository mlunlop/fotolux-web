import Link from 'next/link';

export default function PoliticaPrivacidad() {
  return (
    <main className="min-h-screen bg-[#111] text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-[#161616] p-8 md:p-12 rounded-2xl border border-[#2A2A2A] shadow-2xl">
        <Link href="/" className="inline-flex items-center text-sm text-brand hover:underline mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a inicio
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white">Política de <span className="text-brand">Privacidad</span></h1>

        <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Información sobre Protección de Datos</h2>
            <p>
              Los datos de carácter personal que consten serán tratados por ANTONIO FUENTES LOPEZ e incorporados a la actividad de tratamiento CONTACTOS, cuya finalidad es atender tus solicitudes, peticiones o consultas recibidas desde la web, mediante correo electrónico o telefónico.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Finalidad del Tratamiento</h2>
            <p>
              Los datos recabados a través del formulario de contacto serán utilizados exclusivamente para dar respuesta a tu solicitud y hacer un seguimiento posterior referidos a los servicios de Fotolux Fotomatones.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Legitimación</h2>
            <p>
              La base legal para el tratamiento de sus datos es el consentimiento expreso del usuario, otorgado al marcar la casilla de aceptación correspondiente en nuestro formulario de contacto.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Conservación de los Datos</h2>
            <p>
              Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o no se solicite su supresión por el interesado, y durante el plazo por el cual pudieran derivarse responsabilidades legales por los servicios prestados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Cesión de Datos a Terceros</h2>
            <p>
              Tus datos no serán cedidos a terceros, salvo obligación legal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Derechos del Usuario</h2>
            <p>
              El usuario tiene derecho a:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Acceder a sus datos personales.</li>
              <li>Solicitar la rectificación de los datos inexactos.</li>
              <li>Solicitar su supresión.</li>
              <li>Solicitar la limitación de su tratamiento.</li>
              <li>Oponerse al tratamiento de sus datos.</li>
            </ul>
            <p className="mt-2">
              Para ejercer estos derechos, el usuario puede enviar un correo electrónico a fotoluxfotomatones@gmail.com, adjuntando una copia de su DNI o documento equivalente para acreditar su identidad.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
