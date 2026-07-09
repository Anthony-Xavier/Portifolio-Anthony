import React from "react";
import "./Hero.scss";

const Hero = () => {
  const scrollToStack = () => {
    const el = document.getElementById("stack");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "#stack";
    }
  };

  return (
    <section className="hero">
      {/* Subtitle */}
      <div className="hero__subtitle">— DESENVOLVEDOR FULL STACK</div>

      {/* Main Title */}
      <h1 className="hero__title">Anthony Xavier</h1>

      {/* Description */}
      <p className="hero__description">
        Construo aplicações web do banco de dados até a interface. Um único
        desenvolvedor para entregar o seu sistema inteiro, do zero ao ar.
      </p>

      {/* CTA Buttons */}
      <div className="hero__buttons">
        <button className="hero__btn hero__btn--primary">
          Falar sobre seu projeto
        </button>
        <button
          type="button"
          className="hero__btn hero__btn--secondary"
          onClick={scrollToStack}
        >
          Ver stack técnica
        </button>
      </div>

      {/* Footer Info */}
      <div className="hero__footer">
        <div className="hero__footer-item">
          <span className="hero__dot">●</span> Flores da Cunha, RS — atendimento
          remoto
        </div>
        <div className="hero__footer-item">
          <span className="hero__dot">●</span> Disponível para freelance
        </div>
      </div>
    </section>
  );
};

export default Hero;
