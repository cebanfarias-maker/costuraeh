import { MessageCircle, Award, Users, Heart } from "lucide-react";
import professoraImg from "@/assets/alunas-2.jpg";

const WHATSAPP_NUMBER = "5511993223183";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim pelo site e quero saber sobre o curso de costura, por favor.");

const SobreProfessora = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section id="sobre" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative frames */}
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-3" />
              <div className="absolute -inset-4 bg-brand-secondary/10 rounded-3xl -rotate-2" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-large">
                <img
                  src={professoraImg}
                  alt="Professora com alunas do curso de costura"
                  className="w-full h-auto object-cover aspect-square md:aspect-[4/5]"
                  loading="lazy"
                />
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-large">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold">
                    7+
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Anos de</p>
                    <p className="font-semibold text-foreground">Experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Quem vai te ensinar
            </span>
            
            <h2 className="section-title text-foreground mb-6">
              Olá, eu sou a{" "}
              <span className="text-gradient">Professora</span>
            </h2>
            
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Apaixonada por costura desde criança, transformei minha paixão em profissão 
                há mais de 7 anos. Já ensinei mais de <strong className="text-foreground">500 mulheres</strong> a 
                costurar do zero, muitas delas hoje têm sua própria renda com artesanato.
              </p>
              <p>
                Minha missão é mostrar que <strong className="text-foreground">qualquer pessoa pode aprender</strong> — 
                basta ter vontade e o método certo. E é exatamente isso que eu ofereço: um 
                caminho claro, passo a passo, do básico ao avançado.
              </p>
              <p>
                Aqui você não vai encontrar julgamentos ou pressa. Cada aluna tem seu tempo, 
                e eu estarei junto com você em cada etapa dessa jornada transformadora.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: <Award className="w-5 h-5" />, text: "Certificada em modelagem" },
                { icon: <Users className="w-5 h-5" />, text: "500+ alunas formadas" },
                { icon: <Heart className="w-5 h-5" />, text: "Método acolhedor" },
                { icon: <MessageCircle className="w-5 h-5" />, text: "Suporte humanizado" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="text-primary">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                aria-label="Quero saber mais no WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                Fale comigo no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreProfessora;
