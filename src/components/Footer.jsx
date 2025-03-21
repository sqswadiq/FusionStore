import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-5 bottom-0" >
      <div className="container">
        <div className="row">
          {/* Store Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-primary">Fusion Store</h5>
            <p>Your one-stop shop for the latest trends in fashion and lifestyle.</p>
          </div>

          {/* Shop Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Shop</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Men</a></li>
              <li><a href="#" className="text-light text-decoration-none">Women</a></li>
              <li><a href="#" className="text-light text-decoration-none">Accessories</a></li>
              <li><a href="#" className="text-light text-decoration-none">Sale</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Customer Service</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">FAQs</a></li>
              <li><a href="#" className="text-light text-decoration-none">Shipping & Returns</a></li>
              <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Stay Updated</h6>
            <p>Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
              />
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center text-text-secondary-emphasis mt-3">
          © 2025 Fusion Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer