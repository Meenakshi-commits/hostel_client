import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-10">
      <p>© {new Date().getFullYear()} Hostel Management System. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
