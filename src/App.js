import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Topics from './pages/Topics.jsx';
import Contacts from './pages/Contacts.jsx';
import Login from './pages/Login.jsx';
import Topic from './pages/Topic.jsx';

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
          <Route path="/topic/:id" element={<Topic />} />
  
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;