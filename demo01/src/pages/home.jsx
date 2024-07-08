import React from 'react';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Care4All</h1>
        <p className="text-lg mb-8">
          Your one-stop solution for all healthcare and pet services. We are committed to providing the best services for you and your beloved pets.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Learn More
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
