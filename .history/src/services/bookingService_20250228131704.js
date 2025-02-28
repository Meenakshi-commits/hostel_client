import axios from "axios";

const API_URL = "https://hostel-server-d0td.onrender.com/api/bookings"; // Backend booking route

const bookingService = {
  getBookings: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  createBooking: async (bookingData) => {
    const response = await axios.post(API_URL, bookingData);
    return response.data;
  },

  cancelBooking: async (bookingId) => {
    const response = await axios.delete(`${API_URL}/${bookingId}`);
    return response.data;
  },
};

export default bookingService;
