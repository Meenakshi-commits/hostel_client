import { useEffect, useState } from "react";
import axios from "../services/api";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("/api/notifications");
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg w-80">
      <h3 className="font-bold text-lg mb-3">🔔 Notifications</h3>
      <ul className="space-y-2">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <li key={notification._id} className="border-b p-2">
              {notification.message}
            </li>
          ))
        ) : (
          <p>No notifications available.</p>
        )}
      </ul>
    </div>
  );
};

export default Notifications;
