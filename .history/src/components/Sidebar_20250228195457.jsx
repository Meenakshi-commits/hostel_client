import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white">
      <nav className="flex flex-col p-4">
        <Link to="/Dashboard" className="mb-2 p-2 hover:bg-gray-700 rounded">
          Dashboard
        </Link>
        
        <Link to="/Booking" className="mb-2 p-2 hover:bg-gray-700 rounded">
          Booking
        </Link>
        <Link to="/Payment" className="mb-2 p-2 hover:bg-gray-700 rounded">
          Payment
        </Link>
        <Link to="/HostelDetails" className="mb-2 p-2 hover:bg-gray-700 rounded">
          Hostel Details
        </Link>
        <Link to="/Maintenance" className="mb-2 p-2 hover:bg-gray-700 rounded">
          Maintenance
        </Link>
        <Link to="/Residents" className="mb-2 p-2 hover:bg-gray-700 rounded">
          Residents
        </Link>
        <Link to="/Billing" className="mb-2 p-2 hover:bg-gray-700 rounded">
          Billing
        </Link>
        <Link to="/Reports" className="mb-2 p-2 hover:bg-gray-700 rounded">
          Reports
        </Link>
        
      </nav>
    </div>
  );
};

export default Sidebar;
