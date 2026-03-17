import React from "react";
import { useNavigate } from "react-router-dom";

export default function BottomMenu() {

  const navigate = useNavigate();

  return (
    <div className="bottom-menu">

      <span onClick={()=>navigate("/")}>🏠</span>
      <span onClick={()=>navigate("/transactions")}>📄</span>
      <span onClick={()=>navigate("/wallet")}>👛</span>
      <span onClick={()=>navigate("/more")}>☰</span>

    </div>
  );
}