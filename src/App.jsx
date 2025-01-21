import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CardList from "./Components/Card";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col items-center justify-center px-4">
      {/* Header Section */}
      <header className="w-full max-w-5xl text-center py-6">
        <h1 className="text-5xl font-thin text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
          Vivek Patel
        </h1>
        <p className="text-lg font-semibold text-white">@PropertyWallah</p>
      </header>

      {/* Social Icons Section */}
      <div className="w-full flex justify-center gap-4 text-2xl text-white my-4 sm:flex-row items-center">
        <a
          href="https://www.instagram.com/propertywallah_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="cursor-pointer hover:text-pink-500 transition duration-300" />
        </a>
        <a
          href="https://www.facebook.com/propertywallah_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="cursor-pointer hover:text-blue-600 transition duration-300" />
        </a>
        <a
          href="https://www.youtube.com/c/propertywallah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="cursor-pointer hover:text-red-500 transition duration-300" />
        </a>
        <a
          href="https://twitter.com/propertywallah_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="cursor-pointer hover:text-blue-400 transition duration-300" />
        </a>
      </div>

      {/* Hero Section */}
      <main className="w-full shadow-xl rounded-xl p-10">
        {/* Video Section */}
        <section className="relative w-full h-0 pb-[177.78%] md:pb-[56.25%] rounded-lg overflow-hidden mb-8">
          <section className="relative w-full h-0 pb-[177.78%] md:pb-[56.25%] rounded-lg overflow-hidden mb-8">
            <video
              className="absolute top-0 left-0 w-full h-full"
              src="https://videos.pexels.com/video-files/5540220/5540220-sd_360_640_30fps.mp4"
              controls
              autoPlay
              loop
              muted
            >
              Your browser does not support the video tag.
            </video>
            {/* Overlay */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-[5vh] md:text-[10vh] font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md text-center">
          @PropertyWallah
        </span>
      </div> */}
          </section>

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white text-[4vh] md:text-[10vh] font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md text-center">
              @PropertyWallah
            </span>
            <span>
              <p className="text-white">Featured with</p>
            </span>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-800 p-5 flex flex-col md:flex-row items-center md:items-start md:gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
            <img
              src="/image.png"
              alt="Vivek Patel"
              className="rounded-full shadow-lg w-48 h-48 object-cover mx-auto border-4 border-purple-500"
            />
          </div>

          {/* Description Section */}
          <div className="w-full md:w-2/3 text-white text-center md:text-left">
            <p className="mb-4 leading-relaxed">
              Vivek Patel @Propertywallah <br />
              No brokerage Builder Properties at Best Prices Buy | Sell | Invest
              <br />● Residential ● Commercial
            </p>
            <p className="md:text-start">
              {/* I am Vivek Patel <br /> */}
              ✔ Real Estate Expert <br />
              ✔ Channel Partner with Builders <br />
              ✔ Digital Content Creator <br />✔ Finance & Insurance Advisor
            </p>
          </div>
        </section>

        {/* Contact Section */}
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
              href="tel:7770017997"
              className="bg-green-600 hover:bg-green-700 text-white text-center py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 flex items-center justify-center"
            >
              Contact Me
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

      <div className="text-white text-3xl m-4">
        <h1>Primum Plan</h1>
      </div>

        <CardList />
      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl text-center py-6 mt-8">
        <p className="text-white text-sm">
          &copy; 2025 Vivek Patel. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
