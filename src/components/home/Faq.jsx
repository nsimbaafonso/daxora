"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const faqs = [
    {
      pergunta: "QUANTO TEMPO LEVA PARA CRIAR UM SITE?",
      resposta:
        "O PRAZO É DEFINIDO PELO MÓDULO SELECIONADO. PACOTE START: 07–10 DIAS, BUSINESS: 10–15 DIAS, PRO: 15–20 DIAS ÚTEIS.",
    },
    {
      pergunta: "POSSO ATUALIZAR MEU SITE SOZINHO?",
      resposta:
        "SIM. NOSSAS PLATAFORMAS SÃO ENTREGUES COM INTERFACES GERENCIÁVEIS QUE GARANTEM AUTONOMIA TOTAL PARA ALTERAR TEXTOS, IMAGENS E CONTEÚDOS DE BLOG SEM DEPENDÊNCIA TÉCNICA.",
    },
    {
      pergunta: "VOCÊS OFERECEM SUPORTE APÓS A ENTREGA?",
      resposta:
        "CADA PROJETO INCLUI UM PERÍODO DE SUPORTE DEDICADO DE 07 A 30 DIAS. TAMBÉM DISPONIBILIZAMOS PLANOS DE MANUTENÇÃO MENSAL PARA GARANTIR PERFORMANCE E SEGURANÇA CONTÍNUA.",
    },
    {
      pergunta: "O SITE SERÁ OPTIMIZADO PARA DISPOSITIVOS MÓVEIS?",
      resposta:
        "SIM. TRABALHAMOS COM A METODOLOGIA 'MOBILE-FIRST'. SEU SITE TERÁ UMA PERFORMANCE IMPECÁVEL E CARREGAMENTO ULTRA-RÁPIDO EM QUALQUER SMARTPHONE OU TABLET.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-32 bg-teal-950 overflow-hidden border-t border-teal-900/30">
      {/* Elemento de fundo sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-24">
        <div className="inline-block px-6 py-2 rounded-sm bg-teal-900 border border-teal-600/30 mb-8">
          <span className="text-teal-600 font-black text-sm uppercase tracking-[0.4em]">Suporte</span>
        </div>
        <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
          DÚVIDAS <span className="text-teal-600">FREQUENTES</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-medium uppercase tracking-widest max-w-3xl mx-auto leading-relaxed">
          TRANSPARÊNCIA TOTAL SOBRE O NOSSO PROCESSO DE ENGENHARIA DIGITAL.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border transition-all duration-500 rounded-sm ${
                isOpen ? "bg-teal-900/30 border-teal-500 shadow-2xl" : "bg-teal-900/10 border-teal-900 hover:border-teal-700"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-8 py-7 flex justify-between items-center focus:outline-none group"
              >
                <span className={`text-sm md:text-base font-black tracking-widest transition-colors uppercase ${
                  isOpen ? "text-teal-400" : "text-white group-hover:text-teal-500"
                }`}>
                  {faq.pergunta}
                </span>
                <div className={`w-8 h-8 flex items-center justify-center border transition-all duration-500 ${
                  isOpen ? "bg-teal-600 border-teal-400 rotate-180" : "bg-transparent border-teal-800"
                }`}>
                  <i className={`fa-solid fa-chevron-down text-xs ${isOpen ? "text-white" : "text-teal-600"}`}></i>
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-300 text-sm md:text-base leading-loose font-medium tracking-wide border-t border-teal-800/50 pt-6">
                      {faq.resposta}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}