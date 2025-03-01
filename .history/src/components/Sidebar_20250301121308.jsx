import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-700 text-white w-64 p-4">
      <ul>
        <li className="mb-2">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="mb-2">
          <Link to="/payments">Payments</Link>
        </li>
        <li className="mb-2">
          <Link to="/billing">Billing</Link>
        </li>
        <li className="mb-2">
          <Link to="/maintenance">Maintenance</Link>
        </li>
        <li className="mb-2">
          <Link to="/hostel-details">Hostel Details</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
