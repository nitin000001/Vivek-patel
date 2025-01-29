import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer className="w-full text-center py-6 mt-8 text-white bg-gray-800">
        <p>&copy; 2025 Vivek Patel. All rights reserved.</p>
        <p>
          <a
            href="https://portfolio-indol-ten-94.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-sm tracking-tight text-gray-400"
          >
            Designed & Developed by Nitin Maurya.
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
