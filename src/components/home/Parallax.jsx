"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import parallaxBg from "@/assets/img/parallax.jpg";

export default function Parallax() {
  return (
    <section
      className="relative h-96 md:h-125 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${parallaxBg.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-blue-950/70"></div>

      {/* Conteúdo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Sites que transformam visitantes em clientes
        </h2>
        <p className="text-gray-200 text-lg md:text-xl mb-6">
          A Daxora Digital cria experiências digitais que geram resultados reais para pequenas e médias empresas.
        </p>
        <Link
          href="/#contato"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
        >
          Comece seu Projeto
        </Link>
      </motion.div>

      {/* Gradiente sutil no fundo (opcional) */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-blue-950/80 pointer-events-none"></div>
    </section>
  );
}