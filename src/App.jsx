import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './co/Nav';           // Correct: co/ folder mein hai
import Home from './pages/Home';      // Fixed: pages/ folder se
import About from './pages/About';    // Fixed: pages/ folder se

export default function App() {
  const [route, setRoute] = useState(window.location.pathname);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleRoute = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', handleRoute);

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
        {route === '/' && <Home />}
        {route === '/about' && <About />}
      </main>
      <footer className="footer">
        © 2025 Warzone
      </footer>
    </div>
  );
}