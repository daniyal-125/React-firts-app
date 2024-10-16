import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import './App.css'; // Ensure you import your CSS

function App() {
  return (
    <Router>
      <div className="wrapper"> {/* Added wrapper */}
        <Navbar />
        <div className="content"> {/* Content area */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
        <Footer /> {/* Footer component placed outside of Routes */}
      </div>
    </Router>
  );
}

export default App;
