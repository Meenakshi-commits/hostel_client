import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <Link to="/" className="text-lg font-bold">Sunshine Hostels</Link>
      </div>
      <div>
        {user ? (
          <>
            <span className="mr-4">Welcome, {user.name}</span>