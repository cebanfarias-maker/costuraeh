import { Star, Quote } from "lucide-react";

const depoimentos = [
  {
    nome: "Maria Clara",
    foto: "MC",
    cidade: "São Paulo, SP",
    texto: "Nunca tinha tocado numa máquina de costura e hoje já faço peças para vender! O método é muito didático e a professora tem uma paciência incrível. Recomendo de olhos fechados!",
    estrelas: 5,
    destaque: true,
  },
  {
    nome: "Fernanda Souza",
    foto: "FS",
    cidade: "Campinas, SP",
    texto: "O curso mudou minha vida. Consegui uma renda extra fazendo o que amo. A comunidade de alunas também é maravilhosa, sempre nos apoiando.",
    estrelas: 5,
    destaque: false,
  },
  {
    nome: "Juliana Pereira",
    foto: "JP",
    cidade: "Santos, SP",
    texto: "Achei que seria difícil aprender online, mas as aulas são muito bem explicadas. Os encontros ao vivo tiram todas as dúvidas. Vale muito a pena!",
    estrelas: 5,
    destaque: false,
  },
  {
    nome: "Ana Beatriz",
    foto: "AB",
    cidade: "Guarulhos, SP",
    texto: "Já fiz outros cursos antes, mas esse é diferente. A professora realmente se importa com o aprendizado de cada aluna. Suporte impecável!",
    estrelas: 5,
    destaque: false,
  },
];

const Depoimentos = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative quote marks */}
      <div className="absolute top-20 left-10 text-primary/5 pointer-events-none">
        <Quote className="w-40 h-40" />
      </div>
      <div className="absolute bottom-20 right-10 text-brand-secondary/5 pointer-events-none rotate-180">
        <Quote className="w-32 h-32" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-4">
            Depoimentos reais
          </span>
          <h2 className="section-title text-foreground">
            O que nossas{" "}
            <span className="text-gradient-warm">alunas</span> dizem
          </h2>
          <p className="section-subtitle mt-4">
            Histórias de transformação de quem já passou pelo curso
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {depoimentos.map((dep, index) => (
            <div 
              key={index}
              className={`testimonial-card transition-all duration-300 hover:-translate-y-1 ${
                dep.destaque ? "md:col-span-2 bg-gradient-to-br from-card to-secondary/30" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-semibold text-lg ${
                  dep.destaque 
                    ? "bg-gradient-hero text-white" 
                    : "bg-primary/10 text-primary"
                }`}>
                  {dep.foto}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-foreground">{dep.nome}</h4>
                    <span className="text-sm text-muted-foreground">• {dep.cidade}</span>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(dep.estrelas)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    "{dep.texto}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 p-6 bg-muted/50 rounded-2xl">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-3">
              {["MC", "FS", "JP", "AB", "+"].map((initials, i) => (
                <div 
                  key={i}
                  className={`w-10 h-10 rounded-full border-2 border-background flex items-center justify-center text-sm font-medium ${
                    i === 4 ? "bg-primary text-white" : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {initials}
                </div>
              ))}
            </div>
            <span className="text-muted-foreground ml-2">+500 alunas satisfeitas</span>
          </div>
          
          <div className="h-8 w-px bg-border hidden md:block" />
          
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.9/5</span>
            <span className="text-muted-foreground">avaliação média</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
