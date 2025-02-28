import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center text-center p-5 bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Hostel Management System</h1>
        <p className="text-lg text-gray-600 mb-6">
          Manage hostel bookings, payments, maintenance, and resident details efficiently.
        </p>

        <div className="flex space-x-4">
          <Link to="/signup" className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Get Started
          </Link>
          <Link to="/login" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Login
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 shadow-lg rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-800">Room Allocation</h2>
            <p className="text-gray-600">Easily assign rooms and manage vacancies.</p>
          </div>
          <div className="bg-white p-5 shadow-lg rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-800">Billing & Payments</h2>
            <p className="text-gray-600">Track rent payments and generate invoices.</p>
          </div>
          <div className="bg-white p-5 shadow-lg rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-800">Maintenance Requests</h2>
            <p className="text-gray-600">Residents can raise maintenance requests easily.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
