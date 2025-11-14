import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import RoleSelection from './pages/RoleSelection';

export default function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch((err) => {
        console.warn('Service worker registration failed:', err);
      });
    }

    const beforeInstallPromptHandler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
    };
  }, []);

  const handleInstallApp = () => {
    if (!deferredPrompt) {
      alert('Install prompt not available! Make sure your browser supports PWA and you meet install criteria.');
      return;
    }
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      setDeferredPrompt(null);
    });
  };

  return (
    <div>
      <Nav installApp={handleInstallApp} />
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        {/* Future pages */}
      </Routes>
    </div>
  );
}
