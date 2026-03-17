import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/p2p/TopMenuLoggedIn.css";
import logo from "../../../icons/logo.png";

export default function TopMenuLoggedIn(){

  const navigate = useNavigate();

  return (

    <div className="iox-topmenu-wrapper">

        <div className="iox-topmenu-container">

            {/* LEFT */}

            <div className="iox-topmenu-left">

                <img
                    src={logo}
                    alt="IOX"
                    className="iox-topmenu-logo"
                    onClick={()=>navigate("/")}
                />

            </div>


            {/* CENTER */}

            <div className="iox-topmenu-center">
                <span onClick={()=>navigate("/p2p-market")}>P2P Market</span>
                <span onClick={()=>navigate("/exchage-currency")}>Exchange</span>
                <span onClick={()=>navigate("/p2p/p2p-wallet")}>Wallet</span>
                <span onClick={()=>navigate("/p2p/exchange")}>Quick Buy</span>
                <span onClick={()=>navigate("/quick-buy")}>P2P Help Center</span>
                <span onClick={()=>navigate("/affiliate")}>Become a Merchant</span>
                <span onClick={()=>navigate("/support")}>Live Chat</span>
            </div>


            {/* RIGHT */}

            <div className="iox-topmenu-right">

                <button
                    className="iox-orders-btn"
                    onClick={()=>navigate("/p2p/order-list")}
                >
                    Orders
                </button>

                {/* Notification Icon */}

                <div className="iox-notification-circle">

                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7"></path>
                        <path d="M13.73 21a2 2 0 01-3.46 0"></path>
                    </svg>

                </div>

            </div>

        </div>

    </div>

  );

}