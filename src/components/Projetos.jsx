import React, { useEffect, useState } from "react";
import agencyVideo from "../assets/videos/Agency.AI.mp4";
import IphoneVideo from "../assets/videos/Iphone.mp4";
import "./Projetos.scss";

const Projetos = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Agency Ia",
      tags: ["React", "Tailwindcss", "JS"],
      bgClass: "projeto__bg--1",
      details: "Projeto para treinar as minha habilidades em tailwindcss.",
      highlights: [
        "Design responsivo",
        "Modo escuro e claro",
        "Opção para enivar email",
      ],
      projectUrl: "#",
      repoUrl: "#",
      video: agencyVideo,
    },
    {
      id: 2,
      title: "Iphone Clone",
      tags: ["React", "Tailwindcss", "JS"],
      bgClass: "projeto__bg--2",
      details: "Projeto para treinar as minha habilidades em tailwindcss.",
      highlights: [
        "Design responsivo",
        "Modo escuro",
        "Selecionar a cor do iphone",
      ],
      projectUrl: "#",
      repoUrl: "#",
      video: IphoneVideo,
    },
  ];

  const openProject = (project) => setActiveProject(project);
  const closeProject = () => setActiveProject(null);

  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeProject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  return (
    <section className="projetos" id="projetos">
      <div className="projetos__inner">
        <span className="projetos__eyebrow">— DESTAQUES</span>

        <h2 className="projetos__title">Projetos</h2>

        <p className="projetos__lead">
          Clique em um projeto para abrir um modal com mais detalhes.
        </p>

        <div className="projetos__grid">
          {projects.map((project) => (
            <article key={project.id} className="projeto projeto--card">
              <div className={`projeto__card ${project.bgClass}`}>
                <div className="projeto__mask" />
                <div className="projeto__content">
                  <h3 className="projeto__name">{project.title}</h3>
                  <div className="projeto__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="projeto__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="projeto__button"
                    onClick={() => openProject(project)}
                  >
                    Ver mais
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject && (
        <div
          className="projeto-detalhe__overlay"
          onClick={closeProject}
          role="presentation"
        >
          <div
            className="projeto-detalhe__modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Detalhes de ${activeProject.title}`}
          >
            <button
              type="button"
              className="projeto-detalhe__close"
              onClick={closeProject}
            >
              ×
            </button>
            <div className="projeto-detalhe__body">
              <div className="projeto-detalhe__media">
                <video
                  className="projeto-detalhe__video"
                  src={activeProject.video}
                  controls
                  preload="metadata"
                />
              </div>
              <div className="projeto-detalhe__info">
                <span className="projetos__eyebrow">— PROJETO</span>
                <h3 className="projeto-detalhe__title">
                  {activeProject.title}
                </h3>
                <p className="projeto-detalhe__text">{activeProject.details}</p>
                <ul className="projeto-detalhe__list">
                  {activeProject.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projetos;
