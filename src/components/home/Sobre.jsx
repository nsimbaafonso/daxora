"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import sobre from "@/assets/img/sobre.jpg";

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Texto */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
            Quem Somos
          </h2>

          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Na{" "}
            <span className="font-semibold text-blue-600">Daxora Digital</span>,
            acreditamos que toda pequena e média empresa merece uma presença
            online profissional. Criamos sites modernos, rápidos e intuitivos,
            que ajudam você a atrair clientes, aumentar vendas e fortalecer sua
            marca na internet.
          </p>

          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Combinamos design, tecnologia e estratégia para entregar soluções
            digitais completas, focadas em resultados reais. Nosso objetivo é
            tornar seu negócio competitivo no ambiente digital.
          </p>

          <Link
            href="/#contato"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Fale Conosco
          </Link>
        </motion.div>

        {/* Imagem */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={sobre.src}
            alt="Sobre Daxora Digital"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
