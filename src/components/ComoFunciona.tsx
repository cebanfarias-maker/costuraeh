import { Clock, Calendar, CalendarDays, MapPin } from "lucide-react";

const infoCards = [
  {
    icon: Calendar,
    title: "5 Aulas",
    description: "Total de aulas do curso",
  },
  {
    icon: Clock,
    title: "2 Horas",
    description: "Duração de cada aula",
  },
  {
    icon: CalendarDays,
    title: "40 Dias",
    description: "Prazo máximo para concluir",
  },
  {
    icon: MapPin,
    title: "Presencial",
    description: "100% presencial em São Paulo",
  },
];

const horarios = [
  "14h às 16h",
  "16h às 18h",
];

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 sewing-pattern opacity-40" />
      
      {/* Animated stitch line */}
      <div className="absolute top-0 left-0 right-0 stitch-line animate-stitch" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            Como <span className="text-gradient">Funcionam</span> as Aulas
          </h2>
          <p className="section-subtitle">
            Flexibilidade para você agendar no seu tempo
          </p>
        </div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {infoCards.map((card, index) => (
            <div 
              key={index}
              className="card-elevated text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Como funciona detalhado */}
        <div className="max-w-3xl mx-auto">
          <div className="card-elevated bg-card">
            <h3 className="text-2xl font-display text-foreground mb-6 text-center">
              Agendamento Flexível
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-sm font-medium">1</span>
                </span>
                <span><strong className="text-foreground">Não existem turmas fixas.</strong> Cada aluna agenda suas aulas conforme sua disponibilidade.</span>
              </p>
              
              <p className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-sm font-medium">2</span>
                </span>
                <span><strong className="text-foreground">Horários disponíveis:</strong> {horarios.join(" ou ")}</span>
              </p>
              
              <p className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-sm font-medium">3</span>
                </span>
                <span><strong className="text-foreground">Funcionamento:</strong> Segunda a Sexta das 14h às 18h</span>
              </p>
              
              <p className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent text-sm">⚠</span>
                </span>
                <span className="text-accent-foreground">Não há aulas aos sábados e domingos</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
