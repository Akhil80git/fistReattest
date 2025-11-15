import React, { useState } from "react";
import Nav from "./co/Nav";
import BottomNav from "./co/BottomNav";
import "./co/Nav.css";

function App() {
  const [tab, setTab] = useState("Offer");
  return (
    <div className="app-wrapper" style={{ background: "#fafafa", minHeight: "100vh" }}>
      <Nav />
      <div style={{ minHeight: 'calc(100vh - 48px - 48px)' }}>
        {/* Page content yahan aayega... */}
      </div>
      <BottomNav activeTab={tab} onTabChange={setTab} />
    </div>
  );
}

export default App;
