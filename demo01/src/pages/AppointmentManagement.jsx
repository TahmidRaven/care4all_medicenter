import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState([]);
  const [appointment, setAppointment] = useState({
    providerId: '',
    date: '',
    time: '',
    email: ''
  });

  // Fetch appointments when the component mounts
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/api/appointments');
        setAppointments(response.data);
      } catch (error) {
        console.error('Failed to fetch appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({
      ...appointment,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/appointments', appointment);
      setAppointments([...appointments, appointment]); // Update the state with the new appointment
      setAppointment({
        providerId: '',
        date: '',
        time: '',
        email: ''
      });
    } catch (error) {
      console.error('Failed to submit appointment:', error);
    }
  };

  // Handle delete appointment
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/appointments/${id}`); // Ensure this matches your backend route
      setAppointments(appointments.filter(app => app._id !== id)); // Remove the deleted appointment from state
      console.log('Appointment deleted successfully');
    } catch (error) {
      console.error('Failed to delete appointment:', error);
    }
  };

  return (
    <div className="appointment-management p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Manage Appointments</h1>
      
      {/* Display existing appointments */}
      <div className="appointments-list mb-6">
        {appointments.length > 0 ? (
          appointments.map(appointment => (
            <div key={appointment._id} className="p-6 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4">
              <p className="text-lg font-semibold"><strong>Provider:</strong> {appointment.providerId}</p>
              <p className="text-lg"><strong>Date:</strong> {appointment.date}</p>
              <p className="text-lg"><strong>Time:</strong> {appointment.time}</p>
              <p className="text-lg"><strong>Email:</strong> {appointment.email}</p>
              <p className="text-lg"><strong>Status:</strong> <span className={`font-semibold ${appointment.status === 'Scheduled' ? 'text-green-500' : 'text-red-500'}`}>{appointment.status}</span></p>
              <button onClick={() => handleDelete(appointment._id)} className="mt-2 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-300">
                Delete Appointment
              </button>
            </div>
          ))
        ) : (
          <p>No appointments taken yet.</p>
        )}
      </div>

      {/* Appointment Submission Form */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Select Provider</label>
          <select
            name="providerId"
            value={appointment.providerId}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          >
            <option value="">Select a doctor</option>
            <option value="Doctor 1">Doctor 1</option>
            <option value="Doctor 2">Doctor 2</option>
            <option value="Doctor 3">Doctor 3</option>
            <option value="Doctor 4">Doctor 4</option>
            <option value="Doctor 5">Doctor 5</option>
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
            required
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
            required
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
            required
          />
        </div>
        
        <button type="submit" className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-300">
          Submit Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentManagement;
