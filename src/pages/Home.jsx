import Task from './Task.jsx';
import Months from './Months.jsx';
import DaysOfWeek from './DaysOfWeek.jsx';

const Home = () => {
    return ( 
        <main>
            <h1>Home</h1>
            <DaysOfWeek />
        
            <Months />
        
            <Task />
        </main> 
    );
}
 
export default Home;