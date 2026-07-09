import React from "react";
import "./Contato.scss";

const ContactLink = ({ href, label, children }) => (
  <a
    className="contato__icon-link"
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
  >
    {children}
  </a>
);

const Contato = () => {
  const whatsappHref = "https://wa.me/5545996445445";

  return (
    <section id="contato" className="contato">
      <div className="contato__inner">
        <span className="contato__eyebrow">— CONTATO</span>

        <h2 className="contato__title">Vamos construir o seu projeto</h2>

        <p className="contato__lead">
          Respondo em até 1 dia útil — mande o que você precisa.
        </p>

        <div className="contato__cta">
          <a className="contato__button" href="mailto:anthonyltx12@gmail.com">
            Enviar e-mail
          </a>
        </div>

        <div className="contato__grid">
          <div className="contato__row">
            <div className="contato__label">DESENVOLVEDOR</div>
            <div className="contato__value">Anthony Xavier</div>
          </div>

          <div className="contato__row">
            <div className="contato__label">FUNÇÃO</div>
            <div className="contato__value">Dev. Full Stack</div>
          </div>

          <div className="contato__row">
            <div className="contato__label">TELEFONE</div>
            <div className="contato__value">
              <a
                className="contato__phone-link"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                +55 (54) 99644-5445
              </a>
            </div>
          </div>

          <div className="contato__row contato__row--links">
            <div className="contato__label">CONEXÕES</div>

            <div className="contato__links">
              <ContactLink
                href={whatsappHref}
                label="Enviar mensagem no WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2.007c-5.52 0-9.991 4.47-9.991 9.99 0 1.763.46 3.494 1.336 5.032L2 22l4.012-1.054a9.93 9.93 0 005.999 1.82h.002c5.52 0 9.99-4.47 9.99-9.99 0-5.52-4.47-9.99-9.99-9.99zm5.45 14.978c-.236.663-1.4 1.27-1.96 1.35-.52.08-1.16.11-2.03-.22-.62-.24-1.26-.53-2.79-1.31-2.08-.96-3.42-2.66-3.95-3.46-.32-.49-.66-1.12-.74-1.71-.08-.59-.07-1.07-.07-1.17.01-.34.47-.71.95-.71.46 0 .97.03 1.4.42.43.38.84.98.95 1.33.11.35.01.78-.21 1.13-.22.34-.44.55-.48.6-.04.05-.09.11-.02.21.07.11.31.39.67.64.45.3.82.44 1.18.56.39.13.74.11 1.02.07.31-.05.95-.38 1.14-.49.18-.11.39-.15.68-.09.29.07 1.8.85 2.1 1.01.3.16.5.23.57.36.08.13.08.73-.15 1.4z" />
                </svg>
              </ContactLink>

              <ContactLink
                href="mailto:anthonyltx12@gmail.com"
                label="Enviar e-mail"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 17.25V6.75zm2.183.75L12 12.198l7.567-4.698H4.433zm0 1.5v7.5h15v-7.5l-7.5 4.656L4.433 8.999z" />
                </svg>
              </ContactLink>

              <ContactLink
                href="https://github.com/Anthony-Xavier"
                label="Visitar GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.25A9.75 9.75 0 002.916 17.318c.487.09.664-.212.664-.47 0-.232-.009-.845-.013-1.66-2.704.588-3.276-1.302-3.276-1.302-.442-1.123-1.08-1.422-1.08-1.422-.884-.604.067-.592.067-.592.977.069 1.492 1.003 1.492 1.003.868 1.486 2.278 1.056 2.834.808.088-.628.34-1.056.618-1.299-2.16-.246-4.432-1.08-4.432-4.807 0-1.062.379-1.93 1-2.609-.101-.247-.435-1.237.096-2.577 0 0 .819-.262 2.683 1a9.37 9.37 0 012.444-.328 9.4 9.4 0 012.444.328c1.863-1.262 2.681-1 2.681-1 .532 1.34.198 2.33.098 2.577.623.679.999 1.547.999 2.609 0 3.736-2.276 4.558-4.445 4.8.349.302.66.903.66 1.82 0 1.314-.012 2.374-.012 2.697 0 .26.176.565.669.47A9.75 9.75 0 0012 2.25z" />
                </svg>
              </ContactLink>

              <ContactLink
                href="https://www.linkedin.com/in/anthony-toss-xavier"
                label="Visitar LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.31 2.31 0 100 4.62 2.31 2.31 0 000-4.62zm.02 6.37H2V21h3V9.87zm5.5 0H7.5V21h3V14.2c0-1.59.9-2.4 2.22-2.4 1.3 0 1.82.83 1.82 2.4V21h3V13.1c0-3.28-1.73-4.8-4.04-4.8-1.86 0-2.7 1.02-3.16 1.74v.06z" />
                </svg>
              </ContactLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
