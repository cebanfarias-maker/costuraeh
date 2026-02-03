import { useEffect } from "react";
import Hero from "@/components/Hero";
import Proposta from "@/components/Proposta";
import Modulos from "@/components/Modulos";
import Diferenciais from "@/components/Diferenciais";
import GaleriaAlunas from "@/components/GaleriaAlunas";
import Depoimentos from "@/components/Depoimentos";
import SobreProfessora from "@/components/SobreProfessora";
import Oferta from "@/components/Oferta";
import ChamadaFinal from "@/components/ChamadaFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  useEffect(() => {
    // Add structured data for SEO
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Curso de Costura Criativa",
      description: "Aprenda costura do zero e transforme sua habilidade em renda. Curso completo com 7 módulos, 55+ aulas e suporte personalizado.",
      provider: {
        "@type": "Person",
        name: "Professora de Costura Criativa",
      },
      offers: {
        "@type": "Offer",
        price: "497",
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "500",
      },
    });
    document.head.appendChild(script);

    // Add Organization schema
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Costura Criativa",
      description: "Escola de costura online para iniciantes e avançadas",
      url: window.location.origin,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-11-99322-3183",
        contactType: "customer service",
        availableLanguage: "Portuguese",
      },
    });
    document.head.appendChild(orgScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(orgScript);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <Proposta />
      <Modulos />
      <Diferenciais />
      <GaleriaAlunas />
      <Depoimentos />
      <SobreProfessora />
      <Oferta />
      <ChamadaFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
