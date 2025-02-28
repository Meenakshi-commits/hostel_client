import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { addRoom } from "../services/roomService";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  const { token, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ roomNumber: "", type: "", price: "", status: "Available" });
  const [loading, setLoading] = useState(false);

  if (!user || user.role !== "admin") {
    return <p className="text-center mt-6 text-red-500">Access Denied: Admins Only</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addRoom(formData, token);
      alert("Room added successfully!");
      navigate("/rooms");
    } catch (error) {
      alert("Failed to add room: " + error.response?.data?.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 bg-white shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Room</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type="text" placeholder="Room Number" className="border p-2 rounded"
            value={formData.roomNumber} onChange={(e) => setFormData({ ...formData, roomNumber: e.target.value })} required />
          <select className="border p-2 rounded"
            value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} required>
            <option value="">Select Room Type</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
          </select>
          <input type="number" placeholder="Price" className="border p-2 rounded"
            value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} required />
          <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            {loading ? "Adding Room..." : "Add Room"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRoom;
