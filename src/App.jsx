import React, { useState, useEffect } from "react";
import "./App.css"; // apni styling is file mein dal sakte ho

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isStandalone, setIsStandalone] = useState(
    window.matchMedia("(display-mode: standalone)").matches
  );

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    window.matchMedia("(display-mode: standalone)").addEventListener("change", (e) => {
      setIsStandalone(e.matches);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  // PWA Install Button Click Logic
  const installApp = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => setDeferredPrompt(null));
    } else {
      alert("App is already installed or not supported.");
    }
  };

  // Install popup, shown only if not standalone mode
  if (!isStandalone) {
    return (
      <div className="install-popup" style={{zIndex:9999}}>
        <h3>Install Warzone App</h3>
        <p>Get the best car buying & selling experience with our app</p>
        <p><strong>akhilesh garg name hai mera</strong></p>
        <button onClick={installApp} className="install-popup-btn">Install Now</button>
      </div>
    );
  }

  // This is your full site JSX, visible in standalone/PWA mode
  return (
    <>
      <header>
        <div className="nav-container">
          <div className="logo">Warzone</div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#about">About</a>
            <button onClick={installApp} className="install-btn-nav">Install App</button>
          </nav>
          <button className="mobile-menu-btn">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Warzone</h1>
          <p>India's Best Car Buying & Selling Platform</p>
          <p>akhilesh garg name hai mera</p>
          <div className="cta-buttons">
            <a href="#features" className="btn btn-primary">Explore Features</a>
            <a href="#how-it-works" className="btn btn-secondary">How It Works</a>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="section-title">
          <h2>Why Choose Warzone?</h2>
          <p>We provide the best platform for buying and selling cars in India with verified listings and secure transactions.</p>
        </div>
        <div className="features-grid">
          {/* Each feature card */}
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
            <h3>Verified Listings</h3>
            <p>All cars on our platform go through a rigorous verification process to ensure quality and authenticity.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-hand-holding-usd"></i></div>
            <h3>Best Price Guarantee</h3>
            <p>We ensure you get the best possible price whether you're buying or selling your vehicle.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-tools"></i></div>
            <h3>Free Inspection</h3>
            <p>Get a comprehensive vehicle inspection report for free before making your purchase decision.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-file-contract"></i></div>
            <h3>Hassle-Free Paperwork</h3>
            <p>We handle all the documentation and paperwork to make your car buying/selling experience smooth.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-car"></i></div>
            <h3>Wide Selection</h3>
            <p>Choose from thousands of verified cars across all makes, models, and price ranges.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-headset"></i></div>
            <h3>24/7 Support</h3>
            <p>Our customer support team is available round the clock to assist you with any queries.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works" id="how-it-works">
        <div className="section-title">
          <h2>How It Works</h2>
          <p>Simple steps to buy or sell your car on Warzone</p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Create Account</h3>
            <p>Sign up for free and complete your profile to get started.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>List or Browse</h3>
            <p>List your car for sale or browse through thousands of verified listings.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Connect & Inspect</h3>
            <p>Connect with buyers/sellers and schedule a vehicle inspection.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Complete Deal</h3>
            <p>Finalize the deal with our assistance and complete the paperwork.</p>
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="section-title">
          <h2>What Our Customers Say</h2>
          <p>Real experiences from car buyers and sellers on our platform</p>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="testimonial-text">"I sold my car through Warzone and got a much better price than other platforms. The process was smooth and hassle-free."</div>
            <div className="testimonial-author">
              <div className="author-avatar">RK</div>
              <div className="author-info">
                <h4>Rajesh Kumar</h4>
                <p>Sold Hyundai i20</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-text">"As a first-time car buyer, I was nervous about the process. Warzone made it so easy with their verified listings and support."</div>
            <div className="testimonial-author">
              <div className="author-avatar">PS</div>
              <div className="author-info">
                <h4>Priya Sharma</h4>
                <p>Bought Maruti Swift</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-text">"The free inspection service gave me confidence in my purchase. I knew exactly what I was getting without any hidden issues."</div>
            <div className="testimonial-author">
              <div className="author-avatar">AM</div>
              <div className="author-info">
                <h4>Amit Mishra</h4>
                <p>Bought Honda City</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="install-section">
        <div className="install-container">
          <h1>Warzone</h1>
          <p>India's Best Car Buying & Selling Platform</p>
          <p>akhilesh garg name hai mera</p>
          <button onClick={installApp} className="install-btn">Install App</button>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-column">
            <h3>Warzone</h3>
            <p>India's leading platform for buying and selling pre-owned cars with trust and transparency.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Buy a Car</a></li>
              <li><a href="#">Sell a Car</a></li>
              <li><a href="#">Car Inspection</a></li>
              <li><a href="#">Car Valuation</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> New Delhi, India</li>
              <li><i className="fas fa-phone"></i> +91 9876543210</li>
              <li><i className="fas fa-envelope"></i> info@warzone.com</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>© 2023 Warzone. All rights reserved. | akhilesh garg name hai mera</p>
        </div>
      </footer>
    </>
  );
}

export default App;
