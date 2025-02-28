import { createContext, useState } from "react";
import { createBooking, getBookingById } from "../services/bookingService";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState(null);

  const addBooking = async (bookingData) => {
    try {
      const newBooking = await createBooking(bookingData);
      setBooking(newBooking);
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

  const fetchBooking = async (id) => {
    try {
      const data = await getBookingById(id);
      setBooking(data);
    } catch (error) {
      console.error("Failed to fetch booking:", error);
    }
  };

  return (
    <BookingContext.Provider value={{ booking, addBooking, fetchBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
