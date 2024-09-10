import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './authcontext'; // Import your AuthContext

export default function Header() {
  const { isAuthenticated, signOut } = useContext(AuthContext);  
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(); // Call the sign-out function
    navigate('/signin'); // Redirect to sign-in page
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-gray-300">Care4All</Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="hover:text-gray-300">Logout</button>
          ) : (
            <Link to="/signin" className="hover:text-gray-300">Sign In</Link>
          )}
        </div>
      </nav>
    </header>
  );
}
