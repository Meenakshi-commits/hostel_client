import { useEffect, useState, useContext } from "react";
import { getUserBookings } from "../services/bookingService";
import { AuthContext } from "../context/AuthContext";

const MyBookings = () => {
  const { token } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getUserBookings(token);
        setBookings(data);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      }
    };
    fetchBookings();
  }, [token]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      <div className="grid grid-cols-1 gap-4">
        {bookings.map((booking) => (
          <div key={booking._id} className="bg-white p-4 rounded-lg shadow-lg">
            <p>Room ID: {booking.roomId}</p>
            <p>Check-in: {booking.checkInDate}</p>
            <p>Check-out: {booking.checkOutDate}</p>
            <p>Status: <span className={`font-bold ${booking.status === "Confirmed" ? "text-green-600" : "text-yellow-600"}`}>
              {booking.status}
            </span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
