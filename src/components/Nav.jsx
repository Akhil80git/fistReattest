import React, { useState } from 'react';

export default function Nav({ installApp }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Handle location access prompt
  const handleLocationClick = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        alert(`Latitude: ${position.coords.latitude}\nLongitude: ${position.coords.longitude}`);
      },
      (error) => {
        alert('Error getting location: ' + error.message);
      }
    );
  };

  // Handle search form submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <nav style={navStyle}>
      <button onClick={handleLocationClick} style={iconButtonStyle} aria-label="Location">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white" viewBox="0 0 24 24">
          <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm0 11a7.007 7.007 0 01-6.364-9.604l-3.052 1.765 2.345 4.05L12 21zm5.364-1.604a7.007 7.007 0 01-6.364 1.604l3.232-5.28-6.1-10.54 7.183 4.035a7.053 7.053 0 005.487 10.18z"/>
        </svg>
      </button>

      <form onSubmit={handleSearchSubmit} style={searchFormStyle}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchInputStyle}
          aria-label="Search"
        />
        <button type="submit" style={searchButtonStyle} aria-label="Submit Search">
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="white" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l4.99 5L20 19.49l-5-5zM10 14a4 4 0 110-8 4 4 0 010 8z"/>
          </svg>
        </button>
      </form>

      <button onClick={installApp} style={installButtonStyle}>
        Install App
      </button>
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  backgroundColor: '#2a3443',
  padding: '6px 10px',
  boxSizing: 'border-box',
  width: '100%',
};

const iconButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6px',
};

const searchFormStyle = {
  flexGrow: 1,
  display: 'flex',
  maxWidth: '400px',
};

const searchInputStyle = {
  flexGrow: 1,
  padding: '6px 12px',
  borderRadius: '4px 0 0 4px',
  border: 'none',
  fontSize: '14px',
};

const searchButtonStyle = {
  backgroundColor: '#4caf50',
  border: 'none',
  borderRadius: '0 4px 4px 0',
  cursor: 'pointer',
  padding: '6px 12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const installButtonStyle = {
  backgroundColor: '#4caf50',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  padding: '6px 14px',
  color: 'white',
  fontSize: '14px',
  whiteSpace: 'nowrap',
};
