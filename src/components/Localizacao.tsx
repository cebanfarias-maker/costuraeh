import { MapPin, Clock, Phone, Instagram } from "lucide-react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511993223183";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim pelo site e quero saber sobre as aulas de costura, por favor.");

const horarioFuncionamento = [
  { dia: "Segunda-feira", horario: "14h às 18h" },
  { dia: "Terça-feira", horario: "14h às 18h" },
  { dia: "Quarta-feira", horario: "14h às 18h" },
  { dia: "Quinta-feira", horario: "14h às 18h" },
  { dia: "Sexta-feira", horario: "14h às 18h" },
  { dia: "Sábado", horario: "Fechado" },
  { dia: "Domingo", horario: "Fechado" },
];

const Localizacao = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  const googleMapsEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1234567890!2d-46.6234567890!3d-23.4567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI3JzI0LjQiUyA0NsKwMzcnMjQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123";
  const googleMapsLink = "https://www.google.com/maps/search/?api=1&query=R.+Gen.+Nestor+Passos,+256+-+Jardim+Paraíso,+São+Paulo+-+SP,+02417-140";

  return (
    <section id="localizacao" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            <span className="text-gradient">Localização</span> e Contato
          </h2>
          <p className="section-subtitle">
            Venha nos visitar! Curso 100% presencial em São Paulo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mapa */}
          <div className="card-elevated overflow-hidden p-0">
            <div className="aspect-video w-full bg-muted">
              <iframe
                src={googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização CosturaEh Costura Criativa"
                className="w-full h-full min-h-[300px]"
              />
            </div>
            <div className="p-4">
              <a 
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full text-sm"
              >
                <MapPin className="w-4 h-4" />
                Abrir no Google Maps
              </a>
            </div>
          </div>

          {/* Informações */}
          <div className="space-y-6">
            {/* Endereço */}
            <div className="card-elevated">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    R. Gen. Nestor Passos, 256<br />
                    Jardim Paraíso – São Paulo – SP<br />
                    CEP: 02417-140
                  </p>
                </div>
              </div>
            </div>

            {/* Horários */}
            <div className="card-elevated">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">Horário de Funcionamento</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {horarioFuncionamento.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex justify-between p-2 rounded-lg ${
                      item.horario === "Fechado" 
                        ? "bg-destructive/5 text-muted-foreground" 
                        : "bg-background"
                    }`}
                  >
                    <span className="text-muted-foreground">{item.dia.slice(0, 3)}</span>
                    <span className={item.horario === "Fechado" ? "text-destructive/70" : "text-foreground font-medium"}>
                      {item.horario}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contatos */}
            <div className="card-elevated">
              <h3 className="font-display text-lg text-foreground mb-4">Contato</h3>
              <div className="space-y-3">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span className="text-foreground">(11) 99322-3183</span>
                </a>
                
                <a 
                  href="https://instagram.com/costuraeh.criativa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-accent/10 hover:bg-accent/20 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-accent" />
                  <span className="text-foreground">@costuraeh.criativa</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localizacao;
