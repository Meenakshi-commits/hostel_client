import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import RoomAllocation from './components/RoomAllocation';
import './App.css'

function App() {
  return (
    <<Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Add other routes here */}
    </Routes>
  </Router>
  );
}

export default App





