import React, { useState, useEffect } from "react";
import "./NavBar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      {/* Logo */}
      <div className="navbar__logo">Anthony Xavier</div>

      {/* Links de Navegação */}
      <ul className="navbar__links">
        <li className="navbar__item">
          <a href="#sobre">Sobre</a>
        </li>
        <li className="navbar__item">
          <a href="#stack">Stack</a>
        </li>
        <li className="navbar__item">
          <a href="#servicos">Serviços</a>
        </li>
        <li className="navbar__item">
          <a href="#projetos">Projetos</a>
        </li>
        <li className="navbar__item">
          <a href="#contato">Contato</a>
        </li>
      </ul>

      {/* Botão de Ação */}
      <div className="navbar__cta">
        <button className="btn-primary">Contato</button>
      </div>
    </header>
  );
};

export default Navbar;
