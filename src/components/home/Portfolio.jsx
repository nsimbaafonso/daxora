"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import site1 from "@/assets/img/sobre.jpg";
import site2 from "@/assets/img/sobre.jpg";
import site3 from "@/assets/img/sobre.jpg";

export default function Portfolio() {
  const projetos = [
    { titulo: "Site Corporativo", img: site1, url: "/#portfolio" },
    { titulo: "Landing Page Promoção", img: site2, url: "/#portfolio" },
    { titulo: "Redesign de Site", img: site3, url: "/#portfolio" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      {/* Cabeçalho */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
          Nosso Portfólio
        </h2>
        <p className="text-gray-700 text-lg md:text-xl">
          Alguns dos projetos que criamos para pequenas e médias empresas
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projetos.map((projeto, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="relative overflow-hidden rounded-xl shadow-md cursor-pointer transform transition hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={projeto.img.src}
              alt={projeto.titulo}
              className="w-full h-64 object-cover"
            />

            {/* Overlay no hover */}
            <motion.div
              className="absolute inset-0 bg-blue-950/70 flex flex-col items-center justify-center opacity-0 text-center p-4 transition-opacity"
              whileHover={{ opacity: 1 }}
            >
              <h3 className="text-white text-xl font-semibold mb-2">
                {projeto.titulo}
              </h3>
              <Link
                href={projeto.url}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition"
              >
                Ver Projeto
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* CTA final */}
      <div className="text-center mt-12">
        <Link
          href="/#contato"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
        >
          Solicite seu Projeto
        </Link>
      </div>
    </section>
  );
}
