import React from "react";

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
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default Projects;
