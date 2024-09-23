import React, { useState } from 'react';
import axios from 'axios';

const Donations = () => {
  const [donation, setDonation] = useState({
    type: '',
    name: '',
    email: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonation(prevDonation => ({
      ...prevDonation,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send donation data to the server
    axios.post('/api/donations', donation)
      .then(response => {
        alert('Donation submitted successfully!');
      })
      .catch(error => {
        console.error('There was an error submitting the donation!', error);
      });
  };

  return (
    <div className="donations p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Donations</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Donation Type</label>
            <select
              name="type"
              value={donation.type}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            >
              <option value="">Select a type</option>
              <option value="blood">Blood</option>
              <option value="organ">Organ</option>
              <option value="funding">Funding</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={donation.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
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
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Details</label>
            <textarea
              name="details"
              value={donation.details}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-300">Submit Donation</button>
        </form>
      </div>
    </div>
  );
};

export default Donations;