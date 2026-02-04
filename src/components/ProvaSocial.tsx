import { Star, Quote } from "lucide-react";

const depoimentos = [
  {
    nome: "Carolina",
    texto: "Um ateliê lindo e uma professora maravilhosa!!! Assim defino o curso. Eu não sabia nem colocar uma linha na máquina de costura. Gostei tanto que acabei comprando uma máquina de costura para usar em casa e colocar em prática tudo que aprendi com a Dani. É um curso totalmente personalizado, gostoso o que torna fácil o aprender. E ainda somos recebidas com chá, bolachas e muito carinho e amor pela Dona. Super indico o curso!!",
  },
  {
    nome: "Dvany Silva",
    texto: "Acabo o meu curso hoje, mas já posso afirmar que não poderia ter escolhido um lugar melhor pra aprender. Desde o primeiro dia, me senti super à vontade e a Daniela é super carinhosa e paciente, entende que somos iniciantes e entende os nossos medos, nos respeitando, entendendo nossas dificuldades e sempre nos orientando de forma individual. Me apaixonei pela costura criativa, muito divertido e gratificante ver cada etapa do processo se tornar uma linda peça, e desde a primeira aula, já sai com uma arte sua. Sem enrolação, logo na primeira aula você já faz um projeto e vê que é possível criar. Amei a Daniela, Amei o espaço. Recomendaria pra todos, sem dúvida nenhuma.",
  },
  {
    nome: "Grazielly Marques",
    texto: "Acabei meu curso hoje, e não poderia ter escolhido outro melhor! A professora, Daniela, um amor de pessoa, me ensinou tudo que sabia, foi mais que uma professora, foi uma amiga. O local super aconchegante, me senti em casa, ela me deixou super a vontade como se o ateliê fosse meu. Foi maravilhoso ter essa experiência, só me fez me apaixonar mais pela costura! Antes não sabia colocar uma linha na agulha, mas graças a professora hoje eu sei mais do que colocar linha na agulha 😂 Muito obrigada, Dani, pelo carinho e aprendizado, foi incrível! ❤️",
  },
  {
    nome: "Amanda Piovezan",
    texto: "O curso inicial tem cinco aulas... todas as aulas saímos com uma peça feita, isso motiva bastante. O Local é lindo, organizado e inspirador. A professora é atenciosa, tem didática, paciente e um amor de pessoa... amei ter conhecido a Dani ❤️ Os projetos são lindos, úteis e diferentes dificuldades. Aprendi a colocar zíper, botão de pressão, utilizar manta, recortar no molde, montar a peça, entre outros aprendizados como treinar a costura na máquina. Utilizei diferentes máquinas, podendo ter a experiência para escolher qual comprar. Amei que o curso tem uma formatura para quem finaliza o módulo inicial, isso mostra a dedicação e carinho da professora pelo que faz. Este curso também foi muito afetivo pra mim... me ajudou a lidar com o luto da minha vó que era costureira ❤️",
  },
];

const ProvaSocial = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            O que nossas alunas <span className="text-gradient">dizem</span>
          </h2>
          <p className="section-subtitle">
            Depoimentos reais das nossas alunas
          </p>
        </div>

        {/* Depoimentos reais */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {depoimentos.map((depoimento, index) => (
            <div 
              key={index}
              className="card-elevated relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{depoimento.texto}"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-primary font-medium text-sm">
                    {depoimento.nome.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm">{depoimento.nome}</p>
                  <p className="text-muted-foreground text-xs">Aluna do curso</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota sobre mais avaliações */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent">
            <span className="text-sm">✨ Mais avaliações e fotos serão adicionadas em breve</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvaSocial;
