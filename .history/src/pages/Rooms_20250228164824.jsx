import { useState, useEffect } from "react";
import { getRooms, createRoom, updateRoom, deleteRoom } from "../services/roomService";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [formData, setFormData] = useState({ roomNumber: "", type: "", capacity: "", price: "" });
  const [editingRoomId, setEditingRoomId] = useState(null);

  // Fetch rooms from API
  useEffect(() => {
    const fetchRooms = async () => {
      const data = await getRooms();
      setRooms(data);
    };
    fetchRooms();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or Update Room
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingRoomId) {
      await updateRoom(editingRoomId, formData);
    } else {
      await createRoom(formData);
    }
    setEditingRoomId(null);
    setFormData({ roomNumber: "", type: "", capacity: "", price: "" });
    setRooms(await getRooms()); // Refresh room list
  };

  // Edit Room
  const handleEdit = (room) => {
    setEditingRoomId(room._id);
    setFormData({ roomNumber: room.roomNumber, type: room.type, capacity: room.capacity, price: room.price });
  };

  // Delete Room
  const handleDelete = async (roomId) => {
    await deleteRoom(roomId);
    setRooms(await getRooms()); // Refresh room list
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Room Management</h2>

      {/* Room Form */}
      <form onSubmit={handleSubmit} className="mt-4 space-y-2">
        <input type="text" name="roomNumber" placeholder="Room Number" value={formData.roomNumber} onChange={handleChange} className="border p-2 w-full"/>
        <input type="text" name="type" placeholder="Room Type" value={formData.type} onChange={handleChange} className="border p-2 w-full"/>
        <input type="number" name="capacity" placeholder="Capacity" value={formData.capacity} onChange={handleChange} className="border p-2 w-full"/>
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="border p-2 w-full"/>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          {editingRoomId ? "Update Room" : "Add Room"}
        </button>
      </form>

      {/* Room List */}
      <ul className="mt-6">
        {rooms.map((room) => (
          <li key={room._id} className="flex justify-between items-center p-4 border rounded mt-2">
            <div>
              <p><strong>Room:</strong> {room.roomNumber} - {room.type}</p>
              <p><strong>Capacity:</strong> {room.capacity} | <strong>Price:</strong> ${room.price}</p>
            </div>
            <div>
              <button onClick={() => handleEdit(room)} className="px-3 py-1 bg-yellow-500 text-white rounded mr-2">Edit</button>
              <button onClick={() => handleDelete(room._id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
