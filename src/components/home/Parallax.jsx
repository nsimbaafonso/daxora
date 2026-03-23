"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import parallaxBg from "@/assets/img/parallax.jpg";

export default function Parallax() {
  return (
    <section
      className="relative h-125 md:h-150 flex items-center justify-center overflow-hidden border-y border-teal-900/50"
      style={{
        backgroundImage: `url(${parallaxBg.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay de Profundidade (Teal Dark) */}
      <div className="absolute inset-0 bg-teal-950/85 backdrop-blur-[2px]"></div>

      {/* Pattern de Grid Tecnológico (Opcional, mas recomendado para o estilo) */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>

      {/* Conteúdo Central */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <div className="flex flex-col items-center">
          <div className="w-20 h-0.5 bg-teal-600 mb-10 shadow-[0_0_15px_#0d9488]"></div>
          
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9]">
            TRANSFORMAMOS <br />
            <span className="text-teal-600">VISÃO EM PERFORMANCE</span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-2xl font-bold uppercase tracking-[0.2em] mb-12 max-w-3xl leading-relaxed">
            ENGENHARIA DIGITAL DE ALTO IMPACTO PARA QUEM NÃO ACEITA O COMUM.
          </p>

          <Link
            href="/#contato"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-16 py-6 rounded-sm font-black text-sm md:text-base uppercase tracking-[0.3em] transition-all border-b-4 border-teal-800 active:translate-y-2 active:border-b-0 shadow-2xl shadow-teal-900/60"
          >
            SOLICITAR ORÇAMENTO
          </Link>
        </div>
      </motion.div>

      {/* Vinheta de borda para foco central */}
      <div className="absolute inset-0 bg-linear-to-r from-teal-950/60 via-transparent to-teal-950/60 pointer-events-none"></div>
    </section>
  );
}