import React from 'react';

export default function ServiciosInfo() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 w-full max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <p className="text-brand text-xs uppercase tracking-widest mb-2 font-semibold">Servicios Integrales</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Todo lo que incluye <br className="md:hidden" />
          <span className="text-brand">nuestro servicio</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
          Diseñado para que tú y tus invitados solo os preocupéis de disfrutar. Todo el equipo, la personalización y la diversión, incluidos en un precio cerrado.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* PACK BÁSICO - Destacado (Ocupa 2 columnas en lg) */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-3xl p-8 md:p-10 border border-[#2a2a2a] relative overflow-hidden group hover:border-brand/40 transition-colors shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand rounded-full filter blur-[150px] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8 border-b border-[#333] pb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-3">
                Pack Básico Fotolux
               </h3>
              <p className="text-gray-400 text-sm">El servicio estrella con todo incluido, sin sorpresas.</p>
            </div>
            <div className="shrink-0 bg-brand/10 border border-brand/30 px-6 py-4 rounded-2xl flex flex-col items-center justify-center">
              <span className="text-brand text-3xl font-black">590€</span>
              <span className="text-[10px] uppercase text-brand/80 font-bold tracking-wider">IVA Incluido</span>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#222] p-3 rounded-xl border border-[#333] text-brand shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1 text-sm">Duración y Equipo</h4>
                <p className="text-xs text-gray-400 leading-relaxed">3 horas completas de alquiler y la asistencia constante de 2 azafatos durante el evento.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-[#222] p-3 rounded-xl border border-[#333] text-brand shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1 text-sm">Impresiones Ilimitadas</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Copias ilimitadas en tamaño 10x15 cm para que nadie se quede sin su recuerdo.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#222] p-3 rounded-xl border border-[#333] text-brand shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1 text-sm">Diversión Asegurada</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Caja con un montón de accesorios divertidos (atrezzo) listos para las mejores fotos.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#222] p-3 rounded-xl border border-[#333] text-brand shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1 text-sm">Formatos Digitales</h4>
                <p className="text-xs text-gray-400 leading-relaxed">No solo fotos: incluye GIF, Boomerangs y vídeomensajes con micrófono dedicado.</p>
              </div>
            </div>
          </div>
        </div>

        {/* LIBRO DE FIRMAS */}
        <div className="bg-[#161616] rounded-3xl p-8 border border-[#2a2a2a] flex flex-col hover:border-brand/30 transition-colors shadow-lg">
          <div className="bg-brand/10 w-12 h-12 rounded-2xl flex items-center justify-center text-brand mb-6 border border-brand/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Libro de Firmas</h3>
          <ul className="space-y-4 flex-1">
            <li className="flex gap-3 text-sm text-gray-400"><span className="text-brand shrink-0">✓</span> Álbum exclusivo de 30x30 cm incluido.</li>
            <li className="flex gap-3 text-sm text-gray-400"><span className="text-brand shrink-0">✓</span> Gestión 100% profesional por un asistente del equipo.</li>
            <li className="flex gap-3 text-sm text-gray-400"><span className="text-brand shrink-0">✓</span> Los invitados son animados activamente a dejar sus dedicatorias.</li>
            <li className="flex gap-3 text-sm text-gray-400"><span className="text-brand shrink-0">✓</span> Entrega digital final con enlace a todo el contenido.</li>
          </ul>
        </div>

        {/* PERSONALIZACIÓN */}
        <div className="bg-[#161616] rounded-3xl p-8 border border-[#2a2a2a] flex flex-col hover:border-brand/30 transition-colors shadow-lg">
          <div className="bg-brand/10 w-12 h-12 rounded-2xl flex items-center justify-center text-brand mb-6 border border-brand/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Personalización</h3>
          <ul className="space-y-4 flex-1">
            <li className="flex gap-3 text-sm text-gray-400"><span className="text-brand shrink-0">✓</span> Elección del fondo decorativo (Photocall) sin coste adicional.</li>
            <li className="flex gap-3 text-sm text-gray-400"><span className="text-brand shrink-0">✓</span> 15 plantillas disponibles personalizadas con nombres y fecha.</li>
            <li className="flex gap-3 text-sm text-gray-400"><span className="text-brand shrink-0">✓</span> Libertad para elegir la composición: 1, 2, 3 o 4 fotos por impresión en el momento.</li>
          </ul>
        </div>

        {/* EXTRAS */}
        <div className="lg:col-span-2 bg-[#1a1a1a] rounded-3xl p-8 border border-[#2a2a2a] relative shadow-lg">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
             <span className="text-brand">✨</span> Servicios Extras
             <span className="text-xs font-normal text-gray-500 uppercase tracking-widest ml-2 hidden sm:inline-block">Para un toque espectacular</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-[#111] p-5 rounded-2xl border border-[#333] hover:border-brand/40 transition-colors group text-center">
              <span className="block text-white font-bold mb-1">Fotoimanes</span>
              <span className="block text-brand text-lg font-black mb-2">150€</span>
              <span className="block text-[10px] text-gray-400 leading-tight">Imanes ilimitados para la nevera de tus invitados.</span>
            </div>
            <div className="bg-[#111] p-5 rounded-2xl border border-[#333] hover:border-brand/40 transition-colors group text-center">
              <span className="block text-white font-bold mb-1">Jardín Vertical</span>
              <span className="block text-brand text-lg font-black mb-2">120€</span>
              <span className="block text-[10px] text-gray-400 leading-tight">Decora tu photocall con más vida.</span>
            </div>
            <div className="bg-[#111] p-5 rounded-2xl border border-[#333] hover:border-brand/40 transition-colors group text-center">
              <span className="block text-white font-bold mb-1">Triángulo</span>
              <span className="block text-brand text-lg font-black mb-2">100€</span>
              <span className="block text-[10px] text-gray-400 leading-tight">Alternativa elegante pensada para adaptarse al entorno.</span>
            </div>
            <div className="bg-[#111] p-5 rounded-2xl border border-[#333] hover:border-brand/40 transition-colors group text-center">
              <span className="block text-white font-bold mb-1">Neones</span>
              <span className="block text-brand text-lg font-black mb-2">80€</span>
              <span className="block text-[10px] text-gray-400 leading-tight">Letreros luminosos y modernos.</span>
            </div>
            <div className="bg-[#111] p-5 rounded-2xl border border-[#333] hover:border-brand/40 transition-colors group text-center">
              <span className="block text-white font-bold mb-1">Hora Extra</span>
              <span className="block text-brand text-lg font-black mb-2">100€</span>
              <span className="block text-[10px] text-gray-400 leading-tight">Que no pare la fiesta. Diversión sin límite.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
