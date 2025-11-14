import React, { useState } from 'react';
import './App.css';
import Nav from './co/Nav';
import FooterNav from './co/FooterNav';

export default function App() {
  const [route, setRoute] = useState('/home');

  function handleNavigate(path) {
    setRoute(path);
  }

  function handleDownload() {
    alert("Download action chala! Yahan aap APK ya file ka link laga sakte hain.");
  }

  return (
    <div>
      <Nav onNavigate={handleNavigate} />
      <main style={{minHeight:'75vh', padding:'1rem'}}>
        <h2>Current Route: {route}</h2>
        {/* Apni route ke hisaab se UI dikha sakte hain */}
      </main>
      <FooterNav onNavigate={handleNavigate} onDownload={handleDownload} />
    </div>
  );
}
