import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DisplayProjects = ({ project }) => {
  const { title, img, para1, para2, para3, live, git } = project;

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="container"
    >
      <div style={{background:"var(--color-bg-variant)", }} className="card shadow-5xl">
        <figure>
          <img
            style={{ height: "200px", width: "100%" }}
            className="rounded-xl"
            src={img}
            alt="img"
          />
        </figure>
        <div>
          <h2 className="text-center text-2xl my-5">{title}</h2>

          <div className="px-5 h-[260px]">
          <p className="mb-3" style={{ fontSize: "13px" }}>* {para1}</p>
          <p className="mb-3" style={{ fontSize: "13px" }}>* {para2}</p>
          <p className="mb-3" style={{ fontSize: "13px" }}>* {para3}</p>
          </div>
          {/* <span>{para1}</span> */}
          <div className="flex items-center p-5 gap-3">
            <div>
            <a
              className="btn "
              target="_blank"
              rel="noopener noreferrer"
              href={live}
            >
              Live Site
            </a>
            </div>
            <div>
            <a
              className="btn  btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              href={git}
            >
              Source Code
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayProjects;
