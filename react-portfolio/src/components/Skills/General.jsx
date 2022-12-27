import React from "react";

//CSS
import "./Skills.css";

const generalSkills = [
  {
    name: "Command Line",
    description: "Basics",
    key: 1,
  },
  {
    name: "NPM",
    description: "Basics",
    key: 2,
  },
  {
    name: "Git / GitHub",
    description: "Basics",
    key: 3,
  },

  {
    name: "Linters",
    description: "ESLint, Prettier",
    key: 3,
  },

  {
    name: "REST",
    description: "HTTP, JSON, XML",
    key: 3,
  },
  {
    name: "English",
    description: "Advanced",
    key: 3,
  },
];

const General = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">General</h3>
      <div className="skills__box">
        {generalSkills.map((skill) => (
          <div key={skill.key} className="skills__data">
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
