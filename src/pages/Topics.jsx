import { NavLink } from "react-router-dom";

const Topics = () => {
    return ( <main>
        <h1>Topics</h1>
        <ul>
            <li><NavLink to="/words">Words</NavLink></li>
            <li><NavLink to="/exercises">Exercises</NavLink></li>
            <li><NavLink to="/texts">Text</NavLink></li>
            <li><NavLink to="/songs">Songs</NavLink></li>
        </ul>
    </main> );
}
 
export default Topics;