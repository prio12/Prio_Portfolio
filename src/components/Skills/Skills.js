import React, { useEffect } from "react";
import BackSkillbar from "./FrontSkillbar/BackSkillbar";
import FrontSkillbar from "./FrontSkillbar/FrontSkillbar";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      id="skills"
    >
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container skills-container">
        <div  data-aos="slide-right" className="skill-front-end">
          <h3 className="skill-side-name">FrontEnd Development</h3>
          <div>
            <FrontSkillbar></FrontSkillbar>
          </div>
        </div>
        <div data-aos="slide-down" className="skill-front-end">
          <h3 className="skill-side-name">BackEnd Development</h3>
          <div>
            <BackSkillbar></BackSkillbar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
