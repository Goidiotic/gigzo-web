// src/components/gigwork/Sidebar.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/layout/Sidebar.css";

export default function Sidebar() {

  const location = useLocation();

  const menu = [
    {
      name: "My Jobs",
      path: "/jobs"
    },
    {
      name: "Clients",
      path: "/clients"
    },
    {
      name: "Tickets",
      path: "/tickets"
    },
    {
      name: "Chats",
      path: "/chats"
    },
    {
      name: "Profile",
      path: "/profile"
    }
  ];

  return (
    <div className="gw-sidebar">

      <div className="gw-logo">
        GIGZO WORK
      </div>

      {menu.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={
            location.pathname === item.path
              ? "gw-menu active"
              : "gw-menu"
          }
        >
          {item.name}
        </Link>
      ))}

    </div>
  );
}