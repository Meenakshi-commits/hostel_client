import api from "./api"; // Axios instance

// Fetch all rooms
export const getRooms = async () => {
  try {
    const response = await api.get("/api/rooms");
    return response.data;
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return [];
  }
};

// Create a new room
export const createRoom = async (roomData) => {
  try {
    await api.post("/api/rooms", roomData);
  } catch (error) {
    console.error("Error creating room:", error);
  }
};

// Update an existing room
export const updateRoom = async (roomId, roomData) => {
  try {
    await api.put(`/api/rooms/${roomId}`, roomData);
  } catch (error) {
    console.error("Error updating room:", error);
  }
};

// Delete a room
export const deleteRoom = async (roomId) => {
  try {
    await api.delete(`/api/rooms/${roomId}`);
  } catch (error) {
    console.error("Error deleting room:", error);
  }
};
