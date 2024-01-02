import React from 'react';
import './FrontSkillbar.css'
const FrontSkillbar = () => {
    return (
        <div className="skill-container">
            <div className='skill-box'>
            <span className="title">
                HTML
            </span>
            <div className="skill-bar">
                <span className="skill-per html">
                    <span className="tooltip">90%</span>
                </span>
            </div>
        </div>
            <div className='skill-box'>
            <span className="title">
                CSS
            </span>
            <div className="skill-bar">
                <span className="skill-per css">
                    <span className="tooltip">80%</span>
                </span>
            </div>
        </div>
            <div className='skill-box'>
            <span className="title">
                Javascript
            </span>
            <div className="skill-bar">
                <span className="skill-per javascript">
                    <span className="tooltip">70%</span>
                </span>
            </div>
        </div>
            <div className='skill-box'>
            <span className="title">
                React
            </span>
            <div className="skill-bar">
                <span className="skill-per react">
                    <span className="tooltip">75%</span>
                </span>
            </div>
        </div>
            <div className='skill-box'>
            <span className="title">
                Redux Thunk
            </span>
            <div className="skill-bar">
                <span className="skill-per thunk">
                    <span className="tooltip">85%</span>
                </span>
            </div>
        </div>
            <div className='skill-box'>
            <span className="title">
                Boostrap
            </span>
            <div className="skill-bar">
                <span className="skill-per boostrap">
                    <span className="tooltip">90%</span>
                </span>
            </div>
        </div>
        </div>
    );
};

export default FrontSkillbar;