import api from "./api";

// Create a new booking
export const createBooking = async (bookingData) => {
  try {
    const response = await api.post("/api/bookings", bookingData);
    return response.data;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};

// Get a specific booking
export const getBookingById = async (bookingId) => {
  try {
    const response = await api.get(`/api/bookings/${bookingId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching booking:", error);
    throw error;
  }
};

// Get all bookings
export const getAllBookings = async () => {
  try {
    const response = await api.get("/api/bookings");
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
};

// Cancel a booking
export const cancelBooking = async (bookingId) => {
  try {
    await api.delete(`/api/bookings/${bookingId}`);
  } catch (error) {
    console.error("Error canceling booking:", error);
    throw error;
  }
};

// Fetch Booking by ID
export const fetchBookingById = async (bookingId) => {
  try {
    const response = await api.get(`/api/bookings/${bookingId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching booking by ID:", error);
    throw error;
  }
};
