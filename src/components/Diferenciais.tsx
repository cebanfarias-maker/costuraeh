import { Users, MessageCircle, Award, Clock, Gift, Heart } from "lucide-react";

const diferenciais = [
  {
    icon: <Users className="w-6 h-6" />,
    titulo: "Comunidade exclusiva",
    descricao: "Grupo fechado no WhatsApp com alunas e professora para trocar experiências e tirar dúvidas.",
    destaque: true,
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    titulo: "Suporte direto",
    descricao: "Tire suas dúvidas diretamente com a professora. Nenhuma pergunta fica sem resposta.",
    destaque: false,
  },
  {
    icon: <Award className="w-6 h-6" />,
    titulo: "Certificado de conclusão",
    descricao: "Receba seu certificado ao completar o curso e comprove sua qualificação.",
    destaque: false,
  },
  {
    icon: <Clock className="w-6 h-6" />,
    titulo: "Acesso vitalício",
    descricao: "Assista quantas vezes quiser, para sempre. Inclusive todas as atualizações futuras.",
    destaque: false,
  },
  {
    icon: <Gift className="w-6 h-6" />,
    titulo: "Bônus exclusivos",
    descricao: "Moldes prontos, lista de materiais e fornecedores, e-book de precificação.",
    destaque: true,
  },
  {
    icon: <Heart className="w-6 h-6" />,
    titulo: "Método acolhedor",
    descricao: "Aprenda no seu ritmo, sem pressão. Cada conquista é celebrada junto com você.",
    destaque: false,
  },
];

const Diferenciais = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-warm opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-hero opacity-5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-4">
            Muito além das aulas
          </span>
          <h2 className="section-title text-foreground">
            Por que as alunas{" "}
            <span className="text-gradient-warm">amam</span> este curso
          </h2>
          <p className="section-subtitle mt-4">
            Um método completo pensado para você realmente aprender e se transformar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((item, index) => (
            <div 
              key={index}
              className={`group p-6 rounded-2xl transition-all duration-300 ${
                item.destaque 
                  ? "bg-gradient-hero text-white shadow-glow hover:scale-[1.02]" 
                  : "bg-card hover:shadow-medium hover:-translate-y-1"
              }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                item.destaque 
                  ? "bg-white/20" 
                  : "bg-primary/10"
              }`}>
                <span className={item.destaque ? "text-white" : "text-primary"}>
                  {item.icon}
                </span>
              </div>
              
              <h3 className={`font-semibold text-lg mb-2 ${
                item.destaque ? "text-white" : "text-foreground"
              }`}>
                {item.titulo}
              </h3>
              
              <p className={item.destaque ? "text-white/90" : "text-muted-foreground"}>
                {item.descricao}
              </p>
            </div>
          ))}
        </div>

        {/* Tempo médio para resultados */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-secondary/50 rounded-2xl">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-3xl">⏱️</span>
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Tempo médio para resultados</p>
              <p className="text-2xl font-display font-bold text-foreground">
                30 dias para criar sua primeira peça completa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
