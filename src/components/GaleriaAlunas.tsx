import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
  const [mobileIndex, setMobileIndex] = useState(0);

  const nextMobileSlide = useCallback(() => {
    setMobileIndex((prev) => (prev + 1) % fotos.length);
  }, []);

  const prevMobileSlide = useCallback(() => {
    setMobileIndex((prev) => (prev - 1 + fotos.length) % fotos.length);
  }, []);

  // Auto-play for mobile carousel
  useEffect(() => {
    const interval = setInterval(nextMobileSlide, 5000);
    return () => clearInterval(interval);
  }, [nextMobileSlide]);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-background relative">
      {/* Decorative stitch line */}
      <div className="absolute top-0 left-0 right-0 stitch-line" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground">
            Nosso <span className="text-gradient">Espaço</span>
          </h2>
          <p className="section-subtitle mt-4">
            Momentos das nossas aulas e criações
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
            >
              {fotos.map((foto, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <button
                    onClick={() => setSelectedImage(index)}
                    className="w-full aspect-square relative overflow-hidden"
                    aria-label={`Ver foto: ${foto.alt}`}
                  >
                    <img
                      src={foto.src}
                      alt={foto.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex justify-center items-center gap-3 mt-6">
            <button
              onClick={prevMobileSlide}
              className="w-10 h-10 rounded-full bg-card shadow-soft flex items-center justify-center text-muted-foreground"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {fotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setMobileIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  mobileIndex === index 
                    ? "w-8 bg-primary" 
                    : "w-2.5 bg-primary/30"
                }`}
                aria-label={`Ver foto ${index + 1}`}
              />
            ))}

            <button
              onClick={nextMobileSlide}
              className="w-10 h-10 rounded-full bg-card shadow-soft flex items-center justify-center text-muted-foreground"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-4 max-w-5xl mx-auto">
          {fotos.map((foto, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative overflow-hidden rounded-2xl aspect-square cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-large ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
              aria-label={`Ver foto: ${foto.alt}`}
            >
              <img
                src={foto.src}
                alt={foto.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>

        {/* Placeholder for more photos */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            📸 Mais fotos do curso serão adicionadas em breve
          </p>
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

          {/* Prev/Next in Lightbox */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((selectedImage - 1 + fotos.length) % fotos.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((selectedImage + 1) % fotos.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
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
