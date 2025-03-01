import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const HostelDetails = () => {
  const { user } = useContext(AuthContext);

  if (!user || (user.role !== 'admin' && user.role !== 'resident')) {
    return <div>You do not have permission to view this page.</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Hostel Details</h2>
      <p className="mt-4">Founder: John Doe</p>
      <p className="mt-2">Started: January 1, 2000</p>
      <p className="mt-2">Contact Number: +1234567890</p>
      <p className="mt-2">Email: contact@hostel.com</p>
      <p className="mt-2">Branches:</p>
      <ul className="list-disc list-inside">
        <li>Branch 1: New York</li>
        <li>Branch 2: Los Angeles</li>
        <li>Branch 3: Chicago</li>
      </ul>
    </div>
  );
};

export default HostelDetails;
