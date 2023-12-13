import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faHandshake } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-section contact-info">
        <h3>Contact Me</h3>
        <p>
          Email: <a href="mailto:james.ja.nelson@gmail.com">james.ja.nelson@gmail.com</a>
        </p>
        <p>
          Phone: (+44) 7790 715 729
          Phone: (+1)  201-519-5809
        </p>
      </div>

      <div className="footer-section company-info">
        <h3>My Whereabouts</h3>
        <p>
          Address: Lisburn, UK | Ridgewood, USA 
        </p>
      </div>
      <div className="footer-section social-media-icons">
        <h3>Connect with Me</h3>
        <a href="https://www.linkedin.com/in/jamesjanelson" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      </div>
    </div>
  </footer>
);

export default Footer;

