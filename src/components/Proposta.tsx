import { Heart, Users, Sparkles } from "lucide-react";

const Proposta = () => {
  const destaques = [
    {
      icon: <Heart className="w-6 h-6" />,
      titulo: "Espaço Acolhedor",
      descricao: "Um ambiente inclusivo que acolhe a comunidade LGBTQ+ e todas as pessoas.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      titulo: "Turmas Reduzidas",
      descricao: "Atenção individual para cada aluno, respeitando o ritmo de aprendizado.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      titulo: "Empreendedorismo",
      descricao: "Empresa de empreendedoras, feita para inspirar e transformar.",
    },
  ];

  return (
    <section id="proposta" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground">
            Por que a <span className="text-gradient">CosturaEh</span>?
          </h2>
          <p className="section-subtitle mt-4">
            Mais do que aulas de costura, um espaço de criatividade e acolhimento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {destaques.map((item, index) => (
            <div 
              key={index}
              className="card-elevated text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary">{item.icon}</span>
              </div>
              
              <h3 className="font-medium text-lg mb-2 text-foreground">
                {item.titulo}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proposta;
