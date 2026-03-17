import React, { useState } from "react";
import '../../css/new/WalletCards.new.css'
import axios from "../../Axios2";

export default function WalletCards() {

  const [inrBalance, setInrBalance] = useState(0);
  const [usdtBalance, setUsdtBalance] = useState(0.000000);

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


  return (
    <div className="wallet-section">

      {/* INR WALLET */}

      <div className="wallet-card">

        <h3 className="wallet-tag">INR Wallet</h3>

        <div className="wallet-balance">
          ₹ {inrBalance}
        </div>

        <div className="deposit-methods">
          <p>UPI – Instant</p>
          <p>Bank Transfer – up to 60 min</p>
          <p>eRupee – up to 30 min</p>
        </div>

        <div className="wallet-actions">
          <button className="btn-green">Deposit</button>
          <button className="btn-blue">Exchange</button>
        </div>

      </div>


      {/* CRYPTO WALLET */}

      <div className="wallet-card">

        <h3 className="wallet-tag">Crypto Wallet</h3>

        <div className="wallet-balance">
          {usdtBalance} USDT
        </div>

        <div className="crypto-list">
          BTC • ETH • USDT • TRX • SHIBA
        </div>

        <div className="wallet-actions">
          <button>Receive</button>
          <button className="btn-blue">Send</button>
        </div>

      </div>

    </div>
  );
}