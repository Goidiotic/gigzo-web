import React, { useEffect, useState } from "react";
import "../css/new/UpiPayment.new.css";
import qrImage from "../icons/upi-qr.png";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "../Axios2";

import Spinner from '../components/LoadingSpinner';
import PopupMessage from '../components/PopupMessage';

export default function UpiPayment() {
  
  const navigate = useNavigate();
  const location = useLocation();
  const {transactionId, amount} = location.state;

  const [timeLeft, setTimeLeft] = useState(600); // 10 min
  const [utr, setUtr] = useState("");
  const [subDisabled, setSubDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = () => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const submitPayment = () => {
    if (!utr || utr.length != 12) {
      alert("Please enter a valid UTR number");
      return;
    }

    navigate("/payment-verifying", {state: {transactionId}})

  };

  const validateUTR = (value) => {

    setUtr(value);

    if (value.length === 12) {
      setSubDisabled(false);
    } else {
      setSubDisabled(true);
    }

  };

  const cancelPayment = async () => {

    try {

      setIsLoading(true);

      const res = await axios.post(
        "web/private/request-cancel-upi-deposit",
        { transactionId }
      );

      if(res.data.statusCode === 1000){
        setIsLoading(false);
        setPopupMessage(res.data.message);
        navigate("/dashboard-new");
      } else {
        alert(res.data.message);
      }

    } catch(err){
      console.log(err.message);
      setIsLoading(false);
      setPopupMessage("Unable to process your request.");
    }

  };

  if(!amount) {
    return <Navigate to="/dashboard-new" />;
  }

  return (
    <>
      {(isLoading) && (
        <Spinner/>
      )}
      <PopupMessage message={popupMessage} onClose={()=>{setPopupMessage('')}} />
    
    <div className="upi-wrapper">
      <div className="upi-card">

        {/* HEADER */}
        <div className="upi-header">
          <button
            className="upi-close-btn"
            onClick={() => navigate('/transaction-history')}
          >
            ✕
          </button>
          <span>UPI Payment</span>
        </div>

        {/* TIMER */}
        <div className="upi-timer" style={{display: 'flex'}}>
          <div>⏳ Complete payment within</div>
          <strong style={{display: 'flex', justifyContent: 'right', flex: '1'}}>{formatTime()}</strong>
        </div>
        {/* ORDER INFO */}
        <div className="upi-order">
          <span>Order ID</span>
          <strong>#{transactionId}</strong>
        </div>
        {/* WALLET */}
        <div className="wallet-info">
          <span>Amount Payable</span>
          <strong>₹ {amount}</strong>
        </div>

        {/* QR */}
        <div className="qr-box">
          <img src={qrImage} alt="UPI QR" />
          <p>Scan with any UPI app</p>
        </div>

        {/* UTR INPUT */}
        <div className="utr-box">
          <label>UTR / Transaction Reference Number</label>
          <input
            type="text"
            placeholder="Enter UTR number"
            value={utr}
            onChange={(e) => validateUTR(e.target.value)}
          />
        </div>

        {/* ACTION */}
        <button
          className="paid-btn"
          onClick={submitPayment}
          disabled={subDisabled}
        >
          Submit Payment
        </button>
        <button
          className="cancel-btn"
          onClick={cancelPayment}
        >
          Cancel Payment
        </button>

        <p className="upi-warning">
          ⚠️ Do not close this page until payment is confirmed.
        </p>

      </div>
    </div>
    </>
  );
}