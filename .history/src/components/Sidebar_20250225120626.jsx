import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <ul>
        <li className="mb-2"><Link to="/dashboard" className="block p-2 hover:bg-gray-700">Dashboard</Link></li>
        <li className="mb-2"><Link to="/booking" className="block p-2 hover:bg-gray-700">Booking</Link></li>
        <li className="mb-2"><Link to="/payment" className="block p-2 hover:bg-gray-700">Payment</Link></li>
        <li className="mb-2"><Link to="/residents" className="block p-2 hover:bg-gray-700">Residents</Link></li>
        <li className="mb-2"><Link to="/billing" className="block p-2 hover:bg-gray-700">Billing</Link></li>
        <li className="mb-2"><Link to="/maintenance" className="block p-2 hover:bg-gray-700">Maintenance</Link></li>
        <li className="mb-2"><Link to="/reports" className="block p-2 hover:bg-gray-700">Reports</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
