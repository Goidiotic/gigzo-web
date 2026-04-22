// src/pages/gigwork/Clients.jsx

import React, { useState } from "react";
import AppLayout from "./layout/AppLayout";
import ClientCard from "../components/gigzo/ClientCard";
import "../css/Clients.css";

export default function Clients() {
  const [tab, setTab] = useState("active");

  const clients = [
    {
      id: 1,
      name: "Nazrul Islam",
      location: "Mumbai",
      verified: true,
      contractName:
        "Create a web portal for P2P Crypto Buy/Sell",
      details:
        "Build secure escrow based P2P crypto trading platform with admin panel.",
      proposed: 48000,
      paid: 20000,
      remaining: 28000
    },
    {
      id: 2,
      name: "Rahul Sharma",
      location: "Kolkata",
      verified: true,
      contractName:
        "Build Client Management System",
      details:
        "Client portal with payment tracking and ticket support.",
      proposed: 30000,
      paid: 15000,
      remaining: 15000
    }
  ];

  return (
    <AppLayout pageName="Clients">

      <div className="clients-page">

        {/* Top Menu */}

        <div className="clients-top-menu">

          <div
            className={
              tab === "active"
                ? "clients-menu-item active"
                : "clients-menu-item"
            }
            onClick={() => setTab("active")}
          >
            Active Clients
          </div>

          <div
            className={
              tab === "invite"
                ? "clients-menu-item active"
                : "clients-menu-item"
            }
            onClick={() => setTab("invite")}
          >
            New Invite
          </div>

        </div>

        {/* Table Header — ONLY ONCE */}

        <div className="clients-table-header">

          <div></div>

          <div>Project Details</div>

          <div>Contracts</div>

          <div>Tickets</div>

        </div>

        {/* Client Rows */}

        {clients.map((client) => (
          <ClientCard
            key={client.id}
            client={client}
          />
        ))}

      </div>

    </AppLayout>
  );
}