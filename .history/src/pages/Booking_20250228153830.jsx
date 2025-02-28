import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { createBooking } from "../services/bookingService";
import { useNavigate, useParams } from "react-router-dom";

const BookingForm = () => {
  const { token, user } = useContext(AuthContext);
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    checkInDate: "",
    checkOutDate: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please login to book a room.");
      return;
    }
    setLoading(true);
    try {
      await createBooking({ ...formData, roomId, user: user._id }, token);
      alert("Room booked successfully!");
      navigate("/my-bookings");
    } catch (error) {
      alert("Booking failed: " + error.response?.data?.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 bg-white shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Book Room</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type="date" className="border p-2 rounded"
            value={formData.checkInDate} onChange={(e) => setFormData({ ...formData, checkInDate: e.target.value })} required />
          <input type="date" className="border p-2 rounded"
            value={formData.checkOutDate} onChange={(e) => setFormData({ ...formData, checkOutDate: e.target.value })} required />
          <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            {loading ? "Booking..." : "Book Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
