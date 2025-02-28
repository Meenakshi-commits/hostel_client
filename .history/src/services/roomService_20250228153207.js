import axios from "axios";

const API = axios.create({
  baseURL: "https://hostel-server-d0td.onrender.com/api",
});

// Get All Rooms
export const getAllRooms = async () => {
  const { data } = await API.get("/rooms");
  return data;
};

// Get Room by ID
export const getRoomById = async (roomId) => {
  const { data } = await API.get(`/rooms/${roomId}`);
  return data;
};

// Add New Room (Admin Only)
export const addRoom = async (roomData, token) => {
  const { data } = await API.post("/rooms", roomData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
