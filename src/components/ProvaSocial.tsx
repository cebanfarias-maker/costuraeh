import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

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
  {
    nome: "Ana Oliveira",
    texto: "Esse ateliê é maravilhoso, e a professora Daniela a melhor que eu já tive em todos os sentidos! Aprendemos do básico mesmo, tudo de costura criativa! Eu sou apaixonada!!! Recomendo demais!",
  },
  {
    nome: "Paula David",
    texto: "Nesse espaço costurar e criar são atividades incríveis que podem trazer muitos benefícios para quem as pratica. Além de ser uma forma de expressão artística, a costura e a criação permitem desenvolver habilidades manuais, estimular a criatividade e promover a concentração. Um espaço aconchegante aonde podemos produzir peças únicas, feitas sob medida para atender nossas necessidades e gostos pessoais. Isso nos dá a oportunidade de explorar nossa individualidade e estilo próprio. Além disso, é uma maneira sustentável de consumir moda, pois podemos reutilizar materiais e reduzir o desperdício.",
  },
  {
    nome: "Samantha Cunha",
    texto: "Já vai fazer 7 meses que faço esse curso de costura, as aulas são muito boas, bem explicadinho (desde a anatomia da máquina até como vender as peças), o espaço também é bem aconchegante e tranquilo. Sem contar que a professora é maravilhosa e uma grande amiga. Recomendo super ☺️",
  },
];

const ProvaSocial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-gradient-to-b from-secondary/50 to-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Animated stitch */}
      <div className="absolute top-0 left-0 right-0 stitch-line animate-stitch" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground mb-4">
            O que nossas alunas <span className="text-gradient">dizem</span>
          </h2>
          <p className="section-subtitle">
            Depoimentos reais das nossas alunas
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
            className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card shadow-medium items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-large transition-all z-10"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
            className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card shadow-medium items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-large transition-all z-10"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {depoimentos.map((depoimento, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="card-elevated relative bg-card p-8 md:p-10">
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/15" />
                    
                    <div className="flex items-center gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                      "{depoimento.texto}"
                    </p>
                    
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <span className="text-primary font-semibold text-lg">
                          {depoimento.nome.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-foreground font-medium text-lg">{depoimento.nome}</p>
                        <p className="text-muted-foreground text-sm">Aluna do curso</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {/* Mobile prev button */}
            <button
              onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
              className="md:hidden w-10 h-10 rounded-full bg-card shadow-soft flex items-center justify-center text-muted-foreground"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {depoimentos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? "w-8 bg-primary" 
                    : "w-2.5 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}

            {/* Mobile next button */}
            <button
              onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
              className="md:hidden w-10 h-10 rounded-full bg-card shadow-soft flex items-center justify-center text-muted-foreground"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProvaSocial;
