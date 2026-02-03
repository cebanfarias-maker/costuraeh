import { useState } from "react";
import { X } from "lucide-react";

import alunas1 from "@/assets/alunas-1.jpg";
import alunas2 from "@/assets/alunas-2.jpg";
import alunas3 from "@/assets/alunas-3.webp";
import alunas4 from "@/assets/alunas-4.webp";
import alunas5 from "@/assets/alunas-5.jpg";

const fotos = [
  {
    src: alunas1,
    alt: "Turma de alunas em momento de confraternização no ateliê",
    caption: "Nosso espaço acolhedor e as amigas que você faz aqui",
  },
  {
    src: alunas2,
    alt: "Alunas exibindo almofadas que criaram no curso",
    caption: "Primeiras peças prontas! Orgulho das nossas alunas",
  },
  {
    src: alunas3,
    alt: "Alunas concentradas nas máquinas de costura durante aula prática",
    caption: "Aulas práticas com turmas pequenas e atenção individual",
  },
  {
    src: alunas4,
    alt: "Professora demonstrando técnicas de modelagem para turma",
    caption: "Aprendendo modelagem do zero com método exclusivo",
  },
  {
    src: alunas5,
    alt: "Ateliê cheio de peças coloridas feitas pelas alunas",
    caption: "O ateliê ganha vida com as criações das alunas",
  },
];

const GaleriaAlunas = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="alunas" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Decorative yarn elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-brand-secondary/10 animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-primary/10 animate-float" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nossa comunidade
          </span>
          <h2 className="section-title text-foreground">
            Conheça nossas{" "}
            <span className="text-gradient">alunas</span>
          </h2>
          <p className="section-subtitle mt-4">
            Veja momentos reais das nossas aulas e o que você vai encontrar por aqui
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {fotos.map((foto, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`group relative overflow-hidden rounded-2xl aspect-square cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-large ${
                index === 2 ? "md:col-span-1 lg:col-span-1 md:row-span-1" : ""
              }`}
              aria-label={`Ver foto: ${foto.alt}`}
            >
              <img
                src={foto.src}
                alt={foto.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {foto.caption}
              </div>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "500+", label: "Alunas formadas" },
            { number: "4.9", label: "Avaliação média" },
            { number: "97%", label: "Recomendam" },
            { number: "7", label: "Anos de experiência" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-2xl shadow-soft">
              <p className="text-3xl md:text-4xl font-display font-bold text-primary">
                {stat.number}
              </p>
              <p className="text-muted-foreground mt-1">{stat.label}</p>
            </div>
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
            <p className="text-white text-center mt-4 text-lg">
              {fotos[selectedImage].caption}
            </p>
          </div>
          
          {/* Navigation */}
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
