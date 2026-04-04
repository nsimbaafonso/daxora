import Hero from "@/components/home/Hero";
import Servicos from "@/components/home/Servicos";
import Pacotes from "@/components/home/Pacotes";
import Portfolio from "@/components/home/Portfolio";
import Faq from "@/components/home/Faq";
import Contato from "@/components/home/Contato";

export const metadata = {
  title: "Daxorya Digital",
  description: "A página que você está procurando não foi encontrada.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Servicos />
      <Pacotes />
      <Portfolio />
      <Faq />
      <Contato />
    </>
  );
}
