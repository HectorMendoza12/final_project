import logo from '../../img/Logo.svg';
import './header.css';
const Header = () => {
    return(
        <header className='header'>
            <h2>Text here</h2>
            <img src={logo} alt="logo"/>
        </header>
    );
}

export default Header;

