import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
  };

  const Login = ({ handleSubmit, email, setEmail, password, setPassword }) => {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
          <form onSubmit={handleSubmit} className="flex flex-col mt-4">
            <label className="text-gray-700 font-medium">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="border p-2 rounded mt-1 w-full"
            />
  
            <label className="text-gray-700 font-medium mt-3">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="border p-2 rounded mt-1 w-full"
            />
  
            <button 
              type="submit" 
              className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };
};

export default Login;
