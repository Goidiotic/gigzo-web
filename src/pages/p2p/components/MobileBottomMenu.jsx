import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../../css/p2p/MobileBottomMenu.css";

export default function MobileBottomMenu(){

    const navigate = useNavigate();
    const location = useLocation();

    const menu = [
        {label:"P2P Market", path:"/p2p-market"},
        {label:"Orders", path:"/p2p/order-list"},
        {label:"Wallet", path:"/p2p/p2p-wallet"},
        {label:"More", path:"/p2p/more-menu"},
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