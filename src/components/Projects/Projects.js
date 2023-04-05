import React, { useEffect, useState } from "react";
import DisplayProjects from "./DisplayProjects/DisplayProjects";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  const projects = [
    
    {
      id: "01",
      title: "Career Edge",
      para1:
        "Career Edge: A job finder site .",
      para2: "Explore job opportunities and find the best talent on Career Edge - the comprehensive job finder site for job seekers and recruiters.",
      para3: "JSX  || CSS || DaisyUI || React || Express JS || MongoDB || Firebase",
      img: "https://i.ibb.co/R2sT6Ng/Web-capture-6-4-2023-01049-endgame-jobstack-web-app.jpg",
      live: "https://endgame-jobstack.web.app/",
      git: "https://github.com/mdelwarhossain/endgame-jobstack-client",
    },

    {
      id: "02",
      title: "Kena Becha ",
      para1: "Kena Becha is a resale online shop.",
      para2:
        "This site allows the sellers to sell their used phones and the buyers to buy one.",
      para3: "JSX  || CSS || DaisyUI || React || Express JS || MongoDB || Firebase",
      img: "https://i.ibb.co/wsgwPCY/Web-capture-12-12-2022-6816-resale-f5fa5-web-app.jpg",
      live: "https://resale-f5fa5.web.app/",
      git: "https://github.com/prio12/resale-market-client-side",
    },
    
    {
      id: "03",
      title: "Learning Mate",
      para1: "Learning Mate is an online learning platform",
      para2:
        "This site provides users with special courses at reasonable prices.",
      para3: "JSX  || CSS || DaisyUI || React || Express JS || MongoDB || Firebase",
      img: "https://i.ibb.co/55WmgvG/Web-capture-11-12-2022-202533-learning-mate-91c7e-web-app.jpg",
      live: "https://learning-mate-91c7e.web.app/",
      git: "https://github.com/prio12/learning-platform-client-side",
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
