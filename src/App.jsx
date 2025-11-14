import React, { useEffect, useState } from 'react';
import Nav from './co/Nav';  // Adjust the path if needed

export default function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const beforeInstallPromptHandler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
    };
  }, []);

  function handleInstallApp() {
    if (!deferredPrompt) {
      alert('Install prompt not available! Make sure your browser and PWA setup is correct.');
      return;
    }
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      setDeferredPrompt(null);
    });
  }

  function handleLocationClick() {
    alert('Location clicked!');
  }

  function handleSearchClick() {
    alert('Search clicked!');
  }

  return (
    <div>
      <Nav
        installApp={handleInstallApp}
        onLocationClick={handleLocationClick}
        onSearchClick={handleSearchClick}
      />
      <main>
        {/* Your page content here */}
      </main>
      <footer style={{ textAlign: 'center', padding: '10px', marginTop: '20px' }}>
        © 2025 Warzone
      </footer>
    </div>
  );
}
