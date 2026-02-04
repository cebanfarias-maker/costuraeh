import { BookOpen, Layers } from "lucide-react";

const EstruturaCurso = () => {
  return (
    <section id="estrutura" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            Estrutura do <span className="text-gradient">Curso</span>
          </h2>
          <p className="section-subtitle">
            Organização das aulas para seu aprendizado
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Módulo 1 */}
          <div className="card-elevated">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display text-foreground">Módulo 1</h3>
                <p className="text-muted-foreground text-sm">5 aulas práticas</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Fundamentos da costura e uso da máquina
            </p>
          </div>

          {/* Módulo 2 */}
          <div className="card-elevated">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                <Layers className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-display text-foreground">Módulo 2</h3>
                <p className="text-muted-foreground text-sm">5 aulas práticas</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Técnicas avançadas e acabamentos
            </p>
          </div>
        </div>

        {/* Info adicional */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            O conteúdo detalhado de cada módulo será apresentado durante a aula experimental
          </p>
        </div>
      </div>
    </section>
  );
};

export default EstruturaCurso;
