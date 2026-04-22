// src/components/gigwork/AppLayout.jsx

import React from "react";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";
import BottomNav from "./BottomNav";
import "../../css/layout/AppLayout.css";

export default function AppLayout({ children, pageName }) {
  return (
    <div className="gw-layout">

      {/* Sidebar - Desktop */}
      <Sidebar />

      <div className="gw-main">

        {/* Top Header */}
        <TopHeader pageName={pageName} />

        {/* Scrollable Page Content */}
        <div className="gw-content">
          {children}
        </div>

      </div>

      {/* Bottom Navigation - Mobile */}
      <BottomNav />

    </div>
  );
}