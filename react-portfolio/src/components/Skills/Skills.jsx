import React from "react";

//CSS
import "./Skills.css";

//Components
import Frontend from "./Frontend";
import General from "./General";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technical Level</span>

      <div className="skills__container container ">
        <Frontend />
        <General />
      </div>
    </section>
  );
};

export default Skills;
