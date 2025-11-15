import React, { useState } from "react";
import Nav from "./co/Nav";
import BottomNav from "./co/BottomNav";
import Login from "./pages/Login";
import "./co/Nav.css";
import usePwa from "./pwa/usePwa";

function App() {
  const [tab, setTab] = useState("Offer");
  const { promptInstall, isInstalled } = usePwa();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLoginSuccess = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
    setIsModalOpen(false);
  };

  return (
    <div className="app-wrapper" style={{background: "#fafafa", minHeight: "100vh"}}>
      <Nav
        installApp={promptInstall}
        isInstalled={isInstalled}
        isLoggedIn={isLoggedIn}
        userName={userName}
        openLoginModal={() => setIsModalOpen(true)}
      />
      <div style={{minHeight: "calc(100vh - 48px - 48px)"}}>
        {isModalOpen && (
          <Login
            onClose={() => setIsModalOpen(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        )}
        {/* Page content */}
      </div>
      <BottomNav activeTab={tab} onTabChange={setTab} />
    </div>
  );
}

export default App;
