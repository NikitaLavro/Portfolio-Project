import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const toggleNavbar = () => {
    setShowMenu(!showMenu);
  };

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Lavro
        </a>
        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => toggleNavbar()}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => toggleNavbar()}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
