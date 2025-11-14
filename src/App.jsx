import React from "react";
import Nav from "./co/Nav";
import usePWA from "./pwa/usePWA";

export default function App() {
  const { installApp } = usePWA();

  return (
    <div>
      <Nav installApp={installApp} />
    </div>
  );
}
