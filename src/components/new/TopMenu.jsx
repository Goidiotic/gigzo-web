import React from "react";
import "../../css/new/TopMenu.css";
import { useNavigate } from "react-router-dom";

export default function TopMenu() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="top-menu">

      <div className="logo">Instant P2P</div>

      <nav className="top-nav-items">
        <span onClick={()=>navigate('/dashboard-new')}>Dashboard</span>
        <span onClick={()=>navigate('/instant-p2p')}>P2P</span>
        <span onClick={()=>navigate('/deposit-inr')}>Deposit</span>
        <span onClick={()=>navigate('/exchage-currency')}>Exchange</span>
        <span onClick={()=>navigate('/transaction-history')}>Transactions</span>
        <span onClick={()=>navigate('/wallet')}>Wallet</span>
        <span>Support</span>
      </nav>
      <div className="right-menu-item-con">
        <span className="profile-item">Profile</span>
        <span className="logout" onClick={logout}>Logout</span>
      </div>

    </header>
  );
}