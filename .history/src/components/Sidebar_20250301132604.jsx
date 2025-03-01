import { Link } from "react-router-dom";

const Sidebar = () => {
  const handleClick = () => {
    console.log("Sidebar Clicked!");
  };

  return (
    <div 
      className="w-64 bg-gray-800 text-white h-full fixed z-50 overflow-y-auto shadow-lg"
      onClick={handleClick}
    >
      <nav className="flex flex-col p-4">
        <Link to="/Dashboard" className="mb-2 p-2 hover:bg-gray-700 rounded">
          Dashboard
        </Link>
        <Link to="/Hosteldetails" className="mb-2 p-2 hover:bg-gray-700 rounded">
          About Us
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
