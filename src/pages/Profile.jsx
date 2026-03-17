import React, { useEffect, useState } from "react";
import "../css/new/Profile.css";
import { getMobile, getUID } from "../utils/authUser";
import TopMenuCommon from "../components/new/TopCommonMenu";
import axios from "../Axios2";
import { useNavigate } from "react-router-dom";

export default function Profile() {

  const navigate = useNavigate();

  const mobile = getMobile();
  const uid = getUID();

  const [inrBalance, setInrBalance] = useState(0);
  const [usdtBalance, setUsdtBalance] = useState(0.00);

  const firstLetter = mobile ? mobile[0] : "U";

  const isVerified = false; // 🔥 replace with real data

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

  const logout = ()=> {
    localStorage.removeItem("token");
    navigate("/login");
  }

    useEffect(()=>{
      getWalletBalance();
    }, []);

  return (
    <>
    <TopMenuCommon/>
      <div className="profile-wrapper">

        {/* 🔹 Top Profile Card */}
        <div className="profile-card">

          <div className="profile-left">
            <div className="profile-avatar">
              P
            </div>
          </div>

          <div className="profile-right">
            <div className="profile-mobile">{mobile}</div>
            <div className="profile-uid">UID: {uid}</div>

            <div className={`profile-verify ${isVerified ? "verified" : "not-verified"}`}>
              {isVerified ? "✔ Verified" : "Not Verified"}
            </div>
          </div>

        </div>

        {/* 🔹 Wallet Cards */}
        <div className="wallet-grid">

          <div className="wallet-card">
            <div className="wallet-title">INR Wallet</div>
            <span>₹{(inrBalance).toFixed(2)}</span>
          </div>

          <div className="wallet-card">
            <div className="wallet-title">Crypto Wallet</div>
            <span>${(usdtBalance).toFixed(2)} USDT</span>
          </div>

        </div>

        {/* 🔹 Menu Sections */}

        {/* P2P */}
        <div className="menu-section">
          <div className="menu-title">P2P</div>

          <div className="menu-item" onClick={()=>navigate('/p2p-market')}>P2P Market</div>
          <div className="menu-item" onClick={()=>navigate('/p2p/order-list')}>Orders</div>
          <div className="menu-item" onClick={()=>navigate('/p2p/p2p-wallet')}>Wallet</div>
        </div>

        {/* Exchange */}
        <div className="menu-section">
          <div className="menu-title">Exchange</div>

          <div className="menu-item" onClick={()=>navigate('/exchage-currency')}>Swap</div>
          <div className="menu-item" onClick={()=>navigate('/transaction-history')}>Transactions</div>
          <div className="menu-item" onClick={()=>navigate('/wallet')}>Wallet</div>
          <div className="menu-item" onClick={()=>navigate('/deposit-inr')}>Deposit INR</div>
        </div>

        {/* Common */}
        <div className="menu-section">
          <div className="menu-title">Common</div>

          <div className="menu-item">Send Crypto</div>
          <div className="menu-item">Receive Crypto</div>
        </div>

        {/* Others */}
        <div className="menu-section">
          <div className="menu-title">Others</div>

          <div className="menu-item">Privacy Policy</div>
          <div className="menu-item">Terms & Conditions</div>
          <div className="menu-item">Disclaimer</div>
        </div>

        {/* Logout */}
        <div className="logout-btn" onClick={logout}>
          Logout
        </div>

      </div>
    </>
  );
}