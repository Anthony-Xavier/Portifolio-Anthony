import React from "react";
import "./Projetos.scss";

const Projetos = () => {
  const projects = [
    {
      id: 1,
      title: "Nome do projeto",
      desc: "Breve descrição do problema resolvido e do impacto entregue.",
      tags: ["Java", "React"],
      soon: false,
    },
    {
      id: 2,
      title: "Nome do projeto",
      desc: "Breve descrição do problema resolvido e do impacto entregue.",
      tags: ["Spring Boot", "PostgreSQL"],
      soon: true,
    },
    {
      id: 3,
      title: "Nome do projeto",
      desc: "Breve descrição do problema resolvido e do impacto entregue.",
      tags: ["Android", "MQTT"],
      soon: true,
    },
  ];

  return (
    <section className="projetos">
      <div className="projetos__inner">
        <span className="projetos__eyebrow">— ESTUDOS DE CASO</span>

        <h2 className="projetos__title">Projetos</h2>

        <p className="projetos__lead">
          Os estudos de caso completos — com código, decisões técnicas e demos —
          estão sendo preparados. Quer ver algo específico agora? Me chama por
          e-mail.
        </p>

        <div className="projetos__grid">
          {projects.map((p) => (
            <article key={p.id} className="projeto">
              {p.soon && <div className="projeto__ribbon">EM BREVE</div>}
              <h3 className="projeto__title">{p.title}</h3>
              <p className="projeto__desc">{p.desc}</p>
              <div className="projeto__tags">
                {p.tags.map((t) => (
                  <span key={t} className="projeto__tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
