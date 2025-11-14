import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './co/Nav';
import Home from './co/pages/Home';
import About from './co/pages/About';

export default function App() {
  // SPA Routing
  const [route, setRoute] = useState(window.location.pathname);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installBtnVisible, setInstallBtnVisible] = useState(false);

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
      setInstallBtnVisible(true);
    };
    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

    // App installed handler
    const appInstalledHandler = () => {
      setInstallBtnVisible(false);
      setDeferredPrompt(null);
    };
    window.addEventListener('appinstalled', appInstalledHandler);

    return () => {
      window.removeEventListener('popstate', handleRoute);
      window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
      window.removeEventListener('appinstalled', appInstalledHandler);
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
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      setDeferredPrompt(null);
      setInstallBtnVisible(false);
    });
  }

  return (
    <div>
      <Nav
        route={route}
        onNavigate={handleNavigate}
        installBtnVisible={installBtnVisible}
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
