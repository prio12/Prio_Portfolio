import React, { useState } from 'react';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import './Nav.css'

const Nav = () => {

    const [activeNav,setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() =>setActiveNav('#')} className={activeNav === '#'? 'active':''}><AiOutlineHome></AiOutlineHome></a>
            <a href="#about" onClick={() =>setActiveNav('#about')} className={activeNav === '#about'? 'active':''}><AiOutlineUser></AiOutlineUser></a>
            <a href="#services" onClick={() =>setActiveNav('#services')} className={activeNav === '#services'? 'active':''}><RiServiceLine></RiServiceLine></a>
            <a href="#contact" onClick={() =>setActiveNav('#contact')} className={activeNav === '#contact'? 'active':''}><BiMessageSquareDetail></BiMessageSquareDetail></a>
        </nav>
    );
};

export default Nav;