import { useParams } from "react-router-dom";
import { topics } from '../data/topics';
import Entry from "../components/Entry";
import Exercises from "../components/Exercises";

const Topic = () => {
    const {id} = useParams();
    const topic = topics[id];
    return ( 
        <main>
            <h1 className="title-1">{topic.title}</h1>
            
            <table  className="table">
				<thead className="row">
					<tr className="term">
                        <th>Ukraina</th>
                        <th>Venäjä</th>
                        <th>Suomi</th>
                        <th>Englanti</th>
					</tr>
				</thead>
                {
                    topic.words.map((word) => {
                        return (
                            <Entry 
                                key={word.id}
                                id={word.id}
                                ukrainian={word.ukrainian}
                                russian={word.russian}
                                finnish={word.finnish}
                                english={word.english}
                            />
                        )
                    })
                }
            </table>
            <Exercises />
        </main> 
    );
}
 
export default Topic;