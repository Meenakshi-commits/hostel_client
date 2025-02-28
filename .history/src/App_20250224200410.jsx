import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, Dashboard, HostelDetails, ContactUs, Login, Signup } from "./components/HomePage";
import RoomAllocation from './components/RoomAllocation';
import './App.css'

function App() {
  return (
    <Router>
    <Routes>

    <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hostel-details" element={<HostelDetails />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<RoomAllocation />} />
    </Routes>
  </Router>
  );
}

export default App





