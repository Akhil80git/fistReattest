import React, { useState } from "react";
import "./Login.css";

function Login({ onLogin, onClose }) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim()) {
      onLogin(name.trim());
    }
  };

  return (
    <div className="popup-modal-overlay">
      <div className="popup-modal">
        <button className="popup-close-btn" onClick={onClose}>&times;</button>
        <h3 style={{ marginTop: 0 }}>Login Required</h3>
        <input
          type="text"
          className="nav-login-input"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="nav-install-btn"
          style={{ width: "100%", background: "#e94277", margin: "2px 0" }}
          onClick={handleSubmit}
          disabled={!name.trim()}
        >
          Login
        </button>
        <div style={{ fontSize: 12, marginTop: 8, color: "#888" }}>
          You can close this popup using the cross icon.
        </div>
      </div>
    </div>
  );
}

export default Login;
