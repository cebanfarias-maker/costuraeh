import { useState } from "react";
import { ChevronDown, Play, Clock, BookOpen } from "lucide-react";

interface Modulo {
  numero: number;
  titulo: string;
  descricao: string;
  aulas: number;
  duracao: string;
}

const modulos: Modulo[] = [
  {
    numero: 1,
    titulo: "Conhecendo sua máquina",
    descricao: "Aprenda todas as partes da máquina, como enfiar a linha corretamente e fazer os primeiros pontos com segurança.",
    aulas: 8,
    duracao: "2h",
  },
  {
    numero: 2,
    titulo: "Tecidos e aviamentos",
    descricao: "Entenda os tipos de tecidos, como escolher o ideal para cada projeto e quais aviamentos usar.",
    aulas: 6,
    duracao: "1h30",
  },
  {
    numero: 3,
    titulo: "Leitura e criação de moldes",
    descricao: "Domine a interpretação de moldes prontos e aprenda a criar os seus do zero.",
    aulas: 10,
    duracao: "3h",
  },
  {
    numero: 4,
    titulo: "Técnicas de corte",
    descricao: "Corte tecidos com precisão, aproveitando ao máximo o material e evitando desperdício.",
    aulas: 5,
    duracao: "1h30",
  },
  {
    numero: 5,
    titulo: "Costuras essenciais",
    descricao: "Aprenda os pontos fundamentais: reto, zigue-zague, overlock e acabamentos impecáveis.",
    aulas: 12,
    duracao: "4h",
  },
  {
    numero: 6,
    titulo: "Projetos práticos",
    descricao: "Coloque tudo em prática criando peças completas: nécessaire, bolsa, almofada e mais.",
    aulas: 8,
    duracao: "3h",
  },
  {
    numero: 7,
    titulo: "Costura criativa & renda",
    descricao: "Técnicas avançadas, personalização de peças e como precificar e vender suas criações.",
    aulas: 6,
    duracao: "2h",
  },
];

const Modulos = () => {
  const [openModulo, setOpenModulo] = useState<number | null>(1);

  const totalAulas = modulos.reduce((acc, m) => acc + m.aulas, 0);
  const totalHoras = "17h+";

  return (
    <section id="modulos" className="py-20 md:py-28 bg-muted/30 relative">
      {/* Decorative stitch line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-repeating-linear opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, hsl(174 50% 45%) 0px, hsl(174 50% 45%) 12px, transparent 12px, transparent 24px)`
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Conteúdo completo
          </span>
          <h2 className="section-title text-foreground">
            Estrutura do{" "}
            <span className="text-gradient">curso</span>
          </h2>
          <p className="section-subtitle mt-4">
            7 módulos pensados para te levar do zero à costura profissional
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-foreground">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-semibold">{modulos.length} módulos</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Play className="w-5 h-5 text-primary" />
              <span className="font-semibold">{totalAulas} aulas</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-semibold">{totalHoras} de conteúdo</span>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {modulos.map((modulo) => (
            <div 
              key={modulo.numero}
              className="mb-4"
            >
              <button
                onClick={() => setOpenModulo(openModulo === modulo.numero ? null : modulo.numero)}
                className={`w-full p-5 md:p-6 rounded-2xl text-left transition-all duration-300 ${
                  openModulo === modulo.numero 
                    ? "bg-card shadow-medium" 
                    : "bg-card/50 hover:bg-card hover:shadow-soft"
                }`}
                aria-expanded={openModulo === modulo.numero}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold transition-colors ${
                      openModulo === modulo.numero 
                        ? "bg-gradient-hero text-white" 
                        : "bg-primary/10 text-primary"
                    }`}>
                      {modulo.numero}
                    </span>
                    <h3 className="font-semibold text-foreground text-lg">
                      {modulo.titulo}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      openModulo === modulo.numero ? "rotate-180" : ""
                    }`}
                  />
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openModulo === modulo.numero ? "max-h-40 mt-4" : "max-h-0"
                }`}>
                  <p className="text-muted-foreground pl-14">
                    {modulo.descricao}
                  </p>
                  <div className="flex gap-4 mt-3 pl-14">
                    <span className="text-sm text-primary font-medium">
                      {modulo.aulas} aulas
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {modulo.duracao}
                    </span>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Modalidade info */}
        <div className="mt-12 p-6 md:p-8 bg-card rounded-2xl max-w-3xl mx-auto shadow-soft">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">📹</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-lg mb-1">
                Aulas gravadas + Encontros ao vivo
              </h4>
              <p className="text-muted-foreground">
                Assista no seu ritmo com aulas gravadas e tire dúvidas nos encontros 
                ao vivo semanais. Acesso vitalício a todo o conteúdo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modulos;
