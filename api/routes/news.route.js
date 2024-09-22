import express from 'express';
import { getNews } from '../controllers/newsController.js';

const router = express.Router();

router.get('/', getNews);

export default router;
