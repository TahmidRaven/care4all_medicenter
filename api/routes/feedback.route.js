import express from 'express';
import { submitFeedback, getFeedback } from '../controllers/feedback.controller.js';

const router = express.Router();

router.post('/', submitFeedback);
router.get('/', getFeedback);

export default router;