import { MessageCircle, MapPin, Phone, Instagram } from "lucide-react";
import logo from "@/assets/logo-costuraeh.png";

const WHATSAPP_NUMBER = "5511993223183";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim pelo site e quero saber sobre as aulas de costura, por favor.");

const Footer = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="CosturaEh" 
                className="h-16 w-auto brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-background/60 text-sm mb-4">
              Curso de Costura Criativa para Iniciantes<br />
              100% Presencial em São Paulo
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Fale no WhatsApp
            </a>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-medium text-background mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                R. Gen. Nestor Passos, 256<br />
                Jardim Paraíso, São Paulo - SP<br />
                02417-140
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="w-4 h-4" />
                (11) 99322-3183
              </li>
              <li>
                <a 
                  href="https://instagram.com/costuraeh.criativa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @costuraeh.criativa
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-background mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sobre" className="text-background/70 hover:text-background transition-colors">
                  Sobre o Curso
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-background/70 hover:text-background transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-background/70 hover:text-background transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#localizacao" className="text-background/70 hover:text-background transition-colors">
                  Localização
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8 text-center text-sm text-background/50">
          <p>© {currentYear} CosturaEh Costura Criativa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
