import React, { useEffect, useState } from "react";
import "../css/new/LXLanding.css";
import { useNavigate } from "react-router-dom";

export default function LXLanding() {

  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowToast(true), 5000);
  }, []);

  const handleBuy = () => {
    const isLoggedIn = false;

    if (!isLoggedIn) {
      document.getElementById("lx-auth-modal").style.display = "flex";
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
    <div className="lx-landing">

      {/* HERO */}
      <section className="lx-hero">
        <h1 className="lx-hero-title">
          Buy USDT at Lowest Price in India 🇮🇳
        </h1>

        <p className="lx-hero-sub">
          UPI / Bank Transfer • Instant P2P • Secure Escrow
        </p>

        <div className="lx-price">₹93 / USDT</div>

        <div className="lx-cta-group">
          <button className="lx-btn lx-btn-primary" onClick={handleBuy}>
            Buy USDT Now
          </button>

          <button className="lx-btn lx-btn-outline">
            View Best Offers
          </button>
        </div>

        <div className="lx-trust">
          🔒 Secure • 👥 10,000+ Users • ⚡ Instant Transfer
        </div>
      </section>

      {/* SOCIAL BAR */}
      <section className="lx-social">
        👥 128 users buying now • ₹12,45,000 traded today • ⭐ 4.8 • ⚡ 23 orders/hr
      </section>

      {/* HOW */}
      <section className="lx-section">
        <h2 className="lx-section-title">How to Buy USDT</h2>

        <div className="lx-steps">
          <div className="lx-step">1. Choose Seller</div>
          <div className="lx-step">2. Pay via UPI</div>
          <div className="lx-step">3. Get USDT</div>
        </div>
      </section>

      {/* SELLERS */}
      <section className="lx-section">

        <div className="lx-seller-list">
          {sellers.map((s, i) => (
            <div className="lx-card" key={i}>

              <div className="lx-card-top">
                <span className="lx-seller-name">
                  {s.name} <span className="lx-verified">✔</span>
                </span>

                <span className="lx-badge">{s.tag}</span>
              </div>

              <div className="lx-price-big">₹{s.price}</div>

              <div className="lx-meta">
                {s.completion}% • {s.orders} orders
              </div>

              <div className="lx-meta">
                Available: {s.available} USDT
              </div>

              <div className="lx-methods">
                UPI • Bank Transfer
              </div>

              <button className="lx-btn lx-btn-primary" onClick={handleBuy}>
                Buy Now
              </button>

            </div>
          ))}
        </div>

      </section>

      {/* TRUST */}
      <section className="lx-section">
        <h2 className="lx-section-title">Why Choose IOX?</h2>

        <ul className="lx-trust-list">
          <li>✔ Secure Escrow</li>
          <li>✔ Verified Sellers</li>
          <li>✔ Instant Transfer</li>
          <li>✔ 24/7 Support</li>
          <li>✔ Lowest Price</li>
        </ul>
      </section>

      {/* VIDEO */}
      <section className="lx-section">
        <h2 className="lx-section-title">New to Crypto?</h2>
        <p className="lx-sub">Learn in 30 seconds</p>

        <iframe
          className="lx-video"
          src="https://www.youtube.com/embed/SSo_EIwHSd4"
          title="How to buy USDT"
        />
      </section>

      {/* FAQ */}
      <section className="lx-section">
        <h2 className="lx-section-title">FAQ</h2>

        <div className="lx-faq">
          <p><strong>Is this safe?</strong> Yes, escrow protected.</p>
          <p><strong>Payment?</strong> UPI / Bank Transfer</p>
          <p><strong>Time?</strong> Within minutes</p>
          <p><strong>KYC?</strong> Not required for small trades</p>
        </div>
      </section>

      {/* STICKY CTA */}
      <div className="lx-sticky">
        <button onClick={handleBuy}>
          Buy USDT at ₹93
        </button>
      </div>

      {/* TOAST */}
      {showToast && (
        <div className="lx-toast">
          🔥 Someone bought 250 USDT at ₹93
        </div>
      )}

      {/* AUTH MODAL */}
      <div id="lx-auth-modal" className="lx-modal">
        <div className="lx-modal-box">
          <h3>Create account in 10 seconds</h3>
          <button className="lx-btn lx-btn-primary" onClick={()=>navigate('/register')}>
            Continue
          </button>
        </div>
      </div>

    </div>
  );
}