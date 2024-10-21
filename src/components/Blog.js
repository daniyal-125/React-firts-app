import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { blogs } from '../components/blogs';
import subheaderImage from '../assets/subheader.jpg'; // Adjust the path based on your file structure
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser  } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  const navigate = useNavigate();
  const MAX_LENGTH = 100; // Maximum length of the blog content to display

  const handleBlogClick = (blog) => {
    // Navigate to the BlogDetails page, passing blog data
    navigate(`/blog/${blog.id}`, { state: blog });
  };

  // Function to truncate text
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

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
                  <div className="metro_post-thumb" onClick={() => handleBlogClick(blog)}>
                    <Link to={`/blog/${blog.id}`}>
                      <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
                    </Link>
                  </div>
                  <div className="metro_post-body">
                    <h5 className="card-title">
                      <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                    </h5>
                    <p className="card-author">
                      <FontAwesomeIcon icon={faUser} /> {/* Display the user icon */}
                      &nbsp;{blog.author || 'John Doe'} {/* Display the author or fallback to 'John Doe' */}
                    </p>
                    <p className="card-text">{truncateText(blog.content, MAX_LENGTH)}</p>
                    <Link to={`/blog/${blog.id}`} className="btn-link">
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
};

export default Blog;
