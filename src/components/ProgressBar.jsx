// LoadingPopup.jsx
import React from "react";
import { createPortal } from "react-dom";

export default function LoadingPopup({
  visible = false,
  message = "Loading...",
  progress = null, // number 0-100 for determinate progress, null for indeterminate
  onClose = null,  // optional: function to close (if you want a cancel button)
}) {
  if (!visible) return null;

  return createPortal(
    <>
      <div style={backdropStyle} />

      <div
        role="status"
        aria-live="polite"
        aria-busy={progress === null ? "true" : "false"}
        style={containerStyle}
      >
        <div style={cardStyle}>
          {progress === null ? (
            <div style={spinnerStyle} aria-hidden="true" />
          ) : (
            <div style={progressContainer}>
              <div style={{ ...progressBar, width: `${Math.max(0, Math.min(100, progress))}%` }} />
            </div>
          )}

          <div style={{ marginTop: 12, fontSize: 16 }}>{message}</div>

          {typeof progress === "number" && (
            <div style={{ marginTop: 6, fontSize: 13, color: "#eee" }}>{progress}%</div>
          )}

          {onClose && (
            <button onClick={onClose} style={closeBtnStyle} aria-label="Cancel loading">
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Inline styles for animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>,
    document.body
  );
}

/* ---------- Styles ---------- */

const backdropStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.45)",
  zIndex: 9998,
};

const containerStyle = {
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
  pointerEvents: "none", // allow only children to receive pointer events
};

const cardStyle = {
  pointerEvents: "auto",
  minWidth: 220,
  maxWidth: "90%",
  padding: 18,
  borderRadius: 12,
  background: "linear-gradient(180deg, rgba(255,87,34,0.95), rgba(255,87,34,0.9))",
  color: "#fff",
  boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const spinnerStyle = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  border: "4px solid rgba(255,255,255,0.35)",
  borderTop: "4px solid rgba(255,255,255,1)",
  animation: "spin 0.9s linear infinite",
};

const progressContainer = {
  width: 160,
  height: 10,
  borderRadius: 999,
  background: "rgba(255,255,255,0.15)",
  overflow: "hidden",
};

const progressBar = {
  height: "100%",
  background: "linear-gradient(90deg, #fff 0%, #ffeead 100%)",
  transition: "width 300ms ease",
};

const closeBtnStyle = {
  marginTop: 12,
  padding: "6px 10px",
  borderRadius: 8,
  border: "none",
  background: "rgba(0,0,0,0.15)",
  color: "#fff",
  cursor: "pointer",
  fontSize: 14,
};
