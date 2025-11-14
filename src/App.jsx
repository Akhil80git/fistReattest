import React from "react";
import Nav from "./co/Nav";
import usePwa from "./pwa/usePwa";

export default function App() {
  const handleInstallApp = usePwa(); // <-- PWA install handler

  return (
    <div>
      <Nav installApp={handleInstallApp} />

      <main style={{ padding: "20px" }}>
        <h2>Welcome to Warzone App</h2>
      </main>

      <footer style={{ textAlign: "center", padding: "10px", marginTop: "20px" }}>
        © 2095 Warzone
      </footer>
    </div>
  );
}
