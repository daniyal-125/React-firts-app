import React from 'react';

const Footer = () => {
  return (
    <section className="footer pt-5 pb-5">
      <div className="container">
        <div className="row">
          {/* Subscription Section */}
          <div className="col-md-4 col-sm-12">
            <h6 className="mb-3">Subscribe to our Newsletter</h6>
            <form className="newsletter-form mb-1">
              <div className="mb-3 input-group">
                <input
                  placeholder="Please enter your email"
                  type="text"
                  className="form-control"
                />
                <div className="input-group-append">
                  <button type="button" className="btn btn-primary">Subscribe</button>
                </div>
              </div>
            </form>
            <p>
              <a className="text-info" href="/register">Register now</a> to get updates on 
              <a href="/offers"> Offers and Coupons</a>
            </p>
            <div className="app">
              <p className="mb-2">DOWNLOAD APP</p>
              <a href="/"><img src="img/google.png" alt="Google Play" className="img-fluid" /></a>
              <a href="/"><img src="img/apple.png" alt="Apple Store" className="img-fluid" /></a>
            </div>
          </div>

          {/* Spacer for layout */}
          <div className="mobile-none col-md-1 col-sm-6"></div>

          {/* Links Section 1 */}
          <div className="col-md-2 col-sm-4 col-6">
            <h6 className="mb-3">About OE</h6>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Culture</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>

          {/* Links Section 2 */}
          <div className="col-md-2 col-sm-4 col-6">
            <h6 className="mb-3">For Foodies</h6>
            <ul>
              <li><a href="/">Community</a></li>
              <li><a href="/">Developers</a></li>
              <li><a href="/">Blogger Help</a></li>
              <li><a href="/">Verified Users</a></li>
              <li><a href="/">Code of Conduct</a></li>
            </ul>
          </div>

          {/* Links Section 3 */}
          <div className="m-none col-md-2 col-sm-4 col-4">
            <h6 className="mb-3">For Restaurants</h6>
            <ul>
              <li><a href="/">Advertise</a></li>
              <li><a href="/">Add a Restaurant</a></li>
              <li><a href="/">Claim your listing</a></li>
              <li><a href="/">For Businesses</a></li>
              <li><a href="/">Owner Guidelines</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
