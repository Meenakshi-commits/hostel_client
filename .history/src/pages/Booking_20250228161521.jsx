import { useState } from "react";

const Booking = () => {
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    console.log("Booking details:", { roomId, checkInDate, checkOutDate });
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-gray-800">Book a Room</h2>
      <form className="mt-4" onSubmit={handleBooking}>
        <input
          type="text"
          placeholder="Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="w-full p-2 border rounded mt-2"
        />
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          className="w-full p-2 border rounded mt-2"
        />
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          className="w-full p-2 border rounded mt-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
