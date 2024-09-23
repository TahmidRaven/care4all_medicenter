// routes/appointmentRoutes.js
import express from 'express';
import { createAppointment, getAppointments } from '../controllers/appointmentController.js';

const router = express.Router();

// Create a new appointment
router.post('/appointments', createAppointment);

// Get all appointments
router.get('/appointments', getAppointments);

export default router;