import { useParams } from "react-router-dom";
import { topics } from '../data/topics';
import Words from "../components/words/Words";
import Exercises from "../components/Exercises";

const Topic = () => {
    const {id} = useParams();
    const topic = topics[id];
    return ( 
        <main>
            <h1 className="title-1">{topic.title}</h1>
            
            <Words />

            <Exercises />
        </main> 
    );
}
 
export default Topic;