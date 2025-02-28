import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Hostel Management System</h1>
      <p className="text-lg text-gray-600 mt-2">Book your stay with ease!</p>
      
      <div className="mt-6 space-x-4">
        <Link to="/signup" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Sign Up
        </Link>
        <Link to="/login" className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Login
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
