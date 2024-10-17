// src/components/BlogDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../components/blogs';

function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2>Blog post not found</h2>;
  }

  return (
    <div className="container">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <button onClick={() => window.history.back()} className="btn btn-secondary">Go Back</button>
    </div>
  );
}

export default BlogDetails;
