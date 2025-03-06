import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyLogo</Link>
      </div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span className="dropdown-toggle">Services</span>
          <div className={`dropdown-menu ${isDropdownOpen ? "active" : ""}`}>
            <Link to="/services/web" onClick={toggleMenu}>
              Web Development
            </Link>
            <Link to="/services/mobile" onClick={toggleMenu}>
              Mobile Development
            </Link>
          </div>
        </div>
        <Link to="/contact" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;