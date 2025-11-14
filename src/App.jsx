import React, { useEffect, useState } from 'react';

export default function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installBtnVisible, setInstallBtnVisible] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('Service Worker registered', reg))
        .catch(err => console.warn('SW registration failed', err));
    }

    // Handle beforeinstallprompt event
    const beforeInstallPromptHandler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setInstallBtnVisible(true);
    };
    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

    // Handle appinstalled event
    const appInstalledHandler = () => {
      console.log('PWA was installed');
      setInstallBtnVisible(false);
      setDeferredPrompt(null);
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
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      setDeferredPrompt(null);
      setInstallBtnVisible(false);
    });
  };

  return (
    <>
      <header
        style={{
          background: 'linear-gradient(135deg, #1e293b, #334155)',
          color: 'white',
          padding: '1rem 0',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <div className="nav-container"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 2rem',
          }}
        >
          <div
            className="logo"
            style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              background: 'linear-gradient(to right, #10b981, #34d399)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Warzone
          </div>
          <nav
            className="nav-links"
            style={{
              display: menuActive ? 'flex' : 'flex',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <a href="#home" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>
              Home
            </a>
            <a href="#features" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>
              Features
            </a>
            <a href="#how-it-works" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>
              How It Works
            </a>
            <a href="#testimonials" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>
              Testimonials
            </a>
            <a href="#about" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>
              About
            </a>
            {installBtnVisible && (
              <button
                onClick={installApp}
                className="install-btn-nav"
                style={{
                  background: '#10b981',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  boxShadow: '0 4px 10px rgba(16,185,129,0.4)',
                }}
              >
                Install App
              </button>
            )}
          </nav>
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuActive(!menuActive)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'block',
            }}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="hero"
        id="home"
        style={{
          background: 'linear-gradient(135deg, #1e293b, #334155)',
          color: 'white',
          padding: '6rem 2rem',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '1rem',
            background: 'linear-gradient(to right, #10b981, #34d399)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Warzone
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: 700, margin: '0 auto 2rem', opacity: 0.9 }}>
          India's Best Car Buying & Selling Platform
        </p>
        <p>akhilesh garg name hai mera</p>
        <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          <a href="#features" className="btn btn-primary">
            Explore Features
          </a>
          <a href="#how-it-works" className="btn btn-secondary">
            How It Works
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features" style={{ padding: '5rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '1rem' }}>Why Choose Warzone?</h2>
          <p style={{ color: '#64748b', maxWidth: 600, margin: '0 auto' }}>
            We provide the best platform for buying and selling cars in India with verified listings and secure transactions.
          </p>
        </div>
        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <FeatureCard icon="fas fa-shield-alt" title="Verified Listings" description="All cars on our platform go through a rigorous verification process to ensure quality and authenticity." />
          <FeatureCard icon="fas fa-hand-holding-usd" title="Best Price Guarantee" description="We ensure you get the best possible price whether you're buying or selling your vehicle." />
          <FeatureCard icon="fas fa-tools" title="Free Inspection" description="Get a comprehensive vehicle inspection report for free before making your purchase decision." />
          <FeatureCard icon="fas fa-file-contract" title="Hassle-Free Paperwork" description="We handle all the documentation and paperwork to make your car buying/selling experience smooth." />
          <FeatureCard icon="fas fa-car" title="Wide Selection" description="Choose from thousands of verified cars across all makes, models, and price ranges." />
          <FeatureCard icon="fas fa-headset" title="24/7 Support" description="Our customer support team is available round the clock to assist you with any queries." />
        </div>
      </section>

      {/* You can add more sections like Testimonials, How It Works, Footer similarly here */}

    </>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div
      className="feature-card"
      style={{
        background: 'white',
        borderRadius: 12,
        padding: '2rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
      }}
    >
      <div className={icon} style={{ fontSize: '2.5rem', color: '#10b981', marginBottom: '1rem' }}></div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>{title}</h3>
      <p style={{ color: '#64748b' }}>{description}</p>
    </div>
  );
}
