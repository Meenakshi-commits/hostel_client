import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "user" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registerUser(formData);
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (error) {
      alert("Signup failed: " + error.response?.data?.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 bg-white shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <form onSubmit={handleSignup} className="flex flex-col gap-3">
          <input type="text" placeholder="Name" className="border p-2 rounded" 
            value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
          <input type="email" placeholder="Email" className="border p-2 rounded"
            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
          <input type="password" placeholder="Password" className="border p-2 rounded"
            value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
          <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            {loading ? "Signing Up..." : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
