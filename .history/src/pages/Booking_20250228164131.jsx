import { useEffect, useState } from "react";
import { fetchBookingById } from "../services/bookingService";

const Booking = () => {
  const [booking, setBooking] = useState(null);
  const bookingId = "someBookingId"; // Replace with actual ID from route params

  useEffect(() => {
    const getBooking = async () => {
      const data = await fetchBookingById(bookingId);
      setBooking(data);
    };
    getBooking();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Booking Details</h2>
      {booking ? (
        <pre className="bg-gray-200 p-4 rounded">{JSON.stringify(booking, null, 2)}</pre>
      ) : (
        <p>Loading booking details...</p>
      )}
    </div>
  );
};

export default Booking;
