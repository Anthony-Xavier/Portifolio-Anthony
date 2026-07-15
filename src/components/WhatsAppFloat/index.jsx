import whatsappIcon from "../../assets/img/whatsapp-color-svgrepo-com.svg";
import "./styles.scss";

const WhatsAppFloat = () => {
  const whatsappNumber = "5554996445445";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá!%20Vi%20o%20portfólio%20e%20gostaria%20de%20conversar.`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Falar no WhatsApp"
    >
      <img
        src={whatsappIcon}
        alt="Ícone do WhatsApp"
        className="whatsapp-float__icon"
      />
      <span className="whatsapp-float__label">Fale comigo</span>
    </a>
  );
};

export default WhatsAppFloat;
