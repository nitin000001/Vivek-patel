import React from "react";
import { Link } from "react-router-dom";

const MaladPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome to Malad</h1>
      <p>Explore the details of Malad.</p>
      <Link to="/malad/details">
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default MaladPage;
