import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    // use the imported image for the background via inline style or display as an img
    <div
      className="bg-cover bg-center bg-[url('https://tse2.mm.bing.net/th/id/OIP.LKA2BC1JQC2WZUw11LEJkAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3')] min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4 text-white mt-0">Welcome to Football World</h1>
      
      <p className="text-center mb-6 text-gray-300 mt-8s ml-50 mr-50">
        Football, known as soccer in some regions, has a rich history dating back
        to ancient civilizations, evolving into the modern game in 19th-century England.
        Today, it dominates global sports culture, uniting billions of fans across continents.
        At its core, football is a simple yet powerful concept: two teams competing to score goals,
        showcasing skill, teamwork, and passion on the field.
      </p>

      <div className="flex justify-center space-x-4 ">
        <Link to="/signup">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-50 mt-20">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-50 mt-20">
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;