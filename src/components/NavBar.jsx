import React, { useState, useEffect } from "react";
import "./NavBar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const whatsappHref = "https://wa.me/5545996445445";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileOpen((current) => !current);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <header
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""} ${isMobileOpen ? "navbar--open" : ""}`}
    >
      <div className="navbar__top">
        <div className="navbar__logo">Anthony Xavier</div>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileOpen}
          onClick={toggleMobileMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <ul
        className={`navbar__links ${isMobileOpen ? "navbar__links--open" : ""}`}
      >
        <li className="navbar__item">
          <a href="#sobre" onClick={closeMobileMenu}>
            Sobre
          </a>
        </li>
        <li className="navbar__item">
          <a href="#stack" onClick={closeMobileMenu}>
            Stack
          </a>
        </li>
        <li className="navbar__item">
          <a href="#servicos" onClick={closeMobileMenu}>
            Serviços
          </a>
        </li>
        <li className="navbar__item">
          <a href="#projetos" onClick={closeMobileMenu}>
            Projetos
          </a>
        </li>
        <li className="navbar__item">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={closeMobileMenu}
          >
            Contato
          </a>
        </li>
      </ul>

      <div className="navbar__cta">
        <a
          className="btn-primary"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          Contato
        </a>
      </div>
    </header>
  );
};

export default Navbar;
