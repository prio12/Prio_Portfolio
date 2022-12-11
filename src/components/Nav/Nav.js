import React, { useState } from 'react';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiBladeBite} from 'react-icons/gi'
import {RiProjectorLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import './Nav.css'

const Nav = () => {

    const [activeNav,setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() =>setActiveNav('#')} className={activeNav === '#'? 'active':''}><AiOutlineHome></AiOutlineHome></a>
            <a href="#about" onClick={() =>setActiveNav('#about')} className={activeNav === '#about'? 'active':''}><AiOutlineUser></AiOutlineUser></a>
            {/* <a href="#skills" onClick={() =>setActiveNav('#skills')} className={activeNav === '#skills'? 'active':''}><RiServiceLine></RiServiceLine></a> */}
            <a href="#skills" onClick={() =>setActiveNav('#skills')} className={activeNav === '#skills'? 'active':''}><GiBladeBite></GiBladeBite></a>
            <a href="#projects" onClick={() =>setActiveNav('#projects')} className={activeNav === '#projects'? 'active':''}><RiProjectorLine></RiProjectorLine></a>
            <a href="#contact" onClick={() =>setActiveNav('#contact')} className={activeNav === '#contact'? 'active':''}><BiMessageSquareDetail></BiMessageSquareDetail></a>
            
        </nav>
    );
};

export default Nav;