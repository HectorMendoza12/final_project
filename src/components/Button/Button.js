import { Link } from "react-router-dom"
import './button.css';

const Button = ({text, link}) => {
    return(
        <div className='bttnwrapper'>
            <Link to={link} style={{ textDecoration: 'none'}}>
            <button className="bttn"> {text} </button>
            </Link>
        </div>
    )
}

export default Button;