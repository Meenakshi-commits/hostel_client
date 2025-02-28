import { useState } from "react";
import { createRoom } from "../services/roomService";

const CreateRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!roomName || !roomNumber) {
      alert("All fields are required.");
      return;
    }
    const roomData = { name: roomName, number: roomNumber };
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
          <label className="block text-gray-700">Room Name</label>
          <input
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
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
