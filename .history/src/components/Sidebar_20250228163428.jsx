import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white w-64 p-4 h-screen fixed">
      <h2 className="text-lg font-bold mb-4">Dashboard</h2>
      <nav>
        <ul className="space-y-3">
          <li><Link to="/dashboard">🏠 Home</Link></li>
          <li><Link to="/booking">📅 Bookings</Link></li>
          <li><Link to="/billing">💳 Billing</Link></li>
          <li><Link to="/residents">👥 Residents</Link></li>
          <li><Link to="/reports">📊 Reports</Link></li>
          <li><Link to="/maintenance">🔧 Maintenance</Link></li>
          <li><Link to="/logout">🚪 Logout</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
