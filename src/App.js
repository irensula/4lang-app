import './App.css';
import Entry from './components/Entry.jsx';
import React, { useState } from 'react';
import daysOfWeek from './data/daysofweek.js';
import months from './data/months.js';

function App() {
  
  const [count, setCount] = useState(0);
  
  function increase() {
    setCount(count + 1);
  }
  
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>
        <span>Days Of Week</span>
      </h1>
      <tr class="row">
        <th>Ukraina</th>
        <th>Venäjä</th>
        <th>Suomi</th>
        <th>Englanti</th>
      </tr>
      <table className="row">
        {daysOfWeek.map((word) => 
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
      
      
      <h1>
        <span>Months</span>
      </h1>

      <tr class="row">
        <th>Ukraina</th>
        <th>Venäjä</th>
        <th>Suomi</th>
        <th>Englanti</th>
      </tr>

      <table className="row">
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
      

      <div className="container">
        <h1>{count}</h1>
        <button onClick={increase} >+</button>
        <button onClick={decrease} >-</button>
      </div>
    </div>
  );
}

export default App;