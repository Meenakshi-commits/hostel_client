import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function HomePage() {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?hostel')" }}
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-5 bg-black bg-opacity-50">
        {/* Logo */}
        <div className="text-white text-2xl font-bold"> 
          <img src="/hostel.png" alt="Hostel Logo" className="h-12" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white text-lg">
          <li><Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link></li>
          <li><Link to="/hostel-details" className="hover:text-yellow-300">Hostel Details</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-300">Contact Us</Link></li>
        </ul>

        {/* Auth Buttons */}
        <div className="space-x-4">
          <Link to="/login" className="px-4 py-2 text-white border border-white rounded hover:bg-yellow-500">Login</Link>
          <Link to="/signup" className="px-4 py-2 text-white border border-white rounded hover:bg-green-500">Sign Up</Link>
        </div>
      </nav>

      {/* Centered Content */}
      <div className="flex items-center justify-center h-full text-center text-white">
        <div className="bg-black bg-opacity-60 p-10 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Hostel</h1>
          <p className="text-lg">Comfortable, secure, and affordable hostel management at your fingertips.</p>
          <div className="mt-6">
            <Link to="/dashboard" className="px-6 py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-600">Go to Dashboard</Link>
          </div>
        </div>
      </div>

      {/* Footer with Social Icons */}
      <footer className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 flex justify-center space-x-6 text-white text-xl">
        <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
        <a href="#" className="hover:text-green-500"><FaWhatsapp /></a>
        <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
        <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
        <a href="#" className="hover:text-red-500"><FaYoutube /></a>
      </footer>
    </div>
  );
}
