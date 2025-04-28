import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"  >HopeHub</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
        <Link to="/post-update" onClick={() => setIsOpen(false)}>Post Update</Link>
        <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
      </div>


      <div className="menu-icon" onClick={toggleMenu}>
        {/* Hamburger icon */}
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
