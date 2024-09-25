// controllers/donationController.js
import Donation from '../models/Donation.js';
import { errorHandler } from '../utils/error.js';

// Create a new donation
export const createDonation = async (req, res, next) => {
  const { name, email, bloodType, details } = req.body;

  const newDonation = new Donation({
    name,
    email,
    bloodType,
    details,
  });

  try {
    await newDonation.save();
    res.status(201).json({
      message: "Donation created successfully!",
      donation: newDonation,
    });
  } catch (error) {
    next(errorHandler(400, error.message));
  }
};

// Get all donations
export const getDonations = async (req, res, next) => {
  try {
    const donations = await Donation.find();
    res.status(200).json(donations);
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};