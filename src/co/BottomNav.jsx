import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function BottomNav({ activeTab, onTabChange }) {
  const navigate = useNavigate();

  const tabs = [
    { key: "Offer", icon: "🏷️", label: "Offer", path: "/offer" },
    { key: "Product", icon: "🎁", label: "Product", path: "/product" },
    { key: "Cart", icon: "🛒", label: "Cart", path: "/cart" },
    { key: "History", icon: "⏳", label: "History", path: "/history" },
    { key: "Profile", icon: "👤", label: "Profile", path: "/profile" }
  ];

  const handleClick = (tab) => {
    onTabChange(tab.key);
    navigate(tab.path);
  };

  return (
    <nav className="BottomNav">
      {tabs.map(tab => (
        <div
          key={tab.key}
          className={`nav-item${activeTab === tab.key ? " active" : ""}`}
          onClick={() => handleClick(tab)}
        >
          <span className="nav-icon">{tab.icon}</span>
          <span className="nav-label">{tab.label}</span>
        </div>
      ))}
    </nav>
  );
}

export default BottomNav;
