import React from "react";
import "../../../css/p2p/P2PWrapper.css";
import TopMenu from "../../../components/new/TopMenu";
import { useNavigate } from "react-router-dom";

export default function P2PWrapper({ children, active, header }) {

  const navigate = useNavigate();

  return (
    <div>

      <TopMenu/>

      <div className="p2p-main-wrapper">

        {/* P2P NAVIGATION */}

        <div className="p2p-nav">

          <button
            className={active === "market" ? "active" : ""}
            onClick={()=>navigate("/p2p/instant-p2p")}
          >
            Offers
          </button>

          <button
            className={active === "orders" ? "active" : ""}
            onClick={()=>navigate("/p2p/order-list")}
          >
            Orders
          </button>

          <button
            className={active === "chats" ? "active" : ""}
            onClick={()=>navigate("/p2p/chats")}
          >
            Chats
          </button>

          <button
            className={active === "notifications" ? "active" : ""}
            onClick={()=>navigate("/p2p/notifications")}
          >
            Notifications
          </button>

        </div>

        {/* MAIN CARD */}

        <div className="p2p-container-card">

          {header && (
            <div className="p2p-card-header">
              {header}
            </div>
          )}

          <div className="p2p-card-body">
            {children}
          </div>

        </div>

      </div>

    </div>
  );
}