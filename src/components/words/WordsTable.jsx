import { useParams } from "react-router-dom";
import { topics } from '../../data/topics';
import TableRow from "./TableRow";

const WordsTable = () => {
    const {id} = useParams();
    const topic = topics[id];
    
    return ( 
            <table className="table">
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
                            <TableRow 
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
     );
}
 
export default WordsTable;