// src/components/gigwork/TopHeader.jsx

import React from "react";
import { LogOut } from "lucide-react";
import "../../css/layout/TopHeader.css";

export default function TopHeader({ pageName }) {

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <div className="gw-header">

      <div className="gw-header-left">

        {/* Desktop Page Name */}
        <span className="gw-page-name">
          {pageName}
        </span>

        {/* Mobile Logo */}
        <span className="gw-mobile-logo">
          GIGZO
        </span>

      </div>

      {/* Logout Icon */}
      <div
        className="gw-logout"
        onClick={handleLogout}
      >
        <LogOut size={20} />
      </div>

    </div>
  );
}