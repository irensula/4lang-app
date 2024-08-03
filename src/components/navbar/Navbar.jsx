import { NavLink } from "react-router-dom";
import './style.css';

const Navbar = () => {
    return ( 
        <nav className="navbar-main">
            <div className="logo"><span className="number">4</span><span className="langs">langs</span></div>
            <ul className="nav-list">
                <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/contacts">Contacts</NavLink></li>
                <li className="nav-item"><NavLink to="/login">Login</NavLink></li>
                <li className="nav-item start-button"><NavLink to="/topics">Start</NavLink></li>
            </ul>
        </nav> 
    );
}
 
export default Navbar;