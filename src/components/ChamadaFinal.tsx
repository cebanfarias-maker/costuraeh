import { MessageCircle, MapPin, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "5511993223183";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim pelo site e quero saber sobre as aulas de costura, por favor.");

const ChamadaFinal = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
            Comece sua jornada na costura
          </h2>
          
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agende uma aula experimental e descubra como a costura pode transformar 
            sua vida — seja por hobby ou para gerar renda extra.
          </p>
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-full font-medium text-lg shadow-medium hover:shadow-large transition-all hover:-translate-y-1"
            aria-label="Agendar aula experimental no WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
            Quero saber mais no WhatsApp
          </a>
          
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-primary-foreground/80 text-sm">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              R. Gen. Nestor Passos, 256 - Jardim Paraíso, SP
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Seg a Sex: 14h às 18h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChamadaFinal;
