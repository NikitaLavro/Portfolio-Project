import React from "react";

//SVG
import Scroll from "../../assets/Scroll";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#portfolio" className="home__scroll-button button--flex">
        <Scroll />
        <span className="home__scroll-name">Scroll Down</span>
        <i className="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
