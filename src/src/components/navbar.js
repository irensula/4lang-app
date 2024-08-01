import { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    // to change burger classes
    const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
    const [menu_class, setIsMenuClass] = useState('menu hidden');
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass('burger-bar clicked');
            setIsMenuClass('menu visible')
        }
        else {
            setBurgerClass('burger-bar unclicked')
            setIsMenuClass('menu hidden')
        }
        setIsMenuClicked(!isMenuClicked);
    } 

    return(
        <div style={{width: '100%', height: '100vh'}}>
           <nav>
            <div className='burger-menu' onClick={updateMenu}>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
            </div>
                
           </nav>
           <div className={menu_class}></div> 
        </div>
    )
}

export default Navbar;