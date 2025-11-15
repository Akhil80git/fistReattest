import React, { useState } from "react";
import "./Login.css";

function Login({ onClose, onLoginSuccess }) {
  const [activeTab, setActiveTab] = useState("login");
  const [loginName, setLoginName] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loginName.trim() && loginPassword.trim()) {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoading(false);
      onLoginSuccess(loginName.trim());
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (registerName.trim() && registerPassword.trim() && registerPassword === confirmPassword) {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoading(false);
      onLoginSuccess(registerName.trim());
    }
  };

  const handleSocialLogin = (provider) => {
    // Social login logic here
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="popup-modal-overlay">
      <div className="popup-modal">
        <button 
          className="popup-close-btn" 
          onClick={onClose}
          aria-label="Close login modal"
        >
          &times;
        </button>
        
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Please enter your details to continue</p>
        </div>

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
          <form className="login-form" onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter your username or email"
                value={loginName}
                onChange={(e) => setLoginName(e.target.value)}
                className="nav-login-input"
                required
              />
            </div>
            
            <div className="input-group">
              <input
                type="password"
                placeholder="Enter your password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="nav-login-input"
                required
              />
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
              <button type="button" className="forgot-password">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="nav-install-btn login-submit-btn"
              disabled={!loginName.trim() || !loginPassword.trim() || isLoading}
            >
              {isLoading ? (
                <div className="loading-spinner"></div>
              ) : (
                "Login"
              )}
            </button>

            <div className="social-login">
              <p className="divider">Or continue with</p>
              <div className="social-buttons">
                <button 
                  type="button" 
                  className="social-btn google-btn"
                  onClick={() => handleSocialLogin('google')}
                >
                  <span className="social-icon">🔍</span>
                  Google
                </button>
                <button 
                  type="button" 
                  className="social-btn facebook-btn"
                  onClick={() => handleSocialLogin('facebook')}
                >
                  <span className="social-icon">📘</span>
                  Facebook
                </button>
              </div>
            </div>
          </form>
        )}

        {activeTab === "register" && (
          <form className="login-form" onSubmit={handleRegister}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Choose a username"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                className="nav-login-input"
                required
              />
            </div>
            
            <div className="input-group">
              <input
                type="password"
                placeholder="Create a password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                className="nav-login-input"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="nav-login-input"
                required
              />
            </div>

            {confirmPassword && registerPassword !== confirmPassword && (
              <p className="error-message">Passwords don't match</p>
            )}

            <div className="terms-agreement">
              <label>
                <input type="checkbox" required />
                <span>I agree to the <button type="button" className="link-btn">Terms of Service</button> and <button type="button" className="link-btn">Privacy Policy</button></span>
              </label>
            </div>

            <button
              type="submit"
              className="nav-install-btn login-submit-btn"
              disabled={!registerName.trim() || !registerPassword.trim() || registerPassword !== confirmPassword || isLoading}
            >
              {isLoading ? (
                <div className="loading-spinner"></div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;