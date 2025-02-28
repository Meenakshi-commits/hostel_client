import React, { useEffect, useState } from 'react';
import { getRooms, getAvailableRooms, allocateRoom, checkOutRoom } from '../services/roomService';

const RoomAllocation = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [residentId, setResidentId] = useState('');
  const [error, setError] = useState('');
  
  // Fetch all rooms on mount
  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await getRooms();
      setRooms(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAllocate = async () => {
    if (!selectedRoom || !residentId) {
      setError('Please select a room and provide a resident ID.');
      return;
    }
    try {
      await allocateRoom(selectedRoom, residentId);
      setError('');
      fetchRooms();  // refresh room list
    } catch (err) {
      setError(err.response.data.message || 'Allocation failed');
    }
  };

  const handleCheckOut = async (roomId) => {
    // Here you might prompt for residentId if needed.
    try {
      await checkOutRoom(roomId, residentId);
      fetchRooms();
    } catch (err) {
      setError(err.response.data.message || 'Check-out failed');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Room Allocation</h1>
      {error && <p className="text-red-500">{error}</p>}
      
      <div className="mb-6">
        <h2 className="text-xl mb-2">Allocate Room</h2>
        <div className="flex flex-col gap-2">
          <select
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Select Room</option>
            {rooms.map((room) => (
              <option key={room._id} value={room._id}>
                {room.roomNumber} - {room.status}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Enter Resident ID"
            value={residentId}
            onChange={(e) => setResidentId(e.target.value)}
            className="border p-2 rounded"
          />
          <button
            onClick={handleAllocate}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Allocate
          </button>
        </div>
      </div>
      
      <div>
        <h2 className="text-xl mb-2">Room List</h2>
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Room Number</th>
              <th className="p-2 border">Capacity</th>
              <th className="p-2 border">Occupants</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room._id} className="text-center">
                <td className="p-2 border">{room.roomNumber}</td>
                <td className="p-2 border">{room.capacity}</td>
                <td className="p-2 border">
                  {room.occupants && room.occupants.length > 0
                    ? room.occupants.join(', ')
                    : 'None'}
                </td>
                <td className="p-2 border">{room.status}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleCheckOut(room._id)}
                    className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
                  >
                    Check-out
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomAllocation;
