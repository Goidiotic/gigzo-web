import React, { useState, useRef, useEffect } from "react";

export default function DraggableFloatingButton() {
  const [position, setPosition] = useState({ x: 20, y: 100 });
  const [hasNewOrder, setHasNewOrder] = useState(false);
  const [loading, setLoading] = useState(true);

  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setHasNewOrder(true);
    }, 4000);
  }, []);

  const startDrag = (clientX, clientY) => {
    dragging.current = true;
    offset.current = {
      x: clientX - position.x,
      y: clientY - position.y,
    };
  };

  const duringDrag = (clientX, clientY) => {
    if (!dragging.current) return;
    setPosition({
      x: clientX - offset.current.x,
      y: clientY - offset.current.y,
    });
  };

  const stopDrag = () => {
    dragging.current = false;
  };

  if (!hasNewOrder && !loading) return null;

  return (
    <>
      <div
        style={{
          position: "fixed", // fixed to the screen
          left: `${position.x}px`,
          top: `${position.y}px`,
          zIndex: 9999, // stays on top
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#FF5722",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "30px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "grab",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
        onMouseDown={(e) => startDrag(e.clientX, e.clientY)}
        onMouseMove={(e) => duringDrag(e.clientX, e.clientY)}
        onMouseUp={stopDrag}
        onTouchStart={(e) => startDrag(e.touches[0].clientX, e.touches[0].clientY)}
        onTouchMove={(e) => duringDrag(e.touches[0].clientX, e.touches[0].clientY)}
        onTouchEnd={stopDrag}
      >
        {/* Spinner */}
        <div
          style={{
            width: "18px",
            height: "18px",
            border: "2px solid rgba(255,255,255,0.5)",
            borderTop: "2px solid white",
            borderRadius: "50%",
            animation: "spin 1s linear infinite"
          }}
        />
        Progress
        <span
          style={{
            backgroundColor: "red",
            color: "white",
            fontSize: "12px",
            fontWeight: "bold",
            padding: "2px 6px",
            borderRadius: "10px",
          }}
        >
          3
        </span>
      </div>

      {/* Spinner Animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
}
