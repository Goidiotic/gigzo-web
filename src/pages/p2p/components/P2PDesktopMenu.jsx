import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/p2p/P2PDesktopMenu.css";

export default function P2PDesktopMenu(){

  const navigate = useNavigate();

  return (

    <div className="iox-p2p-menu-wrapper">

      <div className="iox-p2p-menu-container">
        
        <span onClick={()=>navigate("/p2p-market")}>
          P2P Market
        </span>

        <span onClick={()=>navigate("/p2p/p2p-wallet")}>
          Wallet
        </span>

        <span onClick={()=>navigate("/p2p/order-list")}>
          Orders
        </span>

        <span onClick={()=>navigate("/p2p/help-center")}>
          P2P Help Center
        </span>

        <span onClick={()=>navigate("/p2p/merchant")}>
          Become a Merchant
        </span>

        <span onClick={()=>navigate("/support")}>
          Live Chat
        </span>

      </div>

    </div>

  );

}