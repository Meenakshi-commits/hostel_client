import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Booking from "../components/Booking";
import Notifications from "../components/Notifications";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import Dashboard from "../components/Dashboard";
import HostelDetails from "../components/HostelDetails";
import ContactUs from "../components/ContactUs";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Notifications from "../components/Notifications";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* ✅ Ensure this exists */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/hostel-details" element={<HostelDetails />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  );
};

export default AppRoutes;

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}
