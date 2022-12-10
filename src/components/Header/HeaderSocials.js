import React from 'react';
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
    return (
        <div className='header-socials'>
            <a href="https://www.linkedin.com/in/maksudur-rahman-61b286215/" target="_blank" rel="noopener noreferrer"><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com/prio12"><BsGithub></BsGithub></a>
        </div>
    );
};

export default HeaderSocials;