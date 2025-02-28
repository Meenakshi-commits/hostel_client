import { useState } from "react";

const Notifications = ({ message, type }) => {
  if (!message) return null;

  return (
    <div className={`fixed top-5 right-5 px-4 py-2 rounded-md text-white ${type === "error" ? "bg-red-500" : "bg-green-500"}`}>
      {message}
    </div>
  );
};

export default Notifications;
