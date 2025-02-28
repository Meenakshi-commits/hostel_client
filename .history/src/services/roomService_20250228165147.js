import api from "./api";

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

// Get a single room by ID
export const getRoomById = async (roomId) => {
  try {
    const response = await api.get(`/api/rooms/${roomId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching room:", error);
    throw error;
  }
};

// Create a new room
export const createRoom = async (roomData) => {
  try {
    await api.post("/api/rooms", roomData);
  } catch (error) {
    console.error("Error creating room:", error);
    throw error;
  }
};

// Update an existing room
export const updateRoom = async (roomId, roomData) => {
  try {
    await api.put(`/api/rooms/${roomId}`, roomData);
  } catch (error) {
    console.error("Error updating room:", error);
    throw error;
  }
};

// Delete a room
export const deleteRoom = async (roomId) => {
  try {
    await api.delete(`/api/rooms/${roomId}`);
  } catch (error) {
    console.error("Error deleting room:", error);
    throw error;
  }
};
