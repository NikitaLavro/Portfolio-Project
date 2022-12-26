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
  },
  {
    id: 2,
    image: WorkImage,
    title: "test title",
  },
  {
    id: 3,
    image: WorkImage,
    title: "test title",
  },
];

const Projects = () => {
  return (
    <div className="work__container container grid">
      {projectsData.map((item) => (
        <div className="work__card" key={item.id}>
          <img src={item.image} alt={item.title} className="work__img" />
          <h3 className="work__title">{item.title}</h3>
          <a href="" className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
