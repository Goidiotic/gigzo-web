import React, { useState } from "react";
import "../css/new/Purchase.new.css";
import usdtIcon from "../icons/usdt.png";

export default function Purchase() {
  const [inr, setInr] = useState("");
  const [method, setMethod] = useState("upi");

  const RATE = 93;
  const usdtAmount = inr ? (inr / RATE).toFixed(2) : "0.00";
  const isUPI = method === "upi";

  return (
    <div className="purchase-wrapper">
      <div className="purchase-card">

        <h2 className="purchase-title">Buy Flash USDT</h2>

        {/* INR INPUT */}
        <div className="purchase-group">
          <label>Amount (INR)</label>
          <input
            type="number"
            placeholder="Enter amount in INR"
            value={inr}
            onChange={(e) => setInr(e.target.value)}
          />
        </div>

        {/* USDT RECEIVE */}
        <div className="usdt-box">
          <img src={usdtIcon} alt="USDT" />
          <div>
            <span>You will receive</span>
            <h3>{usdtAmount} USDT</h3>
            <p>Rate: ₹93 / USDT</p>
          </div>
        </div>

        {/* PAYMENT METHOD */}
        <div className="purchase-group">
          <label>Payment Method</label>

          <div className="method-grid">
            <button
              className={`method ${method === "upi" ? "active" : ""}`}
              onClick={() => setMethod("upi")}
            >
              📲 UPI
            </button>

            <button
              className={`method ${method === "bank" ? "active" : ""}`}
              onClick={() => setMethod("bank")}
            >
              🏦 Bank Transfer
            </button>

            <button
              className={`method ${method === "erupee" ? "active" : ""}`}
              onClick={() => setMethod("erupee")}
            >
              💳 eRupee
            </button>
          </div>

          {!isUPI && (
            <p className="method-warning">
              ⚠️ This payment method currently not available
            </p>
          )}
        </div>

        {/* CONFIRM */}
        <button
          className="pay-btn"
          disabled={!inr || !isUPI}
        >
          Pay Now
        </button>

        <p className="secure-note">
          🔒 Secure & instant USDT delivery
        </p>

      </div>
    </div>
  );
}