import { useEffect } from "react";
import Hero from "@/components/Hero";
import Proposta from "@/components/Proposta";
import GaleriaAlunas from "@/components/GaleriaAlunas";
import ChamadaFinal from "@/components/ChamadaFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  useEffect(() => {
    // Schema.org for local business
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "CosturaEh Costura Criativa",
      description: "Aulas de costura criativa para adultos e crianças em São Paulo",
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Gen. Nestor Passos, 256",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        postalCode: "02417-140",
        addressCountry: "BR",
      },
      telephone: "+55-11-99322-3183",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "32",
      },
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <Proposta />
      <GaleriaAlunas />
      <ChamadaFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
