import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/p2p/P2PDesktopMenu.css";

export default function P2PDesktopMenu(){

  const navigate = useNavigate();

  return (

    <div className="iox-p2p-menu-wrapper">

      <div className="iox-p2p-menu-container">
        
        <span onClick={()=>navigate("/exchage-currency")}>
          Exchange
        </span>

        <span onClick={()=>navigate("/wallet")}>
          Wallet
        </span>

        <span onClick={()=>navigate("/exchage-currency")}>
          Buy USDT
        </span>

        <span onClick={()=>navigate("/deposit-inr")}>
          Deposit INR
        </span>

        <span onClick={()=>navigate("/transaction-history")}>
          Transactions
        </span>

      </div>

    </div>

  );

}