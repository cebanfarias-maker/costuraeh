import { Sparkles, Heart, Recycle } from "lucide-react";

const Manifesto = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 sewing-pattern opacity-50" />
      
      {/* Decorative stitch lines */}
      <div className="absolute top-0 left-0 right-0 stitch-line animate-stitch" />
      <div className="absolute bottom-0 left-0 right-0 stitch-line animate-stitch" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Manifesto Card */}
          <div className="manifesto-card rounded-3xl p-8 md:p-12 lg:p-16 shadow-large">
            {/* Decorative icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            {/* Quote marks */}
            <div className="text-6xl md:text-8xl text-primary/20 font-display leading-none text-center mb-4">
              "
            </div>
            
            {/* Main Text */}
            <div className="space-y-6 text-center">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                O espaço <span className="font-semibold text-primary">CosturaEh</span> foi criado pensando em trazer de volta o hábito da costura como parte do dia a dia. Mostrar o quanto é simples e fácil essa prática. E principalmente, quantos benefícios carrega.
              </p>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                O prazer de passar momentos agradáveis com as amigas, a descoberta de talentos adormecidos, lembranças de infância, o manuseio de tecidos e aviamentos. <span className="italic text-accent">Enfim só coisas boas!</span>
              </p>
              
              <div className="py-6">
                <p className="text-2xl md:text-3xl font-display text-primary">
                  Desafie seu talento!<br />
                  <span className="text-accent">Venha costurar com a gente!</span>
                </p>
              </div>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                O curso que temos aqui é de <span className="font-semibold">Costura Criativa</span>!
              </p>
            </div>
            
            {/* Closing quote */}
            <div className="text-6xl md:text-8xl text-primary/20 font-display leading-none text-center mt-4 rotate-180">
              "
            </div>
            
            {/* Additional Services */}
            <div className="mt-10 pt-8 border-t border-border/50">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card/50">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Reparos e Consertos</span><br />
                    Também oferecemos serviço de reparos e consertos de roupas
                  </p>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card/50">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Recycle className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Sustentabilidade</span><br />
                    Preocupação com o descarte correto de resíduos de costura
                  </p>
                </div>
              </div>
            </div>
            
            {/* Founded badge */}
            <div className="mt-8 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Ateliê fundado em 2018
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
