import React from "react";
import "./Stack.scss";

const Tag = ({ children }) => <span className="stack__tag">{children}</span>;

const Stack = () => {
  return (
    <section id="stack">
      <div className="stack__inner">
        <span className="stack__eyebrow">— ESPECIFICAÇÕES TÉCNICAS</span>

        <h2 className="stack__title">Stack de trabalho</h2>

        <p className="stack__lead">
          As ferramentas que uso para sair do esboço ao sistema em produção.
        </p>

        <div className="stack__card">
          <div className="stack__group">
            <div className="group__head">LINGUAGENS &amp; FRAMEWORKS</div>
            <div className="group__tags">
              {[
                "Java",
                "Spring Boot",
                "Spring Security",
                "JWT",
                "OAuth2",
                "JUnit",
                "Mockito",
                "JavaScript",
                "React",
                "C",
                "Python",
              ].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          <div className="stack__divider" />

          <div className="stack__group">
            <div className="group__head">DADOS &amp; BACK-END</div>
            <div className="group__tags">
              {[
                "PostgreSQL",
                "APIs REST",
                "Hibernate",
                "JDBC",
                "DBeaver",
                "Red Hat",
              ].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          <div className="stack__divider" />

          <div className="stack__group">
            <div className="group__head">CLOUD &amp; DEVOPS</div>
            <div className="group__tags">
              {[
                "Docker",
                "CI/CD",
                "Git",
                "GitHub",
                "GitLab",
                "Render",
                "Vercel",
              ].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
