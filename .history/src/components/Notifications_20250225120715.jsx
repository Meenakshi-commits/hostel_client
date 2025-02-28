import React, { useState, useEffect } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate fetching notifications from an API
    const fetchNotifications = () => {
      setNotifications([
        { id: 1, message: "New booking request received." },
        { id: 2, message: "Payment confirmed for Room 102." },
        { id: 3, message: "Maintenance request submitted." },
      ]);
    };

    fetchNotifications();

    // Simulate real-time notifications every 10 seconds
    const interval = setInterval(() => {
      fetchNotifications();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 w-64">
      <h3 className="text-lg font-semibold">Notifications</h3>
      <ul>
        {notifications.map((notif) => (
          <li key={notif.id} className="text-sm text-gray-700 border-b p-2">
            {notif.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
