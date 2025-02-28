import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-5 bg-black bg-opacity-50 text-white">
      <div className="text-2xl font-bold">
        <img src="/logo.png" alt="Hostel Logo" className="h-12" />
      </div>
      <ul className="flex space-x-6 text-lg">
        <li><Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link></li>
        <li><Link to="/hostel-details" className="hover:text-yellow-300">Hostel Details</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-300">Contact Us</Link></li>
      </ul>
      <div className="space-x-4">
        <Link to="/login" className="px-4 py-2 border border-white rounded hover:bg-yellow-500">Login</Link>
        <Link to="/signup" className="px-4 py-2 border border-white rounded hover:bg-green-500">Sign Up</Link>
      </div>
    </nav>
  );
}
