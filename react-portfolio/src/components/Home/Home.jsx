import React from "react";

//CSS
import "./Home.css";

//Components
import Social from "./Social";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home__content grid">
          <Social />
        </div>
      </div>
    </section>
  );
};

export default Home;
