"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Pacotes() {
  const pacotes = [
    {
      nome: "START",
      preco: "150.000 Kz",
      descricao: "IDEAL PARA PEQUENOS NEGÓCIOS EM ASCENSÃO",
      itens: [
        "ATÉ 5 PÁGINAS ESTRUTURADAS",
        "DESIGN 100% RESPONSIVO",
        "INTEGRAÇÃO COM WHATSAPP",
        "FORMULÁRIO DE CONTACTO",
        "SEO BÁSICO CONFIGURADO",
        "DOMÍNIO + HOSPEDAGEM (1 ANO)",
        "07 DIAS DE SUPORTE TÉCNICO",
      ],
      prazo: "07–10 DIAS ÚTEIS",
    },
    {
      nome: "BUSINESS",
      preco: "280.000 Kz",
      descricao: "FOCO EM CRESCIMENTO E AUTORIDADE",
      itens: [
        "ATÉ 7 PÁGINAS PERSONALIZADAS",
        "DESIGN UI/UX EXCLUSIVO",
        "WHATSAPP + CRM BÁSICO",
        "SEO OTIMIZADO POR PÁGINA",
        "INTEGRAÇÃO COM REDES SOCIAIS",
        "DOMÍNIO + HOSPEDAGEM (1 ANO)",
        "15 DIAS DE SUPORTE TÉCNICO",
      ],
      prazo: "10–15 DIAS ÚTEIS",
      destaque: true,
    },
    {
      nome: "PRO",
      preco: "480.000 Kz",
      descricao: "SOLUÇÃO COMPLETA DE ALTA PERFORMANCE",
      itens: [
        "ATÉ 10 PÁGINAS ESTRATÉGICAS",
        "FOCO TOTAL EM CONVERSÃO",
        "SEO ESTRUTURADO AVANÇADO",
        "BLOG ENGINE CONFIGURADO",
        "GOOGLE ANALYTICS SETUP",
        "DOMÍNIO + HOSPEDAGEM (1 ANO)",
        "30 DIAS DE SUPORTE TÉCNICO",
      ],
      prazo: "15–20 DIAS ÚTEIS",
    },
  ];

  return (
    <section id="pacotes" className="relative py-32 bg-teal-950 overflow-hidden border-t border-teal-900/30">
      {/* Glow central para profundidade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-teal-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-24">
        <div className="inline-block px-6 py-2 rounded-sm bg-teal-900 border border-teal-600/30 mb-8">
          <span className="text-teal-600 font-black text-sm uppercase tracking-[0.4em]">Tabelas</span>
        </div>
        <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
          NOSSOS <span className="text-teal-600">PACOTES</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-medium uppercase tracking-widest max-w-3xl mx-auto leading-relaxed">
          SELECIONE A ESTRUTURA IDEAL PARA A EVOLUÇÃO DIGITAL DA SUA MARCA.
        </p>
      </div>

      {/* Grid com espaçamento (gap-8) para separar os cards */}
      <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {pacotes.map((pacote, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={`relative p-10 md:p-12 flex flex-col justify-between transition-all duration-500 rounded-sm border ${
              pacote.destaque 
              ? "bg-teal-900/40 border-teal-500 shadow-2xl scale-105 z-10" 
              : "bg-teal-900/20 border-teal-800 hover:border-teal-600"
            } group`}
          >
            <div>
              <div className="flex justify-between items-start mb-10">
                <h3 className="text-teal-600 font-black text-sm uppercase tracking-[0.3em]">
                  MOD. {pacote.nome}
                </h3>
                <span className="text-teal-900 font-black text-5xl leading-none opacity-40">
                  0{index + 1}
                </span>
              </div>

              <div className="mb-10">
                <p className="text-white text-5xl font-black tracking-tighter mb-4">
                  {pacote.preco}
                </p>
                <p className="text-gray-300 text-sm font-bold uppercase tracking-widest leading-relaxed">
                  {pacote.descricao}
                </p>
              </div>

              <div className="w-full h-px bg-teal-800/50 mb-10 group-hover:bg-teal-600/30 transition-colors"></div>

              <ul className="space-y-5 mb-14">
                {pacote.itens.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-teal-600 rounded-sm shadow-[0_0_8px_#0d9488]"></div>
                    <span className="text-gray-300 text-sm md:text-base font-bold uppercase tracking-wide group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <div className="mb-10 flex flex-col gap-2 border-l-2 border-teal-800 pl-4">
                <span className="text-[10px] text-teal-700 font-black uppercase tracking-widest">PRAZO ESTIMADO:</span>
                <span className="text-sm text-teal-600 font-black uppercase tracking-widest">{pacote.prazo}</span>
              </div>
              
              {/* Botão com tamanho padrão px-10 py-5 */}
              <Link
                href="/#contato"
                className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white px-10 py-5 rounded-sm font-black text-sm md:text-base uppercase tracking-[0.2em] transition-all border-b-4 border-teal-800 active:translate-y-2 active:border-b-0 shadow-xl"
              >
                SOLICITAR ORÇAMENTO
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}