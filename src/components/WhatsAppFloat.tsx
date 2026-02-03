import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511993223183";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim pelo site e quero saber sobre o curso de costura, por favor.");

const WhatsAppFloat = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Quero saber mais no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsAppFloat;
