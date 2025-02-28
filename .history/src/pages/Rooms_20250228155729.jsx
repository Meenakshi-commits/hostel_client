import { useEffect, useState } from "react";
import axios from "axios";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("/api/rooms")
      .then((res) => setRooms(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Rooms</h1>
      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div key={room._id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-bold">Room {room.roomNumber}</h2>
            <p>Type: {room.type}</p>
            <p>Price: ₹{room.price}</p>
            <p>Status: {room.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
