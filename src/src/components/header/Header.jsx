import './style.css';
import earth from "./earth.png";
import suomi from "./suomi-flag.jpg";
import uk from "./uk-flag.png";
import ukraine from "./ukraine-flag.png";

const Header = () => {
    return ( 
        <header className='header'>
            
            <div className='image-container'>
                <img src={earth} alt="" />
            </div>
            <img className='flag suomi' src={suomi} alt=""/>
            <img className='flag uk' src={uk} alt=""/>
            <img className='flag ukraine' src={ukraine} alt=""/>
        </header>
     );
}
 
export default Header;