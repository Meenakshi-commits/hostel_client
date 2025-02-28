import { useEffect, useState, useContext } from "react";
import { getAllBookings, updateBookingStatus } from "../services/bookingService";
import { AuthContext } from "../context/AuthContext";

const ManageBookings = () => {
  const { token, user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getAllBookings(token);
        setBookings(data);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      }
    };
    fetchBookings();
  }, [token]);

  const handleStatusUpdate = async (id, status) => {
    try {
      await updateBookingStatus(id, status, token);
      alert("Booking status updated!");
      setBookings(bookings.map(booking => booking._id === id ? { ...booking, status } : booking));
    } catch (error) {
      alert("Failed to update booking status.");
    }
  };

  if (!user || user.role !== "admin") return <p className="text-center mt-6 text-red-500">Access Denied: Admins Only</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Bookings</h2>
      <div className="grid grid-cols-1 gap-4">
        {bookings.map((booking) => (
          <div key={booking._id} className="bg-white p-4 rounded-lg shadow-lg">
            <p>User ID: {booking.user}</p>
            <p>Room ID: {booking.roomId}</p>
            <p>Check-in: {booking.checkInDate}</p>
            <p>Check-out: {booking.checkOutDate}</p>
            <p>Status: {booking.status}</p>
            <button onClick={() => handleStatusUpdate(booking._id, "Confirmed")}
              className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 mt-2">
              Confirm
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageBookings;
