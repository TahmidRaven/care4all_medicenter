import express from 'express';
import { addQuestion, getRandomQuestions } from '../controllers/question.controller.js';

const router = express.Router();

router.post("/add", addQuestion);
router.get("/random", getRandomQuestions);

export default router;