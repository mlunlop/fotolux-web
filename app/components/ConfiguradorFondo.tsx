"use client";

import { useState } from 'react';
import Image from 'next/image';

const FONDOS = [
  { id: 'acolchado', name: 'Acolchado', src: '/img/fondos/acolchado.webp' },
  { id: 'floral', name: 'Floral', src: '/img/fondos/floral.webp' },
  { id: 'guirnaldas', name: 'Guirnaldas', src: '/img/fondos/guirnaldas.webp' },
  { id: 'jardin-vertical', name: 'Jardín Vertical', src: '/img/fondos/jardin-vertical.webp', extraPrice: 120 },
  { id: 'mapa', name: 'Mapa', src: '/img/fondos/mapa.webp' },
  { id: 'rayas', name: 'Rayas', src: '/img/fondos/rayas.webp' },
  { id: 'vintage', name: 'Vintage', src: '/img/fondos/vintage.webp' }
];

const NEONES = [
  { id: 'none', name: 'Sin Neón', src: null },
  { id: 'better-together', name: 'Better Together', src: '/img/neones/better-together.png' },
  { id: 'el-amor-todo-locura', name: 'El Amor Todo Locura', src: '/img/neones/el-amor-todo-locura.png' },
  { id: 'que-nos-quiten-lo-bailao', name: 'Que Nos Quiten Lo Bailao', src: '/img/neones/que-nos-quiten-lo-bailao.png' },
  { id: 'siempre-juntos', name: 'Siempre Juntos', src: '/img/neones/siempre-juntos.png' }
];

export default function ConfiguradorFondo() {
  const [fondoIndex, setFondoIndex] = useState(0);
  const [neonIndex, setNeonIndex] = useState(0);

  const nextFondo = () => setFondoIndex((prev) => (prev + 1) % FONDOS.length);
  const prevFondo = () => setFondoIndex((prev) => (prev - 1 + FONDOS.length) % FONDOS.length);

  const nextNeon = () => setNeonIndex((prev) => (prev + 1) % NEONES.length);
  const prevNeon = () => setNeonIndex((prev) => (prev - 1 + NEONES.length) % NEONES.length);

  const fondo = FONDOS[fondoIndex];
  const neon = NEONES[neonIndex];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
            <p className="text-brand text-xs uppercase tracking-widest mb-2 font-semibold">Personaliza tu espacio</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Configurador de Fondo</h2>
            <p className="text-gray-400 max-w-2xl text-sm leading-relaxed mx-auto">
                Elige el fondo perfecto para tu evento y combínalo con uno de nuestros neones exclusivos.
            </p>
        </div>

        <div className="w-full max-w-4xl bg-[#161616] rounded-2xl border border-[#2A2A2A] overflow-hidden shadow-2xl p-6 md:p-10 flex flex-col items-center">
          {/* Main Visualizer Area */}
          <div className="relative w-full aspect-square max-w-xl bg-black rounded-lg overflow-hidden mb-8 shadow-inner flex items-center justify-center">
            
            {/* Background Image */}
            <Image
                src={fondo.src}
                alt={fondo.name}
                fill
                className="object-cover"
                quality={90}
                sizes="(max-width: 768px) 100vw, 800px"
            />

            {/* Neon Image Overlay */}
            {neon.src && (
                <div className="absolute inset-0 flex items-start justify-center pointer-events-none drop-shadow-[0_0_15px_rgba(255,100,200,0.4)] z-10 pt-12 sm:pt-16 md:pt-20 px-8">
                   <div className="relative w-full max-w-sm md:max-w-md aspect-[3/1]">
                       <Image
                          src={neon.src}
                          alt={neon.name}
                          fill
                          className="object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] brightness-110 contrast-125 saturate-150 relative z-20"
                          sizes="(max-width: 768px) 100vw, 500px"
                       />
                       {/* Additional glow layer for realistic neon */}
                        <Image
                          src={neon.src}
                          alt={`${neon.name} glow`}
                          fill
                          className="object-contain filter blur-md opacity-70 saturate-200 brightness-150 absolute top-0 left-0 z-10"
                          sizes="(max-width: 768px) 100vw, 500px"
                       />
                   </div>
                </div>
            )}
            
          </div>

          {/* Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
            {/* Fondos Controls */}
            <div className="flex flex-col items-center">
                <h3 className="text-xs uppercase text-gray-400 tracking-wider mb-4 font-semibold">
                  Seleccionar Fondo {fondo.extraPrice && <span className="text-brand normal-case">(+{fondo.extraPrice}€)</span>}
                </h3>
                <div className="flex items-center gap-6">
                    <button onClick={prevFondo} className="w-10 h-10 rounded-full bg-[#222] border border-[#333] flex items-center justify-center hover:bg-brand hover:text-black transition-colors" aria-label="Fondo anterior">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className="w-48 text-center">
                        <span className="text-lg font-bold text-white tracking-wide">{fondo.name}</span>
                        <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">{fondoIndex + 1} / {FONDOS.length}</div>
                    </div>
                    <button onClick={nextFondo} className="w-10 h-10 rounded-full bg-[#222] border border-[#333] flex items-center justify-center hover:bg-brand hover:text-black transition-colors" aria-label="Fondo siguiente">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Neon Controls */}
            <div className="flex flex-col items-center">
                <h3 className="text-xs uppercase text-gray-400 tracking-wider mb-4 font-semibold">Seleccionar Neón (+80€)</h3>
                <div className="flex items-center gap-6">
                    <button onClick={prevNeon} className="w-10 h-10 rounded-full bg-[#222] border border-[#333] flex items-center justify-center hover:bg-[#ff1493] hover:text-white transition-colors" aria-label="Neón anterior">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className="w-48 text-center">
                        <span className="text-lg font-bold text-white tracking-wide">{neon.name}</span>
                        <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">{neonIndex + 1} / {NEONES.length}</div>
                    </div>
                    <button onClick={nextNeon} className="w-10 h-10 rounded-full bg-[#222] border border-[#333] flex items-center justify-center hover:bg-[#ff1493] hover:text-white transition-colors" aria-label="Neón siguiente">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
