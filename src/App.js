import './App.css';
import Task from './components/Task.jsx';
import Months from './components/Months.jsx';
import DaysOfWeek from './components/DaysOfWeek.jsx';

function App() {

  return (
    <div>
      
      <DaysOfWeek />
      
      <Months />
      
      <Task />

    </div>
  );
}

export default App;