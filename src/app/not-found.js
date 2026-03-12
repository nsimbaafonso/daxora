import Link from "next/link";

export const metadata = {
  title: "Página Não Encontrada | Daxora Digital",
  description: "Ops! A página que você está procurando não foi encontrada. Volte para o início.",
};

export default function NotFound() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-blue-950 text-white px-6 text-center overflow-hidden">
      
      {/* Elementos Decorativos de Fundo (Blur Tecnológico) */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-800 rounded-full blur-[120px] opacity-20"></div>

      {/* Código 404 com Gradiente */}
      <h1 className="text-[6rem] md:text-[10rem] font-black leading-none mb-4 bg-linear-to-b from-blue-600 to-blue-950 bg-clip-text text-transparent select-none">
        404
      </h1>

      {/* Conteúdo Principal */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="bg-blue-600/10 border border-blue-600/20 px-4 py-1 rounded-full text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
          <i className="fa-solid fa-triangle-exclamation mr-2"></i> Erro de Navegação
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
          Página Perdida no <span className="text-blue-600">Espaço Digital</span>
        </h2>
        
        <p className="text-gray-400 mb-10 text-base md:text-lg max-w-2xl leading-relaxed">
          O link que você seguiu pode estar quebrado ou a página foi movida para um novo endereço. 
          Não se preocupe, vamos te ajudar a encontrar o caminho de volta.
        </p>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/"
            className="group bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20 flex items-center"
          >
            <i className="fa-solid fa-house mr-3 transition-transform group-hover:-translate-y-1"></i>
            Voltar para o Início
          </Link>

          <Link
            href="/#contato"
            className="group border-2 border-blue-800 hover:border-blue-600 text-white px-10 py-4 rounded-xl font-bold transition-all flex items-center"
          >
            <i className="fa-solid fa-headset mr-3"></i>
            Suporte Técnico
          </Link>
        </div>
      </div>
    </section>
  );
}