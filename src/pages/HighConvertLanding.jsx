import React, { useEffect, useState } from "react";
import "../css/new/HighConvert.css";
import { useNavigate } from "react-router-dom";

export default function HighConvertLanding() {

  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // connect auth later

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 5000);
  }, []);

  const handleBuy = () => {
    if (!isLoggedIn) {
      document.getElementById("loginModal").style.display = "flex";
    } else {
      navigate("/p2p/buy");
    }
  };

  const sellers = [
    {
      name: "Rahul Traders",
      price: 93,
      available: 5400,
      orders: 1200,
      completion: 98,
      tag: "Best Price"
    },
    {
      name: "CryptoFast",
      price: 93.2,
      available: 3200,
      orders: 900,
      completion: 97,
      tag: "Fast Transfer"
    }
  ];

  return (
    <div className="exchange-wrapper">

      {/* HERO */}
      <section className="hero">
        <h1>Buy USDT at Lowest Price in India 🇮🇳</h1>
        <p>UPI / Bank Transfer • Instant P2P • Secure Escrow</p>

        <div className="price">₹93 / USDT</div>

        <div className="cta-group">
          <button className="primary-btn" onClick={handleBuy}>
            Buy USDT Now
          </button>
          <button className="secondary-btn">
            View Best Offers
          </button>
        </div>

        <div className="trust-line">
          🔒 Secure • 👥 10,000+ Users • ⚡ Instant Transfer
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="social-bar">
        👥 128 users buying now &nbsp;&nbsp;
        ₹12,45,000 traded today &nbsp;&nbsp;
        ⭐ 4.8 rating &nbsp;&nbsp;
        ⚡ 23 orders completed in last hour
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <h2>How to Buy USDT in 3 Steps</h2>

        <div className="steps">
          <div className="step">1. Choose a seller</div>
          <div className="step">2. Pay via UPI / Bank</div>
          <div className="step">3. Receive USDT instantly</div>
        </div>
      </section>

      {/* SELLERS */}
      <section className="seller-section">

        {sellers.map((s, i) => (
          <div className="exchange-card" key={i}>

            <div className="seller-top">
              <span>{s.name} ✅</span>
              <span className="tag">{s.tag}</span>
            </div>

            <div className="price-big">₹{s.price}</div>

            <div className="seller-info">
              Available: {s.available} USDT
            </div>

            <div className="seller-info">
              {s.completion}% • {s.orders} orders
            </div>

            <div className="methods">
              UPI • Bank Transfer
            </div>

            <button className="primary-btn" onClick={handleBuy}>
              Buy Now
            </button>

          </div>
        ))}

      </section>

      {/* TRUST */}
      <section className="trust">
        <h2>Why Choose IOX?</h2>

        <ul>
          <li>✔ Secure Escrow Protection</li>
          <li>✔ Verified Sellers Only</li>
          <li>✔ Instant USDT Transfer</li>
          <li>✔ 24/7 Support</li>
          <li>✔ Lowest Price Guarantee</li>
        </ul>
      </section>

      {/* VIDEO */}
      <section className="video">
        <h2>New to Crypto? Watch This</h2>
        <p>Learn how to buy USDT safely in 30 seconds</p>

        <iframe
          width="100%"
          height="220"
          src="https://www.youtube.com/embed/SSo_EIwHSd4"
          title="How to buy USDT"
        />
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>FAQ</h2>

        <div className="faq-item">
          <strong>Is this safe?</strong>
          <p>Yes, all trades are protected by escrow.</p>
        </div>

        <div className="faq-item">
          <strong>How do I pay?</strong>
          <p>UPI / Bank Transfer</p>
        </div>

        <div className="faq-item">
          <strong>When will I receive USDT?</strong>
          <p>Within minutes after payment</p>
        </div>

        <div className="faq-item">
          <strong>Is KYC required?</strong>
          <p>No KYC required for small transactions.</p>
        </div>

      </section>

      {/* STICKY CTA */}
      <div className="sticky-cta">
        <button onClick={handleBuy}>
          Buy USDT at ₹93
        </button>
      </div>

      {/* FOMO POPUP */}
      {showPopup && (
        <div className="fomo-popup">
          🔥 Someone just bought 250 USDT at ₹93
        </div>
      )}

      {/* LOGIN MODAL */}
      <div id="loginModal" className="modal">
        <div className="modal-content">
          <h3>Create account to buy USDT in 10 seconds</h3>
          <button className="primary-btn">
            Continue
          </button>
        </div>
      </div>

    </div>
  );
}