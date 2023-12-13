import React from 'react';
import { Link } from 'react-router-dom';

const EducationTraining = () => (
  <section id="education">
    <h2>Educational & Training</h2>
    <div className="certificate-container">
      <div className="certificate">
        <img src="/placeholder1.png" alt="Certificate 1" className="certificate-image" />
        <h3>Associates Degree in Computing</h3>
        <p>Northern Regional College</p>
        <Link to="/certificate/computing">Learn More</Link>
      </div>

      <div className="certificate">
        <img src="/placeholder2.png" alt="Certificate 2" className="certificate-image" />
        <h3>Bachelor of Science, Computing, First Class Honors</h3>
        <p>University of Ulster</p>
        <Link to="/certificate/business">Learn More</Link>
      </div>

      <div className="certificate">
        <img src="/placeholder3.png" alt="Certificate 3" className="certificate-image" />
        <h3>Masters of Science, Data (Computational Track)</h3>
        <p>New Jersey Institute of Technology</p>
        <Link to="/certificate/masters">Learn More</Link>
      </div>

      <div className="certificate">
        <img src="/placeholder4.png" alt="Certificate 4" className="certificate-image" />
        <h3>Deans List Award</h3>
        <p>University of Ulster</p>
        <Link to="/certificate/masters">Learn More</Link>
      </div>
      {/* Add up to 3 more certificates as needed */}
    </div>
  </section>
);

export default EducationTraining;
