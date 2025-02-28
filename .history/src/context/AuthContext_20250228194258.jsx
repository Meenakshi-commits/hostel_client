import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const [showRegisterMessage, setShowRegisterMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Invalid JSON in localStorage:", error);
        localStorage.removeItem("user"); // Clear invalid data
      }
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const data = await loginUser(credentials);
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      setShowLoginMessage(true); // Show login message
      navigate("/dashboard"); // Navigate to dashboard after login
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const register = async (userData) => {
    try {
      const response = await registerUser(userData);
      setUser(response.user);
      localStorage.setItem("user", JSON.stringify(response.user));
      setShowRegisterMessage(true); // Show register message
      navigate("/dashboard"); // Navigate to dashboard after registration
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/"); // Navigate to home after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, showLoginMessage, setShowLoginMessage }}>
      {children}
    </AuthContext.Provider>
  );
};
