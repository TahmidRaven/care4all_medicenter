import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../assets/backgroundWall.jpg';

const Donations = () => {
  const [donation, setDonation] = useState({
    name: '',
    email: '',
    bloodType: '',
    details: '',
  });
  const [searchBloodType, setSearchBloodType] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonation((prevDonation) => ({
      ...prevDonation,
      [name]: value,
    }));
  };

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setIsSearching(true); // Indicate that a search is in progress
  
    try {
      const response = await fetch(`/api/donations/search?bloodType=${searchBloodType}`); // Make sure this endpoint matches your backend
      const data = await response.json();
      setSearchResults(data); // Update state with the results
    } catch (error) {
      console.error('Error fetching donations:', error);
    } finally {
      setIsSearching(false); // Reset the loading state
    }
  };
  
  const handleSearchChange = (e) => {
    setSearchBloodType(e.target.value); // Update state with selected blood type
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/donations', donation);
      alert('Donation submitted successfully!');
      // Reset the form after submission
      setDonation({
        name: '',
        email: '',
        bloodType: '',
        details: '',
      });
    } catch (error) {
      console.error('There was an error submitting the donation!', error);
    }
  };

  return (
    <div
      className="donations p-6 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Blood Donation</h1>
  
        {/* Search for blood donations */}
        <form onSubmit={handleSearch} className="mb-6">
          <div className="mb-4">
            <label className="block text-gray-700">Search for Blood Type</label>
            <select
              value={searchBloodType}
              onChange={handleSearchChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            >
              <option value="">Select a blood type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-300"
            disabled={isSearching}
          >
            {isSearching ? 'Searching...' : 'Search'}
          </button>
        </form>
  
        {/* Display Search Results */}
        {searchResults.length > 0 ? (
          <div className="flex flex-col space-y-4 mb-6">
            {searchResults.map((donor) => (
              <div 
                key={donor._id} 
                className="relative bg-blue-100 p-6 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105"
              >
                <h3 className="text-lg font-bold">{donor.name}</h3>
                <p className="text-gray-700">Blood Type: {donor.bloodType}</p>
  
                {/* Hidden info div that shows on hover */}
                <div className="absolute inset-0 bg-blue-500 text-white opacity-0 transition-opacity duration-300 hover:opacity-100 flex flex-col justify-center items-center p-4">
                  <p className="mb-2">Email: {donor.email}</p>
                  <p className="mb-2">Address: {donor.details}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No donations found for this blood type.</p>
        )}
  
        {/* Donation Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={donation.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={donation.email}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Blood Type</label>
            <select
              name="bloodType"
              value={donation.bloodType}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            >
              <option value="">Select a blood type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <textarea
              name="details"
              value={donation.details}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-300">
            Submit Donation
          </button>
        </form>
      </div>
    </div>
  );
  
  
};

export default Donations;
