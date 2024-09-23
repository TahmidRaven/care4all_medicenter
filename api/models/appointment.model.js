import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: String, default: 'Scheduled' }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;