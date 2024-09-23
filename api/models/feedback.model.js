import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  review: { type: String, required: true },
  comments: { type: String }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;