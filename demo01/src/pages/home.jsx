import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/care4allwall.jpg';

export default function Home() {
  return ( 
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-3xl mx-auto p-8 bg-white bg-opacity-80 shadow-lg rounded-xl text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Welcome to Care4All</h1>
        <p className="text-xl text-gray-600 mb-10">
          Your one-stop solution for all healthcare and pet services. We are committed to providing the best care for you and your beloved pets.
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            to="/signup"
            className="bg-slate-700 text-white p-4 rounded-lg uppercase hover:opacity-95 transition-transform transform hover:scale-105"
          >
            Sign Up
          </Link>
          <Link
            to="/signin"
            className="bg-slate-700 text-white p-4 rounded-lg uppercase hover:opacity-95 transition-transform transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* New Section for Cards */}
      <div className="max-w-3xl mx-auto p-8 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Emergency Services</h3>
          <p className="text-gray-600 mb-4">
            Get immediate assistance with our 24/7 emergency services for both humans and pets.
          </p>
          <Link to="/emergency" className="bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-95">
            Learn More
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Donations</h3>
          <p className="text-gray-600 mb-4">
            Support our mission by donating to help those in need. Your contribution makes a difference!
          </p>
          <Link to="/donate" className="bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-95">
            Donate Now
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-8 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Take Quiz</h3>
          <p className="text-gray-600 mb-4">
          Challenge yourself with our engaging quizzes! Test your knowledge on various health topics and discover how much you know about maintaining a healthy lifestyle. Each quiz is designed to be both educational and fun, offering insights into key areas of well-being. Ready to get started? Take the quiz now and improve your health awareness!
          </p>
          <Link to="/take-quiz" className="bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-95">
            Take Quiz
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Health Library</h3>
          <p className="text-gray-600 mb-4">
          Explore our comprehensive Health Library to access a wide range of medical information and resources. Whether you're looking to understand symptoms, learn about treatments, or discover preventive measures, our library has you covered. Simply search for topics like "fever," "diabetes," or "allergies" to find reliable, easy-to-understand health information.
          </p>
          <Link to="/health-library" className="bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-95">
            Health Library
          </Link>
        </div>
      </div>
    </div>
  );
}
