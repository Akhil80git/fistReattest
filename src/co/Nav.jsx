import React from 'react';

export default function Nav({ installApp, onLocationClick, onSearchClick }) {
  return (
    <nav style={{
      padding: '5px 10px',
      backgroundColor: '#2a3443',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '14px',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        {/* Location icon button */}
        <button onClick={onLocationClick} style={iconButtonStyle} aria-label="Location">
          📍
        </button>

        {/* Search icon button */}
        <button onClick={onSearchClick} style={iconButtonStyle} aria-label="Search">
          🔍
        </button>
      </div>

      {/* Install app button smaller */}
      <button
        onClick={installApp}
        style={{
          padding: '6px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          fontSize: '13px',
          minWidth: '80px',
        }}
      >
        Install App
      </button>
    </nav>
  );
}

const iconButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  fontSize: '18px',
  padding: '0',
  display: 'flex',
  alignItems: 'center',
};
