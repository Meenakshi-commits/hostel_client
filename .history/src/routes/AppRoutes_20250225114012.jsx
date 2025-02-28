import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Booking from "../components/Booking";
import Notifications from "../components/Notifications";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}
