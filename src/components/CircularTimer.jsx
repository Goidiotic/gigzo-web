import React, { useEffect, useRef, useState } from 'react';

const formatTime = (seconds) => {
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
};

const CircularTimer = ({
  duration = 60,
  remainingTime = 60,
  size = 150,
  strokeWidth = 8,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const [timeLeft, setTimeLeft] = useState(remainingTime);
  const intervalRef = useRef(null);

  useEffect(() => {
    setTimeLeft(remainingTime);
  }, [remainingTime]);

useEffect(() => {
  if (timeLeft <= 0) return () => {};

  const interval = setInterval(() => {
    setTimeLeft(prev => {
      if (prev <= 1) {
        clearInterval(interval);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, [remainingTime]);

  const progress = (duration - timeLeft) / duration;

  return (
    <div
      style={{
        width: size + 20,
        height: size + 20,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Spinner Outer Ring */}
      <svg
        width={size + 20}
        height={size + 20}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          transformOrigin: 'center',
          animation: 'spin 4s linear infinite',
        }}
      >
        <circle
          cx={(size + 20) / 2}
          cy={(size + 20) / 2}
          r={(size + 20 - 4) / 2}
          stroke="#FFC107"
          strokeWidth="2"
          fill="transparent"
          strokeDasharray="15,20"
        />
      </svg>

      {/* Inner Timer Circle */}
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: '#FFE0B2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <svg
          width={size}
          height={size}
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          {/* Track */}
          <circle
            stroke="#FFF3E0"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          {/* Countdown Progress */}
          <circle
            stroke="#FF9A0D"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={progress * circumference}
            r={radius}
            cx={size / 2}
            cy={size / 2}
            style={{ transition: 'stroke-dashoffset 0.3s linear' }}
          />
        </svg>

        <div
          style={{
            fontSize: size * 0.15,
            fontWeight: '500',
            color: '#333',
            position: 'relative',
          }}
        >
          {formatTime(timeLeft)}
        </div>
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
    </div>
  );
};

export default CircularTimer;
