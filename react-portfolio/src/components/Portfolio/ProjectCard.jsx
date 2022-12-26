import React from "react";

const ProjectCard = ({ item }) => {
  function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="project__card">
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
      <div className="project__links">
        <a href={item.link} className="project__link-button">
          Demo <i className="bx bx-right-arrow-alt project__button-icon"></i>
        </a>
        <a href={item.link} className="project__link-git">
          <i className="bx uil uil-github-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
