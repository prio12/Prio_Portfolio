import React from 'react';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <h5>Hello I'm</h5>
                <h1>Maksudur Rahman</h1>
                <h5 className="text-light">MERN Stack Developer</h5>
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