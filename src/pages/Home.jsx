import Exercise from './Exercises.jsx';
import Months from './Months.jsx';
import DaysOfWeek from './DaysOfWeek.jsx';

const Home = () => {
    return ( 
        <main>
            <h1>Home</h1>
            <DaysOfWeek />
        
            <Months />
        
            <Exercise />
        </main> 
    );
}
 
export default Home;