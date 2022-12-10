import React from 'react';
import ME from '../../assets/me.png'
import './About.css'
const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about-container">
                <div className="about-me">
                    <div className="about-me-image">
                        <img src={ME} alt="" />
                    </div>
                </div>
                <div className="about-content">
                    <div className='about-content-btn'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sit deleniti hic praesentium doloribus soluta optio culpa error, quos nulla suscipit placeat facere tempora eligendi. Aperiam velit eaque dolorum dolor?</p>
                       <a href="#contact" className='btn about-btn'>Let's Talk</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;