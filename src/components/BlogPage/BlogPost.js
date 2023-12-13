// BlogPost.js

import React from 'react';


const BlogPost = ({ title, content, date }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p className="date">{date}</p>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;
