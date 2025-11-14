import React from 'react';

function Nav({ installApp }) {
  return (
    <nav style={{
      padding: '10px',
      backgroundColor: '#2a3443',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1>Food Delivery</h1>
      <button
        onClick={installApp}
        style={{
          marginTop: '10px',
          padding: '8px 15px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Install App
      </button>
    </nav>
  );
}

export default Nav;
