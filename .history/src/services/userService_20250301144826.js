import api from './api';

export const fetchAllUsers = async () => {
  try {
    const response = await api.get('/api/users');
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
