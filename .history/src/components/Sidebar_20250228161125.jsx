import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-4">🏠 Dashboard</h2>
      <ul className="space-y-3">
        <li><Link to="/dashboard" className="block p-2 hover:bg-gray-700 rounded">Dashboard</Link></li>
        <li><Link to="/booking" className="block p-2 hover:bg-gray-700 rounded">Bookings</Link></li>
        <li><Link to="/payment" className="block p-2 hover:bg-gray-700 rounded">Payments</Link></li>
        <li><Link to="/residents" className="block p-2 hover:bg-gray-700 rounded">Residents</Link></li>
        <li><Link to="/billing" className="block p-2 hover:bg-gray-700 rounded">Billing</Link></li>
        <li><Link to="/reports" className="block p-2 hover:bg-gray-700 rounded">Reports</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
