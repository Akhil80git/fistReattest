import React from "react";
import "./styles/Offer.css";

function Offer() {
  return (
    <div className="offer-page">
      <h1>Massive Exclusive Offers Await You</h1>
      <p>
        Explore the grandest deals and discounts we offer. This is your chance to save big with 
        unbeatable prices curated especially for you. Hurry before these offers expire!
      </p>
      <ul className="offer-list">
        <li>Flat 70% off on all products</li>
        <li>Buy 2, Get 2 Free on selected brands</li>
        <li>Free express delivery on all orders above ₹299</li>
        <li>Special holiday season mega sale</li>
        <li>Extra cashback with partner banks</li>
      </ul>
    </div>
  );
}

export default Offer;
