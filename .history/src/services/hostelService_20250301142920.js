import api from './api';

export const fetchHostelDetails = async () => {
  try {
    const response = await api.get('/api/hostel-details');
    return response.data;
  } catch (error) {
    console.error("Error fetching hostel details:", error);
    throw error;
  }
};
