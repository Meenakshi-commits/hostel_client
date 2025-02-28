import React from "react";
import { Routes, Route } from "react-router-dom";


import BookingForm from   "./pages/Booking";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { RoomProvider } from "./context/RoomContext";
import { BookingProvider } from "./context/BookingContext";
import { NotificationProvider } from "./context/NotificationContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import HostelDetails from "./pages/HostelDetails";
import Maintenance from "./pages/Maintenance";
import Residents from "./pages/Residents";
import Billing from "./pages/Billing";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <AuthProvider>
      <RoomProvider>
        <BookingProvider>
          <NotificationProvider>
            <Router>
              <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                  <Navbar />
                  <div className="p-6 flex-grow overflow-auto">
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<Signup />} />

                      {/* Protected Routes */}
                      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                      <Route path="/booking" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
                      <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
                      <Route path="/hostel-details" element={<ProtectedRoute><HostelDetails /></ProtectedRoute>} />
                      <Route path="/maintenance" element={<ProtectedRoute><Maintenance /></ProtectedRoute>} />
                      <Route path="/residents" element={<ProtectedRoute><Residents /></ProtectedRoute>} />
                      <Route path="/billing" element={<ProtectedRoute><Billing /></ProtectedRoute>} />
                      <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
                    </Routes>
                  </div>
                  <Footer />
                </div>
              </div>
            </Router>
          </NotificationProvider>
        </BookingProvider>
      </RoomProvider>
    </AuthProvider>
  );
}

export default App;

      <Route path="/booking" element={<Booking />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
