'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-[#222] pt-16 pb-8 px-6 md:px-12 relative mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-10 border-b border-[#222] pb-12">
        {/* Logo & Name */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="bg-black/30 p-4 rounded-xl border border-[#222]">
            <Image
              src="/img/logo.png"
              alt="Fotolux Fotomatones Logo"
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

        <p className="text-[10px] text-gray-600 uppercase tracking-widest text-center md:text-right md:w-1/3">
          Design by <a href="https://www.linkedin.com/in/m-luna-lpez/" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors lowercase">mlunlop</a>
        </p>
      </div>
    </footer>
  );
}
