// controllers/appointmentController.js
import Appointment from '../models/Appointment.js';

// Create a new appointment
export const createAppointment = async (req, res) => {
  const { providerId, date, time, email } = req.body;

  // Basic validation
  if (!providerId || !date || !time || !email) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all appointments
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteAppointment = async (req, res) => {
  const { id } = req.params; // Get the appointment ID from the request parameters
  try {
    const appointment = await Appointment.findByIdAndDelete(id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};