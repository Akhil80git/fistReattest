import React, { useEffect, useState } from 'react';

export default function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installBtnVisible, setInstallBtnVisible] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Responsive resize handler
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setMenuActive(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('Service Worker registered', reg))
        .catch(err => console.warn('SW registration failed', err));
    }

    const beforeInstallPromptHandler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setInstallBtnVisible(true);
    };

    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

    const appInstalledHandler = () => {
      setInstallBtnVisible(false);
      setDeferredPrompt(null);
      console.log('PWA installed');
    };

    window.addEventListener('appinstalled', appInstalledHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
      window.removeEventListener('appinstalled', appInstalledHandler);
    };
  }, []);

  const installApp = () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted install prompt');
      } else {
        console.log('User dismissed install prompt');
      }
      setDeferredPrompt(null);
      setInstallBtnVisible(false);
    });
  };

  // CSS Styles
  const styles = {
    header: {
      background: 'linear-gradient(135deg, #1e293b, #334155)',
      color: 'white',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    navContainer: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 2rem',
      flexWrap: 'wrap',
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: '700',
      background: 'linear-gradient(to right, #10b981, #34d399)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    navLinks: {
      display: windowWidth > 768 || menuActive ? 'flex' : 'none',
      gap: '2rem',
      alignItems: 'center',
      width: windowWidth > 768 ? 'auto' : '100%',
      flexDirection: windowWidth > 768 ? 'row' : 'column',
      background: windowWidth > 768 ? 'none' : '#1e293b',
      padding: windowWidth > 768 ? 0 : '1rem 0',
    },
    navLinkItem: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: 500,
      padding: windowWidth > 768 ? 0 : '1rem 2rem',
      borderBottom: windowWidth > 768 ? 'none' : '1px solid #334155',
      width: windowWidth > 768 ? 'auto' : '100%',
      transition: 'color 0.3s',
    },
    installBtnNav: {
      background: '#10b981',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      fontSize: '1rem',
      fontWeight: 600,
      borderRadius: 8,
      cursor: 'pointer',
      boxShadow: '0 4px 10px rgba(16, 185, 129, 0.4)',
      transition: 'all 0.3s ease',
      display: installBtnVisible ? 'inline-block' : 'none',
    },
    mobileMenuButton: {
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '1.5rem',
      cursor: 'pointer',
      display: windowWidth <= 768 ? 'block' : 'none',
    },
    hero: {
      background: 'linear-gradient(135deg, #1e293b, #334155)',
      color: 'white',
      padding: '6rem 2rem',
      textAlign: 'center',
    },
    heroH1: {
      fontSize: windowWidth <= 768 ? '2.5rem' : '3.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
      background: 'linear-gradient(to right, #10b981, #34d399)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    ctaButtons: {
      display: 'flex',
      flexDirection: windowWidth <= 768 ? 'column' : 'row',
      justifyContent: 'center',
      gap: '1rem',
      marginTop: '2rem',
    },
    btnPrimary: {
      padding: '12px 28px',
      borderRadius: 8,
      fontWeight: 600,
      textDecoration: 'none',
      background: '#10b981',
      color: 'white',
      boxShadow: '0 4px 10px rgba(16,185,129,0.4)',
      transition: 'all 0.3s',
    },
    btnPrimaryHover: {
      background: '#059669',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 15px rgba(16,185,129,0.5)',
    },
    btnSecondary: {
      padding: '12px 28px',
      borderRadius: 8,
      fontWeight: 600,
      textDecoration: 'none',
      background: 'transparent',
      color: 'white',
      border: '2px solid white',
      transition: 'all 0.3s',
    },
    btnSecondaryHover: {
      background: 'white',
      color: '#1e293b',
    },
  };

  // Handle hover styles by state (optional enhancement)

  return (
    <>
      <header style={styles.header}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>Warzone</div>
          <nav style={styles.navLinks}>
            <a href="#home" style={styles.navLinkItem}>
              Home
            </a>
            <a href="#features" style={styles.navLinkItem}>
              Features
            </a>
            <a href="#how-it-works" style={styles.navLinkItem}>
              How It Works
            </a>
            <a href="#testimonials" style={styles.navLinkItem}>
              Testimonials
            </a>
            <a href="#about" style={styles.navLinkItem}>
              About
            </a>
            {installBtnVisible && (
              <button style={styles.installBtnNav} onClick={installApp}>
                Install App
              </button>
            )}
          </nav>
          <button
            style={styles.mobileMenuButton}
            onClick={() => setMenuActive(!menuActive)}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      <section style={styles.hero} id="home">
        <h1 style={styles.heroH1}>Warzone</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 1rem', opacity: 0.9 }}>
          India's Best Car Buying & Selling Platform
        </p>
        <p>akhilesh garg name hai mera</p>

        <div style={styles.ctaButtons}>
          <a href="#features" style={styles.btnPrimary}>
            Explore Features
          </a>
          <a href="#how-it-works" style={styles.btnSecondary}>
            How It Works
          </a>
        </div>
      </section>

      {/* Additional sections like Features, Testimonials, Footer can be added here similarly */}

    </>
  );
}
