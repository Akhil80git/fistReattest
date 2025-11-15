import React from "react";
import "./Nav.css";

function Nav({ installApp, isInstalled }) {
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

      {/* Conditionally show Install button on website, Login label on app */}
      {!isInstalled ? (
        <button className="nav-install-btn" onClick={installApp}>
          Install
        </button>
      ) : (
        <div className="nav-login-text">Login</div>
      )}
    </nav>
  );
}

export default Nav;
