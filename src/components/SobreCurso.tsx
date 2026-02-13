import { CheckCircle2, Heart, Scissors, Sparkles, User, Wallet } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

const paraQuem = [
  {
    icon: User,
    text: "Para quem nunca tocou em uma máquina",
    description: "Você vai aprender do absoluto zero, sem medo e no seu ritmo."
  },
  {
    icon: Heart,
    text: "Terapia e Hobby Criativo",
    description: "Um momento só seu para relaxar, criar e se desconectar do estresse."
  },
  {
    icon: Wallet,
    text: "Renda Extra e Empreendedorismo",
    description: "Crie peças vendáveis desde as primeiras aulas e comece seu negócio."
  },
  {
    icon: Sparkles,
    text: "Para quem ama exclusividade",
    description: "Faça presentes e peças únicas que ninguém mais vai ter igual."
  },
];

const SobreCurso = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-gradient-to-b from-secondary/50 to-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 stitch-line animate-stitch" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="section-title text-foreground mb-4">
              Sobre o <span className="text-gradient">Curso</span>
            </h2>
            <p className="section-subtitle">
              Descubra um novo mundo de possibilidades com a costura criativa
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Para quem é */}
          <RevealOnScroll className="h-full">
            <div className="card-elevated h-full">
              <h3 className="text-2xl font-display text-foreground mb-8 text-center">
                Para quem é este curso?
              </h3>
              <div className="space-y-6">
                {paraQuem.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.text}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Costura Criativa vs Corte e Costura */}
          <RevealOnScroll className="h-full" delay={0.4}>
            <div className="card-elevated h-full border-2 border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                Foco do Curso
              </div>

              <h3 className="text-2xl font-display text-foreground mb-6 text-center">
                Costura Criativa <span className="text-muted-foreground mx-2 text-lg">vs</span> Corte e Costura
              </h3>

              <p className="text-muted-foreground text-center mb-8 px-4">
                Muitas pessoas confundem, mas são artes diferentes! Entenda o que você vai aprender aqui:
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg text-primary">Costura Criativa (O que ensinamos)</h4>
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">
                    Foco na criação de peças utilitárias e artesanais como <strong>bolsas, necessaires, estojos, jogos americanos</strong> e decoração. É mais livre, permite misturar materiais e o resultado é rápido! Você sai da aula com a peça pronta.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-muted/50 border border-border dashed">
                  <div className="flex items-center gap-3 mb-3">
                    <Scissors className="w-6 h-6 text-muted-foreground" />
                    <h4 className="font-bold text-lg text-muted-foreground">Corte e Costura (Roupas)</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Foco na confecção de roupas sob medida, modelagem de vestuário, caimento e ajustes no corpo. Exige muitas provas e medidas complexas. <strong>Não é o foco deste curso.</strong>
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent/10 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-sm text-foreground font-medium">
                  Aqui você aprende a criar peças incríveis, presentes e produtos para vender, com acabamento profissional!
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 stitch-line animate-stitch" />
    </section>
  );
};

export default SobreCurso;
