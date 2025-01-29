import React from 'react'
import { Link } from "react-router-dom";


const BorivaliPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome to Borivali</h1>
      <p>Explore the details of Borivali.</p>
      <Link to="/borivali/details">
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          View Details
        </button>
      </Link>
    </div>
  )
}

export default BorivaliPage