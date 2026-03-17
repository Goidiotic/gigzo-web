import React, { useState } from "react";
import "../css/new/AddressWhitelist.css";
import ExchnageInnerWrapper from "./exchange/components/ExchangeInnerWrapper";

export default function AddressWhitelist() {

  const [showAdd, setShowAdd] = useState(false);
  const [otpStep, setOtpStep] = useState(false);
  const [otp, setOtp] = useState("");

  const addresses = [
    {
      id: 1,
      label: "My Binance Wallet",
      crypto: "USDT",
      network: "TRC20",
      address: "TJ9x...K29P",
      status: "active"
    },
    {
      id: 2,
      label: "Cold Wallet",
      crypto: "BTC",
      network: "BTC",
      address: "bc1q...9z0x",
      status: "inactive"
    }
  ];

  const handleAdd = () => {
    setOtpStep(true);
  };

  const verifyOtp = () => {
    if (otp.length !== 6) {
      alert("Enter valid 6-digit OTP");
      return;
    }
    console.log("Address added & verified");
    setOtpStep(false);
    setShowAdd(false);
  };

  return (
    <ExchnageInnerWrapper>
    <div className="whitelist-wrapper">
      <div className="whitelist-card">

        <div className="whitelist-header">
          <h2>Address Whitelist</h2>
          <button onClick={() => setShowAdd(true)}>➕ Add Address</button>
        </div>

        {/* ADDRESS LIST */}
        {addresses.map(addr => (
          <div className="address-card" key={addr.id}>
            <div>
              <strong>{addr.label}</strong>
              <p>{addr.crypto} • {addr.network}</p>
              <span className="addr">{addr.address}</span>
            </div>

            <div className="addr-actions">
              <span className={`status ${addr.status}`}>
                {addr.status}
              </span>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        ))}

        {/* ADD ADDRESS MODAL */}
        {showAdd && (
          <div className="modal">
            <div className="modal-card">

              {!otpStep && (
                <>
                  <h3>Add New Address</h3>

                  <input placeholder="Address Label (eg. My Wallet)" />
                  <select>
                    <option>USDT</option>
                    <option>BTC</option>
                  </select>
                  <select>
                    <option>TRC20</option>
                    <option>ERC20</option>
                  </select>
                  <input placeholder="Wallet Address" />

                  <button className="primary-btn" onClick={handleAdd}>
                    Continue
                  </button>
                  <button
                    className="secondary-btn"
                    onClick={() => setShowAdd(false)}
                  >
                    Cancel
                  </button>
                </>
              )}

              {/* OTP */}
              {otpStep && (
                <>
                  <h3>Verify OTP</h3>
                  <p className="otp-info">
                    Enter the OTP sent to your registered mobile/email.
                  </p>

                  <input
                    className="otp-input"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />

                  <button className="primary-btn" onClick={verifyOtp}>
                    Verify & Save
                  </button>
                </>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
    </ExchnageInnerWrapper>
  );
}