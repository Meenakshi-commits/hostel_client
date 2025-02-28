import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import Rooms from "../pages/Rooms";
import RoomDetails from "../pages/RoomDetails";
import AddRoom from "../pages/AddRoom";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/rooms/:id" element={<RoomDetails />} />
      <Route path="/add-room" element={<ProtectedRoute><AddRoom /></ProtectedRoute>} />
      <Route path="/book-room/:roomId" element={<BookingForm />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/manage-bookings" element={<ProtectedRoute><ManageBookings /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;
