import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { fetchHostelDetails } from '../services/hostelService'; // Import the service

const HostelDetails = () => {
  const { user } = useContext(AuthContext);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const getHostelDetails = async () => {
      try {
        const data = await fetchHostelDetails(); // Fetch hostel details
        setDetails(data);
      } catch (error) {
        console.error("Error fetching hostel details:", error);
      }
    };

    getHostelDetails();
  }, []);

  if (!user || (user.role !== 'admin' && user.role !== 'resident')) {
    return <div>You do not have permission to view this page.</div>;
  }

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Hostel Details</h2>
      <p className="mt-4">Founder: {details.founder}</p>
      <p className="mt-2">Started: {details.started}</p>
      <p className="mt-2">Contact Number: {details.contactNumber}</p>
      <p className="mt-2">Email: {details.email}</p>
      <p className="mt-2">Branches:</p>
      <ul className="list-disc list-inside">
        {details.branches.map((branch, index) => (
          <li key={index}>{branch}</li>
        ))}
      </ul>
      <p className="mt-4">
        {details.description}
      </p>
    </div>
  );
};

export default HostelDetails;
