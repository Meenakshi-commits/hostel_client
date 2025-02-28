import axios from "axios";

const API = axios.create({
  baseURL: "https://hostel-server-d0td.onrender.com/api",
});

// Create Booking
export const createBooking = async (bookingData, token) => {
  const { data } = await API.post("/bookings", bookingData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

// Get All Bookings (Admin Only)
export const getAllBookings = async (token) => {
  const { data } = await API.get("/bookings", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

// Get User Bookings
export const getUserBookings = async (token) => {
  const { data } = await API.get("/bookings/user", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

// Update Booking Status (Admin Only)
export const updateBookingStatus = async (bookingId, status, token) => {
  const { data } = await API.patch(`/bookings/${bookingId}`, { status }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
