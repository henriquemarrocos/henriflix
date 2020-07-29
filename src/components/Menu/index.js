import React from 'react';
import Logo from '../../assets/images/Logo.png';
import './menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="HenriFlix logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                New video
            </Button>
        </nav>
    );
}

export default Menu;