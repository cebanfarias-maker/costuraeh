import { CheckCircle2, User, Sparkles, Wallet } from "lucide-react";

const paraQuem = [
  { icon: User, text: "Pessoas iniciantes na costura" },
  { icon: Sparkles, text: "Quem deseja aprender a usar a máquina de costura" },
  { icon: CheckCircle2, text: "Quem busca uma nova habilidade" },
  { icon: Wallet, text: "Quem quer gerar renda extra com costura" },
];

const oQueAprende = [
  "Uso correto da máquina de costura",
  "Como colocar zíper",
  "Costura de segurança",
  "Como usar moldes",
  "Canto do leite",
  "Confecção de aba",
  "Confecção de alças",
  "Aplicação de bolso",
  "Costura à mão",
  "Colocação de botão de pressão",
  "Costura em peças redondas",
];

const SobreCurso = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 stitch-line" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            Sobre o <span className="text-gradient">Curso</span>
          </h2>
          <p className="section-subtitle">
            Tudo que você precisa saber sobre o curso presencial de costura criativa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Para quem é */}
          <div className="card-elevated">
            <h3 className="text-2xl font-display text-foreground mb-6">
              Para quem é o curso?
            </h3>
            <div className="space-y-4">
              {paraQuem.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-xl bg-background/50"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* O que aprende */}
          <div className="card-elevated">
            <h3 className="text-2xl font-display text-foreground mb-6">
              O que você aprende
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {oQueAprende.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl bg-background/50"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 stitch-line" />
    </section>
  );
};

export default SobreCurso;
