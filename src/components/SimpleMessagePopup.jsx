import React from 'react';

const SimpleMessagePopup = ({ message, onClose, buttonLabel = "OK" }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <p style={styles.message}>{message}</p>
        <button onClick={onClose} style={styles.button}>{buttonLabel}</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  popup: {
    background: '#fff',
    padding: '20px 30px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  },
  message: {
    marginBottom: '20px',
    fontSize: '16px',
    color: '#333',
  },
  button: {
    padding: '8px 20px',
    fontSize: '14px',
    backgroundColor: '#FF9A0D',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default SimpleMessagePopup;
