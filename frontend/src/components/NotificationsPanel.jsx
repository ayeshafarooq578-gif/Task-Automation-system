import { useEffect, useState } from "react";
import API from "../services/api";

function NotificationsPanel() {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    try {
      const res = await API.get("/notifications");
      setNotifications(res.data);
    } catch (error) {
      console.log("Notification Error:", error);
    }
  };

  useEffect(() => {
    // Load notifications immediately
    fetchNotifications();

    // Refresh every 5 seconds
    const interval = setInterval(() => {
      fetchNotifications();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="notification-panel glass">

      <h2>🔔 Notifications</h2>

      <h4>Total Notifications: {notifications.length}</h4>

      <hr />

      {notifications.length === 0 ? (

        <p>No Notifications Yet</p>

      ) : (

        notifications.map((note) => (

          <div
            key={note._id}
            className="notification-card"
          >

            <div className="notification-header">

              <h4>{note.message}</h4>

              <span className={`notification-type ${note.type}`}>
                {note.type}
              </span>

            </div>

            <small className="notification-time">

              {new Date(note.createdAt).toLocaleDateString()} |{" "}
              {new Date(note.createdAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}

            </small>

          </div>

        ))

      )}

    </div>
  );
}

export default NotificationsPanel;