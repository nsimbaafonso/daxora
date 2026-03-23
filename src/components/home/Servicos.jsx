"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Servicos() {
  const servicos = [
    {
      titulo: "SITES PROFISSIONAIS",
      subtitulo: "WEB ARCHITECTURE",
      descricao: "ENGENHARIA DE ALTO NÍVEL PARA MARCAS QUE BUSCAM DOMÍNIO DIGITAL. PERFORMANCE EXTREMA E ESTÉTICA IMPECÁVEL.",
      icone: "fas fa-laptop-code",
    },
    {
      titulo: "LANDING PAGES",
      subtitulo: "CONVERSION FOCUS",
      descricao: "PÁGINAS DE ALTA IMPACTO PROJETADAS PARA CONVERTER CURIOSIDADE EM RECEITA ATRAVÉS DE DESIGN PSICOLÓGICO.",
      icone: "fas fa-bullseye",
    },
    {
      titulo: "REDESIGN DE ELITE",
      subtitulo: "DIGITAL EVOLUTION",
      descricao: "EVOLUÍMOS SUA PRESENÇA ANTIGA PARA UMA INTERFACE MODERNA QUE RESPIRA O FUTURO DA TECNOLOGIA.",
      icone: "fas fa-sync-alt",
    },
    {
      titulo: "SITES GERENCIÁVEIS",
      subtitulo: "TOTAL CONTROL",
      descricao: "AUTONOMIA ABSOLUTA COM SISTEMAS ROBUSTOS. GERENCIE SEU IMPÉRIO DIGITAL COM SIMPLICIDADE E PODER.",
      icone: "fas fa-cogs",
    },
    {
      titulo: "CONSULTORIA ESTRATÉGICA",
      subtitulo: "TECH ADVISORY",
      descricao: "DIRECIONAMENTO TÉCNICO PARA POSICIONAR SUA EMPRESA NO TOPO DO MERCADO DIGITAL DE ANGOLA.",
      icone: "fas fa-lightbulb",
    },
    {
      titulo: "SUPORTE E PERFORMANCE",
      subtitulo: "ZERO DOWNTIME",
      descricao: "MONITORAMENTO CONSTANTE E OTIMIZAÇÃO DE VELOCIDADE PARA GARANTIR QUE SUA MARCA NUNCA PARE.",
      icone: "fas fa-tools",
    },
  ];

  return (
    <section id="servicos" className="relative py-32 bg-teal-950 overflow-hidden border-t border-teal-900/30">
      {/* Glow de Fundo Sutil */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-teal-600"></span>
              <span className="text-teal-500 font-black text-xs uppercase tracking-[0.5em]">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              SOLUÇÕES DE <br />
              <span className="text-teal-600">ENGENHARIA DIGITAL</span>
            </h2>
          </div>
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] max-w-70 leading-loose border-l border-teal-900/50 pl-6 italic">
            DESENVOLVEMOS O FUTURO ATRAVÉS DE INTERFACES DE ELITE E TECNOLOGIA PROPRIETÁRIA.
          </p>
        </div>

        {/* Grid de Cards Unificado */}
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-teal-900/30 border border-teal-900/50">
          {servicos.map((servico, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-teal-950 p-12 transition-all duration-500 hover:bg-teal-900/20 overflow-hidden"
            >
              {/* Efeito de Scanline no Hover */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-teal-600/5 to-transparent translate-y-100 group-hover:translate-y-100% transition-transform duration-1000 ease-in-out"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-teal-900/30 border border-teal-800 rounded-sm text-teal-500 group-hover:text-white group-hover:bg-teal-600 transition-all duration-500">
                    <i className={`${servico.icone} text-2xl`}></i>
                  </div>
                  <span className="text-teal-900 font-black text-6xl leading-none opacity-30 group-hover:opacity-10 transition-opacity select-none">
                    0{index + 1}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-teal-600 font-black text-[9px] tracking-[0.4em] uppercase mb-1">
                    {servico.subtitulo}
                  </p>
                  <h3 className="text-white text-xl font-black uppercase tracking-wider">
                    {servico.titulo}
                  </h3>
                </div>

                <p className="text-gray-400 text-[11px] leading-relaxed uppercase tracking-widest font-bold group-hover:text-gray-300 transition-colors">
                  {servico.descricao}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chamada para Ação Final */}
        <div className="mt-24 flex flex-col items-center">
          <Link
            href="/#contato"
            className="bg-teal-600 hover:bg-teal-700 text-white px-16 py-5 rounded-sm font-black text-sm uppercase tracking-[0.25em] transition-all border-b-4 border-teal-800 active:translate-y-2 active:border-b-0 shadow-2xl shadow-teal-900/40"
          >
            SOLICITAR ORÇAMENTO
          </Link>
        </div>
      </div>
    </section>
  );
}