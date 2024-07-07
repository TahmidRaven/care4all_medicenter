import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-gray-300">Care4All</Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/signin" className="hover:text-gray-300">Sign In</Link>
          <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
}
