import { createContext, useState, useEffect } from "react";
import { getRooms } from "../services/roomService";

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const data = await getRooms();
      setRooms(data);
    } catch (error) {
      console.error("Failed to fetch rooms:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RoomContext.Provider value={{ rooms, loading }}>
      {children}
    </RoomContext.Provider>
  );
};
