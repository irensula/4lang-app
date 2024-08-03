import Exercise from './Exercises.jsx';
import Months from './Months.jsx';
import DaysOfWeek from './DaysOfWeek.jsx';
import Header from '../components/header/Header.jsx';

const Home = () => {
    return ( 
        <main>
            
            <Header />

            <div className='text-container'>
                <h1>Let's learn 4 languages!</h1>
                <p>This website is developed specifically for children who are from Ukraine but had to move to Finland because of the war.</p>
                <p>Very often ukrainian children speak both russian and ukrainian languages, this is truly common.</p>
                <p>In Finland russian-speaking community is much bigger than ukrainian speaking, and it's natural that children start to forget their mother language - ukrainian.
                    And it is very important not to forget their own roots.
                </p>
                <p>Also it's extreemly important to learn finnish language because these children live in Finland.</p>
                <p>And English language is important too, because it's an international language which is used all over the world.</p>
            </div>

            <DaysOfWeek />
        
            <Months />
        
            <Exercise />
        </main> 
    );
}
 
export default Home;