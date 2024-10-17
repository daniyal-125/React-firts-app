// src/components/Navbar.js
import React from 'react';

import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar-light osahan-nav shadow-sm navbar navbar-expand-lg navbar-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo-brand" />
        </NavLink >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
            Home
          </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
            About
          </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
            Contact
          </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
            Blog
          </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
            Login
          </NavLink>
          </li>
            <li className="nav-item">
            <NavLink to="/register" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
            Register
          </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
