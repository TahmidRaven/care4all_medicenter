import express from 'express';
import { adminSignin, adminSignup } from '../controllers/admin.controller.js';

const router = express.Router();

router.post("/adminsignup", adminSignup);
router.post("/adminsignin", adminSignin);

export default router;
