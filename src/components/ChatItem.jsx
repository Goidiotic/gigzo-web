// src/components/gigwork/ChatItem.jsx

import React from "react";
import "../css/ChatItem.css";

export default function ChatItem({ chat }) {

  return (
    <div className="chat-item">

      {/* Avatar */}

      <div className="chat-avatar">
        {chat.name.charAt(0)}
      </div>

      {/* Content */}

      <div className="chat-content">

        <div className="chat-header">

          <div className="chat-name">
            {chat.name}
          </div>

          <div className="chat-time">
            {chat.time}
          </div>

        </div>

        <div className="chat-message">
          {chat.lastMessage}
        </div>

      </div>

      {/* Unread */}

      {chat.unread > 0 && (
        <div className="chat-unread">
          {chat.unread}
        </div>
      )}

    </div>
  );
}