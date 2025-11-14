import React from "react";
import "./nav.css";

const Nav = ({ installApp }) => {
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
        <div className="install-btn" onClick={installApp}>
          Install
        </div>
      </div>

    </div>
  );
};

export default Nav;
