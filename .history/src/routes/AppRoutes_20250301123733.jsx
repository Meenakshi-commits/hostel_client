import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

// Pages
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import HostelDetails from "./pages/HostelDetails";
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
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Unauthorized" element={<Unauthorized />} />

      {/* Protected Routes */}
      <Route path="/Dashboard" element={<ProtectedRoute roles={['admin', 'user']}><Dashboard /></ProtectedRoute>} />
      <Route path="/Booking" element={<ProtectedRoute roles={['admin', 'user']}><Booking /></ProtectedRoute>} />
      <Route path="/Payment" element={<ProtectedRoute roles={['admin']}><Payment /></ProtectedRoute>} />
      <Route path="/HostelDetails" element={<ProtectedRoute roles={['admin', 'resident']}><HostelDetails /></ProtectedRoute>} />
      <Route path="/Maintenance" element={<ProtectedRoute roles={['admin']}><Maintenance /></ProtectedRoute>} />
      <Route path="/Residents" element={<ProtectedRoute roles={['admin', 'user']}><Residents /></ProtectedRoute>} />
      <Route path="/Billing" element={<ProtectedRoute roles={['admin']}><Billing /></ProtectedRoute>} />
      <Route path="/Reports" element={<ProtectedRoute roles={['admin']}><Reports /></ProtectedRoute>} />
      <Route path="/Rooms" element={<ProtectedRoute roles={['admin', 'user']}><Rooms /></ProtectedRoute>} />
      <Route path="/BookRoom" element={<ProtectedRoute roles={['admin']}><BookRoom /></ProtectedRoute>} />
      <Route path="/CreateRoom" element={<ProtectedRoute roles={['admin']}><CreateRoom /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;
