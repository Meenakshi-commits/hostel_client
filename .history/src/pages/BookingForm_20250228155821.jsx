import { useEffect, useState } from "react";
import axios from "axios";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("/api/bookings/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setBookings(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
      <div className="grid grid-cols-3 gap-4">
        {bookings.map((booking) => (
          <div key={booking._id} className="p-4 border rounded shadow">
            <p>Room ID: {booking.roomId}</p>
            <p>Check-In: {booking.checkInDate}</p>
            <p>Check-Out: {booking.checkOutDate}</p>
            <p>Status: {booking.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
