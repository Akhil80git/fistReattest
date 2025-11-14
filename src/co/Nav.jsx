import React from 'react';
import './Nav.css';

export default function Nav({ onNavigate, installApp }) {
  return (
    <nav className="nav custom-topnav">
      <button className="icon-btn" onClick={() => onNavigate('/profile')} aria-label="Profile">
        <i className="fas fa-user-circle"></i>
      </button>
      <button className="icon-btn" onClick={() => onNavigate('/settings')} aria-label="Settings">
        <i className="fas fa-cog"></i>
      </button>
      <button className="install-box-btn" onClick={installApp}>
        Install App
      </button>
    </nav>
  );
}
