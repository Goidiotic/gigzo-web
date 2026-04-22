// src/pages/gigwork/Chat.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import ChatItem from "../components/ChatItem";
import { clients } from "../data/ClientMessagesStore";
import "../css/Chats.css";

export default function Chat() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  // Filter clients based on search

  const filteredClients = clients.filter((client) =>
    client.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Handle click on client

  const handleClientClick = (client) => {

    // Navigate to client chat using clientId

    navigate(
      `/client-chat/${client.clientId}`
    );

  };

  return (
    <AppLayout pageName="Chat">

        {/* Search */}

        <input
          type="text"
          placeholder="Search clients..."
          className="chat-search"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        {/* Client List */}

        <div className="chat-list">

          {filteredClients.map((client) => (

            <div
              key={client.clientId}
              onClick={() =>
                handleClientClick(client)
              }
              style={{ cursor: "pointer" }}
            >

              <ChatItem
                chat={{
                  id: client.clientId,
                  name: client.name,
                  lastMessage: `Client ID: ${client.clientId}`,
                  time: client.mobile,
                  unread: 0
                }}
              />

            </div>

          ))}

          {filteredClients.length === 0 && (

            <div className="no-clients">

              No clients found

            </div>

          )}

        </div>

    </AppLayout>

  );

}