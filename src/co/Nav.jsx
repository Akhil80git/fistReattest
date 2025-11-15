import React from "react";
import "./Nav.css";

function getInitials(name) {
  if (!name) return "";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function Nav({ installApp, isInstalled, isLoggedIn, userName, openLoginModal }) {
  return (
    <nav className="topnav">
      <div className="nav-location">
        <span className="nav-location-icon">📍</span>
        <span className="nav-location-text">Bhopal</span>
      </div>
      <div className="nav-search">
        <span className="nav-search-icon">🔍</span>
        <input className="nav-search-input" type="text" placeholder="Search for items..." />
      </div>

      {!isInstalled ? (
        <button className="nav-install-btn" onClick={installApp}>Install</button>
      ) : !isLoggedIn ? (
        <button className="nav-login-text" onClick={openLoginModal}>Login</button>
      ) : (
        <div className="nav-profile-circle">
          {getInitials(userName)}
        </div>
      )}
    </nav>
  );
}

export default Nav;
