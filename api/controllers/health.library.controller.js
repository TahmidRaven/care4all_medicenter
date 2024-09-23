import HealthLibrary from '../models/health.library.model.js';
import { errorHandler } from '../utils/error.js';

export const addHealthEntry = async (req, res, next) => {
  const { title, symptoms, precautions, treatment } = req.body;

  try {
    const newEntry = new HealthLibrary({
      title,
      symptoms: symptoms || 'no data',
      precautions: precautions || 'no data',
      treatment: treatment || 'no data',
    });

    await newEntry.save();
    res.status(201).json({
      message: "Health library entry added successfully!",
    });
  } catch (error) {
    next(error);
  }
};

export const getHealthEntries = async (req, res, next) => {
  try {
    const entries = await HealthLibrary.find();
    res.status(200).json(entries);
  } catch (error) {
    next(error);
  }

};
export const searchHealthEntries = async (req, res, next) => {
    const { query } = req.query;
    try {
      const suggestions = await HealthLibrary.find(
        { title: { $regex: `^${query}`, $options: 'i' } },
        'title'
      ).limit(5);
      
      res.status(200).json(suggestions);
    } catch (error) {
      next(error);
    }
  };

  