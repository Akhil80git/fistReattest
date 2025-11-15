import React from "react";
import "./styles/Offer.css";

function Offer() {
  const offers = [
    {
      id: 1,
      title: "Flat 70% Off",
      description: "On all products",
      icon: "🎯",
      highlight: true
    },
    {
      id: 2,
      title: "Buy 2, Get 2 Free",
      description: "On selected brands",
      icon: "🛍️",
      highlight: false
    },
    {
      id: 3,
      title: "Free Express Delivery",
      description: "On all orders above ₹299",
      icon: "🚚",
      highlight: true
    },
    {
      id: 4,
      title: "Holiday Mega Sale",
      description: "Special season offers",
      icon: "🎄",
      highlight: false
    },
    {
      id: 5,
      title: "Extra Cashback",
      description: "With partner banks",
      icon: "💳",
      highlight: true
    },
    {
      id: 6,
      title: "Early Bird Special",
      description: "Limited time morning offers",
      icon: "🌅",
      highlight: false
    }
  ];

  return (
    <div className="offer-page">
      <div className="offer-header">
        <h1 className="offer-title">Massive Exclusive Offers Await You</h1>
        <p className="offer-subtitle">
          Explore the grandest deals and discounts we offer. This is your chance to save big with 
          unbeatable prices curated especially for you. Hurry before these offers expire!
        </p>
      </div>
      
      <div className="offer-grid">
        {offers.map((offer) => (
          <div 
            key={offer.id} 
            className={`offer-card ${offer.highlight ? 'offer-card-highlight' : ''}`}
          >
            <div className="offer-icon">{offer.icon}</div>
            <h3 className="offer-card-title">{offer.title}</h3>
            <p className="offer-card-desc">{offer.description}</p>
            <button className="offer-cta-btn">
              Grab Offer
            </button>
          </div>
        ))}
      </div>

      <div className="offer-banner">
        <div className="banner-content">
          <h2>Limited Time Offer!</h2>
          <p>Don't miss out on these amazing deals. Shop now and save big!</p>
          <div className="countdown-timer">
            <span>⏰ Offer ends in: 24:59:59</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;