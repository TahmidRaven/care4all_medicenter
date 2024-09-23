import express from 'express';
import { addHealthEntry, getHealthEntries, searchHealthEntries } from '../controllers/health.library.controller.js';

const router = express.Router();

router.post("/add", addHealthEntry);
router.get("/entries", getHealthEntries);
router.get("/search", searchHealthEntries);


export default router;