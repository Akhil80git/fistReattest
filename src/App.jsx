import React from 'react';
import './App.css';
import Nav from './co/Nav';
import Home from './co/pages/Home';
import About from './co/pages/About';

export default function App() {
  // Simple route state management
  const [route, setRoute] = React.useState(window.location.pathname);

  React.useEffect(() => {
    // Listen for browser back/forward
    const handleRoute = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', handleRoute);
    return () => window.removeEventListener('popstate', handleRoute);
  }, []);

  function handleNavigate(path) {
    if (path === route) return;
    window.history.pushState({}, '', path);
    setRoute(path);
  }

  return (
    <div>
      <Nav route={route} onNavigate={handleNavigate} />
      <main>
        {route === '/' && <Home />}
        {route === '/about' && <About />}
      </main>
      <footer className="footer">
        &copy; 2025 Warzone
      </footer>
    </div>
  );
}
