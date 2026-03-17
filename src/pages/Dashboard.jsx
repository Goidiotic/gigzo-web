import React from "react";
import "../css/new/Dashboard.new.css";
import TopMenu from "../components/new/TopMenu";
import BottomMenu from "../components/new/BottomMenu";
import ExchnageInnerWrapper from "./exchange/components/ExchangeInnerWrapper";

export default function Dashboard(){

  return (
    <ExchnageInnerWrapper>
    <div className="dashboard-wrapper">

      <div className="dashboard-container">

        {/* MAIN GRID */}
        <div className="main-grid">

          {/* WALLET CARDS */}
          <div className="wallet-section">

            <div className="wallet-card">

              <div className="wallet-header">
                <span>INR Wallet</span>
              </div>

              <h2>₹ 12,500</h2>

              <div className="wallet-actions">
                <button>Deposit</button>
                <button>Withdraw</button>
              </div>

              <div className="wallet-chart">
                <div className="donut"></div>
              </div>

            </div>

            <div className="wallet-card">

              <div className="wallet-header">
                <span>Crypto Wallet</span>
              </div>

              <h2>152.75 USDT</h2>

              <div className="wallet-actions">
                <button>Send</button>
                <button>Receive</button>
              </div>

              <div className="wallet-chart">
                <div className="donut"></div>
              </div>

            </div>

          </div>

          {/* QUICK EXCHANGE */}
          <div className="exchange-card2">

            <h3>Quick Exchange</h3>

            <div className="exchange-input">
              <label>Amount (INR)</label>
              <input placeholder="Enter amount" />
            </div>

            <div className="exchange-rate">
              Rate: ₹93 / USDT
            </div>

            <div className="exchange-output">
              You Receive: <strong>10.75 USDT</strong>
            </div>

            <button className="exchange-btn">
              Exchange Now
            </button>

          </div>

        </div>

      </div>

    </div>
    </ExchnageInnerWrapper>
  );
}