import { MessageCircle, Check, Shield, Clock, CreditCard } from "lucide-react";

const WHATSAPP_NUMBER = "5511993223183";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim pelo site e quero saber sobre o curso de costura, por favor.");

const inclusos = [
  "7 módulos completos em vídeo",
  "55+ aulas passo a passo",
  "Encontros ao vivo semanais",
  "Acesso vitalício",
  "Comunidade exclusiva no WhatsApp",
  "Suporte direto com a professora",
  "Certificado de conclusão",
  "Bônus: E-book de precificação",
  "Bônus: Moldes prontos para download",
  "Bônus: Lista de fornecedores",
];

const Oferta = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section id="oferta" className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-xl" />
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/5 rounded-full blur-xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4 backdrop-blur-sm">
            Oferta especial
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Invista em você e no seu futuro
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Tudo o que você precisa para transformar sua habilidade em renda, 
            com suporte completo e acesso vitalício.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main offer card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Left - What's included */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  O que está incluso
                </h3>
                
                <ul className="space-y-3">
                  {inclusos.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right - Price and CTA */}
              <div className="flex flex-col justify-center">
                <div className="text-center md:text-left mb-8">
                  <p className="text-sm text-muted-foreground mb-1">Investimento único</p>
                  <div className="flex items-baseline gap-2 justify-center md:justify-start">
                    <span className="text-sm text-muted-foreground line-through">R$ 997</span>
                  </div>
                  <div className="flex items-baseline gap-1 justify-center md:justify-start">
                    <span className="text-lg text-primary font-medium">12x de</span>
                    <span className="text-5xl font-display font-bold text-primary">R$ 49</span>
                    <span className="text-lg text-muted-foreground">,70</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    ou R$ 497 à vista
                  </p>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-lg py-5"
                  aria-label="Quero saber mais no WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                  Quero saber mais no WhatsApp
                </a>

                {/* Trust badges */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-primary" />
                    Garantia 7 dias
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    Acesso imediato
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CreditCard className="w-4 h-4 text-primary" />
                    Pagamento seguro
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee banner */}
            <div className="mt-8 p-6 bg-secondary/50 rounded-2xl">
              <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Garantia incondicional de 7 dias
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Se em até 7 dias você sentir que o curso não é para você, devolvemos 100% 
                    do seu investimento. Sem perguntas, sem burocracia.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Plataforma de entrega: <strong>Hotmart</strong> • Pagamento seguro com cartão, boleto ou PIX
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oferta;
