import logo from '../img/Logo.svg'
const Footer = () => {
    return(
        <footer style={{ display: 'flex' }}>
            <img src={logo} alt="logo"/>
            <ul> Dormat Navigation
                <li> <a href="#">HOME</a></li>
                <li> <a href="#">ABOUT</a></li>
                <li> <a href="#">MENU</a></li>
                <li> <a href="#">RESERVATIONS</a></li>
                <li> <a href="#">ORDER ONLINE</a></li>
                <li> <a href="#">LOG IN</a></li>
            </ul>
            <div>
                <p>Contact us</p>
                <p>Address</p>
                <p>Phone Number</p>
                <p>Email</p>
            </div>
            <img src="a" alt="social-media-icon"/>
            
        </footer>
    );
}

export default Footer;

