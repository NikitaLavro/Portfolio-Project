import React from "react";

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
import IMDb from "../../assets/ProjectImages/IMDb.jpg";
import RealEstate from "../../assets/ProjectImages/RealEstate.jpg";
import Note from "../../assets/ProjectImages/Note.jpg";
import Cart from "../../assets/ProjectImages/Cart.png";
import Todo from "../../assets/ProjectImages/Todo.png";

//Components
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    image: IMDb,
    title: "React IMDb Movie App",
    technologies: ["React", "React-Router", "Styles Components, IMBb API"],
    description:
      "A Movie App that allows you to search and view the movies with a help of public IMDb API.",
    gitLink: "https://github.com/NikitaLavro/IMDb-Movie-App",
    netlifyLink: "https://react-imdb-movie-app.netlify.app/",
  },
  {
    id: 2,
    image: RealEstate,
    title: "Real Estate App",
    technologies: [
      "Next.JS",
      "Chakra UI",
      "Rapid API",
      "NProgress",
      "React-Horizontal-Scrolling-Menu, Millify",
    ],
    description:
      "Next.JS real estate app that uses Bayut API to fetch data and allows you to browse and filter apartments according to filter inputs.",
    gitLink: "https://github.com/NikitaLavro/Real-Estate-App",
    netlifyLink: "https://nexjs-real-estate-app.netlify.app/",
  },
  {
    id: 3,
    image: Note,
    title: "TS-React Note-Taking App",
    technologies: [
      "TypeScript",
      "React",
      "React-Router",
      "React-Select",
      "Bootstrap",
      "React-Markdown",
      "uuidV4",
    ],
    description:
      "A note-taking app that allows you to create and edit notes. You can filter notes by title as well as by tags.",
    gitLink:
      "https://github.com/NikitaLavro/TS-React-Note-Taking-App/tree/master/note-ts-app",
    netlifyLink: "https://ts-react-note-taking-app.netlify.app/",
  },
  {
    id: 4,
    image: Cart,
    title: "Redux Cart Items App",
    technologies: ["React", "Redux Toolkit", "Redux Thunk"],
    description:
      "A cart app that allows you to manipulate your bag items. The app keeps track of the global state with a help of Redux.",
    gitLink: "https://github.com/NikitaLavro/Redux-Cart-Items-App",
    netlifyLink: "https://react-redux-cart-items-app.netlify.app/",
  },
  {
    id: 5,
    image: Todo,
    title: "TS-React Draggable Todo App",
    technologies: ["Typescript", "React", "React-Beautiful-DND"],
    description:
      "A Typescript-React app that allows you to create todos and drag/drop them between active and completed containers.",
    gitLink: "https://github.com/NikitaLavro/TS-React-Draggable-Todo-App",
    netlifyLink: "https://ts-react-draggable-todo-app.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="project__container container">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        grabCursor={true}
        mousewheel={false}
        className="mySwiper"
        preventClicks="false"
        preventClicksPropagation="false"
        breakpoints={{
          100: {
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
          <SwiperSlide key={item.id}>
            <ProjectCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
