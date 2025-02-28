import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/booking" className="p-4 bg-green-500 text-white rounded-lg">Manage Bookings</Link>
        <Link to="/payment" className="p-4 bg-blue-500 text-white rounded-lg">Payments</Link>
        <Link to="/residents" className="p-4 bg-yellow-500 text-white rounded-lg">Residents</Link>
        <Link to="/reports" className="p-4 bg-purple-500 text-white rounded-lg">Reports</Link>
      </div>
    </div>
  );
};

export default Dashboard;
