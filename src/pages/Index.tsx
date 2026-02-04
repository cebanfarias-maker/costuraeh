import { useEffect } from "react";
import Hero from "@/components/Hero";
import SobreCurso from "@/components/SobreCurso";
import ComoFunciona from "@/components/ComoFunciona";
import EstruturaCurso from "@/components/EstruturaCurso";
import Diferenciais from "@/components/Diferenciais";
import GaleriaAlunas from "@/components/GaleriaAlunas";
import ProvaSocial from "@/components/ProvaSocial";
import SobreProfessora from "@/components/SobreProfessora";
import Localizacao from "@/components/Localizacao";
import ChamadaFinal from "@/components/ChamadaFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  useEffect(() => {
    // Schema.org for local business
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "CosturaEh Costura Criativa",
      description: "Curso de Costura Criativa para Iniciantes - Aulas presenciais em São Paulo com atendimento individual",
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Gen. Nestor Passos, 256",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        postalCode: "02417-140",
        addressCountry: "BR",
      },
      telephone: "+55-11-99322-3183",
      openingHours: ["Mo-Fr 14:00-18:00"],
      priceRange: "$$",
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <SobreCurso />
      <ComoFunciona />
      <EstruturaCurso />
      <Diferenciais />
      <GaleriaAlunas />
      <ProvaSocial />
      <SobreProfessora />
      <Localizacao />
      <ChamadaFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
