import React from 'react';

const ProjectCard = ({ title, description, technologies, demoLink, codeLink }) => {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Technologies: {technologies.join(', ')}</p>
      <div className="project-links">
        {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>}
        {codeLink && <a href={codeLink} target="_blank" rel="noopener noreferrer">Code</a>}
      </div>
    </div>
  );
};

const DomSpec = () => {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A fully functional e-commerce platform with product listings, shopping cart, and checkout.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      demoLink: 'https://example.com/ecommerce-demo',
      codeLink: 'https://github.com/yourusername/ecommerce-project',
    },
    {
      title: 'Blog Platform',
      description: 'A blog platform where users can create, edit, and delete blog posts.',
      technologies: ['Django', 'SQLite', 'Bootstrap'],
      demoLink: 'https://example.com/blog-demo',
      codeLink: 'https://github.com/yourusername/blog-platform',
    },
    // Add more projects as needed
  ];

  return (
    <div className="web-development-projects-container">
      <h1>Web Development Projects</h1>
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default DomSpec;
