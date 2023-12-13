import React from 'react';
import ProjectCard from './ProjectCard'; // Assuming you have a ProjectCard component

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1. Briefly explain what you did and the technologies used.',
      image: 'project1.jpg', // Placeholder image file name
      demoLink: 'https://example.com/project1-demo',
      codeLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2. Briefly explain what you did and the technologies used.',
      image: 'project2.jpg', // Placeholder image file name
      demoLink: 'https://example.com/project2-demo',
      codeLink: 'https://github.com/yourusername/project2',
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
