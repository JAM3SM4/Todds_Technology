// components/Main/Main.js

import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => (
  <main>
    {/* Quadrant Section */}

    <div className="quadrant" onClick={() => alert('Navigate to About Us')}>
      {/* Placeholder Image for Quadrant */}
    </div>
    <div className="quadrant" onClick={() => alert('Navigate to Education & Training')}>
      {/* Placeholder Image for Quadrant */}
    </div>
    <div className="quadrant" onClick={() => alert('Navigate to Services')}>
      {/* Placeholder Image for Quadrant */}
    </div>
    <div className="quadrant" onClick={() => alert('Navigate to Contact Us')}>
      {/* Placeholder Image for Quadrant */}
    </div>
  <section className="partners-section">
  <h2>Key Technologies</h2>
        <div className="cta-container">
        <p>Explore the Key Technologies</p>
        <Link to="/Technologies" className="cta-button">
        View Technologies
        </Link>
    {/* Logos Section */}
    <div className="partners-container">
          {/* Add your company logos here */}
          <img src="/Angular_logo.png" alt="Angular" className="partner-logo" />
          <img src="/Apache_Spark_logo.png" alt="Apache Spark" className="partner-logo" />
          <img src="/dot_NET_logo.png" alt=".NET" className="partner-logo" />
          <img src="/github_logo.png" alt="Github" className="partner-logo" />
          <img src="/jupyter_logo.png" alt="Jupyter" className="partner-logo" />
          <img src="/Microsoft_365_logo.png" alt="Microsoft 365" className="partner-logo" />
          <img src="/Microsoft_Azure_Logo.png" alt="Microsoft Azure" className="partner-logo" />
          <img src="/MongoDB_Logo.png" alt="mongodb" className="partner-logo" />
          <img src="/Mysql_logo.png" alt="MySQL" className="partner-logo" />
          <img src="/Java_logo.png" alt="Java" className="partner-logo" />
          <img src="/php_logo.png" alt="PHP" className="partner-logo" />
          <img src="/Python_logo.png" alt="Python" className="partner-logo" />
          <img src="/R_logo.png" alt="R Programming" className="partner-logo" />
          <img src="/Scikit_learn_logo.png" alt="Scikit-Learn" className="partner-logo" />
          <img src="/Wordpress_logo.png" alt="wordpress" className='partner-logo'/>
          <img src="/Virtualbox_logo.png" alt="VirtualBox" className="partner-logo" />
        </div>
   </div>
   </section>
     {/* Call-to-Action */}
     <div className="cta-container">
      <h2>My Portfolio</h2>
      <p>Explore our portfolio and see what can be done for you.</p>
      <Link to="/Portfolio" className="cta-button">
        View Portfolio
      </Link>
      {/* Logos Section */}
    <div className="partners-container">

      {/* Add your previous screenshots of work here */}
        <img src="/fullymaxed.png" alt="Fullymaxed.com-car modifying website" className="partner-logo" />
        <img src="/ballymena_honda.png" alt="Ballymena Honda" className="partner-logo" />
        <img src="/gsmotorcyclesltd_website_eclipse.png" alt="Gs Motorcycles LTD, " className="portfolio-logo" />
        <img src="/airify_website.png" alt="Airify website" className="partner-logo" />
        <img src="/ledskyceilings_website.png" alt="LED sky ceilings" className="portfolio-logo" />
        
      </div>
    </div>
  </main>

);

export default Main;

/* Future modifications 
const imageSources = [
  '/fullymaxeddotcom_website_html_asp_css_adobephotoshop.png',
  '/gsmotorcyclesltd_website_eclipse.png',
  '/github-mark.png',
  '/react-mark.png',
  // Add more image sources as needed
];

  <div className="partners-container">
    {Dynamic generation of image elements}
    {imageSources.map((source, index) => (
      <img key={index} src={source} alt={`Image ${index}`} className="partner-logo" />
    ))}
  </div>
);

        <img src="/.png" alt="Gs Motorcycles LTD, " className="portfolio-logo" />
        <img src="/.png" alt="Fullymaxed.com-car modifying website" className="partner-logo" />
        <img src="/" alt="Gs Motorcycles LTD, " className="portfolio-logo" />
        <img src="/.png" alt="Fullymaxed.com-car modifying website" className="partner-logo" />
        <img src="/.png" alt="Gs Motorcycles LTD, " className="portfolio-logo" />
        <img src="/.png" alt="Fullymaxed.com-car modifying website" className="partner-logo" />
        <img src="/.png" alt="Gs Motorcycles LTD, " className="portfolio-logo" />
        <img src="/.png" alt="Fullymaxed.com-car modifying website" className="partner-logo" />
        <img src="/.png" alt="Gs Motorcycles LTD, " className="portfolio-logo" />
 */

