// components/PopupMessage.js
import React from 'react';
import '../css/Global.css'; // Add styling below

const PopupMessage = ({ message, onClose }) => {
    if (!message) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-card">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default PopupMessage;
