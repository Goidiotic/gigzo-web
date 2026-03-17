import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/p2p/TopMenuCommon.css";

import logo from "../../icons/logo.png";
import profileIcon from "../../icons/user.png";

export default function TopMenuCommon() {

  const navigate = useNavigate();

  return (
    <div className="iox-topmenu-wrapper">

      <div className="iox-topmenu-container">

        {/* LEFT : LOGO */}

        <div className="iox-topmenu-left">

          <img
            src={logo}
            alt="IOX"
            className="iox-topmenu-logo"
            onClick={() => navigate("/")}
          />

        </div>


        {/* CENTER : MAIN NAV (Hidden on Mobile/Tablet) */}

        <div className="iox-topmenu-center">

          <button
            className="iox-menu-btn"
            onClick={() => navigate("/p2p-market")}
          >
            P2P
          </button>

          <button
            className="iox-menu-btn"
            onClick={() => navigate("/exchage-currency")}
          >
            Exchange
          </button>

        </div>


        {/* RIGHT : ACTIONS */}

        <div className="iox-topmenu-right">

          {/* Notification */}

          <div
            className="iox-notification-circle"
            onClick={() => navigate("/notifications")}
          >
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

          {/* Profile */}

          <img
            src={profileIcon}
            alt="profile"
            className="iox-profile-icon"
            onClick={() => navigate("/p2p/menu")}
          />

        </div>

      </div>

    </div>
  );
}