import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../../css/p2p/MobileBottomMenu.css";

export default function MobileBottomMenu(){

    const navigate = useNavigate();
    const location = useLocation();

    const menu = [
        {label:"Swap", path:"/exchage-currency"},
        {label:"Wallet", path:"/wallet"},
        {label:"Transactions", path:"/transaction-history"},
        {label:"Profile", path:"/exchange/profile"},
    ];

    return(

        <div className="iox-mobile-menu-wrapper">

            {menu.map((item,index)=>{

                const active = location.pathname === item.path;

                return(

                    <div
                        key={index}
                        className={`iox-mobile-menu-item ${active ? "active" : ""}`}
                        onClick={()=>navigate(item.path)}
                    >
                        {item.label}
                    </div>

                )

            })}

        </div>

    )

}