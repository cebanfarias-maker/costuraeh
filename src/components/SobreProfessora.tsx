import { Heart, Award, Sparkles } from "lucide-react";
import professoraDani from "@/assets/professora-dani.png";

const SobreProfessora = () => {
  return (
    <section id="professora" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      
      {/* Animated stitch line */}
      <div className="absolute top-0 left-0 right-0 stitch-line animate-stitch" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            Sobre a <span className="text-gradient">Professora</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-elevated">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Foto da professora */}
              <div className="w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0 shadow-medium ring-4 ring-primary/20">
                <img 
                  src={professoraDani} 
                  alt="Professora Daniela (Dani) - CosturaEh" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bio */}
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-display text-foreground mb-4">
                  Daniela (Dani)
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  Professora apaixonada por ensinar costura criativa, reconhecida pelo carinho, 
                  paciência e atenção individual que dedica a cada aluna. Seu ateliê é descrito 
                  pelas alunas como um espaço acolhedor, onde são recebidas com chá, bolachas e muito amor.
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm">
                    <Heart className="w-4 h-4" />
                    Apaixonada por ensinar
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm">
                    <Award className="w-4 h-4" />
                    Ensino personalizado
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm">
                    <Sparkles className="w-4 h-4" />
                    Costura criativa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 stitch-line animate-stitch" />
    </section>
  );
};

export default SobreProfessora;
