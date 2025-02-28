import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user, showLoginMessage, setShowLoginMessage, showRegisterMessage, setShowRegisterMessage } = useContext(AuthContext);

  useEffect(() => {
    if (showLoginMessage) {
      setTimeout(() => {
        setShowLoginMessage(false);
      }, 3000); // Hide message after 3 seconds
    }
  }, [showLoginMessage, setShowLoginMessage]);

  return (
    <div className="p-6">
      {showLoginMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">You are logged in!</strong>
          <span className="block sm:inline"> What would you like to do next?</span>
        </div>
      )}
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <p>Welcome, {user?.name || "Guest"}!</p>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <Link to="/booking" className="p-4 bg-green-500 text-white rounded-lg">Manage Bookings</Link>
        <Link to="/residents" className="p-4 bg-blue-500 text-white rounded-lg">View Residents</Link>
        <Link to="/billing" className="p-4 bg-red-500 text-white rounded-lg">Manage Billing</Link>
      </div>
    </div>
  );
};

export default Dashboard;
