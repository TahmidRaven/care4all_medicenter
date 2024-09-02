import express from 'express';
import { test } from '../controllers/user.controller.js';
import { signup, signin } from '../controllers/auth.controller.js';


const router = express.Router();

router.get('/', test);  

router.post("/signup", signup)
router.post("/signin", signin)

export default router;
