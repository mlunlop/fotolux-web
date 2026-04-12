'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const images = [
  '/img/carrousel/1.jpg',
  '/img/carrousel/2.jpg',
  '/img/carrousel/3.webp',
  '/img/carrousel/4.webp',
  '/img/carrousel/5.jpg',
  '/img/carrousel/6.jpg',
];

export default function CarruselPortafolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Initial check for desktop view and handle resize
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  // Auto-play
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide, isHovered]);

  return (
    <div 
        className="relative w-full max-w-[100vw] mx-auto h-[450px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container for images to provide perspective */}
      <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
        {images.map((src, idx) => {
          let offset = idx - currentIndex;
          
          if (offset < -Math.floor(images.length / 2)) offset += images.length;
          if (offset > Math.floor(images.length / 2)) offset -= images.length;

          const isActive = offset === 0;
          const isPrev = offset === -1;
          const isNext = offset === 1;
          
          // Only render visible items to save performance
          const isVisible = Math.abs(offset) <= 2;
          if (!isVisible) return null;

          let translateX = '0%';
          let zIndex = 0;
          let opacity = 0;
          let scale = 0.5;

          if (isActive) {
            translateX = '0%';
            scale = 1;
            zIndex = 30;
            opacity = 1;
          } else if (isPrev) {
            translateX = '-30%';
            scale = 0.8;
            zIndex = 20;
            opacity = 0.6;
          } else if (isNext) {
            translateX = '30%';
            scale = 0.8;
            zIndex = 20;
            opacity = 0.6;
          } else if (offset <= -2) {
            translateX = '-50%';
            scale = 0.6;
            zIndex = 10;
            opacity = 0.2;
          } else if (offset >= 2) {
            translateX = '50%';
            scale = 0.6;
            zIndex = 10;
            opacity = 0.2;
          }

          // Use absolute pixels on larger screens for better spacing? 
          // Percentages work well but let's adjust for varying screen sizes.
          // In CSS transform, percentages are relative to the element's bounding box.
          if (isDesktop) {
             if (isPrev) translateX = '-60%';
             if (isNext) translateX = '60%';
             if (offset <= -2) translateX = '-110%';
             if (offset >= 2) translateX = '110%';
          }

          return (
            <div
              key={src}
              className={`absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer h-[70%] md:h-[80%] aspect-[3/4] md:aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)] will-change-transform group`}
              style={{ 
                transform: `translateX(${translateX}) scale(${scale})`, 
                zIndex,
                opacity
              }}
              onClick={() => {
                if (isPrev) prevSlide();
                if (isNext) nextSlide();
              }}
            >
                {/* Glow behind active item */}
              {isActive && (
                <div className="absolute inset-0 bg-brand/20 blur-2xl z-0 transition-opacity opacity-0 group-hover:opacity-100 duration-500"></div>
              )}

              {/* Overlay for non-active images */}
              <div 
                className={`absolute inset-0 bg-black transition-opacity duration-700 ease-in-out z-10 pointer-events-none ${isActive ? 'opacity-0' : 'opacity-[0.65]'}`}
              ></div>
              
              <Image
                src={src}
                alt={`Evento Fotolux ${idx + 1}`}
                fill
                className={`object-cover transition-transform duration-[2000ms] ease-out ${isActive ? 'scale-105' : 'scale-100'}`}
                sizes="(max-width: 768px) 80vw, 50vw"
                priority={isActive || isPrev || isNext}
              />

               {/* Active border decoration */}
              {isActive && (
                  <div className="absolute inset-0 border-[2px] md:border-[3px] border-brand/50 rounded-2xl md:rounded-3xl z-20 pointer-events-none transition-all duration-500 shadow-[inset_0_0_20px_rgba(237,180,42,0.3)] group-hover:border-brand"></div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-8 lg:left-16 z-50 bg-black/60 hover:bg-brand text-white hover:text-black w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/10 hover:border-brand hover:scale-110"
        aria-label="Anterior imagen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-8 lg:right-16 z-50 bg-black/60 hover:bg-brand text-white hover:text-black w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/10 hover:border-brand hover:scale-110"
        aria-label="Siguiente imagen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-4 md:bottom-8 z-40 flex items-center justify-center gap-2 md:gap-3">
          {images.map((_, idx) => (
              <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-500 rounded-full ${currentIndex === idx ? 'w-8 md:w-12 h-2 md:h-3 bg-brand shadow-[0_0_10px_rgba(237,180,42,0.8)]' : 'w-2 md:w-3 h-2 md:h-3 bg-white/30 hover:bg-white/60'}`}
                  aria-label={`Ir a imagen ${idx + 1}`}
              />
          ))}
      </div>
    </div>
  );
}
