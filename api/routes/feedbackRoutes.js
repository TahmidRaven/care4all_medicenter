// routes/feedbackRoutes.js
import express from 'express';
import { createFeedback, getFeedbacks } from '../controllers/feedbackController.js';

const router = express.Router();

// Create a new feedback
router.post('/feedbacks', createFeedback);

// Get all feedbacks
router.get('/feedbacks', getFeedbacks);

export default router;