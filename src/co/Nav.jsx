import React from 'react';
import './Nav.css';

export default function Nav({ route, onNavigate }) {
  return (
    <nav className="nav">
      <a
        href="/"
        className={route === '/' ? 'active' : ''}
        onClick={e => { e.preventDefault(); onNavigate('/'); }}
      >
        Home
      </a>
      <a
        href="/about"
        className={route === '/about' ? 'active' : ''}
        onClick={e => { e.preventDefault(); onNavigate('/about'); }}
      >
        About
      </a>
    </nav>
  );
}
