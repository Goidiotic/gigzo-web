import React, { useState } from "react";
import "../css/new/SendCrypto.new.css";

export default function CryptoSend() {

  const wallet = {
    USDT: {
      balance: 1525.152562,
      networks: ["TRC20", "ERC20", "BEP20"]
    },
    BTC: {
      balance: 0.2546,
      networks: ["BTC"]
    }
  };

  const [crypto, setCrypto] = useState("USDT");
  const [network, setNetwork] = useState("TRC20");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const balance = wallet[crypto].balance;

  const setMax = () => {
    setAmount(balance);
    setError("");
  };

  const handleConfirm = () => {
    if (!address || address.length < 10) {
      setError("Invalid wallet address");
      return;
    }
    if (!amount || amount <= 0) {
      setError("Invalid amount");
      return;
    }
    if (amount > balance) {
      setError("Amount exceeds balance");
      return;
    }

    setError("");
    setStep(2); // move to OTP
  };

  const handleOtpVerify = () => {
    if (otp.length !== 6) {
      setError("Enter valid 6-digit OTP");
      return;
    }

    // API call here
    console.log("Crypto Send Confirmed", {
      crypto, network, address, amount, otp
    });
  };

  return (
    <div className="crypto-send-wrapper">
      <div className="crypto-send-card">

        <h2 className="crypto-send-title">
          {step === 1 ? "Send Crypto" : "Verify OTP"}
        </h2>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            {/* CRYPTO */}
            <div className="send-group">
              <label>Select Crypto</label>
              <select
                value={crypto}
                onChange={(e) => {
                  setCrypto(e.target.value);
                  setNetwork(wallet[e.target.value].networks[0]);
                }}
              >
                {Object.keys(wallet).map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* NETWORK */}
            <div className="send-group">
              <label>Select Network</label>
              <select
                value={network}
                onChange={(e) => setNetwork(e.target.value)}
              >
                {wallet[crypto].networks.map(net => (
                  <option key={net}>{net}</option>
                ))}
              </select>
            </div>

            {/* BALANCE */}
            <div className="send-balance">
              Available Balance
              <strong>{balance} {crypto}</strong>
            </div>

            {/* ADDRESS */}
            <div className="send-group">
              <label>Recipient Address</label>
              <input
                type="text"
                placeholder={`Enter ${crypto} address`}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* AMOUNT */}
            <div className="send-group">
              <label>Amount</label>
              <div className="amount-box">
                <input
                  type="number"
                  value={amount}
                  placeholder="Enter amount"
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
                <button onClick={setMax}>MAX</button>
              </div>
            </div>

            {error && <p className="error-text">⚠️ {error}</p>}

            <button className="send-btn" onClick={handleConfirm}>
              Confirm
            </button>
          </>
        )}

        {/* STEP 2 OTP */}
        {step === 2 && (
          <>
            <p className="otp-info">
              Enter the 6-digit OTP sent to your registered mobile/email.
            </p>

            <input
              className="otp-input"
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            {error && <p className="error-text">⚠️ {error}</p>}

            <button className="send-btn" onClick={handleOtpVerify}>
              Verify & Send
            </button>

            <button className="back-btn" onClick={() => setStep(1)}>
              ← Back
            </button>
          </>
        )}

      </div>
    </div>
  );
}