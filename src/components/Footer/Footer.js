import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section contact-info">
        <h3>Contact Us</h3>
        <p>
          📧 Email: <a href="mailto:info@toddstech.com">info@toddstech.com</a>
        </p>
        <p>
          ☎️ Phone: +1 (123) 456-7890
        </p>
      </div>

      <div className="footer-section company-info">
        <h3>Company Info</h3>
        <p>
          📍 Address: 123 Tech Street, Tech City
        </p>
        <p>
          🏢 Company Name: Todds Tech
        </p>
      </div>
      {/* Add more sections as needed */}
    </div>
  </footer>
);

export default Footer;

