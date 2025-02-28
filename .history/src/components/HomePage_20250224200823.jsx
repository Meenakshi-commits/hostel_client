import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-5 bg-black bg-opacity-50">
      <div className="text-white text-2xl font-bold"> 
        <img src="/logo.png" alt="Hostel Logo" className="h-12" />
      </div>
      <ul className="flex space-x-6 text-white text-lg">
        <li><Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link></li>
        <li><Link to="/hostel-details" className="hover:text-yellow-300">Hostel Details</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-300">Contact Us</Link></li>
      </ul>
      <div className="space-x-4">
        <Link to="/login" className="px-4 py-2 text-white border border-white rounded hover:bg-yellow-500">Login</Link>
        <Link to="/signup" className="px-4 py-2 text-white border border-white rounded hover:bg-green-500">Sign Up</Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-black bg-opacity-50 p-4 flex justify-center space-x-6 text-white text-xl">
      <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
      <a href="#" className="hover:text-green-500"><FaWhatsapp /></a>
      <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
      <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
      <a href="#" className="hover:text-red-500"><FaYoutube /></a>
    </footer>
  );
}

export function HomePage() {
  return (
    <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?hostel')" }}>
      <Navbar />
      <div className="flex items-center justify-center h-full text-center text-white">
        <div className="bg-black bg-opacity-60 p-10 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Hostel</h1>
          <p className="text-lg">Comfortable, secure, and affordable hostel management at your fingertips.</p>
          <div className="mt-6">
            <Link to="/dashboard" className="px-6 py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-600">Go to Dashboard</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function Dashboard() {
  return (
    <div className="h-screen flex">
      <aside className="w-1/4 bg-gray-800 text-white p-5">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li className="p-2 bg-gray-700 rounded">Deluxe Rooms: Vacant 8, Occupied 12</li>
          <li className="p-2 bg-gray-700 rounded">Standard Rooms: Vacant 10, Occupied 20</li>
          <li className="p-2 bg-gray-700 rounded">Ultra Deluxe Rooms: Vacant 5, Occupied 15</li>
        </ul>
      </aside>
      <div className="flex-grow p-10 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Room Details</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">Deluxe Rooms</h3>
            <p>Vacant: 8</p>
            <p>Occupied: 12</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">Standard Rooms</h3>
            <p>Vacant: 10</p>
            <p>Occupied: 20</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">Ultra Deluxe Rooms</h3>
            <p>Vacant: 5</p>
            <p>Occupied: 15</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HostelDetails() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center text-3xl">Hostel Details Page</div>
      <Footer />
    </div>
  );
}

export function ContactUs() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center text-3xl">Contact Us Page</div>
      <Footer />
    </div>
  );
}

export function Login() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center text-3xl">Login Page</div>
      <Footer />
    </div>
  );
}

export function Signup() {
    return (
      <div className="h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <div className="flex-grow flex justify-center items-center">
          <form className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <input type="text" placeholder="Username" className="w-full p-2 border rounded mb-2" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" />
            <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded mb-2" />
            <select className="w-full p-2 border rounded mb-2">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input type="date" className="w-full p-2 border rounded mb-4" />
            <button className="w-full bg-green-500 text-white p-2 rounded">Sign Up</button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
export default HomePage;

