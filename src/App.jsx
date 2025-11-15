import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./co/Nav";
import BottomNav from "./co/BottomNav";

import Offer from "./pages/Offer";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Location from "./pages/Location";
import Login from "./pages/Login";

import usePwa from "./pwa/usePwa";

import "./co/Nav.css";
import "./pages/styles/shared.css";

function App() {
  const [activeTab, setActiveTab] = useState("Offer");
  const { promptInstall, isInstalled } = usePwa();

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLoginSuccess = (name) => {
    setUserName(name);
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  return (
    <Router>
      <div className="app-wrapper" style={{ background: "#fafafa", minHeight: "100vh" }}>
        <Nav
          installApp={promptInstall}
          isInstalled={isInstalled}
          isLoggedIn={isLoggedIn}
          userName={userName}
          openLoginModal={() => setIsLoginModalOpen(true)}
        />
        <div style={{ paddingTop: 48, paddingBottom: 48, minHeight: "calc(100vh - 96px)" }}>
          <Routes>
            <Route path="/" element={<Navigate to="/offer" replace />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile userName={userName} />} />
            <Route path="/location" element={<Location />} />
            {/* Fallback route can be added here for 404 */}
          </Routes>
        </div>
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
        {isLoginModalOpen && (
          <Login onClose={() => setIsLoginModalOpen(false)} onLoginSuccess={handleLoginSuccess} />
        )}
      </div>
    </Router>
  );
}

export default App;
