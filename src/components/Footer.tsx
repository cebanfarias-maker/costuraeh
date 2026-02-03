import { MessageCircle, Mail, Instagram, Heart } from "lucide-react";

const WHATSAPP_NUMBER = "5511993223183";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim pelo site e quero saber sobre o curso de costura, por favor.");

const Footer = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  const currentYear = new Date().getFullYear();

  const links = {
    curso: [
      { label: "Sobre o curso", href: "#proposta" },
      { label: "Módulos", href: "#modulos" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Investimento", href: "#oferta" },
    ],
    contato: [
      { label: "WhatsApp", href: whatsappLink, icon: <MessageCircle className="w-4 h-4" /> },
      { label: "Email", href: "mailto:contato@cursodecostura.com.br", icon: <Mail className="w-4 h-4" /> },
      { label: "Instagram", href: "https://instagram.com/cursodecostura", icon: <Instagram className="w-4 h-4" /> },
    ],
  };

  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🧵</span>
              <span className="text-xl font-display font-bold text-background">
                Costura Criativa
              </span>
            </div>
            <p className="text-background/70 mb-6 max-w-sm">
              Transformando iniciantes em costureiras confiantes. 
              Aprenda do zero e crie sua própria renda com artesanato.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-full transition-colors font-medium"
              aria-label="Falar no WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              Fale no WhatsApp
            </a>
          </div>

          {/* Links do curso */}
          <div>
            <h4 className="font-semibold text-background mb-4">O Curso</h4>
            <ul className="space-y-2">
              {links.curso.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contato</h4>
            <ul className="space-y-2">
              {links.contato.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>
              © {currentYear} Costura Criativa. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-background transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Termos de Uso
              </a>
            </div>
            <p className="flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-brand-secondary fill-brand-secondary" /> para costureiras
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
