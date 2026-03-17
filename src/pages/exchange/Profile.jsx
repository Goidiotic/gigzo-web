import React from "react";
import "../../css/p2p/P2PMenu.css";

import profileIcon from "../../icons/user.png";

import { useNavigate } from "react-router-dom";
import ExchnageMainWrapper from "./components/ExchangeMainWrapper";
import { getMobile, getUID, logout } from "../../utils/authUser";

export default function Profile() {

  const navigate = useNavigate();
  const mobile = getMobile();
  const uid = getUID();

  /* ----------------------------------------
     USER DATA (Example)
  ---------------------------------------- */
  const mobileNumber = "+91 ";

  /* ----------------------------------------
     NAVIGATION FUNCTIONS
  ---------------------------------------- */

  const openWallet = () => navigate("/wallet");
  const openOrders = () => navigate("/transaction-history");
  const openMarket = () => navigate("/p2p-market");
  const openExchange = () => navigate("/exchage-currency");
  const openDeposit = () => navigate("/deposit-inr");
  const logout = () => {
    localStorage.removeItem("token");
    navigate('/login');
  }

  /* ----------------------------------------
     UI
  ---------------------------------------- */

  return (
    <>
      {/* Top Navigation */}
      
      <ExchnageMainWrapper>
      <div className="p2p-menu-wrapper">

        <div className="p2p-menu-card">

          {/* PROFILE SECTION */}

          <div className="p2p-profile">

            <div className="p2p-profile-avatar">
              <img src={profileIcon} alt="profile" />
            </div>

            <div className="p2p-profile-info">

              <div className="p2p-mobile">
                {mobile || "+91 9999999999"}
              </div>

              <div className="p2p-mobile">
                UID: {uid || "Your UID"}
              </div>

            </div>

          </div>


          {/* MAIN NAVIGATION */}

          <div className="p2p-main-nav">

            <button onClick={openMarket}>
              P2P Market
            </button>

            <button onClick={openExchange}>
              Exchange
            </button>

          </div>


          {/* MENU LIST */}

          <div className="p2p-menu-list">

            <div
              className="p2p-menu-item"
              onClick={openWallet}
            >
              Wallet
            </div>

            <div
              className="p2p-menu-item"
              onClick={openOrders}
            >
              Transactions
            </div>

            <div
              className="p2p-menu-item"
              onClick={openDeposit}
            >
              Deposit
            </div>

            <div
              className="p2p-menu-item"
              onClick={openExchange}
            >
              Exchnage
            </div>

            <div
              className="p2p-menu-item"
              onClick={logout}
            >
              Logout
            </div>

          </div>

        </div>

      </div>
      </ExchnageMainWrapper>
    </>
  );
}