import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  falseAnswers: {
    type: [String],
    required: true,
    validate: [arrayLimit, '{PATH} must have exactly 3 elements'],
  },
}, { timestamps: true });

function arrayLimit(val) {
  return val.length === 3;
}

const Question = mongoose.model('Question', questionSchema);

export default Question;