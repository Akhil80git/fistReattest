import React from "react";
import "./nav.css";

function BottomNav({ activeTab = "Offer", onTabChange = () => {} }) {
  const tabs = [
    { key: "Offer", icon: "🏷️", label: "Offer" },
    { key: "Product", icon: "🎁", label: "Product" },
    { key: "Cart", icon: "🛒", label: "Cart" },
    { key: "History", icon: "⏳", label: "History" },
    { key: "Profile", icon: "👤", label: "Profile" }
  ];
  return (
    <nav className="bottomnav">
      {tabs.map(tab => (
        <div
          className={`nav-item${activeTab === tab.key ? " active" : ""}`}
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
        >
          <span className="nav-icon">{tab.icon}</span>
          <span className="nav-label">{tab.label}</span>
        </div>
      ))}
    </nav>
  );
}

export default BottomNav;
