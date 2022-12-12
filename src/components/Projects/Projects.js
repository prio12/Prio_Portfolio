import React, { useEffect, useState } from "react";
import DisplayProjects from "./DisplayProjects/DisplayProjects";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Learning Mate",
      para1: "Learning Mate is an online learning platform",
      para2:
        "This site provides users with special courses at reasonable prices.",
      para3: "HTML || CSS || DaisyUI || JS || React || Node JS || MongoDB",
      img: "https://i.ibb.co/55WmgvG/Web-capture-11-12-2022-202533-learning-mate-91c7e-web-app.jpg",
      live: "https://learning-mate-91c7e.web.app/",
      git: "https://github.com/prio12/learning-platform-client-side",
    },
    {
      id: "02",
      title: "Kena Becha ",
      para1: "Kena Becha is a resale online shop.",
      para2:
        "This site allows the sellers to sell their used phones and the buyers to buy one.",
      para3: "HTML || CSS || DaisyUI || JS || React || Node JS || MongoDB",
      img: "https://i.ibb.co/wsgwPCY/Web-capture-12-12-2022-6816-resale-f5fa5-web-app.jpg",
      live: "https://resale-f5fa5.web.app/",
      git: "https://github.com/prio12/resale-market-client-side",
    },
    {
      id: "03",
      title: "Web Testy",
      para1:
        "Web Testy is a fun site for beginners who are learning web development.",
      para2: "Users can participate in different kinds of quiz.",
      para3: "HTML || CSS || React Boostrap || JS || React ||",
      img: "https://i.ibb.co/xXpTbgT/Web-capture-11-12-2022-203259-papaya-bavarois-9b11e2-netlify-app.jpg",
      live: "https://papaya-bavarois-9b11e2.netlify.app/",
      git: "https://github.com/prio12/quiz-crackerz",
    },
  ];
  return (
    <section id="projects">
      <h5>What Projects I've done</h5>
      <h2>My Projects</h2>
      <div className="grid  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <DisplayProjects key={project.id} project={project}></DisplayProjects>
        ))}
      </div>
    </section>
  );
};

export default Projects;
