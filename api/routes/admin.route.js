import express from 'express';
import { adminSignup, adminSignin } from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/adminsignup', adminSignup);
router.post('/adminsignin', adminSignin);

export default router;
