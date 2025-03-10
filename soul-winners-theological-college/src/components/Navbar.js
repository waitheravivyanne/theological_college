import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'; // Import your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Christian Soul Winners Theological College Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/about">About Us</Link></li> */}
        {/* <li><Link to="/programs">Programs</Link></li> */}
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;