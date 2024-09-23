import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments from the server
    axios.get('/api/appointments')
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the appointments!', error);
      });
  }, []);

  return (
    <div className="appointment-management p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Manage Appointments</h1>
      <ul className="space-y-4">
        {appointments.map(appointment => (
          <li key={appointment.id} className="p-6 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <p className="text-lg font-semibold"><strong>Provider:</strong> {appointment.providerName}</p>
            <p className="text-lg"><strong>Date:</strong> {appointment.date}</p>
            <p className="text-lg"><strong>Time:</strong> {appointment.time}</p>
            <p className="text-lg"><strong>Email:</strong> {appointment.email}</p>
            <p className="text-lg"><strong>Status:</strong> <span className={`font-semibold ${appointment.status === 'Scheduled' ? 'text-green-500' : 'text-red-500'}`}>{appointment.status}</span></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentManagement;