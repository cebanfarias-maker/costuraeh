import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "5511993223183";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim pelo site e quero saber sobre o curso de costura, por favor.");

const ChamadaFinal = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-brand-secondary/5" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative sewing elements */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <span className="text-6xl">🧵</span>
              <div className="absolute -right-4 -top-2 w-3 h-3 bg-brand-secondary rounded-full animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Sua jornada na costura{" "}
            <span className="text-gradient">começa agora</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Não deixe para depois o que pode transformar sua vida hoje. 
            Junte-se a mais de 500 mulheres que já descobriram o poder da costura.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg px-8 py-5 group"
              aria-label="Quero saber mais no WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
              Quero saber mais no WhatsApp
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Tire suas dúvidas diretamente com a professora • Resposta rápida
          </p>
          
          {/* Trust elements */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Vagas limitadas
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Acesso imediato
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-secondary rounded-full" />
              Garantia de 7 dias
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChamadaFinal;
