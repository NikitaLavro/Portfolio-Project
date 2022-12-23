import React from "react";

//SVG
import Scroll from "../../assets/Scroll";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <Scroll />
      </a>
    </div>
  );
};

export default ScrollDown;
