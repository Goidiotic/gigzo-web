import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/MarketRateCard.css";

export default function MarketRateCard({
  asset,
  price,
  symbol = "₹",
  actionLink = "/p2p"
}) {

  const navigate = useNavigate();

  return (

    <div className="iox-market-card">

      <div className="iox-market-left">

        <div className="iox-market-price">
          {symbol}{price}
        </div>

        <div className="iox-market-pair">
          {asset}
        </div>

      </div>


      <div className="iox-market-right">

        <button
          className="iox-market-btn"
          onClick={() => navigate(actionLink)}
        >
          Buy Now
        </button>

      </div>

    </div>

  );

}