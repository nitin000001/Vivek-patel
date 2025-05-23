import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      {/* <div className="flex justify-between items-center">
        
        <div>
          <Link to="/" className="hover:text-gray-300 text-xl font-bold">
            PropertyWallah
          </Link>
        </div>

     
        <div>
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div> */}

      {/* Navigation Links */}
      {isMenuOpen && (
        <ul className="fixed top-[60px] right-0 h-full w-2/4 bg-gray-800 z-20 p-4 space-y-4">
          <li>
            <Link
              to="/dahisar"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Dahisar
            </Link>
          </li>
          <li>
            <Link
              to="/borivali"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Borivali
            </Link>
          </li>
          <li>
            <Link
              to="/kandivali"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Kandivali
            </Link>
          </li>
          <li>
            <Link
              to="/malad"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Malad
            </Link>
          </li>
          <li>
            <Link
              to="/goregaon"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Goregoan
            </Link>
          </li>
          <li>
            <Link
              to="/andheri"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Andheri
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
