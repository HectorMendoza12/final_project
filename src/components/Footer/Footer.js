import logo from '../../img/long_logo.PNG'
import facebook from '../../img/facebook.png'
import x from '../../img/X.png'
import insta from '../../img/insta.png'

import './footer.css';
const Footer = () => {
    return(
        <footer className='footer'>
            <div className='logo'>
                <img src={logo} alt="logo" width={140}/>
            </div>
            <div className='nav'>
                <ul> <b>Dormat Navigation</b>
                    <li> <a href="#">Home</a></li>
                    <li> <a href="#">About</a></li>
                    <li> <a href="#">Menu</a></li>
                    <li> <a href="#">Reservations</a></li>
                    <li> <a href="#">Order Online</a></li>
                    <li> <a href="#">Login</a></li>
                </ul>
            </div>
            <div className='contact'>
                <p>
                    <b style={{fontSize: '20px'}}>Contact us</b> <br/>
                    Address <br/>
                    Phone Number <br/>
                    Email
                </p>
            </div>
            <div className='icons'>
                <p><b style={{ fontSize: '20px' }}>Our Social Media</b></p>
                <a href="https://facebook.com" target="_blank"> <div className='icon-item'>
                    <img src={facebook} alt="facebook-icon" width={50}/>
                    <p>Facebook</p>
                </div> </a>
                <a href="https://x.com" target="_blank"> <div className='icon-item'>
                    <img src={x} alt="x-icon" width={70}/>
                    <p>X</p>
                </div></a>
                <a href="https://instagram.com" target="_blank"> <div className='icon-item'>
                    <img src={insta} alt="instagram-icon" width={54}/>
                    <p>Instagram</p>
                </div></a>
        </div>



        </footer>
    );
}

export default Footer;

