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
import CreateRoom from "../pages/CreateRoom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/hostel-details" element={<HostelDetails />} /> {/* Accessible by all */}

      {/* Protected Routes */}
      <Route path="/booking" element={<ProtectedRoute roles={['admin', 'user']} element={Booking} />} />
      <Route path="/payment" element={<ProtectedRoute roles={['admin', 'resident']} element={Payment} />} />
      <Route path="/hostel-details" element={<ProtectedRoute roles={['admin', 'resident']} element={HostelDetails} />} />
      <Route path="/maintenance" element={<ProtectedRoute roles={['admin', 'resident']} element={Maintenance} />} />
      <Route path="/residents" element={<ProtectedRoute roles={['admin', 'user']} element={Residents} />} />
      <Route path="/billing" element={<ProtectedRoute roles={['admin']} element={Billing} />} />
      <Route path="/reports" element={<ProtectedRoute roles={['admin', 'resident']} element={Reports} />} />
      <Route path="/rooms" element={<ProtectedRoute roles={['admin', 'user']} element={Rooms} />} />
      <Route path="/book-room" element={<ProtectedRoute roles={['admin']} element={BookRoom} />} />
      <Route path="/create-room" element={<ProtectedRoute roles={['admin']} element={CreateRoom} />} />
    </Routes>
  );
};

export default AppRoutes;
