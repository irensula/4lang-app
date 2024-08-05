import { useParams } from "react-router-dom";
import { topics } from '../data/topics';
import Section from "../components/section/Section";

const Topic = () => {
    const {id} = useParams();
    const topic = topics[id];

    return ( 
        <main>
            <h1 className="title-1">{topic.title}</h1>
            
            <Section blockTitle="Words" content="1 content" />
            <Section blockTitle="Exercises" content="2 content" />
            <Section blockTitle="Text" content="3 content" />
            <Section blockTitle="Songs" content="4 content" />
        </main> 
    );
}
 
export default Topic;