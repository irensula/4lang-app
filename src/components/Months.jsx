import months from "../data/months";
import Entry from "./Entry";

const Months = () => {
    return ( 
        <div>
            <h1><span>Months</span></h1>

            <table  className="table">
                <thead className="row">
                    <tr className="term">
                        <th>Ukraina</th>
                        <th>Venäjä</th>
                        <th>Suomi</th>
                        <th>Englanti</th>
                    </tr>
                </thead>
                {months.map((word) => 
                    (<Entry 
                        key={word.id}
                        id={word.id}
                        ukrainian={word.ukrainian}
                        russian={word.russian}
                        finnish={word.finnish}
                        english={word.english}
                    />)
                )}
            </table>
        </div>
     );
}
 
export default Months;