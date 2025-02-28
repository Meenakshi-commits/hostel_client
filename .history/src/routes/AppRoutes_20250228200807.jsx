import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

// Pages
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/Dashboard";
import Booking from "../pages/Booking";
import Payment from "../pages/Payment";
import HostelDetails from "../pages/HostelDetails";
import Maintenance from "../pages/Maintenance";
import Residents from "../pages/Residents";
import Billing from "../pages/Billing";
import Reports from "../pages/Reports";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Unauthorized from "../pages/Unauthorized";
import Rooms from "../pages/Rooms";
import BookRoom from "../pages/BookRoom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Protected Routes */}
      <Route path="/dashboard" element={<ProtectedRoute roles={['admin', 'user']}><Dashboard /></ProtectedRoute>} />
      <Route path="/booking" element={<ProtectedRoute roles={['admin', 'user']}><Booking /></ProtectedRoute>} />
      <Route path="/payment" element={<ProtectedRoute roles={['admin']}><Payment /></ProtectedRoute>} />
      <Route path="/hostel-details" element={<ProtectedRoute roles={['admin']}><HostelDetails /></ProtectedRoute>} />
      <Route path="/maintenance" element={<ProtectedRoute roles={['admin']}><Maintenance /></ProtectedRoute>} />
      <Route path="/residents" element={<ProtectedRoute roles={['admin', 'user']}><Residents /></ProtectedRoute>} />
      <Route path="/billing" element={<ProtectedRoute roles={['admin']}><Billing /></ProtectedRoute>} />
      <Route path="/reports" element={<ProtectedRoute roles={['admin']}><Reports /></ProtectedRoute>} />
      <Route path="/rooms" element={<ProtectedRoute roles={['admin', 'user']}><Rooms /></ProtectedRoute>} />
      <Route path="/book-room" element={<ProtectedRoute roles={['admin']}><BookRoom /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;
