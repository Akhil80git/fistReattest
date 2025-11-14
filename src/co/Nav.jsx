import React from "react";
import "./Nav.css"; // Import navbar styles

export default function Nav({ installApp }) {
  return (
    <div className="top-nav">
      <div className="left-box">
        <div className="location-box">
          <i className="fa-solid fa-location-dot"></i>
          <span>Bhopal</span>
        </div>
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search for items..." />
        </div>
      </div>
      <div className="right-box">
        <button className="install-btn" onClick={installApp}>
          Install
        </button>
      </div>
    </div>
  );
}
