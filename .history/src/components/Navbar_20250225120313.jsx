import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">Hostel Management</Link>
        <div>
          <Link to="/dashboard" className="mx-2">Dashboard</Link>
          <Link to="/login" className="mx-2">Login</Link>
          <Link to="/signup" className="mx-2">Signup</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
