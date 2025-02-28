import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Booking() {
  const [room, setRoom] = useState("");

  const handleBooking = () => {
    alert(`Room ${room} booked successfully!`);
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-5">
        <h1 className="text-3xl font-bold">Book a Room</h1>
        <select onChange={(e) => setRoom(e.target.value)} className="border p-2 mt-2">
          <option value="">Select a Room</option>
          <option value="101">Room 101</option>
          <option value="102">Room 102</option>
        </select>
        <button onClick={handleBooking} className="block bg-green-500 text-white px-4 py-2 mt-3">
          Confirm Booking
        </button>
      </main>
      <Footer />
    </div>
  );
}
