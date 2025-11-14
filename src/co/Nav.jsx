import React from 'react';
import './Nav.css';

export default function Nav({ installApp }) {
  return (
    <nav className="top-nav" style={{
      padding: '10px',
      backgroundColor: '#2a3443',
      color: 'white',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    }}>
      <button
        onClick={installApp}
        style={{
          padding: '8px 15px',
          borderRadius: '5px',
          cursor: 'pointer',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          fontSize: '16px',
        }}
      >
        Install App
      </button>
    </nav>
  );
}
