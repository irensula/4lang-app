import { NavLink } from "react-router-dom";
import './style.css';

const currentYear = new Date().getFullYear()

const Footer = () => {
    return ( 
        <footer className='footer'>
                <ul className="footer-nav">
                    <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/contacts">Contacts</NavLink></li>
                    <li className="nav-item"><NavLink to="/login">Login</NavLink></li>
                    <li className="nav-item"><NavLink to="/topics">Start</NavLink></li>
                </ul>
            <p>{currentYear} © All rights reserved.</p>
        </footer> 
    );
}
 
export default Footer;