import { useState } from "react";
import bookingService from "../services/bookingService";

const Booking = () => {
  const [room, setRoom] = useState("");
  const [date, setDate] = useState("");

  const handleBooking = async () => {
    await bookingService.createBooking({ room, date });
    alert("Booking successful!");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Book a Room</h1>
      <input type="text" placeholder="Room Number" value={room} onChange={(e) => setRoom(e.target.value)} className="p-2 border rounded"/>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="p-2 border rounded ml-4"/>
      <button onClick={handleBooking} className="ml-4 px-4 py-2 bg-green-500 text-white rounded">Book Now</button>
    </div>
  );
};

export default Booking;
