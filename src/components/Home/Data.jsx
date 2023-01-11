import React from "react";

//SVG
import Send from "../../assets/Send";
import Hand from "../../assets/Hand";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Nikita Lavro <Hand />
      </h1>
      <h3 className="home__subtitle">Web Developer</h3>
      <p className="home__description">
        Looking forward to my next journey as a developer and ready to bring
        value while working on building bigger ideas.
      </p>
      <a href="#contact" className="button button--flex">
        Contact <Send />
      </a>
    </div>
  );
};

export default Data;
