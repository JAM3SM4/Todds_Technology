import React from 'react';

const Services = () => (
  <section id="services">
    <h2>My Services for Businesses like yours</h2>
    <ul>
      <li>
        <h3>Custom Software Development</h3>
        <p>We offer tailored software solutions using to meet your business needs.</p>
        <p>Key Technologies: C#</p>
      </li>
      <li>
        <h3>Web Development</h3>
        <p>Expertise and Experience in building dynamic and scalable web applications.</p>
        <p>Key Technologies: PHP</p>
      </li>
      <li>
        <h3>Content Solutions</h3>
        <p>Utilize our proficiency for content management and web development.</p>
        <p>Key Technologies: Wordpress</p>
      </li>
      <li>
        <h3>Data Science Consulting</h3>
        <p>Harness the power of data with our expertise in data science for insightful business decisions.</p>
        <p>Key Technologies: Python</p>
      </li>
      <li>
        <h3>Technology Integration</h3>
        <p>Integrate and optimize technologies to enhance your business operations.</p> 
      </li>

      {/* GitHub Integration */}
      <li>
        <h3>GitHub Integration</h3>
        <p>Utilize GitHub, a powerful platform for version control and collaborative software development, in your projects.</p>
        <p>Key Features:</p>
        <ul>
          <li>Version control for code collaboration</li>
          <li>Project management with GitHub Issues</li>
          <li>Collaborative development with pull requests</li>
        </ul>
        <p>Link to GitHub:</p>
        <a href="https://github.com/jamesjan25" target="_blank" rel="noopener noreferrer">
          <img src="/github-mark.png" alt="GitHub Logo" />
        </a>
      </li>
    </ul>
  </section>
);

export default Services;
