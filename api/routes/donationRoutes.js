import express from 'express';
import { createDonation, getDonations } from '../controllers/donationController.js';

const router = express.Router();

// Route to create a new donation
router.post('/donations', createDonation);

// Route to get all donations
router.get('/donations', getDonations);

export default router;