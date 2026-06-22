"use client";

import React from 'react';

export default function NavContactButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we are already on the page, we can just ensure the hashchange event fires
    // by manually dispatching it, so AccordionItem opens even if hash was already #contacto
    setTimeout(() => {
      window.dispatchEvent(new Event('hashchange'));
    }, 50);
  };

  return (
    <a
      href="#contacto"
      onClick={handleClick}
      className="bg-brand text-black font-semibold py-2 px-6 rounded text-sm uppercase tracking-wider hover:bg-brand-hover transition-colors"
    >
      Solicita tu Presupuesto
    </a>
  );
}
