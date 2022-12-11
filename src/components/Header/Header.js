import React from 'react';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';
import './Header.css'
import DevTypeWriter from './DevTypeWriter/DevTypeWriter';

const Header = () => {
    return (
        <header>
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

                <a href="#contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;