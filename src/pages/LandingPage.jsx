import React from "react";
import "../css/new/LandingPage.new.css";
import logo from "../img/Logo.png";

export default function Landing() {
  return (
    <div className="landing-wrapper">

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Buy USDT at ₹93 / USDT</h1>
          <p>Instant delivery • Decentralized • Secure</p>
          <button className="primary-btn">Buy USDT Now</button>
        </div>
      </section>

      {/* POPULAR CRYPTO */}
      <section className="section">
        <h2>Popular Cryptocurrencies</h2>
        <div className="crypto-grid">
          <div className="crypto-card">USDT</div>
          <div className="crypto-card">BTC</div>
          <div className="crypto-card">ETH</div>
          <div className="crypto-card">BNB</div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section dark">
        <h2>Why ioxExchange?</h2>
        <div className="feature-grid">
          <div className="feature-card">⚡ Instant Settlement</div>
          <div className="feature-card">🔐 Secure & Decentralized</div>
          <div className="feature-card">📱 Mobile Friendly</div>
          <div className="feature-card">💸 Best Market Price</div>
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section className="section">
        <h2>Payment Methods</h2>
        <div className="payment-grid">
          <div className="payment-card">🏦 Bank Transfer</div>
          <div className="payment-card">📲 UPI</div>
          <div className="payment-card">💳 eRupee</div>
        </div>
      </section>

      {/* CUSTOMER FEEDBACK */}
      <section className="section dark">
        <h2>What Our Customers Say</h2>
        <div className="feedback-grid">
          <div className="feedback-card">
            ⭐⭐⭐⭐⭐
            <p>Fastest USDT delivery I’ve ever used.</p>
            <span>— Rahul, India</span>
          </div>
          <div className="feedback-card">
            ⭐⭐⭐⭐⭐
            <p>UPI support is super smooth!</p>
            <span>— Ayesha</span>
          </div>
          <div className="feedback-card">
            ⭐⭐⭐⭐☆
            <p>Reliable exchange with good pricing.</p>
            <span>— Arjun</span>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="section support">
        <h2>24/7 Support</h2>
        <p>We are always here to help you</p>
        <button className="secondary-btn">Contact Support</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <img src={logo} alt="ioxExchange" />
        <p>© 2026 ioxExchange.com — All Rights Reserved</p>
      </footer>

    </div>
  );
}