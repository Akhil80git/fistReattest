import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './co/Nav';

export default function App() {
  const [route, setRoute] = useState('/profile');
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
    const handler = (e) => { e.preventDefault(); setDeferredPrompt(e); };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  function handleNavigate(path) {
    setRoute(path);
  }

  function handleInstallApp() {
    if (!deferredPrompt) {
      alert('Install prompt not available! Make sure your PWA setup is correct.');
      return;
    }
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => setDeferredPrompt(null));
  }

  return (
    <div>
      <Nav onNavigate={handleNavigate} installApp={handleInstallApp} />
      <main>
        <h2>Current: {route === '/profile' ? 'Profile Page' : 'Settings Page'}</h2>
      </main>
    </div>
  );
}
