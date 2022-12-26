import React from "react";

//CSS
import "./Portfolio.css";

//Images
import WorkImage from "../../assets/portrait.jpg";

const projectsData = [
  {
    id: 1,
    image: WorkImage,
    title: "test title",
    technologies: ["react", "react", "react"],
    description:
      "asdsadasdasdasdasdasd dasdashdkjasd asjdjashdjashdasj jasdhajskhdjas jasdjkasdhaskjd ajsdhjkasdh",
  },
  {
    id: 2,
    image: WorkImage,
    title: "test title",
    technologies: ["react", "react", "react"],
    description:
      "asdsadasdasdasdasdasd dasdashdkjasd asjdjashdjashdasj jasdhajskhdjas jasdjkasdhaskjd ajsdhjkasdh",
  },
  {
    id: 3,
    image: WorkImage,
    title: "test title",
    technologies: ["react", "react", "react"],
    description:
      "asdsadasdasdasdasdasd dasdashdkjasd asjdjashdjashdasj jasdhajskhdjas jasdjkasdhaskjd ajsdhjkasdh",
  },
];

function firstLetterUpperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Projects = () => {
  return (
    <div className="project__container container">
      {projectsData.map((item) => (
        <div className="project__card" key={item.id}>
          <img src={item.image} alt={item.title} className="project__img" />
          <h3 className="project__title">{firstLetterUpperCase(item.title)}</h3>
          <div className="project__technologies-container">
            <h5 className="project__subtitle">Technologies:</h5>
            <p className="project__technologies">
              {firstLetterUpperCase(item.technologies.join(" , "))}
            </p>
          </div>
          <div className="project__description-container">
            <h5 className="project__subtitle">Description:</h5>
            <p className="project__description">
              {firstLetterUpperCase(item.description)}
            </p>
          </div>
          <div className="project__line-break" />
          <a href="" className="project__button">
            Demo <i className="bx bx-right-arrow-alt project__button-icon"></i>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
