import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/landing/TopNav.css";
import logo from "../../icons/logo.png";

export default function TopNav() {

  const navigate = useNavigate();

  return (

    <div className="iox-nav-wrapper">
        <div className="iox-nav-container">
            <div className="iox-logo-menu-con">
              <div className="iox-nav-left">

                  <div
                    className="iox-logo"
                    onClick={() => navigate("/p2p/public-market")}
                  >
                    <img className="top-nav-logo" src={logo} alt="IOX" />
                  </div>

              </div>
              <div className="iox-nav-center">
                <span onClick={()=>navigate('p2p-market')}>P2P Market</span>
                <span>Orders</span>
                <span>Wallet</span>
                <span>Profile</span>
              </div>
            </div>
            <div className="iox-nav-right">

                <button
                  className="iox-login-btn"
                  onClick={() => navigate("/login")}
                >
                  LOGIN
                </button>

                <button
                  className="iox-register-btn"
                  onClick={() => navigate("/register")}
                >
                  SIGNUP
                </button>
            </div>
        </div>
    </div>

  );

}