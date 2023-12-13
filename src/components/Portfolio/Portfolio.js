import React from 'react';

const ProjectSection = ({ title, description, technologies, link, image }) => {
  return (
    <div className="project-section">
      <img src={image} alt={title} className="project-image" />
      <div className="project-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Technologies: {technologies.join(', ')}</p>
        {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
      </div>
    </div>
  );
};

const AchievementSection = ({ title, description, date, image }) => {
  return (
    <div className="achievement-section">
      <img src={image} alt={title} className="achievement-image" />
      <div className="achievement-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Date: {date}</p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = [

    {
      title: 'NJIT, Bank of - 2022',
      description: 'Collaborated with designers and stakeholders to align development efforts with business objectives.',
      technologies: ['HTML, CSS, PHP, MySQL and Relation Database Management'],
      link: '',
      image:'njit_database.png',
    },
    {
      title: 'Web Development - 2021',
      description: 'Collaborated with designers and stakeholders to align development efforts with business objectives.',
      technologies: ['Wordpress'],
      link: 'https://aspireinside.co.uk/',
      image:'airify_website800.png',
    },
    {
      title: 'Web Development - 2012-13',
      description: 'Collaborated with designers and stakeholders to align development efforts with business objectives.',
      technologies: ['Media Solutions Back End'],
      link: 'https://ballymenahonda.co.uk/',
      image: 'ballymena_honda800.png',
    },
    {
      title: 'Web Development - 2009-2011',
      description: 'Collaborated with designers and stakeholders to align development efforts with business objectives.',
      technologies: ['Wordpress'],
      link: 'https://gsmotorcyclesltd.com/',
      image:'gsmotorcyclesltd800.png',
    },
    {
      title: 'Web Development - 2003-05',
      description: 'This website seamlessly integrates an ASP.NET webshop, a PHP-powered forum, and HTML/CSS elements, offering a dynamic and multifaceted online platform.',
      technologies: ['ASP.NET, PHP, HTML, CSS'],
      link: 'n/a',
      image:'fullymaxed800.png',
    },

  // Add more project items with images
  ];
  const achievements = [
    {
      title: 'Hackathon Winner',
      description: 'Secured first place in a regional hackathon for innovative use of technology.',
      date: 'May 2022',
      image: 'path/to/hackathon_image.jpg',
    },
    {
      title: 'Certification Completion',
      description: 'Successfully completed React.js certification from a recognized online platform.',
      date: 'June 2022',
    },
    {
      title: 'Google Ad-words Completion',
      description: 'Successfully completed Google Ad-words exams',
      date: 'June 2017',
    },
    // Add more achievement items with images
  ];

  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>
      <div className="project-sections">
        {projects.map((project, index) => (
          <ProjectSection key={index} {...project} />
        ))}
      </div>
      <div className="achievement-sections">
        {achievements.map((achievement, index) => (
          <AchievementSection key={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
