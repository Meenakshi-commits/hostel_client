import React, { useEffect, useState } from 'react';
import { fetchAllUsers } from '../services/userService';

const Residents = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchAllUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Residents</h2>
      <ul className="list-disc list-inside mt-4">
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.role}</li>
        ))}
      </ul>
    </div>
  );
};

export default Residents;
