import React from 'react';

const CodeSample = ({ title, description, code }) => {
  return (
    <div className="code-sample">
      <h2>{title}</h2>
      <p>{description}</p>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

const CodeSamples = () => {
  const codeSamples = [
    {
      title: 'Sample 1',
      description: 'Description of Sample 1.',
      code: `
        // Your code for Sample 1
        const greeting = "Hello, World!";
        console.log(greeting);
      `,
    },
    {
      title: 'Sample 2',
      description: 'Description of Sample 2.',
      code: `
        // Your code for Sample 2
        function addNumbers(a, b) {
          return a + b;
        }
        console.log(addNumbers(5, 10));
      `,
    },
    // Add more code samples as needed
  ];

  return (
    <div className="code-samples-container">
      <h1>Code Samples</h1>
      {codeSamples.map((sample, index) => (
        <CodeSample key={index} {...sample} />
      ))}
    </div>
  );
};

export default CodeSamples;
