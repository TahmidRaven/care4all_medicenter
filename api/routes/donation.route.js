import express from 'express';
import { submitDonation, getDonations } from '../controllers/donation.controller.js';

const router = express.Router();

router.post('/', submitDonation);
router.get('/', getDonations);

export default router;