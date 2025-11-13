import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>

      {/* Navigation Links (React Router Links) */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={menuOpen ? "bar active bar1" : "bar bar1"}></div>
        <div className={menuOpen ? "bar active bar2" : "bar bar2"}></div>
        <div className={menuOpen ? "bar active bar3" : "bar bar3"}></div>
      </div>
    </nav>
  );
};

export default Nav;
