// DownloadCVPage.js

import React, { useState } from 'react';

const DownloadCVPage = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleDownloadClick = () => {
    // Validate company name and email
    if (validateCompanyName() && validateCompanyEmail()) {
      // Perform download or any other action
      // For now, just log the details
      console.log(`Company Name: ${companyName}`);
      console.log(`Company Email: ${companyEmail}`);
    } else {
      // Display validation error
      setValidationError('Company name and email must match accordingly');
    }
  };

  const validateCompanyName = () => {
    return /(.)\1\1/.test(companyName);
  };

  const validateCompanyEmail = () => {
    return /(.)\1\1/.test(companyEmail);
  };

  return (
    <div className="download-cv-container">
      <h1>Download CV</h1>
      {validationError && <p className="error-message">{validationError}</p>}
      <div className="input-group">
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="companyEmail">Company Email:</label>
        <input
          type="email"
          id="companyEmail"
          value={companyEmail}
          onChange={(e) => setCompanyEmail(e.target.value)}
        />
      </div>
      <button onClick={handleDownloadClick}>Download CV</button>
    </div>
  );
};

export default DownloadCVPage;
