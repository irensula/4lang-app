import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Topics from './pages/Topics.jsx';
import Contacts from './pages/Contacts.jsx';
import Login from './pages/Login.jsx';
import Sections from './pages/Sections.jsx';
import Words from './pages/Words.jsx';
import Exercises from './pages/Exercises.jsx';
import Texts from './pages/Texts.jsx';
import Songs from './pages/Songs';

import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';

import './styles/reset.css';
import './styles/main.css';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/topics" element={<Topics />} />
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/sections" element={<Sections />} />
          <Route path="/words" element={<Words />}/>
          <Route path="/exercises" element={<Exercises />}/>
          <Route path="/texts" element={<Texts />}/>
          <Route path="/songs" element={<Songs />}/>
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;