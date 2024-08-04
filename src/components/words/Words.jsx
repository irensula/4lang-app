import { useParams } from "react-router-dom";
import { topics } from '../../data/topics';
import Entry from "../../components/Entry";
import './style.css';

const Words = () => {
    const {id} = useParams();
    const topic = topics[id];

    return ( 
        <div>
            <div className="block">
                <h2>Words</h2>
                <button>Button</button>
            </div>
            
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
            </div>
     );
}
 
export default Words;