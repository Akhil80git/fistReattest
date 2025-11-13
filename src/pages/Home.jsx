import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* 👇 Ye vertical sidebar sirf Home page ke liye */}
      <div className="sidebar"></div>

      <div className="content">
        <h1>Welcome to the Home Page</h1>
        <p>This vertical navbar only appears on Home page.</p>
      </div>
    </div>
  );
};

export default Home;
