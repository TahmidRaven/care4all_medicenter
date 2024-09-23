import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/backgroundWall.jpg'; // Adjust the path as necessary

const Donations = () => {
  const [donation, setDonation] = useState({
    name: '',
    email: '',
    bloodType: '',
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
    <div
      className="donations p-6 min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Blood Donation</h1>
        <form onSubmit={handleSubmit}>
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
            <label className="block text-gray-700">Blood Type</label>
            <select
              name="bloodType"
              value={donation.bloodType}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
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