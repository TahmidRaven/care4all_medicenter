import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  details: { type: String, required: true }
});

const Donation = mongoose.model('Donation', donationSchema);

export default Donation;