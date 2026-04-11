import Image from 'next/image';
import Link from 'next/link';
import ConfiguradorFondo from './components/ConfiguradorFondo';
import CarruselPortafolio from './components/CarruselPortafolio';
import ServiciosInfo from './components/ServiciosInfo';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#111] text-white">
      {/* HEADER */}
      <header className="absolute top-0 left-0 right-0 z-50 h-20 bg-black/60 backdrop-blur-sm flex items-center px-6 md:px-12">
        {/* Logo Container (Absolute Center) */}
        <div className="absolute left-0 right-0 flex justify-center top-2 pointer-events-none">
          <Image
            src="/img/logo.png"
            alt="Fotolux Logo"
            width={140}
            height={140}
            className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] pointer-events-auto"
          />
        </div>

        {/* Contact Button (Aligned Right) */}
        <div className="ml-auto z-10 hidden md:block">
          <Link href="#contacto" className="bg-brand text-black font-semibold py-2 px-6 rounded text-sm uppercase tracking-wider hover:bg-brand-hover transition-colors">
            Contacto
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero-bg.webm" type="video/webm" />
        </video>

        <div className="relative z-10 text-center px-4 max-w-4xl mt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-md">
            Fotolux <span className="text-brand">Fotomatones</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-200 drop-shadow max-w-2xl mx-auto">
            Crea recuerdos únicos. <br />Haz de tu evento algo inolvidable con un toque especial y divertido.
          </p>
        </div>

        <div className="absolute bottom-10 z-10 flex flex-col items-center opacity-80 animate-bounce">
          <span className="text-brand text-xs uppercase tracking-[0.3em] mb-2 font-semibold">Descubrir</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* RESERVA SECTION */}
      <section id="contacto" className="py-24 px-6 md:px-12 lg:px-24 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Reserva <br /><span className="text-brand">tu fecha</span>
          </h2>
          <p className="text-gray-400 mb-12 text-sm leading-relaxed max-w-sm">
            Estamos listos para hacer de tu próximo evento algo legendario. Completa los detalles y nosotros ponemos la magia.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#1A1A1A] p-3 rounded border border-[#333] text-brand">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Teléfono</p>
                <p className="font-semibold text-lg text-white">685977198</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#1A1A1A] p-3 rounded border border-[#333] text-brand">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                <p className="font-semibold text-lg text-white">fotoluxfotomatones@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#1A1A1A] p-3 rounded border border-[#333] text-brand">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Instagram</p>
                <p className="font-semibold text-lg text-white">@fotoluxfotomatones</p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <p className="text-brand text-xs uppercase tracking-widest mb-2 font-semibold">Portafolio</p>
            <h2 className="text-4xl md:text-5xl font-bold">Nuestros Eventos</h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm mt-4 md:mt-0 leading-relaxed text-right">
            Capturamos la esencia de cada celebración. Desde bodas exclusivas hasta eventos corporativos llenos de energía.
          </p>
        </div>

        {/* Carrusel Infinito */}
        <div className="w-full mt-10">
          <CarruselPortafolio />
        </div>
      </section>

      {/* SERVICIOS INFO SECTION */}
      <ServiciosInfo />

      {/* CONFIGURADOR SECTION */}
      <ConfiguradorFondo />

      {/* FOOTER */}
      <footer className="bg-[#0f0f0f] border-t border-[#222] pt-16 pb-8 px-6 md:px-12 relative mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-10 border-b border-[#222] pb-12">
          {/* Logo & Name */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="bg-black/30 p-4 rounded-xl border border-[#222]">
              <Image
                src="/img/logo.png"
                alt="Fotolux Logo"
                width={120}
                height={120}
                className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
              />
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide mt-2">Fotolux <span className="text-brand">Fotomatones</span></h3>
            <p className="text-xs text-gray-500 max-w-xs text-center md:text-left leading-relaxed">
              Crea recuerdos únicos e inolvidables para tus eventos, bodas y celebraciones con nuestro servicio premium de fotomatón.
            </p>
          </div>

          {/* Contacto */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-1 relative after:content-[''] after:inline-block after:w-8 after:h-[2px] after:bg-brand after:absolute after:-bottom-3 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0">
              Contacto
            </h4>
            <div className="flex flex-col gap-4 mt-3">
              <a href="tel:685977198" className="flex items-center gap-3 text-sm text-gray-400 hover:text-brand transition-colors group">
                <div className="bg-[#1A1A1A] p-2 rounded-lg border border-[#333] group-hover:border-brand/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                685 97 71 98
              </a>
              <a href="mailto:fotoluxfotomatones@gmail.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-brand transition-colors group">
                <div className="bg-[#1A1A1A] p-2 rounded-lg border border-[#333] group-hover:border-brand/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                fotoluxfotomatones@gmail.com
              </a>
            </div>
            
            <a href="https://instagram.com/fotoluxfotomatones" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#1A1A1A] border border-[#333] hover:border-brand/50 px-5 py-3 rounded-lg text-sm text-gray-300 hover:text-brand transition-all mt-2 group shadow-sm hover:shadow-[0_0_15px_rgba(237,180,42,0.15)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="font-medium tracking-wide">Síguenos en Instagram</span>
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-1 relative after:content-[''] after:inline-block after:w-8 after:h-[2px] after:bg-brand after:absolute after:-bottom-3 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0">
              Legal
            </h4>
            <div className="flex flex-col gap-4 mt-3 text-center md:text-left">
              <Link href="/aviso-legal" className="text-sm text-gray-400 hover:text-brand transition-colors flex items-center justify-center md:justify-start gap-2 group">
                <span className="text-brand/50 group-hover:text-brand text-[10px] transition-colors">◆</span> Aviso Legal
              </Link>
              <Link href="/politica-privacidad" className="text-sm text-gray-400 hover:text-brand transition-colors flex items-center justify-center md:justify-start gap-2 group">
                <span className="text-brand/50 group-hover:text-brand text-[10px] transition-colors">◆</span> Política de Privacidad
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative pt-4">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest text-center md:text-left md:w-1/3">
            © {new Date().getFullYear()} FOTOLUX. Todos los derechos reservados.
          </p>
          
          <div className="flex justify-center md:w-1/3 z-10">
            <Link href="#top" className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-brand hover:bg-brand hover:text-black transition-all hover:scale-110 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(237,180,42,0.3)] group" aria-label="Volver arriba">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </Link>
          </div>

          <div className="hidden md:block md:w-1/3"></div>
        </div>
      </footer>
    </main>
  );
}