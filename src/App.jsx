import React from "react";
import Nav from "./co/Nav";

import usePwa from "./pwa/usePwa";


export default function App() {

  const handleInstallApp = usePwa();  // <-- यह जरूरी है

  return (
    <div>
      <Nav installApp={handleInstallApp} />
      <main></main>
      <footer style={{ textAlign: "center", padding: "10px" }}>
        © 2025 Warzone
      </footer>
    </div>
  );
}
