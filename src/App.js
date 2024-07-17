import './App.css';
import daysOfWeek from './daysofweek.js';
import Entry from './components/Entry.jsx';
import React, { useState } from 'react';

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
      <dl className="dictionary">
        {daysOfWeek.map((word) => 
    (<Entry 
      key={word.id}
      id={word.id}
      ukrainain={word.ukrainain}
      russian={word.russian}
      finnish={word.finnish}
      english={word.english}
    />)
  )}
      </dl>

      <div className="container">
        <h1>{count}</h1>
        <button onClick={increase} >+</button>
        <button onClick={decrease} >-</button>
      </div>
    </div>
  );
}

export default App;
