import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/small_logo.jpg';
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
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">MENU</a></li>
                <li><Link to="/booking">RESERVATIONS</Link></li>
                <li><a href="#">ORDER ONLINE</a></li>
                <li><a href="#">LOGIN</a></li>
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
