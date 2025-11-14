import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './co/Nav';

export default function App() {
  // Routing state
  const [route, setRoute] = useState(window.location.pathname);
  // PWA Prompt state
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleRoute = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', handleRoute);

    // Service Worker registration for PWA
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    const beforeInstallPromptHandler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

    return () => {
      window.removeEventListener('popstate', handleRoute);
      window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
    };
  }, []);

  function handleNavigate(path) {
    if (path !== route) {
      window.history.pushState({}, '', path);
      setRoute(path);
    }
  }

  function handleInstallApp() {
    if (!deferredPrompt) {
      alert('Install prompt not available! Make sure your browser and PWA setup is correct.');
      return;
    }
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => setDeferredPrompt(null));
  }

  return (
    <div>
      <Nav
        route={route}
        onNavigate={handleNavigate}
        installApp={handleInstallApp}
      />
      <main>
        {/* 3 main boxes: User, Delivery Boy, Owner */}
        <div className="role-cards">
          <div className="role-card user">
            <h3>User</h3>
            <p>Normal customer for buying/selling cars</p>
          </div>
          <div className="role-card delivery">
            <h3>Delivery Boy</h3>
            <p>Delivery executive for vehicle pickups/drops</p>
          </div>
          <div className="role-card owner">
            <h3>Owner</h3>
            <p>Car owner or dealer</p>
          </div>
        </div>
      </main>
      <footer className="footer">
        &copy; 2025 Warzone
      </footer>
    </div>
  );
}
