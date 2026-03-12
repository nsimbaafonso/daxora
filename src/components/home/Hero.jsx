"use client";

import Link from "next/link";
import heroBg from "@/assets/img/hero.jpg";
import { useEffect, useState } from "react";

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Dispara animações quando o componente é montado
    const timeout = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-blue-950/70"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl text-center px-6">
        <h1
          className={`text-4xl md:text-6xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Transformamos sua presença online <br className="hidden md:block" /> em resultados reais
        </h1>

        <p
          className={`text-gray-200 text-lg md:text-xl mb-8 transition-all duration-1000 delay-200 transform ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Criamos sites modernos e profissionais para pequenas e médias empresas, <br className="hidden md:block" /> ajudando você a crescer na internet e atrair mais clientes.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col md:flex-row justify-center gap-4 transition-all duration-1000 delay-400 transform ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <Link
            href="/#contato"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Começar Projeto
          </Link>

          <Link
            href="/#portfolio"
            className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Ver Portfólio
          </Link>
        </div>
      </div>

      {/* Scroll hint animado */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#sobre" className="animate-bounce text-white text-2xl">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>

      {/* Gradiente de fundo sutil */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-blue-950/90 pointer-events-none"></div>
    </section>
  );
}