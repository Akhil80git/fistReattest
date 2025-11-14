// App.jsx
import React, { useEffect, useState } from 'react';

function Nav({ installApp }) {
  return (
    <nav style={{
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

  return (
    <div>
      <Nav installApp={handleInstallApp} />
      <main>
        {/* No other page content */}
      </main>
      <footer style={{ textAlign: 'center', padding: '10px', marginTop: '20px' }}>
        © 2025 Warzone
      </footer>
    </div>
  );
}
