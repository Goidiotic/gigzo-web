import React, { useState } from "react";
import "../css/new/UpiDepositPayment.css";
import qrImage from "../icons/upi-qr.png";

export default function UpiDepositPayment() {
  const depositAmount = 1000; // INR (minimum enforced)
  const upiId = "ioxexchange@upi";

  const [utr, setUtr] = useState("");
  const [copied, setCopied] = useState(false);

  const copyUpiId = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const submitPayment = () => {
    if (!utr || utr.length < 8) {
      alert("Please enter a valid UTR number");
      return;
    }

    console.log("UPI Deposit Submitted:", { depositAmount, utr });
    // API call here
  };

  return (
    <div className="upi-pay-wrapper">
      <div className="upi-pay-card">

        <h3 className="upi-pay-title">Complete UPI Payment</h3>

        {/* BALANCE */}
        <div className="send-balance">
            Amount
            <strong>₹150.00</strong>
        </div>

        {/* QR CODE */}
        <div className="qr-section">
          <img src={qrImage} alt="UPI QR Code" />
        </div>

        {/* UPI ID */}
        <div className="upi-id-box">
          <span>{upiId}</span>
          <button onClick={copyUpiId}>
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        {/* UTR INPUT */}
        <div className="utr-group">
          <label>UTR / Transaction Reference Number</label>
          <input
            type="text"
            placeholder="Enter UTR number"
            value={utr}
            onChange={(e) => setUtr(e.target.value)}
          />
        </div>

        {/* ACTION */}
        <button
          className="submit-btn"
          onClick={submitPayment}
          disabled={!utr}
        >
          Submit Payment
        </button>

        <p className="warning-text">
          ⚠️ Enter correct UTR to avoid verification delay.
        </p>

      </div>
    </div>
  );
}