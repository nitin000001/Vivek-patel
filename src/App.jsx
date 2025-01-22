import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CardList from "./Components/Card";
import VideoPlayer from "./Components/VideoPlayer";
import GetInTouch from "./Components/GetInTouch";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col items-center px-4">
      {/* Hero Section */}
      <main className="w-full max-w-5xl shadow-xl rounded-xl p-6 md:p-10">
        {/* Video Section */}
        <section className="relative rounded-lg overflow-hidden mb-8">
          <div className="relative w-full aspect-w-16 aspect-h-9 md:aspect-w-16 md:aspect-h-9">
            <VideoPlayer />
          

          {/* Social Media Icons */}
          <div className="absolute top-4 left-4 flex  space-x-4   text-white">
            <a
              href="https://www.instagram.com/propertywallah_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/propertywallah_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.youtube.com/c/propertywallah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://twitter.com/propertywallah_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaXTwitter />
            </a>
           
          </div>
          </div>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-3xl md:text-6xl font-bold uppercase">Vivek Patel</h1>
            <p className="text-base md:text-lg mt-2 ">CEO OF Propertywalla</p>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-800 p-6 rounded-lg flex flex-col md:flex-row items-center gap-6">
          {/* Image Section */}
          <div className="text-center">
            <img
              src="/image.png"
              alt="Vivek Patel"
              className="rounded-full hidden sm:block shadow-lg w-48 h-48 object-cover mx-auto border-4 border-purple-500"
            />
          </div>

          {/* Description Section */}
          <div className="text-white text-center md:text-left">
            <p className="mb-4 leading-relaxed">
              Vivek Patel @Propertywallah <br />
              No brokerage Builder Properties at Best Prices Buy | Sell | Invest
              <br />● Residential ● Commercial
            </p>
            <p>
              ✔ Real Estate Expert <br />
              ✔ Channel Partner with Builders <br />
              ✔ Digital Content Creator <br />✔ Finance & Insurance Advisor
            </p>
            <GetInTouch />
          </div>
        </section>

        {/* Premium Plans Section */}
        <div className="text-white text-center text-3xl my-8 bg-orange-500 rounded-lg p-4">
          <h1>Premium Plans</h1>
        </div>

        {/* Cards Section */}
        <CardList />

        {/* Get in Touch Section */}
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
