import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Christian Soul Winners Theological College</h1>
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