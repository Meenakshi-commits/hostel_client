import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import RoomAllocation from './components/RoomAllocation';
import './App.css'

function App() {
  return (
    <div className="App">
      <RoomAllocation />
    </div>
  );
}

export default App





