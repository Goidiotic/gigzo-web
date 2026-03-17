import React, { useEffect, useState } from "react";
import "../css/WebMainMenu.css";
import { useNavigate } from "react-router-dom";

export default function WebMainMenu({ i="p2p" }) {

  const [active,setActive] = useState();
  const navigate = useNavigate();

  const handleChange = (type)=>{
    if(type === "p2p") {
      navigate('/p2p-market');
    } else {
      navigate("/wallet");
    }
  }

  useEffect(()=>{
    setActive(i);
  },[i]);

  return (

    <div className="iox-mainmenu-wrapper">

        <div className="iox-mainmenu-container">

            <button
                className={`iox-mainmenu-item ${active === "p2p" ? "active" : ""}`}
                onClick={()=>handleChange("p2p")}
            >
                P2P
            </button>

            <button
                className={`iox-mainmenu-item ${active === "exchange" ? "active" : ""}`}
                onClick={()=>handleChange("exchange")}
            >
                Exchange
            </button>

        </div>

    </div>

  );

}