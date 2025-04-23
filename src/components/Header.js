import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="logo">
            <img src={logo} alt="Company Logo" />
          </Link>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'is-active' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`nav ${isMenuOpen ? 'is-active' : ''}`}>
            <ul>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact" className="btn btn-primary">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;