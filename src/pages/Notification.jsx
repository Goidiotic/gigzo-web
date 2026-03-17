import React, { useEffect, useState } from "react";
import "../css/new/Notification.css";
import TopMenuCommon from "../components/new/TopCommonMenu";

export default function Notification() {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // 🔥 Replace with API
    setNotifications([
    ]);
  }, []);

  return (
    <>
    <TopMenuCommon/>

      <div className="notification-wrapper">

        <div className="notification-header">
          Notifications
        </div>

        {notifications.length === 0 ? (
          <div className="notification-empty">
            No notifications yet
          </div>
        ) : (
          notifications.map((item) => (
            <div
              key={item.id}
              className={`notification-card ${item.read ? "" : "unread"}`}
            >

              <div className="notification-left">
                {!item.read && <div className="notification-dot"></div>}
              </div>

              <div className="notification-content">
                <div className="notification-title">
                  {item.title}
                </div>

                <div className="notification-message">
                  {item.message}
                </div>

                <div className="notification-time">
                  {item.time}
                </div>
              </div>

            </div>
          ))
        )}

      </div>
      </>
  );
}