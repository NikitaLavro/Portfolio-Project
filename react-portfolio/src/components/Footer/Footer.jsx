import React from "react";

//CSS
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Lavro</h1>
        <ul className="footer__list">
          <li>
            <a href="home" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/nikitalavro/"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://github.com/NikitaLavro"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
