// donationController.js
import Donation from '../models/Donation.js';
import { errorHandler } from '../utils/error.js';

// Create a donation
export const createDonation = async (req, res, next) => {
    const newDonation = new Donation(req.body); // Assuming req.body contains the donation data
    try {
        const savedDonation = await newDonation.save();
        res.status(201).json(savedDonation);
    } catch (error) {
        next(errorHandler(500, error.message));
    }
};

// Get all donations
export const getDonationsByBloodType = async (req, res) => {
  const { bloodType } = req.query; // Get bloodType from query parameters
  try {
    const donations = await Donation.find({ bloodType }); // Query the database
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching donations', error });
  }
};

// Search donations by blood type
export const searchDonations = async (req, res, next) => {
    const { bloodType } = req.query;

    if (!bloodType) {
        return res.status(400).json({ error: 'Blood type is required' });
    }

    try {
        const donations = await Donation.find({ bloodType });
        if (donations.length === 0) {
            return res.status(404).json({ message: 'No donations found' });
        }
        res.status(200).json(donations);
    } catch (error) {
        next(errorHandler(500, error.message));
    }
};
