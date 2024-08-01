import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Contacts from './pages/Contacts.jsx';
import Task from './pages/Task.jsx';
import DaysOfWeek from './pages/DaysOfWeek.jsx';
import Months from './pages/Months.jsx';

import Navbar from './components/navbar.js';

function App() {

  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/months" element={<Months />}/>
          <Route path="/days-of-week" element={<DaysOfWeek />}/>
          <Route path="/task" element={<Task />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;