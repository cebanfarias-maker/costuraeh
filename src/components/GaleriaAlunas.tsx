import { useState } from "react";
import { X } from "lucide-react";

import alunas1 from "@/assets/alunas-1.jpg";
import alunas2 from "@/assets/alunas-2.jpg";
import alunas3 from "@/assets/alunas-3.webp";
import alunas4 from "@/assets/alunas-4.webp";
import alunas5 from "@/assets/alunas-5.jpg";

const fotos = [
  { src: alunas1, alt: "Aula de costura criativa" },
  { src: alunas2, alt: "Trabalhos das alunas" },
  { src: alunas3, alt: "Momento de aprendizado" },
  { src: alunas4, alt: "Criações do ateliê" },
  { src: alunas5, alt: "Turma de costura" },
];

const GaleriaAlunas = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground">
            Nosso <span className="text-gradient">Espaço</span>
          </h2>
          <p className="section-subtitle mt-4">
            Momentos das nossas aulas e criações
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {fotos.map((foto, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative overflow-hidden rounded-2xl aspect-square cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              aria-label={`Ver foto: ${foto.alt}`}
            >
              <img
                src={foto.src}
                alt={foto.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div 
            className="max-w-4xl max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={fotos[selectedImage].src}
              alt={fotos[selectedImage].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
          
          {/* Navigation dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {fotos.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  selectedImage === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Ver foto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default GaleriaAlunas;
