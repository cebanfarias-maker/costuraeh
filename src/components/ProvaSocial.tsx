import { Star, MessageSquare, Camera } from "lucide-react";

const ProvaSocial = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            O que nossas alunas <span className="text-gradient">dizem</span>
          </h2>
          <p className="section-subtitle">
            Depoimentos reais das nossas alunas
          </p>
        </div>

        {/* Placeholder cards para depoimentos futuros */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3].map((index) => (
            <div 
              key={index}
              className="card-elevated border-2 border-dashed border-border bg-background/50"
            >
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-muted-foreground/30" />
                ))}
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-5 h-5 text-muted-foreground/40" />
                <span className="text-muted-foreground/60 text-sm italic">
                  Depoimento em breve...
                </span>
              </div>
              
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground/40 text-lg">👤</span>
                </div>
                <div>
                  <p className="text-muted-foreground/60 text-sm">Nome da aluna</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota sobre conteúdo futuro */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent">
            <Camera className="w-4 h-4" />
            <span className="text-sm">Mais avaliações e fotos serão adicionadas em breve</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvaSocial;
