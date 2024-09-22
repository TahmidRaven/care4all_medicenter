import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png'; // Adjust the path if needed

export default function Header() {
  const {currentUser} = useSelector((state) => state.user);

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Care4All Logo" className="h-6 w-auto" />
        </Link>

        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
 
        </div>
      </nav>
    </header>
  );
}