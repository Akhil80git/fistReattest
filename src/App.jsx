import React, { useState } from "react";
import Nav from "./co/Nav";
import BottomNav from "./co/BottomNav";
import "./co/Nav.css";
import usePwa from "./pwa/usePwa";

function App() {
  const [tab, setTab] = useState("Offer");
  const { promptInstall, isInstalled } = usePwa();

  // New states for login popup and user login
  const [showLoginPopup, setShowLoginPopup] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  // Show popup only if in app, not logged in, and not closed by user
  const shouldShowPopup = isInstalled && !isLoggedIn && showLoginPopup;

  // When login is complete
  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setShowLoginPopup(false);
    setUserName(name);
  };
  const handleClosePopup = () => setShowLoginPopup(false);

  return (
    <div className="app-wrapper" style={{ background: "#fafafa", minHeight: "100vh" }}>
      <Nav
        installApp={promptInstall}
        isInstalled={isInstalled}
        isLoggedIn={isLoggedIn}
        userName={userName}
      />
      <div style={{ minHeight: "calc(100vh - 48px - 48px)" }}>
        {/* Main page content here */}
        {shouldShowPopup && (
          <div className="popup-modal-overlay">
            <div className="popup-modal">
              <button className="popup-close-btn" onClick={handleClosePopup}>
                &times;
              </button>
              <h3 style={{ marginTop: 0 }}>Login Required</h3>
              <input
                type="text"
                className="nav-login-input"
                placeholder="Enter your name"
                style={{ padding: "8px", marginBottom: "10px", width: "100%" }}
                onChange={e => setUserName(e.target.value)}
              />
              <button
                className="nav-install-btn"
                style={{ width: "100%", background: "#e94277", margin: "2px 0" }}
                onClick={() => handleLogin(userName)}
                disabled={!userName.trim()}
              >
                Login
              </button>
              <div style={{fontSize:12, marginTop:8, color:"#888"}}>
                You can close this popup using the cross icon.
              </div>
            </div>
          </div>
        )}
      </div>
      <BottomNav activeTab={tab} onTabChange={setTab} />
    </div>
  );
}

export default App;
