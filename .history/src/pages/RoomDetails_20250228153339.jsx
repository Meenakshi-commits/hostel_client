import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoomById } from "../services/roomService";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const data = await getRoomById(id);
        setRoom(data);
      } catch (error) {
        console.error("Failed to fetch room details:", error);
      }
    };
    fetchRoom();
  }, [id]);

  if (!room) return <p className="text-center mt-6">Loading room details...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Room {room.roomNumber}</h2>
      <p>Type: {room.type}</p>
      <p>Price: ${room.price}</p>
      <p>Status: <span className={`font-bold ${room.status === "Available" ? "text-green-600" : "text-red-600"}`}>
        {room.status}
      </span></p>
    </div>
  );
};

export default RoomDetails;
