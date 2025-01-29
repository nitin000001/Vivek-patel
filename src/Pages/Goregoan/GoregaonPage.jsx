// src/pages/Goregaon/GoregaonPage.js
import React from "react";
import { Link } from "react-router-dom";

const GoregaonPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome to Goregaon</h1>
      <p>Explore the details of Goregaon.</p>
      <Link to="/goregaon/details">
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default GoregaonPage;
