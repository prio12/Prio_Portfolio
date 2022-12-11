import React from 'react';
import { RiMessengerLine } from 'react-icons/ri';
import {CiLinkedin} from 'react-icons/ci'
import {AiOutlineGithub} from 'react-icons/ai'
import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer-logo'>Maksudur Rahman</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer-socials">
                <a href="https://www.facebook.com/maksudurrahman.prio.5" ><RiMessengerLine></RiMessengerLine></a>
                <a href="https://www.linkedin.com/in/maksudur-rahman-61b286215/" ><CiLinkedin></CiLinkedin></a>
                <a href="https://github.com/prio12" ><AiOutlineGithub></AiOutlineGithub></a>
            </div>
            <div className="Footer-copyright">
                <small>&copy; Maksudur Rahman. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;