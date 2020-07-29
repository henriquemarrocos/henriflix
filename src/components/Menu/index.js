import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import './menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="HenriFlix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/Add/Video">
                New video
            </Button>
        </nav>
    );
}

export default Menu;