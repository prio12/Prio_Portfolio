import React, { useEffect } from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";
import DevTypeWriter from "./DevTypeWriter/DevTypeWriter";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <header
      data-aos="fade-down-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Maksudur Rahman</h1>
        <DevTypeWriter></DevTypeWriter>
        {/* <h5 className="text-light">MERN Stack Developer</h5> */}
        <HeaderSocials></HeaderSocials>
        <CTA></CTA>

        <div className="me">
          <img src={ME} alt="img" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
