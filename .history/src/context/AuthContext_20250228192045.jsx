import { createContext, useState, useEffect } from "react";
import { loginUser, registerUser } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const data = await loginUser(credentials);
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const register = async (userData) => {
    try {
      const response = await registerUser(userData);
      setUser(response.user);
      localStorage.setItem("user", JSON.stringify(response.user));
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  const storedUser = localStorage.getItem("user");

let user = null;
try {
  user = storedUser ? JSON.parse(storedUser) : null;
} catch (error) {
  console.error("Invalid JSON in localStorage:", error);
  localStorage.removeItem("user"); // Clear invalid data
}


  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
