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