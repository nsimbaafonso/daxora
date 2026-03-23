"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import sobre from "@/assets/img/sobre.jpg";

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-teal-950 overflow-hidden border-t border-teal-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Lado da Imagem: Estilo Geométrico Premium */}
          <motion.div
            className="lg:w-1/2 relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Molduras Decorativas - Teal 600 */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-teal-600 z-0 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-teal-800 z-0 opacity-50"></div>
            
            {/* Imagem com bordas retas (rounded-sm) */}
            <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl border-[6px] border-teal-900/50">
              <img
                src={sobre.src}
                alt="Equipe Daxorya Digital"
                className="w-full h-125 object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              
              {/* Card de Prova Social - Premium Dark */}
              <div className="absolute bottom-6 right-6 bg-teal-900/90 backdrop-blur-md p-6 rounded-sm border border-teal-600/30 max-w-50 shadow-2xl">
                <p className="text-teal-600 font-black text-4xl mb-1 tracking-tighter">+100%</p>
                <p className="text-gray-300 text-[10px] font-black uppercase tracking-widest leading-tight">
                  COMPROMISSO COM PERFORMANCE E ESTÉTICA.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Lado do Texto */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-5 py-2 rounded-sm bg-teal-900 border border-teal-600/30 mb-8">
              <span className="text-teal-600 font-black text-xs uppercase tracking-[0.3em]">
                NOSSA MISSÃO
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight uppercase tracking-tighter">
              TRANSFORMAMOS NEGÓCIOS EM <br />
              <span className="text-teal-600">PRESENÇA DIGITAL DE ELITE.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-xl font-medium">
              <p>
                A <span className="text-white font-bold">DAXORYA DIGITAL</span> TEM UM PROPÓSITO CLARO: CRIAR SITES MODERNOS, ESTRATÉGICOS E DE ALTO IMPACTO PARA EMPRESAS QUE NÃO ACEITAM O COMUM. 
              </p>

              <p className="text-base text-gray-500">
                Entregamos engenharia de software de verdade. Nosso foco é converter visitantes em clientes reais através de interfaces que respiram modernidade e tecnologia de ponta.
              </p>
            </div>

            {/* Lista de Impacto Geométrica */}
            <div className="mt-12 flex flex-wrap gap-10">
              <div className="flex flex-col border-l-2 border-teal-600 pl-4">
                <span className="text-white font-black text-2xl tracking-tighter">01.</span>
                <span className="text-teal-600 font-black text-xs uppercase tracking-widest mt-1">ESTRATÉGIA</span>
                <span className="text-gray-500 text-[11px] mt-2 font-bold uppercase tracking-wider">Foco total em conversão.</span>
              </div>
              <div className="flex flex-col border-l-2 border-teal-600 pl-4">
                <span className="text-white font-black text-2xl tracking-tighter">02.</span>
                <span className="text-teal-600 font-black text-xs uppercase tracking-widest mt-1">EXCLUSIVIDADE</span>
                <span className="text-gray-500 text-[11px] mt-2 font-bold uppercase tracking-wider">Design feito sob medida.</span>
              </div>
            </div>

            <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-10">
              <Link
                href="/#contato"
                className="group relative inline-flex items-center justify-center px-10 py-4 font-black text-white bg-teal-600 rounded-sm transition-all border-b-4 border-teal-800 active:translate-y-2 active:border-b-0 uppercase tracking-[0.2em] text-xs shadow-lg shadow-teal-900/40"
              >
                SOLICITAR ORÇAMENTO
                <i className="fa-solid fa-arrow-right ml-3 transition-transform group-hover:translate-x-2"></i>
              </Link>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-teal-800"></div>
                <div>
                  <p className="text-white font-black text-xs uppercase tracking-widest">SUPORTE LOCAL</p>
                  <p className="text-teal-600 text-[10px] font-black uppercase tracking-tighter">LUANDA, ANGOLA</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}