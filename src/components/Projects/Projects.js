import React, { useEffect, useState } from "react";
import DisplayProjects from "./DisplayProjects/DisplayProjects";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  const projects = [

    {
      id: "01",
      title: "BlogWave",
      para1:
        "Share thoughts, ideas, and experiences effortlessly. Easily edit published blogs on the go.",
      para2: "Connect, follow, and receive real-time notifications for meaningful interactions.",
      para3: "React JS, MongoDB, Express JS, Node JS, Tailwind CSS were used and spiced it up with Redux Thunk for a smooth experience.",
      img: "https://i.ibb.co/0DPqbmJ/Web-capture-2-1-2024-193829-blog-wave-3c534-web-app.jpg",
      live: "https://blog-wave-3c534.web.app/",
      git: "https://github.com/prio12/BlogWave",
    },
    
    {
      id: "02",
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
