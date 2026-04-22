// src/components/gigwork/TicketCard.jsx

import React from "react";
import "../../css/TicketCard.css";

export default function TicketCard({ ticket }) {

  return (
    <div className="ticket-card">

      {/* Ticket ID */}

      <div className="ticket-id">
        {ticket.id}
      </div>

      {/* Client Name */}

      <div className="ticket-client">
        {ticket.client}
      </div>

      {/* New Row: Type + Created By */}

      <div className="ticket-meta">

        <div className="ticket-type">
          Type:
          <strong>
            {ticket.type}
          </strong>
        </div>

        <div className="ticket-created">
          Created By:
          <strong>
            {ticket.createdBy}
          </strong>
        </div>

      </div>

      {/* Date & Time */}

      <div className="ticket-datetime">
        {ticket.date} | {ticket.time}
      </div>

    </div>
  );
}