import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import hostelDetails from '../data/hostelDetails'; // Import the data

const HostelDetails = () => {
  const { user } = useContext(AuthContext);

  if (!user || (user.role !== 'admin' && user.role !== 'resident')) {
    return <div>You do not have permission to view this page.</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Hostel Details</h2>
      <p className="mt-4">Founder: {hostelDetails.founder}</p>
      <p className="mt-2">Started: {hostelDetails.started}</p>
      <p className="mt-2">Contact Number: {hostelDetails.contactNumber}</p>
      <p className="mt-2">Email: {hostelDetails.email}</p>
      <p className="mt-2">Branches:</p>
      <ul className="list-disc list-inside">
        {hostelDetails.branches.map((branch, index) => (
          <li key={index}>{branch}</li>
        ))}
      </ul>
      <p className="mt-4">
        {hostelDetails.description}
      </p>
    </div>
  );
};

export default HostelDetails;
