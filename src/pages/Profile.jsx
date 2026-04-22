// src/pages/gigzo/Profile.jsx

import React from "react";
import AppLayout from "./layout/AppLayout";
import "../css/Profile.css";

import {
  getAllBankAccounts
} from "../data/BankAccountsStore";

const payments = getAllBankAccounts();



export default function Profile() {

  // Replace with API user data

  const user = {
    name: "Nazrul Hoque",
    mobile: "+91 8638539647",
    email: "nazruliqo@gmail.com",
    verified: true
  };

  // Replace with API payment methods

    

  const firstLetter = user.name.charAt(0).toUpperCase();

  return (

    <AppLayout pageName="Profile">

      <div className="profile-page">

        {/* Profile Header */}

        <div className="profile-card">

          <div className="profile-avatar">
            {firstLetter}
          </div>

          <div className="profile-info">

            <div className="profile-name">
              {user.name}
            </div>

            <div className="profile-mobile">
              {user.mobile}
            </div>

            <div className="profile-email">
              {user.email}
            </div>

            <div
              className={`profile-status ${
                user.verified
                  ? "verified"
                  : "unverified"
              }`}
            >
              {user.verified
                ? "Verified"
                : "Not Verified"}
            </div>

          </div>

        </div>

        {/* Payment Methods */}

        <div className="payment-section">

          <div className="section-title">
            Payment Methods
          </div>

          <div className="payment-grid">

            {payments.map((p) => (

              <div
                key={p.id}
                className="payment-card"
              >
                <div className="payment-detail">
                  Bank Name: {p.bankName}
                </div>
                <div className="payment-bank">
                  {p.bank}
                </div>

                <div className="payment-detail">
                  Account: {p.accountNumber}
                </div>

                <div className="payment-detail">
                  IFSC: {p.ifsc}
                </div>

              </div>

            ))}

          </div>

          <button className="add-payment-btn">
            + Add New Payment Method
          </button>

        </div>

        {/* Mobile Menus */}

        <div className="mobile-menu">

          <div className="menu-item">
            Payout Methods
          </div>

          <div className="menu-item">
            FAQs
          </div>

          <div className="menu-item">
            Support
          </div>

          <div className="menu-item">
            Privacy Policy
          </div>

          <div className="menu-item">
            Terms and Conditions
          </div>

          <div className="menu-item logout">
            Logout
          </div>

        </div>

      </div>

    </AppLayout>

  );

}