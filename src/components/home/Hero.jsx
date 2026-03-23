"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Estilos do Swiper
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Suas imagens
import heroBg from "@/assets/img/hero.jpg";
import heroBg2 from "@/assets/img/hero2.jpg";
import heroBg3 from "@/assets/img/hero3.jpg";

export default function Hero() {
  const [indexAtivo, setIndexAtivo] = useState(0);

  const slides = [
    {
      img: heroBg.src,
      title: "TRANSFORMAMOS SUA PRESENÇA",
      subtitle: "EM RESULTADOS REAIS",
      text: "CRIAMOS SOLUÇÕES DIGITAIS DE ALTO PADRÃO PARA EMPRESAS QUE BUSCAM LIDERAR O MERCADO EM LUANDA.",
    },
    {
      img: heroBg2.src,
      title: "TECNOLOGIA DE PONTA",
      subtitle: "FOCO EM CONVERSÃO",
      text: "SITES 100% RESPONSIVOS E OTIMIZADOS PARA O GOOGLE. SUA MARCA MERECE O MELHOR DESTAQUE DIGITAL.",
    },
    {
      img: heroBg3.src,
      title: "DAXORYA DIGITAL",
      subtitle: "ESTRATÉGIA E INOVAÇÃO",
      text: "DO PLANEJAMENTO AO SUPORTE PÓS-ENTREGA, CUIDAMOS DE TUDO PARA VOCÊ FOCAR NO SEU NEGÓCIO.",
    },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-teal-950">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setIndexAtivo(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full flex items-center justify-center">
              {/* Background com Efeito Ken Burns Suave */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${slide.img})`,
                  animation: "kenburns 20s ease-out infinite alternate"
                }}
              ></div>

              {/* Overlay Premium de Gradiente (Teal 950) */}
              <div className="absolute inset-0 bg-linear-to-b from-teal-950/80 via-teal-950/70 to-teal-950/95"></div>

              {/* Conteúdo Centralizado */}
              <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
                <AnimatePresence mode="wait">
                  {indexAtivo === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-none tracking-tighter uppercase">
                        {slide.title} <br />
                        <span className="text-teal-600 drop-shadow-[0_0_15px_rgba(13,148,136,0.3)]">
                          {slide.subtitle}
                        </span>
                      </h1>

                      <p className="text-gray-300 text-sm md:text-lg mb-12 max-w-2xl mx-auto leading-loose tracking-widest font-medium uppercase">
                        {slide.text}
                      </p>

                      <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link
                          href="/#contato"
                          className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-4 rounded-sm font-black transition-all border-b-4 border-teal-800 active:translate-y-2 active:border-b-0 uppercase tracking-widest text-sm shadow-xl shadow-teal-900/40"
                        >
                          SOLICITAR ORÇAMENTO
                        </Link>

                        <Link
                          href="/#portfolio"
                          className="bg-transparent border-2 border-white/20 hover:border-teal-600 text-white hover:bg-teal-600/10 px-12 py-4 rounded-sm font-black transition-all uppercase tracking-widest text-sm backdrop-blur-sm"
                        >
                          VER PORTFÓLIO
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mouse Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-6.5 h-11.25 border-2 border-teal-600/30 rounded-full flex justify-center p-1.5 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-teal-600 rounded-full shadow-[0_0_8px_#0d9488]"
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes kenburns {
          from { transform: scale(1.05); }
          to { transform: scale(1.2); }
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2) !important;
          width: 12px;
          height: 4px;
          border-radius: 0px !important; /* Estilo quadrado premium */
          transition: all 0.4s ease;
        }
        .swiper-pagination-bullet-active {
          background: #0d9488 !important; /* teal-600 */
          width: 40px !important;
        }
      `}</style>
    </section>
  );
}