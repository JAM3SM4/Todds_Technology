// components/Header/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="logo-container">
      {/* Placeholder for Logo */}
      <img src="/todds_tech_logo.png" alt="Todds Tech Logo" className="logo" />
    </div>    
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/education">Education & Training</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  </header>
);

export default Header;
