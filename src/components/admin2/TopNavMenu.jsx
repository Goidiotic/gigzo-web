import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/admin/TopNavMenu.css";

export default function TopNavMenu() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    navigate("/login");
  };

  return (
    <div className="admin-nav">

      <div className="nav-logo">
        ADMIN PANEL
      </div>

      <div className="nav-menu">

        <Link to="/a/c/user-list" className="nav-item">
          User List
        </Link>

        <Link to="/a/c/create-seller" className="nav-item">
          Create Seller
        </Link>

        <Link to="/a/c/seller-list" className="nav-item">
          Seller List
        </Link>

        <Link to="/a/c/order-list" className="nav-item">
          P2P Orders
        </Link>

        <Link to="/a/c/add-payment-provider" className="nav-item">
          Payment Provider
        </Link>

        <Link to="/a/c/payment-provider-list" className="nav-item">
          View Provider
        </Link>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

      </div>

    </div>
  );
}