import React from "react";

//Components
import Frontend from "./Frontend";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technical Level</span>

      <div className="skills__container container grid">
        <Frontend />
      </div>
    </section>
  );
};

export default Skills;
