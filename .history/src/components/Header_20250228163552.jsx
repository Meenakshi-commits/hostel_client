import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold">
        Hostel Management
      </Link>

      <nav className="space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/booking" className="hover:underline">Bookings</Link>
        <Link to="/billing" className="hover:underline">Billing</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>

      <div className="flex items-center space-x-3">
        {user ? (
          <>
            <FaUserCircle className="text-2xl" />
            <span>{user.username}</span>
            <button 
              onClick={logout} 
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="bg-green-500 px-3 py-1 rounded hover:bg-green-700 transition">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
