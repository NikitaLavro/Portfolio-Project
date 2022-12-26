import React from "react";

//CSS
import "./Skills.css";

const frontendSkills = [
  {
    name: "React",
    description: "intermediate",
    key: 1,
  },
  {
    name: "React",
    description: "intermediate",
    key: 2,
  },
  {
    name: "React",
    description: "intermediate",
    key: 3,
  },
  {
    name: "React",
    description: "intermediate",
    key: 4,
  },
  {
    name: "React",
    description: "intermediate",
    key: 5,
  },
  {
    name: "React",
    description: "intermediate",
    key: 6,
  },
];

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Development</h3>

      <div className="skills__box">
        {frontendSkills.map((skill) => (
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

export default Frontend;
