import React, { useEffect, useState } from "react";
import "../css/new/TransactionHistory.new.css";
import TopMenu from "../components/new/TopMenu";
import axios from "../Axios2";
import iconUsdt from "../icons/usdt.png";
import iconUpi from "../icons/upi-icon.png";
import ExchnageMainWrapper from "./exchange/components/ExchangeMainWrapper";


export default function Transactions() {

  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all");

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

  const getTransactions = async (type = "all") => {
    try {

      const res = await axios.post(
        "web/private/recent-transactions",
        { transactionCount: 50, type }
      );

      if(res.data.statusCode === 1000){
        setTransactions(res.data.data.transactions);
      }

    } catch(err){
      console.log(err.message);
    }
  };

  useEffect(()=>{
    getTransactions(filter);
  }, [filter]);

  return (
      <ExchnageMainWrapper>

      <div className="wallet-wrapper">
        <div className="transactions-container">
          <div className="wallet-right">
          <h3 className="recent-title">All Transactions</h3>
          {/*Filter*/}
          <div className="transaction-filters">
            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              All
            </button>

            <button
              className={filter === "deposit" ? "active" : ""}
              onClick={() => setFilter("deposit")}
            >
              Deposit
            </button>

            <button
              className={filter === "withdraw" ? "active" : ""}
              onClick={() => setFilter("withdraw")}
            >
              Withdraw
            </button>

            <button
              className={filter === "exchange" ? "active" : ""}
              onClick={() => setFilter("exchange")}
            >
              Exchange
            </button>

          </div>
          {/*Transaction List*/}
          <div className="transaction-list">

          {transactions.length === 0 ? (

            <div className="no-transactions">
              No transactions found
            </div>

          ) : (

            transactions.map(tx => (

              <div className="transaction-item" key={tx.transactionId}>

                <div className="transaction-left">

                  <div className="txn-icon">
                    {tx.type === "deposit" ? (
                      <img style={{width:"25px"}} src={iconUpi} alt="icon"/>
                    ) : tx.type === "exchange" ? (
                      <img style={{width:"25px"}} src={iconUsdt} alt="icon"/>
                    ) : (
                      <span>₹</span>
                    )}
                  </div>

                  <div>
                    <span style={{fontSize:"12px"}}>
                      {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                    </span>

                    <p>{tx.transactionNote}</p>
                    <p>{formatDate(tx.createdAt)}</p>
                  </div>

                </div>

                <div className="transaction-right">

                  <div className="transaction-right-amount">
                    ₹{tx.amount}
                  </div>

                  <div className={`tx-status ${tx.status}`}>
                    {tx.status}
                  </div>

                </div>

              </div>

            ))

          )}

        </div>
        </div>
        </div>
      </div>
      </ExchnageMainWrapper>
  );
}