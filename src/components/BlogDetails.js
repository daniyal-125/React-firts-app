import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { blogs } from '../components/blogs';
import RecentBlogs from './RecentBlogs';


function BlogDetails() {
  const { id } = useParams(); // Access the blog ID from the URL params
  const location = useLocation();
  
  // Get the blog data either from state (navigate) or find from blogs using id
  const blog = location.state || blogs.find((b) => b.id === parseInt(id));

  // If the blog is not found, show an error
  if (!blog) {
    return <h2>Blog post not found</h2>;
  }

  return (
    <>
      <section
        className="metro_subheader dark-overlay dark-overlay-2"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="container">
          <div className="metro_subheader-inner">
            <h1>{blog.title}</h1>
          </div>
        </div>
      </section>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <div className="entry-content">
            <h2 className="entry-title">{blog.headingh2}</h2>
            <p>{blog.content}</p>
            <h2>{blog.headingh3}</h2>
            <button onClick={() => window.history.back()} className="btn btn-secondary">Go Back</button>
            </div>
          </div>
          <div className="col-md-4">
            <RecentBlogs />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
