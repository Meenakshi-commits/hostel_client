import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, Dashboard, HostelDetails, ContactUs, Login, Signup } from "./components/HomePage";
import RoomAllocation from './components/RoomAllocation';
import './App.css'

function App() {
  return (
    <Router>
    <Routes>

      
      <Route path="/" element={<RoomAllocation />} />
    </Routes>
  </Router>
  );
}

export default App





