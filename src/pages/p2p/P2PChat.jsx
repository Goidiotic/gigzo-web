import React, { useState } from "react";
import "../../css/p2p/P2PChat.css";
import { useLocation, useNavigate } from "react-router-dom";
import P2PInnerWrapper from "./components/P2PInnerWrapper";

export default function P2PChat() {

  const navigate = useNavigate();
  const location = useLocation();

  const orderId = location.state?.orderId;

  const sellerName = "Rahul Sharma";
  const status = "online";

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    { from: "seller", text: "Hello, please make the payment." },
    { from: "buyer", text: "Payment done, uploading proof." }
  ]);

  /* --------------------------------
     Send Message
  -------------------------------- */

  const sendMessage = () => {

    if (!message.trim()) return;

    setMessages([
      ...messages,
      { from: "buyer", text: message }
    ]);

    setMessage("");

  };


  /* --------------------------------
     Close / Back Chat
  -------------------------------- */

  const closeChat = () => {
    navigate(-1);
  };


  return (
<P2PInnerWrapper>
    <div className="chat-wrapper">

      <div className="chat-card">

        {/* HEADER */}

        <div className="chat-header">

          <div className="chat-user">

            <div className="chat-avatar">
              {sellerName.charAt(0)}
            </div>

            <div>

              <div className="chat-name">
                {sellerName}
              </div>

              <div className={`chat-status ${status}`}>
                {status}
              </div>

            </div>

          </div>

          <button
            className="chat-close-btn"
            onClick={closeChat}
          >
            ✕
          </button>

        </div>


        {/* ACTION BUTTONS */}

        <div className="chat-actions">

          <button
            className="action-btn"
            onClick={() =>
              navigate("/p2p/payment-details", { state: { orderId } })
            }
          >
            View Payment Details
          </button>

          <button
            className="action-btn"
            onClick={() =>
              navigate("/p2p/upload-payment-proof", { state: { orderId } })
            }
          >
            Upload Payment Proof
          </button>

        </div>


        {/* CHAT MESSAGES */}

        <div className="chat-messages">

          {messages.map((msg, i) => (

            <div
              key={i}
              className={`chat-msg ${msg.from}`}
            >
              {msg.text}
            </div>

          ))}

        </div>


        {/* MESSAGE INPUT */}

        <div className="chat-input">

          <input
            type="text"
            placeholder="Type message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button onClick={sendMessage}>
            Send
          </button>

        </div>

      </div>

    </div>
</P2PInnerWrapper>
  );

}