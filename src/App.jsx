import React, { useState } from "react";
import Nav from "./co/Nav";
import BottomNav from "./co/BottomNav";
import Login from "./pages/Login";
import "./co/Nav.css";
import usePwa from "./pwa/usePwa";

function App() {
  const [tab, setTab] = useState("Offer");
  const { promptInstall, isInstalled } = usePwa();

  // Login popup state and user info
  const [showLoginPopup, setShowLoginPopup] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const shouldShowPopup = isInstalled && !isLoggedIn && showLoginPopup;

  // Handle login success
  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setShowLoginPopup(false);
    setUserName(name);
  };

  // Handle closing popup without login
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
        {shouldShowPopup && (
          <Login onLogin={handleLogin} onClose={handleClosePopup} />
        )}
        {/* Your page content here */}
      </div>
      <BottomNav activeTab={tab} onTabChange={setTab} />
    </div>
  );
}

export default App;
