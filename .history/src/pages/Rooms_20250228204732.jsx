import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { getRooms } from "../services/roomService";

const Rooms = () => {
  const { user } = useContext(AuthContext);
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getRooms();
        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    fetchRooms();
  }, []);

  const handleBookRoom = () => {
    navigate("/book-room");
  };

  const handleCreateRoom = () => {
    navigate("/create-room");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Rooms</h2>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">All Rooms</h3>
        <ul className="list-disc list-inside">
          {rooms.map((room) => (
            <li key={room.id}>
              <div className="p-4 bg-gray-100 rounded-lg mb-2">
                <p><strong>Room Number:</strong> {room.number}</p>
                <p><strong>Room Name:</strong> {room.name}</p>
                <p><strong>Status:</strong> {room.status}</p>
                <p><strong>Price:</strong> ${room.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {user?.role === 'admin' && (
        <div className="mt-4">
          <button
            onClick={handleCreateRoom}
            className="px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-300 mr-4"
          >
            Create a Room
          </button>
          <button
            onClick={handleBookRoom}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
          >
            Book a Room
          </button>
        </div>
      )}
    </div>
  );
};

export default Rooms;
