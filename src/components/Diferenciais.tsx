import { Heart, Eye, Users, Sparkles } from "lucide-react";

const diferenciais = [
  {
    icon: Users,
    title: "Atendimento Individual",
    description: "Cada aluna recebe atenção exclusiva durante as aulas",
  },
  {
    icon: Eye,
    title: "Aula Olho no Olho",
    description: "Ensino presencial com acompanhamento direto",
  },
  {
    icon: Heart,
    title: "Carinho e Atenção",
    description: "Ambiente acolhedor com respeito ao seu ritmo",
  },
  {
    icon: Sparkles,
    title: "Ensino Personalizado",
    description: "Foco na sua necessidade específica de aprendizado",
  },
];

const Diferenciais = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            Nossos <span className="text-gradient">Diferenciais</span>
          </h2>
          <p className="section-subtitle">
            O que torna nosso curso especial
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {diferenciais.map((item, index) => (
            <div 
              key={index}
              className="card-elevated text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-display text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
