"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import site1 from "@/assets/img/sobre.jpg";
import site2 from "@/assets/img/sobre.jpg";
import site3 from "@/assets/img/sobre.jpg";

export default function Portfolio() {
  const projetos = [
    { titulo: "SITE CORPORATIVO", categoria: "WEB ARCHITECTURE", img: site1, url: "/#portfolio" },
    { titulo: "LANDING PAGE ELITE", categoria: "CONVERSION FOCUS", img: site2, url: "/#portfolio" },
    { titulo: "REDESIGN ESTRUTURAL", categoria: "DIGITAL EVOLUTION", img: site3, url: "/#portfolio" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <section id="portfolio" className="relative py-32 bg-teal-950 overflow-hidden">
      {/* Glow de Fundo */}
      <div className="absolute bottom-0 right-0 w-150 h-150 bg-teal-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabeçalho de Impacto */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-teal-600"></span>
            <span className="text-teal-500 font-black text-sm uppercase tracking-[0.5em]">Showcase</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            NOSSO <span className="text-teal-600">PORTFÓLIO</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium uppercase tracking-widest leading-relaxed">
            PROJETOS QUE DEFINEM O NOVO PADRÃO DE QUALIDADE DIGITAL.
          </p>
        </div>

        {/* Grid de Projetos Separados */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projetos.map((projeto, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group relative"
            >
              {/* Moldura Industrial */}
              <div className="relative aspect-4/5 overflow-hidden bg-teal-900 rounded-sm border border-teal-800 transition-all duration-500 group-hover:border-teal-500 group-hover:shadow-2xl group-hover:shadow-teal-900/40">
                <img
                  src={projeto.img.src}
                  alt={projeto.titulo}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-40"
                />

                {/* Overlay Informativo (Hover) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 text-center">
                  <span className="text-teal-400 font-black text-[10px] tracking-[0.4em] mb-2 uppercase">
                    {projeto.categoria}
                  </span>
                  <h3 className="text-white text-2xl font-black mb-8 uppercase tracking-tighter">
                    {projeto.titulo}
                  </h3>
                  <Link
                    href={projeto.url}
                    className="bg-white text-teal-950 px-8 py-3 rounded-sm font-black text-[10px] uppercase tracking-widest hover:bg-teal-600 hover:text-white transition-all"
                  >
                    VER DETALHES
                  </Link>
                </div>

                {/* Tag de Index no Canto */}
                <div className="absolute top-6 right-6 mix-blend-difference">
                  <span className="text-white font-black text-2xl opacity-50">0{index + 1}</span>
                </div>
              </div>

              {/* Info Inferior (Visível sempre) */}
              <div className="mt-6 flex justify-between items-center border-l-2 border-teal-800 pl-4 group-hover:border-teal-500 transition-colors">
                <div>
                  <h4 className="text-white font-black text-sm tracking-widest uppercase">{projeto.titulo}</h4>
                  <p className="text-teal-700 font-black text-[10px] tracking-[0.2em] mt-1">{projeto.categoria}</p>
                </div>
                <div className="w-8 h-px bg-teal-800 group-hover:w-12 group-hover:bg-teal-500 transition-all"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final Padronizado */}
        <div className="text-center mt-24">
          <Link
            href="/#contato"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-16 py-5 rounded-sm font-black text-sm md:text-base uppercase tracking-[0.2em] transition-all border-b-4 border-teal-800 active:translate-y-2 active:border-b-0 shadow-2xl shadow-teal-900/40"
          >
            SOLICITAR ORÇAMENTO
          </Link>
        </div>
      </div>
    </section>
  );
}