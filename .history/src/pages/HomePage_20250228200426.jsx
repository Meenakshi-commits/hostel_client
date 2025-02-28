import React from 'react';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url('/assets/bgimage.jpg')` }}
    >
      <div className="bg-white/80 shadow-xl rounded-2xl p-8 text-center max-w-md">
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
