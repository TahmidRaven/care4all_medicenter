import express from 'express';
import { bookAppointment, getAppointments } from '../controllers/appointment.controller.js';

const router = express.Router();

router.post('/', bookAppointment);
router.get('/', getAppointments);

export default router;