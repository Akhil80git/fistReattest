import React, { useState } from "react";
import Nav from "./co/Nav";
import BottomNav from "./co/BottomNav";
import "./co/Nav.css";
import usePwa from './pwa/usePwa';

function App() {
  const [tab, setTab] = useState("Offer");
  const { promptInstall } = usePwa();

  return (
    <div className="app-wrapper" style={{ background: "#fafafa", minHeight: "100vh" }}>
      <Nav installApp={promptInstall} />
      <div style={{ minHeight: 'calc(100vh - 48px - 48px)' }}>
        {/* Page content here */}
      </div>
      <BottomNav activeTab={tab} onTabChange={setTab} />
    </div>
  );
}

export default App;
