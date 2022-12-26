import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

//CSS
import "./Portfolio.css";

//Images
import WorkImage from "../../assets/portrait.jpg";

//Components
import ProjectCard from "./ProjectCard";
import { Scrollbar } from "swiper";

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
  {
    id: 4,
    image: WorkImage,
    title: "test title",
    technologies: ["react", "react", "react"],
    description:
      "asdsadasdasdasdasdasd dasdashdkjasd asjdjashdjashdasj jasdhajskhdjas jasdjkasdhaskjd ajsdhjkasdh",
    link: "https://github.com/NikitaLavro",
  },
  {
    id: 5,
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
      <Swiper
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          900: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {projectsData.map((item) => (
          <SwiperSlide>
            <ProjectCard key={item.id} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
