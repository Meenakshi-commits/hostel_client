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
    if (showRegisterMessage) {
      setTimeout(() => {
        setShowRegisterMessage(false);
      }, 3000); // Hide message after 3 seconds
    }
  }, [showLoginMessage, setShowLoginMessage, showRegisterMessage, setShowRegisterMessage]);

  return (
    <div className="p-6">
      {showLoginMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">You are logged in!</strong>
          <span className="block sm:inline"> What would you like to do next?</span>
        </div>
      )}
      {showRegisterMessage && (
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Registration successful!</strong>
          <span className="block sm:inline"> Welcome to Sunshine Hostels!</span>
        </div>
      )}

export default Dashboard;
