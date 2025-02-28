import { useState } from "react";
import { createRoom } from "../services/roomService";

const CreateRoom = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [occupancy, setOccupancy] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!roomNumber || !type || !price || !occupancy) {
      alert("All fields are required.");
      return;
    }
    const roomData = { roomNumber, type, price, occupancy };
    try {
      await createRoom(roomData);
      alert("Room created successfully!");
    } catch (error) {
      console.error("Error creating room:", error);
      alert("Failed to create room.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Create a Room</h2>
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
          <label className="block text-gray-700">Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4"></div>
          <label className="block text-gray-700">Occupancy</label>
          <input
            type="number"
            value={occupancy}
            onChange={(e) => setOccupancy(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
        >
          Create Room
        </button>
      </form>
    </div>
  );
};

export default CreateRoom;
