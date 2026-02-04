import { Heart, Award, Sparkles } from "lucide-react";

const SobreProfessora = () => {
  return (
    <section id="professora" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            Sobre a <span className="text-gradient">Professora</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-elevated">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Placeholder para foto */}
              <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 border-2 border-dashed border-border">
                <div className="text-center">
                  <span className="text-4xl mb-2 block">👩‍🏫</span>
                  <span className="text-muted-foreground/60 text-xs">Foto em breve</span>
                </div>
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
            
            {/* Nota de edição */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-muted-foreground/60 text-xs text-center italic">
                ⚠️ Mais informações e foto da professora serão adicionadas em breve
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreProfessora;
