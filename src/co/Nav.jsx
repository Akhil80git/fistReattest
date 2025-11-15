import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="topnav">
      <div
        className="nav-location"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/location")}
      >
        <span className="nav-location-icon">📍</span>
        <span className="nav-location-text">Bhopal</span>
      </div>
      <div className="nav-search">
        <span className="nav-search-icon">🔍</span>
        <input className="nav-search-input" type="text" placeholder="Search for items..." />
      </div>
      <button className="nav-login-text" onClick={() => navigate("/profile")}>
        Login
      </button>
    </nav>
  );
}

export default Nav;
