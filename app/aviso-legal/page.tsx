import Link from 'next/link';

export default function AvisoLegal() {
  return (
    <main className="min-h-screen bg-[#111] text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-[#161616] p-8 md:p-12 rounded-2xl border border-[#2A2A2A] shadow-2xl">
        <Link href="/" className="inline-flex items-center text-sm text-brand hover:underline mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a inicio
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white">Aviso <span className="text-brand">Legal</span></h1>

        <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Datos Identificativos</h2>
            <p>
              En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>El titular de dominio web es Antonio Fuentes López.</li>
              <li>Correo electrónico de contacto: fotoluxfotomatones@gmail.com del sitio web.</li>
              <li>Teléfono: 685977198</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Usuarios</h2>
            <p>
              El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Uso del Portal</h2>
            <p>
              La web proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a Fotolux Fotomatones o a sus licenciantes a los que el USUARIO pueda tener acceso.
            </p>
            <p className="mt-2">
              El USUARIO asume la responsabilidad del uso del portal. El USUARIO se compromete a hacer un uso adecuado de los contenidos y servicios que Fotolux Fotomatones ofrece a través de su portal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Propiedad Intelectual e Industrial</h2>
            <p>
              Fotolux Fotomatones por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.).
            </p>
            <p className="mt-2">
              Todos los derechos reservados. Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Fotolux Fotomatones.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Exclusión de Garantías y Responsabilidad</h2>
            <p>
              Fotolux Fotomatones no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Modificaciones</h2>
            <p>
              Fotolux Fotomatones se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
