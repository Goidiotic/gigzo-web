import React, { useEffect, useState } from "react";
import "../css/new/Exchange.css";
import TopMenu from "../components/new/TopMenu";
import axios from "../Axios2";
import { useNavigate } from "react-router-dom";
import ExchnageMainWrapper from "./exchange/components/ExchangeMainWrapper";

export default function Exchange() {

  const navigate = useNavigate();

  const [rate, setRate] = useState(93);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  // Exchange Details
  const [minExchange, setMinExchange] = useState(0);
  const [maxExchange, setMaxExchange] = useState(0);
  const [currentExchangeRate, setCurrentExchangeRate] = useState(0);

  // Wallet Balance
  const [inrBalance, setInrBalance] = useState(0);
  const [usdtBalance, setUsdtBalance] = useState(0);

  const handleAmountChange = (value) => {
    setAmount(value);
    setError("");

    if (value && value < minExchange) {
      setError(`Minimum exchange amount is ₹${minExchange}`);
    }

    if (value > inrBalance) {
      setError("Amount exceeds wallet balance");
    }
  };

  const setMaxAmount = () => {
    setAmount(inrBalance);
    setError("");
  };

  const usdtReceive = amount ? (amount / currentExchangeRate).toFixed(6) : "0.000000";

  // Get Exchange Details
  const getExchangeDetails = async () => {
    try {

      const res = await axios.post('web/private/get-exchange-details');

      if(res.data.statusCode === 1000) {
        setMinExchange(res.data.data.settings.minExchange);
        setMaxExchange(res.data.data.settings.maxExchange);
        setCurrentExchangeRate(res.data.data.settings.currentRate);
      } else {
        console.log(res.data.message);
      }

    } catch (error) {
      console.log(error.message);
    }
  };

  // Get Wallet Balance
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

  const handleExchange = async() => {
    try {

      const res = await axios.post('web/private/exchange-inr', {amount: amount});

      if(res.data.statusCode === 1000) {
        navigate("/transaction-success", {
          state: res.data.data
        });
      }

    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect( ()=>{
    getExchangeDetails();
    getWalletBalance();
  }, []);

  return (
    <ExchnageMainWrapper>
    
    <div className="exchange-wrapper">
      <div className="exchange-card">

        <h2 className="exchange-title">Exchange INR → USDT</h2>

        {/* RATE */}
        <div className="exchange-rate">
          Current Rate: <strong>₹{currentExchangeRate} / USDT</strong>
          <span>• Updates every minute</span>
        </div>

        {/* WALLET */}
        <div className="wallet-info">
          <span>INR Balance</span>
          <strong>₹ {inrBalance}</strong>
        </div>
        <div className="wallet-info">
          <span>USDT Balance</span>
          <strong>{Number(usdtBalance).toFixed(6)} USDT</strong>
        </div>

        {/* INPUT */}
        <div className="exchange-input">
          <label>Amount (INR)</label>
          <div className="input-box">
            <input
              type="tel"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => handleAmountChange(Number(e.target.value))}
            />
            <button onClick={setMaxAmount}>MAX</button>
          </div>
          <div className="min-note">MIN ₹{minExchange}</div>
        </div>

        {/* OUTPUT */}
        <div className="exchange-output">
          <span>You will receive</span>
          <h3>{usdtReceive} USDT</h3>
        </div>

        {error && <p className="error-text">⚠️ {error}</p>}

        {/* ACTION */}
        <button
          className="exchange-btn"
          disabled={!amount || error}
          onClick={handleExchange}
        >
          Exchange Now
        </button>

        <p className="secure-note">
          🔒 Exchange happens instantly at current rate
        </p>

      </div>
    </div>
</ExchnageMainWrapper>
  );
}