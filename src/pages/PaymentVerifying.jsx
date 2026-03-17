import React, { useEffect, useState } from "react";
import "../css/new/PaymentVerifying.new.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentVerifying() {
  const [status, setStatus] = useState("verifying");

  const navigate = useNavigate();

  const location = useLocation();
  const {transactionId} = location.state;

  useEffect(() => {
    // Simulate verification (replace with API polling)
    const timer = setTimeout(() => {
      setStatus("verified"); // or "failed"
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="verify-wrapper">
      <div className="verify-card">

        {status === "verifying" && (
          <>
            <div className="loader"></div>
            <h2>Verifying Payment</h2>
            <p>
              We are confirming your UPI payment.<br />
              This may take a few moments.
            </p>
          </>
        )}

        {status === "verified" && (
          <>
            <div className="success-icon">✅</div>
            <h2>Payment Verified</h2>
            <p>Your USDT will be credited shortly.</p>
          </>
        )}

        {status === "failed" && (
          <>
            <div className="fail-icon">❌</div>
            <h2>Verification Failed</h2>
            <p>Please contact support with your UTR.</p>
          </>
        )}

        {/* ORDER INFO */}
        <div className="verify-info">
          <div>
            <span>Order ID</span>
            <strong>#{transactionId}</strong>
          </div>
          <div>
            <span>Amount</span>
            <strong>₹9,300</strong>
          </div>
          <div>
            <span>Payment Method</span>
            <strong>UPI</strong>
          </div>
        </div>

        <p className="verify-note">
          ⚠️ Please do not refresh or close this page.
        </p>

        <button
          className="verify-back-btn"
          onClick={() => navigate("/transaction-history")}
        >
          Go Back
        </button>

      </div>
    </div>
  );
}