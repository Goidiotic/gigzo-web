import React, { useEffect, useState } from "react";
import "../css/new/DepositINR.css";
import TopMenu from "../components/new/TopMenu";
import axios from '../Axios2';
import { useNavigate } from "react-router-dom";

import Spinner from '../components/LoadingSpinner';
import PopupMessage from '../components/PopupMessage';
import ExchnageMainWrapper from "./exchange/components/ExchangeMainWrapper";
import ExchnageInnerWrapper from "./exchange/components/ExchangeInnerWrapper";

export default function DepositINR() {

  const navigate = useNavigate();

  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("upi");
  const [error, setError] = useState("");
  const minDeposit = 2000;
  const [isLoading, setIsLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const [inrBalance, setInrBalance] = useState(0);
  const [usdtBalance, setUsdtBalance] = useState();

  const handleAmountChange = (value) => {

    setAmount(value);
    setError("");

    if(value && Number(value) < minDeposit){
      setError(`Minimum deposit amount is ₹${minDeposit}`);
    }

  };

  const getWalletBalance = async () => {
    try {

      const res = await axios.post('web/private/get-wallet-balance');

      if(res.data.statusCode === 1000) {
          setInrBalance(res.data.data.inrBalance);
          setUsdtBalance(res.data.data.usdtBalance);
      } else {
        console.log(res.data.message);
      }

    } catch (error) {
      console.log(error.message);
    }
  };

  const validateInputs = () => {

    if(!amount){
      setPopupMessage("Please enter deposit amount.");
      return false;
    }

    const amountNum = Number(amount);

    if(amountNum < 2000 || amountNum > 30000){
      setPopupMessage("Minimum ₹2000 and maximum ₹30000 allowed.");
      return false;
    }

    return true;
  };

  const requestUpiDeposit = async () => {

    try{

      if(!validateInputs()) return;

      setIsLoading(true);

      const res = await axios.post(
        "web/private/request-upi-deposit",
        { amount:Number(amount) }
      );

      if(res.data.statusCode === 1000){

        navigate("/upi-payment",{
          state:{
            transactionId: res.data.data.transactionId,
            amount:Number(amount)
          }
        });

      }else{
        setPopupMessage(res.data.message);
      }

    }catch(error){

      console.log(error.message);
      setPopupMessage("Unable to process request.");

    }finally{
      setIsLoading(false);
    }

  };

  useEffect(()=>{
    getWalletBalance();
  }, []);

  return (
    <>
      {(isLoading) && (
        <Spinner/>
      )}
      <PopupMessage message={popupMessage} onClose={()=>{setPopupMessage('')}} />
    <div>
    <ExchnageInnerWrapper>
    <div className="deposit-wrapper">
      <div className="deposit-card">

        <h2 className="deposit-title">Deposit INR</h2>

        {/* WALLET INFO */}
        <div className="deposit-wallet">
          <span>Balance (INR)</span>
          <strong>₹ {inrBalance}</strong>
        </div>

        {/* AMOUNT */}
        <div className="deposit-group">
          <label>Deposit Amount (INR)</label>
          <input
            type="tel"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => handleAmountChange(Number(e.target.value))}
          />
          <div className="min-note">MIN ₹{minDeposit}</div>
        </div>

        {/* PAYMENT METHOD */}
        <div className="deposit-group">
          <label>Payment Method</label>

          <div className="method-grid">
            <button
              className={`method-btn ${method === "upi" ? "active" : ""}`}
              onClick={() => setMethod("upi")}
            >
              📲 UPI
            </button>

            <button className="method-btn disabled">
              🏦 Bank Transfer
            </button>

            <button className="method-btn disabled">
              💳 eRupee
            </button>
          </div>

          {method !== "upi" && (
            <p className="method-warning">
              This payment method is currently not available
            </p>
          )}
        </div>

        {error && <p className="error-text">⚠️ {error}</p>}

        {/* ACTION */}
        <button
          className="deposit-btn"
          onClick={requestUpiDeposit}
          disabled={!amount || error}
        >
          Proceed to Pay
        </button>

        <p className="secure-note">
          🔒 Deposits are processed securely via UPI
        </p>

        <button
          className="deposit-back-btn"
          onClick={() => navigate(-1)}
        >
          ← Go Back
        </button>

      </div>
    </div>
    </ExchnageInnerWrapper>
    </div>
    </>
  );
}