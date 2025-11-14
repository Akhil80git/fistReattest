import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './co/Nav';
import Home from './co/pages/Home';
import About from './co/pages/About';

export default function App() {
  const [route, setRoute] = useState(window.location.pathname);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // SPA route listener
    const handleRoute = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', handleRoute);

    // Service worker registration
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    // PWA install prompt listener
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

  // SPA navigate
  function handleNavigate(path) {
    if (path !== route) {
      window.history.pushState({}, '', path);
      setRoute(path);
    }
  }

  // PWA install
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
      <Nav
        route={route}
        onNavigate={handleNavigate}
        installApp={handleInstallApp}
      />
      <main>
        {route === '/' ? <Home /> : null}
        {route === '/about' ? <About /> : null}
      </main>
      <footer className="footer">
        &copy; 2025 Warzone
      </footer>
    </div>
  );
}
