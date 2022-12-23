import React from "react";

//CSS
import "./Home.css";

//Components
import Social from "./Social";
import Data from "./Data";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data></Data>
        </div>
      </div>
    </section>
  );
};

export default Home;
