import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <footer className="w-full text-center py-6 mt-8 text-white bg-gray-800">
        <p>&copy; 2025 Vivek Patel. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Layout;
