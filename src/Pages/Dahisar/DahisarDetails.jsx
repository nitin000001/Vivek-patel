import React from "react";
import { Link } from "react-router-dom";


const DahisarDetails = () => {
  return (
    <div className="p-4">
        <Link to="/dahisar">
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Back
              </button>
            </Link>
      <h1 className="text-xl font-bold">Dahisar Details</h1>
      <p>This page contains more information about Dahisar.</p>
    </div>
  );
};

export default DahisarDetails;
