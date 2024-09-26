import express from 'express';
import { createAppointment, getAppointments, deleteAppointment } from '../controllers/appointmentController.js';

const router = express.Router();

// Create a new appointment
router.post('/', createAppointment);

// Get all appointments
router.get('/', getAppointments);

// Delete an appointment by ID
router.delete('/:id', deleteAppointment);

export default router;
