import React from 'react';
import BackSkillbar from './FrontSkillbar/BackSkillbar';
import FrontSkillbar from './FrontSkillbar/FrontSkillbar';
import './Skills.css'

const Skills = () => {
    return (
        <section id='skills'>
            <h5>What Skills I Have</h5>
            <h2>My Skills</h2>

            <div className='container skills-container'>
                <div className="skill-front-end">
                    <h3 className='skill-side-name'>FrontEnd Development</h3>
                    <div>
                        <FrontSkillbar></FrontSkillbar>
                    </div>
                </div>
                <div className="skill-front-end">
                    <h3 className='skill-side-name'>BackEnd Development</h3>
                    <div>
                        <BackSkillbar></BackSkillbar>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;