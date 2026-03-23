"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-teal-950 border-b border-teal-900/40 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo - Tamanho Intermediário 2xl */}
        <Link href="/" className="text-white text-2xl font-black tracking-tighter group uppercase">
          DAXORYA <span className="text-teal-600 group-hover:text-teal-500 transition-colors uppercase">Digital</span>
        </Link>

        {/* Botão mobile */}
        <button
          className="md:hidden text-white text-2xl p-2 transition-transform active:scale-90"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        {/* Menu */}
        <nav
          className={`
            absolute md:static top-full left-0 w-full md:w-auto
            bg-teal-950 md:bg-transparent
            border-t md:border-0 border-teal-900
            flex flex-col md:flex-row md:items-center gap-7
            px-6 md:px-0
            transition-all duration-500 ease-in-out overflow-hidden
            ${menuOpen ? "max-h-125 py-8 opacity-100" : "max-h-0 md:max-h-full py-0 md:py-0 opacity-0 md:opacity-100"}
          `}
        >
          <Link href="/" onClick={() => setMenuOpen(false)} 
            className="text-gray-200 hover:text-teal-600 font-bold text-[13px] tracking-[0.12em] uppercase transition-colors">
            Início
          </Link>

          <Link href="/#sobre" onClick={() => setMenuOpen(false)} 
            className="text-gray-200 hover:text-teal-600 font-bold text-[13px] tracking-[0.12em] uppercase transition-colors">
            Sobre
          </Link>

          <Link href="/#servicos" onClick={() => setMenuOpen(false)} 
            className="text-gray-200 hover:text-teal-600 font-bold text-[13px] tracking-[0.12em] uppercase transition-colors">
            Serviços
          </Link>

          <Link href="/#pacotes" onClick={() => setMenuOpen(false)} 
            className="text-gray-200 hover:text-teal-600 font-bold text-[13px] tracking-[0.12em] uppercase transition-colors">
            Pacotes
          </Link>

          <Link href="/#portfolio" onClick={() => setMenuOpen(false)} 
            className="text-gray-200 hover:text-teal-600 font-bold text-[13px] tracking-[0.12em] uppercase transition-colors">
            Portfólio
          </Link>

          <Link href="/#faq" onClick={() => setMenuOpen(false)} 
            className="text-gray-200 hover:text-teal-600 font-bold text-[13px] tracking-[0.12em] uppercase transition-colors">
            FAQ
          </Link>

          <Link href="/#contato" onClick={() => setMenuOpen(false)} 
            className="text-gray-200 hover:text-teal-600 font-bold text-[13px] tracking-[0.12em] uppercase transition-colors">
            Contato
          </Link>

          {/* CTA Button - Quadrado Premium e Equilibrado */}
          <Link
            href="/#contato"
            onClick={() => setMenuOpen(false)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-sm font-black text-[13px] tracking-widest uppercase transition-all text-center border-b-2 border-teal-800 active:translate-y-1 active:border-b-0 shadow-md shadow-teal-600/10"
          >
            SOLICITAR ORÇAMENTO
          </Link>
        </nav>
      </div>
    </header>
  );
}