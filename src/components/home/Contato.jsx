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
    const toastId = toast.loading("Enviando mensagem...");

    try {
      const { nome, email, assunto, mensagem } = data;

      const texto = `
        Olá! Tenho interesse em um projeto.

        Nome: ${nome}
        Email: ${email}
        Assunto: ${assunto}

        Mensagem:
        ${mensagem}
      `;

      const mensagemFormatada = encodeURIComponent(texto);

      const numero = "244974636955";

      const url = `https://wa.me/${numero}?text=${mensagemFormatada}`;

      // atraso de 2 segundos
      await new Promise((resolve) => setTimeout(resolve, 2000));

      window.open(url, "_blank");

      toast.success("Redirecionando para o WhatsApp...", { id: toastId });

      reset();
    } catch (err) {
      toast.error("Erro ao abrir WhatsApp", { id: toastId });
    }
  };

  return (
    <section id="contato" className="py-20 bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Vamos Iniciar seu{" "}
            <span className="text-blue-600">Projeto Digital</span>
          </motion.h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Estamos prontos para transformar sua visão em realidade com
            tecnologia de ponta.
          </p>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl"
          >
            <form
              className="flex flex-col gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Nome */}
              <div>
                <label className="text-blue-950 font-semibold text-sm">
                  Nome Completo
                </label>

                <input
                  type="text"
                  placeholder="Ex: João Silva"
                  {...register("nome")}
                  className={`w-full px-4 py-3 rounded-xl border text-gray-700 focus:outline-none focus:ring-2 transition ${
                    errors.nome
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-200 focus:ring-blue-600"
                  }`}
                />

                {errors.nome && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.nome.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-blue-950 font-semibold text-sm">
                  E-mail
                </label>

                <input
                  type="email"
                  placeholder="joao@email.com"
                  {...register("email")}
                  className={`w-full px-4 py-3 rounded-xl border text-gray-700 focus:outline-none focus:ring-2 transition ${
                    errors.email
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-200 focus:ring-blue-600"
                  }`}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Assunto */}
              <div>
                <label className="text-blue-950 font-semibold text-sm">
                  Assunto
                </label>

                <input
                  type="text"
                  placeholder="Como podemos ajudar?"
                  {...register("assunto")}
                  className={`w-full px-4 py-3 rounded-xl border text-gray-700 focus:outline-none focus:ring-2 transition ${
                    errors.assunto
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-200 focus:ring-blue-600"
                  }`}
                />

                {errors.assunto && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.assunto.message}
                  </p>
                )}
              </div>

              {/* Mensagem */}
              <div>
                <label className="text-blue-950 font-semibold text-sm">
                  Mensagem
                </label>

                <textarea
                  rows="4"
                  placeholder="Descreva seu projeto..."
                  {...register("mensagem")}
                  className={`w-full px-4 py-3 rounded-xl border text-gray-700 focus:outline-none focus:ring-2 resize-none transition ${
                    errors.mensagem
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-200 focus:ring-blue-600"
                  }`}
                />

                {errors.mensagem && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.mensagem.message}
                  </p>
                )}
              </div>

              {/* Botão */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white w-full py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-600/20 transition mt-2"
              >
                <i className="fa-solid fa-paper-plane mr-2"></i>
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>

          {/* Cards de Info com Ícones FontAwesome */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between gap-6"
          >
            <div className="flex flex-col gap-6">
              {/* Card E-mail */}
              <div className="group flex items-center gap-5 bg-blue-900 border border-blue-800 p-6 rounded-2xl hover:border-blue-600 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-950 text-blue-600 flex items-center justify-center rounded-xl text-2xl group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h3 className="text-gray-400 font-bold uppercase tracking-wider text-xs">
                    E-mail
                  </h3>
                  <p className="text-xl font-medium">daxora@digital.com</p>
                </div>
              </div>

              {/* Card WhatsApp */}
              <div className="group flex items-center gap-5 bg-blue-900 border border-blue-800 p-6 rounded-2xl hover:border-blue-600 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-950 text-blue-600 flex items-center justify-center rounded-xl text-2xl group-hover:scale-110 transition-transform">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <h3 className="text-gray-400 font-bold uppercase tracking-wider text-xs">
                    WhatsApp
                  </h3>
                  <p className="text-xl font-medium">+244 999 000 111</p>
                </div>
              </div>

              {/* Card Localização */}
              <div className="group flex items-center gap-5 bg-blue-900 border border-blue-800 p-6 rounded-2xl hover:border-blue-600 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-950 text-blue-600 flex items-center justify-center rounded-xl text-2xl group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h3 className="text-gray-400 font-bold uppercase tracking-wider text-xs">
                    Localização
                  </h3>
                  <p className="text-xl font-medium">Luanda, Angola</p>
                </div>
              </div>
            </div>

            {/* Quote Premium */}
            <div className="hidden lg:block bg-linear-to-br from-blue-800 to-blue-950 border border-blue-800 p-8 rounded-2xl relative overflow-hidden">
              <i className="fa-solid fa-quote-right absolute right-4 top-4 text-blue-900 text-6xl opacity-20"></i>
              <p className="text-gray-300 italic relative z-10 leading-relaxed">
                "A tecnologia move o mundo, mas a estratégia move os negócios.
                Vamos construir o seu futuro agora."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mapa Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-900 h-80 md:h-96 relative group"
        >
          <iframe
            title="Localização Daxora Digital"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126144.13627083042!2d13.15570208611135!3d-8.835974020101886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d2c6d%3A0xbf304344c803126!2sLuanda!5e0!3m2!1spt-BR!2sao!4v1715000000000!5m2!1spt-BR!2sao"
            width="100%"
            height="100%"
            className="border-0 grayscale group-hover:grayscale-0 transition-all duration-700"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-inset border-blue-600 opacity-20 group-hover:opacity-40 transition-opacity"></div>
        </motion.div>
      </div>
    </section>
  );
}
