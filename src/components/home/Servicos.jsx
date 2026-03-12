"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Servicos() {
  const servicos = [
    {
      titulo: "Sites Profissionais",
      descricao:
        "Sites modernos, rápidos e responsivos, ideais para pequenas e médias empresas. Seu site será funcional, bonito e fácil de navegar, ajudando sua empresa a ganhar credibilidade e atrair clientes.",
      icone: "fas fa-laptop-code",
    },
    {
      titulo: "Landing Pages",
      descricao:
        "Páginas únicas focadas em gerar contatos e conversões rapidamente. Perfeito para campanhas, promoções ou lançamentos.",
      icone: "fas fa-bullseye",
    },
    {
      titulo: "Redesign de Sites",
      descricao:
        "Atualizamos seu site antigo com um visual moderno e funcionalidades atualizadas, garantindo que ele passe profissionalismo e confiança aos clientes.",
      icone: "fas fa-sync-alt",
    },
    {
      titulo: "Sites Gerenciáveis",
      descricao:
        "Sites fáceis de atualizar. Você poderá alterar textos e imagens sozinho, sem depender de desenvolvedor, mantendo seu site sempre atualizado.",
      icone: "fas fa-cogs",
    },
    {
      titulo: "Consultoria Digital",
      descricao:
        "Orientação personalizada para melhorar sua presença online. Ajudamos a planejar o site ideal, definir prioridades e estratégias para atrair mais clientes.",
      icone: "fas fa-lightbulb",
    },
    {
      titulo: "Suporte e Manutenção",
      descricao:
        "Atualizações, backups e pequenas alterações para manter seu site funcionando perfeitamente. Pode ser contratado como plano mensal, garantindo tranquilidade e segurança.",
      icone: "fas fa-tools",
    },
  ];

  // Variants para animação dos cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
          Nossos Serviços
        </h2>
        <p className="text-gray-700 text-lg md:text-xl">
          Criamos soluções digitais que ajudam sua empresa a crescer online
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {servicos.map((servico, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="bg-gray-200 rounded-xl p-6 shadow-md transform transition hover:-translate-y-2 hover:shadow-xl"
          >
            <motion.div
              whileHover={{ scale: 1.15, color: "#2563EB" }} // blue-600
              className="text-blue-600 text-3xl mb-4 transition-colors"
            >
              <i className={servico.icone}></i>
            </motion.div>
            <h3 className="text-xl font-semibold text-blue-950 mb-2">
              {servico.titulo}
            </h3>
            <p className="text-gray-700">{servico.descricao}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA no final da seção */}
      <div className="text-center mt-12">
        <Link
          href="/#contato"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
        >
          Solicite um Orçamento
        </Link>
      </div>
    </section>
  );
}
