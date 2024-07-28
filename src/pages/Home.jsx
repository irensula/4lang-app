import Task from './../components/Task.jsx';
import Months from './../components/Months.jsx';
import DaysOfWeek from './../components/DaysOfWeek.jsx';

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