import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
    <div className="bg-white p-6 shadow-md rounded-md w-full max-w-sm">
      <h2 className="text-xl font-bold text-center">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col mt-4">
        <label className="text-gray-700">Email</label>
        <input 
          type="email" 
          placeholder="Enter email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="border p-2 rounded mt-1"
        />
  
        <label className="text-gray-700 mt-3">Password</label>
        <input 
          type="password" 
          placeholder="Enter password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="border p-2 rounded mt-1"
        />
  
        <button 
          type="submit" 
          className="mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  </div>
  );
};

export default Login;
