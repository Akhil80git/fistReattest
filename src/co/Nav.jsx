import React, { useState } from 'react';
import './Nav.css';

export default function Nav({ route, onNavigate, installApp }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick(path) {
    onNavigate(path);
    setMenuOpen(false);
  }

  return (
    <nav className={`nav${menuOpen ? ' active' : ''}`}>
      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Menu"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className={`nav-links${menuOpen ? ' show' : ''}`}>
        <a
          href="/"
          className={route === '/' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); handleClick('/'); }}
        >
          Home
        </a>
        <a
          href="/about"
          className={route === '/about' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); handleClick('/about'); }}
        >
          About
        </a>
        <button className="install-btn-nav" onClick={installApp}>
          Install App
        </button>
      </div>
    </nav>
  );
}
