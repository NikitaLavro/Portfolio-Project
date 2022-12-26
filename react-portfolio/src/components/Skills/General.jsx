import React from "react";

//CSS
import "./Skills.css";

const generalSkills = [
  {
    name: "NPM",
    description: "intermediate",
  },
  {
    name: "NPM",
    description: "intermediate",
  },
  {
    name: "NPM",
    description: "intermediate",
  },
  {
    name: "NPM",
    description: "intermediate",
  },
  {
    name: "NPM",
    description: "intermediate",
  },
  {
    name: "NPM",
    description: "intermediate",
  },
];

const General = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">General</h3>
      <div className="skills__box">
        {generalSkills.map((skill) => (
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">{skill.name}</h3>
              <span className="skills__level">{skill.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default General;
