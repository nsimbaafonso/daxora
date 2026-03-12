"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const faqs = [
    {
      pergunta: "Quanto tempo leva para criar um site?",
      resposta:
        "O prazo depende do pacote escolhido. Pacote START: 7–10 dias, BUSINESS: 10–15 dias, PRO: 15–20 dias.",
    },
    {
      pergunta: "Posso atualizar meu site sozinho?",
      resposta:
        "Sim! Nossos sites são construídos para que você tenha autonomia total. Você poderá alterar textos, imagens e posts de blog de forma simples e intuitiva.",
    },
    {
      pergunta: "Vocês oferecem suporte após a entrega?",
      resposta:
        "Com certeza! Cada pacote inclui um período de suporte dedicado (7 a 30 dias). Além disso, oferecemos planos de manutenção mensal para manter seu site sempre seguro e atualizado.",
    },
    {
      pergunta: "O site será responsivo para celulares e tablets?",
      resposta:
        "Sim, todos os projetos seguem o padrão 'Mobile First'. Seu site será otimizado para carregar rápido e ter uma aparência impecável em qualquer tamanho de tela.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-blue-950 mb-4"
        >
          Dúvidas <span className="text-blue-600">Frequentes</span>
        </motion.h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          Tudo o que você precisa saber para dar o próximo passo na
          digitalização do seu negócio.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl transition-all duration-300 border-2 ${
                isOpen
                  ? "bg-white border-blue-600 shadow-xl"
                  : "bg-white border-transparent shadow-md"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <span
                  className={`text-lg font-bold transition-colors ${isOpen ? "text-blue-600" : "text-blue-950"}`}
                >
                  {faq.pergunta}
                </span>
                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                    isOpen
                      ? "bg-blue-600 text-white rotate-180"
                      : "bg-gray-100 text-blue-950"
                  }`}
                >
                  <i
                    className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"} text-sm`}
                  ></i>
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-700 text-base leading-relaxed border-t border-gray-100 pt-4">
                      {faq.resposta}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Final abaixo do FAQ */}
      <div className="mt-16 text-center">
        <p className="text-gray-700 mb-6 font-medium text-lg">
          Ainda tem alguma dúvida específica?
        </p>
        <a
          href="https://wa.me/244999000111"
          target="_blank"
          className="inline-flex items-center bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
        >
          <i className="fa-brands fa-whatsapp mr-3 text-xl"></i>
          Falar com Especialista
        </a>
      </div>
    </section>
  );
}
