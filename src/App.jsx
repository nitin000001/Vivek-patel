import React from "react";
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex flex-col items-center justify-center px-4">
      {/* Header Section */}
      <header className="w-full max-w-5xl text-center py-6">
        <h1 className="text-5xl font-thin text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">Vivek Patel</h1>
        <p className="text-lg text-gray-700">Your Trusted Real-Estate Agent</p>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-5xl bg-white shadow-xl rounded-xl p-10">
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <img
              src="/image.png" // Replace with your image path
              alt="Vivek Patel"
              className="rounded-full shadow-lg w-48 h-48 object-cover mx-auto border-4 border-purple-500"
            />
          </div>

          {/* About Section */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Hi! I'm Vivek Patel, a passionate and dedicated real-estate agent with years of experience in helping clients find their dream homes and investment properties. 
              I believe in providing personalized, transparent, and professional service to ensure that every transaction is a smooth and successful experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're looking to buy, sell, or invest, I bring a deep understanding of the market and a commitment to achieving the best results for my clients.
              Let's work together to make your real estate journey a successful one!
            </p>
          </div>
        </div>

        <div className="mt-12 flex items-center w-full">
  <hr className="flex-grow border-gray-300" />
  <span className="px-4 text-xl font-semibold text-gray-800">Get in Touch</span>
  <hr className="flex-grow border-gray-300" />
</div>


        {/* Interactive Links */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="https://www.youtube.com/c/propertywallah"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            YouTube
          </a>
          <a
            href="tel:7770017997"
            className="bg-green-600 hover:bg-green-700 text-white text-center py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            Contact Me
          </a>
          <a
            href="https://www.facebook.com/propertywallah_"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 hover:bg-blue-900 text-white text-center py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/propertywallah_"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-700 text-white text-center py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            Instagram
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl text-center py-6 mt-8">
        <p className="text-gray-600 text-sm">&copy; 2025 Vivek Patel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;