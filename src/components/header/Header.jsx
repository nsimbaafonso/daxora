"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-950 border-b border-blue-900 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold">
          Daxora <span className="text-blue-600">Digital</span>
        </Link>

        {/* Botão mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        {/* Menu */}
        <nav
          className={`
            absolute md:static top-full left-0 w-full md:w-auto
            bg-blue-950 md:bg-transparent
            border-t md:border-0 border-blue-900
            flex flex-col md:flex-row md:items-center gap-6
            p-6 md:p-0
            text-gray-200 font-medium
            transform transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden md:overflow-visible md:max-h-full md:opacity-100"}
          `}
        >
          <Link href="/" className="hover:text-blue-600 transition">
            Início
          </Link>

          <Link href="/#sobre" className="hover:text-blue-600 transition">
            Sobre
          </Link>

          <Link href="/#servicos" className="hover:text-blue-600 transition">
            Serviços
          </Link>

          <Link href="/#pacotes" className="hover:text-blue-600 transition">
            Pacotes
          </Link>

          <Link href="/#portfolio" className="hover:text-blue-600 transition">
            Portfólio
          </Link>

          <Link href="/#faq" className="hover:text-blue-600 transition">
            FAQ
          </Link>

          <Link href="/#contato" className="hover:text-blue-600 transition">
            Contato
          </Link>

          <Link
            href="/#contato"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition text-center"
          >
            Começar Projeto
          </Link>
        </nav>
      </div>
    </header>
  );
}
