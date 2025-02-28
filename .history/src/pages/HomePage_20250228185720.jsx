import React from 'react';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold">Welcome to S Hostels</h1>
      <p className="mt-2 text-lg">Manage your hostel bookings, payments, and more.</p>
      <Link to="/signup" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Get Started
      </Link>
    </div>
  );
};

export default HomePage;
