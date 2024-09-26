// Example in donationRoutes.js
import express from 'express';
import { getDonationsByBloodType } from '../controllers/donationController.js';

const router = express.Router();

// Route for searching donations by blood type
router.get('/search', getDonationsByBloodType);

export default router;
