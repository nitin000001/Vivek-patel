import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <div>
      <section className="mt-12">
        <div className="flex items-center w-full">
          <hr className="flex-grow border-gray-300" />
          <span className="px-4 text-white text-xl font-semibold">
            Get in Touch
          </span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="https://www.youtube.com/c/propertywallah"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-700 text-white text-center py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 flex items-center justify-center gap-2"
          >
            <FaYoutube />
            YouTube
          </a>
          <a
            href="https://wa.me/917770017997"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white text-center py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 flex items-center justify-center gap-2"
          >
            <FaWhatsapp />
            Whatsapp
          </a>
          <a
            href="https://www.facebook.com/propertywallah_"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 hover:bg-blue-900 text-white text-center py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 flex items-center justify-center gap-2"
          >
            <FaFacebook />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/propertywallah_"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-700 text-white text-center py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 flex items-center justify-center gap-2"
          >
            <FaInstagram />
            Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;
