"use client";

import { FormEvent, useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);

    let tipoEvento = formData.get('tipo_evento') as string;
    if (tipoEvento === 'Otro') {
      tipoEvento = `Otro: ${formData.get('tipo_evento_otro')}`;
    }

    let conocido = formData.get('conocido') as string;
    if (conocido === 'Otro') {
      conocido = `Otro: ${formData.get('conocido_otro')}`;
    }

    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      date: formData.get('date'),
      time: formData.get('time'),
      location: formData.get('location'),
      province: formData.get('province'),
      eventType: tipoEvento,
      source: conocido,
      notes: formData.get('notes'),
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="w-full lg:w-2/3 bg-[#161616] rounded-2xl p-8 md:p-12 border border-[#2A2A2A] shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand rounded-full filter blur-[120px] opacity-10 pointer-events-none"></div>

      <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-10">
        {/* SECTION 1: DATOS PERSONALES */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-white">
            <span className="bg-[#222] text-brand px-3 py-1 rounded text-sm font-bold">01</span>
            Datos Personales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-xs uppercase text-gray-400 tracking-wider">Nombre completo *</label>
              <input type="text" name="name" placeholder="Tu respuesta" className="bg-[#0f0f0f] border border-[#333] rounded-lg px-4 py-3 text-base md:text-sm focus:outline-none focus:border-brand transition-colors text-white" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-xs uppercase text-gray-400 tracking-wider">Teléfono de contacto *</label>
              <input type="tel" name="phone" placeholder="Tu respuesta" className="bg-[#0f0f0f] border border-[#333] rounded-lg px-4 py-3 text-base md:text-sm focus:outline-none focus:border-brand transition-colors text-white" required />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm md:text-xs uppercase text-gray-400 tracking-wider">Correo electrónico *</label>
              <input type="email" name="email" placeholder="Tu respuesta" className="bg-[#0f0f0f] border border-[#333] rounded-lg px-4 py-3 text-base md:text-sm focus:outline-none focus:border-brand transition-colors text-white" required />
            </div>
          </div>
        </div>

        <hr className="border-[#333]" />

        {/* SECTION 2: DATOS DEL EVENTO */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-white">
            <span className="bg-[#222] text-brand px-3 py-1 rounded text-sm font-bold">02</span>
            Detalles del Evento
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-xs uppercase text-gray-400 tracking-wider">Fecha del evento *</label>
              <input type="date" name="date" className="bg-[#0f0f0f] border border-[#333] rounded-lg px-4 py-3 text-base md:text-sm focus:outline-none focus:border-brand transition-colors text-gray-300 [color-scheme:dark]" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-xs uppercase text-gray-400 tracking-wider">Horario de comienzo *</label>
              <input type="time" name="time" className="bg-[#0f0f0f] border border-[#333] rounded-lg px-4 py-3 text-base md:text-sm focus:outline-none focus:border-brand transition-colors text-gray-300 [color-scheme:dark]" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-xs uppercase text-gray-400 tracking-wider">Lugar del evento *</label>
              <input type="text" name="location" placeholder="Tu respuesta" className="bg-[#0f0f0f] border border-[#333] rounded-lg px-4 py-3 text-base md:text-sm focus:outline-none focus:border-brand transition-colors text-white" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-xs uppercase text-gray-400 tracking-wider">Provincia *</label>
              <input type="text" name="province" placeholder="Tu respuesta" className="bg-[#0f0f0f] border border-[#333] rounded-lg px-4 py-3 text-base md:text-sm focus:outline-none focus:border-brand transition-colors text-white" required />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm md:text-xs uppercase text-gray-400 tracking-wider mb-2">Elige el tipo de evento *</label>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 text-base md:text-sm text-gray-300">
              <label className="flex items-center gap-3 bg-[#0f0f0f] border border-[#333] p-3 rounded-lg hover:border-brand cursor-pointer transition-colors"><input type="radio" name="tipo_evento" value="Boda" className="accent-brand w-4 h-4" required /> Boda</label>
              <label className="flex items-center gap-3 bg-[#0f0f0f] border border-[#333] p-3 rounded-lg hover:border-brand cursor-pointer transition-colors"><input type="radio" name="tipo_evento" value="Comunión" className="accent-brand w-4 h-4" /> Comunión</label>
              <label className="flex items-center gap-3 bg-[#0f0f0f] border border-[#333] p-3 rounded-lg hover:border-brand cursor-pointer transition-colors"><input type="radio" name="tipo_evento" value="Evento de empresa" className="accent-brand w-4 h-4" /> Evento de empresa</label>
              <label className="flex items-center gap-3 bg-[#0f0f0f] border border-[#333] p-3 rounded-lg hover:border-brand cursor-pointer transition-colors"><input type="radio" name="tipo_evento" value="Cumpleaños" className="accent-brand w-4 h-4" /> Cumpleaños</label>
              <div className="flex items-center gap-3 bg-[#0f0f0f] border border-[#333] p-3 rounded-lg hover:border-brand transition-colors col-span-2 lg:col-span-2">
                <label className="flex items-center gap-3 cursor-pointer whitespace-nowrap"><input type="radio" name="tipo_evento" value="Otro" className="accent-brand w-4 h-4" /> Otro:</label>
                <input type="text" name="tipo_evento_otro" placeholder="Especifique..." className="bg-transparent border-b border-[#555] focus:border-brand focus:outline-none w-full text-base md:text-sm px-2 text-white pb-1" />
              </div>
            </div>
          </div>
        </div>

        <hr className="border-[#333]" />

        {/* SECTION 3: INFORMACIÓN ADICIONAL */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-white">
            <span className="bg-[#222] text-brand px-3 py-1 rounded text-sm font-bold">03</span>
            Información Adicional
          </h3>

          <div className="flex flex-col gap-3 mb-8">
            <label className="text-sm md:text-xs uppercase text-gray-400 tracking-wider mb-2">¿Cómo nos has conocido? *</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base md:text-sm text-gray-300">
              <label className="flex items-center gap-3 bg-[#0f0f0f] border border-[#333] p-3 rounded-lg hover:border-brand cursor-pointer transition-colors"><input type="radio" name="conocido" value="Instagram" className="accent-brand w-4 h-4" required /> Instagram</label>
              <label className="flex items-center gap-3 bg-[#0f0f0f] border border-[#333] p-3 rounded-lg hover:border-brand cursor-pointer transition-colors"><input type="radio" name="conocido" value="Google" className="accent-brand w-4 h-4" /> Google</label>
              <label className="flex items-center gap-3 bg-[#0f0f0f] border border-[#333] p-3 rounded-lg hover:border-brand cursor-pointer transition-colors"><input type="radio" name="conocido" value="En otro evento" className="accent-brand w-4 h-4" /> En otro evento</label>
              <label className="flex items-center gap-3 bg-[#0f0f0f] border border-[#333] p-3 rounded-lg hover:border-brand cursor-pointer transition-colors"><input type="radio" name="conocido" value="Feria o showroom" className="accent-brand w-4 h-4" /> Feria o showroom</label>
              <label className="flex items-center gap-3 bg-[#0f0f0f] border border-[#333] p-3 rounded-lg hover:border-brand cursor-pointer transition-colors md:col-span-2"><input type="radio" name="conocido" value="Recomendación" className="accent-brand w-4 h-4 shrink-0" /> <span className="leading-tight">Recomendación (dime en Otro de parte de quién vienes)</span></label>
              <div className="flex items-center gap-3 bg-[#0f0f0f] border border-[#333] p-3 rounded-lg hover:border-brand transition-colors md:col-span-2">
                <label className="flex items-center gap-3 cursor-pointer shrink-0"><input type="radio" name="conocido" value="Otro" className="accent-brand w-4 h-4" /> Otro:</label>
                <input type="text" name="conocido_otro" placeholder="Cuéntanos..." className="bg-transparent border-b border-[#555] focus:border-brand focus:outline-none w-full text-base md:text-sm px-2 text-white pb-1" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm md:text-xs uppercase text-gray-400 tracking-wider">Si tienes alguna consulta o anotación</label>
            <textarea name="notes" rows={4} placeholder="Escribe aquí tu consulta..." className="bg-[#0f0f0f] border border-[#333] rounded-lg px-4 py-3 text-base md:text-sm focus:outline-none focus:border-brand transition-colors resize-none text-white"></textarea>
          </div>
        </div>

        {/* FORM FOOTER & ALERTS */}
        <div className="bg-[#0f0f0f] p-6 rounded-lg border border-[#222] flex flex-col gap-6 mt-2">
          {status === 'success' && (
            <div className="bg-green-500/10 border border-green-500/50 text-green-500 p-4 rounded-lg text-sm mb-2 text-center font-medium">
              ¡Gracias por tu solicitud! Nos pondremos en contacto contigo pronto.
            </div>
          )}
          
          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg text-sm mb-2 text-center font-medium">
              Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo más tarde o contáctanos directamente.
            </div>
          )}

          <div className="text-[10px] text-gray-500 leading-relaxed">
            <p className="mb-2 uppercase font-bold text-gray-400 tracking-widest">Información sobre Protección de Datos</p>
            <p>Los datos de carácter personal que consten serán tratados por ANTONIO FUENTES LOPEZ e incorporados a la actividad de tratamiento CONTACTOS, cuya finalidad es atender tus solicitudes, peticiones o consultas recibidas desde la web, mediante correo electrónico o telefónico. Con respuesta a tu solicitud y hacer un seguimiento posterior. La legitimación del tratamiento es tu consentimiento. Tus datos no serán cedidos a terceros. Tienes derecho a acceder, rectificar y suprimir tus datos.</p>
          </div>

          <div className="flex items-center gap-4 bg-[#161616] border border-[#333] p-4 rounded-lg hover:border-brand/50 transition-all cursor-pointer">
            <div className="relative flex items-center justify-center shrink-0">
              <input type="checkbox" id="privacy-policy" name="privacy" className="peer w-5 h-5 appearance-none rounded-[4px] border border-[#555] bg-[#0f0f0f] cursor-pointer checked:bg-brand checked:border-brand transition-all focus:outline-none focus:ring-2 focus:ring-brand/30" required />
              <svg className="absolute w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <label htmlFor="privacy-policy" className="text-base md:text-sm text-gray-300 cursor-pointer select-none w-full leading-tight">
              He leído y acepto la <Link href="/politica-privacidad" className="text-brand hover:text-brand-hover hover:underline font-medium transition-colors">Política de Privacidad</Link> <span className="text-brand">*</span>
            </label>
          </div>

          <div className="flex justify-end">
            <button type="submit" disabled={status === 'loading'} className="w-full md:w-auto overflow-hidden relative group bg-brand hover:bg-brand-hover text-black font-bold py-4 px-12 rounded-lg transition-all shadow-[0_0_20px_rgba(237,180,42,0.2)] hover:shadow-[0_0_30px_rgba(237,180,42,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 uppercase tracking-wider text-sm flex items-center justify-center gap-3">
              <span className={`transition-all duration-300 ${status === 'loading' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                Enviar Petición
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-all duration-300 delay-75 ${status === 'loading' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              {status === 'loading' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
