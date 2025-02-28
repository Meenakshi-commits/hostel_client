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
      <h2 className="text-3xl font-bold mb-6">Rooms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
            <p className="text-gray-700"><strong>Room Number:</strong> {room.number}</p>
            <p className="text-gray-700"><strong>Status:</strong> {room.status}</p>
            <p className="text-gray-700"><strong>Price:</strong> ${room.price}</p>
          </div>
        ))}
      </div>
      {user?.role === 'admin' && (
        <div className="mt-6 flex space-x-4">
          <button
            onClick={handleCreateRoom}
            className="px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-300"
          >
            Create a Room
          </button>
          <button
            onClick={handleBookRoom}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
          >
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
