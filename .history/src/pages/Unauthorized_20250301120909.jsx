import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Unauthorized</h2>
      <p className="mt-4">You do not have permission to view this page.</p>
    </div>
  );
};

export default Unauthorized;
