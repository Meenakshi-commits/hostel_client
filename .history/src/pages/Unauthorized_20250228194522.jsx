import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-lg rounded-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800">Unauthorized</h1>
        <p className="mt-3 text-lg text-gray-600">
          You do not have permission to view this page.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;
