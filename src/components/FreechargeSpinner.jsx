import React, { useRef, useEffect, useState } from "react";

const FreechargeSpinner = () => {
  const [arc, setArc] = useState({ start: -90, end: -90 }); // angles in degrees
  const requestRef = useRef();
  const phaseRef = useRef("grow"); // "grow" or "shrink"
  const rotationRef = useRef(0);

  const radius = 40;
  const cx = 50;
  const cy = 50;

  // Convert polar coords to Cartesian for SVG
  const polarToCartesian = (cx, cy, r, angleDeg) => {
    const angleRad = (Math.PI / 180) * angleDeg;
    return {
      x: cx + r * Math.cos(angleRad),
      y: cy + r * Math.sin(angleRad),
    };
  };

  // Build arc path between start & end angles
  const describeArc = (x, y, r, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, r, endAngle);
    const end = polarToCartesian(x, y, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M", start.x, start.y,
      "A", r, r, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
  };

  // Animation loop
  const animate = () => {
    setArc((prev) => {
      let { start, end } = prev;

      if (phaseRef.current === "grow") {
        start += 4; // A moves
        end += 6;   // B moves faster → arc length increases

        if (end % 360 === 270) { 
          // when B reaches top (P at -90°)
          end = -90; 
          phaseRef.current = "shrink";
        }
      } else if (phaseRef.current === "shrink") {
        start += 6; // A keeps moving
        // B frozen at -90 (P)
        end = -90;

        if (Math.abs((start % 360) - (-90)) < 5) {
          // when A catches B at P
          start = -90;
          end = -90;
          phaseRef.current = "grow"; // restart
        }
      }

      return { start, end };
    });

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const arcPath = describeArc(cx, cy, radius, arc.start, arc.end);

  return (
    <svg width="120" height="120" viewBox="0 0 100 100">
      {/* Background circle */}
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        stroke="#f1612233"
        strokeWidth="6"
        fill="none"
      />
      {/* Animated arc */}
      <path
        d={arcPath}
        stroke="#f16122"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default FreechargeSpinner;