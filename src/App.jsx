import React, { useState } from "react";
import Nav from "./co/Nav";
import BottomNav from "./co/BottomNav";
import "./co/Nav.css";
import usePwa from "./pwa/usePwa";

function App() {
  const [tab, setTab] = useState("Offer");
  const { promptInstall, isInstalled } = usePwa();

  return (
    <div className="app-wrapper" style={{ background: "#fafafa", minHeight: "100vh" }}>
      {/* Pass installApp function and isInstalled flag to Nav */}
      <Nav installApp={promptInstall} isInstalled={isInstalled} />
      <div style={{ minHeight: "calc(100vh - 48px - 48px)" }}>
        {/* Your page content here */}
      </div>
      <BottomNav activeTab={tab} onTabChange={setTab} />
    </div>
  );
}

export default App;
