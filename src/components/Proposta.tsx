import { Check, Users, Sparkles, TrendingUp } from "lucide-react";

const Proposta = () => {
  const aprendizados = [
    "Dominar a máquina de costura (mesmo sem experiência)",
    "Interpretar e criar seus próprios moldes",
    "Costurar peças completas do início ao fim",
    "Técnicas de acabamento profissional",
    "Precificar e vender suas criações",
  ];

  const personas = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Iniciantes absolutas",
      description: "Nunca tocou numa máquina? Perfeito! O curso foi feito pensando em você.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Hobistas criativas",
      description: "Quer transformar tecidos em peças únicas para você e sua família.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Empreendedoras",
      description: "Sonha em ter sua própria renda com costura artesanal.",
    },
  ];

  return (
    <section id="proposta" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Por que este curso?
          </span>
          <h2 className="section-title text-foreground">
            Tudo que você precisa para{" "}
            <span className="text-gradient">costurar com confiança</span>
          </h2>
          <p className="section-subtitle mt-4">
            Um método testado e aprovado por centenas de alunas que, como você, 
            começaram do zero.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* O que você vai aprender */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
              O que você vai aprender
            </h3>
            <ul className="space-y-4">
              {aprendizados.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card hover:bg-secondary/30 transition-colors group"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Check className="w-4 h-4 text-primary group-hover:text-white" />
                  </span>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Para quem é */}
          <div className="animate-slide-up delay-200">
            <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
              Este curso é para você se...
            </h3>
            <div className="space-y-4">
              {personas.map((persona, index) => (
                <div 
                  key={index}
                  className="card-elevated group cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-hero text-white flex items-center justify-center shadow-soft">
                      {persona.icon}
                    </span>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{persona.title}</h4>
                      <p className="text-muted-foreground text-sm">{persona.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transformação */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-hero text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white rounded-full" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white rounded-full" />
            <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white rounded-full" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              A transformação que você vai viver
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              Em poucas semanas, você vai sair de "não sei nem enfiar a linha" para 
              criar peças incríveis — e ainda poder ganhar dinheiro com isso. 
              <strong className="text-white"> Sem complicação, no seu ritmo.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposta;
