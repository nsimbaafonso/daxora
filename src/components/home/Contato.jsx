"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { contatoSchema } from "@/validations/contatoSchema";

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contatoSchema),
  });

  const onSubmit = async (data) => {
    const toastId = toast.loading("Processando sua solicitação...");

    try {
      const { nome, email, assunto, mensagem } = data;
      const texto = `Olá! Tenho interesse em um projeto.\n\nNome: ${nome}\nEmail: ${email}\nAssunto: ${assunto}\n\nMensagem:\n${mensagem}`;
      const mensagemFormatada = encodeURIComponent(texto);
      const numero = "244974636955";
      const url = `https://wa.me/${numero}?text=${mensagemFormatada}`;

      await new Promise((resolve) => setTimeout(resolve, 1500));
      window.open(url, "_blank");
      toast.success("Redirecionando para o WhatsApp...", { id: toastId });
      reset();
    } catch (err) {
      toast.error("Falha na conexão. Tente novamente.", { id: toastId });
    }
  };

  return (
    <section id="contato" className="relative py-32 bg-teal-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-teal-600"></span>
            <span className="text-teal-500 font-black text-sm uppercase tracking-[0.5em]">Briefing</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
            VAMOS INICIAR SEU <span className="text-teal-600">PROJETO</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium tracking-wide leading-relaxed">
            Transforme sua visão em uma máquina de conversão digital com estratégia e tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Formulário com todas as validações de erro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-teal-900/20 border border-teal-800 p-8 md:p-12 rounded-sm shadow-2xl relative"
          >
            <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-teal-600 font-black text-[10px] uppercase tracking-[0.2em]">Nome Completo</label>
                  <input
                    type="text"
                    {...register("nome")}
                    className={`w-full bg-transparent border-b-2 px-0 py-3 text-white focus:outline-none transition-colors placeholder:text-teal-900/50 ${
                      errors.nome ? "border-red-500" : "border-teal-800 focus:border-teal-500"
                    }`}
                    placeholder="Digite seu nome"
                  />
                  {errors.nome && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.nome.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-teal-600 font-black text-[10px] uppercase tracking-[0.2em]">E-mail Corporativo</label>
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full bg-transparent border-b-2 px-0 py-3 text-white focus:outline-none transition-colors placeholder:text-teal-900/50 ${
                      errors.email ? "border-red-500" : "border-teal-800 focus:border-teal-500"
                    }`}
                    placeholder="exemplo@empresa.com"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-teal-600 font-black text-[10px] uppercase tracking-[0.2em]">Assunto do Projeto</label>
                <input
                  type="text"
                  {...register("assunto")}
                  className={`w-full bg-transparent border-b-2 px-0 py-3 text-white focus:outline-none transition-colors placeholder:text-teal-900/50 ${
                    errors.assunto ? "border-red-500" : "border-teal-800 focus:border-teal-500"
                  }`}
                  placeholder="Ex: Redesign de Site Corporativo"
                />
                {errors.assunto && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.assunto.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-teal-600 font-black text-[10px] uppercase tracking-[0.2em]">Mensagem / Objetivos</label>
                <textarea
                  rows="4"
                  {...register("mensagem")}
                  className={`w-full bg-transparent border-b-2 px-0 py-3 text-white focus:outline-none transition-colors resize-none placeholder:text-teal-900/50 ${
                    errors.mensagem ? "border-red-500" : "border-teal-800 focus:border-teal-500"
                  }`}
                  placeholder="Descreva brevemente as necessidades do seu projeto"
                />
                {errors.mensagem && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.mensagem.message}</p>}
              </div>

              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white w-full py-5 rounded-sm font-black text-sm md:text-base uppercase tracking-[0.3em] transition-all border-b-4 border-teal-800 active:translate-y-[2px] active:border-b-0 shadow-xl"
              >
                ENVIAR SOLICITAÇÃO
              </button>
            </form>
          </motion.div>

          {/* Cards laterais */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 justify-start"
          >
            {[
              { icon: "fa-envelope", label: "E-mail", val: "daxora@digital.com" },
              { icon: "fa-phone", label: "Telefone", val: "+244 974 636 955" },
              { icon: "fa-location-dot", label: "Sede", val: "Luanda, Angola" }
            ].map((item, i) => (
              <div key={i} className="group flex items-center gap-6 bg-teal-900/10 border border-teal-900 p-8 rounded-sm hover:border-teal-600 transition-all">
                <div className="w-16 h-16 bg-teal-900 text-teal-500 flex items-center justify-center rounded-sm text-2xl group-hover:bg-teal-600 group-hover:text-white transition-all">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <div>
                  <h3 className="text-teal-700 font-black uppercase tracking-[0.3em] text-[10px] mb-1">{item.label}</h3>
                  <p className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">{item.val}</p>
                </div>
              </div>
            ))}
            
            <div className="mt-auto p-10 bg-teal-600/5 border-l-4 border-teal-600">
              <p className="text-gray-400 italic text-lg leading-relaxed">
                "A tecnologia move o mundo, mas a estratégia move os negócios. Vamos construir o seu futuro agora."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mapa Restaurado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-sm overflow-hidden border border-teal-800 h-96 relative group"
        >
          <iframe
            title="Localização Daxora"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126154.512619478!2d13.151740943359375!3d-8.838333299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f1519520e013%3A0xdbc323326176510e!2sLuanda!5e0!3m2!1spt-PT!2sao!4v1710000000000"
            width="100%"
            height="100%"
            className="border-0 grayscale invert opacity-40 group-hover:opacity-70 transition-all duration-700"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(2,44,44,1)]"></div>
        </motion.div>
      </div>
    </section>
  );
}