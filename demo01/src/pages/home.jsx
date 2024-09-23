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
          <h3 className="text-2xl font-semibold mb-4">Blood Donation</h3>
          <p className="text-gray-600 mb-4">
            Donate blood and save lives. Your contribution can make a big difference.
          </p>
          <Link to="/donation" className="bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-95">
            Donate
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Book an Appointment</h3>
          <p className="text-gray-600 mb-4">
            Schedule an appointment with our specialists at your convenience.
          </p>
          <Link to="/appointment" className="bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-95">
            Schedule Now
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Feedback</h3>
          <p className="text-gray-600 mb-4">
            We value your feedback. Let us know how we can improve our services.
          </p>
          <Link to="/feedback" className="bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-95">
            Feedback
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Emergency Services</h3>
          <p className="text-gray-600 mb-4">
            Get immediate assistance with our 24/7 emergency services for both humans and pets.
          </p>
          <Link to="/emergency" className="bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-95">
            Learn More
          </Link>
        </div>

      </div>
    </div>
  );
}
