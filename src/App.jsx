import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About'
import Accolades from './pages/Accolades';
import Connect from './pages/Connect';

function App() {
  return (
    <Router>
      <div className="bg-luxury-black min-h-screen text-white font-sans selection:bg-luxury-gold selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add placeholder routes so links don't error */}
          <Route path="/about" element={<About />} />
          <Route path="/accolades" element={<Accolades />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
         {/* <Footer /> will go here later */}
      </div>
    </Router>
  );
}

export default App;