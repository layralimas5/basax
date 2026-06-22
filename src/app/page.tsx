import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Culturas } from "@/components/Culturas";
import { About } from "@/components/About";
import { Beneficios } from "@/components/Beneficios";
import { SoilPotential } from "@/components/SoilPotential";
import { Comparativo } from "@/components/Comparativo";
import { Diferenciais } from "@/components/Diferenciais";
import { ImpactoTecnico } from "@/components/ImpactoTecnico";
import { Tecnologia } from "@/components/Tecnologia";
import { Fechamento } from "@/components/Fechamento";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Culturas />
        <About />
        <Beneficios />
        <SoilPotential />
        <Comparativo />
        <Diferenciais />
        <ImpactoTecnico />
        <Tecnologia />
        <Fechamento />
      </main>
      <Footer />
    </>
  );
}
