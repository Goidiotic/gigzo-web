import React from "react";
import "../../css/p2p/P2PMenu.css";

import TopMenu from "./components/TopMenu";
import WebMainMenu from "../../components/WebMainMenu";

import profileIcon from "../../icons/user.png";

import { useNavigate } from "react-router-dom";
import MobileBottomMenu from "./components/MobileBottomMenu";
import P2PMainWrapper from "./components/P2PMainWrapper";
import { getMobile, getUID } from "../../utils/authUser";

export default function P2PMenu() {

  const navigate = useNavigate();

  const mobile = getMobile();
  const uid = getUID();

  /* ----------------------------------------
     USER DATA (Example)
  ---------------------------------------- */

  const walletConnected = false;
  const mobileNumber = "+91 9876543210";

  /* ----------------------------------------
     NAVIGATION FUNCTIONS
  ---------------------------------------- */

  const openWallet = () => navigate("/p2p/p2p-wallet");
  const openOrders = () => navigate("/p2p/order-list");
  const openMarket = () => navigate("/p2p-market");
  const openExchange = () => navigate("/exchage-currency");
  const openTerms = () => navigate("/terms");
  const openPrivacy = () => navigate("/privacy");
  const connectWallet = () => navigate("/connect-wallet");
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/logout");
  };

  /* ----------------------------------------
     UI
  ---------------------------------------- */

  return (
    <>
      {/* Top Navigation */}
      
      <P2PMainWrapper>
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
                {uid || "Your UID"}
              </div>

              <div className="p2p-wallet-status">

                {walletConnected ? (
                  <span className="wallet-connected">
                    ✓ Wallet Connected
                  </span>
                ) : (
                  <span
                    className="wallet-connect-btn"
                    onClick={connectWallet}
                  >
                    Connect Wallet
                  </span>
                )}

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
              Orders
            </div>

            <div
              className="p2p-menu-item"
              onClick={openTerms}
            >
              Terms & Conditions
            </div>

            <div
              className="p2p-menu-item"
              onClick={openPrivacy}
            >
              Privacy Policy
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
      </P2PMainWrapper>
    </>
  );
}