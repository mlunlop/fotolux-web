"use client";

import React, { useState, useEffect } from 'react';

interface AccordionItemProps {
  id: string;
  tag?: string;
  title: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  actionLabel?: string;
  activeActionLabel?: string;
}

export default function AccordionItem({
  id,
  tag,
  title,
  subtitle,
  children,
  defaultOpen = false,
  actionLabel = "Desplegar",
  activeActionLabel = "Cerrar"
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === `#${id}`) {
        setIsOpen(true);
        // Delay to allow layout changes to happen
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            // Adjust scroll position to account for sticky header
            const offset = 100; // rough height of sticky header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 150);
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [id]);

  return (
    <div
      id={id}
      className={`w-full border-t border-[#2a2a2a]/60 py-16 transition-all duration-500 ${
        isOpen
          ? 'bg-[#161616]/30 border-b border-[#2a2a2a]/60 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]'
          : 'hover:bg-white/[0.01]'
      }`}
    >
      {/* Header Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex flex-col md:flex-row md:items-end justify-between text-left focus:outline-none group gap-6 cursor-pointer select-none"
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          {tag && (
            <p className="text-brand text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
              {tag}
            </p>
          )}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight transition-colors duration-300 group-hover:text-gray-200">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-400 text-sm md:text-base mt-4 leading-relaxed max-w-3xl transition-colors duration-300 group-hover:text-gray-300">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex items-center gap-4 shrink-0 self-start md:self-end">
          <div className={`flex items-center gap-3 py-3 px-6 rounded-full font-bold uppercase tracking-wider text-xs border transition-all duration-500 ${
            isOpen
              ? 'bg-brand text-black border-brand shadow-[0_0_20px_rgba(237,180,42,0.25)] hover:bg-brand-hover hover:border-brand-hover'
              : 'bg-transparent text-white border-white/20 group-hover:border-brand group-hover:text-brand group-hover:bg-brand/5'
          }`}>
            <span>{isOpen ? activeActionLabel : actionLabel}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </button>

      {/* Content Area */}
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] mt-12 md:mt-16' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
