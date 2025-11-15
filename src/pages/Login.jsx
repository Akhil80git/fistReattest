import React, { useState } from "react";
import "./Login.css";

function Login({ onClose, onLoginSuccess }) {
  const [activeTab, setActiveTab] = useState("login");
  const [loginName, setLoginName] = useState("");
  const [registerName, setRegisterName] = useState("");

  const handleLogin = () => {
    if (loginName.trim()) {
      onLoginSuccess(loginName.trim());
    }
  };

  const handleRegister = () => {
    if (registerName.trim()) {
      // For demo, register works same as login logic
      onLoginSuccess(registerName.trim());
    }
  };

  return (
    <div className="popup-modal-overlay">
      <div className="popup-modal">
        <button className="popup-close-btn" onClick={onClose}>&times;</button>
        <div className="login-tabs">
          <button
            className={activeTab === "login" ? "active-tab" : ""}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={activeTab === "register" ? "active-tab" : ""}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {activeTab === "login" && (
          <div className="login-form">
            <input
              type="text"
              placeholder="Enter your username"
              value={loginName}
              onChange={(e) => setLoginName(e.target.value)}
              className="nav-login-input"
            />
            <button
              className="nav-install-btn"
              disabled={!loginName.trim()}
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        )}

        {activeTab === "register" && (
          <div className="login-form">
            <input
              type="text"
              placeholder="Choose a username"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
              className="nav-login-input"
            />
            <button
              className="nav-install-btn"
              disabled={!registerName.trim()}
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
