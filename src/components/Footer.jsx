import React from "react";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__text">
          © {currentYear} Anthony Xavier · Desenvolvedor Full Stack
        </p>
      </div>
    </footer>
  );
};

export default Footer;
