import React from "react";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const DahisarPage = () => {
  return (
    <div className="max-w-sm cursor-pointer rounded-lg overflow-hidden shadow-lg bg-white mx-auto block">
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="relative block"
    >
      <img
        className="w-full h-48 object-cover object-center p-3"
        src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmdzfGVufDB8fDB8fHww"
       
      />
    </a>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">Dahisar</h3>
      <div className="flex items-center gap-2 mb-4">
        <p className="text-gray-600">location Icon</p>
        <p className="text-gray-600">Dahisar location</p>
      </div>
      <div className="flex justify-between items-center">
      <Link to="/dahisar/details">
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          View Details
        </button>
      </Link>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-xl"
            onClick={(e) => e.stopPropagation()} // Prevents the click event from propagating to the  
           >
            <FaWhatsapp />
          </a>
          <a
            href="#"
            className="text-blue-600 text-xl"
            onClick={(e) => e.stopPropagation()} // Prevents the click event from propagating to the card
          >
            <IoMdCall />
          </a>
        </div>
      </div>
    </div>
  
  </div>
  );
};

export default DahisarPage;



 



