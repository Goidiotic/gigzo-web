// src/components/gigwork/ClientCard.jsx

import React from "react";
import "../../css/ClientCard.css";

export default function ClientCard({ client }) {
  return (
    <div className="client-row">

      {/* Profile */}

      <div className="client-col">

        <div className="client-profile">

          <div className="client-avatar">
            {client.name.charAt(0)}
          </div>

          <div>

            <div className="client-name">
              {client.name}
            </div>

            <div className="client-location">
              {client.location}
            </div>

            {client.verified && (
              <div className="client-verified">
                <strong>Verified</strong> by Gigzo work
              </div>
            )}
            <div style={{marginTop: "12px"}}></div>
            <button className="message-btn">
              Message
            </button>

          </div>

        </div>

      </div>

      {/* Project */}

      <div className="client-col">

        <div className="project-title">
          {client.contractName}
        </div>

        <div className="project-details">
          {client.details}
        </div>

        <button className="ticket-btn">
          View Contract
        </button>

      </div>

      {/* Status */}

      <div className="client-col">

        <div>
          Proposed:
          <strong>
            ₹{client.proposed}
          </strong>
        </div>

        <div>
          Paid:
          <strong>
            ₹{client.paid}
          </strong>
        </div>

        <div>
          Remaining:
          <strong>
            ₹{client.remaining}
          </strong>
        </div>

        

      </div>

      {/* Tickets */}

      <div className="client-col">

        <button className="ticket-btn">
          View Tickets
        </button>

        <button className="ticket-btn">
          Create Ticket
        </button>

        <button className="request-btn">
          Request Payment
        </button>

      </div>

    </div>
  );
}