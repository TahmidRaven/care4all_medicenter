import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  comments: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});


export default mongoose.model('Feedback', feedbackSchema);
