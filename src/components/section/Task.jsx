import WordsTable from '../words/WordsTable';
const Task = (props) => {
    return ( 
        <div>
            {props.text}
            <WordsTable />
        </div>
     );
}
 
export default Task;