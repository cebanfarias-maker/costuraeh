import { Heart } from "lucide-react";

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
                O prazer de passar momentos agradáveis com as amigas, a descoberta de talentos adormecidos, lembranças de infância, o manuseio de tecidos e aviamentos. <span className="italic text-accent font-medium">Enfim só coisas boas!</span>
              </p>
              
              <div className="py-6 px-4 md:px-8 bg-primary/5 rounded-2xl">
                <p className="text-2xl md:text-3xl font-display text-primary mb-3">
                  Desafie seu talento!
                </p>
                <p className="text-xl md:text-2xl font-display text-accent">
                  Venha costurar com a gente!
                </p>
              </div>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                O curso que temos aqui é de <span className="font-semibold text-primary">Costura Criativa</span>!
              </p>

              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Ah, e aqui também oferecemos serviço de <span className="font-semibold">reparos e consertos de roupas</span>!
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                O espaço também tem uma preocupação com os resíduos resultantes dos processos de costura, procurando o descarte correto.
              </p>
            </div>
            
            {/* Closing quote */}
            <div className="text-6xl md:text-8xl text-primary/20 font-display leading-none text-center mt-4 rotate-180">
              "
            </div>
            
            {/* Founded badge */}
            <div className="mt-8 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
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
