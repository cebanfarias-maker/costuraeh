import { MessageCircle, ChevronDown } from "lucide-react";
import heroImage from "@/assets/alunas-3.webp";

const WHATSAPP_NUMBER = "5511993223183";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim pelo site e quero saber sobre o curso de costura, por favor.");

const Hero = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section className="hero-section relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern - Decorative yarn balls */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="yarn-ball w-32 h-32 top-20 left-10 animate-float opacity-10" />
        <div className="yarn-ball w-24 h-24 top-40 right-20 animate-float-delayed opacity-15" />
        <div className="yarn-ball w-16 h-16 bottom-40 left-1/4 animate-float-slow opacity-10" />
        <div className="yarn-ball w-20 h-20 bottom-20 right-1/3 animate-float opacity-10" />
        
        {/* Subtle stitch pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 20px
            )`
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left text-white order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse" />
              <span className="text-sm font-medium">+ de 500 alunas transformadas</span>
            </div>
            
            <h1 className="hero-title text-white mb-6 animate-slide-up">
              Aprenda costura do zero e{" "}
              <span className="relative inline-block">
                transforme
                <svg 
                  className="absolute -bottom-2 left-0 w-full h-3 text-brand-secondary/60" 
                  viewBox="0 0 200 12" 
                  fill="none"
                  aria-hidden="true"
                >
                  <path 
                    d="M2 8 Q50 2 100 8 T198 8" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    strokeDasharray="8 6"
                    className="animate-sew"
                  />
                </svg>
              </span>{" "}
              sua habilidade em renda
            </h1>
            
            <p className="hero-subtitle text-white/90 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up delay-100">
              Curso passo a passo, para quem quer costurar por hobby ou 
              construir uma fonte de renda criativa. Do básico ao avançado, 
              com suporte e comunidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up delay-200">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero group"
                aria-label="Quero saber mais no WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-whatsapp group-hover:animate-pulse" />
                Quero saber mais no WhatsApp
              </a>
              
              <a
                href="#modulos"
                className="btn-secondary-outline"
              >
                Ver conteúdo do curso
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start animate-fade-in delay-300">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.9/5 avaliação</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Acesso vitalício</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Garantia 7 dias</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative order-1 lg:order-2 animate-scale-in">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-white/10 rounded-3xl rotate-3 backdrop-blur-sm" />
              <div className="absolute -inset-4 bg-brand-secondary/20 rounded-3xl -rotate-2" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Alunas do curso de costura em aula prática"
                  className="w-full h-auto object-cover aspect-square md:aspect-[4/3]"
                  loading="eager"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 md:bottom-6 md:-right-6 bg-white rounded-2xl p-4 shadow-large animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-2xl">🧵</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Turmas ao vivo</p>
                    <p className="text-sm text-muted-foreground">Todo sábado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#proposta" className="text-white/60 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
      
      {/* Decorative sewing line at bottom */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-8 text-background" 
        viewBox="0 0 1440 32" 
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M0 32L1440 32L1440 0C1200 20 960 8 720 16C480 24 240 12 0 24L0 32Z" />
      </svg>
    </section>
  );
};

export default Hero;
