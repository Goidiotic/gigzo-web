import React, { useEffect, useState } from "react";
import { getTimeLeftInSeconds, formatTime } from "../utils/timerHelper";

const BOOST_DURATION = 15 * 60 * 1000; // 15 minutes
const COOLDOWN_DURATION = 30 * 60 * 1000; // 30 minutes

const BoostSection = ({ ad, onBoost }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [mode, setMode] = useState("idle");
  // "boosted" | "cooldown" | "ready"

  useEffect(() => {
    let interval;

    const updateTimer = () => {
      if (ad.boosted === "yes" && ad.updatedAt) {
        // ✅ BOOSTED phase
        const boostRemaining = getTimeLeftInSeconds(ad.updatedAt, BOOST_DURATION);
        if (boostRemaining > 0) {
          setTimeLeft(boostRemaining);
          setMode("boosted");
        } else {
          // boost expired -> go to cooldown
          const cooldownRemaining = getTimeLeftInSeconds(ad.updatedAt, COOLDOWN_DURATION);
          if (cooldownRemaining > 0) {
            setTimeLeft(cooldownRemaining);
            setMode("cooldown");
          } else {
            setMode("ready");
          }
        }
      } else {
        // ✅ Not boosted -> cooldown based on createdAt
        const cooldownRemaining = getTimeLeftInSeconds(ad.createdAt, COOLDOWN_DURATION);
        if (cooldownRemaining > 0) {
          setTimeLeft(cooldownRemaining);
          setMode("cooldown");
        } else {
          setMode("ready");
        }
      }
    };

    updateTimer();
    interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [ad.boosted, ad.updatedAt, ad.createdAt]);

  if (mode === "boosted") {
    return (
      <div>
        <div style={{ fontSize: "12px", color: "#00C542" }}>
          Your token sell within
        </div>
        <div style={{ fontSize: "14px", fontWeight: "600" }}>
          {formatTime(timeLeft)}
        </div>
      </div>
    );
  }

  if (mode === "cooldown") {
    return (
      <div>
        <div style={{ fontSize: "12px", color: "#5088ff" }}>
          Boost available in
        </div>
        <div style={{ fontSize: "14px", fontWeight: "600" }}>
          {formatTime(timeLeft)}
        </div>
      </div>
    );
  }

  return (
    <button
      style={{
        backgroundColor: "#5088ff",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        padding: "6px 12px",
        fontSize: "13px",
        cursor: "pointer",
        transition: "0.2s",
      }}
      onClick={() => onBoost(ad.adId)}
    >
      🚀 Boost
    </button>
  );
};

export default BoostSection;
