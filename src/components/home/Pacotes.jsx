"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Pacotes() {
  const pacotes = [
    {
      nome: "START",
      preco: "150.000 Kz",
      descricao: "Ideal para pequenos negócios",
      itens: [
        "Até 4 páginas",
        "Design responsivo",
        "Integração com WhatsApp",
        "Formulário de contacto",
        "SEO básico",
        "7 dias de suporte",
      ],
      prazo: "7–10 dias",
      destaque: false,
    },
    {
      nome: "BUSINESS",
      preco: "280.000 Kz",
      descricao: "Ideal para empresas em crescimento",
      itens: [
        "Até 7 páginas",
        "Design personalizado",
        "WhatsApp + formulário avançado",
        "SEO básico otimizado",
        "Integração com redes sociais",
        "15 dias de suporte",
      ],
      prazo: "10–15 dias",
      destaque: true,
    },
    {
      nome: "PRO",
      preco: "480.000 Kz",
      descricao: "Para empresas mais estruturadas",
      itens: [
        "Até 10 páginas",
        "Design estratégico focado em conversão",
        "SEO inicial estruturado",
        "Blog configurado",
        "Integração com Google Analytics",
        "30 dias de suporte",
      ],
      prazo: "15–20 dias",
      premium: true,
    },
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
    <section id="pacotes" className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
          Nossos Pacotes
        </h2>
        <p className="text-gray-700 text-lg md:text-xl">
          Escolha o pacote ideal para sua empresa e comece a impulsionar sua
          presença online
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {pacotes.map((pacote, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className={`rounded-2xl shadow-lg p-8 flex flex-col justify-between transform transition hover:-translate-y-2 hover:shadow-2xl border-2 ${
              pacote.premium
                ? "bg-blue-900 border-blue-800 text-white"
                : pacote.destaque
                  ? "bg-white border-blue-600 scale-105 z-10"
                  : "bg-white border-transparent text-gray-700"
            }`}
          >
            <div>
              {pacote.destaque && (
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">
                  Mais Popular
                </span>
              )}
              <h3
                className={`text-2xl font-bold mb-2 ${pacote.premium ? "text-white" : "text-blue-950"}`}
              >
                Pacote {pacote.nome}
              </h3>
              <p
                className={`mb-6 ${pacote.premium ? "text-gray-200" : "text-gray-700"}`}
              >
                {pacote.descricao}
              </p>
              <p
                className={`text-3xl font-bold mb-6 ${pacote.premium ? "text-blue-600" : "text-blue-800"}`}
              >
                {pacote.preco}
              </p>

              <ul
                className={`mb-8 space-y-3 ${pacote.premium ? "text-gray-200" : "text-gray-700"}`}
              >
                {pacote.itens.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p
                className={`font-medium mb-6 ${pacote.premium ? "text-gray-400" : "text-gray-400"}`}
              >
                Prazo: {pacote.prazo}
              </p>
              <Link
                href="/#contato"
                className={`block text-center py-4 rounded-xl font-bold transition transform hover:scale-105 ${
                  pacote.premium
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-800 hover:bg-blue-900 text-white"
                }`}
              >
                Contratar Agora
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
