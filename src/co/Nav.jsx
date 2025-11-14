import React from 'react';
import './Nav.css';

export default function Nav({ onNavigate }) {
  return (
    <nav className="nav">
      <a onClick={() => onNavigate('/home')}><i className="fas fa-home"></i> Home</a>
      <a onClick={() => onNavigate('/search')}><i className="fas fa-search"></i> Search</a>
      <a onClick={() => onNavigate('/notifications')}><i className="fas fa-bell"></i> Notifications</a>
      <a onClick={() => onNavigate('/profile')}><i className="fas fa-user"></i> Profile</a>
    </nav>
  );
}
