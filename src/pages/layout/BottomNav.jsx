// src/components/gigwork/BottomNav.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/layout/BottomNav.css";

import {
  Briefcase,
  Users,
  Ticket,
  MessageCircle,
  User
} from "lucide-react";

export default function BottomNav() {

  const location = useLocation();

  const menu = [
    {
      name: "Jobs",
      icon: <Briefcase size={20} />,
      path: "/jobs"
    },
    {
      name: "Clients",
      icon: <Users size={20} />,
      path: "/clients"
    },
    {
      name: "Tickets",
      icon: <Ticket size={20} />,
      path: "/tickets"
    },
    {
      name: "Chat",
      icon: <MessageCircle size={20} />,
      path: "/chats"
    },
    {
      name: "User",
      icon: <User size={20} />,
      path: "/profile"
    }
  ];

  return (
    <div className="gw-bottom-nav">

      {menu.map((item) => {

        const isActive =
          location.pathname.startsWith(item.path);

        return (
          <Link
            key={item.name}
            to={item.path}
            replace
            className={
              isActive
                ? "gw-bottom-item active"
                : "gw-bottom-item"
            }
          >
            {item.icon}

            <span>
              {item.name}
            </span>

          </Link>
        );
      })}

    </div>
  );
}