import { useState } from "react";
import axios from "axios";

const AddRoom = () => {
  const [roomData, setRoomData] = useState({
    roomNumber: "",
    type: "",
    price: "",
    status: "Available",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("/api/rooms", roomData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Room added successfully!");
    } catch (err) {
      alert("Failed to add room");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add Room</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded">
        <input
          type="text"
          placeholder="Room Number"
          className="p-2 border rounded w-full mb-2"
          onChange={(e) => setRoomData({ ...roomData, roomNumber: e.target.value })}
        />
        <select
          className="p-2 border rounded w-full mb-2"
          onChange={(e) => setRoomData({ ...roomData, type: e.target.value })}
        >
          <option value="">Select Type</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
        </select>
        <input
          type="number"
          placeholder="Price"
          className="p-2 border rounded w-full mb-2"
          onChange={(e) => setRoomData({ ...roomData, price: e.target.value })}
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRoom;
