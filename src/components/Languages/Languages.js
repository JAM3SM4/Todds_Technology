import React from 'react';

const LanguageCard = ({ language, technologies }) => {
  return (
    <div className="language-card">
      <h2>{language}</h2>
      <p>{technologies.join(', ')}</p>
    </div>
  );
};

const LanguagePage = () => {
  const languages = [
    {
      language: 'Python',
      technologies: ['Django', 'Flask', 'NumPy', 'Pandas'],
    },
    {
      language: 'PL/SQL',
      technologies: ['Oracle Database'],
    },
    {
      language: 'C#',
      technologies: ['.NET', 'ASP.NET', 'Entity Framework'],
    },
    {
      language: 'HTML',
      technologies: ['HTML5'],
    },
    {
      language: 'CSS',
      technologies: ['CSS3', 'Sass', 'LESS'],
    },
    {
      language: 'JavaScript',
      technologies: ['React.js', 'Node.js', 'Express.js'],
    },
    {
      language: 'PHP',
      technologies: ['Laravel', 'Symfony'],
    },
  ];

  return (
    <div className="languages-container">
      <h1>Programming Languages and Technologies</h1>
      <div className="language-cards">
        {languages.map((language, index) => (
          <LanguageCard key={index} {...language} />
        ))}
      </div>
    </div>
  );
};

export default LanguagePage;
