import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="logo-container">
      {/* Placeholder for Logo */}
      <img src="/jim_tech_logo.png" alt="Jim Tech Logo" className="logo" />
    </div>    
    <nav>
      <Link to="/">Home</Link>
      <div className="dropdown">
        <span>About Me</span>
        <ul className="dropdown-content">
          <li><Link to="/codesamples">Code Samples</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/education">Education</Link></li>
          {/* Add more specific technologies as needed */}
        </ul>
      </div>
      <div className="dropdown">
        <span>Technologies</span>
        <ul className="dropdown-content">
          <li><Link to="/domainspecific">Domain Specific</Link></li>
          <li><Link to="/languages">Languages</Link></li>
          <li><Link to="/skills">Soft Skills</Link></li>
          <li><Link to="/technologies">Technologies</Link></li>
          {/* Add more specific technologies as needed */}
        </ul>
      </div>
      <div className="dropdown">
        <span>Interaction</span>
        <ul className="dropdown-content">
          <li><Link to="/blogpage">Articles/Blogs</Link></li>
          <li><a href="https://linkedin.com/in/jamesjanelson" target="_blank" rel="noopener noreferrer">Linkedin Profile</a></li>
          <li><a href="https://njit.joinhandshake.com/stu/users/35366766" target="_blank" rel="noopener noreferrer">Handshake Profile</a></li>

        </ul>
      </div>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);
export default Header;

