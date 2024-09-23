import mongoose from 'mongoose';

const healthLibrarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  symptoms: {
    type: String,
    default: 'no data',
  },
  precautions: {
    type: String,
    default: 'no data',
  },
  treatment: {
    type: String,
    default: 'no data',
  },
}, { timestamps: true });

const HealthLibrary = mongoose.model('HealthLibrary', healthLibrarySchema);

export default HealthLibrary;