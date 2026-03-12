import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 border-t border-blue-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        {/* Marca */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">
            Daxora <span className="text-blue-600">Digital</span>
          </h2>

          <p className="text-gray-400">
            Criamos sites modernos, rápidos e profissionais para empresas que
            querem crescer no digital.
          </p>
        </div>

        {/* Navegação */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold mb-2">Navegação</h3>

          <Link href="/" className="hover:text-blue-600 transition">
            Início
          </Link>

          <Link href="/#sobre" className="hover:text-blue-600 transition">
            Sobre
          </Link>

          <Link href="/#servicos" className="hover:text-blue-600 transition">
            Serviços
          </Link>

          <Link href="/#pacotes" className="hover:text-blue-600 transition">
            Pacotes
          </Link>

          <Link href="/#portfolio" className="hover:text-blue-600 transition">
            Portfólio
          </Link>
        </div>

        {/* Empresa */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold mb-2">Empresa</h3>

          <Link href="/#faq" className="hover:text-blue-600 transition">
            FAQ
          </Link>

          <Link href="/#contato" className="hover:text-blue-600 transition">
            Contato
          </Link>

          <Link href="#" className="hover:text-blue-600 transition">
            Política de Privacidade
          </Link>

          <Link href="#" className="hover:text-blue-600 transition">
            Termos de Uso
          </Link>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-white font-semibold mb-4">Conecte-se</h3>

          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-600 transition">
              <i className="fab fa-facebook"></i>
            </a>

            <a href="#" className="hover:text-blue-600 transition">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="#" className="hover:text-blue-600 transition">
              <i className="fab fa-linkedin"></i>
            </a>

            <a href="#" className="hover:text-blue-600 transition">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-900 text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Daxora Digital. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
