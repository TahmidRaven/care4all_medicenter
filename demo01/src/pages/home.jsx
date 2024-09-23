import React from 'react';
import backgroundImage from '../assets/care4allwall.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return ( 
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-3xl mx-auto p-8 bg-white bg-opacity-80 shadow-lg rounded-xl text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Welcome to Care4All</h1>
        <p className="text-xl text-gray-600 mb-10">
          Your one-stop solution for all healthcare and pet services. We are committed to providing the best care for you and your beloved pets.
        </p>
        <div className="flex justify-center space-x-6">
          {/* Updated button styles */}
          <Link to="/add-question" className="text-slate-700 hover:underline">
              Add Question
          </Link>
          <Link to="/take-quiz" className="text-slate-700 hover:underline">
              Take Quiz
          </Link>
          <Link to="/add-to-health-library" className="text-slate-700 hover:underline">
              Add to Health Library
          </Link>
          <Link to="/health-library" className="text-slate-700 hover:underline">
              Health Library
          </Link>
          
          
          <button
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 transition-transform transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
