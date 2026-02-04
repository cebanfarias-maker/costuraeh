import { MessageCircle, MapPin } from "lucide-react";
import heroImage from "@/assets/alunas-3.webp";

const WHATSAPP_NUMBER = "5511993223183";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim pelo site e quero saber sobre as aulas de costura, por favor.");

const Hero = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section className="relative min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm mb-6 animate-fade-in">
              <MapPin className="w-4 h-4" />
              <span>São Paulo • Jardim Paraíso</span>
            </div>
            
            <h1 className="section-title text-foreground mb-6 animate-fade-in delay-100">
              Curso de{" "}
              <span className="text-gradient">Costura Criativa</span>{" "}
              para Iniciantes
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in delay-200">
              Aulas presenciais com atendimento individual. Aprenda no seu ritmo, 
              com atenção personalizada e todo o carinho que você merece.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-300">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                aria-label="Agendar aula experimental no WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar aula experimental
              </a>
              
              <a href="#galeria" className="btn-outline">
                Ver trabalhos das alunas
              </a>
            </div>
            
            {/* Info badges */}
            <div className="flex flex-wrap items-center gap-4 mt-10 justify-center lg:justify-start text-sm text-muted-foreground animate-fade-in delay-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                100% Presencial
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Atendimento Individual
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Agende seus horários
              </span>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="Aula presencial de costura criativa"
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="eager"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-card rounded-2xl p-4 shadow-medium border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🧵</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">CosturaEh</p>
                  <p className="text-sm text-muted-foreground">Costura Criativa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
