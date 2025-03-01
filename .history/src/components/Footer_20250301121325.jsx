import { FaFacebook, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <div className="flex justify-center space-x-4 mb-2">
        <a href="#" className="text-xl"><FaFacebook /></a>
        <a href="#" className="text-xl"><FaTwitter /></a>
        <a href="#" className="text-xl"><FaYoutube /></a>
        <a href="#" className="text-xl"><FaWhatsapp /></a>
      </div>
      <p>© {new Date().getFullYear()} Hostel Management System</p>
    </footer>
  );
};

export default Footer;
