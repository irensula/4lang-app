import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Contacts from './pages/Contacts.jsx';
import Task from './components/Task.jsx';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/task" element={<Task />}/>
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;