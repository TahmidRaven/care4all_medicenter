import express from 'express';
import { getNearbyPlaces } from '../controllers/locationController.js';

const router = express.Router();

router.get('/nearby', getNearbyPlaces);

export default router;
