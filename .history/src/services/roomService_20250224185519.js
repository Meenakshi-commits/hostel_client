import axios from 'axios';

const API_URL = 'http://localhost:5000/api/rooms';

export const getRooms = async () => {
  return await axios.get(API_URL);
};

export const getAvailableRooms = async () => {
  return await axios.get(`${API_URL}/available`);
};

export const createRoom = async (roomData) => {
  return await axios.post(API_URL, roomData);
};

export const allocateRoom = async (roomId, residentId) => {
  return await axios.put(`${API_URL}/${roomId}/allocate`, { residentId });
};

export const checkOutRoom = async (roomId, residentId) => {
  return await axios.put(`${API_URL}/${roomId}/check-out`, { residentId });
};
