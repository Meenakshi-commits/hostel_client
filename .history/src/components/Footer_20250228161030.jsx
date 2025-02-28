import { FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <p>&copy; {new Date().getFullYear()} Hostel Management System. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="text-white hover:text-blue-500 text-xl">
          <FaFacebookF />
        </a>
        <a href="#" className="text-white hover:text-blue-400 text-xl">
          <FaTwitter />
        </a>
        <a href="#" className="text-white hover:text-red-500 text-xl">
          <FaYoutube />
        </a>
        <a href="#" className="text-white hover:text-green-500 text-xl">
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
