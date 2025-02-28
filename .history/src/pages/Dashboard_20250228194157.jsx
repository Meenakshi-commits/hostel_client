import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user, showLoginMessage, setShowLoginMessage } = useContext(AuthContext);

  useEffect(() => {
    if (showLoginMessage) {
      setTimeout(() => {
        setShowLoginMessage(false);
      }, 3000); // Hide message after 3 seconds
    }
  }, [showLoginMessage, setShowLoginMessage]);

  return (
    <div className="p-6">
      {showLoginMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
};

export default Dashboard;
