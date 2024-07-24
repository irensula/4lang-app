import './App.css';
import React, { useState } from 'react';
import Task from './components/Task.jsx';
import Months from './components/Months.jsx';
import DaysOfWeek from './components/DaysOfWeek.jsx';

function App() {
  
  const [words, setWords] = useState([]);
  function checkWord(inputText) {
    setWords(prevWords => {
      return [...prevWords, inputText];
    });
  }

  return (
    <div>
      
      <DaysOfWeek />
      
      <Months />
      
      <div>
          <ul>
              {words.map((todoItem, index) => (
              <Task
                  key={index}
                  id={index}
                  text={todoItem}
                  onAdd={ checkWord }
              />
              ))}
          </ul>
      </div>

    </div>
  );
}

export default App;