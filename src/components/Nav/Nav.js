import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from '../../img/small_logo.jpg';
import { Link } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='navbar'>
            <Link to="/">
                <img src={logo} alt="logo" width={136} />
            </Link>
            <ul className={`links ${isOpen ? 'active' : ''}`}>
                <li><HashLink to="/#aboutus" onClick={toggleMenu}>ABOUT</HashLink></li>
                <li><HashLink to="/#menu" onClick={toggleMenu}>MENU</HashLink></li>
                <li><Link to="/booking" onClick={toggleMenu}>RESERVATIONS</Link></li>
                <li><HashLink to="/#" onClick={toggleMenu}>ORDER ONLINE</HashLink></li>
                <li><HashLink to="/#" onClick={toggleMenu}>LOGIN</HashLink></li>
            </ul>
            <div
                className={`hamburguer ${isOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </nav>
    );
};

export default Navbar;
