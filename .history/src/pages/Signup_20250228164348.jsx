import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register({ name, email, password });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Signup</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 mt-2"/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 mt-2"/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 mt-2"/>
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Register</button>
      </form>
    </div>
  );
};

export default Signup;
