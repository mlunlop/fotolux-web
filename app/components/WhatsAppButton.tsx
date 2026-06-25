'use client';

import React, { useState } from 'react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* The Chat Widget */}
      <div 
        className={`fixed bottom-20 right-4 md:bottom-24 md:right-6 z-[9999] w-[320px] sm:w-[360px] bg-white rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-right flex flex-col overflow-hidden ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-[#00a884] px-4 py-3 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="font-semibold text-[17px]">WhatsApp</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors"
            aria-label="Cerrar chat"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Chat Body */}
        <div className="bg-[#efeae2] p-5 pt-6 pb-6 relative before:absolute before:inset-0 before:bg-[url('https://static.whatsapp.net/rsrc.php/v3/yl/r/r_QxXz0E_C2.png')] before:opacity-[0.06] before:mix-blend-multiply before:pointer-events-none">
          <div className="bg-white rounded-lg rounded-tl-none p-4 shadow-sm relative text-[#111b21] text-[15px] leading-relaxed max-w-[90%] z-10">
            {/* Chat bubble tail */}
            <div className="absolute top-0 -left-[10px] w-0 h-0 border-t-[0px] border-t-transparent border-r-[10px] border-r-white border-b-[10px] border-b-transparent"></div>
            ¡Hola! Si necesitas información sobre nuestros servicios de fotomatón para tu evento, cuéntanos qué necesitas y te responderemos lo antes posible.
            <div className="text-[11px] text-gray-400 text-right mt-1">Ahora</div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white flex justify-end border-t border-gray-100">
          <a
            href="https://wa.me/34685977198?text=%C2%A1Hola!%20He%20estado%20viendo%20la%20web%20y%20me%20gustaria%20recibir%20m%C3%A1s%20informacion%20sobre%20vuestro%20servicio.%20%C2%A1Gracias!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#22c35e] text-white font-medium py-2.5 px-6 rounded-full transition-colors w-max shadow-sm"
            onClick={() => setIsOpen(false)}
          >
            Iniciar chat
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-1 -mr-1"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </a>
        </div>
      </div>

      {/* The Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] flex items-center justify-center w-14 h-14 md:w-[60px] md:h-[60px] bg-[#25D366] text-white rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#22c35e] hover:shadow-[0_8px_24px_rgba(37,211,102,0.5)] group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Ripple/pulse effect */}
        {!isOpen && <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10 group-hover:opacity-0 transition-opacity duration-300" />}
        
        {/* SVG Icon */}
        {isOpen ? (
          <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
        ) : (
          <svg
            className="w-7 h-7 md:w-9 md:h-9 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
        
        {/* Beautiful tooltip */}
        {!isOpen && (
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md text-white text-xs font-medium py-2 px-3.5 rounded-xl border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5)] whitespace-nowrap opacity-0 translate-x-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hidden lg:block">
            ¡Hablemos por WhatsApp!
          </span>
        )}
      </button>
    </>
  );
}
