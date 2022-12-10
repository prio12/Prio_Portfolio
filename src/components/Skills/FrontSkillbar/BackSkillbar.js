import React from 'react';

const BackSkillbar = () => {
    return (
        <div className="skill-container">
            <div className='skill-box'>
            <span className="title">
                Node JS
            </span>
            <div className="skill-bar">
                <span className="skill-per nodeJS">
                    <span className="tooltip">50%</span>
                </span>
            </div>
        </div>
            <div className='skill-box'>
            <span className="title">
                Express JS
            </span>
            <div className="skill-bar">
                <span className="skill-per expressJS">
                    <span className="tooltip">40%</span>
                </span>
            </div>
        </div>
            <div className='skill-box'>
            <span className="title">
                MongoDb
            </span>
            <div className="skill-bar">
                <span className="skill-per mongoDb">
                    <span className="tooltip">60%</span>
                </span>
            </div>
        </div>
        </div>
    );
};

export default BackSkillbar;