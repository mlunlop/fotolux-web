import Image from 'next/image';
import Link from 'next/link';
import ConfiguradorFondo from './components/ConfiguradorFondo';
import CarruselPortafolio from './components/CarruselPortafolio';
import ServiciosInfo from './components/ServiciosInfo';
import ContactForm from './components/ContactForm';
import ResenasGoogle from './components/ResenasGoogle';
import AccordionItem from './components/AccordionItem';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111] text-white">
      {/* HEADER */}
      <header className="absolute top-0 left-0 right-0 z-50 h-20 bg-black/60 backdrop-blur-sm flex items-center px-6 md:px-12">
        {/* Logo Container (Absolute Center) */}
        <div className="absolute left-0 right-0 flex justify-center top-2 pointer-events-none">
          <Image
            src="/img/logo.png"
            alt="Fotolux Fotomatones - Alquiler para eventos y bodas"
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

      {/* PORTFOLIO SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <p className="text-brand text-xs uppercase tracking-widest mb-2 font-semibold">Portafolio</p>
            <h2 className="text-4xl md:text-5xl font-bold">Nuestros Eventos</h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm mt-4 md:mt-0 leading-relaxed text-left md:text-right">
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

      {/* RESEÑAS GOOGLE SECTION */}
      <ResenasGoogle />

      {/* COLLAPSIBLE RESERVA & CONFIGURADOR SECTIONS */}
      <section className="py-12 px-6 md:px-12 lg:px-24 w-full max-w-[1400px] mx-auto flex flex-col gap-0">
        
        {/* Accordion 1: Reserva tu fecha / Contacto */}
        <AccordionItem
          id="contacto"
          tag="Reserva"
          title={<>Reserva <span className="text-brand">tu fecha</span></>}
          subtitle="Consulta disponibilidad, solicita presupuesto sin compromiso o reserva tu fecha directamente."
          actionLabel="Abrir Formulario"
          activeActionLabel="Cerrar Formulario"
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 pt-6">
            <div className="w-full lg:w-1/3 h-fit space-y-8">
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Consulta nuestra disponibilidad y reserva el mejor fotomatón para tu gran día. Puedes escribirnos directamente o rellenar el formulario.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1A1A1A] p-3 rounded-xl border border-[#333] text-brand">
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
                  <div className="bg-[#1A1A1A] p-3 rounded-xl border border-[#333] text-brand">
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
                  <div className="bg-[#1A1A1A] p-3 rounded-xl border border-[#333] text-brand">
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
          </div>
        </AccordionItem>

        {/* Accordion 2: Configurador de Fondo */}
        <AccordionItem
          id="configurador"
          tag="Personalizar"
          title={<>Configurador <span className="text-brand">de Fondo</span></>}
          subtitle="Juega y experimenta combinando fondos y letreros de neón para visualizar tu photocall ideal (simulador interactivo de muestra)."
          actionLabel="Probar Simulador"
          activeActionLabel="Cerrar Simulador"
        >
          <ConfiguradorFondo />
        </AccordionItem>
      </section>

    </main>
  );
}
