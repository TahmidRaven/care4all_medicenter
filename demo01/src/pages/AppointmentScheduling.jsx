import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/backgroundWall.jpg'; // Adjust the path as necessary

const AppointmentScheduling = () => {
  const [appointment, setAppointment] = useState({
    providerId: '',
    date: '',
    time: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment(prevAppointment => ({
      ...prevAppointment,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send appointment data to the server
    axios.post('/api/appointments', appointment)
      .then(response => {
        alert('Appointment booked successfully!');
      })
      .catch(error => {
        console.error('There was an error booking the appointment!', error);
      });
  };

  return (
    <div
      className="appointment-scheduling p-6 min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Book an Appointment</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Select Provider</label>
            <select
              name="providerId"
              value={appointment.providerId}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            >
              <option value="">Select a provider</option>
              {/* Add provider options here */}
              <option value="provider1">Provider 1</option>
              <option value="provider2">Provider 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={appointment.date}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Time</label>
            <input
              type="time"
              name="time"
              value={appointment.time}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={appointment.email}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-300">Book Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentScheduling;