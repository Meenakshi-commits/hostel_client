import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { fetchAvailableRooms, fetchAllocatedRooms } from "../services/roomService";

const Rooms = () => {
  const { user } = useContext(AuthContext);
  const [availableRooms, setAvailableRooms] = useState([]);
  const [allocatedRooms, setAllocatedRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getRooms = async () => {
      const available = await fetchAvailableRooms();
      const allocated = await fetchAllocatedRooms();
      setAvailableRooms(available);
      setAllocatedRooms(allocated);
    };
    getRooms();
  }, []);

  const handleBookRoom = () => {
    navigate("/book-room");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Rooms</h2>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Available Rooms</h3>
        <ul className="list-disc list-inside">
          {availableRooms.map((room) => (
            <li key={room.id}>{room.name}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Allocated Rooms</h3>
        <ul className="list-disc list-inside">
          {allocatedRooms.map((room) => (
            <li key={room.id}>{room.name}</li>
          ))}
        </ul>
      </div>
      )}
    </div>
  );
};

export default Rooms;
