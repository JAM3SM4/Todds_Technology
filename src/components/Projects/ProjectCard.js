import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={require(`./images/${project.image}`).default} alt={project.title} />
      <div className="project-details">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="project-links">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
