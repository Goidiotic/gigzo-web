import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getMessagesByClientId,
  getClientById
} from "../data/ClientMessagesStore";
import "../css/ClientChat.css";
import back from "../icons/back.png";

export default function ClientChat() {

  const { clientId } = useParams();
  const navigate = useNavigate();

  const [messageText, setMessageText] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const selectedClient = getClientById(clientId);
  const messages = getMessagesByClientId(clientId);

  const handleSendMessage = () => {
    if (!messageText.trim()) return;

    console.log("Send message:", messageText);
    setMessageText("");
  };

  const handleOptionClick = (type) => {
    console.log("Selected option:", type);
    setShowOptions(false);

    // You can route to modal or upload logic here
    // Example:
    // if (type === 'image') openImageUploader();
  };

  const renderMessage = (msg) => {

    if (msg.type === "text") {
      return (
        <div
          key={msg.id}
          className={`message-card ${msg.sender}`}
        >
          <div className="message-text">
            {msg.text}
          </div>

          <div className="message-date">
            {msg.date}
          </div>
        </div>
      );
    }

    if (msg.type === "payment_request") {
      return (
        <div
          key={msg.id}
          className="message-card payment"
        >
          <div className="card-title">
            Payment Request
          </div>

          <div className="row">
            <span>Bank</span>
            <span>{msg.bankName}</span>
          </div>

          <div className="row">
            <span>Account</span>
            <span>{msg.accountNumber}</span>
          </div>

          <div className="row">
            <span>IFSC</span>
            <span>{msg.ifsc}</span>
          </div>

          {msg.items?.map((item, i) => (
            <div key={i} className="row">
              <span>{item.name}</span>
              <span>
                {item.amount.toFixed(2)}
              </span>
            </div>
          ))}

          <div className="row total">
            <span>Total</span>
            <span>
              {msg.totalAmount?.toFixed(2)}
            </span>
          </div>

          <div className="message-date">
            {msg.date}
          </div>
        </div>
      );
    }

    if (msg.type === "payment_paid") {
      return (
        <div
          key={msg.id}
          className="message-card paid"
        >
          <div className="card-title">
            Paid to Bank
          </div>

          <div className="row">
            <span>Bank</span>
            <span>{msg.paidToBank}</span>
          </div>

          {msg.items?.map((item, i) => (
            <div key={i} className="row">
              <span>{item.name}</span>
              <span>
                {item.amount.toFixed(2)}
              </span>
            </div>
          ))}

          <div className="row">
            <span>Part Payment</span>
            <span>
              {msg.partPayment?.toFixed(2)}
            </span>
          </div>

          <div className="row">
            <span>Ref Number</span>
            <span>{msg.refNumber}</span>
          </div>

          <div className="message-date">
            {msg.date}
          </div>
        </div>
      );
    }

    return null;
  };

  return (

    <div className="chat-full-page">

      {/* TOP BAR */}

      <div className="chat-top-bar">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          <img
            src={back}
            alt="Back"
            className="back-icon"
          />
        </button>

        <div className="top-client-info">

          {selectedClient ? (
            <>
              <div className="top-client-name">
                {selectedClient.name}
              </div>

              <div className="top-client-id">
                Client ID: {selectedClient.clientId}
              </div>
            </>
          ) : (
            <div>Client not found</div>
          )}

        </div>

      </div>

      {/* MESSAGES */}

      <div className="messages-area">

        {selectedClient ? (

          messages.length > 0 ? (

            messages.map((msg) =>
              renderMessage(msg)
            )

          ) : (

            <div>
              No messages found
            </div>

          )

        ) : null}

      </div>

      {/* INPUT */}

      <div className="chat-input-bar">

        {/* PLUS BUTTON */}

        <div className="plus-container">

          <button
            className="plus-btn"
            onClick={() => setShowOptions(!showOptions)}
          >
            +
          </button>

          {showOptions && (
            <div className="chat-options-menu">

              <div
                className="chat-option-item"
                onClick={() => handleOptionClick("whatsapp_image")}
              >
                WhatsApp Image
              </div>

              <div
                className="chat-option-item"
                onClick={() => handleOptionClick("file")}
              >
                File
              </div>

              <div
                className="chat-option-item"
                onClick={() => handleOptionClick("payment_request")}
              >
                Payment Request
              </div>

              <div
                className="chat-option-item"
                onClick={() => handleOptionClick("payout_details")}
              >
                Payout Details
              </div>

            </div>
          )}

        </div>

        <input
          type="text"
          placeholder="Type message..."
          value={messageText}
          onChange={(e) =>
            setMessageText(e.target.value)
          }
          className="chat-input"
        />

        <button
          className="send-btn"
          onClick={handleSendMessage}
        >
          Send
        </button>

      </div>

    </div>

  );

}