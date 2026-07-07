import React from "react";
import "./NavBar.scss";

const Navbar = () => {
  return (
    <header className="navbar">
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
