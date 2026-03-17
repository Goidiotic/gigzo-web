import React, { useEffect, useState } from "react";
import "../css/new/Wallet.css";
import TopMenu from "../components/new/TopMenu";
import { useNavigate } from "react-router-dom";
import axios from '../Axios2';
import iconUsdt from '../icons/usdt.png'
import ExchnageMainWrapper from "./exchange/components/ExchangeMainWrapper";

export default function Wallet() {

  const navigate = useNavigate();

  const [inrBalance, setInrBalance] = useState(0);
  const [usdtBalance, setUsdtBalance] = useState(0.000000);
  const [transactions, setTransactions] = useState([]);

function formatDate(date){

  const today = new Date();
  const txDate = new Date(date);

  const diff = Math.floor(
    (today.setHours(0,0,0,0) - new Date(txDate).setHours(0,0,0,0)) /
    (1000 * 60 * 60 * 24)
  );

  const time = txDate.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });

  if(diff === 0) return `Today ${time}`;
  if(diff === 1) return `Yesterday ${time}`;

  const datePart = txDate.toLocaleDateString("en-IN", {
    day:"2-digit",
    month:"long",
    year:"numeric"
  });

  return `${datePart} ${time}`;
}

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

  const getRecentTransactions = async () => {
    try {

      const res = await axios.post('web/private/recent-transactions', {transactionCount: 4});

      if(res.data.statusCode === 1000) {
        setTransactions(res.data.data.transactions);
      } else {
        console.log(res.data.message);
      }

    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(()=>{
    getWalletBalance();
    getRecentTransactions();
  }, []);

  return (
      <ExchnageMainWrapper>

      <div className="wallet-wrapper">

        <div className="wallet-layout">

          {/* LEFT SIDE */}
          <div className="wallet-left">
            
            {/* FIAT WALLET */}
            <div className="wallet-card">
              <h3 className="recent-title">Wallets</h3>
              <div className="wallet-divider"></div>
              <div className="wallet-header">
                <span>Fiat Wallet</span>
                <span className="currency">₹ INR</span>
              </div>

              <h3 className="balance">₹ {inrBalance}</h3>

              <div className="wallet-actions">
                <button className="wallet-btn" onClick={()=>navigate('/deposit-inr')}>Deposit</button>
                <button className="wallet-btn blue" onClick={()=>navigate('/exchage-currency')}>Exchange</button>
              </div>
              <div className="wallet-divider"></div>
              {/* Crypto WALLET */}
              <div className="wallet-header">
                <span>Crypto Wallet</span>
                <span className="currency">USDT</span>
              </div>

              <h3 className="balance">
                {Number(usdtBalance).toFixed(6)} <span>USDT</span>
              </h3>

              <div className="wallet-actions">
                <button className="wallet-btn">Receive</button>
                <button className="wallet-btn blue">Send</button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="wallet-right">

            <h3 className="recent-title">Recent Transactions</h3>

            <div className="transaction-list">
              
              {transactions.map(tx => (
                <div className="transaction-item" key={tx.transactionId}>

                  <div className="transaction-left">
                    <div className="txn-icon">
                      <img style={{width: '25px'}} src={iconUsdt} alt="Icon" />
                    </div>

                    <div>
                      <span style={{fontSize: '12px'}}>
                        {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                      </span>
                      <p>{tx.transactionNote}</p>
                      <p>{formatDate(tx.createdAt)}</p>
                    </div>
                  </div>

                  <div className="transaction-right">
                    <div className="transaction-right-amount">₹{tx.amount}</div>
                    <div className={`tx-status ${tx.status}`}>
                      {tx.status}
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </ExchnageMainWrapper>
  );
}