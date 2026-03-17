import React from "react";
import "../css/new/TransactionDetails.new.css";
import usdtIcon from "../icons/usdt.png";

export default function TransactionDetails() {
  const tx = {
    id: "TXN123456789",
    type: "purchase", // purchase | receive | send
    status: "Completed", // Completed | Pending | Failed
    inrAmount: 9300,
    usdtAmount: 100,
    paymentMethod: "UPI",
    date: "02 Mar 2026",
    time: "10:42 AM"
  };

  return (
    <div className="tx-wrapper">
      <div className="tx-card">

        <h2 className="tx-title">Transaction Details</h2>

        {/* STATUS */}
        <div className={`tx-status ${tx.status.toLowerCase()}`}>
          {tx.status}
        </div>

        {/* USDT SUMMARY */}
        <div className="tx-usdt">
          <img src={usdtIcon} alt="USDT" />
          <div>
            <span>Amount</span>
            <h3 className={tx.type}>
              {tx.type === "send" ? "-" : "+"}
              {tx.usdtAmount} USDT
            </h3>
          </div>
        </div>

        {/* DETAILS */}
        <div className="tx-box">
          <div className="tx-row">
            <span>Transaction ID</span>
            <strong>{tx.id}</strong>
          </div>

          <div className="tx-row">
            <span>Type</span>
            <strong className={tx.type}>{tx.type}</strong>
          </div>

          <div className="tx-row">
            <span>INR Amount</span>
            <strong>₹{tx.inrAmount}</strong>
          </div>

          <div className="tx-row">
            <span>Payment Method</span>
            <strong>{tx.paymentMethod}</strong>
          </div>

          <div className="tx-row">
            <span>Date</span>
            <strong>{tx.date}</strong>
          </div>

          <div className="tx-row">
            <span>Time</span>
            <strong>{tx.time}</strong>
          </div>
        </div>

        {/* SUPPORT */}
        <div className="tx-support">
          <p>Need help with this transaction?</p>
          <button>Contact Support</button>
        </div>

      </div>
    </div>
  );
}