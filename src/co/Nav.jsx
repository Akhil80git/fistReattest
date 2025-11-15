import React from "react";
import "./Nav.css";

function Nav({ installApp }) {
  return (
    <nav className="topnav">
      <div className="nav-location">
        <span className="nav-location-icon">&#128205;</span>
        <span className="nav-location-text">Bhopal</span>
      </div>
      <div className="nav-search">
        <span className="nav-search-icon">&#128269;</span>
        <input className="nav-search-input" type="text" placeholder="Search for items..." />
      </div>
      <button className="nav-install-btn" onClick={installApp}>
        Install
      </button>
    </nav>
  );
}

export default Nav;
