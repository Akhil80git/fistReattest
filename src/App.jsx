import React, { useState } from 'react';
import './App.css';
import Nav from './co/Nav';
import usePwa from './pwa/usePwa';

export default function App() {
  const [route, setRoute] = useState('/profile');
  const { deferredPrompt, promptInstall } = usePWA();

  function handleNavigate(path) {
    setRoute(path);
  }

  return (
    <div>
      <Nav onNavigate={handleNavigate} installApp={promptInstall} />
      <main>
        <h2>Current: {route === '/profilue' ? 'Profilexxx Page' : 'Settings Page'}</h2>
      </main>
    </div>
  );
}
