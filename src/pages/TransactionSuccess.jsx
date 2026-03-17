import React from "react";
import TopMenu from "../components/new/TopMenu";
import "../css/new/TransactionSuccess.new.css";
import { Navigate, useLocation } from "react-router-dom";
import ExchnageMainWrapper from "./exchange/components/ExchangeMainWrapper";
import ExchnageInnerWrapper from "./exchange/components/ExchangeInnerWrapper";

export default function TransactionSuccess() {

    const location = useLocation();
    const data = location.state;

    if(!data){
        return <Navigate to="/dashboard-new" />;
    }

    const {
        transactionId,
        rate,
        inrAmount,
        usdtAmount,
        wallet
    } = data || {};

    return (
        <div>
        <ExchnageInnerWrapper>

        <div className="success-wrapper">
            <div className="success-card">

            <div className="success-icon">✅</div>

            <h2>Exchange Successful</h2>

            <p className="success-message">
                Your INR has been successfully converted to USDT.
            </p>

            <div className="transaction-details">

                <div className="detail-row">
                <span>Transaction ID</span>
                <strong>{transactionId}</strong>
                </div>

                <div className="detail-row">
                <span>Exchange Rate</span>
                <strong>₹{rate} / USDT</strong>
                </div>

                <div className="detail-row">
                <span>INR Deducted</span>
                <strong>₹{inrAmount}</strong>
                </div>

                <div className="detail-row">
                <span>USDT Received</span>
                <strong>{Number(usdtAmount).toFixed(6)} USDT</strong>
                </div>

            </div>

            <div className="wallet-balances">

                <h4>Updated Wallet Balance</h4>

                <div className="detail-row">
                <span>INR Wallet</span>
                <strong>₹{wallet?.inrBalance}</strong>
                </div>

                <div className="detail-row">
                <span>USDT Wallet</span>
                <strong>{Number(wallet?.usdtBalance).toFixed(6)} USDT</strong>
                </div>

            </div>

            <button
                className="dashboard-btn"
                onClick={() => window.location.href = "/wallet"}
            >
                Go to Dashboard
            </button>

            </div>
        </div>
        </ExchnageInnerWrapper>
        </div>
    );
}