import './nav.css';
import logo from '../../img/small_logo.jpg';

const Nav = () => {
    return(
        <nav className='navbar'>
            <a href="#">
                <img src={logo} alt="logo" width={136}/>
            </a>
            <ul className='links'>
                <li> <a href="#">ABOUT</a></li>
                <li> <a href="#">MENU</a></li>
                <li> <a href="#">RESERVATIONS</a></li>
                <li> <a href="#">ORDER ONLINE</a></li>
                <li> <a href="#">LOGIN</a></li>
            </ul>
        </nav>
    );
}

export default Nav;

