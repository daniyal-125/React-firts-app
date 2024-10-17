import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import './App.css';
import Register from "./components/Register";
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        {/* Always show Navbar */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        {/* Render FooterConditionally component */}
        <FooterConditionally />
      </div>
    </Router>
  );
}

function FooterConditionally() {
  const location = useLocation();
  
  // Array of paths where the footer should be hidden
  const hiddenFooterPaths = ['/register', '/login'];

  // Conditionally render Footer, hiding it on specified routes
  return !hiddenFooterPaths.includes(location.pathname) ? <Footer /> : null;
}

export default App;
