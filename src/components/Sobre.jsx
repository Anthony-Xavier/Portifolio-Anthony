import "./Sobre.scss";

import React from "react";

const Sobre = () => {
  return (
    <section id="sobre" className="sobre">
      <div className="sobre__inner">
        <span className="sobre__eyebrow">— SOBRE</span>

        <h2 className="sobre__title">
          Da camada de dados até a tela do usuário
        </h2>

        <p className="sobre__lede">
          Estou cursando Bacharelado em Engenharia de Software na UCS e venho
          construindo experiência prática em times reais de desenvolvimento —
          tanto no back-end, modelando APIs REST e camadas de persistência com
          Spring Data JPA/Hibernate, quanto na ponta de dispositivos, integrando
          aplicativos Android a sensores via protocolo MQTT.
        </p>

        <p className="sobre__body">
          Gosto de projetos onde preciso enxergar o sistema como um todo: banco
          de dados, regras de negócio, autenticação e a interface que o usuário
          final realmente usa. Para freelas, isso significa menos intermediários
          e mais clareza sobre o que está sendo construído — e por quê.
        </p>

        <div className="sobre__meta">
          <div className="meta-row">
            <div className="meta-key">2025–2029</div>
            <div className="meta-value">Eng. de Software, UCS</div>
          </div>

          <div className="meta-row">
            <div className="meta-key">2</div>
            <div className="meta-value">
              Experiências profissionais em times de dev
            </div>
          </div>

          <div className="meta-row">
            <div className="meta-key">PT / EN</div>
            <div className="meta-value">Atendimento em português e inglês</div>
          </div>

          <div className="meta-row">
            <div className="meta-key">100%</div>
            <div className="meta-value">
              Remoto — base em Flores da Cunha, RS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
