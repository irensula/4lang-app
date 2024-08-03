import Topic from '../components/Topic.jsx';
import { topics } from '../data/topics';


const Topics = () => {
    return ( 
        <main>
            <ul className="topic-list">

                {topics.map((topic, index) => {
                    return <Topic 
                        key={topic.id}
                        title={topic.title} 
                        index={index}
                    />;
                })}
            </ul>
        </main> 
    );
}
 
export default Topics;