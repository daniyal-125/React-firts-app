// src/components/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../components/blogs';
import subheaderImage from '../assets/subheader.jpg'; // Adjust the path based on your file structure

function Blog() {
  return (
    <>
    <section className="metro_subheader dark-overlay dark-overlay-2" style={{ backgroundImage: `url(${subheaderImage})` }}>
    <div className="container">
      <div className="metro_subheader-inner">
        <h1>Latest Blogs</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Blog</li>
          </ol>
        </nav>
      </div>
    </div>
    </section>

    <div className="container mt-5">
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-md-4 mb-4">
            <div className="card metro_post">
              <div className="card-body p-0">
              <div className="metro_post-thumb">
              <Link to={`/blog/${blog.id}`}><img src={blog.image} alt={blog.title} style={{ width: '100%', height: 'auto' }} /></Link>
              </div>
                <div className="metro_post-body">
                <h5 className="card-title">
                  <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                </h5>
                <p className="card-text">{blog.content}</p>
                <Link to={`/blog/${blog.id}`} className="btn btn-primary">
                  Read More
                </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Blog;
