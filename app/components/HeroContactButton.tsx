"use client";

import React from 'react';

export default function HeroContactButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setTimeout(() => {
      window.dispatchEvent(new Event('hashchange'));
    }, 50);
  };

  return (
    <a
      href="#contacto"
      onClick={handleClick}
      className="inline-block mt-12 md:mt-16 bg-brand text-black font-bold py-3 px-8 rounded-full text-base md:text-lg uppercase tracking-wider hover:bg-brand-hover hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(237,180,42,0.3)]"
    >
      Solicita tu Presupuesto
    </a>
  );
}
