// BlogPage.js

import React from 'react';
import BlogPost from './BlogPost'; // Adjust the import path based on your directory structure

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'Getting Started with React Hooks',
      content: 'In this blog post, we explore the basics of React Hooks and how to use them in functional components.',
      date: 'January 15, 2023',
    },
    {
      title: 'Mastering CSS Flexbox Layout',
      content: 'Learn the ins and outs of CSS Flexbox to create responsive and flexible layouts for your web projects.',
      date: 'February 5, 2023',
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="blog-page-container">
      <h1>Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

