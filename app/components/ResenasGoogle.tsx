'use client';

import React, { useState, useEffect, useCallback } from 'react';

const reviews = [
  {
    name: "Jai Docavo",
    rating: 5,
    text: "Una pasada de experiencia! Gente majísima, que hizo que nuestra boda fuera aún más divertida!! Muy recomendable, muy responsables! Muchísimas gracias a Antonio y a su compi!!",
    link: "https://share.google/P7bHbnWovB4jj5s1S"
  },
  {
    name: "Ana Garrido Sánchez",
    rating: 5,
    text: "Muy contenta con el servicio de este fotomatón, hicieron que el evento fuese único y pudiesemos llevarnos un bonito recuerdo. Se agradece también la amabilidad y simpatía de las dos personas que lo llevaban, Antonio y Zayda, que tuvieron una sonrisa en todo momento y animaban a todos para hacernos fotos y videos. Los recomiendo mucho",
    link: "https://share.google/PnPG6KggEiL4C7dwx"
  },
  {
    name: "Emy",
    rating: 5,
    text: "Magníficos profesionales. Muy recomendable el seto y todos los elementos de fantasía que disponen. El album genial!!! Fue una experiencia maravillosa Y SUPER DIVERTIDA. Lo pasamos bomba en la boda gracias a ellos. Gracias de corazón. MUY RECOMENDABLES",
    link: "https://share.google/qmXjStWGdkMNF4gf8"
  },
  {
    name: "Helena Capelli",
    rating: 5,
    text: "Mi hermana nos regaló el fotomatón para nuestra boda y la verdad que fue todo un acierto!!! Los invitados se lo pasaron bomba, el servicio fue magnífico con los chicos y nosotros disfrutamos mucho y encima tenemos recuerdos con todos los invitados. Creo que todas las bodas deberían tener un fotomatón porque hay fotos que no tienen desperdicio!! Un millón de gracias a los chicos :)",
    link: "https://share.google/ZWXTsXpZKZbZNWwdh"
  },
  {
    name: "Gema Ruiz Sánchez",
    rating: 5,
    text: "Los mejores!!! Súper profesionales y animan cualquier ambiente. Además tienen un montón de formatos para elegir, lo cual es de valorar. Repetiría siempre con ellos",
    link: "https://share.google/ajflDopC0ZomdbxlA"
  },
  {
    name: "ANTONIO ZETA Z",
    rating: 5,
    text: "Un trato genial, y un recuerdo precioso. Nos trataron súper bien a todos y el resultado fué muy divertido. Totalmente recomendables!!!",
    link: "https://share.google/fiFFPOw27ye88j9o8"
  },
  {
    name: "Nereida Garcia Rubio",
    rating: 5,
    text: "Fue genial, fueron súper amables. Ha quedado un álbum chulisimo y los videos son geniales. Lo recomiendo 100%",
    link: "https://share.google/AGwcyLsqy5pMNUrx5"
  },
  {
    name: "Ramon Hernandez",
    rating: 5,
    text: "Empresa muy profesional para cubrir eventos. Los contraté para las fiestas de un pueblo y la verdad que gustó mucho, además el trato de la azafata y el azafato fue genial. Repetiremos",
    link: "https://share.google/7qqvlYcmRZHe1vbFS"
  },
  {
    name: "Julia Gomez",
    rating: 5,
    text: "¡Increíbles! Estuvieron en nuestra boda y fue una de las mejores decisiones que tomamos. ¡No solo nos dejaron fotos maravillosas para el recuerdo, sino que además lo pasamos genial! Todos los invitados disfrutaron muchísimo, no paraban de hacerse fotos. El equipo fue encantador, súper simpáticos, profesionales y atentos a cada detalle.Se nota cuando alguien trabaja con cariño y pasión, y ellos lo hacen al 100%. Sin duda los recomendaremos siempre y volveremos a contar con ellos en futuras celebraciones. ¡Mil gracias por hacerlo todo tan fácil y especial!",
    link: "https://share.google/W5i9Ser5K9ZiytV43"
  },
  {
    name: "Lina Baumgärtner",
    rating: 5,
    text: "Increíble servicio! Ha ido todo perfecto. Antonio es muy atento y pendiente. Las fotos quedan preciosas y nos las llevamos como buen recuerdo igual que todos nuestros amigos y familia 💓 recomendaría 100% y sin duda volveremos a contar con ellos!",
    link: "https://share.google/6cNhgAK6aChc0PuXu"
  },
];

export default function ResenasGoogle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % (reviews.length - itemsPerView + 1));
  }, [itemsPerView]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + (reviews.length - itemsPerView + 1)) % (reviews.length - itemsPerView + 1));
  }, [itemsPerView]);

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = reviews.length - itemsPerView;
        if (prev >= maxIndex) return 0;
        return prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [itemsPerView, isHovered]);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 w-full max-w-[1400px] mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <p className="text-brand text-xs uppercase tracking-[0.3em] mb-3 font-bold">Experiencias reales</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Lo que dicen <br />
            <span className="text-brand">nuestros clientes</span>
          </h2>
        </div>

        <div className="flex flex-col items-start md:items-end gap-3 text-left md:text-right">
          <div className="flex items-center gap-2 bg-[#1a1a1a] border border-[#333] px-4 py-2 rounded-full">
            <div className="flex text-brand">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white text-sm font-bold">5.0 / 5.0</span>
          </div>
          <p className="text-gray-500 text-xs uppercase tracking-widest">Basado en reseñas de Google</p>
        </div>
      </div>

      <div
        className="mb-16 relative group/carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` 
            }}
          >
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-2 lg:px-4 flex"
              >
                <div className="w-full flex">
                   <ReviewCard review={review} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12 flex-wrap max-w-full px-4">
          {reviews.slice(0, reviews.length - itemsPerView + 1).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 transition-all duration-300 rounded-full ${index === currentIndex
                ? 'w-10 bg-brand shadow-[0_0_10px_rgba(237,180,42,0.5)]'
                : 'w-2.5 bg-[#333] hover:bg-[#444]'
                }`}
              aria-label={`Ir a reseña ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-4 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 border border-white/10 flex items-center justify-center text-white/50 z-10 hover:bg-brand hover:text-black hover:border-brand transition-all shadow-2xl opacity-0 group-hover/carousel:opacity-100 hidden md:flex"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-4 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 border border-white/10 flex items-center justify-center text-white/50 z-10 hover:bg-brand hover:text-black hover:border-brand transition-all shadow-2xl opacity-0 group-hover/carousel:opacity-100 hidden md:flex"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Mobile-only arrows (always visible or more accessible) */}
        <div className="flex md:hidden justify-center gap-8 mt-8">
           <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-white/50 active:bg-brand active:text-black transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-white/50 active:bg-brand active:text-black transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <a
          href="https://search.google.com/local/writereview?placeid=ChIJjzMpydufYgMR602VeV5ROUk"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 bg-brand text-black font-black px-10 py-5 rounded-2xl transform transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(237,180,42,0.4)] active:scale-95 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]"></div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <span className="uppercase tracking-wider">Añadir mi reseña</span>
        </a>

        <p className="text-gray-500 text-xs flex items-center gap-2">
          Hacemos que tu evento sea inolvidable
          <span className="text-brand">★</span>
        </p>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: any }) {
  return (
    <a
      href={review.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-gradient-to-b from-[#1a1a1a] to-[#121212] rounded-3xl p-8 border border-[#2a2a2a] hover:border-brand/50 transition-all duration-500 shadow-xl flex flex-col justify-between w-full h-full hover:-translate-y-2"
    >
      {/* Background Glow on Hover */}
      <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-1 text-brand">
            {[...Array(review.rating)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="bg-[#4285F4]/10 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#4285F4]">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
          </div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-8 italic">
          "{review.text}"
        </p>
      </div>

      <div className="flex items-center gap-4 border-t border-[#2a2a2a] pt-6">
        <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-brand font-bold">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="text-white font-bold text-sm tracking-wide">{review.name}</p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-brand/80 font-bold uppercase tracking-widest">Reseña Verificada</span>
          </div>
        </div>
      </div>
    </a>
  );
}

