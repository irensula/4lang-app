import { NavLink } from "react-router-dom";

const Topic = ({title, index}) => {
    return ( 
        <NavLink to={`/topic/${index}`}> 
            <li className="topic">
                <h3>{title}</h3>
            </li>
        </NavLink>
     );
}
 
export default Topic;