// src/pages/gigwork/Tickets.jsx

import React, { useState } from "react";
import AppLayout from "./layout/AppLayout";
import TicketCard from "../components/gigzo/TicketCard.jsx";
import "../css/Tickets.css";

export default function Tickets() {

  const [filter, setFilter] = useState("active");

  const tickets = [
    {
      id: "TCK-1001",
      client: "Nazrul Islam",
      type: "Payments",
      createdBy: "Client",
      status: "active",
      date: "10 Mar 2026",
      time: "10:30 AM"
    },
    {
      id: "TCK-1002",
      client: "Rahul Sharma",
      type: "Work",
      createdBy: "Platform",
      status: "pending",
      date: "09 Mar 2026",
      time: "03:45 PM"
    },
    {
      id: "TCK-1003",
      client: "Digio BM",
      type: "Work",
      createdBy: "Platform",
      status: "active",
      date: "09 Mar 2026",
      time: "03:45 PM"
    }
  ];

  const filteredTickets = tickets.filter(
    (t) => t.status === filter
  );

  return (
    <AppLayout pageName="Tickets">

      <div className="tickets-page">

        {/* Filters */}

        <div className="tickets-filters">

          <div
            className={
              filter === "active"
                ? "filter-item active"
                : "filter-item"
            }
            onClick={() =>
              setFilter("active")
            }
          >
            Active
          </div>

          <div
            className={
              filter === "pending"
                ? "filter-item active"
                : "filter-item"
            }
            onClick={() =>
              setFilter("pending")
            }
          >
            Pending
          </div>

          <div
            className={
              filter === "closed"
                ? "filter-item active"
                : "filter-item"
            }
            onClick={() =>
              setFilter("closed")
            }
          >
            Closed
          </div>

        </div>

        {/* Ticket List */}

        <div className="tickets-list">

          {filteredTickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
            />
          ))}

        </div>

      </div>

    </AppLayout>
  );
}