import { useState, useEffect } from "react";
import { createBooking } from "../services/bookingService";
import { fetchAllocatedRooms } from "../services/roomService";

const BookRoom = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [guestName, setGuestName] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [allocatedRooms, setAllocatedRooms] = useState([]);

  useEffect(() => {
    const getAllocatedRooms = async () => {
      try {
        const data = await fetchAllocatedRooms();
        setAllocatedRooms(data);
      } catch (error) {
        console.error("Error fetching allocated rooms:", error);
      }
    };
    getAllocatedRooms();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!roomNumber || !guestName || !bookingDate) {
      alert("All fields are required.");
      return;
    }
    const bookingData = { roomNumber, guestName, bookingDate };
    try {
      await createBooking(bookingData);
      alert("Room booked successfully!");
    } catch (error) {
      console.error("Error booking room:", error);
      alert("Failed to book room.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Book a Room</h2>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Allocated Rooms</h3>
        <ul className="list-disc list-inside">
          {allocatedRooms.map((room) => (
            <li key={room.id}>{room.name}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Room Number</label>
          <input
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Guest Name</label>
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Booking Date</label>
          <input
            type="date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
        >
          Book Room
        </button>
      </form>
    </div>
  );
};

export default BookRoom;
