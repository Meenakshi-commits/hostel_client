import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full fixed"> {/* Ensure the sidebar is fixed and takes full height */}
      <nav className="flex flex-col p-4">
        <Link to="/dashboard" className="mb-2 p-2 hover:bg-gray-700 rounded">
          Dashboard
        </Link>
        <Link to="/hostel-details" className="mb-2 p-2 hover:bg-gray-700 rounded">
          Hostel Details
        </Link>
        <Link to="/rooms" className="mb-2 p-2 hover:bg-gray-700 rounded">
          Rooms
        </Link>
        <Link to="/booking" className="mb-2 p-2 hover:bg-gray-700 rounded">
          Booking
        </Link>
        <Link to="/payment" className="mb-2 p-2 hover:bg-gray-700 rounded">
          Payment
        </Link>
       
        <Link to="/maintenance" className="mb-2 p-2 hover:bg-gray-700 rounded">
          Maintenance
        </Link>
        <Link to="/residents" className="mb-2 p-2 hover:bg-gray-700 rounded">
          Residents
        </Link>
        <Link to="/billing" className="mb-2 p-2 hover:bg-gray-700 rounded">
          Billing
        </Link>
        <Link to="/reports" className="mb-2 p-2 hover:bg-gray-700 rounded">
          Reports
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
