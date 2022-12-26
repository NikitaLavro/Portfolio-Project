import React from "react";

//CSS
import "./Portfolio.css";

//Images
import WorkImage from "../../assets/portrait.jpg";

//Components
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    image: WorkImage,
    title: "test title",
    technologies: ["react", "react", "react"],
    description:
      "asdsadasdasdasdasdasd dasdashdkjasd asjdjashdjashdasj jasdhajskhdjas jasdjkasdhaskjd ajsdhjkasdh",
    link: "https://github.com/NikitaLavro",
  },
  {
    id: 2,
    image: WorkImage,
    title: "test title",
    technologies: ["react", "react", "react"],
    description:
      "asdsadasdasdasdasdasd dasdashdkjasd asjdjashdjashdasj jasdhajskhdjas jasdjkasdhaskjd ajsdhjkasdh",
    link: "https://github.com/NikitaLavro",
  },
  {
    id: 3,
    image: WorkImage,
    title: "test title",
    technologies: ["react", "react", "react"],
    description:
      "asdsadasdasdasdasdasd dasdashdkjasd asjdjashdjashdasj jasdhajskhdjas jasdjkasdhaskjd ajsdhjkasdh",
    link: "https://github.com/NikitaLavro",
  },
];

const Projects = () => {
  return (
    <div className="project__container container">
      {projectsData.map((item) => (
        <ProjectCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Projects;
