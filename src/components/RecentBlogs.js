import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../components/blogs';

const RecentBlogs = () => {
  // Sort blogs by date (newest first)
  const sortedBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Limit to the latest 3 blogs (or any number you want)
  const recentBlogs = sortedBlogs.slice(0, 3);

  return (
    <div className="recent-blogs">
      <h2 className="mb-4">Recent Blogs</h2>
      <div className="row">
        {recentBlogs.map((blog) => (
          <div key={blog.id} className="col-md-12 mb-4">
            <div className="card metro_post border-0 bg-transparent">
              <div className="card-body p-0 d-flex align-items-center bg-transparent">
                <div className="metro_post-thumb">
                  <Link to={`/blog/${blog.id}`}>
                    <img src={blog.image} alt={blog.title} style={{ width: '100%', height: 'auto' }} />
                  </Link>
                </div>
                <div className="metro_post-body border-0 p-3 bg-transparent">
                  <h5 className="card-title">
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                  </h5>
                  {/* <p className="card-author">{blog.author || "John Doe"}</p>
                  <p className="card-date">{new Date(blog.date).toDateString()}</p>
                  <p className="card-text">{blog.content.substring(0, 100)}...</p>
                  <Link to={`/blog/${blog.id}`} className="btn-link">
                    Read More
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
