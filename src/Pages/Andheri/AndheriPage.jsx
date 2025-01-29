import React from "react";
import { Link } from "react-router-dom";

const AndheriPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome to Andheri</h1>
      <p>Explore the details of Andheri.</p>
      <Link to="/andheri/details">
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default AndheriPage;
