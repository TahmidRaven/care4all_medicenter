import express from 'express';
import { getProfile, updateProfile } from '../controllers/profileController.js';

const router = express.Router();

router.get('/', getProfile);
router.put('/edit', updateProfile);

export default router;