import React, { useEffect } from "react";
import ME from "../../assets/me.png";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      data-aos="fade-up-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      id="about"
    >
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-content-btn">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sit
              deleniti hic praesentium doloribus soluta optio culpa error, quos
              nulla suscipit placeat facere tempora eligendi. Aperiam velit
              eaque dolorum dolor?
            </p>
            <a href="#contact" className="btn about-btn">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
