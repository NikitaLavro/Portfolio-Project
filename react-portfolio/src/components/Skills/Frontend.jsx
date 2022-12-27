import React from "react";

//CSS
import "./Skills.css";

const frontendSkills = [
  {
    name: "React",
    description: "intermediate asdas",
    key: 1,
  },
  {
    name: "Redux",
    description: "Redux Toolkit, Redux Saga, RTK Query",
    key: 2,
  },
  {
    name: "CSS",
    description: "CSS, SCSS/SASS",
    key: 3,
  },
  {
    name: "JavaScript",
    description: "sad asdasd  asdasd dasd dasdasdad",
    key: 4,
  },
  {
    name: "React",
    description: "intermediate asdasd  adasdd ad ",
    key: 5,
  },
  {
    name: "React",
    description: "asdasdasd adas da dasdasd  adasd as d",
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
