import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-teal-950 border-t border-teal-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-4">
        
        {/* Marca e Descrição */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="text-white text-3xl font-black tracking-tighter group uppercase">
            DAXORYA <span className="text-teal-600 group-hover:text-teal-500 transition-colors">DIGITAL</span>
          </Link>
          <p className="text-gray-400 leading-relaxed text-base">
            Criamos soluções digitais modernas, rápidas e profissionais em Luanda, 
            focadas em elevar a presença online de empresas que buscam o próximo nível tecnológico.
          </p>
        </div>

        {/* Navegação Rápida */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-black uppercase tracking-[0.2em] text-lg border-l-4 border-teal-600 pl-4">
            Navegação
          </h3>
          <nav className="flex flex-col gap-4 font-bold text-sm uppercase tracking-widest">
            <Link href="/" className="hover:text-teal-600 transition-colors w-fit">Início</Link>
            <Link href="/#sobre" className="hover:text-teal-600 transition-colors w-fit">Sobre</Link>
            <Link href="/#servicos" className="hover:text-teal-600 transition-colors w-fit">Serviços</Link>
            <Link href="/#pacotes" className="hover:text-teal-600 transition-colors w-fit">Pacotes</Link>
            <Link href="/#portfolio" className="hover:text-teal-600 transition-colors w-fit">Portfólio</Link>
          </nav>
        </div>

        {/* Links Institucionais */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-black uppercase tracking-[0.2em] text-lg border-l-4 border-teal-600 pl-4">
            Empresa
          </h3>
          <nav className="flex flex-col gap-4 font-bold text-sm uppercase tracking-widest">
            <Link href="/#faq" className="hover:text-teal-600 transition-colors w-fit">FAQ</Link>
            <Link href="/#contato" className="hover:text-teal-600 transition-colors w-fit">Contato</Link>
            <Link href="/privacidade" className="hover:text-teal-600 transition-colors w-fit">Privacidade</Link>
          </nav>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col gap-8">
          <h3 className="text-white font-black uppercase tracking-[0.2em] text-lg border-l-4 border-teal-600 pl-4">
            Conecte-se
          </h3>
          <div className="flex flex-wrap gap-4">
            {/* Facebook */}
            <a href="#" className="w-12 h-12 rounded-full bg-teal-800 flex items-center justify-center text-white hover:bg-teal-600 hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/40 border border-teal-700">
              <i className="fa-brands fa-facebook-f text-lg"></i>
            </a>

            {/* Instagram */}
            <a href="#" className="w-12 h-12 rounded-full bg-teal-800 flex items-center justify-center text-white hover:bg-teal-600 hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/40 border border-teal-700">
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>

            {/* Linkedin */}
            <a href="#" className="w-12 h-12 rounded-full bg-teal-800 flex items-center justify-center text-white hover:bg-teal-600 hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/40 border border-teal-700">
              <i className="fa-brands fa-linkedin-in text-xl"></i>
            </a>

            {/* Whatsapp */}
            <a href="#" className="w-12 h-12 rounded-full bg-teal-800 flex items-center justify-center text-white hover:bg-teal-600 hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/40 border border-teal-700">
              <i className="fa-brands fa-whatsapp text-2xl"></i>
            </a>
          </div>
          <p className="text-xs text-teal-600 font-black uppercase tracking-[0.2em] italic">
            A tecnologia que impulsiona Angola.
          </p>
        </div>
      </div>

      {/* Barra Final */}
      <div className="border-t border-teal-900 bg-black/30 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-xs uppercase tracking-[0.2em] font-bold">
          <p>© {new Date().getFullYear()} DAXORYA DIGITAL. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-600 rounded-full animate-pulse shadow-[0_0_10px_#0d9488]"></span>
              LUANDA, ANGOLA
            </span>
            <span className="hidden md:block text-teal-900">|</span>
            <span className="text-teal-700">PREMIUM TECH SOLUTIONS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}