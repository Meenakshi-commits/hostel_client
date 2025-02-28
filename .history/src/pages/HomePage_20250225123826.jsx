import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Serenity Hostels</h1>
      <p className="text-lg text-gray-600">Manage your hostel efficiently.</p>
      <Link to="/dashboard" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default HomePage;
