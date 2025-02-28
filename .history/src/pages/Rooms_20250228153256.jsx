import { useEffect, useState } from "react";
import { getAllRooms } from "../services/roomService";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getAllRooms();
        setRooms(data);
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
      }
    };
    fetchRooms();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Rooms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room._id} className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Room {room.roomNumber}</h3>
            <p>Type: {room.type}</p>
            <p>Price: ${room.price}</p>
            <p>Status: <span className={`font-bold ${room.status === "Available" ? "text-green-600" : "text-red-600"}`}>
              {room.status}
            </span></p>
            <Link to={`/rooms/${room._id}`} className="mt-2 block text-blue-500 underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
