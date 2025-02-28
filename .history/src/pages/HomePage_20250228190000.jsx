import React from 'react';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
    <div className="bg-white shadow-lg rounded-2xl p-20 text-center max-w-md">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to Sunshine Hostels</h1>
      <p className="mt-3 text-lg text-gray-600">
        Manage your hostel bookings, payments, and more.
      </p>
      <Link
        to="/signup"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Get Started
      </Link>
    </div>
  </div>
  
  );
};

export default HomePage;
