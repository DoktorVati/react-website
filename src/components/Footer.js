import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="Company Logo" />
            </Link>
            <p>Innovative solutions for modern businesses.</p>
            <div className="social-links">
              <a href="#facebook" aria-label="Facebook">FB</a>
              <a href="#twitter" aria-label="Twitter">TW</a>
              <a href="#linkedin" aria-label="LinkedIn">LI</a>
              <a href="#instagram" aria-label="Instagram">IG</a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/press">Press</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Product</h3>
            <ul>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/integrations">Integrations</Link></li>
              <li><Link to="/updates">Updates</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Support</h3>
            <ul>
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;